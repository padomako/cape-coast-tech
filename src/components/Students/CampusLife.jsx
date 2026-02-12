import { useState } from "react"

import img1 from "../../assets/images/campus1.jpg"
import img2 from "../../assets/images/campus2.jpg"
import img3 from "../../assets/images/campus3.jpg"

const slides = [
    { image: img1, caption: "Students engaging in academic discussions." },
    { image: img2, caption: "Clubs and leadership activities on campus." },
    { image: img3, caption: "Sports and recreational programs." },
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
                <button className="slide-arrow left" onClick={prevSlide}>‹</button>
                <button className="slide-arrow right" onClick={nextSlide}>›</button>
            </div>

            <p className="students-caption mt-3">
                {slides[index].caption}
            </p>
        </div>

    )
}
