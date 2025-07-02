import Link from "next/link";
import { ArrowLeft, Sparkles, Book, Code, Lightbulb, Zap } from "lucide-react";

export default function DocsPage() {
  const docSections = [
    {
      icon: Lightbulb,
      title: "快速开始",
      description: "了解 VibeGen 的基本概念和使用方法",
      items: [
        { title: "什么是 VibeGen", href: "#what-is-vibegen" },
        { title: "核心概念", href: "#core-concepts" },
        { title: "第一个项目", href: "#first-project" },
        { title: "常见问题", href: "#faq" }
      ]
    },
    {
      icon: Code,
      title: "技术架构",
      description: "深入了解 VibeGen 的技术实现",
      items: [
        { title: "双核架构设计", href: "#architecture" },
        { title: "需求精灵 (SpecSprite)", href: "#spec-sprite" },
        { title: "代码侠 (CodePaladin)", href: "#code-paladin" },
        { title: "模板系统", href: "#template-system" }
      ]
    },
    {
      icon: Book,
      title: "使用指南",
      description: "详细的使用说明和最佳实践",
      items: [
        { title: "项目类型选择", href: "#project-types" },
        { title: "需求对话技巧", href: "#conversation-tips" },
        { title: "自定义配置", href: "#customization" },
        { title: "部署指南", href: "#deployment" }
      ]
    },
    {
      icon: Zap,
      title: "高级功能",
      description: "探索 VibeGen 的高级特性",
      items: [
        { title: "自定义模板", href: "#custom-templates" },
        { title: "插件系统", href: "#plugins" },
        { title: "API 集成", href: "#api-integration" },
        { title: "扩展开发", href: "#extensions" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">VibeGen</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-600 hover:text-gray-900">功能特性</Link>
              <Link href="/templates" className="text-gray-600 hover:text-gray-900">模板库</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">关于</Link>
              <Link href="/" className="btn-primary">返回首页</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回首页
          </Link>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              开发者文档
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              完整的 VibeGen 使用指南，从入门到精通
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {docSections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {section.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a 
                        href={item.href} 
                        className="text-gray-700 hover:text-primary-600 transition-colors flex items-center py-2 px-3 rounded-lg hover:bg-gray-50"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-16 bg-white" id="what-is-vibegen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">什么是 VibeGen？</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              VibeGen 是一款革命性的 AI 原生开发工具，旨在彻底改变从想法到应用的开发流程。
              它通过创新的双核架构，将复杂的开发过程分解为两个高度专业化的阶段：
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">核心组件</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary-600 mb-2">🧚 需求精灵 (SpecSprite)</h4>
                  <p className="text-gray-600 text-sm">
                    智慧向导，通过高质量对话洞察你的需求，生成精确的产品蓝图(PRD)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">⚔️ 代码侠 (CodePaladin)</h4>
                  <p className="text-gray-600 text-sm">
                    代码英雄，严格按照蓝图执行，生成高质量、可维护的应用代码
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4" id="core-concepts">核心概念</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900">双核架构：</strong>
                  <span className="text-gray-600">将创造性工作与构建工作分离，确保高效率和高质量</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900">模板驱动：</strong>
                  <span className="text-gray-600">基于预测试的高质量模板，确保代码稳定性</span>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <strong className="text-gray-900">对话式交互：</strong>
                  <span className="text-gray-600">通过自然语言对话精确理解需求</span>
                </div>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4" id="first-project">创建第一个项目</h3>
            <div className="bg-gray-900 rounded-lg p-6 mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="font-mono text-sm text-white space-y-2">
                <div className="text-green-400">$ @vibeGen 我想做一个个人博客网站</div>
                <div className="text-blue-400">🧚 需求精灵: 您好！我是博客平台顾问...</div>
                <div className="text-blue-400">   您的博客核心是关于什么？</div>
                <div className="text-blue-400">   A) 个人日记 B) 技术分享 C) 新闻资讯</div>
                <div className="text-green-400">$ B) 技术分享</div>
                <div className="text-blue-400">🧚 需求精灵: 很好！技术博客需要代码高亮...</div>
                <div className="text-gray-400">   ...</div>
                <div className="text-purple-400">⚔️ 代码侠: 蓝图已接收，开始构建...</div>
                <div className="text-green-400">✅ 项目已生成完成！</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">常见问题</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "VibeGen 支持哪些技术栈？",
                answer: "VibeGen 支持 Next.js、React、Vue、Astro 等主流前端框架，以及 Node.js、Python 等后端技术。我们持续添加新的技术栈支持。"
              },
              {
                question: "生成的代码质量如何？",
                answer: "VibeGen 基于经过验证的高质量模板生成代码，遵循最佳实践和编码规范，确保代码的可维护性和稳定性。"
              },
              {
                question: "是否支持自定义需求？",
                answer: "是的，VibeGen 的需求精灵会通过深度对话了解你的具体需求，支持高度自定义的项目配置。"
              },
              {
                question: "生成的项目可以直接部署吗？",
                answer: "是的，VibeGen 生成的项目包含完整的配置文件和部署说明，支持主流部署平台的一键部署。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}