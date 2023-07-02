import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import FarmCard from "../components/Card";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Benchmark from "../components/Benchmark";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "grid grid-cols-1 gap-24 relative z-10 lg:grid-cols-2 mx-auto max-w-7xl",
        styles.heroBanner
      )}
    >
      {/* <header> */}
      <div className="container w-full flex flex-col items-center justify-center">
        {/* <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white py-4">
          {siteConfig.title}
        </h1> */}
        <p className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-center dark:text-white py-4">
          <span>Super fast web</span>
          <span className={clsx(styles.banner, "my-6", "block")}> build tool</span>
          <span>
            written in
            <span className={styles.banner}> Rust</span>
          </span>
        </p>
        <div className={clsx(styles.buttons, "my-4")}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quick-start"
          >
            Quick Start ⏱️
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{ marginLeft: "20px" }}
            to="/docs/why-farm"
          >
            Why Farm?
          </Link>
        </div>
      </div>
      <Benchmark className="w-full" />
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
      <main className="lg:grid-cols-2 mx-auto max-w-7xl">
        {/* <HomepageFeatures /> */}
        {/* <FarmCard /> */}
      </main>
    </Layout>
  );
}
