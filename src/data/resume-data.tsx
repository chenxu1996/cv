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
      badges: [],
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
        "工作主要内容如下：
        1.参与制定确定公司、产品或产品线的战略规划；
        2.收集并调查相关的市场需求、用户需求、产品需求；
        3.驻场参与了解客户需求并整理需求文档 ,参与产品定义；
        4.分析市场、行业、竞争对手发展状况及趋势，提供决策参考，参与决策；
        5.进行产品规划，撰写相关产品需求文档或商业计划等；
        6.参与产品设计，包括交互设计、视觉设计、前端开发、文案设计等；
        7.协调项目实施，包括沟通、会议、项目管理；
        8.参与项目验收，反馈建议，优化产品等；
        9.参与产品的运营、推广等工作。",
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
        "工作主要内容如下：
          1.根据客户需求变更对项目进行二次开发，按照功能组件的详细设计，修复程序BUG,参与与其业务相关的需求变更；
          2.驻场参与了解客户需求并整理需求文档 ,参与产品定义等。",
    },
  ],
  skills: [
    "熟练MySQL,Oracle,MongoDB,Redis等主流数据库操作",
    "擅长数据库表结构设计",
    "擅长使用Python挖掘数据分析数据",
    "擅长Microsoft相关软件操作",
    "擅长搭建企业知识库和工具库",
    "擅长规范化企业业务各部门流程",
    "擅长整合企业资源",
    "擅长项目管理"
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
      title: "维修门店管理系统",
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
      title: "门店采购小程序",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
