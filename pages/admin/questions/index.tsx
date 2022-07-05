import React from "react";
import useSWR from 'swr';
import { QuestionsTable } from '../../../components/Tables/Questions/Questions';
import { fetcher } from "../../../lib/fetcher";

const AdminQuestionsPage: React.FC = () => {
    const { data: questionsData, error: questionsError } = useSWR('/api/questions', fetcher);
    
    return (
        <>
            <QuestionsTable questions={questionsData ? questionsData.data : undefined} />
        </>
    );
};

export default AdminQuestionsPage;