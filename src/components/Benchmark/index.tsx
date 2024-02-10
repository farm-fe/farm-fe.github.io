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
      time: 0.41,
    },
    {
      name: "Rspack",
      time: 0.614,
    },
    {
      name: "Vite",
      time: 3.407,
    },
    {
      name: "Webpack",
      time: 7.857,
    },
  ],
  HotStart: [
    {
      name: "Farm",
      time: 0.285,
    },
    {
      name: "Rspack",
      time: 0.544,
    },
    {
      name: "Vite",
      time: 3.251,
    },
    {
      name: "Webpack",
      time: 1.047,
    },
  ],
  HmrRoot: [
    {
      name: "Farm",
      time: 0.02,
    },
    {
      name: "Rspack",
      time: 0.089,
    },
    {
      name: "Vite",
      time: 0.029,
    },
    {
      name: "Webpack",
      time: 0.317,
    },
  ],
  HmrLeaf: [
    {
      name: "Farm",
      time: 0.01,
    },
    {
      name: "Rspack",
      time: 0.104,
    },
    {
      name: "Vite",
      time: 0.022,
    },
    {
      name: "Webpack",
      time: 0.255,
    },
  ],
  ColdBuild: [
    {
      name: "Farm",
      time: 0.475,
    },
    {
      name: "Rspack",
      time: 0.724,
    },
    {
      name: "Vite",
      time: 2.02,
    },
    {
      name: "Webpack",
      time: 11.978,
    },
  ],
  HotBuild: [
    {
      name: "Farm",
      time: 0.176,
    },
    {
      name: "Rspack",
      time: 0.743,
    },
    {
      name: "Vite",
      time: 2.085,
    },
    {
      name: "Webpack",
      time: 0.924,
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
      <div>
        <div className="inline-flex mb-4 items-center rounded-lg text-sm  lg:text-base">
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
