# Waline 匿名评论系统配置指南

## 🎯 为什么选择 Waline？

✅ **完全匿名** - 用户无需任何登录即可评论  
✅ **可选登录** - 支持 GitHub/Twitter 登录（但不强制）  
✅ **功能强大** - 回复、点赞、邮件通知、反垃圾  
✅ **免费部署** - 可部署到 Vercel（免费）  
✅ **中文友好** - 中国团队开发

---

## 📦 快速部署方案

### 方案 A：使用 Vercel 一键部署（推荐）

**步骤 1：部署 Waline 服务端**

1. 访问：https://github.com/walinejs/waline
2. 点击 "Deploy with Vercel" 按钮
3. 或者手动：
   - Fork https://github.com/walinejs/waline/tree/main/example
   - 导入到 Vercel
   - 部署

**步骤 2：配置环境变量**

在 Vercel 项目设置中添加：
```
LEANCLOUD_APP_ID=your_app_id
LEANCLOUD_APP_KEY=your_app_key
```

**步骤 3：创建 LeanCloud 应用（免费）**

1. 注册账号：https://console.leancloud.app/
2. 创建应用（免费版即可）
3. 在"设置" → "应用凭证"中获取：
   - App ID
   - App Key
4. 填入 Vercel 环境变量

**步骤 4：更新前端代码**

我会帮你更新 `components/comments.tsx` 文件。

---

### 方案 B：使用官方演示服务（最快测试）

如果你想先快速测试，可以使用 Waline 官方演示服务，无需部署：

```typescript
serverURL: 'https://waline.js.org'
```

但建议最终部署自己的服务。

---

## 🚀 我需要帮你做什么？

如果你选择 Waline，我会：

1. ✅ 安装 `@waline/client` 依赖
2. ✅ 更新评论组件代码
3. ✅ 配置服务端 URL
4. ✅ 测试匿名评论功能

**选择哪个方案？**
- A: 自己部署（更稳定，完全控制）
- B: 先测试官方演示（最快，但可能有流量限制）

告诉我你的选择，我会立即帮你实现！

