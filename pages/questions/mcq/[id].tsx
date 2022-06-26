import { useRouter } from 'next/router';
import useSWR from 'swr';
import { MCQQuestionAttempt } from '../../../components/MCQQuestionAttempt/MCQQuestionAttempt';

const MCQQuestionAnsweringPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const fetcher = (url: string) => fetch(url).then(r => r.json())
    const { data, error } = useSWR(`/api/questions/${id}`, fetcher);

    let questionData = data ? data.data : undefined;

    return (
        <>
            {
                questionData
                    ?
                    <MCQQuestionAttempt
                        questionId={questionData._id}
                        title={questionData.title}
                        description={questionData.description}
                        explanation={questionData.explanation}
                        correctAnswer={questionData.mcqQuestions[0].correctAnswer}
                        options={questionData.mcqQuestions[0].options}
                        nextLink={"/questions/mcq/random"}
                        prevLink={"/questions/mcq/random"}
                    />
                    : <p>Loading</p>
            }
        </>
    )
}

export default MCQQuestionAnsweringPage;