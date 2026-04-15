import HeroCarousel from "../components/HeroCarousel"
import Welcome from "../components/Welcome"
import WeekendTraining from "../components/WeekendTraining"
import Highlights from "../components/Highlights"
import News from "../components/News"

export default function Home() {
    return (
        <>
            <HeroCarousel />
            <Welcome />
            <WeekendTraining />
            <Highlights />
            <News />
        </>
    )
}
