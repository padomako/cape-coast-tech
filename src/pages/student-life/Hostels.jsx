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
        <article className="hostel-card">
            <div className="hostel-card-image">
                <img src={hostel.image} alt={hostel.name} />
                <span className={`hostel-gender-tag ${hostel.gender}`}>
                    <i className={`bi bi-${hostel.gender === "male" ? "gender-male" : "gender-female"}`}></i>
                    {hostel.gender === "male" ? "Male" : "Female"}
                </span>
            </div>
            <div className="hostel-card-body">
                <h3>{hostel.name}</h3>
                <ul className="hostel-details">
                    <li>
                        <i className="bi bi-geo-alt-fill"></i>
                        <div>
                            <span className="label">Location</span>
                            <span className="value">{hostel.location}</span>
                        </div>
                    </li>
                    <li>
                        <i className="bi bi-pin-map-fill"></i>
                        <div>
                            <span className="label">GPS Address</span>
                            <span className="value">{hostel.gpsAddress}</span>
                        </div>
                    </li>
                    <li>
                        <i className="bi bi-person-badge-fill"></i>
                        <div>
                            <span className="label">Manager</span>
                            <span className="value">{hostel.manager}</span>
                        </div>
                    </li>
                    <li>
                        <i className="bi bi-telephone-fill"></i>
                        <div>
                            <span className="label">Contact</span>
                            <span className="value">{hostel.contact}</span>
                        </div>
                    </li>
                </ul>
                <div className="hostel-price">
                    <span className="label">Per Semester</span>
                    <span className="value">{hostel.price}</span>
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
                    src="/images/GREEN%20DAY%20CELEBRATION/1.jpg"
                    alt="Recommended Hostels"
                    className="subpage-hero-image"
                />
                <div className="subpage-hero-overlay">
                    <div className="container-xl">
                        <nav className="subpage-breadcrumb">
                            <Link to="/students">Student Life</Link>
                            <i className="bi bi-chevron-right"></i>
                            <span>Recommended Hostels</span>
                        </nav>
                        <h1>Recommended Hostels</h1>
                        <p>
                            Trusted male and female hostels near Cape Coast Technical Institute.
                            Each listing includes location, GPS address, manager contact, and
                            the cost per semester so you can find the right fit with confidence.
                        </p>
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
                    <div className="hostels-grid">
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
                    <div className="hostels-grid">
                        {femaleHostels.map((h) => (
                            <HostelCard key={h.name} hostel={h} />
                        ))}
                    </div>
                </div>
            </section>

            {/* NOTE */}
            <section className="hostels-note">
                <div className="container-xl">
                    <p>
                        <i className="bi bi-info-circle-fill me-2"></i>
                        Hostel details shown are placeholders. Verified listings, images, and
                        contact information will be updated by the administration shortly.
                    </p>
                </div>
            </section>
        </div>
    )
}
