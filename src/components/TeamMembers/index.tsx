import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import FarmCard from "../card";
import TeamMembersItem from "../TeamMembersItem";

export function TeamMembers(props) {
  const { members, size } = props;
  const { siteConfig } = useDocusaurusContext();
  const classes = clsx(styles.VPTeamMembers, "small");
  return (
    <div className={classes}>
      <div className={clsx("mt-10", styles.container)}>
        {members.map((member) => (
          <FarmCard>
            <div
              key={member.name}
              className="w-full p-10 item p-2 mx-2 lg:p-4 mx-4 h-80"
            >
              <TeamMembersItem member={member} />
            </div>
          </FarmCard>
        ))}
      </div>
    </div>
  );
}
