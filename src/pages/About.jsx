import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import campusImage from "../assets/images/campus1.jpg"
import principalImage from "../assets/images/principal.jpg"

export default function About() {
    return (
        <>
            {/* Page Header */}
            <PageHeader
                title="About Us"
                subtitle="Learn more about our history, vision, mission, and values"
                variant="about"
            />

            {/* ================= HISTORY ================= */}
            <section className="about-history py-5">
                <div className="container">
                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">
                            <h2 className="section-title mb-4">Our History</h2>
                            <p>
                                Cape Coast Technical Institute is a public technical secondary
                                institution located at Abura in Cape Coast, Central Region of Ghana.
                                The institute was established to provide quality technical and
                                vocational education to support national development and skills
                                acquisition.
                            </p>

                            <p>
                                Over the years, the school has produced disciplined and skilled
                                graduates who have contributed meaningfully to industry, higher
                                education, and society. The institute continues to uphold strong
                                academic standards while adapting to modern educational demands.
                            </p>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-image-wrapper">
                                <img
                                    src={campusImage}
                                    alt="Campus"
                                    className="img-fluid rounded shadow"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= VISION & MISSION ================= */}
            <section className="about-vision-section py-5">
                <div className="container">
                    <div className="row g-4">

                        <div className="col-md-6">
                            <div className="vision-card h-100">
                                <h3>Our Vision</h3>
                                <p>
                                    To be a leading technical secondary institution in Ghana,
                                    recognized for academic excellence, innovation, discipline,
                                    and the development of skilled and responsible graduates.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="vision-card h-100">
                                <h3>Our Mission</h3>
                                <p>
                                    To provide quality technical and academic education through
                                    effective teaching, practical training, and character
                                    development, equipping students with the skills and values
                                    needed for lifelong success.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ================= CORE VALUES ================= */}
            <section className="about-values py-5">
                <div className="container">
                    <h2 className="section-title text-center mb-5">
                        Our Core Values
                    </h2>

                    <div className="row text-center g-4">

                        {[
                            "Discipline and Integrity",
                            "Academic and Technical Excellence",
                            "Respect and Responsibility",
                            "Innovation and Creativity",
                            "Teamwork and Leadership",
                            "Commitment to National Development"
                        ].map((value, index) => (
                            <div key={index} className="col-md-4">
                                <div className="value-card">
                                    <i className="bi bi-award-fill"></i>
                                    <p>{value}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* ================= PRINCIPAL MESSAGE ================= */}
            <section className="about-message py-5">
                <div className="container">
                    <div className="message-box row align-items-center g-5">

                        {/* Principal Image */}
                        <div className="col-md-4 text-center">
                            <div className="principal-image-wrapper">
                                <img
                                    src={principalImage}   // replace with real image later
                                    alt="Principal"
                                    className="principal-image"
                                />
                            </div>
                            <h5 className="principal-name mt-3 mb-1">
                                Mr. [Principal Name]
                            </h5>
                            <p className="principal-title text-muted">
                                Principal
                            </p>
                        </div>

                        {/* Message Content */}
                        <div className="col-md-8">
                            <h2 className="mb-4 section-title">
                                Message from the Principal
                            </h2>

                            <p>
                                At Cape Coast Technical Institute, we believe that education extends
                                beyond the classroom. Our administration, staff, and stakeholders
                                are committed to creating a safe, disciplined, and supportive
                                learning environment where students can thrive academically and socially.
                            </p>

                            <p>
                                We welcome parents, guardians, and partners to work with us as we
                                continue to build a strong foundation for the future of our students.
                            </p>

                            <Link to="/admissions" className="apply-btn mt-3">
                                Begin Your Journey
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
