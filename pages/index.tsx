import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { Blog } from "../components/Blog/Blog";
import { FAQ } from "../components/FAQ/FAQ";
import { Features } from "../components/Features/Features";
import { Hero } from '../components/Hero/Hero';
import { Hero3 } from "../components/Hero3/Hero3";
import { LeaderBoard } from '../components/Leaderboard/Leaderboard';
import { QuestionAttempt } from '../components/QuestionAttempt/QuestionAttempt';
import { Stats } from "../components/Stats/Stats";
import { Steps } from "../components/Steps/Steps";
import { WhoAreWe } from "../components/WhoAreWe/WhoAreWe";
import { WhoAreWe1 } from "../components/WhoAreWe1/WhoAreWe1";

const Home: React.FC = () => {
    const router = useRouter();
    const isActive: (pathname: string) => boolean = (pathname) =>
        router.pathname === pathname;

    const { data: session, status } = useSession();

    return (
        <>
            <Hero3 />
            <Hero />
            <Features />
            <Steps />
            <Stats />
            <Blog />
            <FAQ />
            <QuestionAttempt />
            <LeaderBoard />
        </>
    );
};

export default Home;