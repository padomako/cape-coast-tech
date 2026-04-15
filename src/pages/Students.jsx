import { Link } from "react-router-dom"

const studentLifeCards = [
    {
        title: "Campus Life",
        eyebrow: "Life at CCTI",
        description:
            "Discover the clubs, sports, cultural events, and everyday moments that shape the CCTI student experience — from practical workshops to parades and celebrations.",
        image: "/images/CENTRAL%20REGION%20TVET%20INTER%20INSTITUTE%20SPORTS%20COMPETITION/2.jpg",
        link: "/student-life/campus",
        linkText: "Explore campus life",
    },
    {
        title: "Recommended Hostels",
        eyebrow: "Accommodation",
        description:
            "Browse our list of trusted male and female hostels near campus, each with contact details, location, and cost per semester so you can plan with confidence.",
        image: "/images/GREEN%20DAY%20CELEBRATION/1.jpg",
        link: "/student-life/hostels",
        linkText: "View recommended hostels",
    },
    {
        title: "Student Portal",
        eyebrow: "Log In",
        description:
            "Access your student dashboard, academic records, course materials, and administrative services through the official CCTI Student Portal.",
        image: "/images/ELECTRONICS%20PRACTICAL%20SESSION/5%20%285%29.jpg",
        link: "/student-login",
        linkText: "Go to Student Portal",
    },
    {
        title: "Graduate Documents",
        eyebrow: "Online Transcript System",
        description:
            "Request official transcripts, certificates, and other graduate documents online through our secure Online Transcript System — no need to visit the campus.",
        image: "/images/AFRICAN%20UNION%20PARADE/5.jpg",
        link: "/student-life/graduate-documents",
        linkText: "Request documents",
    },
]

export default function Students() {
    return (
        <div className="student-life-page">

            {/* ============ HERO ============ */}
            <section className="student-life-hero">
                <img
                    src="/images/CENTRAL%20REGION%20TVET%20INTER%20INSTITUTE%20SPORTS%20COMPETITION/1.jpg"
                    alt="Student Life at CCTI"
                    className="student-life-hero-image"
                />
                <div className="student-life-hero-overlay">
                    <div className="container-xl">
                        <p className="eyebrow">Cape Coast Technical Institute</p>
                        <h1>Student Life</h1>
                        <p className="tagline">
                            There can be no school without students. At CCTI, student life is
                            where classroom learning meets real friendships, practical skills,
                            and lasting memories.
                        </p>
                    </div>
                </div>
            </section>

            {/* ============ INTRO ============ */}
            <section className="student-life-intro">
                <div className="container-xl">
                    <blockquote>
                        <p>
                            &ldquo;Cape Coast Technical Institute values its students as the
                            heart of the institution.&rdquo;
                        </p>
                    </blockquote>
                </div>
            </section>

            {/* ============ CARD GRID ============ */}
            <section className="student-life-cards-section">
                <div className="container-xl">

                    <div className="student-life-section-header">
                        <p className="eyebrow-line">Everything you need as a student</p>
                        <h2 className="section-serif-title">Explore Student Resources</h2>
                    </div>

                    <div className="student-life-grid">
                        {studentLifeCards.map((card) => (
                            <Link to={card.link} className="student-life-card" key={card.title}>
                                <div className="student-life-card-image">
                                    <img src={card.image} alt={card.title} />
                                </div>
                                <div className="student-life-card-body">
                                    <p className="student-life-card-eyebrow">{card.eyebrow}</p>
                                    <h3>{card.title}</h3>
                                    <p>{card.description}</p>
                                    <span className="student-life-card-link">
                                        {card.linkText}
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
