import { useRouter } from 'next/router';
import { SingleCourse } from '../../components/SingleCourse/SingleCourse';

const SingleCoursePage: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <SingleCourse />
        </>
    )
}

export default SingleCoursePage;