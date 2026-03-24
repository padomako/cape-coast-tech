const headerImages = {
    about: "/images/AFRICAN%20UNION%20PARADE/5.jpg",
    academics: "/images/ELECTRONICS%20PRACTICAL%20SESSION/5%20%285%29.jpg",
    contact: "/images/GREEN%20DAY%20CELEBRATION/4.jpg",
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
