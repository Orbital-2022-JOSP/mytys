import { GenericContainer } from '../GenericContainer/GenericContainer';

export const MailingList: React.FC = () => {
    return (
        // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-screen-xl lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        //     <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        //         <div className="lg:flex-grow md:w-1/2 lg:items-center md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        //             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-light-blue-500">Join our mailing list</h1>
        //             <p className="mb-8 leading-relaxed">Receive weekly updates on exciting news or broadcasts on MYTYS and begin this journey with us!</p>
        //             <div className="flex w-full  justify-center items-end">
        //                 <div className="relative mr-10 lg:w-full xl:w-1/2 w-2/4">
        //                     <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Your email here </label>
        //                     <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out" />
        //                 </div>
        //                 <button className="inline-flex text-white bg-blue-500 border-0 py-3 px-6 focus:outline-none hover:bg-light-blue-800 rounded text-lg">Submit</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <GenericContainer>
            <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
                <div className="text-center">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        {/* <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Brand new
                            </p>
                        </div> */}
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="b039bae0-fdd5-4311-b198-8557b064fce0"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Join</span>
                            </span>{' '}
                            Our Mailing List
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Receive weekly updates on exciting news or broadcasts on MYTYS and begin this journey with us!
                        </p>
                    </div>
                    <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                        <input
                            placeholder="Email"
                            required
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-light-blue-accent-400 focus:outline-none focus:shadow-outline"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-light-blue-accent-400 hover:bg-light-blue-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Subscribe
                        </button>
                    </form>
                    {/* <p className="max-w-md mx-auto mb-10 text-xs text-gray-600 sm:text-sm md:mb-16">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium.
                    </p> */}
                    {/* <a
                        href="/"
                        aria-label="Scroll down"
                        className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-light-blue-accent-400 hover:border-light-blue-accent-400 hover:shadow hover:scale-110"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="currentColor"
                        >
                            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                        </svg>
                    </a> */}
                </div>
            </div>
        </GenericContainer>
    )
} 