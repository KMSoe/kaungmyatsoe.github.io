export default function Contact() {
    return (
        <section id="contact" className="bg-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-xl">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Me</h2>
                {/* <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Leave a
                    note here, and I'll get back to you as soon as possible.</p> */}
                <div className="flex justify-center">
                    <div className="pt-12">
                        <div className="mb-2 flex items-center space-x-4">
                            <i className="fa-solid fa-phone"></i>
                            <p className="text-body-color text-base my-0">
                                09986507933
                            </p>

                        </div>
                        <div className="mb-2 flex items-center space-x-4">
                            <i className="fa-solid fa-envelope"></i>
                            <p className="text-body-color text-base my-0">
                                <a href="mailto: kaungmyatsoe.m192@gmail.com">kaungmyatsoe.m192@gmail.com</a>
                            </p>

                        </div>
                        <div className="mb-2 flex items-center space-x-4">
                            <i className="fa-solid fa-location-pin"></i>
                            <p className="text-body-color text-base my-0">
                                Hlaing Township, Yangon
                            </p>

                        </div>

                        <div>
                            <p className="my-3">Reach me</p>
                            <div className="flex gap-4">
                                <svg className="w-6 h-6 text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                <svg className="w-6 h-6 text-blue-300 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                                <svg className="w-6 h-6 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* <form className="md:col-span-2 space-y-8">
                        <div className="">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                            <input type="text" name="name" value="{{ old('name') }}" id="name"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                placeholder="Enter Your Name" />

                        </div>
                        <div className="">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" value="{{ old('email') }}" id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    placeholder="Enter Your Email" />
                            </div>

                        </div>
                        <div className="">
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                                <input type="text" name="phone" value="{{ old('phone') }}" id="phone"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Enter Your Phone Number" />
                            </div>
                        </div>
                        <div className="">
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                            <input type="text" name="subject" value="{{ old('subject') }}" id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Let us know how we can help you" />
                        </div>
                        <div className="">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                            <textarea id="message" name="content" value="{{ old('content') }}"
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Leave a comment..."></textarea>

                        </div>
                        <button type="submit"
                            className="text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Send
                            Message</button>
                    </form> */}
                </div>
            </div>
        </section>
    );
}