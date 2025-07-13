import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  let todayDate = new Date().getFullYear();

  return (
    <footer className="w-full bg-blue-950 text-white px-4 md:px-6 py-4 md:py-6 z-50">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 max-w-6xl mx-auto">
        {/* Branding Section */}
        <div>
          <h1 className="text-gray-400 text-xl md:text-2xl  hover:text-gray-200 font-bold mb-1">NextGig</h1>
          <p className="text-sm md:text-base text-gray-300">Find your dream job faster.</p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-gray-400 text-lg hover:text-gray-200 md:text-xl font-bold mb-2">Quick Links</h1>
          <ul className="space-y-1 text-sm md:text-base">
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
          <h1 className="text-gray-400 text-lg md:text-xl hover:text-gray-200 font-bold mb-2">Connect with us</h1>
          <div className="flex space-x-4 md:space-x-5 text-lg md:text-xl text-gray-300 cursor-pointer">
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

      <hr className="border-gray-700 mt-4" />
      <div className="text-center text-sm md:text-base pt-2 text-gray-400">
        <p>© {todayDate} NextGig. All rights reserved.</p>
      </div>
    </footer>
  );
}
