import { useState } from "react"
import { Link } from "react-router-dom"
import principalImage from "../assets/images/principal.jpg"

const NAV_ITEMS = [
    { id: "history", label: "Our History" },
    { id: "vision", label: "Vision & Mission" },
    { id: "values", label: "Core Values" },
    { id: "principal", label: "Principal's Message" },
]

const CORE_VALUES = [
    { icon: "bi-shield-check", label: "Discipline and Integrity" },
    { icon: "bi-mortarboard", label: "Academic and Technical Excellence" },
    { icon: "bi-hand-thumbs-up", label: "Respect and Responsibility" },
    { icon: "bi-lightbulb", label: "Innovation and Creativity" },
    { icon: "bi-people", label: "Teamwork and Leadership" },
    { icon: "bi-globe2", label: "Commitment to National Development" },
]

export default function About() {
    const [active, setActive] = useState("history")

    const scrollTo = (id) => {
        setActive(id)
        document.getElementById(`about-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className="ab-page">

            {/* ============ HERO ============ */}
            <section className="ab-hero">
                <img
                    src="/images/DJI_20260414220331_0660_D.jpg"
                    alt="Aerial view of Cape Coast Technical Institute"
                    className="ab-hero-img"
                />
                <div className="ab-hero-overlay" />
                <div className="ab-hero-inner">
                    <div className="ab-hero-left">
                        <h1 className="ab-hero-title">
                            Cape Coast<br />
                            <span>Technical Institute</span>
                        </h1>
                    </div>
                    <div className="ab-hero-right">
                        <span className="ab-hero-est">Established</span>
                        <span className="ab-hero-since">Since 1955</span>
                    </div>
                </div>
                <nav className="admissions-video-breadcrumb">
                    <span>Home</span>
                    <i className="bi bi-dot"></i>
                    <span className="current">About Us</span>
                </nav>
            </section>

            {/* ============ BODY ============ */}
            <div className="ab-body">

                {/* Sidebar */}
                <aside className="ab-sidebar">
                    <div className="ab-sidebar-title">
                        About<br /><span>CCTI</span>
                    </div>
                    <nav className="ab-sidebar-nav">
                        {NAV_ITEMS.map(item => (
                            <button
                                key={item.id}
                                className={`ab-nav-item ${active === item.id ? "active" : ""}`}
                                onClick={() => scrollTo(item.id)}
                            >
                                {item.label}
                                <i className="bi bi-arrow-right"></i>
                            </button>
                        ))}
                    </nav>

                    {/* Stats */}
                    <div className="ab-sidebar-stats">
                        <div className="ab-sidebar-stat">
                            <span className="ab-sidebar-stat-val">1955</span>
                            <span className="ab-sidebar-stat-lbl">Founded</span>
                        </div>
                        <div className="ab-sidebar-stat">
                            <span className="ab-sidebar-stat-val">18</span>
                            <span className="ab-sidebar-stat-lbl">Trade Areas</span>
                        </div>
                        <div className="ab-sidebar-stat">
                            <span className="ab-sidebar-stat-val">70+</span>
                            <span className="ab-sidebar-stat-lbl">Years</span>
                        </div>
                        <div className="ab-sidebar-stat">
                            <span className="ab-sidebar-stat-val">500+</span>
                            <span className="ab-sidebar-stat-lbl">Students</span>
                        </div>
                    </div>
                </aside>

                {/* Main content */}
                <main className="ab-main">

                    {/* History */}
                    <section className="ab-section" id="about-history">
                        <p className="ab-section-eye">Our History</p>
                        <h2 className="ab-section-title">Seven Decades of Technical Excellence</h2>
                        <div className="ab-section-grid">
                            <div className="ab-section-text">
                                <p>
                                    Cape Coast Technical Institute is a public technical secondary
                                    institution located at Abura in Cape Coast, Central Region of Ghana.
                                    The institute was established to provide quality technical and
                                    vocational education to support national development and skills
                                    acquisition.
                                </p>
                                <p>
                                    Over the years, the school has produced disciplined and skilled
                                    graduates who have contributed meaningfully to industry, higher
                                    education, and society. The institute continues to uphold strong
                                    academic standards while adapting to modern educational demands.
                                </p>
                            </div>
                            <div className="ab-section-image">
                                <img
                                    src="/images/DJI_20260414220551_0662_D.jpg"
                                    alt="Cape Coast Technical Institute campus"
                                />
                            </div>
                        </div>
                    </section>

                    <div className="ab-divider" />

                    {/* Vision & Mission */}
                    <section className="ab-section" id="about-vision">
                        <p className="ab-section-eye">Vision & Mission</p>
                        <h2 className="ab-section-title">What Drives Us</h2>
                        <div className="ab-vm-grid">
                            <div className="ab-vm-card">
                                <div className="ab-vm-icon">
                                    <i className="bi bi-eye-fill"></i>
                                </div>
                                <h3>Our Vision</h3>
                                <p>
                                    To be a leading technical secondary institution in Ghana,
                                    recognized for academic excellence, innovation, discipline,
                                    and the development of skilled and responsible graduates.
                                </p>
                            </div>
                            <div className="ab-vm-card">
                                <div className="ab-vm-icon">
                                    <i className="bi bi-bullseye"></i>
                                </div>
                                <h3>Our Mission</h3>
                                <p>
                                    To provide quality technical and academic education through
                                    effective teaching, practical training, and character
                                    development, equipping students with the skills and values
                                    needed for lifelong success.
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="ab-divider" />

                    {/* Core Values */}
                    <section className="ab-section" id="about-values">
                        <p className="ab-section-eye">Core Values</p>
                        <h2 className="ab-section-title">What We Stand For</h2>
                        <div className="ab-values-grid">
                            {CORE_VALUES.map((v) => (
                                <div className="ab-value-card" key={v.label}>
                                    <i className={`bi ${v.icon}`}></i>
                                    <span>{v.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="ab-divider" />

                    {/* Principal */}
                    <section className="ab-section" id="about-principal">
                        <p className="ab-section-eye">Principal's Message</p>
                        <h2 className="ab-section-title">A Word from Our Principal</h2>
                        <div className="ab-principal-card">
                            <div className="ab-principal-left">
                                <img src={principalImage} alt="Principal" />
                                <div className="ab-principal-name">Mr. [Principal Name]</div>
                                <div className="ab-principal-title">Principal, CCTI</div>
                            </div>
                            <div className="ab-principal-right">
                                <blockquote className="ab-principal-quote">
                                    "At Cape Coast Technical Institute, we believe that education extends
                                    beyond the classroom. Our administration, staff, and stakeholders
                                    are committed to creating a safe, disciplined, and supportive
                                    learning environment where students can thrive academically and socially."
                                </blockquote>
                                <p className="ab-principal-text">
                                    We welcome parents, guardians, and partners to work with us as we
                                    continue to build a strong foundation for the future of our students.
                                </p>
                                <Link to="/admissions" className="ab-principal-cta">
                                    Begin Your Journey
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    )
}