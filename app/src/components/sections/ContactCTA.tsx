'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ascend-orange/10 via-ascend-orange/5 to-ascend-maize/10 border border-ascend-orange/10 p-8 md:p-12 lg:p-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-ascend-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-ascend-maize/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-ascend-black">Redo att ta nästa steg?</h2>
              <p className="mt-4 text-lg text-ascend-gray-600">Låt oss diskutera hur vi kan hjälpa dig att uppnå dina mål. Boka ett kostnadsfritt samtal idag.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="inline-flex items-center justify-center px-8 py-4 bg-ascend-orange text-white font-medium rounded-lg hover:bg-ascend-orange/90 transition-colors group"><Mail className="w-5 h-5 mr-2" />Kontakta oss<ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" /></Link>
              <Link href="/case" className="inline-flex items-center justify-center px-8 py-4 bg-white text-ascend-black font-medium rounded-lg border border-ascend-gray-200 hover:bg-ascend-gray-50 transition-colors">Se våra case</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
