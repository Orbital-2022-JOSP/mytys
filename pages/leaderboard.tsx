import Head from 'next/head';
import { LeaderBoard } from "../components/Leaderboard/Leaderboard";

const LeaderboardPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Leaderboard - MYTYS</title>
            </Head>
            <LeaderBoard />
        </>
    );
};

export default LeaderboardPage;