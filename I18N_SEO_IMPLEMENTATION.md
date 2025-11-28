# 国际化 SEO 实施方案 - 完整文档

## 🎯 核心目标

实现符合 Google SEO 最佳实践的英语/葡萄牙语国际化，让搜索引擎准确理解网站架构，精准展示给不同语言和地区的用户。

参考：[Google 国际化 SEO 指南](https://developers.google.com/search/docs/specialty/international/localized-versions)

## ✅ 已完成的实施

### 1. 视频嵌入
- ✅ 替换占位符为实际 YouTube 视频
  - `https://www.youtube.com/embed/RAbD9QEmWHw` (Beginner Guide)
  - `https://www.youtube.com/embed/VV2ZZ_y43vk` (Advanced Strategies)

### 2. 国际化配置架构
- ✅ 创建 `lib/i18n-config.ts` - 核心配置
  - 语言代码定义 (`en`, `pt-br`)
  - Hreflang 映射 (`en` → `en`, `pt-br` → `pt-BR`)
  - URL 生成工具函数
- ✅ 创建 `lib/i18n-utils.tsx` - 工具函数
  - `generateHreflangAlternates()` - 生成 Next.js Metadata 格式的 hreflang
  - `generateHreflangLinkTags()` - 生成 HTML link 标签
- ✅ 创建 `components/hreflang-links.tsx` - Hreflang 组件

### 3. 语言路由结构

**选择方案：子目录结构（Subdirectories）**

```
主站（英语/默认）: deadlyblox.com/
葡萄牙语: deadlyblox.com/pt-br/
```

**优势：**
- ✅ **权重集中**：所有语言版本共享主域名权重
- ✅ **易于维护**：同一服务器和代码库
- ✅ **Google 推荐**：最受推荐的国际化结构
- ✅ **快速继承**：新语言版本快速获得主站 SEO 权重

### 4. 已创建的页面
- ✅ `/pt-br/page.tsx` - 葡萄牙语主页（完整内容）
- ✅ 主页 (`app/page.tsx`) - 添加 hreflang 标签

### 5. 语言切换器更新
- ✅ 更新 `LocaleSwitcher` 组件支持 `/pt-br` 路径
- ✅ 自动路径转换（保留当前页面路径）

## 🔧 技术实现细节

### Hreflang 标签实现

**原则：**
1. **双向确认（Reciprocal Links）**：页面 A 指向页面 B，页面 B 也必须指向页面 A
2. **自引用（Self-referencing）**：每个页面包含指向自己的 hreflang 标签
3. **x-default**：未匹配的语言使用默认版本（英语）

**示例：**

对于主页 `/` 和 `/pt-br`，两个页面都包含：

```html
<link rel="alternate" hreflang="en" href="https://www.deadlyblox.com/" />
<link rel="alternate" hreflang="pt-BR" href="https://www.deadlyblox.com/pt-br/" />
<link rel="alternate" hreflang="x-default" href="https://www.deadlyblox.com/" />
```

**实现方式：**

使用 Next.js Metadata API：

```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: generateHreflangAlternates('/'),
  },
}
```

### URL 结构规则

```
英语（默认）：
- 主页: /
- 指南: /guides/monster-bestiary
- 物品: /items
- 怪物: /monsters

葡萄牙语：
- 主页: /pt-br
- 指南: /pt-br/guides/monster-bestiary
- 物品: /pt-br/items
- 怪物: /pt-br/monsters
```

## 📋 待完成的任务

### 优先级 1：核心功能

- [ ] 更新所有现有页面添加 hreflang 标签
  - [ ] `/monsters` 页面
  - [ ] `/classes` 页面
  - [ ] `/guides` 页面
  - [ ] `/items` 页面
  - [ ] 所有动态页面 (`/guides/[slug]`, `/item/[slug]`, etc.)

- [ ] 更新 Sitemap 包含所有语言版本
  - ✅ 已更新 `app/sitemap.ts` 生成多语言路由
  - [ ] 测试 sitemap 生成

- [ ] 创建葡萄牙语版本的子页面
  - [ ] `/pt-br/guides` 列表页
  - [ ] `/pt-br/guides/[slug]` 详情页
  - [ ] `/pt-br/items` 列表页
  - [ ] `/pt-br/monsters` 页面
  - [ ] `/pt-br/classes` 页面

### 优先级 2：内容本地化

- [ ] 本地化所有指南内容（不只是翻译）
- [ ] 本地化所有 FAQ 内容
- [ ] 添加巴西市场特定的关键词
- [ ] 本地化日期格式（巴西格式）
- [ ] 本地化货币格式

### 优先级 3：SEO 优化

- [ ] 在 Google Search Console 中设置 `/pt-br/` 目标国家为巴西
- [ ] 提交包含所有语言版本的 sitemap
- [ ] 测试 hreflang 标签（使用 Google Search Console 的国际化报告）
- [ ] 验证所有页面的 hreflang 标签正确性

## 🚫 明确不做的（遵循 Google 指南）

- ❌ **不强制 IP 跳转**：不要根据用户 IP 自动重定向到语言版本
- ❌ **不使用 URL 参数**：不使用 `?lang=pt` 这样的参数
- ❌ **不使用机器翻译**：所有内容必须人工本地化
- ❌ **不隐藏语言版本**：所有语言版本都应该可以被搜索引擎抓取

## 📊 预期 SEO 效果

1. **流量增长**：捕获巴西市场的葡萄牙语搜索流量
2. **排名提升**：针对性的本地化内容在目标市场排名更好
3. **用户体验**：本地用户看到母语内容，降低跳出率
4. **权重传递**：新语言版本继承主站权重，快速获得排名

## 🔍 验证清单

### Google Search Console 检查

1. ✅ Sitemap 包含所有语言版本
2. ✅ Hreflang 标签正确（使用国际化报告）
3. ✅ 无重复内容警告
4. ✅ 目标国家设置正确

### 技术验证

1. ✅ 所有页面包含 hreflang 标签
2. ✅ 双向链接正确
3. ✅ x-default 设置正确
4. ✅ URL 结构清晰（子目录）

---

**下一步行动：**
1. 更新所有页面添加 hreflang 标签
2. 创建葡萄牙语版本的子页面
3. 本地化所有内容

