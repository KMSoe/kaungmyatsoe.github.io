import { useState } from "react"

export default function Header() {
    const [isOpenNav, setIsOpenNav] = useState<boolean>(false);

    return (
        <div className="flex justify-between z-[100] items-center w-full h-[80px] md:px-[150px] bg-white fixed shadow-md">
            <div>
                <h1 className="text-5xl font-signature ml-2 text-black"><a href="/">KMS</a></h1>
            </div>
            <ul className="hidden md:flex">
                <li className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"><a href="#home">Home</a></li>
                <li className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"><a href="#about">About</a></li>
                <li className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"><a href="#skills">Skills</a></li>

                <li className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"><a href="#experience">Experience</a>
                </li>
                <li className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"><a href="#education">Education</a>
                </li>
                <li className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200"><a href="#contact">contact</a>
                </li>
            </ul>
            <div id="open-navigation-icon" className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"><svg stroke="currentColor"
                fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="30" width="30"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                </path>
            </svg>
            </div>
            <div id="close-navigation-icon" className="cursor-pointer pr-4 z-10 text-gray-500 hidden md:hidden"><svg stroke="currentColor"
                fill="currentColor" stroke-width="0" viewBox="0 0 352 512" height="30" width="30"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
                </path>
            </svg>
            </div>
            <ul id="mobile-navigation"
                className="hidden flex flex-col justify-center items-center absolute  top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                <li className="px-4 cursor-pointer capitalize py-6 text-3xl hover:underline-offset-1"><a className="close-navigation-icon" href="#home">home</a></li>
                <li className="px-4 cursor-pointer capitalize py-6 text-3xl hover:underline-offset-1"><a className="close-navigation-icon" href="#about">about</a></li>
                <li className="px-4 cursor-pointer capitalize py-6 text-3xl hover:underline-offset-1"><a className="close-navigation-icon" href="#skills">skills</a></li>
                <li className="px-4 cursor-pointer capitalize py-6 text-3xl hover:underline-offset-1"><a className="close-navigation-icon" href="#experience">experience</a></li>
                <li className="px-4 cursor-pointer capitalize py-6 text-3xl hover:underline-offset-1"><a className="close-navigation-icon" href="#education">education</a></li>
                <li className="px-4 cursor-pointer capitalize py-6 text-3xl hover:underline-offset-1"><a className="close-navigation-icon" href="#contact">contact</a></li>
            </ul>
        </div>

    )
}