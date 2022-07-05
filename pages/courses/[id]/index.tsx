import { useRouter } from 'next/router';
import useSWR from 'swr';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';
import { SingleCourse } from '../../../components/SingleCourse/SingleCourse';
import { fetcher } from '../../../lib/fetcher';

const SingleCoursePage: React.FC = () => {
    const router = useRouter()
    const { id } = router.query

    const { data: courseData, error } = useSWR(`/api/courses/${id}`, fetcher);

    return (
        <>
            {
                courseData
                    ? <SingleCourse {...courseData.data} />
                    : <LoadingComponent />
            }
        </>
    )
}

export default SingleCoursePage;