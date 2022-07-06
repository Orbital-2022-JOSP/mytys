import Link from "next/link";
import { GenericContainer } from '../GenericContainer/GenericContainer';

export const ServerError: React.FC = () => {
    return (
        <GenericContainer>
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                    <div className="flex items-center justify-center w-120 rounded-full">
                        <img src="/images/server-error.svg" alt="Picture of Books" className="w-full" />
                    </div>
                    <div className="max-w-xl mt-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Server</span>
                            </span>{' '}
                            Error
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Oops something went wrong!
                        </p>
                    </div>
                    <div>
                        <Link href={"/"}>
                            <a
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-light-blue-400 hover:bg-light-blue-700 focus:shadow-outline focus:outline-none"
                            >
                                Return Home
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </GenericContainer>
    )
}