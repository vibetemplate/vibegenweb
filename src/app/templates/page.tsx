import Link from "next/link";
import { ArrowLeft, ExternalLink, Star, Download, Code } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TemplatesPage() {
  const templates = [
    {
      id: 1,
      name: "现代博客平台",
      description: "支持 Markdown、代码高亮、评论系统的现代化博客",
      type: "blog",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
      features: ["响应式设计", "SEO优化", "深色模式", "代码高亮"],
      preview: "/api/placeholder/400/250",
      downloads: 1248,
      rating: 4.8,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "电商解决方案",
      description: "完整的电商平台，包含购物车、支付、订单管理",
      type: "ecommerce", 
      techStack: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      features: ["支付集成", "库存管理", "用户认证", "订单追踪"],
      preview: "/api/placeholder/400/250",
      downloads: 892,
      rating: 4.9,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      name: "SaaS 启动模板",
      description: "功能完整的 SaaS 应用模板，包含多租户架构",
      type: "saas",
      techStack: ["Next.js", "Supabase", "Stripe Billing", "React Query"],
      features: ["多租户", "订阅计费", "团队管理", "API集成"],
      preview: "/api/placeholder/400/250", 
      downloads: 567,
      rating: 4.7,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      name: "个人作品集",
      description: "精美的个人作品集网站，展示项目和技能",
      type: "portfolio",
      techStack: ["Astro", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: ["动画效果", "项目展示", "联系表单", "性能优化"],
      preview: "/api/placeholder/400/250",
      downloads: 2134,
      rating: 4.9,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "企业官网",
      description: "专业的企业官网模板，适合各类企业展示",
      type: "landing_page",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS"],
      features: ["CMS集成", "多语言", "联系表单", "SEO优化"],
      preview: "/api/placeholder/400/250",
      downloads: 743,
      rating: 4.6,
      color: "from-gray-500 to-slate-500"
    },
    {
      id: 6,
      name: "社交媒体应用",
      description: "类似 Twitter 的社交媒体应用模板",
      type: "social",
      techStack: ["Next.js", "Socket.io", "Redis", "MongoDB"],
      features: ["实时聊天", "动态发布", "关注系统", "通知中心"],
      preview: "/api/placeholder/400/250",
      downloads: 456,
      rating: 4.5,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const typeLabels = {
    blog: "博客",
    ecommerce: "电商",
    saas: "SaaS",
    portfolio: "作品集",
    landing_page: "官网",
    social: "社交"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />

      {/* Header */}
      <section className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回首页
          </Link>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              精选模板库
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              经过精心设计和测试的高质量项目模板，助你快速启动项目
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600">12+</div>
                <div className="text-gray-600 text-sm">精选模板</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">6.2K+</div>
                <div className="text-gray-600 text-sm">总下载量</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">4.8</div>
                <div className="text-gray-600 text-sm">平均评分</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">8</div>
                <div className="text-gray-600 text-sm">技术栈</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div key={template.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                {/* Preview Image */}
                <div className={`h-48 bg-gradient-to-r ${template.color} relative`}>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Code className="h-12 w-12 mx-auto mb-2 opacity-80" />
                      <div className="text-sm font-medium">预览即将上线</div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
                      {typeLabels[template.type as keyof typeof typeLabels]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {template.name}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {template.rating}
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {template.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {template.techStack.map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">主要特性</h4>
                    <ul className="space-y-1">
                      {template.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Download className="h-4 w-4 mr-1" />
                      {template.downloads.toLocaleString()} 下载
                    </div>
                    <div className="flex space-x-2">
                      <button className="btn-secondary text-sm py-1 px-3">
                        预览
                      </button>
                      <button className="btn-primary text-sm py-1 px-3 flex items-center">
                        使用 <ExternalLink className="h-3 w-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            没找到合适的模板？
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            告诉 VibeGen 你的需求，让 AI 为你定制专属模板
          </p>
          <Link href="/" className="btn-primary text-lg py-3 px-8">
            开始创建
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}