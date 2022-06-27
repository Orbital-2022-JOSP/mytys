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
                <a
                    href="/"
                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                >
                    {courseType}
                </a>{' '}
                <span className="text-gray-600">— {date}</span>
            </p>
            <a
                href="/"
                aria-label="Article"
                title="Jingle Bells"
                className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                {title}
            </a>
            <p className="flex-grow mb-5 text-gray-700">
                {description}
            </p>
            <div>
                {tags.map((tag, idx) => (
                    <p key={idx} className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 mr-2">
                        {tag}
                    </p>
                ))}
            </div>
            <div className="flex items-center">
                <a href="/" aria-label="Author" title="Author" className="mr-3">
                    <img
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                </a>
                <div className="w-5/12">
                    <a
                        href="/"
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        {authorName}
                    </a>
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

export const CourseCarousel: React.FC = () => {
    const courses = [
        { "courseType": "exuding", "date": "06.02.2022", "title": "De-engineered", "description": "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit", "tags": ["Realigned", "migration", "Face to face", "context-sensitive", "model"], "authorName": "Lynnet Oosthout de Vree", "noOfViews": 7424, "noOfLikes": 3980 },
        { "courseType": "Exclusive", "date": "22.11.2021", "title": "projection", "description": "nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis", "tags": ["Monitored", "Quality-focused", "Exclusive", "migration", "hub"], "authorName": "Nadiya Gosforth", "noOfViews": 3059, "noOfLikes": 9542 },
        { "courseType": "circuit", "date": "14.11.2021", "title": "maximized", "description": "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel", "tags": ["Object-based", "attitude", "impactful", "Customer-focused", "reciprocal"], "authorName": "Pamella Jackways", "noOfViews": 7035, "noOfLikes": 3640 },
        { "courseType": "Monitored", "date": "09.08.2021", "title": "discrete", "description": "erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique", "tags": ["methodical", "installation", "Polarised", "Public-key", "service-desk"], "authorName": "Flemming Allmen", "noOfViews": 9504, "noOfLikes": 1625 },
        { "courseType": "24/7", "date": "10.11.2021", "title": "client-driven", "description": "risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor", "tags": ["Versatile", "Virtual", "support", "Stand-alone", "hub"], "authorName": "Mozes Mariot", "noOfViews": 5534, "noOfLikes": 3550 },
        { "courseType": "Up-sized", "date": "21.03.2022", "title": "task-force", "description": "amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat", "tags": ["Virtual", "portal", "Diverse", "Balanced", "logistical"], "authorName": "Pavel Kurth", "noOfViews": 9300, "noOfLikes": 2791 },
        { "courseType": "Multi-layered", "date": "04.08.2021", "title": "synergy", "description": "sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur", "tags": ["Operative", "Programmable", "open system", "toolset", "software"], "authorName": "Benoite Lorait", "noOfViews": 8585, "noOfLikes": 2277 },
        { "courseType": "reciprocal", "date": "12.02.2022", "title": "solution-oriented", "description": "lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus", "tags": ["bandwidth-monitored", "Cross-group", "Focused", "optimal", "Business-focused"], "authorName": "Rochester Sigmund", "noOfViews": 3961, "noOfLikes": 9609 },
        { "courseType": "Compatible", "date": "01.01.2022", "title": "Quality-focused", "description": "maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam", "tags": ["De-engineered", "neural-net", "Fully-configurable", "Reactive", "Advanced"], "authorName": "Kirk Petrazzi", "noOfViews": 3672, "noOfLikes": 8498 },
    ]
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    courses.map((course, idx) => (
                        <SingleCourse {...course} key={idx} />
                    ))
                }
            </div>
        </div>
    );
};