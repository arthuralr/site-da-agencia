import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faq.ts';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp.ts';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0].id]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Perguntas Frequentes</span>
            <span aria-hidden="true">·</span>
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Tudo o que Você Precisa Saber Antes de Começar
          </h2>

          <p className="text-base text-slate-300">
            Transparência total. Se ainda restar qualquer questão, nossa equipe está online no WhatsApp para responder prontamente.
          </p>
        </div>

        {/* FAQ Accordion list */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="rounded-xl bg-slate-900/60 border border-slate-800 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900 transition-colors"
                >
                  <span className="font-display text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-800 text-slate-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-850 pt-3 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <p className="text-sm text-slate-300 mb-4">
            Ainda tem alguma dúvida específica sobre o seu projeto?
          </p>
          <button
            onClick={() => openWhatsApp('Olá Venda Mais Online! Tenho uma dúvida sobre os planos e gostaria de conversar.')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Falar com Especialista no WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
