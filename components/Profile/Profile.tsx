import { GenericContainer } from '../GenericContainer/GenericContainer';

type ProfileProps = {
    username?: string;
    problemsSolved?: number;
    percentageSolved?: number;
}

export const Profile: React.FC<ProfileProps> = ({ username, problemsSolved, percentageSolved }) => {
    return (
        <GenericContainer>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 lg:col-span-5 xl-col-span-4 2xl-col-span-3">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0 border border-gray-100 shadow-xl rounded-xl p-5">
                        <img
                            className="object-cover w-56 h-56 rounded-full shadow-lg mx-auto mb-10"
                            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                            {username ? username : "User"}
                        </h2>
                        {/* <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p> */}
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-7 xl-col-span-8 2xl-col-span-9">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0 border border-gray-100 shadow-xl rounded-xl p-5">
                        <p>Solved Problems</p>
                        <div className="grid grid-cols-12 gap-4 mt-5">
                            <div className="col-span-4">
                                <p className="text-xl font-medium">{problemsSolved ? problemsSolved : 32}</p>
                                <p className="text-sm">Problems</p>
                            </div>
                            <div className="col-span-8">
                                <div className="flex justify-between mb-1">
                                    {/* <span className="text-base font-medium text-blue-700">Flowbite</span> */}
                                    <span className="text-sm font-medium text-blue-700">{percentageSolved ? percentageSolved : 45}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: percentageSolved ? percentageSolved : 45 + "%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </GenericContainer>
    )
}