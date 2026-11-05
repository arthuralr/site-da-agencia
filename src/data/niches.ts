import { Niche } from '../types/index.ts';

export const NICHES_DATA: Niche[] = [
  {
    id: 'revenda-carros',
    title: 'Revendas de Carros & Concessionárias',
    subtitle: 'Catálogo dinâmico com painel administrativo para vendas automotivas',
    categoryTag: 'Automotivo',
    description: 'Solução completa para revendedores de veículos. Sistema com cadastro ágil de estoque, filtros por marca, modelo, ano e faixa de preço, simulador de parcelas e botão direto para WhatsApp de cada vendedor.',
    iconName: 'Car',
    features: [
      'Painel de controle para cadastrar, editar e pausar veículos',
      'Galeria de fotos em alta resolução por veículo',
      'Ficha técnica completa (KM, opcionais, combustível, câmbio)',
      'Calculadora/simulador de financiamento e entrada',
      'Integração direta de leads para o WhatsApp da equipe'
    ],
    metrics: '+45% em consultas de estoque na 1ª semana',
    recommendedPlan: 'sistema',
    recommendedPrice: 'R$ 700,00',
    whatsappMessage: 'Olá Venda Mais Online! Tenho uma Revenda de Carros e gostaria de conhecer a solução de Catálogo com Painel Administrativo.'
  },
  {
    id: 'advogados',
    title: 'Advogados & Escritórios Jurídicos',
    subtitle: 'Sites institucionais de autoridade e conformidade com a OAB',
    categoryTag: 'Jurídico',
    description: 'Design sóbrio e refinado que transmite credibilidade e respeito. Apresentação estratégica das áreas de atuação, histórico dos sócios, artigos e botão discreto e ético para triagem de casos no WhatsApp.',
    iconName: 'Scale',
    features: [
      'Design em estrita conformidade com as diretrizes éticas da OAB',
      'Apresentação clara das áreas do Direito e especialidades',
      'Página institucional para perfil dos advogados e sócios',
      'Integração de artigos para autoridade orgânica no Google (SEO)',
      'Canal direto de agendamento de consultas jurídicas'
    ],
    metrics: 'Triplique o agendamento de consultas qualificadas',
    recommendedPlan: 'site',
    recommendedPrice: 'R$ 500,00',
    whatsappMessage: 'Olá Venda Mais Online! Sou advogado e quero criar um site institucional de autoridade para o meu escritório.'
  },
  {
    id: 'imobiliarias',
    title: 'Imobiliárias & Corretores Autônomos',
    subtitle: 'Portal de imóveis com filtros refinados e captação de compradores',
    categoryTag: 'Imobiliário',
    description: 'Mostre casas, apartamentos e terrenos com qualidade cinematográfica. Filtros por localização, bairros, quantidade de quartos e valor, além de formulário de contato integrado e localização precisa.',
    iconName: 'Building2',
    features: [
      'Busca inteligente por tipo, bairro, faixa de preço e dormitórios',
      'Galeria imersiva de fotos e plantas baixas',
      'Área para corretores de plantão e botão de visita instantânea',
      'Página de captação de novos imóveis para proprietários',
      'Otimização para busca local no Google (SEO Imobiliário)'
    ],
    metrics: '+60% de velocidade no fechamento de visitas presenciais',
    recommendedPlan: 'sistema',
    recommendedPrice: 'R$ 700,00',
    whatsappMessage: 'Olá Venda Mais Online! Trabalho com imóveis e preciso de um portal imobiliário completo com filtros para minha imobiliária.'
  },
  {
    id: 'construtoras',
    title: 'Construtoras & Incorporadoras',
    subtitle: 'Vitrines de empreendimentos de alto padrão e lançamentos',
    categoryTag: 'Engenharia & Obras',
    description: 'Apresentação imponente para projetos na planta, em obras ou prontos para morar. Acompanhamento de evolução da obra, download de book comercial, tour virtual e captação de investidores qualificados.',
    iconName: 'HardHat',
    features: [
      'Hotsite exclusivo por empreendimento com identidade visual única',
      'Linha do tempo e barra de progresso da obra em tempo real',
      'Download automatizado de plantas e materiais em PDF',
      'Formulário qualificado para investidores e compradores',
      'Integração com CRM ou equipe de corretores parceiros'
    ],
    metrics: 'Aumento de 80% no interesse em lançamentos na planta',
    recommendedPlan: 'sistema',
    recommendedPrice: 'R$ 700,00',
    whatsappMessage: 'Olá Venda Mais Online! Sou de uma Construtora e quero uma vitrine moderna para apresentar nossos empreendimentos e lançamentos.'
  },
  {
    id: 'motos-eletricas',
    title: 'Revendas de Motos Elétricas sem CNH',
    subtitle: 'Catálogos dinâmicos de mobilidade urbana sustentável',
    categoryTag: 'Mobilidade Verde',
    description: 'Destaque a economia, praticidade e a liberdade da mobilidade sem CNH. Mostre autonomia de bateria, velocidade máxima, comparativos de modelos, opções de recarga e condições facilitadas de parcelamento.',
    iconName: 'Zap',
    features: [
      'Catálogo visual com ficha de autonomia, bateria e velocidade',
      'Seção explicativa sobre a legislação de veículos sem CNH',
      'Calculadora de economia em comparação com gasolina',
      'Botão de test-ride agendado via WhatsApp',
      'Painel de atualização de cores e estoque disponível'
    ],
    metrics: 'Até 4x mais pedidos de cotação e test-ride diários',
    recommendedPlan: 'sistema',
    recommendedPrice: 'R$ 700,00',
    whatsappMessage: 'Olá Venda Mais Online! Tenho uma loja de Motos Elétricas / Scooters sem CNH e quero um catálogo digital moderno.'
  },
  {
    id: 'dentistas',
    title: 'Dentistas & Clínicas Odontológicas',
    subtitle: 'Páginas de alta conversão para agendamentos e procedimentos',
    categoryTag: 'Saúde & Odonto',
    description: 'Atraia pacientes particulares para procedimentos de alto valor (lentes de contato, implantes, alinhadores invisíveis e estética dental). Layout acolhedor, depoimentos em vídeo/texto e agendamento rápido.',
    iconName: 'Sparkles',
    features: [
      'Apresentação visual dos tratamentos e especialidades clínicas',
      'Botão flutuante de agendamento ágil no WhatsApp',
      'Seção de antes e depois e depoimentos de pacientes satisfeitos',
      'Mapa de localização com rota direta no Google Maps e Waze',
      'Página otimizada para anúncios no Google Ads e Instagram Ads'
    ],
    metrics: '+75% em conversões de campanhas no Google Ads',
    recommendedPlan: 'site',
    recommendedPrice: 'R$ 500,00',
    whatsappMessage: 'Olá Venda Mais Online! Sou dentista / dono de clínica odontológica e quero um site moderno para atrair mais pacientes.'
  },
  {
    id: 'mercados',
    title: 'Mercados & Varejo de Bairro',
    subtitle: 'Vitrines de ofertas semanais e canal de pedidos expressos',
    categoryTag: 'Varejo & Mercado',
    description: 'Digitalize seu encarte semanal e crie um canal direto de vendas para a sua vizinhança. Destaque carnes, hortifrúti, ofertas de fim de semana e receba listas de compras diretamente pelo WhatsApp.',
    iconName: 'Store',
    features: [
      'Encarte digital interativo atualizável semanalmente',
      'Organização por departamentos (Açougue, Hortifrúti, Padaria, Bebidas)',
      'Botão "Pedir no WhatsApp" com lista de itens pré-montada',
      'Informativo de horário de funcionamento e raio de entrega',
      'Design ultra-rápido feito para carregar em redes móveis 4G/5G'
    ],
    metrics: 'Aumento de 35% no ticket médio dos pedidos por delivery',
    recommendedPlan: 'sistema',
    recommendedPrice: 'R$ 700,00',
    whatsappMessage: 'Olá Venda Mais Online! Tenho um mercado / comércio de varejo e quero um portal de ofertas com pedidos no WhatsApp.'
  },
  {
    id: 'ecommerce',
    title: 'Lojas Virtuais / E-commerce Completo',
    subtitle: 'Lojas modernas, rápidas e prontas para vender no automático',
    categoryTag: 'E-commerce',
    description: 'Tenha sua própria loja na internet sem depender de comissões abusivas de marketplaces. Integração com cálculo automático de frete (Correios/Melhor Envio), pagamentos via Pix e cartão, e painel de estoque.',
    iconName: 'ShoppingCart',
    features: [
      'Checkout limpo e sem distrações com taxa máxima de aprovação',
      'Integração transparente com Pix Instantâneo e Cartão de Crédito',
      'Cálculo automático de CEP e opções de frete',
      'Gestão simples de pedidos, clientes e variações (tamanho/cor)',
      'Painel de métricas de vendas e produtos mais procurados'
    ],
    metrics: 'Venda 24 horas por dia com controle total da sua marca',
    recommendedPlan: 'sistema',
    recommendedPrice: 'R$ 700,00',
    whatsappMessage: 'Olá Venda Mais Online! Quero criar minha Loja Virtual / E-commerce completo para vender meus produtos online.'
  }
];
