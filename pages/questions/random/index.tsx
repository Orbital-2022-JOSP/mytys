import Head from 'next/head';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';
import { NotFound } from '../../../components/NotFound/NotFound';
import { Question } from '../../../components/Question/Question';
import { fetcher } from '../../../lib/fetcher';

const RandomMCQQuestionAnsweringPage: React.FC = () => {
    const [questionId, setQuestionId] = useState("");
    const [loading, setLoading] = useState(true);
    const { data: questionIdData, error: questionIdDataError } = useSWR(`/api/questions/random`, fetcher);
    const { data: questionData, error: questionError } = useSWR(questionId ? `/api/questions/${questionId}` : null, fetcher);

    const nextQuestionFunc = () => {
        setLoading(true);
        fetch(
            '/api/questions/random',
        )
            .then(res => res.json())
            .then(res => {
                setQuestionId(res.data._id);
                setTimeout(() => { }, 1000);
                setLoading(false);
            })
    }

    useEffect(() => {
        if (questionIdData) {
            setQuestionId(questionIdData.data._id);
            setLoading(false);
        }
    }, [questionIdData]);

    return (
        <>
            <Head>
                <title>Question - MYTYS</title>
            </Head>
            {
                questionError && questionError.status == 404
                    ? <NotFound />
                    : !loading && questionData
                        ? <Question {...questionData.data} prevLink={""} nextLink={""} nextQuestionFunc={nextQuestionFunc} />
                        : <LoadingComponent />
            }
        </>
    )
}

export default RandomMCQQuestionAnsweringPage;