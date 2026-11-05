import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { openWhatsApp, WHATSAPP_FORMATTED } from '../utils/whatsapp.ts';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    openWhatsApp('Olá Venda Mais Online! Gostaria de falar com um especialista sobre a criação de um site ou sistema.');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="relative p-3.5 pr-8 rounded-xl bg-slate-900 border border-slate-700/80 shadow-2xl text-xs text-slate-200 max-w-xs animate-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-2 right-2 text-slate-400 hover:text-white p-0.5"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="font-semibold text-emerald-400 mb-0.5">
            Dúvidas sobre seu projeto?
          </div>
          <p className="text-[11px] text-slate-300 leading-tight">
            Nossos especialistas estão online para simular seu orçamento sem compromisso!
          </p>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 shadow-xl shadow-emerald-500/30 transition-all duration-200 hover:scale-105 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-slate-950 text-slate-950" />

        {/* Pulse effect rings */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-20 group-hover:opacity-40 animate-ping -z-10" />
      </button>
    </div>
  );
};
