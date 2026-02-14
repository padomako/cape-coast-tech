import Stats from "./Stats"

export default function HeroCarousel() {
    return (
        <section className="hero-wrapper">
            {/* HERO / CAROUSEL */}
            <div className="hero-carousel">
                <div
                    id="heroCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    {/* Indicators */}
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#heroCarousel"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                        />
                        <button
                            type="button"
                            data-bs-target="#heroCarousel"
                            data-bs-slide-to="1"
                        />
                        <button
                            type="button"
                            data-bs-target="#heroCarousel"
                            data-bs-slide-to="2"
                        />
                    </div>

                    {/* Slides */}
                    <div className="carousel-inner">

                        {/* Slide 1 */}
                        <div className="carousel-item active">
                            <img
                                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                                className="d-block w-100 hero-image"
                                alt="Campus"
                            />
                            <div className="hero-caption">
                                <h2>Cape Coast Technical Institute</h2>
                                <p>
                                    Academic excellence, discipline, and skills development
                                </p>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item">
                            <img
                                src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                                className="d-block w-100 hero-image"
                                alt="Classroom"
                            />
                            <div className="hero-caption">
                                <h2>Quality Technical Education</h2>
                                <p>
                                    Preparing students for industry and higher education
                                </p>
                            </div>
                        </div>

                        {/* Slide 3 */}
                        <div className="carousel-item">
                            <img
                                src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178"
                                className="d-block w-100 hero-image"
                                alt="Student Life"
                            />
                            <div className="hero-caption">
                                <h2>Vibrant Student Life</h2>
                                <p>
                                    Clubs, sports, leadership, and growth
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Controls */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" />
                    </button>

                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" />
                    </button>
                </div>
            </div>

            {/* FLOATING STATS (anchored to hero) */}
            <Stats />
        </section>
    )
}
