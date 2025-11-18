// SEO Component for React Router
// Manages meta tags, Open Graph, Twitter Cards, and Structured Data

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article' | 'product' | 'profile';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  structuredData?: any;
}

export function SEOHead({
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  type = 'website',
  article,
  structuredData,
}: SEOProps) {
  const location = useLocation();
  const siteUrl = 'https://www.pacemhealth.com';
  const currentUrl = `${siteUrl}${location.pathname}`;
  
  // Default keywords for all pages
  const defaultKeywords = [
    'global health innovation Africa',
    'healthcare systems strengthening',
    'pharmaceutical supply chain Africa',
    'medical equipment management',
    'government health partnerships',
    'donor health programs',
    'development bank health projects'
  ];
  
  const allKeywords = [...defaultKeywords, ...keywords].join(', ');
  const fullTitle = title.includes('Pacem Health') ? title : `${title} | Pacem Health`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update or create meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', allKeywords);
    
    // Open Graph tags
    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', type, 'property');
    updateMetaTag('og:url', currentUrl, 'property');
    updateMetaTag('og:image', image.startsWith('http') ? image : `${siteUrl}${image}`, 'property');
    updateMetaTag('og:site_name', 'Pacem Health', 'property');
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image.startsWith('http') ? image : `${siteUrl}${image}`);
    updateMetaTag('twitter:creator', '@pacemhealth');
    
    // Article specific tags
    if (article) {
      if (article.publishedTime) {
        updateMetaTag('article:published_time', article.publishedTime, 'property');
      }
      if (article.modifiedTime) {
        updateMetaTag('article:modified_time', article.modifiedTime, 'property');
      }
      if (article.author) {
        updateMetaTag('article:author', article.author, 'property');
      }
      if (article.section) {
        updateMetaTag('article:section', article.section, 'property');
      }
      if (article.tags) {
        article.tags.forEach(tag => {
          updateMetaTag('article:tag', tag, 'property');
        });
      }
    }
    
    // Canonical URL
    updateLinkTag('canonical', currentUrl);
    
    // Structured Data (JSON-LD)
    if (structuredData) {
      updateStructuredData(structuredData);
    }
    
    // Robots meta tag
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
  }, [fullTitle, description, allKeywords, currentUrl, image, type, article, structuredData]);

  return null; // This component doesn't render anything
}

// Helper function to update or create meta tags
function updateMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

// Helper function to update or create link tags
function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
}

// Helper function to add structured data (JSON-LD)
function updateStructuredData(data: any) {
  // Remove existing structured data scripts for this component
  const existingScript = document.querySelector('script[data-seo-structured-data]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Create new script tag
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.setAttribute('data-seo-structured-data', 'true');
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

// Pre-configured SEO for common page types

export function HomePageSEO() {
  return (
    <SEOHead
      title="Pacem Health | Global Health Innovation & Systems Delivery for Africa"
      description="Leading U.S.-based global health innovation company strengthening healthcare systems across Africa through pharmaceutical supply chains, medical equipment lifecycle management, and biomedical engineering networks. Partner with governments, donors, and development banks."
      keywords={[
        'healthcare Africa',
        'pharmaceutical supply chain',
        'medical equipment Africa',
        'biomedical engineering',
        'health systems strengthening'
      ]}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Pacem Health Inc.",
        "url": "https://www.pacemhealth.com",
        "logo": "https://www.pacemhealth.com/logo.png",
        "description": "U.S.-based global health innovation and systems delivery company focused on strengthening healthcare across Africa",
        "areaServed": ["Africa", "Sub-Saharan Africa"],
        "sameAs": [
          "https://www.linkedin.com/company/pacem-health",
          "https://twitter.com/pacemhealth"
        ]
      }}
    />
  );
}

export function ProductPageSEO({ productName, description, category }: { productName: string; description: string; category?: string }) {
  return (
    <SEOHead
      title={`${productName} - Medical Products & Equipment`}
      description={description}
      type="product"
      keywords={[
        'medical products Africa',
        'healthcare equipment',
        'pharmaceutical products',
        category || 'medical supplies'
      ]}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Product",
        "name": productName,
        "description": description,
        "category": category,
        "provider": {
          "@type": "Organization",
          "name": "Pacem Health Inc."
        }
      }}
    />
  );
}

export function ServicePageSEO({ serviceName, description, serviceType }: { serviceName: string; description: string; serviceType?: string }) {
  return (
    <SEOHead
      title={`${serviceName} - Healthcare Services`}
      description={description}
      keywords={[
        'healthcare services Africa',
        'health systems consulting',
        serviceType || 'healthcare solutions'
      ]}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "Pacem Health Inc."
        },
        "areaServed": {
          "@type": "Place",
          "name": "Africa"
        },
        "serviceType": serviceType
      }}
    />
  );
}

export function ArticlePageSEO({
  title,
  description,
  publishedDate,
  modifiedDate,
  author,
  image
}: {
  title: string;
  description: string;
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  image?: string;
}) {
  return (
    <SEOHead
      title={title}
      description={description}
      type="article"
      image={image}
      article={{
        publishedTime: publishedDate,
        modifiedTime: modifiedDate,
        author: author
      }}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image,
        "datePublished": publishedDate,
        "dateModified": modifiedDate || publishedDate,
        "author": {
          "@type": "Organization",
          "name": author || "Pacem Health Inc."
        },
        "publisher": {
          "@type": "Organization",
          "name": "Pacem Health Inc.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.pacemhealth.com/logo.png"
          }
        }
      }}
    />
  );
}
