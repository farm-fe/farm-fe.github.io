import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import styles from "./index.module.css";

export function formatTime(time: number, totalTime: number) {
  if (totalTime < 1000) {
    return `${time.toFixed(0)}ms`;
  } else {
    return `${(time / 1000).toFixed(2)}s`;
  }
}

export function ProgressBar({ value, max }) {
  //   console.log({ value, max });

  const [elapsedTime, setElapsedTime] = useState(0);
  const TOTAL_TIME = value * 1000;
  const isMobile = window.innerWidth < 768;
  const progressBarWidth = isMobile ? 80 : 50;
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%" },
  };
  const formattedTime = formatTime(elapsedTime, TOTAL_TIME);
  console.log(formattedTime);
  const [ref, { width }] = useMeasure();
  //   const props = useSpring({
  //     width: `${(value / max) * 0.8 * progressBarWidth}`,
  //     config: {
  //       duration: value / 2,
  //       easing: (t) => t * t,
  //       mass: 1,
  //       tension: 300,
  //       friction: 30,
  //     },
  //     onFrame: (latest) => {
  //       const width = parseFloat(latest.width);
  //       console.log(width);
  //       setElapsedTime((width / 100) * TOTAL_TIME);
  //     },
  //   });
  const props = useSpring({ width });
  return (
    <div
      className={`${styles["progress-bar-container"]} flex justify-between items-center sm:pr-4`}
      style={{
        width: `${progressBarWidth}vw`,
      }}
    >
      <div
        className={`${styles["progress-bar-inner-container"]} flex justify-between`}
        style={{
          width: `${(value / max) * 0.8 * progressBarWidth}vw`,
        }}
        ref={ref}
      >
        {/* <div className={styles.container}>
          <div ref={ref} className={styles.main}>
            <animated.div className={styles.fill} style={props} />
            <animated.div className={styles.content}>
              {props.width.to((x) => x.toFixed(0))}
            </animated.div>
          </div>
        </div> */}
        <animated.div className={styles["progress-bar"]} style={props} />
      </div>
      <div className={`${styles["font-mono"]} text-sm sm:text-base`}>
        {formattedTime}
      </div>
    </div>
  );
}
