'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Zap, Target } from 'lucide-react'
import { heroStats } from '@/lib/data'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      <div className="absolute inset-0 opacity-[0.02]"><div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`, backgroundSize: '40px 40px' }} /></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-ascend-maize/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-ascend-orange/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div className="space-y-6 md:space-y-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-gray-50 rounded-full border border-ascend-gray-100">
              <span className="w-2 h-2 bg-ascend-orange rounded-full animate-pulse" />
              <span className="text-xs font-medium text-ascend-gray-600 uppercase tracking-wider">Digital Byrå</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ascend-black leading-[1.1]">Digital tillväxt<br /><span className="text-ascend-orange">datadriven</span><br />agilitet</h1>
            <p className="text-lg md:text-xl text-ascend-gray-500 max-w-lg leading-relaxed">Vi bygger, optimerar och skalar din digitala närvaro med ett agilt arbetssätt.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/case" className="inline-flex items-center justify-center px-6 py-3 bg-ascend-orange text-white text-sm font-medium rounded-lg hover:bg-ascend-orange/90 transition-colors group">Se våra case<ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" /></Link>
              <Link href="/om-oss" className="inline-flex items-center justify-center px-6 py-3 bg-white text-ascend-black text-sm font-medium rounded-lg border border-ascend-gray-200 hover:bg-ascend-gray-50 transition-colors">Läs om vår process</Link>
            </div>
            <motion.div className="flex flex-wrap gap-6 md:gap-8 pt-6 md:pt-8 border-t border-ascend-gray-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
              {heroStats.slice(0, 3).map((stat, index) => (<div key={index} className="space-y-1"><p className="text-2xl md:text-3xl font-bold text-ascend-black"><AnimatedCounter value={stat.value} /></p><p className="text-sm text-ascend-gray-500">{stat.label}</p></div>))}
            </motion.div>
          </motion.div>

          <motion.div className="relative flex items-center justify-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-ascend-orange/20 to-ascend-maize/10 rounded-full" />
              <div className="absolute inset-8 md:inset-12 bg-gradient-to-br from-ascend-orange to-ascend-maize rounded-full flex items-center justify-center"><span className="text-white font-bold text-6xl md:text-8xl">A</span></div>
              <motion.div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white rounded-xl shadow-lg p-3 md:p-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-ascend-orange/10 rounded-lg flex items-center justify-center"><TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-ascend-orange" /></div>
                  <div><p className="text-xs text-ascend-gray-500">ROAS</p><p className="text-base md:text-lg font-bold text-ascend-black">+450%</p></div>
                </div>
              </motion.div>
              <motion.div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-white rounded-xl shadow-lg p-3 md:p-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-ascend-maize/20 rounded-lg flex items-center justify-center"><Zap className="w-4 h-4 md:w-5 md:h-5 text-ascend-black" /></div>
                  <div><p className="text-xs text-ascend-gray-500">Hastighet</p><p className="text-base md:text-lg font-bold text-ascend-black">Agilt</p></div>
                </div>
              </motion.div>
              <motion.div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-3 md:p-4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-ascend-gray-100 rounded-lg flex items-center justify-center"><Target className="w-4 h-4 md:w-5 md:h-5 text-ascend-black" /></div>
                  <div><p className="text-xs text-ascend-gray-500">Fokus</p><p className="text-base md:text-lg font-bold text-ascend-black">KPI:er</p></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <div className="w-6 h-10 border-2 border-ascend-gray-300 rounded-full flex justify-center"><motion.div className="w-1.5 h-3 bg-ascend-orange rounded-full mt-2" animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} /></div>
      </motion.div>
    </section>
  )
}
