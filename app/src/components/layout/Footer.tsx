import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react'
import { services, caseStudies, navItems } from '@/lib/data'

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      window.location.hash = href.slice(1);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <footer id="contact" className="bg-ascend-black text-white">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Redo att växa <span className="text-ascend-orange">digitalt?</span></h2>
              <p className="mt-4 text-white/70 text-lg">Låt oss prata om hur vi kan hjälpa dig att bygga, optimera och skala din digitala närvaro med datadriven agilitet.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:hello@ascenddigital.se" className="inline-flex items-center justify-center px-8 py-4 bg-ascend-orange text-white font-medium rounded-lg hover:bg-ascend-orange/90 transition-colors"><Mail className="w-5 h-5 mr-2" />Maila oss</a>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-colors">Boka ett möte</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('#'); }} className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-ascend-orange rounded-lg flex items-center justify-center"><span className="text-white font-bold text-xl">A</span></div>
              <span className="font-bold text-white text-xl">Ascend Digital</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-6">Vi bygger, optimerar och skalar din digitala närvaro med ett agilt arbetssätt. Din partner för datadriven tillväxt.</p>
            <div className="space-y-3">
              <a href="mailto:hello@ascenddigital.se" className="flex items-center gap-3 text-sm text-white/60 hover:text-ascend-orange transition-colors"><Mail className="w-4 h-4" />hello@ascenddigital.se</a>
              <a href="tel:+46701234567" className="flex items-center gap-3 text-sm text-white/60 hover:text-ascend-orange transition-colors"><Phone className="w-4 h-4" />+46 70 123 45 67</a>
              <div className="flex items-start gap-3 text-sm text-white/60"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" /><span>Stockholm, Sverige</span></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Tjänster</h4>
            <ul className="space-y-3">{services.map((s: typeof services[0]) => (<li key={s.slug}><button onClick={() => handleNavClick('#tjanster')} className="text-sm text-white/60 hover:text-ascend-orange transition-colors text-left">{s.title}</button></li>))}</ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Case</h4>
            <ul className="space-y-3">{caseStudies.slice(0, 4).map((c: typeof caseStudies[0]) => (<li key={c.slug}><button onClick={() => handleNavClick(c.href)} className="text-sm text-white/60 hover:text-ascend-orange transition-colors text-left">{c.title}</button></li>))}</ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Om Oss</h4>
            <ul className="space-y-3">{navItems.slice(2).map((item: typeof navItems[0]) => (<li key={item.href}><button onClick={() => handleNavClick(item.href)} className="text-sm text-white/60 hover:text-ascend-orange transition-colors text-left">{item.label}</button></li>))}</ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">{new Date().getFullYear()} Ascend Digital. Alla rättigheter förbehållna.</p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-ascend-orange transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-ascend-orange transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-ascend-orange transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
