export default function News() {
    return (
        <section className="bg-white py-24 border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">
                        News & Announcements
                    </h2>
                    <p className="text-gray-600">
                        Stay updated with the latest information from Cape Coast Technical Institute
                    </p>
                </div>

                {/* News Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <span className="text-sm text-blue-700 font-medium">
                            Admissions
                        </span>
                        <h3 className="text-lg font-semibold mt-3 mb-2">
                            2025/2026 Academic Year Admissions Open
                        </h3>
                        <p className="text-gray-700 text-sm mb-4">
                            Applications are now open for prospective students seeking admission
                            into Cape Coast Technical Institute.
                        </p>
                        <a href="#" className="text-blue-900 font-medium hover:underline">
                            Read More →
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <span className="text-sm text-blue-700 font-medium">
                            Academics
                        </span>
                        <h3 className="text-lg font-semibold mt-3 mb-2">
                            First Semester Academic Calendar Released
                        </h3>
                        <p className="text-gray-700 text-sm mb-4">
                            Students and parents are advised to download and take note of
                            important academic dates for the semester.
                        </p>
                        <a href="#" className="text-blue-900 font-medium hover:underline">
                            View Details →
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition">
                        <span className="text-sm text-blue-700 font-medium">
                            Sports
                        </span>
                        <h3 className="text-lg font-semibold mt-3 mb-2">
                            Inter-School Sports Competition Highlights
                        </h3>
                        <p className="text-gray-700 text-sm mb-4">
                            Our students showcased excellence and teamwork during the recent
                            inter-school sports competition.
                        </p>
                        <a href="#" className="text-blue-900 font-medium hover:underline">
                            See Photos →
                        </a>
                    </div>

                </div>

                {/* Button */}
                <div className="text-center mt-14">
                    <button className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition">
                        View All News
                    </button>
                </div>

            </div>
        </section>
    )
}
