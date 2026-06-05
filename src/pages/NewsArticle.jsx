import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { getNewsItem, getRelatedItems } from "../data/newsData"

export default function NewsArticle() {
    const { slug } = useParams()
    const article = getNewsItem(slug)

    // Scroll to top on each new article
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    // 404 state
    if (!article) {
        return (
            <div className="news-article-page" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                    <p style={{ color: "var(--brand-gold)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "1rem" }}>
                        404
                    </p>
                    <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", marginBottom: "1rem" }}>
                        Story not found
                    </h1>
                    <p style={{ color: "var(--brand-text-muted)", marginBottom: "2rem" }}>
                        This article may have been moved or removed.
                    </p>
                    <Link to="/announcements" className="article-back">
                        <i className="bi bi-arrow-left"></i> Back to News
                    </Link>
                </div>
            </div>
        )
    }

    const related = getRelatedItems(article.relatedSlugs)

    return (
        <div className="news-article-page">

            {/* ---- HERO ---- */}
            <div className="article-hero">
                <img
                    src={article.image}
                    alt={article.title}
                    className="article-hero-img"
                />
                <div className="article-hero-overlay" />
                <div className="article-hero-content">
                    <div className="container-xl">

                        {/* Breadcrumb */}
                        <nav className="subpage-breadcrumb" aria-label="breadcrumb">
                            <Link to="/">Home</Link>
                            <i className="bi bi-chevron-right"></i>
                            <Link to="/announcements">News</Link>
                            <i className="bi bi-chevron-right"></i>
                            <span>{article.category}</span>
                        </nav>

                        {/* Category tag */}
                        <span className="announcement-tag" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                            {article.category}
                        </span>

                        {/* Title */}
                        <h1
                            style={{
                                fontFamily: "'Cormorant Garamond', Georgia, serif",
                                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                                fontWeight: 700,
                                color: "#fff",
                                lineHeight: 1.1,
                                letterSpacing: "-0.5px",
                                maxWidth: "820px",
                                margin: 0,
                            }}
                        >
                            {article.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* ---- META ROW ---- */}
            <div className="container-xl">
                <div className="article-meta">
                    <span className="article-meta-item">
                        <i className="bi bi-calendar3"></i>
                        {article.date}
                    </span>
                    <span className="article-meta-item">
                        <i className="bi bi-person"></i>
                        {article.author}
                    </span>
                    <span className="article-meta-item">
                        <i className="bi bi-clock"></i>
                        {article.readTime}
                    </span>
                </div>
            </div>

            {/* ---- BODY ---- */}
            <div className="article-body">

                {/* Back link (top) */}
                <Link to="/announcements" className="article-back">
                    <i className="bi bi-arrow-left"></i> Back to News
                </Link>

                {/* Lead paragraph */}
                <p className="article-lead">{article.body[0]}</p>

                {/* Pull quote (after first paragraph) */}
                {article.pullQuote && (
                    <blockquote className="article-pull-quote">
                        <p>"{article.pullQuote}"</p>
                    </blockquote>
                )}

                {/* Remaining paragraphs — inline image injected after paragraph 2 */}
                {article.body.slice(1).map((para, i) => (
                    <div key={i}>
                        <p className="article-para">{para}</p>
                        {i === 1 && article.inlineImage && (
                            <>
                                <img
                                    src={article.inlineImage}
                                    alt={article.inlineImageCaption || ""}
                                    className="article-inline-image"
                                />
                                {article.inlineImageCaption && (
                                    <p className="article-image-caption">
                                        {article.inlineImageCaption}
                                    </p>
                                )}
                            </>
                        )}
                    </div>
                ))}

                <div className="article-divider" />

                {/* Back link (bottom) */}
                <Link to="/announcements" className="article-back">
                    <i className="bi bi-arrow-left"></i> Back to News
                </Link>
            </div>

            {/* ---- RELATED STORIES ---- */}
            {related.length > 0 && (
                <div className="article-related">
                    <h2 className="article-related-title">More from Institute News</h2>
                    <div className="around-campus-grid">
                        {related.map((item) => (
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
            )}
        </div>
    )
}
