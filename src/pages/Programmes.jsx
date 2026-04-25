import { useState, useMemo, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { programmes, tradeAreaFilters } from "../data/programmes"

export default function Programmes() {
    const [searchParams] = useSearchParams()
    const initialTrade = searchParams.get("trade") || "all"

    const [mode, setMode] = useState("regular") // regular | weekend
    const [search, setSearch] = useState("")
    const [tradeFilter, setTradeFilter] = useState(initialTrade)
    const [tradeOpen, setTradeOpen] = useState(false)
    const [selectedSlug, setSelectedSlug] = useState(null)

    const selected = useMemo(
        () => programmes.find((p) => p.slug === selectedSlug),
        [selectedSlug]
    )

    const filtered = useMemo(() => {
        return programmes.filter((p) => {
            if (tradeFilter !== "all" && p.trade !== tradeFilter) return false
            if (search) {
                const q = search.toLowerCase()
                if (!p.title.toLowerCase().includes(q) && !p.tradeArea.toLowerCase().includes(q)) {
                    return false
                }
            }
            return true
        })
    }, [search, tradeFilter])

    // Lock scroll when detail panel open
    useEffect(() => {
        document.body.style.overflow = selected ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [selected])

    // Escape closes detail panel
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setSelectedSlug(null)
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [])

    const currentTradeLabel =
        tradeAreaFilters.find((t) => t.value === tradeFilter)?.label || "Trade area"

    return (
        <div className="programmes-page">

            {/* ============ SECTION 1 — HERO ============ */}
            <section className="programmes-hero">
                <img
                    src="/images/DJI_20260414220551_0662_D.jpg"
                    alt="Aerial view of CapeTech campus"
                    className="programmes-hero-image"
                />
                <div className="programmes-hero-overlay">
                    <div className="container-xl">
                        <div className="programmes-hero-content">
                            <h1 className="programmes-hero-title">
                                Explore programs<br />available at CapeTech
                            </h1>
                            <p className="programmes-hero-desc">
                                Browse all programmes and their respective subjects and learn more
                                about career opportunities for each programme. We also offer
                                extensive hands-on weekend Competency-Based Training programs.
                                Open to everyone, these sessions focus on practical skills
                                designed to empower artisans and individuals ready to build
                                real-world expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 2 — FILTER BAR ============ */}
            <section className="programmes-filter-bar">
                <div className="container-xl">
                    <div className="filter-bar-inner">

                        {/* Mode toggle */}
                        <div className="mode-toggle">
                            <button
                                type="button"
                                className={`mode-pill ${mode === "regular" ? "active" : ""}`}
                                onClick={() => setMode("regular")}
                            >
                                Regular
                                {mode === "regular" && <i className="bi bi-check2 ms-2"></i>}
                            </button>
                            <button
                                type="button"
                                className="mode-pill disabled"
                                disabled
                                title="Coming soon"
                            >
                                Weekend
                            </button>
                        </div>

                        {/* Search */}
                        <div className="search-pill">
                            <input
                                type="text"
                                placeholder="Enter keyword"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <i className="bi bi-search"></i>
                        </div>

                        {/* Trade area filter */}
                        <div className="trade-filter">
                            <button
                                type="button"
                                className="trade-filter-btn"
                                onClick={() => setTradeOpen(!tradeOpen)}
                            >
                                {currentTradeLabel}
                                <i className={`bi bi-chevron-down ms-2 ${tradeOpen ? "rot" : ""}`}></i>
                            </button>
                            {tradeOpen && (
                                <div className="trade-filter-menu">
                                    {tradeAreaFilters.map((t) => (
                                        <button
                                            key={t.value}
                                            type="button"
                                            className={tradeFilter === t.value ? "active" : ""}
                                            onClick={() => {
                                                setTradeFilter(t.value)
                                                setTradeOpen(false)
                                            }}
                                        >
                                            {t.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 3 — TABLE ============ */}
            <section className="programmes-table-section">
                <div className="container-xl">

                    <div className="programmes-table">
                        <div className="programmes-table-head">
                            <div className="col-name">Name</div>
                            <div className="col-cert">Certification</div>
                        </div>

                        {filtered.length === 0 ? (
                            <div className="programmes-empty">
                                No programmes match your filters.
                            </div>
                        ) : (
                            filtered.map((p) => (
                                <button
                                    key={p.slug}
                                    type="button"
                                    className="programme-row"
                                    onClick={() => setSelectedSlug(p.slug)}
                                >
                                    <div className="col-name">
                                        <span className="programme-name">{p.title}</span>
                                    </div>
                                    <div className="col-cert">
                                        <span className="programme-cert">{p.certification}</span>
                                    </div>
                                </button>
                            ))
                        )}
                    </div>

                    <div className="programmes-cta">
                        <Link to="/admissions" className="btn-editorial btn-editorial-solid">
                            Click to Begin Registration
                            <i className="bi bi-arrow-right ms-2"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============ DETAIL PANEL ============ */}
            {selected && (
                <ProgrammeDetailPanel
                    programme={selected}
                    onClose={() => setSelectedSlug(null)}
                />
            )}
        </div>
    )
}

function ProgrammeDetailPanel({ programme, onClose }) {
    return (
        <div className="programme-panel-backdrop" onClick={onClose}>
            <aside
                className="programme-panel"
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className="programme-panel-close"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <i className="bi bi-x-lg"></i>
                </button>

                {/* Panel hero */}
                <div className="programme-panel-hero">
                    <img
                        src="/images/ELECTRONICS%20PRACTICAL%20SESSION/5%20%283%29.jpg"
                        alt={programme.title}
                    />
                    <div className="programme-panel-hero-overlay">
                        <p className="eyebrow">{programme.tradeArea}</p>
                        <h2>{programme.title}</h2>
                    </div>
                </div>

                <div className="programme-panel-body">

                    <div className="panel-meta-row">
                        <div>
                            <span className="meta-label">Certification</span>
                            <span className="meta-value">{programme.certification}</span>
                        </div>
                        <div>
                            <span className="meta-label">Duration</span>
                            <span className="meta-value">3 Years (CBT)</span>
                        </div>
                        <div>
                            <span className="meta-label">Mode</span>
                            <span className="meta-value">Regular</span>
                        </div>
                    </div>

                    <section className="panel-section">
                        <h3>Programme Overview</h3>
                        <p>{programme.description}</p>
                    </section>

                    <section className="panel-section">
                        <h3>Career Prospects</h3>
                        <ul className="panel-chip-list">
                            {programme.careers.map((c) => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="panel-section panel-split">
                        <div>
                            <h3>Core Subjects</h3>
                            <ul className="panel-list">
                                {programme.coreSubjects.map((s) => (
                                    <li key={s}>
                                        <i className="bi bi-dot"></i>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Elective Subjects</h3>
                            <ul className="panel-list">
                                {programme.electiveSubjects.map((s) => (
                                    <li key={s}>
                                        <i className="bi bi-dot"></i>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="panel-section panel-hod">
                        <h3>Message from the Head of Department</h3>
                        <div className="hod-row">
                            <div className="hod-avatar">
                                <i className="bi bi-person-circle"></i>
                            </div>
                            <div className="hod-text">
                                <p className="hod-message">&ldquo;{programme.hod.message}&rdquo;</p>
                                <p className="hod-name">{programme.hod.name}</p>
                                <p className="hod-title">{programme.hod.title}</p>
                            </div>
                        </div>
                    </section>

                    <div className="panel-cta">
                        <Link to="/admissions" className="btn-editorial btn-editorial-solid">
                            Click to Begin Registration
                            <i className="bi bi-arrow-right ms-2"></i>
                        </Link>
                    </div>
                </div>
            </aside>
        </div>
    )
}
