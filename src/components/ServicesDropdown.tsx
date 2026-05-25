import { useState, useRef, useEffect, useCallback } from 'react';
import { Search, Share2, Code2, RefreshCw, ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
}

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const services: ServiceItem[] = [
    {
      icon: <Search size={20} />,
      title: 'SEM / SEO / GEO',
      description: 'Datadriven sökstrategi för maximal konvertering',
      href: '/tjanster/sem-seo-geo',
      color: 'from-ascend-orange/20 to-ascend-orange/5',
    },
    {
      icon: <Share2 size={20} />,
      title: 'Paid Social',
      description: 'Kreativ testmetodik i sociala kanaler',
      href: '/tjanster/paid-social',
      color: 'from-ascend-maize/30 to-ascend-maize/10',
    },
    {
      icon: <Code2 size={20} />,
      title: 'Full-stack Development',
      description: 'Skalbara webblösningar för prestanda',
      href: '/tjanster/fullstack-development',
      color: 'from-ascend-gray-300/50 to-ascend-gray-200/20',
    },
    {
      icon: <RefreshCw size={20} />,
      title: 'Agile Business Development',
      description: 'Iterativt arbetssätt med fokus',
      href: '/tjanster/agile-business-development',
      color: 'from-ascend-orange/15 to-ascend-orange/5',
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const handleClick = useCallback((href: string) => {
    setIsOpen(false);
    if (href.startsWith('#')) {
      // Anchor link - navigate to home and scroll
      navigate('/' + href);
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Navigate to new page and scroll to top
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [navigate]);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        className="flex items-center gap-1 text-sm font-medium text-ascend-gray-600 dark:text-ascend-gray-400 hover:text-ascend-black dark:hover:text-white transition-colors relative group py-2"
        onClick={() => handleClick('#tjanster')}
      >
        Tjänster
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-ascend-orange transition-all duration-300 group-hover:w-full" />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
      >
        <div className="relative bg-white dark:bg-ascend-gray-800 rounded-2xl shadow-card dark:shadow-card/30 border border-ascend-gray-100 dark:border-ascend-gray-700 overflow-hidden min-w-[360px]">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-ascend-orange/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-ascend-maize/20 rounded-full blur-3xl animate-pulse animation-delay-500" />
          </div>

          {/* Header */}
          <div className="relative px-6 py-4 border-b border-ascend-gray-100 dark:border-ascend-gray-700">
            <p className="text-xs font-medium text-ascend-orange uppercase tracking-wider">
              Våra tjänster
            </p>
            <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400 mt-1">
              Digital tillväxt genom expertis
            </p>
          </div>

          {/* Service Items */}
          <div className="relative p-3">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleClick(service.href)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`w-full flex items-start gap-4 p-4 rounded-xl transition-all duration-300 group ${
                  hoveredIndex === index
                    ? 'bg-gradient-to-r ' + service.color
                    : 'hover:bg-ascend-gray-50 dark:hover:bg-ascend-gray-700/50'
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'bg-ascend-orange text-white scale-110'
                      : 'bg-ascend-gray-100 dark:bg-ascend-gray-700 text-ascend-gray-600 dark:text-ascend-gray-400 group-hover:text-ascend-orange'
                  }`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-ascend-black dark:text-white group-hover:text-ascend-orange transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400 mt-0.5">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'bg-ascend-orange text-white translate-x-0 opacity-100'
                      : 'bg-ascend-gray-100 dark:bg-ascend-gray-700 text-ascend-gray-400 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                  }`}
                >
                  <ArrowRight size={14} />
                </div>
              </button>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="relative px-6 py-4 bg-ascend-gray-50 dark:bg-ascend-gray-700/50 border-t border-ascend-gray-100 dark:border-ascend-gray-700">
            <button
              onClick={() => handleClick('#tjanster')}
              className="w-full flex items-center justify-center gap-2 text-sm font-medium text-ascend-orange hover:text-ascend-orange/80 transition-colors group"
            >
              Se alla tjänster
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-ascend-orange/10 rounded-full blur-xl" />
          </div>
        </div>

        {/* Arrow Pointer */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-ascend-gray-800 border-l border-t border-ascend-gray-100 dark:border-ascend-gray-700 rotate-45" />
      </div>
    </div>
  );
}
