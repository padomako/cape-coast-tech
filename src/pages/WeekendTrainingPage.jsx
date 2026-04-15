import { useState } from "react"

const programmes = [
    "Automotive Technology",
    "Electrical Installation",
    "Electronics",
    "Welding & Fabrication",
    "Refrigeration & Air Conditioning",
    "Plumbing & Gas Fitting",
    "Building Construction",
    "Furniture & Wood Fabrication",
    "Fashion Design",
    "Catering & Hospitality",
    "Creative Art",
]

export default function WeekendTrainingPage() {
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        dob: "",
        gender: "",
        address: "",
        programme: "",
        experience: "beginner",
        startDate: "",
        motivation: "",
    })

    const update = (field) => (e) =>
        setForm({ ...form, [field]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="weekend-page">

            {/* HERO */}
            <section className="weekend-hero">
                <div className="weekend-hero-overlay">
                    <div>
                        <h1>Weekend Industrial Training</h1>
                        <p>
                            Short, hands-on Competency-Based Training programs designed for
                            artisans and individuals ready to build real-world expertise.
                        </p>
                    </div>
                </div>
            </section>

            {/* INFO SECTION */}
            <section className="weekend-info-section">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="fw-bold" style={{ color: "var(--brand-gold)" }}>
                            About the Programme
                        </h2>
                        <p className="text-light opacity-75 mx-auto" style={{ maxWidth: "760px" }}>
                            Kickstart your journey in the industrial field with our short,
                            hands-on weekend Competency-Based Training programs. Open to everyone,
                            these sessions focus on practical skills designed to empower artisans
                            and individuals ready to build real-world expertise.
                        </p>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="weekend-info-card">
                                <div className="icon-wrap"><i className="bi bi-calendar2-week"></i></div>
                                <h5>Flexible Weekends</h5>
                                <p>Sessions run on Saturdays and Sundays so you can train without disrupting your weekday commitments.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="weekend-info-card">
                                <div className="icon-wrap"><i className="bi bi-tools"></i></div>
                                <h5>Hands-On Practice</h5>
                                <p>Spend most of your time in real workshops using industry-grade tools, equipment, and materials.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="weekend-info-card">
                                <div className="icon-wrap"><i className="bi bi-patch-check-fill"></i></div>
                                <h5>CBT Certification</h5>
                                <p>Earn a Competency-Based Training certificate recognised in the industry upon successful completion.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="weekend-info-card">
                                <div className="icon-wrap"><i className="bi bi-people-fill"></i></div>
                                <h5>Open to Everyone</h5>
                                <p>No prior qualifications required — artisans, beginners, and professionals are all welcome.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="weekend-info-card">
                                <div className="icon-wrap"><i className="bi bi-person-workspace"></i></div>
                                <h5>Expert Instructors</h5>
                                <p>Learn directly from qualified CCTI instructors with years of industry and teaching experience.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="weekend-info-card">
                                <div className="icon-wrap"><i className="bi bi-briefcase-fill"></i></div>
                                <h5>Career-Ready Skills</h5>
                                <p>Gain practical skills you can immediately apply to employment, self-employment, or further training.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* APPLICATION FORM */}
            <section className="weekend-apply-section" id="apply">
                <div className="container">
                    <div className="weekend-apply-card">
                        <h2>Application Form</h2>
                        <p className="subtitle">
                            Fill out the form below to apply for our Weekend Industrial Training programme.
                        </p>

                        {submitted ? (
                            <div className="text-center py-4">
                                <div style={{ fontSize: "3rem", color: "var(--brand-teal)" }}>
                                    <i className="bi bi-check-circle-fill"></i>
                                </div>
                                <h4 style={{ color: "var(--brand-gold)", marginTop: "1rem" }}>
                                    Application Received
                                </h4>
                                <p className="text-light opacity-75">
                                    Thank you, {form.fullName || "applicant"}. Our team will contact you at {form.email || "your email"} with next steps.
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-primary mt-3"
                                    onClick={() => {
                                        setSubmitted(false)
                                        setForm({
                                            fullName: "",
                                            email: "",
                                            phone: "",
                                            dob: "",
                                            gender: "",
                                            address: "",
                                            programme: "",
                                            experience: "beginner",
                                            startDate: "",
                                            motivation: "",
                                        })
                                    }}
                                >
                                    Submit Another Application
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
                                        <label className="form-label-custom">Email Address *</label>
                                        <input required type="email" className="form-input-custom" value={form.email} onChange={update("email")} placeholder="your@email.com" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label-custom">Phone Number *</label>
                                        <input required type="tel" className="form-input-custom" value={form.phone} onChange={update("phone")} placeholder="+233 XX XXX XXXX" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label-custom">Date of Birth</label>
                                        <input type="date" className="form-input-custom" value={form.dob} onChange={update("dob")} />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label-custom">Gender</label>
                                        <select className="form-input-custom" value={form.gender} onChange={update("gender")}>
                                            <option value="">Select...</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Prefer not to say</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label-custom">Residential Address</label>
                                        <input type="text" className="form-input-custom" value={form.address} onChange={update("address")} placeholder="Town / City" />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label-custom">Programme of Interest *</label>
                                        <select required className="form-input-custom" value={form.programme} onChange={update("programme")}>
                                            <option value="">Select a programme...</option>
                                            {programmes.map((p) => (
                                                <option key={p} value={p}>{p}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label-custom">Experience Level</label>
                                        <select className="form-input-custom" value={form.experience} onChange={update("experience")}>
                                            <option value="beginner">Beginner — No experience</option>
                                            <option value="intermediate">Intermediate — Some experience</option>
                                            <option value="artisan">Working artisan</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label-custom">Preferred Start Date</label>
                                        <input type="date" className="form-input-custom" value={form.startDate} onChange={update("startDate")} />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label-custom">Why are you applying? (optional)</label>
                                        <textarea className="form-input-custom" rows="4" value={form.motivation} onChange={update("motivation")} placeholder="Tell us briefly what you hope to gain from the programme."></textarea>
                                    </div>

                                    <div className="col-12 text-center mt-2">
                                        <button type="submit" className="contact-submit-btn">
                                            <i className="bi bi-send-fill me-2"></i>
                                            Submit Application
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
