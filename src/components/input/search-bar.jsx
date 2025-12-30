import { useState } from "react";

const SearchBar = ({ placeholder = "Search repositories...", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        {/* SVG Icon */}
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
