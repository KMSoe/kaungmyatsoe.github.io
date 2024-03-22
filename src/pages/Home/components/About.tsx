import CodingSVG from '../../../assets/images/programming-coding.svg';

export default function About() {
    return (
        <section id="about" className="mt-10 mb-32">
            <div className="container max-w-screen-xl mx-auto">
                <h2 className="mb-12 text-center text-3xl font-bold">
                    About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-6 justify-center items-start">
                    <div className="text-center hidden md:block">
                        <img src={CodingSVG} alt="" className="ml-auto w-96" />
                    </div>
                    <div className="px-4 md-px-0">
                        <p className="leading-7 md:pt-0 text-lg tracking-wide">
                            I specilized <span className="font-semibold">Computer Engineering & Information Technology</span> at <span className="italic">Mandalay Technological University</span>
                            in <span>2016</span>. I was certified <span className="font-semibold">CS50: Introduction to Computer Science</span> in 2020. And then I started <span>Web Development Career</span> by developing <span className="font-semibold">Budget App</span>.
                            At the start of 2022, I worked as web developer in a <span className="font-semibold">Food Delivery Service</span> Company and developed <span className="font-semibold">Rider App Backend Service</span>, maintained the process.
                            After one year & 2 months, I joined <span className="font-semibold">Visible One HK</span> and currently I'm working as Web Developer specilized in <span className="font-semibold">PHP/Laravel Backend Development</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}