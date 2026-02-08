export default function Welcome() {
    return (
        <section className="py-5 bg-light">
            <div className="container">
                <div className="row align-items-center g-5">

                    <div className="col-md-6">
                        <h2 className="fw-bold text-primary mb-3">
                            Welcome to Cape Coast Technical Institute
                        </h2>

                        <p>
                            Cape Coast Technical Institute is a reputable technical secondary
                            institution located at Abura in Cape Coast. The school is committed
                            to providing quality technical and academic education.
                        </p>

                        <p>
                            Through dedicated staff and a disciplined learning environment,
                            students are prepared for higher education, industry, and national
                            development.
                        </p>

                        <a href="/about" className="btn btn-primary mt-3">
                            Learn More About Us
                        </a>
                    </div>

                    <div className="col-md-6">
                        <div className="bg-white border rounded p-5 text-center">
                            <small className="text-muted">
                                Campus / Classroom Image
                            </small>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
