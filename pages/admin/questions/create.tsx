import React from "react";
import useSWR from 'swr';
import { QuestionForm } from '../../../components/Forms/QuestionForm/QuestionForm';
import { fetcher } from "../../../lib/fetcher";

const AdminQuestionsCreatePage: React.FC = () => {
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