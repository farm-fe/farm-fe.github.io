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
  const [elapsedTime, setElapsedTime] = useState(0);
  const TOTAL_TIME = value * 1000;
  const isMobile = window.innerWidth < 768;
  const progressBarWidth = isMobile ? 80 : 50;
  const formattedTime = formatTime(elapsedTime, TOTAL_TIME);
  const [ref, { width }] = useMeasure();
  const props = useSpring({
    width,
    // delay: 1000,
    config: {
      duration: TOTAL_TIME,
    },
    onChange(data) {
      console.log("data", data);
      setElapsedTime((data.value.width / 100) * TOTAL_TIME);
    },
  });

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
        <animated.div className={styles["progress-bar"]} style={props} />
      </div>
      <div className={`${styles["font-mono"]} text-sm sm:text-base`}>
        {formattedTime}
      </div>
    </div>
  );
}
