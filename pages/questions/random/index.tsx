import Router from 'next/router';
import { useEffect } from 'react';
import useSWR from 'swr';

const RandomMCQQuestionAnsweringPage: React.FC = () => {

    const fetcher = (url: string) => fetch(url).then(r => r.json())
    const { data, error } = useSWR(`/api/questions/random`, fetcher);

    let questionData = data ? data.data : undefined;

    useEffect(() => {
        if (questionData) {
            Router.push(`/questions/mcq/${questionData._id}`)
        }
    }, [questionData]);

    return (
        <>
            <p>Hello</p>
        </>
    )
}

export default RandomMCQQuestionAnsweringPage;