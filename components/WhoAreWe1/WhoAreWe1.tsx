export const WhoAreWe1: React.FC = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="p-8 rounded shadow-xl sm:p-16">
                <div className="flex flex-col lg:flex-row">
                    <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                        <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            What exactly is{" "}
                            <span className="inline-block text-light-blue-accent-400">
                                MYTYS
                            </span>
                        </h2>
                    </div>
                    <div className="lg:w-1/2">
                        <p className="mb-4 text-base text-gray-700">
                           MYTYS is an all-in-one educational webpage that offers a gamified, tuition-like experience as an alternative to conventional, costly tuition. MyTYS is created by <span  className = "text-light-blue-accent-400">students</span>, for <span className = "text-light-blue-accent-400">students</span>
                        </p>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-light-blue-accent-400 hover:text-light-blue-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}