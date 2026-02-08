export default function About() {
    return (
        <div className="bg-white">

            {/* Page Header */}
            <section className="bg-blue-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        About Cape Coast Technical Institute
                    </h1>
                    <p className="text-lg text-gray-200">
                        Building technical excellence, discipline, and character
                    </p>
                </div>
            </section>

            {/* History */}
            <section className="py-20 border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Our History
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Cape Coast Technical Institute is a public technical secondary
                        institution located at Abura in Cape Coast, Central Region of Ghana.
                        The institute was established to provide quality technical and
                        vocational education to support national development and skills
                        acquisition.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Over the years, the school has produced disciplined and skilled
                        graduates who have contributed meaningfully to industry, higher
                        education, and society. The institute continues to uphold strong
                        academic standards while adapting to modern educational demands.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="bg-gray-50 py-20 border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

                    {/* Vision */}
                    <div>
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">
                            Our Vision
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            To be a leading technical secondary institution in Ghana,
                            recognized for academic excellence, innovation, discipline, and
                            the development of skilled and responsible graduates.
                        </p>
                    </div>

                    {/* Mission */}
                    <div>
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            To provide quality technical and academic education through
                            effective teaching, practical training, and character development,
                            equipping students with the skills and values needed for lifelong
                            success.
                        </p>
                    </div>

                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8">
                        Our Core Values
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                        <p>✔ Discipline and Integrity</p>
                        <p>✔ Academic and Technical Excellence</p>
                        <p>✔ Respect and Responsibility</p>
                        <p>✔ Innovation and Creativity</p>
                        <p>✔ Teamwork and Leadership</p>
                        <p>✔ Commitment to National Development</p>
                    </div>
                </div>
            </section>

            {/* Administration Message */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Message from the Administration
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        At Cape Coast Technical Institute, we believe that education extends
                        beyond the classroom. Our administration, staff, and stakeholders
                        are committed to creating a safe, disciplined, and supportive
                        learning environment where students can thrive academically and
                        socially.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        We welcome parents, guardians, and partners to work with us as we
                        continue to build a strong foundation for the future of our
                        students.
                    </p>
                </div>
            </section>

        </div>
    )
}
