import PageHeader from "../components/PageHeader"

export default function Contact() {
    return (
        <>
            {/* Standard Page Header */}
            <PageHeader
                title="Contact Us"
                subtitle="Get in touch with Cape Coast Technical Institute"
            />

            {/* Contact Details */}
            <section className="py-5">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-3">
                        Contact Information
                    </h2>

                    <p>
                        For enquiries, admissions, and general information, please contact
                        the school using the details below.
                    </p>

                    <ul>
                        <li><strong>Location:</strong> Abura, Cape Coast, Central Region, Ghana</li>
                        <li><strong>Phone:</strong> +233 XX XXX XXXX</li>
                        <li><strong>Email:</strong> info@ccti.edu.gh</li>
                    </ul>
                </div>
            </section>

            {/* Map */}
            <section className="py-5 bg-light border-top border-bottom">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-3">
                        Our Location
                    </h2>

                    <div className="ratio ratio-16x9">
                        <iframe
                            title="Cape Coast Technical Institute Map"
                            src="https://www.google.com/maps?q=Abura,%20Cape%20Coast&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* WhatsApp */}
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="fw-bold text-primary mb-3">
                        WhatsApp Enquiries
                    </h2>
                    <p className="mb-4">
                        You may also reach us directly via WhatsApp for quick enquiries.
                    </p>

                    <a
                        href="https://wa.me/233XXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success"
                    >
                        Chat with Us on WhatsApp
                    </a>
                </div>
            </section>
        </>
    )
}
