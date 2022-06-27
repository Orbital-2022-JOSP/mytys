import Link from 'next/link';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: session, status } = useSession()

    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                >
                    <img
                        src='/logo.svg'
                        className="w-8 text-light-blue-accent-400"
                    />
                
                    <span className="ml-2 text-xl font-bold tracking-wide text-light-blue-500 uppercase">
                        MYTYS
                    </span>
                </a>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    {
                        status == "authenticated"
                            ? <>
                               <li>
                        <a
                            href="/"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-light-blue-500"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            aria-label="Our subjects"
                            title="Our subjects"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-light-blue-500"
                        >
                            Subjects
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            aria-label="Quiz"
                            title="Quiz"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-light-blue-500"
                        >
                            Quiz
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            aria-label="LeaderBoard"
                            title="LeaderBoard"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-light-blue-500"
                        >
                            LeaderBoard
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-light-blue-500 transition duration-300 rounded shadow-md bg-white hover:bg-light-blue-800 focus:shadow-outlinefocus:outline-none"
                            aria-label="Log Out"
                            title="Log Out"
                        >
                            <span className="font-bold">
                            Log Out
                            </span>
                        </a>
                    </li>
                     <li>
                            <div className="ml-3 relative">
                <button type="button" className="max-w-xs rounded-full flex items-center text-sm bg-light-blue-100 hover:bg-light-blue-800 focus:shadow-outline focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
              </div>
                     </li>
                            </>
                            : <>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="Our product"
                                        title="Our product"
                                        className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-light-blue-500"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="Our subjects"
                                        title="Our subjects"
                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-light-blue-accent-400"
                                    >
                                        Subjects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="How it works"
                                        title="How it works"
                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-light-blue-accent-400"
                                    >
                                        How it Works
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        aria-label="About us"
                                        title="About us"
                                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-light-blue-accent-400"
                                    >
                                        About us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-light-blue-accent-400 hover:bg-light-blue-accent-700 focus:shadow-outline focus:outline-none"
                                        aria-label="Sign up"
                                        title="Sign up"
                                    >
                                        Sign up
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/"
                                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-700 transition duration-200 rounded shadow-md border border-light-blue-accent-400 hover:bg-light-blue-accent-700 hover:text-white focus:shadow-outline focus:outline-none"
                                        aria-label="Sign up"
                                        title="Sign up"
                                    >
                                        Log In
                                    </a>
                                </li>
                            </>
                    }
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-light-blue-50 focus:bg-light-blue-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                     {(isMenuOpen && status == "authenticated") ? (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <a
                                            href="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                             <img
                                                src='/logo.svg'
                                                className="w-8 text-light-blue-accent-400"
                                            />
                
                                            <span className="ml-2 text-xl font-bold tracking-wide text-light-blue-500 uppercase">
                                                My_TYS
                                            </span>
                                        </a>
               
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4"> 
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-light-blue-500"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Our subjects"
                                                title="Our subjects"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-light-blue-500"
                                            >
                                                Subjects
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Quiz"
                                                title="Quiz"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-light-blue-500"
                                            >
                                                Quiz
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="LeaderBoard"
                                                title="LeaderBoard"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-light-blue-500"
                                            >
                                                LeaderBoard
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-light-blue-500 transition duration-300 rounded shadow-md bg-white hover:bg-light-blue-800 focus:shadow-outlinefocus:outline-none"
                                                aria-label="Log Out"
                                                title="Log Out"
                                            >
                                                <span className="font-bold">
                                                Log Out
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="ml-3 relative">
                                                <button type="button" className="max-w-xs rounded-full flex items-center text-sm bg-light-blue-100 hover:bg-light-blue-800 focus:shadow-outline focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                                <span className="sr-only">Open user menu</span>
                                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                                </button>
                                            </div>
                                        </li> 
                                    </ul> 
                                </nav>
                            </div>
                        </div>) : (isMenuOpen && status == "unauthenticated") && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <a
                                            href="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                             <img
                                                src='/logo.svg'
                                                className="w-8 text-light-blue-accent-400"
                                            />
                
                                            <span className="ml-2 text-xl font-bold tracking-wide text-light-blue-500 uppercase">
                                                My_TYS
                                            </span>
                                        </a>
               
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-light-blue-accent-400"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Our Subjects"
                                                title="Our Subjects"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-light-blue-accent-400"
                                            >
                                                Subjects
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="How it works"
                                                title="How it works"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-light-blue-accent-400"
                                            >
                                                How it Works
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="About us"
                                                title="About us"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-light-blue-accent-400"
                                            >
                                                About us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-light-blue-accent-400 hover:bg-light-blue-accent-700 focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Sign up
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="inline-flex items-center justify-center  w-full h-12 px-6 font-medium tracking-wide text-gray-700 transition duration-200 rounded shadow-md border border-light-blue-accent-400 hover:bg-light-blue-accent-700 hover:text-white focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Log In
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
};