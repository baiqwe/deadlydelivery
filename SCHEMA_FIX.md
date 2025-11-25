# Schema 重复问题修复说明

## ❌ 问题

Google Search Console 报错：**"字段'FAQPage'重复"** (Field "FAQPage" repeated)

## 🔍 问题原因

1. **Breadcrumbs 组件也在生成 Schema** - 导致可能的冲突
2. **Schema 结构不完整** - 缺少一些关键字段

## ✅ 修复方案

### 1. 移除 Breadcrumbs 组件中的 Schema 生成

**之前**：`components/breadcrumbs.tsx` 组件内部生成 BreadcrumbList Schema

**现在**：
- Breadcrumbs 组件只负责视觉显示
- Schema 在页面级别统一管理，避免重复

### 2. 优化主页 Schema 结构

#### FAQPage Schema
- ✅ 从 3 个问题扩展到 5 个问题
- ✅ 问题更详细、更符合用户搜索意图
- ✅ 答案更完整

#### VideoGame Schema
- ✅ 添加 `applicationSubCategory`: "Roblox Game"
- ✅ 添加 `gamePlatform`: ["Roblox"]
- ✅ 添加 `genre`: ["Adventure", "Horror", "Survival"]
- ✅ 添加 `image` 字段（图标 URL）
- ✅ 增强 `offers` 字段（添加 availability 和 url）

#### BreadcrumbList Schema
- ✅ 完整的层级结构：Home > Games > Deadly Delivery > Codes

### 3. Guide 页面独立 Schema

Guide 页面有自己的 BreadcrumbList Schema，路径为：
- Home > Games > Deadly Delivery > Guide

---

## 📝 修改的文件

1. **`app/page.tsx`**：
   - 增强 `generateSchema()` 函数
   - 添加 BreadcrumbList Schema
   - 优化 FAQPage Schema（5 个问题）
   - 增强 VideoGame Schema

2. **`components/breadcrumbs.tsx`**：
   - 移除 Schema 生成逻辑
   - 只保留视觉导航组件

3. **`app/guide/page.tsx`**：
   - 添加独立的 BreadcrumbList Schema

---

## 🧪 验证方法

### 1. Google Rich Results Test
访问：https://search.google.com/test/rich-results
输入：`https://www.deadlyblox.com`

**应通过验证**：
- ✅ FAQPage Schema（无重复错误）
- ✅ VideoGame Schema
- ✅ BreadcrumbList Schema

### 2. 检查页面源码
查看 HTML 源码，应该看到：
- ✅ 只有一个 FAQPage Schema
- ✅ 一个 VideoGame Schema
- ✅ 一个 BreadcrumbList Schema（主页）
- ✅ 没有重复的 Schema 定义

### 3. Schema 结构验证
使用在线工具验证：
- https://validator.schema.org/
- https://search.google.com/test/rich-results

---

## ✅ 修复完成

- ✅ FAQPage Schema 不再重复
- ✅ 所有 Schema 结构完整
- ✅ 编译通过
- ✅ 准备提交到 Google Search Console 重新验证

---

## 📊 Schema 详情

### FAQPage Schema（5 个问题）
1. How do I redeem Deadly Delivery codes?
2. What are the latest Deadly Delivery codes?
3. Why isn't my Deadly Delivery code working?
4. How often are new Deadly Delivery codes released?
5. What rewards can I get from Deadly Delivery codes?

### VideoGame Schema
- 完整的游戏信息
- 平台：Roblox
- 类型：Adventure, Horror, Survival
- 游戏链接：https://www.roblox.com/games/125810438250765/Deadly-Delivery

### BreadcrumbList Schema
- Home > Games > Deadly Delivery > Codes

