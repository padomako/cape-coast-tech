const documents = [
    {
        title: "Academic Calendar",
        description: "Term dates, examination periods, and key academic milestones for the year.",
        href: "#",
    },
    {
        title: "Code of Conduct",
        description: "School policies, expectations, and standards every student is required to uphold.",
        href: "#",
    },
    {
        title: "Student Handbook",
        description: "A complete guide to student life, services, and procedures at CCTI.",
        href: "#",
    },
]

export default function Admissions() {
    return (
        <section className="admissions-page-v2">

            {/* ============ SECTION 1 — IMAGE HERO ============ */}
            <section className="admissions-image-hero">
                <img
                    src="/images/DJI_20260414220331_0660_D.jpg"
                    alt="Aerial view of Cape Coast Technical Institute"
                    className="admissions-image-hero-media"
                />
                <div className="admissions-image-hero-overlay" />

                <div className="admissions-image-hero-content">
                    <div className="container-xl">
                        <h1 className="admissions-image-hero-title">Register</h1>
                    </div>
                </div>

                <nav className="admissions-video-breadcrumb">
                    <span>Home</span>
                    <i className="bi bi-dot"></i>
                    <span>Admissions</span>
                    <i className="bi bi-dot"></i>
                    <span className="current">Register</span>
                </nav>
            </section>

            {/* ============ SECTION 2 — STARTING REGISTRATION ============ */}
            <section className="admissions-step-section">
                <div className="container-xl">
                    <div className="admissions-step-card">
                        <aside className="admissions-step-side">
                            <h2>Starting Registration</h2>
                        </aside>

                        <div className="admissions-step-body">
                            <p>
                                For all freshers, your first step is to enter your 10-digit BECE
                                index number followed by the last two digits of your examination
                                year (e.g., XXXXXXXXXX25).
                            </p>
                            <p>
                                The next step is to click on the check button to view your
                                placement status. You will be greeted with a welcome message,
                                otherwise &ldquo;Index number not found&rdquo; if you were not placed
                                in Cape Coast Technical School.
                            </p>
                            <p>
                                Next, pay an admission fee of <strong>GHS 30</strong> using
                                Paystack via MTN or Telecel MoMo to proceed to filling registration
                                forms.
                            </p>
                            <p>
                                <strong>Complete forms:</strong> Fill out the online biodata and
                                required forms, including the Personal Record Form.
                            </p>
                            <p>
                                <strong>Download Documents:</strong> After submission, download and
                                print your Admission Letter and Prospectus. Your admission is
                                considered incomplete without these downloads.
                            </p>

                            <a href="#" className="admissions-step-cta">
                                Click to Begin Registration
                                <i className="bi bi-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 3 — REPORTING TO SCHOOL ============ */}
            <section className="admissions-step-section admissions-step-section-alt">
                <div className="container-xl">
                    <div className="admissions-step-card">
                        <aside className="admissions-step-side">
                            <h2>Reporting to School</h2>
                        </aside>

                        <div className="admissions-step-body">
                            <h3 className="admissions-substep-title">Reporting Details</h3>
                            <p>
                                <strong>Date &amp; Time:</strong> Fresh students are expected to
                                report to school on <strong>October 18th</strong> for the
                                2026/2027 academic year between <strong>8:00 am and 5:00 pm</strong>.
                            </p>
                            <p>
                                <strong>Parental Attendance:</strong> A parent or guardian{" "}
                                <strong>must</strong> accompany the student on the reporting day.
                            </p>
                            <p>
                                <strong>Special Meeting:</strong> School management will hold a
                                mandatory meeting with new parents on the reporting day.
                            </p>

                            <h3 className="admissions-substep-title">
                                Essential Documents &amp; Requirements
                            </h3>
                            <p>
                                When you eventually report to school, you must submit physical
                                copies of your admission documents:
                            </p>
                            <ul className="admissions-doc-list">
                                <li><strong>Admission Letter</strong> and <strong>Acceptance Form</strong>.</li>
                                <li><strong>Placement</strong> and <strong>Enrolment Form</strong>.</li>
                                <li><strong>Valid NHIS Card</strong> or <strong>Ghana Card</strong> (must be linked to NHIS card).</li>
                                <li><strong>BECE Result Slip</strong>.</li>
                            </ul>

                            <p className="admissions-help">
                                For further assistance, you can contact the school via WhatsApp
                                at <strong>0246775194</strong> or email{" "}
                                <a href="mailto:capetechedu@gmail.com">capetechedu@gmail.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 4 — ADMISSION PORTAL GUIDE ============ */}
            <section className="admissions-guide-section">
                <div className="container-xl">
                    <div className="admissions-guide-grid">

                        {/* IMAGE */}
                        <div className="admissions-guide-image">
                            <img
                                src="/images/DJI_20260414222003_0663_D.jpg"
                                alt="Admission Portal Guide preview"
                            />
                        </div>

                        {/* TEXT */}
                        <div className="admissions-guide-body">
                            <h2 className="section-serif-title">Admission Portal Guide</h2>
                            <p>
                                Follow this step-by-step guide to confidently navigate the
                                admission portal, understand each stage of the process, and
                                complete your application accurately and efficiently without
                                unnecessary delays.
                            </p>

                            <a href="#" className="harvard-link">
                                Open Step-by-Step Guide
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* ============ SECTION 5 — DOWNLOAD RELEVANT DOCUMENTS ============ */}
            <section className="admissions-downloads-section">
                <div className="container-xl">
                    <div className="academics-section-header">
                        <h2 className="section-serif-title">Download Relevant Documents</h2>
                        <p>
                            Reference documents to help you prepare for life and study at Cape
                            Coast Technical Institute.
                        </p>
                    </div>

                    <div className="admissions-downloads-grid">
                        {documents.map((doc) => (
                            <article className="admissions-doc-card" key={doc.title}>
                                <div className="admissions-doc-icon">
                                    <i className="bi bi-file-earmark-pdf-fill"></i>
                                </div>
                                <h3>{doc.title}</h3>
                                <p>{doc.description}</p>
                                <a href={doc.href} className="harvard-link">
                                    Download PDF
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

        </section>
    )
}
