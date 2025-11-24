# 快速切换到匿名评论系统

## 🚀 两种方案供选择

### 方案 A：简单客户端评论（5 分钟，立即可用）

**特点**：
- ✅ 完全匿名，无需登录
- ✅ 无需任何服务器配置
- ⚠️ 评论只存在浏览器本地（不会同步）

**快速切换步骤**：

1. 我已经创建了 `components/comments-simple.tsx`
2. 只需要替换导入：
   ```typescript
   // 在 app/page.tsx 中
   import { Comments } from "@/components/comments-simple" // 替换这一行
   ```

**适合场景**：快速测试、演示

---

### 方案 B：Waline（15 分钟，生产级）

**特点**：
- ✅ 完全匿名，无需登录
- ✅ 评论永久保存（存储在云端）
- ✅ 支持回复、点赞、反垃圾
- ✅ 可部署到 Vercel（免费）

**部署步骤**：

#### 1. 部署 Waline 服务端

**最快方式 - 使用 Vercel 模板**：

1. 访问：https://vercel.com/new
2. 点击 "Deploy" 或搜索 "waline"
3. 使用模板：`lizheming/waline`
4. 一键部署

**或者手动部署**：

1. Fork：https://github.com/walinejs/waline/tree/main/example
2. 导入到 Vercel
3. 部署

#### 2. 创建 LeanCloud 应用（免费）

1. 访问：https://console.leancloud.app/
2. 注册账号（免费）
3. 创建应用（选择免费版）
4. 获取凭证：
   - 进入 "设置" → "应用凭证"
   - 复制 `App ID`
   - 复制 `App Key`

#### 3. 配置 Vercel 环境变量

在 Vercel 项目设置中：
```
LEANCLOUD_APP_ID=你的AppID
LEANCLOUD_APP_KEY=你的AppKey
```

#### 4. 获取服务端 URL

部署完成后，你会得到一个 URL，例如：
```
https://your-waline.vercel.app
```

#### 5. 更新前端代码

我会帮你：
1. 安装 `@waline/client` 包
2. 更新评论组件
3. 配置服务端 URL

---

## 📝 你想选择哪个方案？

**回复我**：
- **"方案A"** - 简单客户端评论（立即切换，5分钟）
- **"方案B"** - Waline（我帮你完整部署，15分钟）

或者你可以告诉我你的偏好，我会帮你选择最合适的方案！

