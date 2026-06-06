import { useEffect, useState, useRef } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchNewsItem, fetchRelatedItems } from "../data/api"

// ── Fade slideshow — used when article has inlineImages[] ─────────────────────
function ArticleSlideshow({ images }) {
    const [current, setCurrent] = useState(0)
    const [fading, setFading] = useState(false)
    const timerRef = useRef(null)

    const goTo = (index) => {
        if (index === current || fading) return
        setFading(true)
        setTimeout(() => { setCurrent(index); setFading(false) }, 350)
    }

    // Reset timer and slide when images change
    useEffect(() => {
        setCurrent(0)
        clearInterval(timerRef.current)
        timerRef.current = setInterval(() => {
            setFading(true)
            setTimeout(() => {
                setCurrent((s) => (s + 1) % images.length)
                setFading(false)
            }, 350)
        }, 4000)
        return () => clearInterval(timerRef.current)
    }, [images.length])

    const img = images[current]

    return (
        <div style={{ margin: "2rem 0 0.75rem", position: "relative" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: "4px", overflow: "hidden", background: "#111" }}>
                <img
                    src={img.src}
                    alt={img.caption || ""}
                    style={{
                        position: "absolute", inset: 0,
                        width: "100%", height: "100%",
                        objectFit: "cover",
                        opacity: fading ? 0 : 1,
                        transition: "opacity 0.35s ease",
                    }}
                />

                {/* Caption overlay */}
                {img.caption && (
                    <div style={{
                        position: "absolute", bottom: 0, left: 0, right: 0,
                        background: "linear-gradient(transparent, rgba(0,0,0,0.65))",
                        padding: "1.5rem 1rem 0.65rem",
                        opacity: fading ? 0 : 1,
                        transition: "opacity 0.35s ease",
                    }}>
                        <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "0.8rem", margin: 0, fontStyle: "italic" }}>
                            {img.caption}
                        </p>
                    </div>
                )}

                {/* Dot indicators */}
                <div style={{
                    position: "absolute", bottom: "0.6rem", right: "0.75rem",
                    display: "flex", gap: "5px", alignItems: "center",
                }}>
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            aria-label={`Go to image ${i + 1}`}
                            style={{
                                width: i === current ? "18px" : "6px",
                                height: "6px",
                                borderRadius: "999px",
                                background: i === current ? "#fff" : "rgba(255,255,255,0.4)",
                                border: "none", cursor: "pointer", padding: 0,
                                transition: "all 0.3s ease",
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

// ── Main article page ─────────────────────────────────────────────────────────
export default function NewsArticle() {
    const { slug } = useParams()
    const [article, setArticle] = useState(null)
    const [related, setRelated] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        window.scrollTo(0, 0)
        fetchNewsItem(slug).then(async (item) => {
            setArticle(item)
            if (item?.relatedSlugs?.length) {
                const relatedItems = await fetchRelatedItems(item.relatedSlugs)
                setRelated(relatedItems)
            } else {
                setRelated([])
            }
            setLoading(false)
        })
    }, [slug])

    if (loading) {
        return (
            <div className="news-article-page" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <p style={{ color: "var(--brand-text-muted)", fontSize: "0.9rem", letterSpacing: "2px", textTransform: "uppercase" }}>
                    Loading...
                </p>
            </div>
        )
    }

    if (!article) {
        return (
            <div className="news-article-page" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                    <p style={{ color: "var(--brand-gold)", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "1rem" }}>404</p>
                    <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", marginBottom: "1rem" }}>Story not found</h1>
                    <p style={{ color: "var(--brand-text-muted)", marginBottom: "2rem" }}>This article may have been moved or removed.</p>
                    <Link to="/announcements" className="article-back">
                        <i className="bi bi-arrow-left"></i> Back to News
                    </Link>
                </div>
            </div>
        )
    }

    // Normalise — support both inlineImages[] and legacy inlineImage string
    const slideImages = article.inlineImages
        ? article.inlineImages
        : article.inlineImage
            ? [{ src: article.inlineImage, caption: article.inlineImageCaption || "" }]
            : null

    return (
        <div className="news-article-page">

            {/* ---- HERO ---- */}
            <div className="article-hero">
                <img src={article.image} alt={article.title} className="article-hero-img" />
                <div className="article-hero-overlay" />
                <div className="article-hero-content">
                    <div className="container-xl">
                        <nav className="subpage-breadcrumb" aria-label="breadcrumb">
                            <Link to="/">Home</Link>
                            <i className="bi bi-chevron-right"></i>
                            <Link to="/announcements">News</Link>
                            <i className="bi bi-chevron-right"></i>
                            <span>{article.category}</span>
                        </nav>
                        <span className="announcement-tag" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                            {article.category}
                        </span>
                        <h1 style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                            fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            fontWeight: 700, color: "#fff",
                            lineHeight: 1.1, letterSpacing: "-0.5px",
                            maxWidth: "820px", margin: 0,
                        }}>
                            {article.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* ---- META ROW ---- */}
            <div className="container-xl">
                <div className="article-meta">
                    <span className="article-meta-item"><i className="bi bi-calendar3"></i>{article.date}</span>
                    <span className="article-meta-item"><i className="bi bi-person"></i>{article.author}</span>
                    <span className="article-meta-item"><i className="bi bi-clock"></i>{article.readTime}</span>
                </div>
            </div>

            {/* ---- BODY ---- */}
            <div className="article-body">

                <Link to="/announcements" className="article-back">
                    <i className="bi bi-arrow-left"></i> Back to News
                </Link>

                {/* Lead paragraph */}
                <p className="article-lead">{article.body[0]}</p>

                {/* Pull quote */}
                {article.pullQuote && (
                    <blockquote className="article-pull-quote">
                        <p>"{article.pullQuote}"</p>
                    </blockquote>
                )}

                {/* Remaining paragraphs — slideshow injected after paragraph index 1 */}
                {article.body.slice(1).map((para, i) => (
                    <div key={i}>
                        {para.includes("\n") ? (
                            <div className="article-para">
                                {para.split("\n").map((line, j) => (
                                    <span key={j} style={{ display: "block", marginBottom: "0.35rem" }}>{line}</span>
                                ))}
                            </div>
                        ) : (
                            <p className="article-para">{para}</p>
                        )}

                        {/* Inject slideshow (or single image) after 2nd paragraph */}
                        {i === 1 && slideImages && (
                            slideImages.length === 1 ? (
                                <>
                                    <img
                                        src={slideImages[0].src}
                                        alt={slideImages[0].caption || ""}
                                        className="article-inline-image"
                                    />
                                    {slideImages[0].caption && (
                                        <p className="article-image-caption">{slideImages[0].caption}</p>
                                    )}
                                </>
                            ) : (
                                <ArticleSlideshow images={slideImages} />
                            )
                        )}
                    </div>
                ))}

                <div className="article-divider" />

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
                                    <Link to={`/announcements/${item.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
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
