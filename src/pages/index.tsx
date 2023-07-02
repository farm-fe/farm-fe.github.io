import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Benchmark from "../components/Benchmark";

import styles from "./index.module.css";
import TeamMembersItem from "../components/TeamMembersItem";
import { TeamMembers } from "../components/TeamMembers";

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
          <span className={clsx(styles.banner, "my-6", "block")}>
            {" "}
            build tool
          </span>
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
        <TeamMembers members={teamMembers} />
      </main>
    </Layout>
  );
}

export interface CoreTeam extends Partial<any> {
  avatar: string;
  name: string;
  // required to download avatars from GitHub
  github: string;
  twitter?: string;
  webtools?: string;
  discord?: string;
  youtube?: string;
  sponsor?: string;
  title?: string;
  org?: string;
  desc?: string;
}

function createLinks(tm: CoreTeam): CoreTeam {
  tm.links = [{ icon: "github", link: `https://github.com/${tm.github}` }];
  if (tm.webtools)
    tm.links.push({
      icon: "mastodon",
      link: `https://elk.zone/m.webtoo.ls/@${tm.webtools}`,
    });
  if (tm.discord) tm.links.push({ icon: "discord", link: tm.discord });
  if (tm.youtube)
    tm.links.push({
      icon: "youtube",
      link: `https://www.youtube.com/@${tm.youtube}`,
    });
  tm.links.push({ icon: "twitter", link: `https://twitter.com/${tm.twitter}` });
  return tm;
}

const plainTeamMembers: CoreTeam[] = [
  {
    avatar: "https://github.com/antfu.png",
    name: "Anthony Fu",
    github: "antfu",
    webtools: "antfu",
    youtube: "antfu",
    discord: "https://chat.antfu.me",
    twitter: "antfu7",
    sponsor: "https://github.com/sponsors/antfu",
    title: "A fanatical open sourceror, working",
    org: "NuxtLabs",
    orgLink: "https://nuxtlabs.com/",
    desc: "Core team member of Vite & Vue",
  },
  {
    avatar: "https://github.com/chu121su12.png",
    name: "Saya",
    github: "chu121su12",
    title: "Programmer",
  },
  {
    avatar: "https://github.com/zyyv.png",
    name: "Chris",
    github: "zyyv",
    twitter: "chris_zyyv",
    title: "Regardless of the past, do not ask the future.",
  },
  {
    avatar: "https://github.com/sibbng.png",
    name: "sibbng",
    github: "sibbng",
    twitter: "sibbng",
    title: "Designer / Developer",
  },
  {
    avatar: "https://github.com/userquin.png",
    name: "Joaquín Sánchez",
    github: "userquin",
    webtools: "userquin",
    twitter: "userquin",
    title: "A fullstack and android developer",
    desc: "Vite's fanatical follower",
  },
  {
    avatar: "https://github.com/QiroNT.png",
    name: "Chino Moca",
    github: "QiroNT",
    twitter: "QiroNT",
    title: "Balance & Tradeoff",
  },
  {
    avatar: "https://github.com/johannschopplich.png",
    name: "Johann Schopplich",
    github: "johannschopplich",
    title: "Full Stack Developer",
    desc: "Pharmacist prior to that",
  },
  {
    avatar: "https://github.com/ydcjeff.png",
    name: "Jeff Yang",
    github: "ydcjeff",
    twitter: "ydcjeff",
  },
  {
    avatar: "https://github.com/sudongyuer.png",
    name: "Tsuki Su",
    github: "sudongyuer",
    twitter: "sudongyuer",
    title: "A zealous open sourceror & Full Stack Developer & Junior designer",
    desc: "Previously worked at Tencent, now starting a business",
  },
  {
    avatar: "https://github.com/jacob-8.png",
    name: "Jacob Bowdoin",
    github: "jacob-8",
    twitter: "jacobbowdoin",
    title: "Svelte, i18n",
    org: "Polylingual Development",
    orgLink: "https://polylingual.dev/",
  },
];

const teamMembers = plainTeamMembers.map((tm) => createLinks(tm));
