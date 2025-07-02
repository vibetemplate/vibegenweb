import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6" />
              <span className="text-xl font-bold">VibeGen</span>
            </div>
            <p className="text-gray-400">
              AI原生开发工具，让创意变为现实。
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">产品</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/features" className="hover:text-white transition-colors">功能特性</Link></li>
              <li><Link href="/templates" className="hover:text-white transition-colors">模板库</Link></li>
              <li><Link href="/docs" className="hover:text-white transition-colors">文档</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">资源</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/docs" className="hover:text-white transition-colors">文档</Link></li>
              <li><Link href="/templates" className="hover:text-white transition-colors">模板</Link></li>
              <li><Link href="/features" className="hover:text-white transition-colors">功能</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">公司</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">关于我们</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">联系我们</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">加入我们</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 VibeGen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}