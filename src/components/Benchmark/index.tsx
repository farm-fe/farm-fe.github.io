import { ProgressBar } from "./ProgressBar";
import FarmCard from "../Card";
import { useInView } from "react-intersection-observer";
import styles from "./index.module.css";
import React, { useState } from "react";
import clsx from "clsx";
const BENChMARK_DATA = {
  ColdStart: [
    {
      name: "Farm",
      time: 0.439,
    },
    {
      name: "Rspack",
      time: 0.414,
    },
    {
      name: "Turbopack",
      time: 2.476,
    },
    {
      name: "Vite",
      time: 3.712,
    },
    {
      name: "Webpack",
      time: 8.05,
    },
  ],
  HmrRoot: [
    {
      name: "Farm",
      time: 0.008,
    },
    {
      name: "Rspack",
      time: 0.3,
    },
    {
      name: "Turbopack",
      time: 0.007,
    },
    {
      name: "Vite",
      time: 0.037,
    },
    {
      name: "Webpack",
      time: 0.363,
    },
  ],
  HmrLeaf: [
    {
      name: "Farm",
      time: 0.012,
    },
    {
      name: "Rspack",
      time: 0.288,
    },
    {
      name: "Turbopack",
      time: 0.013,
    },
    {
      name: "Vite",
      time: 0.025,
    },
    {
      name: "Webpack",
      time: 0.279,
    },
  ],
  ColdBuild: [
    {
      name: "Farm",
      time: 0.65,
    },
    {
      name: "Rspack",
      time: 0.999,
    },
    {
      name: "Turbopack",
      time: 3.865,
    },
    {
      name: "Vite",
      time: 5.421,
    },
    {
      name: "Webpack",
      time: 15.668,
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
  const SCENE = ["ColdStart", "HmrRoot", "HmrLeaf", "ColdBuild"];
  const [activeScene, setActiveScene] = useState("ColdStart");
  const { ref, inView } = useInView();
  const performanceInfoList = BENChMARK_DATA[activeScene];

  const [visibleSection, setVisibleSection] = useState("ColdStart");

  function Pill({ section }) {
    return (
      <div>
        <div
          className={clsx(
            "flex-1 cursor-pointer rounded-md py-2 px-6 text-center font-jakarta text-sm font-semibold",
            visibleSection === section
              ? "bg-fuchsia-600 text-white"
              : "text-black dark:text-white"
          )}
          onClick={() => {
            setVisibleSection(section);
            setActiveScene(section);
          }}
        >
          {`${section[0].toUpperCase()}${section.substring(1)}`}
        </div>
      </div>
    );
  }

  function PillTabs({ SCENE, children }) {
    return (
      <div>
        <div className="inline-flex items-center rounded-lg bg-zinc-100 p-2 text-sm dark:bg-zinc-800 lg:text-base">
          {SCENE.map((item, index) => {
            return <Pill section={item} key={item}></Pill>;
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
              <div className="mx-auto flex h-20 w-full flex-1 items-center justify-center self-start lg:w-auto lg:justify-end">
                <div className="">
                  <PillTabs SCENE={SCENE}>
                    {performanceInfoList.map((info) => (
                      <div
                        key={info.name}
                        className="flex flex-center justify-start my-4 flex-col sm:flex-row"
                      >
                        {inView && (
                          <>
                            <div
                              className="flex items-center text-gray-500 dark:text-light-500 text-center"
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
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
