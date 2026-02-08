import PageHeader from "../components/PageHeader"

export default function About() {
    return (
        <>
            {/* Standard Page Header */}
            <PageHeader
                title="About Us"
                subtitle="Learn more about our history, vision, mission, and values"
            />

            {/* History */}
            <section className="py-5">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-3">
                        Our History
                    </h2>
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
            </section>

            {/* Vision & Mission */}
            <section className="py-5 bg-light border-top border-bottom">
                <div className="container">
                    <div className="row g-4">

                        {/* Vision */}
                        <div className="col-md-6">
                            <h2 className="fw-bold text-primary mb-3">
                                Our Vision
                            </h2>
                            <p>
                                To be a leading technical secondary institution in Ghana,
                                recognized for academic excellence, innovation, discipline, and
                                the development of skilled and responsible graduates.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="col-md-6">
                            <h2 className="fw-bold text-primary mb-3">
                                Our Mission
                            </h2>
                            <p>
                                To provide quality technical and academic education through
                                effective teaching, practical training, and character
                                development, equipping students with the skills and values needed
                                for lifelong success.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-5">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-4">
                        Our Core Values
                    </h2>

                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li>Discipline and Integrity</li>
                                <li>Academic and Technical Excellence</li>
                                <li>Respect and Responsibility</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Innovation and Creativity</li>
                                <li>Teamwork and Leadership</li>
                                <li>Commitment to National Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Administration Message */}
            <section className="py-5 bg-light border-top">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-3">
                        Message from the Administration
                    </h2>
                    <p>
                        At Cape Coast Technical Institute, we believe that education extends
                        beyond the classroom. Our administration, staff, and stakeholders
                        are committed to creating a safe, disciplined, and supportive
                        learning environment where students can thrive academically and
                        socially.
                    </p>
                    <p>
                        We welcome parents, guardians, and partners to work with us as we
                        continue to build a strong foundation for the future of our students.
                    </p>
                </div>
            </section>
        </>
    )
}
