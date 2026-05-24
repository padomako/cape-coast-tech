import { Link } from "react-router-dom"

const tradeAreas = [
    {
        title: "Engineering",
        image: "/images/ELECTRONICS%20PRACTICAL%20SESSION/5%20%283%29.jpg",
        description:
            "Our Engineering programs provide hands-on, competency-based training designed to equip students with practical technical skills. Learners gain experience in operating tools, machinery, and modern technologies, preparing them for careers in maintenance, production, and industrial operations.",
        link: "/programmes?trade=engineering",
        linkText: "View programs under Engineering",
    },
    {
        title: "Building / Art",
        image: "/images/BUILDING%20AND%20CONSTRUCTION%20PRACTICAL%20SESSION/1.jpg",
        description:
            "The Building and Art trade area focuses on developing creative and technical skills for the construction and design industries. Students are trained in areas such as building technology, craftsmanship, and visual arts, combining practical knowledge with creativity to bring ideas to life.",
        link: "/programmes?trade=building-art",
        linkText: "View programs under Building / Art",
    },
    {
        title: "Business / Fashion / CAT",
        image: "/images/CATERING/3.jpg",
        description:
            "This trade area offers a blend of entrepreneurial, digital, and creative skills. Students gain knowledge in business management, fashion design, and Catering, preparing them for careers in business operations, the fashion industry, and Catering and Hospitality.",
        link: "/programmes?trade=business",
        linkText: "View programs under BUS / FASH / CAT",
    },
]

export default function Academics() {
    return (
        <div className="academics-page">

            {/* ================= SECTION 1 — HERO ================= */}
            <section className="academics-hero">
                <div className="academics-hero-image">
                    <img
                        src="/images/DJI_20260414220331_0660_D.jpg"
                        alt="Aerial view of Cape Coast Technical Institute campus"
                    />
                </div>
                <div className="academics-hero-content">
                    <div className="container-xl">
                        <h1 className="academics-hero-title">Academics</h1>
                        <p className="academics-hero-tagline">
                            Learning at Cape Coast Technical Institute can happen for every type
                            of learner, at every phase of life.
                        </p>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 2 — QUOTE ================= */}
            <section className="academics-quote">
                <div className="container-xl">
                    <blockquote>
                        <p>
                            &ldquo;Teaching people skills without giving them a vision for a
                            better future &mdash; a vision based on common values &mdash; is only
                            training.&rdquo;
                        </p>
                        <cite>&mdash; Nido R. Qubein</cite>
                    </blockquote>
                </div>
            </section>

            {/* ================= SECTION 3 — INTRO ================= */}
            <section className="academics-intro">
                <div className="container-xl">
                    <div className="academics-intro-grid">
                        <div className="academics-intro-image academics-intro-image-large">
                            <img
                                src="/images/DJI_20260414220431_0661_D.jpg"
                                alt="Aerial view of CCTI campus and surroundings"
                            />
                        </div>

                        <div className="academics-intro-body">
                            <h2 className="section-serif-title">
                                Cape Coast Technical Institute
                            </h2>

                            <p>
                                Enroll in our 3-year Certificate II Competency-Based Training
                                (CBT) programs and gain both academic knowledge and hands-on
                                technical skills. With 6 core subjects, 4 elective subjects, and
                                our Workplace Experience Learning (WEL) program, you&rsquo;ll get
                                real-world industry exposure designed to prepare you for the job
                                market.
                            </p>

                            <p className="academics-intro-lead">
                                Our programs are offered in three dynamic trade areas:
                            </p>

                            <ul className="academics-trade-bullets">
                                <li>
                                    <strong>Engineering</strong>
                                    <span>Build practical technical expertise</span>
                                </li>
                                <li>
                                    <strong>Building / Art</strong>
                                    <span>Combine creativity with construction and design skills</span>
                                </li>
                                <li>
                                    <strong>Business / Fashion / Catering</strong>
                                    <span>Master entrepreneurship, fashion, and hospitality skills</span>
                                </li>
                            </ul>

                            <div className="academics-intro-actions">
                                <Link to="/about" className="harvard-link">
                                    Learn more about our school
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 4 — TRADE AREAS (Harvard "We saved you a seat") ================= */}
            <section className="academics-trade-section">
                <div className="container-xl">

                    <div className="trade-section-head">
                        <p className="trade-eyebrow">We saved you a seat</p>
                        <h2 className="section-serif-title">Trade Areas</h2>
                    </div>

                    <div className="trade-area-grid trade-area-grid-harvard">
                        {tradeAreas.map((area) => (
                            <Link
                                to={area.link}
                                className="trade-card-harvard"
                                key={area.title}
                            >
                                <div className="trade-card-harvard-image">
                                    <img src={area.image} alt={area.title} />
                                </div>
                                <div className="trade-card-harvard-body">
                                    <h3><span>{area.title}</span></h3>
                                    <p>{area.description}</p>
                                    <span className="harvard-link">
                                        <span>{area.linkText}</span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            {/* ================= SECTION 5 — WEEKEND TRAINING ================= */}
            <section className="academics-weekend">
                <div className="container-xl">

                    <div className="academics-section-header">
                        <h2 className="section-serif-title">
                            Our Weekend Industrial Training
                        </h2>
                    </div>

                    <div className="academics-weekend-grid">
                        <div className="academics-weekend-image">
                            <img
                                src="/images/ELECTRICALS%20PRACTICE%20SESSION/banner_bg1.jpg"
                                alt="Weekend Industrial Training"
                            />
                        </div>

                        <div className="academics-weekend-body">
                            <p className="academics-weekend-text">
                                Kickstart your journey in the industrial field with our short,
                                hands-on weekend Competency-Based Training programs. Open to
                                everyone, these sessions focus on practical skills designed to
                                empower artisans and individuals ready to build real-world
                                expertise.
                            </p>

                            <Link
                                to="/weekend-training#apply"
                                className="academics-apply-btn"
                            >
                                <span>Apply Now</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= SECTION 6 — TEACHING & LEARNING ================= */}
            <section className="academics-approach">
                <div className="container-xl">
                    <div className="academics-section-header">
                        <h2 className="section-serif-title">Teaching &amp; Learning Approach</h2>
                        <p>
                            At Cape Coast Technical Institute, teaching and learning are
                            designed to combine strong academic foundations with hands-on
                            technical training, discipline, and character development.
                        </p>
                    </div>

                    <div className="approach-grid">
                        <div className="approach-card-editorial">
                            <div className="approach-icon">
                                <i className="bi bi-tools"></i>
                            </div>
                            <h4>Practical-Focused Training</h4>
                            <p>
                                Students spend significant time in workshops, laboratories, and
                                studios where theory is translated into real technical skills.
                            </p>
                        </div>

                        <div className="approach-card-editorial">
                            <div className="approach-icon">
                                <i className="bi bi-journal-check"></i>
                            </div>
                            <h4>Structured Academic Instruction</h4>
                            <p>
                                Well-planned lessons, continuous assessment, and national
                                curriculum standards ensure academic excellence and consistency.
                            </p>
                        </div>

                        <div className="approach-card-editorial">
                            <div className="approach-icon">
                                <i className="bi bi-people-fill"></i>
                            </div>
                            <h4>Discipline &amp; Character Development</h4>
                            <p>
                                Beyond academics, students are guided to develop discipline,
                                teamwork, leadership, and responsibility for lifelong success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
