import Link from "next/link";
import { ArrowLeft, Sparkles, Code, Zap, MessageSquare, Palette, Shield, Rocket } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "智能对话引导",
      description: "通过自然语言对话，精确理解你的需求和想法",
      details: [
        "支持中英文自然语言交互",
        "智能识别项目类型和技术需求",
        "引导式问答，确保需求完整性",
        "实时反馈和需求确认"
      ]
    },
    {
      icon: Code,
      title: "自动化代码生成",
      description: "基于需求蓝图，自动生成高质量的项目代码",
      details: [
        "支持多种技术栈和框架",
        "模块化代码结构",
        "遵循最佳实践和编码规范",
        "完整的项目文件和配置"
      ]
    },
    {
      icon: Palette,
      title: "丰富模板库",
      description: "预设多种项目类型的高质量模板",
      details: [
        "博客、电商、SaaS等多种类型",
        "现代化UI设计和交互",
        "经过测试验证的稳定代码",
        "持续更新和维护"
      ]
    },
    {
      icon: Zap,
      title: "快速部署",
      description: "一键生成完整项目，支持快速部署上线",
      details: [
        "完整的项目结构和配置",
        "支持主流部署平台",
        "环境变量和配置管理",
        "详细的部署说明文档"
      ]
    },
    {
      icon: Shield,
      title: "安全可靠",
      description: "内置安全最佳实践，确保代码质量和安全性",
      details: [
        "安全的身份认证实现",
        "数据验证和防护机制",
        "遵循OWASP安全准则",
        "定期安全更新和补丁"
      ]
    },
    {
      icon: Rocket,
      title: "持续优化",
      description: "基于用户反馈持续改进和功能更新",
      details: [
        "定期功能更新和优化",
        "社区驱动的改进建议",
        "性能监控和优化",
        "新技术栈和框架支持"
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
              <Link href="/docs" className="text-gray-600 hover:text-gray-900">文档</Link>
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
              强大功能特性
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              VibeGen 集成了多项先进技术，为你提供从需求分析到代码生成的完整解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              工作流程
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              四个简单步骤，让你的想法变成现实
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "描述想法",
                description: "用自然语言描述你的项目想法和需求"
              },
              {
                step: "02", 
                title: "智能对话",
                description: "需求精灵与你深入对话，完善项目细节"
              },
              {
                step: "03",
                title: "生成蓝图",
                description: "基于对话生成详细的产品需求文档"
              },
              {
                step: "04",
                title: "自动构建",
                description: "代码侠根据蓝图自动生成完整项目"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            准备好开始了吗？
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            体验 VibeGen 的强大功能，让AI帮你快速构建应用
          </p>
          <Link href="/" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
            立即开始
          </Link>
        </div>
      </section>
    </div>
  );
}