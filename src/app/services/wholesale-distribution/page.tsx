import { useState } from 'react';
import { CheckCircle, ArrowRight, Building2, Globe, Package, TrendingUp, Users, Shield, Heart, Clock, DollarSign, Award, Truck, AlertTriangle, Target, Zap, Star, ShoppingCart } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';
import { SEOHead } from '../../../components/SEOHead';
import heroImage from 'figma:asset/b44344f4880d7019e77fb0c36a3a27680dbc53a6.png';

export default function WholesaleDistributionPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wholesale Distribution",
    "description": "Licensed pharmaceutical wholesale distribution to hospitals, clinics, pharmacies, and healthcare facilities across Africa. WHO GDP-compliant distribution networks.",
    "provider": {"@type": "Organization", "name": "Pacem Health Inc."},
    "areaServed": {"@type": "Place", "name": "Africa"},
    "serviceType": "Wholesale Distribution"
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Wholesale Distribution | Pharmaceutical & Medical Equipment Distribution Africa | Pacem Health"
        description="Licensed pharmaceutical and medical equipment wholesale distribution across Africa. WHO GDP-compliant networks serving hospitals, clinics, and pharmacies. Reliable supply to 1,000+ healthcare facilities in 15+ countries."
        keywords={[
          'pharmaceutical wholesale Africa',
          'medical equipment distribution',
          'WHO GDP distribution',
          'hospital supply distribution',
          'pharmacy wholesale Africa',
          'healthcare wholesale distribution',
          'licensed pharmaceutical distributor',
          'medical supply wholesale'
        ]}
        structuredData={serviceSchema}
      />
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative bg-[#0033A0] text-white overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Healthcare professional providing patient care with quality medical equipment and supplies"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
          <div className="relative max-w-2xl">
            {/* Dark Gradient Overlay for Text Readability - Only behind text */}
            <div className="absolute inset-0 -mx-8 -my-8 bg-gradient-to-r from-[#0033A0]/95 via-[#0033A0]/90 to-transparent rounded-r-3xl"></div>
            
            {/* Diagonal Line Pattern Overlay - Only behind text */}
            <div className="absolute inset-0 -mx-8 -my-8 opacity-5">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="diagonal-lines-wd" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.5"/>
                    <line x1="0" y1="50" x2="50" y2="100" stroke="white" strokeWidth="0.5"/>
                    <line x1="50" y1="0" x2="100" y2="50" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonal-lines-wd)"/>
              </svg>
            </div>

            {/* Text Content - Positioned above overlays */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Wholesale Distribution
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Quality Products. Reliable Supply. Trusted Partnership.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-[#0033A0] hover:bg-gray-100">
                Become a Distribution Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Distribution Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Our Distribution Philosophy</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-[#0033A0]">From Supplier to Partner</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Pacem Health provides wholesale distribution services to <span className="text-[#0033A0]">pharmacies, clinics, hospitals, and health facilities</span> across Africa, ensuring reliable access to quality-assured pharmaceuticals and medical supplies. Whether you operate a community pharmacy in rural Kenya, a faith-based clinic in Ghana, or a private hospital network across East Africa, we provide the essential medicines and medical supplies you need to care for patients with confidence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Healthcare providers face constant challenges securing reliable supplies of quality-assured products at fair prices. Stock-outs disrupt patient care, quality concerns create risks, and inflexible terms strain cash flow.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Pacem Health approaches wholesale distribution as a <span className="text-[#0033A0]">strategic partnership</span>, not just product supply. We combine quality-assured products, reliable delivery, and comprehensive support to help healthcare providers focus on what matters most—delivering excellent patient care. Our regional hub network, flexible credit terms, and partnership support programs transform wholesale distribution from a transactional relationship into a foundation for sustainable healthcare delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve - Healthcare Provider Types */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Who We Serve</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Trusted wholesale partner to healthcare providers of all types across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Public Health Facilities */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0033A0]">
              <div className="w-14 h-14 bg-[#0033A0] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] text-center mb-4">Public Health Facilities</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Government hospitals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Public health centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>District health systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Government pharmacies</span>
                </li>
              </ul>
            </div>

            {/* Private Healthcare Facilities */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#00A0DC]">
              <div className="w-14 h-14 bg-[#00A0DC] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl text-[#00A0DC] text-center mb-4">Private Healthcare Facilities</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Private hospitals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Private clinics & health centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Diagnostic centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Maternity facilities</span>
                </li>
              </ul>
            </div>

            {/* Pharmacies & Retail */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0033A0]">
              <div className="w-14 h-14 bg-[#0033A0] rounded-full flex items-center justify-center mb-4 mx-auto">
                <ShoppingCart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] text-center mb-4">Pharmacies & Retail</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Community pharmacies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Pharmacy chains</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Hospital pharmacies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Retail medical stores</span>
                </li>
              </ul>
            </div>

            {/* Mission, Community & NGO Health */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#00A0DC]">
              <div className="w-14 h-14 bg-[#00A0DC] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Globe className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl text-[#00A0DC] text-center mb-4">Mission, Community & NGO</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Mission hospitals & clinics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>NGO health programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Community health systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Humanitarian programs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#0033A0] max-w-4xl mx-auto">
            <p className="text-center text-gray-700 leading-relaxed">
              <strong className="text-[#0033A0]">Comprehensive Healthcare Support:</strong> Whether you're a community pharmacy serving a rural population or an international NGO implementing a multi-country health program, we bring the same commitment to quality, reliability, and partnership—ensuring your facility has the products needed to deliver excellent patient care across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Distribution Operations at a Glance - Metrics */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Distribution Operations at a Glance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empowering healthcare providers with quality products, reliable delivery, and comprehensive support
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">1,500+</div>
              <div className="text-sm text-gray-600 leading-relaxed">WHO-PQ & FDA-Approved<br />Products in Catalog</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">50+</div>
              <div className="text-sm text-gray-600 leading-relaxed">Qualified Global<br />Suppliers</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">3</div>
              <div className="text-sm text-gray-600 leading-relaxed">Priority African<br />Markets</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">24/7</div>
              <div className="text-sm text-gray-600 leading-relaxed">Technical Support<br />Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars of Wholesale Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Three Pillars of Wholesale Excellence</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our comprehensive approach ensures every partner receives quality products, reliable service, and comprehensive support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Quality-Assured Products */}
            <div className="bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg p-8 border-t-4 border-[#0033A0]">
              <div className="w-16 h-16 bg-[#0033A0] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#0033A0] text-center mb-4">Quality-Assured Products</h3>
              <p className="text-center text-gray-600 mb-6">Every Product Meets International Standards</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-[#0033A0]">Triple-Verified Quality:</strong> Supplier certification, independent laboratory testing, complete regulatory documentation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-[#0033A0]">WHO-Prequalified Sources:</strong> Products from manufacturers meeting stringent international standards</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-[#0033A0]">Full Regulatory Compliance:</strong> All products registered and approved for distribution in your country</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-[#0033A0]">Complete Documentation:</strong> Certificates of Analysis, regulatory approvals, and quality assurance documentation</p>
                </div>
              </div>
            </div>

            {/* Pillar 2: Reliable Supply & Service */}
            <div className="bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg p-8 border-t-4 border-[#00A0DC]">
              <div className="w-16 h-16 bg-[#00A0DC] rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#00A0DC] text-center mb-4">Reliable Supply & Service</h3>
              <p className="text-center text-gray-600 mb-6">When You Need It, Where You Need It</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-[#00A0DC]">High Stock Availability:</strong> Comprehensive product range with consistent availability</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-[#00A0DC]">Fast Delivery:</strong> Urban delivery within 24-48 hours, regional delivery within 3-5 days</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-[#00A0DC]">Flexible Ordering:</strong> No minimum order requirements, order what you need when you need it</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-[#00A0DC]">24/7 Customer Service:</strong> Dedicated support team available to assist with orders, questions, and issues</p>
                </div>
              </div>
            </div>

            {/* Pillar 3: Partnership Support */}
            <div className="bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg p-8 border-t-4 border-[#0033A0]">
              <div className="w-16 h-16 bg-[#0033A0] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#0033A0] text-center mb-4">Partnership Support</h3>
              <p className="text-center text-gray-600 mb-6">Building Your Success</p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-[#0033A0]">Inventory Management Guidance:</strong> Helping you optimize stock levels and reduce waste</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-[#0033A0]">Regulatory Compliance Support:</strong> Assistance with licensing, GDP compliance, and inspections</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-[#0033A0]">Flexible Payment Terms:</strong> Cash on delivery, credit terms, and customized payment solutions</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 leading-relaxed"><strong className="text-[#0033A0]">Training & Capacity Building:</strong> Staff training on product knowledge, storage, and handling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Partnership Process - Accordion */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Our 4-Step Partnership Process</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              From application to first delivery in 2-3 weeks
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="step1" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#0033A0]">Application</h3>
                    <p className="text-sm text-gray-600">Submit partnership application with facility information</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 pl-16">
                <p className="text-gray-700 mb-4">
                  Submit a simple partnership application with your facility information, licensing details, and product needs.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm mb-2"><strong className="text-[#0033A0]">Key Activities:</strong></p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Complete partnership application form</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Provide facility and licensing documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Indicate product categories of interest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Specify delivery locations</span>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step2" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#0033A0]">Verification</h3>
                    <p className="text-sm text-gray-600">Verify credentials and confirm regulatory compliance</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 pl-16">
                <p className="text-gray-700 mb-4">
                  We verify your credentials, conduct a brief facility assessment, and confirm regulatory compliance.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm mb-2"><strong className="text-[#0033A0]">Key Activities:</strong></p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>License and credential verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Facility assessment (in-person or virtual)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Regulatory compliance confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Credit evaluation (if requesting credit terms)</span>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step3" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#0033A0]">Account Setup</h3>
                    <p className="text-sm text-gray-600">Set up distribution account and ordering system access</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 pl-16">
                <p className="text-gray-700 mb-4">
                  We set up your distribution account, provide access to our ordering system, and assign your dedicated account manager.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm mb-2"><strong className="text-[#0033A0]">Key Activities:</strong></p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Account creation and setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Ordering system access and training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Account manager assignment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Initial product catalog and pricing</span>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step4" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#0033A0]">Start Ordering</h3>
                    <p className="text-sm text-gray-600">Place your first order and begin receiving products</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 pl-16">
                <p className="text-gray-700 mb-4">
                  Place your first order and begin receiving quality-assured products with reliable delivery and comprehensive support.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm mb-2"><strong className="text-[#0033A0]">Key Activities:</strong></p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>First order placement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Delivery coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Product receipt and verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Ongoing account management</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-4 bg-[#00A0DC]/10 border border-[#00A0DC]/30 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-[#0033A0]">Total Timeline:</strong> 2-3 weeks from application to first delivery
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Key Benefits - Pfizer-Inspired Design */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Key Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How our wholesale distribution approach delivers sustainable healthcare supply
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 - Quality You Can Trust */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl text-[#0033A0] leading-tight pt-2">Quality You Can Trust</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-600">Challenge:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Healthcare providers face risks from substandard and falsified products, threatening patient safety and facility reputation.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-[#00A0DC]">Our Solution:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Every product is triple-verified through supplier certification, independent laboratory testing, and complete regulatory documentation.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <ArrowRight className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <p className="text-[#0033A0]">Result:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Zero substandard products, complete confidence in product quality, protection of your facility's reputation, and improved patient safety outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 - Reliable Supply Chain */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl text-[#0033A0] leading-tight pt-2">Reliable Supply Chain</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-600">Challenge:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Stock-outs disrupt patient care, force emergency purchases at premium prices, and damage patient trust.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-[#00A0DC]">Our Solution:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Regional hub network, high stock availability, and fast delivery ensure you have the products you need when you need them.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <ArrowRight className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <p className="text-[#0033A0]">Result:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Consistent product availability, reduced stock-outs, improved patient satisfaction, and better cash flow management.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 - Business Growth Support */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl text-[#0033A0] leading-tight pt-2">Business Growth Support</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-600">Challenge:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Healthcare providers need more than just products—they need support to grow their businesses and improve operations.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-[#00A0DC]">Our Solution:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive partnership support including inventory management, regulatory compliance, training, and marketing assistance.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <ArrowRight className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <p className="text-[#0033A0]">Result:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Optimized operations, improved compliance, enhanced staff capabilities, and sustainable business growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 - Flexible Terms */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl text-[#0033A0] leading-tight pt-2">Flexible Terms</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-600">Challenge:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Rigid payment terms and high minimum orders strain cash flow and limit ordering flexibility for small and medium healthcare providers.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-[#00A0DC]">Our Solution:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    No minimum orders, flexible payment terms including cash on delivery and credit options, and customized solutions for your needs.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <ArrowRight className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <p className="text-[#0033A0]">Result:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Improved cash flow management, ability to order optimal quantities, reduced working capital requirements, and financial flexibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Partnership Tiers</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Flexible partnership options designed to meet the needs of facilities of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Community Partner */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-[#00A0DC] transition-colors">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-[#0033A0]" />
                </div>
                <h3 className="text-2xl text-[#0033A0] mb-2">Community Partner</h3>
                <p className="text-sm text-gray-600">For small pharmacies, clinics, and health centers</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">No minimum order requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cash on delivery payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Standard pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic support services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24/7 customer service</span>
                </li>
              </ul>

              <Button className="w-full bg-gray-100 text-[#0033A0] hover:bg-gray-200">
                Learn More
              </Button>
            </div>

            {/* Preferred Partner */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-[#00A0DC] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#00A0DC] text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              
              <div className="text-center mb-6 mt-2">
                <div className="w-16 h-16 bg-[#00A0DC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-[#00A0DC]" />
                </div>
                <h3 className="text-2xl text-[#00A0DC] mb-2">Preferred Partner</h3>
                <p className="text-sm text-gray-600">For established pharmacies, clinics, and small hospital networks</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Preferred pricing (volume discounts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Net 30 credit terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority order processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Enhanced support services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Quarterly business reviews</span>
                </li>
              </ul>

              <Button className="w-full bg-[#00A0DC] text-white hover:bg-[#0090CC]">
                Get Started
              </Button>
            </div>

            {/* Strategic Partner */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-[#0033A0] transition-colors">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#0033A0]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#0033A0]" />
                </div>
                <h3 className="text-2xl text-[#0033A0] mb-2">Strategic Partner</h3>
                <p className="text-sm text-gray-600">For large pharmacy chains, hospital networks, and major facilities</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Strategic pricing (significant volume discounts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Net 60 credit terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated account management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comprehensive partnership support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Customized solutions and services</span>
                </li>
              </ul>

              <Button className="w-full bg-[#0033A0] text-white hover:bg-[#002A80]">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Product Categories</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive range of quality-assured pharmaceuticals, medical supplies, and equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pharmaceuticals */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-2 bg-[#0033A0]"></div>
              <div className="p-6">
                <h3 className="text-xl text-[#0033A0] mb-3 group-hover:text-[#00A0DC] transition-colors">
                  Pharmaceuticals
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Essential medicines, chronic disease medications, acute care treatments, and specialty pharmaceuticals from WHO-prequalified manufacturers.
                </p>
              </div>
            </div>

            {/* Medical Supplies */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-2 bg-[#00A0DC]"></div>
              <div className="p-6">
                <h3 className="text-xl text-[#00A0DC] mb-3 group-hover:text-[#0033A0] transition-colors">
                  Medical Supplies
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Wound care and dressings, surgical supplies, diagnostic supplies, and personal protective equipment for comprehensive healthcare delivery.
                </p>
              </div>
            </div>

            {/* Medical Equipment */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-2 bg-[#0033A0]"></div>
              <div className="p-6">
                <h3 className="text-xl text-[#0033A0] mb-3 group-hover:text-[#00A0DC] transition-colors">
                  Medical Equipment
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Diagnostic equipment, patient monitoring devices, laboratory equipment, and clinical furniture from certified manufacturers.
                </p>
              </div>
            </div>

            {/* Maternal & Child Health */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-2 bg-[#00A0DC]"></div>
              <div className="p-6">
                <h3 className="text-xl text-[#00A0DC] mb-3 group-hover:text-[#0033A0] transition-colors">
                  Maternal & Child Health
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Prenatal and postnatal care products, pediatric medications, immunization supplies, and family planning products for comprehensive MNCH programs.
                </p>
              </div>
            </div>

            {/* Diagnostics */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-2 bg-[#0033A0]"></div>
              <div className="p-6">
                <h3 className="text-xl text-[#0033A0] mb-3 group-hover:text-[#00A0DC] transition-colors">
                  Diagnostics
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Rapid diagnostic tests, laboratory reagents, point-of-care testing devices, and specimen collection supplies for accurate disease detection.
                </p>
              </div>
            </div>

            {/* Cold Chain Products */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-2 bg-[#00A0DC]"></div>
              <div className="p-6">
                <h3 className="text-xl text-[#00A0DC] mb-3 group-hover:text-[#0033A0] transition-colors">
                  Cold Chain Products
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Vaccines, biologics, temperature-sensitive medications, and cold chain equipment with complete temperature monitoring and documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="text-lg text-gray-900">What are the requirements to become a distribution partner?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-5">
                You need a valid pharmaceutical license or healthcare facility license, a physical location for product storage, and compliance with local regulatory requirements. We work with facilities of all sizes, from small community pharmacies to large hospital networks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="text-lg text-gray-900">Is there a minimum order requirement?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-5">
                No. We understand that different facilities have different needs. Community Partners can order any quantity needed, while Preferred and Strategic Partners benefit from volume discounts on larger orders.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq3" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="text-lg text-gray-900">What payment terms are available?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-5">
                We offer flexible payment options including cash on delivery, bank transfer, mobile money, and credit terms (Net 30 or Net 60) for qualified partners. Payment terms are determined during the verification process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq4" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="text-lg text-gray-900">How fast can I receive my order?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-5">
                Urban deliveries typically arrive within 24-48 hours, while regional deliveries take 3-5 days. Emergency orders can be expedited. Delivery times depend on your location and product availability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq5" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="text-lg text-gray-900">Do you provide training and support?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-5">
                Yes. All partners receive comprehensive support including staff training on product knowledge and handling, regulatory compliance assistance, inventory management guidance, and marketing support. Strategic Partners receive dedicated account management and customized support programs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq6" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="text-lg text-gray-900">Can I serve both public health programs and private patients?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-5">
                Absolutely. Our wholesale distribution services support healthcare providers serving diverse patient populations, including public health programs, private patients, NGO programs, and community health initiatives. We provide the same quality assurance and reliability regardless of your patient mix.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Why Choose Pacem Wholesale Distribution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Why Choose Pacem Wholesale Distribution</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality Assurance */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0033A0] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Quality Assurance</h3>
              <p className="text-gray-700 leading-relaxed">
                Triple-verified quality on every product, sourced from WHO-prequalified manufacturers and internationally-recognized suppliers.
              </p>
            </div>

            {/* Reliable Supply */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#00A0DC] rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl text-[#00A0DC] mb-3">Reliable Supply</h3>
              <p className="text-gray-700 leading-relaxed">
                Regional hub network ensures consistent product availability and fast delivery across urban and regional areas.
              </p>
            </div>

            {/* Comprehensive Support */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#0033A0] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Comprehensive Support</h3>
              <p className="text-gray-700 leading-relaxed">
                More than just product supply—we provide training, regulatory support, inventory guidance, and business development assistance.
              </p>
            </div>

            {/* Flexible Partnership */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#00A0DC] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl text-[#00A0DC] mb-3">Flexible Partnership</h3>
              <p className="text-gray-700 leading-relaxed">
                No minimums, flexible payment terms, and three partnership tiers designed to meet the needs of facilities of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#0033A0] to-[#0052CC] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Strengthen Your Healthcare Supply Chain?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact our Wholesale Distribution team to learn how we can support your facility with quality-assured products, reliable delivery, and comprehensive partnership support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-[#0033A0] hover:bg-gray-100">
              Become a Distribution Partner
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Product Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
