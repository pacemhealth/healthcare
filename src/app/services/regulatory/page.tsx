import { useState } from 'react';
import { CheckCircle, ArrowRight, Shield, FileText, GraduationCap, Award, AlertTriangle, Building2, Users, BookOpen, Target, TrendingUp, Lock, Package, Microscope } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';
import { SEOHead } from '../../../components/SEOHead';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import kenyaPPBLogo from 'figma:asset/c70bdd2e48eea6e64ef2df4a22c4bef1e9dc45ab.png';
import ghanaFDALogo from 'figma:asset/65e90ba8734fe2c39f0b48e2d3e50f61cf59aa3c.png';
import nigeriaNAFDACLogo from 'figma:asset/e2a41f4ae5cf7b5892ea5324f91df506dd76ecda.png';

export default function RegulatoryComplianceServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Regulatory & Compliance Services",
    "description": "Comprehensive regulatory affairs, medical information, pharmacovigilance, and compliance training services for African healthcare markets. Product registration, safety monitoring, and professional development programs.",
    "provider": {"@type": "Organization", "name": "Pacem Health Inc."},
    "areaServed": {"@type": "Place", "name": "Africa"},
    "serviceType": "Regulatory and Compliance Services"
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Regulatory & Compliance Services | Product Registration & Training Africa | Pacem Health"
        description="Comprehensive regulatory affairs, medical information, pharmacovigilance, and compliance training for African healthcare. Product registration, safety monitoring, WHO GDP/GMP training, and professional certification programs across 15+ countries."
        keywords={[
          'pharmaceutical registration Africa',
          'regulatory affairs Africa',
          'medical device registration',
          'pharmacovigilance Africa',
          'WHO GDP training',
          'GMP compliance training',
          'healthcare compliance Africa',
          'medical information services',
          'regulatory compliance training',
          'product registration Africa'
        ]}
        structuredData={serviceSchema}
      />
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative bg-gray-900 text-white overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnklMjBjb21wbGlhbmNlfGVufDF8fHx8MTc2MzMxODMzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Pharmaceutical laboratory compliance and quality assurance"
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
                Regulatory & Compliance Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Navigate Regulatory Complexity with Confidence
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-[#0033A0] hover:bg-gray-100">
                Request Regulatory & Compliance Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach: End-to-End Regulatory & Compliance Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">End-to-End Regulatory & Compliance Solutions</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-black">From Product Registration to Professional Certification</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-black leading-relaxed text-center">
              Pacem Health provides <span className="font-semibold">comprehensive regulatory affairs, medical information, pharmacovigilance, and compliance training services</span> for pharmaceutical companies, medical device manufacturers, healthcare organizations, and regulatory professionals across Africa. We combine deep regulatory expertise with established relationships with African regulatory authorities—ensuring your products reach market efficiently while maintaining the highest standards of safety and compliance.
            </p>
            <p className="text-lg text-black leading-relaxed text-center">
              Whether you're a multinational pharmaceutical company seeking product registration across multiple African markets, a local manufacturer ensuring ongoing compliance, or healthcare professionals seeking WHO-recognized certification, we provide end-to-end solutions that navigate regulatory complexity with confidence and precision.
            </p>
            <p className="text-lg text-black leading-relaxed text-center">
              Pacem Health views regulatory and compliance services as a <span className="font-semibold">strategic partnership</span>, not just documentation support. By combining regulatory strategy, scientific expertise, safety monitoring, and professional development programs, we accelerate market access, ensure patient safety, maintain compliance, and build institutional capacity across African healthcare systems.
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
              Measurable excellence in regulatory strategy, safety monitoring, and professional development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl mb-3 text-black">150+</div>
              <div className="text-sm text-black leading-relaxed">Product Registrations<br />(Pipeline Target)</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">15+</div>
              <div className="text-sm text-black leading-relaxed">African Regulatory<br />Authorities</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">2,000+</div>
              <div className="text-sm text-black leading-relaxed">Healthcare Professionals<br />Trained (Target)</div>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-3 text-black">95%</div>
              <div className="text-sm text-black leading-relaxed">Registration Success<br />Rate (Target)</div>
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
              From multinational pharmaceutical companies to healthcare professionals—comprehensive regulatory and compliance solutions for every stakeholder
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Pharmaceutical & Medical Device Companies */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <div className="mb-6 text-center">
                <h3 className="text-xl text-black">Pharmaceutical & Medical Device Companies</h3>
              </div>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Multinational pharmaceutical manufacturers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Generic drug manufacturers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Medical device companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Biotech & diagnostics firms</span>
                </li>
              </ul>
            </div>

            {/* Healthcare Organizations */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <div className="mb-6 text-center">
                <h3 className="text-xl text-black">Healthcare Organizations</h3>
              </div>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Hospitals & health systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Pharmaceutical distributors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Pharmacy chains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Clinical research organizations</span>
                </li>
              </ul>
            </div>

            {/* Healthcare Professionals */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <div className="mb-6 text-center">
                <h3 className="text-xl text-black">Healthcare Professionals</h3>
              </div>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Pharmacists & pharmacy technicians</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Regulatory affairs professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Quality assurance managers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-1">•</span>
                  <span>Supply chain professionals</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 max-w-4xl mx-auto">
            <p className="text-center text-black leading-relaxed">
              <strong>One Integrated Service:</strong> Whether you're registering a new pharmaceutical product across African markets or seeking WHO-recognized professional certification, we deliver the same strategic approach, regulatory expertise, and comprehensive support—ensuring compliance, safety, and professional excellence across Africa's healthcare sector.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars of Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black">Four Pillars of Regulatory & Compliance Excellence</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Comprehensive strategy built on regulatory expertise, scientific excellence, safety monitoring, and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 1</div>
                <h3 className="text-2xl text-black">Regulatory Affairs & Product Registration</h3>
                <p className="mt-2 text-black">
                  <strong>Navigate African Regulatory Complexity</strong>
                </p>
              </div>
              <p className="text-black mb-6">
                Expert regulatory navigation for pharmaceutical and medical device registration across 15+ African markets. We manage the complete registration lifecycle from initial assessment to post-market compliance.
              </p>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Product Registration:</strong> Complete dossier preparation and submission management
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Import & Marketing Authorization:</strong> Licensing and permit acquisition
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Regulatory Strategy:</strong> Market entry planning and timeline optimization
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Authority Liaison:</strong> Direct communication with regulatory agencies
                  </div>
                </li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 2</div>
                <h3 className="text-2xl text-black">Medical Information & Pharmacovigilance</h3>
                <p className="mt-2 text-black">
                  <strong>Scientific Excellence and Patient Safety</strong>
                </p>
              </div>
              <p className="text-black mb-6">
                Comprehensive medical affairs services including scientific support, medical information delivery, and pharmacovigilance systems for adverse event monitoring and safety reporting.
              </p>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Medical Science Liaison:</strong> Evidence-based medical information for healthcare professionals
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Pharmacovigilance:</strong> Adverse event monitoring and safety signal detection
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Drug Safety Reporting:</strong> Regulatory submission and authority notifications
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Medical Education:</strong> Clinical training and continuing medical education programs
                  </div>
                </li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 3</div>
                <h3 className="text-2xl text-black">Compliance & Quality Management</h3>
                <p className="mt-2 text-black">
                  <strong>WHO GDP/GMP Standards Implementation</strong>
                </p>
              </div>
              <p className="text-black mb-6">
                Comprehensive compliance systems for WHO Good Distribution Practices (GDP), Good Manufacturing Practices (GMP), and regulatory quality management across pharmaceutical operations.
              </p>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>GDP Implementation:</strong> Distribution quality management systems
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>GMP Compliance:</strong> Manufacturing quality assurance protocols
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Compliance Audits:</strong> Internal audits and inspection readiness
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Standard Operating Procedures:</strong> Development and implementation
                  </div>
                </li>
              </ul>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">PILLAR 4</div>
                <h3 className="text-2xl text-black">Professional Training & Certification</h3>
                <p className="mt-2 text-black">
                  <strong>Building Healthcare Workforce Capacity</strong>
                </p>
              </div>
              <p className="text-black mb-6">
                Comprehensive training programs for healthcare professionals, pharmacy staff, and regulatory personnel. Certification programs aligned with WHO standards and international best practices.
              </p>
              <ul className="space-y-3 text-black text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>WHO GDP/GMP Training:</strong> Certified compliance training programs
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Clinical Pharmacy Education:</strong> Medication therapy management and patient care
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Regulatory Affairs Training:</strong> Product registration and compliance management
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black mt-1">•</span>
                  <div>
                    <strong>Continuing Professional Development:</strong> Ongoing education and skill enhancement
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black">Our 5-Step Regulatory & Compliance Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From initial assessment to ongoing compliance, our systematic approach ensures excellence at every stage
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
                    <h3 className="text-xl text-black">Regulatory Assessment</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Comprehensive evaluation and strategy development</p>
              </div>
              <p className="text-black text-sm">
                We assess your product, target markets, and regulatory requirements to develop a comprehensive compliance strategy with clear timelines and deliverables.
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
                    <h3 className="text-xl text-black">Documentation & Submission</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Dossier preparation and regulatory filing</p>
              </div>
              <p className="text-black text-sm">
                Our experts prepare complete regulatory dossiers, manage submissions to national authorities, and coordinate all documentation requirements across multiple markets.
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
                    <h3 className="text-xl text-black">Authority Liaison & Approval</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Managing regulatory review and approval</p>
              </div>
              <p className="text-black text-sm">
                We maintain direct communication with regulatory authorities, respond to queries, coordinate inspections, and manage the approval process to market authorization.
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
                    <h3 className="text-xl text-black">Training & Implementation</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Building compliance capacity and systems</p>
              </div>
              <p className="text-black text-sm">
                We provide comprehensive training for your staff, implement quality management systems, and ensure your organization has the capacity for ongoing compliance.
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
                    <h3 className="text-xl text-black">Post-Market Surveillance</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Ongoing compliance and safety monitoring</p>
              </div>
              <p className="text-black text-sm">
                We maintain pharmacovigilance systems, manage variation submissions, coordinate renewals, and ensure continuous regulatory compliance and patient safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We Work With Leading African Regulatory Authorities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-black">We Work With Leading African Regulatory Authorities</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Established relationships with national regulatory authorities across 15+ African countries
            </p>
          </div>

          {/* Featured Regulatory Authorities with Logos */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 text-center">
              <div className="mb-4 flex justify-center">
                <img src={kenyaPPBLogo} alt="Kenya Pharmacy and Poisons Board" className="h-16 object-contain" />
              </div>
              <h3 className="text-lg text-black">Kenya Pharmacy and Poisons Board</h3>
              <p className="text-sm text-gray-600 mt-2">Kenya PPB</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 text-center">
              <div className="mb-4 flex justify-center">
                <img src={ghanaFDALogo} alt="Ghana Food and Drugs Authority" className="h-16 object-contain" />
              </div>
              <h3 className="text-lg text-black">Ghana Food and Drugs Authority</h3>
              <p className="text-sm text-gray-600 mt-2">Ghana FDA</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 border-b-4 border-b-orange-500 text-center">
              <div className="mb-4 flex justify-center">
                <img src={nigeriaNAFDACLogo} alt="Nigeria National Agency for Food and Drug Administration and Control" className="h-16 object-contain" />
              </div>
              <h3 className="text-lg text-black">Nigeria NAFDAC</h3>
              <p className="text-sm text-gray-600 mt-2">Nigeria NAFDAC</p>
            </div>
          </div>

          {/* Additional Countries List */}
          <div className="bg-slate-50 p-8 border border-gray-200">
            <h3 className="text-xl text-black mb-6 text-center">And regulatory authorities in:</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="flex items-start gap-2 text-black">
                <span className="mt-1">•</span>
                <span>Tanzania</span>
              </div>
              <div className="flex items-start gap-2 text-black">
                <span className="mt-1">•</span>
                <span>Uganda</span>
              </div>
              <div className="flex items-start gap-2 text-black">
                <span className="mt-1">•</span>
                <span>Rwanda</span>
              </div>
              <div className="flex items-start gap-2 text-black">
                <span className="mt-1">•</span>
                <span>Ethiopia</span>
              </div>
              <div className="flex items-start gap-2 text-black">
                <span className="mt-1">•</span>
                <span>Zambia</span>
              </div>
              <div className="flex items-start gap-2 text-black">
                <span className="mt-1">•</span>
                <span>Zimbabwe</span>
              </div>
              <div className="flex items-start gap-2 text-black">
                <span className="mt-1">•</span>
                <span>Malawi</span>
              </div>
              <div className="flex items-start gap-2 text-black">
                <span className="mt-1">•</span>
                <span>Mozambique</span>
              </div>
              <div className="flex items-start gap-2 text-black">
                <span className="mt-1">•</span>
                <span>South Africa</span>
              </div>
              <div className="flex items-start gap-2 text-black">
                <span className="mt-1">•</span>
                <span>Botswana</span>
              </div>
              <div className="flex items-start gap-2 text-black">
                <span className="mt-1">•</span>
                <span>Namibia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black">Key Benefits</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              How our integrated regulatory and compliance services solve critical healthcare challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0033A0] flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl text-black">Faster Market Access</h3>
              </div>
              <p className="text-black text-sm">
                Expert regulatory navigation and established authority relationships accelerate registration timelines across African markets—reducing time-to-market and maximizing commercial opportunity.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0033A0] flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl text-black">Enhanced Patient Safety</h3>
              </div>
              <p className="text-black text-sm">
                Robust pharmacovigilance systems, medical information services, and safety monitoring ensure adverse events are detected, reported, and managed—protecting patients and maintaining regulatory compliance.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0033A0] flex items-center justify-center flex-shrink-0">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl text-black">Regulatory Compliance Confidence</h3>
              </div>
              <p className="text-black text-sm">
                WHO GDP/GMP-compliant quality management systems, comprehensive documentation, and continuous compliance monitoring eliminate regulatory risk and ensure inspection readiness.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#0033A0] flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl text-black">Workforce Capacity Building</h3>
              </div>
              <p className="text-black text-sm">
                Certified training programs and professional development strengthen your team's capabilities in regulatory affairs, clinical practice, and compliance management—building sustainable internal capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-black">Service Categories</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Comprehensive regulatory and compliance solutions across all critical domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Regulatory Affairs */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl text-black mb-4">Regulatory Affairs</h3>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Product registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Import licensing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Marketing authorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Regulatory strategy</span>
                </li>
              </ul>
            </div>

            {/* Medical Information */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl text-black mb-4">Medical Information</h3>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Medical science liaison</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Scientific education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Clinical guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Medical writing</span>
                </li>
              </ul>
            </div>

            {/* Pharmacovigilance */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl text-black mb-4">Pharmacovigilance</h3>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Adverse event monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Safety signal detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Safety reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Risk management</span>
                </li>
              </ul>
            </div>

            {/* Compliance Training */}
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl text-black mb-4">Compliance Training</h3>
              <ul className="space-y-2 text-black text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>WHO GDP/GMP training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Quality management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Clinical pharmacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-black mt-0.5">•</span>
                  <span>Professional certification</span>
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
              Common questions about our regulatory and compliance services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">How long does product registration take in African markets?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Registration timelines vary by country and product type, typically ranging from 6-18 months. Our established relationships with regulatory authorities, comprehensive dossier preparation, and proactive communication help optimize timelines and accelerate market access.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">What pharmacovigilance services do you provide?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  We provide comprehensive pharmacovigilance including adverse event collection and reporting, safety signal detection, periodic safety update reports (PSURs), risk management planning, and regulatory safety submissions to national authorities. Our systems comply with WHO and international standards.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq3" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">Are your training programs WHO-certified?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Yes. Our training programs are aligned with WHO Good Distribution Practices (GDP), Good Manufacturing Practices (GMP), and international quality standards. Participants receive certificates recognized by regulatory authorities across Africa and globally.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq4" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">Can you help us implement quality management systems?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Absolutely. We provide end-to-end support for implementing WHO GDP/GMP-compliant quality management systems, including documentation development, staff training, internal audits, and inspection readiness preparation. Our solutions are tailored to your specific operational needs and regulatory requirements.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq5" className="bg-white border border-gray-200 border-b-4 border-b-orange-500 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-black">Do you provide medical information support for healthcare professionals?</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-4">
                <p className="text-black leading-relaxed">
                  Yes. Our medical science liaisons provide evidence-based medical information to healthcare professionals, including clinical guidelines, therapeutic recommendations, and scientific education. We support informed prescribing decisions and improve clinical outcomes through comprehensive medical affairs services.
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
            <h2 className="text-3xl md:text-4xl mb-6 text-black">Why Choose Pacem Regulatory & Compliance Services</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">
              Integrated regulatory, medical, and compliance expertise backed by African market knowledge
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-4">
                <Shield className="h-8 w-8 text-orange-500 mb-3" />
              </div>
              <h3 className="text-xl mb-3 text-black">Deep Regulatory Expertise</h3>
              <p className="text-black text-sm">
                Expert knowledge of 15+ African regulatory environments with established authority relationships enabling faster market access and regulatory compliance.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-4">
                <Microscope className="h-8 w-8 text-orange-500 mb-3" />
              </div>
              <h3 className="text-xl mb-3 text-black">Scientific Excellence</h3>
              <p className="text-black text-sm">
                Medical science liaisons and pharmacovigilance specialists delivering evidence-based medical information and comprehensive safety monitoring.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-4">
                <FileText className="h-8 w-8 text-orange-500 mb-3" />
              </div>
              <h3 className="text-xl mb-3 text-black">WHO Standards Compliance</h3>
              <p className="text-black text-sm">
                Quality management systems aligned with WHO GDP/GMP standards ensuring regulatory compliance and inspection readiness.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 border-b-4 border-b-orange-500">
              <div className="mb-4">
                <GraduationCap className="h-8 w-8 text-orange-500 mb-3" />
              </div>
              <h3 className="text-xl mb-3 text-black">Comprehensive Training</h3>
              <p className="text-black text-sm">
                Certified professional development programs building sustainable internal capacity in regulatory affairs, clinical practice, and compliance management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] to-[#0052CC] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Navigate Regulatory Complexity?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact our Regulatory & Compliance team for a consultation to learn how our integrated services can accelerate market access, ensure patient safety, and build professional capacity across African healthcare markets.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-[#0033A0] hover:bg-gray-100">
            Request Regulatory & Compliance Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-8 text-white/80">
            <p>regulatory@pacemhealth.com</p>
            <p className="mt-2">Nairobi, Kenya | Accra, Ghana | Lagos, Nigeria</p>
          </div>
        </div>
      </section>
    </div>
  );
}