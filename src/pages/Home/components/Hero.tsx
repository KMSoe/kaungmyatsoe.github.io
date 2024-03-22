import Profile from '../../../assets/images/kaungmyatsoe.jpg';

export default function Hero() {
    return (
        <section id="hero" className="bg-gray-700 py-16 text-white">
            <div className="container max-w-screen-xl mx-auto mt-10">
                <div className="grid md:grid-cols-2 gap-2 justify-center items-center">
                    <div className="text-center">
                        <img className="mx-auto mb-6 w-[200px] md:w-[400px] rounded-full" src={Profile} alt="Kaung Myat Soe" />
                        <h1 className="mt-4 text-4xl font-bold">Kaung Myat Soe</h1>
                        <h4 className="mt-4 italic text-2xl font-semibold">Web Developer</h4>
                    </div>

                    <div className="text-center px-4 md-px-0">
                        <p>
                            <blockquote className="mt-4 md:text-left text-xl text-white leading-7 pt-3 md:pt-0 tracking-wide font-semibold italic">
                                <svg className="w-8 h-8 text-gray-400 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                </svg>
                                make a bridge between real world business and
                                Software Development
                            </blockquote>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}