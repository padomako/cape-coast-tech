import { useLocation } from "react-router-dom"

export default function Footer() {
    const location = useLocation()
    const isContactPage = location.pathname === "/contact"

    return (
        <footer className="bg-dark text-light pt-5">
            <div className="container">

                {/* Footer Content */}
                <div className="row gy-4">

                    <div className="col-md-4">
                        <h5 className="text-primary">Cape Coast Technical Institute</h5>
                        <p className="text-muted">
                            A leading technical secondary institution committed to
                            academic excellence, discipline, and skills development.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h6 className="text-primary">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-muted">Home</a></li>
                            <li><a href="/academics" className="text-muted">Academics</a></li>
                            <li><a href="/admissions" className="text-muted">Admissions</a></li>
                            <li><a href="/students" className="text-muted">Students</a></li>
                            <li><a href="/contact" className="text-muted">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h6 className="text-primary">Contact</h6>
                        <p className="text-muted mb-1">Abura, Cape Coast</p>
                        <p className="text-muted mb-1">📞 +233 XXX XXX XXX</p>
                        <p className="text-muted">✉ info@ccti.edu.gh</p>
                    </div>

                </div>

                {/* MAP — ONLY ON CONTACT PAGE */}
                {isContactPage && (
                    <div className="mt-4">
                        <iframe
                            title="Cape Coast Technical Institute Location"
                            src="https://www.google.com/maps?q=Abura%20Cape%20Coast&output=embed"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                )}

                <hr className="border-secondary my-4" />

                <p className="text-center text-muted small mb-0">
                    © {new Date().getFullYear()} Cape Coast Technical Institute. All Rights Reserved.
                </p>

            </div>
        </footer>
    )
}

