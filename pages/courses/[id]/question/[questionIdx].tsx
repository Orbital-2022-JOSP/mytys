import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Question } from '../../../../components/Question/Question';
import { useState, useEffect } from 'react';
import LoadingComponent from '../../../../components/LoadingComponent/LoadingComponent';
import { Unauthenticated } from '../../../../components/Unauthenticated/Unauthenticated';

const CourseQuestionPage: React.FC = () => {
    const router = useRouter()
    const { id, questionIdx } = router.query
    const { data: session, status } = useSession();
    const fetcher = (url: string) => fetch(url).then(r => r.json());
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
    }, [questionIdx]);

    return (
        <>
            {
                status == "loading"
                    ? <p>Loading</p>
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