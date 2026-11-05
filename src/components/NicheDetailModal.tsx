import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Niche } from '../types/index.ts';
import { X, CheckCircle2, MessageCircle, ArrowRight, TrendingUp, Layers } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp.ts';

interface NicheDetailModalProps {
  niche: Niche | null;
  onClose: () => void;
}

export const NicheDetailModal: React.FC<NicheDetailModalProps> = ({ niche, onClose }) => {
  if (!niche) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
          role="dialog"
          aria-modal="true"
        >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <span>Solução Especializada</span>
            <span aria-hidden="true">·</span>
            <span>{niche.categoryTag}</span>
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
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              {niche.title}
            </h3>
            <p className="text-emerald-400 text-sm font-medium mb-3">
              {niche.subtitle}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              {niche.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Funcionalidades Específicas do Projeto</span>
            </h4>
            <ul className="space-y-2.5">
              {niche.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Performance & Commercial Highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span>Impacto Estimado</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                {niche.metrics}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <div className="text-xs font-semibold text-slate-400 mb-1">
                Plano Recomendado
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-xl font-bold text-white">
                  {niche.recommendedPrice}
                </span>
                <span className="text-xs text-slate-400">
                  {niche.recommendedPlan === 'site' ? '(Site Completo)' : '(Sistema com Painel)'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Entrega em 5 a 7 dias com suporte incluso.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Voltar
            </button>
            <button
              onClick={() => {
                openWhatsApp(niche.whatsappMessage);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg shadow-md shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Solicitar Orçamento para esse Nicho</span>
            </button>
          </div>
        </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
