'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Badge } from './Badge'
import { SectionHeaderProps } from '@/lib/types'

export function SectionHeader({ badge, badgeIcon, title, highlight, description, align = 'left' }: SectionHeaderProps) {
  return (
    <motion.div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }}>
      {badge && <Badge variant="orange" icon={badgeIcon} className="mb-4 md:mb-6">{badge}</Badge>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ascend-black leading-tight">{title} <span className="text-ascend-orange">{highlight}</span></h2>
      {description && <p className="mt-4 md:mt-6 text-base md:text-lg text-ascend-gray-600 leading-relaxed">{description}</p>}
    </motion.div>
  )
}
