import { ProgressBar } from "./ProgressBar";
import FarmCard from "../Card";
import { useInView } from "react-intersection-observer";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import React, { useState } from "react";
import clsx from "clsx";
const BENChMARK_DATA = {
  ColdStart: [
    {
      name: "Farm",
      time: 0.429,
    },
    {
      name: "Rspack",
      time: 0.606,
    },
    {
      name: "Vite",
      time: 3.285,
    },
    {
      name: "Webpack",
      time: 6.87,
    },
  ],
  HotStart: [
    {
      name: "Farm",
      time: 0.275,
    },
    {
      name: "Rspack",
      time: 0.585,
    },
    {
      name: "Vite",
      time: 2.955,
    },
    {
      name: "Webpack",
      time: 1.197,
    },
  ],
  HmrRoot: [
    {
      name: "Farm",
      time: 0.019,
    },
    {
      name: "Rspack",
      time: 0.082,
    },
    {
      name: "Vite",
      time: 0.032,
    },
    {
      name: "Webpack",
      time: 0.211,
    },
  ],
  HmrLeaf: [
    {
      name: "Farm",
      time: 0.014,
    },
    {
      name: "Rspack",
      time: 0.065,
    },
    {
      name: "Vite",
      time: 0.018,
    },
    {
      name: "Webpack",
      time: 0.175,
    },
  ],
  ColdBuild: [
    {
      name: "Farm",
      time: 0.323,
    },
    {
      name: "Rspack",
      time: 0.532,
    },
    {
      name: "Vite",
      time: 1.66,
    },
    {
      name: "Webpack",
      time: 8.814,
    },
  ],
  HotBuild: [
    {
      name: "Farm",
      time: 0.14,
    },
    {
      name: "Rspack",
      time: 0.515,
    },
    {
      name: "Vite",
      time: 1.65,
    },
    {
      name: "Webpack",
      time: 1.197,
    },
  ],
};

export default function Benchmark() {
  const SCENE = [
    { name: <Translate>ColdStart</Translate>, title: "ColdStart" },
    { name: <Translate>HotStart</Translate>, title: "HotStart" },
    { name: <Translate>HmrRoot</Translate>, title: "HmrRoot" },
    { name: <Translate>HmrLeaf</Translate>, title: "HmrLeaf" },
    { name: <Translate>ColdBuild</Translate>, title: "ColdBuild" },
    { name: <Translate>HotBuild</Translate>, title: "HotBuild" },
  ];
  const [activeScene, setActiveScene] = useState("ColdStart");
  const { ref, inView } = useInView();
  const performanceInfoList = BENChMARK_DATA[activeScene];

  const [visibleSection, setVisibleSection] = useState("ColdStart");

  function Pill({ section }) {
    return (
      <div>
        <div
          className={clsx(
            "flex-1 cursor-pointer rounded-md py-2 px-2 sm:px-4 text-center font-jakarta text-sm font-semibold",
            visibleSection === section.title
              ? "bg-fuchsia-600 text-white"
              : "color-re"
          )}
          onClick={() => {
            setVisibleSection(section.title);
            setActiveScene(section.title);
          }}
        >
          {section.name}
        </div>
      </div>
    );
  }

  function PillTabs({ SCENE, children }) {
    return (
      <div className="overflow-x-auto">
        <div className="inline-flex mb-4 items-center rounded-lg text-sm lg:text-base">
          {SCENE.map((item, index) => {
            return <Pill section={item} key={index}></Pill>;
          })}
        </div>
        <div>{children}</div>
      </div>
    );
  }
  return (
    <>
      <div ref={ref} className="flex">
        {inView && (
          <>
            <div
              className={`${styles.tabs} flex flex-col items-center my-4 z-1`}
            >
              <div className="flex h-20 w-full flex-1 items-center self-start lg:justify-end">
                <div className="w-full">
                  <PillTabs SCENE={SCENE}>
                    {performanceInfoList.map((info) => (
                      <div
                        key={info.name}
                        className="flex flex-center justify-start my-8 flex-col sm:flex-row"
                      >
                        {inView && (
                          <>
                            <div
                              className="flex items-center text-light-500  text-center font-bold"
                              style={{ minWidth: "100px" }}
                            >
                              {info.name}
                            </div>
                            <ProgressBar
                              value={info.time}
                              max={Math.max(
                                ...performanceInfoList.map((info) => info.time)
                              )}
                            />
                          </>
                        )}
                      </div>
                    ))}
                  </PillTabs>
                  <div className="font-bold cursor-pointer">
                    <Link
                      rel="stylesheet"
                      href="https://github.com/farm-fe/performance-compare"
                    >
                      <Translate>See benchmark details</Translate>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
