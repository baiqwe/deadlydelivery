# Giscus Comments Setup Guide

## Overview

Giscus is a comments system powered by GitHub Discussions. It requires minimal setup and provides free, user-generated content that improves SEO.

## Setup Steps

### 1. Enable GitHub Discussions

1. Go to your GitHub repository: `https://github.com/baiqwe/deadlydelivery`
2. Click **Settings** → **General**
3. Scroll down to **Features** section
4. Check **Discussions** checkbox
5. Click **Set up discussions**

### 2. Install Giscus App

1. Go to: https://github.com/apps/giscus
2. Click **Install** or **Configure**
3. Select your repository: `baiqwe/deadlydelivery`
4. Choose **Only select repositories**
5. Click **Install**

### 3. Configure Giscus

1. **访问 Giscus 配置页面**：
   - 打开浏览器，访问：https://giscus.app
   - 你会看到一个配置向导表单

2. **填写配置信息（详细步骤）**：

   **步骤 3.2.1 - Repository（仓库）**
   - 在 "Repository" 输入框中，输入：`baiqwe/deadlydelivery`
   - 格式：`用户名/仓库名`
   - 点击输入框，Giscus 会自动检测你的仓库

   **步骤 3.2.2 - Repository ID（仓库 ID）**
   - 这个会自动填充，不需要手动输入
   - 如果显示为空白，点击 "Repository" 旁边的刷新按钮
   - Repository ID 格式类似：`R_kgDOLhXXXXX`（以 R_kgD 开头）

   **步骤 3.2.3 - Category（讨论分类）**
   - 首先需要在 GitHub 创建分类：
     1. 访问：https://github.com/baiqwe/deadlydelivery/discussions
     2. 点击 "New discussion"（如果第一次使用，先创建一个讨论）
     3. 点击 "Edit category" 或 "Manage categories"
     4. 创建一个新分类，名称输入：`Announcements`
   - 然后在 Giscus 配置页面：
     - 下拉菜单中选择：`Announcements`
     - 如果没有显示，刷新页面或重新选择 Repository

   **步骤 3.2.4 - Category ID（分类 ID）**
   - 选择 Category 后会自动填充
   - Category ID 格式类似：`DIC_kwDOLhXXXXX`（以 DIC_kw 开头）
   - 如果为空，检查 Category 是否正确选择

   **步骤 3.2.5 - Page ↔️ Discussions mapping（页面映射方式）**
   - 选择：`pathname`（推荐）
   - 这意味着每个页面路径对应一个 Discussion
   - 例如：`/` 页面对应一个 Discussion，`/guide` 对应另一个

   **步骤 3.2.6 - Theme（主题）**
   - 选择：`Dark` 或 `dark`
   - 这与你的网站深色主题匹配
   - 可选选项：`light`、`dark`、`transparent_dark`、`preferred_color_scheme`

   **步骤 3.2.7 - Input position（输入框位置）**
   - 选择：`Bottom`
   - 这意味着评论输入框在评论列表下方
   - 可选选项：`top`、`bottom`

   **步骤 3.2.8 - Enable reactions（启用反应）**
   - 勾选：`Yes` 或 `✓`
   - 允许用户点赞、反应评论

3. **获取配置代码**：
   - 填写完所有字段后，页面下方会显示一段 HTML 代码
   - 你需要从这段代码中复制两个重要的 ID：
     - `data-repo-id` 的值（例如：`R_kgDOLhXXXXX`）
     - `data-category-id` 的值（例如：`DIC_kwDOLhXXXXX`）

### 4. Update Code（更新代码中的 ID）

1. **打开文件**：
   - 打开 `components/comments.tsx` 文件

2. **找到需要替换的行**：
   - 找到第 18 行：`script.setAttribute("data-repo-id", "R_kgDOLhXXXXX")`
   - 找到第 20 行：`script.setAttribute("data-category-id", "DIC_kwDOLhXXXXX")`

3. **替换为实际值**：
   - 将 `R_kgDOLhXXXXX` 替换为你从 Giscus 配置页面复制的实际 Repository ID
   - 将 `DIC_kwDOLhXXXXX` 替换为你从 Giscus 配置页面复制的实际 Category ID

4. **示例**：
   假设你的实际 ID 是：
   - Repository ID: `R_kgDOLhAbc123`
   - Category ID: `DIC_kwDOLhXyz789`
   
   那么代码应该改为：
   ```typescript
   script.setAttribute("data-repo-id", "R_kgDOLhAbc123")
   script.setAttribute("data-category-id", "DIC_kwDOLhXyz789")
   ```

5. **保存文件并测试**：
   - 保存文件后，本地预览网站
   - 滚动到页面底部，应该能看到评论区域
   - 如果显示 "Enable GitHub Discussions"，说明配置还未完成

### 5. Test

After deployment, comments should appear at the bottom of pages. Users need a GitHub account to comment.

## Benefits for SEO

- **User-Generated Content (UGC)**: Free, unique content
- **Long-tail Keywords**: Natural language in comments
- **Fresh Content**: New comments signal active site
- **Social Signals**: Engagement metrics improve rankings
- **Lower Bounce Rate**: Comments keep users on page longer

## Alternative: Disqus

If you prefer Disqus instead:
1. Sign up at https://disqus.com
2. Get your Disqus shortname
3. Replace Giscus component with Disqus script

But Giscus is recommended because:
- ✅ Free and open source
- ✅ No ads
- ✅ Privacy-friendly
- ✅ Integrated with GitHub

