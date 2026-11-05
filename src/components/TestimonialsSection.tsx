import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../data/testimonials.ts';
import { TestimonialCardSkeleton } from './Skeletons.tsx';
import { Star, Quote, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeNiche, setActiveNiche] = useState<string>('todos');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const filterTabs = [
    { id: 'todos', label: 'Todos os Depoimentos' },
    { id: 'Revenda de Carros', label: 'Revenda de Carros' },
    { id: 'Advogados & Escritórios', label: 'Advocacia' },
    { id: 'Imobiliárias & Corretores', label: 'Imobiliárias' },
    { id: 'Dentistas & Clínicas', label: 'Saúde & Odonto' },
  ];

  const handleTabChange = (nicheId: string) => {
    if (nicheId === activeNiche) return;
    setIsLoading(true);
    setActiveNiche(nicheId);
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  };

  const filteredTestimonials = activeNiche === 'todos'
    ? TESTIMONIALS_DATA
    : TESTIMONIALS_DATA.filter((t) => t.niche === activeNiche);

  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
              <span>Prova Social & Confiança</span>
              <span aria-hidden="true">·</span>
              <span>Casos de Sucesso</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 text-balance">
              O Que Nossos Clientes Dizem Sobre os Resultados
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Veja a experiência real de empresários, advogados e comerciantes que escolheram a Venda Mais Online para transformar sua presença na internet.
            </p>
          </div>

          {/* Niche Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeNiche === tab.id
                    ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials List or Skeleton Loading */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCardSkeleton />
            <TestimonialCardSkeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTestimonials.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
              <div>
                {/* Rating & Niche tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-emerald-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {item.niche}
                  </span>
                </div>

                {/* Content */}
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{item.content}"
                </p>
              </div>

              {/* Author & Results */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="font-display text-sm font-bold text-white">
                    {item.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.role} · {item.company} ({item.location})
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950/40 text-emerald-400 border border-emerald-900/60 text-xs font-medium self-start sm:self-auto">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{item.results}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      </div>
    </section>
  );
};
