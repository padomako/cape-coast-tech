import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

const documentTypes = [
    {
        icon: "bi-file-earmark-text-fill",
        emoji: "📄",
        title: "Official Transcript",
        description: "A detailed academic record showing all programmes, subjects, grades, and final results.",
        fee: "GHS XX",
        delivery: "1–3 working days",
    },
    {
        icon: "bi-award-fill",
        emoji: "🏅",
        title: "Certificate",
        description: "Replacement for a lost or damaged NABPTEX Certificate II.",
        fee: "GHS XX",
        delivery: "1–2 working days",
    },
    {
        icon: "bi-file-earmark-check-fill",
        emoji: "✅",
        title: "Testimonial",
        description: "A signed letter confirming your studies at CCTI — useful for employment or further education.",
        fee: "GHS XX",
        delivery: "2–3 working days",
    },
    {
        icon: "bi-file-earmark-pdf-fill",
        emoji: "📋",
        title: "Letter of Attestation",
        description: "Official course outline for the programme you completed, stamped and signed.",
        fee: "GHS XX",
        delivery: "1–2 working days",
    },
    {
        icon: "bi-file-earmark-pdf-fill",
        emoji: "📋",
        title: "English Profeciency",
        description: "Official course outline for the programme you completed, stamped and signed.",
        fee: "GHS XX",
        delivery: "2–3 working days",
    },
    {
        icon: "bi-file-earmark-pdf-fill",
        emoji: "📋",
        title: "Letter of Recommendation",
        description: "Official course outline for the programme you completed, stamped and signed.",
        fee: "GHS XX",
        delivery: "2–3 working days",
    },
]

export default function GraduateDocuments() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [submitted, setSubmitted] = useState(false)
    const [popupOpen, setPopupOpen] = useState(false)
    const [form, setForm] = useState({
        fullName: "",
        indexNumber: "",
        email: "",
        phone: "",
        programme: "",
        yearCompleted: "",
        documentType: [],
        deliveryMethod: "pickup",
        destination: "",
        notes: "",
    })

    useEffect(() => {
        if (searchParams.get("open") === "request") setPopupOpen(true)
    }, [searchParams])

    useEffect(() => {
        document.body.style.overflow = popupOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [popupOpen])

    const closePopup = () => {
        setPopupOpen(false)
        if (searchParams.get("open")) {
            searchParams.delete("open")
            setSearchParams(searchParams, { replace: true })
        }
    }

    const openPopupFor = (docTitle) => {
        setForm((f) => ({ ...f, documentType: [docTitle] }))
        setPopupOpen(true)
    }

    const toggleDocument = (docTitle) => {
        setForm(f => {
            const already = f.documentType.includes(docTitle)
            return {
                ...f,
                documentType: already
                    ? f.documentType.filter(t => t !== docTitle)
                    : [...f.documentType, docTitle]
            }
        })
    }

    const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.documentType.length === 0) {
            alert("Please select at least one document type.")
            return
        }
        setSubmitted(true)
    }

    return (
        <div className="ds-page">

            {/* ============ HERO ============ */}
            <div className="ds-hero-wrap">
                <nav className="ds-nav">
                    <div className="ds-nav-brand">
                        <div className="ds-nav-logo">CC</div>
                        <span className="ds-nav-name">CCTI <span>DocSwift</span></span>
                    </div>
                    <div className="ds-nav-links">
                        <Link to="/student-login" className="ds-nav-link ds-nav-outline">Login</Link>
                        <Link to="/student-login" className="ds-nav-link ds-nav-solid">Register</Link>
                    </div>
                </nav>

                <section className="ds-hero">
                    <div className="ds-hero-bg" />
                    <div className="ds-hero-overlay" />
                    <div className="ds-hero-content container-xl">
                        <div className="ds-hero-left">
                            <h1 className="ds-hero-title">
                                About <span>DocSwift</span>
                            </h1>
                            <p className="ds-hero-desc">
                                DocSwift is an online document request and management service
                                for current students and alumni of Cape Coast Technical Institute.
                                Request your transcripts, certificates, and official letters —
                                from anywhere, anytime.
                            </p>
                            <div className="ds-hero-btns">
                                <button
                                    className="ds-btn ds-btn-primary"
                                    onClick={() => setPopupOpen(true)}
                                >
                                    Request Document
                                </button>
                                <a href="#how-it-works" className="ds-btn ds-btn-ghost">
                                    Getting Started
                                </a>
                                <a href="mailto:capetechedu@gmail.com" className="ds-btn ds-btn-ghost">
                                    Contact Support
                                </a>
                            </div>
                        </div>
                        <div className="ds-hero-card">
                            <div className="ds-hero-card-icon">
                                <i className="bi bi-file-earmark-text-fill"></i>
                            </div>
                            <div className="ds-hero-card-name">
                                CCTI <span>DocSwift</span>
                            </div>
                            <div className="ds-hero-card-sub">Online Document System</div>
                        </div>
                    </div>
                </section>
            </div>

            {/* ============ STATS ============ */}
            <div className="ds-stats">
                <div className="ds-stat">
                    <span className="ds-stat-val">6</span>
                    <span className="ds-stat-lbl">Document Types</span>
                </div>
                <div className="ds-stat">
                    <span className="ds-stat-val">1–3</span>
                    <span className="ds-stat-lbl">Working Days</span>
                </div>
                <div className="ds-stat">
                    <span className="ds-stat-val">100%</span>
                    <span className="ds-stat-lbl">Online Process</span>
                </div>
                <div className="ds-stat">
                    <span className="ds-stat-val">24/7</span>
                    <span className="ds-stat-lbl">Available</span>
                </div>
            </div>

            {/* ============ FEATURES ============ */}
            <section className="ds-features">
                <div className="container-xl">
                    <p className="ds-sec-eye">Why DocSwift</p>
                    <h2 className="ds-sec-title">Everything you need, online</h2>
                    <div className="ds-feat-grid">
                        <div className="ds-feat">
                            <div className="ds-feat-ico">🏠</div>
                            <h4>Request from Home</h4>
                            <p>Apply for your academic documents from anywhere — no campus visit required.</p>
                        </div>
                        <div className="ds-feat">
                            <div className="ds-feat-ico">📦</div>
                            <h4>Track Your Request</h4>
                            <p>Monitor the progress of your document request in real time from submission to delivery.</p>
                        </div>
                        <div className="ds-feat">
                            <div className="ds-feat-ico">🚚</div>
                            <h4>Flexible Delivery</h4>
                            <p>Choose campus pickup, courier delivery, or email for applicable documents.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ HOW IT WORKS ============ */}
            <section className="ds-how" id="how-it-works">
                <div className="container-xl">
                    <p className="ds-sec-eye">Simple Process</p>
                    <h2 className="ds-sec-title">How it works</h2>
                    <div className="ds-steps">
                        {[
                            { n: "01", t: "Submit Request", d: "Fill out the online form with your personal and academic details." },
                            { n: "02", t: "Pay Processing Fee", d: "Complete payment via bank or mobile money." },
                            { n: "03", t: "Verification", d: "Records office verifies your details and prepares your documents." },
                            { n: "04", t: "Receive Documents", d: "Collect in person or receive by courier or email." },
                        ].map((s) => (
                            <div className="ds-step" key={s.n}>
                                <div className="ds-step-num">{s.n}</div>
                                <div className="ds-step-t">{s.t}</div>
                                <div className="ds-step-d">{s.d}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ DOCUMENT TYPES ============ */}
            <section className="ds-docs">
                <div className="container-xl">
                    <p className="ds-sec-eye">Available Documents</p>
                    <h2 className="ds-sec-title">What can you request?</h2>
                    <div className="ds-docs-grid">
                        {documentTypes.map((doc) => (
                            <div
                                className="ds-doc"
                                key={doc.title}
                                onClick={() => openPopupFor(doc.title)}
                            >
                                <div className="ds-doc-ico">{doc.emoji}</div>
                                <div className="ds-doc-info">
                                    <div className="ds-doc-name">{doc.title}</div>
                                    <span className="ds-doc-meta">{doc.delivery}</span>
                                </div>
                                <span className="ds-doc-fee">{doc.fee}</span>
                                <span className="ds-doc-arr">→</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ CTA ============ */}
            <section className="ds-cta">
                <div className="container-xl">
                    <h2 className="ds-cta-title">Ready to request your documents?</h2>
                    <p className="ds-cta-sub">Register or log in to get started with your document request today.</p>
                    <div className="ds-cta-btns">
                        <button
                            className="ds-btn ds-btn-primary"
                            onClick={() => setPopupOpen(true)}
                        >
                            Get Started →
                        </button>
                        <a href="mailto:capetechedu@gmail.com" className="ds-btn ds-btn-ghost">
                            Contact Support
                        </a>
                    </div>
                </div>
            </section>

            {/* ============ POPUP FORM ============ */}
            {popupOpen && (
                <div className="grad-docs-modal-backdrop" onClick={closePopup}>
                    <div
                        className="grad-docs-modal ds-modal"
                        role="dialog"
                        aria-modal="true"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="grad-docs-modal-close"
                            onClick={closePopup}
                            aria-label="Close"
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>

                        {submitted ? (
                            <div className="ds-form-success">
                                <div className="ds-success-icon">
                                    <i className="bi bi-check-circle-fill"></i>
                                </div>
                                <h3>Request Received</h3>
                                <p>
                                    Thank you, <strong>{form.fullName || "graduate"}</strong>. We will
                                    verify your details and contact you at <strong>{form.email || "your email"}</strong> with
                                    payment instructions and next steps.
                                </p>
                                <button
                                    type="button"
                                    className="ds-btn ds-btn-primary"
                                    onClick={() => {
                                        setSubmitted(false)
                                        setForm({
                                            fullName: "", indexNumber: "", email: "", phone: "",
                                            programme: "", yearCompleted: "", documentType: [],
                                            deliveryMethod: "pickup", destination: "", notes: "",
                                        })
                                    }}
                                >
                                    Submit Another Request
                                </button>
                            </div>
                        ) : (
                            <div className="ds-form-wrap">

                                {/* Left panel */}
                                <div className="ds-form-left">
                                    <div className="ds-form-left-top">
                                        <div className="ds-form-brand">
                                            <div className="ds-nav-logo" style={{ width: "36px", height: "36px", fontSize: "0.65rem" }}>CC</div>
                                            <span className="ds-nav-name">CCTI <span>DocSwift</span></span>
                                        </div>
                                        <h2 className="ds-form-title">Document<br />Request Form</h2>
                                        <p className="ds-form-subtitle">Fill out the form to request your official academic documents. We'll contact you with payment instructions.</p>
                                    </div>

                                    {/* Document selector — multi-select */}
                                    <div className="ds-doc-selector">
                                        <p className="ds-doc-selector-label">
                                            Select Document(s)
                                            {form.documentType.length > 0 && (
                                                <span className="ds-doc-selected-count">
                                                    {form.documentType.length} selected
                                                </span>
                                            )}
                                        </p>
                                        <div className="ds-doc-options">
                                            {documentTypes.map((doc) => (
                                                <div
                                                    key={doc.title}
                                                    className={`ds-doc-option ${form.documentType.includes(doc.title) ? "selected" : ""}`}
                                                    onClick={() => toggleDocument(doc.title)}
                                                >
                                                    <span className="ds-doc-option-emoji">{doc.emoji}</span>
                                                    <div className="ds-doc-option-info">
                                                        <span className="ds-doc-option-name">{doc.title}</span>
                                                        <span className="ds-doc-option-fee">{doc.fee} · {doc.delivery}</span>
                                                    </div>
                                                    <span className="ds-doc-option-check">
                                                        {form.documentType.includes(doc.title) ? "✓" : ""}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="ds-form-contact">
                                        <p className="ds-form-contact-label">Need help?</p>
                                        <a href="mailto:capetechedu@gmail.com" className="ds-form-contact-link">
                                            <i className="bi bi-envelope-fill"></i> capetechedu@gmail.com
                                        </a>
                                        <a href="tel:+233246775194" className="ds-form-contact-link">
                                            <i className="bi bi-whatsapp"></i> 0246775194
                                        </a>
                                    </div>
                                </div>

                                {/* Right panel */}
                                <div className="ds-form-right">
                                    <form onSubmit={handleSubmit}>

                                        <div className="ds-form-section-title">Personal Information</div>
                                        <div className="ds-form-grid">
                                            <div className="ds-field">
                                                <label className="ds-label">Full Name <span>*</span></label>
                                                <input required type="text" className="ds-input" value={form.fullName} onChange={update("fullName")} placeholder="Your full legal name" />
                                            </div>
                                            <div className="ds-field">
                                                <label className="ds-label">Index Number <span>*</span></label>
                                                <input required type="text" className="ds-input" value={form.indexNumber} onChange={update("indexNumber")} placeholder="Student index number" />
                                            </div>
                                            <div className="ds-field">
                                                <label className="ds-label">Email Address <span>*</span></label>
                                                <input required type="email" className="ds-input" value={form.email} onChange={update("email")} placeholder="your@email.com" />
                                            </div>
                                            <div className="ds-field">
                                                <label className="ds-label">Phone Number <span>*</span></label>
                                                <input required type="tel" className="ds-input" value={form.phone} onChange={update("phone")} placeholder="+233 XX XXX XXXX" />
                                            </div>
                                        </div>

                                        <div className="ds-form-section-title">Academic Details</div>
                                        <div className="ds-form-grid">
                                            <div className="ds-field">
                                                <label className="ds-label">Programme Completed <span>*</span></label>
                                                <input required type="text" className="ds-input" value={form.programme} onChange={update("programme")} placeholder="e.g. Electrical Engineering" />
                                            </div>
                                            <div className="ds-field">
                                                <label className="ds-label">Year Completed <span>*</span></label>
                                                <input required type="text" className="ds-input" value={form.yearCompleted} onChange={update("yearCompleted")} placeholder="e.g. 2022" />
                                            </div>
                                        </div>

                                        <div className="ds-form-section-title">Delivery Preferences</div>
                                        <div className="ds-delivery-options">
                                            {[
                                                { val: "pickup", label: "Campus Pickup", desc: "Collect at CCTI Records Office", icon: "🏫" },
                                                { val: "courier", label: "Courier Delivery", desc: "Delivered to your address", icon: "🚚" },
                                                { val: "email", label: "Email (Soft Copy)", desc: "Where applicable", icon: "📧" },
                                            ].map((opt) => (
                                                <div
                                                    key={opt.val}
                                                    className={`ds-delivery-opt ${form.deliveryMethod === opt.val ? "selected" : ""}`}
                                                    onClick={() => setForm(f => ({ ...f, deliveryMethod: opt.val }))}
                                                >
                                                    <span className="ds-delivery-icon">{opt.icon}</span>
                                                    <div>
                                                        <span className="ds-delivery-label">{opt.label}</span>
                                                        <span className="ds-delivery-desc">{opt.desc}</span>
                                                    </div>
                                                    <span className="ds-delivery-check">
                                                        {form.deliveryMethod === opt.val ? "✓" : ""}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {form.deliveryMethod === "courier" && (
                                            <div className="ds-field" style={{ marginTop: "1rem" }}>
                                                <label className="ds-label">Delivery Address</label>
                                                <input type="text" className="ds-input" value={form.destination} onChange={update("destination")} placeholder="Full delivery address" />
                                            </div>
                                        )}

                                        <div className="ds-field" style={{ marginTop: "1rem" }}>
                                            <label className="ds-label">Additional Notes</label>
                                            <textarea className="ds-input ds-textarea" rows="3" value={form.notes} onChange={update("notes")} placeholder="Any additional information..."></textarea>
                                        </div>

                                        <button type="submit" className="ds-submit-btn">
                                            <i className="bi bi-send-fill"></i>
                                            Submit Request
                                            {form.documentType.length > 0 && (
                                                <span className="ds-submit-count">
                                                    ({form.documentType.length} doc{form.documentType.length > 1 ? "s" : ""})
                                                </span>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </div>
    )
}