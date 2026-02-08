export default function Highlights() {
    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">
                        Life at Cape Coast Technical Institute
                    </h2>
                    <p className="text-gray-600">
                        Academic excellence, clear admissions process, and vibrant student life
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Academics */}
                    <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">
                            Academics
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Well-structured academic and technical programmes aligned with the
                            national curriculum and industry standards.
                        </p>
                        <a href="#" className="text-blue-900 font-medium hover:underline">
                            Learn More →
                        </a>
                    </div>

                    {/* Admissions */}
                    <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">
                            Admissions
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Clear admission requirements and processes to guide prospective
                            students and parents every step of the way.
                        </p>
                        <a href="#" className="text-blue-900 font-medium hover:underline">
                            Apply Now →
                        </a>
                    </div>

                    {/* Student Life */}
                    <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">
                            Student Life
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Clubs, sports, leadership opportunities, and activities that build
                            confidence, discipline, and teamwork.
                        </p>
                        <a href="#" className="text-blue-900 font-medium hover:underline">
                            Explore →
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}
