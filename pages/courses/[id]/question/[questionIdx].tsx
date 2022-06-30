import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import useSWR from 'swr';
import { MCQQuestionAttempt } from '../../../../components/MCQQuestionAttempt/MCQQuestionAttempt';

const CourseQuestionPage: React.FC = () => {
    const router = useRouter()
    const { id, questionIdx } = router.query

    console.log(id, questionIdx);

    const { data: session, status } = useSession();

    const fetcher = (url: string) => fetch(url).then(r => r.json());
    const { data: courseData, error } = useSWR(
        id
            ? `/api/courses/${id}`
            : null
        , fetcher
    );

    if(courseData){
        let questionId = courseData.data.questions[questionIdx as string];
        if(questionId){
            console.log(questionId)
        } else {
            // Redirect to course page
        }
    }

    return (
        // <MCQQuestionAttempt
        //     questionId={data.data._id}
        //     title={data.data.title}
        //     description={data.data.description}
        //     explanation={data.data.explanation}
        //     correctAnswer={data.data.mcqQuestions[0].correctAnswer}
        //     options={data.data.mcqQuestions[0].options}
        //     nextLink={"/questions/mcq/random"}
        //     prevLink={"/questions/mcq/random"}
        // />
        <p>asd</p>
    )
}

export default CourseQuestionPage;