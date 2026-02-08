export default function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center bg-blue-900 text-white">

            {/* Content */}
            <div className="max-w-4xl px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Cape Coast Technical Institute
                </h1>

                <p className="italic text-lg mb-4">
                    Mbodzenbo wie kumyimdzi
                </p>

                <p className="text-lg md:text-xl mb-8">
                    A leading technical secondary institution committed to academic
                    excellence, skills development, discipline, and character formation.
                </p>

                <div className="flex justify-center gap-4">
                    <button className="bg-white text-blue-900 px-6 py-3 rounded hover:bg-gray-200">
                        Admissions
                    </button>
                    <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-blue-900">
                        Contact Us
                    </button>
                </div>
            </div>

        </section>
    )
}
