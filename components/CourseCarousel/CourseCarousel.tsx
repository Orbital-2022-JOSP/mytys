import useSWR from 'swr';
import { fetcher } from "../../lib/fetcher";
import { CourseCard } from "../CourseCard/CourseCard";
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import { GenericContainer } from '../GenericContainer/GenericContainer';

export const CourseCarousel: React.FC = () => {
    const { data: courses, error } = useSWR('/api/courses', fetcher);

    return (
        <>
            {
                courses && courses.data
                    ? <GenericContainer>
                        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                                <div className="mb-6 sm:mx-auto">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-light-blue-50">
                                        <svg
                                            className="w-10 h-10 text-light-blue-400"
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
                                </div>
                                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
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
                                            <span className="relative">Our</span>
                                        </span>{' '}
                                        available courses
                                    </h2>
                                    <p className="text-base text-gray-700 md:text-lg">
                                        Feel free to explore our courses and selct those that suit your needs!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {
                            courses && courses.data
                                ? <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full mx-auto">
                                    {
                                        courses.data.map((course, idx) => (
                                            <CourseCard {...course} key={idx} />
                                        ))
                                    }
                                </div>
                                : null
                        }
                    </GenericContainer>
                    : <LoadingComponent />
            }
        </>
    );
};