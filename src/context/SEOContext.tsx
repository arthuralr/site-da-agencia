import React, { createContext, useContext, useEffect, useState } from 'react';
import { FAQ_DATA } from '../data/faq.ts';

export interface SectionMeta {
  title: string;
  description: string;
  keywords: string;
  hash: string;
}

export const SECTION_METADATA: Record<string, SectionMeta> = {
  inicio: {
    hash: '#inicio',
    title: 'Venda Mais Online – Sites e Sistemas Web de Alta Conversão',
    description: 'Agência especializada no desenvolvimento de sites profissionais, portais de nicho, e-commerce e sistemas sob medida a partir de R$ 500,00.',
    keywords: 'criação de sites, desenvolvimento de sistemas, site profissional, agência digital, sites de alta conversão, sistema web'
  },
  nichos: {
    hash: '#nichos',
    title: 'Nichos Especializados – Sites para Revendas, Advogados, Imóveis e Clínicas | Venda Mais Online',
    description: 'Soluções digitais sob medida para concessionárias de veículos, escritórios de advocacia, imobiliárias, construtoras, dentistas e e-commerce.',
    keywords: 'site revenda de carros, site advogados oab, portal imobiliario, site construtora, catálogo motos elétricas, site dentista clínica'
  },
  precos: {
    hash: '#precos',
    title: 'Tabela de Preços Promocionais – Sites R$ 500 e Sistemas R$ 700 | Venda Mais Online',
    description: 'Valores transparentes e acessíveis: Criação de Sites por R$ 500,00 e Sistemas com Painel Administrativo por R$ 700,00. Sem mensalidades forçadas.',
    keywords: 'preço site profissional, quanto custa um site, criação de sites r$ 500, sistema web barato, site parcelado'
  },
  portfolio: {
    hash: '#portfolio',
    title: 'Portfólio de Projetos & Demonstrações Interativas | Venda Mais Online',
    description: 'Conheça nossos cases de sucesso desenvolvidos para o setor automotivo, advocacia, imobiliário e e-commerce com alta taxa de conversão.',
    keywords: 'portfólio criação de sites, exemplos de sites profissionais, modelos de sistemas web, cases de conversão'
  },
  sobre: {
    hash: '#sobre',
    title: 'Nossa Metodologia & Processo de Desenvolvimento | Venda Mais Online',
    description: 'Conheça o processo da Venda Mais Online em 4 etapas simples: do diagnóstico e design exclusivo até a publicação com treinamento incluso.',
    keywords: 'metodologia criação de sites, processo ágil web, agência venda mais online'
  },
  contato: {
    hash: '#contato',
    title: 'Solicitar Orçamento – Fale Conosco no WhatsApp | Venda Mais Online',
    description: 'Inicie seu projeto com atendimento imediato no WhatsApp ou solicite uma proposta personalizada para seu nicho de mercado.',
    keywords: 'contato venda mais online, orçamento site whatsapp, criar site agora'
  }
};

interface SEOContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  metadata: SectionMeta;
}

const SEOContext = createContext<SEOContextType | undefined>(undefined);

export const SEOProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<string>('inicio');

  const metadata = SECTION_METADATA[activeSection] || SECTION_METADATA.inicio;

  // Sync head tags whenever metadata or activeSection changes
  useEffect(() => {
    // 1. Title
    document.title = metadata.title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let tag = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Meta description & keywords
    setMetaTag('name', 'description', metadata.description);
    setMetaTag('name', 'keywords', metadata.keywords);

    // OpenGraph
    setMetaTag('property', 'og:title', metadata.title);
    setMetaTag('property', 'og:description', metadata.description);
    setMetaTag('property', 'og:site_name', 'Venda Mais Online');
    setMetaTag('property', 'og:type', 'website');

    // Canonical & OG URL
    const canonicalUrl = `${window.location.origin}${window.location.pathname}${metadata.hash}`;
    setMetaTag('property', 'og:url', canonicalUrl);

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Twitter
    setMetaTag('name', 'twitter:title', metadata.title);
    setMetaTag('name', 'twitter:description', metadata.description);
  }, [metadata]);

  // Inject Rich Schema.org JSON-LD Structured Data
  useEffect(() => {
    const jsonLdId = 'venda-mais-online-schema';
    let scriptTag = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = jsonLdId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfessionalService',
          '@id': 'https://vendamais.online/#organization',
          'name': 'Venda Mais Online',
          'url': 'https://vendamais.online',
          'logo': 'https://vendamais.online/logo.png',
          'description': 'Agência especializada no desenvolvimento de sites profissionais, portais de nicho, e-commerce e sistemas sob medida.',
          'telephone': '+55-51-98289-2257',
          'email': 'contato@vendanainternet.online',
          'priceRange': 'R$ 300 - R$ 700',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Porto Alegre',
            'addressRegion': 'RS',
            'addressCountry': 'BR'
          },
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Serviços de Criação de Sites, Sistemas, LGPD e Tráfego Pago',
            'itemListElement': [
              {
                '@type': 'Offer',
                'name': 'Criação de Sites Profissionais',
                'description': 'Desenvolvimento de sites de alta conversão, responsivos e otimizados para o Google.',
                'price': '500.00',
                'priceCurrency': 'BRL'
              },
              {
                '@type': 'Offer',
                'name': 'Desenvolvimento de Sistemas Web',
                'description': 'Sistemas dinâmicos com Painel Administrativo para controle de produtos, imóveis ou veículos.',
                'price': '700.00',
                'priceCurrency': 'BRL'
              },
              {
                '@type': 'Offer',
                'name': 'Adequação de Empresas à LGPD',
                'description': 'Adequação completa à Lei 13.709/2018 com políticas, banner de cookies e canal do titular.',
                'price': '500.00',
                'priceCurrency': 'BRL'
              },
              {
                '@type': 'Offer',
                'name': 'Gestão de Tráfego Pago',
                'description': 'Campanhas profissionais no Google Ads, Instagram e Facebook Ads com foco em mensagens no WhatsApp.',
                'price': '300.00',
                'priceCurrency': 'BRL'
              }
            ]
          }
        },
        {
          '@type': 'FAQPage',
          '@id': 'https://vendamais.online/#faq',
          'mainEntity': FAQ_DATA.map((item) => ({
            '@type': 'Question',
            'name': item.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': item.answer
            }
          }))
        }
      ]
    };

    scriptTag.textContent = JSON.stringify(structuredData);
  }, []);

  // IntersectionObserver to detect which section is currently active during scroll
  useEffect(() => {
    const sectionIds = ['inicio', 'nichos', 'precos', 'portfolio', 'sobre', 'contato'];

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible section with highest intersection ratio
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          const id = visibleEntry.target.id;
          if (SECTION_METADATA[id]) {
            setActiveSection(id);
          }
        }
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: [0.1, 0.3, 0.6]
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SEOContext.Provider value={{ activeSection, setActiveSection, metadata }}>
      {children}
    </SEOContext.Provider>
  );
};

export const useSEO = (): SEOContextType => {
  const context = useContext(SEOContext);
  if (!context) {
    throw new Error('useSEO must be used within an SEOProvider');
  }
  return context;
};
