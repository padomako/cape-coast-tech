import HeroVideo from "../components/HeroVideo"
import Welcome from "../components/Welcome"
import CampusTour from "../components/CampusTour"
import WeekendTraining from "../components/WeekendTraining"
import Highlights from "../components/Highlights"
import News from "../components/News"

export default function Home() {
    return (
        <>
            <HeroVideo />
            <Welcome />
            <CampusTour />
            <WeekendTraining />
            <Highlights />
            <News />
        </>
    )
}
