const headerImages = {
    about: "/images/DJI_20260414220331_0660_D.jpg",
    academics: "/images/DJI_20260414220431_0661_D.jpg",
    contact: "/images/DJI_20260414222003_0663_D.jpg",
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
