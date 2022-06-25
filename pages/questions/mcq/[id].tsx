import { useRouter } from 'next/router';
import useSWR from 'swr';
import { MCQQuestionAttempt } from '../../../components/MCQQuestionAttempt/MCQQuestionAttempt';

const MCQQuestionAnsweringPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const fetcher = (url: string) => fetch(url).then(r => r.json())
    const { data, error } = useSWR(`/api/questions/${id}`, fetcher);
    
    let questionData = data ? data.data : {};
    console.log(questionData)

    // const props: MCQQuestionAttemptProps = {
    //     title: string,
    //     description?: string,
    //     correctAnswer: IMCQQuestionOption,
    //     options: Array<IMCQQuestionOption>,
    //     nextLink?: string,
    //     prevLink?: string
    // }

    return (
        <div>
            <p>Hello World</p>
            <p>{id}</p>
            <MCQQuestionAttempt {...data} />
        </div>
    )
}

export default MCQQuestionAnsweringPage;