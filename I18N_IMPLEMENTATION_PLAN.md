# 国际化 (i18n) 实施方案 - SEO 优化版

## 📋 实施概览

基于 Google SEO 最佳实践，实现完整的英语/葡萄牙语国际化架构。

## ✅ 第一阶段：视频替换（已完成）

- ✅ 替换视频占位符为实际 YouTube 视频：
  - https://www.youtube.com/watch?v=RAbD9QEmWHw (Beginner Guide)
  - https://www.youtube.com/embed/VV2ZZ_y43vk (Advanced Strategies)

## 🏗️ 第二阶段：URL 结构设计

### 选择的方案：子目录结构（Subdirectories）

```
主站（英语/默认）: deadlyblox.com/
葡萄牙语: deadlyblox.com/pt-br/
```

**优势：**
- ✅ 权重集中：所有语言版本共享主域名权重
- ✅ 易于维护：同一服务器和代码库
- ✅ Google 推荐：最受推荐的国际化结构
- ✅ 快速继承：新语言版本快速获得主站 SEO 权重

## 🔧 第三阶段：技术实现

### 1. Hreflang 标签系统

**原则：**
- ✅ **双向确认（Reciprocal Links）**：页面 A 指向页面 B，页面 B 也必须指向页面 A
- ✅ **自引用（Self-referencing）**：每个页面包含指向自己的 hreflang 标签
- ✅ **x-default**：未匹配的语言使用默认版本（英语）

**实现方式：**
- 在 `lib/i18n-config.ts` 中创建配置
- 使用 Next.js Metadata API 生成 hreflang alternates
- 所有页面自动包含正确的 hreflang 标签

### 2. 语言路由结构

```
app/
├── page.tsx (默认英语主页 /)
├── [locale]/
│   ├── page.tsx (多语言主页：/en, /pt-br)
│   ├── guides/
│   ├── items/
│   └── ...
├── pt-br/ (葡萄牙语特定页面，向后兼容)
└── ...
```

### 3. 语言切换器

- ✅ 用户手动选择语言（不强制 IP 跳转）
- ✅ 保存用户偏好（Cookie + LocalStorage）
- ✅ 可选：IP 检测后友好提示（不强制重定向）

## 📝 第四阶段：内容本地化策略

### 本地化 vs 翻译

**❌ 错误做法：**
- 直接翻译英文关键词
- 使用机器翻译
- 只替换文本，保留英文格式

**✅ 正确做法：**
- 针对巴西市场的关键词研究
- 本地化货币、日期格式
- 文化适应的内容
- 巴西用户常用的表达方式

### 关键词示例

**英语：**
- "Deadly Delivery codes"
- "How to redeem codes"
- "Best weapons"

**葡萄牙语（巴西）：**
- "Códigos de Deadly Delivery"
- "Como resgatar códigos"
- "Melhores armas"

## 🔍 第五阶段：SEO 优化细节

### 1. Sitemap 更新

更新 `app/sitemap.ts` 包含所有语言版本：
- `/` (英语)
- `/pt-br/` (葡萄牙语)
- `/guides/monster-bestiary` → `/pt-br/guides/monster-bestiary`
- 等等...

### 2. Robots.txt

无需修改，允许所有语言版本被抓取

### 3. Google Search Console

- 为 `/pt-br/` 设置目标国家：巴西
- 提交包含所有语言版本的 sitemap

## 📊 实施步骤清单

### 立即实施（Phase 1）

- [x] 替换视频占位符
- [ ] 更新主页添加 hreflang 标签
- [ ] 创建 `/pt-br` 路由（替换现有的 `/pt`）
- [ ] 更新语言切换器支持 `/pt-br`
- [ ] 更新 sitemap 包含所有语言版本

### 后续实施（Phase 2）

- [ ] 将所有页面迁移到 `[locale]` 路由结构
- [ ] 本地化所有内容（不只是翻译）
- [ ] 创建葡萄牙语版本的指南和 Wiki 页面
- [ ] 优化葡萄牙语关键词策略

## 🎯 预期 SEO 效果

1. **流量增长**：捕获巴西市场的葡萄牙语搜索流量
2. **排名提升**：针对性的本地化内容在目标市场排名更好
3. **用户体验**：本地用户看到母语内容，降低跳出率
4. **权重传递**：新语言版本继承主站权重，快速获得排名

---

**参考资源：**
- [Google 国际化 SEO 指南](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Hreflang 标签最佳实践](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites)

