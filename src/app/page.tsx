import Link from "next/link";
import { ArrowRight, Code, Zap, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              从想法到应用，
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
                AI驱动开发
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              VibeGen 是下一代AI原生开发工具，通过智能对话和自动化代码生成，
              将你的模糊想法转化为高质量的现代化Web应用。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/docs" className="btn-primary text-lg px-8 py-3 inline-flex items-center">
                立即开始 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/templates" className="btn-secondary text-lg px-8 py-3">
                查看模板
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              双核驱动，智能协作
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              VibeGen 采用创新的双核架构，让AI专家与你深度对话，精确理解需求，然后自动化构建高质量代码。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">需求精灵 (SpecSprite)</h3>
                  <p className="text-gray-600">
                    智慧向导，通过高质量对话精确理解你的需求，生成详细的产品蓝图(PRD)。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Code className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">代码侠 (CodePaladin)</h3>
                  <p className="text-gray-600">
                    代码英雄，严格按照蓝图执行，从模板库中装配出高质量、可维护的应用代码。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">模板驱动</h3>
                  <p className="text-gray-600">
                    基于经过验证的高质量模板和模块，确保生成代码的稳定性和可维护性。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="font-mono text-sm">
                  <div className="text-green-400">$ @vibeGen 我想做一个作品集网站</div>
                  <div className="text-blue-400 mt-2">🧚 需求精灵: 您好！我是作品集专家...</div>
                  <div className="text-gray-400 mt-1">正在分析需求...</div>
                  <div className="text-purple-400 mt-2">⚔️ 代码侠: 蓝图已接收，开始构建...</div>
                  <div className="text-green-400 mt-1">✅ 项目已生成完成！</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            准备好体验AI驱动的开发流程了吗？
          </h2>
          <p className="text-xl text-white/90 mb-8">
            加入数千名开发者，让VibeGen帮你将想法快速转化为现实。
          </p>
          <Link href="/docs" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors inline-flex items-center shadow-lg hover:shadow-xl">
            免费开始使用 <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}