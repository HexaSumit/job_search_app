import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="z-50 fixed top-0 w-full py-2 md:py-3 bg-white text-black shadow-2xl flex flex-wrap items-center justify-between px-4 md:px-6">
            <div>
                <Link href='/'>
                    <h1 className="transition-transform duration-300 hover:scale-110 text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-800 to-black tracking-wide">
                        NextGig
                    </h1>
                </Link>
            </div>

            <div className="w-full md:w-auto mt-2 md:mt-0 flex justify-center md:justify-end">
                <ul className="hidden md:flex gap-4 md:gap-6 text-gray-600 font-sans font-medium text-sm md:text-base">
                    {["/", "/jobs", "/organizations"].map((href, idx) => {
                        const labels = ["Home", "Jobs", "Organizations"];
                        return (
                            <li key={idx} className="relative group cursor-pointer">
                                <Link href={href}>
                                    <span className="hover:text-blue-800 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
                                        {labels[idx]}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3 mt-2 md:mt-0">
                <Link href='/account/login'>
                    <button className="px-5 md:px-6 py-1.5 md:py-2 rounded-lg bg-blue-700 text-sm md:text-base text-white">
                        Log in
                    </button>
                </Link>
                <button className="post-job-btn px-5 md:px-6 py-1.5 md:py-1 text-sm md:text-base text-blue-800 rounded-lg border-3 border-blue-800 transition-transform duration-300 hover:scale-110 hover:bg-blue-700 hover:text-white">
                    Post a job
                </button>
            </div>
        </div>
    );
}  