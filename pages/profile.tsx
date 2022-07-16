import Head from 'next/head';
import { Profile } from '../components/Profile/Profile';

const ProfilePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Profile - MYTYS</title>
            </Head>
            <Profile />
        </>
    );
};

export default ProfilePage;