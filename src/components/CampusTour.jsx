import { useRef, useState } from "react"

export default function CampusTour() {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)
    const [started, setStarted] = useState(false)

    const togglePlay = () => {
        const v = videoRef.current
        if (!v) return
        if (v.paused) {
            v.play()
            setPlaying(true)
            setStarted(true)
        } else {
            v.pause()
            setPlaying(false)
        }
    }

    return (
        <section className="campus-tour-section">
            <div className="container-xl">
                <div className="campus-tour-header">
                    <p className="campus-tour-eyebrow">A view from above</p>
                    <h2 className="section-serif-title">Take a tour of CapeTech</h2>
                    <p className="campus-tour-lead">
                        See the campus, the workshops, and the energy that shape the
                        Cape Coast Technical Institute experience.
                    </p>
                </div>

                <div className="campus-tour-frame" onClick={togglePlay}>
                    <video
                        ref={videoRef}
                        src="/video/DJI_20260414222659_0669_D.mp4"
                        poster="/images/DJI_20260414222003_0663_D.jpg"
                        playsInline
                        onPlay={() => setPlaying(true)}
                        onPause={() => setPlaying(false)}
                        onEnded={() => setPlaying(false)}
                    />

                    {!started && <div className="campus-tour-poster-fade" />}

                    {!started && (
                        <span className="campus-tour-watch">
                            Watch the tour
                            <i className="bi bi-arrow-right ms-2"></i>
                        </span>
                    )}

                    {/* Small bottom-right control — exact replica of image 2 */}
                    <button
                        type="button"
                        className="campus-tour-play"
                        onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                        aria-label={playing ? "Pause tour" : "Play tour"}
                    >
                        <i className={`bi ${playing ? "bi-pause-fill" : "bi-play-fill"}`}></i>
                    </button>
                </div>
            </div>
        </section>
    )
}