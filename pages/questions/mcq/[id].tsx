import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { MCQQuestionAttempt } from '../../../components/MCQQuestionAttempt/MCQQuestionAttempt';
import { Unauthenticated } from '../../../components/Unauthenticated/Unauthenticated';

const MCQQuestionAnsweringPage: React.FC = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    const { id } = router.query;

    const fetcher = (url: string) => fetch(url).then(r => r.json())

    const { data, error } = useSWR(id ? `/api/questions/${id}` : null, fetcher);

    return (
        <>
            {
                status == "loading"
                    ? <p>Loading</p>
                    : status == "unauthenticated"
                        ? <Unauthenticated />
                        : data && data.success
                            ?
                            <MCQQuestionAttempt
                                questionId={data.data._id}
                                title={data.data.title}
                                description={data.data.description}
                                explanation={data.data.explanation}
                                correctAnswer={data.data.mcqQuestions[0].correctAnswer}
                                options={data.data.mcqQuestions[0].options}
                                nextLink={"/questions/mcq/random"}
                                prevLink={"/questions/mcq/random"}
                            />
                            : <p>Loading</p>
            }
        </>
    )
}

export default MCQQuestionAnsweringPage;