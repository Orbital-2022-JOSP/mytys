export const MailingList: React.FC = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-screen-xl lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <div className="lg:flex-grow md:w-1/2 lg:items-center md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-light-blue-500">Join our mailing list</h1>
                    <p className="mb-8 leading-relaxed">Receive weekly updates on exciting news or broadcasts on MY_TYS and begin this journey with us!</p>
                    <div className="flex w-full  justify-center items-end">
                        <div className="relative mr-10 lg:w-full xl:w-1/2 w-2/4">
                            <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">Your email here </label>
                            <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="inline-flex text-white bg-blue-500 border-0 py-3 px-6 focus:outline-none hover:bg-light-blue-800 rounded text-lg">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 