import { ProgressBar } from "./ProgressBar";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import { useInView } from "react-intersection-observer";
import styles from "./index.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
// 场景条件
// 冷启动/热更新
const BENChMARK_DATA = {
  coldStart: [
    {
      name: "Rspack",
      // 单位为 s
      time: 3.79,
    },
    {
      name: "Webpack (with SWC)",
      time: 31.25,
    },
    {
      name: "Webpack (with babel)",
      time: 42.61,
    },
  ],
  hmrRoot: [
    {
      name: "Rspack",
      time: 0.57,
    },
    {
      name: "Webpack (with SWC)",
      time: 1.67,
    },
    {
      name: "Webpack (with babel)",
      time: 1.74,
    },
  ],
  hmrLeaf: [
    {
      name: "Rspack",
      time: 0.56,
    },
    {
      name: "Webpack (with SWC)",
      time: 1.53,
    },
    {
      name: "Webpack (with babel)",
      time: 1.63,
    },
  ],
  coldBuild: [
    {
      name: "Rspack",
      time: 22.35,
    },
    {
      name: "Webpack (with SWC)",
      time: 75.05,
    },
    {
      name: "Webpack (with babel + terser)",
      time: 160.06,
    },
  ],
};

const MODULE_COUNT_MAP = {
  coldStart: "50000",
  hmrRoot: "10000",
  hmrLeaf: "10000",
  coldBuild: "50000",
};

export default function Benchmark() {
  const SCENE = ["coldStart", "hmrRoot", "hmrLeaf", "coldBuild"];
  const [activeScene, setActiveScene] = useState("coldStart");
  const { ref, inView } = useInView();
  const variants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };
  const duration = 1000;
  const [width, setWidth] = useState(0);
  const props = useSpring({ width: `${width}%`, config: { duration } });

  setTimeout(() => {
    setWidth(100);
  }, duration);
  const performanceInfoList = BENChMARK_DATA[activeScene];
  return (
    <>
      <div ref={ref}>
        {inView && (
          <>
            <div className="flex flex-center flex-col">
              <h2 className={`${styles.title} font-bold text-2xl sm:text-4xl`}>
                BenchmarkTitle
              </h2>
              <p className="mt-6 mx-6 text-center sm:text-lg text-gray-600 max-w-3xl">
                BenchmarkDesc
              </p>
            </div>
            <div className="flex flex-col items-center my-4 z-1">
              <Tabs
              // values={SCENE.map((item) => ({
              //   label: item,
              // }))}
              >
                {SCENE.map((scene) => (
                  <TabItem
                    value={scene}
                    label={scene}
                    key={scene}
                    onChange={(index) => setActiveScene(SCENE[index])}
                  >
                    {performanceInfoList.map((info) => (
                      <div
                        key={info.name}
                        className="flex flex-center justify-start m-4 flex-col sm:flex-row"
                      >
                        {inView && (
                          <>
                            <p
                              className="mr-2 mb-2 w-20 text-center text-gray-500 dark:text-light-500"
                              style={{ minWidth: "180px" }}
                            >
                              {info.name}
                            </p>
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
                  </TabItem>
                ))}
              </Tabs>
              <div>
                <p className="font-medium my-2 text-center text-lg text-gray-500">
                  <span className=" font-normal">moduleCount:</span>{" "}
                  {MODULE_COUNT_MAP[activeScene]}
                </p>
                <a
                  href="misc/benchmark.html"
                  className="hover:text-brand transition-colors duration-300 text-14px font-medium text-gray-500 p-3"
                >
                  👉 benchmarkDetail
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
