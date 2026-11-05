import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2, Shield, Zap, Sparkles } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp.ts';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950">
      {/* Subtle background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Clean category kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-4">
              <span>Agência Especializada em Sites & Sistemas Web</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Alta Conversão de Vendas</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 text-balance">
              Criamos Sites e Sistemas Web de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
                Alta Performance
              </span>{' '}
              Que Multiplicam Seus Clientes
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Posicionamento digital de elite, velocidade ultra-rápida e arquitetura sob medida para alavancar seu faturamento. De sites institucionais a catálogos dinâmicos com painel administrativo por valores justos e transparentes.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={() => openWhatsApp('Olá Venda Mais Online! Quero solicitar um orçamento para o meu site/sistema.')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </button>

              <button
                onClick={() => scrollToSection('#portfolio')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>Ver Portfólio de Projetos</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>

            {/* Quick Guarantees Strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sites a partir de R$ 500</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sistemas a partir de R$ 700</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Entrega Ágil em até 7 dias</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Carrier Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-emerald-950/30 bg-slate-900 group">
              {/* Window controls bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 py-0.5 rounded bg-slate-950/80 text-[11px] font-mono text-slate-400 border border-slate-800">
                  vendamais.online/showcase
                </div>
                <div className="text-emerald-400 text-[11px] font-medium">SSL Ativo</div>
              </div>

              {/* High-Fidelity Studio Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/hero_agency_digital_1793897961287.jpg"
                  alt="Estúdio de criação de sites de alta performance Venda Mais Online"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Bottom Quick Feature Tag Bar */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium">Otimizado para Carregamento em 0.8s</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <Shield className="w-4 h-4" />
                  <span>100% Responsivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item KPI Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
              +350
            </div>
            <div className="text-xs text-slate-400 mt-1">Sites e Sistemas Criados</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-emerald-400 tabular-nums">
              R$ 500
            </div>
            <div className="text-xs text-slate-400 mt-1">Sites Promocionais Completos</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-teal-400 tabular-nums">
              R$ 700
            </div>
            <div className="text-xs text-slate-400 mt-1">Sistemas com Painel Admin</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <div className="font-display text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
              99.8%
            </div>
            <div className="text-xs text-slate-400 mt-1">Índice de Clientes Satisfeitos</div>
          </div>
        </div>
      </div>
    </section>
  );
};
