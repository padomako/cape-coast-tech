import aboutBanner from "../assets/images/about-banner.jpg"

const headerImages = {
    about: aboutBanner,
    academics: "https://images.unsplash.com/photo-1588072432836-e10032774350"
}

export default function PageHeader({ title, subtitle, variant }) {
    return (
        <section
            className={`page-header page-header-${variant}`}
            style={{
                backgroundImage: headerImages[variant]
                    ? `url(${headerImages[variant]})`
                    : "none"
            }}
        >
            <div className="page-header-overlay">
                <div className="container text-center">
                    <h1 className="page-title">{title}</h1>
                    <p className="page-subtitle">{subtitle}</p>
                </div>
            </div>
        </section>
    )
}
