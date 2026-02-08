import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* School Name / Logo placeholder */}
                <Link
                    to="/"
                    className="text-lg font-bold text-blue-900"
                    onClick={() => setOpen(false)}
                >
                    Cape Coast Technical Institute
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 font-medium">
                    <Link to="/" className="hover:text-blue-700">Home</Link>
                    <Link to="/about" className="hover:text-blue-700">About</Link>
                    <Link to="/academics" className="hover:text-blue-700">Academics</Link>
                    <Link to="/admissions" className="hover:text-blue-700">Admissions</Link>
                    <Link to="/students" className="hover:text-blue-700">Students</Link>
                    <Link to="/contact" className="hover:text-blue-700">Contact</Link>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-blue-900 text-2xl"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t shadow">
                    <nav className="flex flex-col px-6 py-4 gap-4 font-medium">
                        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                        <Link to="/academics" onClick={() => setOpen(false)}>Academics</Link>
                        <Link to="/admissions" onClick={() => setOpen(false)}>Admissions</Link>
                        <Link to="/students" onClick={() => setOpen(false)}>Students</Link>
                        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    )
}
