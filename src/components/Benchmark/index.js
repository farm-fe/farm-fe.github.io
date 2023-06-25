import { ProgressBar } from "./ProgressBar";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import { useInView } from "react-intersection-observer";
import styles from "./index.module.css";
import React, { useState } from "react";
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
  const performanceInfoList = BENChMARK_DATA[activeScene];
  return (
    <Tabs>
      <TabItem value="npm" label="npm">
        <CodeBlock>npm create farm@latest</CodeBlock>
      </TabItem>
      <TabItem value="yarn" label="yarn">
        <CodeBlock>yarn create farm</CodeBlock>
      </TabItem>
      <TabItem value="pnpm" label="pnpm">
        <CodeBlock>pnpm create farm</CodeBlock>
      </TabItem>
    </Tabs>
    // <motion.div
    //   ref={ref}
    //   initial={{ opacity: 0, y: 50 }}
    //   animate={inView ? "animate" : "initial"}
    //   variants={variants}
    //   transition={{ duration: 1 }}
    //   className="relative flex flex-col justify-center py-10 mt-15 h-auto"
    // >
    //   {inView && (
    //     <>
    //       <div className="flex flex-center flex-col">
    //         <h2 className={`${styles.title} font-bold text-2xl sm:text-4xl`}>
    //           BenchmarkTitle
    //         </h2>
    //         <p className="mt-6 mx-6 text-center sm:text-lg text-gray-600 max-w-3xl">
    //           BenchmarkDesc
    //         </p>
    //       </div>
    //       <div className="flex flex-col items-center my-4 z-1">
    //         {/* <h2 className="font-bold text-2xl mb-5">超快的编译速度!</h2> */}
    //         <div
    //         // values={SCENE.map((item) => ({
    //         //   label: item as keyof typeof BENChMARK_DATA,
    //         // }))}
    //         // onChange={(index) =>
    //         //   setActiveScene(SCENE[index] as keyof typeof BENChMARK_DATA)
    //         // }
    //         >
    //           {SCENE.map((scene) => (
    //             <div key={scene}>
    //               {performanceInfoList.map((info) => (
    //                 <div
    //                   key={info.name}
    //                   className="flex flex-center justify-start m-4 flex-col sm:flex-row"
    //                 >
    //                   {inView && (
    //                     <>
    //                       <p
    //                         className="mr-2 mb-2 w-20 text-center text-gray-500 dark:text-light-500"
    //                         style={{ minWidth: "180px" }}
    //                       >
    //                         {info.name}
    //                       </p>
    //                       <ProgressBar
    //                         value={info.time}
    //                         max={Math.max(
    //                           ...performanceInfoList.map((info) => info.time)
    //                         )}
    //                       />
    //                     </>
    //                   )}
    //                 </div>
    //               ))}
    //             </div>
    //           ))}
    //         </div>
    //         <div>
    //           <p className="font-medium my-2 text-center text-lg text-gray-500">
    //             <span className=" font-normal">moduleCount:</span>{" "}
    //             {MODULE_COUNT_MAP[activeScene]}
    //           </p>
    //           <a
    //             href="misc/benchmark.html"
    //             className="hover:text-brand transition-colors duration-300 text-14px font-medium text-gray-500 p-3"
    //           >
    //             👉 benchmarkDetail
    //           </a>
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </motion.div>
  );
}
