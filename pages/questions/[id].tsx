import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import LoadingComponent from '../../components/LoadingComponent/LoadingComponent';
import { NotFound } from '../../components/NotFound/NotFound';
import { Question } from '../../components/Question/Question';
import { fetcher } from '../../lib/fetcher';

const QuestionAnsweringPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data: questionData, error: questionError } = useSWR(id ? `/api/questions/${id}` : null, fetcher);

    return (
        <>
            <Head>
                <title>Question - MYTYS</title>
            </Head>
            {
                questionError && questionError.status == 404
                    ? <NotFound />
                    : questionData
                        ? <Question {...questionData.data} prevLink={""} nextLink={""} />
                        : <LoadingComponent />
            }
        </>
    )
}

export default QuestionAnsweringPage;