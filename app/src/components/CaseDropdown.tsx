import { useState, useRef, useEffect } from 'react';
import { TrendingUp, ArrowRight, ChevronDown } from 'lucide-react';

interface CaseItem {
  image: string;
  title: string;
  result: string;
  description: string;
  href: string;
}

interface CaseDropdownProps {
  onNavigate: (href: string) => void;
}

export function CaseDropdown({ onNavigate }: CaseDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cases: CaseItem[] = [
    {
      image: '/images/case-nordic-fulfillment.jpg',
      title: 'Nordic Fulfillment',
      result: '1000% ökning',
      description: 'Optimerad ROAS och skalbar annonsering',
      href: '#case',
    },
    {
      image: '/images/case-nordic-bangers.jpg',
      title: 'Nordic Bangers',
      result: 'Helhetsstrategi',
      description: 'B2B/B2C strategi för godistillverkare',
      href: '#case',
    },
    {
      image: '/images/case-nordic-refreshment.jpg',
      title: 'Nordic Refreshment',
      result: 'Marknadsledare',
      description: 'Från idé till ledande varumärke',
      href: '#case',
    },
    {
      image: '/images/case-riad-cosmetics.jpg',
      title: 'Riad Cosmetics',
      result: '12x ROAS',
      description: 'Avancerad PMAX-optimering',
      href: '#case',
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

  const handleClick = (href: string) => {
    setIsOpen(false);
    onNavigate(href);
  };

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
        onClick={() => handleClick('#case')}
      >
        Case
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
        <div className="relative bg-white dark:bg-ascend-gray-800 rounded-2xl shadow-card dark:shadow-card/30 border border-ascend-gray-100 dark:border-ascend-gray-700 overflow-hidden min-w-[400px]">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-ascend-orange/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-ascend-maize/20 rounded-full blur-3xl animate-pulse animation-delay-500" />
          </div>

          {/* Header */}
          <div className="relative px-6 py-4 border-b border-ascend-gray-100 dark:border-ascend-gray-700">
            <p className="text-xs font-medium text-ascend-orange uppercase tracking-wider">
              Case Studies
            </p>
            <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400 mt-1">
              Resultat som talar för sig själva
            </p>
          </div>

          {/* Case Items */}
          <div className="relative p-3">
            {cases.map((caseItem, index) => (
              <button
                key={index}
                onClick={() => handleClick(caseItem.href)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group ${
                  hoveredIndex === index
                    ? 'bg-ascend-gray-50 dark:bg-ascend-gray-700/50'
                    : 'hover:bg-ascend-gray-50 dark:hover:bg-ascend-gray-700/50'
                }`}
              >
                {/* Image */}
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden relative">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-ascend-orange/20 transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-ascend-black dark:text-white group-hover:text-ascend-orange transition-colors">
                      {caseItem.title}
                    </h4>
                  </div>
                  <p className="text-sm text-ascend-gray-500 dark:text-ascend-gray-400">
                    {caseItem.description}
                  </p>
                </div>

                {/* Result Badge */}
                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-ascend-orange/10 rounded-full">
                  <TrendingUp size={12} className="text-ascend-orange" />
                  <span className="text-xs font-semibold text-ascend-orange">
                    {caseItem.result}
                  </span>
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
              onClick={() => handleClick('#case')}
              className="w-full flex items-center justify-center gap-2 text-sm font-medium text-ascend-orange hover:text-ascend-orange/80 transition-colors group"
            >
              Se alla case
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
