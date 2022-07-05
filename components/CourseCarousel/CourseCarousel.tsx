import { CourseCard } from "../CourseCard/CourseCard";

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
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                    <div className="mb-6 sm:mx-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                            <svg
                                className="w-10 h-10 text-deep-purple-accent-400"
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
                                <span className="relative">The</span>
                            </span>{' '}
                            quick, brown fox jumps over a lazy dog
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    courses.map((course, idx) => (
                        <CourseCard {...course} key={idx} />
                    ))
                }
            </div>
        </div>
    );
};