import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Package, TrendingUp, Thermometer, MapPin, Shield, BarChart3, Boxes, FileText, Truck, Warehouse, ClipboardCheck, Radio, Activity } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';
import { SEOHead } from '../../../components/SEOHead';
import heroImage from 'figma:asset/7fcc85dd9662d9a32ef7f5b9187b2b86a7a0f1da.png';
import ctaImage from 'figma:asset/64d0d7fe763efa7daa20edf3dc3d3dc73239d490.png';

export default function SupplyChainLogisticsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Supply Chain & Logistics",
    "description": "End-to-end pharmaceutical and medical supply chain management for Africa. Temperature-controlled distribution, inventory management, and last-mile delivery solutions.",
    "provider": {"@type": "Organization", "name": "Pacem Health Inc."},
    "areaServed": {"@type": "Place", "name": "Africa"},
    "serviceType": "Healthcare Logistics"
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Supply Chain & Logistics | Pharmaceutical Distribution Africa | Pacem Health"
        description="Comprehensive supply chain and logistics solutions for African healthcare. Temperature-controlled cold chain, inventory management, last-mile delivery, warehousing, and real-time tracking. Ensure reliable pharmaceutical and medical equipment distribution."
        keywords={[
          'pharmaceutical supply chain Africa',
          'medical logistics Africa',
          'cold chain distribution',
          'healthcare supply chain',
          'pharmaceutical distribution',
          'medical equipment logistics',
          'last-mile delivery healthcare',
          'supply chain management Africa'
        ]}
        structuredData={serviceSchema}
      />
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative bg-gray-900 text-white overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Healthcare professional managing medical supply warehouse - Supply chain and logistics operations"
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
                Supply Chain & Logistics
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Building Resilient Health Systems Through Reliable Delivery
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-[#0033A0] hover:bg-gray-100">
                Request Supply Chain Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach: End-to-End Supply Chain Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">End-to-End Supply Chain Solutions</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-black">Building Resilient Health Systems Through Reliable Delivery</p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-black leading-relaxed text-center">
              Across Africa's healthcare landscape—from government hospitals to private clinics, from pharmaceutical distributors to NGO programs—supply chain fragility represents a critical barrier to quality care. Stock-outs, cold chain failures, and unreliable logistics undermine healthcare delivery and competitive positioning, while providers spend valuable time managing supply issues rather than serving patients.
            </p>
            
            <p className="text-lg text-black leading-relaxed text-center">
              Pacem Health views supply chain management as a <span className="font-semibold">strategic enabler</span> that strengthens both public health systems and private healthcare enterprises. Our integrated logistics platform combines regional distribution hubs, cold chain expertise, real-time tracking, and last-mile delivery to ensure reliable product availability. We don't just move products—we build resilient infrastructure that enables public sector partners to strengthen health systems and private sector clients to gain competitive advantage.
            </p>
            
            <p className="text-lg text-black leading-relaxed text-center">
              Pacem Health delivers <span className="font-semibold">resilient healthcare supply chains for all market segments.</span> Our regional hubs in Kenya and Ghana enable rapid, reliable delivery across the continent, while our 99.8% cold chain compliance ensures product integrity from manufacturer to patient—whether you're a government ministry, private hospital chain, pharmaceutical company, or development partner.
            </p>
          </div>
        </div>
      </section>

      {/* Supply Chain Services Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">Supply Chain Services Overview</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-black max-w-3xl mx-auto">
              End-to-end supply chain solutions designed to strengthen healthcare delivery across Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Demand Forecasting */}
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <Activity className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-black mb-2">Demand Forecasting</h4>
              <p className="text-xs text-black leading-relaxed">Predictive analytics & resilience planning</p>
            </div>

            {/* Strategic Warehousing */}
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <Warehouse className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-black mb-2">Strategic Warehousing</h4>
              <p className="text-xs text-black leading-relaxed">GDP-compliant regional hubs</p>
            </div>

            {/* Cold Chain */}
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <Thermometer className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-black mb-2">Cold Chain</h4>
              <p className="text-xs text-black leading-relaxed">99.8% compliance rate</p>
            </div>

            {/* Last-Mile Delivery */}
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-black mb-2">Last-Mile Delivery</h4>
              <p className="text-xs text-black leading-relaxed">Remote & urban distribution</p>
            </div>

            {/* Customs & Documentation */}
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <ClipboardCheck className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-black mb-2">Customs & Documentation</h4>
              <p className="text-xs text-black leading-relaxed">Expert clearance handling</p>
            </div>

            {/* Real-Time Tracking */}
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <Radio className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-black mb-2">Real-Time Tracking</h4>
              <p className="text-xs text-black leading-relaxed">Full shipment visibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">Who We Serve</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-black max-w-3xl mx-auto">
              From government ministries to private enterprises—comprehensive supply chain solutions for every healthcare stakeholder
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Public Sector & Development Partners */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <div className="mb-6 text-center">
                <h3 className="text-xl text-black">Public Sector & Development Partners</h3>
              </div>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Ministries of Health - National programs & immunization campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Development Banks - AfDB, World Bank, IFC-funded projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>NGOs & International Organizations - HIV/AIDS, TB, malaria programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Public Teaching & Referral Hospitals</span>
                </li>
              </ul>
            </div>

            {/* Private Sector & Commercial Clients */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <div className="mb-6 text-center">
                <h3 className="text-xl text-black">Private Sector & Commercial Clients</h3>
              </div>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Private Hospital Chains & Clinics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Pharmaceutical & Medical Device Companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Corporate Health Programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Pharmaceutical Distributors & Wholesalers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 max-w-4xl mx-auto">
            <p className="text-center text-black leading-relaxed">
              <strong>One Integrated Service:</strong> Whether strengthening public health infrastructure or building competitive advantage in the private market, Pacem Health delivers supply chain excellence tailored to your sector's unique needs.
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
              Measurable excellence delivering reliable supply chain management from forecasting to last-mile delivery
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl mb-3 text-black">2</div>
              <div className="text-sm text-black leading-relaxed">Regional Distribution<br />Hubs</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">500+</div>
              <div className="text-sm text-black leading-relaxed">Essential Products<br />in Stock</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">99.8%</div>
              <div className="text-sm text-black leading-relaxed">Cold Chain<br />Compliance</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">24/7</div>
              <div className="text-sm text-black leading-relaxed">Real-Time Tracking<br />& Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">Four Pillars of Supply Chain Excellence</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-black max-w-3xl mx-auto">
              End-to-end supply chain management from forecasting through last-mile delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 1</div>
                <h3 className="text-2xl text-black">Demand Forecasting & Resilience Planning</h3>
              </div>
              <p className="text-black mb-6">
                We utilize a data-driven approach to forecasting that integrates historical consumption data, epidemiological trends, and market dynamics to predict demand with high accuracy—whether you're planning national immunization programs or managing inventory for a private hospital chain.
              </p>
              <div className="mb-3">
                <h4 className="text-black mb-3"><strong>Key Activities:</strong></h4>
              </div>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Predictive Analytics:</strong> Using machine learning to model future demand
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Buffer Stock Management:</strong> Strategically maintaining emergency inventory at regional hubs
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Supply Chain Resilience Audits:</strong> Identifying potential risks and developing contingency plans
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Stock-Out Prevention:</strong> Proactive inventory management to ensure continuous availability
                  </div>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 2</div>
                <h3 className="text-2xl text-black">Strategic Warehousing & Inventory Management</h3>
              </div>
              <p className="text-black mb-6">
                Our GDP-compliant warehouses in Nairobi, Kenya, and Accra, Ghana, act as the heart of our distribution network, enabling rapid delivery across East, West, and Central Africa—serving government programs, private hospitals, pharmaceutical distributors, and commercial healthcare enterprises.
              </p>
              <div className="mb-3">
                <h4 className="text-black mb-3"><strong>Key Features:</strong></h4>
              </div>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Regional Hubs:</strong> Strategic locations in Nairobi and Accra for rapid delivery
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Real-Time Inventory:</strong> WMS provides full visibility with FEFO picking
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>No Minimum Orders:</strong> Order precisely what you need—ideal for private clinics, small hospitals, and cost-conscious healthcare providers
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Rapid Order Processing:</strong> Fast order fulfillment from regional stock
                  </div>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 3</div>
                <h3 className="text-2xl text-black">Cold Chain & Quality-Assured Logistics</h3>
              </div>
              <p className="text-black mb-6">
                Maintaining the cold chain is non-negotiable. We have invested in robust, end-to-end cold chain infrastructure that guarantees product efficacy and safety with a 99.8% compliance rate.
              </p>
              <div className="mb-3">
                <h4 className="text-black mb-3"><strong>Our Cold Chain System:</strong></h4>
              </div>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Temperature-Controlled Storage:</strong> Dedicated 2-8°C cold rooms and freezer capacity
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Active & Passive Transport:</strong> Refrigerated vehicles and validated passive containers
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Continuous Monitoring:</strong> Temperature data loggers provide complete audit trail
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>GDP Compliance:</strong> All facilities meet Good Distribution Practice standards
                  </div>
                </li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 4</div>
                <h3 className="text-2xl text-black">Last-Mile Delivery & Customs Management</h3>
              </div>
              <p className="text-black mb-6">
                We specialize in navigating the final, most challenging leg of the journey. Our network of proven, vetted local transport partners ensures reliable delivery to even the most remote communities.
              </p>
              <div className="mb-3">
                <h4 className="text-black mb-3"><strong>Our Capabilities:</strong></h4>
              </div>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Optimized Routing:</strong> Leveraging local knowledge for fastest and safest routes
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Expert Customs Handling:</strong> Managing documentation and clearance to reduce delays
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Proof of Delivery:</strong> Real-time tracking and delivery confirmation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Remote Access:</strong> Reliable delivery to underserved and hard-to-reach facilities
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
            <h2 className="text-3xl md:text-4xl mb-4 text-black">Our 5-Step Supply Chain Process</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-black max-w-3xl mx-auto">
              A journey of reliability from consultation to confirmed delivery
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
                    <h3 className="text-xl text-black">Consultation & Planning</h3>
                  </div>
                </div>
              </div>
              <p className="text-black text-sm">
                We start by understanding your unique needs, challenges, and patient population to develop a customized supply chain strategy.
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
                    <h3 className="text-xl text-black">Forecasting & Order Management</h3>
                  </div>
                </div>
              </div>
              <p className="text-black text-sm">
                Our team develops a demand plan and manages procurement from quality-assured suppliers to ensure continuous availability.
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
                    <h3 className="text-xl text-black">Regional Hub Dispatch</h3>
                  </div>
                </div>
              </div>
              <p className="text-black text-sm">
                Your order is picked, packed, and dispatched from our Kenya or Ghana warehouse with efficient processing and full cold chain compliance.
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
                    <h3 className="text-xl text-black">In-Transit Management</h3>
                  </div>
                </div>
              </div>
              <p className="text-black text-sm">
                We manage customs, documentation, and in-transit logistics with real-time tracking to ensure smooth delivery across borders.
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
                    <h3 className="text-xl text-black">Last-Mile Delivery</h3>
                  </div>
                </div>
              </div>
              <p className="text-black text-sm">
                Our local partners complete delivery to your facility with final confirmation, ensuring products reach even the most remote locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution-Result Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black">Supply Chain Challenges We Solve</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Transforming critical supply chain vulnerabilities into competitive advantages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Challenge 1 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0033A0] flex items-center justify-center flex-shrink-0">
                  <Package className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl text-black">Product Availability</h3>
              </div>
              <p className="text-black text-sm mb-3">
                <strong>Challenge:</strong> Frequent stock-outs of essential medicines at health facilities across Africa affecting patient care.
              </p>
              <p className="text-black text-sm mb-3">
                <strong>Solution:</strong> Regional hub strategy with predictive forecasting, buffer stock management, and automated reordering.
              </p>
              <p className="text-black text-sm">
                <strong>Impact:</strong> 95%+ product availability with dramatically reduced delivery times via regional hubs.
              </p>
            </div>

            {/* Challenge 2 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0033A0] flex items-center justify-center flex-shrink-0">
                  <Thermometer className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl text-black">Cold Chain Integrity</h3>
              </div>
              <p className="text-black text-sm mb-3">
                <strong>Challenge:</strong> Cold chain failures causing 15-25% of vaccines to lose potency before reaching patients.
              </p>
              <p className="text-black text-sm mb-3">
                <strong>Solution:</strong> End-to-end cold chain with temperature-controlled storage, refrigerated transport, and continuous monitoring.
              </p>
              <p className="text-black text-sm">
                <strong>Impact:</strong> 99.8% cold chain compliance ensuring product efficacy and patient safety.
              </p>
            </div>

            {/* Challenge 3 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0033A0] flex items-center justify-center flex-shrink-0">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl text-black">Delivery Speed</h3>
              </div>
              <p className="text-black text-sm mb-3">
                <strong>Challenge:</strong> Long international shipping times (4-8 weeks) and customs delays preventing timely access to medicines.
              </p>
              <p className="text-black text-sm mb-3">
                <strong>Solution:</strong> Strategic regional warehousing in Kenya and Ghana with expert customs handling and last-mile delivery.
              </p>
              <p className="text-black text-sm">
                <strong>Impact:</strong> Rapid, reliable delivery from regional hubs including remote and hard-to-reach locations.
              </p>
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
              Common questions about our supply chain and logistics services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">How does Pacem Health improve supply chain resilience?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Our strategy is built on three foundations: <strong>regional stocking</strong> of essential medicines to shorten lead times, maintaining <strong>emergency and buffer inventory</strong> to absorb supply shocks, and <strong>proactive risk management</strong> to create contingency plans for potential disruptions.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">What are your delivery timelines from the regional hubs?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Our regional hubs in Kenya and Ghana significantly reduce delivery timelines compared to direct international shipments. <strong>Delivery times vary based on destination and customs requirements</strong>, but our regional stocking model eliminates the 4-8 weeks typical for international shipments. Contact us for specific timeline estimates based on your location and needs.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq3" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">Do you have a minimum order quantity (MOQ)?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  No. We believe every healthcare provider deserves access to quality products. By consolidating demand at our hubs, we eliminate MOQs, allowing you to order exactly what you need.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq4" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">How do you guarantee the integrity of cold chain products?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Our 99.8% compliant cold chain is maintained through a combination of temperature-controlled warehousing, refrigerated vehicles, validated passive shipping containers, and continuous temperature monitoring from dispatch to delivery.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq5" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">Can you deliver to remote and hard-to-reach locations?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Yes. We specialize in last-mile delivery through our network of vetted local transport partners who have expertise in reaching even the most remote and underserved communities across Africa.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq6" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">How do you handle customs clearance and documentation?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Our team and partners have extensive experience managing all customs documentation and clearance procedures across Africa, reducing typical delays from weeks to days and ensuring smooth cross-border movement of healthcare products.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq7" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">Do you work with private hospitals and pharmaceutical companies?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Absolutely. We serve <strong>both public and private sectors</strong> across Africa. Our clients include private hospital chains, pharmaceutical distributors, medical device companies, corporate wellness programs, and private clinics—alongside government ministries, NGOs, and development partners. Our no-minimum-order policy and competitive pricing make us ideal for private sector healthcare providers of all sizes.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq8" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">How can your supply chain services give my private hospital a competitive advantage?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Our services deliver <strong>competitive differentiation</strong> through: (1) Reliable product availability—no stock-outs means uninterrupted patient care, (2) Improved margins through efficient procurement and reduced inventory carrying costs, (3) Faster time-to-market for new services requiring specialized products, (4) Enhanced reputation through consistent quality and availability, and (5) Working capital optimization by ordering smaller quantities more frequently without MOQ penalties.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq9" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">Can pharmaceutical companies use your distribution network to expand market access?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Yes. We help pharmaceutical and medical device companies <strong>accelerate market entry and expansion</strong> across Africa through our established regional hubs, regulatory expertise, distribution networks, and last-mile delivery capabilities. We handle everything from customs clearance to facility-level delivery, allowing manufacturers to focus on product development and marketing while we manage the complex logistics of African healthcare distribution.
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
                src={ctaImage}
                alt="Healthcare supply chain professional - Pacem Health logistics experts"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl mb-6">Ready to Strengthen Your Supply Chain?</h2>
              <p className="text-xl mb-8 text-white/90">
                Whether you're a government ministry, private hospital, pharmaceutical company, or development partner—schedule a free consultation with our logistics experts to eliminate stock-outs and build competitive advantage.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-[#0033A0] hover:bg-gray-100 mb-8">
                Schedule Supply Chain Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="text-white/80">
                <p>logistics@pacemhealth.com</p>
                <p className="mt-2">Regional Hubs: Nairobi, Kenya | Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}