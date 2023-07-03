export interface CoreTeam extends Partial<any> {
  avatar: string;
  name: string;
  // required to download avatars from GitHub
  github: string;
  twitter?: string;
  webtools?: string;
  discord?: string;
  youtube?: string;
  sponsor?: string;
  title?: string;
  org?: string;
  desc?: string;
}

function createLinks(tm: CoreTeam): CoreTeam {
  tm.links = [{ icon: "github", link: `https://github.com/${tm.github}` }];
  if (tm.webtools)
    tm.links.push({
      icon: "mastodon",
      link: `https://elk.zone/m.webtoo.ls/@${tm.webtools}`,
    });
  if (tm.discord) tm.links.push({ icon: "discord", link: tm.discord });
  if (tm.youtube)
    tm.links.push({
      icon: "youtube",
      link: `https://www.youtube.com/@${tm.youtube}`,
    });
  tm.links.push({ icon: "twitter", link: `https://twitter.com/${tm.twitter}` });
  return tm;
}

const plainTeamMembers: CoreTeam[] = [
  {
    avatar: "https://github.com/wre232114.png",
    name: "brightwu",
    github: "brightwu",
    title: "Author/Maintainer of @farm-fe",
    org: "Tencent",
    orgLink: "https://github.com/wre232114",
    // desc: "Author/Maintainer of @farm-fe",
  },
  {
    avatar: "https://github.com/erkelost.png",
    name: "Erkelost",
    github: "Erkelost",
    title: "Rust & Go & Node & Web development  ❤️❤️.",
  },
  {
    avatar: "https://github.com/shulandmimi.png",
    name: "shulandmimi",
    github: "shulandmimi",
    title: ".",
  },
  {
    avatar: "https://github.com/Nirvana-Jie.png",
    name: "Nirvana",
    github: "Nirvana",
    title: "So mush to learn, Just keep working.",
  },
];

const teamMembers = plainTeamMembers.map((tm) => createLinks(tm));

export { teamMembers };
