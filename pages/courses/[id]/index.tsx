import { useRouter } from 'next/router';
import useSWR from 'swr';
import LoadingComponent from '../../../components/LoadingComponent/LoadingComponent';
import { NotFound } from '../../../components/NotFound/NotFound';
import { SingleCourse } from '../../../components/SingleCourse/SingleCourse';
import { fetcher } from '../../../lib/fetcher';

const SingleCoursePage: React.FC = () => {
    const router = useRouter()
    const { id } = router.query
    const { data: courseData, error: courseError } = useSWR(`/api/courses/${id}`, fetcher);

    return (
        <>
            {
                courseError && courseError.status == 404
                    ? <NotFound />
                    : courseData
                        ? <SingleCourse {...courseData.data} />
                        : <LoadingComponent />
            }
        </>
    )
}

export default SingleCoursePage;