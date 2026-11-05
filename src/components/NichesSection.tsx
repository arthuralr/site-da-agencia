import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NICHES_DATA } from '../data/niches.ts';
import { Niche } from '../types/index.ts';
import { NicheDetailModal } from './NicheDetailModal.tsx';
import {
  Car,
  Scale,
  Building2,
  HardHat,
  Zap,
  Sparkles,
  Store,
  ShoppingCart,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp.ts';

const iconMap: Record<string, React.ElementType> = {
  Car,
  Scale,
  Building2,
  HardHat,
  Zap,
  Sparkles,
  Store,
  ShoppingCart,
};

export const NichesSection: React.FC = () => {
  const [selectedNiche, setSelectedNiche] = useState<Niche | null>(null);

  return (
    <section id="nichos" className="py-24 bg-slate-950 relative border-t border-slate-900">
      {/* Background ambient gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            <span>Especialização Setorial</span>
            <span aria-hidden="true">·</span>
            <span>O Coração da Nossa Proposta</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Nichos Especializados Atendidos com Soluções Sob Medida
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Não criamos sites genéricos. Cada nicho possui suas próprias regras de negócio, dores e gatilhos de conversão. Desenvolvemos ferramentas exatas para colocar seu segmento na liderança digital.
          </p>
        </div>

        {/* 8 Niches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NICHES_DATA.map((niche, index) => {
            const IconComponent = iconMap[niche.iconName] || Store;

            return (
              <motion.div
                key={niche.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/40 transition-colors duration-200 hover:shadow-xl hover:shadow-emerald-950/20"
              >
                <div>
                  {/* Category & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 group-hover:bg-emerald-500/10 border border-slate-700/60 group-hover:border-emerald-500/30 flex items-center justify-center text-emerald-400 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-semibold text-slate-400 group-hover:text-emerald-400 transition-colors">
                      {niche.categoryTag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {niche.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {niche.description}
                  </p>

                  {/* Top 2 features preview */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/60 mb-5">
                    {niche.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-white">
                    {niche.recommendedPrice}
                  </span>

                  <button
                    onClick={() => setSelectedNiche(niche)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>Ver Detalhes</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner for custom niches */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
              Não encontrou seu nicho exato na lista?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Desenvolvemos sites e sistemas personalizados para qualquer segmento comercial, industrial ou de serviços. Fale agora com nossa equipe de arquitetura web.
            </p>
          </div>

          <button
            onClick={() => openWhatsApp('Olá Venda Mais Online! Tenho uma empresa em outro segmento e gostaria de verificar uma solução sob medida.')}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-md shadow-emerald-500/20"
          >
            <span>Consultar Meu Segmento</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal Detail */}
      <NicheDetailModal
        niche={selectedNiche}
        onClose={() => setSelectedNiche(null)}
      />
    </section>
  );
};
