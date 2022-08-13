import { GenericContainer } from '../GenericContainer/GenericContainer';

export const JoinUsCTA: React.FC = () => {
    return (
        <GenericContainer>
            <h1 className="text-5xl text-light-blue-500 text-center pb-7 font-medium"> Join Us </h1>
            <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                    <div className="relative">
                        <img
                            className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                            src="images/mytys_landing_bg_3.jpg"
                            alt=""
                        />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                    </div>
                    <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            As a Student
                        </h5>
                        <p className="mb-5 text-gray-700">
                            We provide an online-TYS style form of gamified education, proven to cultivate joy in learning and improve results in our students
                        </p>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-light-blue-accent-400 hover:bg-light-blue-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Enroll Now
                        </button>
                    </div>
                </div>
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                    <div className="relative">
                        <img
                            className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                            src="images/Teacher1.jpg"
                            alt=""
                        />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                    </div>
                    <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            As a Tutor
                        </h5>
                        <p className="mb-5 text-gray-700">
                            As a tutor at MYTYS, you would play a key role in helping students achieve their academic results and in improving their quality of education
                        </p>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-light-blue-accent-400 hover:bg-light-blue-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Join us
                        </button>
                    </div>
                </div>
            </div>
        </GenericContainer>
    );
};