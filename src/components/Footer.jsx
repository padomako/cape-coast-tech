import { useLocation, Link } from "react-router-dom"

const SOCIAL_LINKS = [
    {
        label: "Facebook",
        icon: "bi-facebook",
        href: "https://www.facebook.com/profile.php?id=100090135336628&mibextid=wwXIfr",
    },
    {
        label: "Instagram (capetech.live_)",
        icon: "bi-instagram",
        href: "https://www.instagram.com/capetech.live_?igsh=bGx6YWQ4Nml5NXBi",
    },
    {
        label: "Instagram (capetech.ediboard)",
        icon: "bi-instagram",
        href: "https://www.instagram.com/capetech.ediboard?igsh=eTdsZ2J4dGszNWdp&utm_source=qr",
    },
    {
        label: "TikTok",
        icon: "bi-tiktok",
        href: "https://www.tiktok.com/@capetech.live_?_r=1&_t=ZS-95C522zZgf6",
    },
    {
        label: "WhatsApp Channel",
        icon: "bi-whatsapp",
        href: "https://whatsapp.com/channel/0029VaHhZA9CXC3DjxGAmu0o",
    },
]

export default function Footer() {
    const location = useLocation()
    const isContactPage = location.pathname === "/contact"

    return (
        <footer className="site-footer">
            <div className="container">

                <div className="row gy-5 footer-row">

                    {/* About */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="footer-brand">Cape Coast Technical Institute</h5>
                        <p className="footer-blurb">
                            A leading technical institution committed to academic
                            excellence, discipline, and skills development since 1955.
                        </p>
                        <div className="footer-socials">
                            {SOCIAL_LINKS.map((s) => (
                                <a
                                    key={s.label + s.href}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    title={s.label}
                                    className="footer-social"
                                >
                                    <i className={`bi ${s.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="footer-heading">Quick Links</h6>
                        <ul className="list-unstyled footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/academics">Academics</Link></li>
                            <li><Link to="/programmes">Programmes</Link></li>
                            <li><Link to="/admissions">Admissions</Link></li>
                            <li><Link to="/announcements">News &amp; Announcements</Link></li>
                            <li><Link to="/students">Student Life</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-lg-5 col-md-12">
                        <h6 className="footer-heading">School&rsquo;s Contact Information</h6>
                        <address className="footer-address">
                            <div>Cape Coast Technical Institute</div>
                            <div>P. O. Box DL155</div>
                            <div>Digital Address: CC-118-5493</div>
                            <div>Cape Coast, C/Region</div>
                            <div>Ghana, West Africa</div>
                        </address>
                        <div className="footer-contact-item">
                            <i className="bi bi-envelope-fill"></i>
                            <a href="mailto:capetechedu@gmail.com">capetechedu@gmail.com</a>
                        </div>
                        <div className="footer-contact-item">
                            <i className="bi bi-telephone-fill"></i>
                            <a href="tel:+233332092170">+233 33 209 21708</a>
                        </div>
                    </div>

                </div>

                {/* MAP — ONLY ON CONTACT PAGE */}
                {isContactPage && (
                    <div className="footer-map">
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

                <hr className="footer-divider" />

                <p className="footer-copy">
                    &copy; {new Date().getFullYear()} Cape Coast Technical Institute. All Rights Reserved.
                </p>

            </div>
        </footer>
    )
}
