import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cookie, X, Check, Lock } from 'lucide-react';
import { OFFICIAL_EMAIL } from '../utils/whatsapp.ts';

interface CookieConsentBannerProps {
  onOpenLgpdModal: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onOpenLgpdModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or configured consent
    try {
      const consent = localStorage.getItem('vmo_lgpd_consent');
      if (!consent) {
        // Small delay so it smoothly appears after initial view
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Local storage not available
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('vmo_lgpd_consent', JSON.stringify({ type: 'all', timestamp: new Date().toISOString() }));
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  const handleAcceptEssential = () => {
    try {
      localStorage.setItem('vmo_lgpd_consent', JSON.stringify({ type: 'essential', timestamp: new Date().toISOString() }));
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-xl z-50 p-5 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl shadow-black/60 text-slate-200"
          role="region"
          aria-label="Consentimento de Cookies e Privacidade LGPD"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h4 className="font-display text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Privacidade e Proteção de Dados (LGPD)</span>
                </h4>
                <button
                  onClick={handleAcceptEssential}
                  className="text-slate-400 hover:text-white p-1"
                  aria-label="Fechar aviso de cookies"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                A <strong>Venda Mais Online</strong> utiliza cookies estritamente necessários e tecnologias para aprimorar sua experiência e tráfego de alta conversão, em estrita conformidade com a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</strong>. Você pode gerenciar suas preferências ou exercer seus direitos a qualquer momento.
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg shadow-md shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap"
                >
                  Aceitar Todos
                </button>

                <button
                  onClick={handleAcceptEssential}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 active:bg-slate-850 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Apenas Essenciais
                </button>

                <button
                  onClick={() => {
                    setIsVisible(false);
                    onOpenLgpdModal();
                  }}
                  className="px-2.5 py-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Canal do Titular & Direitos
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
