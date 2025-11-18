import { useState } from 'react';
import { CheckCircle, ArrowRight, Shield, Factory, FileCheck, Globe, Truck, DollarSign, TrendingDown, Award, Package, Users, Building2, ClipboardCheck, AlertTriangle, Target, BarChart3, ShoppingCart, Zap, Lock, Heart } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';
import { SEOHead } from '../../../components/SEOHead';
import heroImage from 'figma:asset/8708be815e9bff12e3cbe9c0fe9df99ad98065d1.png';

export default function ProcurementSourcingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Procurement & Distribution Services",
    "description": "Strategic pharmaceutical procurement from WHO-prequalified suppliers and GDP-compliant wholesale distribution to healthcare facilities across Africa. End-to-end supply solutions from global sourcing to last-mile delivery.",
    "provider": {"@type": "Organization", "name": "Pacem Health Inc."},
    "areaServed": {"@type": "Place", "name": "Africa"},
    "serviceType": "Healthcare Procurement and Distribution"
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Procurement & Distribution | Strategic Sourcing & Wholesale Distribution Africa | Pacem Health"
        description="Comprehensive procurement and wholesale distribution for African healthcare. WHO-prequalified supplier networks, GDP-compliant distribution, serving 1,500+ facilities. Strategic sourcing from global manufacturers to pharmacies, hospitals, and clinics across 15+ countries."
        keywords={[
          'healthcare procurement Africa',
          'pharmaceutical sourcing',
          'wholesale distribution Africa',
          'WHO prequalified suppliers',
          'GDP compliant distribution',
          'pharmacy wholesale',
          'hospital supply distribution',
          'medical equipment procurement',
          'healthcare purchasing Africa'
        ]}
        structuredData={serviceSchema}
      />
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative bg-gray-900 text-white overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Quality control laboratory testing pharmaceuticals with diagnostic equipment"
            className="w-full h-full object-cover object-center"
          />
          {/* Neutral Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
          <div className="relative max-w-2xl">
            {/* Text Content */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Procurement & Distribution
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                From Global Sourcing to Last-Mile Delivery
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-[#0033A0] hover:bg-gray-100">
                Request Procurement & Distribution Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach: End-to-End Supply Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">End-to-End Supply Solutions</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-black">From Global Sourcing to Healthcare Facilities</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-black leading-relaxed text-center">
              Pacem Health provides <span className="font-semibold">comprehensive procurement and distribution services</span> for governments, NGOs, healthcare organizations, hospitals, clinics, and pharmacies across Africa. We combine strategic sourcing from WHO-prequalified global suppliers with GDP-compliant wholesale distribution networks—delivering quality-assured pharmaceuticals and medical products from manufacturers to the point of care.
            </p>
            <p className="text-lg text-black leading-relaxed text-center">
              Whether you're a Ministry of Health sourcing products for a national program, a hospital group seeking reliable supply, or a community pharmacy serving rural patients, we provide end-to-end solutions that ensure the right products reach the right place at the right time—every time.
            </p>
            <p className="text-lg text-black leading-relaxed text-center">
              Pacem Health views procurement and distribution as a <span className="font-semibold">strategic partnership</span>, not just product supply. By combining rigorous supplier qualification, competitive market intelligence, quality-assured products, reliable delivery networks, and comprehensive support services, we strengthen health systems, improve patient outcomes, and maximize the value of every investment across the entire healthcare supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Operations at a Glance - Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">Operations at a Glance</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Measurable excellence delivering quality, value, and reliability from sourcing to delivery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl mb-3 text-black">100%</div>
              <div className="text-sm text-black leading-relaxed">WHO-Prequalified or<br />SRA-Approved Suppliers</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">1,500+</div>
              <div className="text-sm text-black leading-relaxed">Healthcare Facilities<br />(2026 Target)</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">500+</div>
              <div className="text-sm text-black leading-relaxed">Pre-Qualified Global<br />Suppliers</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">15+</div>
              <div className="text-sm text-black leading-relaxed">Countries with<br />Distribution Networks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve - Comprehensive */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">Who We Serve</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-black max-w-3xl mx-auto">
              From national procurement programs to individual healthcare facilities—comprehensive solutions for every client
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Public Sector Procurement */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <div className="mb-6 text-center">
                <h3 className="text-xl text-black">Public Sector Procurement</h3>
              </div>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Ministries of Health</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>UN Agencies (WHO, UNICEF, UNFPA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Donor Organizations (USAID, GAVI, Global Fund)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Development Banks (AfDB, World Bank)</span>
                </li>
              </ul>
            </div>

            {/* Healthcare Facilities */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <div className="mb-6 text-center">
                <h3 className="text-xl text-black">Healthcare Facilities</h3>
              </div>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Public & private hospitals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Clinics & health centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Mission & NGO facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Diagnostic & maternity centers</span>
                </li>
              </ul>
            </div>

            {/* Pharmacies & Distributors */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <div className="mb-6 text-center">
                <h3 className="text-xl text-black">Pharmacies & Distributors</h3>
              </div>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Community pharmacies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Pharmacy chains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Hospital pharmacies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Wholesale distributors</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 max-w-4xl mx-auto">
            <p className="text-center text-black leading-relaxed">
              <strong>One Integrated Service:</strong> Whether you're sourcing products for a national health program or seeking reliable wholesale supply for your pharmacy, we deliver the same strategic approach, quality standards, and comprehensive support—ensuring sustainable access to quality-assured healthcare products across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars of Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black">Four Pillars of Procurement & Distribution Excellence</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Comprehensive end-to-end strategy built on quality, efficiency, value, and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 1</div>
                <h3 className="text-2xl text-black">Strategic Sourcing & Vendor Management</h3>
                <p className="mt-2 text-black">
                  <strong>Access to the World's Leading Suppliers</strong>
                </p>
              </div>
              <p className="text-black mb-6">
                Pacem Health partners with WHO-prequalified manufacturers, FDA/EMA-approved suppliers, and internationally-recognized pharmaceutical suppliers to deliver quality-assured products that meet international standards and local regulatory requirements.
              </p>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Supplier Qualification:</strong> Comprehensive due diligence including facility audits and quality system verification
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Performance Management:</strong> Continuous monitoring of supplier quality, delivery, and cost
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Ethical Sourcing:</strong> Ensuring all suppliers adhere to strict ethical and environmental standards
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Global Network:</strong> Access to leading manufacturers across pharmaceuticals, devices, and diagnostics
                  </div>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 2</div>
                <h3 className="text-2xl text-black">Quality Assurance & Regulatory Compliance</h3>
                <p className="mt-2 text-black">
                  <strong>Quality You Can Trust</strong>
                </p>
              </div>
              <p className="text-black mb-6">
                Every product we source undergoes our "Pacem Excellence" triple-verification quality assurance process, combining supplier certification with independent laboratory testing and complete regulatory documentation.
              </p>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>WHO-Prequalified & FDA/EMA Approved:</strong> Prioritizing products meeting stringent international standards
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Independent Lab Testing:</strong> Partnership with ISO 17025 accredited laboratories for verification
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Full Documentation:</strong> Complete packages including Certificates of Analysis and regulatory approvals
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Regulatory Compliance:</strong> Ensuring products meet local requirements for import and distribution
                  </div>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 3</div>
                <h3 className="text-2xl text-black">Cost Efficiency & Value Optimization</h3>
                <p className="mt-2 text-black">
                  <strong>Maximizing Your Budget</strong>
                </p>
              </div>
              <p className="text-black mb-6">
                Our procurement experts use proven strategies to ensure you get the best possible value for your investment, without compromising on quality or reliability.
              </p>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Competitive Bidding:</strong> Managing transparent processes to optimize pricing
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Volume Aggregation:</strong> Consolidating demand from multiple clients for economies of scale
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Total Cost of Ownership:</strong> Looking beyond purchase price to include shipping and maintenance
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Market Intelligence:</strong> Leveraging deep market knowledge to identify best value opportunities
                  </div>
                </li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 4</div>
                <h3 className="text-2xl text-black">GDP-Compliant Wholesale Distribution</h3>
                <p className="mt-2 text-black">
                  <strong>Reliable Delivery to Every Healthcare Facility</strong>
                </p>
              </div>
              <p className="text-black mb-6">
                Our WHO Good Distribution Practices (GDP)-compliant networks ensure quality-assured products reach hospitals, clinics, and pharmacies across Africa with integrity and reliability.
              </p>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Regional Distribution Hubs:</strong> Strategic warehouses ensuring reliable access across 15+ countries
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Cold Chain Management:</strong> Temperature-controlled storage and transport for temperature-sensitive products
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Quality-Assured Delivery:</strong> Maintaining product integrity from warehouse to facility
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Flexible Credit Terms:</strong> Supporting healthcare providers with payment flexibility
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Procurement Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black">Our 5-Step Procurement & Distribution Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From needs assessment to final delivery, our systematic approach ensures excellence at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Step 1 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-black">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-black">Needs Assessment & Planning</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Defining requirements and aligning on expectations</p>
              </div>
              <p className="text-black text-sm">
                We work with you to define your product requirements, budget constraints, timeline expectations, and quality standards, ensuring alignment from the start.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-black">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-black">Market Research & Supplier Identification</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Pre-qualifying suppliers from our global network</p>
              </div>
              <p className="text-black text-sm">
                We identify and pre-qualify potential suppliers from our global network, conducting comprehensive due diligence to ensure they meet your requirements.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-black">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-black">Tendering & Negotiation</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Competitive bidding and contract finalization</p>
              </div>
              <p className="text-black text-sm">
                We manage the tendering process and negotiate contracts on your behalf, ensuring competitive pricing, favorable terms, and clear accountability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Step 4 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-black">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-black">Quality Assurance & Pre-Shipment Inspection</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Verifying compliance before products ship</p>
              </div>
              <p className="text-black text-sm">
                We conduct quality checks and pre-shipment inspections to ensure compliance with specifications before products leave the factory.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-black">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-black">Logistics & Delivery</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600">End-to-end coordination from factory to destination</p>
              </div>
              <p className="text-black text-sm">
                We manage the entire logistics process, from factory to final destination, ensuring products arrive safely, on time, and fully compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Problem-Solution-Result Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black">Key Benefits</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              How our integrated procurement and distribution services solve critical healthcare supply challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0033A0] flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl text-black">Complete Quality Confidence</h3>
              </div>
              <p className="text-black text-sm">
                Direct access to WHO-prequalified manufacturers and FDA/EMA-approved suppliers with triple-verified quality assurance on every product—ensuring zero substandard products and complete confidence in product quality.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0033A0] flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl text-black">Significant Cost Savings</h3>
              </div>
              <p className="text-black text-sm">
                Competitive bidding, volume aggregation across multiple clients, and expert negotiation deliver substantial cost savings without compromising quality—maximizing your budget for better health outcomes.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0033A0] flex items-center justify-center flex-shrink-0">
                  <FileCheck className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl text-black">Regulatory Compliance</h3>
              </div>
              <p className="text-black text-sm">
                Pre-approved suppliers and complete regulatory documentation packages ensure full compliance—enabling faster customs clearance, reduced risk of seizure, and acceptance by regulatory authorities.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0033A0] flex items-center justify-center flex-shrink-0">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl text-black">Supply Continuity</h3>
              </div>
              <p className="text-black text-sm">
                Multi-year agreements, buffer stock planning, and supply chain diversification protect against disruptions—guaranteeing product availability and predictable budgeting for program continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black">Product Categories</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Comprehensive sourcing across all essential health product categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pharmaceuticals */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl text-black mb-4">Pharmaceuticals</h3>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Essential medicines (WHO EML)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Specialty pharmaceuticals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Generic medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Biosimilars</span>
                </li>
              </ul>
            </div>

            {/* Medical Devices */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl text-black mb-4">Medical Devices</h3>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Diagnostic equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Surgical instruments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Patient monitoring systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Laboratory equipment</span>
                </li>
              </ul>
            </div>

            {/* Diagnostics */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl text-black mb-4">Diagnostics</h3>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Rapid diagnostic tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Laboratory reagents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Point-of-care testing devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Molecular diagnostics</span>
                </li>
              </ul>
            </div>

            {/* Health Commodities */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl text-black mb-4">Health Commodities</h3>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Personal protective equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Medical consumables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Surgical supplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Cold chain equipment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black">Frequently Asked Questions</h2>
            <p className="text-lg text-black">
              Common questions about our procurement and distribution services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">Which suppliers do you work with?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  We work with WHO-prequalified manufacturers, FDA/EMA-approved suppliers, and ISO-certified international pharmaceutical suppliers. Our rigorous vendor qualification process ensures that all our partners meet the highest standards of quality, reliability, and ethical conduct.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">How do you ensure product quality?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Our "Pacem Excellence" system provides a triple guarantee of quality. We source from certified, internationally-recognized suppliers, conduct independent laboratory testing through ISO 17025 accredited labs, and provide a complete package of quality and regulatory documentation for every product.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq3" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">Can you help us reduce our procurement costs?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Yes. We use a combination of competitive bidding, demand aggregation across multiple clients, and strategic negotiation to achieve significant cost savings. Our Total Cost of Ownership approach also helps you save money over the long term by considering all lifecycle costs including shipping, maintenance, and training.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq4" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">Do you handle regulatory compliance and import documentation?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Absolutely. Our regulatory affairs team prepares all necessary documentation, including import permits, quality certificates, and regulatory approvals. We work closely with national regulatory authorities to ensure smooth customs clearance and full compliance with local requirements.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq5" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">Can you source specialized or hard-to-find products?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Yes. While we maintain a comprehensive catalog of essential products, we also provide custom sourcing services for specialized equipment, rare medications, and unique program requirements. Our global network gives us access to virtually any quality-assured health product available on the international market.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Why Choose Pacem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black">Why Choose Pacem Procurement & Distribution</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              End-to-end supply chain excellence backed by global reach and local expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-4">
                <Globe className="h-8 w-8 text-orange-500 mb-3" />
              </div>
              <h3 className="text-xl mb-3 text-black">Global Network, Local Expertise</h3>
              <p className="text-black text-sm">
                Access to leading international suppliers combined with deep understanding of African regulatory requirements and market dynamics.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-4">
                <Shield className="h-8 w-8 text-orange-500 mb-3" />
              </div>
              <h3 className="text-xl mb-3 text-black">Triple-Verified Quality</h3>
              <p className="text-black text-sm">
                Our unique quality assurance process provides three layers of verification, ensuring every product meets the highest standards.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-4">
                <Package className="h-8 w-8 text-orange-500 mb-3" />
              </div>
              <h3 className="text-xl mb-3 text-black">Comprehensive Service Delivery</h3>
              <p className="text-black text-sm">
                Seamless integration with Supply Chain & Logistics, Quality Assurance, and Regulatory Services for end-to-end solutions.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-4">
                <Award className="h-8 w-8 text-orange-500 mb-3" />
              </div>
              <h3 className="text-xl mb-3 text-black">Proven Track Record</h3>
              <p className="text-black text-sm">
                Successfully delivering quality-assured health products to governments, NGOs, and healthcare organizations across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] to-[#0052CC] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact our Procurement & Distribution team for a consultation to learn how our end-to-end services can improve the quality, reliability, and cost-effectiveness of your health supply chain.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-[#0033A0] hover:bg-gray-100">
            Request Procurement & Distribution Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-8 text-white/80">
            <p>procurement@pacemhealth.com</p>
            <p className="mt-2">Nairobi, Kenya | Accra, Ghana</p>
          </div>
        </div>
      </section>
    </div>
  );
}