export default function Admissions() {
    return (
        <div className="bg-white">

            {/* Page Header */}
            <section className="bg-blue-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Admissions
                    </h1>
                    <p className="text-lg text-gray-200">
                        Join Cape Coast Technical Institute and build a strong future
                    </p>
                </div>
            </section>

            {/* Who Can Apply */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Who Can Apply
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Admission into Cape Coast Technical Institute is open to students who
                        have successfully completed Junior High School (JHS) and are seeking
                        quality technical and academic secondary education.
                    </p>
                </div>
            </section>

            {/* Entry Requirements */}
            <section className="bg-gray-50 py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8">
                        Entry Requirements
                    </h2>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Basic Education Certificate Examination (BECE)</li>
                        <li>Aggregate as approved by the Ghana Education Service (GES)</li>
                        <li>Passes in English Language and Mathematics</li>
                        <li>Good conduct and discipline record</li>
                    </ul>
                </div>
            </section>

            {/* Application Process */}
            <section className="py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8">
                        Application Process
                    </h2>

                    <ol className="list-decimal list-inside text-gray-700 space-y-3">
                        <li>Obtain an admission form from the school or designated outlets.</li>
                        <li>Complete the form with accurate personal and academic details.</li>
                        <li>Attach required documents (BECE results slip, birth certificate, etc.).</li>
                        <li>Submit the completed form to the school administration.</li>
                        <li>Await notification of admission status.</li>
                    </ol>
                </div>
            </section>

            {/* Important Notes */}
            <section className="bg-gray-50 py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Important Notes
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Admission is competitive and based on available space.</li>
                        <li>Applicants must meet all entry requirements.</li>
                        <li>False information may lead to disqualification.</li>
                    </ul>
                </div>
            </section>

            {/* Online Application (Phase 2) */}
            <section className="py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">
                        Online Application
                    </h2>
                    <p className="text-gray-700 mb-8">
                        Online admission application will be available in a future update.
                        Please check back later or contact the school for assistance.
                    </p>

                    <button
                        disabled
                        className="bg-gray-400 text-white px-8 py-3 rounded-md cursor-not-allowed"
                    >
                        Apply Online (Coming Soon)
                    </button>
                </div>
            </section>

        </div>
    )
}
