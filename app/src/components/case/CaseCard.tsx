'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, ArrowRight } from 'lucide-react'
import { CaseStudy } from '@/lib/types'
import { Badge } from '@/components/ui/Badge'

interface CaseCardProps { caseStudy: CaseStudy; index?: number }

export function CaseCard({ caseStudy, index = 0 }: CaseCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: index * 0.1 }}>
      <Link href={`/case/${caseStudy.slug}`} className="group block bg-white rounded-2xl border border-ascend-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className={`relative aspect-video bg-gradient-to-br ${caseStudy.gradient}`}>
          <div className="absolute top-4 left-4"><span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-ascend-black">{caseStudy.category}</span></div>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"><div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"><ArrowRight className="w-5 h-5 text-ascend-black" /></div></div>
        </div>
        <div className="p-5 md:p-6">
          <div className="flex items-center gap-2 mb-4"><div className="w-8 h-8 bg-ascend-orange/10 rounded-lg flex items-center justify-center"><TrendingUp className="w-4 h-4 text-ascend-orange" /></div><span className="text-sm font-semibold text-ascend-orange">{caseStudy.result}</span></div>
          <h3 className="text-xl font-semibold text-ascend-black group-hover:text-ascend-orange transition-colors">{caseStudy.title}</h3>
          <p className="text-ascend-gray-600 text-sm mt-2 line-clamp-2">{caseStudy.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">{caseStudy.tags.slice(0, 3).map((tag, i) => (<Badge key={i} variant="default">{tag}</Badge>))}</div>
        </div>
      </Link>
    </motion.div>
  )
}
