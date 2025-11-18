# Quick Guide: Adding SEO to New Pages

## For Next.js Pages (App Router)

### Step 1: Add Metadata Export
```tsx
export const metadata = {
  title: "Your Page Title | Pacem Health",
  description: "Compelling 150-160 character description with keywords",
  keywords: [
    "primary keyword",
    "secondary keyword",
    "tertiary keyword"
  ]
};
```

### Step 2: Add Structured Data
```tsx
import { StructuredData, generateProductSchema } from '../../../components/StructuredData';

export default function YourPage() {
  const schema = generateProductSchema({
    name: "Product Name",
    description: "Product description",
    category: "Medical Equipment"
  });

  return (
    <div>
      <StructuredData data={schema} />
      {/* Your page content */}
    </div>
  );
}
```

---

## Available Schema Generators

### 1. Product Pages
```tsx
import { generateProductSchema } from '../components/StructuredData';

const schema = generateProductSchema({
  name: "Product Name",
  description: "Product description",
  image: "/product-image.jpg",
  category: "Medical Supplies",
  offers: {
    price: "99.99",
    currency: "USD",
    availability: "https://schema.org/InStock"
  }
});
```

### 2. Service Pages
```tsx
import { generateServiceSchema } from '../components/StructuredData';

const schema = generateServiceSchema({
  name: "Service Name",
  description: "Service description",
  provider: "Pacem Health Inc.",
  areaServed: ["Kenya", "Ghana", "Nigeria"],
  serviceType: "Healthcare Consulting"
});
```

### 3. Article/News Pages
```tsx
import { generateArticleSchema } from '../components/StructuredData';

const schema = generateArticleSchema({
  headline: "Article Title",
  description: "Article summary",
  image: "/article-image.jpg",
  datePublished: "2024-01-15",
  dateModified: "2024-01-20",
  author: "Pacem Health Inc."
});
```

### 4. FAQ Pages
```tsx
import { generateFAQSchema } from '../components/StructuredData';

const faqs = [
  {
    question: "What is the delivery time?",
    answer: "Standard delivery is 3-5 business days."
  },
  {
    question: "Do you ship to all African countries?",
    answer: "Yes, we ship to all 54 African countries."
  }
];

const schema = generateFAQSchema(faqs);
```

### 5. Team/Person Pages
```tsx
import { generatePersonSchema } from '../components/StructuredData';

const schema = generatePersonSchema({
  name: "John Doe",
  jobTitle: "Chief Medical Officer",
  description: "Bio text here",
  image: "/team/john-doe.jpg",
  sameAs: ["https://linkedin.com/in/johndoe"]
});
```

### 6. Software/Platform Pages
```tsx
import { generateSoftwareSchema } from '../components/StructuredData';

const schema = generateSoftwareSchema({
  name: "Platform Name",
  description: "Platform description",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web-based, iOS, Android",
  offers: {
    price: "Contact for pricing",
    currency: "USD"
  }
});
```

### 7. Breadcrumbs
```tsx
import { generateBreadcrumbSchema } from '../components/StructuredData';

const schema = generateBreadcrumbSchema([
  { name: "Home", url: "https://www.pacemhealth.com" },
  { name: "Products", url: "https://www.pacemhealth.com/products" },
  { name: "Current Page", url: "https://www.pacemhealth.com/products/item" }
]);
```

---

## Complete Example: Product Page

```tsx
'use client';

import { StructuredData, generateProductSchema, generateBreadcrumbSchema } from '../../../components/StructuredData';

export const metadata = {
  title: "Antimalarial Medications | Generic Pharmaceuticals | Pacem Health",
  description: "Quality-assured antimalarial medications including artemisinin-based combination therapies (ACTs) for malaria treatment across Africa. WHO-prequalified, affordable pricing, reliable supply chain.",
  keywords: [
    "antimalarial drugs Africa",
    "ACT medications",
    "malaria treatment",
    "artemisinin combination therapy",
    "WHO prequalified antimalarials"
  ]
};

export default function AntimalarialPage() {
  const productSchema = generateProductSchema({
    name: "Antimalarial Medications",
    description: "WHO-prequalified antimalarial medications for African healthcare systems",
    category: "Pharmaceuticals",
    image: "/products/antimalarials.jpg",
    offers: {
      price: "Contact for pricing",
      currency: "USD",
      availability: "https://schema.org/InStock"
    }
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.pacemhealth.com" },
    { name: "Products", url: "https://www.pacemhealth.com/products" },
    { name: "Pharmaceuticals", url: "https://www.pacemhealth.com/products/generic-pharmaceuticals" },
    { name: "Antimalarials", url: "https://www.pacemhealth.com/products/antimalarials" }
  ]);

  return (
    <div>
      {/* Structured Data */}
      <StructuredData data={productSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Page Content */}
      <h1>Antimalarial Medications</h1>
      {/* ... rest of content ... */}
    </div>
  );
}
```

---

## SEO Checklist for Every New Page

### ✅ Meta Tags
- [ ] Title (50-60 characters, includes "Pacem Health")
- [ ] Description (150-160 characters, compelling CTA)
- [ ] Keywords (5-10 relevant keywords)

### ✅ Structured Data
- [ ] Appropriate schema type (Product, Service, Article, etc.)
- [ ] Breadcrumb navigation
- [ ] FAQ schema if page has FAQs

### ✅ Content
- [ ] One H1 heading per page (includes target keyword)
- [ ] Logical H2, H3 hierarchy
- [ ] Natural keyword usage (not stuffed)
- [ ] Internal links to related pages
- [ ] All images have descriptive alt text

### ✅ Technical
- [ ] Fast loading (< 3 seconds)
- [ ] Mobile responsive
- [ ] Canonical URL set
- [ ] No broken links

---

## Target Keywords by Page Type

### **Product Pages:**
- "[Product category] Africa"
- "[Product name] medical supplies"
- "WHO prequalified [product]"
- "Quality [product] healthcare"

### **Service Pages:**
- "[Service name] Africa healthcare"
- "[Service type] health systems"
- "Government health [service]"
- "Donor [service] programs"

### **Platform Pages:**
- "[Platform name] healthcare technology"
- "[Solution type] Africa health systems"
- "Digital health [platform category]"
- "[Platform function] medical [domain]"

### **About/Team Pages:**
- "Healthcare innovation Africa"
- "Health systems strengthening"
- "Global health company"
- "Healthcare partnerships Africa"

---

## Common Mistakes to Avoid

❌ **Don't:**
- Duplicate title/description across pages
- Keyword stuff (looks spammy to Google)
- Use generic titles like "Home" or "About"
- Forget alt text on images
- Have multiple H1 tags per page
- Use images without compression (slows page)

✅ **Do:**
- Make every title/description unique
- Use natural language with keywords
- Be specific and descriptive
- Always add alt text (accessibility + SEO)
- One H1, multiple H2-H6 in hierarchy
- Compress images (use WebP when possible)

---

## Questions?

Refer to:
- `/lib/seo-config.ts` - Central configuration
- `/components/StructuredData.tsx` - All schema generators
- `/SEO_IMPLEMENTATION_GUIDE.md` - Comprehensive guide

Happy optimizing! 🚀
