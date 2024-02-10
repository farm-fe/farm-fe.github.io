import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { TeamMembers } from "../components/TeamMembers";
import { members } from "./data";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Documentation`}
      description="Description will go into a meta tag in <head />"
    >
      <TeamMembers members={members} />
    </Layout>
  );
}
