import React, { useState } from "react";
import { Strings } from "../assets/string";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const logo = require('../assets/images/TrainRex.png');

    return (
        <header className="bg-white text-white">

            {/* Thick bar containing logo, name, and apply now button */}
            <div className="py-4 px-4 lg:pl-16 lg:py-6 flex flex-col lg:flex-row justify-between">
                {/*logo side*/}
                <div className="flex items-center mb-4 lg:mb-0">
                    <p className="text-black text-4xl font-bold">Accorp</p>
                </div>
                {/*menu side*/}
                <div className="flex-col">
                    {/* <span className="  md:text-2xl  text-black font-semibold sm:text-lg ">{Strings.FullName}</span> */}
                    <nav className="">
                        <ul className="flex justify-between">
                            <li>
                                <a href="/"
                                   className="block py-2 px-4 rounded-md text-black font-semibold focus:text-white focus:bg-gray-800 hover:text-white hover:bg-gray-800">Home</a>
                            </li>
                            <li>
                                <a href="/about"
                                   className="block py-2 px-4 rounded-md text-black font-semibold focus:text-white focus:bg-gray-800 hover:text-white hover:bg-gray-800">About</a>
                            </li>
                            <li>
                                <a href="/programs"
                                   className="block py-2 px-4 rounded-md text-black font-semibold focus:text-white focus:bg-gray-800 hover:text-white hover:bg-gray-800">Courses</a>
                            </li>
                            <li>
                                <a href="/facilities"
                                   className="block py-2 px-4 rounded-md text-black font-semibold focus:text-white focus:bg-gray-800 hover:text-white hover:bg-gray-800">Facilities</a>
                            </li>
                            <li>
                                <a href="/rules"
                                   className="block py-2 px-4 rounded-md text-black font-semibold focus:text-white focus:bg-gray-800 hover:text-white hover:bg-gray-800">Rules</a>
                            </li>
                            <li>
                                <a href="/annc"
                                   className="block py-2 px-4 rounded-md text-black font-semibold focus:text-white focus:bg-gray-800 hover:text-white hover:bg-gray-800">Announcements</a>
                            </li>
                            <li>
                                <a href="/faq"
                                   className="block py-2 px-4 rounded-md text-black font-semibold focus:text-white focus:bg-gray-800 hover:text-white hover:bg-gray-800">FAQ</a>
                            </li>
                            <li>
                                <a href="/contact"
                                   className="block py-2 px-4 rounded-md text-black font-semibold focus:text-white focus:bg-gray-800 hover:text-white hover:bg-gray-800">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/*apply now buttn side*/}
                <div className={'flex items-center justify-between mt-4 w-full lg:w-fit'}>
                    {/* Hamburger Icon for small screens */}
                    <div className="lg:hidden mt-2 ">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
                                />
                            </svg>
                        </button>
                    </div>
                    {/* <button className="bg-gray-300 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-8 rounded-3xl border border-gray-300 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
                        Apply Now &#8594;
                    </button> */}
                </div>
            </div>


            {/* Menu on larger screens */}

            {/* Sidebar Menu for small screens */}
            <nav
                className={`lg:hidden fixed top-0 left-0 bg-gray-800 w-64 h-full overflow-y-auto z-50 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                {/*add a close button*/}
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            height="1em"
                            width="1em"

                        >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={32}
                                d="M368 368L144 144M368 144L144 368"
                            />
                        </svg>
                    </button>
                </div>
                <ul className="py-4 ">
                    <li>
                        <a onClick={closeMenu} href="/"
                           className="block py-2 px-4  hover:bg-gray-700 text-white text-center border-t-2">Home</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="/about"
                           className="block py-2 px-4  hover:bg-gray-700 text-white text-center border-t-2">About</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="/programs"
                           className="block py-2 px-4  hover:bg-gray-700 text-white text-center border-t-2">Courses</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="/facilities"
                           className="block py-2 px-4  hover:bg-gray-700 text-white text-center border-t-2">Facilities</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="/rules"
                           className="block py-2 px-4  hover:bg-gray-700 text-white text-center border-t-2">Rules</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="/annc"
                           className="block py-2 px-4  hover:bg-gray-700 text-white text-center border-t-2">Announcements</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="/faq"
                           className="block py-2 px-4  hover:bg-gray-700 text-white text-center border-t-2">FAQs</a>
                    </li>
                    <li>
                        <a onClick={closeMenu} href="/contact"
                           className="block py-2 px-4  hover:bg-gray-700 text-white text-center border-y-2">Contact
                            Us</a>
                    </li>
                </ul>
            </nav>


        </header>
    );
}

export default NavBar;
