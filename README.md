# VibeGen - AI原生开发工具官网

> 下一代AI原生开发工具，将模糊想法转化为高质量Web应用

[![Deploy Status](https://img.shields.io/badge/deploy-cloudflare-orange)](https://vibegen.pages.dev)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://typescriptlang.org/)

## 🌟 项目简介

VibeGen 是一款革命性的 AI 原生开发工具，通过创新的双核架构设计，将复杂的软件开发过程简化为智能对话和自动化构建两个阶段。

### 核心特性

- 🧚 **需求精灵 (SpecSprite)** - 智慧向导，通过深度对话理解需求
- ⚔️ **代码侠 (CodePaladin)** - 代码英雄，自动生成高质量应用
- 🎨 **模板库** - 精选高质量项目模板
- 🚀 **快速部署** - 一键生成完整项目

## 🛠️ 技术栈

- **前端**: Next.js 14 + TypeScript + Tailwind CSS
- **状态管理**: React Query + Zustand
- **表单处理**: React Hook Form + Zod
- **开发工具**: ESLint + Prettier
- **部署**: Cloudflare Pages

## 📦 快速开始

### 本地开发

```bash
# 克隆项目
git clone https://github.com/yourusername/vibegenweb.git
cd vibegenweb

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 打开浏览器访问 http://localhost:3000
```

### 构建部署

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 📁 项目结构

```
vibegenweb/
├── src/
│   ├── app/                 # Next.js 14 App Router
│   │   ├── (pages)/        # 页面路由
│   │   ├── globals.css     # 全局样式
│   │   └── layout.tsx      # 根布局
│   ├── components/         # React 组件
│   │   └── ui/            # UI 组件库
│   ├── lib/               # 工具函数
│   └── types/             # TypeScript 类型定义
├── public/                # 静态资源
├── docs/                  # 项目文档
└── package.json          # 项目配置
```

## 🎯 页面结构

- **首页** (`/`) - 产品介绍和核心特性展示
- **功能特性** (`/features`) - 详细功能说明
- **文档** (`/docs`) - 使用指南和技术文档
- **模板库** (`/templates`) - 精选项目模板展示
- **关于我们** (`/about`) - 团队介绍和价值观

## 🔧 开发指南

### 代码规范

- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 和 Prettier 配置
- 组件采用函数式组件 + Hooks
- CSS 使用 Tailwind CSS 实用类

### 组件开发

```tsx
// 示例组件结构
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className, ...props }, ref) => {
    return (
      <button
        className={cn("btn", `btn-${variant}`, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

export { Button };
```

## 🚀 部署

### Cloudflare Pages

项目配置了自动部署到 Cloudflare Pages：

1. **构建命令**: `npm run build`
2. **输出目录**: `out`
3. **环境变量**: 无需配置

### Vercel 部署

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署到 Vercel
vercel
```

## 📊 性能优化

- ✅ 静态生成 (SSG) 所有页面
- ✅ 图片优化 (Next.js Image)
- ✅ 代码分割和懒加载
- ✅ CSS 优化 (Tailwind CSS)
- ✅ 字体优化 (next/font)

## 📝 许可证

本项目采用 [MIT](LICENSE) 许可证。

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📧 联系我们

- 邮箱: hello@vibegen.dev
- 网站: [https://vibegen.pages.dev](https://vibegen.pages.dev)

---

⚡ 由 [VibeGen](https://vibegen.pages.dev) 驱动