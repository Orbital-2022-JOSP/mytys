const SingleQuestion = () => {
    return (
        <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-light-blue-400 hover:border-light-blue-400">
            <div className="mr-2">
                <svg
                    className="w-6 h-6 transition-colors duration-200 text-light-blue-400 group-hover:text-white sm:w-8 sm:h-8"
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
            <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
                Change the world by being yourself.
            </span>
        </div>
    )
}

export const SingleCourse = () => {
    const tags = ["De-engineered", "neural-net", "Fully-configurable", "Reactive", "Advanced"];

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
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-accent-400 hover:bg-blue-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Get started
                        </button>
                    </div>
                </div>
                <div className="grid gap-5 row-gap-5 sm:grid-cols-2 w-full">
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-light-blue-50">
                            <svg
                                className="w-12 h-12 text-blue-accent-400"
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
                        <h6 className="mb-2 font-semibold leading-5">Average Difficulty</h6>
                        <p className="text-sm text-gray-700">
                            10
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-light-blue-50">
                            <svg
                                className="w-12 h-12 text-blue-accent-400"
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
                        <h6 className="mb-2 font-semibold leading-5">Topics</h6>
                        <div>
                            {tags.map((tag, idx) => (
                                <p key={idx} className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mr-2">
                                    {tag}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-light-blue-50">
                            <svg
                                className="w-12 h-12 text-blue-accent-400"
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
                        <h6 className="mb-2 font-semibold leading-5">Organically grow</h6>
                        <p className="text-sm text-gray-700">
                            A slice of heaven. O for awesome, this chocka full cuzzie is as
                            rip-off as a cracker. Meanwhile, in behind the bicycle shed,
                            Hercules.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-light-blue-50">
                            <svg
                                className="w-12 h-12 text-blue-accent-400"
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
                        <h6 className="mb-2 font-semibold leading-5">A slice of heaven</h6>
                        <p className="text-sm text-gray-700">
                            Disrupt inspire and think tank, social entrepreneur but
                            preliminary thinking think tank compelling. Inspiring, invest
                            synergy capacity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};