import Link from "next/link";
import { GenericContainer } from '../GenericContainer/GenericContainer';

export const Hero = () => {
    return (
        <GenericContainer>
            <div className="grid gap-10 row-gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Reach your academic
                            <br className="hidden md:block" />
                            {' '}goals with{' '}
                            <span className="text-light-blue-500">
                                MYTYS
                            </span>

                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            The MyTYS app provides a simple and convenient way to experience the benefits of private tuition
                        </p>
                        <Link href={"/"}>
                            <a
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-300 rounded shadow-md bg-light-blue-500 hover:bg-light-blue-800 focus:shadow-outline focus:outline-none"
                                aria-label="Enroll For Free"
                                title="Enroll For Free"
                            >
                                Enroll For Free
                            </a>
                        </Link>
                    </div>
                    <p className="mb-4 text-sm font-bold tracking-widest uppercase">
                        What you can expect
                    </p>
                    <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
                        <ul className="space-y-3">
                            <li className="flex">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-light-blue-500"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="1 50 25 13 25 36 50 1"
                                        />
                                    </svg>
                                </span>
                                Learning in a fun and engaging way
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-light-blue-500"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="1 50 25 13 25 36 50 1"
                                        />
                                    </svg>
                                </span>
                                Receive updates on weaker topics
                            </li>
                        </ul>
                        <ul className="space-y-3">
                            <li className="flex">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-light-blue-500"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="1 50 25 13 25 36 50 1"
                                        />
                                    </svg>
                                </span>
                                Marked assessments and comments
                            </li>
                            <li className="flex">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-light-blue-500"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="1 50 25 13 25 36 50 1"
                                        />
                                    </svg>
                                </span>
                                A free tuition experience
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="/images/mytys_landing_bg_2.jpg"
                        alt="image"
                    />
                </div>
            </div>
        </GenericContainer>
    );
};