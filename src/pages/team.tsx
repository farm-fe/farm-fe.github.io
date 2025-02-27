import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { TeamMembers } from "../components/TeamMembers";
import { members } from "./data";

export default function Team() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description={siteConfig.tagline}
    >
      <div className="w-9/12 m-auto">
        <TeamMembers members={members} />
      </div>
    </Layout>
  );
}
