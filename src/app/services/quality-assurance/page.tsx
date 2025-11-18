import { useState } from 'react';
import { CheckCircle, ArrowRight, Shield, Factory, FileCheck, Microscope, Truck, Search, Award, ClipboardCheck, AlertCircle, FlaskConical, Package, FileText, Building2, Beaker } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';
import { SEOHead } from '../../../components/SEOHead';
import heroImage from 'figma:asset/1f9979531513ed17842079fd7a142f7ac8d597bd.png';
import biovacNewsImage from 'figma:asset/1cb2dfecd7d0bc5a432486623938c7274cb73e49.png';
import isoBadge from 'figma:asset/741dd7a6a88cc5f3d134116c5ecad077373e84a7.png';
import emaBadge from 'figma:asset/fb988bd8dd8cbeab0e3e4f2692216cc233b639c5.png';
import whoBadge from 'figma:asset/6c1c3a8f4ce7b4eb25ab5b2a3a230a1a70575e07.png';
import fdaBadge from 'figma:asset/6e7c9ed71e74d6658144a655cdaa700404b1d54c.png';

export default function QualityAssurancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Quality Assurance & Testing",
    "description": "Comprehensive pharmaceutical quality control, testing, and assurance services. ISO-certified laboratories, WHO prequalification support, and product authentication for African healthcare markets.",
    "provider": {"@type": "Organization", "name": "Pacem Health Inc."},
    "areaServed": {"@type": "Place", "name": "Africa"},
    "serviceType": "Quality Assurance"
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Quality Assurance & Testing | Pharmaceutical QC Laboratory Africa | Pacem Health"
        description="ISO-certified pharmaceutical quality control and testing services for Africa. Product testing, batch release, stability studies, WHO prequalification support, and anti-counterfeiting verification. Ensure pharmaceutical quality and patient safety."
        keywords={[
          'pharmaceutical quality control Africa',
          'ISO laboratory testing',
          'pharmaceutical QA services',
          'WHO prequalification testing',
          'product authentication',
          'pharmaceutical testing Africa',
          'quality assurance healthcare',
          'batch release testing'
        ]}
        structuredData={serviceSchema}
      />
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative bg-[#0033A0] text-white overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Quality assurance scientist using microscope for pharmaceutical testing and verification"
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
                  <pattern id="diagonal-lines-qa" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.5"/>
                    <line x1="0" y1="50" x2="50" y2="100" stroke="white" strokeWidth="0.5"/>
                    <line x1="50" y1="0" x2="100" y2="50" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonal-lines-qa)"/>
              </svg>
            </div>

            {/* Text Content */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Quality Assurance
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-[#00A0DC]">
                Triple-Verified Quality. Every Product. Every Time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#00A0DC] hover:bg-[#0088BD] text-white">
                  Request Quality Information
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                  Download Quality Overview
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Pharmaceutical Quality */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Our Commitment to Pharmaceutical Quality</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto"></div>
          </div>

          <div className="mb-12 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Quality assurance has been central to Pacem Health's mission since our founding. We understand that substandard or counterfeit medicines don't just waste resources—they cost lives, erode trust in healthcare systems, and undermine Africa's health progress.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Pacem Health provides <span className="text-[#0033A0]">triple-verified quality assurance</span>: verified international suppliers, independent laboratory testing, and complete regulatory documentation. Our quality assurance system is based on supplier prequalification, product verification, independent testing, documentation review, regulatory compliance, and ongoing monitoring.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Our Quality Affairs team continuously audits and monitors suppliers to ensure we provide the products and services our customers trust, maintaining ongoing verification processes to guarantee consistent quality across every shipment.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0033A0] to-[#0052CC] p-10 rounded-lg text-white">
            <h3 className="text-2xl mb-8 text-center">Triple-Verified Quality System</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="mb-1">Supplier Prequalification</div>
                  <div className="text-sm text-white/90">WHO-prequalified or SRA-approved manufacturers only</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="mb-1">Product Verification</div>
                  <div className="text-sm text-white/90">Individual product qualification and batch inspection</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="mb-1">Independent Laboratory Testing</div>
                  <div className="text-sm text-white/90">ISO 17025 accredited laboratory verification</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="mb-1">Documentation Review</div>
                  <div className="text-sm text-white/90">Complete regulatory and quality certificates</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="mb-1">Regulatory Compliance</div>
                  <div className="text-sm text-white/90">Full compliance with destination country requirements</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="mb-1">Ongoing Monitoring</div>
                  <div className="text-sm text-white/90">Post-distribution surveillance and pharmacovigilance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Across All Sectors */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Trusted Across All Sectors</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our quality assurance processes serve both public and private sector clients with the same rigorous standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Public Sector */}
            <div className="bg-white rounded-xl shadow-md border-2 border-gray-200 hover:border-[#0033A0] transition-all p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-[#0033A0]">Public Sector</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Ministries of Health</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>UN Agencies (WHO, UNICEF, UNFPA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Donor Organizations (USAID, GAVI, Global Fund)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Development Banks (AfDB, World Bank)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>National Regulatory Authorities</span>
                </li>
              </ul>
            </div>

            {/* Private Sector */}
            <div className="bg-white rounded-xl shadow-md border-2 border-gray-200 hover:border-[#00A0DC] transition-all p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#00A0DC] rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-[#00A0DC]">Private Sector</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Hospital Groups & Health Systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Private Pharmacies & Distributors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Corporate Health Programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Insurance Providers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>NGO Health Partners</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              Every client receives the same triple-verified quality assurance, regardless of sector or order size
            </p>
          </div>
        </div>
      </section>

      {/* Operations at a Glance - Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Quality Operations at a Glance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measurable quality standards ensuring pharmaceutical excellence across every verification step
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">100%</div>
              <div className="text-sm text-gray-600 leading-relaxed">WHO-Prequalified or<br />SRA-Approved Suppliers</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">3</div>
              <div className="text-sm text-gray-600 leading-relaxed">Layers of Independent<br />Quality Verification</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">ISO 17025</div>
              <div className="text-sm text-gray-600 leading-relaxed">Accredited Laboratory<br />Testing Partners</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">&lt;24h</div>
              <div className="text-sm text-gray-600 leading-relaxed">Quality Issue<br />Investigation Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Steps Process Flow */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#0033A0]">Six Steps of Quality Verification</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From supplier selection to post-distribution monitoring, every step ensures pharmaceutical excellence
            </p>
          </div>

          {/* Visual Process Flow */}
          <div className="mb-20">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#0033A0] h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xl">1</div>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#0033A0]/10 rounded-full flex items-center justify-center">
                      <Factory className="h-8 w-8 text-[#0033A0]" />
                    </div>
                  </div>
                  <h3 className="text-xl text-center mb-2 text-[#0033A0]">Supplier Prequalification</h3>
                  <p className="text-center text-gray-600 text-sm">WHO-prequalified manufacturers only</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#0033A0] h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xl">2</div>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#0033A0]/10 rounded-full flex items-center justify-center">
                      <Award className="h-8 w-8 text-[#0033A0]" />
                    </div>
                  </div>
                  <h3 className="text-xl text-center mb-2 text-[#0033A0]">Product Prequalification</h3>
                  <p className="text-center text-gray-600 text-sm">Individual product quality verification</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#0033A0] h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xl">3</div>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#0033A0]/10 rounded-full flex items-center justify-center">
                      <Package className="h-8 w-8 text-[#0033A0]" />
                    </div>
                  </div>
                  <h3 className="text-xl text-center mb-2 text-[#0033A0]">Batch Verification</h3>
                  <p className="text-center text-gray-600 text-sm">Receiving inspection at hubs</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 6 */}
              <div className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#0033A0] h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xl">6</div>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#0033A0]/10 rounded-full flex items-center justify-center">
                      <Search className="h-8 w-8 text-[#0033A0]" />
                    </div>
                  </div>
                  <h3 className="text-xl text-center mb-2 text-[#0033A0]">Post-Release Monitoring</h3>
                  <p className="text-center text-gray-600 text-sm">Continuous quality assurance</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#0033A0] h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xl">5</div>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#0033A0]/10 rounded-full flex items-center justify-center">
                      <Truck className="h-8 w-8 text-[#0033A0]" />
                    </div>
                  </div>
                  <h3 className="text-xl text-center mb-2 text-[#0033A0]">Distribution</h3>
                  <p className="text-center text-gray-600 text-sm">Quality-assured shipment</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#0033A0] h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xl">4</div>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-[#0033A0]/10 rounded-full flex items-center justify-center">
                      <FlaskConical className="h-8 w-8 text-[#0033A0]" />
                    </div>
                  </div>
                  <h3 className="text-xl text-center mb-2 text-[#0033A0]">Independent Laboratory Testing</h3>
                  <p className="text-center text-gray-600 text-sm">ISO 17025 accredited labs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Steps Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="step1" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 text-left">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0033A0] text-white rounded-full flex items-center justify-center">
                    <Factory className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl text-[#0033A0]">Step 1: Supplier Prequalification</div>
                    <div className="text-sm text-gray-600">Only the World's Most Trusted Manufacturers</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Before we source from any manufacturer, we conduct rigorous prequalification to ensure they meet the highest international standards.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="text-lg mb-4 text-[#0033A0]">Our Requirements:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">WHO Prequalification Status:</span> Manufacturer must be WHO-prequalified or have equivalent approval
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">GMP Certification:</span> Current Good Manufacturing Practice certification from recognized authority
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">FDA/EMA Approval:</span> Products approved by US FDA, European EMA, or Stringent Regulatory Authority
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Site Audits:</span> Review of manufacturing site audits by WHO PQ teams or SRAs
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Track Record:</span> Demonstrated history of quality and reliability
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0033A0]/5 border-l-4 border-[#0033A0] p-4 rounded">
                  <p className="text-[#0033A0]"><strong>Result:</strong> Only the world's most trusted pharmaceutical manufacturers qualify as Pacem suppliers.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step2" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 text-left">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0033A0] text-white rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl text-[#0033A0]">Step 2: Product Prequalification</div>
                    <div className="text-sm text-gray-600">Every Product Pre-Approved for Quality</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Each product undergoes individual qualification before we add it to our catalog, ensuring it meets international quality and regulatory standards.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="text-lg mb-4 text-[#0033A0]">Our Verification:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Regulatory Approval:</span> Product must be WHO-prequalified, SRA-approved, or meet equivalent standards
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Quality Dossier Review:</span> Complete product dossier including formulation, stability, and testing data
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Specification Verification:</span> Confirm product meets International Pharmacopoeia or equivalent standards
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Packaging & Labeling:</span> Verify packaging meets WHO and destination country requirements
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Shelf Life & Storage:</span> Confirm appropriate shelf life and storage conditions for African climate
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0033A0]/5 border-l-4 border-[#0033A0] p-4 rounded">
                  <p className="text-[#0033A0]"><strong>Result:</strong> Every product in our catalog has been pre-approved for quality and regulatory compliance.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step3" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 text-left">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0033A0] text-white rounded-full flex items-center justify-center">
                    <Package className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl text-[#0033A0]">Step 3: Batch Verification</div>
                    <div className="text-sm text-gray-600">Receiving Inspection at Regional Hubs</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  When products arrive at our regional hubs in Kenya and Ghana, we conduct comprehensive receiving inspection before acceptance.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="text-lg mb-4 text-[#0033A0]">Our Inspection:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Visual Inspection:</span> Check packaging integrity, labeling accuracy, and physical condition
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Batch Number Verification:</span> Confirm batch numbers match supplier documentation
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Expiry Date Check:</span> Verify minimum 12-18 months shelf life remaining
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Temperature Monitoring:</span> Review cold chain data for temperature-sensitive products
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Documentation Review:</span> Verify Certificate of Analysis, quality certificates, and regulatory approvals
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0033A0]/5 border-l-4 border-[#0033A0] p-4 rounded">
                  <p className="text-[#0033A0]"><strong>Result:</strong> Only products that pass receiving inspection proceed to the next step.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step4" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 text-left">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00A0DC] text-white rounded-full flex items-center justify-center">
                    <FlaskConical className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl text-[#00A0DC]">Step 4: Independent Laboratory Testing</div>
                    <div className="text-sm text-gray-600">Third-Party Verification by ISO-Accredited Labs</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We conduct random spot testing through ISO 17025 accredited laboratories to provide independent verification of product quality.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg mb-4 text-[#0033A0]">Testing Partners:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Building2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-[#0033A0]">Ghana Food & Drugs Authority Laboratory</div>
                          <div className="text-sm text-gray-600">ISO 17025 accredited (Accra)</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Building2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-[#0033A0]">Kenya Bureau of Standards</div>
                          <div className="text-sm text-gray-600">ISO 17025 accredited (Nairobi)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg mb-4 text-[#0033A0]">Tests Performed:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Beaker className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div><span className="text-[#0033A0]">Identity Testing:</span> Confirm API identity</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Beaker className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div><span className="text-[#0033A0]">Potency/Assay:</span> Verify API content</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Beaker className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div><span className="text-[#0033A0]">Purity Testing:</span> Check for impurities</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Beaker className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div><span className="text-[#0033A0]">Dissolution:</span> Verify drug release profile</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    <strong className="text-[#0033A0]">Standards Applied:</strong> WHO International Pharmacopoeia, US Pharmacopeia (USP), European Pharmacopoeia (Ph. Eur.), British Pharmacopoeia (BP)
                  </p>
                </div>
                <div className="bg-[#00A0DC]/5 border-l-4 border-[#00A0DC] p-4 rounded">
                  <p className="text-[#00A0DC]"><strong>Result:</strong> Independent verification that products meet international quality standards.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step5" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 text-left">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00A0DC] text-white rounded-full flex items-center justify-center">
                    <Truck className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl text-[#00A0DC]">Step 5: Distribution</div>
                    <div className="text-sm text-gray-600">Quality-Assured Products with Complete Documentation</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Products that pass all verification steps are released for distribution with comprehensive quality documentation.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg mb-4 text-[#0033A0]">Our Commitment:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div>Quality-Assured Products shipped to customers</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div>Complete Documentation with every shipment</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div>Cold Chain Compliance for sensitive products</div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div>Complete chain of custody traceability</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg mb-4 text-[#0033A0]">Documentation Provided:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div>Supplier Quality Certificate</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div>Laboratory Test Results</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div>Pacem Excellence Quality Certificate</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div>Certificate of Analysis</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div>Regulatory Approvals (WHO PQ, FDA)</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <FileText className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                        <div>Bill of Lading / Shipping Documents</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#00A0DC]/5 border-l-4 border-[#00A0DC] p-4 rounded">
                  <p className="text-[#00A0DC]"><strong>Result:</strong> Customers receive quality-assured products with complete documentation for regulatory compliance and LC processing.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step6" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 text-left">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#00A0DC] text-white rounded-full flex items-center justify-center">
                    <Search className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-xl text-[#00A0DC]">Step 6: Post-Release Monitoring & Evaluation</div>
                    <div className="text-sm text-gray-600">Continuous Quality Assurance</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our quality assurance doesn't end at delivery. We maintain ongoing monitoring to ensure continued product quality and safety.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h4 className="text-lg mb-4 text-[#0033A0]">Our Monitoring:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Customer Feedback:</span> Monitor customer reports of product quality or performance issues
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Pharmacovigilance:</span> Track adverse events and product complaints
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Supplier Performance:</span> Ongoing evaluation of supplier quality and reliability
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Market Surveillance:</span> Monitor WHO alerts, regulatory recalls, and quality warnings
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#0033A0]">Continuous Improvement:</span> Update processes based on findings and best practices
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#00A0DC]/5 border-l-4 border-[#00A0DC] p-4 rounded">
                  <p className="text-[#00A0DC]"><strong>Commitment:</strong> If any quality issue is identified, we investigate within 24 hours and take corrective action immediately.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Certifications & Quality Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#0033A0]">Certifications & Quality Standards</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              International quality standards and accredited testing partners ensuring pharmaceutical excellence
            </p>
          </div>

          {/* International Quality Standards - Full Width */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl mb-2 text-[#0033A0]">International Quality Standards</h3>
              <div className="w-20 h-1 bg-[#00A0DC] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#0033A0] text-white rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg mb-2 text-[#0033A0]">WHO Good Distribution Practices (GDP)</h4>
                  <p className="text-gray-600 text-sm">Guidelines for proper distribution of pharmaceutical products</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#0033A0] text-white rounded-full flex items-center justify-center mb-4">
                    <Microscope className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg mb-2 text-[#0033A0]">ISO 17025 Accredited Testing</h4>
                  <p className="text-gray-600 text-sm">Independent laboratory testing by internationally-accredited facilities</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#0033A0] text-white rounded-full flex items-center justify-center mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg mb-2 text-[#0033A0]">WHO Prequalification Program</h4>
                  <p className="text-gray-600 text-sm">Products from WHO-prequalified manufacturers meeting stringent quality standards</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#0033A0] text-white rounded-full flex items-center justify-center mb-4">
                    <ClipboardCheck className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg mb-2 text-[#0033A0]">Stringent Regulatory Authority (SRA) Approval</h4>
                  <p className="text-gray-600 text-sm">Products approved by US FDA, European EMA, or equivalent authorities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Quality Partners */}
            <div>
              <h3 className="text-2xl mb-6 text-[#0033A0]">Quality Partners</h3>
              
              <div className="mb-8">
                <h4 className="text-lg mb-4 text-gray-700">Supplier Partners:</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Factory className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-[#0033A0] mb-1">WHO-Prequalified Manufacturers</div>
                        <p className="text-sm text-gray-600">Global network meeting WHO standards with regular audits and inspections</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-[#0033A0] mb-1">FDA/EMA-Approved Suppliers</div>
                        <p className="text-sm text-gray-600">Products approved by US FDA or European Medicines Agency</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-[#0033A0] mb-1">ISO-Certified Pharmaceutical Suppliers</div>
                        <p className="text-sm text-gray-600">ISO 9001 quality management systems and comprehensive product range</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg mb-4 text-gray-700">Testing Partners:</h4>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-[#00A0DC]/10 to-transparent p-4 rounded-lg border-l-4 border-[#00A0DC]">
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-[#0033A0] mb-1">Ghana Food & Drugs Authority Laboratory</div>
                        <p className="text-sm text-gray-600">ISO 17025 accredited • Full pharmaceutical testing capabilities</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#00A0DC]/10 to-transparent p-4 rounded-lg border-l-4 border-[#00A0DC]">
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-[#0033A0] mb-1">Kenya Bureau of Standards (KEBS)</div>
                        <p className="text-sm text-gray-600">ISO 17025 accredited • National standards body</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Certifications & News */}
            <div className="space-y-8">
              {/* Quality Certifications & Accreditations */}
              <div>
                <h3 className="text-2xl mb-6 text-[#0033A0]">Quality Certifications & Accreditations</h3>
                <div className="bg-white rounded-xl shadow-lg border-2 border-[#0033A0]/20 p-6">
                  <p className="text-sm text-gray-600 mb-6 text-center">
                    Our quality systems are verified and accredited by leading global regulatory authorities
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {/* WHO Badge */}
                    <div className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0033A0] hover:shadow-md transition-all">
                      <img 
                        src={whoBadge} 
                        alt="WHO Prequalified" 
                        className="w-full h-auto max-h-20 object-contain"
                      />
                    </div>

                    {/* FDA Badge */}
                    <div className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0033A0] hover:shadow-md transition-all">
                      <img 
                        src={fdaBadge} 
                        alt="US FDA Approved" 
                        className="w-full h-auto max-h-20 object-contain"
                      />
                    </div>

                    {/* EMA Badge */}
                    <div className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0033A0] hover:shadow-md transition-all">
                      <img 
                        src={emaBadge} 
                        alt="EU EMA Approved" 
                        className="w-full h-auto max-h-20 object-contain"
                      />
                    </div>

                    {/* ISO Badge */}
                    <div className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0033A0] hover:shadow-md transition-all">
                      <img 
                        src={isoBadge} 
                        alt="ISO 17025 Accredited Laboratory" 
                        className="w-full h-auto max-h-20 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Latest in Pharmaceutical Quality */}
              <div>
                <h3 className="text-2xl mb-6 text-[#0033A0]">Latest in Pharmaceutical Quality</h3>
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={biovacNewsImage}
                      alt="WHO-prequalified pneumonia vaccine - healthcare professional preparing vaccination"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <span className="px-2 py-1 bg-[#00A0DC]/10 text-[#00A0DC] rounded">Industry News</span>
                      <span>•</span>
                      <span>June 2025</span>
                    </div>
                    <h4 className="text-lg mb-3 text-[#0033A0] leading-snug">
                      Biovac Sets Course To Deliver WHO-Prequalified Pneumonia Vaccine Across Africa In Coming Years
                    </h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      Major milestone in pharmaceutical quality assurance as African manufacturer achieves WHO prequalification for critical vaccine delivery across the continent.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Source: MyPressportal</span>
                      <a 
                        href="https://pressportal.co.za/stream/story/42b4f35e3b124e6e-20250626.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00A0DC] hover:text-[#0033A0] text-sm flex items-center gap-1 transition-colors"
                      >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Problem/Solution/Result */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#0033A0]">Key Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How our triple-verified quality assurance solves critical pharmaceutical quality challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <Card className="border-2 border-gray-200 hover:border-[#00A0DC] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0033A0] text-white rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl text-[#0033A0]">Complete Quality Confidence</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700">Challenge:</span>
                    </div>
                    <p className="text-gray-600 text-sm pl-7">
                      Healthcare providers need absolute confidence in pharmaceutical quality, but lack the resources and expertise to verify product quality themselves.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC]" />
                      <span className="text-[#0033A0]">Our Solution:</span>
                    </div>
                    <p className="text-gray-600 text-sm pl-7">
                      Triple-verified quality assurance combining supplier certification, independent laboratory testing, and complete regulatory documentation on every product.
                    </p>
                  </div>
                  <div className="bg-[#0033A0]/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ArrowRight className="h-5 w-5 text-[#0033A0]" />
                      <span className="text-[#0033A0]">Result:</span>
                    </div>
                    <p className="text-gray-700 text-sm pl-7">
                      Zero substandard products, complete confidence in product quality, protection of facility reputation, and improved patient safety outcomes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="border-2 border-gray-200 hover:border-[#00A0DC] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0033A0] text-white rounded-full flex items-center justify-center">
                    <FileCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl text-[#0033A0]">Regulatory Compliance</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700">Challenge:</span>
                    </div>
                    <p className="text-gray-600 text-sm pl-7">
                      Regulatory authorities require extensive quality documentation, and non-compliant products face rejection, delays, or seizure.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC]" />
                      <span className="text-[#0033A0]">Our Solution:</span>
                    </div>
                    <p className="text-gray-600 text-sm pl-7">
                      Pre-approved suppliers and products, complete regulatory documentation packages, and expert regulatory affairs support ensure full compliance.
                    </p>
                  </div>
                  <div className="bg-[#0033A0]/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ArrowRight className="h-5 w-5 text-[#0033A0]" />
                      <span className="text-[#0033A0]">Result:</span>
                    </div>
                    <p className="text-gray-700 text-sm pl-7">
                      Faster customs clearance, reduced risk of product seizure or rejection, simplified import compliance, and acceptance by regulatory authorities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="border-2 border-gray-200 hover:border-[#00A0DC] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0033A0] text-white rounded-full flex items-center justify-center">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl text-[#0033A0]">LC-Compliant Documentation</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700">Challenge:</span>
                    </div>
                    <p className="text-gray-600 text-sm pl-7">
                      Letter of Credit transactions require perfect documentation, and discrepancies cause payment delays and additional fees.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC]" />
                      <span className="text-[#0033A0]">Our Solution:</span>
                    </div>
                    <p className="text-gray-600 text-sm pl-7">
                      Complete, accurate documentation packages prepared by experts ensure zero-discrepancy LC processing and fast payment.
                    </p>
                  </div>
                  <div className="bg-[#0033A0]/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ArrowRight className="h-5 w-5 text-[#0033A0]" />
                      <span className="text-[#0033A0]">Result:</span>
                    </div>
                    <p className="text-gray-700 text-sm pl-7">
                      Clean LC presentation on first submission, faster payment processing, no amendment fees, and improved cash flow.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefit 4 */}
            <Card className="border-2 border-gray-200 hover:border-[#00A0DC] transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#0033A0] text-white rounded-full flex items-center justify-center">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl text-[#0033A0]">Ongoing Quality Assurance</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700">Challenge:</span>
                    </div>
                    <p className="text-gray-600 text-sm pl-7">
                      Quality assurance must continue after delivery, with monitoring for safety issues, recalls, and emerging quality concerns.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-[#00A0DC]" />
                      <span className="text-[#0033A0]">Our Solution:</span>
                    </div>
                    <p className="text-gray-600 text-sm pl-7">
                      Post-distribution monitoring, pharmacovigilance, supplier performance tracking, and market surveillance provide continuous quality assurance.
                    </p>
                  </div>
                  <div className="bg-[#0033A0]/5 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <ArrowRight className="h-5 w-5 text-[#0033A0]" />
                      <span className="text-[#0033A0]">Result:</span>
                    </div>
                    <p className="text-gray-700 text-sm pl-7">
                      Early detection of quality issues, rapid response to safety concerns, continuous supplier improvement, and long-term quality confidence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Documentation Package */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#0033A0]">Quality Documentation Package</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete documentation ensuring regulatory compliance and facilitating LC processing
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-2xl p-8 md:p-12 text-white mb-8">
            <h3 className="text-2xl mb-8 text-center">What You Receive with Every Shipment:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">1. Supplier Quality Certificate</h4>
                  <p className="text-sm text-white/90">
                    Certification from internationally-recognized supplier or manufacturer confirming product quality
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Microscope className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">2. Laboratory Test Results</h4>
                  <p className="text-sm text-white/90">
                    Independent testing results from ISO 17025 accredited laboratory (Ghana FDA or Kenya KEBS)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">3. Pacem Excellence Quality Certificate</h4>
                  <p className="text-sm text-white/90">
                    Our certification that product has passed all three verification steps
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <ClipboardCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">4. Certificate of Analysis</h4>
                  <p className="text-sm text-white/90">
                    Manufacturer's certificate confirming product specifications and testing results
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">5. Regulatory Approvals</h4>
                  <p className="text-sm text-white/90">
                    WHO Prequalification, FDA approval, or equivalent regulatory documentation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">6. Shipping Documentation</h4>
                  <p className="text-sm text-white/90">
                    Bill of Lading, packing list, and complete chain of custody documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#0033A0]">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about our quality assurance system
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 text-left">
                <span className="text-lg">How does Pacem Health ensure product quality?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  We use a triple-verification system: (1) We source only from WHO-prequalified manufacturers and internationally-recognized suppliers, (2) We conduct random spot testing through ISO 17025 accredited laboratories, and (3) We provide complete regulatory documentation with every shipment. This three-layer approach ensures the highest quality standards.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 text-left">
                <span className="text-lg">What testing do you conduct on products?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  We conduct random spot testing on products through ISO 17025 accredited laboratories (Ghana FDA and Kenya KEBS). Tests include identity testing, potency/assay, purity testing, and dissolution testing according to WHO International Pharmacopoeia, USP, European Pharmacopoeia, or British Pharmacopoeia standards.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq3" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 text-left">
                <span className="text-lg">Do you provide quality documentation?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  Yes. Every shipment includes a complete quality documentation package: Supplier Quality Certificate, Laboratory Test Results, Pacem Excellence Quality Certificate, Certificate of Analysis, Regulatory Approvals, and shipping documentation. This package ensures regulatory compliance and facilitates LC processing.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq4" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 text-left">
                <span className="text-lg">What happens if a quality issue is identified?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  We investigate any quality concern within 24 hours and take immediate corrective action. This may include product quarantine, supplier investigation, regulatory notification, and customer communication. Our commitment is to resolve quality issues rapidly and transparently.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq5" className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <AccordionTrigger className="px-8 py-6 hover:bg-gray-50 text-left">
                <span className="text-lg">Are your products accepted by African regulatory authorities?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 leading-relaxed">
                  Yes. We source from pre-approved suppliers whose products are registered and accepted by regulatory authorities across Africa. Our complete documentation packages facilitate smooth customs clearance and regulatory compliance in all countries we serve.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#0033A0]">Why Choose Pacem Quality Assurance</h2>
            <div className="w-24 h-1 bg-[#00A0DC] mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300">
              <div className="w-16 h-16 bg-[#0033A0] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl mb-3 text-[#0033A0]">Triple-Verified Quality</h3>
              <p className="text-gray-600">
                Three independent layers of quality verification ensure the highest standards: supplier certification, laboratory testing, and complete documentation.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300">
              <div className="w-16 h-16 bg-[#0033A0] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-8 w-8" />
              </div>
              <h3 className="text-xl mb-3 text-[#0033A0]">ISO-Accredited Testing</h3>
              <p className="text-gray-600">
                Independent testing by ISO 17025 accredited laboratories (Ghana FDA, Kenya KEBS) provides objective quality verification.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300">
              <div className="w-16 h-16 bg-[#0033A0] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl mb-3 text-[#0033A0]">Complete Documentation</h3>
              <p className="text-gray-600">
                Comprehensive quality documentation packages ensure regulatory compliance and facilitate LC processing.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300">
              <div className="w-16 h-16 bg-[#0033A0] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl mb-3 text-[#0033A0]">Continuous Monitoring</h3>
              <p className="text-gray-600">
                Post-distribution monitoring, pharmacovigilance, and market surveillance provide ongoing quality assurance beyond delivery.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300 lg:col-span-2">
              <div className="w-16 h-16 bg-[#0033A0] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl mb-3 text-[#0033A0]">Integrated Services</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Quality Assurance supports all our services: Procurement & Sourcing (supplier qualification), Supply Chain & Logistics (cold chain compliance), Regulatory Services (registration documentation), and Medical Services (pharmacovigilance), ensuring consistent quality standards across the entire pharmaceutical supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to experience triple-verified quality?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact our Quality Assurance team to learn how our comprehensive quality system ensures the highest pharmaceutical standards for your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
              Request Quality Information
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Download Quality Overview
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h3 className="text-xl mb-4 text-[#0033A0]">Pacem Health Quality Assurance</h3>
          <p className="text-gray-600 mb-6 leading-relaxed italic">
            Triple-verified pharmaceutical quality through internationally-recognized suppliers, ISO-accredited laboratory testing, and rigorous documentation standards. Quality you can trust, every time.
          </p>
          <div className="text-sm text-gray-500 space-y-1">
            <p><strong>Contact:</strong> quality@pacemhealth.com</p>
            <p><strong>Locations:</strong> Nairobi, Kenya | Accra, Ghana</p>
          </div>
        </div>
      </section>
    </div>
  );
}
