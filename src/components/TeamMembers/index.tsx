import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import FarmCard from "../card";
import TeamMembersItem from "../TeamMembersItem";

export function TeamMembers(props) {
  const { members, size } = props;
  const { siteConfig } = useDocusaurusContext();
  const classes = clsx(styles.VPTeamMembers, "small my-40");
  return (
    <div className={classes}>
      <div className="flex justify-center my-8 text-2xl font-bold">
        <Translate>Our Team</Translate>
      </div>
      <div className={clsx("mt-10", styles.container)}>
        {members.map((member) => (
          <div key={member.name} className="w-full p-10 item p-2 h-90">
            <TeamMembersItem member={member} />
          </div>
        ))}
      </div>
    </div>
  );
}
