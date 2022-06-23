export const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h2 className="max-w-xl mb-10 font-sans text-3xl font-bold leading-none text-center text-light-blue-500 tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    What Our Students Say
                </h2>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="images/increase_trend_graph_img.webp"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <span className = "text-blue-gray-900">Samuel  <span className="text-gray-600">— Primary 4 Science</span></span>
                        </p>
                        <a
                            href="/"
                            aria-label="Category"
                            title="Visit the East"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-light-blue-500"
                        >
                            From C to A!
                        </a>
                        <p className="mb-2 text-gray-700">
                           I never would have imagined to able to jump from a C grade to an A grade! Within 3 months of using MY_TYS, I could finally achieve my academic dreams!
                        </p>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-light-blue-500 hover:text-light-blue-800"
                        >
                            Read more
                        </a>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="images/A_grade_img.webp"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                       <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <span className = "text-blue-gray-900">John  <span className="text-gray-600">— Primary 3 Math</span></span>
                        </p>
                        <a
                            href="/"
                            aria-label="Category"
                            title="Visit the East"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-light-blue-500"
                        >
                            4A's in my recent exam!
                        </a>
                        <p className="mb-2 text-gray-700">
                           With just 1 month of using MY_TYS, I was able to excel in my subjects this school term. I believe it will help me in my grades in future terms as well!
                        </p>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-light-blue-500 hover:text-light-blue-800"
                        >
                            Read more
                        </a>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="images/lightbulb_img.jpg"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <span className = "text-blue-gray-900">Joshua<span className="text-gray-600">— Primary 6 Math</span></span>
                        </p>
                        <a
                            href="/"
                            aria-label="Category"
                            title="Visit the East"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-light-blue-500"
                        >
                            Learning is Fun with MY_TYS
                        </a>
                        <p className="mb-2 text-gray-700">
                           I used to hate mathematics since Primary 1, but the gamified platform on MY_TYS enabled me to learn math and have fun at the same time!
                        </p>
                        <a
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-light-blue-500 hover:text-light-blue-800"
                        >
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};