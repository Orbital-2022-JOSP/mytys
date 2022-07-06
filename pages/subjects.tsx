import Head from 'next/head';
import { CourseCarousel1 } from "../components/CourseCarousel1/CourseCarousel1";

const SubjectsPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Subjects - MYTYS</title>
            </Head>
            <CourseCarousel1 />
        </>
    );
};

export default SubjectsPage;