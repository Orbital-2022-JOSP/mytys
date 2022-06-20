import React from "react";
import { DownloadCTA } from "../components/DownloadCTA/DownloadCTA";
import { Features } from "../components/Features/Features";

const FeaturesPage: React.FC = () => {
    return (
        <>
            <Features />
            <DownloadCTA />
        </>
    );
};

export default FeaturesPage;