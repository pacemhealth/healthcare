// SEO Configuration for Pacem Health Inc.
// Optimized for: Government partnerships, Donor relationships, Development banks

export const siteConfig = {
  name: "Pacem Health Inc.",
  title: "Pacem Health | Global Health Innovation & Systems Delivery for Africa",
  description: "Leading U.S.-based global health innovation company strengthening healthcare systems across Africa through pharmaceutical supply chains, medical equipment lifecycle management, and biomedical engineering networks. Partner with governments, donors, and development banks.",
  url: "https://www.pacemhealth.com",
  ogImage: "/og-image.jpg",
  keywords: [
    // Core Business
    "global health innovation Africa",
    "healthcare systems strengthening",
    "pharmaceutical supply chain Africa",
    "medical equipment management Africa",
    "biomedical engineering network",
    
    // Target Audience
    "government health partnerships",
    "donor health programs",
    "development bank health projects",
    "African health systems",
    "health ministry partnerships",
    
    // Solutions
    "pharmaceutical tracking system",
    "equipment lifecycle management",
    "cold chain logistics Africa",
    "health technology solutions",
    "medical supply chain",
    
    // Geographic
    "healthcare solutions Africa",
    "sub-Saharan Africa health",
    "East Africa healthcare",
    "West Africa health systems",
    
    // Platforms
    "MedTrace pharmaceutical tracking",
    "Asset360 equipment management",
    "FieldPro biomedical engineers"
  ],
  
  // Organization Schema
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pacem Health Inc.",
    "alternateName": "Pacem Health",
    "url": "https://www.pacemhealth.com",
    "logo": "https://www.pacemhealth.com/logo.png",
    "description": "U.S.-based global health innovation and systems delivery company focused on strengthening healthcare across Africa",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "United States"
    },
    "sameAs": [
      "https://www.linkedin.com/company/pacem-health",
      "https://twitter.com/pacemhealth"
    ],
    "areaServed": [
      "Africa",
      "Sub-Saharan Africa",
      "East Africa",
      "West Africa",
      "Southern Africa"
    ],
    "knowsAbout": [
      "Healthcare Systems",
      "Pharmaceutical Supply Chain",
      "Medical Equipment Management",
      "Biomedical Engineering",
      "Health Technology"
    ]
  }
};

// Page-specific SEO metadata generator
export function generatePageMetadata(page: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  type?: "website" | "article" | "profile" | "product";
  image?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}) {
  const fullTitle = page.title.includes("Pacem Health") 
    ? page.title 
    : `${page.title} | Pacem Health`;
  
  const url = page.path 
    ? `${siteConfig.url}${page.path}` 
    : siteConfig.url;
  
  const allKeywords = [
    ...siteConfig.keywords,
    ...(page.keywords || [])
  ].join(", ");

  return {
    title: fullTitle,
    description: page.description,
    keywords: allKeywords,
    authors: [{ name: "Pacem Health Inc." }],
    openGraph: {
      type: page.type || "website",
      url: url,
      title: fullTitle,
      description: page.description,
      siteName: siteConfig.name,
      images: [
        {
          url: page.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(page.article && {
        publishedTime: page.article.publishedTime,
        modifiedTime: page.article.modifiedTime,
        authors: page.article.author ? [page.article.author] : undefined,
        section: page.article.section,
        tags: page.article.tags,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      images: [page.image || siteConfig.ogImage],
      creator: "@pacemhealth",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
  };
}
