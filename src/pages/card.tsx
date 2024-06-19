import { cn } from "../lib/utils";
import { BentoCard, BentoGrid } from "../components/MagicUi/bento-grid";
import Marquee from "../components/MagicUi/marquee";
import { Share2Icon } from "lucide-react";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

// const features = [
//   {
//     Icon: FileTextIcon,
//     name: "Save your files",
//     description: "We automatically save your files as you type.",
//     href: "/",
//     cta: "Learn more",
//     className: "col-span-3 lg:col-span-1",
//     background: (
//       <Marquee
//         pauseOnHover
//         className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
//       >
//         {files.map((f, idx) => (
//           <figure
//             key={idx}
//             className={cn(
//               "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
//               "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//               "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//               "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
//             )}
//           >
//             <div className="flex flex-row items-center gap-2">
//               <div className="flex flex-col">
//                 <figcaption className="text-sm font-medium dark:text-white ">
//                   {f.name}
//                 </figcaption>
//               </div>
//             </div>
//             <blockquote className="mt-2 text-xs">{f.body}</blockquote>
//           </figure>
//         ))}
//       </Marquee>
//     ),
//   },
//   {
//     Icon: InputIcon,
//     name: "Full text search",
//     description: "Search through all your files in one place.",
//     href: "/",
//     cta: "Learn more",
//     className: "col-span-3 lg:col-span-2",
//     background: (
//       <div>1213</div>
//     ),
//   },
//   {
//     Icon: Share2Icon,
//     name: "Integrations",
//     description: "Supports 100+ integrations and counting.",
//     href: "/",
//     cta: "Learn more",
//     className: "col-span-3 lg:col-span-2",
//     background: (
//       <div>213</div>
//       // < className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
//     ),
//   },
//   {
//     Icon: CalendarIcon,
//     name: "Calendar",
//     description: "Use the calendar to filter your files by date.",
//     className: "col-span-3 lg:col-span-1",
//     href: "/",
//     cta: "Learn more",
//     background: (
//       // <Calendar
//       //   mode="single"
//       //   selected={new Date(2022, 4, 11, 0, 0, 0)}
//       //   className="absolute right-0 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
//       // />
//       <div>123123123</div>
//     ),
//   },
// ];

const features = [
  {
    Icon: FileTextIcon,
    name: "Consistency and Compatibility",
    description: "What you see in development will be the same as what you get in production. Supports both legacy (ES5) and modern browsers.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Extremely Fast",
    description: "Written in Rust, start a React / Vue project in milliseconds and perform an HMR update within 10ms for most situations.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: GlobeIcon,
    name: "Incremental Building",
    description: "Incremental Building: Support persistent cache, module level cache enabled by default, any module won't be compiled twice until it's changed!",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: CalendarIcon,
    name: "Rich Features",
    description: "Farm support compiling Html, Css, Css Modules, Js/Jsx/Ts/Tsx, Json, Static Assets out of box, support sass, less, postcss, vue, react, solid by official plugins, support lazy compiling, partial bundling and more",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Partial Bundling",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: <></>,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
];


export default function BentoCardFeature() {
  return (
    <>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </>
  );
}
