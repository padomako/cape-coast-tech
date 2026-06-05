import { useEffect, useState, useRef } from "react"
import { Link, useSearchParams } from "react-router-dom"

// ── Paystack public key (frontend-safe) ──────────────────────────────────────
const PAYSTACK_PUBLIC_KEY = "pk_live_102b2ab0b07585ba1d1701a3916502b07405160e"

// ── EmailJS config ────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_65fy5j9"
const EMAILJS_TEMPLATE_ID = "template_0tg8brl"
const EMAILJS_PUBLIC_KEY = "3HO8hlGlC0KbE9esu"
const RECIPIENT_EMAIL = "capetechedu@gmail.com"

// ── Clearance form template — upload PDF to /public/docs/clearance-form-template.pdf
const CLEARANCE_TEMPLATE_PATH = "/docs/clearance-form-template.pdf"

// ── localStorage key for admin dashboard ─────────────────────────────────────
const STORAGE_KEY = "ccti_docswift_requests"

const documentTypes = [
    { emoji: "📄", title: "Official Transcript", fee: 70, delivery: "1–3 working days" },
    { emoji: "🏅", title: "Certificate", fee: 50, delivery: "1–2 working days" },
    { emoji: "✅", title: "Testimonial", fee: 50, delivery: "2–3 working days" },
    { emoji: "📋", title: "Letter of Attestation", fee: 50, delivery: "1–2 working days" },
    { emoji: "🔤", title: "English Proficiency", fee: 70, delivery: "2–3 working days" },
    { emoji: "📝", title: "Letter of Recommendation", fee: 50, delivery: "2–3 working days" },
]

const COURIER_FEE = 50

const BLANK_FORM = {
    fullName: "", indexNumber: "", email: "", phone: "",
    programme: "", programmeOther: "",
    yearStarted: "", yearCompleted: "",
    documentType: [],
    deliveryMethod: "pickup", destination: "", notes: "",
    clearanceFile: null, // { name, base64, type }
}

// ── Save request to localStorage for admin dashboard ─────────────────────────
function saveRequest(formData, totalAmount, ref) {
    try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
        existing.unshift({
            id: ref,
            submittedAt: new Date().toISOString(),
            status: "Pending",
            fullName: formData.fullName,
            indexNumber: formData.indexNumber,
            email: formData.email,
            phone: formData.phone,
            programme: formData.programme === "Other" ? formData.programmeOther : formData.programme,
            yearStarted: formData.yearStarted,
            yearCompleted: formData.yearCompleted,
            documents: formData.documentType,
            delivery: formData.deliveryMethod === "pickup" ? "Campus Pickup" : "Courier Delivery",
            destination: formData.destination || "N/A",
            notes: formData.notes || "",
            totalAmount,
            hasClearance: !!formData.clearanceFile,
        })
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
    } catch (e) {
        console.error("localStorage save failed:", e)
    }
}

// ── Script loaders ────────────────────────────────────────────────────────────
function loadPaystackScript() {
    return new Promise((resolve) => {
        if (window.PaystackPop) { resolve(); return }
        const s = document.createElement("script")
        s.src = "https://js.paystack.co/v1/inline.js"
        s.onload = resolve
        document.head.appendChild(s)
    })
}

function loadEmailJSScript() {
    return new Promise((resolve) => {
        if (window.emailjs) { resolve(); return }
        const s = document.createElement("script")
        s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        s.onload = () => { window.emailjs.init(EMAILJS_PUBLIC_KEY); resolve() }
        document.head.appendChild(s)
    })
}

export default function GraduateDocuments() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [popupOpen, setPopupOpen] = useState(false)
    const [step, setStep] = useState("form")
    const [form, setForm] = useState(BLANK_FORM)
    const [payError, setPayError] = useState("")
    const [fileError, setFileError] = useState("")
    const fileInputRef = useRef(null)

    useEffect(() => {
        if (searchParams.get("open") === "request") setPopupOpen(true)
    }, [searchParams])

    useEffect(() => {
        document.body.style.overflow = popupOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [popupOpen])

    // Pre-load both scripts on mount so they're ready before the button is clicked
    useEffect(() => {
        loadPaystackScript()
        loadEmailJSScript()
    }, [])

    const totalAmount = form.documentType.reduce((sum, title) => {
        const doc = documentTypes.find((d) => d.title === title)
        return sum + (doc ? doc.fee : 0)
    }, 0) + (form.deliveryMethod === "courier" ? COURIER_FEE : 0)

    const closePopup = () => {
        setPopupOpen(false); setStep("form"); setPayError(""); setFileError("")
        if (searchParams.get("open")) {
            searchParams.delete("open")
            setSearchParams(searchParams, { replace: true })
        }
    }

    const openPopupFor = (docTitle) => {
        setForm((f) => ({ ...f, documentType: [docTitle] }))
        setStep("form"); setPopupOpen(true)
    }

    const toggleDocument = (docTitle) => {
        setForm((f) => {
            const already = f.documentType.includes(docTitle)
            return { ...f, documentType: already ? f.documentType.filter((t) => t !== docTitle) : [...f.documentType, docTitle] }
        })
    }

    const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

    // ── File upload ───────────────────────────────────────────────────────────
    const handleFileChange = (e) => {
        setFileError("")
        const file = e.target.files[0]
        if (!file) { setForm((f) => ({ ...f, clearanceFile: null })); return }

        const allowed = ["application/pdf", "image/jpeg", "image/jpg"]
        if (!allowed.includes(file.type)) {
            setFileError("Only PDF or JPG files are accepted.")
            e.target.value = ""; return
        }
        if (file.size > 5 * 1024 * 1024) {
            setFileError("File must be under 5MB.")
            e.target.value = ""; return
        }

        const reader = new FileReader()
        reader.onload = (ev) => {
            setForm((f) => ({
                ...f,
                clearanceFile: {
                    name: file.name,
                    base64: ev.target.result.split(",")[1],
                    type: file.type,
                }
            }))
        }
        reader.readAsDataURL(file)
    }

    const removeFile = () => {
        setForm((f) => ({ ...f, clearanceFile: null }))
        setFileError("")
        if (fileInputRef.current) fileInputRef.current.value = ""
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (form.documentType.length === 0) { alert("Please select at least one document type."); return }
        setStep("payment")
    }

    // ── EmailJS send ──────────────────────────────────────────────────────────
    const sendConfirmationEmail = () => {
        return loadEmailJSScript().then(() => {
            return window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                to_email: RECIPIENT_EMAIL,
                full_name: form.fullName,
                index_number: form.indexNumber,
                email: form.email,
                phone: form.phone,
                programme: form.programme === "Other" ? form.programmeOther : form.programme,
                year_started: form.yearStarted,
                year_completed: form.yearCompleted,
                document_types: form.documentType.join(", "),
                delivery_method: form.deliveryMethod === "pickup" ? "Campus Pickup" : "Courier Delivery",
                destination: form.deliveryMethod === "courier" ? form.destination : "N/A",
                notes: form.notes || "None",
                total_amount: `GHS ${totalAmount}`,
                has_clearance: form.clearanceFile ? `Yes — ${form.clearanceFile.name}` : "No",
            })
        }).catch((err) => {
            console.error("EmailJS error:", err)
            // Don't block success — payment confirmed, email is secondary
        })
    }

    // ── Paystack payment ──────────────────────────────────────────────────────
    // NOT async — removing await before openIframe() prevents browser popup blocking
    const handlePayWithPaystack = () => {
        setPayError("")

        if (!window.PaystackPop) {
            setPayError("Payment gateway failed to load. Please refresh and try again.")
            return
        }

        const ref = `CCTI-${Date.now()}-${Math.floor(Math.random() * 1000)}`

        const handler = window.PaystackPop.setup({
            key: PAYSTACK_PUBLIC_KEY,
            email: form.email,
            amount: totalAmount * 100, // Paystack uses pesewas
            currency: "GHS",
            ref,
            metadata: {
                custom_fields: [
                    { display_name: "Full Name", variable_name: "full_name", value: form.fullName },
                    { display_name: "Index Number", variable_name: "index_number", value: form.indexNumber },
                    { display_name: "Programme", variable_name: "programme", value: form.programme },
                    { display_name: "Document Types", variable_name: "document_types", value: form.documentType.join(", ") },
                ],
            },
            // Regular function — NOT async. Paystack v1 does not support async callbacks.
            callback: function (response) {
                setStep("processing")
                saveRequest(form, totalAmount, ref)
                sendConfirmationEmail().then(() => setStep("success"))
            },
            onClose: function () {
                setPayError("Payment was not completed. Please try again.")
            },
        })

        handler.openIframe()
    }

    const resetForm = () => {
        setStep("form"); setPayError(""); setFileError(""); setForm(BLANK_FORM)
        if (fileInputRef.current) fileInputRef.current.value = ""
    }

    return (
        <div className="ds-page">

            {/* ── HERO ── */}
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
                    <div className="ds-hero-bg" style={{ backgroundImage: "url('/images/berry-college-historic.jpg')" }} />
                    <div className="ds-hero-overlay" />
                    <div className="ds-hero-content container-xl">
                        <div className="ds-hero-left">
                            <h1 className="ds-hero-title">About <span>DocSwift</span></h1>
                            <p className="ds-hero-desc">
                                DocSwift is an online document request and management service for current students
                                and alumni of Cape Coast Technical Institute. Request your transcripts,
                                certificates, and official letters — from anywhere, anytime.
                            </p>
                            <div className="ds-hero-btns">
                                <button className="ds-btn ds-btn-primary" onClick={() => { setStep("form"); setPopupOpen(true) }}>Request Document</button>
                                <a href="#how-it-works" className="ds-btn ds-btn-ghost">Getting Started</a>
                                <a href="mailto:capetechedu@gmail.com" className="ds-btn ds-btn-ghost">Contact Support</a>
                            </div>
                        </div>
                        <div className="ds-hero-card">
                            <div className="ds-hero-card-icon"><i className="bi bi-file-earmark-text-fill"></i></div>
                            <div className="ds-hero-card-name">CCTI <span>DocSwift</span></div>
                            <div className="ds-hero-card-sub">Online Document System</div>
                        </div>
                    </div>
                </section>
            </div>

            {/* ── STATS ── */}
            <div className="ds-stats">
                {[["6", "Document Types"], ["1–3", "Working Days"], ["100%", "Online Process"], ["24/7", "Available"]].map(([v, l]) => (
                    <div className="ds-stat" key={l}><span className="ds-stat-val">{v}</span><span className="ds-stat-lbl">{l}</span></div>
                ))}
            </div>

            {/* ── FEATURES ── */}
            <section className="ds-features">
                <div className="container-xl">
                    <p className="ds-sec-eye">Why DocSwift</p>
                    <h2 className="ds-sec-title">Everything you need, online</h2>
                    <div className="ds-feat-grid">
                        {[["🏠", "Request from Home", "Apply for your academic documents from anywhere — no campus visit required."],
                        ["📦", "Track Your Request", "Monitor the progress of your document request in real time from submission to delivery."],
                        ["🚚", "Flexible Delivery", "Choose campus pickup or courier delivery. All documents are emailed to you automatically."],
                        ].map(([ico, t, d]) => (
                            <div className="ds-feat" key={t}><div className="ds-feat-ico">{ico}</div><h4>{t}</h4><p>{d}</p></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ── */}
            <section className="ds-how" id="how-it-works">
                <div className="container-xl">
                    <p className="ds-sec-eye">Simple Process</p>
                    <h2 className="ds-sec-title">How it works</h2>
                    <div className="ds-steps">
                        {[["01", "Submit Request", "Fill out the online form with your personal and academic details."],
                        ["02", "Pay Processing Fee", "Complete payment securely via Paystack — MoMo, card, or bank."],
                        ["03", "Verification", "Records office verifies your details and prepares your documents."],
                        ["04", "Receive Documents", "Collect in person or receive by courier. Soft copy sent to your email."],
                        ].map(([n, t, d]) => (
                            <div className="ds-step" key={n}><div className="ds-step-num">{n}</div><div className="ds-step-t">{t}</div><div className="ds-step-d">{d}</div></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── DOCUMENT TYPES ── */}
            <section className="ds-docs">
                <div className="container-xl">
                    <p className="ds-sec-eye">Available Documents</p>
                    <h2 className="ds-sec-title">What can you request?</h2>
                    <div className="ds-docs-grid">
                        {documentTypes.map((doc) => (
                            <div className="ds-doc" key={doc.title} onClick={() => openPopupFor(doc.title)}>
                                <div className="ds-doc-ico">{doc.emoji}</div>
                                <div className="ds-doc-info"><div className="ds-doc-name">{doc.title}</div><span className="ds-doc-meta">{doc.delivery}</span></div>
                                <span className="ds-doc-fee">GHS {doc.fee}</span>
                                <span className="ds-doc-arr">→</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="ds-cta">
                <div className="container-xl">
                    <h2 className="ds-cta-title">Ready to request your documents?</h2>
                    <p className="ds-cta-sub">Complete your request online and pay securely with Paystack.</p>
                    <div className="ds-cta-btns">
                        <button className="ds-btn ds-btn-primary" onClick={() => { setStep("form"); setPopupOpen(true) }}>Get Started →</button>
                        <a href="mailto:capetechedu@gmail.com" className="ds-btn ds-btn-ghost">Contact Support</a>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════ POPUP ══════════════════════════ */}
            {popupOpen && (
                <div className="grad-docs-modal-backdrop" onClick={closePopup}>
                    <div className="grad-docs-modal ds-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
                        <button type="button" className="grad-docs-modal-close" onClick={closePopup} aria-label="Close">
                            <i className="bi bi-x-lg"></i>
                        </button>

                        {/* ── STEP: FORM ── */}
                        {step === "form" && (
                            <div className="ds-form-wrap">

                                {/* Left panel — document selector */}
                                <div className="ds-form-left">
                                    <div className="ds-form-brand">
                                        <div className="ds-nav-logo" style={{ width: "36px", height: "36px", fontSize: "0.65rem" }}>CC</div>
                                        <span className="ds-nav-name">CCTI <span>DocSwift</span></span>
                                    </div>
                                    <h2 className="ds-form-title">Document<br />Request Form</h2>
                                    <p className="ds-form-subtitle">Select one or more documents, fill in your details, and proceed to payment.</p>

                                    <div className="ds-doc-selector">
                                        <p className="ds-doc-selector-label">
                                            Select Document(s)
                                            {form.documentType.length > 0 && <span className="ds-doc-selected-count">{form.documentType.length} selected</span>}
                                        </p>
                                        <div className="ds-doc-options">
                                            {documentTypes.map((doc) => (
                                                <div key={doc.title} className={`ds-doc-option ${form.documentType.includes(doc.title) ? "selected" : ""}`} onClick={() => toggleDocument(doc.title)}>
                                                    <span className="ds-doc-option-emoji">{doc.emoji}</span>
                                                    <div className="ds-doc-option-info">
                                                        <span className="ds-doc-option-name">{doc.title}</span>
                                                        <span className="ds-doc-option-fee">GHS {doc.fee} · {doc.delivery}</span>
                                                    </div>
                                                    <span className="ds-doc-option-check">{form.documentType.includes(doc.title) ? "✓" : ""}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {form.documentType.length > 0 && (
                                            <div className="ds-amount-summary">
                                                <div className="ds-amount-rows">
                                                    {form.documentType.map((title) => {
                                                        const doc = documentTypes.find((d) => d.title === title)
                                                        return <div className="ds-amount-row" key={title}><span>{title}</span><span>GHS {doc?.fee}</span></div>
                                                    })}
                                                    {form.deliveryMethod === "courier" && (
                                                        <div className="ds-amount-row" style={{ color: "rgba(255,255,255,0.45)" }}><span>Courier Delivery Fee</span><span>GHS {COURIER_FEE}</span></div>
                                                    )}
                                                </div>
                                                <div className="ds-amount-total"><span>Total</span><span>GHS {totalAmount}</span></div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="ds-form-contact">
                                        <p className="ds-form-contact-label">Need help?</p>
                                        <a href="mailto:capetechedu@gmail.com" className="ds-form-contact-link"><i className="bi bi-envelope-fill"></i> capetechedu@gmail.com</a>
                                        <a href="tel:+233246775194" className="ds-form-contact-link"><i className="bi bi-whatsapp"></i> 0246775194</a>
                                    </div>
                                </div>

                                {/* Right panel — form fields */}
                                <div className="ds-form-right">
                                    <form onSubmit={handleSubmit}>

                                        {/* Personal Information */}
                                        <div className="ds-form-section-title">Personal Information</div>
                                        <div className="ds-form-grid">
                                            <div className="ds-field">
                                                <label className="ds-label">Full Name <span>*</span></label>
                                                <input required type="text" className="ds-input" value={form.fullName} onChange={update("fullName")} placeholder="Your full name" />
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

                                        {/* Academic Details */}
                                        <div className="ds-form-section-title">Academic Details</div>
                                        <div className="ds-form-grid">
                                            <div className="ds-field" style={{ gridColumn: "1 / -1" }}>
                                                <label className="ds-label">Programme Completed <span>*</span></label>
                                                <select required className="ds-input" value={form.programme} onChange={update("programme")}>
                                                    <option value="">Select a programme...</option>
                                                    <option>Architectural Draughtmanship</option>
                                                    <option>Automotive Engineering Technology</option>
                                                    <option>Building Construction</option>
                                                    <option>Business Accounting</option>
                                                    <option>Business Information Technology</option>
                                                    <option>Business Secretarial</option>
                                                    <option>Catering &amp; Hospitality Management</option>
                                                    <option>Creative Art Technology</option>
                                                    <option>Electrical Engineering Technology</option>
                                                    <option>Electronics Engineering Technology</option>
                                                    <option>Garment / Fashion Technology</option>
                                                    <option>Furniture Technology</option>
                                                    <option>Mechanical Engineering Technology</option>
                                                    <option>Plumbing &amp; Gas Technology</option>
                                                    <option>Refrigeration &amp; Air-Conditioning</option>
                                                    <option>Welding &amp; Fabrication Technology</option>
                                                    <option>Wood Technology</option>
                                                    <option>Other</option>
                                                </select>
                                                {form.programme === "Other" && (
                                                    <input required type="text" className="ds-input" style={{ marginTop: "0.5rem" }} value={form.programmeOther} onChange={update("programmeOther")} placeholder="Enter your programme" />
                                                )}
                                            </div>
                                            <div className="ds-field">
                                                <label className="ds-label">Year Started <span>*</span></label>
                                                <input required type="text" className="ds-input" value={form.yearStarted} onChange={update("yearStarted")} placeholder="e.g. 2020" maxLength={4} />
                                            </div>
                                            <div className="ds-field">
                                                <label className="ds-label">Year Completed <span>*</span></label>
                                                <input required type="text" className="ds-input" value={form.yearCompleted} onChange={update("yearCompleted")} placeholder="e.g. 2022" maxLength={4} />
                                            </div>
                                        </div>

                                        {/* Clearance Form */}
                                        <div className="ds-form-section-title">Clearance Form</div>
                                        <div className="ds-clearance-block">
                                            <div className="ds-clearance-info">
                                                <p>Upload your completed clearance form. Accepted formats: <strong>PDF or JPG</strong>, max 5MB.</p>
                                                <a href={CLEARANCE_TEMPLATE_PATH} download className="ds-clearance-download">
                                                    <i className="bi bi-download"></i> Download Template
                                                </a>
                                            </div>

                                            {!form.clearanceFile ? (
                                                <label className="ds-file-drop" htmlFor="clearance-upload">
                                                    <i className="bi bi-cloud-arrow-up"></i>
                                                    <span>Click to upload clearance form</span>
                                                    <span className="ds-file-hint">PDF or JPG · Max 5MB</span>
                                                    <input
                                                        id="clearance-upload"
                                                        ref={fileInputRef}
                                                        type="file"
                                                        accept=".pdf,.jpg,.jpeg,application/pdf,image/jpeg"
                                                        onChange={handleFileChange}
                                                        style={{ display: "none" }}
                                                    />
                                                </label>
                                            ) : (
                                                <div className="ds-file-attached">
                                                    <i className={`bi ${form.clearanceFile.type === "application/pdf" ? "bi-file-earmark-pdf-fill" : "bi-file-earmark-image-fill"}`}></i>
                                                    <span className="ds-file-name">{form.clearanceFile.name}</span>
                                                    <button type="button" className="ds-file-remove" onClick={removeFile} aria-label="Remove file">
                                                        <i className="bi bi-x-lg"></i>
                                                    </button>
                                                </div>
                                            )}
                                            {fileError && <p className="ds-file-error"><i className="bi bi-exclamation-triangle-fill"></i> {fileError}</p>}
                                        </div>

                                        {/* Delivery Preferences */}
                                        <div className="ds-form-section-title">Delivery Preferences</div>
                                        <p className="ds-email-note">
                                            <i className="bi bi-envelope-check-fill"></i>
                                            A soft copy will be sent to your email automatically regardless of delivery method.
                                        </p>
                                        <div className="ds-delivery-options">
                                            {[
                                                { val: "pickup", label: "Campus Pickup", desc: "Collect hard copy at CCTI Records Office", icon: "🏫" },
                                                { val: "courier", label: "Courier Delivery", desc: `Hard copy delivered to your address (+GHS ${COURIER_FEE})`, icon: "🚚" },
                                            ].map((opt) => (
                                                <div key={opt.val} className={`ds-delivery-opt ${form.deliveryMethod === opt.val ? "selected" : ""}`} onClick={() => setForm((f) => ({ ...f, deliveryMethod: opt.val }))}>
                                                    <span className="ds-delivery-icon">{opt.icon}</span>
                                                    <div><span className="ds-delivery-label">{opt.label}</span><span className="ds-delivery-desc">{opt.desc}</span></div>
                                                    <span className="ds-delivery-check">{form.deliveryMethod === opt.val ? "✓" : ""}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {form.deliveryMethod === "courier" && (
                                            <div className="ds-field" style={{ marginTop: "1rem" }}>
                                                <label className="ds-label">Delivery Address <span>*</span></label>
                                                <input required type="text" className="ds-input" value={form.destination} onChange={update("destination")} placeholder="Full delivery address" />
                                            </div>
                                        )}

                                        <div className="ds-field" style={{ marginTop: "1rem" }}>
                                            <label className="ds-label">Additional Notes</label>
                                            <textarea className="ds-input ds-textarea" rows="3" value={form.notes} onChange={update("notes")} placeholder="Any additional information..." />
                                        </div>

                                        <button type="submit" className="ds-submit-btn">
                                            <i className="bi bi-arrow-right-circle-fill"></i>
                                            Proceed to Payment
                                            {form.documentType.length > 0 && <span className="ds-submit-count">— GHS {totalAmount}</span>}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* ── STEP: PAYMENT ── */}
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
                                        {[
                                            ["Name", form.fullName],
                                            ["Index Number", form.indexNumber],
                                            ["Email", form.email],
                                            ["Programme", form.programme === "Other" ? form.programmeOther : form.programme],
                                            ["Clearance Form", form.clearanceFile ? `✓ ${form.clearanceFile.name}` : "Not uploaded"],
                                            ["Delivery", form.deliveryMethod === "pickup" ? "Campus Pickup" : "Courier Delivery"],
                                        ].map(([l, v]) => (
                                            <div className="ds-payment-meta" key={l}>
                                                <span className="ds-payment-meta-label">{l}</span>
                                                <span className="ds-payment-meta-value">{v}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="ds-amount-summary" style={{ marginTop: "1rem" }}>
                                        <div className="ds-amount-rows">
                                            {form.documentType.map((title) => {
                                                const doc = documentTypes.find((d) => d.title === title)
                                                return <div className="ds-amount-row" key={title}><span>{title}</span><span>GHS {doc?.fee}</span></div>
                                            })}
                                            {form.deliveryMethod === "courier" && (
                                                <div className="ds-amount-row" style={{ color: "rgba(255,255,255,0.45)" }}><span>Courier Delivery Fee</span><span>GHS {COURIER_FEE}</span></div>
                                            )}
                                        </div>
                                        <div className="ds-amount-total"><span>Total Amount</span><span>GHS {totalAmount}</span></div>
                                    </div>
                                    <button className="ds-back-btn" onClick={() => setStep("form")}><i className="bi bi-arrow-left"></i> Back to Form</button>
                                </div>

                                <div className="ds-payment-right">
                                    <p className="ds-form-section-title" style={{ marginTop: 0 }}>Complete Payment</p>
                                    <div className="ds-pay-order">
                                        <p className="ds-pay-section-label"><i className="bi bi-receipt"></i> Order Summary</p>
                                        <div className="ds-bank-details">
                                            {form.documentType.map((title) => {
                                                const doc = documentTypes.find((d) => d.title === title)
                                                return <div className="ds-bank-row" key={title}><span className="ds-bank-label">{title}</span><span className="ds-bank-value">GHS {doc?.fee}</span></div>
                                            })}
                                            {form.deliveryMethod === "courier" && (
                                                <div className="ds-bank-row"><span className="ds-bank-label">Courier Delivery Fee</span><span className="ds-bank-value">GHS {COURIER_FEE}</span></div>
                                            )}
                                            <div className="ds-bank-row" style={{ borderTop: "1px solid rgba(245,196,0,0.2)" }}>
                                                <span className="ds-bank-label" style={{ color: "var(--brand-gold)" }}>Total Amount</span>
                                                <span className="ds-bank-value" style={{ color: "var(--brand-gold)", fontSize: "1.1rem", fontFamily: "Cormorant Garamond,serif" }}>GHS {totalAmount}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ds-paystack-info">
                                        <div className="ds-paystack-logo"><span className="ds-paystack-badge">Secured by</span><span className="ds-paystack-name">Paystack</span></div>
                                        <p className="ds-paystack-desc">You will be redirected to Paystack's secure payment page. We accept MTN MoMo, Telecel Cash, AirtelTigo Money, and major debit/credit cards.</p>
                                        <div className="ds-paystack-methods">
                                            {[["MTN", "#FFCB00", "#000"], ["TEL", "#E2001A", "#fff"], ["AT", "#CC0000", "#fff"], ["VISA", "#1A1A2E", "#fff"], ["MC", "#EB001B", "#fff"]].map(([n, bg, c]) => (
                                                <span key={n} className="ds-pay-method" style={{ background: bg, color: c }}>{n}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="ds-pay-note"><i className="bi bi-shield-lock-fill"></i> Your payment is secured and encrypted by Paystack. CCTI does not store your card or mobile money details.</div>
                                    {payError && (
                                        <p style={{ color: "var(--brand-red)", fontSize: "0.85rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                            <i className="bi bi-exclamation-triangle-fill"></i> {payError}
                                        </p>
                                    )}
                                    <button className="ds-paystack-btn" onClick={handlePayWithPaystack}>
                                        <i className="bi bi-lock-fill"></i> Pay GHS {totalAmount} with Paystack
                                    </button>
                                    <p className="ds-pay-terms">By completing payment you agree to CCTI's document request terms and conditions.</p>
                                </div>
                            </div>
                        )}

                        {/* ── STEP: PROCESSING ── */}
                        {step === "processing" && (
                            <div className="ds-form-success">
                                <div className="ds-success-icon" style={{ opacity: 0.6 }}><i className="bi bi-arrow-repeat"></i></div>
                                <h3>Processing...</h3>
                                <p>Payment confirmed. Sending your confirmation email.</p>
                            </div>
                        )}

                        {/* ── STEP: SUCCESS ── */}
                        {step === "success" && (
                            <div className="ds-form-success">
                                <div className="ds-success-icon"><i className="bi bi-check-circle-fill"></i></div>
                                <h3>Request Submitted!</h3>
                                <p>
                                    Thank you, <strong>{form.fullName}</strong>. Your document request has been received
                                    and payment confirmed. A confirmation email has been sent to <strong>{form.email}</strong>.
                                    The Records Office will contact you with updates.
                                </p>
                                <div className="ds-success-docs">
                                    {form.documentType.map((t) => <span key={t} className="ds-success-doc-tag">{t}</span>)}
                                </div>
                                <div className="ds-success-total">Total Paid: <strong>GHS {totalAmount}</strong></div>
                                <button type="button" className="ds-btn ds-btn-primary" onClick={resetForm}>Submit Another Request</button>
                            </div>
                        )}

                    </div>
                </div>
            )}
        </div>
    )
}
