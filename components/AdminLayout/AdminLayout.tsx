import { ChatIcon, HomeIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";

type AdminLayoutProps = {
    children: React.ReactNode,
};

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <>
            <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
                <div>
                    <div className="mt-8 text-center">
                        <Link href={"/admin"}>
                            <a>
                                <img src="/android-chrome-512x512.png" alt="Cefiniti Logo" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28" />
                            </a>
                        </Link>
                        <h5 className="hidden mt-8 text-xl font-semibold text-gray-600 lg:block">Username</h5>
                        <span className="hidden text-gray-400 lg:block">Usertype</span>
                    </div>

                    <ul className="space-y-2 tracking-wide mt-8">
                        <li>
                            <Link href={"/admin/accounts"}>
                                <a aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl outline outline-light-blue-500 text-gray-900">
                                    <UserIcon className="h-6 w-6" />
                                    <span className="-mr-1 font-medium">Accounts</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/admin/questions"}>
                                <a aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-xl outline outline-light-blue-500 text-gray-900">
                                    <ChatIcon className="h-6 w-6" />
                                    <span className="-mr-1 font-medium">Questions</span>
                                </a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href={"/dashboard/accounts"}>
                                <a className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                                    <CashIcon className="h-6 w-6" />
                                    <span className="group-hover:text-gray-700">Accounts</span>
                                </a>
                            </Link>
                        </li> */}
                    </ul>
                </div>

                <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
                    <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="group-hover:text-gray-700">Logout</span>
                    </button>
                </div>
            </aside>
            <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
                <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                    <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
                        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <div className="flex space-x-4">
                            <Link href={"/"}>
                                <button aria-label="home" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                                    <HomeIcon className="h-5 w-5 m-auto text-gray-600" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="p-6 2xl:container bg-gray-100 min-h-screen">
                    {children}
                </div>
            </div>

        </>
    )
}