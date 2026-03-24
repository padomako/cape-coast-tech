import { useLocation } from "react-router-dom"

export default function Footer() {
    const location = useLocation()
    const isContactPage = location.pathname === "/contact"

    return (
        <footer style={{ background: "var(--brand-dark)", borderTop: "1px solid rgba(212, 160, 36, 0.15)" }} className="text-light pt-5">
            <div className="container">

                {/* Footer Content */}
                <div className="row gy-4">

                    <div className="col-md-4">
                        <h5 className="text-primary">Cape Coast Technical Institute</h5>
                        <p className="text-muted">
                            A leading technical secondary institution committed to
                            academic excellence, discipline, and skills development.
                        </p>
                        <div className="d-flex gap-3 mt-3">
                            <a href="#" className="footer-social"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="footer-social"><i className="bi bi-twitter-x"></i></a>
                            <a href="#" className="footer-social"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h6 className="text-primary">Quick Links</h6>
                        <ul className="list-unstyled footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/academics">Academics</a></li>
                            <li><a href="/admissions">Admissions</a></li>
                            <li><a href="/students">Students</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h6 className="text-primary">Contact</h6>
                        <div className="footer-contact-item">
                            <i className="bi bi-geo-alt-fill"></i>
                            <span>Abura, Cape Coast</span>
                        </div>
                        <div className="footer-contact-item">
                            <i className="bi bi-telephone-fill"></i>
                            <span>+233 XXX XXX XXX</span>
                        </div>
                        <div className="footer-contact-item">
                            <i className="bi bi-envelope-fill"></i>
                            <span>info@ccti.edu.gh</span>
                        </div>
                    </div>

                </div>

                {/* MAP — ONLY ON CONTACT PAGE */}
                {isContactPage && (
                    <div className="mt-4" style={{ borderRadius: "12px", overflow: "hidden" }}>
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

                <hr style={{ borderColor: "rgba(212, 160, 36, 0.15)" }} className="my-4" />

                <p className="text-center text-muted small pb-3 mb-0">
                    &copy; {new Date().getFullYear()} Cape Coast Technical Institute. All Rights Reserved.
                </p>

            </div>
        </footer>
    )
}
