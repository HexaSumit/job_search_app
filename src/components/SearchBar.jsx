'use client'
import { FiSearch } from "react-icons/fi";

function SearchBar({input,setInput,onSearchClick}) {

  const handleInput=(e)=>{
    setInput(e.target.value)
  }

  return (
    <div className="flex items-center bg-white rounded-full shadow-lg  px-5 py-6 max-w-3xl mx-auto w-full">
      <div className="flex items-center bg-gray-100 rounded-full flex-1 px-4 py-2">
        <FiSearch className="text-blue-400 text-xl mr-2" />
        <input
          value={input}
          onChange={handleInput}
          type="text"
          placeholder="Search job categories (e.g., electrician)"
          className="bg-gray-100 flex-1 text-black text-lg outline-none placeholder-gray-400"
        />
      </div>
      <button className="ml-3 px-8 py-2 bg-blue-800 text-white rounded-full font-semibold text-lg shadow transition hover:bg-blue-900"
       onClick={onSearchClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
