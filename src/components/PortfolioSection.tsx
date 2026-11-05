import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_PROJECTS } from '../data/portfolio.ts';
import { PortfolioProject } from '../types/index.ts';
import { ProjectDetailModal } from './ProjectDetailModal.tsx';
import { PortfolioCardSkeleton } from './Skeletons.tsx';
import { ExternalLink, Eye, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp.ts';

type CategoryFilter = 'all' | 'automotivo' | 'juridico-imobiliario' | 'saude-servicos' | 'ecommerce-varejo';

export const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const filterOptions: { id: CategoryFilter; label: string }[] = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'automotivo', label: 'Revendas & Automotivo' },
    { id: 'juridico-imobiliario', label: 'Jurídico & Imobiliárias' },
    { id: 'saude-servicos', label: 'Saúde & Clínicas' },
    { id: 'ecommerce-varejo', label: 'E-commerce & Mercados' },
  ];

  const handleFilterChange = (newFilter: CategoryFilter) => {
    if (newFilter === filter) return;
    setIsLoading(true);
    setFilter(newFilter);
    setTimeout(() => {
      setIsLoading(false);
    }, 280);
  };

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
              <span>Casos Reais & Resultados</span>
              <span aria-hidden="true">·</span>
              <span>Engenharia Web de Alto Padrão</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 text-balance">
              Portfólio de Projetos & Demonstrações Interativas
            </h2>

            <p className="text-base text-slate-300">
              Explore sistemas e websites já desenvolvidos pela Venda Mais Online para diferentes mercados. Clique em qualquer card para ver a ficha técnica e resultados.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl self-start md:self-auto">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => handleFilterChange(opt.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  filter === opt.id
                    ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Skeleton or Content */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCardSkeleton />
            <PortfolioCardSkeleton />
            <PortfolioCardSkeleton />
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden hover:border-emerald-500/40 transition-colors duration-300 hover:shadow-xl hover:shadow-emerald-950/20"
                >
              <div>
                {/* Image Mockup */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Category floating tag */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-semibold text-white bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Metric pill */}
                  <div className="absolute bottom-3 right-3">
                    <span className="text-[11px] font-bold text-emerald-400 bg-slate-950/90 px-2 py-0.5 rounded border border-emerald-500/30">
                      {project.conversionRateMetric}
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-6">
                  <div className="text-xs text-slate-400 mb-1">
                    {project.client}
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="font-display text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {project.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-800/60 mt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ver Especificações</span>
                </button>

                <button
                  onClick={() => openWhatsApp(`Olá Venda Mais Online! Gostaria de saber mais sobre o projeto ${project.title} do portfólio.`)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  title="Solicitar projeto similar no WhatsApp"
                >
                  <ArrowUpRight className="w-4 h-4 text-slate-400 hover:text-emerald-400" />
                </button>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      )}
      </div>

      {/* Modal View */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
