import Link from "next/link";

export const Blog = () => {
    return (
        <GenericContainer>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <Link href={"/"}>
                                <a
                                    className="transition-colors duration-200 text-light-blue-gray-900 hover:text-light-blue-accent-700"
                                    aria-label="Category"
                                    title="traveling"
                                >
                                    traveling
                                </a>
                            </Link>
                            <span className="text-gray-600">— 28 Dec 2020</span>
                        </p>
                        <Link href={"/"}>
                            <a
                                aria-label="Category"
                                title="Visit the East"
                                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-light-blue-accent-700"
                            >
                                Visit the East
                            </a>
                        </Link>
                        <p className="mb-2 text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia
                            consequuntur magni voluptatem doloremque.
                        </p>
                        <Link href={"/"}>
                            <a
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-light-blue-accent-400 hover:text-light-blue-800"
                            >
                                Learn more
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <Link href={"/"}>
                                <a
                                    className="transition-colors duration-200 text-light-blue-gray-900 hover:text-light-blue-accent-700"
                                    aria-label="Category"
                                    title="traveling"
                                >
                                    traveling
                                </a>
                            </Link>
                            <span className="text-gray-600">— 28 Dec 2020</span>
                        </p>
                        <Link href={"/"}>
                            <a
                                aria-label="Category"
                                title="Simple is better"
                                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-light-blue-accent-700"
                            >
                                Simple is better
                            </a>
                        </Link>
                        <p className="mb-2 text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia
                            consequuntur magni voluptatem doloremque.
                        </p>
                        <Link href={"/"}>
                            <a
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-light-blue-accent-400 hover:text-light-blue-800"
                            >
                                Learn more
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                            <Link href={"/"}>
                                <a
                                    className="transition-colors duration-200 text-light-blue-gray-900 hover:text-light-blue-accent-700"
                                    aria-label="Category"
                                    title="traveling"
                                >
                                    traveling
                                </a>
                            </Link>
                            <span className="text-gray-600">— 28 Dec 2020</span>
                        </p>
                        <Link href={"/"}>
                            <a
                                aria-label="Category"
                                title="Film It!"
                                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-light-blue-accent-700"
                            >
                                Film It!
                            </a>
                        </Link>
                        <p className="mb-2 text-gray-700">
                            Sed ut perspiciatis unde omnis iste natus error sit sed quia
                            consequuntur magni voluptatem doloremque.
                        </p>
                        <Link href={"/"}>
                            <a
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-light-blue-accent-400 hover:text-light-blue-800"
                            >
                                Learn more
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};