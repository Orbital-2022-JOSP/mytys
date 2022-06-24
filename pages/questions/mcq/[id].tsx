import { useRouter } from 'next/router';
import useSWR from 'swr';
import { MCQQuestionAttempt } from '../../../components/MCQQuestionAttempt/MCQQuestionAttempt';

const MCQQuestionAnsweringPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    const fetcher = (url: string) => fetch(url).then(r => r.json())
    const { data, error } = useSWR(`/api/questions/mcq/${id}`, fetcher);

    return (
        <div>
            <p>Hello World</p>
            <p>{id}</p>
            <MCQQuestionAttempt {...data} />
        </div>
    )
}

export default MCQQuestionAnsweringPage;