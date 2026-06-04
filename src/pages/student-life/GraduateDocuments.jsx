import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

const documentTypes = [
    {
        icon: "bi-file-earmark-text-fill",
        emoji: "📄",
        title: "Official Transcript",
        description: "A detailed academic record showing all programmes, subjects, grades, and final results.",
        fee: "GHS XX",
        delivery: "3–5 working days",
    },
    {
        icon: "bi-award-fill",
        emoji: "🏅",
        title: "Certificate Replacement",
        description: "Replacement for a lost or damaged NABPTEX Certificate II.",
        fee: "GHS XX",
        delivery: "7–14 working days",
    },
    {
        icon: "bi-file-earmark-check-fill",
        emoji: "✅",
        title: "Letter of Attestation",
        description: "A signed letter confirming your studies at CCTI — useful for employment or further education.",
        fee: "GHS XX",
        delivery: "2–3 working days",
    },
    {
        icon: "bi-file-earmark-pdf-fill",
        emoji: "📋",
        title: "Course Outline",
        description: "Official course outline for the programme you completed, stamped and signed.",
        fee: "GHS XX",
        delivery: "3–5 working days",
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
        documentType: "",
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
        setForm((f) => ({ ...f, documentType: docTitle }))
        setPopupOpen(true)
    }

    const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="ds-page">

            {/* ============ HERO ============ */}
            <div className="ds-hero-wrap">
                {/* Floating nav */}
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

                {/* Hero */}
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
                    <span className="ds-stat-val">4</span>
                    <span className="ds-stat-lbl">Document Types</span>
                </div>
                <div className="ds-stat">
                    <span className="ds-stat-val">2–5</span>
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

            {/* ============ FOOTER ============ */}
            <footer className="ds-footer">
                <div className="container-xl">
                    <p className="ds-footer-text">
                        © 2024 – 2026 <span>Cape Coast Technical Institute</span>. All rights reserved. CCTI DocSwift — Online Document Request System.
                    </p>
                    <div className="ds-footer-links">
                        <a href="#" className="ds-footer-link">Privacy Policy</a>
                        <a href="#" className="ds-footer-link">Terms of Use</a>
                        <a href="mailto:capetechedu@gmail.com" className="ds-footer-link">Help</a>
                    </div>
                </div>
            </footer>

            {/* ============ POPUP FORM ============ */}
            {popupOpen && (
                <div className="grad-docs-modal-backdrop" onClick={closePopup}>
                    <div
                        className="grad-docs-modal"
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

                        <div className="grad-docs-form-card">
                            <div className="student-life-section-header">
                                <p className="eyebrow-line">Request a Document</p>
                                <h2 className="section-serif-title">Online Request Form</h2>
                            </div>

                            {submitted ? (
                                <div className="grad-docs-success">
                                    <div className="success-icon">
                                        <i className="bi bi-check-circle-fill"></i>
                                    </div>
                                    <h3>Request Received</h3>
                                    <p>
                                        Thank you, {form.fullName || "graduate"}. We will verify your
                                        details and contact you at {form.email || "your email"} with
                                        payment instructions and next steps.
                                    </p>
                                    <button
                                        type="button"
                                        className="btn-editorial btn-editorial-outline mt-3"
                                        onClick={() => {
                                            setSubmitted(false)
                                            setForm({
                                                fullName: "", indexNumber: "", email: "", phone: "",
                                                programme: "", yearCompleted: "", documentType: "",
                                                deliveryMethod: "pickup", destination: "", notes: "",
                                            })
                                        }}
                                    >
                                        Submit Another Request
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label-custom">Full Name *</label>
                                            <input required type="text" className="form-input-custom" value={form.fullName} onChange={update("fullName")} placeholder="Your full name" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label-custom">Index Number *</label>
                                            <input required type="text" className="form-input-custom" value={form.indexNumber} onChange={update("indexNumber")} placeholder="Student index number" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label-custom">Email Address *</label>
                                            <input required type="email" className="form-input-custom" value={form.email} onChange={update("email")} placeholder="your@email.com" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label-custom">Phone Number *</label>
                                            <input required type="tel" className="form-input-custom" value={form.phone} onChange={update("phone")} placeholder="+233 XX XXX XXXX" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label-custom">Programme Completed *</label>
                                            <input required type="text" className="form-input-custom" value={form.programme} onChange={update("programme")} placeholder="e.g. Electrical Engineering" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label-custom">Year Completed *</label>
                                            <input required type="text" className="form-input-custom" value={form.yearCompleted} onChange={update("yearCompleted")} placeholder="e.g. 2022" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label-custom">Document Type *</label>
                                            <select required className="form-input-custom" value={form.documentType} onChange={update("documentType")}>
                                                <option value="">Select a document...</option>
                                                {documentTypes.map((d) => (
                                                    <option key={d.title} value={d.title}>{d.title}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label-custom">Delivery Method *</label>
                                            <select required className="form-input-custom" value={form.deliveryMethod} onChange={update("deliveryMethod")}>
                                                <option value="pickup">Pick up at CCTI Records Office</option>
                                                <option value="courier">Courier delivery</option>
                                                <option value="email">Email (soft copy where applicable)</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label-custom">Delivery Address / Destination</label>
                                            <input type="text" className="form-input-custom" value={form.destination} onChange={update("destination")} placeholder="Full delivery address or institution name" />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label-custom">Additional Notes</label>
                                            <textarea className="form-input-custom" rows="3" value={form.notes} onChange={update("notes")} placeholder="Any additional information we should know..."></textarea>
                                        </div>
                                        <div className="col-12 text-center mt-2">
                                            <button type="submit" className="btn-editorial btn-editorial-solid">
                                                <i className="bi bi-send-fill me-2"></i>
                                                Submit Request
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}