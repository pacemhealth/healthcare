import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowLeft, Calendar, Share2, Download, Package, Search, FileText, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function ProductCatalogLaunch() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#4B2991]">Home</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[#4B2991]">News & Media</Link>
            <span>/</span>
            <span className="text-foreground">Product Catalog Launch</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/news" className="inline-flex items-center text-[#4B2991] hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#7C944B] text-white rounded-full text-sm">
              Product Launch
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>February 18, 2025</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Pacem Health Unveils Comprehensive Medical Product Catalog for Africa
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8">
            First-of-its-kind comprehensive catalog features over 3,500 medical products across 22 categories, specifically curated for African healthcare needs with transparent pricing, technical specifications, and regulatory compliance information
          </p>

          {/* Share Actions */}
          <div className="flex flex-wrap gap-3 pb-8 border-b">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Catalog
            </Button>
          </div>

          {/* Featured Image */}
          <div className="my-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Medical equipment and products display"
              className="w-full h-96 object-cover rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Sample of medical equipment featured in the Pacem Health comprehensive product catalog
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Washington, D.C. — Pacem Health today launched its comprehensive Medical Product Catalog, providing healthcare institutions across Africa with transparent access to over 3,500 medical products spanning pharmaceuticals, equipment, diagnostics, and consumables. The catalog represents the first comprehensive, Africa-focused medical product resource with complete technical specifications, regulatory compliance information, and transparent pricing.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Addressing Information Gaps in Medical Procurement</h2>
            <p className="mb-6">
              Healthcare procurement teams across Africa face significant challenges in identifying, evaluating, and sourcing appropriate medical products. Limited access to comprehensive product information, unclear pricing structures, uncertain regulatory compliance status, and difficulty comparing alternative options create inefficiencies and suboptimal purchasing decisions.
            </p>

            <p className="mb-6">
              The Pacem Health Medical Product Catalog addresses these challenges by providing complete, standardized product information in a searchable, user-friendly format. Procurement professionals can quickly identify products meeting their requirements, compare alternatives, verify regulatory compliance, and obtain accurate pricing information.
            </p>

            <div className="bg-gradient-to-br from-[#7C944B]/5 to-[#4B2991]/5 p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">Catalog Features and Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                    <Package className="h-6 w-6 text-[#7C944B]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Comprehensive Coverage</h4>
                    <p className="text-muted-foreground">3,500+ products across 22 major categories and 150+ subcategories</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                    <Search className="h-6 w-6 text-[#4B2991]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Advanced Search</h4>
                    <p className="text-muted-foreground">Powerful filtering by category, application, specifications, and price range</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-6 w-6 text-[#7C944B]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Complete Documentation</h4>
                    <p className="text-muted-foreground">Technical specs, user manuals, compliance certificates, and training materials</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-[#4B2991]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Regulatory Clarity</h4>
                    <p className="text-muted-foreground">WHO prequalification status, country registrations, and quality certifications</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Product Categories and Coverage</h2>
            <p className="mb-6">
              The catalog spans the complete spectrum of medical products needed for healthcare delivery. Major categories include pharmaceuticals with both generic and branded medications for common conditions, infectious diseases, and chronic disease management. Each pharmaceutical listing includes active ingredients, dosage forms, packaging configurations, stability data, and regulatory approvals.
            </p>

            <p className="mb-6">
              Medical equipment ranges from basic examination tools to advanced diagnostic and treatment devices. Categories cover diagnostic imaging, laboratory analyzers, patient monitoring systems, surgical equipment, and durable medical equipment. Each equipment listing provides detailed technical specifications, power requirements, maintenance needs, training requirements, and warranty information.
            </p>

            <p className="mb-6">
              Diagnostic products include laboratory reagents and test kits for clinical chemistry, hematology, microbiology, immunology, and point-of-care testing. Complete information on storage requirements, shelf life, quality control procedures, and result interpretation guides procurement decisions.
            </p>

            <p className="mb-6">
              Medical consumables and supplies cover injection and infusion products, wound care materials, surgical supplies, personal protective equipment, and infection prevention products. Bulk packaging options and volume pricing support efficient inventory management.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Transparent Pricing and Procurement Terms</h2>
            <p className="mb-6">
              A defining feature of the catalog is transparent, published pricing for all products. Each listing includes unit prices, volume discount schedules, minimum order quantities, and lead times. This transparency enables accurate budgeting and cost comparison across alternative products.
            </p>

            <p className="mb-6">
              Pricing is structured to support both small individual facility orders and large-scale institutional or government procurement. Volume discounts reward bulk purchasing while ensuring small facilities can access products at reasonable prices.
            </p>

            <p className="mb-6">
              Clear payment terms, delivery options, and warranty provisions are specified for each product category. Healthcare institutions can make informed procurement decisions with full understanding of total costs and terms.
            </p>

            <div className="bg-[#7C944B] text-white p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">Quality Assurance and Regulatory Compliance</h3>
              <p className="text-white/90 mb-6">
                All products in the catalog meet rigorous quality standards and regulatory requirements:
              </p>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg mb-2">WHO Standards</h4>
                  <p className="text-white/80 text-sm">Products align with WHO Essential Medicines List, prequalification programs, and technical specifications</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg mb-2">Manufacturing Quality</h4>
                  <p className="text-white/80 text-sm">All manufacturers maintain current Good Manufacturing Practice (cGMP) certification</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg mb-2">Country Registrations</h4>
                  <p className="text-white/80 text-sm">Regulatory approval status clearly indicated for each African country market</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg mb-2">Quality Documentation</h4>
                  <p className="text-white/80 text-sm">Certificates of analysis, stability studies, and quality control data available on request</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Digital Platform and User Experience</h2>
            <p className="mb-6">
              The catalog is accessible through an intuitive digital platform designed for healthcare procurement professionals. Advanced search and filtering capabilities enable users to quickly identify products meeting specific technical requirements, budget constraints, or regulatory needs.
            </p>

            <p className="mb-6">
              Product comparison tools allow side-by-side evaluation of alternative options across specifications, pricing, and features. Users can create customized product lists, save searches, and share information with colleagues for collaborative procurement decision-making.
            </p>

            <p className="mb-6">
              The platform includes educational resources explaining technical specifications, helping procurement teams understand product differences and make informed choices. Video demonstrations, installation guides, and training materials supplement product listings.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Procurement Support Services</h2>
            <p className="mb-6">
              Beyond product information, Pacem Health provides comprehensive procurement support services. Technical consultations help institutions identify optimal products for specific clinical applications and facility contexts. Procurement specialists assist with tender preparation, specifications development, and vendor evaluation.
            </p>

            <p className="mb-6">
              Financing options enable institutions to procure needed products through flexible payment arrangements aligned with operational cash flows. Supply chain services ensure reliable delivery, proper storage, and inventory management support.
            </p>

            <p className="mb-6">
              After-sales support includes installation assistance, user training, preventive maintenance programs, and technical troubleshooting. This comprehensive service model ensures products deliver expected performance and value.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Curated Product Selection Process</h2>
            <p className="mb-6">
              Products included in the catalog undergo rigorous evaluation to ensure appropriateness for African healthcare settings. Selection criteria include proven performance in similar environments, appropriate technology level for available infrastructure and technical capacity, cost-effectiveness and value for money, reliable manufacturer support and parts availability, and compliance with international quality standards.
            </p>

            <p className="mb-6">
              The catalog emphasizes products that balance performance with practical considerations like power requirements, maintenance needs, and consumable costs. This ensures procured products can be effectively utilized and sustained over their intended lifespan.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Regular Updates and Expansion</h2>
            <p className="mb-6">
              The catalog will be continuously updated with new products, revised pricing, and updated regulatory information. Quarterly releases will introduce new product categories, expand coverage within existing categories, and incorporate user feedback on needed additions.
            </p>

            <p className="mb-6">
              Healthcare institutions can request evaluation of specific products not currently listed. Pacem Health will assess requested items and add them to the catalog when they meet quality and value criteria.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Supporting Health System Strengthening</h2>
            <p className="mb-6">
              The Medical Product Catalog advances health system strengthening by improving procurement efficiency, enabling evidence-based product selection, supporting budget planning with accurate pricing information, reducing procurement cycle times, and ensuring regulatory compliance and quality assurance.
            </p>

            <p className="mb-6">
              By addressing information asymmetries and transaction costs in medical product procurement, the catalog helps healthcare institutions maximize the impact of limited procurement budgets while ensuring products meet clinical needs and quality standards.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Access and Availability</h2>
            <p className="mb-6">
              The Pacem Health Medical Product Catalog is available online at www.pacemhealth.com/products with full search and filtering capabilities. Digital copies can be downloaded for offline reference. Healthcare institutions can request printed catalog sections for specific product categories.
            </p>

            <p className="mb-6">
              Pacem Health sales representatives across Africa provide in-person catalog consultations and procurement planning support. Regional offices maintain physical product samples and demonstration equipment for hands-on evaluation.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Looking Forward</h2>
            <p className="mb-6">
              The launch of the comprehensive Medical Product Catalog marks an important milestone in Pacem Health's mission to strengthen African healthcare systems. By providing transparent, comprehensive product information and supporting efficient procurement processes, the catalog contributes to better-equipped health facilities and improved patient care.
            </p>

            <p className="mb-6">
              As the catalog grows and evolves based on user needs and market developments, it will continue serving as an essential resource for healthcare procurement professionals working to build stronger, more effective health systems across Africa.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl mb-4">Product Information</h3>
            <div className="text-muted-foreground">
              <p className="mb-2">To access the catalog or request procurement support:</p>
              <p>Pacem Health Product Services</p>
              <p>Email: <a href="mailto:products@pacemhealth.com" className="text-[#4B2991] hover:underline">products@pacemhealth.com</a></p>
              <p>Phone: +1 (202) 555-0150</p>
              <p className="mt-4">Online Catalog: <Link to="/products" className="text-[#4B2991] hover:underline">www.pacemhealth.com/products</Link></p>
            </div>
          </div>

          {/* Related News */}
          <div className="mt-16 pt-8 border-t">
            <h3 className="text-2xl mb-6">Related News</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/news/pacem-health-launches">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-xs text-[#4B2991] mb-2 block uppercase tracking-wide">Company Announcement</span>
                    <h4 className="text-lg mb-2">Pacem Health Officially Launches</h4>
                    <p className="text-sm text-muted-foreground">New company to transform African healthcare systems</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/news/infant-nutrition-product">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-xs text-[#7C944B] mb-2 block uppercase tracking-wide">Innovation</span>
                    <h4 className="text-lg mb-2">New Infant Nutritional Solution Introduced</h4>
                    <p className="text-sm text-muted-foreground">Innovative product addressing infant malnutrition</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link to="/news">
              <Button className="bg-[#4B2991] hover:bg-[#3d1e7d]">
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
