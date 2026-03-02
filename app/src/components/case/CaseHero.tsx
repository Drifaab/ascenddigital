'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CaseStudy } from '@/lib/types'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

interface CaseHeroProps { caseStudy: CaseStudy }

export function CaseHero({ caseStudy }: CaseHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient}`} />
      <div className="absolute inset-0 opacity-[0.03]"><div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)`, backgroundSize: '32px 32px' }} /></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link href="/case" className="inline-flex items-center gap-2 text-sm text-ascend-gray-600 hover:text-ascend-orange transition-colors mb-8"><ArrowLeft className="w-4 h-4" />Tillbaka till case</Link>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-ascend-orange/10 text-ascend-orange rounded-full text-xs font-medium">{caseStudy.category}</span>
              <span className="px-3 py-1 bg-white/80 text-ascend-gray-600 rounded-full text-xs font-medium">{caseStudy.industry}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ascend-black leading-tight">{caseStudy.title}</h1>
            <p className="mt-6 text-lg md:text-xl text-ascend-gray-600 leading-relaxed">{caseStudy.longDescription}</p>
            <div className="mt-6 flex items-center gap-2"><span className="text-sm text-ascend-gray-500">Marknad:</span><span className="text-sm font-medium text-ascend-black">{caseStudy.market}</span></div>
          </motion.div>
          <motion.div className="grid grid-cols-2 gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {caseStudy.stats.map((stat, index) => (
              <motion.div key={index} className="p-5 md:p-6 bg-white rounded-xl shadow-sm border border-ascend-gray-100" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}>
                <p className="text-2xl md:text-3xl font-bold text-ascend-orange"><AnimatedCounter value={stat.value} /></p>
                <p className="mt-1 text-sm font-medium text-ascend-black">{stat.label}</p>
                {stat.subtext && <p className="text-xs text-ascend-gray-400">{stat.subtext}</p>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
