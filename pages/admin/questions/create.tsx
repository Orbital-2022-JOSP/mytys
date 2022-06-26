import React from "react";
import { QuestionForm } from '../../../components/Forms/QuestionForm/QuestionForm';
import useSWR from 'swr';

const AdminQuestionsCreatePage: React.FC = () => {
    const fetcher = (url: string) => fetch(url).then(r => r.json())
    const { data: questionTopics, error: questionTopicsError } = useSWR('/api/questionTopics', fetcher);
    const { data: questionTypes, error: questionTypesError } = useSWR('/api/questionTypes', fetcher);
    
    return (
        <>
            {
                questionTopics && questionTypes
                    ? <QuestionForm
                        questionTopics={questionTopics.data}
                        questionTypes={questionTypes.data} />
                    : <p>Loading</p>
            }

        </>
    );
};

export default AdminQuestionsCreatePage;