import { useState, useEffect, useMemo, useRef } from "react"
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import logo from "../assets/images/logo.png"
import { programmes } from "../data/programmes"

const exploreLinks = [
    { to: "/academics", label: "Academics" },
    { to: "/programmes", label: "All Programmes" },
    { to: "/weekend-training", label: "Weekend Industrial Training" },
    { to: "/admissions", label: "Admissions" },
    { to: "/announcements", label: "News & Announcements" },
]

const academicsGroups = [
    {
        title: "Engineering",
        links: [
            { to: "/academics/automotive-engineering-technology", label: "Automotive Engineering" },
            { to: "/academics/electrical-engineering-technology", label: "Electrical Engineering" },
            { to: "/academics/electronics-engineering", label: "Electronics Engineering" },
            { to: "/academics/mechanical-engineering-technology", label: "Mechanical Engineering" },
            { to: "/academics/refrigeration-and-air-conditioning-technology", label: "Refrigeration & Air-Conditioning" },
            { to: "/academics/welding-and-fabrication-technology", label: "Welding & Fabrication" },
        ],
    },
    {
        title: "Building / Art",
        links: [
            { to: "/academics/architectural-drafting", label: "Architectural Drafting" },
            { to: "/academics/building-construction-technology", label: "Building Construction" },
            { to: "/academics/creative-art-technology", label: "Creative Art" },
            { to: "/academics/furniture-design-and-construction", label: "Furniture Design" },
            { to: "/academics/plumbing-and-gas-fitting-technology", label: "Plumbing & Gas Fitting" },
            { to: "/academics/wood-and-fabrication-technology", label: "Wood & Fabrication" },
        ],
    },
    {
        title: "Business / Fashion / Catering",
        links: [
            { to: "/academics/fashion-designing-technology", label: "Fashion Designing" },
            { to: "/academics/hospitality-and-catering-management", label: "Hospitality & Catering" },
            { to: "/academics/business-studies-accounting", label: "Business Studies (Accounting)" },
            { to: "/academics/business-studies-information-technology", label: "Business Studies (IT)" },
            { to: "/academics/business-studies-keyboarding", label: "Business Studies (Keyboarding)" },
        ],
    },
]

const studentLinks = [
    { to: "/students", label: "Student Life Overview" },
    { to: "/student-life/campus", label: "Campus Life" },
    { to: "/student-life/hostels", label: "Recommended Hostels" },
    { to: "/student-login", label: "Student Portal" },
    { to: "/student-life/graduate-documents", label: "Graduate Documents" },
    { to: "/about", label: "About CCTI" },
]

// ====== Static pages index for search ======
const pagesIndex = [
    { to: "/", title: "Home", category: "Page", keywords: "home welcome cape coast technical institute ccti" },
    { to: "/about", title: "About CCTI", category: "Page", keywords: "about history vision mission values principal" },
    { to: "/academics", title: "Academics", category: "Page", keywords: "academics trade areas cbt competency" },
    { to: "/programmes", title: "All Programmes", category: "Page", keywords: "programmes list courses regular weekend" },
    { to: "/weekend-training", title: "Weekend Industrial Training", category: "Page", keywords: "weekend industrial training artisan cbt competency hands-on apply" },
    { to: "/admissions", title: "Admissions", category: "Page", keywords: "admissions register registration apply enroll" },
    { to: "/announcements", title: "News & Announcements", category: "Page", keywords: "announcements news nabptex registration event" },
    { to: "/students", title: "Student Life", category: "Page", keywords: "student life students campus" },
    { to: "/student-life/campus", title: "Campus Life", category: "Student Life", keywords: "campus sports cultural events workshops" },
    { to: "/student-life/hostels", title: "Recommended Hostels", category: "Student Life", keywords: "hostels accommodation male female hostel boarding" },
    { to: "/student-login", title: "Student Portal", category: "Student Life", keywords: "portal login dashboard records" },
    { to: "/student-life/graduate-documents", title: "Graduate Documents", category: "Student Life", keywords: "transcript documents graduate certificate online transcript system" },
    { to: "/contact", title: "Contact Us", category: "Page", keywords: "contact email phone location address" },
]

function buildSearchIndex() {
    const programmeEntries = programmes.map((p) => ({
        to: `/programmes?programme=${p.slug}`,
        title: p.title,
        category: p.tradeArea,
        keywords: `${p.title} ${p.tradeArea} ${p.description} ${p.careers.join(" ")}`.toLowerCase(),
    }))
    const pageEntries = pagesIndex.map((p) => ({
        ...p,
        keywords: `${p.title} ${p.category} ${p.keywords}`.toLowerCase(),
    }))
    return [...pageEntries, ...programmeEntries]
}

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [activeIndex, setActiveIndex] = useState(0)
    const [trackedPath, setTrackedPath] = useState("")
    const searchInputRef = useRef(null)
    const location = useLocation()
    const navigate = useNavigate()

    // Close overlays when pathname/search changes — state-reset-during-render pattern
    const currentPathKey = location.pathname + location.search
    if (trackedPath !== currentPathKey) {
        setTrackedPath(currentPathKey)
        setMenuOpen(false)
        setSearchOpen(false)
        setQuery("")
        setActiveIndex(0)
    }

    const searchIndex = useMemo(() => buildSearchIndex(), [])

    const results = useMemo(() => {
        const q = query.trim().toLowerCase()
        if (!q) return []
        const tokens = q.split(/\s+/).filter(Boolean)
        return searchIndex
            .map((item) => {
                const hay = item.keywords
                const titleLower = item.title.toLowerCase()
                let score = 0
                for (const t of tokens) {
                    if (titleLower.startsWith(t)) score += 10
                    else if (titleLower.includes(t)) score += 6
                    else if (hay.includes(t)) score += 2
                    else return null
                }
                return { ...item, score }
            })
            .filter(Boolean)
            .sort((a, b) => b.score - a.score)
            .slice(0, 12)
    }, [query, searchIndex])

    // Lock body scroll
    useEffect(() => {
        document.body.style.overflow = menuOpen || searchOpen ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [menuOpen, searchOpen])

    // Focus search input when opened (no setState here)
    useEffect(() => {
        if (searchOpen) {
            const t = setTimeout(() => searchInputRef.current?.focus(), 80)
            return () => clearTimeout(t)
        }
    }, [searchOpen])

    // Keyboard handling — Escape + Cmd/Ctrl+K
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") {
                setMenuOpen(false)
                setSearchOpen(false)
            }
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault()
                setMenuOpen(false)
                setSearchOpen(true)
                setActiveIndex(0)
            }
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [])

    const openSearch = () => {
        setMenuOpen(false)
        setSearchOpen(true)
        setActiveIndex(0)
    }

    const onQueryChange = (e) => {
        setQuery(e.target.value)
        setActiveIndex(0)
    }

    const onSearchKeyDown = (e) => {
        if (!results.length) return
        if (e.key === "ArrowDown") {
            e.preventDefault()
            setActiveIndex((i) => (i + 1) % results.length)
        } else if (e.key === "ArrowUp") {
            e.preventDefault()
            setActiveIndex((i) => (i - 1 + results.length) % results.length)
        } else if (e.key === "Enter") {
            e.preventDefault()
            const target = results[activeIndex]
            if (target) navigate(target.to)
        }
    }

    return (
        <>
            <header className="site-topbar">
                <div className="topbar-inner">

                    {/* Brand — stacked wordmark */}
                    <NavLink to="/" className="brand-mark" onClick={() => setMenuOpen(false)}>
                        <img src={logo} alt="CCTI Logo" className="brand-logo" />
                        <span className="brand-wordmark">
                            <span className="brand-line-1">Cape Coast</span>
                            <span className="brand-line-2">Technical Institute</span>
                        </span>
                    </NavLink>

                    {/* Right: Search + Menu */}
                    <div className="topbar-actions">
                        <button
                            type="button"
                            className={`topbar-btn ${searchOpen ? "is-open" : ""}`}
                            aria-label="Search"
                            onClick={openSearch}
                        >
                            <i className="bi bi-search"></i>
                            <span className="topbar-btn-label">Search</span>
                        </button>

                        <button
                            type="button"
                            className={`topbar-btn topbar-menu-btn ${menuOpen ? "is-open" : ""}`}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? (
                                <i className="bi bi-x-lg"></i>
                            ) : (
                                <span className="menu-icon-lines">
                                    <span></span>
                                    <span></span>
                                </span>
                            )}
                            <span className="topbar-btn-label">
                                {menuOpen ? "Close" : "Menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* ================= SEARCH OVERLAY ================= */}
            <div
                className={`search-overlay ${searchOpen ? "is-open" : ""}`}
                role="dialog"
                aria-modal="true"
                onClick={() => setSearchOpen(false)}
            >
                <div className="search-overlay-inner" onClick={(e) => e.stopPropagation()}>

                    <button
                        type="button"
                        className="search-close"
                        aria-label="Close search"
                        onClick={() => setSearchOpen(false)}
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>

                    <p className="search-eyebrow">Search Cape Coast Technical Institute</p>

                    <div className="search-input-wrap">
                        <i className="bi bi-search"></i>
                        <input
                            ref={searchInputRef}
                            type="text"
                            className="search-input"
                            placeholder="Search programmes, pages, and more..."
                            value={query}
                            onChange={onQueryChange}
                            onKeyDown={onSearchKeyDown}
                            autoComplete="off"
                        />
                        {query && (
                            <button
                                type="button"
                                className="search-clear"
                                aria-label="Clear"
                                onClick={() => {
                                    setQuery("")
                                    searchInputRef.current?.focus()
                                }}
                            >
                                <i className="bi bi-x-circle-fill"></i>
                            </button>
                        )}
                    </div>

                    {/* Results or suggestions */}
                    {query.trim() ? (
                        results.length > 0 ? (
                            <div className="search-results">
                                <p className="search-results-count">
                                    {results.length} result{results.length === 1 ? "" : "s"}
                                </p>
                                <ul>
                                    {results.map((r, i) => (
                                        <li key={r.to + r.title}>
                                            <Link
                                                to={r.to}
                                                className={`search-result-item ${i === activeIndex ? "active" : ""}`}
                                                onMouseEnter={() => setActiveIndex(i)}
                                                onClick={() => setSearchOpen(false)}
                                            >
                                                <div className="search-result-body">
                                                    <span className="search-result-category">{r.category}</span>
                                                    <span className="search-result-title">{r.title}</span>
                                                </div>
                                                <i className="bi bi-arrow-right"></i>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div className="search-empty">
                                <i className="bi bi-emoji-frown"></i>
                                <p>No results found for &ldquo;{query}&rdquo;</p>
                                <span>Try a different keyword or browse the menu.</span>
                            </div>
                        )
                    ) : (
                        <div className="search-suggestions">
                            <p className="search-hint-label">Popular searches</p>
                            <div className="search-chip-row">
                                {[
                                    "Electrical Engineering",
                                    "Catering",
                                    "Weekend Training",
                                    "Admissions",
                                    "Hostels",
                                    "Transcript",
                                ].map((term) => (
                                    <button
                                        key={term}
                                        type="button"
                                        className="search-chip"
                                        onClick={() => setQuery(term)}
                                    >
                                        {term}
                                    </button>
                                ))}
                            </div>

                            <p className="search-hint-kbd">
                                <kbd>↑</kbd><kbd>↓</kbd> to navigate
                                <span className="dot"></span>
                                <kbd>Enter</kbd> to open
                                <span className="dot"></span>
                                <kbd>Esc</kbd> to close
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* ================= MENU OVERLAY ================= */}
            <div className={`menu-overlay ${menuOpen ? "is-open" : ""}`} role="dialog" aria-modal="true">
                <div className="menu-overlay-inner">
                    <div className="container-xl">

                        <p className="menu-eyebrow">Explore Cape Coast Technical Institute</p>

                        <div className="menu-grid">

                            {/* Primary big links */}
                            <div className="menu-col menu-col-primary">
                                <h3 className="menu-col-title">Discover</h3>
                                <ul className="menu-big-links">
                                    <li><Link to="/">Home</Link></li>
                                    {exploreLinks.map((l) => (
                                        <li key={l.to + l.label}>
                                            <Link to={l.to}>{l.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Academics groups */}
                            {academicsGroups.map((group) => (
                                <div className="menu-col" key={group.title}>
                                    <h3 className="menu-col-title">{group.title}</h3>
                                    <ul className="menu-small-links">
                                        {group.links.map((l) => (
                                            <li key={l.to}>
                                                <Link to={l.to}>{l.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            {/* Student Life */}
                            <div className="menu-col">
                                <h3 className="menu-col-title">Student Life</h3>
                                <ul className="menu-small-links">
                                    {studentLinks.map((l) => (
                                        <li key={l.to + l.label}>
                                            <Link to={l.to}>{l.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Footer: contact + CTA */}
                        <div className="menu-footer">
                            <div className="menu-contact">
                                <p className="menu-contact-title">Cape Coast Technical Institute</p>
                                <p>P. O. Box DL155, Cape Coast, Central Region, Ghana</p>
                                <p>Digital Address: CC-118-5493</p>
                                <p>
                                    <a href="mailto:capetechedu@gmail.com">capetechedu@gmail.com</a>
                                    <span className="menu-contact-sep">·</span>
                                    <a href="tel:+2333320921708">+233 33 209 21708</a>
                                </p>
                            </div>

                            <Link to="/admissions" className="menu-cta">
                                Begin Registration
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
