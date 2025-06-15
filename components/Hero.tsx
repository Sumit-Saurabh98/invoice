"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 pt-16 pb-20">
      {/* Simple Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Subtle floating orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-gradient-to-r from-purple-400/30 to-pink-600/30 rounded-full filter blur-3xl opacity-40"></div>
        <div className="absolute -bottom-32 left-20 w-64 h-64 bg-gradient-to-r from-teal-400/30 to-blue-600/30 rounded-full filter blur-3xl opacity-40"></div>
        
        {/* Simple grid pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-800 bg-[size:30px_30px] opacity-20"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/60 dark:from-slate-950/60 dark:via-transparent dark:to-slate-950/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/20 dark:border-blue-800/20 px-6 py-3 rounded-full mb-8 transition-all duration-300 hover:scale-105">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
            Introducing InvoiceMarshal 1.0
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-6 transition-all duration-500">
          <span className="block text-slate-900 dark:text-white">
            Invoicing made
          </span>
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 dark:from-blue-400 dark:via-purple-400 dark:to-teal-400 text-transparent bg-clip-text">
            super easy!
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
          Transform your billing process with our intelligent invoicing platform. 
          <span className="block mt-2 font-medium text-slate-700 dark:text-slate-200">
            Get paid faster, work smarter, grow bigger.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center items-center mb-20">
          <Link href="/dashboard" className="group flex items-center px-10 py-5 text-xl font-semibold text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-full hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-300 hover:shadow-lg min-w-[250px] justify-center">
            <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            View Features
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-24">
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">10k+</div>
            <div className="text-slate-600 dark:text-slate-400">Happy Users</div>
          </div>
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">99.9%</div>
            <div className="text-slate-600 dark:text-slate-400">Uptime</div>
          </div>
          <div className="text-center transform transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">24/7</div>
            <div className="text-slate-600 dark:text-slate-400">Support</div>
          </div>
        </div>
      </div>

      {/* Hero Image/Dashboard Preview */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="relative transform transition-all duration-500 hover:scale-105">
          {/* Subtle glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-3xl blur-xl"></div>
          
          {/* Main Container */}
          <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-800/20 rounded-2xl lg:rounded-3xl p-2 shadow-xl">
            <Image
              src="/hero.jpg"
              alt="Invoice Dashboard Preview"
              className="w-full h-auto rounded-xl lg:rounded-2xl shadow-lg"
              width={800}
              height={600}
              priority
            />
            
            {/* Simple floating badges */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              ✨ New Features
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              🚀 Fast & Secure
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="relative z-10 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-800/50 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Invoice</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                The most intuitive invoicing platform that helps businesses get paid faster and manage their finances effortlessly.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.082.402-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.017 0z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Product</h4>
              <ul className="space-y-4">
                <li><a href="/features" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Features</a></li>
                <li><a href="/pricing" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Pricing</a></li>
                <li><a href="/templates" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Templates</a></li>
                <li><a href="/integrations" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Integrations</a></li>
                <li><a href="/mobile" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Mobile App</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="/about" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">About Us</a></li>
                <li><a href="/careers" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Careers</a></li>
                <li><a href="/blog" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Blog</a></li>
                <li><a href="/press" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Press Kit</a></li>
                <li><a href="/partners" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Partners</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Support</h4>
              <ul className="space-y-4">
                <li><a href="/help" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Help Center</a></li>
                <li><a href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Contact Us</a></li>
                <li><a href="/docs" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">API Documentation</a></li>
                <li><a href="/status" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">System Status</a></li>
                <li><a href="/community" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Community</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-12 mb-12">
            <div className="max-w-md mx-auto text-center">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Stay Updated</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Get the latest updates and tips delivered to your inbox.</p>
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-200/50 dark:border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 md:mb-0">
              © 2025 Invoice. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/privacy" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="/terms" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="/cookies" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
              <a href="/security" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">Security</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e");
        }
        
        .bg-grid-slate-800 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.03)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
}