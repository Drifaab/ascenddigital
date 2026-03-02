'use client'

import { useEffect, useRef, useState } from 'react'
import { parseCounterValue } from '@/lib/utils'

// Custom useInView hook using IntersectionObserver
function useInView(
  ref: React.RefObject<Element>,
  options?: { once?: boolean; margin?: string }
): boolean {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (options?.once) {
            observer.unobserve(element)
          }
        } else if (!options?.once) {
          setIsInView(false)
        }
      },
      { rootMargin: options?.margin || '0px' }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [ref, options?.once, options?.margin])

  return isInView
}

interface AnimatedCounterProps { value: string; duration?: number; className?: string }

export function AnimatedCounter({ value, duration = 2, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState('0')
  const { num, suffix, prefix } = parseCounterValue(value)
  const hasDecimal = value.includes('.') || value.includes(',')
  
  useEffect(() => {
    if (!isInView) return
    let startTime: number
    let animationFrame: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentNum = num * easeOutQuart
      let formattedNum: string
      if (hasDecimal) { formattedNum = currentNum.toFixed(1).replace('.', ',') } 
      else { formattedNum = Math.round(currentNum).toString() }
      setDisplayValue(formattedNum)
      if (progress < 1) { animationFrame = requestAnimationFrame(animate) }
    }
    animationFrame = requestAnimationFrame(animate)
    return () => { if (animationFrame) cancelAnimationFrame(animationFrame) }
  }, [isInView, num, duration, hasDecimal])
  
  return <span ref={ref} className={className}>{prefix}{displayValue}{suffix}</span>
}
