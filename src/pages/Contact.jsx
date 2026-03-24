import PageHeader from "../components/PageHeader"

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

                    {/* Contact Cards Row */}
                    <div className="row g-4 mb-5">
                        <div className="col-md-4">
                            <div className="contact-info-card">
                                <div className="contact-icon-circle">
                                    <i className="bi bi-geo-alt-fill"></i>
                                </div>
                                <h5>Our Location</h5>
                                <p>Abura, Cape Coast<br />Central Region, Ghana</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact-info-card">
                                <div className="contact-icon-circle">
                                    <i className="bi bi-telephone-fill"></i>
                                </div>
                                <h5>Phone</h5>
                                <p>+233 XX XXX XXXX<br />Mon – Fri, 8AM – 4PM</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact-info-card">
                                <div className="contact-icon-circle">
                                    <i className="bi bi-envelope-fill"></i>
                                </div>
                                <h5>Email</h5>
                                <p>info@ccti.edu.gh</p>
                            </div>
                        </div>
                    </div>

                    {/* Main Content: Form + WhatsApp */}
                    <div className="row g-5">

                        {/* Contact Form */}
                        <div className="col-lg-7">
                            <div className="contact-form-card">
                                <h3>Send us a Message</h3>
                                <p className="text-muted mb-4">
                                    Have a question or enquiry? Fill out the form below and we will get back to you.
                                </p>

                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label-custom">Full Name</label>
                                            <input type="text" className="form-input-custom" placeholder="Your name" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label-custom">Email Address</label>
                                            <input type="email" className="form-input-custom" placeholder="your@email.com" />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label-custom">Subject</label>
                                            <input type="text" className="form-input-custom" placeholder="What is this about?" />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label-custom">Message</label>
                                            <textarea className="form-input-custom" rows="5" placeholder="Write your message here..."></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="contact-submit-btn">
                                                <i className="bi bi-send-fill me-2"></i>
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* WhatsApp + Office Hours */}
                        <div className="col-lg-5">
                            <div className="contact-whatsapp-card">
                                <div className="whatsapp-icon-large">
                                    <i className="bi bi-whatsapp"></i>
                                </div>
                                <h4>Quick Chat on WhatsApp</h4>
                                <p>
                                    For instant responses and real-time assistance,
                                    reach us directly on WhatsApp.
                                </p>
                                <a
                                    href="https://wa.me/233XXXXXXXXX"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="whatsapp-btn"
                                >
                                    <i className="bi bi-whatsapp me-2"></i>
                                    Start a Conversation
                                </a>
                            </div>

                            <div className="contact-hours-card mt-4">
                                <h5><i className="bi bi-clock-fill me-2"></i>Office Hours</h5>
                                <ul className="hours-list">
                                    <li>
                                        <span>Monday – Friday</span>
                                        <span>8:00 AM – 4:00 PM</span>
                                    </li>
                                    <li>
                                        <span>Saturday</span>
                                        <span>Closed</span>
                                    </li>
                                    <li>
                                        <span>Sunday</span>
                                        <span>Closed</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
