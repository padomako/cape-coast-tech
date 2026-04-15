import { useState } from "react"
import { Link } from "react-router-dom"

const documentTypes = [
    {
        icon: "bi-file-earmark-text-fill",
        title: "Official Transcript",
        description: "A detailed academic record showing all programmes, subjects, grades, and final results.",
        fee: "GHS XX",
        delivery: "3-5 working days",
    },
    {
        icon: "bi-award-fill",
        title: "Certificate Replacement",
        description: "Replacement for a lost or damaged NABPTEX Certificate II.",
        fee: "GHS XX",
        delivery: "7-14 working days",
    },
    {
        icon: "bi-file-earmark-check-fill",
        title: "Letter of Attestation",
        description: "A signed letter confirming your studies at CCTI — useful for employment or further education.",
        fee: "GHS XX",
        delivery: "2-3 working days",
    },
    {
        icon: "bi-file-earmark-pdf-fill",
        title: "Course Outline",
        description: "Official course outline for the programme you completed, stamped and signed.",
        fee: "GHS XX",
        delivery: "3-5 working days",
    },
]

export default function GraduateDocuments() {
    const [submitted, setSubmitted] = useState(false)
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

    const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="student-life-subpage">

            {/* HERO */}
            <section className="subpage-hero">
                <img
                    src="/images/AFRICAN%20UNION%20PARADE/5.jpg"
                    alt="Graduate Documents"
                    className="subpage-hero-image"
                />
                <div className="subpage-hero-overlay">
                    <div className="container-xl">
                        <nav className="subpage-breadcrumb">
                            <Link to="/students">Student Life</Link>
                            <i className="bi bi-chevron-right"></i>
                            <span>Graduate Documents</span>
                        </nav>
                        <p className="eyebrow">Online Transcript System</p>
                        <h1>Graduate Documents</h1>
                        <p>
                            Request your official transcripts, certificates, and other graduate
                            documents online. No need to visit the campus — fill out the form,
                            pay the processing fee, and receive your documents at your preferred
                            address.
                        </p>
                    </div>
                </div>
            </section>

            {/* DOCUMENT TYPES */}
            <section className="grad-docs-types">
                <div className="container-xl">
                    <div className="student-life-section-header">
                        <p className="eyebrow-line">Available Documents</p>
                        <h2 className="section-serif-title">What can you request?</h2>
                    </div>

                    <div className="grad-docs-grid">
                        {documentTypes.map((doc) => (
                            <div className="grad-doc-card" key={doc.title}>
                                <div className="grad-doc-icon">
                                    <i className={`bi ${doc.icon}`}></i>
                                </div>
                                <h3>{doc.title}</h3>
                                <p>{doc.description}</p>
                                <div className="grad-doc-meta">
                                    <div>
                                        <span className="label">Fee</span>
                                        <span className="value">{doc.fee}</span>
                                    </div>
                                    <div>
                                        <span className="label">Processing</span>
                                        <span className="value">{doc.delivery}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="grad-docs-steps">
                <div className="container-xl">
                    <div className="student-life-section-header">
                        <p className="eyebrow-line">Simple 4-Step Process</p>
                        <h2 className="section-serif-title">How the Online Transcript System works</h2>
                    </div>

                    <div className="steps-timeline">
                        <div className="step-item">
                            <div className="step-num">01</div>
                            <h4>Submit Request</h4>
                            <p>Fill out the online form with your personal, academic, and delivery details.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-num">02</div>
                            <h4>Pay Processing Fee</h4>
                            <p>Complete payment securely using the provided bank or mobile money options.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-num">03</div>
                            <h4>Verification</h4>
                            <p>Our records office verifies your details and prepares the requested documents.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-num">04</div>
                            <h4>Receive Documents</h4>
                            <p>Collect in person or have your sealed documents delivered to your chosen address.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REQUEST FORM */}
            <section className="grad-docs-form-section" id="request">
                <div className="container-xl">
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
            </section>
        </div>
    )
}
