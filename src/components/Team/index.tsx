import { cn } from "../../lib/utils";
import Marquee from "../MagicUi/marquee";

const reviews = [
  {
    name: "brightwu",
    org: "@ByteDance",
    body: "Author/Lead Maintainer of @farm-fe. Rust && TS && Java..",
    img: "https://www.github.com/wre232114.png",
    links: [
      { icon: "github", link: "https://github.com/wre232114" },
      { icon: "twitter", link: "https://twitter.com/wre232114" },
    ],
  },
  {
    name: "Erkelost",
    org: "",
    body: "Rust & Go & Node & Web development ❤️❤️",
    img: "https://www.github.com/erkelost.png",
    links: [
      { icon: "github", link: "https://github.com/ErKeLost" },
      { icon: "twitter", link: "https://twitter.com/ErKeLost" },
    ],
  },
  {
    name: "shulandmimi",
    org: "",
    body: "Core team member of Farm.",
    img: "https://www.github.com/shulandmimi.png",
    links: [
      { icon: "github", link: "https://github.com/shulandmimi" },
      { icon: "twitter", link: "https://twitter.com/shulandmimi" },
    ],
  },
  {
    name: "Nirvana-Jie",
    org: "@bytedance",
    body: "There are too many things to learn, I can only keep moving forward.",
    img: "https://github.com/Nirvana-Jie.png",
    links: [
      { icon: "github", link: "https://github.com/Nirvana-Jie" },
      { icon: "twitter", link: "https://twitter.com/Nirvana-Jie" },
    ],
  },
  {
    name: "NidMo",
    org: "",
    body: "Core team member of Farm.",
    img: "https://github.com/NidMo.png",
    links: [
      { icon: "github", link: "https://github.com/NidMo" },
      { icon: "twitter", link: "https://twitter.com/NidMo" },
    ],
  },
  {
    name: "wjq990112",
    org: "@bytedance",
    body: "Member of @raxjs, @ice-lab and @farm-fe.",
    img: "https://github.com/wjq990112.png",
    links: [
      { icon: "github", link: "https://github.com/wjq990112" },
      { icon: "twitter", link: "https://twitter.com/wjq990112" },
    ],
  },
  {
    name: "callqh",
    org: "",
    body: "Javascript & Rust.",
    img: "https://github.com/callqh.png",
    links: [
      { icon: "github", link: "https://github.com/callqh" },
      { icon: "twitter", link: "https://twitter.com/callqh" },
    ],
  },
  {
    name: "oblador",
    org: "",
    body: "Core team member of Farm.",
    img: "https://github.com/oblador.png",
    links: [
      { icon: "github", link: "https://github.com/oblador" },
      { icon: "twitter", link: "https://twitter.com/oblador" },
    ],
  },
  {
    name: "ysy945",
    org: "",
    body: "Core team member of Farm.",
    img: "https://github.com/ysy945.png",
    links: [
      { icon: "github", link: "https://github.com/ysy945" },
      { icon: "twitter", link: "https://twitter.com/ysy945" },
    ],
  },
  {
    name: "NaturelLee",
    org: "",
    body: "Core team member of Farm.",
    img: "https://github.com/NaturelLee.png",
    links: [
      { icon: "github", link: "https://github.com/NaturelLee" },
      { icon: "twitter", link: "https://twitter.com/NaturelLee" },
    ],
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  org,
  body,
}: {
  img: string;
  name: string;
  org: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{org}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Team = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20 md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:50s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.org} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:50s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.org} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
    </div>
  );
};

export default Team;
