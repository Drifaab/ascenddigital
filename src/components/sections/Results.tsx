import { motion } from 'framer-motion'
import { TrendingUp, Users, Target, Award } from 'lucide-react'
import { heroStats } from '@/lib/data'

export default function Results() {
  const icons = [<TrendingUp key="1" className="w-5 h-5 md:w-6 md:h-6 text-ascend-orange" />, <Users key="2" className="w-5 h-5 md:w-6 md:h-6 text-ascend-orange" />, <Target key="3" className="w-5 h-5 md:w-6 md:h-6 text-ascend-orange" />, <Award key="4" className="w-5 h-5 md:w-6 md:h-6 text-ascend-orange" />]
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-3xl mx-auto mb-12 md:mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ascend-black">Siffror som <span className="text-ascend-orange">talar</span></h2>
          <p className="mt-4 text-lg text-ascend-gray-600">Resultat från vårt arbete med kunder över hela världen.</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {heroStats.map((stat: typeof heroStats[0], index: number) => (
            <motion.div key={index} className="p-4 md:p-6 bg-white rounded-xl border border-ascend-gray-100" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-ascend-orange/10 rounded-lg flex items-center justify-center mb-3 md:mb-4">{icons[index]}</div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-ascend-black">{stat.value}</div>
              <p className="mt-1 md:mt-2 text-sm md:text-base text-ascend-gray-600">{stat.label}</p>
              {stat.subtext && <p className="mt-0.5 text-xs md:text-sm text-ascend-gray-400">{stat.subtext}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
