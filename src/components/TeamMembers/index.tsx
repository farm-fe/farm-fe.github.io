import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import FarmCard from "../card";

export function TeamMembers(props) {
  const { members, size } = props;
  const { siteConfig } = useDocusaurusContext();
  const classes = clsx(styles.VPTeamMembers, "small my-40");
  return (
    <div className={classes}>
      <div className="flex justify-center my-8 text-2xl font-bold">
        <Translate>Contributors</Translate>
      </div>
      <div className={clsx("mt-10", styles.container)}>
        <a
          className={`flex justify-center`}
          href="https://github.com/farm-fe/farm/graphs/contributors"
        >
          <img
            className={`w-12/12 sm:w-7/12`}
            src="https://contrib.rocks/image?repo=farm-fe/farm"
          />
        </a>
      </div>
    </div>
  );
}
