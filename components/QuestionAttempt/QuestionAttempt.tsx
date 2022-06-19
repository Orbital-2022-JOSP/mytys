export const QuestionAttempt = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-xl pr-16 mx-auto mb-10">
                    <h5 className="mb-6 text-3xl font-extrabold leading-none">
                        The quick, brown fox jumps over a lazy dog
                    </h5>
                    <p className="mb-6 text-gray-900">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut unde
                        omnis iste natus.
                    </p>
                    <div className="flex items-center">
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Next Question
                        </button>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Previous Question
                        </a>
                    </div>
                </div>
                <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
                        <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-8 h-8 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="mb-2 font-bold">Football Sports</p>
                            <p className="text-sm leading-5 text-gray-900">
                                Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
                        <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-8 h-8 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="mb-2 font-bold">Bowling Sports</p>
                            <p className="text-sm leading-5 text-gray-900">
                                Disrupt inspire and think tank, social entrepreneur but
                                preliminary thinking think tank compelling.
                            </p>
                        </div>
                        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
                        <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-8 h-8 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="mb-2 font-bold">Cycling Sports</p>
                            <p className="text-sm leading-5 text-gray-900">
                                A slice of heaven. O for awesome, this chocka full cuzzie is as
                                rip-off as a cracker.
                            </p>
                        </div>
                        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
                        <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                <svg
                                    className="w-8 h-8 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <p className="mb-2 font-bold">Weight Lifting Sports</p>
                            <p className="text-sm leading-5 text-gray-900">
                                Meanwhile, in behind the bicycle shed, Hercules Morse, as big as
                                a horse.
                            </p>
                        </div>
                        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                </div>
            </div>
        </div>
    );
};