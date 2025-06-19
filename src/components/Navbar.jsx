import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className=" z-50 fixed top-0 w-full py-6 bg-white text-black shadow-2xl flex items-center justify-between px-8">
            <div className="">
                <Link href='/'>
                    <h1 className=" transition-transform duration-300 hover:scale-110 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-800 to-black tracking-wide">
                        NextGig
                    </h1>
                </Link>
            </div>

            <div className="">
                <ul className=" hidden md:flex justify-center gap-10 text-gray-600 font-sans font-semibold text-xl">
                    <li className="relative group cursor-pointer">
                        <Link href='/'>
                            <span className="hover:text-blue-800 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li className="relative group cursor-pointer">
                        <Link href='/jobs'>
                            <span className="hover:text-blue-800 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
                                Jobs
                            </span>
                        </Link>
                    </li>
                    <li className="relative group cursor-pointer">
                        <Link href='/organizations'>
                            <span className="hover:text-blue-800 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full">
                                Organizations
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className=" flex gap-4">
                <Link href='/account/login'>
                    <button className=" px-8 py-3 rounded-lg bg-blue-700 text-xl text-white">Log in</button>
                </Link>
                <button className=" post-job-btn px-8 py-2 text-lg text-blue-800 rounded-lg border-3 border-blue-800 transition-transform duration-300 hover:scale-110 hover:bg-blue-700  hover:text-white">
                    Post a job
                </button>
            </div>
        </div>
    )
}
