import { useMemo, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchNewsItems } from "../data/api"

const CATEGORIES = ["All", "Announcements", "Academics", "Stories of Excellence", "Events"]

export default function Announcements() {
    const [active, setActive] = useState("All")
    const [allItems, setAllItems] = useState([])
    const [loading, setLoading] = useState(true)

    // Fetch all news items on mount
    useEffect(() => {
        fetchNewsItems().then((items) => {
            setAllItems(items)
            setLoading(false)
        })
    }, [])

    // Derived data — computed from allItems
    const featuredStory = allItems[0] ?? null
    const headlineList = allItems.slice(1, 4)
    const srcWeekFeature = allItems.find((n) => n.slug === "src-week-2026") ?? null
    const aroundCampusFeat = allItems.find((n) => n.slug === "tvet-sports-competition") ?? null
    const aroundCampusCols = allItems.slice(1, 4)

    const filteredHeadlines = useMemo(() => {
        if (active === "All") return headlineList
        return headlineList.filter((h) => h.category === active)
    }, [active, headlineList])

    // Loading state
    if (loading) {
        return (
            <div className="institute-news-page" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ color: "var(--brand-text-muted)", fontSize: "0.9rem", letterSpacing: "2px", textTransform: "uppercase" }}>
                    Loading...
                </p>
            </div>
        )
    }

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

                    {featuredStory && (
                        <div className="institute-news-feature-grid">

                            {/* Big featured story */}
                            <Link to={`/announcements/${featuredStory.slug}`} className="news-feature-card">
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
                                    <li key={h.slug}>
                                        <Link to={`/announcements/${h.slug}`} className="news-headline-row">
                                            <span className="news-headline-text">{h.title}</span>
                                            <i className="bi bi-arrow-right"></i>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            {/* ============ SECTION 2 — SRC WEEK FEATURE ============ */}
            {srcWeekFeature && (
                <section className="src-week-section">
                    <Link to={`/announcements/${srcWeekFeature.slug}`} className="src-week-card">
                        <img src={srcWeekFeature.image} alt={srcWeekFeature.title} />
                        <div className="src-week-overlay">
                            <div className="container-xl">
                                <h2>{srcWeekFeature.title}</h2>
                                <p>{srcWeekFeature.excerpt}</p>
                                <span className="harvard-link">
                                    Read Full Story <i className="bi bi-arrow-right ms-1"></i>
                                </span>
                            </div>
                        </div>
                    </Link>
                </section>
            )}

            {/* ============ SECTION 3 — ALL NEWS ============ */}
            <section className="around-campus-section">
                <div className="container-xl">
                    <h2 className="section-serif-title around-campus-title">All News</h2>

                    {/* Around-campus feature row */}
                    {aroundCampusFeat && (
                        <div className="around-campus-feature">
                            <div className="around-campus-feature-image">
                                <img src={aroundCampusFeat.image} alt={aroundCampusFeat.title} />
                            </div>
                            <div className="around-campus-feature-body">
                                <span className="announcement-tag" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                                    {aroundCampusFeat.category}
                                </span>
                                <h3>{aroundCampusFeat.title}</h3>
                                <p>{aroundCampusFeat.excerpt}</p>
                                <Link to={`/announcements/${aroundCampusFeat.slug}`} className="harvard-link">
                                    <span>Read Full Story</span>
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* 3-column grid */}
                    <div className="around-campus-grid">
                        {aroundCampusCols.map((item) => (
                            <article className="around-campus-card" key={item.slug}>
                                <Link to={`/announcements/${item.slug}`} className="around-campus-card-image">
                                    <img src={item.image} alt={item.title} />
                                </Link>
                                <span className="announcement-tag">{item.category}</span>
                                <h4>
                                    <Link
                                        to={`/announcements/${item.slug}`}
                                        style={{ color: "inherit", textDecoration: "none" }}
                                    >
                                        {item.title}
                                    </Link>
                                </h4>
                                <p>{item.excerpt}</p>
                                <Link to={`/announcements/${item.slug}`} className="harvard-link">
                                    <span>Read Full Story</span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}
