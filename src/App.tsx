/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { NichesSection } from './components/NichesSection.tsx';
import { PricingSection } from './components/PricingSection.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { BudgetCalculator } from './components/BudgetCalculator.tsx';
import { ProcessSection } from './components/ProcessSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton.tsx';
import { ScrollProgress } from './components/ScrollProgress.tsx';
import { CookieConsentBanner } from './components/CookieConsentBanner.tsx';
import { LgpdRightsModal } from './components/LgpdRightsModal.tsx';
import { SEOProvider } from './context/SEOContext.tsx';

// Reusable viewport animation variants for sections
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function App() {
  const [isLgpdModalOpen, setIsLgpdModalOpen] = useState(false);

  return (
    <SEOProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
        {/* Slim Top Scroll Progress Bar */}
        <ScrollProgress />

        {/* Top Header */}
        <Header />

      {/* Main Sections with Framer Motion scroll entrance animations */}
      <main className="flex-1 overflow-hidden">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Hero />
        </motion.div>

        {/* Nichos Atendidos Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <NichesSection />
        </motion.div>

        {/* Preços Promocionais Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <PricingSection />
        </motion.div>

        {/* Portfólio de Projetos Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <PortfolioSection />
        </motion.div>

        {/* Calculadora Interativa de Orçamento Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <BudgetCalculator />
        </motion.div>

        {/* Metodologia / Processo Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <ProcessSection />
        </motion.div>

        {/* Prova Social / Depoimentos Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <TestimonialsSection />
        </motion.div>

        {/* FAQ Estruturado Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <FaqSection />
        </motion.div>

        {/* Formulário & Contato Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={sectionVariants}
        >
          <ContactSection />
        </motion.div>
      </main>

      {/* Full Corporate Footer */}
      <Footer />

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppFloatingButton />
      </div>
    </SEOProvider>
  );
}
