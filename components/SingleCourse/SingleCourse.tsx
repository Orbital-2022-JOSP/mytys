import Link from 'next/link';
import { ICourse } from "../../models/Course.model";

export const SingleCourse: React.FC<ICourse> = ({ _id, title, description, difficulty, courseTopics, courseTypes, questions, noOfLikes, noOfViews }) => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl sm:min-w-xl md:min-w-full lg:min-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-xl pr-16 mx-auto mb-10 w-1/2 mt-5">
                    <h5 className="mb-6 text-3xl font-extrabold leading-none">
                        {title ? title : "The quick, brown fox jumps over a lazy dog"}
                    </h5>
                    <p className="mb-6 text-gray-900">
                        {
                            description
                                ? description
                                : "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut undeomnis iste natus."
                        }
                    </p>
                    <div className="flex items-center">
                        <Link href={`/courses/${_id}/question/1`}>
                            <a
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-accent-400 hover:bg-blue-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Get started
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="grid gap-5 row-gap-5 sm:grid-cols-2 w-1/2">
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-light-blue-50">
                            <svg
                                className="w-12 h-12 text-blue-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Average Difficulty</h6>
                        <p className="text-sm text-gray-700">
                            {difficulty ? difficulty : 10}
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-light-blue-50">
                            <svg
                                className="w-12 h-12 text-blue-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Questions</h6>
                        <p className="text-sm text-gray-700">
                            {questions ? questions.length : 10}
                        </p>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-light-blue-50">
                            <svg
                                className="w-12 h-12 text-blue-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Course Topics</h6>
                        <div>
                            {courseTopics.map((topic, idx) => (
                                <p key={"courseTopic" + idx} className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-light-blue-900 uppercase rounded-full bg-light-blue-accent-400 mr-2">
                                    {topic.name}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="max-w-md">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-light-blue-50">
                            <svg
                                className="w-12 h-12 text-blue-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">Course Types</h6>
                        <div>
                            {courseTypes.map((type, idx) => (
                                <p key={"courseType" + idx} className="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-light-blue-900 uppercase rounded-full bg-light-blue-accent-400 mr-2">
                                    {type.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};