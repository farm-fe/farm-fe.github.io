import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Benchmark from "../components/Benchmark";
import StarrySky from "../components/StarrySky";
import styles from "./index.module.css";
import { TeamMembers } from "../components/TeamMembers";
import Translate, { translate } from "@docusaurus/Translate";
import { useThemeConfig } from "@docusaurus/theme-common";
import { members } from "./data";
import AnimatedGradientStarWithGithub from "../components/MagicUi/animated-shiny-text";
import BlurIn from "../components/MagicUi/blur-in";
import SeparateAway from "../components/MagicUi/separate-away";
import Particles from "../components/MagicUi/particles";
import NeonGradientCard from "../components/MagicUi/neon-gradient-card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import BorderBeam from "../components/MagicUi/border-beam";
import BentoCardFeature from './card'
import Team from "../components/Team";
import { FAQ } from "../components/FAQ";
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
      <div className="container w-full flex flex-col my-1">
        <p className="font-extrabold text-3xl sm:text-6xl lg:text-6xl text-left mb-6 flex flex-col gap-2">
          <div>
            <span>
              <Translate>Extremely</Translate>
            </span>
            <span className={clsx(styles.banner)}>
              <Translate> Fast </Translate>
            </span>
            <span>
              <Translate>Web</Translate>
            </span>
          </div>
          <div>
            <span className={clsx(styles.banner)}>
              <Translate> Build Tool</Translate>
            </span>
          </div>
          <div>
            <span>
              <Translate>Written in</Translate>
            </span>
            <span className={clsx(styles.banner, "my-6")}>
              <Translate> Rust</Translate>
            </span>
          </div>
        </p>
        <p className="font-semibold brand-color mb-6 text-1xl sm:text-2xl lg:text-xl tracking-wide text-left  flex flex-col gap-2">
          <div>
            <span className={clsx(styles.banner, "font-extrabold")}>
              <Translate>Farm </Translate>
            </span>
            <span className="font-sans">
              <Translate>
                is a Rust-Based Web Building Engine to Facilitate Your Web
                Program and JavaScript Library
              </Translate>
            </span>
          </div>
        </p>
        <div className={clsx(styles.buttons, "my-2")}>
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
      <AnimatedGradientStarWithGithub />

      <StarrySky />
      <main className="mb-20 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8max-w-6xl">
        <BlurIn
          word="Extremely Fast Web Bundler Written in Rust"
        />
        <div className="mb-10 mt-10 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8max-w-6xl">
          <SeparateAway
            upper_text="Farm is a Rust-Based Web Building Engine to Facilitate Your Web Program and JavaScript Library"
            duration={2}
            hidden_opacity={0}
            visible_opacity={1}
            className="pointer-events-none font-display text-center text-xs font-bold tracking-[-0.02em]  dark:text-gray-400 md:text-2xl"
          />
        </div>

        <div className="mb-10 max-w-md mx-auto w-full px-4 sm:px-6 lg:px-8max-w-6xl">
          <div className={clsx(styles.buttons, "flex items-center gap-7")}>
            <Link to="/docs/quick-start" style={{ textDecoration: "none", zIndex: 99 }}>
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
              style={{ marginLeft: "20px", textDecoration: "none", zIndex: 99 }}
              to="/docs/why-farm"
            >
              <div
                className={clsx(
                  styles.farmButton2,
                  "flex w-36 sm:w-40  items-center justify-center font-bold"
                )}
              >
                <Translate>Why Farm?</Translate>
              </div>
            </Link>
          </div>
        </div>


        <div className="relative rounded-xl w-full flex justify-center my-32 fKVWgc">
          <NeonGradientCard className="w-full m-2">
            <Benchmark />
          </NeonGradientCard>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
        <div>
          <BentoCardFeature />
        </div>
        {/* <HomepageHeader /> */}
        {/* <HomepageFeatures /> */}
      </main>
      <div className="mb-32">
        <div className="text-center">
          <BlurIn
            word="Get to know our team"
            className="pointer-events-none bg-gradient-to-br md:text-6xl font-semibold dark:from-white from-black from-30% dark:to-white/40 to-black/40  bg-clip-text"
          />
          <div className="mt-10 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8max-w-6xl">
            <SeparateAway
              upper_text="Farm team core members, the following are introductions of the members"
              duration={2}
              hidden_opacity={0}
              visible_opacity={1}
              className="pointer-events-none font-display text-center text-xs font-bold tracking-[-0.02em] dark:text-gray-400 md:text-2xl"
            />
          </div>
        </div>
        <Team />
      </div>
      <FAQ />
      {/* <div className="relative mb-32">
        <Team />
        <div className="absolute top-1/2 left-1/2 z-10" style={{ transform: "translate(-50%, -50%)" }}>
          <div className="mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-handshake mx-auto size-16 text-black dark:text-white lg:size-24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg></div>
          <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
            <h1 className="text-3xl font-bold lg:text-4xl">Stop wasting time on design.</h1>
            <p className="mt-2">Start your 7-day free trial. No credit card required.</p>
            <a className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 group mt-4 rounded-[2rem] px-6" href="#">Get Started<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1"><path d="m9 18 6-6-6-6"></path>
            </svg>
            </a>
          </div>
          <div className="absolute inset-0 -z-10 rounded-full  bg-backtround opacity-40 blur-xl dark:bg-background"></div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-backtround to-70% dark:to-background"></div>
      </div> */}
    </Layout>
  );
}



