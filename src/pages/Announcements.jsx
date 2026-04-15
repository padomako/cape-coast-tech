const announcements = [
    {
        tag: "Announcement",
        title: "Registration of New Students",
        date: "2025/2026 Academic Year",
        description:
            "Registration of fresh students for 2025/2026 academic year is officially closed. Applicants who completed registration will be notified via their provided contact details.",
        image: "/images/AFRICAN%20UNION%20PARADE/2.jpg",
    },
    {
        tag: "Academic",
        title: "2026 May/June NABPTEX Examination",
        date: "Starts 18 May 2026",
        description:
            "The 2026 May/June NABPTEX examination is scheduled to begin on 18 May 2026. All students are advised to collect their index slips from their respective department heads.",
        image: "/images/PLUMBING%20PRACTICAL%20SESSION/1.jpg",
    },
    {
        tag: "Event",
        title: "Speech & Prize Giving Day",
        date: "Later this term",
        description:
            "The annual Speech and Prize Giving Day will be held later this term. Students, parents, and stakeholders will be duly informed of the date and venue.",
        image: "/images/GREEN%20DAY%20CELEBRATION/3.jpg",
    },
    {
        tag: "Announcement",
        title: "Weekend Industrial Training Programme",
        date: "Ongoing intake",
        description:
            "Our short, hands-on weekend Competency-Based Training programme is open to everyone. Visit the Weekend Training page to learn more and apply.",
        image: "/images/ELECTRICALS%20PRACTICE%20SESSION/banner_bg1.jpg",
    },
    {
        tag: "Event",
        title: "Central Region TVET Inter-Institute Sports Competition",
        date: "Annual",
        description:
            "CCTI continues to participate in the Central Region TVET Inter-Institute Sports Competition, showcasing talent and sportsmanship across the region.",
        image: "/images/CENTRAL%20REGION%20TVET%20INTER%20INSTITUTE%20SPORTS%20COMPETITION/3.jpg",
    },
    {
        tag: "Academic",
        title: "Practical Training Sessions",
        date: "Ongoing",
        description:
            "Students across all trade areas continue to participate in practical training sessions in building, electricals, electronics, plumbing, and creative arts workshops.",
        image: "/images/BUILDING%20AND%20CONSTRUCTION%20PRACTICAL%20SESSION/2.jpg",
    },
]

export default function Announcements() {
    return (
        <section className="announcements-page">
            <div className="container">

                <div className="announcements-header">
                    <p className="text-uppercase fw-semibold mb-2" style={{ color: "var(--brand-teal)", letterSpacing: "2px", fontSize: "0.85rem" }}>
                        Stay Updated
                    </p>
                    <h1>News & Announcements</h1>
                    <p>
                        All the latest news, events, and announcements from Cape Coast Technical Institute.
                    </p>
                </div>

                <div className="announcements-list">
                    {announcements.map((item, i) => (
                        <article key={i} className="announcement-list-item">
                            <img src={item.image} alt={item.title} className="thumb" />
                            <div className="body">
                                <span className="announcement-tag">{item.tag}</span>
                                <h3>{item.title}</h3>
                                <div className="meta">
                                    <i className="bi bi-calendar-event me-2"></i>
                                    {item.date}
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    )
}
