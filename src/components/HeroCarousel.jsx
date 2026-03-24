import Stats from "./Stats"

const slides = [
    {
        image: "/images/ELECTRICALS%20PRACTICE%20SESSION/banner_bg.jpg",
        title: "Cape Coast Technical Institute",
        subtitle: "Academic excellence, discipline, and skills development",
    },
    {
        image: "/images/ELECTRONICS%20PRACTICAL%20SESSION/5%20%281%29.jpg",
        title: "Quality Technical Education",
        subtitle: "Preparing students for industry and higher education",
    },
    {
        image: "/images/CENTRAL%20REGION%20TVET%20INTER%20INSTITUTE%20SPORTS%20COMPETITION/1.jpg",
        title: "Vibrant Student Life",
        subtitle: "Clubs, sports, leadership, and growth",
    },
    {
        image: "/images/CREATIVE%20ARTS%20PRACTICAL%20SESSION/1.jpg",
        title: "Hands-On Practical Training",
        subtitle: "Building real-world skills through creative and technical workshops",
    },
]

export default function HeroCarousel() {
    return (
        <section className="hero-wrapper">
            {/* HERO / CAROUSEL */}
            <div className="hero-carousel">
                <div
                    id="heroCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="5000"
                >
                    {/* Indicators */}
                    <div className="carousel-indicators">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                data-bs-target="#heroCarousel"
                                data-bs-slide-to={i}
                                className={i === 0 ? "active" : ""}
                                aria-current={i === 0 ? "true" : undefined}
                            />
                        ))}
                    </div>

                    {/* Slides */}
                    <div className="carousel-inner">
                        {slides.map((slide, i) => (
                            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                                <img
                                    src={slide.image}
                                    className="d-block w-100 hero-image"
                                    alt={slide.title}
                                />
                                <div className="hero-caption">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controls */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide="prev"
                    />

                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide="next"
                    />
                </div>
            </div>

            {/* FLOATING STATS (anchored to hero) */}
            <Stats />
        </section>
    )
}
