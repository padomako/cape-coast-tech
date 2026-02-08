import Hero from "../components/Hero"
import Welcome from "../components/Welcome"
import Highlights from "../components/Highlights"
import News from "../components/News"

export default function Home() {
    return (
        <div className="pt-0">
            <Hero />
            <Welcome />
            <Highlights />
            <News />
        </div>
    )
}

