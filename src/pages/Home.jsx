import HeroCarousel from "../components/HeroCarousel"
import Welcome from "../components/Welcome"
import Highlights from "../components/Highlights"
import News from "../components/News"

export default function Home() {
    return (
        <>
            {/* Hero Carousel */}
            <HeroCarousel />

            {/* Stats Strip */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <p className="text-3xl font-bold text-primary">40+</p>
                        <p className="text-sm text-gray-600">Years of Excellence</p>
                    </div>

                    <div>
                        <p className="text-3xl font-bold text-primary">10+</p>
                        <p className="text-sm text-gray-600">Academic Programmes</p>
                    </div>

                    <div>
                        <p className="text-3xl font-bold text-primary">100%</p>
                        <p className="text-sm text-gray-600">Committed Staff</p>
                    </div>

                    <div>
                        <p className="text-3xl font-bold text-primary">1,000+</p>
                        <p className="text-sm text-gray-600">Students Trained</p>
                    </div>
                </div>
            </section>

            <Welcome />
            <Highlights />
            <News />
        </>
    )
}
