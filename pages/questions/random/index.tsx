import Router from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';
import { fetcher } from '../../../lib/fetcher';

const RandomMCQQuestionAnsweringPage: React.FC = () => {
    const { data, error } = useSWR(`/api/questions/random`, fetcher);

    let questionData = data ? data.data : undefined;

    useEffect(() => {
        if (questionData) {
            Router.push(`/questions/mcq/${questionData._id}`)
        }
    }, [questionData]);

    return <LoadingComponent />
}

export default RandomMCQQuestionAnsweringPage;