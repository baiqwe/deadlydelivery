# Waline 评论系统配置指南

## ✅ 已完成的配置

1. ✅ 安装了 `@waline/client@^3.8.0`
2. ✅ 更新了 `components/comments.tsx` 组件
3. ✅ 配置为支持匿名评论（无需登录）

---

## 🚀 下一步：部署 Waline 服务端

当前代码使用官方演示服务 `https://waline.js.org`（用于测试）。

**生产环境需要部署自己的服务端**，有两个选择：

### 方案 A：使用 Vercel 部署（推荐，免费）

1. **访问 Vercel 部署页面**：
   - 访问：https://vercel.com/new/clone?repository-url=https://github.com/walinejs/waline/tree/main/example
   - 或手动导入：https://github.com/walinejs/waline/tree/main/example

2. **部署步骤**：
   - 点击 "Deploy" 按钮
   - 等待部署完成（约 2-3 分钟）
   - 获得服务端 URL（例如：`https://your-waline.vercel.app`）

3. **创建 LeanCloud 应用**（免费）：
   - 访问：https://console.leancloud.app/
   - 注册/登录账号
   - 创建应用（选择免费版）
   - 在"设置" → "应用凭证"中获取：
     - `App ID`
     - `App Key`

4. **配置 Vercel 环境变量**：
   在 Vercel 项目设置中添加：
   ```
   LEANCLOUD_APP_ID=你的AppID
   LEANCLOUD_APP_KEY=你的AppKey
   ```
   然后重新部署。

5. **更新前端配置**：
   在 `.env.local` 文件中添加：
   ```
   NEXT_PUBLIC_WALINE_SERVER_URL=https://your-waline.vercel.app
   ```
   或者直接在 `components/comments.tsx` 中修改 `serverURL`。

---

### 方案 B：使用 Docker 部署

如果你有自己的服务器：

1. 创建 `docker-compose.yml`：
```yaml
version: '3'
services:
  waline:
    image: lizheming/waline:latest
    restart: always
    ports:
      - "8360:8360"
    environment:
      - LEANCLOUD_APP_ID=你的AppID
      - LEANCLOUD_APP_KEY=你的AppKey
```

2. 运行：
```bash
docker-compose up -d
```

---

## 📝 当前配置说明

### 匿名评论设置

```typescript
requiredMeta: [] // 允许完全匿名评论（不需要任何必填字段）
login: 'enable'  // 可选：允许用户登录（但不强制）
```

这意味着：
- ✅ 用户**不需要登录**即可评论
- ✅ 用户**不需要填写邮箱/网站**等
- ✅ 可选：用户可以选择用 GitHub/Twitter 登录获得更好的身份识别

### 其他配置

- `dark: 'body.dark'` - 自动适配深色主题
- `reaction: true` - 启用表情反应
- `pageSize: 10` - 每页显示 10 条评论
- `lang: 'en'` - 英文界面

---

## 🧪 测试

1. **本地测试**（使用官方演示服务）：
   ```bash
   npm run dev
   ```
   访问 http://localhost:3002，滚动到底部查看评论区域。

2. **测试匿名评论**：
   - 不需要登录即可发表评论
   - 可以填写昵称（可选）
   - 评论会保存在 Waline 服务端

---

## ⚠️ 注意事项

1. **官方演示服务限制**：
   - `https://waline.js.org` 是演示服务
   - 可能有流量限制
   - 不建议用于生产环境

2. **生产环境建议**：
   - 部署自己的 Waline 服务端
   - 配置 LeanCloud 数据库
   - 设置环境变量 `NEXT_PUBLIC_WALINE_SERVER_URL`

3. **安全性**：
   - Waline 默认有反垃圾评论功能
   - 建议配置邮件通知（可选）
   - 建议配置管理后台（可选）

---

## 🎯 完成清单

- [ ] 部署 Waline 服务端到 Vercel
- [ ] 创建 LeanCloud 应用并获取凭证
- [ ] 配置 Vercel 环境变量
- [ ] 更新 `NEXT_PUBLIC_WALINE_SERVER_URL` 环境变量
- [ ] 测试匿名评论功能
- [ ] 测试登录评论功能（可选）

---

## 📚 相关文档

- Waline 官方文档：https://waline.js.org
- Vercel 部署指南：https://waline.js.org/guide/deploy/vercel.html
- LeanCloud 控制台：https://console.leancloud.app/

---

## 🆘 遇到问题？

1. **评论不显示**：
   - 检查 `serverURL` 是否正确
   - 检查浏览器控制台是否有错误
   - 确认服务端已正确部署

2. **无法发表评论**：
   - 检查 LeanCloud 配置是否正确
   - 检查服务端日志

3. **需要帮助**：
   - 查看 Waline 文档
   - 检查 GitHub Issues

