export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white mt-24">
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">

                {/* School Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Cape Coast Technical Institute
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-200">
                        A leading technical secondary institution committed to academic
                        excellence, skills development, discipline, and character formation.
                    </p>

                    <p className="mt-4 text-sm text-gray-300">
                        📍 Abura, Cape Coast<br />
                        Central Region, Ghana
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Contact Us
                    </h3>

                    <p className="text-sm text-gray-200 mb-2">
                        📞 Phone: +233 XX XXX XXXX
                    </p>
                    <p className="text-sm text-gray-200 mb-4">
                        ✉️ Email: info@ccti.edu.gh
                    </p>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/233XXXXXXXXX"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 text-white px-5 py-3 rounded-md font-medium hover:bg-green-600 transition"
                    >
                        💬 Chat with us on WhatsApp
                    </a>
                </div>

                {/* Map */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Our Location
                    </h3>

                    <iframe
                        title="Cape Coast Technical Institute Map"
                        src="https://www.google.com/maps?q=Abura,%20Cape%20Coast&output=embed"
                        className="w-full h-56 rounded-lg border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-800 text-center py-6 text-sm text-gray-300">
                © {new Date().getFullYear()} Cape Coast Technical Institute. All Rights Reserved.
            </div>
        </footer>
    )
}
