import Head from 'next/head';
import { CourseCarousel } from '../../components/CourseCarousel/CourseCarousel';

const CoursesPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Courses - MYTYS</title>
            </Head>
            <CourseCarousel />
        </>
    );
};

export default CoursesPage;