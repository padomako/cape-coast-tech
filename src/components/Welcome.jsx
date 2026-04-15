export default function Welcome() {
    return (
        <section className="welcome-section">
            <div className="container">
                <div className="row align-items-center g-5">

                    {/* LEFT: TEXT */}
                    <div className="col-md-6">
                        <p className="text-uppercase fw-semibold mb-2" style={{ color: "var(--brand-teal)", letterSpacing: "2px", fontSize: "0.85rem" }}>
                            Welcome
                        </p>
                        <h2 className="fw-bold text-primary mb-4">
                            Cape Coast Technical Institute
                        </h2>

                        <p className="text-light opacity-75 mb-3">
                            Cape Coast Technical Institute is a reputable Technical and Vocational
                            Education and Training (TVET) Institute located at Abura in Cape Coast.
                            The school is committed to providing practical and technical skills for
                            employment and professional development.
                        </p>

                        <p className="text-light opacity-75">
                            Through dedicated staff and a disciplined learning environment,
                            students are prepared for higher education, industry, and national
                            development.
                        </p>

                        <div className="mt-4 d-flex gap-3">
                            <a href="/about" className="btn btn-primary">
                                Learn More About Us
                            </a>
                            <a href="/admissions" className="btn btn-outline-teal">
                                Begin Registration
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: IMAGE COLLAGE */}
                    <div className="col-md-6 pb-10 pb-md-0">
                        <div className="welcome-image-grid">
                            <div className="welcome-img-main">
                                <img
                                    src="/images/BUILDING%20AND%20CONSTRUCTION%20PRACTICAL%20SESSION/1.jpg"
                                    alt="Construction Practical"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="welcome-img-secondary">
                                <img
                                    src="/images/CATERING/3.jpg"
                                    alt="Catering Class"
                                    className="img-fluid rounded"
                                />
                                <img
                                    src="/images/GREEN%20DAY%20CELEBRATION/1.jpg"
                                    alt="Green Day"
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
