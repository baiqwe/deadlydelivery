export const siteConfig = {
  name: "DeadlyBlox",
  description: "The ultimate database for Deadly Delivery codes, vehicles, weapons, items, and survival strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.deadlyblox.com",
  ogImage: "https://www.deadlyblox.com/icon-512.png",
  themeColor: "primary", // Using our dark horror theme
  links: {
    twitter: "https://twitter.com/deadlyblox",
    github: "https://github.com/baiqwe/deadlydelivery",
  },
  // 导航菜单 - 保留原有的 Codes，添加新的 Wiki 页面
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Codes", href: "/codes" }, // 独立的 Codes 页面
    { title: "Monsters", href: "/monsters" }, // 新增：怪物图鉴
    { title: "Classes", href: "/classes" }, // 新增：职业层级列表
    { title: "Items", href: "/items" }, // 新增：物品数据库
    { title: "Guides", href: "/guides" }, // 新增：指南页面
    { title: "Wiki", href: "/wiki" }, // 保留现有的 Wiki 主页
    { title: "About", href: "/about" }, // About Us 页面
  ],
}

