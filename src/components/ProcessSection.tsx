import React from 'react';
import { Compass, Palette, Code2, Rocket, ArrowRight } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp.ts';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Diagnóstico & Briefing Estratégico',
      description: 'Entendemos seu público-alvo, seus diferenciais e o objetivo central do seu negócio (vender mais, agendar consultas ou apresentar estoque).',
      icon: Compass,
      timeframe: 'Dia 1'
    },
    {
      step: '02',
      title: 'Design UI/UX Sob Medida',
      description: 'Criamos um layout moderno, de alto padrão visual, com paleta Dark Slate e toques esmeralda pensados para transmitir autoridade e confiança imediata.',
      icon: Palette,
      timeframe: 'Dias 2 a 3'
    },
    {
      step: '03',
      title: 'Engenharia Web & Otimização SEO',
      description: 'Desenvolvimento do código limpo em React e Tailwind, conexão de banco de dados, painel administrativo e otimização para carregamento instantâneo.',
      icon: Code2,
      timeframe: 'Dias 4 a 5'
    },
    {
      step: '04',
      title: 'Publicação, Domínio & Treinamento',
      description: 'Configuração do seu domínio próprio com SSL gratuito, publicação em infraestrutura de alta velocidade (Vercel) e treinamento em vídeo para sua equipe.',
      icon: Rocket,
      timeframe: 'Dias 6 a 7'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            <span>Metodologia Comprovada</span>
            <span aria-hidden="true">·</span>
            <span>Sem Burocracia</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Como Criamos Seu Projeto em 4 Etapas Simples
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            Processo ágil e transparente do primeiro contato até o site no ar gerando contatos e vendas para sua empresa.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-3xl font-extrabold text-emerald-400/80">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700/60">
                      {item.timeframe}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center text-emerald-400 gap-2 text-xs font-medium">
                  <Icon className="w-4 h-4" />
                  <span>Garantia de Qualidade</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="mt-14 text-center">
          <button
            onClick={() => openWhatsApp('Olá Venda Mais Online! Gostaria de iniciar a etapa 01 do meu projeto.')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <span>Iniciar Projeto Agora no WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
