// Structured Data (Schema.org) Component for SEO
// Helps Google understand page content for rich snippets

interface StructuredDataProps {
  data: any;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Product Schema Generator
export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  category?: string;
  offers?: {
    price?: string;
    currency?: string;
    availability?: string;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "category": product.category,
    ...(product.offers && {
      "offers": {
        "@type": "Offer",
        "price": product.offers.price,
        "priceCurrency": product.offers.currency || "USD",
        "availability": product.offers.availability || "https://schema.org/InStock"
      }
    })
  };
}

// Service Schema Generator
export function generateServiceSchema(service: {
  name: string;
  description: string;
  provider: string;
  areaServed?: string[];
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": service.provider
    },
    "areaServed": service.areaServed?.map(area => ({
      "@type": "Country",
      "name": area
    })),
    "serviceType": service.serviceType
  };
}

// Article Schema Generator
export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Organization",
      "name": article.author || "Pacem Health Inc."
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pacem Health Inc.",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.pacemhealth.com/logo.png"
      }
    }
  };
}

// Breadcrumb Schema Generator
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// FAQ Schema Generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Person Schema Generator (for team pages)
export function generatePersonSchema(person: {
  name: string;
  jobTitle: string;
  description?: string;
  image?: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": person.name,
    "jobTitle": person.jobTitle,
    "description": person.description,
    "image": person.image,
    "worksFor": {
      "@type": "Organization",
      "name": "Pacem Health Inc."
    },
    "sameAs": person.sameAs
  };
}

// Software Application Schema (for platforms like MedTrace, Asset360, FieldPro)
export function generateSoftwareSchema(software: {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem?: string;
  offers?: {
    price?: string;
    currency?: string;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": software.name,
    "description": software.description,
    "applicationCategory": software.applicationCategory,
    "operatingSystem": software.operatingSystem || "Web-based",
    "provider": {
      "@type": "Organization",
      "name": "Pacem Health Inc."
    },
    ...(software.offers && {
      "offers": {
        "@type": "Offer",
        "price": software.offers.price,
        "priceCurrency": software.offers.currency || "USD"
      }
    })
  };
}
