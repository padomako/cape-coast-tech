import { Link } from "react-router-dom"

export default function Highlights() {
    return (
        <section className="py-5 bg-white">
            <div className="container">

                {/* Section Heading */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-primary">
                        Life at Cape Coast Technical Institute
                    </h2>
                    <p className="text-muted">
                        Academic excellence, clear admissions process, and vibrant student life
                    </p>
                </div>

                {/* Cards */}
                <div className="row g-4">

                    {/* Academics */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Academics</h5>
                                <p className="card-text">
                                    Well-structured academic and technical programmes aligned with
                                    national curriculum and industry standards.
                                </p>
                                <Link to="/academics" className="btn btn-outline-primary btn-sm">
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Admissions */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Admissions</h5>
                                <p className="card-text">
                                    Clear admission requirements and transparent processes to guide
                                    prospective students and parents.
                                </p>
                                <Link to="/admissions" className="btn btn-outline-primary btn-sm">
                                    Apply Now →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Student Life */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Student Life</h5>
                                <p className="card-text">
                                    Clubs, sports, leadership opportunities, and activities that
                                    build discipline, confidence, and teamwork.
                                </p>
                                <Link to="/students" className="btn btn-outline-primary btn-sm">
                                    Explore →
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
