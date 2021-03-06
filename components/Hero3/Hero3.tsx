import { GenericContainer } from '../GenericContainer/GenericContainer';

export const Hero3 = () => {
    return (
        <GenericContainer>
            <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            The quick, brown fox
                            <br className="hidden md:block" />
                            jumps over{' '}
                            <span className="relative px-1">
                                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-cyan-accent-400" />
                                <span className="relative inline-block text-light-blue-accent-400">
                                    a lazy dog
                                </span>
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                            quae. explicabo.
                        </p>
                    </div>
                    <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                        Features
                    </p>
                    <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                        <ul className="space-y-3">
                            <li className="flex">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-light-blue-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </span>
                                A slice of heaven
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-light-blue-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </span>
                                Disrupt inspire
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-light-blue-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </span>
                                Preliminary thinking
                            </li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="flex">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-light-blue-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </span>
                                Flipboard curmudgeon
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-light-blue-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </span>
                                Storage shed
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-light-blue-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </span>
                                Satoshi Nakamoto
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                        alt=""
                    />
                </div>
            </div>
        </GenericContainer>
    );
};