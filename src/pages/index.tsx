import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Benchmark from "../components/Benchmark";
import StarrySky from "../components/StarrySky";
import styles from "./index.module.css";
import { TeamMembers } from "../components/TeamMembers";
import Translate, { translate } from "@docusaurus/Translate";
import { useThemeConfig } from "@docusaurus/theme-common";

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
        <p className="font-extrabold text-4xl sm:text-7xl lg:text-7xl tracking-tight text-center">
          <span>
            <Translate>Super Fast Web</Translate>
          </span>
          <span className={clsx(styles.banner, "my-6", "block")}>
            <Translate> Build Tool</Translate>
          </span>
          <span>
            <Translate> Written In</Translate>
            <span className={styles.banner}> Rust</span>
          </span>
        </p>
        <div className={clsx(styles.buttons, "my-8")}>
          <Link to="/docs/quick-start" style={{ textDecoration: "none" }}>
            <div
              className={clsx(
                styles.farmButton,
                "flex w-36 sm:w-40 items-center justify-center font-bold"
              )}
            >
              <Translate>Quick Start</Translate>
            </div>
          </Link>
          <Link
            style={{ marginLeft: "20px", textDecoration: "none" }}
            to="/docs/why-farm"
          >
            <div
              className={clsx(
                styles.farmButton,
                "flex w-36 sm:w-40  items-center justify-center font-bold"
              )}
            >
              <Translate>Why Farm?</Translate>
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
      title={`${siteConfig.title} Documentation`}
      description="Description will go into a meta tag in <head />"
    >
      <StarrySky />
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8max-w-6xl">
        <HomepageHeader />
        <HomepageFeatures />
        <TeamMembers />
      </main>
    </Layout>
  );
}
