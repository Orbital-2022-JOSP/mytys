import React from "react";
import { DownloadCTA } from "../components/DownloadCTA/DownloadCTA";
import { Features } from "../components/Features/Features";
import Layout from "../components/Layout";

const FeaturesPage: React.FC = () => {
    return (
        <Layout>
            <Features />
            <DownloadCTA />
        </Layout >
    );
};

export default FeaturesPage;