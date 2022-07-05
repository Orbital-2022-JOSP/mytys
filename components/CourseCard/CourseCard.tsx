import { Types } from "mongoose";
import Link from "next/link";

type CourseCardProps = {
    _id?: Types.ObjectId;
    courseType: string;
    createdAt: string;
    title: string;
    description: string;
    tags: string[];
    authorName: string;
    noOfViews: number;
    noOfLikes: number;
}

export const CourseCard: React.FC<CourseCardProps> = ({ _id, courseType, createdAt, title, description, tags, authorName, noOfLikes, noOfViews }) => {
    let formatter = Intl.NumberFormat('en', { notation: 'compact' });
    let f = new Intl.DateTimeFormat('en');

    function truncateString(str, num) {
        if (str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }

    return (
        <Link href={`/courses/${_id}`}>
            <div className="p-8 bg-white border rounded shadow-sm flex flex-col w-full transition-outline duration-200 hover:outline hover:outline-light-blue-400 hover:cursor-pointer">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    {/* <Link href={"/"}>
                    <a
                        className="transition-colors duration-200 text-light-blue-400 hover:text-deep-purple-800"
                        aria-label="Category"
                    >
                        {courseType}
                    </a>
                </Link>
                {' '}
                <span className="text-gray-600">— {date}</span> */}
                    <span className="text-gray-600">{new Date(createdAt).toDateString()}</span>
                </p>
                {/* <Link href={"/"}>
                    <a
                        aria-label="Article"
                        title="Jingle Bells"
                        className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-light-blue-400"
                    >
                        {title}
                    </a>
                </Link> */}
                <p
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-black"
                >
                    {title}
                </p>
                <p className="flex-grow mb-5 text-gray-700">
                    {
                        truncateString(description, 100)
                    }
                </p>
                <div>
                    {/* {tags.map((tag, idx) => (
                    <p key={idx} className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mr-2">
                        {tag}
                    </p>
                ))} */}
                </div>
                <div className="flex items-center">
                    <Link href={"/"}>
                        <a aria-label="Author" title="Author" className="mr-3">
                            <img
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="avatar"
                                className="object-cover w-10 h-10 rounded-full shadow-sm"
                            />
                        </a>
                    </Link>
                    <div>
                        {/* <Link href={"/"}>
                            <a
                                aria-label="Author"
                                title="Author"
                                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-light-blue-400"
                            >
                                {authorName}
                            </a>
                        </Link> */}
                        <p
                            className="font-semibold text-gray-800 transition-colors duration-200 text-light-blue-400"
                        >
                            {authorName}
                        </p>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                            Author
                        </p>
                    </div>
                    <div className="ml-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-light-blue-50">
                            <p className="text-sm font-medium leading-4 text-gray-800">
                                40
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-full text-center mt-3">
                        <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>{formatter.format(noOfViews)}
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>{formatter.format(noOfLikes)}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}