import { useMemo, useState } from "react"
import { Link } from "react-router-dom"

const CATEGORIES = ["All", "Announcements", "Academics", "Stories of Excellence", "Events"]

const featuredStory = {
    title: "Inauguration of Governing Board of Cape Coast Technical Institute",
    image: "/images/DJI_20260414220331_0660_D.jpg",
    category: "Announcements",
    href: "#",
}

const headlineList = [
    {
        title: "2026 May/June NABPTEX Examination",
        category: "Academics",
        href: "#",
    },
    {
        title: "Speech & Prize Giving Day Celebration",
        category: "Events",
        href: "#",
    },
    {
        title: "Registration of New Students for 2025/2026 Academic Year",
        category: "Announcements",
        href: "#",
    },
]

const srcWeekFeature = {
    title: "SRC Week Celebration 2026",
    description: "Promoting unity, leadership, and student engagement through a week of impactful activities.",
    image: "/images/AFRICAN%20UNION%20PARADE/2.jpg",
    href: "#",
}

const aroundCampusFeature = {
    title: "Central Region TVET Inter-Institute Sports Competition",
    description:
        "CCTI continues to participate in the Central Region TVET Inter-Institute Sports Competition, showcasing talent and sportsmanship across the region.",
    image: "/images/CENTRAL%20REGION%20TVET%20INTER%20INSTITUTE%20SPORTS%20COMPETITION/1.jpg",
    category: "Stories of Excellence",
    href: "#",
}

const aroundCampusColumns = [
    {
        title: "2026 May/June NABPTEX Examination",
        excerpt: "All students are advised to collect their index slips from their respective department heads ahead of the May/June examinations.",
        image: "/images/PLUMBING%20PRACTICAL%20SESSION/1.jpg",
        category: "Academics",
        href: "#",
    },
    {
        title: "Speech & Prize Giving Day Celebration",
        excerpt: "Recognising academic excellence, character, and dedication across all trade areas at this year's Speech & Prize Giving Day.",
        image: "/images/GREEN%20DAY%20CELEBRATION/3.jpg",
        category: "Events",
        href: "#",
    },
    {
        title: "Registration of New Students for 2025/2026 Academic Year",
        excerpt: "Notice to placed applicants regarding registration dates, fees, and required documents for the 2025/2026 academic year.",
        image: "/images/AFRICAN%20UNION%20PARADE/5.jpg",
        category: "Announcements",
        href: "#",
    },
]

export default function Announcements() {
    const [active, setActive] = useState("All")

    const filteredHeadlines = useMemo(() => {
        if (active === "All") return headlineList
        return headlineList.filter((h) => h.category === active)
    }, [active])

    return (
        <div className="institute-news-page">

            {/* ============ SECTION 1 — INSTITUTE NEWS ============ */}
            <section className="institute-news-hero">
                <div className="container-xl">
                    <h1 className="institute-news-title">Institute News</h1>

                    <nav className="institute-news-tabs" aria-label="News categories">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                className={`news-tab ${active === cat ? "active" : ""}`}
                                onClick={() => setActive(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </nav>

                    <div className="institute-news-feature-grid">
                        {/* Big featured story */}
                        <Link to={featuredStory.href} className="news-feature-card">
                            <div className="news-feature-image">
                                <img src={featuredStory.image} alt={featuredStory.title} />
                            </div>
                            <div className="news-feature-overlay">
                                <h2>{featuredStory.title}</h2>
                                <span className="harvard-link">
                                    Read Full Story <i className="bi bi-arrow-right ms-1"></i>
                                </span>
                            </div>
                        </Link>

                        {/* Right-hand headlines */}
                        <ul className="news-headline-list">
                            {filteredHeadlines.length === 0 && (
                                <li className="news-empty">
                                    No stories under &ldquo;{active}&rdquo; right now.
                                </li>
                            )}
                            {filteredHeadlines.map((h) => (
                                <li key={h.title}>
                                    <Link to={h.href} className="news-headline-row">
                                        <span className="news-headline-text">{h.title}</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ============ SECTION 2 — SRC WEEK FEATURE ============ */}
            <section className="src-week-section">
                <Link to={srcWeekFeature.href} className="src-week-card">
                    <img src={srcWeekFeature.image} alt={srcWeekFeature.title} />
                    <div className="src-week-overlay">
                        <div className="container-xl">
                            <h2>{srcWeekFeature.title}</h2>
                            <p>{srcWeekFeature.description}</p>
                            <span className="harvard-link">
                                Read Full Story <i className="bi bi-arrow-right ms-1"></i>
                            </span>
                        </div>
                    </div>
                </Link>
            </section>

            {/* ============ SECTION 3 — ALL NEWS ============ */}
            <section className="around-campus-section">
                <div className="container-xl">
                    <h2 className="section-serif-title around-campus-title">All News</h2>

                    {/* Around-campus feature row */}
                    <div className="around-campus-feature">
                        <div className="around-campus-feature-image">
                            <img src={aroundCampusFeature.image} alt={aroundCampusFeature.title} />
                        </div>
                        <div className="around-campus-feature-body">
                            <h3>{aroundCampusFeature.title}</h3>
                            <p>{aroundCampusFeature.description}</p>
                            <Link to={aroundCampusFeature.href} className="harvard-link">
                                Read Full Story <i className="bi bi-arrow-right ms-1"></i>
                            </Link>
                        </div>
                    </div>

                    {/* 3 column row, linked to headlines in section 1 */}
                    <div className="around-campus-grid">
                        {aroundCampusColumns.map((c) => (
                            <article className="around-campus-card" key={c.title}>
                                <div className="around-campus-card-image">
                                    <img src={c.image} alt={c.title} />
                                </div>
                                <h4>{c.title}</h4>
                                <p>{c.excerpt}</p>
                                <Link to={c.href} className="harvard-link">
                                    Read Full Story <i className="bi bi-arrow-right ms-1"></i>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}
