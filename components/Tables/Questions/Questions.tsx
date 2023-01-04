import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

import { IQuestion } from '../../../models/Question.model';
import { UpdateQuestionModal } from '../../Modals/UpdateQuestionModal';

type QuestionTableProps = {
    questions?: Array<IQuestion>;
}

export const QuestionsTable: React.FC<QuestionTableProps> = ({ questions }) => {
    const [questionId, setQuestionId] = useState("");
    const [showQuestionTable, setShowQuestionTable] = useState(false);
    const { data: session, status } = useSession();

    const handleDelete = () => {
        if (questionId != "" && status == 'authenticated') {
            fetch(
                `/api/questions/${questionId}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            window.location.reload();
        }
    }

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto">
                    <UpdateQuestionModal show={showQuestionTable} closeShowFunc={() => setShowQuestionTable(false)} />
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Questions</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p> */}
                    </div>
                    <div className="lg:w-5/6 w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Title</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Difficulty</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Subject</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Topics</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Types</th>
                                    <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">Select</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    questions
                                        ? questions.map((question, idx) => (
                                            <tr key={"question" + question._id}>
                                                <td className="px-4 py-3">
                                                    <p>{question.title}</p>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <p>{question.difficulty}</p>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <p> {question.subject}</p>
                                                </td>
                                                <td className="px-4 py-3 text-lg text-gray-900">
                                                    {question.questionTopics.map((qnTopic, idx) => (
                                                        <p key={"question" + question._id + qnTopic._id}>{qnTopic.name}</p>
                                                    ))}
                                                </td>
                                                <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                                                    {question.questionTypes.map((qnType, idx) => (
                                                        <p key={"question" + question._id + qnType._id}>{qnType.name}</p>
                                                    ))}
                                                </td>
                                                <td className="w-10 text-center">
                                                    <input name="plan" type="radio" value={question._id.toString()} onChange={(e) => setQuestionId(e.target.value)} />
                                                </td>
                                            </tr>
                                        ))
                                        : <tr>
                                            <td className="border-t-2 border-b-2 border-gray-200 p-5 text-center" colSpan={6}>
                                                No Questions
                                            </td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <div className="sticky z-10 bottom-0 h-20 border-b bg-white lg:py-5">
                <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                    <Link href={"/admin/questions/create"}>
                        <a className="text-light-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Create new Question
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </Link>
                    <div className="flex flex-row justify-between space-x-5">
                        <button className="flex ml-auto text-light-blue-500 outline outline-light-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-light-blue-600 hover:text-white rounded" onClick={handleDelete}>Delete</button>
                        <button className="flex ml-2 text-white bg-light-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-light-blue-600 rounded" onClick={() => setShowQuestionTable(true)}>Update</button>
                    </div>
                </div>
            </div>
        </>

    )
}