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
    orgLink: "https://github.com/erkelost",
  },
  {
    avatar: "https://github.com/shulandmimi.png",
    name: "shulandmimi",
    github: "shulandmimi",
    title: ".",
    orgLink: "https://github.com/shulandmimi",
  },
  {
    avatar: "https://github.com/Nirvana-Jie.png",
    name: "Nirvana",
    github: "Nirvana",
    title: "So mush to learn, Just keep working.",
    orgLink: "https://github.com/Nirvana-Jie",
  },
  {
    avatar: "https://github.com/wjq990112.png",
    name: "wjq990112",
    github: "wjq990112",
    title:
      "Member of @raxjs, @ice-lab, and @farm-fe. Working at @bytedance, previously at @alibaba.",
    orgLink: "https://github.com/wjq990112",
  },
  {
    avatar: "https://github.com/callqh.png",
    name: "callqh",
    github: "callqh",
    title: "Javascript & Rust.",
    orgLink: "https://github.com/callqh",
  },
  {
    avatar: "https://github.com/oblador.png",
    name: "oblador",
    github: "oblador",
    title:
      "╥━━━━━━━━╭━━╮━━┳ ╢╭╮╭━━━━━┫┃▋▋━▅┣ ╢┃╰┫┈┈┈┈┈┃┃┈┈╰┫┣ ╢╰━┫┈┈┈┈┈╰╯╰┳━╯┣ ╢┊┊┃┏┳┳━━┓┏┳┫┊┊┣ ╨━━┗┛┗┛━━┗┛┗┛━━┻.",
    orgLink: "https://github.com/oblador",
  },
  {
    avatar: "https://github.com/ysy945.png",
    name: "ysy945",
    github: "ysy945",
    title: "",
    orgLink: "https://github.com/ysy945",
  },
  {
    avatar: "https://github.com/NaturelLee.png",
    name: "NaturelLee",
    github: "NaturelLee",
    title: "Developer | Lifelong learning.",
    orgLink: "https://github.com/NaturelLee",
  },
  {
    avatar: "https://github.com/liuliudada-w.png",
    name: "liuliudada-w",
    github: "liuliudada-w",
    title: "myself.",
    orgLink: "https://github.com/liuliudada-w",
  },
  {
    avatar: "https://github.com/roland-reed.png",
    name: "Roland Reed",
    github: "Roland Reed",
    title: "",
    orgLink: "https://github.com/roland-reed",
  },
];

const teamMembers = plainTeamMembers.map((tm) => createLinks(tm));

export { teamMembers };
