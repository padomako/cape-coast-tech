import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

const documentTypes = [
    {
        icon: "bi-file-earmark-text-fill",
        emoji: "📄",
        title: "Official Transcript",
        description: "A detailed academic record showing all programmes, subjects, grades, and final results.",
        fee: 50,
        delivery: "1–3 working days",
    },
    {
        icon: "bi-award-fill",
        emoji: "🏅",
        title: "Certificate",
        description: "Replacement for a lost or damaged NABPTEX Certificate II.",
        fee: 80,
        delivery: "1–2 working days",
    },
    {
        icon: "bi-file-earmark-check-fill",
        emoji: "✅",
        title: "Testimonial",
        description: "A signed letter confirming your studies at CCTI.",
        fee: 30,
        delivery: "2–3 working days",
    },
    {
        icon: "bi-file-earmark-pdf-fill",
        emoji: "📋",
        title: "Letter of Attestation",
        description: "Official attestation letter, stamped and signed.",
        fee: 30,
        delivery: "1–2 working days",
    },
    {
        icon: "bi-translate",
        emoji: "🔤",
        title: "English Proficiency",
        description: "Official English proficiency letter for your programme.",
        fee: 40,
        delivery: "2–3 working days",
    },
    {
        icon: "bi-person-check-fill",
        emoji: "📝",
        title: "Letter of Recommendation",
        description: "Official letter of recommendation from the institution.",
        fee: 40,
        delivery: "2–3 working days",
    },
]

const STEPS = ["form", "payment", "success"]

export default function GraduateDocuments() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [popupOpen, setPopupOpen] = useState(false)
    const [step, setStep] = useState("form") // form | payment | success
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
        setStep("form")
        if (searchParams.get("open")) {
            searchParams.delete("open")
            setSearchParams(searchParams, { replace: true })
        }
    }

    const openPopupFor = (docTitle) => {
        setForm((f) => ({ ...f, documentType: [docTitle] }))
        setStep("form")
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
    const COURIER_FEE = 20
    // Calculate total amount
    const totalAmount = form.documentType.reduce((sum, title) => {
        const doc = documentTypes.find(d => d.title === title)
        return sum + (doc ? doc.fee : 0)
    }, 0) + (form.deliveryMethod === "courier" ? COURIER_FEE : 0)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.documentType.length === 0) {
            alert("Please select at least one document type.")
            return
        }
        setStep("payment")
    }

    const handlePaymentDone = () => {
        setStep("success")
    }

    const resetForm = () => {
        setStep("form")
        setForm({
            fullName: "", indexNumber: "", email: "", phone: "",
            programme: "", yearCompleted: "", documentType: [],
            deliveryMethod: "pickup", destination: "", notes: "",
        })
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
                                <button className="ds-btn ds-btn-primary" onClick={() => { setStep("form"); setPopupOpen(true) }}>
                                    Request Document
                                </button>
                                <a href="#how-it-works" className="ds-btn ds-btn-ghost">Getting Started</a>
                                <a href="mailto:capetechedu@gmail.com" className="ds-btn ds-btn-ghost">Contact Support</a>
                            </div>
                        </div>
                        <div className="ds-hero-card">
                            <div className="ds-hero-card-icon">
                                <i className="bi bi-file-earmark-text-fill"></i>
                            </div>
                            <div className="ds-hero-card-name">CCTI <span>DocSwift</span></div>
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
                            <p>Choose campus pickup or courier delivery. All documents are emailed to you automatically.</p>
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
                            { n: "04", t: "Receive Documents", d: "Collect in person or receive by courier. Soft copy sent to your email." },
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
                            <div className="ds-doc" key={doc.title} onClick={() => openPopupFor(doc.title)}>
                                <div className="ds-doc-ico">{doc.emoji}</div>
                                <div className="ds-doc-info">
                                    <div className="ds-doc-name">{doc.title}</div>
                                    <span className="ds-doc-meta">{doc.delivery}</span>
                                </div>
                                <span className="ds-doc-fee">GHS {doc.fee}</span>
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
                        <button className="ds-btn ds-btn-primary" onClick={() => { setStep("form"); setPopupOpen(true) }}>
                            Get Started →
                        </button>
                        <a href="mailto:capetechedu@gmail.com" className="ds-btn ds-btn-ghost">Contact Support</a>
                    </div>
                </div>
            </section>

            {/* ============ POPUP ============ */}
            {popupOpen && (
                <div className="grad-docs-modal-backdrop" onClick={closePopup}>
                    <div
                        className="grad-docs-modal ds-modal"
                        role="dialog"
                        aria-modal="true"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button type="button" className="grad-docs-modal-close" onClick={closePopup} aria-label="Close">
                            <i className="bi bi-x-lg"></i>
                        </button>

                        {/* ---- STEP: FORM ---- */}
                        {step === "form" && (
                            <div className="ds-form-wrap">

                                {/* Left panel */}
                                <div className="ds-form-left">
                                    <div className="ds-form-left-top">
                                        <div className="ds-form-brand">
                                            <div className="ds-nav-logo" style={{ width: "36px", height: "36px", fontSize: "0.65rem" }}>CC</div>
                                            <span className="ds-nav-name">CCTI <span>DocSwift</span></span>
                                        </div>
                                        <h2 className="ds-form-title">Document<br />Request Form</h2>
                                        <p className="ds-form-subtitle">Select one or more documents, fill in your details, and proceed to payment.</p>
                                    </div>

                                    {/* Document selector */}
                                    <div className="ds-doc-selector">
                                        <p className="ds-doc-selector-label">
                                            Select Document(s)
                                            {form.documentType.length > 0 && (
                                                <span className="ds-doc-selected-count">{form.documentType.length} selected</span>
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
                                                        <span className="ds-doc-option-fee">GHS {doc.fee} · {doc.delivery}</span>
                                                    </div>
                                                    <span className="ds-doc-option-check">
                                                        {form.documentType.includes(doc.title) ? "✓" : ""}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Amount summary */}
                                        {form.documentType.length > 0 && (
                                            <div className="ds-amount-summary">
                                                <div className="ds-amount-rows">
                                                    {form.documentType.map(title => {
                                                        const doc = documentTypes.find(d => d.title === title)
                                                        return (
                                                            <div className="ds-amount-row" key={title}>
                                                                <span>{title}</span>
                                                                <span>GHS {doc?.fee}</span>
                                                            </div>
                                                        )
                                                    })}
                                                    {form.deliveryMethod === "courier" && (
                                                        <div className="ds-amount-row" style={{ color: "rgba(255,255,255,0.45)" }}>
                                                            <span>Courier Delivery Fee</span>
                                                            <span>GHS {COURIER_FEE}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="ds-amount-total">
                                                    <span>Total</span>
                                                    <span>GHS {totalAmount}</span>
                                                </div>
                                            </div>
                                        )}
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
                                        <p className="ds-email-note">
                                            <i className="bi bi-envelope-check-fill"></i>
                                            A soft copy will be sent to your email automatically regardless of delivery method.
                                        </p>
                                        <div className="ds-delivery-options">
                                            {[
                                                { val: "pickup", label: "Campus Pickup", desc: "Collect hard copy at CCTI Records Office", icon: "🏫" },
                                                { val: "courier", label: "Courier Delivery", desc: "Hard copy delivered to your address", icon: "🚚" },
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
                                            <i className="bi bi-arrow-right-circle-fill"></i>
                                            Proceed to Payment
                                            {form.documentType.length > 0 && (
                                                <span className="ds-submit-count">— GHS {totalAmount}</span>
                                            )}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* ---- STEP: PAYMENT ---- */}
                        {step === "payment" && (
                            <div className="ds-payment-wrap">
                                <div className="ds-payment-left">
                                    <div className="ds-form-brand" style={{ marginBottom: "1.5rem" }}>
                                        <div className="ds-nav-logo" style={{ width: "36px", height: "36px", fontSize: "0.65rem" }}>CC</div>
                                        <span className="ds-nav-name">CCTI <span>DocSwift</span></span>
                                    </div>
                                    <h2 className="ds-form-title">Payment<br />Summary</h2>
                                    <p className="ds-form-subtitle">Review your order before completing payment.</p>

                                    <div className="ds-payment-summary">
                                        <div className="ds-payment-meta">
                                            <span className="ds-payment-meta-label">Name</span>
                                            <span className="ds-payment-meta-value">{form.fullName}</span>
                                        </div>
                                        <div className="ds-payment-meta">
                                            <span className="ds-payment-meta-label">Index Number</span>
                                            <span className="ds-payment-meta-value">{form.indexNumber}</span>
                                        </div>
                                        <div className="ds-payment-meta">
                                            <span className="ds-payment-meta-label">Email</span>
                                            <span className="ds-payment-meta-value">{form.email}</span>
                                        </div>
                                        <div className="ds-payment-meta">
                                            <span className="ds-payment-meta-label">Delivery</span>
                                            <span className="ds-payment-meta-value">{form.deliveryMethod === "pickup" ? "Campus Pickup" : "Courier Delivery"}</span>
                                        </div>
                                    </div>

                                    <div className="ds-amount-summary" style={{ marginTop: "1rem" }}>
                                        <div className="ds-amount-rows">
                                            {form.documentType.map(title => {
                                                const doc = documentTypes.find(d => d.title === title)
                                                return (
                                                    <div className="ds-amount-row" key={title}>
                                                        <span>{title}</span>
                                                        <span>GHS {doc?.fee}</span>
                                                    </div>
                                                )
                                            })}
                                            {form.deliveryMethod === "courier" && (
                                                <div className="ds-amount-row" style={{ color: "rgba(255,255,255,0.45)" }}>
                                                    <span>Courier Delivery Fee</span>
                                                    <span>GHS {COURIER_FEE}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ds-amount-total">
                                            <span>Total Amount</span>
                                            <span>GHS {totalAmount}</span>
                                        </div>
                                    </div>

                                    <button className="ds-back-btn" onClick={() => setStep("form")}>
                                        <i className="bi bi-arrow-left"></i> Back to Form
                                    </button>
                                </div>

                                <div className="ds-payment-right">
                                    <p className="ds-form-section-title" style={{ marginTop: 0 }}>Complete Payment</p>

                                    <div className="ds-pay-order">
                                        <p className="ds-pay-section-label">
                                            <i className="bi bi-receipt"></i> Order Summary
                                        </p>
                                        <div className="ds-bank-details">
                                            {form.documentType.map(title => {
                                                const doc = documentTypes.find(d => d.title === title)
                                                return (
                                                    <div className="ds-bank-row" key={title}>
                                                        <span className="ds-bank-label">{title}</span>
                                                        <span className="ds-bank-value">GHS {doc?.fee}</span>
                                                    </div>
                                                )
                                            })}
                                            {form.deliveryMethod === "courier" && (
                                                <div className="ds-bank-row">
                                                    <span className="ds-bank-label">Courier Delivery Fee</span>
                                                    <span className="ds-bank-value">GHS {COURIER_FEE}</span>
                                                </div>
                                            )}
                                            <div className="ds-bank-row" style={{ borderTop: "1px solid rgba(245,196,0,0.2)" }}>
                                                <span className="ds-bank-label" style={{ color: "var(--brand-gold)" }}>Total Amount</span>
                                                <span className="ds-bank-value" style={{ color: "var(--brand-gold)", fontSize: "1.1rem", fontFamily: "Cormorant Garamond, serif" }}>
                                                    GHS {totalAmount}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ds-paystack-info">
                                        <div className="ds-paystack-logo">
                                            <span className="ds-paystack-badge">Secured by</span>
                                            <span className="ds-paystack-name">Paystack</span>
                                        </div>
                                        <p className="ds-paystack-desc">
                                            You will be redirected to Paystack's secure payment page to complete your payment. We accept MTN MoMo, Telecel Cash, AirtelTigo Money, and major debit/credit cards.
                                        </p>
                                        <div className="ds-paystack-methods">
                                            <span className="ds-pay-method" style={{ background: "#FFCB00", color: "#000" }}>MTN</span>
                                            <span className="ds-pay-method" style={{ background: "#E2001A", color: "#fff" }}>TEL</span>
                                            <span className="ds-pay-method" style={{ background: "#CC0000", color: "#fff" }}>AT</span>
                                            <span className="ds-pay-method" style={{ background: "#1A1A2E", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>VISA</span>
                                            <span className="ds-pay-method" style={{ background: "#EB001B", color: "#fff" }}>MC</span>
                                        </div>
                                    </div>

                                    <div className="ds-pay-note">
                                        <i className="bi bi-shield-lock-fill"></i>
                                        Your payment is secured and encrypted by Paystack. CCTI does not store your card or mobile money details.
                                    </div>

                                    <button className="ds-paystack-btn" onClick={handlePaymentDone}>
                                        <i className="bi bi-lock-fill"></i>
                                        Pay GHS {totalAmount} with Paystack
                                    </button>

                                    <p className="ds-pay-terms">
                                        By completing payment you agree to CCTI's document request terms and conditions.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* ---- STEP: SUCCESS ---- */}
                        {step === "success" && (
                            <div className="ds-form-success">
                                <div className="ds-success-icon">
                                    <i className="bi bi-check-circle-fill"></i>
                                </div>
                                <h3>Request Submitted!</h3>
                                <p>
                                    Thank you, <strong>{form.fullName || "graduate"}</strong>. Your document request
                                    has been received. We will verify your payment and contact you at{" "}
                                    <strong>{form.email || "your email"}</strong> with updates on your request.
                                </p>
                                <div className="ds-success-docs">
                                    {form.documentType.map(t => (
                                        <span key={t} className="ds-success-doc-tag">{t}</span>
                                    ))}
                                </div>
                                <div className="ds-success-total">
                                    Total Paid: <strong>GHS {totalAmount}</strong>
                                </div>
                                <button type="button" className="ds-btn ds-btn-primary" onClick={resetForm}>
                                    Submit Another Request
                                </button>
                            </div>
                        )}
                    </div>
                </div >
            )
            }

        </div >
    )
}