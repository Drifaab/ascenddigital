import { motion } from 'framer-motion'
import { Search, Share2, Code2, RefreshCw } from 'lucide-react'
import { services } from '@/lib/data'
import { SectionHeader } from '@/components/ui/SectionHeader'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { 
  Search, 
  Share2, 
  Code2, 
  RefreshCw 
}

export default function Services() {
  return (
    <section id="tjanster" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Vad vi gör" title="Tjänster som driver" highlight="digital tillväxt" description="Vi kombinerar expertis inom Googles ekosystem med ett agilt arbetssätt för att leverera mätbara resultat." />
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service: typeof services[0], index: number) => {
            const Icon = iconMap[service.slug === 'sem-seo-geo' ? 'Search' : service.slug === 'paid-social' ? 'Share2' : service.slug === 'fullstack-development' ? 'Code2' : 'RefreshCw'] || Search
            const colorClasses: Record<string, string> = { orange: 'bg-ascend-orange/5 border-ascend-orange/10 hover:border-ascend-orange/30', maize: 'bg-ascend-maize/10 border-ascend-maize/20 hover:border-ascend-maize/40', gray: 'bg-ascend-gray-50 border-ascend-gray-100 hover:border-ascend-gray-300' }
            const iconColors: Record<string, string> = { orange: 'bg-ascend-orange/10 text-ascend-orange', maize: 'bg-ascend-maize/30 text-ascend-black', gray: 'bg-ascend-gray-200 text-ascend-black' }
            return (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div className={`group block p-6 md:p-8 rounded-2xl border ${colorClasses[service.color]} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                  <div className={`w-14 h-14 rounded-xl ${iconColors[service.color]} flex items-center justify-center mb-6`}><Icon className="w-6 h-6" /></div>
                  <div className="space-y-4">
                    <div><h3 className="text-xl md:text-2xl font-semibold text-ascend-black group-hover:text-ascend-orange transition-colors">{service.title}</h3></div>
                    <p className="text-ascend-gray-600 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 pt-4">{service.features.slice(0, 3).map((feature: string, i: number) => (<li key={i} className="flex items-start gap-2 text-sm text-ascend-gray-600"><span className="w-1.5 h-1.5 bg-ascend-orange rounded-full mt-1.5 flex-shrink-0" />{feature}</li>))}</ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
