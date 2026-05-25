import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems, services, caseStudies } from '@/lib/data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [currentHash, setCurrentHash] = useState(window.location.hash)

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 20) }
    window.addEventListener('scroll', handleScroll)
    
    const handleHashChange = () => setCurrentHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const isActive = (href: string) => {
    if (href === '#' || href === '') return currentHash === '' || currentHash === '#'
    return currentHash === href.slice(1) || currentHash.startsWith(href.slice(1))
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      window.location.hash = href.slice(1)
    } else {
      window.location.hash = href
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300', isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent')}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button onClick={() => handleNavClick('#')} className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-ascend-orange rounded-lg flex items-center justify-center"><span className="text-white font-bold text-lg md:text-xl">A</span></div>
            <span className="font-bold text-ascend-black text-lg md:text-xl hidden sm:block">Ascend Digital</span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            <div className="relative" onMouseEnter={() => setActiveDropdown('tjanster')} onMouseLeave={() => setActiveDropdown(null)}>
              <button onClick={() => handleNavClick('#tjanster')} className={cn('flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors', isActive('#tjanster') ? 'text-ascend-orange' : 'text-ascend-gray-600 hover:text-ascend-black')}>Tjänster<ChevronDown className={cn('w-4 h-4 transition-transform', activeDropdown === 'tjanster' && 'rotate-180')} /></button>
              <AnimatePresence>{activeDropdown === 'tjanster' && (<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-ascend-gray-100 overflow-hidden">{services.map((s: typeof services[0]) => (<button key={s.slug} onClick={() => handleNavClick('#tjanster')} className="block w-full text-left px-4 py-3 text-sm text-ascend-gray-700 hover:bg-ascend-gray-50 hover:text-ascend-orange transition-colors">{s.title}</button>))}</motion.div>)}</AnimatePresence>
            </div>
            <div className="relative" onMouseEnter={() => setActiveDropdown('case')} onMouseLeave={() => setActiveDropdown(null)}>
              <button onClick={() => handleNavClick('#case')} className={cn('flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors', isActive('#case') ? 'text-ascend-orange' : 'text-ascend-gray-600 hover:text-ascend-black')}>Case<ChevronDown className={cn('w-4 h-4 transition-transform', activeDropdown === 'case' && 'rotate-180')} /></button>
              <AnimatePresence>{activeDropdown === 'case' && (<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-ascend-gray-100 overflow-hidden">{caseStudies.slice(0, 4).map((c: typeof caseStudies[0]) => (<button key={c.slug} onClick={() => handleNavClick(c.href)} className="block w-full text-left px-4 py-3 text-sm text-ascend-gray-700 hover:bg-ascend-gray-50 hover:text-ascend-orange transition-colors">{c.title}</button>))}</motion.div>)}</AnimatePresence>
            </div>
            {navItems.slice(2).map((item: typeof navItems[0]) => (<button key={item.href} onClick={() => handleNavClick(item.href)} className={cn('px-4 py-2 text-sm font-medium rounded-lg transition-colors', isActive(item.href) ? 'text-ascend-orange' : 'text-ascend-gray-600 hover:text-ascend-black')}>{item.label}</button>))}
          </div>

          <div className="hidden lg:block"><button onClick={() => handleNavClick('#contact')} className="inline-flex items-center px-5 py-2.5 bg-ascend-orange text-white text-sm font-medium rounded-lg hover:bg-ascend-orange/90 transition-colors">Kontakta oss</button></div>
          <button className="lg:hidden p-2 text-ascend-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>
      </nav>

      <AnimatePresence>{isMobileMenuOpen && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-white border-t border-ascend-gray-100">
        <div className="px-4 py-4 space-y-2">
          <button onClick={() => handleNavClick('#tjanster')} className="block w-full text-left px-4 py-3 text-ascend-gray-700 hover:bg-ascend-gray-50 rounded-lg">Tjänster</button>
          {services.map((s: typeof services[0]) => (<button key={s.slug} onClick={() => handleNavClick('#tjanster')} className="block w-full text-left px-4 py-2 pl-8 text-sm text-ascend-gray-600 hover:bg-ascend-gray-50 rounded-lg">{s.title}</button>))}
          <button onClick={() => handleNavClick('#case')} className="block w-full text-left px-4 py-3 text-ascend-gray-700 hover:bg-ascend-gray-50 rounded-lg">Case</button>
          {caseStudies.slice(0, 4).map((c: typeof caseStudies[0]) => (<button key={c.slug} onClick={() => handleNavClick(c.href)} className="block w-full text-left px-4 py-2 pl-8 text-sm text-ascend-gray-600 hover:bg-ascend-gray-50 rounded-lg">{c.title}</button>))}
          <button onClick={() => handleNavClick('#process')} className="block w-full text-left px-4 py-3 text-ascend-gray-700 hover:bg-ascend-gray-50 rounded-lg">Hur vi jobbar</button>
          <button onClick={() => handleNavClick('#contact')} className="block w-full text-left px-4 py-3 bg-ascend-orange text-white text-center rounded-lg mt-4">Kontakta oss</button>
        </div>
      </motion.div>)}</AnimatePresence>
    </header>
  )
}
