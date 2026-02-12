import PageHeader from "../components/PageHeader"

export default function Academics() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header page-header-academics">
                <div className="page-header-overlay">
                    <div className="container text-center">
                        <h1 className="fw-bold text-primary mb-3">
                            Academics
                        </h1>
                        <p className="text-muted mx-auto" style={{ maxWidth: "720px" }}>
                            Our academic programmes combine strong theoretical foundations
                            with practical technical training to prepare students for industry
                            and higher education.
                        </p>
                    </div>
                </div>
            </section>

            { /* Academic Overview 
            <section className="academics-hero">
                <div className="academics-overlay">
                    <div className="container text-center">
                        <h1 className="text-primary fw-bold mb-3">
                            Academics
                        </h1>
                        <p>
                            Cape Coast Technical Institute offers a broad range of technical and
                            academic programmes designed to equip students with practical skills,
                            theoretical knowledge, and strong moral values. Our curriculum follows
                            the Ghana Education Service (GES) standards.
                        </p>
                        <p>
                            Teaching and learning are structured to prepare students for higher
                            education, technical careers, and meaningful contribution to society.
                        </p>
                    </div>
                </div>
            </section>*/}

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
                            <div className="trade-area">
                                <div className="trade-header">
                                    <i className="bi bi-gear-fill me-2"></i>
                                    ENGINEERING
                                </div>

                                <ul className="trade-list">
                                    <li><a href="/academics/automobile-engineering-technology">Automobile Engineering Technology</a></li>
                                    <li><a href="/academics/electrical-engineering-technology">Electrical Engineering Technology</a></li>
                                    <li><a href="/academics/electronics-engineering">Electronics Engineering</a></li>
                                    <li><a href="/academics/mechanical-engineering-technology">Mechanical Engineering Technology</a></li>
                                    <li><a href="/academics/refrigeration-and-air-conditioning-technology">Refrigeration and Air-Conditioning Technology</a></li>
                                    <li><a href="/academics/welding-and-fabrication-technology">Welding and Fabrication Technology</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* BUILDING / ART */}
                        <div className="col-md-4">
                            <div className="trade-area">
                                <div className="trade-header">
                                    <i className="bi bi-building me-2"></i>
                                    BUILDING / ART
                                </div>

                                <ul className="trade-list">
                                    <li><a href="/academics/architectural-drafting">Architectural Drafting</a></li>
                                    <li><a href="/academics/building-construction-technology">Building Construction Technology</a></li>
                                    <li><a href="/academics/creative-art-technology">Creative Art Technology</a></li>
                                    <li><a href="/academics/furniture-design-and-construction">Furniture Design and Construction</a></li>
                                    <li><a href="/academics/plumbing-and-gas-fitting-technology">Plumbing and Gas Fitting Technology</a></li>
                                    <li><a href="/academics/wood-and-fabrication-technology">Wood and Fabrication Technology</a></li>
                                </ul>
                            </div >
                        </div>

                        {/* BUSINESS / FASH / CAT */}
                        <div className="col-md-4">
                            <div className="trade-area">
                                <div className="trade-header">
                                    <i className="bi bi-briefcase-fill me-2"></i>
                                    BUSINESS / FASH / CAT
                                </div>

                                <ul className="trade-list">
                                    <li><a href="/academics/fashion-designing-technology">Fashion Designing Technology</a></li>
                                    <li><a href="/academics/hospitality-and-catering-management">Hospitality and Catering Management</a></li>
                                    <li><a href="/academics/business-studies-accounting">Business Studies (Accounting Option)</a></li>
                                    <li><a href="/academics/business-studies-information-technology">Business Studies (Information Technology Option)</a></li>
                                    <li><a href="/academics/business-studies-keyboarding">Business Studies (Keyboarding Option)</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
            </section >


            {/* Teaching & Learning Approach */}
            <section className="section-soft section-padding section-separator">
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
            </section>
        </>
    )
}
