import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/movie-svgrepo-com.svg"

const Navbar = () => {
  return (
    <div>
      <header class="text-gray-400 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/movie-space" class="flex title-font font-medium items-center text-gray-400 mb-4 md:mb-0">
            <img src={Logo} alt="logo" class="w-11 h-11 text-white bg-yellow-300 p-1 pl-2 rounded-full"/>
            <span class="ml-3 text-xl hover:text-white">MovieSpace</span>
          </Link>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/movie-space/popular" class="mr-5 hover:text-white">Popular</Link>
            <Link to="/movie-space/top_rated" class="mr-5 hover:text-white">Top Rated</Link>
            <Link to="/movie-space/upcoming" class="mr-5 hover:text-white">Upcoming</Link>
          </nav>
          <button class="inline-flex text-black items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
