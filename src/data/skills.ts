export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export const skillCategories: SkillCategory[] = [
  {
    category: "核心能力",
    items: [
      { name: "思考与复盘", level: 95 },
      { name: "沟通协调", level: 88 },
      { name: "自我启动与规划", level: 90 },
      { name: "调研与分析", level: 85 },
    ],
  },
  {
    category: "工具技能",
    items: [
      { name: "Office办公", level: 80 },
      { name: "Python基础", level: 65 },
      { name: "数据分析与可视化", level: 70 },
      { name: "剪映视频剪辑", level: 60 },
    ],
  },
  {
    category: "AI与新技术",
    items: [
      { name: "ChatGPT 应用", level: 85 },
      { name: "Coze 应用", level: 70 },
      { name: "VibeCoding", level: 65 },
      { name: "AI Agent 设计", level: 60 },
    ],
  },
  {
    category: "电商与运营",
    items: [
      { name: "电商运营基础", level: 75 },
      { name: "ERP沙盘模拟", level: 70 },
      { name: "跨境电商", level: 65 },
      { name: "市场调研", level: 80 },
    ],
  },
];

export const skillTags = [
  "思考能力", "沟通协调", "自我启动", "复盘反思",
  "Office", "Python", "数据分析", "可视化",
  "ChatGPT", "Coze", "VibeCoding", "AI Agent",
  "电商运营", "ERP沙盘", "跨境电商", "市场调研",
  "剪映", "视频剪辑", "报告撰写", "学术研究",
  "心理学", "商业洞察", "人力资源管理", "经济分析",
];
