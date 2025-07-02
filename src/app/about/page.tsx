import Link from "next/link";
import { ArrowLeft, Target, Users, Lightbulb, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "需求精灵 (SpecSprite)",
      role: "智慧向导",
      description: "专注于理解用户需求，通过深度对话将模糊想法转化为清晰蓝图",
      avatar: "🧚",
      skills: ["需求分析", "对话引导", "项目规划", "用户体验"]
    },
    {
      name: "代码侠 (CodePaladin)",
      role: "代码英雄", 
      description: "严格按照蓝图执行，从模板库中装配出高质量的应用代码",
      avatar: "⚔️",
      skills: ["代码生成", "模板组装", "架构设计", "质量保证"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "以用户为中心",
      description: "我们相信技术应该服务于人，让开发变得更简单、更高效"
    },
    {
      icon: Lightbulb,
      title: "持续创新",
      description: "不断探索AI与开发工具结合的新可能，推动行业发展"
    },
    {
      icon: Heart,
      title: "质量第一",
      description: "坚持高标准，确保每一个生成的项目都经过精心设计和测试"
    },
    {
      icon: Users,
      title: "开放协作",
      description: "拥抱开源精神，与开发者社区共同成长和进步"
    }
  ];

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
              关于 VibeGen
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              我们致力于重新定义软件开发的未来，让每个人都能轻松地将想法转化为现实
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的使命</h2>
              <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
            </div>
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                在这个AI驱动的时代，我们相信软件开发不应该是少数人的专利。每个有想法的人，
                无论技术背景如何，都应该有能力将自己的创意转化为实际的应用程序。
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                VibeGen 就是为了实现这个愿景而生——通过创新的双核架构和智能对话系统，
                我们让AI成为每个人的开发伙伴，让创意的种子能够快速生根发芽。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心团队</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              我们的AI团队成员各有专长，协同工作为你提供最佳的开发体验
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-primary-600 font-medium mb-4">
                  {member.role}
                </div>
                <p className="text-gray-600 mb-6">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="bg-primary-100 text-primary-700 text-sm px-3 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的价值观</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              这些核心价值观指导着我们的每一个决定和行动
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的故事</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">问题的发现</h3>
              <p className="text-gray-600 leading-relaxed">
                在传统的软件开发过程中，我们发现了一个普遍存在的问题：从想法到实现之间存在着巨大的鸿沟。
                许多有创意的人因为技术门槛而无法实现自己的想法，而即使是经验丰富的开发者，
                也需要花费大量时间在重复性的搭建工作上。
              </p>
            </div>

            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">创新的解决方案</h3>
              <p className="text-gray-600 leading-relaxed">
                我们意识到，AI技术的发展为解决这个问题提供了新的可能性。通过创新的双核架构设计，
                我们将需求理解和代码生成分离，让AI能够更准确地理解用户意图，
                并基于经过验证的模板生成高质量的代码。
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">持续的演进</h3>
              <p className="text-gray-600 leading-relaxed">
                VibeGen 不是一个完成品，而是一个不断演进的平台。我们持续收集用户反馈，
                优化算法，扩展模板库，希望能够覆盖更多的使用场景，
                让更多的人能够从中受益。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            想要了解更多？
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            我们很乐意听到你的想法和建议，一起让 VibeGen 变得更好
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/docs" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              查看文档
            </Link>
            <Link href="mailto:hello@vibegen.dev" className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}