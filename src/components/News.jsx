const newsItems = [
    {
        tag: "Announcement",
        title: "Registration of New Students",
        description: "Registration of fresh students for 2025/2026 academic year is officially closed.",
        image: "/images/AFRICAN%20UNION%20PARADE/2.jpg",
    },
    {
        tag: "Academic",
        title: "2026 May/June NABPTEX Examination",
        description: "The 2026 May/June NABPTEX examination is scheduled to begin on 18 May 2026. All students are advised to collect their index slips from their respective department heads.",
        image: "/images/PLUMBING%20PRACTICAL%20SESSION/1.jpg",
    },
    {
        tag: "Event",
        title: "Speech & Prize Giving Day",
        description: "The annual Speech and Prize Giving Day will be held later this term.",
        image: "/images/GREEN%20DAY%20CELEBRATION/3.jpg",
    },
]

export default function News() {
    return (
        <section className="section-soft section-padding">
            <div className="container">

                <div className="text-center mb-5">
                    <p className="text-uppercase fw-semibold mb-2" style={{ color: "var(--brand-teal)", letterSpacing: "2px", fontSize: "0.85rem" }}>
                        Stay Updated
                    </p>
                    <h2 className="fw-bold text-primary">
                        News & Announcements
                    </h2>
                    <div className="gold-divider"></div>
                    <p className="text-light opacity-75 mx-auto" style={{ maxWidth: "600px" }}>
                        Stay informed with the latest updates from the Institute
                    </p>
                </div>

                <div className="row g-4">
                    {newsItems.map((item, i) => (
                        <div key={i} className="col-md-4">
                            <div className="news-card h-100">
                                <div className="news-card-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="news-card-body">
                                    <span className="news-tag">{item.tag}</span>
                                    <h5 className="text-primary fw-bold mt-2">
                                        {item.title}
                                    </h5>
                                    <p className="text-light opacity-75">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <a href="/announcements" className="btn btn-primary">
                        View All Announcements
                    </a>
                </div>

            </div>
        </section>
    )
}
