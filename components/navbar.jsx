"use client"
import { useState } from "react";
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="relative flex w-full flex-wrap items-center justify-between bg-gray-100 py-2 text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700 dark:bg-gray-600 lg:py-4 "
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3 mx-12">
        <Link href="/">
                  <div className="font-bold">Tennis App</div>
              </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block border-0 bg-transparent px-2 text-gray-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-gray-200 lg:hidden"
        >
          <span className="w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </button>

        <div
          className={`${
            isOpen ? "visible" : "hidden"
          } mt-2 flex-grow basis-full items-center lg:mt-0 lg:flex lg:basis-auto`}
          id="navbarSupportedContent4"
        >
          {/* Rest of the navbar content */}

          <Link href="/login">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-[2rem]">
              Login or Sign up for free
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
