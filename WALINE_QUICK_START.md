# Waline 快速开始指南

## ✅ 已完成

1. ✅ 已安装 `@waline/client@^3.8.0`
2. ✅ 已更新评论组件代码
3. ✅ 配置为完全匿名评论（无需登录）

---

## 🧪 当前状态

**现在就可以测试！** 代码已经配置好，使用 Waline 官方演示服务 `https://waline.js.org`。

### 本地测试

```bash
npm run dev
```

访问 http://localhost:3002，滚动到页面底部：
- ✅ 可以看到评论区域
- ✅ 可以匿名发表评论（无需登录）
- ✅ 可选登录 GitHub/Twitter

---

## 🚀 生产部署（推荐）

虽然演示服务可以测试，但生产环境建议部署自己的服务端。

### 快速部署步骤（约 15 分钟）

#### 1. 部署 Waline 服务端到 Vercel（5 分钟）

1. 访问：https://vercel.com/new/clone?repository-url=https://github.com/walinejs/waline/tree/main/example
2. 点击 "Deploy" 按钮
3. 等待部署完成
4. 记住你的 Vercel URL（例如：`https://your-waline.vercel.app`）

#### 2. 创建 LeanCloud 应用（5 分钟）

1. 访问：https://console.leancloud.app/
2. 注册/登录（免费）
3. 创建应用（选择免费版）
4. 在"设置" → "应用凭证"中复制：
   - `App ID`
   - `App Key`

#### 3. 配置 Vercel 环境变量（2 分钟）

在 Vercel 项目设置中添加：
```
LEANCLOUD_APP_ID=你的AppID
LEANCLOUD_APP_KEY=你的AppKey
```
然后点击 "Redeploy"。

#### 4. 更新网站配置（3 分钟）

在 Vercel 的项目设置中添加环境变量：
```
NEXT_PUBLIC_WALINE_SERVER_URL=https://your-waline.vercel.app
```

或者在本地的 `.env.local` 文件中添加（仅用于本地测试）。

完成！评论系统将使用你自己的服务端。

---

## 🎯 功能特性

- ✅ **完全匿名** - 无需任何登录
- ✅ **可选登录** - 支持 GitHub/Twitter
- ✅ **永久保存** - 评论存储在 LeanCloud
- ✅ **深色主题** - 自动适配
- ✅ **表情反应** - 支持点赞和表情
- ✅ **反垃圾** - 内置反垃圾保护

---

## 📝 详细文档

- 完整配置指南：`WALINE_CONFIG.md`
- 系统对比：`COMMENT_SYSTEMS_COMPARISON.md`
- Waline 官方文档：https://waline.js.org

---

## 🆘 需要帮助？

1. 查看 `WALINE_CONFIG.md` 获取详细配置步骤
2. 查看 Waline 官方文档：https://waline.js.org
3. 检查浏览器控制台的错误信息

