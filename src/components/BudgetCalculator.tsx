import React, { useState } from 'react';
import { BASE_PROJECT_TYPES, CALCULATOR_ADDONS } from '../data/calculator.ts';
import { NICHES_DATA } from '../data/niches.ts';
import { Calculator, Check, MessageCircle, Sparkles, Plus } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp.ts';

export const BudgetCalculator: React.FC = () => {
  const [selectedBaseId, setSelectedBaseId] = useState<string>('site-500');
  const [selectedNicheId, setSelectedNicheId] = useState<string>('revenda-carros');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const currentBase = BASE_PROJECT_TYPES.find((b) => b.id === selectedBaseId) || BASE_PROJECT_TYPES[0];
  const currentNiche = NICHES_DATA.find((n) => n.id === selectedNicheId) || NICHES_DATA[0];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate total
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const found = CALCULATOR_ADDONS.find((a) => a.id === addonId);
    return sum + (found ? found.price : 0);
  }, 0);

  const totalPrice = currentBase.price + addonsTotal;
  const installmentValue = (totalPrice / 12 * 1.08).toFixed(2); // approx parcelamento

  const handleSendWhatsApp = () => {
    const addonsNames = selectedAddons
      .map((id) => CALCULATOR_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const text = `Olá Venda Mais Online! Fiz uma simulação de orçamento no site:
• Tipo de Projeto: ${currentBase.name} (R$ ${currentBase.price},00)
• Nicho: ${currentNiche.title}
• Opcionais selecionados: ${addonsNames || 'Nenhum opcional'}
• Valor Total Estimado: R$ ${totalPrice},00 (ou 12x no cartão)

Gostaria de confirmar os detalhes e iniciar meu projeto!`;

    openWhatsApp(text);
  };

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            <Calculator className="w-4 h-4" />
            <span>Simulador Interativo</span>
            <span aria-hidden="true">·</span>
            <span>Sem Compromisso</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Calcule o Orçamento Exato para o Seu Projeto
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Personalize seu pacote em menos de 1 minuto e envie sua proposta pré-montada direto para nossa equipe no WhatsApp.
          </p>
        </div>

        {/* Interactive Box */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="space-y-8">
            {/* Step 1: Base Plan */}
            <div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-400 text-slate-950 font-bold flex items-center justify-center text-xs">1</span>
                <span>Escolha o Tipo de Projeto Base</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BASE_PROJECT_TYPES.map((base) => {
                  const isSelected = selectedBaseId === base.id;
                  return (
                    <div
                      key={base.id}
                      onClick={() => setSelectedBaseId(base.id)}
                      className={`p-5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-slate-850 border-emerald-500 shadow-md shadow-emerald-950/30'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display font-bold text-white text-base">
                          {base.name}
                        </span>
                        <span className="text-base font-extrabold text-emerald-400">
                          R$ {base.price},00
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mb-3">
                        {base.tagline}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {base.features.map((f, i) => (
                          <span key={i} className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Niche */}
            <div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-400 text-slate-950 font-bold flex items-center justify-center text-xs">2</span>
                <span>Selecione o Segmento do Seu Negócio</span>
              </div>

              <select
                value={selectedNicheId}
                onChange={(e) => setSelectedNicheId(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              >
                {NICHES_DATA.map((niche) => (
                  <option key={niche.id} value={niche.id}>
                    {niche.title} ({niche.categoryTag})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Add-ons */}
            <div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-400 text-slate-950 font-bold flex items-center justify-center text-xs">3</span>
                <span>Deseja Adicionais Opcionais? (Opcional)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CALCULATOR_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-xl border flex items-start gap-3 transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-slate-850 border-emerald-500/70'
                          : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked
                            ? 'bg-emerald-400 text-slate-950'
                            : 'border border-slate-700 bg-slate-900'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-white">
                            {addon.name}
                          </span>
                          <span className="text-xs font-bold text-emerald-400">
                            +R$ {addon.price}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Total Summary Strip & CTA */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                  Total Estimado da Simulação:
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-xs text-emerald-400 font-bold">R$</span>
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {totalPrice}
                  </span>
                  <span className="text-xs text-slate-400">,00 à vista</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  ou em até 12x de R$ {installmentValue} no cartão
                </div>
              </div>

              <button
                onClick={handleSendWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Enviar Simulação no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
