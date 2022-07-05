import { Types } from 'mongoose';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { IMCQOption } from '../../models/MCQOption.model';
import { IQuestionAnswer } from '../../models/QuestionAnswer.model';

export type MCQQuestionAttemptProps = {
    questionId: Types.ObjectId,
    title: string,
    description?: string,
    explanation: string,
    correctAnswer: IMCQOption,
    options: Array<IMCQOption>,
    nextLink: string,
    prevLink: string
}

export const MCQQuestionAttempt: React.FC<MCQQuestionAttemptProps> = ({ questionId, title, description, explanation, correctAnswer, options, nextLink, prevLink }) => {
    const [completed, setCompleted] = useState(false);
    const [correct, setCorrect] = useState(false);
    const { data: session, status } = useSession();
    const fetcher = (url: string) => fetch(url).then(r => r.json());
    const { data: qnAnswerData, error } = useSWR(
        status == "authenticated" && questionId
            ? `/api/questionAnswers/user/${session.user.id}/question/${questionId}/`
            : null
        , fetcher
    );

    useEffect(() => {
        if (qnAnswerData.success) {
            setCompleted(true);
            setCorrect(qnAnswerData.data.score == 1)
        }
    }, [qnAnswerData])

    const handleOptionSelect = (chosenOption: IMCQOption) => {
        if (status == "authenticated") {
            setCompleted(true);
            setCorrect(chosenOption._id == correctAnswer._id)
            const questionAnswer: IQuestionAnswer = {
                user: new Types.ObjectId(session.user.id),
                question: questionId,
                score: chosenOption._id == correctAnswer._id ? 1 : 0,
            }
            fetch('/api/questionAnswers/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(questionAnswer)
            });
        }
    }

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:min-w-screen-lg lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
                <>
                    <div className="max-w-xl w-full pr-16 mx-auto md:mt-8 mb-10">
                        <h5 className="mb-6 text-3xl font-extrabold leading-none">
                            {title}
                        </h5>
                        <p className="mb-6 text-gray-900">
                            {description}
                        </p>
                        <div className="flex items-center">
                            <Link href={nextLink} replace={true}>
                                <a
                                    aria-label="Next Question Link"
                                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-light-blue-accent-400 hover:bg-light-blue-accent-700 focus:shadow-outline focus:outline-none disabled"
                                >
                                    Next Question
                                </a>
                            </Link>
                            <Link href={prevLink} replace={true}>
                                <a
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-light-blue-accent-400 hover:text-light-blue-800"
                                >
                                    Previous Question
                                </a>
                            </Link>
                        </div>
                    </div>
                    {
                        completed
                            ? <div className={`p-5 lg:w-1/2 xl:w-5/12 transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl outline ${correct ? "outline-green-400" : "outline-red-400"}`}>
                                <h6 className="mb-2 font-semibold leading-5">{correct ? "Correct" : "Not quite right"}</h6>
                                <p className="text-sm text-gray-700">
                                    {explanation}
                                </p>
                            </div>
                            : <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:w-1/2 xl:w-5/12">
                                {
                                    options.map((option, idx) => (
                                        <div key={"questionOption" + idx} className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl cursor-pointer" onClick={() => handleOptionSelect(option)}>
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
                                                <p className="mb-2 font-bold">{option.text}</p>
                                            </div>
                                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-light-blue-accent-400 group-hover:scale-x-100" />
                                        </div>
                                    ))
                                }
                            </div>
                    }
                </>
            </div>
        </div>
    );
};