import { Link } from "react-router-dom"

export default function WeekendTraining() {
    return (
        <section className="weekend-training-section section-padding">
            <div className="container">
                <div className="row align-items-center g-5">

                    {/* LEFT: IMAGE */}
                    <div className="col-lg-6">
                        <div className="weekend-image-wrap">
                            <img
                                src="/images/ELECTRICALS%20PRACTICE%20SESSION/banner_bg1.jpg"
                                alt="Weekend Industrial Training"
                                className="img-fluid rounded"
                            />
                            <div className="weekend-image-badge">
                                <i className="bi bi-tools"></i>
                                <span>Hands-On Training</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: TEXT */}
                    <div className="col-lg-6">
                        <p className="text-uppercase fw-semibold mb-2" style={{ color: "var(--brand-teal)", letterSpacing: "2px", fontSize: "0.85rem" }}>
                            Weekend Programmes
                        </p>
                        <h2 className="fw-bold text-primary mb-4">
                            Weekend Industrial Training Programs
                        </h2>

                        <p className="text-light opacity-75 mb-4">
                            Kickstart your journey in the industrial field with our short,
                            hands-on weekend Competency-Based Training programs. Open to everyone,
                            these sessions focus on practical skills designed to empower artisans
                            and individuals ready to build real-world expertise.
                        </p>

                        <ul className="weekend-feature-list">
                            <li><i className="bi bi-check-circle-fill"></i>Short, focused weekend sessions</li>
                            <li><i className="bi bi-check-circle-fill"></i>Competency-Based Training (CBT)</li>
                            <li><i className="bi bi-check-circle-fill"></i>Open to artisans & beginners</li>
                        </ul>

                        <div className="mt-4 d-flex gap-3 flex-wrap">
                            <Link to="/weekend-training" className="btn btn-primary">
                                Learn More
                            </Link>
                            <Link to="/weekend-training#apply" className="btn btn-outline-teal">
                                Apply
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
