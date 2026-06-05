import { useState, useEffect, useMemo } from "react"

// ── Config ────────────────────────────────────────────────────────────────────
const STORAGE_KEY = "ccti_docswift_requests"
const ADMIN_PASSWORD = "ccti@admin2026"   // ← change this before go-live

const STATUS_COLORS = {
    Pending: { bg: "rgba(245,196,0,0.12)", color: "var(--brand-gold)" },
    Processing: { bg: "rgba(30,120,255,0.12)", color: "#4a9eff" },
    Completed: { bg: "rgba(30,180,100,0.12)", color: "#3ec97a" },
    Rejected: { bg: "rgba(220,50,50,0.12)", color: "#f06060" },
}

const STATUSES = ["Pending", "Processing", "Completed", "Rejected"]

function fmt(iso) {
    if (!iso) return "—"
    const d = new Date(iso)
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
        + " · " + d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
}

// ── Status badge ──────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
    const s = STATUS_COLORS[status] || STATUS_COLORS.Pending
    return (
        <span style={{
            background: s.bg, color: s.color,
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.8px",
            textTransform: "uppercase", padding: "0.3rem 0.75rem",
            borderRadius: "999px", whiteSpace: "nowrap",
        }}>
            {status}
        </span>
    )
}

// ── Expanded row detail ───────────────────────────────────────────────────────
function RequestDetail({ req, onStatusChange, onDelete, onClose }) {
    return (
        <div className="adm-detail-backdrop" onClick={onClose}>
            <div className="adm-detail-panel" onClick={(e) => e.stopPropagation()}>
                <button className="adm-detail-close" onClick={onClose} aria-label="Close">
                    <i className="bi bi-x-lg"></i>
                </button>

                <div className="adm-detail-header">
                    <div>
                        <p className="adm-detail-ref">{req.id}</p>
                        <h2 className="adm-detail-name">{req.fullName}</h2>
                        <p className="adm-detail-meta">{req.indexNumber} · {req.programme}</p>
                    </div>
                    <StatusBadge status={req.status} />
                </div>

                <div className="adm-detail-grid">
                    {[
                        ["Email", req.email],
                        ["Phone", req.phone],
                        ["Year Started", req.yearStarted],
                        ["Year Completed", req.yearCompleted],
                        ["Delivery", req.delivery],
                        ["Address", req.destination],
                        ["Submitted", fmt(req.submittedAt)],
                        ["Total Amount", `GHS ${req.totalAmount}`],
                        ["Clearance Form", req.hasClearance ? "✓ Uploaded" : "Not uploaded"],
                    ].map(([label, value]) => (
                        <div key={label} className="adm-detail-field">
                            <span className="adm-detail-label">{label}</span>
                            <span className="adm-detail-value">{value || "—"}</span>
                        </div>
                    ))}
                </div>

                <div className="adm-detail-docs">
                    <p className="adm-detail-label">Documents Requested</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
                        {req.documents?.map((d) => (
                            <span key={d} style={{
                                background: "rgba(245,196,0,0.1)", color: "var(--brand-gold)",
                                fontSize: "0.8rem", fontWeight: 600, padding: "0.3rem 0.85rem",
                                borderRadius: "999px", border: "1px solid rgba(245,196,0,0.25)",
                            }}>{d}</span>
                        ))}
                    </div>
                </div>

                {req.notes && (
                    <div className="adm-detail-notes">
                        <p className="adm-detail-label">Notes</p>
                        <p style={{ color: "var(--brand-text-muted)", fontSize: "0.9rem", lineHeight: 1.65, marginTop: "0.4rem" }}>
                            {req.notes}
                        </p>
                    </div>
                )}

                <div className="adm-detail-actions">
                    <div>
                        <p className="adm-detail-label" style={{ marginBottom: "0.5rem" }}>Update Status</p>
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                            {STATUSES.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => onStatusChange(req.id, s)}
                                    style={{
                                        padding: "0.45rem 1rem",
                                        borderRadius: "999px",
                                        fontSize: "0.78rem",
                                        fontWeight: 700,
                                        border: req.status === s
                                            ? `1px solid ${STATUS_COLORS[s].color}`
                                            : "1px solid rgba(255,255,255,0.12)",
                                        background: req.status === s ? STATUS_COLORS[s].bg : "transparent",
                                        color: req.status === s ? STATUS_COLORS[s].color : "var(--brand-text-muted)",
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                    }}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={() => { onDelete(req.id); onClose() }}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            padding: "0.55rem 1.1rem", borderRadius: "999px",
                            border: "1px solid rgba(220,50,50,0.3)", background: "transparent",
                            color: "#f06060", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer",
                        }}
                    >
                        <i className="bi bi-trash3"></i> Delete Request
                    </button>
                </div>
            </div>
        </div>
    )
}

// ── Main component ────────────────────────────────────────────────────────────
export default function AdminDashboard() {
    const [authed, setAuthed] = useState(false)
    const [pwInput, setPwInput] = useState("")
    const [pwError, setPwError] = useState("")
    const [requests, setRequests] = useState([])
    const [search, setSearch] = useState("")
    const [filterStatus, setFilter] = useState("All")
    const [selected, setSelected] = useState(null)
    const [showConfirm, setShowConfirm] = useState(null) // request id to delete

    // Load from localStorage
    useEffect(() => {
        if (!authed) return
        const raw = localStorage.getItem(STORAGE_KEY)
        setRequests(raw ? JSON.parse(raw) : [])
    }, [authed])

    const handleLogin = (e) => {
        e.preventDefault()
        if (pwInput === ADMIN_PASSWORD) { setAuthed(true); setPwError("") }
        else { setPwError("Incorrect password. Please try again.") }
    }

    const saveAll = (updated) => {
        setRequests(updated)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    }

    const updateStatus = (id, status) => {
        saveAll(requests.map((r) => r.id === id ? { ...r, status } : r))
        if (selected?.id === id) setSelected((s) => ({ ...s, status }))
    }

    const deleteRequest = (id) => {
        saveAll(requests.filter((r) => r.id !== id))
        setShowConfirm(null)
    }

    const clearAll = () => {
        saveAll([])
        setShowConfirm(null)
    }

    // Stats
    const stats = useMemo(() => ({
        total: requests.length,
        pending: requests.filter((r) => r.status === "Pending").length,
        processing: requests.filter((r) => r.status === "Processing").length,
        completed: requests.filter((r) => r.status === "Completed").length,
        revenue: requests.filter((r) => r.status === "Completed").reduce((s, r) => s + (r.totalAmount || 0), 0),
    }), [requests])

    // Filtered list
    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase()
        return requests.filter((r) => {
            const matchStatus = filterStatus === "All" || r.status === filterStatus
            const matchSearch = !q || [r.fullName, r.indexNumber, r.email, r.programme, r.id]
                .some((v) => v?.toLowerCase().includes(q))
            return matchStatus && matchSearch
        })
    }, [requests, search, filterStatus])

    // ── Login screen ──────────────────────────────────────────────────────────
    if (!authed) {
        return (
            <div style={{
                minHeight: "100vh", background: "var(--brand-dark)",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "2rem",
            }}>
                <div style={{
                    width: "100%", maxWidth: "400px",
                    background: "var(--brand-dark-2)",
                    border: "1px solid rgba(245,196,0,0.15)",
                    borderRadius: "16px", padding: "2.5rem 2rem",
                }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <div style={{
                            width: "56px", height: "56px", borderRadius: "50%",
                            background: "rgba(245,196,0,0.12)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            margin: "0 auto 1rem",
                        }}>
                            <i className="bi bi-shield-lock-fill" style={{ fontSize: "1.5rem", color: "var(--brand-gold)" }}></i>
                        </div>
                        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.75rem", color: "#fff", margin: "0 0 0.35rem" }}>
                            DocSwift Admin
                        </h1>
                        <p style={{ color: "var(--brand-text-muted)", fontSize: "0.88rem", margin: 0 }}>
                            Cape Coast Technical Institute
                        </p>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: "1rem" }}>
                            <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "var(--brand-text-muted)", marginBottom: "0.5rem" }}>
                                Admin Password
                            </label>
                            <input
                                type="password"
                                value={pwInput}
                                onChange={(e) => setPwInput(e.target.value)}
                                placeholder="Enter password"
                                autoFocus
                                style={{
                                    width: "100%", padding: "0.85rem 1rem",
                                    background: "rgba(255,255,255,0.04)",
                                    border: pwError ? "1.5px solid #f06060" : "1.5px solid rgba(255,255,255,0.12)",
                                    borderRadius: "10px", color: "#fff",
                                    fontSize: "0.95rem", outline: "none",
                                }}
                            />
                            {pwError && (
                                <p style={{ color: "#f06060", fontSize: "0.82rem", marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                                    <i className="bi bi-exclamation-triangle-fill"></i> {pwError}
                                </p>
                            )}
                        </div>
                        <button type="submit" style={{
                            width: "100%", padding: "0.9rem",
                            background: "var(--brand-gold)", color: "#0d0d0d",
                            border: "none", borderRadius: "10px",
                            fontWeight: 700, fontSize: "0.9rem",
                            letterSpacing: "0.5px", cursor: "pointer",
                            transition: "all 0.2s ease",
                        }}>
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    // ── Dashboard ─────────────────────────────────────────────────────────────
    return (
        <div style={{ minHeight: "100vh", background: "var(--brand-dark)", padding: "2rem 0 4rem" }}>
            <div className="container-xl">

                {/* ── Header ── */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                    <div>
                        <p style={{ color: "var(--brand-gold)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", margin: "0 0 0.25rem" }}>
                            DocSwift Admin
                        </p>
                        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#fff", margin: 0, lineHeight: 1.1 }}>
                            Document Requests
                        </h1>
                    </div>
                    <button
                        onClick={() => setAuthed(false)}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            padding: "0.55rem 1.1rem", borderRadius: "999px",
                            border: "1px solid rgba(255,255,255,0.12)", background: "transparent",
                            color: "var(--brand-text-muted)", fontSize: "0.82rem", fontWeight: 600,
                            cursor: "pointer",
                        }}
                    >
                        <i className="bi bi-box-arrow-right"></i> Sign Out
                    </button>
                </div>

                {/* ── Stats cards ── */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
                    {[
                        ["Total", stats.total, "#fff", "bi-inbox-fill"],
                        ["Pending", stats.pending, "var(--brand-gold)", "bi-clock-fill"],
                        ["Processing", stats.processing, "#4a9eff", "bi-arrow-repeat"],
                        ["Completed", stats.completed, "#3ec97a", "bi-check-circle-fill"],
                        ["Revenue", `GHS ${stats.revenue}`, "var(--brand-gold)", "bi-cash-stack"],
                    ].map(([label, value, color, icon]) => (
                        <div key={label} style={{
                            background: "var(--brand-dark-2)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: "12px", padding: "1.25rem 1rem",
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                                <i className={`bi ${icon}`} style={{ color, fontSize: "1rem" }}></i>
                                <span style={{ color: "var(--brand-text-muted)", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px" }}>
                                    {label}
                                </span>
                            </div>
                            <p style={{ color, fontSize: "1.75rem", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, margin: 0, lineHeight: 1 }}>
                                {value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── Filters ── */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem", alignItems: "center" }}>
                    <div style={{ position: "relative", flex: "1", minWidth: "200px" }}>
                        <i className="bi bi-search" style={{ position: "absolute", left: "0.85rem", top: "50%", transform: "translateY(-50%)", color: "var(--brand-text-muted)", fontSize: "0.9rem" }}></i>
                        <input
                            type="text"
                            placeholder="Search by name, index number, email..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                width: "100%", padding: "0.7rem 1rem 0.7rem 2.5rem",
                                background: "var(--brand-dark-2)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "10px", color: "#fff",
                                fontSize: "0.88rem", outline: "none",
                            }}
                        />
                    </div>
                    <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                        {["All", ...STATUSES].map((s) => (
                            <button
                                key={s}
                                onClick={() => setFilter(s)}
                                style={{
                                    padding: "0.5rem 1rem", borderRadius: "999px",
                                    fontSize: "0.78rem", fontWeight: 700, cursor: "pointer",
                                    border: filterStatus === s
                                        ? `1px solid ${s === "All" ? "var(--brand-gold)" : (STATUS_COLORS[s]?.color || "var(--brand-gold)")}`
                                        : "1px solid rgba(255,255,255,0.1)",
                                    background: filterStatus === s
                                        ? (s === "All" ? "rgba(245,196,0,0.12)" : STATUS_COLORS[s]?.bg)
                                        : "transparent",
                                    color: filterStatus === s
                                        ? (s === "All" ? "var(--brand-gold)" : STATUS_COLORS[s]?.color)
                                        : "var(--brand-text-muted)",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Table ── */}
                {filtered.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "5rem 2rem", color: "var(--brand-text-muted)" }}>
                        <i className="bi bi-inbox" style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem", opacity: 0.4 }}></i>
                        <p style={{ fontSize: "1rem", margin: 0 }}>
                            {requests.length === 0 ? "No requests yet." : "No requests match your search."}
                        </p>
                    </div>
                ) : (
                    <div style={{ overflowX: "auto" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
                            <thead>
                                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                                    {["Date", "Name", "Index No.", "Programme", "Documents", "Amount", "Delivery", "Clearance", "Status", ""].map((h) => (
                                        <th key={h} style={{
                                            padding: "0.75rem 1rem", textAlign: "left",
                                            color: "var(--brand-text-muted)", fontWeight: 700,
                                            fontSize: "0.72rem", letterSpacing: "1px",
                                            textTransform: "uppercase", whiteSpace: "nowrap",
                                        }}>{h}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((req) => (
                                    <tr
                                        key={req.id}
                                        style={{
                                            borderBottom: "1px solid rgba(255,255,255,0.05)",
                                            transition: "background 0.15s ease",
                                            cursor: "pointer",
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.03)"}
                                        onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                                        onClick={() => setSelected(req)}
                                    >
                                        <td style={{ padding: "0.85rem 1rem", color: "var(--brand-text-muted)", whiteSpace: "nowrap" }}>
                                            {fmt(req.submittedAt).split(" · ")[0]}
                                        </td>
                                        <td style={{ padding: "0.85rem 1rem", color: "#fff", fontWeight: 600, whiteSpace: "nowrap" }}>
                                            {req.fullName}
                                        </td>
                                        <td style={{ padding: "0.85rem 1rem", color: "var(--brand-text-muted)", whiteSpace: "nowrap" }}>
                                            {req.indexNumber}
                                        </td>
                                        <td style={{ padding: "0.85rem 1rem", color: "var(--brand-text-muted)", maxWidth: "160px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                            {req.programme}
                                        </td>
                                        <td style={{ padding: "0.85rem 1rem", color: "var(--brand-text-muted)", maxWidth: "180px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                            {req.documents?.join(", ")}
                                        </td>
                                        <td style={{ padding: "0.85rem 1rem", color: "var(--brand-gold)", fontWeight: 700, whiteSpace: "nowrap" }}>
                                            GHS {req.totalAmount}
                                        </td>
                                        <td style={{ padding: "0.85rem 1rem", color: "var(--brand-text-muted)", whiteSpace: "nowrap" }}>
                                            {req.delivery}
                                        </td>
                                        <td style={{ padding: "0.85rem 1rem", whiteSpace: "nowrap" }}>
                                            {req.hasClearance
                                                ? <span style={{ color: "#3ec97a", fontSize: "0.78rem", fontWeight: 700 }}>✓ Yes</span>
                                                : <span style={{ color: "var(--brand-text-muted)", fontSize: "0.78rem" }}>—</span>
                                            }
                                        </td>
                                        <td style={{ padding: "0.85rem 1rem" }} onClick={(e) => e.stopPropagation()}>
                                            <select
                                                value={req.status}
                                                onChange={(e) => updateStatus(req.id, e.target.value)}
                                                style={{
                                                    background: STATUS_COLORS[req.status]?.bg || "transparent",
                                                    color: STATUS_COLORS[req.status]?.color || "#fff",
                                                    border: `1px solid ${STATUS_COLORS[req.status]?.color || "rgba(255,255,255,0.2)"}`,
                                                    borderRadius: "999px", padding: "0.3rem 0.65rem",
                                                    fontSize: "0.72rem", fontWeight: 700, cursor: "pointer",
                                                    outline: "none",
                                                }}
                                            >
                                                {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </td>
                                        <td style={{ padding: "0.85rem 1rem" }} onClick={(e) => e.stopPropagation()}>
                                            <button
                                                onClick={() => setShowConfirm(req.id)}
                                                style={{
                                                    background: "transparent", border: "none",
                                                    color: "rgba(240,96,96,0.5)", cursor: "pointer",
                                                    fontSize: "0.95rem", padding: "0.2rem 0.4rem",
                                                    transition: "color 0.2s ease",
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.color = "#f06060"}
                                                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(240,96,96,0.5)"}
                                                aria-label="Delete"
                                            >
                                                <i className="bi bi-trash3"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* ── Clear all button ── */}
                {requests.length > 0 && (
                    <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end" }}>
                        <button
                            onClick={() => setShowConfirm("all")}
                            style={{
                                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                                padding: "0.55rem 1.1rem", borderRadius: "999px",
                                border: "1px solid rgba(240,96,96,0.25)", background: "transparent",
                                color: "rgba(240,96,96,0.6)", fontSize: "0.8rem", fontWeight: 600, cursor: "pointer",
                            }}
                        >
                            <i className="bi bi-trash3"></i> Clear All Records
                        </button>
                    </div>
                )}
            </div>

            {/* ── Detail panel ── */}
            {selected && (
                <RequestDetail
                    req={selected}
                    onStatusChange={updateStatus}
                    onDelete={(id) => setShowConfirm(id)}
                    onClose={() => setSelected(null)}
                />
            )}

            {/* ── Confirm delete dialog ── */}
            {showConfirm && (
                <div style={{
                    position: "fixed", inset: 0, zIndex: 9000,
                    background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)",
                    display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem",
                }}
                    onClick={() => setShowConfirm(null)}
                >
                    <div style={{
                        background: "var(--brand-dark-2)", border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "16px", padding: "2rem", maxWidth: "420px", width: "100%",
                        textAlign: "center",
                    }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <i className="bi bi-exclamation-triangle-fill" style={{ fontSize: "2rem", color: "#f06060", marginBottom: "1rem", display: "block" }}></i>
                        <h3 style={{ color: "#fff", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "1.5rem", margin: "0 0 0.75rem" }}>
                            {showConfirm === "all" ? "Clear all records?" : "Delete this request?"}
                        </h3>
                        <p style={{ color: "var(--brand-text-muted)", fontSize: "0.9rem", margin: "0 0 1.5rem" }}>
                            {showConfirm === "all"
                                ? "This will permanently delete all document requests from this device. This cannot be undone."
                                : "This will permanently delete this request. This cannot be undone."}
                        </p>
                        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
                            <button
                                onClick={() => setShowConfirm(null)}
                                style={{
                                    padding: "0.65rem 1.5rem", borderRadius: "999px",
                                    border: "1px solid rgba(255,255,255,0.15)", background: "transparent",
                                    color: "var(--brand-text-muted)", fontSize: "0.88rem", fontWeight: 600, cursor: "pointer",
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => showConfirm === "all" ? clearAll() : deleteRequest(showConfirm)}
                                style={{
                                    padding: "0.65rem 1.5rem", borderRadius: "999px",
                                    border: "none", background: "#f06060",
                                    color: "#fff", fontSize: "0.88rem", fontWeight: 700, cursor: "pointer",
                                }}
                            >
                                {showConfirm === "all" ? "Clear All" : "Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
