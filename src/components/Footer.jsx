import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  let todayDate=new Date().getFullYear()
  // console.log(todayDate)

  return (
    <footer className=" w-full bg-blue-950 text-white px-6 py-8 z-50">
      <div className="flex py-5 flex-col md:flex-row justify-between items-start gap-10 max-w-7xl mx-auto">
        {/* Branding Section */}
        <div>
          <h1 className="text-gray-400 text-2xl sm:text-3xl font-bold mb-2">NextGig</h1>
          <p className="text-base sm:text-lg text-gray-300">Find your dream job faster.</p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-gray-400 text-xl sm:text-2xl font-bold mb-4">Quick Links</h1>
          <ul className="space-y-2 text-2xl sm:text-lg">
            <li>
              <Link href="#about" className="hover:text-blue-400">About</Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-blue-400">Services</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-400">Contact Us</Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-blue-400">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h1 className="text-gray-400 text-xl sm:text-2xl font-bold mb-4">Connect with us</h1>
          <div className="flex space-x-6 text-xl sm:text-2xl text-gray-300 cursor-pointer">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-400" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-100" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500" />
            </a>
          </div>
        </div>
      </div>
      <hr />

      <div className=" text-center text-xl pt-4 text-gray-400">
        <p>© {todayDate} NextGig. All rights reserved.</p>
      </div>
    </footer>
  );
}
