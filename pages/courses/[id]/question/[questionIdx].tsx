import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Question } from '../../../../components/Question/Question';
import { useState, useEffect } from 'react';

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
        setValidQn(parseInt(questionIdx as string) >= 0 && parseInt(questionIdx as string) <= courseData.data.questions.length)
    }, []);

    return (
        <>
            {
                courseData && validQn
                    ? <Question {...courseData.data.questions[questionIdx as string]} prevLink={""} nextLink={""} />
                    : <p>Loaded</p>
                // status == "loading"
                //     ? <p>Loading</p>
                //     : status == "unauthenticated"
                //         ? <Unauthenticated />
                //         : data && data.success
                //             ? <p>Loaded</p>
                //             // <MCQQuestionAttempt
                //             //     questionId={data.data._id}
                //             //     title={data.data.title}
                //             //     description={data.data.description}
                //             //     explanation={data.data.explanation}
                //             //     correctAnswer={data.data.mcqQuestions[0].correctAnswer}
                //             //     options={data.data.mcqQuestions[0].options}
                //             //     nextLink={"/questions/mcq/random"}
                //             //     prevLink={"/questions/mcq/random"}
                //             // />
                //             : <p>Loading</p>
            }
        </>
    )
}

export default CourseQuestionPage;