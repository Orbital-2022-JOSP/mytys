import { Types } from 'mongoose';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../lib/fetcher';
import { IMCQOption } from '../../models/MCQOption.model';
import { IQuestionAnswer } from '../../models/QuestionAnswer.model';
import { IQuestionTopic } from '../../models/QuestionTopic.model';
import { IQuestionType } from '../../models/QuestionType.model';

export type QuestionProps = {
    id: Types.ObjectId;
    title: string;
    description: string;
    difficulty: number;
    explanation: string;
    questionTopics: Array<IQuestionTopic>;
    questionTypes: Array<IQuestionType>;
    subject: string;
    questionType: "mcq" | "oe";
    mcqCorrectAnswer: IMCQOption;
    mcqOptions: Array<IMCQOption>;
    oeCorrectAnswers: Array<String>;
    nextLink: string;
    prevLink: string;
}

export const Question: React.FC<QuestionProps> = ({ id, title, description, explanation, questionTopics, questionTypes, subject, questionType, mcqCorrectAnswer, mcqOptions, oeCorrectAnswers, nextLink, prevLink }) => {
    const [completed, setCompleted] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [oeAnswer, setOeAnswer] = useState("");
    const { data: session, status } = useSession();
    
    const { data: qnAnswerData, error } = useSWR(
        status == "authenticated" && id
            ? `/api/questionAnswers/user/${session.user.id}/question/${id}/`
            : null
        , fetcher
    );

    useEffect(() => {
        if (status == "authenticated" && qnAnswerData && qnAnswerData.success) {
            setCompleted(true);
            setCorrect(qnAnswerData.data.score == 1)
        }
    }, [qnAnswerData, status])

    const handleOptionSelect = (chosenOption: IMCQOption) => {
        if (status == "authenticated") {
            setCompleted(true);
            setCorrect(chosenOption._id == mcqCorrectAnswer._id)
            const questionAnswer: IQuestionAnswer = {
                user: new Types.ObjectId(session.user.id),
                question: id,
                score: correct ? 1 : 0,
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

    const handleOeSubmit = () => {
        if (status == "authenticated") {
            setCompleted(true);
            setCorrect(oeCorrectAnswers.includes(oeAnswer))
            const questionAnswer: IQuestionAnswer = {
                user: new Types.ObjectId(session.user.id),
                question: id,
                score: correct ? 1 : 0,
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
                            : questionType == "mcq"
                                ? <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:w-1/2 xl:w-5/12">
                                    {
                                        mcqOptions.map((option, idx) => (
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
                                : <div className="border p-5 rounded-2xl lg:w-1/2 xl:w-5/12 bg-white shadow-xl flex flex-col justify-between">
                                    <label htmlFor="oeAnswer" className="block text-sm font-medium text-gray-700 pl-1">Answer</label>
                                    <input type="text" name="oeAnswer" id="oeAnswerInput" autoComplete="given-name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" value={oeAnswer} onChange={(e) => setOeAnswer(e.target.value)} />
                                    <div className="flex flex-row-reverse">
                                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-600 hover:bg-light-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={handleOeSubmit}>Submit</button>
                                    </div>
                                </div>
                    }
                </>
            </div>
        </div>
    );
};