import HeroCarousel from "../components/HeroCarousel"
import Welcome from "../components/Welcome"
import Highlights from "../components/Highlights"
import News from "../components/News"

export default function Home() {
    return (
        <>
            <HeroCarousel />
            <Welcome />
            <Highlights />
            <News />
        </>
    )
}
