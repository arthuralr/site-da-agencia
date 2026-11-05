import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioProject } from '../types/index.ts';
import { X, CheckCircle2, MessageCircle, ExternalLink, Clock, TrendingUp, Code2 } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp.ts';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
          role="dialog"
          aria-modal="true"
        >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span>Especificações Técnicas</span>
            <span aria-hidden="true">·</span>
            <span>{project.categoryLabel}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
          {/* Mockup Preview */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-800">
                {project.liveUrlLabel}
              </span>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/60">
                {project.conversionRateMetric}
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-1">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Cliente: <span className="text-slate-200 font-medium">{project.client}</span>
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
              Destaques e Recursos Implementados
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Delivery Meta */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                <Code2 className="w-4 h-4 text-emerald-400" />
                <span>Tecnologias Utilizadas</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Prazo de Desenvolvimento</span>
              </div>
              <p className="text-sm text-emerald-400 font-medium">
                Entregue em apenas {project.deliveryDays} dias úteis
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Deseja um projeto semelhante para seu segmento?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Fechar
            </button>
            <button
              onClick={() => {
                openWhatsApp(`Olá Venda Mais Online! Gostei muito do projeto "${project.title}" do portfólio e gostaria de um orçamento similar para a minha empresa.`);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg shadow-md shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Solicitar Demonstração Semelhante</span>
            </button>
          </div>
        </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
