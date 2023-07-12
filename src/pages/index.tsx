import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Benchmark from "../components/Benchmark";
import { teamMembers } from "../contribution";
import styles from "./index.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import TeamMembersItem from "../components/TeamMembersItem";
import { TeamMembers } from "../components/TeamMembers";
// import '../css/home.scss'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "grid grid-cols-1 gap-10 relative z-10 mx-auto max-w-8xl py-4 sm:py-6 lg:py-8",
        "lg:grid-cols-2",
        styles.heroBanner
      )}
    >
      <div className="container w-full flex flex-col items-center justify-center">
        <p className="font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-center dark:text-white">
          <span>Super Fast Web</span>
          <span className={clsx(styles.banner, "my-6", "block")}>
            Build Tool
          </span>
          <span>
            Written In
            <span className={styles.banner}> Rust</span>
          </span>
        </p>
        <div className={clsx(styles.buttons, "my-8")}>
          <Link to="/docs/quick-start" style={{ textDecoration: "none" }}>
            <div
              className={clsx(
                styles.farmButton,
                "flex items-center justify-center font-bold"
              )}
            >
              Quick Start
            </div>
          </Link>
          <Link
            style={{ marginLeft: "20px", textDecoration: "none" }}
            to="/docs/why-farm"
          >
            <div
              className={clsx(
                styles.farmButton,
                "flex items-center justify-center font-bold"
              )}
            >
              Why Farm?
            </div>
          </Link>
        </div>
      </div>
      <Benchmark />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8max-w-6xl">
        <HomepageHeader />
        <HomepageFeatures />
        <TeamMembers members={teamMembers} />
      </main>
    </Layout>
  );
}
