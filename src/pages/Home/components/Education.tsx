export default function Education() {
    return (
        <section id="education">
            <div className="container max-w-screen-xl mx-auto my-16 px-4 xl:px-0">
                <h2 className="mb-12 text-3xl font-bold text-center">
                    Education
                </h2>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <h5 className="font-bold text-slate-900">Computer Engineering & Information
                                    Technology</h5>

                            </div>
                            <div>
                                <em className="text-base tracking-wide">Mandalay Technological University</em>
                            </div>
                            <div>
                                <time className="font-caveat font-medium text-indigo-500">Dec 2016 – March 2020</time>
                            </div>
                        </div>
                    </div>


                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900"><i>Java SE Development</i></div>

                            </div>
                            <div>
                                <em className="text-base tracking-wide">Code 2</em>
                            </div>
                            <div>
                                <time className="font-caveat font-medium text-indigo-500">2018</time>
                            </div>
                            <div className="text-slate-500 pl-3 pt-3">
                                <ul className="list-disc">
                                    <li>Stock Manager App</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="10">
                                <path fill-rule="nonzero" d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
                            </svg>
                        </div>

                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                            <div className="flex items-center justify-between space-x-2 mb-1">
                                <div className="font-bold text-slate-900"><i>CS50: Introduction to Computer Science</i></div>

                            </div>
                            <div>
                                <em className="text-base tracking-wide">Harvard's Online Course</em>
                            </div>
                            <div>
                                <time className="font-caveat font-medium text-indigo-500">2020</time>
                            </div>
                            <div className="text-slate-500 pl-3 pt-3">
                                <ul className="list-disc">
                                    <li>Computer Science Overview</li>
                                    <li>Programming Concept with C & Python</li>
                                    <li>Data Structure & Algorithms</li>
                                    <li>SQL</li>
                                    <li>Web Programming</li>
                                    <li>Backend Development using Python</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}