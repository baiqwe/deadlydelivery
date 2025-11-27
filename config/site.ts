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
    { title: "Codes", href: "/" }, // 主页就是 Codes 页面
    { title: "Items", href: "/items" }, // 新增：物品数据库
    { title: "Weapons", href: "/wiki/weapons" }, // 保留现有的武器页面
    { title: "Vehicles", href: "/wiki/vehicles" }, // 保留现有的载具页面
    { title: "Guides", href: "/guides" }, // 新增：指南页面
    { title: "Locations", href: "/locations" }, // 新增：地点数据库
    { title: "Quests", href: "/quests" }, // 新增：任务系统
    { title: "Wiki", href: "/wiki" }, // 保留现有的 Wiki 主页
  ],
}

