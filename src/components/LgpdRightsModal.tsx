import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, Mail, MessageCircle, CheckCircle2, Lock, FileText, Send } from 'lucide-react';
import { OFFICIAL_EMAIL, WHATSAPP_FORMATTED, openWhatsApp } from '../utils/whatsapp.ts';

interface LgpdRightsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LgpdRightsModal: React.FC<LgpdRightsModalProps> = ({ isOpen, onClose }) => {
  const [selectedRight, setSelectedRight] = useState<string>('acesso');
  const [subjectName, setSubjectName] = useState<string>('');
  const [subjectEmail, setSubjectEmail] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [sentSuccess, setSentSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const rightsList = [
    {
      id: 'acesso',
      title: 'Acesso e Confirmação de Tratamento',
      desc: 'Saber quais dados pessoais seus foram coletados e como são armazenados pela Venda Mais Online.'
    },
    {
      id: 'correcao',
      title: 'Correção de Dados',
      desc: 'Solicitar a retificação de informações cadastrais incompletas, desatualizadas ou inexatas.'
    },
    {
      id: 'eliminacao',
      title: 'Eliminação de Dados / Esquecimento',
      desc: 'Pedir a exclusão definitiva dos seus dados dos nossos sistemas, ressalvadas obrigações legais.'
    },
    {
      id: 'revogacao',
      title: 'Revogação de Consentimento',
      desc: 'Retirar sua autorização para recebimento de comunicações de marketing, ofertas ou propostas.'
    }
  ];

  const handleSendRequest = (e: React.FormEvent) => {
    e.preventDefault();
    const rightObj = rightsList.find((r) => r.id === selectedRight) || rightsList[0];
    const emailSubject = encodeURIComponent(`[LGPD] Exercício de Direito do Titular: ${rightObj.title}`);
    const emailBody = encodeURIComponent(
      `Prezada Equipe / Encarregado de Proteção de Dados (DPO) da Venda Mais Online,

Venho por meio deste canal oficial exercer meus direitos como Titular de Dados Pessoais nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018):

• Nome Completo: ${subjectName}
• E-mail do Titular: ${subjectEmail}
• Tipo de Requerimento: ${rightObj.title}
• Detalhamento da Solicitação:
${details || 'Solicito o processamento e retorno formal no prazo legal.'}

Aguardo o retorno conforme o Art. 18 e 19 da LGPD.

Atenciosamente,
${subjectName}`
    );

    // Open user's email client directly targeted to contato@vendanainternet.online
    window.location.href = `mailto:${OFFICIAL_EMAIL}?subject=${emailSubject}&body=${emailBody}`;
    setSentSuccess(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
            <div className="flex items-center gap-2.5 text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-display font-bold text-sm text-white">
                Canal do Titular de Dados · Lei Geral de Proteção de Dados (LGPD)
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar canal LGPD"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
            {/* Regulatory Notice */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
              Em cumprimento ao <strong>Artigo 18 da Lei Federal nº 13.709/2018 (LGPD)</strong>, a <strong>Venda Mais Online</strong> assegura a transparência e o pleno exercício dos direitos fundamentais de liberdade, privacidade e livre desenvolvimento da personalidade.
              Todas as solicitações são respondidas pelo nosso canal oficial de privacidade: <strong className="text-emerald-400">{OFFICIAL_EMAIL}</strong>.
            </div>

            {sentSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-white">
                  Requerimento Aberto com Sucesso!
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Seu cliente de e-mail foi acionado com o requerimento endereçado para <strong className="text-emerald-400">{OFFICIAL_EMAIL}</strong>.
                  Nossa equipe de privacidade e encarregado de dados responderá dentro do prazo legal de até 15 dias úteis.
                </p>
                <button
                  onClick={() => setSentSuccess(false)}
                  className="text-xs text-emerald-400 hover:underline pt-2 cursor-pointer"
                >
                  Fazer outra solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendRequest} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    1. Selecione o Direito a Exercer (Art. 18 da LGPD)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {rightsList.map((r) => {
                      const isSelected = selectedRight === r.id;
                      return (
                        <div
                          key={r.id}
                          onClick={() => setSelectedRight(r.id)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-slate-850 border-emerald-500 text-white'
                              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <div className="text-xs font-bold text-white mb-1">
                            {r.title}
                          </div>
                          <div className="text-[11px] text-slate-400 leading-tight">
                            {r.desc}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Nome Completo do Titular *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Maria Silveira"
                      value={subjectName}
                      onChange={(e) => setSubjectName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-xs focus:outline-none focus:border-emerald-400 placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      E-mail Cadastrado para Verificação *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={subjectEmail}
                      onChange={(e) => setSubjectEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white text-xs focus:outline-none focus:border-emerald-400 placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Detalhes Adicionais da Solicitação (Opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Especifique se refere-se a algum formulário ou contato comercial anterior..."
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white text-xs focus:outline-none focus:border-emerald-400 placeholder:text-slate-600 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500">
                    Encaminhado formalmente para: <strong className="text-slate-300">{OFFICIAL_EMAIL}</strong>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Requerimento LGPD</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Footer Contact Direct */}
          <div className="p-4 px-6 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div>
              Dúvidas urgentes? Fale com nosso Encarregado pelo WhatsApp: <strong className="text-white">{WHATSAPP_FORMATTED}</strong>
            </div>

            <button
              onClick={() => openWhatsApp('Olá Encarregado LGPD da Venda Mais Online! Tenho uma dúvida sobre privacidade e tratamento dos meus dados.')}
              className="text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp DPO</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
