import { useNavigate } from "react-router-dom"

export default function GraduateDocuments() {
    const navigate = useNavigate()

    const documents = [
        "Transcript",
        "Testimonial",
        "Certificate",
        "Recommendation Letter",
        "Attestation"
    ]

    const handleDownloadClick = () => {
        navigate("/student-login")
    }

    return (
        <div className="graduate-documents-clean">

            <ul className="documents-clean-list">
                {documents.map((doc, i) => (
                    <li key={i} className="document-row">
                        <span className="document-name">{doc}</span>

                        <button
                            className="download-clean-btn"
                            onClick={handleDownloadClick}
                        >
                            Download
                        </button>
                    </li>
                ))}
            </ul>

            <div className="login-notice-clean">
                You must login to download graduate documents.
            </div>

        </div>
    )
}
