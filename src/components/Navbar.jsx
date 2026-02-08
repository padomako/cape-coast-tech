import { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/images/logo.png"   // 👈 adjust filename if needed

export default function Navbar() {
    const [open, setOpen] = useState(false)

    const linkClass = ({ isActive }) =>
        "nav-link px-3" + (isActive ? " fw-semibold text-primary" : "")

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 3000,
                background: "#fff",
                borderBottom: "1px solid #e5e7eb",
            }}
        >
            <nav className="container d-flex align-items-center justify-content-between py-2">

                {/* Brand: Logo + Name */}
                <NavLink
                    to="/"
                    className="d-flex align-items-center gap-2 text-decoration-none"
                    onClick={() => setOpen(false)}
                >
                    <img
                        src={logo}
                        alt="Cape Coast Technical Institute Logo"
                        style={{
                            height: "40px",
                            width: "auto",
                        }}
                    />
                    <span className="fw-bold text-primary">
                        Cape Coast Technical Institute
                    </span>
                </NavLink>

                {/* Desktop Menu */}
                <ul className="d-none d-lg-flex list-unstyled mb-0 align-items-center">
                    <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
                    <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
                    <li><NavLink to="/academics" className={linkClass}>Academics</NavLink></li>
                    <li><NavLink to="/admissions" className={linkClass}>Admissions</NavLink></li>
                    <li><NavLink to="/students" className={linkClass}>Students</NavLink></li>
                    <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
                </ul>

                {/* Mobile Toggle */}
                <button
                    className="btn btn-outline-primary d-lg-none"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="d-lg-none bg-white border-top">
                    <ul className="list-unstyled mb-0 py-3 text-center">
                        <li className="py-2"><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
                        <li className="py-2"><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
                        <li className="py-2"><NavLink to="/academics" onClick={() => setOpen(false)}>Academics</NavLink></li>
                        <li className="py-2"><NavLink to="/admissions" onClick={() => setOpen(false)}>Admissions</NavLink></li>
                        <li className="py-2"><NavLink to="/students" onClick={() => setOpen(false)}>Students</NavLink></li>
                        <li className="py-2"><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
                    </ul>
                </div>
            )}
        </header>
    )
}
