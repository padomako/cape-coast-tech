export default function Students() {
    return (
        <div className="bg-white">

            {/* Page Header */}
            <section className="bg-blue-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Students
                    </h1>
                    <p className="text-lg text-gray-200">
                        Student life, leadership, and co-curricular activities
                    </p>
                </div>
            </section>

            {/* Student Life Overview */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Student Life
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        At Cape Coast Technical Institute, student life goes beyond academics.
                        We encourage students to participate in clubs, sports, leadership,
                        and social activities that help develop confidence, teamwork, and
                        discipline.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        These activities play an important role in shaping responsible and
                        well-rounded individuals.
                    </p>
                </div>
            </section>

            {/* Clubs & Societies */}
            <section className="bg-gray-50 py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8">
                        Clubs & Societies
                    </h2>

                    <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
                        <li>Science and Technology Club</li>
                        <li>ICT / Coding Club</li>
                        <li>Debate and Literary Society</li>
                        <li>Religious Fellowships</li>
                        <li>Drama and Cultural Troupe</li>
                        <li>Entrepreneurship Club</li>
                    </ul>
                </div>
            </section>

            {/* Sports */}
            <section className="py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Sports & Games
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Sports activities promote physical fitness, teamwork, and school
                        spirit. Students are encouraged to participate in both indoor and
                        outdoor sporting activities.
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Football</li>
                        <li>Athletics</li>
                        <li>Basketball</li>
                        <li>Table Tennis</li>
                        <li>Indoor Games</li>
                    </ul>
                </div>
            </section>

            {/* Prefects & Leadership */}
            <section className="bg-gray-50 py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Prefects & Student Leadership
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        The school operates a structured student leadership system led by
                        prefects. Prefects assist school authorities in maintaining
                        discipline, promoting good conduct, and representing the interests
                        of the student body.
                    </p>
                </div>
            </section>

            {/* Activities */}
            <section className="py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Student Activities
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Students take part in various academic, cultural, and social
                        activities throughout the academic year.
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Inter-school competitions</li>
                        <li>Speech and prize-giving day</li>
                        <li>Cultural and diversity programmes</li>
                        <li>Educational excursions</li>
                        <li>Community service activities</li>
                    </ul>
                </div>
            </section>

        </div>
    )
}
