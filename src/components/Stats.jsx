import { useEffect, useRef, useState } from "react"

function Stat({ value, suffix = "", label, delay = 0 }) {
    const ref = useRef(null)
    const [display, setDisplay] = useState(0)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    entry.target.classList.add("visible") // 👈 THIS WAS MISSING
                    setStarted(true)
                    setTimeout(() => {
                        animateCount(0, value, 1200)
                    }, delay)
                }

            },
            { threshold: 0.4 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [started, value, delay])

    const animateCount = (start, end, duration) => {
        const startTime = performance.now()

        const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
            const current = Math.floor(eased * (end - start) + start)
            setDisplay(current)

            if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
    }

    return (
        <div ref={ref} className="col-6 col-md-3 stat-item">
            <h3 className="text-primary fw-bold display-6 mb-1">
                {display}
                {suffix}
            </h3>
            <p className="text-light opacity-75 mb-0">{label}</p>
        </div>
    )
}

export default function Stats() {
    return (
        <div className="stats-float">
            <div className="stats-card">
                <div className="row text-center g-4">
                    <Stat value={40} suffix="+" label="Years of Excellence" />
                    <Stat value={10} suffix="+" label="Academic Programmes" />
                    <Stat value={100} suffix="%" label="Committed Staff" />
                    <Stat value={1000} suffix="+" label="Students Trained" />
                </div>
            </div>
        </div>
    )
}

