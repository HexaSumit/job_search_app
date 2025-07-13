'use client'
import { FiSearch } from "react-icons/fi";

function SearchBar({ input, setInput, onSearchClick }) {

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-wrap items-center bg-white rounded-full shadow-lg px-4 md:px-6 py-3 md:py-3 max-w-3xl mx-auto w-[95%]">
      <div className="flex items-center bg-gray-100 rounded-full flex-1 px-3 md:px-4 py-1.5 md:py-2">
        <FiSearch className="text-blue-400 text-lg md:text-xl mr-2" />
        <input
          value={input}
          onChange={handleInput}
          type="text"
          placeholder="Search job categories (e.g., electrician)"
          className="bg-gray-100 flex-1 text-black text-sm md:text-base outline-none placeholder-gray-400"
        />
      </div>
      <button
        onClick={onSearchClick}
        className="mt-2 md:mt-0 ml-0 md:ml-3 w-full md:w-auto px-5 md:px-8 py-1.5 md:py-2 bg-blue-800 text-white rounded-full font-semibold text-sm md:text-lg shadow transition hover:bg-blue-900"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
