export default function Admissions() {
    return (
        <section className="admissions-page">

            {/* ================= HERO SECTION ================= */}
            <div className="admission-hero">
                <img
                    src="/images/AFRICAN%20UNION%20PARADE/1.jpg"
                    alt="Admission"
                    className="hero-bg"
                />

                <div className="hero-overlay">
                    <h1>Welcome to CCTI Admission Portal</h1>
                    <p>
                        Begin your academic journey through our science and
                        technical programmes.
                    </p>

                    <button className="begin-btn">
                        Click to Begin Registration
                    </button>
                </div>
            </div>

            {/* ================= HOW TO USE SECTION ================= */}
            <section className="admission-steps">
                <div className="container">

                    <h2 className="steps-title text-center">
                        How to use the Admissions Portal
                    </h2>

                    <div className="steps-divider"></div>

                    <div className="row g-4 mt-4">

                        <div className="col-md-4">
                            <div className="step-item text-center">
                                <div className="step-icon">
                                    <i className="bi bi-person-plus"></i>
                                </div>
                                <h5>Sign up and create Account</h5>
                                <p>
                                    Register with a valid and active email address.
                                    A verification link will be sent to your email.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="step-item text-center">
                                <div className="step-icon">
                                    <i className="bi bi-mortarboard"></i>
                                </div>
                                <h5>Select your student category</h5>
                                <p>
                                    Ghanaian students: Purchase vouchers online.
                                    International students: Proceed online.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="step-item text-center">
                                <div className="step-icon">
                                    <i className="bi bi-send-check"></i>
                                </div>
                                <h5>Complete and submit Application</h5>
                                <p>
                                    Fill in the required details and submit your application.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= WALKTHROUGH + ANNOUNCEMENT ================= */}

            <div className="admission-info container">

                <div className="row align-items-start">

                    {/* VIDEO */}
                    <div className="col-lg-6">
                        <div className="video-card">
                            <img
                                src="/images/ELECTRICALS%20PRACTICE%20SESSION/banner_bg1.jpg"
                                alt="Walkthrough"
                            />
                            <div className="play-btn">&#9654;</div>
                        </div>
                    </div>

                    {/* WALKTHROUGH TEXT */}
                    <div className="col-lg-6">
                        <h3>Admission Portal Walkthrough</h3>
                        <p>
                            This video helps applicants navigate their way
                            through the admissions system.
                        </p>

                        <button className="watch-btn">Watch</button>
                    </div>

                </div>

                {/* ANNOUNCEMENTS */}
                <div className="announcement-section">
                    <h3>Announcements</h3>

                    <div className="announcement-grid">

                        <div className="announcement-card">
                            <div className="pdf-badge">
                                <i className="bi bi-file-earmark-pdf-fill"></i>
                                <span>PDF</span>
                            </div>
                            <h6 className="announcement-title">Entry Examination</h6>
                            <p>
                                Entry examination and interviews for
                                2025/2026 academic year.
                            </p>
                            <a href="#" className="announcement-link">
                                <i className="bi bi-download me-1"></i> Download
                            </a>
                        </div>

                        <div className="announcement-card">
                            <div className="pdf-badge">
                                <i className="bi bi-file-earmark-pdf-fill"></i>
                                <span>PDF</span>
                            </div>
                            <h6 className="announcement-title">Application Form</h6>
                            <p>
                                Application form 2025/2026 academic year.
                            </p>
                            <a href="#" className="announcement-link">
                                <i className="bi bi-download me-1"></i> Download
                            </a>
                        </div>

                        <div className="announcement-card">
                            <div className="pdf-badge">
                                <i className="bi bi-file-earmark-pdf-fill"></i>
                                <span>PDF</span>
                            </div>
                            <h6 className="announcement-title">Shortlisted Applicants</h6>
                            <p>
                                Notice to shortlisted applicants.
                            </p>
                            <a href="#" className="announcement-link">
                                <i className="bi bi-download me-1"></i> Download
                            </a>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}
