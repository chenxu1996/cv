import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "xxxxx",
  initials: "BJ",
  location: "xxxxxxxxxxxx",
  locationLink: "http://www.gditu.net/shenzhen-longgang.html",
  about:
    "xxxxxxxx",
  summary:
    "xxxxxxxx",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://xurun.site",
  contact: {
    email: "xxxxxxxxx",
    tel: "+xxxxxxxxx",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "xxxxxx",
      degree: "xxxxxxxx",
      start: "2017",
      end: "2021",
    },
  {
      school: "xxxxxxxx",
      degree: "xxxx",
      start: "2016",
      end: "2018",
    },
      {
      school: "xxxxxx",
      degree: "xxx",
      start: "2022",
      end: "2023",
    },
  ],
  work: [
    {
      company: "xxxxxxxxxx",
      link: "https://parabol.co",
      badges: [],
      title: "项目经理",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "xxxxxx",
    },
    {
      company: "xxxx",
      link: "https://clevertech.biz",
      badges: [],
      title: "产品经理",
      logo: ClevertechLogo,
      start: "2019",
      end: "2020",
      description:
        "xxxxxxxxxxx",
    },
    {
      company: "xxxxxxxx",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "xxxxxxxx",
      logo: JojoMobileLogo,
      start: "2018",
      end: "2019",
      description:
        "xxxxxxxxxx",
    },
  ],
  skills: [
    "xxxxxxxxxxx"
  ],
  projects: [
    {
      title: "xxxxxxx",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "xxxxxxxxx",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "xxxxxxxxxx",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "xxxxxxxxxx",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "xxxxxxxxx",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
   {
      title: "xxxxxxxxx",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
