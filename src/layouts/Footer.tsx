export default function Footer() {


    return (
        <footer className="bg-gray-700 shadow text-white">
            <div className="w-full mx-auto max-w-screen-xl px-4 py-6 md:flex md:items-center md:justify-between">
                <span className="sm:text-center text-md">© { new Date().getFullYear() } <a href="/" className="hover:underline">Kaung Myat Soe</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-base font-medium sm:mt-0">
                    <li>
                        <a href="#home" className="mr-4 hover:underline md:mr-6 ">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="mr-4 hover:underline md:mr-6">Skills</a>
                    </li>
                    <li>
                        <a href="#experience" className="mr-4 hover:underline md:mr-6">Experience</a>
                    </li>
                    <li>
                        <a href="#education" className="mr-4 hover:underline md:mr-6">Education</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}