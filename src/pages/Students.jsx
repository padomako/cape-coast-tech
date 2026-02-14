import { useState } from "react"
import { useNavigate } from "react-router-dom"

import CampusLife from "../components/Students/CampusLife"
import Hostels from "../components/Students/Hostels"
import GraduateDocuments from "../components/Students/GraduateDocuments"

import defaultImage from "../assets/images/students-default.jpg"
import gearIcon from "../assets/images/gear.png"

export default function Students() {

    const [active, setActive] = useState("students")
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()

    const menuItems = [
        { id: "campus", label: "CAMPUS LIFE" },
        { id: "hostels", label: "RECOMMENDED HOSTEL" },
        { id: "portal", label: "STUDENT PORTAL" },
        { id: "documents", label: "GRADUATE DOCUMENTS" }
    ]

    const handleClick = (id) => {
        if (id === "portal") {
            navigate("/student-login")
        } else {
            setActive(id)
        }
        setMenuOpen(false) // auto close mobile menu after click
    }

    const getHeader = () => {
        switch (active) {
            case "campus":
                return "CAMPUS LIFE"
            case "hostels":
                return "RECOMMENDED HOSTELS"
            case "documents":
                return "GRADUATE DOCUMENTS"
            default:
                return "STUDENTS"
        }
    }

    const renderContent = () => {
        switch (active) {

            case "campus":
                return <CampusLife />

            case "hostels":
                return <Hostels />

            case "documents":
                return <GraduateDocuments />

            default:
                return (
                    <div className="students-default-content">
                        <div className="student-section">
                            <img
                                src={defaultImage}
                                alt="Students"
                                className="students-main-image"
                            />
                            <p className="students-caption">
                                There can be no school without students.
                                Cape Coast Technical Institute values its students as
                                the heart of the institution.
                            </p>
                        </div>
                    </div>
                )
        }
    }

    return (
        <section className="students-page container py-5">

            {/* HEADER */}
            <div className="students-header text-center mb-4">
                <h2>{getHeader()}</h2>
                <div className="header-divider">
                    <span className="divider-line"></span>
                    <div className="divider-icon-wrapper">
                        <img src={gearIcon} alt="Gear Icon" />
                    </div>
                    <span className="divider-line"></span>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div className="students-mobile-menu d-md-none mb-4">

                <button
                    className="students-menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰ MENU
                </button>

                <ul className={`students-mobile-links ${menuOpen ? "open" : ""}`}>
                    <li
                        className={active === "students" ? "active" : ""}
                        onClick={() => handleClick("students")}
                    >
                        STUDENTS
                    </li>

                    {menuItems.map(item => (
                        <li
                            key={item.id}
                            className={active === item.id ? "active" : ""}
                            onClick={() => handleClick(item.id)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

            </div>

            <div className="row">

                {/* DESKTOP SIDEBAR */}
                <div className="col-lg-3 d-none d-lg-block">
                    <aside className="students-sidebar">

                        <div
                            className={`students-sidebar-header ${active === "students" ? "active" : ""}`}
                            onClick={() => setActive("students")}
                        >
                            STUDENTS
                        </div>

                        <ul className="students-menu">
                            {menuItems.map(item => (
                                <li
                                    key={item.id}
                                    onClick={() => handleClick(item.id)}
                                    className={active === item.id ? "active" : ""}
                                >
                                    <span>{item.label}</span>
                                    <span className="arrow">››</span>
                                </li>
                            ))}
                        </ul>

                    </aside>
                </div>

                {/* CONTENT */}
                <div className="col-lg-9">
                    <div key={active} className="students-content-animate">
                        {renderContent()}
                    </div>
                </div>

            </div>
        </section>
    )
}
