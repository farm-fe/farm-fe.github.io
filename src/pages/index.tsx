import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Benchmark from "../components/Benchmark";
import { teamMembers } from "../contribution";
import styles from "./index.module.css";
import TeamMembersItem from "../components/TeamMembersItem";
import { TeamMembers } from "../components/TeamMembers";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "grid w-70vw grid-cols-1 gap-8 relative z-10 lg:grid-cols-2 mx-auto max-w-8xl",
        styles.heroBanner
      )}
    >
      {/* <header> */}
      <div className="container w-full flex flex-col items-center justify-center">
        {/* <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white py-4">
          {siteConfig.title}
        </h1> */}
        <p className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-center dark:text-white py-4">
          <span>Super Fast Web</span>
          <span className={clsx(styles.banner, "my-6", "block")}>
            Build Tool
          </span>
          <span>
            Written In
            <span className={styles.banner}> Rust</span>
          </span>
        </p>
        <div className={clsx(styles.buttons, "my-4")}>
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
            style={{ marginLeft: "40px", textDecoration: "none" }}
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
      <HomepageHeader />
      <main className="">
        <HomepageFeatures />
        <TeamMembers members={teamMembers} />
      </main>
    </Layout>
  );
}
