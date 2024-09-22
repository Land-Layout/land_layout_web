"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="bg-white text-black p-4 sm:p-6 md:flex md:justify-between md:items-center shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src={"/land_layout_logo2.png"}
            alt="Logo"
            width={100}
            height={150}
            // fill={true}
            
          />
        </div>
        
        {/* <a href="#" className="text-2xl font-bold text-black">
          Abc Enterprises
        </a> */}

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4 ml-4">
          <Link href="/" className="mx-2 hover:text-gray-700">
            Home
          </Link>
          <Link href="/about" className="mx-2 hover:text-gray-700">
            Amenities
          </Link>
          <Link href="/about" className="mx-2 hover:text-gray-700">
            About
          </Link>
          <Link href="/contact_us" className="mx-2 hover:text-gray-700">
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-black"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-black">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 text-black">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 text-black">
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
};





// const [search, setSearch] = useState(""); // To track search input
// const [suggestions, setSuggestions] = useState([]); // To track suggestions

// // Sample data for search suggestions
// const data = ["Home", "About", "Contact us", "Products", "Services", "Blog"];

// Function to update suggestions based on input
// const handleInputChange = (e) => {
//   const query = e.target.value;
//   setSearch(query);

//   // Filter suggestions that match the search query
//   const filteredSuggestions = data.filter((item) =>
//     item.toLowerCase().includes(query.toLowerCase())
//   );
//   setSuggestions(filteredSuggestions);
// };

// {/* Search Field with Search Icon */}
//         <div className="relative flex items-center w-full md:w-1/3">
//           <span className="absolute left-3 text-gray-500">
//             {/* Search Icon */}
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
//               ></path>
//             </svg>
//           </span>
//           <input
//             type="text"
//             className="w-full pl-10 pr-4 py-2 bg-gray-100 text-black rounded-full border border-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
//             placeholder="Search..."
//             value={search}
//             // onChange={handleInputChange}
//           />
//           {search && suggestions.length > 0 && (
//             <ul className="absolute left-0 w-full bg-white text-black mt-1 rounded-md shadow-lg z-10">
//               {suggestions.map((suggestion, index) => (
//                 <li
//                   key={index}
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => setSearch(suggestion)} // Clicking a suggestion updates the search box
//                 >
//                   {suggestion}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>