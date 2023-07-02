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
  const classes = clsx(styles.VPTeamMembers, "medium");
  return (
    <div className={classes}>
      <div className="container">
        {members.map((member) => (
          <FarmCard>
            <div key={member.name} className="item">
              <TeamMembersItem member={member} />
            </div>
          </FarmCard>
        ))}
      </div>
    </div>
  );
}
