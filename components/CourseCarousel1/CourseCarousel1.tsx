import Link from 'next/link';
import { GenericContainer } from '../GenericContainer/GenericContainer';

type SingleCourseProps = {
    courseType: string;
    date: string;
    title: string;
    description: string;
    tags: string[];
    authorName: string;
    noOfViews: number;
    noOfLikes: number;
}

const SingleCourse: React.FC<SingleCourseProps> = ({ courseType, date, title, description, tags, authorName, noOfLikes, noOfViews }) => {
    let formatter = Intl.NumberFormat('en', { notation: 'compact' });

    return (
        <div className="p-8 bg-white border rounded shadow-sm flex flex-col">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <Link href={"/"}>
                    <a
                        className="transition-colors duration-200 text-light-blue-500 hover:text-light-blue-500"
                        aria-label="Category"
                    >
                        {courseType}
                    </a>
                </Link>
                {' '}
                <span className="text-gray-600">— {date}</span>
            </p>
            <Link href={"/"}>
                <a
                    aria-label="Article"
                    title="Jingle Bells"
                    className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-light-blue-500"
                >
                    {title}
                </a>
            </Link>
            <p className="flex-grow mb-5 text-gray-700">
                {description}
            </p>
            <div>
                {tags.map((tag, idx) => (
                    <p key={idx} className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-light-blue-accent-400 mr-2">
                        {tag}
                    </p>
                ))}
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
                <div className="w-5/12">
                    <Link href={"/"}>
                        <a
                            aria-label="Author"
                            title="Author"
                            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-light-blue-500"
                        >
                            {authorName}
                        </a>
                    </Link>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                        Author
                    </p>
                </div>
                <div className="ml-auto text-right">
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>{formatter.format(noOfViews)}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        {/* <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6 */}
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>{formatter.format(noOfLikes)}
                        {/* <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>6 */}
                    </span>
                    {/* <a
                        href="/"
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        Vasile Melinte
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                        Author
                    </p> */}
                </div>
            </div>
        </div>

    )
}

export const CourseCarousel1: React.FC = () => {
    const courses = [
        { "courseType": "Primary 2", "date": "06.02.2022", "title": "P2 Mathematics Topical Part 1", "description": "This set of quizzes will challenge your knowledge of the first few chapters in P2 Mathematics. By going through topic by topic, you will be able to master these topics by the end of the course!", "tags": ["Primary", "Mathematics", "Fractions", "Counting", "Numbers"], "authorName": "John Yan", "noOfViews": 7424, "noOfLikes": 3980 },
        { "courseType": "Primary 5", "date": "22.11.2021", "title": "P5 Science Topical Part 2", "description": "This set of quizzes will challenge your knowledge of the first few chapters in P5 Science. By going through topic by topic, you will be able to master these topics by the end of the course!", "tags": ["Primary 5", "Science", "Classification", "Food Chain", "Energy", "Forces"], "authorName": "Samuel Pang", "noOfViews": 3059, "noOfLikes": 9542 },
        { "courseType": "Secondary 1 Express", "date": "12.02.2022", "title": "S1E MathematicsTopical 1/4 ", "description": "This set of quizzes will challenge your knowledge of the first few chapters in S!E Mathematics. By going through topic by topic, you will be able to master these topics by the end of the course!", "tags": ["Secondary 1", "Express", "Mathematics", "LCM", "SCF", "Algebra"], "authorName": "John Yan", "noOfViews": 3961, "noOfLikes": 9609 },
        { "courseType": "Scondary 4 Express", "date": "01.01.2022", "title": "S4E Chemistry", "description": "This set of quizzes will challenge your knowledge of the first few chapters in S4E Chemistry. By going through topic by topic, you will be able to master these topics by the end of the course!", "tags": ["Secondary 4", "Express", "Chemistry", "Atomic bonding", "Separation techniques", "Periodic table"], "authorName": "Samuel Pang", "noOfViews": 3672, "noOfLikes": 8498 },
    ]
    return (
        <GenericContainer>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    courses.map((course, idx) => (
                        <SingleCourse {...course} key={idx} />
                    ))
                }
            </div>
        </GenericContainer>
    );
};