import { Link } from "react-router-dom"

const highlights = [
    {
        title: "Sports & Athletics",
        description:
            "CCTI students participate in the Central Region TVET Inter-Institute Sports Competition and in-house tournaments in football, athletics, volleyball, and more.",
        image: "/images/CENTRAL%20REGION%20TVET%20INTER%20INSTITUTE%20SPORTS%20COMPETITION/2.jpg",
    },
    {
        title: "Cultural Events",
        description:
            "From the African Union Parade to Green Day celebrations, our students take part in cultural activities that celebrate identity, community, and the environment.",
        image: "/images/AFRICAN%20UNION%20PARADE/2.jpg",
    },
    {
        title: "Practical Workshops",
        description:
            "Every week, students spend significant time in workshops across all trade areas — building real skills while learning from experienced instructors.",
        image: "/images/BUILDING%20AND%20CONSTRUCTION%20PRACTICAL%20SESSION/2.jpg",
    },
    {
        title: "Catering & Hospitality",
        description:
            "Students in the Hospitality and Catering programme gain hands-on experience preparing meals, managing events, and serving the CCTI community.",
        image: "/images/CATERING/3.jpg",
    },
    {
        title: "Electrical & Electronics",
        description:
            "Students get real practice wiring installations, testing components, and troubleshooting electronic systems in dedicated lab spaces.",
        image: "/images/ELECTRICALS%20PRACTICE%20SESSION/banner_bg1.jpg",
    },
    {
        title: "Creative Arts",
        description:
            "Our creative art programme gives students space to draw, paint, sculpt, and experiment with design — producing work they can be proud of.",
        image: "/images/PLUMBING%20PRACTICAL%20SESSION/1.jpg",
    },
]

export default function CampusLife() {
    return (
        <div className="student-life-subpage">

            {/* HERO */}
            <section className="subpage-hero">
                <img
                    src="/images/CENTRAL%20REGION%20TVET%20INTER%20INSTITUTE%20SPORTS%20COMPETITION/2.jpg"
                    alt="Campus Life"
                    className="subpage-hero-image"
                />
                <div className="subpage-hero-overlay">
                    <div className="container-xl">
                        <nav className="subpage-breadcrumb">
                            <Link to="/students">Student Life</Link>
                            <i className="bi bi-chevron-right"></i>
                            <span>Campus Life</span>
                        </nav>
                        <h1>Campus Life</h1>
                        <p>
                            Discover the clubs, sports, cultural events, and everyday moments
                            that shape the CCTI student experience — from practical workshops
                            to parades and celebrations.
                        </p>
                    </div>
                </div>
            </section>

            {/* HIGHLIGHTS GRID */}
            <section className="campus-highlights">
                <div className="container-xl">
                    <div className="student-life-section-header">
                        <p className="eyebrow-line">A day in the life</p>
                        <h2 className="section-serif-title">Life at Cape Coast Technical Institute</h2>
                    </div>

                    <div className="campus-grid">
                        {highlights.map((h) => (
                            <article className="campus-card" key={h.title}>
                                <div className="campus-card-image">
                                    <img src={h.image} alt={h.title} />
                                </div>
                                <div className="campus-card-body">
                                    <h3>{h.title}</h3>
                                    <p>{h.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
