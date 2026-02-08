export default function Academics() {
    return (
        <div className="bg-white">

            {/* Page Header */}
            <section className="bg-blue-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Academics
                    </h1>
                    <p className="text-lg text-gray-200">
                        Quality technical and academic education for national development
                    </p>
                </div>
            </section>

            {/* Academic Overview */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Academic Overview
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Cape Coast Technical Institute offers a broad range of technical and
                        academic programmes designed to equip students with practical skills,
                        theoretical knowledge, and strong moral values. Our curriculum follows
                        the Ghana Education Service (GES) standards and emphasizes hands-on
                        training.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Students are prepared for further education, technical careers, and
                        meaningful contribution to society through structured teaching and
                        continuous assessment.
                    </p>
                </div>
            </section>

            {/* Departments */}
            <section className="bg-gray-50 py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-10">
                        Departments
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-gray-700">
                        <div className="p-6 bg-white border rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">
                                General Arts Department
                            </h3>
                            <p>
                                Offers subjects that develop critical thinking, communication
                                skills, and social awareness.
                            </p>
                        </div>

                        <div className="p-6 bg-white border rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">
                                Technical Department
                            </h3>
                            <p>
                                Focuses on practical and vocational subjects to prepare students
                                for technical careers and entrepreneurship.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programmes Offered */}
            <section className="py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8">
                        Programmes Offered
                    </h2>

                    <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
                        <li>General Arts</li>
                        <li>Electrical Installation</li>
                        <li>Building Construction</li>
                        <li>Wood Technology</li>
                        <li>Metal Technology</li>
                        <li>Auto Mechanics</li>
                    </ul>
                </div>
            </section>

            {/* Teaching & Learning */}
            <section className="bg-gray-50 py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Teaching & Learning Approach
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Teaching at Cape Coast Technical Institute combines classroom
                        instruction with workshops, laboratories, and continuous practical
                        assessment. This approach ensures that students gain both theoretical
                        understanding and real-world skills.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Our qualified teaching staff are committed to mentoring students and
                        maintaining high academic standards.
                    </p>
                </div>
            </section>

            {/* Curriculum Download */}
            <section className="py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Curriculum & Syllabi
                    </h2>
                    <p className="text-gray-700 mb-8">
                        Download detailed curriculum and subject syllabi for each programme.
                    </p>

                    <button className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition">
                        Download Curriculum (PDF)
                    </button>
                </div>
            </section>

        </div>
    )
}
