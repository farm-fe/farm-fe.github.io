import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

export default function TeamMembersItem({ member }) {
  return (
    <article className={clsx(styles.VPTeamMembersItem)}>
      <div className={clsx(styles.profile)}>
        <figure className={styles.avatar}>
          <img
            className={styles["avatar-img"]}
            src={member.avatar}
            alt={member.name}
          />
        </figure>
        <div className={styles.data}>
          <h1 className={styles.name}>{member.name}</h1>
          {member.title || member.org ? (
            <p className={styles.affiliation}>
              {member.title ? (
                <span className={styles.title}>{member.title}</span>
              ) : null}
            </p>
          ) : null}
          {member.title && member.org ? (
            <span className={styles.at}>@</span>
          ) : null}
          {member.org ? (
            <Link className={styles.org} href={member.orgLink}>
              {member.org}
            </Link>
          ) : null}

          {member.desc ? <p className={styles.desc}>{member.desc}</p> : null}
          {member.links ? (
            <div className={styles.links}>
              {/* <Link :links="member.links" /> */}
              {member.link}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
