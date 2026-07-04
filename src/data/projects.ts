export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  role: string;
  tags: string[];
  achievements: string[];
  links: { label: string; url: string }[];
  highlight: boolean;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "市场调研与数据分析项目",
    subtitle: "课程实训 · 完整的数据驱动调研流程",
    role: "数据分析",
    tags: ["Python", "数据可视化", "市场调研", "报告撰写"],
    highlight: true,
    description: "使用Python完成市场调研数据的清洗、分析与可视化，输出完整调研报告。",
    fullDescription: "这是一个完整的市场调研与数据分析实训项目。我使用Python及相关工具对调研数据进行清洗、处理与可视化分析，构建分析模型对调研变量关系进行验证与解释，最终输出完整调研报告用于课程展示与答辩。项目涵盖从数据采集、清洗、分析到报告输出的全流程，锻炼了数据思维与分析能力。",
    achievements: ["完成多维度数据清洗与预处理", "使用Python实现数据可视化分析", "构建回归模型验证变量关系", "输出完整调研报告并通过答辩"],
    links: [],
  },
  {
    id: "project-2",
    title: "多领域研究与建模实践",
    subtitle: "人力资源 | 股票投资 | 经济博弈 | 网络科学",
    role: "学术研究",
    tags: ["模型分析", "论文撰写", "跨学科研究"],
    highlight: true,
    description: "跨领域课程研究，涵盖人力资源、股票投资、经济博弈、网络科学四大方向。",
    fullDescription: "这是一系列跨领域的课程研究实践，涵盖人力资源管理、股票投资分析、经济博弈模型、网络科学四个方向。我运用模型思维分析变量关系与结构，结合真实案例进行理论验证与解释，完成了多篇课程论文与分析报告。这个项目锻炼了我快速学习新领域知识、运用模型分析问题的能力。",
    achievements: ["完成4个跨领域研究课题", "运用博弈论模型分析经济决策", "使用网络科学方法分析人际关系结构", "产出多篇高质量课程论文"],
    links: [],
  },
  {
    id: "project-3",
    title: "ERP & 跨境电商沙盘模拟",
    subtitle: "企业经营模拟与运营决策实战",
    role: "运营决策",
    tags: ["ERP沙盘", "跨境电商", "经营决策", "团队协作"],
    highlight: false,
    description: "企业经营模拟实战，负责选品、定价与资源配置决策。",
    fullDescription: "参与企业经营模拟沙盘实训，涵盖ERP沙盘与跨境电商沙盘两个模块。在模拟环境中负责选品策略、定价策略与资源配置等关键经营决策。通过分析市场数据与竞争对手策略，制定差异化选品与定价方案，最终小组取得较优成绩。",
    achievements: ["负责选品与定价核心决策", "小组取得班级前列成绩", "掌握ERP系统经营逻辑", "理解跨境电商运营全流程"],
    links: [],
  },
  {
    id: "project-4",
    title: "智慧旅游AI Agent",
    subtitle: "基于VibeCoding平台的AI原型系统",
    role: "AI开发",
    tags: ["VibeCoding", "AI Agent", "Python", "原型设计"],
    highlight: true,
    description: "基于VibeCoding平台构建智慧旅游AI Agent原型系统。",
    fullDescription: "这是一个探索AI在旅游行业应用的实践项目。我使用VibeCoding平台实现Python代码编写与数据可视化，构建了智慧旅游Agent原型系统。项目融合ChatGPT等AI工具完成基础任务自动化与信息处理流程设计，探索了AI Agent在旅游推荐、行程规划等场景的应用可能。",
    achievements: ["构建智慧旅游Agent原型系统", "使用VibeCoding完成代码编写与可视化", "融合AI工具实现任务自动化", "完成信息处理流程设计"],
    links: [],
  },
  {
    id: "project-5",
    title: "个人网站搭建",
    subtitle: "从0到1构建个人品牌展示站",
    role: "全栈开发",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    highlight: true,
    description: "从0到1构建的个人品牌展示网站，包含完整的交互功能。",
    fullDescription: "使用Next.js + Tailwind CSS + Framer Motion搭建的个人品牌展示网站。包含个人信息展示、项目作品集、技能图谱、每日名言、留言互动等功能模块。从信息架构设计到UI交互实现全流程独立完成，实现了响应式设计、明暗主题切换、流畅的交互动画等特性。",
    achievements: ["独立完成从设计到开发全流程", "实现响应式设计与明暗主题切换", "集成留言板与名言轮播功能", "使用Framer Motion实现流畅动画"],
    links: [{"label": "在线访问", "url": "https://github.com"}],
  },
];
