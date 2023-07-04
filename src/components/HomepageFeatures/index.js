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
    className:
      "w-full flex h-60 rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full",
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
    className:
      " w-full rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2",
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
    className:
      " w-full flex h-52 rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-auto",
  },
];

function Feature({ Img, title, description, className }) {
  return (
    <div
      className={clsx("items-center gap-6 flex-1", styles.card, className)}
      style={{ display: "flex" }}
    >
      <img
        src={Img}
        className={clsx(styles.featureSvg, "text--center w-24 h-24")}
        role="img"
      />
      <div className=" mt-6 font-display  tracking-tight ">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="font-extrabold py-8">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx(styles.item, "mx-auto")}>
        <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
