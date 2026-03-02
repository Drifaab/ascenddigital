'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems, services, caseStudies } from '@/lib/data'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 20) }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => { if (href === '/') return pathname === '/'; return pathname.startsWith(href) }

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent')}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-ascend-orange rounded-lg flex items-center justify-center"><span className="text-white font-bold text-lg md:text-xl">A</span></div>
            <span className="font-bold text-ascend-black text-lg md:text-xl hidden sm:block">Ascend Digital</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <div className="relative" onMouseEnter={() => setActiveDropdown('tjanster')} onMouseLeave={() => setActiveDropdown(null)}>
              <Link href="/tjanster" className={cn('flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors', isActive('/tjanster') ? 'text-ascend-orange' : 'text-ascend-gray-600 hover:text-ascend-black')}>Tjänster<ChevronDown className={cn('w-4 h-4 transition-transform', activeDropdown === 'tjanster' && 'rotate-180')} /></Link>
              <AnimatePresence>{activeDropdown === 'tjanster' && (<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-ascend-gray-100 overflow-hidden">{services.map((s) => (<Link key={s.slug} href={`/tjanster/${s.slug}`} className="block px-4 py-3 text-sm text-ascend-gray-700 hover:bg-ascend-gray-50 hover:text-ascend-orange transition-colors">{s.title}</Link>))}</motion.div>)}</AnimatePresence>
            </div>
            <div className="relative" onMouseEnter={() => setActiveDropdown('case')} onMouseLeave={() => setActiveDropdown(null)}>
              <Link href="/case" className={cn('flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors', isActive('/case') ? 'text-ascend-orange' : 'text-ascend-gray-600 hover:text-ascend-black')}>Case<ChevronDown className={cn('w-4 h-4 transition-transform', activeDropdown === 'case' && 'rotate-180')} /></Link>
              <AnimatePresence>{activeDropdown === 'case' && (<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-ascend-gray-100 overflow-hidden">{caseStudies.slice(0, 4).map((c) => (<Link key={c.slug} href={`/case/${c.slug}`} className="block px-4 py-3 text-sm text-ascend-gray-700 hover:bg-ascend-gray-50 hover:text-ascend-orange transition-colors">{c.title}</Link>))}</motion.div>)}</AnimatePresence>
            </div>
            {navItems.slice(2).map((item) => (<Link key={item.href} href={item.href} className={cn('px-4 py-2 text-sm font-medium rounded-lg transition-colors', isActive(item.href) ? 'text-ascend-orange' : 'text-ascend-gray-600 hover:text-ascend-black')}>{item.label}</Link>))}
          </div>

          <div className="hidden lg:block"><Link href="/kontakt" className="inline-flex items-center px-5 py-2.5 bg-ascend-orange text-white text-sm font-medium rounded-lg hover:bg-ascend-orange/90 transition-colors">Kontakta oss</Link></div>
          <button className="lg:hidden p-2 text-ascend-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>
      </nav>

      <AnimatePresence>{isMobileMenuOpen && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-white border-t border-ascend-gray-100">
        <div className="px-4 py-4 space-y-2">
          <Link href="/tjanster" className="block px-4 py-3 text-ascend-gray-700 hover:bg-ascend-gray-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Tjänster</Link>
          {services.map((s) => (<Link key={s.slug} href={`/tjanster/${s.slug}`} className="block px-4 py-2 pl-8 text-sm text-ascend-gray-600 hover:bg-ascend-gray-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>{s.title}</Link>))}
          <Link href="/case" className="block px-4 py-3 text-ascend-gray-700 hover:bg-ascend-gray-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Case</Link>
          {caseStudies.slice(0, 4).map((c) => (<Link key={c.slug} href={`/case/${c.slug}`} className="block px-4 py-2 pl-8 text-sm text-ascend-gray-600 hover:bg-ascend-gray-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>{c.title}</Link>))}
          <Link href="/om-oss" className="block px-4 py-3 text-ascend-gray-700 hover:bg-ascend-gray-50 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Om oss</Link>
          <Link href="/kontakt" className="block px-4 py-3 bg-ascend-orange text-white text-center rounded-lg mt-4" onClick={() => setIsMobileMenuOpen(false)}>Kontakta oss</Link>
        </div>
      </motion.div>)}</AnimatePresence>
    </header>
  )
}
