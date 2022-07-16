import { useState } from 'react';

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 text-gray-600 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

export const FAQ1 = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-cyan-900 uppercase rounded-full bg-cyan-accent-400">
                            MYTYS
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">FAQ</h2>
                    <p className="text-base text-gray-700 md:text-lg ">
                        Our answers to general questions posted to us
                    </p>
                </div>
                <div className="space-y-4">
                    <Item title="How much is the subscription fee for MYTYS?">
                        As a pilot project, we are currently monitoring at the interest level of the internet community. As of now, our platform services and functionalities are completely <span className="text-light-blue-500">FREE</span>
                    </Item>
                    <Item title="How can a student benefit from MYTYS">
                        By using our gamified question and answer platform, students can practice questions on a more interactive interface than conventional pen and paper, helping them enjoy the learning process while improving their grades simultaneously
                    </Item>
                    <Item title="What subjects do we offer?">
                        We specialise in Mathematics and Science at the primary and seondary school levels, and we are gradually looking into implementing English and Chinese subjects as well in time to come. For more information, please visit the subjects tab at the navigation panel
                    </Item>
                    <Item title="How can I be sure that MYTYS will be able to supplement a student's academic needs?">
                        For more information regarding this, do visit the About us tab at the navigation panel, where there are testimonials available
                    </Item>
                </div>
            </div>
        </div>
    );
};