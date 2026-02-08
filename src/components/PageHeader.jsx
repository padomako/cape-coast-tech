export default function PageHeader({ title, subtitle }) {
    return (
        <section className="bg-primary text-white py-5">
            <div className="container text-center">
                <h1 className="fw-bold mb-2">{title}</h1>
                {subtitle && (
                    <p className="mb-0 text-light">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}
