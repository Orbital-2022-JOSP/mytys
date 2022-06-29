import React from "react";
import useSWR from 'swr';
import { QuestionsTable } from '../../../components/Tables/Questions/Questions';

const AdminQuestionsPage: React.FC = () => {
    const fetcher = (url: string) => fetch(url).then(r => r.json())
    const { data: questionsData, error: questionsError } = useSWR('/api/questions', fetcher);
    
    return (
        <>
            <QuestionsTable questions={questionsData ? questionsData.data : undefined} />
        </>
    );
};

export default AdminQuestionsPage;