'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, TrendingUp, Mail, FileText, ArrowRight } from 'lucide-react'
import { services } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Search, TrendingUp, Mail, FileText }

export function Services() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Vad vi gör" title="Tjänster som driver" highlight="digital tillväxt" description="Vi kombinerar expertis inom Googles ekosystem med ett agilt arbetssätt för att leverera mätbara resultat." />
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Search
            const colorClasses = { orange: 'bg-ascend-orange/5 border-ascend-orange/10 hover:border-ascend-orange/30', maize: 'bg-ascend-maize/10 border-ascend-maize/20 hover:border-ascend-maize/40', gray: 'bg-ascend-gray-50 border-ascend-gray-100 hover:border-ascend-gray-300' }
            const iconColors = { orange: 'bg-ascend-orange/10 text-ascend-orange', maize: 'bg-ascend-maize/30 text-ascend-black', gray: 'bg-ascend-gray-200 text-ascend-black' }
            return (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <Link href={`/tjanster/${service.slug}`} className={`group block p-6 md:p-8 rounded-2xl border ${colorClasses[service.color]} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                  <div className={`w-14 h-14 rounded-xl ${iconColors[service.color]} flex items-center justify-center mb-6`}><Icon className="w-6 h-6" /></div>
                  <div className="space-y-4">
                    <div><p className="text-xs font-medium text-ascend-gray-500 uppercase tracking-wider mb-2">{service.subtitle}</p><h3 className="text-xl md:text-2xl font-semibold text-ascend-black group-hover:text-ascend-orange transition-colors">{service.title}</h3></div>
                    <p className="text-ascend-gray-600 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 pt-4">{service.features.slice(0, 3).map((feature, i) => (<li key={i} className="flex items-start gap-2 text-sm text-ascend-gray-600"><span className="w-1.5 h-1.5 bg-ascend-orange rounded-full mt-1.5 flex-shrink-0" />{feature}</li>))}</ul>
                    <div className="pt-4 flex items-center gap-2 text-sm font-medium text-ascend-orange">Läs mer<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
        <motion.div className="mt-12 md:mt-16 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Link href="/tjanster" className="inline-flex items-center gap-2 px-6 py-3 bg-ascend-black text-white text-sm font-medium rounded-lg hover:bg-ascend-black/90 transition-colors">Se alla tjänster<ArrowRight className="w-4 h-4" /></Link>
        </motion.div>
      </div>
    </section>
  )
}
