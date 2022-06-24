import Link from 'next/link';

type MCQQuestionAttemptProps = {
    title: string,
    description?: string,
    options: Array<string>,
    nextLink?: string,
    prevLink?: string
}

export const MCQQuestionAttempt: React.FC<MCQQuestionAttemptProps> = ({ title, description, options, nextLink, prevLink }) => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-xl w-full pr-16 mx-auto mb-10">
                    <h5 className="mb-6 text-3xl font-extrabold leading-none">
                        {title ? title : "Question Title"}
                    </h5>
                    <p className="mb-6 text-gray-900">
                        {description ? description : "Question Description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, inventore! Beatae qui veritatis exercitationem similique odit, tempore iste consectetur esse repudiandae atque tempora. Provident aspernatur temporibus, nam dolores exercitationem at deleniti esse impedit et dicta, sit, pariatur dignissimos? Porro dolore dolores dignissimos non aliquid itaque nobis corrupti exercitationem repellat harum, magni natus a perspiciatis illum quod quidem, numquam temporibus repudiandae. Reiciendis eum facere architecto omnis aut magni dolor, necessitatibus, deserunt, quae rerum fugit tenetur fuga quasi rem suscipit neque ea quisquam nobis at aliquid sed quia totam molestiae. Qui voluptates molestias harum laborum itaque enim ab non porro vitae obcaecati deleniti ipsam velit earum ad odit fugiat autem quae officiis, quas sint magnam suscipit! Culpa quidem officia eveniet ex aut, deleniti eius ea debitis voluptas accusamus earum voluptatum maiores perferendis vitae vero voluptatibus ad non eligendi laborum? Qui exercitationem, aperiam quo eos eveniet culpa, aliquid quae facere blanditiis, esse cupiditate."}
                    </p>
                    <div className="flex items-center">
                        <Link href={nextLink ? nextLink : "/question/random"}>
                            <a
                                aria-label="Next Question Link"
                                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-light-blue-accent-400 hover:bg-light-blue-accent-700 focus:shadow-outline focus:outline-none disabled"
                            >
                                Next Question
                            </a>
                        </Link>
                        <Link href={prevLink ? prevLink : ""}>
                            <a
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-light-blue-accent-400 hover:text-light-blue-800"
                            >
                                Previous Question
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                    {
                        options
                            ? options.map((option, idx) => (
                                <div key={"questionOption" + idx} className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
                                    <div className="p-5">
                                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                            <svg
                                                className="w-8 h-8 text-light-blue-accent-400"
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
                                        <p className="mb-2 font-bold">{option}</p>
                                    </div>
                                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-light-blue-accent-400 group-hover:scale-x-100" />
                                </div>
                            ))
                            : <>
                                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
                                    <div className="p-5">
                                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                            <svg
                                                className="w-8 h-8 text-light-blue-accent-400"
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
                                        <p className="mb-2 font-bold">Football Sports</p>
                                        <p className="text-sm leading-5 text-gray-900">
                                            Sed ut perspiciatis unde omnis iste. Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                        </p>
                                    </div>
                                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-light-blue-accent-400 group-hover:scale-x-100" />
                                </div>
                                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
                                    <div className="p-5">
                                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                            <svg
                                                className="w-8 h-8 text-light-blue-accent-400"
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
                                        <p className="mb-2 font-bold">Bowling Sports</p>
                                        <p className="text-sm leading-5 text-gray-900">
                                            Disrupt inspire and think tank, social entrepreneur but
                                            preliminary thinking think tank compelling.
                                        </p>
                                    </div>
                                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-light-blue-accent-400 group-hover:scale-x-100" />
                                </div>
                                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
                                    <div className="p-5">
                                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                            <svg
                                                className="w-8 h-8 text-light-blue-accent-400"
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
                                        <p className="mb-2 font-bold">Cycling Sports</p>
                                        <p className="text-sm leading-5 text-gray-900">
                                            A slice of heaven. O for awesome, this chocka full cuzzie is as
                                            rip-off as a cracker.
                                        </p>
                                    </div>
                                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-light-blue-accent-400 group-hover:scale-x-100" />
                                </div>
                                <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer">
                                    <div className="p-5">
                                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                            <svg
                                                className="w-8 h-8 text-light-blue-accent-400"
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
                                        <p className="mb-2 font-bold">Weight Lifting Sports</p>
                                        <p className="text-sm leading-5 text-gray-900">
                                            Meanwhile, in behind the bicycle shed, Hercules Morse, as big as
                                            a horse.
                                        </p>
                                    </div>
                                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-light-blue-accent-400 group-hover:scale-x-100" />
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};