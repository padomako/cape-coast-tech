import { Link } from "react-router-dom"

export default function News() {
    return (
        <section className="py-5 bg-light">
            <div className="container">

                {/* Section Heading */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-primary">
                        News & Announcements
                    </h2>
                    <p className="text-muted">
                        Stay updated with the latest information from Cape Coast Technical Institute
                    </p>
                </div>

                {/* News Items */}
                <div className="row g-4">

                    {/* News Item 1 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <small className="text-muted d-block mb-2">
                                    Admissions • July 2025
                                </small>
                                <h5 className="card-title fw-bold">
                                    2025/2026 Academic Year Admissions Open
                                </h5>
                                <p className="card-text">
                                    Applications are now open for prospective students seeking
                                    admission into Cape Coast Technical Institute.
                                </p>
                                <Link to="/admissions" className="btn btn-outline-primary btn-sm">
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* News Item 2 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <small className="text-muted d-block mb-2">
                                    Academics • June 2025
                                </small>
                                <h5 className="card-title fw-bold">
                                    Mid-Semester Examinations Timetable Released
                                </h5>
                                <p className="card-text">
                                    Students are advised to check the academic office notice board
                                    for the full examination timetable.
                                </p>
                                <Link to="/academics" className="btn btn-outline-primary btn-sm">
                                    View Details →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* News Item 3 */}
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <small className="text-muted d-block mb-2">
                                    Student Life • May 2025
                                </small>
                                <h5 className="card-title fw-bold">
                                    Inter-House Sports Competition Announced
                                </h5>
                                <p className="card-text">
                                    The annual inter-house sports competition will take place on
                                    campus. All students are encouraged to participate.
                                </p>
                                <Link to="/students" className="btn btn-outline-primary btn-sm">
                                    Learn More →
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* View All */}
                <div className="text-center mt-4">
                    <Link to="/news" className="btn btn-primary">
                        View All News
                    </Link>
                </div>

            </div>
        </section>
    )
}
