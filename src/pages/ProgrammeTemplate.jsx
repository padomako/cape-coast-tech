import { useEffect } from "react"

export default function ProgrammeTemplate({
    title,
    tradeArea,
    description,
    duration = "3 Years",
    certification = "WASSCE / NVTI / CBT",
}) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {/* Page Header */}
            <section className="page-header section-soft">
                <div className="page-header-overlay">
                    <div className="container text-center">
                        <h1 className="fw-bold text-primary mb-3">
                            {title}
                        </h1>
                        <p className="text-muted">
                            Trade Area: {tradeArea}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section-dark section-padding">
                <div className="container" style={{ maxWidth: "900px" }}>
                    <h3 className="text-primary fw-bold mb-3">
                        Programme Overview
                    </h3>

                    <p className="text-muted mb-4">
                        {description}
                    </p>

                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="gold-frame">
                                <strong>Duration</strong>
                                <p className="mb-0">{duration}</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="gold-frame">
                                <strong>Certification</strong>
                                <p className="mb-0">{certification}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
