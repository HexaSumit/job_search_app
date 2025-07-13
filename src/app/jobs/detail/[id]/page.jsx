import jobsdata from "@/app/data/Data";
import Link from "next/link";

function page({ params }) {
    let { id } = params;
    const jobId = parseInt(id)
    const job = jobsdata.find((item) => item.id === jobId)
    console.log(job)
    if (!job) {
        return <div className="text-3xl text-center py-20">Job not found</div>
    }

    return (
        <div className="min-h-screen bg-gray-100 px-8 pt-28 pb-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
                {/* Left Main Box */}
                <div className="lg:w-2/3 w-full bg-white rounded-2xl shadow-md p-10">
                    <h1 className="text-4xl font-bold text-blue-600 mb-6">{job.title}</h1>
                    <p className="text-xl text-gray-600 mb-3">
                        <strong>Company:</strong> {job.company}
                    </p>
                    <p className="text-xl text-gray-600 mb-3">
                        <strong>Location:</strong> {job.company}
                    </p>
                    <p className="text-xl text-gray-600 mb-8">
                        <strong>Posted on:</strong> {job.postedAt}
                    </p>

                    <h2 className="text-4xl font-semibold text-gray-800 mb-6">Job Description</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        {job.description}
                    </p>
                </div>

                {/* Right Side Boxes */}
                <div className="lg:w-1/3 w-full flex flex-col gap-8">
                    {/* Job Summary */}
                    <div className="bg-white rounded-2xl shadow-md p-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-5">Job Summary</h2>
                        <p className="text-lg text-gray-700 mb-3">
                            <strong>Category: </strong>{job.category}
                        </p>
                        <p className="text-lg text-gray-700 mb-3">
                            <strong>Type:</strong> {job.type}
                        </p>
                        <p className="text-lg text-gray-700">
                            <strong>Salary:</strong> {job.salary}
                        </p>
                    </div>

                    {/* Company Info */}
                    <div className="bg-white rounded-2xl shadow-md p-8">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-5">Company Info</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {job.companyInfo}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Buttons */}
            <div className="max-w-7xl mx-auto mt-10 flex flex-col sm:flex-row justify-center gap-8">
                <Link href='/account/login'>
                    <button className="bg-gray-800 hover:bg-black text-white px-12 py-3 rounded-full font-bold text-xl">
                        Login to Save
                    </button>
                </Link>
                <Link href='/account/login'>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-full font-bold text-xl">
                        Login to Apply
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default page