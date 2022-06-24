export const QuestionForm: React.FC = () => {
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
                    <form action="#" method="POST">
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                        <input type="text" name="title" id="title" autoComplete="given-name" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">Difficulty</label>
                                        <select id="difficulty" name="difficulty" autoComplete="difficulty-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                                        <textarea name="description" id="description-textarea" cols={30} rows={5} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6">
                                        <label htmlFor="explanation" className="block text-sm font-medium text-gray-700">Explanation</label>
                                        <textarea name="explanation" id="explanation-textarea" cols={30} rows={5} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="question-topics" className="block text-sm font-medium text-gray-700">Question Topics</label>
                                        <select id="question-topics" name="question-topics" autoComplete="question-topics" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" multiple>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="question-types" className="block text-sm font-medium text-gray-700">Question Types</label>
                                        <select id="question-types" name="question-types" autoComplete="question-types" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" multiple>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <div className="grid grid-cols-6 mb-2">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 col-span-5">Question Option</label>
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 col-span-1 text-center">Correct Option</label>
                                        </div>

                                        <div className="grid grid-cols-6 mb-2">
                                            <input type="text" name="email-address" id="email-address" autoComplete="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-5" />
                                            <div className="col-span-1 text-center">
                                                <input type={"radio"} name="question-option" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded mt-4" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 mb-2">
                                            <input type="text" name="email-address" id="email-address" autoComplete="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-5" />
                                            <div className="col-span-1 text-center">
                                                <input type={"radio"} name="question-option" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded mt-4" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6 mb-2">
                                            <input type="text" name="email-address" id="email-address" autoComplete="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-5" />
                                            <div className="col-span-1 text-center">
                                                <input type={"radio"} name="question-option" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded mt-4" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-6">
                                            <input type="text" name="email-address" id="email-address" autoComplete="email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md col-span-5" />
                                            <div className="col-span-1 text-center">
                                                <input type={"radio"} name="question-option" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded mt-4" />
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