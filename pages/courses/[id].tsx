import { useRouter } from 'next/router';
import { SingleCourse } from '../../components/SingleCourse/SingleCourse';

const SingleCoursePage: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <p>Hello World</p>
            <p>{id}</p>
            <SingleCourse />
        </div>
    )
}

export default SingleCoursePage;