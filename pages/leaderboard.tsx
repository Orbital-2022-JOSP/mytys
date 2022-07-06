import Head from 'next/head';
import { LeaderBoard1 } from "../components/Leaderboard1/Leaderboard1";

const LeaderboardPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Leaderboard - MYTYS</title>
            </Head>
            <LeaderBoard1 />
        </>
    );
};

export default LeaderboardPage;