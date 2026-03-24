import { useState } from "react"

const slides = [
    { image: "/images/GREEN%20DAY%20CELEBRATION/2.jpg", caption: "Students engaging in the Green Day celebration." },
    { image: "/images/CREATIVE%20ARTS%20PRACTICAL%20SESSION/3.jpg", caption: "Creative Arts practical workshop session." },
    { image: "/images/CENTRAL%20REGION%20TVET%20INTER%20INSTITUTE%20SPORTS%20COMPETITION/4.jpg", caption: "Sports and recreational competitions." },
    { image: "/images/AFRICAN%20UNION%20PARADE/3.jpg", caption: "Students participating in the African Union parade." },
    { image: "/images/CATERING/5.jpg", caption: "Catering students learning culinary skills." },
]

export default function CampusLife() {
    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <div className="campus-slider">
            <img
                src={slides[index].image}
                alt="Campus Life"
                className="students-image"
            />

            <div className="slider-controls">
                <button className="slide-arrow left" onClick={prevSlide}>&#8249;</button>
                <button className="slide-arrow right" onClick={nextSlide}>&#8250;</button>
            </div>

            <p className="students-caption mt-3">
                {slides[index].caption}
            </p>
        </div>

    )
}
