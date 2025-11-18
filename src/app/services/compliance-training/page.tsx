import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Package, FileText, CheckSquare, GraduationCap, Building2, Heart } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';
import { SEOHead } from '../../../components/SEOHead';
import heroImage from 'figma:asset/0f28ec8295164c7989eeeca323e51b9c1b1e8b77.png';

export default function ComplianceTrainingPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Compliance & Training Services",
    "description": "WHO GDP, GMP, and regulatory compliance training for African healthcare systems. Pharmaceutical staff certification, quality assurance protocols, and ongoing professional development.",
    "provider": {"@type": "Organization", "name": "Pacem Health Inc."},
    "areaServed": {"@type": "Place", "name": "Africa"},
    "serviceType": "Healthcare Compliance Training"
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Compliance & Training Services | WHO GDP/GMP Certification Africa | Pacem Health"
        description="WHO Good Distribution Practices (GDP) and GMP compliance training for African pharmaceutical systems. Staff certification, quality assurance, regulatory training, and continuous professional development. Strengthen healthcare workforce capacity."
        keywords={[
          'WHO GDP training Africa',
          'GMP compliance training',
          'pharmaceutical compliance Africa',
          'healthcare staff certification',
          'quality assurance training',
          'regulatory compliance training',
          'pharmaceutical workforce development',
          'Good Distribution Practices training',
          'healthcare quality training Africa'
        ]}
        structuredData={serviceSchema}
      />
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative bg-[#0033A0] text-white overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Compliance & Training - Pharmaceutical professional reviewing medication documentation and GDP compliance requirements"
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
                  <pattern id="diagonal-lines-ct" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.5"/>
                    <line x1="0" y1="50" x2="50" y2="100" stroke="white" strokeWidth="0.5"/>
                    <line x1="50" y1="0" x2="100" y2="50" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonal-lines-ct)"/>
              </svg>
            </div>

            {/* Text Content */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Compliance & Training Services
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95">
                <strong>Ensuring Excellence Through Compliance and Capacity Building</strong>
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#00A0DC] text-white hover:bg-[#00A0DC]/90">
                  Schedule Compliance Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                >
                  Download Program Overview
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-center text-[#0033A0] mb-8 md:mb-12 text-3xl md:text-4xl">
            From Checkbox to Culture
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8 leading-relaxed">
            <p className="text-center">
              True compliance is not about passing inspections—it's about building systems and capabilities that consistently deliver quality and safety. Many organizations approach compliance as a one-time checklist, leading to gaps, inconsistencies, and inspection failures.
            </p>
            
            <p className="text-center">
              Pacem Health takes a <strong className="text-[#0033A0]">systems-based approach</strong> to compliance. We help you build sustainable compliance programs that integrate quality management, staff training, and continuous improvement into your daily operations. Our goal is not just to help you pass your next inspection, but to build organizational capacity and a culture where compliance becomes second nature.
            </p>
            
            <p className="text-center">
              <strong className="text-[#0033A0]">Through comprehensive training, practical tools, and ongoing support, we transform compliance from a burden into a competitive advantage.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Compliance at a Glance - Operations Metrics */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-[#0033A0] mb-3 text-3xl md:text-4xl">Compliance & Training at a Glance</h2>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Comprehensive compliance programs and workforce development solutions for African pharmaceutical and healthcare operations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">15+</div>
              <div className="text-sm text-gray-600 leading-relaxed">African Markets<br />Served</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">8</div>
              <div className="text-sm text-gray-600 leading-relaxed">Comprehensive Training<br />Programs</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">5-Step</div>
              <div className="text-sm text-gray-600 leading-relaxed">Implementation<br />Process</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">Multi-Year</div>
              <div className="text-sm text-gray-600 leading-relaxed">Workforce Development<br />Strategy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve - Client Types */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Who We Serve</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Compliance and training solutions for pharmaceutical distributors, healthcare providers, and manufacturers across public and private sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Public Sector */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0033A0] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#0033A0] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] text-center mb-4">Public Sector Organizations</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Government pharmaceutical warehouses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Public hospitals and clinics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>National medical stores</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Ministry of Health agencies</span>
                </li>
              </ul>
            </div>

            {/* Private Healthcare */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#00A0DC] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#00A0DC] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl text-[#00A0DC] text-center mb-4">Private Healthcare Providers</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Private hospital networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Pharmacy chains and independents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Private clinics and health centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Faith-based health facilities</span>
                </li>
              </ul>
            </div>

            {/* Pharmaceutical Distributors */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0033A0] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#0033A0] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Package className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] text-center mb-4">Pharmaceutical Distributors</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Wholesale pharmaceutical distributors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Medical supply importers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Regional distribution networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Healthcare logistics providers</span>
                </li>
              </ul>
            </div>

            {/* Pharmaceutical Manufacturers */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#00A0DC] hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-[#00A0DC] rounded-full flex items-center justify-center mb-4 mx-auto">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl text-[#00A0DC] text-center mb-4">Pharmaceutical Manufacturers</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Global pharma manufacturers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>African pharmaceutical producers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Medical device companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Diagnostic manufacturers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-[#0033A0] mb-3 text-3xl md:text-4xl">Four Pillars of Compliance Excellence</h2>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Foundation, navigation, systems, and people—aligned for lasting quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#00A0DC] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center text-white">
                  <Package className="h-6 w-6" />
                </div>
                <h3 className="text-[#0033A0]">PILLAR 1: GDP Compliance Programs</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Good Distribution Practices (GDP) are the foundation of pharmaceutical quality and safety. We help you establish and maintain GDP-compliant operations across your distribution network.
              </p>
              
              <div className="ml-0 md:ml-16">
                <h4 className="text-[#0033A0] mb-3">Our Services:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>GDP Gap Analysis:</strong> Comprehensive assessment of current practices against GDP requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>SOP Development:</strong> Creating standard operating procedures for all GDP-critical processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>Infrastructure Support:</strong> Guidance on facility design, equipment, and storage requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>Documentation Systems:</strong> Implementing robust record-keeping and traceability systems</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#00A0DC] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center text-white">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-[#0033A0]">PILLAR 2: Regulatory Compliance Support</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Regulatory requirements across African countries are complex and constantly evolving. We help you understand and comply with all applicable regulations.
              </p>
              
              <div className="ml-0 md:ml-16">
                <h4 className="text-[#0033A0] mb-3">Our Services:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>Regulatory Mapping:</strong> Identifying all applicable regulations and requirements for your operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>License Application Support:</strong> Assistance with obtaining and renewing pharmaceutical licenses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>Compliance Monitoring:</strong> Ongoing tracking of regulatory changes and compliance obligations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>Inspection Readiness:</strong> Preparing your organization for regulatory inspections and audits</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#00A0DC] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center text-white">
                  <CheckSquare className="h-6 w-6" />
                </div>
                <h3 className="text-[#0033A0]">PILLAR 3: Quality Management Systems</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                A robust Quality Management System (QMS) provides the framework for consistent compliance and continuous improvement. We help you design, implement, and maintain QMS that meet international standards.
              </p>
              
              <div className="ml-0 md:ml-16">
                <h4 className="text-[#0033A0] mb-3">Our Services:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>QMS Design & Implementation:</strong> Developing quality management systems tailored to your operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>CAPA Systems:</strong> Implementing Corrective and Preventive Action processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>Quality Audits:</strong> Conducting internal audits to identify gaps and improvement opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>Management Review:</strong> Facilitating regular management reviews of quality performance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#00A0DC] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-[#0033A0]">PILLAR 4: Compliance Training & Capacity Building</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Compliance depends on people. We provide comprehensive training programs that build staff knowledge, skills, and confidence in maintaining compliance across all aspects of pharmaceutical operations.
              </p>
              
              <div className="ml-0 md:ml-16">
                <h4 className="text-[#0033A0] mb-3">Our Training Programs:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>GDP Training:</strong> Comprehensive training on Good Distribution Practices for all staff levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>Regulatory Compliance Training:</strong> Understanding regulatory requirements and obligations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>Quality Systems Training:</strong> Training on quality management, documentation, and auditing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span><strong>Role-Specific Training:</strong> Customized training for pharmacists, warehouse staff, drivers, and managers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
    
          <div className="text-center mb-12">
            <h2 className="text-[#0033A0] mb-3 text-3xl md:text-4xl">Our 5-Step Compliance Development Process</h2>
            <p className="leading-relaxed max-w-3xl mx-auto">
              A systematic approach from assessment to sustained excellence
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: 1,
                title: "Compliance Assessment",
                description: "Comprehensive assessment of current compliance status, identifying gaps, risks, and improvement opportunities"
              },
              {
                step: 2,
                title: "Compliance Program Design",
                description: "Design customized compliance program addressing gaps, meeting regulatory requirements, and aligning with operational realities"
              },
              {
                step: 3,
                title: "Implementation & Training",
                description: "SOP rollout, staff training delivery, infrastructure guidance, and documentation system setup"
              },
              {
                step: 4,
                title: "Audit & Verification",
                description: "Internal audits, mock regulatory inspections, gap identification and remediation, inspection readiness verification"
              },
              {
                step: 5,
                title: "Ongoing Support & Improvement",
                description: "Refresher training, periodic audits, regulatory update notifications, continuous improvement support"
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white flex items-center justify-center mx-auto mb-4 text-xl">
                  {item.step}
                </div>
                <h4 className="text-[#0033A0] mb-2">{item.title}</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Training Programs Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-[#0033A0] mb-3 text-3xl md:text-4xl">Compliance Training Programs</h2>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Comprehensive training programs designed for African pharmaceutical and healthcare operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#00A0DC] transition-all duration-300">
              <h4 className="text-[#0033A0] mb-3">GDP Fundamentals Training</h4>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">
                  <strong>Duration:</strong> 2 days
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Audience:</strong> All pharmaceutical staff
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Content:</strong> GDP principles, storage and handling, documentation, temperature control, security
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#00A0DC] transition-all duration-300">
              <h4 className="text-[#0033A0] mb-3">Advanced GDP for Managers</h4>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">
                  <strong>Duration:</strong> 3 days
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Audience:</strong> Managers and supervisors
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Content:</strong> GDP management systems, auditing, CAPA, risk management, inspection readiness
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#00A0DC] transition-all duration-300">
              <h4 className="text-[#0033A0] mb-3">Regulatory Compliance Training</h4>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">
                  <strong>Duration:</strong> 1 day
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Audience:</strong> Management and compliance staff
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Content:</strong> Regulatory landscape, licensing requirements, reporting obligations, inspection processes
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#00A0DC] transition-all duration-300">
              <h4 className="text-[#0033A0] mb-3">Quality Management Systems</h4>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">
                  <strong>Duration:</strong> 2 days
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Audience:</strong> Quality and management staff
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Content:</strong> QMS principles, documentation, auditing, CAPA, management review, continuous improvement
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#00A0DC] transition-all duration-300">
              <h4 className="text-[#0033A0] mb-3">Pharmacovigilance & Safety</h4>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">
                  <strong>Duration:</strong> 1 day
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Audience:</strong> Pharmacists and healthcare professionals
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Content:</strong> Adverse event recognition, reporting requirements, patient safety, risk communication
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-[#00A0DC] transition-all duration-300">
              <h4 className="text-[#0033A0] mb-3">Cold Chain Management</h4>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600">
                  <strong>Duration:</strong> 1 day
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Audience:</strong> Warehouse and logistics staff
                </p>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Content:</strong> Temperature-sensitive products, cold chain equipment, monitoring, deviation management
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-[#0033A0]/5 to-[#00A0DC]/5 rounded-lg border border-[#0033A0]/20">
            <p className="text-center text-gray-700 leading-relaxed">
              <strong className="text-[#0033A0]">Customized Training:</strong> All training programs can be customized for your specific operations, staff roles, and learning needs. Training can be delivered on-site, online, or in hybrid formats with certification upon completion.
            </p>
          </div>

          {/* Pharma Manufacturer Callout */}
          <div className="mt-8 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-3">Post-Registration Compliance Training for Pharmaceutical Manufacturers</h3>
                <p className="leading-relaxed mb-4 opacity-90">
                  After registering your pharmaceutical products or medical devices through our Market Access and Regulatory Services, we provide comprehensive compliance training for your African distribution partners, warehouse staff, and in-country teams.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="mb-2">Distributor Partner Training</h4>
                    <p className="text-sm opacity-90">
                      Train your distribution partners on GDP requirements, quality management, and regulatory compliance to protect your market authorization
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <h4 className="mb-2">In-Country Team Certification</h4>
                    <p className="text-sm opacity-90">
                      Certify your local sales teams, medical representatives, and country managers on regulatory requirements and quality standards
                    </p>
                  </div>
                </div>
                <p className="text-sm opacity-90">
                  <strong>Result:</strong> Compliant distribution networks, sustained market authorization, protected brand reputation, and reduced risk of regulatory action across all African markets where your products are registered.
                </p>
              </div>
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
              Transforming compliance from burden to competitive advantage
            </p>
          </div>

          <div className="space-y-12">
            {/* Benefit 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:border-[#00A0DC] border-2 border-transparent transition-all duration-300">
              <h3 className="text-[#0033A0] mb-4">Benefit 1: Regulatory Confidence</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Challenge:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Pharmaceutical organizations face complex and evolving regulatory requirements, with significant consequences for non-compliance including license suspension and legal liability.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Pacem Solution:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our comprehensive compliance programs ensure you understand and meet all regulatory requirements, with ongoing support to maintain compliance as regulations evolve.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">Your Result:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Pass regulatory inspections with confidence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Maintain valid licenses and avoid penalties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Demonstrate commitment to patient safety</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:border-[#00A0DC] border-2 border-transparent transition-all duration-300">
              <h3 className="text-[#0033A0] mb-4">Benefit 2: Operational Efficiency</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Challenge:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Poorly designed compliance programs create unnecessary bureaucracy, slow down operations, and frustrate staff without delivering real quality improvements.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Pacem Solution:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We design practical, streamlined compliance systems that integrate seamlessly into daily operations, making compliance easier rather than harder.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">Your Result:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Improved operational efficiency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Reduced errors and waste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Better staff morale and productivity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:border-[#00A0DC] border-2 border-transparent transition-all duration-300">
              <h3 className="text-[#0033A0] mb-4">Benefit 3: Staff Competence & Confidence</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Challenge:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Many pharmaceutical staff lack proper training in GDP, regulatory requirements, and quality systems, leading to errors, non-compliance, and low confidence.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Pacem Solution:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our comprehensive training programs build staff knowledge, skills, and confidence across all levels, from warehouse workers to senior management.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">Your Result:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Competent, confident staff</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Reduced errors and deviations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Culture of quality throughout organization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:border-[#00A0DC] border-2 border-transparent transition-all duration-300">
              <h3 className="text-[#0033A0] mb-4">Benefit 4: Competitive Advantage</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Challenge:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    In competitive pharmaceutical markets, strong compliance programs differentiate quality-focused organizations from those cutting corners.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">The Pacem Solution:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    We help you build compliance programs that exceed minimum requirements, positioning you as a quality leader and preferred partner.
                  </p>
                </div>
                <div>
                  <h4 className="text-[#0033A0] mb-2">Your Result:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Enhanced reputation and brand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Preferred supplier status</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Sustainable competitive advantage</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workforce Development Strategy Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-3xl md:text-4xl">WORKFORCE DEVELOPMENT STRATEGY</h2>
            <p className="text-xl mb-8 opacity-95">
              Beyond Training: Building Sustainable Health Workforce Capacity
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg leading-relaxed text-center mb-8 opacity-90">
              Our Compliance & Training services include comprehensive workforce development strategic advisory for Ministries of Health, health systems, and development partners. We don't just deliver training—we help design multi-year workforce capacity building strategies that address critical skills gaps and build sustainable health workforce systems.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-center mb-8">Our Strategic Advisory Services:</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="mb-3">Workforce Shortage Assessments</h4>
              <p className="text-sm leading-relaxed opacity-90">
                Conduct comprehensive assessments of health workforce gaps, skills shortages, and retention challenges to inform national workforce planning.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="mb-3">Retention Strategy Development</h4>
              <p className="text-sm leading-relaxed opacity-90">
                Design evidence-based retention strategies including career pathways, continuing education programs, and incentive structures to combat brain drain.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="mb-3">Skills Development for Underserved Specialties</h4>
              <p className="text-sm leading-relaxed opacity-90">
                Develop targeted training programs for critical shortage areas including anesthesia, surgery, diagnostics, biomedical engineering, and pharmaceutical quality assurance.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="mb-3">Community Health Worker Programs</h4>
              <p className="text-sm leading-relaxed opacity-90">
                Design comprehensive CHW training, certification, and supervision systems that extend health services to underserved communities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="mb-3">Task-Shifting Strategies</h4>
              <p className="text-sm leading-relaxed opacity-90">
                Develop evidence-based task-shifting frameworks that optimize limited clinical workforce while maintaining quality and safety standards.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="mb-3">International Partnership Development</h4>
              <p className="text-sm leading-relaxed opacity-90">
                Facilitate partnerships with international training institutions for certification programs, continuing education, and knowledge exchange.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-center leading-relaxed">
              <strong>Our workforce development strategies are informed by deep understanding of African health workforce realities and designed for long-term sustainability, not just short-term training interventions.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Pacem Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-[#0033A0] mb-3 text-3xl md:text-4xl">Why Choose Pacem Compliance & Training</h2>
            <p className="leading-relaxed max-w-3xl mx-auto">
              Practical expertise, local knowledge, and integrated service delivery across your complete African market journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-l-4 border-[#0033A0]">
              <h3 className="text-[#0033A0] mb-3">Practical, Not Theoretical</h3>
              <p className="text-gray-700 leading-relaxed">
                Our compliance programs are designed by practitioners who understand real-world pharmaceutical operations. We provide practical, implementable solutions, not academic theory.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-l-4 border-[#0033A0]">
              <h3 className="text-[#0033A0] mb-3">Local Regulatory Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                With offices in Kenya and Ghana, we have deep knowledge of local regulatory requirements, inspection practices, and compliance challenges across African markets.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-l-4 border-[#0033A0]">
              <h3 className="text-[#0033A0] mb-3">Integrated Market Access & Compliance Solutions</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Single partner for your complete African market journey:</strong> Market Access Services (market entry strategy), Regulatory Services (product registration), Wholesale Distribution (product distribution), and Compliance & Training (ongoing compliance). No need to coordinate multiple partners—we provide end-to-end support from initial market assessment through sustained compliance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border-l-4 border-[#0033A0]">
              <h3 className="text-[#0033A0] mb-3">Deep African Healthcare Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                Our team brings extensive expertise in helping pharmaceutical and healthcare organizations navigate African regulatory environments, build sustainable compliance systems, and develop high-performing teams. With practical experience across 15+ African markets, we understand the unique challenges you face and deliver solutions designed for long-term success.
              </p>
            </div>
          </div>

          {/* Integration Visual */}
          <div className="bg-gradient-to-r from-[#0033A0]/10 to-[#00A0DC]/10 rounded-lg p-8 border-2 border-[#0033A0]">
            <h3 className="text-[#0033A0] mb-6 text-center">The Pacem Integrated Advantage</h3>
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <div className="text-2xl mb-2 text-[#0033A0]">1</div>
                <h4 className="text-[#0033A0] mb-1">Market Access</h4>
                <p className="text-xs text-gray-600">Market entry strategy & opportunity identification</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <div className="text-2xl mb-2 text-[#0033A0]">2</div>
                <h4 className="text-[#0033A0] mb-1">Regulatory</h4>
                <p className="text-xs text-gray-600">Product registration & regulatory approvals</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <div className="text-2xl mb-2 text-[#0033A0]">3</div>
                <h4 className="text-[#0033A0] mb-1">Distribution</h4>
                <p className="text-xs text-gray-600">Wholesale distribution & logistics</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center border-2 border-[#00A0DC]">
                <div className="text-2xl mb-2 text-[#0033A0]">4</div>
                <h4 className="text-[#0033A0] mb-1">Compliance</h4>
                <p className="text-xs text-gray-600">Ongoing training, audits & quality assurance</p>
              </div>
            </div>
            <p className="text-center text-gray-700 leading-relaxed">
              <strong className="text-[#0033A0]">For pharmaceutical manufacturers:</strong> One partner managing your complete African market presence—from initial registration through ongoing compliance monitoring. Seamless coordination, consistent quality standards, and reduced complexity across all markets.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-[#0033A0] mb-3 text-3xl md:text-4xl">Frequently Asked Questions</h2>
            <p className="leading-relaxed">
              Common questions about our compliance and training programs
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC]">
                Who needs compliance and training services?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Our services benefit pharmacies, pharmaceutical distributors, healthcare facilities, manufacturers, and any organization involved in pharmaceutical storage, handling, or distribution. Whether you're seeking initial licensing, preparing for inspection, or building ongoing compliance capacity, we can help.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC]">
                How long does it take to establish a compliance program?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Timeline varies based on your starting point and scope. A basic GDP compliance program can be established in 2-3 months, while comprehensive quality management systems may take 6-12 months. We work with you to develop realistic timelines that balance urgency with thoroughness.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC]">
                Can you help us prepare for regulatory inspections?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Yes. Our inspection readiness services include mock inspections, gap remediation, staff preparation, and documentation review. We help you approach inspections with confidence, knowing you meet all requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC]">
                Do you provide ongoing support after initial implementation?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Yes. We offer ongoing support packages including refresher training, periodic audits, regulatory update notifications, and continuous improvement support. Compliance is not one-time—we're here for the long term.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC]">
                Can training be customized for our specific needs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Absolutely. While we offer standard training programs, we customize content, duration, and delivery methods to match your specific operations, staff roles, and learning needs. Training can be delivered on-site, online, or in hybrid formats.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC]">
                We've registered our products through Market Access Services. How does Compliance & Training support our ongoing operations?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Once your pharmaceutical products or medical devices are registered, Compliance & Training ensures your African distribution partners maintain GDP standards, your in-country staff understand local regulatory requirements, and your facilities remain inspection-ready. We provide ongoing audits, refresher training, and regulatory update monitoring to protect your market authorization and brand reputation. Our integrated approach means you have a single partner managing market entry (Market Access), product registration (Regulatory Services), and ongoing compliance (Compliance & Training) across all African markets.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="mb-4 text-3xl md:text-4xl">Ready to Strengthen Your Compliance Program?</h2>
            <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              Contact our Compliance & Training team to discuss your needs and learn how we can help you build a culture of quality and compliance
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
                Schedule Compliance Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Compliance Team
              </Button>
            </div>

            <p className="text-sm opacity-75">
              <strong>Email:</strong> compliance@pacemhealth.com · <strong>Locations:</strong> Nairobi, Kenya | Accra, Ghana
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
