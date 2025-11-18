import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { ArrowRight, ShoppingCart, Truck, Building, CheckCircle, Package, FileCheck, Stethoscope, GraduationCap, Globe } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { SEOHead } from '../../components/SEOHead';
import heroImage from 'figma:asset/fb103abddaab28931523ae50bbe9753758d87c30.png';
import advancedSolutionsImage from 'figma:asset/1af6c899f86ca8b760ecb794d6e27700f7b6b149.png';

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare System Solutions",
    "description": "Comprehensive healthcare services including supply chain logistics, procurement, regulatory compliance, infrastructure planning, and quality assurance for African health systems",
    "provider": {
      "@type": "Organization",
      "name": "Pacem Health Inc."
    },
    "areaServed": {
      "@type": "Place",
      "name": "Africa"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Healthcare Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Supply Chain & Logistics",
            "description": "End-to-end pharmaceutical and medical equipment distribution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Procurement & Sourcing",
            "description": "Strategic procurement of quality-assured medical products"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Regulatory Compliance",
            "description": "Product registration and regulatory support"
          }
        }
      ]
    }
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Healthcare Services | Supply Chain, Procurement & Infrastructure for Africa | Pacem Health"
        description="Comprehensive healthcare system solutions for Africa including pharmaceutical supply chain logistics, strategic procurement, regulatory compliance, infrastructure planning, quality assurance, and wholesale distribution. Partner with governments and donors."
        keywords={[
          'healthcare services Africa',
          'pharmaceutical supply chain',
          'medical procurement services',
          'healthcare logistics Africa',
          'regulatory compliance services',
          'infrastructure planning healthcare',
          'quality assurance medical',
          'wholesale pharmaceutical distribution',
          'government healthcare partnerships'
        ]}
        structuredData={serviceSchema}
      />
      
      {/* Hero Section */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern pharmaceutical retail environment showcasing quality healthcare products and professional service"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Comprehensive Health System Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
              We partner with governments, funders, and health systems to design, implement, and sustain comprehensive healthcare infrastructure across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services - 3x3 Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Six comprehensive healthcare solutions designed for African markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Market Access Services */}
            <Link to="/services/market-access" className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#00A0DC]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#0033A0] transition-colors">Market Access Services</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your Gateway to African Healthcare Markets
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Comprehensive market access support for international manufacturers, managing sales, distribution, regulatory compliance, and market development across African healthcare markets.
                  </p>
                  <div className="flex items-center text-[#0033A0] group-hover:translate-x-2 transition-transform text-sm">
                    <span className="mr-2">Explore Market Access Solutions</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Procurement & Distribution Services */}
            <Link to="/services/procurement-sourcing" className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#00A0DC]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#0033A0] transition-colors">Procurement & Distribution</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Strategic Sourcing & Wholesale Distribution
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Quality-assured health products from trusted global suppliers, plus GDP-compliant wholesale distribution to pharmacies, clinics, and hospitals across Africa.
                  </p>
                  <div className="flex items-center text-[#0033A0] group-hover:translate-x-2 transition-transform text-sm">
                    <span className="mr-2">Explore Procurement & Distribution</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Supply Chain & Logistics */}
            <Link to="/services/supply-chain-logistics" className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#00A0DC]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#0033A0] transition-colors">Supply Chain & Logistics</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Reliable End-to-End Delivery Across Africa
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Comprehensive supply chain management from forecasting to last-mile delivery, ensuring healthcare products reach even the most remote facilities reliably and on time.
                  </p>
                  <div className="flex items-center text-[#0033A0] group-hover:translate-x-2 transition-transform text-sm">
                    <span className="mr-2">Strengthen Your Supply Chain</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Regulatory & Compliance Services */}
            <Link to="/services/regulatory" className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#00A0DC]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#0033A0] transition-colors">Regulatory & Compliance Services</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Navigate African Regulatory Complexity
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Product registration, compliance, pharmacovigilance, medical information, and quality management systems across 15+ African markets with comprehensive training support.
                  </p>
                  <div className="flex items-center text-[#0033A0] group-hover:translate-x-2 transition-transform text-sm">
                    <span className="mr-2">Explore Regulatory Services</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Infrastructure & Planning Services */}
            <Link to="/services/infrastructure-planning" className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#00A0DC]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#0033A0] transition-colors">Infrastructure & Planning</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Building Sustainable Health Systems
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Healthcare infrastructure design and delivery that strengthens entire health systems—from facility planning and equipment sourcing to partnership development and sustainability planning.
                  </p>
                  <div className="flex items-center text-[#0033A0] group-hover:translate-x-2 transition-transform text-sm">
                    <span className="mr-2">Explore Infrastructure Services</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Digital Health & Technology Solutions */}
            <Link to="/advanced-solutions" className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#00A0DC]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#0033A0] transition-colors">Digital Health & Technology Solutions</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Technology-Powered Healthcare Transformation
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    Integrated digital platforms, fleet management systems, mobile diagnostics, and health intelligence analytics that bring quality care to every corner of Africa.
                  </p>
                  <div className="flex items-center text-[#0033A0] group-hover:translate-x-2 transition-transform text-sm">
                    <span className="mr-2">Explore Digital Solutions</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Assurance - Featured Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Quality Assurance Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every service backed by triple-verified quality standards
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Link to="/services/quality-assurance" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-[#0033A0] to-[#00A0DC]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <CheckCircle className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl sm:text-3xl mb-2">Quality Assurance</h3>
                      <p className="text-lg text-white/90">Triple-Verified Quality. Every Product. Every Time.</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 sm:p-8">
                  <p className="text-base sm:text-lg text-muted-foreground mb-6">
                    Our comprehensive quality assurance framework ensures every pharmaceutical product meets international standards through triple verification: WHO-prequalified suppliers, ISO-accredited laboratory testing, and rigorous documentation standards. Quality is not just a service—it's how we deliver everything.
                  </p>
                  <div className="flex items-center text-[#0033A0] group-hover:translate-x-2 transition-transform">
                    <span className="mr-2">Learn About Our Quality Process</span>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Impact Across Africa
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Projected impact by 2026 through sustainable partnerships and measurable results
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">12</div>
              <div className="text-lg text-white/90">African Countries</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">300+</div>
              <div className="text-lg text-white/90">Healthcare Facilities</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">$30M+</div>
              <div className="text-lg text-white/90">Products & Equipment Delivered</div>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl mb-2">5,000+</div>
              <div className="text-lg text-white/90">Healthcare Workers Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pacem Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Why Choose Pacem Health
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A trusted partner for governments and health systems across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl mb-3">U.S.-Based, Africa-Focused</h3>
                <p className="text-muted-foreground">
                  Headquartered in the United States with deep operational expertise across African markets, ensuring compliance, quality, and cultural alignment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl mb-3">End-to-End Integration</h3>
                <p className="text-muted-foreground">
                  We don't just supply products — we engineer resilient systems, from initial planning through long-term maintenance and capacity building.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl mb-3">FDA Compliance & Quality</h3>
                <p className="text-muted-foreground">
                  All medical equipment meets rigorous U.S. FDA standards, ensuring safety, efficacy, and reliability for critical healthcare delivery.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl mb-3">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Years of successful partnerships with governments, NGOs, and health systems demonstrate our commitment to sustainable impact.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl mb-3">Technology-Powered Solutions</h3>
                <p className="text-muted-foreground">
                  Advanced digital platforms and data analytics enable real-time monitoring, optimization, and continuous improvement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl mb-3">Human-Centered Approach</h3>
                <p className="text-muted-foreground">
                  Every solution is designed with the people we serve in mind — from healthcare workers to the communities they care for.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#0033A0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Transform Your Healthcare System?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Our team of healthcare systems experts is ready to partner with you to design and implement sustainable solutions tailored to your needs.
          </p>
          <Button size="lg" className="bg-[#00A0DC] hover:bg-[#0088BB] text-white">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}