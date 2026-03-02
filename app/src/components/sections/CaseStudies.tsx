'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { TrendingUp, ArrowRight, BarChart3 } from 'lucide-react'
import { caseStudies } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card, CardImage, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export function CaseStudies() {
  return (
    <section className="py-20 md:py-32 bg-ascend-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <SectionHeader badge="Case Studies" badgeIcon={<BarChart3 className="w-3 h-3" />} title="Resultat som" highlight="talar för sig själva" description="Se hur vi hjälpt företag att växa genom datadriven strategi och agilt arbete." />
          </div>
          <motion.div className="flex gap-6 md:gap-8" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="text-center"><div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mx-auto mb-2"><TrendingUp className="w-5 h-5 text-ascend-orange" /></div><p className="text-2xl font-bold text-ascend-black">50+</p><p className="text-sm text-ascend-gray-500">Projekt</p></div>
            <div className="text-center"><div className="w-12 h-12 bg-ascend-maize/30 rounded-xl flex items-center justify-center mx-auto mb-2"><BarChart3 className="w-5 h-5 text-ascend-black" /></div><p className="text-2xl font-bold text-ascend-black">95%</p><p className="text-sm text-ascend-gray-500">Nöjda kunder</p></div>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.slice(0, 4).map((caseStudy, index) => (
            <motion.div key={caseStudy.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Link href={`/case/${caseStudy.slug}`}>
                <Card className="h-full">
                  <CardImage gradient={caseStudy.gradient} alt={caseStudy.title} />
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4"><div className="w-8 h-8 bg-ascend-orange/10 rounded-lg flex items-center justify-center"><TrendingUp className="w-4 h-4 text-ascend-orange" /></div><span className="text-sm font-semibold text-ascend-orange">{caseStudy.result}</span></div>
                    <h3 className="text-xl font-semibold text-ascend-black group-hover:text-ascend-orange transition-colors">{caseStudy.title}</h3>
                    <p className="text-ascend-gray-600 text-sm mt-2 line-clamp-2">{caseStudy.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">{caseStudy.tags.slice(0, 3).map((tag, i) => (<Badge key={i} variant="default">{tag}</Badge>))}</div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div className="mt-12 md:mt-16 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Link href="/case" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-ascend-black text-sm font-medium rounded-lg border border-ascend-gray-200 hover:bg-ascend-gray-50 transition-colors">Se alla case<ArrowRight className="w-4 h-4" /></Link>
        </motion.div>
      </div>
    </section>
  )
}
