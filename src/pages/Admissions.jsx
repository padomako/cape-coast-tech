import PageHeader from "../components/PageHeader"

export default function Admissions() {
    return (
        <>
            {/* Standard Page Header */}
            <PageHeader
                title="Admissions"
                subtitle="Guidelines for prospective students and parents"
            />

            {/* Who Can Apply */}
            <section className="py-5">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-3">
                        Who Can Apply
                    </h2>
                    <p>
                        Admission into Cape Coast Technical Institute is open to students who
                        have successfully completed Junior High School (JHS) and are seeking
                        quality technical and academic secondary education.
                    </p>
                </div>
            </section>

            {/* Entry Requirements */}
            <section className="py-5 bg-light border-top border-bottom">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-4">
                        Entry Requirements
                    </h2>

                    <ul>
                        <li>Basic Education Certificate Examination (BECE)</li>
                        <li>Aggregate as approved by the Ghana Education Service (GES)</li>
                        <li>Passes in English Language and Mathematics</li>
                        <li>Good conduct and discipline record</li>
                    </ul>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-5">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-4">
                        Application Process
                    </h2>

                    <ol>
                        <li>Obtain an admission form from the school or designated outlets.</li>
                        <li>Complete the form with accurate personal and academic details.</li>
                        <li>Attach required documents (BECE results slip, birth certificate, etc.).</li>
                        <li>Submit the completed form to the school administration.</li>
                        <li>Await notification of admission status.</li>
                    </ol>
                </div>
            </section>

            {/* Important Notes */}
            <section className="py-5 bg-light border-top border-bottom">
                <div className="container">
                    <h2 className="fw-bold text-primary mb-3">
                        Important Notes
                    </h2>
                    <ul>
                        <li>Admission is competitive and based on available space.</li>
                        <li>Applicants must meet all stated entry requirements.</li>
                        <li>Submission of false information may lead to disqualification.</li>
                    </ul>
                </div>
            </section>

            {/* Online Application */}
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="fw-bold text-primary mb-3">
                        Online Application
                    </h2>
                    <p className="mb-4">
                        Online admission application will be available in a future update.
                        Please contact the school for assistance.
                    </p>

                    <button className="btn btn-secondary" disabled>
                        Apply Online (Coming Soon)
                    </button>
                </div>
            </section>
        </>
    )
}
