import { useRouter } from 'next/router';
import { QuestionAttempt } from '../../components/QuestionAttempt/QuestionAttempt';

const QuestionAnsweringPage: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <p>Hello World</p>
            <p>{id}</p>
            <QuestionAttempt />
        </div>
    )
}

export default QuestionAnsweringPage;