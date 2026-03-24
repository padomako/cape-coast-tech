import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"
import programmeData from "../../data/programmes"

const tradeAreaBanners = {
    "Engineering": "/images/ELECTRICALS%20PRACTICE%20SESSION/banner_bg3.jpg",
    "Building / Art": "/images/BUILDING%20AND%20CONSTRUCTION%20PRACTICAL%20SESSION/3.jpg",
    "Business / Fashion / Catering": "/images/CATERING/6.jpg"
}

export default function ProgrammePage() {

    const { programmeSlug } = useParams()
    const programme = programmeData[programmeSlug]

    // If programme does not exist
    if (!programme) {
        return <div className="container py-5">Programme not found</div>
    }

    const bannerImage = tradeAreaBanners[programme.tradeArea]

    /* React 19 SEO (No Helmet Needed) */
    useEffect(() => {
        document.title = `${programme.title} | Cape Coast Technical Institute`

        const metaDescription = document.querySelector("meta[name='description']")
        if (metaDescription) {
            metaDescription.setAttribute("content", programme.description)
        }
    }, [programme])

    return (
        <>
            {/* Banner */}
            <section
                className="programme-banner"
                style={{ backgroundImage: `url(${bannerImage})` }}
            >
                <div className="programme-overlay">
                    <h1>{programme.title}</h1>
                    <p>{programme.tradeArea}</p>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="container py-3">
                <nav className="breadcrumb-nav">
                    <Link to="/academics">Academics</Link> /
                    <span> {programme.tradeArea} </span> /
                    <strong> {programme.title}</strong>
                </nav>
            </div>

            {/* Content */}
            <div className="container py-4">
                <p>{programme.description}</p>

                <Link to="/admissions" className="apply-btn">
                    Apply Now
                </Link>
            </div>
        </>
    )
}
