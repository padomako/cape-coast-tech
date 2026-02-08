export default function Footer() {
    return (
        <footer className="bg-dark text-light mt-5">

            {/* Main Footer */}
            <div className="container py-5">
                <div className="row g-4">

                    {/* School Info */}
                    <div className="col-md-4">
                        <h5 className="fw-bold">
                            Cape Coast Technical Institute
                        </h5>
                        <p className="small text-secondary">
                            A leading technical secondary institution committed to academic
                            excellence, skills development, discipline, and character formation.
                        </p>
                        <p className="small text-secondary">
                            📍 Abura, Cape Coast<br />
                            Central Region, Ghana
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-4">
                        <h5 className="fw-bold">
                            Contact Us
                        </h5>
                        <p className="small text-secondary mb-2">
                            📞 Phone: +233 XX XXX XXXX
                        </p>
                        <p className="small text-secondary mb-3">
                            ✉️ Email: info@ccti.edu.gh
                        </p>

                        {/* WhatsApp Button */}
                        <a
                            href="https://wa.me/233XXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-success btn-sm"
                        >
                            💬 Chat with us on WhatsApp
                        </a>
                    </div>

                    {/* Map */}
                    <div className="col-md-4">
                        <h5 className="fw-bold">
                            Our Location
                        </h5>
                        <div className="ratio ratio-16x9 rounded overflow-hidden">
                            <iframe
                                title="Cape Coast Technical Institute Map"
                                src="https://www.google.com/maps?q=Abura,%20Cape%20Coast&output=embed"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-black text-center py-3 small text-secondary">
                © {new Date().getFullYear()} Cape Coast Technical Institute. All Rights Reserved.
            </div>

        </footer>
    )
}
