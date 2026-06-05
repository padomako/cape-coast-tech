import { Link } from "react-router-dom"

const PLACEHOLDER_IMAGE = "/images/BUILDING%20AND%20CONSTRUCTION%20PRACTICAL%20SESSION/3.jpg"

const hostels = [
    // ========== MALE ==========
    {
        name: "Success Hostel",
        gender: "male",
        image: PLACEHOLDER_IMAGE,
        location: "Abura, Cape Coast",
        gpsAddress: "CC-XXX-XXXX",
        manager: "Placeholder Manager Name",
        contact: "+233 XX XXX XXXX",
        price: "GHS XXX",
    },
    {
        name: "Ekas Hostel",
        gender: "male",
        image: PLACEHOLDER_IMAGE,
        location: "Abura, Cape Coast",
        gpsAddress: "CC-XXX-XXXX",
        manager: "Placeholder Manager Name",
        contact: "+233 XX XXX XXXX",
        price: "GHS XXX",
    },
    {
        name: "Eccles Hostel",
        gender: "male",
        image: PLACEHOLDER_IMAGE,
        location: "Abura, Cape Coast",
        gpsAddress: "CC-XXX-XXXX",
        manager: "Placeholder Manager Name",
        contact: "+233 XX XXX XXXX",
        price: "GHS XXX",
    },
    {
        name: "Quarshie Hostel",
        gender: "male",
        image: PLACEHOLDER_IMAGE,
        location: "Abura, Cape Coast",
        gpsAddress: "CC-XXX-XXXX",
        manager: "Placeholder Manager Name",
        contact: "+233 XX XXX XXXX",
        price: "GHS XXX",
    },
    {
        name: "Erida Hostel",
        gender: "male",
        image: PLACEHOLDER_IMAGE,
        location: "Abura, Cape Coast",
        gpsAddress: "CC-XXX-XXXX",
        manager: "Placeholder Manager Name",
        contact: "+233 XX XXX XXXX",
        price: "GHS XXX",
    },

    // ========== FEMALE ==========
    {
        name: "Olifred Hostel",
        gender: "female",
        image: PLACEHOLDER_IMAGE,
        location: "Abura, Cape Coast",
        gpsAddress: "CC-XXX-XXXX",
        manager: "Placeholder Manager Name",
        contact: "+233 XX XXX XXXX",
        price: "GHS XXX",
    },
    {
        name: "Andy's Hostel",
        gender: "female",
        image: PLACEHOLDER_IMAGE,
        location: "Abura, Cape Coast",
        gpsAddress: "CC-XXX-XXXX",
        manager: "Placeholder Manager Name",
        contact: "+233 XX XXX XXXX",
        price: "GHS XXX",
    },
]

function HostelCard({ hostel }) {
    return (
        <article className="hc3-card">
            <img src={hostel.image} alt={hostel.name} className="hc3-img" />
            <div className="hc3-overlay" />

            {/* Default view */}
            <div className="hc3-body">
                <span className={`hc3-tag ${hostel.gender === "male" ? "hc3-tag-male" : "hc3-tag-female"}`}>
                    <i className={`bi bi-${hostel.gender === "male" ? "gender-male" : "gender-female"}`}></i>
                    {hostel.gender === "male" ? "Male" : "Female"}
                </span>
                <h3 className="hc3-name">{hostel.name}</h3>
                <p className="hc3-meta">
                    <i className="bi bi-geo-alt-fill"></i> {hostel.location}
                </p>
                <div className="hc3-price">
                    <span className="hc3-price-label">Per Semester</span>
                    <span className="hc3-price-value">{hostel.price}</span>
                </div>
            </div>

            {/* Hover detail view */}
            <div className="hc3-detail">
                <h3 className="hc3-detail-name">{hostel.name}</h3>
                <div className="hc3-detail-row">
                    <i className="bi bi-geo-alt-fill"></i>
                    <div>
                        <span className="hc3-detail-label">Location</span>
                        <span className="hc3-detail-value">{hostel.location}</span>
                    </div>
                </div>
                <div className="hc3-detail-row">
                    <i className="bi bi-pin-map-fill"></i>
                    <div>
                        <span className="hc3-detail-label">GPS Address</span>
                        <span className="hc3-detail-value">{hostel.gpsAddress}</span>
                    </div>
                </div>
                <div className="hc3-detail-row">
                    <i className="bi bi-person-badge-fill"></i>
                    <div>
                        <span className="hc3-detail-label">Manager</span>
                        <span className="hc3-detail-value">{hostel.manager}</span>
                    </div>
                </div>
                <div className="hc3-detail-row">
                    <i className="bi bi-telephone-fill"></i>
                    <div>
                        <span className="hc3-detail-label">Contact</span>
                        <span className="hc3-detail-value">{hostel.contact}</span>
                    </div>
                </div>
                <div className="hc3-price hc3-detail-price">
                    <span className="hc3-price-label">Per Semester</span>
                    <span className="hc3-price-value">{hostel.price}</span>
                </div>
            </div>
        </article>
    )
}

export default function Hostels() {
    const maleHostels = hostels.filter((h) => h.gender === "male")
    const femaleHostels = hostels.filter((h) => h.gender === "female")

    return (
        <div className="student-life-subpage">

            {/* HERO */}
            <section className="subpage-hero">
                <img
                    src="/images/DJI_20260414222253_0666_D.jpg"
                    alt="Recommended Hostels — aerial view of CapeTech surroundings"
                    className="subpage-hero-image"
                />
                <div className="subpage-hero-overlay">
                    <div className="container-xl">
                        <nav className="subpage-breadcrumb">
                            <Link to="/students">Student Life</Link>
                            <i className="bi bi-chevron-right"></i>
                            <span>Recommended Hostels</span>
                        </nav>
                        <span className="eyebrow-bar"></span>
                        <h1>Recommended Hostels</h1>
                        <p>
                            Trusted male and female hostels near Cape Coast Technical Institute.
                            Each listing includes location, GPS address, manager contact, and
                            the cost per semester so you can find the right fit with confidence.
                        </p>
                    </div>
                    <div className="subpage-scroll-hint">
                        <div className="subpage-scroll-line"></div>
                        Scroll
                    </div>
                </div>
            </section>

            {/* MALE HOSTELS */}
            <section className="hostels-section">
                <div className="container-xl">
                    <div className="hostels-group-header">
                        <h2 className="section-serif-title">Male Hostels</h2>
                        <span className="hostels-count">{maleHostels.length} listings</span>
                    </div>
                    <div className="hc3-grid">
                        {maleHostels.map((h) => (
                            <HostelCard key={h.name} hostel={h} />
                        ))}
                    </div>
                </div>
            </section>

            {/* FEMALE HOSTELS */}
            <section className="hostels-section hostels-section-alt">
                <div className="container-xl">
                    <div className="hostels-group-header">
                        <h2 className="section-serif-title">Female Hostels</h2>
                        <span className="hostels-count">{femaleHostels.length} listings</span>
                    </div>
                    <div className="hc3-grid">
                        {femaleHostels.map((h) => (
                            <HostelCard key={h.name} hostel={h} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}