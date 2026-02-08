import PageHeader from "../components/PageHeader"

export default function Students() {
    return (
        <>
            {/* Standard Page Header */}
            <PageHeader
                title="Students"
                subtitle="Student life, leadership, and co-curricular activities"
            />

            {/* Student Life */}
            <section className="py-5">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-3">
                        Student Life
                    </h2>
                    <p>
                        Student life at Cape Coast Technical Institute goes beyond the
                        classroom. The school provides a disciplined and supportive
                        environment that encourages personal growth, teamwork, and leadership.
                    </p>
                </div>
            </section>

            {/* Clubs & Societies */}
            <section className="py-5 bg-light border-top border-bottom">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-4">
                        Clubs and Societies
                    </h2>

                    <div className="row">
                        <div className="col-md-6">
                            <ul>
                                <li>Science and Technology Club</li>
                                <li>ICT / Coding Club</li>
                                <li>Debate and Literary Society</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Religious Fellowships</li>
                                <li>Drama and Cultural Troupe</li>
                                <li>Entrepreneurship Club</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sports */}
            <section className="py-5">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-3">
                        Sports and Games
                    </h2>
                    <p>
                        Sports activities promote physical fitness, teamwork, and school
                        spirit. Students are encouraged to participate in both indoor and
                        outdoor sporting activities.
                    </p>

                    <ul>
                        <li>Football</li>
                        <li>Athletics</li>
                        <li>Basketball</li>
                        <li>Indoor Games</li>
                    </ul>
                </div>
            </section>

            {/* Prefects */}
            <section className="py-5 bg-light border-top border-bottom">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-3">
                        Prefects and Student Leadership
                    </h2>
                    <p>
                        The school operates a structured student leadership system led by
                        prefects. Prefects assist school authorities in maintaining
                        discipline, promoting good conduct, and representing the interests
                        of the student body.
                    </p>
                </div>
            </section>

            {/* Activities */}
            <section className="py-5">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-3">
                        Student Activities
                    </h2>

                    <ul>
                        <li>Inter-school academic competitions</li>
                        <li>Speech and prize-giving ceremonies</li>
                        <li>Cultural and diversity programmes</li>
                        <li>Educational excursions</li>
                        <li>Community service activities</li>
                    </ul>
                </div>
            </section>
        </>
    )
}
