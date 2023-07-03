import React from "react";
import clsx from "clsx";
// import Image from "@theme/IdealImage";
import Rocket from "@site/static/img/rocket.png";
import Plug from "@site/static/img/plug.png";
import FeaturePng from "@site/static/img/feature.png";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Super Fast",
    Img: Rocket,
    description: (
      <>
        Farm's compiler is written in Rust, with multi-threading,
        lazy/asynchronous compilation and persist caching, Farm can start a
        project in milliseconds, perform a HMR update within 10ms for most
        scenarios.
      </>
    ),
  },
  {
    title: "Rich Features",
    Img: FeaturePng,
    description: (
      <>
        Farm support compiling Html, Css, Js/Jsx/Ts/Tsx, Json, Static Assets out
        of box, support sass, less, react-refresh by official plugins, support
        lazy compiling, partial bundling and more
      </>
    ),
  },
  {
    title: "Fully Pluggable",
    Img: Plug,
    description: (
      <>
        Everything inside Farm is powered by plugins, you can achieve anything
        you want by writing a plugin. Support both Rust and Js plugins.
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx("flex items-center gap-6", styles.card)}>
      <img
        src={Img}
        className={clsx(styles.featureSvg, "text--center w-24 h-24")}
        role="img"
      />
      <div className="padding-horiz--md mt-6 space-y-10 font-display  tracking-tight ">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-xl">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx(styles.item, "container mx-auto")}>
        <div className="flex gap-12">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
