import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { ShieldCheck, Lock, Cpu, Globe2, ArrowUp, MessageCircle, Mail, UserCheck } from 'lucide-react';
import { openWhatsApp, WHATSAPP_FORMATTED, OFFICIAL_EMAIL } from '../utils/whatsapp.ts';

interface FooterProps {
  onOpenLgpdModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLgpdModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A <strong className="text-white">Venda Mais Online</strong> é uma agência especializada na criação de websites de alta conversão, portais para revendas, sistemas sob medida, adequação integral à LGPD e gestão de tráfego pago para alavancar negócios em todo o Brasil.
            </p>
            <div className="space-y-1 text-xs text-slate-500">
              <div>WhatsApp Oficial: <strong className="text-slate-300">{WHATSAPP_FORMATTED}</strong></div>
              <div>E-mail de Contato: <a href={`mailto:${OFFICIAL_EMAIL}`} className="text-emerald-400 hover:underline">{OFFICIAL_EMAIL}</a></div>
              <div>CNPJ: 45.892.311/0001-84 · Atendimento em Todo o Território Nacional</div>
            </div>
          </div>

          {/* Serviços Promocionais */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Serviços & Preços Promocionais
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#precos" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Criação de Sites Profissionais</span>
                  <strong className="text-white">R$ 500</strong>
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Desenvolvimento de Sistemas Web</span>
                  <strong className="text-white">R$ 700</strong>
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Adequação de Empresas à LGPD</span>
                  <strong className="text-white">R$ 500</strong>
                </a>
              </li>
              <li>
                <a href="#precos" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Gestão de Tráfego Pago Mensal</span>
                  <strong className="text-white">R$ 300/mês</strong>
                </a>
              </li>
            </ul>

            <h5 className="text-[11px] font-bold text-slate-300 uppercase tracking-wider pt-2">
              Nichos em Destaque
            </h5>
            <div className="text-[11px] text-slate-400 leading-relaxed">
              Carros · Advogados · Imóveis · Construtoras · Motos sem CNH · Clínicas · Mercados · E-commerce
            </div>
          </div>

          {/* Canal do Titular LGPD */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Privacidade & LGPD</span>
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Atuamos em total conformidade com a Lei Federal nº 13.709/2018 (Lei Geral de Proteção de Dados).
            </p>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
              <div className="text-[11px] font-semibold text-slate-300">
                Canal Oficial do Titular de Dados:
              </div>
              <div className="text-[11px] text-slate-400">
                Para solicitar acesso, retificação ou exclusão de dados:
              </div>
              <a
                href={`mailto:${OFFICIAL_EMAIL}?subject=Requerimento LGPD - Exercício de Direitos do Titular`}
                className="text-emerald-400 text-[11px] hover:underline flex items-center gap-1 font-medium break-all"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>{OFFICIAL_EMAIL}</span>
              </a>

              {onOpenLgpdModal && (
                <button
                  onClick={onOpenLgpdModal}
                  className="w-full mt-1.5 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 text-[11px] font-semibold transition-colors cursor-pointer"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Exercer Direitos do Titular</span>
                </button>
              )}
            </div>
          </div>

          {/* Security & Badges */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Segurança
            </h4>
            <div className="flex flex-col gap-2 text-[11px]">
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>SSL 256-Bit</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Conforme LGPD</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                <Globe2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Vercel Edge</span>
              </div>
            </div>

            <button
              onClick={() => openWhatsApp('Olá Venda Mais Online! Gostaria de conversar com a equipe comercial.')}
              className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
              <span>Chamar no WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-400">Venda Mais Online</strong>. Todos os direitos reservados.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {onOpenLgpdModal ? (
              <button
                onClick={onOpenLgpdModal}
                className="hover:text-emerald-400 transition-colors cursor-pointer text-xs"
              >
                Política de Privacidade & Direitos LGPD
              </button>
            ) : (
              <a href={`mailto:${OFFICIAL_EMAIL}`} className="hover:text-emerald-400 transition-colors text-xs">
                Política de Privacidade & LGPD
              </a>
            )}
            <span aria-hidden="true">·</span>
            <span>Alta Conversão & Performance</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
