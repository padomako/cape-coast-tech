import PageHeader from "../components/PageHeader"
import { Link } from "react-router-dom"

export default function Academics() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header page-header-academics">
                <div className="page-header-overlay d-flex align-items-center">
                    <div className="container text-center">
                        <h1 className="page-title mb-3">
                            Academics
                        </h1>

                        <p className="page-subtitle mx-auto">
                            Our academic programmes combine strong theoretical foundations
                            with practical technical training to prepare students for industry
                            and higher education.
                        </p>

                        <div className="header-divider mx-auto mt-4"></div>
                    </div>
                </div>
            </section>


            {/* Trade Areas */}
            <section className="section-soft section-padding">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-primary">Trade Areas</h2>
                        <p className="text-muted">
                            Explore our academic programmes organised by specialised trade areas.
                        </p>
                    </div>

                    <div className="row g-4">

                        {/* ENGINEERING */}
                        <div className="col-md-4">
                            <details className="trade-area">
                                <summary className="trade-header">
                                    <i className="bi bi-gear-fill me-2"></i>
                                    ENGINEERING
                                </summary>

                                <ul className="trade-list">
                                    <li><Link to="/academics/automotive-engineering-technology">Automotive Engineering Technology</Link></li>
                                    <li><Link to="/academics/electrical-engineering-technology">Electrical Engineering Technology</Link></li>
                                    <li><Link to="/academics/electronics-engineering">Electronics Engineering</Link></li>
                                    <li><Link to="/academics/mechanical-engineering-technology">Mechanical Engineering Technology</Link></li>
                                    <li><Link to="/academics/refrigeration-and-air-conditioning-technology">Refrigeration and Air-Conditioning Technology</Link></li>
                                    <li><Link to="/academics/welding-and-fabrication-technology">Welding and Fabrication Technology</Link></li>
                                </ul>
                            </details>
                        </div>

                        {/* BUILDING / ART */}
                        <div className="col-md-4">
                            <details className="trade-area">
                                <summary className="trade-header">
                                    <i className="bi bi-building me-2"></i>
                                    BUILDING / ART
                                </summary>

                                <ul className="trade-list">
                                    <li><Link to="/academics/architectural-drafting">Architectural Drafting</Link></li>
                                    <li><Link to="/academics/building-construction-technology">Building Construction Technology</Link></li>
                                    <li><Link to="/academics/creative-art-technology">Creative Art Technology</Link></li>
                                    <li><Link to="/academics/furniture-design-and-construction">Furniture Design and Construction</Link></li>
                                    <li><Link to="/academics/plumbing-and-gas-fitting-technology">Plumbing and Gas Fitting Technology</Link></li>
                                    <li><Link to="/academics/wood-and-fabrication-technology">Wood and Fabrication Technology</Link></li>
                                </ul>
                            </details>
                        </div>

                        {/* BUSINESS / FASH / CAT */}
                        <div className="col-md-4">
                            <details className="trade-area">
                                <summary className="trade-header">
                                    <i className="bi bi-briefcase-fill me-2"></i>
                                    BUSINESS / FASH / CAT
                                </summary>

                                <ul className="trade-list">
                                    <li><Link to="/academics/fashion-designing-technology">Fashion Designing Technology</Link></li>
                                    <li><Link to="/academics/hospitality-and-catering-management">Hospitality and Catering Management</Link></li>
                                    <li><Link to="/academics/business-studies-accounting">Business Studies (Accounting Option)</Link></li>
                                    <li><Link to="/academics/business-studies-information-technology">Business Studies (Information Technology Option)</Link></li>
                                    <li><Link to="/academics/business-studies-keyboarding">Business Studies (Keyboarding Option)</Link></li>
                                </ul>
                            </details>
                        </div>
                    </div>
                </div>
            </section >

            {/* Teaching & Learning Approach */}
            < section className="section-soft section-padding section-separator" >
                <div className="container">

                    {/* Section Header */}
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-primary">
                            Teaching & Learning Approach
                        </h2>
                        <div className="gold-divider"></div>
                        <p className="text-muted mx-auto" style={{ maxWidth: "760px" }}>
                            At Cape Coast Technical Institute, teaching and learning are designed
                            to combine strong academic foundations with hands-on technical training,
                            discipline, and character development.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="row g-4">

                        <div className="col-md-4">
                            <div className="approach-card">
                                <i className="bi bi-tools approach-icon"></i>
                                <h5>Practical-Focused Training</h5>
                                <p>
                                    Students spend significant time in workshops, laboratories,
                                    and studios where theory is translated into real technical skills.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="approach-card">
                                <i className="bi bi-journal-check approach-icon"></i>
                                <h5>Structured Academic Instruction</h5>
                                <p>
                                    Well-planned lessons, continuous assessment, and national
                                    curriculum standards ensure academic excellence and consistency.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="approach-card">
                                <i className="bi bi-people-fill approach-icon"></i>
                                <h5>Discipline & Character Development</h5>
                                <p>
                                    Beyond academics, students are guided to develop discipline,
                                    teamwork, leadership, and responsibility for lifelong success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
