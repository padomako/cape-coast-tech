import { useRef, useState } from "react"
import { Link } from "react-router-dom"

const ON_THIS_PAGE = [
    { id: "residential-life", label: "Residential Life" },
    { id: "recommended-hostels", label: "Recommended Hostels" },
    { id: "student-portal", label: "Student Portal" },
    { id: "graduate-documents", label: "Graduate Documents" },
]

const TODAY_LINKS = [
    "Dining Menu",
    "Academic Calendar",
    "Latest News",
    "Student Report",
    "Student Handbook",
]

const HOSTEL_PREVIEW = [
    { name: "Success Hostel", gender: "Male" },
    { name: "Ekas Hostel", gender: "Male" },
    { name: "Eccles Hostel", gender: "Male" },
    { name: "Quarshie Hostel", gender: "Male" },
    { name: "Erida Hostel", gender: "Male" },
    { name: "Olifred Hostel", gender: "Female" },
    { name: "Andy's Hostel", gender: "Female" },
]

const GRAD_DOC_PREVIEW = [
    "Official Transcript",
    "Certificate Replacement",
    "Letter of Attestation",
    "Course Outline",
]

const RESIDENTIAL_IMAGES = [
    "/images/DJI_20260414220431_0661_D.jpg",
    "/images/DJI_20260414220551_0662_D.jpg",
    "/images/DJI_20260414222003_0663_D.jpg",
    "/images/DJI_20260414222026_0664_D.jpg",
]

export default function Students() {
    const heroVideoRef = useRef(null)
    const [heroPlaying, setHeroPlaying] = useState(true)

    const toggleHero = () => {
        const v = heroVideoRef.current
        if (!v) return
        if (v.paused) { v.play(); setHeroPlaying(true) }
        else { v.pause(); setHeroPlaying(false) }
    }

    const scrollToId = (id) => (e) => {
        e.preventDefault()
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className="student-life-v2">

            {/* ============ SECTION 1 — VIDEO HERO ============ */}
            <section className="sl-video-hero">
                <video
                    ref={heroVideoRef}
                    className="sl-video-hero-media"
                    src="/video/DJI_20260414222736_0670_D.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/DJI_20260414222226_0665_D.jpg"
                />
                <div className="sl-video-hero-overlay" />

                <div className="sl-video-hero-content">
                    <div className="container-xl">
                        <h1 className="sl-video-hero-title">Student Life</h1>
                    </div>
                </div>

                <button
                    type="button"
                    className="admissions-video-toggle"
                    onClick={toggleHero}
                    aria-label={heroPlaying ? "Pause video" : "Play video"}
                >
                    <i className={`bi ${heroPlaying ? "bi-pause-fill" : "bi-play-fill"}`}></i>
                </button>

                <nav className="admissions-video-breadcrumb">
                    <span>Home</span>
                    <i className="bi bi-dot"></i>
                    <span className="current">Student Life</span>
                </nav>
            </section>

            {/* ============ SECTION 2 — ON THIS PAGE + WELCOME HOME ============ */}
            <section className="sl-welcome-section">
                <div className="container-xl">
                    <div className="sl-welcome-grid">

                        <aside className="sl-on-this-page">
                            <p className="sl-otp-title">On This Page:</p>
                            <ul>
                                {ON_THIS_PAGE.map((item) => (
                                    <li key={item.id}>
                                        <a href={`#${item.id}`} onClick={scrollToId(item.id)}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </aside>

                        <div className="sl-welcome-body">
                            <h2 className="section-serif-title">Welcome Home</h2>
                            <p>
                                From your Facilitators and House Parents to your friends and
                                teammates, CapeTech is a vibrant community where you can feel
                                supported and encouraged. No matter where you come from, CapeTech
                                is home.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 3 — TODAY AT CAPETECH ============ */}
            <section className="sl-today-section">
                <div className="container-xl">
                    <div className="sl-today-grid">

                        <div className="sl-today-body">
                            <h2 className="section-serif-title">Today at CapeTech</h2>
                            <p>
                                Need to know what&apos;s on your daily menu or the latest news on
                                campus? Get all the information you need to make it through your
                                day.
                            </p>

                            <div className="sl-quick-links">
                                <span className="sl-quick-links-label">Quick Links</span>
                                <ul>
                                    {TODAY_LINKS.map((l) => (
                                        <li key={l}>
                                            <a href="#" className="harvard-link sl-quick-link">
                                                {l}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="sl-today-image">
                            <img src="/images/DJI_20260414222253_0666_D.jpg" alt="Today at CapeTech" />
                            <span className="sl-today-caption">View the College Calendar</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* ============ SECTION 4 — RESIDENTIAL LIFE ============ */}
            <section className="sl-residential-section" id="residential-life">
                <div className="container-xl">

                    <div className="sl-residential-grid">
                        <div className="sl-residential-text">
                            <p className="sl-residential-eyebrow">Residential Life</p>
                            <p className="sl-residential-blurb">
                                A dynamic campus experience that blends academic focus with social
                                interaction, fostering personal growth, responsibility, and a
                                strong sense of community. Your House is where you eat, sleep —
                                and lay the groundwork for lifelong friendships.
                            </p>
                            <Link to="/student-life/campus" className="harvard-link">
                                Learn more about residential life at CapeTech
                            </Link>
                        </div>

                        <div className="sl-residential-collage">
                            {RESIDENTIAL_IMAGES.map((src, i) => (
                                <div className={`sl-collage-tile sl-collage-tile-${i + 1}`} key={src}>
                                    <img src={src} alt={`CapeTech campus view ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 5 — RECOMMENDED HOSTELS ============ */}
            <section className="sl-list-section" id="recommended-hostels">
                <div className="container-xl">
                    <div className="sl-list-grid">

                        <div className="sl-list-side">
                            <h2 className="section-serif-title">Recommended Hostels</h2>
                            <p>
                                Trusted male and female hostels near Cape Coast Technical
                                Institute. Click any name to view full details on the Recommended
                                Hostels page.
                            </p>
                        </div>

                        <ul className="sl-list">
                            {HOSTEL_PREVIEW.map((h) => (
                                <li key={h.name}>
                                    <Link to="/student-life/hostels" className="harvard-link sl-list-link">
                                        {h.name}
                                        <span className="sl-list-tag">{h.gender}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 6 — STUDENT PORTAL ============ */}
            <section className="sl-portal-section" id="student-portal">
                <img
                    src="/images/DJI_20260414222305_0667_D.jpg"
                    alt="Student Portal"
                    className="sl-portal-image"
                />
                <div className="sl-portal-overlay">
                    <div className="container-xl">
                        <h2>Student Portal</h2>
                        <p>
                            Access your student dashboard, academic records, course materials,
                            and administrative services through the official CCTI student portal.
                        </p>
                        <Link to="/student-login" className="harvard-link">
                            Go To Student Portal
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 7 — GRADUATE DOCUMENTS ============ */}
            <section className="sl-list-section sl-list-section-alt" id="graduate-documents">
                <div className="container-xl">
                    <div className="sl-list-grid">

                        <div className="sl-list-side">
                            <h2 className="section-serif-title">Graduate Documents</h2>
                            <p>
                                Request your official transcripts, certificates, and other
                                graduate documents online. Choose a document type below to open
                                the request form.
                            </p>
                        </div>

                        <ul className="sl-list">
                            {GRAD_DOC_PREVIEW.map((d) => (
                                <li key={d}>
                                    <Link
                                        to="/student-life/graduate-documents?open=request"
                                        className="harvard-link sl-list-link"
                                    >
                                        {d}
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

        </div>
    )
}
