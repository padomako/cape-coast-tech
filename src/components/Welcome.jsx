export default function Welcome() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div>
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Welcome to Cape Coast Technical Institute
                    </h2>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Cape Coast Technical Institute is a reputable technical secondary
                        institution located at Abura in Cape Coast. The school is committed
                        to providing quality technical and academic education that equips
                        students with practical skills, critical thinking abilities, and
                        strong moral values.
                    </p>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Through dedicated staff, well-structured academic programmes, and a
                        disciplined learning environment, the institute prepares students
                        for higher education, industry, and meaningful contribution to
                        national development.
                    </p>

                    <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
                        Learn More About Us
                    </button>
                </div>

                {/* Image */}
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1580582932707-520aed937b7b"
                        alt="School environment"
                        className="rounded-lg shadow-lg"
                    />
                </div>

            </div>
        </section>
    )
}
