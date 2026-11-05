import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { openWhatsApp, WHATSAPP_FORMATTED, OFFICIAL_EMAIL } from '../utils/whatsapp.ts';
import { NICHES_DATA } from '../data/niches.ts';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    niche: 'Revendas de Carros',
    plan: 'Criação de Sites Profissionais (R$ 500,00)',
    message: '',
    lgpdConsent: true
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.lgpdConsent) return;

    // Send formatted message directly to WhatsApp or show success state
    const msg = `Olá Venda Mais Online! Segue meu contato através do formulário oficial do site:
• Nome: ${formData.name}
• E-mail: ${formData.email || 'Não informado'}
• WhatsApp: ${formData.phone}
• Nicho de Atuação: ${formData.niche}
• Serviço de Interesse: ${formData.plan}
• Detalhes/Projeto: ${formData.message || 'Gostaria de um orçamento detalhado'}
• Consentimento LGPD: Confirmado pelo titular`;

    setSubmitted(true);
    setTimeout(() => {
      openWhatsApp(msg);
    }, 600);
  };

  return (
    <section id="contato" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
                <span>Canais Oficiais de Atendimento</span>
                <span aria-hidden="true">·</span>
                <span>Fale Conosco</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
                Pronto para Ter Seu Site ou Sistema Profissional?
              </h2>

              <p className="text-base text-slate-300 leading-relaxed mb-8">
                Tire suas ideias do papel com quem entende de conversão, tráfego e conformidade digital. Envie uma mensagem pelo formulário ou inicie uma conversa instantânea no WhatsApp oficial.
              </p>

              {/* Direct Contacts List */}
              <div className="space-y-4 mb-8">
                <div
                  onClick={() => openWhatsApp('Olá Venda Mais Online! Gostaria de conversar com a equipe comercial.')}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-colors flex items-center gap-4 cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">WhatsApp Oficial</div>
                    <div className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {WHATSAPP_FORMATTED}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">E-mail Oficial (Comercial & DPO LGPD)</div>
                    <a
                      href={`mailto:${OFFICIAL_EMAIL}`}
                      className="text-sm font-medium text-white hover:text-emerald-400 transition-colors"
                    >
                      {OFFICIAL_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Horário de Atendimento</div>
                    <div className="text-sm font-medium text-white">
                      Segunda a Sexta das 08h às 19h · Sábados das 09h às 14h
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-xs text-slate-300">
              <span className="font-semibold text-emerald-400">Resposta Rápida:</span> Nosso tempo médio de resposta no WhatsApp oficial é de 8 minutos em horário comercial.
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Solicitação Encaminhada!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Você será redirecionado para o WhatsApp da nossa equipe para dar andamento imediato ao seu atendimento.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block text-xs font-semibold text-emerald-400 hover:underline pt-4"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Solicite uma Proposta Personalizada
                  </h3>
                  <p className="text-xs text-slate-400 mb-6">
                    Preencha os campos abaixo para que nosso especialista prepare a estrutura ideal para o seu segmento.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Seu Nome ou Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Silva / Prime Motors"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        WhatsApp / Celular com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 98765-4321"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        E-mail Profissional
                      </label>
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors placeholder:text-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nicho de Atuação
                      </label>
                      <select
                        value={formData.niche}
                        onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                      >
                        {NICHES_DATA.map((n) => (
                          <option key={n.id} value={n.title}>
                            {n.title}
                          </option>
                        ))}
                        <option value="Outro Segmento">Outro Segmento</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Serviço Promocional de Interesse
                    </label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors"
                    >
                      <option value="Criação de Sites Profissionais (R$ 500,00)">Criação de Sites Profissionais — R$ 500,00 (Pagamento único)</option>
                      <option value="Desenvolvimento de Sistemas Web (R$ 700,00)">Desenvolvimento de Sistemas Web — R$ 700,00 (Pagamento único)</option>
                      <option value="Serviço de Adequação de Empresas à LGPD (R$ 500,00)">Serviço de Adequação de Empresas à LGPD — R$ 500,00 (Projeto completo)</option>
                      <option value="Serviço de Tráfego Pago (R$ 300,00/mês)">Serviço de Tráfego Pago (Facebook, Instagram e Google) — R$ 300,00/mês</option>
                      <option value="Combo Completo: Site + LGPD + Tráfego Pago">Combo Completo: Site + LGPD + Tráfego Pago</option>
                      <option value="Projeto Enterprise / Sob Medida">Projeto Enterprise / Sob Medida</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Detalhes ou Links de Referência
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Conte um pouco sobre seu negócio ou mencione algum site de referência que você goste..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm focus:outline-none focus:border-emerald-400 transition-colors placeholder:text-slate-600 resize-none"
                    />
                  </div>

                  {/* LGPD Compliance Checkbox */}
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-950/60 border border-slate-800/80">
                    <input
                      type="checkbox"
                      id="lgpdConsent"
                      required
                      checked={formData.lgpdConsent}
                      onChange={(e) => setFormData({ ...formData, lgpdConsent: e.target.checked })}
                      className="w-4 h-4 mt-0.5 rounded border-slate-700 bg-slate-900 text-emerald-400 focus:ring-emerald-400 focus:ring-offset-slate-950 cursor-pointer"
                    />
                    <label htmlFor="lgpdConsent" className="text-[11px] text-slate-400 leading-tight cursor-pointer">
                      Declaro que li e concordo com o tratamento dos meus dados para atendimento e envio de propostas comerciais pela <strong>Venda Mais Online</strong>, em estrita conformidade com a <strong>LGPD (Lei nº 13.709/2018)</strong>. Canal oficial do titular: <strong className="text-emerald-400">{OFFICIAL_EMAIL}</strong>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar e Abrir Atendimento no WhatsApp Oficial</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-1">
                    Garantia de segurança e sigilo de dados em conformidade com as diretrizes da ANPD.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
