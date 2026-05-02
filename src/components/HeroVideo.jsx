import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import Stats from "./Stats"

export default function HeroVideo() {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(true)
    const [muted, setMuted] = useState(true)

    const togglePlay = () => {
        const v = videoRef.current
        if (!v) return
        if (v.paused) { v.play(); setPlaying(true) }
        else { v.pause(); setPlaying(false) }
    }

    const toggleMute = () => {
        const v = videoRef.current
        if (!v) return
        v.muted = !v.muted
        setMuted(v.muted)
    }

    return (
        <section className="hero-wrapper home-video-hero-wrapper">
            <div className="home-video-hero">
                <video
                    ref={videoRef}
                    className="home-video-hero-media"
                    src="/video/DJI_20260414222340_0668_D.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/images/DJI_20260414220331_0660_D.jpg"
                />

                <div className="home-video-hero-overlay" />

                <div className="home-video-hero-caption">
                    <p className="home-video-hero-eyebrow">Est. 1955</p>
                    <h1>Cape Coast Technical Institute</h1>
                    <p className="home-video-hero-sub">
                        Academic excellence, discipline, and skills development.
                    </p>

                    <div className="home-video-hero-actions">
                        <Link to="/programmes" className="btn-editorial btn-editorial-solid">
                            Explore Programmes
                            <i className="bi bi-arrow-right ms-2"></i>
                        </Link>
                        <Link to="/admissions" className="btn-editorial btn-editorial-flame">
                            Register Now
                        </Link>
                    </div>
                </div>

                <div className="home-video-hero-controls">
                    <button
                        type="button"
                        className="home-video-hero-btn"
                        onClick={togglePlay}
                        aria-label={playing ? "Pause video" : "Play video"}
                    >
                        <i className={`bi ${playing ? "bi-pause-fill" : "bi-play-fill"}`}></i>
                    </button>
                    <button
                        type="button"
                        className="home-video-hero-btn"
                        onClick={toggleMute}
                        aria-label={muted ? "Unmute" : "Mute"}
                    >
                        <i className={`bi ${muted ? "bi-volume-mute-fill" : "bi-volume-up-fill"}`}></i>
                    </button>
                </div>
            </div>

            {/* FLOATING STATS (anchored to hero) */}
            <Stats />
        </section>
    )
}
