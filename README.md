# zh-Admin 仪表盘

基于 Shadcn 与 Vite 打造的后台管理仪表盘 UI，在设计时充分考虑了响应式布局与无障碍访问。

![示意图](public/images/shadcn-admin.png)

[![由 Clerk 赞助](https://img.shields.io/badge/Sponsored%20by-Clerk-5b6ee1?logo=clerk)](https://go.clerk.com/GttUAaK)

我在工作和个人的项目中一直都在做仪表盘类的 UI。我一直想做一套可复用的仪表盘 UI 组件库，方便以后的项目直接使用；现在它终于完成了。虽然我自己编写了一些自定义组件，但其中部分代码是直接参考 ShadcnUI 官方示例改编而来的。

> 不过，这并不是一个 starter 项目（模板）。将来我可能会单独做一个模板版本。

## 功能特性

- 明亮 / 暗黑模式
- 响应式布局
- 无障碍访问支持
- 内置 Sidebar（侧边栏）组件
- 全局搜索命令
- 10+ 个页面
- 额外的自定义组件
- RTL（从右到左）语言支持

<details>
<summary>自定义组件（点击展开）</summary>

本项目使用了 Shadcn UI 组件，但其中部分组件为了更好地支持 RTL（从右到左）以及其它改进，做了轻微修改。这些自定义组件与原版 Shadcn UI 有所不同。

如果你想通过 Shadcn CLI 更新组件（例如 `npx shadcn@latest add <component>`），对于未自定义过的组件来说通常是安全的。但对于下方列出的已自定义组件，你可能需要手动合并改动，以保留项目中的修改，并避免覆盖 RTL 支持或其它更新。

> 如果你不需要 RTL 支持，可以放心地通过 Shadcn CLI 更新“RTL 更新组件”，因为这些改动主要是为了 RTL 兼容性。而“已修改组件”可能还包含其它自定义内容，需要留意。

### 已修改组件

- scroll-area
- sonner
- separator

### RTL 更新组件

- alert-dialog
- calendar
- command
- dialog
- dropdown-menu
- select
- table
- sheet
- sidebar
- switch

**说明：**

- **已修改组件**：包含一般性更新，可能也包括 RTL 调整。
- **RTL 更新组件**：针对 RTL 语言支持（如布局、定位）所做的特定修改。
- 实现细节请查看 `src/components/ui/` 目录下的源文件。
- 项目中其余的 Shadcn UI 组件均为标准版本，可以放心通过 CLI 更新。

</details>

## 技术栈

**UI：** [ShadcnUI](https://ui.shadcn.com)（TailwindCSS + RadixUI）

**构建工具：** [Vite](https://vitejs.dev/)

**路由：** [TanStack Router](https://tanstack.com/router/latest)

**类型检查：** [TypeScript](https://www.typescriptlang.org/)

**代码检查 / 格式化：** [ESLint](https://eslint.org/) 与 [Prettier](https://prettier.io/)

**图标：** [Lucide Icons](https://lucide.dev/icons/)、[Tabler Icons](https://tabler.io/icons)（仅品牌图标）

**鉴权（部分）：** [Clerk](https://go.clerk.com/GttUAaK)

## 本地运行

克隆项目

```bash
  git clone https://github.com/huangzi959/zh-admin.git
```

进入项目目录

```bash
  cd zh-admin
```

安装依赖

```bash
  pnpm install
```

启动服务

```bash
  pnpm run dev
```
