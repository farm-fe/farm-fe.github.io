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
      time: 0.403,
    },
    {
      name: "Rspack",
      time: 0.831,
    },
    {
      name: "Turbopack",
      time: 3.731,
    },
    {
      name: "Vite",
      time: 3.078,
    },
    {
      name: "Webpack",
      time: 8.534,
    },
  ],
  HmrRoot: [
    {
      name: "Farm",
      time: 0.011,
    },
    {
      name: "Rspack",
      time: 0.104,
    },
    {
      name: "Turbopack",
      time: 0.062,
    },
    {
      name: "Vite",
      time: 0.035,
    },
    {
      name: "Webpack",
      time: 0.265,
    },
  ],
  HmrLeaf: [
    {
      name: "Farm",
      time: 0.01,
    },
    {
      name: "Rspack",
      time: 0.096,
    },
    {
      name: "Turbopack",
      time: 0.054,
    },
    {
      name: "Vite",
      time: 0.018,
    },
    {
      name: "Webpack",
      time: 0.199,
    },
  ],
  ColdBuild: [
    {
      name: "Farm",
      time: 0.288,
    },
    {
      name: "Rspack",
      time: 0.724,
    },
    {
      name: "Turbopack",
      time: 6.442,
    },
    {
      name: "Vite",
      time: 2.266,
    },
    {
      name: "Webpack",
      time: 11.321,
    },
  ],
};

const MODULE_COUNT_MAP = {
  ColdStart: "50000",
  HmrRoot: "10000",
  HmrLeaf: "10000",
  ColdBuild: "50000",
};

export default function Benchmark() {
  const SCENE = [
    { name: <Translate>ColdStart</Translate>, title: "ColdStart" },
    { name: <Translate>HmrRoot</Translate>, title: "HmrRoot" },
    { name: <Translate>HmrLeaf</Translate>, title: "HmrLeaf" },
    { name: <Translate>ColdBuild</Translate>, title: "ColdBuild" },
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
            "flex-1 cursor-pointer rounded-md py-2 px-2 sm:px-6 text-center font-jakarta text-sm font-semibold",
            visibleSection === section.title
              ? "bg-fuchsia-600 text-white"
              : "color-re"
          )}
          onClick={() => {
            setVisibleSection(section.title);
            setActiveScene(section.title);
          }}
        >
          {/* {`${section[0].toUpperCase()}${section.substring(1)}`} */}
          {section.name}
        </div>
      </div>
    );
  }

  function PillTabs({ SCENE, children }) {
    return (
      <div>
        <div className="inline-flex items-center rounded-lg bg text-sm  lg:text-base">
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
      <div ref={ref}>
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
                        className="flex flex-center justify-start my-4 flex-col sm:flex-row"
                      >
                        {inView && (
                          <>
                            <div
                              className="flex items-center text-light-500  text-center"
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
                      See benchmark details
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
