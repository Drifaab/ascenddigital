import { useState } from 'react';
import { Clock, FileCheck, ArrowRight, ChevronDown, ChevronUp, RefreshCw, Network, FileText } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  details: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

const ProcessStep = ({ number, title, description, details, isExpanded, onToggle }: ProcessStepProps) => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-12 bottom-0 w-px bg-ascend-gray-200 dark:bg-ascend-gray-700 hidden md:block" />
      
      <div className="flex gap-6">
        {/* Number Circle */}
        <div className="flex-shrink-0 w-12 h-12 bg-ascend-orange rounded-full flex items-center justify-center z-10">
          <span className="text-white font-bold text-lg">{number}</span>
        </div>

        {/* Content */}
        <div className="flex-1 pb-8">
          <button
            onClick={onToggle}
            className="w-full text-left group"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl md:text-2xl font-semibold text-ascend-black dark:text-white group-hover:text-ascend-orange transition-colors">
                {title}
              </h3>
              <div className={`w-8 h-8 rounded-full border border-ascend-gray-200 dark:border-ascend-gray-600 flex items-center justify-center transition-all ${isExpanded ? 'bg-ascend-orange border-ascend-orange' : 'group-hover:border-ascend-orange'}`}>
                {isExpanded ? (
                  <ChevronUp size={16} className="text-white" />
                ) : (
                  <ChevronDown size={16} className={`transition-colors ${isExpanded ? 'text-white' : 'text-ascend-gray-400 dark:text-ascend-gray-500 group-hover:text-ascend-orange'}`} />
                )}
              </div>
            </div>
          </button>
          
          <p className="text-ascend-gray-600 dark:text-ascend-gray-400 mt-2 leading-relaxed">
            {description}
          </p>

          {/* Expanded Details */}
          <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <ul className="space-y-2 bg-ascend-gray-50 dark:bg-ascend-gray-800 rounded-xl p-4">
              {details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-ascend-gray-700 dark:text-ascend-gray-300">
                  <span className="w-1.5 h-1.5 bg-ascend-orange rounded-full mt-1.5 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const PillarCard = ({ icon, title, description }: PillarCardProps) => {
  return (
    <div className="group p-6 bg-white dark:bg-ascend-gray-800 rounded-xl border border-ascend-gray-100 dark:border-ascend-gray-700 transition-all duration-300 hover:shadow-soft hover:-translate-y-1">
      <div className="w-12 h-12 bg-ascend-orange/10 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-semibold text-ascend-black dark:text-white mb-2 group-hover:text-ascend-orange transition-colors">
        {title}
      </h4>
      <p className="text-sm text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed mb-4">
        {description}
      </p>
      <button className="inline-flex items-center gap-1 text-sm font-medium text-ascend-orange group/btn">
        Läs mer
        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
      </button>
    </div>
  );
};

const Process = () => {
  const [expandedStep, setExpandedStep] = useState<string | null>('1');

  const steps = [
    {
      number: '1',
      title: 'Nulägesanalys & Målbild',
      description: 'Vi börjar med att förstå din verksamhet, marknad och nuvarande utmaningar.',
      details: [
        'Djupgående analys av nuvarande digital närvaro',
        'Kartläggning av konkurrenter och marknadsmöjligheter',
        'Definiering av tydliga KPI:er och success criteria',
        'Identifiering av snabbvinster och långsiktiga mål',
      ],
    },
    {
      number: '2',
      title: 'Strategi & Prioritering',
      description: 'Baserat på analysen skapar vi en prioriterad backlog med insatser.',
      details: [
        'Datadriven strategi baserad på insikter från analysen',
        'Prioriterad backlog med tydliga leverabler',
        'Resursplanering och tidsuppskattning',
        'Fastställande av mätplan och rapporteringsstruktur',
      ],
    },
    {
      number: '3',
      title: 'Agil Iteration & Testning',
      description: 'Vi arbetar i korta sprintar för att snabbt testa och lära oss.',
      details: [
        '1-2 veckors sprintar med tydliga leverabler',
        'Hypotesstyrd testning av strategier och taktiker',
        'Kontinuerlig optimering baserad på data',
        'Veckovisa avstämningar och justeringar',
      ],
    },
    {
      number: '4',
      title: 'Mätning, Lärande & Skalning',
      description: 'Vi utvärderar resultatet och skalar det som fungerar.',
      details: [
        'Detaljerad analys av resultat mot uppsatta KPI:er',
        'Dokumentation av lärdomar och insikter',
        'Skalning av framgångsrika initiativ',
        'Planering av nästa iterationscykel',
      ],
    },
  ];

  const pillars = [
    {
      icon: <RefreshCw size={20} className="text-ascend-orange" />,
      title: 'Agil Iteration',
      description: 'Vi mäter, lär oss och ställer om – snabbt. Inga långa projektplaner som tar månader att genomföra.',
      link: '/agilt-mindset',
    },
    {
      icon: <Network size={20} className="text-ascend-orange" />,
      title: 'Specialistnätverk',
      description: 'Vi handplockar rätt kompetens (utveckling, design, e-handel) för varje unikt behov.',
      link: '/partnerskap-och-natverk',
    },
    {
      icon: <FileText size={20} className="text-ascend-orange" />,
      title: 'Flexibla Modeller',
      description: 'Kontrakt som är byggda för din tillväxt, inte för vår bekvämlighet.',
      link: '/avtalsformer',
    },
  ];

  return (
    <section id="process" className="section-spacing bg-white dark:bg-ascend-black transition-colors duration-300">
      <div className="section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ascend-orange/5 dark:bg-ascend-orange/10 rounded-full border border-ascend-orange/10 dark:border-ascend-orange/20 mb-6">
              <Clock size={14} className="text-ascend-orange" />
              <span className="text-xs font-medium text-ascend-orange uppercase tracking-wider">
                Hur vi jobbar
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ascend-black dark:text-white mb-6 text-balance">
              Vi jobbar inte för dig –{' '}
              <span className="text-ascend-orange">vi jobbar med dig</span>
            </h2>
            <p className="text-lg text-ascend-gray-600 dark:text-ascend-gray-400 leading-relaxed">
              På Ascend Digital tror vi inte på stela processer som tar månader att starta. 
              Vi tror på momentum. Genom att kombinera expertis inom Googles ekosystem med 
              ett agilt arbetssätt, fungerar vi som en förlängd arm till din marknadsavdelning.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Timeline */}
            <div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-8">
                Vår process
              </h3>
              <div className="space-y-0">
                {steps.map((step) => (
                  <ProcessStep
                    key={step.number}
                    {...step}
                    isExpanded={expandedStep === step.number}
                    onToggle={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
                  />
                ))}
              </div>
            </div>

            {/* Right - Three Pillars */}
            <div>
              <h3 className="text-xl font-semibold text-ascend-black dark:text-white mb-8">
                De tre pelarna
              </h3>
              <div className="space-y-4">
                {pillars.map((pillar, index) => (
                  <PillarCard key={index} {...pillar} />
                ))}
              </div>

              {/* Contract Types */}
              <div className="mt-8 p-6 bg-ascend-gray-50 dark:bg-ascend-gray-800 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <FileCheck size={18} className="text-ascend-orange" />
                  <h4 className="font-semibold text-ascend-black dark:text-white">Samarbetstyper</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ascend-orange rounded-full mt-2" />
                    <div>
                      <p className="font-medium text-ascend-black dark:text-white text-sm">Löpande Resurs (Fast)</p>
                      <p className="text-xs text-ascend-gray-600 dark:text-ascend-gray-400">Fast månadsarvode för strategisk partner över tid</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ascend-maize rounded-full mt-2" />
                    <div>
                      <p className="font-medium text-ascend-black dark:text-white text-sm">Agilt Projekt (Lösningsbaserat)</p>
                      <p className="text-xs text-ascend-gray-600 dark:text-ascend-gray-400">Projekt- eller sprintbaserat scope för specifika utmaningar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
