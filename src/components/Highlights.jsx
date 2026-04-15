const highlights = [
    {
        title: "Academics",
        description: "Well-structured academic and technical programmes aligned with national standards.",
        image: "/images/ELECTRONICS%20PRACTICAL%20SESSION/5%20%283%29.jpg",
        link: "/academics",
        linkText: "Explore Academics",
    },
    {
        title: "Admissions",
        description: "Clear admission guidelines and support for prospective students and parents.",
        image: "/images/AFRICAN%20UNION%20PARADE/1.jpg",
        link: "/academics",
        linkText: "Explore Programmes",
    },
    {
        title: "Student Life",
        description: "Clubs, sports, leadership, and co-curricular activities that build character.",
        image: "/images/CENTRAL%20REGION%20TVET%20INTER%20INSTITUTE%20SPORTS%20COMPETITION/2.jpg",
        link: "/students",
        linkText: "Discover Student Life",
    },
]

export default function Highlights() {
    return (
        <section className="section-dark section-padding">
            <div className="container">

                <div className="text-center mb-5">
                    <p className="text-uppercase fw-semibold mb-2" style={{ color: "var(--brand-teal)", letterSpacing: "2px", fontSize: "0.85rem" }}>
                        Campus Life
                    </p>
                    <h2 className="fw-bold text-primary">
                        Life at Cape Coast Technical Institute
                    </h2>
                    <div className="gold-divider"></div>
                    <p className="text-light opacity-75 mx-auto" style={{ maxWidth: "600px" }}>
                        Academic excellence, discipline, and holistic student development
                    </p>
                </div>

                <div className="row g-4">
                    {highlights.map((item, i) => (
                        <div key={i} className="col-md-4">
                            <div className="highlight-card h-100 text-center">
                                <img src={item.image} alt={item.title} />
                                <div className="p-4">
                                    <h4 className="text-primary fw-bold mb-3">{item.title}</h4>
                                    <p className="text-light opacity-75">
                                        {item.description}
                                    </p>
                                    <a href={item.link} className="btn btn-outline-primary mt-2">
                                        {item.linkText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
