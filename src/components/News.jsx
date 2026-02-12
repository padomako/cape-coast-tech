export default function News() {
    return (
        <section className="section-soft section-padding">
            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="fw-bold text-primary">
                        News & Announcements
                    </h2>
                    <div className="gold-divider"></div>
                    <p className="text-light opacity-75">
                        Stay informed with the latest updates from the Institute
                    </p>
                </div>

                <div className="row g-4">

                    <div className="col-md-4">
                        <div className="bg-dark p-4 h-100 border border-warning">
                            <small className="text-muted">Announcement</small>
                            <h5 className="text-primary fw-bold mt-2">
                                Admission for New Students
                            </h5>
                            <p className="text-light opacity-75">
                                Admission is open for qualified BECE graduates for the new
                                academic year.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="bg-dark p-4 h-100 border border-warning">
                            <small className="text-muted">Academic</small>
                            <h5 className="text-primary fw-bold mt-2">
                                Mid-Semester Examinations
                            </h5>
                            <p className="text-light opacity-75">
                                Students are reminded to prepare adequately for upcoming
                                examinations.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="bg-dark p-4 h-100 border border-warning">
                            <small className="text-muted">Event</small>
                            <h5 className="text-primary fw-bold mt-2">
                                Speech & Prize Giving Day
                            </h5>
                            <p className="text-light opacity-75">
                                The annual Speech and Prize Giving Day will be held later this
                                term.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="text-center mt-5">
                    <a href="/news" className="btn btn-primary">
                        View All Announcements
                    </a>
                </div>

            </div>
        </section>
    )
}
