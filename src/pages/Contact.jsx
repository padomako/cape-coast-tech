import PageHeader from "../components/PageHeader"
import { Link } from "react-router-dom"

export default function Contact() {
    return (
        <>
            {/* Page Header */}
            <PageHeader
                title="Contact Us"
                subtitle="Get in touch with Cape Coast Technical Institute"
                variant="contact"
            />

            {/* ================= CONTACT SECTION ================= */}
            <section className="contact-section py-5">
                <div className="container">
                    <div className="row g-5">

                        {/* Contact Info */}
                        <div className="col-lg-6">
                            <h2 className="section-title mb-4">
                                Contact Information
                            </h2>

                            <div className="contact-card">
                                <div className="contact-item">
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <div>
                                        <h6>Location</h6>
                                        <p>Abura, Cape Coast, Central Region, Ghana</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <i className="bi bi-telephone-fill"></i>
                                    <div>
                                        <h6>Phone</h6>
                                        <p>+233 XX XXX XXXX</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <i className="bi bi-envelope-fill"></i>
                                    <div>
                                        <h6>Email</h6>
                                        <p>info@ccti.edu.gh</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp + CTA */}
                        <div className="col-lg-6">
                            <div className="contact-cta-box">
                                <h3 className="mb-3">
                                    WhatsApp Enquiries
                                </h3>

                                <p>
                                    For quick responses and real-time assistance,
                                    chat with us directly on WhatsApp.
                                </p>

                                <a
                                    href="https://wa.me/233XXXXXXXXX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp-btn mt-3"
                                >
                                    <i className="bi bi-whatsapp me-2"></i>
                                    Chat with Us
                                </a>

                                <hr className="my-4" />

                                <p className="small text-muted">
                                    Office Hours: Monday – Friday | 8:00 AM – 4:00 PM
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
