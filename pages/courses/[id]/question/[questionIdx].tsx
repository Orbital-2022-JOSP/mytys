import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import LoadingComponent from '../../../../components/LoadingComponent/LoadingComponent';
import { Question } from '../../../../components/Question/Question';
import { Unauthenticated } from '../../../../components/Unauthenticated/Unauthenticated';
import { fetcher } from '../../../../lib/fetcher';

const CourseQuestionPage: React.FC = () => {
    const router = useRouter()
    const { id, questionIdx } = router.query
    const { data: session, status } = useSession();
    
    const { data: courseData, error } = useSWR(
        id
            ? `/api/courses/${id}`
            : null
        , fetcher
    );
    const [validQn, setValidQn] = useState(false);

    useEffect(() => {
        if (questionIdx) {
            setValidQn(+(questionIdx as string) >= 0 && +(questionIdx as string) <= courseData.data.questions.length);
        }
    }, [questionIdx, courseData.data.questions.length]);

    return (
        <>
            {
                status == "loading"
                    ? <LoadingComponent />
                    : status == "unauthenticated"
                        ? <Unauthenticated />
                        : courseData && validQn
                            ? <Question {...courseData.data.questions[questionIdx as string]} prevLink={""} nextLink={""} />
                            : <LoadingComponent />
            }
        </>
    )
}

export default CourseQuestionPage;