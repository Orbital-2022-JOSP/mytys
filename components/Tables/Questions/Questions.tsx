import Link from 'next/link';
export const QuestionsTable: React.FC = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Questions</h1>
                    {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p> */}
                </div>
                <div className="lg:w-5/6 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Title</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Difficulty</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Type</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Topics</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Types</th>
                                <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-3">Start</td>
                                <td className="px-4 py-3">5 Mb/s</td>
                                <td className="px-4 py-3">15 GB</td>
                                <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
                                <td className="w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-t-2 border-gray-200 px-4 py-3">Pro</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">25 Mb/s</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">25 GB</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
                                <td className="border-t-2 border-gray-200 w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-t-2 border-gray-200 px-4 py-3">Business</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">36 Mb/s</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">40 GB</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$50</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
                                <td className="border-t-2 border-gray-200 w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                            <tr>
                                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">Exclusive</td>
                                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">48 Mb/s</td>
                                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">120 GB</td>
                                <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$72</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">$24</td>
                                <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                                    <input name="plan" type="radio" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex pl-4 mt-4 lg:w-5/6 w-full mx-auto">
                    <Link href={"/admin/questions/create"}>
                        <a className="text-light-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Create new Question
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </Link>
                    <button className="flex ml-auto text-white bg-light-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-light-blue-600 rounded">Delete</button>
                </div>
            </div>
        </section>
    )
}