import { useState, useEffect, useRef } from 'react';
import { Menu, X, Search, Share2, Code2, RefreshCw, TrendingUp, ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ServicesDropdown } from '@/components/ServicesDropdown';
import { CaseDropdown } from '@/components/CaseDropdown';

/* ─── shared data (mirrors desktop dropdowns) ─────────────────────────── */

const services = [
  {
    icon: <Search size={18} />,
    title: 'SEM / SEO / GEO',
    description: 'Datadriven sökstrategi för maximal konvertering',
    href: '/tjanster/sem-seo-geo',
    accent: 'from-orange-500/20 to-orange-400/5',
  },
  {
    icon: <Share2 size={18} />,
    title: 'Paid Social',
    description: 'Kreativ testmetodik i sociala kanaler',
    href: '/tjanster/paid-social',
    accent: 'from-yellow-400/30 to-yellow-300/10',
  },
  {
    icon: <Code2 size={18} />,
    title: 'Full-stack Development',
    description: 'Skalbara webblösningar för prestanda',
    href: '/tjanster/fullstack-development',
    accent: 'from-gray-300/40 to-gray-200/10',
  },
  {
    icon: <RefreshCw size={18} />,
    title: 'Agile Business Development',
    description: 'Iterativt arbetssätt med fokus',
    href: '/tjanster/agile-business-development',
    accent: 'from-orange-400/15 to-orange-300/5',
  },
];

const cases = [
  {
    image: '/images/case-nordic-fulfillment.jpg',
    title: 'Nordic Fulfillment',
    result: '1000% ökning',
    description: 'Global dominans inom Nicotine Pouches',
    href: '/case/nordic-fulfillment',
  },
  {
    image: '/images/case-nordic-bangers.jpg',
    title: 'Nordic Bangers',
    result: 'Helhetsstrategi',
    description: 'Wholesale-succé för svenskt lösgodis',
    href: '/case/nordic-bangers',
  },
  {
    image: '/images/case-nordic-refreshment.jpg',
    title: 'Nordic Refreshment',
    result: 'Delägare',
    description: 'Från idé till marknadsledande sortiment',
    href: '/case/nordic-refreshment',
  },
  {
    image: '/images/case-riad-cosmetics.jpg',
    title: 'Riad Cosmetics',
    result: '12x ROAS',
    description: 'Omnichannel-strategi för parfym',
    href: '/case/riad-cosmetics',
  },
];

/* ─── Mobile accordion component ─────────────────────────────────────── */

interface MobileAccordionProps {
  label: string;
  badge: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function MobileAccordion({ label, badge, isOpen, onToggle, children }: MobileAccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="overflow-hidden">
      {/* Trigger row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 px-1 group"
      >
        <div className="flex items-center gap-3">
          {/* Animated indicator dot */}
          <span
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              isOpen ? 'bg-ascend-orange scale-125' : 'bg-ascend-gray-300 dark:bg-ascend-gray-600'
            }`}
          />
          <span className="text-lg font-semibold text-ascend-gray-800 dark:text-ascend-gray-200 group-hover:text-ascend-black dark:group-hover:text-white transition-colors">
            {label}
          </span>
          {/* count badge */}
          <span className="text-[10px] font-bold uppercase tracking-widest text-ascend-orange/70 mt-0.5">
            {badge}
          </span>
        </div>

        {/* Animated chevron pill */}
        <span
          className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-ascend-orange border-ascend-orange text-white rotate-180'
              : 'border-ascend-gray-200 dark:border-ascend-gray-700 text-ascend-gray-400 dark:text-ascend-gray-500'
          }`}
        >
          <ChevronDown size={14} />
        </span>
      </button>

      {/* Smooth height-animated content */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 800}px` : '0px',
        }}
        className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
      >
        <div className="pb-2 pt-1">{children}</div>
      </div>
    </div>
  );
}

/* ─── Navigation ──────────────────────────────────────────────────────── */

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<'services' | 'cases' | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      // Anchor link
      if (location.pathname !== '/') {
        // Navigate to home page with hash
        navigate('/' + href);
      } else {
        // On home page, update URL hash and scroll
        navigate(href, { replace: true });
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
    setOpenAccordion(null);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAccordion = (key: 'services' | 'cases') =>
    setOpenAccordion((prev) => (prev === key ? null : key));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-transparent
        ${isScrolled
          ? 'md:bg-white/95 md:dark:bg-ascend-black/95 md:backdrop-blur-md md:shadow-soft'
          : ''
        }`}
    >
      <nav className="section-padding">
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <img
                src="/images/Ascend Digital logo - full - jet black PNG_Rityta 1 (1).png"
                alt="Ascend Digital"
                className="h-8 md:h-10 w-auto dark:invert"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <ServicesDropdown />
              <CaseDropdown />
              
              <button
                onClick={() => scrollToSection('#process')}
                className="text-sm font-medium text-ascend-gray-600 dark:text-ascend-gray-400 hover:text-ascend-black dark:hover:text-white transition-colors relative group py-2"
              >
                Hur vi jobbar
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-ascend-orange transition-all duration-300 group-hover:w-full" />
              </button>

            </div>

            {/* CTA + Theme toggle (desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <button onClick={() => scrollToSection('#contact')} className="btn-primary">
                Kontakt
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-ascend-black dark:text-white"
              onClick={() => {
                setIsMobileMenuOpen((v) => !v);
                setOpenAccordion(null);
              }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════════
          MOBILE MENU
      ════════════════════════════════════════ */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-transparent transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Wrapper — glows live here, outside overflow-hidden card */}
        <div className="relative mx-3 mb-3">

          {/* Ambient glow blobs — always visible, scroll-independent */}
          <div className="absolute -top-6 left-1/3 w-56 h-28 bg-ascend-orange/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute bottom-10 -right-4 w-40 h-40 bg-ascend-maize/15 rounded-full blur-3xl pointer-events-none animate-pulse [animation-delay:600ms]" />
          <div className="absolute bottom-0 left-4 w-32 h-24 bg-ascend-orange/10 rounded-full blur-2xl pointer-events-none animate-pulse [animation-delay:300ms]" />

          {/* Frosted glass card — no overflow-hidden so glows bleed through */}
          <div className="relative rounded-2xl bg-white/96 dark:bg-ascend-gray-900/96 backdrop-blur-xl shadow-2xl border border-white/80 dark:border-ascend-gray-700/50 ring-1 ring-ascend-gray-100/40 dark:ring-white/5">

          <div className="relative px-5 pt-5 pb-6 flex flex-col gap-0.5">

            {/* ── TJÄNSTER accordion ─────────────── */}
            <MobileAccordion
              label="Tjänster"
              badge={`${services.length} tjänster`}
              isOpen={openAccordion === 'services'}
              onToggle={() => toggleAccordion('services')}
            >
              <div className="flex flex-col gap-1.5 mt-1">
                {services.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSection(s.href)}
                    className={`group w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-gradient-to-r ${s.accent} hover:brightness-105 active:scale-[0.98] transition-all duration-200 text-left`}
                  >
                    {/* Icon */}
                    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/70 dark:bg-white/10 flex items-center justify-center text-ascend-orange shadow-sm">
                      {s.icon}
                    </span>
                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-ascend-black dark:text-white leading-tight">
                        {s.title}
                      </p>
                      <p className="text-xs text-ascend-gray-500 dark:text-ascend-gray-400 mt-0.5 truncate">
                        {s.description}
                      </p>
                    </div>
                    {/* Arrow reveal */}
                    <ArrowRight
                      size={13}
                      className="flex-shrink-0 text-ascend-orange opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </button>
                ))}

                {/* See all */}
                <button
                  onClick={() => scrollToSection('#tjanster')}
                  className="mt-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-dashed border-ascend-orange/40 text-xs font-semibold text-ascend-orange hover:bg-ascend-orange/5 transition-colors group"
                >
                  Se alla tjänster
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </MobileAccordion>

            {/* Divider */}
            <div className="h-px bg-ascend-gray-100 dark:bg-ascend-gray-700/60 mx-1 my-0.5" />

            {/* ── CASE accordion ─────────────────── */}
            <MobileAccordion
              label="Case"
              badge={`${cases.length} case`}
              isOpen={openAccordion === 'cases'}
              onToggle={() => toggleAccordion('cases')}
            >
              <div className="flex flex-col gap-1.5 mt-1">
                {cases.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToSection(c.href)}
                    className="group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-ascend-gray-50 dark:hover:bg-ascend-gray-800/60 active:scale-[0.98] transition-all duration-200 text-left"
                  >
                    {/* Thumbnail */}
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg overflow-hidden relative bg-ascend-gray-100 dark:bg-ascend-gray-700">
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-ascend-orange/0 group-hover:bg-ascend-orange/20 transition-colors duration-300" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-ascend-black dark:text-white leading-tight group-hover:text-ascend-orange transition-colors">
                        {c.title}
                      </p>
                      <p className="text-xs text-ascend-gray-500 dark:text-ascend-gray-400 mt-0.5 truncate">
                        {c.description}
                      </p>
                    </div>

                    {/* Result badge */}
                    <span className="flex-shrink-0 flex items-center gap-1 px-2 py-1 bg-ascend-orange/10 rounded-full">
                      <TrendingUp size={10} className="text-ascend-orange" />
                      <span className="text-[10px] font-bold text-ascend-orange whitespace-nowrap">
                        {c.result}
                      </span>
                    </span>
                  </button>
                ))}

                {/* See all */}
                <button
                  onClick={() => scrollToSection('#case')}
                  className="mt-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-dashed border-ascend-orange/40 text-xs font-semibold text-ascend-orange hover:bg-ascend-orange/5 transition-colors group"
                >
                  Se alla case
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </MobileAccordion>

            {/* Divider */}
            <div className="h-px bg-ascend-gray-100 dark:bg-ascend-gray-700/60 mx-1 my-0.5" />

            {/* ── Static nav links ───────────────── */}
            {[
              { label: 'Hur vi jobbar', href: '#process' },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="w-full flex items-center justify-between py-3 px-1 text-lg font-semibold text-ascend-gray-800 dark:text-ascend-gray-200 hover:text-ascend-black dark:hover:text-white transition-colors group text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-ascend-gray-300 dark:bg-ascend-gray-600 group-hover:bg-ascend-orange transition-colors duration-200" />
                  {link.label}
                </div>
                <ArrowRight
                  size={14}
                  className="text-ascend-gray-300 dark:text-ascend-gray-600 group-hover:text-ascend-orange group-hover:translate-x-0.5 transition-all duration-200"
                />
              </button>
            ))}

            {/* ── Bottom bar: theme + CTA ─────────── */}
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-ascend-gray-50 dark:bg-ascend-gray-800/80">
                <ThemeToggle />
                <span className="text-xs text-ascend-gray-500 dark:text-ascend-gray-400">Tema</span>
              </div>
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary flex-1"
              >
                Kontakt
              </button>
            </div>
          </div>
          </div>{/* /frosted card */}
        </div>{/* /glow wrapper */}
      </div>
    </header>
  );
};

export default Navigation;
