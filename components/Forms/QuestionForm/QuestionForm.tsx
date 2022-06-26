import { useState } from 'react';
import { IQuestionTopic } from '../../../models/QuestionTopic.model';
import { IQuestionType } from '../../../models/QuestionType.model';

type QuestionFormProps = {
    questionTopics: Array<IQuestionTopic>;
    questionTypes: Array<IQuestionType>;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({ questionTopics, questionTypes }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [explanation, setExplanation] = useState("");
    const [qnTopics, setQnTopics] = useState([]);
    const [qnTypes, setQnTypes] = useState([]);
    const [questionOptions, setQuestionOptions] = useState(["", "", "", ""]);
    const [correctQuestionOption, setCorrectQuestionOption] = useState("");

    const handleQnTopicChange = (event) => {
        let value = Array.from(
            event.target.selectedOptions,
            (option: { value: String }) => option.value
        );
        setQnTopics(value);
    }

    const handleQnTypeChange = (event) => {
        let value = Array.from(
            event.target.selectedOptions,
            (option: { value: String }) => option.value
        );
        setQnTypes(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "questionBody": {
                "title": title,
                "description": description,
                "difficulty": difficulty,
                "explanation": explanation,
                "questionTopics": qnTopics,
                "questionTypes": qnTypes
            },
            "mcqQuestionBody": {
                "correctAnswer": {
                    "text": correctQuestionOption
                },
                "options": [
                    {
                        "text": questionOptions[0]
                    },
                    {
                        "text": questionOptions[1]
                    },
                    {
                        "text": questionOptions[2]
                    },
                    {
                        "text": questionOptions[3]
                    }
                ]
            }
        }

        fetch('/api/questions/mcq/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    return (
        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Create a new Question</h3>
                        <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                    </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={handleSubmit}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                        <input type="text" name="title" id="title" autoComplete="given-name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">Difficulty</label>
                                        <select id="difficulty" name="difficulty" autoComplete="difficulty-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                                            <option>10</option>
                                            <option>20</option>
                                            <option>30</option>
                                            <option>40</option>
                                            <option>50</option>
                                            <option>60</option>
                                            <option>70</option>
                                            <option>80</option>
                                            <option>90</option>
                                            <option>100</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                        <textarea name="description" id="description-textarea" cols={30} rows={5} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" value={description} onChange={(e) => setDescription(e.target.value)} />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="explanation" className="block text-sm font-medium text-gray-700">Explanation</label>
                                        <textarea name="explanation" id="explanation-textarea" cols={30} rows={5} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" value={explanation} onChange={(e) => setExplanation(e.target.value)} />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="questionTopics" className="block text-sm font-medium text-gray-700">Question Topics</label>
                                        <select id="questionTopics" name="questionTopics" autoComplete="questionTopics" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" multiple onChange={handleQnTopicChange}>
                                            {
                                                questionTopics.map((qnTopic, idx) => (
                                                    <option key={"qnTopic" + idx} value={qnTopic._id.toString()}>{qnTopic.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="questionTypes" className="block text-sm font-medium text-gray-700">Question Types</label>
                                        <select id="questionTypes" name="questionTypes" autoComplete="questionTypes" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" multiple onChange={handleQnTypeChange}>
                                            {
                                                questionTypes.map((qnType, idx) => (
                                                    <option key={"qnType" + idx} value={qnType._id.toString()}>{qnType.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <div className="grid grid-cols-6 mb-2">
                                            <label htmlFor="questionOption" className="block text-sm font-medium text-gray-700 col-span-5">Question Option</label>
                                            <label htmlFor="correctQuestionOption" className="block text-sm font-medium text-gray-700 col-span-1 text-center">Correct Option</label>
                                        </div>

                                        <div className="grid grid-cols-6 mb-2">
                                            <input type="text" name="questionOption" id="questionOption1" autoComplete="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-5"
                                                value={questionOptions[0]}
                                                onChange={(e) => {
                                                    setQuestionOptions([
                                                        e.target.value,
                                                        questionOptions[1],
                                                        questionOptions[2],
                                                        questionOptions[3]
                                                    ])
                                                }} />
                                            <div className="col-span-1 text-center">
                                                <input type={"radio"} name="correctQuestionOption" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded mt-4" value={questionOptions[0]} onChange={(e) => setCorrectQuestionOption(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 mb-2">
                                            <input type="text" name="questionOption" id="questionOption2" autoComplete="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-5"
                                                value={questionOptions[1]}
                                                onChange={(e) => {
                                                    setQuestionOptions([
                                                        questionOptions[0],
                                                        e.target.value,
                                                        questionOptions[2],
                                                        questionOptions[3]
                                                    ])
                                                }} />
                                            <div className="col-span-1 text-center">
                                                <input type={"radio"} name="correctQuestionOption" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded mt-4" value={questionOptions[1]} onChange={(e) => setCorrectQuestionOption(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 mb-2">
                                            <input type="text" name="questionOption" id="questionOption3" autoComplete="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-5"
                                                value={questionOptions[2]}
                                                onChange={(e) => {
                                                    setQuestionOptions([
                                                        questionOptions[0],
                                                        questionOptions[1],
                                                        e.target.value,
                                                        questionOptions[3]
                                                    ])
                                                }} />
                                            <div className="col-span-1 text-center">
                                                <input type={"radio"} name="correctQuestionOption" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded mt-4" value={questionOptions[2]} onChange={(e) => setCorrectQuestionOption(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6">
                                            <input type="text" name="questionOption" id="questionOption4" autoComplete="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-5"
                                                value={questionOptions[3]}
                                                onChange={(e) => {
                                                    setQuestionOptions([
                                                        questionOptions[0],
                                                        questionOptions[1],
                                                        questionOptions[2],
                                                        e.target.value
                                                    ])
                                                }} />
                                            <div className="col-span-1 text-center">
                                                <input type={"radio"} name="correctQuestionOption" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded mt-4" value={questionOptions[3]} onChange={(e) => setCorrectQuestionOption(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}