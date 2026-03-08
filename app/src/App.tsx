import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigationType } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import CaseStudies from './sections/CaseStudies';
import Process from './sections/Process';
import PillarAgilIteration from './sections/PillarAgilIteration';
import PillarSpecialistnatverk from './sections/PillarSpecialistnatverk';
import PillarFlexiblaModeller from './sections/PillarFlexiblaModeller';

import Footer from './sections/Footer';

import CaseNordicFulfillment from './sections/CaseNordicFulfillment';
import CaseNordicBangers from './sections/CaseNordicBangers';
import CaseRiadCosmetics from './sections/CaseRiadCosmetics';
import CaseNordicRefreshment from './sections/CaseNordicRefreshment';

import ServiceSemSeoGeo from './sections/ServiceSemSeoGeo';
import ServicePaidSocial from './sections/ServicePaidSocial';
import ServiceFullstackDev from './sections/ServiceFullstackDev';
import ServiceAgileBizDev from './sections/ServiceAgileBizDev';

// Enable browser's native scroll restoration
if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
  history.scrollRestoration = 'auto';
}

// Scroll to top on route change, or scroll to hash element if hash exists
// Skips scrolling when using browser back/forward buttons
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const lastNavigationType = useRef(navigationType);
  
  useEffect(() => {
    // Only process if navigation type changed or it's the initial load
    if (navigationType === lastNavigationType.current && navigationType !== 'POP') {
      // Same navigation type, likely a re-render, don't scroll
      return;
    }
    
    lastNavigationType.current = navigationType;
    
    // Don't scroll if user is going back/forward (POP navigation)
    // Let browser handle scroll restoration naturally
    if (navigationType === 'POP') {
      return;
    }
    
    // Only handle hash scrolling on PUSH or REPLACE navigation
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // No hash, scroll to top on new navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash, navigationType]);
  
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          {/* Home page */}
          <Route 
            path="/" 
            element={
              <main>
                <Hero />
                <Services />
                <CaseStudies />
                <Process />

              </main>
            } 
          />
          
          {/* Case study pages */}
          <Route path="/case/nordic-fulfillment" element={<CaseNordicFulfillment />} />
          <Route path="/case/nordic-bangers" element={<CaseNordicBangers />} />
          <Route path="/case/riad-cosmetics" element={<CaseRiadCosmetics />} />
          <Route path="/case/nordic-refreshment" element={<CaseNordicRefreshment />} />
          
          {/* Service pages */}
          <Route path="/tjanster/sem-seo-geo" element={<ServiceSemSeoGeo />} />
          <Route path="/tjanster/paid-social" element={<ServicePaidSocial />} />
          <Route path="/tjanster/fullstack-development" element={<ServiceFullstackDev />} />
          <Route path="/tjanster/agile-business-development" element={<ServiceAgileBizDev />} />
          
          {/* Redirect /tjanster to home */}
          <Route path="/tjanster" element={<Navigate to="/" replace />} />
          
          {/* Pillar pages */}
          <Route path="/agilt-mindset" element={<PillarAgilIteration />} />
          <Route path="/partnerskap-och-natverk" element={<PillarSpecialistnatverk />} />
          <Route path="/avtalsformer" element={<PillarFlexiblaModeller />} />
          
          {/* 404 - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
