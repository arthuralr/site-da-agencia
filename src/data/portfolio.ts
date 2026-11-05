import { PortfolioProject } from '../types/index.ts';

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'auto-luxo-brasil',
    title: 'Auto Luxo Brasil',
    client: 'Grupo Automotivo Premium',
    category: 'automotivo',
    categoryLabel: 'Revenda de Carros',
    nicheId: 'revenda-carros',
    image: '/src/assets/images/portfolio_car_dealership_1793897963764.jpg',
    description: 'Portal automotivo completo com catálogo interativo de veículos premium, filtros por marca/ano/valor e painel administrativo.',
    fullDescription: 'Desenvolvimento de uma plataforma moderna para revenda de veículos seminovos e 0km. Conta com sistema de busca facetada em tempo real, galeria 360°, ficha técnica com mais de 25 itens opcionais e simulador de financiamento com envio de proposta direto para o WhatsApp do consultor responsável.',
    highlights: [
      'Painel intuitivo para inclusão e pausa de anúncios de veículos',
      'Filtros inteligentes por quilometragem, combustível e faixa de preço',
      'Simulador de parcelas integrado com proposta instantânea via WhatsApp',
      'Tempo de carregamento abaixo de 1 segundo (Google Lighthouse 98/100)'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Admin Dashboard', 'WhatsApp API'],
    conversionRateMetric: '+185% em propostas qualificadas de compra',
    deliveryDays: 5,
    liveUrlLabel: 'autoluxobrasil.demo.vendamais.online'
  },
  {
    id: 'harper-croft-law',
    title: 'Harper & Croft Sociedade de Advogados',
    client: 'Escritório de Advocacia Corporativa',
    category: 'juridico-imobiliario',
    categoryLabel: 'Advocacia & Jurídico',
    nicheId: 'advogados',
    image: '/src/assets/images/portfolio_law_firm_1793897962156.jpg',
    description: 'Site institucional de autoridade para banca jurídica, com agendamento de consultas e conformidade ética total com a OAB.',
    fullDescription: 'Plataforma institucional concebida para transmitir solidez, discrição e excelência jurídica. Estrutura voltada para clientes corporativos e pessoas físicas de alta renda, com apresentação minuciosa das áreas de atuação, currículo dos sócios e formulário seguro para agendamento de consulta prévia.',
    highlights: [
      'Estética refinada em Dark Slate e tipografia jurídica clássica',
      'Total conformidade com o provimento de publicidade da OAB',
      'Área de artigos informativos com indexação rápida no Google',
      'Formulário criptografado com triagem prévia e aviso no WhatsApp'
    ],
    technologies: ['React 19', 'Tailwind CSS v4', 'SEO Estratégico', 'Google Core Web Vitals'],
    conversionRateMetric: '+210% em consultas prévias agendadas',
    deliveryDays: 4,
    liveUrlLabel: 'harpercroft.adv.br'
  },
  {
    id: 'aether-homes',
    title: 'Aether Homes Empreendimentos',
    client: 'Imobiliária & Construtora Boutique',
    category: 'juridico-imobiliario',
    categoryLabel: 'Imobiliária & Construtora',
    nicheId: 'imobiliarias',
    image: '/src/assets/images/portfolio_real_estate_1793897962035.jpg',
    description: 'Portal imobiliário de luxo com catálogo de imóveis e empreendimentos na planta, mapas interativos e agendamento de visitas.',
    fullDescription: 'Solução sob medida para imobiliárias e incorporadoras de alto padrão. O portal permite navegar por fotos em altíssima definição de mansões, coberturas e lançamentos, filtrar por localização e quantidade de suítes, e agendar visitas com um clique diretamente no WhatsApp do corretor parceiro.',
    highlights: [
      'Busca dinâmica por condomínio, bairro e faixa orçamentária',
      'Vitrines com fotos panorâmicas e detalhes de infraestrutura do lazer',
      'Seção de lançamentos em construção com status de evolução da obra',
      'Formulário de captação de proprietários que desejam anunciar imóveis'
    ],
    technologies: ['React', 'TypeScript', 'Geo & Maps', 'Painel de Imóveis', 'Vercel Edge'],
    conversionRateMetric: '+140% em visitas presenciais agendadas',
    deliveryDays: 6,
    liveUrlLabel: 'aetherhomes.demo.vendamais.online'
  },
  {
    id: 'volt-scooters',
    title: 'Volt Brasil Mobilidade Elétrica',
    client: 'Distribuidora de Motos & Scooters sem CNH',
    category: 'automotivo',
    categoryLabel: 'Motos Elétricas sem CNH',
    nicheId: 'motos-eletricas',
    image: '/src/assets/images/hero_agency_digital_1793897961287.jpg',
    description: 'Catálogo de mobilidade sustentável focado em conversão de test-rides para motos e ciclomotores elétricos sem exigência de CNH.',
    fullDescription: 'Projeto criado para capitalizar a rápida ascensão das motos elétricas no Brasil. Destaca com extrema clareza a legislação vigente, economia mensal em relação ao transporte público ou gasolina, ficha de autonomia de bateria e facilidade de compra parcelada.',
    highlights: [
      'Calculadora interativa: Economia por KM rodado vs combustível',
      'Filtro de modelos por autonomia (35km, 50km, 70km+)',
      'Agendamento rápido de test-ride na loja física via WhatsApp',
      'Manual do consumidor e tira-dúvidas sobre a dispensa de CNH'
    ],
    technologies: ['React', 'Interactive Calculator', 'Tailwind CSS', 'Conversion CRO'],
    conversionRateMetric: '4.2x mais leads de test-ride por semana',
    deliveryDays: 5,
    liveUrlLabel: 'voltmobilidade.com.br'
  },
  {
    id: 'vitta-odontologia',
    title: 'Clínica Odontológica Oral & Estética',
    client: 'Clínica de Estética & Implantes',
    category: 'saude-servicos',
    categoryLabel: 'Dentistas & Clínicas',
    nicheId: 'dentistas',
    image: '/src/assets/images/portfolio_law_firm_1793897962156.jpg',
    description: 'Landing page de alta conversão para tratamentos odontológicos estéticos e implantes dentários com agendamento direto.',
    fullDescription: 'Criada para substituir sites lentos e antiquados que perdiam pacientes para os concorrentes. Apresenta tratamentos em destaque (lentes de resina/porcelana, invisalign, clareamento a laser), ambiente da clínica, qualificações da equipe e botão de avaliação expressa.',
    highlights: [
      'Página otimizada para tráfego pago (Google Ads e Meta Ads)',
      'Seção de depoimentos reais em vídeo e fotos de transformações',
      'Botão flutuante inteligente de WhatsApp com mensagem contextual',
      'Carregamento instantâneo no celular do paciente (0.6 segundos)'
    ],
    technologies: ['Vite', 'React 19', 'Tailwind CSS', 'CRO Landing Page'],
    conversionRateMetric: '+320% em contatos qualificados no WhatsApp',
    deliveryDays: 3,
    liveUrlLabel: 'orallux.odonto.com.br'
  },
  {
    id: 'emporio-mercado',
    title: 'Supermercado & Empório da Villa',
    client: 'Rede de Mercados & Conveniência',
    category: 'ecommerce-varejo',
    categoryLabel: 'Mercados & E-commerce',
    nicheId: 'mercados',
    image: '/src/assets/images/portfolio_car_dealership_1793897963764.jpg',
    description: 'Encarte digital semanal e catálogo de produtos com fechamento de pedidos de compras de supermercado direto pelo WhatsApp.',
    fullDescription: 'Substituiu os caros encartes impressos por uma vitrine interativa na web. Os clientes da região acessam as ofertas atualizadas toda segunda-feira, selecionam cortes de carne, hortifrúti ou bebidas e enviam a lista montada direto para o WhatsApp do delivery.',
    highlights: [
      'Atualização simples do encarte da semana em poucos minutos',
      'Separador de itens por setores de supermercado',
      'Montador automático de lista com soma estimada do carrinho',
      'Economia de mais de R$ 4.000/mês em impressões gráficas'
    ],
    technologies: ['React', 'State Machine', 'Tailwind CSS', 'WhatsApp Order Builder'],
    conversionRateMetric: '+90% em pedidos recorrentes no bairro',
    deliveryDays: 4,
    liveUrlLabel: 'emporiodavilla.online'
  }
];
