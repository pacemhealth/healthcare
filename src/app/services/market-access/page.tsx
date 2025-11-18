import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';
import { SEOHead } from '../../../components/SEOHead';
import heroImage from 'figma:asset/ed4cc103a10d798aac9c02f834822893492a9700.png';

export default function MarketAccessServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Market Access Services",
    "description": "Strategic market entry, regulatory pathways, and commercialization support for healthcare products entering African markets. Government partnerships and distribution network development.",
    "provider": {"@type": "Organization", "name": "Pacem Health Inc."},
    "areaServed": {"@type": "Place", "name": "Africa"},
    "serviceType": "Healthcare Market Access"
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Market Access Services | Healthcare Market Entry Strategy Africa | Pacem Health"
        description="Strategic market access services for healthcare products entering African markets. Regulatory pathways, government partnerships, distribution network development, pricing strategy, and commercialization support. Navigate complex African healthcare markets."
        keywords={[
          'market access Africa healthcare',
          'healthcare market entry Africa',
          'pharmaceutical market access',
          'medical device market entry',
          'regulatory market access',
          'government healthcare partnerships',
          'distribution network Africa',
          'healthcare commercialization Africa'
        ]}
        structuredData={serviceSchema}
      />
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative bg-gray-900 text-white overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Market Access - Strategic business partnership"
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
                Market Access Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Your Gateway to African Healthcare Markets
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-[#0033A0] hover:bg-gray-100">
                Request Market Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">From Export to Partnership</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-black leading-relaxed text-center">
              Many international manufacturers view African markets as export destinations, shipping products and hoping for sales. This approach fails to capture the complexity of African healthcare markets, where success requires local presence, regulatory expertise, distribution networks, and trusted relationships.
            </p>
            
            <p className="text-lg text-black leading-relaxed text-center">
              Pacem Health views market access as a <span className="font-semibold">strategic partnership</span> that combines your innovative products with our deep market knowledge, established infrastructure, and proven track record. We don't just distribute products—we build sustainable market presence, develop customer relationships, ensure regulatory compliance, and drive long-term growth.
            </p>
            
            <p className="text-lg text-black leading-relaxed text-center">
              <span className="font-semibold">We don't just move product. We build markets.</span> Our integrated approach transforms market complexity into competitive advantage, enabling manufacturers to succeed in African healthcare markets.
            </p>
          </div>
        </div>
      </section>

      {/* Market Access at a Glance - Operations Metrics */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">Market Access at a Glance</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Comprehensive market entry and growth solutions for international pharmaceutical and medical device manufacturers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl mb-3 text-black">15+</div>
              <div className="text-sm text-black leading-relaxed">African Countries<br />Mapped & Ready</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">500+</div>
              <div className="text-sm text-black leading-relaxed">Healthcare Facilities<br />Network</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">2</div>
              <div className="text-sm text-black leading-relaxed">Regional Distribution<br />Hubs</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">100%</div>
              <div className="text-sm text-black leading-relaxed">Quality Assured<br />Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">Four Pillars of Market Access Excellence</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Strategy, registration, commercialization, and sustained growth in one integrated platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 1</div>
                <h3 className="text-2xl text-black">Market Entry Strategy & Planning</h3>
              </div>
              <p className="text-black mb-6">
                We conduct comprehensive market analysis to identify opportunities, assess competition, evaluate regulatory requirements, and develop optimal market entry strategies for your products.
              </p>
              <div className="mb-3">
                <h4 className="text-black mb-3"><strong>Our Services:</strong></h4>
              </div>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Market Opportunity Assessment:</strong> Analyze market size, growth potential, and competitive landscape
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Regulatory Feasibility Analysis:</strong> Evaluate registration requirements, timelines, and pathways
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Pricing & Reimbursement Strategy:</strong> Develop competitive pricing aligned with market realities
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Go-to-Market Planning:</strong> Create phased market entry plans with clear milestones
                  </div>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 2</div>
                <h3 className="text-2xl text-black">Product Registration & Regulatory Support</h3>
              </div>
              <p className="text-black mb-6">
                We handle all regulatory requirements from product registration to ongoing compliance, ensuring your products meet African regulatory standards and maintain market authorization.
              </p>
              <div className="mb-3">
                <h4 className="text-black mb-3"><strong>Our Support:</strong></h4>
              </div>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Product Registration:</strong> Manage complete registration process across target markets
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Fast-Track Pathways:</strong> Leverage WHO-PQ, regional harmonization, and expedited reviews
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Regulatory Compliance:</strong> Ensure ongoing compliance with local requirements
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Pharmacovigilance:</strong> Establish and maintain compliant safety monitoring systems
                  </div>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 3</div>
                <h3 className="text-2xl text-black">Sales & Distribution Management</h3>
              </div>
              <p className="text-black mb-6">
                We serve as your in-country sales and distribution partner, managing the complete commercial operation from customer acquisition to product delivery and payment collection.
              </p>
              <div className="mb-3">
                <h4 className="text-black mb-3"><strong>Our Capabilities:</strong></h4>
              </div>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Distribution Network Management:</strong> Leverage our network of 500+ healthcare facilities
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Sales Force Deployment:</strong> Dedicated sales representatives promoting your products
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Customer Relationship Management:</strong> Build and maintain key account relationships
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Order Management:</strong> Handle orders, logistics, and delivery across African markets
                  </div>
                </li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 4</div>
                <h3 className="text-2xl text-black">Market Development & Growth</h3>
              </div>
              <p className="text-black mb-6">
                We actively develop markets for your products through education, relationship building, and strategic partnerships with healthcare providers, government programs, and NGOs.
              </p>
              <div className="mb-3">
                <h4 className="text-black mb-3"><strong>Our Approach:</strong></h4>
              </div>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Healthcare Provider Education:</strong> Medical education and product training for prescribers
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Key Account Development:</strong> Build relationships with hospitals, clinics, and pharmacy chains
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Tender & Procurement Support:</strong> Navigate government and institutional procurement
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Market Intelligence:</strong> Ongoing insights on market trends, competition, and opportunities
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">Our 5-Step Market Access Process</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-black max-w-3xl mx-auto">
              A systematic approach from market assessment to sustainable growth
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
                    <h3 className="text-xl text-black">Market Assessment & Strategy</h3>
                  </div>
                </div>
              </div>
              <p className="text-black text-sm">
                Evaluate products, target markets, and competitive landscape to develop optimal entry strategy
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
                    <h3 className="text-xl text-black">Regulatory & Compliance</h3>
                  </div>
                </div>
              </div>
              <p className="text-black text-sm">
                Manage product registration, regulatory approvals, and establishment of compliant systems
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
                    <h3 className="text-xl text-black">Infrastructure Setup</h3>
                  </div>
                </div>
              </div>
              <p className="text-black text-sm">
                Establish distribution networks, sales teams, and operational systems for commercial launch
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
                    <h3 className="text-xl text-black">Market Launch & Commercialization</h3>
                  </div>
                </div>
              </div>
              <p className="text-black text-sm">
                Execute go-to-market plans, acquire customers, and drive initial sales penetration
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
                    <h3 className="text-xl text-black">Growth & Optimization</h3>
                  </div>
                </div>
              </div>
              <p className="text-black text-sm">
                Continuously optimize operations, expand market coverage, and drive sustainable growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Registration Timelines */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-[#0033A0] mb-3 text-3xl md:text-4xl">Typical Market Entry Timelines</h2>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Plan your African market entry with realistic timelines by market and product category
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#0033A0] to-[#00A0DC] text-white">
                  <th className="px-6 py-4 text-left">Market/Region</th>
                  <th className="px-6 py-4 text-left">Generic Pharmaceuticals</th>
                  <th className="px-6 py-4 text-left">Branded/Patented Products</th>
                  <th className="px-6 py-4 text-left">Medical Devices</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4"><strong className="text-[#0033A0]">Kenya</strong></td>
                  <td className="px-6 py-4 text-sm text-gray-700">6-9 months</td>
                  <td className="px-6 py-4 text-sm text-gray-700">9-12 months</td>
                  <td className="px-6 py-4 text-sm text-gray-700">8-12 months</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4"><strong className="text-[#0033A0]">Ghana</strong></td>
                  <td className="px-6 py-4 text-sm text-gray-700">8-12 months</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12-15 months</td>
                  <td className="px-6 py-4 text-sm text-gray-700">10-14 months</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-6 py-4"><strong className="text-[#0033A0]">Nigeria</strong></td>
                  <td className="px-6 py-4 text-sm text-gray-700">10-14 months</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12-18 months</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12-16 months</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-6 py-4"><strong className="text-[#0033A0]">EAC Countries</strong></td>
                  <td className="px-6 py-4 text-sm text-gray-700">4-6 months (mutual recognition)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">6-9 months (mutual recognition)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">6-10 months</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4"><strong className="text-[#0033A0]">WHO-PQ Products</strong></td>
                  <td className="px-6 py-4 text-sm text-gray-700" colSpan={3}>
                    2-4 months (expedited pathway for WHO pre-qualified products in most markets)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <h3 className="text-black mb-4"><strong>Factors Accelerating Registration</strong></h3>
              <ul className="space-y-3 text-sm text-black">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>WHO pre-qualification or SRA approval (FDA, EMA, PMDA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Complete dossiers with all required documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Prior registrations in other African markets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Priority review for essential medicines and HIV/TB/Malaria products</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <h3 className="text-black mb-4"><strong>Common Delays to Avoid</strong></h3>
              <ul className="space-y-3 text-sm text-black">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Incomplete or incorrect documentation requiring resubmission</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Manufacturing site inspections not scheduled in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Stability studies not meeting tropical zone requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Delayed responses to regulatory queries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partnership Program Launch */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">Launching Strategic Partnership Program</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Purpose-built infrastructure seeking international pharmaceutical and medical device partners
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl mb-3 text-black">2025</div>
              <div className="text-sm text-black leading-relaxed">Market Access<br />Services Launch</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">4</div>
              <div className="text-sm text-black leading-relaxed">Partnership Models<br />Available</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">15+</div>
              <div className="text-sm text-black leading-relaxed">Target Markets<br />Mapped & Ready</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">100%</div>
              <div className="text-sm text-black leading-relaxed">Complete Infrastructure<br />Operational</div>
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 mb-8">
            <h3 className="text-black mb-4 text-center text-xl"><strong>Strategic Partnership Approach</strong></h3>
            <p className="text-center text-black leading-relaxed max-w-4xl mx-auto">
              We maintain a <span className="font-semibold">selective partnership portfolio</span> to ensure every pharmaceutical partner receives dedicated attention and resources. Unlike commodity distributors managing hundreds of product lines, our strategic focus enables <span className="font-semibold">collaborative partnership structuring, customized market strategies, and sustained commitment</span> to your product success across African markets.
            </p>
          </div>

          <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
            <h3 className="text-black mb-6 text-center text-xl"><strong>Strategic Market Entry Pathways</strong></h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm text-black mb-2"><strong>Opportunity 1: East African Community (EAC) Regional Launch</strong></div>
                <p className="text-sm text-black leading-relaxed mb-3">
                  Fast-track market entry across Kenya, Uganda, Tanzania, Rwanda, and Burundi leveraging EAC mutual recognition framework. Ideal for generic pharmaceuticals and essential medicines with WHO-PQ or SRA approval.
                </p>
                <div className="space-y-1 text-xs text-black">
                  <p><strong>Timeline:</strong> 4-6 months to first country approval</p>
                  <p><strong>Market Size:</strong> 180M population, growing middle class</p>
                  <p><strong>Distribution:</strong> 300+ facilities across 5 countries</p>
                </div>
              </div>

              <div>
                <div className="text-sm text-black mb-2"><strong>Opportunity 2: West Africa Hub Strategy</strong></div>
                <p className="text-sm text-black leading-relaxed mb-3">
                  Establish presence in Ghana and Nigeria as launching pads for ECOWAS region. Strategic for high-value specialty pharmaceuticals targeting tertiary hospitals and private healthcare sector.
                </p>
                <div className="space-y-1 text-xs text-black">
                  <p><strong>Timeline:</strong> 8-12 months for Ghana/Nigeria launch</p>
                  <p><strong>Market Size:</strong> 400M+ population, largest African economies</p>
                  <p><strong>Focus:</strong> Tertiary care, private hospitals, pharmacy chains</p>
                </div>
              </div>

              <div>
                <div className="text-sm text-black mb-2"><strong>Opportunity 3: Medical Device Multi-Country Registration</strong></div>
                <p className="text-sm text-black leading-relaxed mb-3">
                  Navigate complex device registration requirements across priority markets with established installation, training, and service capabilities for diagnostic and therapeutic equipment.
                </p>
                <div className="space-y-1 text-xs text-black">
                  <p><strong>Timeline:</strong> 10-14 months for 3-country launch</p>
                  <p><strong>Capability:</strong> Installation teams, service networks established</p>
                  <p><strong>Target:</strong> Public hospitals, diagnostic centers, private facilities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <h4 className="text-black mb-4"><strong>What We Bring to the Partnership</strong></h4>
              <ul className="space-y-3 text-sm text-black">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span><strong>Regulatory Infrastructure:</strong> Licensed operations in 15+ countries with in-house regulatory team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span><strong>Distribution Network:</strong> 500+ healthcare facilities across East and West Africa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span><strong>Quality Systems:</strong> WHO GDP and ISO 9001 certified operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span><strong>Regional Hubs:</strong> Operational facilities in Nairobi and Accra</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <h4 className="text-black mb-4"><strong>Ideal Partner Profile</strong></h4>
              <ul className="space-y-3 text-sm text-black">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>International pharmaceutical or medical device manufacturers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Products with WHO-PQ, FDA, EMA, or other SRA approvals preferred</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Commitment to African market development and long-term growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Alignment with our mission of strengthening African healthcare systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-[#0033A0] mb-3 text-3xl md:text-4xl">Market Access Partnership Models</h2>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Flexible partnership structures designed to meet your market objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-[#0033A0] mb-2">Model 1</h3>
                <h4 className="text-[#0033A0]">Sales Representative</h4>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Commission-based representation for targeted markets and portfolios.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Manufacturers testing African markets or with limited product portfolios.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-[#0033A0] mb-2">Model 2</h3>
                <h4 className="text-[#0033A0]">Preferred Distribution Partner</h4>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Exclusive distribution rights in specific countries with dedicated sales resources and market development support.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Manufacturers committed to specific African markets seeking focused market development.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-[#0033A0] mb-2">Model 3</h3>
                <h4 className="text-[#0033A0]">Strategic Market Access Partner</h4>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Comprehensive partnership including registration, distribution, market development, and ongoing compliance across multiple African countries.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Manufacturers pursuing significant African market presence with long-term growth objectives.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-[#0033A0] mb-2">Model 4</h3>
                <h4 className="text-[#0033A0]">Turnkey Market Entry</h4>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Complete market entry solution from regulatory approval through commercial launch and first-year operations.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Ideal for:</strong> Manufacturers new to African markets requiring comprehensive support for successful market entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-[#0033A0] mb-3 text-3xl md:text-4xl">Key Benefits</h2>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Why international manufacturers choose Pacem Health for African market access
            </p>
          </div>

          <div className="space-y-12">
            {/* Benefit 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-[#0033A0] mb-4">Benefit 1: Accelerated Market Entry</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Challenge:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Entering African markets independently requires years of relationship building, regulatory navigation, and infrastructure development.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Pacem Solution:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Established presence, regulatory expertise, and distribution networks enable rapid market entry with reduced risk and investment.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">Your Result:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Faster time to revenue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Reduced market entry costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Lower risk through proven infrastructure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-[#0033A0] mb-4">Benefit 2: Comprehensive Market Coverage</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Challenge:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Managing sales and distribution across multiple African countries with varying requirements is complex and resource-intensive.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Pacem Solution:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Regional hubs in Kenya and Ghana with networks across 15+ countries provide comprehensive market coverage.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">Your Result:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Broad market access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Consistent service delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Scalable growth across regions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-[#0033A0] mb-4">Benefit 3: Local Expertise & Relationships</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Challenge:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Success in African markets requires deep understanding of local healthcare systems, regulatory environments, and business practices.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Pacem Solution:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Local teams with established relationships across regulatory authorities, healthcare providers, and procurement organizations.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">Your Result:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Better market intelligence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Stronger customer relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Higher success rates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-[#0033A0] mb-4">Benefit 4: Integrated Service Delivery</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Challenge:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Managing separate partners for registration, distribution, quality assurance, and compliance creates coordination challenges.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Pacem Solution:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Complete market access solution integrating regulatory, distribution, quality, and compliance services.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">Your Result:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Single partner for market access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Seamless coordination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Reduced complexity and cost</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Quality Standards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-[#0033A0] mb-3 text-3xl md:text-4xl">Certifications & Quality Standards</h2>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Meeting international quality and compliance requirements for pharmaceutical distribution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-[#0033A0]">
              <h3 className="text-[#0033A0] mb-3">WHO Good Distribution Practices (GDP)</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Certified compliance with WHO GDP guidelines ensuring quality throughout the distribution chain, from receiving to delivery.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-[#0033A0]">
              <h3 className="text-[#0033A0] mb-3">ISO 9001:2015 Quality Management</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                International quality management system certification covering all operational processes and service delivery.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-[#0033A0]">
              <h3 className="text-[#0033A0] mb-3">National Regulatory Licenses</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Licensed pharmaceutical wholesaler and medical device distributor in all operating countries with current good standing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-[#0033A0]">
              <h3 className="text-[#0033A0] mb-3">Cold Chain Certification</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Temperature-controlled storage and transport capabilities meeting WHO PQS standards for vaccines and biologics.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-[#0033A0]">
              <h3 className="text-[#0033A0] mb-3">Pharmacovigilance Systems</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Established adverse event reporting and product safety monitoring systems compliant with ICH-GCP and local requirements.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-2 border-[#0033A0]">
              <h3 className="text-[#0033A0] mb-3">Financial & Legal Compliance</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Full compliance with anti-corruption, trade compliance, and financial transparency requirements for international partnerships.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-[#0033A0]/5 to-[#00A0DC]/5 rounded-lg border border-[#0033A0]/20">
            <p className="text-center text-gray-700 leading-relaxed">
              <strong className="text-[#0033A0]">Intellectual Property Protection:</strong> We maintain strict IP protection protocols including secure documentation systems, confidentiality agreements, and anti-counterfeiting measures to protect your proprietary products and brand integrity throughout the distribution chain.
            </p>
          </div>
        </div>
      </section>

      {/* Expert Team with Pharmaceutical Industry Credentials */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-[#0033A0] mb-3 text-3xl md:text-4xl">Expert Team with Pharmaceutical Industry Credentials</h2>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Our market access team combines deep pharmaceutical industry experience with African regulatory expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-2xl">RW</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0033A0] mb-1">Robert Williams</h3>
                  <p className="text-sm text-gray-600 mb-3">VP of Product & Procurement</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-[#0033A0]">20+ years global healthcare procurement experience</strong> across pharmaceutical, medical device, and laboratory supplies. Expertise in international pharmaceutical sourcing, vendor qualification, and quality assurance systems for emerging markets.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-2xl">AN</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0033A0] mb-1">Adaeze Nwachukwu</h3>
                  <p className="text-sm text-gray-600 mb-3">Director of Quality & Regulatory Affairs - Africa</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-[#0033A0]">Experience at national medicines regulatory authorities and WHO pre-qualification programs.</strong> Ensures compliance with African regulatory requirements and maintains quality standards across all pharmaceutical product categories.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-2xl">AO</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0033A0] mb-1">Dr. Amara Okonkwo</h3>
                  <p className="text-sm text-gray-600 mb-3">Africa Regional Director</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-[#0033A0]">Former senior advisor to multiple African Ministries of Health.</strong> Unparalleled regional expertise in pharmaceutical procurement, national medicines policies, and public sector market access strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-2xl">MA</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0033A0] mb-1">Michael Anderson</h3>
                  <p className="text-sm text-gray-600 mb-3">Supply Chain Director</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-[#0033A0]">Two decades managing pharmaceutical distribution across Africa.</strong> Proven expertise in cold chain logistics, WHO GDP compliance, and building distribution networks in challenging operating environments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
              Our team has successfully supported international pharmaceutical manufacturers in entering and growing across African markets. We combine regulatory expertise, commercial acumen, and deep African market knowledge to deliver successful market access partnerships.
            </p>
            <Link href="/about/management">
              <Button variant="outline" className="border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0] hover:text-white">
                View Full Leadership Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Regulatory Authority Partnerships */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-[#0033A0] mb-3 text-3xl md:text-4xl">Regulatory Authority Partnerships</h2>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Established relationships with national medicines regulatory authorities across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-l-4 border-[#0033A0]">
              <h4 className="text-[#0033A0] mb-2">East Africa</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Kenya - Pharmacy & Poisons Board (PPB)</li>
                <li>Uganda - National Drug Authority (NDA)</li>
                <li>Tanzania - Tanzania Medicines & Medical Devices Authority (TMDA)</li>
                <li>Rwanda - Rwanda Food & Drugs Authority (Rwanda FDA)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-l-4 border-[#0033A0]">
              <h4 className="text-[#0033A0] mb-2">West Africa</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Ghana - Food & Drugs Authority (FDA)</li>
                <li>Nigeria - National Agency for Food & Drug Administration & Control (NAFDAC)</li>
                <li>Senegal - Direction de la Pharmacie et du Médicament (DPM)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-l-4 border-[#0033A0]">
              <h4 className="text-[#0033A0] mb-2">Southern & Central Africa</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Zambia - Zambia Medicines Regulatory Authority (ZAMRA)</li>
                <li>Zimbabwe - Medicines Control Authority of Zimbabwe (MCAZ)</li>
                <li>Malawi - Pharmacy, Medicines & Poisons Board (PMPB)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0033A0]/5 to-[#00A0DC]/5 rounded-lg p-6 border border-[#0033A0]/20">
            <p className="text-center text-gray-700 leading-relaxed">
              <strong className="text-[#0033A0]">Regional Harmonization Expertise:</strong> We actively participate in African Medicines Agency (AMA) initiatives and regional harmonization programs including the East African Community Medicines Regulatory Harmonization (EAC-MRH) and ECOWAS regional regulatory frameworks, enabling faster multi-country registrations for our partners.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Advisory Section - Health System Financing */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-3xl md:text-4xl">HEALTH SYSTEM FINANCING ADVISORY</h2>
            <p className="text-xl mb-8 opacity-95">
              Beyond Market Entry: Strategic Health Financing Partnership
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg leading-relaxed text-center mb-8 opacity-90">
              Our Market Access Services include strategic advisory on health system financing, universal health coverage, and sustainable financing mechanisms. We don't just help you enter markets—we help governments and health systems design financing strategies that ensure long-term access to quality medicines and technologies.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-center mb-8">Our Strategic Advisory Services:</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="mb-3">Universal Health Coverage Roadmaps</h4>
              <p className="text-sm leading-relaxed opacity-90">
                Work with Ministries of Health to design UHC implementation strategies, including essential medicines lists, benefit package design, and financing mechanisms.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="mb-3">National Health Insurance Design</h4>
              <p className="text-sm leading-relaxed opacity-90">
                Provide technical advisory on health insurance scheme design, premium structures, provider payment mechanisms, and pharmaceutical benefit management.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="mb-3">Public-Private Partnership Structuring</h4>
              <p className="text-sm leading-relaxed opacity-90">
                Help structure PPP arrangements for pharmaceutical procurement, distribution, and service delivery that balance public health goals with private sector efficiency.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="mb-3">Health Budget Optimization</h4>
              <p className="text-sm leading-relaxed opacity-90">
                Advise on optimizing government health budgets, improving procurement efficiency, and transitioning from donor dependency to domestic financing.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="mb-3">Pharmaceutical Financing Mechanisms</h4>
              <p className="text-sm leading-relaxed opacity-90">
                Design innovative financing approaches including revolving funds, pooled procurement, and results-based financing for pharmaceutical access.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center">
              <p className="text-sm leading-relaxed opacity-90 italic text-center">
                Our health economists and former insurance executives understand African financing realities and can design sustainable mechanisms that expand access while ensuring financial sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* African Market Entry Guide Download */}
      <section id="market-guide-download" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="mb-4 text-3xl md:text-4xl">Download: African Market Entry Guide for Pharmaceutical Manufacturers</h2>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              Comprehensive 45-page guide covering regulatory pathways, market dynamics, partnership models, and success strategies for entering African pharmaceutical markets
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="mb-2">Market Analysis</h4>
                <p className="text-sm opacity-90">
                  Country-by-country market profiles, regulatory requirements, and market entry timelines across 15+ African countries
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="mb-2">Partnership Models</h4>
                <p className="text-sm opacity-90">
                  Detailed comparison of distribution, sales representation, and market access partnership structures with case examples
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="mb-2">Success Strategies</h4>
                <p className="text-sm opacity-90">
                  Proven approaches from international manufacturers who have successfully entered and grown in African markets
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
                Download Free Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Consultation
              </Button>
            </div>

            <p className="mt-6 text-sm opacity-75">
              No registration required. Instant PDF download.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black">Frequently Asked Questions</h2>
            <p className="text-lg text-black">
              Common questions about our market access partnership program
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">What's the difference between your Regulatory Services and Market Access Services?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Regulatory Services focuses exclusively on product registration and regulatory compliance for manufacturers who manage their own sales and distribution. Market Access Services provides comprehensive market entry including sales, distribution, regulatory support, and market development for manufacturers seeking a full-service African market partner.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">What types of products do you support?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  We support pharmaceutical products, medical devices, diagnostics, and healthcare consumables. We work with both branded and generic manufacturers across therapeutic areas including infectious diseases, NCDs, maternal health, and essential medicines.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">What is your revenue model?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  We offer flexible partnership models including commission-based sales representation, exclusive distribution agreements, and hybrid models combining service fees with performance incentives. Specific terms are customized based on product category, market potential, and partnership scope.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">How long does market entry take?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Market entry timelines vary by product and target markets. Product registration typically takes 6-18 months, while commercial infrastructure can be established in parallel. We provide detailed timelines during initial assessment based on your specific situation.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">Do you require exclusive distribution rights?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  We offer both exclusive and non-exclusive partnership models. Exclusive partnerships provide dedicated resources and deeper market development, while non-exclusive models offer flexibility. We recommend the model that best aligns with your market strategy.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">How do you ensure product quality and regulatory compliance?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  We maintain the same triple-verification quality assurance system and regulatory compliance standards for all products, whether procured by us or supplied by manufacturing partners. This ensures consistent quality and compliance across our entire product portfolio.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section - Get Started */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] to-[#0052CC] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1758519289152-d64650d13c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGNvbnN1bHRhdGlvbnxlbnwxfHx8fDE3NjMzMjY5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Market Access consultation - Pacem Health partnership experts"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl mb-6">Ready to Enter African Healthcare Markets?</h2>
              <p className="text-xl mb-8 text-white/90">
                Whether you're a pharmaceutical manufacturer, medical device company, or healthcare innovator—schedule a free consultation with our market access experts to develop your African market entry strategy.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-[#0033A0] hover:bg-gray-100 mb-8">
                Schedule Market Access Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="text-white/80">
                <p>partnerships@pacemhealth.com</p>
                <p className="mt-2">Regional Hubs: Nairobi, Kenya | Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
