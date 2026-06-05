import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { newsItems } from "../data/newsData"

const CATEGORIES = ["All", "Announcements", "Academics", "Stories of Excellence", "Events"]

// Derived from newsData — first item is always the featured story
const featuredStory = newsItems[0]

// Headline list — items 1–3
const headlineList = newsItems.slice(1, 4)

// SRC week feature — find by slug
const srcWeekFeature = newsItems.find((n) => n.slug === "src-week-2026")

// Around campus feature — find by slug
const aroundCampusFeature = newsItems.find((n) => n.slug === "tvet-sports-competition")

// Around campus 3-col grid — items 1–3 (same as headlines)
const aroundCampusColumns = newsItems.slice(1, 4)

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
                        <Link to={`/news/${featuredStory.slug}`} className="news-feature-card">
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
                                    <Link to={`/news/${h.slug}`} className="news-headline-row">
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
            {srcWeekFeature && (
                <section className="src-week-section">
                    <Link to={`/news/${srcWeekFeature.slug}`} className="src-week-card">
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
                    {aroundCampusFeature && (
                        <div className="around-campus-feature">
                            <div className="around-campus-feature-image">
                                <img
                                    src={aroundCampusFeature.image}
                                    alt={aroundCampusFeature.title}
                                />
                            </div>
                            <div className="around-campus-feature-body">
                                <span className="announcement-tag" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                                    {aroundCampusFeature.category}
                                </span>
                                <h3>{aroundCampusFeature.title}</h3>
                                <p>{aroundCampusFeature.excerpt}</p>
                                <Link
                                    to={`/news/${aroundCampusFeature.slug}`}
                                    className="harvard-link"
                                >
                                    <span>Read Full Story</span>
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* 3-column grid — linked to headlines */}
                    <div className="around-campus-grid">
                        {aroundCampusColumns.map((item) => (
                            <article className="around-campus-card" key={item.slug}>
                                <Link
                                    to={`/news/${item.slug}`}
                                    className="around-campus-card-image"
                                >
                                    <img src={item.image} alt={item.title} />
                                </Link>
                                <span className="announcement-tag">{item.category}</span>
                                <h4>
                                    <Link
                                        to={`/news/${item.slug}`}
                                        style={{ color: "inherit", textDecoration: "none" }}
                                    >
                                        {item.title}
                                    </Link>
                                </h4>
                                <p>{item.excerpt}</p>
                                <Link to={`/news/${item.slug}`} className="harvard-link">
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
