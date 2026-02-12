export default function Highlights() {
    return (
        <section className="section-dark section-padding">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold text-primary">
                        Life at Cape Coast Technical Institute
                    </h2>
                    <div className="gold-divider"></div>
                    <p className="text-light opacity-75">
                        Academic excellence, discipline, and holistic student development
                    </p>
                </div>

                <div className="row g-4">

                    {/* Academics */}
                    <div className="col-md-4">
                        <div className="gold-frame highlight-card h-100 text-center p-4">
                            <h4 className="text-primary fw-bold mb-3">Academics</h4>
                            <p className="text-light opacity-75">
                                Well-structured academic and technical programmes aligned with
                                national standards.
                            </p>
                            <a href="/academics" className="btn btn-outline-primary mt-3">
                                Explore Academics
                            </a>
                        </div>
                    </div>

                    {/* Admissions */}
                    <div className="col-md-4">
                        <div className="gold-frame highlight-card h-100 text-center p-4">
                            <h4 className="text-primary fw-bold mb-3">Admissions</h4>
                            <p className="text-light opacity-75">
                                Clear admission guidelines and support for prospective students
                                and parents.
                            </p>
                            <a href="/admissions" className="btn btn-outline-primary mt-3">
                                View Admissions
                            </a>
                        </div>
                    </div>

                    {/* Student Life */}
                    <div className="col-md-4">
                        <div className="gold-frame highlight-card h-100 text-center p-4">
                            <h4 className="text-primary fw-bold mb-3">Student Life</h4>
                            <p className="text-light opacity-75">
                                Clubs, sports, leadership, and co-curricular activities that
                                build character.
                            </p>
                            <a href="/students" className="btn btn-outline-primary mt-3">
                                Discover Student Life
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
