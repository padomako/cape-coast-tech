import PageHeader from "../components/PageHeader"

export default function Academics() {
    return (
        <>
            {/* Standard Page Header */}
            <PageHeader
                title="Academics"
                subtitle="Programmes, departments, and academic structure"
            />

            {/* Academic Overview */}
            <section className="py-5">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-3">
                        Academic Overview
                    </h2>
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
            </section>

            {/* Departments */}
            <section className="py-5 bg-light border-top border-bottom">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-4">
                        Departments
                    </h2>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="border rounded p-4 h-100">
                                <h5 className="fw-bold">
                                    General Arts Department
                                </h5>
                                <p className="mb-0">
                                    Offers subjects that develop communication skills, critical
                                    thinking, and social awareness.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="border rounded p-4 h-100">
                                <h5 className="fw-bold">
                                    Technical Department
                                </h5>
                                <p className="mb-0">
                                    Focuses on practical and vocational subjects to prepare students
                                    for technical careers and entrepreneurship.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programmes Offered */}
            <section className="py-5">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-4">
                        Programmes Offered
                    </h2>

                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li>General Arts</li>
                                <li>Electrical Installation</li>
                                <li>Building Construction</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Wood Technology</li>
                                <li>Metal Technology</li>
                                <li>Auto Mechanics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Teaching & Learning */}
            <section className="py-5 bg-light border-top border-bottom">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-3">
                        Teaching and Learning Approach
                    </h2>
                    <p>
                        Teaching at Cape Coast Technical Institute combines classroom
                        instruction with workshops, laboratories, and continuous practical
                        assessment. This approach ensures that students gain both theoretical
                        understanding and real-world skills.
                    </p>
                    <p>
                        Our qualified teaching staff are committed to mentoring students and
                        maintaining high academic standards.
                    </p>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="fw-bold text-primary mb-3">
                        Curriculum and Syllabi
                    </h2>
                    <p className="mb-4">
                        Detailed curriculum and subject syllabi are available for download.
                    </p>

                    <button className="btn btn-primary">
                        Download Curriculum (PDF)
                    </button>
                </div>
            </section>
        </>
    )
}
