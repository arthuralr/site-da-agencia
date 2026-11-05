export interface CalculatorOption {
  id: string;
  name: string;
  description: string;
  price: number;
}

export const BASE_PROJECT_TYPES = [
  {
    id: 'site-500',
    name: 'Criação de Site Profissional',
    price: 500,
    tagline: 'Ideal para Landing Pages e Institucionais (Pagamento único)',
    features: ['Design Responsivo', 'SEO Google', 'WhatsApp Integrado', 'Domínio Próprio']
  },
  {
    id: 'sistema-700',
    name: 'Sistema Web com Painel Admin',
    price: 700,
    tagline: 'Ideal para Catálogos, Revendas, Imóveis e Lojas (Pagamento único)',
    features: ['Painel Administrativo', 'Banco de Dados', 'Filtros Avançados', 'Gestão de Estoque']
  },
  {
    id: 'lgpd-500',
    name: 'Adequação de Empresa à LGPD',
    price: 500,
    tagline: 'Mapeamento, políticas, termos e canal do titular (Projeto completo)',
    features: ['Banner de Cookies', 'Política de Privacidade', 'Canal do Titular', 'Selo LGPD']
  },
  {
    id: 'trafego-300',
    name: 'Gestão de Tráfego Pago Mensal',
    price: 300,
    tagline: 'Campanhas no Google Ads, Instagram e Facebook (R$ 300,00/mês)',
    features: ['Google Ads', 'Meta Ads', 'Pixel Configurado', 'Relatórios Mensais']
  }
];

export const CALCULATOR_ADDONS: CalculatorOption[] = [
  {
    id: 'lgpd-addon',
    name: 'Adequação Completa à LGPD (Lei 13.709/2018)',
    description: 'Políticas jurídicas, termos de uso, banner de cookies e canal do titular',
    price: 500
  },
  {
    id: 'trafego-addon',
    name: 'Gestão Inicial de Tráfego Pago (1º Mês)',
    description: 'Campanhas ativas no Google, Facebook e Instagram Ads direcionando para o WhatsApp',
    price: 300
  },
  {
    id: 'blog-seo',
    name: 'Módulo de Blog & Artigos SEO',
    description: 'Área para publicar notícias e artigos para ranquear no topo do Google',
    price: 150
  },
  {
    id: 'whatsapp-multi',
    name: 'Roteamento Multi-WhatsApp',
    description: 'Distribuição automática de clientes para vários vendedores ou departamentos',
    price: 100
  },
  {
    id: 'pix-checkout',
    name: 'Checkout Direto com Pix QR Code',
    description: 'Gere cobranças com confirmação instantânea no painel sem mensalidade',
    price: 190
  },
  {
    id: 'fast-track',
    name: 'Entrega Expressa Prioritária (48 Horas)',
    description: 'Alocação de time exclusivo para colocar seu projeto no ar em tempo recorde',
    price: 250
  }
];
