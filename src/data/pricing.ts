import { PricingPlan } from '../types/index.ts';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'site',
    name: 'Criação de Sites Profissionais',
    badge: 'Mais Procurado para Negócios Locais',
    price: '500',
    period: 'pagamento único',
    installment: 'ou até 12x no cartão de crédito',
    description: 'Ideal para profissionais liberais, escritórios, clínicas e empresas que precisam de um site de alta autoridade, rápido e que atraia clientes todos os dias.',
    isPopular: false,
    features: [
      'Design Moderno e Exclusivo Sob Medida (UI/UX)',
      '100% Responsivo (Perfeito em Celulares, Tablets e PC)',
      'Otimização Completa de SEO para o Google',
      'Integração Direta com WhatsApp Oficial da sua equipe',
      'Configuração de Domínio Próprio (.com.br ou .com)',
      'Certificado de Segurança SSL Grátis (Cadeado Verde)',
      'Formulário de Contato com Envio Imediato',
      'Conformidade Básica com LGPD (Avisos de Privacidade)',
      'Entrega Ágil em até 5 a 7 dias úteis'
    ],
    highlightFeatures: [
      'Perfeito para: Advogados, Dentistas, Clínicas, Construtoras, Landing Pages'
    ],
    whatsappMessage: 'Olá Venda Mais Online! Gostaria de contratar a Criação de Site Profissional por R$ 500,00 (pagamento único)!'
  },
  {
    id: 'sistema',
    name: 'Desenvolvimento de Sistemas Web',
    badge: 'Melhor Custo-Benefício & Gestão',
    price: '700',
    period: 'pagamento único',
    installment: 'ou até 12x no cartão de crédito',
    description: 'Perfeito para quem precisa gerenciar produtos, veículos, imóveis ou pedidos com um Painel Administrativo intuitivo e banco de dados dinâmico.',
    isPopular: true,
    features: [
      'Tudo incluído no plano de Criação de Sites',
      'Painel de Controle Administrativo (Admin) intuitivo',
      'Cadastro, Edição e Pausa de Produtos / Carros / Imóveis',
      'Filtros Avançados de Busca (Preço, Categoria, Ano, Bairro)',
      'Simulador / Calculadora integrada no site',
      'Banco de Dados Seguro e Otimizado em Nuvem',
      'Checkout / Catálogo com Pedidos Diretos no WhatsApp ou Pix',
      'Treinamento em Vídeo para Você ou sua Equipe Administrar',
      'Suporte Técnico Dedicado Pós-Lançamento'
    ],
    highlightFeatures: [
      'Perfeito para: Revendas de Carros, Imobiliárias, Motos Elétricas, Mercados, Lojas Virtuais'
    ],
    whatsappMessage: 'Olá Venda Mais Online! Quero contratar o Desenvolvimento de Sistema Web com Painel Admin por R$ 700,00 (pagamento único)!'
  },
  {
    id: 'lgpd',
    name: 'Adequação de Empresas à LGPD',
    badge: 'Segurança Jurídica & Conformidade',
    price: '500',
    period: 'projeto completo',
    installment: 'ou até 12x no cartão de crédito',
    description: 'Adequação técnica e jurídica completa do seu negócio à Lei Geral de Proteção de Dados (Lei 13.709/2018), evitando multas pesadas e transmitindo máxima confiança.',
    isPopular: false,
    features: [
      'Mapeamento de Fluxos de Dados Pessoais (Data Mapping)',
      'Elaboração de Política de Privacidade e Termos de Uso Sob Medida',
      'Banner Interativo de Consentimento de Cookies em Conformidade',
      'Canal Estruturado para Atendimento aos Direitos dos Titulares',
      'Cláusulas Contratuais Padrão para Clientes e Fornecedores',
      'Orientações e Boas Práticas para a Equipe Interna',
      'Selo Oficial de Conformidade LGPD para Exibir no Site',
      'Blindagem contra Sanções Administrativas da ANPD'
    ],
    highlightFeatures: [
      'Essencial para: Clínicas, Escritórios, Revendas, Imobiliárias, E-commerces e Empresas'
    ],
    whatsappMessage: 'Olá Venda Mais Online! Quero contratar o Serviço de Adequação de Empresas à LGPD por R$ 500,00 (projeto completo)!'
  },
  {
    id: 'trafego',
    name: 'Gestão de Tráfego Pago de Alta Conversão',
    badge: 'Vendas Recorrentes e Leads Diários',
    price: '300',
    period: 'por mês',
    installment: 'sem taxa de adesão ou fidelidade',
    description: 'Campanhas profissionais no Google Ads, Instagram Ads e Facebook Ads direcionando clientes quentes e prontos para comprar direto para o seu WhatsApp.',
    isPopular: false,
    features: [
      'Criação e Gestão de Campanhas no Google Ads (Rede de Pesquisa)',
      'Anúncios Segmentados no Instagram e Facebook Ads',
      'Configuração Avançada de Pixel Meta e Tags de Conversão do Google',
      'Segmentação Geográfica Precisa para sua Região ou Brasil Todo',
      'Copywriting Persuasivo com Foco Direto em Mensagens no WhatsApp',
      'Otimização Semanal de Lances, Palavras-Chave e Públicos',
      'Relatórios Mensais Claros com Custo por Lead e Faturamento Estimado',
      'Estratégia Exclusiva Validada para o Nicho da sua Empresa'
    ],
    highlightFeatures: [
      'Ideal para: Concessionárias, Advogados, Corretores, Clínicas e Lojas Virtuais'
    ],
    whatsappMessage: 'Olá Venda Mais Online! Quero contratar o Serviço de Gestão de Tráfego Pago por R$ 300,00/mês!'
  }
];
