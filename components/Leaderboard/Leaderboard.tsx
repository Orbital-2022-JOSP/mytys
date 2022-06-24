type LeaderBoardCardProps = {
    position: string;
    username: string;
    points: string;
}

const LeaderBoardCard: React.FC<LeaderBoardCardProps> = ({ position, username, points }) => {
    let cardStyle = "";

    cardStyle = position == "1st"
        ? " scale-110"
        : position == "3rd"
            ? " scale-90"
            : ""

    return (
        <div className={"flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow" + cardStyle}>
            {position == "1st" && (
                <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                    <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-deep-purple-accent-400">
                        Leader
                    </div>
                </div>
            )}
            <div className="text-center">
                <div className="text-lg font-semibold">{position}</div>
                <div className="flex items-center justify-center mt-2">
                    <div className="mr-1 text-4xl font-bold">{username}</div>
                </div>
                <div className="mt-2 space-y-3">
                    <div className="text-gray-700">{points} points</div>
                </div>
            </div>
            <div className="w-full px-4 mt-3">
                <ul className="mb-4 -ml-1 space-y-2">
                    <li className="flex items-start">
                        <span className="mr-1">
                            <svg
                                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </span>
                        Earth
                    </li>
                    <li className="flex items-start">
                        <span className="mr-1">
                            <svg
                                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </span>
                        Space
                    </li>
                    <li className="flex items-start">
                        <span className="mr-1">
                            <svg
                                className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    fill="none"
                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                        </span>
                        Humans
                    </li>
                </ul>
            </div>
        </div>
    )
}

type MiniLeaderBoardCardProps = {
    text: string;
}

const MiniLeaderBoardCard: React.FC<MiniLeaderBoardCardProps> = ({ text }) => {
    return (
        <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400 bg-white">
            <div className="mr-2">
                <svg
                    className="w-6 h-6 transition-colors duration-200 text-deep-purple-accent-400 group-hover:text-white sm:w-8 sm:h-8"
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
            <span className="text-gray-800 transition-colors duration-200 group-hover:text-white">
                {text}
            </span>
        </div>
    )
}

export const LeaderBoard = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Our Leaderboard
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Transparent</span>
                    </span>{' '}
                    pricing. Pay as you grow.
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
            </div>
            <div className="grid max-w-md gap-10 row-gap-10 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
                <LeaderBoardCard position="2nd" username="crigard1" points="824" />
                <LeaderBoardCard position="1st" username="hloveridge0" points="1024" />
                <LeaderBoardCard position="3rd" username="ndrabble9" points="600" />
            </div>
            <div className="max-w-lg space-y-6 sm:mx-auto lg:max-w-xl mt-16">
                <MiniLeaderBoardCard text="Change the world by being yourself" />
                <MiniLeaderBoardCard text="Change the world by being yourself" />
                <MiniLeaderBoardCard text="Change the world by being yourself" />
                <MiniLeaderBoardCard text="Change the world by being yourself" />
                <MiniLeaderBoardCard text="Change the world by being yourself" />
                <MiniLeaderBoardCard text="Change the world by being yourself" />
            </div>
        </div>
    );
};