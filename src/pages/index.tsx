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
import { members } from "./data";
import AnimatedGradientStarWithGithub from "../components/MagicUi/animated-shiny-text";
import BlurIn from "../components/MagicUi/blur-in";
import SeparateAway from "../components/MagicUi/separate-away";
import Particles from "../components/MagicUi/particles";
import NeonGradientCard from "../components/MagicUi/neon-gradient-card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
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
          className="pointer-events-none bg-gradient-to-br md:text-8xl font-semibold text-transparent dark:from-white from-black from-30% dark:to-white/40 to-black/40  bg-clip-text "
        />
        <div className="mb-10 mt-10 max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8max-w-6xl">
          <SeparateAway
            upper_text="Farm is a Rust-Based Web Building Engine to Facilitate Your Web Program and JavaScript Library"
            duration={2}
            hidden_opacity={0}
            visible_opacity={1}
            className="pointer-events-none font-display text-center text-xs font-bold tracking-[-0.02em] text-black dark:text-gray-400 md:text-2xl"
          />
        </div>

        <div className="mb-10 max-w-md mx-auto w-full px-4 sm:px-6 lg:px-8max-w-6xl">
          <div className={clsx(styles.buttons, "flex items-center gap-7")}>
            <Link to="/docs/quick-start" style={{ textDecoration: "none", zIndex: 999 }}>
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
              style={{ marginLeft: "20px", textDecoration: "none", zIndex: 999 }}
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

        <NeonGradientCard className="w-full h-screen">
          {/* <div className="block h-auto whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            <Benchmark />
          </div> */}
          <Benchmark />
        </NeonGradientCard>
        {/* <ParticlesApp /> */}
        {/* <HomepageHeader /> */}
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}




const ParticlesApp = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#fba");

  useEffect(() => {
    setColor(theme === "dark" ? "#fab" : "#fba");
  }, [theme]);

  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-4 md:shadow-xl">

      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={800}
        color={"#fab"}
        refresh
      />
    </div>
  );
};

