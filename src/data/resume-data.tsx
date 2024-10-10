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
  name: "许 润",
  initials: "BJ",
  location: "龙岗区, 深圳市, 中国",
  locationLink: "http://www.gditu.net/shenzhen-longgang.html",
  about:
    "项目经理（在职中--暂不考虑） 全职",
  summary:
    "作为项目经理，我惯以结果为导向管理公司项目，遇到问题优先解决问题,擅长快速分析问题并找出KP或技术方案。在以往工作经历中，我作为甲方乙方第三方等不同角色角度去沟通分析业务场景并转化成技术文档以及通俗语言对项目组输出，并友好妥善的整合供应商到终端等一些列复杂业务流程的各方用户及资源，获得各方一致好评。在公司对外采购软件时，我坚持以公司利益最大化为原则，与多个意向方进行谈判，最终为公司争取了最优方案。平时我喜欢浏览搜索国内外最新技术并进行简单尝试，思考是否能为公司所用，提高大家工作提高效率，或者能优化项目技术组成或增加营销点，我对工作的理解就是尽可能用工具减少一切不动脑子的工作多花一些时间去思考，会思考才是人类不被AI替代的核心竞争力。",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://xurun.site",
  contact: {
    email: "xurunonly@163.com",
    tel: "+8615021002981",
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
      school: "安徽农业大学",
      degree: "电子信息工程",
      start: "2017",
      end: "2021",
    },
  {
      school: "北大青鸟培训机构",
      degree: "Java班",
      start: "2016",
      end: "2018",
    },
      {
      school: "光环国际",
      degree: "PMP",
      start: "2022",
      end: "2023",
    },
  ],
  work: [
    {
      company: "上海XXXX有限公司",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "项目经理",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "上海昌岛科技有限公司",
      link: "https://clevertech.biz",
      badges: [],
      title: "产品经理",
      logo: ClevertechLogo,
      start: "2019",
      end: "2020",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "中科软科技股份有限公司",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Java 开发工程师",
      logo: JojoMobileLogo,
      start: "2018",
      end: "2019",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
  ],
  skills: [
    "MySQL",
    "Springboot",
    "Mybatis",
    "VUE",
    "Next",
    "Maven",
  ],
  projects: [
    {
      title: "民生保险核心系统",
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
      title: "病理科室流程管理软件",
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
      title: "保险跟单核保核赔系统",
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
      title: "进销存管理系统",
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
      title: "维修管理系统",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
  ],
} as const;
