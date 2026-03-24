import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

const studentLinks = [
    { to: "/students", label: "Campus Life", state: "campus" },
    { to: "/students", label: "Recommended Hostel", state: "hostels" },
    { to: "/student-login", label: "Student Portal" },
    { to: "/students", label: "Graduate Documents", state: "documents" },
]

const academicsDropdown = [
    {
        title: "Engineering",
        icon: "bi-gear-fill",
        links: [
            { to: "/academics/automotive-engineering-technology", label: "Automotive Engineering Technology" },
            { to: "/academics/electrical-engineering-technology", label: "Electrical Engineering Technology" },
            { to: "/academics/electronics-engineering", label: "Electronics Engineering" },
            { to: "/academics/mechanical-engineering-technology", label: "Mechanical Engineering Technology" },
            { to: "/academics/refrigeration-and-air-conditioning-technology", label: "Refrigeration & Air-Conditioning" },
            { to: "/academics/welding-and-fabrication-technology", label: "Welding & Fabrication Technology" },
        ],
    },
    {
        title: "Building / Art",
        icon: "bi-building",
        links: [
            { to: "/academics/architectural-drafting", label: "Architectural Drafting" },
            { to: "/academics/building-construction-technology", label: "Building Construction Technology" },
            { to: "/academics/creative-art-technology", label: "Creative Art Technology" },
            { to: "/academics/furniture-design-and-construction", label: "Furniture Design & Construction" },
            { to: "/academics/plumbing-and-gas-fitting-technology", label: "Plumbing & Gas Fitting Technology" },
            { to: "/academics/wood-and-fabrication-technology", label: "Wood & Fabrication Technology" },
        ],
    },
    {
        title: "Business / Fashion / Catering",
        icon: "bi-briefcase-fill",
        links: [
            { to: "/academics/fashion-designing-technology", label: "Fashion Designing Technology" },
            { to: "/academics/hospitality-and-catering-management", label: "Hospitality & Catering Management" },
            { to: "/academics/business-studies-accounting", label: "Business Studies (Accounting)" },
            { to: "/academics/business-studies-information-technology", label: "Business Studies (IT)" },
            { to: "/academics/business-studies-keyboarding", label: "Business Studies (Keyboarding)" },
        ],
    },
]

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [mobileAcademics, setMobileAcademics] = useState(false)
    const [mobileStudents, setMobileStudents] = useState(false)

    const linkClass = ({ isActive }) =>
        "nav-link px-3" + (isActive ? " fw-semibold text-primary" : "")

    const closeMobile = () => {
        setMobileOpen(false)
        setMobileAcademics(false)
        setMobileStudents(false)
    }

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 3000,
                background: "rgba(10, 22, 40, 0.95)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid rgba(212, 160, 36, 0.25)",
            }}
        >
            <nav className="container d-flex align-items-center justify-content-between py-2">

                {/* Brand */}
                <NavLink
                    to="/"
                    className="d-flex align-items-center gap-2 text-decoration-none"
                    onClick={closeMobile}
                >
                    <img
                        src={logo}
                        alt="Cape Coast Technical Institute Logo"
                        style={{ height: "40px", width: "auto" }}
                    />
                    <span style={{ color: "var(--brand-gold)", fontWeight: 700 }}>
                        Cape Coast Technical Institute
                    </span>
                </NavLink>

                {/* ============ DESKTOP MENU ============ */}
                <ul className="d-none d-lg-flex list-unstyled mb-0 align-items-center">

                    <li>
                        <NavLink to="/" className={linkClass}>Home</NavLink>
                    </li>

                    {/* Academics Mega Dropdown */}
                    <li className="nav-item-dropdown">
                        <NavLink to="/academics" className={linkClass}>Academics</NavLink>
                        <div className="nav-dropdown nav-mega-dropdown">
                            <div className="mega-grid">
                                {academicsDropdown.map((group) => (
                                    <div key={group.title} className="mega-column">
                                        <h6 className="mega-heading">
                                            <i className={`bi ${group.icon} me-2`}></i>
                                            {group.title}
                                        </h6>
                                        {group.links.map((link) => (
                                            <Link key={link.to} to={link.to}>{link.label}</Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className="mega-footer">
                                <Link to="/academics">View All Programmes &rarr;</Link>
                            </div>
                        </div>
                    </li>

                    <li>
                        <NavLink to="/admissions" className={linkClass}>Admissions</NavLink>
                    </li>

                    {/* Students Dropdown */}
                    <li className="nav-item-dropdown">
                        <NavLink to="/students" className={linkClass}>Students</NavLink>
                        <div className="nav-dropdown">
                            {studentLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    state={item.state ? { section: item.state } : undefined}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </li>

                    <li>
                        <NavLink to="/about" className={linkClass}>About</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle d-lg-none"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? "\u2715" : "\u2630"}
                </button>
            </nav>

            {/* ============ MOBILE MENU ============ */}
            {mobileOpen && (
                <div className="mobile-menu show">
                    <ul>
                        <li>
                            <NavLink to="/" onClick={closeMobile}>Home</NavLink>
                        </li>

                        {/* Mobile Academics Accordion */}
                        <li className="mobile-accordion">
                            <button
                                className="mobile-accordion-toggle"
                                onClick={() => setMobileAcademics(!mobileAcademics)}
                            >
                                Academics
                                <span className={`accordion-arrow ${mobileAcademics ? "open" : ""}`}>&#9662;</span>
                            </button>

                            {mobileAcademics && (
                                <div className="mobile-accordion-panel">
                                    <NavLink to="/academics" onClick={closeMobile} className="mobile-view-all">
                                        View All Programmes
                                    </NavLink>
                                    {academicsDropdown.map((group) => (
                                        <div key={group.title} className="mobile-group">
                                            <span className="mobile-group-title">
                                                <i className={`bi ${group.icon} me-2`}></i>
                                                {group.title}
                                            </span>
                                            {group.links.map((link) => (
                                                <Link key={link.to} to={link.to} onClick={closeMobile}>
                                                    {link.label}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li>
                            <NavLink to="/admissions" onClick={closeMobile}>Admissions</NavLink>
                        </li>

                        {/* Mobile Students Accordion */}
                        <li className="mobile-accordion">
                            <button
                                className="mobile-accordion-toggle"
                                onClick={() => setMobileStudents(!mobileStudents)}
                            >
                                Students
                                <span className={`accordion-arrow ${mobileStudents ? "open" : ""}`}>&#9662;</span>
                            </button>

                            {mobileStudents && (
                                <div className="mobile-accordion-panel">
                                    <NavLink to="/students" onClick={closeMobile} className="mobile-view-all">
                                        Students Overview
                                    </NavLink>
                                    {studentLinks.map((item) => (
                                        <Link
                                            key={item.label}
                                            to={item.to}
                                            state={item.state ? { section: item.state } : undefined}
                                            onClick={closeMobile}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li>
                            <NavLink to="/about" onClick={closeMobile}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={closeMobile}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}
