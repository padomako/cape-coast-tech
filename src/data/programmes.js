export const tradeAreaFilters = [
    { value: "all", label: "All Trade Areas" },
    { value: "engineering", label: "Engineering" },
    { value: "building-art", label: "Building / Art" },
    { value: "business", label: "Business / Fashion / Catering" },
]

const CORE_SUBJECTS = [
    "English Language",
    "Mathematics",
    "Integrated Science",
    "Social Studies",
    "ICT",
    "Entrepreneurship",
]

const CERT = "NABPTEX CERTIFICATE II"

export const programmes = [
    // ===================== ENGINEERING =====================
    {
        slug: "automotive-engineering-technology",
        title: "Automotive Engineering Technology",
        trade: "engineering",
        tradeArea: "Engineering",
        certification: CERT,
        description:
            "The Automotive Engineering Technology programme equips students with practical skills in the diagnosis, maintenance, and repair of modern vehicles. Students learn to work with engines, transmissions, electrical systems, and diagnostic tools used in today's automotive industry.",
        careers: [
            "Automotive Technician",
            "Service Advisor",
            "Fleet Maintenance Officer",
            "Workshop Supervisor",
            "Auto Electrician",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Automotive Engineering Science",
            "Automotive Engineering Practice",
            "Engineering Drawing",
            "Applied Electricity",
        ],
        hod: {
            name: "Mr. John Doe",
            title: "Head of Department, Automotive Engineering",
            message:
                "Welcome to the Automotive Engineering Department. We are committed to training skilled technicians who will serve Ghana's growing automotive sector with competence and integrity.",
        },
    },
    {
        slug: "electrical-engineering-technology",
        title: "Electrical Engineering Technology",
        trade: "engineering",
        tradeArea: "Engineering",
        certification: CERT,
        description:
            "The Electrical Engineering Technology programme trains students in electrical installation, maintenance, and repair of domestic and industrial electrical systems, including wiring, circuits, and power distribution.",
        careers: [
            "Electrical Installer",
            "Industrial Electrician",
            "Maintenance Technician",
            "Solar Systems Technician",
            "Electrical Contractor",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Electrical Engineering Science",
            "Electrical Installation Practice",
            "Engineering Drawing",
            "Applied Electricity",
        ],
        hod: {
            name: "Mr. John Doe",
            title: "Head of Department, Electrical Engineering",
            message:
                "Our Electrical Engineering department prepares students with both the theory and hands-on experience needed to excel in Ghana's electrical industry.",
        },
    },
    {
        slug: "electronics-engineering",
        title: "Electronics Engineering",
        trade: "engineering",
        tradeArea: "Engineering",
        certification: CERT,
        description:
            "The Electronics Engineering programme introduces students to the world of electronic components, circuits, and devices. Students gain skills in assembly, testing, troubleshooting, and repair of electronic equipment.",
        careers: [
            "Electronics Technician",
            "Repair Specialist",
            "Telecommunications Installer",
            "Quality Control Inspector",
            "Service Engineer",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Electronics Engineering Science",
            "Electronics Practice",
            "Engineering Drawing",
            "Applied Electricity",
        ],
        hod: {
            name: "Mr. John Doe",
            title: "Head of Department, Electronics Engineering",
            message:
                "Electronics is at the heart of modern life. Our graduates leave prepared to diagnose, repair, and build the electronic systems that power Ghana's future.",
        },
    },
    {
        slug: "mechanical-engineering-technology",
        title: "Mechanical Engineering Technology",
        trade: "engineering",
        tradeArea: "Engineering",
        certification: CERT,
        description:
            "The Mechanical Engineering Technology programme covers the design, fabrication, and maintenance of mechanical systems. Students gain practical experience with machine tools, metal work, and mechanical assemblies.",
        careers: [
            "Mechanical Technician",
            "Production Operator",
            "Machine Operator",
            "Maintenance Technician",
            "Workshop Foreman",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Mechanical Engineering Science",
            "Mechanical Engineering Practice",
            "Engineering Drawing",
            "Workshop Technology",
        ],
        hod: {
            name: "Mr. John Doe",
            title: "Head of Department, Mechanical Engineering",
            message:
                "Mechanical Engineering at CCTI focuses on giving students the hands-on skills needed to thrive in manufacturing, maintenance, and production roles.",
        },
    },
    {
        slug: "refrigeration-and-air-conditioning-technology",
        title: "Refrigeration and Air-Conditioning Technology",
        trade: "engineering",
        tradeArea: "Engineering",
        certification: CERT,
        description:
            "The Refrigeration and Air-Conditioning Technology programme trains students in the installation, servicing, and repair of cooling systems — from domestic refrigerators to commercial air-conditioning units.",
        careers: [
            "HVAC Technician",
            "Refrigeration Service Technician",
            "AC Installer",
            "Cold Room Technician",
            "Maintenance Specialist",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Refrigeration Science",
            "Refrigeration Practice",
            "Engineering Drawing",
            "Applied Electricity",
        ],
        hod: {
            name: "Mr. John Doe",
            title: "Head of Department, Refrigeration & Air-Conditioning",
            message:
                "Our Refrigeration & AC programme is one of the most practical in the institute, with students spending most of their time mastering real installations.",
        },
    },
    {
        slug: "welding-and-fabrication-technology",
        title: "Welding and Fabrication Technology",
        trade: "engineering",
        tradeArea: "Engineering",
        certification: CERT,
        description:
            "The Welding and Fabrication Technology programme provides students with skills in arc, gas, and MIG welding, as well as metal fabrication techniques used in construction and manufacturing.",
        careers: [
            "Professional Welder",
            "Metal Fabricator",
            "Pipeline Welder",
            "Structural Steel Worker",
            "Fabrication Shop Supervisor",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Welding Engineering Science",
            "Welding Practice",
            "Engineering Drawing",
            "Workshop Technology",
        ],
        hod: {
            name: "Mr. John Doe",
            title: "Head of Department, Welding & Fabrication",
            message:
                "Welding is a high-demand skill. Our students leave ready to produce quality work that meets industry standards.",
        },
    },

    // ===================== BUILDING / ART =====================
    {
        slug: "architectural-drafting",
        title: "Architectural Drafting",
        trade: "building-art",
        tradeArea: "Building / Art",
        certification: CERT,
        description:
            "The Architectural Drafting programme trains students in the preparation of technical drawings and plans used in the construction of buildings, using both manual drafting techniques and modern CAD software.",
        careers: [
            "Architectural Draftsman",
            "CAD Technician",
            "Building Designer",
            "Planning Assistant",
            "Site Technician",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Building Construction",
            "Architectural Drawing",
            "Materials Science",
            "Surveying",
        ],
        hod: {
            name: "Mr. John Doe",
            title: "Head of Department, Architectural Drafting",
            message:
                "Architectural Drafting is where creativity meets precision. We train our students to produce professional drawings ready for construction sites.",
        },
    },
    {
        slug: "building-construction-technology",
        title: "Building Construction Technology",
        trade: "building-art",
        tradeArea: "Building / Art",
        certification: CERT,
        description:
            "The Building Construction Technology programme covers the principles and practices of building, from foundations and masonry to finishing. Students gain practical experience on real construction projects.",
        careers: [
            "Building Technician",
            "Site Supervisor",
            "Mason",
            "Construction Foreman",
            "Quantity Assistant",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Building Construction",
            "Building Drawing",
            "Materials Science",
            "Site Practice",
        ],
        hod: {
            name: "Mr. John Doe",
            title: "Head of Department, Building Construction",
            message:
                "Our department produces graduates with strong practical foundations in modern building construction methods and materials.",
        },
    },
    {
        slug: "creative-art-technology",
        title: "Creative Art Technology",
        trade: "building-art",
        tradeArea: "Building / Art",
        certification: CERT,
        description:
            "The Creative Art Technology programme develops students' artistic skills in drawing, painting, sculpture, and modern design techniques — blending traditional art with contemporary creative technologies.",
        careers: [
            "Visual Artist",
            "Graphic Designer",
            "Studio Artist",
            "Art Teacher",
            "Illustrator",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "General Knowledge in Art",
            "Picture Making",
            "Graphic Design",
            "Sculpture",
        ],
        hod: {
            name: "Mr. John Doe",
            title: "Head of Department, Creative Art",
            message:
                "Creative Art at CCTI empowers students to express themselves while building the technical skills needed for a creative career.",
        },
    },
    {
        slug: "furniture-design-and-construction",
        title: "Furniture Design and Construction",
        trade: "building-art",
        tradeArea: "Building / Art",
        certification: CERT,
        description:
            "The Furniture Design and Construction programme equips students with skills in designing, building, and finishing furniture using a variety of woods, materials, and modern techniques.",
        careers: [
            "Furniture Maker",
            "Cabinet Maker",
            "Interior Woodworker",
            "Workshop Owner",
            "Design Assistant",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Furniture Design",
            "Wood Technology",
            "Technical Drawing",
            "Materials Science",
        ],
        hod: {
            name: "Mr. John Doe",
            title: "Head of Department, Furniture Design",
            message:
                "Furniture making is both a craft and a business. We prepare our students for both sides of the trade.",
        },
    },
    {
        slug: "plumbing-and-gas-fitting-technology",
        title: "Plumbing and Gas Fitting Technology",
        trade: "building-art",
        tradeArea: "Building / Art",
        certification: CERT,
        description:
            "The Plumbing and Gas Fitting Technology programme trains students in the installation and maintenance of water supply, drainage, and gas systems in domestic and commercial buildings.",
        careers: [
            "Professional Plumber",
            "Gas Fitter",
            "Drainage Technician",
            "Building Services Technician",
            "Maintenance Plumber",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Plumbing Science",
            "Plumbing Practice",
            "Building Drawing",
            "Materials Science",
        ],
        hod: {
            name: "Mr. John Doe",
            title: "Head of Department, Plumbing & Gas Fitting",
            message:
                "Plumbing is an essential trade. Our students leave with the certified skills needed to start their own practice or join a team.",
        },
    },
    {
        slug: "wood-and-fabrication-technology",
        title: "Wood and Fabrication Technology",
        trade: "building-art",
        tradeArea: "Building / Art",
        certification: CERT,
        description:
            "The Wood and Fabrication Technology programme covers advanced woodworking skills for construction, furniture, and custom fabrication projects using modern tools and techniques.",
        careers: [
            "Carpenter",
            "Wood Fabricator",
            "Joinery Specialist",
            "Site Carpenter",
            "Workshop Technician",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Wood Technology",
            "Carpentry Practice",
            "Technical Drawing",
            "Materials Science",
        ],
        hod: {
            name: "Mr. John Doe",
            title: "Head of Department, Wood & Fabrication",
            message:
                "Our Wood and Fabrication programme produces craftspeople who can work on construction sites, in workshops, or run their own businesses.",
        },
    },

    // ===================== BUSINESS / FASHION / CATERING =====================
    {
        slug: "fashion-designing-technology",
        title: "Fashion Designing Technology",
        trade: "business",
        tradeArea: "Business / Fashion / Catering",
        certification: CERT,
        description:
            "The Fashion Designing Technology programme develops students' skills in garment design, pattern-making, sewing, and fashion illustration — preparing them for the fashion industry.",
        careers: [
            "Fashion Designer",
            "Tailor / Seamstress",
            "Pattern Maker",
            "Fashion Entrepreneur",
            "Costume Designer",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Fashion Design",
            "Garment Construction",
            "Textiles",
            "Fashion Illustration",
        ],
        hod: {
            name: "Mrs. Jane Doe",
            title: "Head of Department, Fashion Designing",
            message:
                "Fashion is one of Ghana's fastest-growing industries. Our students leave ready to design, create, and launch their own brands.",
        },
    },
    {
        slug: "hospitality-and-catering-management",
        title: "Hospitality and Catering Management",
        trade: "business",
        tradeArea: "Business / Fashion / Catering",
        certification: CERT,
        description:
            "The Hospitality and Catering Management programme trains students in food preparation, service, and the business of running hospitality operations — from restaurants to event catering.",
        careers: [
            "Chef / Cook",
            "Caterer",
            "Restaurant Supervisor",
            "Hospitality Entrepreneur",
            "Event Manager",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Food & Nutrition",
            "Catering Practice",
            "Hospitality Management",
            "Bakery & Confectionery",
        ],
        hod: {
            name: "Mrs. Jane Doe",
            title: "Head of Department, Hospitality & Catering",
            message:
                "Our department combines culinary skill with business savvy, preparing students for careers in Ghana's thriving hospitality industry.",
        },
    },
    {
        slug: "business-studies-accounting",
        title: "Business Studies (Accounting Option)",
        trade: "business",
        tradeArea: "Business / Fashion / Catering",
        certification: CERT,
        description:
            "The Business Studies (Accounting Option) programme builds students' knowledge in financial accounting, bookkeeping, and business management — preparing them for roles in finance and administration.",
        careers: [
            "Accounts Clerk",
            "Bookkeeper",
            "Office Administrator",
            "Business Owner",
            "Audit Assistant",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Financial Accounting",
            "Business Management",
            "Costing",
            "Economics",
        ],
        hod: {
            name: "Mrs. Jane Doe",
            title: "Head of Department, Business Studies",
            message:
                "Our Accounting option equips students with the practical financial skills needed in today's business environment.",
        },
    },
    {
        slug: "business-studies-information-technology",
        title: "Business Studies (Information Technology Option)",
        trade: "business",
        tradeArea: "Business / Fashion / Catering",
        certification: CERT,
        description:
            "The Business Studies (IT Option) programme combines business fundamentals with computer literacy, software applications, and digital office skills — ideal for modern business environments.",
        careers: [
            "IT Support Assistant",
            "Office Administrator",
            "Data Entry Specialist",
            "Digital Assistant",
            "Business IT Specialist",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Information Technology",
            "Business Management",
            "Computer Applications",
            "Economics",
        ],
        hod: {
            name: "Mrs. Jane Doe",
            title: "Head of Department, Business Studies",
            message:
                "IT skills are no longer optional in business. Our IT option prepares students for the digital workplace.",
        },
    },
    {
        slug: "business-studies-keyboarding",
        title: "Business Studies (Keyboarding Option)",
        trade: "business",
        tradeArea: "Business / Fashion / Catering",
        certification: CERT,
        description:
            "The Business Studies (Keyboarding Option) programme focuses on secretarial practice, speed typing, office procedures, and business communication — preparing students for administrative roles.",
        careers: [
            "Secretary",
            "Office Assistant",
            "Administrative Officer",
            "Receptionist",
            "Executive Assistant",
        ],
        coreSubjects: CORE_SUBJECTS,
        electiveSubjects: [
            "Keyboarding",
            "Office Practice",
            "Business Management",
            "Shorthand",
        ],
        hod: {
            name: "Mrs. Jane Doe",
            title: "Head of Department, Business Studies",
            message:
                "Our Keyboarding option produces efficient, professional administrative staff ready to support any organisation.",
        },
    },
]

// Backwards-compatible object map for existing ProgrammePage.jsx
const programmeData = programmes.reduce((acc, p) => {
    acc[p.slug] = p
    return acc
}, {})

export default programmeData
