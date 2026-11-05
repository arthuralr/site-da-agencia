import React from 'react';
import { motion } from 'framer-motion';
import { PRICING_PLANS } from '../data/pricing.ts';
import { Check, MessageCircle, ShieldCheck, Zap, Star } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp.ts';

export const PricingSection: React.FC = () => {
  return (
    <section id="precos" className="py-24 bg-slate-950 relative border-t border-slate-900">
      {/* Glow element */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            <span>Investimento Transparente & Acessível</span>
            <span aria-hidden="true">·</span>
            <span>Sem Mensalidades Forçadas</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Tabela de Preços Promocionais de Lançamento
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Tenha a presença digital de uma grande corporação com o menor investimento do mercado. Escolha o pacote ideal para o estágio do seu negócio.
          </p>
        </div>

        {/* Pricing Cards Grid - 4 Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const isHighlight = plan.isPopular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: isHighlight ? -8 : -5, transition: { duration: 0.2 } }}
                className={`relative flex flex-col justify-between rounded-2xl transition-colors duration-200 ${
                  isHighlight
                    ? 'bg-slate-900 border-2 border-emerald-500/80 shadow-2xl shadow-emerald-950/40 p-6 lg:-translate-y-2'
                    : 'bg-slate-900/70 border border-slate-800 p-6 hover:border-slate-700'
                }`}
              >
                {/* Header of the Card */}
                <div>
                  {plan.badge && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3.5">
                      {isHighlight && <Star className="w-3 h-3 fill-emerald-400" />}
                      <span className="truncate">{plan.badge}</span>
                    </div>
                  )}

                  <h3 className="font-display text-lg font-bold text-white mb-2 leading-tight">
                    {plan.name}
                  </h3>

                  <p className="text-[11px] text-slate-400 leading-relaxed mb-5 min-h-[44px]">
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 mb-5">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                      <span>Investimento</span>
                      <span className="text-emerald-400 font-semibold lowercase">({plan.period})</span>
                    </div>
                    <div className="flex items-baseline gap-1 mt-1">
                      {plan.price !== 'Sob Consulta' && (
                        <span className="text-xs text-emerald-400 font-semibold">R$</span>
                      )}
                      <span className="font-display text-3xl font-extrabold text-white tracking-tight">
                        {plan.price}
                      </span>
                      {plan.price !== 'Sob Consulta' && (
                        <span className="text-xs text-slate-400">,00</span>
                      )}
                    </div>
                    <div className="text-[11px] text-emerald-400/90 font-medium mt-1">
                      {plan.installment}
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                      O que está incluso:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-6 border-t border-slate-800/80">
                  <button
                    onClick={() => openWhatsApp(plan.whatsappMessage)}
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-150 cursor-pointer shadow-md ${
                      isHighlight
                        ? 'bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-slate-950 shadow-emerald-500/25'
                        : 'bg-slate-800 hover:bg-slate-700 active:bg-slate-850 text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Fechar Pacote no WhatsApp</span>
                  </button>

                  <div className="mt-3 text-center text-[11px] text-slate-500">
                    Início imediato após alinhamento do briefing
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantees Box */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Você é o Único Dono</div>
              <div className="text-[11px] text-slate-400">Domínio, arquivos e código 100% no seu nome.</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Velocidade Extrema</div>
              <div className="text-[11px] text-slate-400">Carregamento instantâneo que agrada o Google e retém visitantes.</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Suporte Humanizado</div>
              <div className="text-[11px] text-slate-400">Atendimento direto no WhatsApp sem filas intermináveis.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
