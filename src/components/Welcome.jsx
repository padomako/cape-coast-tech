export default function Welcome() {
    return (
        <section className="welcome-section">
            <div className="container">
                <div className="row align-items-center g-5">

                    {/* LEFT: TEXT */}
                    <div className="col-md-6">
                        <h2 className="fw-bold text-primary mb-4">
                            Welcome to Cape Coast Technical Institute
                        </h2>

                        <p className="text-light opacity-75 mb-3">
                            Cape Coast Technical Institute is a reputable technical secondary
                            institution located at Abura in Cape Coast. The school is committed
                            to providing quality technical and academic education.
                        </p>

                        <p className="text-light opacity-75">
                            Through dedicated staff and a disciplined learning environment,
                            students are prepared for higher education, industry, and national
                            development.
                        </p>

                        <div className="mt-4">
                            <a href="/about" className="btn btn-primary">
                                Learn More About Us
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: IMAGE */}
                    <div className="col-md-6 pb-10 pb-md-0">
                        <div className="gold-frame bg-dark">
                            <img
                                src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                                alt="Campus Life"
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
