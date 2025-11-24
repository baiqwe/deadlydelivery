# Giscus 评论系统详细配置指南（图文详解版）

## 📋 前置准备清单

在开始配置之前，确保你已经：
- ✅ 有 GitHub 账号
- ✅ 仓库 `baiqwe/deadlydelivery` 已创建
- ✅ 有权限管理该仓库的设置

---

## 第一步：启用 GitHub Discussions

### 详细步骤

1. **访问仓库设置页面**：
   ```
   https://github.com/baiqwe/deadlydelivery/settings
   ```

2. **找到 Features 部分**：
   - 向下滚动到页面中部的 "Features" 区域
   - 你会看到多个复选框选项

3. **启用 Discussions**：
   - 找到 "Discussions" 复选框
   - ✅ 勾选它
   - 页面会自动保存

4. **创建第一个讨论（可选但推荐）**：
   - 访问：https://github.com/baiqwe/deadlydelivery/discussions
   - 点击 "New discussion" 按钮
   - 创建一个测试讨论（标题可以是 "Welcome"）
   - 这会帮助你熟悉 Discussions 界面

---

## 第二步：安装 Giscus App

### 详细步骤

1. **访问 Giscus App 页面**：
   ```
   https://github.com/apps/giscus
   ```

2. **点击 "Install" 或 "Configure" 按钮**：
   - 如果你还没安装过，会显示 "Install"
   - 如果已安装，会显示 "Configure"

3. **选择仓库**：
   - 在 "Only select repositories" 选项下
   - 从下拉菜单中选择：`baiqwe/deadlydelivery`
   - 或者选择 "All repositories"（如果你想要）

4. **确认安装**：
   - 点击绿色的 "Install" 按钮
   - GitHub 会要求你确认权限，点击 "Approve" 或 "授权"

---

## 第三步：在 Giscus.app 配置（最详细的部分）

### 3.1 访问配置页面

打开浏览器，访问：
```
https://giscus.app
```

你会看到一个表单，包含多个输入框和下拉菜单。

---

### 3.2 逐步填写配置表单

#### 📝 字段 1：Repository（仓库）

**如何填写**：
```
baiqwe/deadlydelivery
```

**填写说明**：
- 格式：`用户名/仓库名`
- 输入后，Giscus 会自动验证仓库是否存在
- 如果出现错误，检查：
  - 仓库是否为公开（Public）仓库
  - 仓库名称拼写是否正确

**示例截图位置**：
- 在页面最上方的 "Repository" 输入框

---

#### 📝 字段 2：Repository ID（仓库 ID）⚠️ 重要

**如何填写**：
- ⚠️ **这个字段会自动填充，不要手动输入**
- 当你填写了 Repository 后，这里会自动显示一串代码

**格式示例**：
```
R_kgDOLhAbc123Def456
```

**如果显示为空**：
1. 确认 Repository 字段已正确填写
2. 点击 Repository 输入框旁边的刷新图标
3. 等待几秒钟让 Giscus 检测
4. 如果仍然为空，检查仓库是否为 Public

**在哪里找到**：
- 在 Repository 字段下方
- 或者点击 "Get repository ID" 链接手动获取

---

#### 📝 字段 3：Discussion Category（讨论分类）

**第一步：在 GitHub 创建分类**

1. 访问 Discussions 页面：
   ```
   https://github.com/baiqwe/deadlydelivery/discussions
   ```

2. 如果这是第一次使用 Discussions：
   - 点击 "Set up discussions" 或 "Get started"
   - 会跳转到分类设置页面

3. 创建新分类：
   - 点击 "Edit category" 或 "Manage categories" 按钮
   - 点击 "New category" 或 "+" 按钮
   - 填写分类信息：
     ```
     分类名称：Announcements
     分类描述：General announcements and discussions
     分类图标：💬（可选）
     ```
   - 点击 "Create" 或 "保存"

4. 确认分类已创建：
   - 返回 Discussions 主页，应该能看到 "Announcements" 分类

**第二步：在 Giscus 选择分类**

1. 回到 Giscus 配置页面（https://giscus.app）

2. 在 "Discussion category" 下拉菜单中：
   - 点击下拉菜单
   - 选择：`Announcements`
   - 如果看不到，刷新页面

**如果下拉菜单是空的**：
- 等待几秒钟
- 刷新页面
- 确认 GitHub Discussions 已启用
- 确认已创建至少一个分类

---

#### 📝 字段 4：Category ID（分类 ID）⚠️ 重要

**如何填写**：
- ⚠️ **这个字段会自动填充，不要手动输入**
- 当你选择了 Category 后，这里会自动显示

**格式示例**：
```
DIC_kwDOLhXyz789Abc012
```

**如果显示为空**：
1. 确认 Category 字段已正确选择
2. 点击 Category 下拉菜单，重新选择一次
3. 如果仍然为空，检查：
   - Discussions 是否已启用
   - Category 是否已创建

---

#### 📝 字段 5：Page ↔️ Discussions mapping（页面映射）

**如何选择**：
- 选择：`pathname`（第二个选项，推荐）

**各选项说明**：
- `url` - 使用完整 URL 映射（每个完整 URL 一个讨论）
- `pathname` - 使用路径映射（每个路径一个讨论）✅ **推荐**
- `title` - 使用页面标题映射
- `og:title` - 使用 Open Graph 标题映射
- `issue-number` - 使用 Issue 编号映射

**为什么选择 pathname**：
- `/` 首页 → 一个讨论
- `/guide` 指南页 → 另一个讨论
- 简单清晰，易于管理

---

#### 📝 字段 6：Theme（主题）

**如何选择**：
- 选择：`Dark` 或 `dark`（第二个选项）

**各选项说明**：
- `light` - 浅色主题
- `dark` - 深色主题 ✅ **推荐（匹配你的网站）**
- `transparent_dark` - 透明深色
- `preferred_color_scheme` - 跟随系统主题
- `noborder_light` / `noborder_dark` - 无边框版本

**为什么选择 dark**：
- 你的网站使用深色主题
- 评论系统会与网站风格一致

---

#### 📝 字段 7：Input position（输入框位置）

**如何选择**：
- 选择：`Bottom`（第二个选项）

**各选项说明**：
- `top` - 输入框在评论列表上方
- `bottom` - 输入框在评论列表下方 ✅ **推荐**

---

#### 📝 字段 8：Enable reactions（启用反应）

**如何选择**：
- 勾选：`Yes` 或 `✓`（复选框）

**说明**：
- 允许用户对评论点赞、添加表情反应
- 增加互动性

---

### 3.3 获取配置代码

填写完所有字段后：

1. **查看页面下方的代码预览**：
   - 页面下方会显示一段 HTML `<script>` 代码
   - 代码中包含了所有配置信息

2. **复制两个重要的 ID**：
   
   找到这两行：
   ```html
   data-repo-id="R_kgDOLhXXXXX"
   data-category-id="DIC_kwDOLhXXXXX"
   ```
   
   复制这两个值（包括引号内的内容）：
   - `R_kgDOLhXXXXX` ← Repository ID
   - `DIC_kwDOLhXXXXX` ← Category ID

3. **记录这些 ID**：
   - 保存在文本文件或记事本中
   - 下一步会用到

---

## 第四步：更新代码文件

### 4.1 打开文件

在编辑器（Cursor/VSCode）中打开：
```
components/comments.tsx
```

### 4.2 找到需要修改的行

找到这两个地方（大约在第 18 行和第 20 行）：

```typescript
// 第 18 行
script.setAttribute("data-repo-id", "R_kgDOLhXXXXX") // ← 这里需要替换

// 第 20 行  
script.setAttribute("data-category-id", "DIC_kwDOLhXXXXX") // ← 这里需要替换
```

### 4.3 替换为实际值

**示例**：
假设你在 Giscus 配置页面得到的是：
- Repository ID: `R_kgDOLhAbc123Def456`
- Category ID: `DIC_kwDOLhXyz789Abc012`

**修改后的代码**：
```typescript
// 第 18 行 - 替换为你的实际 Repository ID
script.setAttribute("data-repo-id", "R_kgDOLhAbc123Def456")

// 第 20 行 - 替换为你的实际 Category ID
script.setAttribute("data-category-id", "DIC_kwDOLhXyz789Abc012")
```

**注意事项**：
- ✅ 只替换引号内的内容
- ✅ 保留引号
- ✅ 确保没有多余的空格
- ✅ 不要修改其他行

### 4.4 保存文件

- 保存文件（Cmd+S 或 Ctrl+S）
- 文件已更新

---

## 第五步：测试

### 5.1 本地测试

1. **刷新浏览器**：
   - 如果开发服务器在运行，刷新页面
   - 访问：http://localhost:3002

2. **滚动到页面底部**：
   - 应该能看到评论区域
   - 标题显示："Community Discussion"

3. **检查评论是否加载**：
   - ✅ **正常情况**：看到评论输入框和 "Sign in with GitHub" 按钮
   - ❌ **错误情况**：看到 "Discussion not found" 或 "Enable GitHub Discussions"
     - 如果看到错误，检查：
       - Repository ID 和 Category ID 是否正确
       - GitHub Discussions 是否已启用
       - Giscus App 是否已安装

### 5.2 部署后测试

1. **推送代码到 GitHub**：
   ```bash
   git add components/comments.tsx
   git commit -m "Update Giscus configuration with actual IDs"
   git push
   ```

2. **等待 Vercel 部署完成**

3. **访问网站**：
   - 打开：https://www.deadlyblox.com
   - 滚动到底部查看评论区域

---

## 🆘 常见问题

### Q1: Repository ID 显示为空怎么办？

**解决方案**：
1. 确认仓库是 Public（公开）的
2. 检查仓库名称拼写是否正确
3. 尝试刷新 Giscus 配置页面
4. 手动获取 ID：
   - 访问：`https://api.github.com/repos/baiqwe/deadlydelivery`
   - 找到 `id` 字段，但这通常不是我们需要的格式
   - 最好还是在 Giscus 页面自动获取

### Q2: Category 下拉菜单是空的？

**解决方案**：
1. 确认 GitHub Discussions 已启用
2. 创建一个 Discussion 或 Category
3. 刷新 Giscus 配置页面
4. 重新选择 Repository

### Q3: 评论区域显示 "Discussion not found"？

**解决方案**：
1. 检查 Repository ID 和 Category ID 是否正确复制
2. 确认代码中引号内的值没有多余空格
3. 确认 Giscus App 已正确安装到仓库
4. 尝试创建第一个 Discussion：
   - 访问：https://github.com/baiqwe/deadlydelivery/discussions
   - 手动创建一个讨论

### Q4: 如何验证 ID 是否正确？

**验证方法**：
1. 打开浏览器开发者工具（F12）
2. 查看 Console（控制台）
3. 如果有 Giscus 相关的错误信息，会显示在这里
4. 也可以查看 Network（网络）标签，检查 Giscus 请求是否成功

---

## 📝 配置检查清单

在提交代码前，确认：

- [ ] GitHub Discussions 已启用
- [ ] Giscus App 已安装到仓库
- [ ] 已创建 "Announcements" 分类
- [ ] 在 giscus.app 完成配置
- [ ] 已复制 Repository ID 和 Category ID
- [ ] 已更新 `components/comments.tsx` 文件
- [ ] 本地测试评论区域可以正常显示
- [ ] 代码已提交并推送到 GitHub

---

## 🎯 配置完成后

配置完成后，用户将能够：
- ✅ 在页面底部看到评论区域
- ✅ 使用 GitHub 账号登录并发表评论
- ✅ 对评论进行点赞和反应
- ✅ 查看其他用户的评论

这将大大增加网站的互动性和 SEO 价值！

