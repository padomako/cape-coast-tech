import admissionHero from "../assets/images/admission-hero.jpg"
import videoThumb from "../assets/images/admission-video.jpg"

export default function Admissions() {
    return (
        <section className="admissions-page">

            {/* ================= HERO SECTION ================= */}
            <div className="admission-hero">
                <img src={admissionHero} alt="Admission" className="hero-bg" />

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
                            <img src={videoThumb} alt="Walkthrough" />
                            <div className="play-btn">▶</div>
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
                    <h3>Announcement</h3>

                    <div className="announcement-grid">

                        <div className="announcement-card">
                            <span className="pdf-icon">PDF</span>
                            <p>
                                Entry examination and interviews for
                                2025/2026 academic year.
                            </p>
                        </div>

                        <div className="announcement-card">
                            <span className="pdf-icon">PDF</span>
                            <p>
                                Application form 2025/2026 academic year.
                            </p>
                        </div>

                        <div className="announcement-card">
                            <span className="pdf-icon">PDF</span>
                            <p>
                                Notice to shortlisted applicants.
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}
