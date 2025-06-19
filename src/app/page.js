// import Footer from "@/components/Footer";
import Footer from "@/components/Footer";
import InfinityLoader from "@/components/InfinityLoader";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
// import homeimg from ''

export default function Home() {
  return (
    <div className="">
      <div >
        <Navbar />
      </div>
      <div className=" flex min-h-screen w-[100%] bg-gradient-to-r from-[#d8f3ff] to-[#fff8ee]">

        {/* HERO PAGE LEFT SECTION  */}
        <div className=" text-center pt-40 w-[70%]">
          <div className=" mt-10 px-4">
            <h1 className=" auto-slide-in-top text-6xl font-bold text-gray-800">
              Job Hunting Made Effortless with
            </h1>
            <p className=" text-gray-600 mt-4">
              <span className=" auto-slide-in-top text-7xl text-blue-600 font-semibold">NextGig</span>
            </p>
            <p className=" auto-slide-in-left text-3xl  text-gray-500 mt-12">
              Discover better gigs, faster—your career upgrade starts here today!
            </p>
          </div>

          {/* SEARCH BAR  */}
          <div className=" auto-slide-in-bottom mt-16">
            <SearchBar />
          </div>
          <div className=" auto-slide-in-bottom mt-15 flex gap-5 items-center justify-center">
              <h2 className=" text-2xl text-gray-500 font-semibold">Popular Tags:</h2>
              <button className=" px-3 py-2 rounded-4xl bg-blue-200 text-blue-500 text-xl transition-transform duration-300 hover:scale-110">Accountant</button>
              <button className=" px-3 py-2 rounded-4xl bg-blue-200 text-blue-500 text-xl transition-transform duration-300 hover:scale-110">Developer</button>
              <button className=" px-3 py-2 rounded-4xl bg-blue-200 text-blue-500 text-xl transition-transform duration-300 hover:scale-110">Data Scientist</button>
              <button className=" px-3 py-2 rounded-4xl bg-blue-200 text-blue-500 text-xl transition-transform duration-300 hover:scale-110">Data Entry</button>
            </div>
        </div>

        {/* HERO PAGE RIGHT SECTION  */}
        <div className=" auto-slide-in-left infinite-up-down pt-64 w-[30%]">
          <Image
            src="/img/hero_img.png"
            alt="Home Background"
            width={550}
            height={150}
            style={{ objectFit: "cover" }}  // image ko cover mode me set karta hai
            priority   // jaldi load karne ke liye
          />
        </div>
      </div>
    </div>
  );
}
