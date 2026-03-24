export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-primary text-white overflow-hidden">

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80"></div>

            {/* Content */}
            <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text */}
                <div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Cape Coast Technical Institute
                    </h1>

                    <p className="italic text-lg mb-4 text-gray-200">
                        Mbodzenbo wie kumyimdzi
                    </p>

                    <p className="text-lg text-gray-100 mb-8 max-w-xl">
                        A leading technical secondary institution committed to academic excellence,
                        skills development, discipline, and character formation.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="/admissions"
                            className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition"
                        >
                            Apply for Admission
                        </a>

                        <a
                            href="/contact"
                            className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-primary transition"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Visual Placeholder */}
                <div className="hidden md:block">
                    <div className="w-full h-80 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
                        <span className="text-gray-200 text-sm">
                            School Image / Campus Visual
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}
