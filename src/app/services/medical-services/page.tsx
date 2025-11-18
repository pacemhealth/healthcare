import { useState } from 'react';
import { CheckCircle, ArrowRight, Stethoscope, GraduationCap, Shield, Users, FileText, BarChart3, Phone, BookOpen, AlertTriangle, TrendingUp } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { SEOHead } from '../../../components/SEOHead';
import heroImage from 'figma:asset/3404946285bec0acca7ebb512496aca51cca34d8.png';

export default function MedicalServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Clinical & Medical Services",
    "description": "Clinical pharmacy services, patient care programs, medication therapy management, and healthcare professional education across African healthcare facilities.",
    "provider": {"@type": "Organization", "name": "Pacem Health Inc."},
    "areaServed": {"@type": "Place", "name": "Africa"},
    "serviceType": "Clinical Medical Services"
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Clinical & Medical Services | Pharmacy & Patient Care Programs Africa | Pacem Health"
        description="Comprehensive clinical pharmacy services and patient care programs for African healthcare facilities. Medication therapy management, antimicrobial stewardship, chronic disease management, and healthcare professional education. Improve patient outcomes."
        keywords={[
          'clinical pharmacy services Africa',
          'medication therapy management',
          'patient care programs Africa',
          'antimicrobial stewardship',
          'chronic disease management',
          'pharmaceutical care services',
          'healthcare professional education',
          'clinical services Africa'
        ]}
        structuredData={serviceSchema}
      />
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative bg-[#0033A0] text-white overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Medical professionals collaborating on clinical services and education"
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
                  <pattern id="diagonal-lines-med" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.5"/>
                    <line x1="0" y1="50" x2="50" y2="100" stroke="white" strokeWidth="0.5"/>
                    <line x1="50" y1="0" x2="100" y2="50" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonal-lines-med)"/>
              </svg>
            </div>

            {/* Text Content */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Medical Services
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95">
                <strong>Bridging Science and Practice for Safer Healthcare</strong>
              </p>
              <p className="leading-relaxed mb-8 opacity-90">
                Pacem Health delivers comprehensive medical affairs services to pharmaceutical manufacturers and healthcare providers across Africa. Our team of medical science liaisons and pharmacovigilance specialists provides evidence-based medical information, scientific education, and safety monitoring to support informed prescribing decisions and improve patient outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#00A0DC] text-white hover:bg-[#00A0DC]/90">
                  Request Medical Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                >
                  Download Medical Affairs Brochure
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
            From Information Gap to Scientific Excellence
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8 leading-relaxed">
            <p className="text-center">
              Healthcare providers need timely access to accurate, unbiased medical and scientific information to make informed treatment decisions. In Africa, where medical information infrastructure is limited and healthcare systems are under-resourced, this gap can have serious consequences for patient safety and treatment outcomes.
            </p>
            
            <p className="text-center">
              Pacem Health views medical affairs as a <strong className="text-[#0033A0]">public health imperative</strong> that strengthens clinical practice, enhances medication safety, and improves patient care. By providing accessible medical information, evidence-based education, and robust pharmacovigilance systems, we empower healthcare providers with the knowledge they need to deliver better outcomes.
            </p>
            
            <p className="text-center">
              <strong className="text-[#0033A0]">We serve as the trusted scientific bridge between pharmaceutical innovation and clinical practice.</strong> Our multi-manufacturer approach ensures unbiased, patient-centered scientific support across therapeutic areas, benefiting government health programs, private healthcare providers, pharmaceutical companies, and ultimately—patients across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Icon-Based Service Overview */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#00A0DC]/10 rounded-full mb-6">
              <span className="text-sm text-[#0033A0]">Comprehensive Medical Affairs Capabilities</span>
            </div>
            <h2 className="text-[#0033A0] mb-4 text-3xl md:text-4xl">Medical Services Overview</h2>
            <p className="leading-relaxed max-w-3xl mx-auto text-gray-700">
              Scientific excellence for better patient outcomes across Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Medical Information */}
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-[#0033A0] mb-2 group-hover:text-[#00A0DC] transition-colors">Medical Information</h4>
              <p className="text-xs text-gray-600 leading-relaxed">24-hour inquiry response</p>
            </div>

            {/* MSL Support */}
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <Stethoscope className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-[#0033A0] mb-2 group-hover:text-[#00A0DC] transition-colors">MSL Support</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Scientific dialogue & KOL engagement</p>
            </div>

            {/* Medical Education */}
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-[#0033A0] mb-2 group-hover:text-[#00A0DC] transition-colors">Medical Education</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Accredited CME programs</p>
            </div>

            {/* Pharmacovigilance */}
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <AlertTriangle className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-[#0033A0] mb-2 group-hover:text-[#00A0DC] transition-colors">Pharmacovigilance</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Safety monitoring & reporting</p>
            </div>

            {/* Scientific Communication */}
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-[#0033A0] mb-2 group-hover:text-[#00A0DC] transition-colors">Scientific Communication</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Publications & medical writing</p>
            </div>

            {/* Advisory Boards */}
            <div className="group text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-[#0033A0] mb-2 group-hover:text-[#00A0DC] transition-colors">Advisory Boards</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Expert panel management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Affairs at a Glance - Operations Metrics */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0033A0]/5 via-white to-[#00A0DC]/5 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#00A0DC]/10 rounded-full mb-6">
              <span className="text-sm text-[#0033A0]">Our Impact</span>
            </div>
            <h2 className="text-[#0033A0] mb-4 text-3xl md:text-4xl">Medical Affairs at a Glance</h2>
            <p className="leading-relaxed max-w-3xl mx-auto text-gray-700">
              Evidence-based medical support ensuring safe, informed medication use across Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">&lt;24h</div>
              <div className="text-sm text-gray-600 leading-relaxed">Medical Inquiry<br />Response Time</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">12+</div>
              <div className="text-sm text-gray-600 leading-relaxed">CME Programs<br />Planned 2026</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">100%</div>
              <div className="text-sm text-gray-600 leading-relaxed">Regulatory<br />Compliance</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">15+</div>
              <div className="text-sm text-gray-600 leading-relaxed">Therapeutic<br />Areas Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#00A0DC]/10 rounded-full mb-6">
              <span className="text-sm text-[#0033A0]">Our Services</span>
            </div>
            <h2 className="text-[#0033A0] mb-4 text-3xl md:text-4xl">Five Pillars of Medical Excellence</h2>
            <p className="leading-relaxed max-w-3xl mx-auto text-gray-700">
              Comprehensive medical affairs support across the product lifecycle
            </p>
          </div>

          <div className="space-y-8">
            {/* Pillar 1 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center shadow-lg">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0033A0] text-2xl mb-4">Medical Information Services</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Answers When You Need Them:</strong> Our medical information specialists provide timely, evidence-based responses to healthcare provider inquiries about medications, therapeutic areas, and clinical data. We maintain comprehensive medical information databases and deliver accurate, referenced answers within 24 hours.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Medical Information Hotline:</strong> Phone and email support for healthcare provider inquiries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Clinical Data Access:</strong> Comprehensive product information, clinical trial data, and published literature</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Drug Interaction Analysis:</strong> Evidence-based guidance on drug-drug and drug-disease interactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Dosing Guidance:</strong> Support for complex dosing scenarios and special populations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center shadow-lg">
                    <Stethoscope className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0033A0] text-2xl mb-4">Medical Science Liaison (MSL) Support</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Scientific Dialogue, Not Sales:</strong> Our Medical Science Liaisons are highly-trained scientific experts who engage healthcare providers in peer-to-peer scientific discussions. Unlike sales representatives, MSLs focus exclusively on education and evidence, never on promotion or sales targets.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Scientific Engagement:</strong> In-depth discussions of clinical data, mechanisms of action, and therapeutic strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Key Opinion Leader (KOL) Partnerships:</strong> Building collaborative relationships with leading clinicians and researchers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Clinical Trial Support:</strong> Facilitating investigator-initiated research and clinical trial participation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Needs Assessment:</strong> Understanding healthcare provider information needs and knowledge gaps</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0033A0] text-2xl mb-4">Medical Education & Training</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Building Clinical Expertise:</strong> We design and deliver accredited medical education programs that enhance healthcare provider knowledge and improve clinical practice. Our programs are evidence-based, unbiased, and focused on practical application.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Continuing Medical Education (CME):</strong> Accredited programs on therapeutic areas, new medications, and treatment guidelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Therapeutic Area Training:</strong> In-depth education on disease management and treatment algorithms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Medication Safety Workshops:</strong> Training on adverse event recognition, reporting, and prevention</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Case-Based Learning:</strong> Interactive sessions using real-world clinical scenarios</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center shadow-lg">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0033A0] text-2xl mb-4">Pharmacovigilance & Safety Monitoring</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Protecting Patient Safety:</strong> Our pharmacovigilance team monitors medication safety throughout the product lifecycle, ensuring adverse events are identified, assessed, and reported to regulatory authorities. We support both manufacturers and healthcare providers in maintaining robust safety systems.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Adverse Event Monitoring:</strong> Collection, assessment, and documentation of adverse drug reactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Regulatory Reporting:</strong> Timely submission of safety reports to Kenya PPB, Ghana FDA, and other authorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Signal Detection:</strong> Analysis of safety data to identify emerging safety concerns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Risk Management:</strong> Development and implementation of risk minimization strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Pharmacovigilance System Setup:</strong> Establishing compliant PV systems for manufacturers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center shadow-lg">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0033A0] text-2xl mb-4">Scientific Communication & Advisory Boards</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    <strong>Advancing Medical Knowledge:</strong> We facilitate scientific exchange between manufacturers, healthcare providers, and researchers through publications, advisory boards, and scientific meetings. Our goal is to advance medical knowledge and improve therapeutic decision-making.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Medical Writing:</strong> Development of scientific publications, abstracts, and clinical summaries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Advisory Board Management:</strong> Planning and execution of expert advisory boards and scientific symposia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Congress Support:</strong> Scientific presence at medical conferences and professional meetings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span><strong>Real-World Evidence:</strong> Support for observational studies and outcomes research</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#00A0DC]/10 rounded-full mb-6">
              <span className="text-sm text-[#0033A0]">Our Process</span>
            </div>
            <h2 className="text-[#0033A0] mb-4 text-3xl md:text-4xl">Our 5-Step Medical Affairs Process</h2>
            <p className="leading-relaxed max-w-3xl mx-auto text-gray-700">
              From needs assessment to continuous improvement, we deliver comprehensive medical affairs support
            </p>
          </div>

          {/* Desktop Timeline View - Hidden on Mobile */}
          <div className="hidden md:block relative">
            {/* Timeline Line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0033A0] via-[#00A0DC] to-[#0033A0]"></div>

            <div className="grid grid-cols-5 gap-4">
              {[
                {
                  step: 1,
                  title: "Needs Assessment",
                  description: "Understanding your specific medical information and scientific support requirements"
                },
                {
                  step: 2,
                  title: "Program Design",
                  description: "Customized medical affairs program including MI, MSL, education, or PV services"
                },
                {
                  step: 3,
                  title: "Team Deployment",
                  description: "Experienced MSLs, MI specialists, and PV experts trained in your therapeutic area"
                },
                {
                  step: 4,
                  title: "Ongoing Execution",
                  description: "Consistent, high-quality scientific support and regulatory compliance"
                },
                {
                  step: 5,
                  title: "Continuous Improvement",
                  description: "Performance evaluation and program optimization based on stakeholder feedback"
                }
              ].map((item) => (
                <div key={item.step} className="relative">
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white flex items-center justify-center shadow-lg relative z-10 border-4 border-white">
                      <span className="text-2xl">{item.step}</span>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC] min-h-[200px]">
                    <h4 className="text-[#0033A0] mb-3">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Card View - Visible on Mobile Only */}
          <div className="md:hidden space-y-6">
            {[
              {
                step: 1,
                title: "Needs Assessment",
                description: "Understanding your specific medical information and scientific support requirements"
              },
              {
                step: 2,
                title: "Program Design",
                description: "Customized medical affairs program including MI, MSL, education, or PV services"
              },
              {
                step: 3,
                title: "Team Deployment",
                description: "Experienced MSLs, MI specialists, and PV experts trained in your therapeutic area"
              },
              {
                step: 4,
                title: "Ongoing Execution",
                description: "Consistent, high-quality scientific support and regulatory compliance"
              },
              {
                step: 5,
                title: "Continuous Improvement",
                description: "Performance evaluation and program optimization based on stakeholder feedback"
              }
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white flex items-center justify-center shadow-lg">
                    <span className="text-xl">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#0033A0] mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Services Packages - Interactive Tabs */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#00A0DC]/10 rounded-full mb-6">
              <span className="text-sm text-[#0033A0]">Flexible Solutions</span>
            </div>
            <h2 className="text-[#0033A0] mb-4 text-3xl md:text-4xl">Medical Services Packages</h2>
            <p className="leading-relaxed max-w-3xl mx-auto text-gray-700">
              Tailored medical affairs support packages for manufacturers and healthcare organizations
            </p>
          </div>

          <Tabs defaultValue="package1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="package1">MI Essentials</TabsTrigger>
              <TabsTrigger value="package2">MSL Support</TabsTrigger>
              <TabsTrigger value="package3">Comprehensive</TabsTrigger>
              <TabsTrigger value="package4">PV Program</TabsTrigger>
              <TabsTrigger value="package5">HCP Education</TabsTrigger>
            </TabsList>

            <TabsContent value="package1" className="space-y-6">
              <div className="bg-gradient-to-br from-[#0033A0]/5 to-white rounded-2xl p-8 border-2 border-[#0033A0]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-[#0033A0] text-2xl mb-2">Medical Information Essentials</h3>
                    <p className="text-gray-600">For manufacturers requiring basic medical information support</p>
                  </div>
                  <div className="bg-[#00A0DC] text-white px-4 py-2 rounded-lg">
                    <span className="text-sm">Package 1</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Medical information hotline (phone + email)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Response to healthcare provider inquiries</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Product information database maintenance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Quarterly reporting</span>
                  </div>
                </div>

                <div className="bg-white/50 rounded-lg p-4 border border-[#0033A0]/20">
                  <p className="text-sm text-gray-700"><strong>Ideal for:</strong> Single-product manufacturers or products with low inquiry volume</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="package2" className="space-y-6">
              <div className="bg-gradient-to-br from-[#0033A0]/5 to-white rounded-2xl p-8 border-2 border-[#0033A0]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-[#0033A0] text-2xl mb-2">MSL Support</h3>
                    <p className="text-gray-600">For manufacturers seeking scientific engagement with healthcare providers</p>
                  </div>
                  <div className="bg-[#00A0DC] text-white px-4 py-2 rounded-lg">
                    <span className="text-sm">Package 2</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Dedicated MSL coverage (Kenya or Ghana)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Healthcare provider scientific engagement</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">KOL relationship development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Medical education program support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Medical information services</span>
                  </div>
                </div>

                <div className="bg-white/50 rounded-lg p-4 border border-[#0033A0]/20">
                  <p className="text-sm text-gray-700"><strong>Ideal for:</strong> Products requiring active scientific dialogue and education</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="package3" className="space-y-6">
              <div className="bg-gradient-to-br from-[#0033A0]/5 to-white rounded-2xl p-8 border-2 border-[#0033A0]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-[#0033A0] text-2xl mb-2">Comprehensive Medical Affairs</h3>
                    <p className="text-gray-600">For manufacturers requiring full medical affairs support</p>
                  </div>
                  <div className="bg-[#00A0DC] text-white px-4 py-2 rounded-lg">
                    <span className="text-sm">Package 3</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">MSL team (Kenya + Ghana)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Medical information services</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">CME program development and delivery</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Pharmacovigilance system management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Advisory board planning and execution</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Scientific communication support</span>
                  </div>
                </div>

                <div className="bg-white/50 rounded-lg p-4 border border-[#0033A0]/20">
                  <p className="text-sm text-gray-700"><strong>Ideal for:</strong> Multi-product portfolios or complex therapeutic areas</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="package4" className="space-y-6">
              <div className="bg-gradient-to-br from-[#0033A0]/5 to-white rounded-2xl p-8 border-2 border-[#0033A0]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-[#0033A0] text-2xl mb-2">Pharmacovigilance Program</h3>
                    <p className="text-gray-600">For manufacturers needing standalone pharmacovigilance support</p>
                  </div>
                  <div className="bg-[#00A0DC] text-white px-4 py-2 rounded-lg">
                    <span className="text-sm">Package 4</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Pharmacovigilance system setup</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Adverse event monitoring and reporting</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Regulatory authority liaison</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Safety database management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Healthcare provider safety training</span>
                  </div>
                </div>

                <div className="bg-white/50 rounded-lg p-4 border border-[#0033A0]/20">
                  <p className="text-sm text-gray-700"><strong>Ideal for:</strong> Products with specific safety monitoring requirements</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="package5" className="space-y-6">
              <div className="bg-gradient-to-br from-[#0033A0]/5 to-white rounded-2xl p-8 border-2 border-[#0033A0]">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-[#0033A0] text-2xl mb-2">Healthcare Provider Education</h3>
                    <p className="text-gray-600">For healthcare organizations seeking medical education programs</p>
                  </div>
                  <div className="bg-[#00A0DC] text-white px-4 py-2 rounded-lg">
                    <span className="text-sm">Package 5</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Customized CME program development</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Therapeutic area training workshops</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Medication safety education</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Case-based learning sessions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00A0DC] flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Accreditation support</span>
                  </div>
                </div>

                <div className="bg-white/50 rounded-lg p-4 border border-[#0033A0]/20">
                  <p className="text-sm text-gray-700"><strong>Ideal for:</strong> Hospitals, clinics, and professional associations</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Problem-Solution-Result Cards */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#00A0DC]/10 rounded-full mb-6">
              <span className="text-sm text-[#0033A0]">Key Benefits</span>
            </div>
            <h2 className="text-[#0033A0] mb-4 text-3xl md:text-4xl">How We Create Value</h2>
            <p className="leading-relaxed max-w-3xl mx-auto text-gray-700">
              Solving critical medical affairs challenges across Africa
            </p>
          </div>

          <div className="space-y-6">
            {/* Benefit 1 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="grid md:grid-cols-3 divide-x divide-gray-200">
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <p className="text-xs text-red-700 mb-1">Challenge</p>
                      <p className="text-gray-900 leading-relaxed">
                        <strong className="text-red-700">Medication Safety Risks:</strong> Medication errors and adverse drug reactions compromise patient safety and healthcare outcomes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-blue-50/30">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-[#0033A0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#0033A0] mb-1">Our Solution</p>
                      <p className="text-gray-900 leading-relaxed">
                        Timely access to accurate medical information, comprehensive pharmacovigilance support, and evidence-based education on medication safety
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-green-700 mb-1">Impact</p>
                      <p className="text-gray-900 leading-relaxed">
                        <strong className="text-green-700">Improved prescribing practices</strong>, earlier detection of adverse events, and better patient outcomes through informed clinical decision-making
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="grid md:grid-cols-3 divide-x divide-gray-200">
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <p className="text-xs text-red-700 mb-1">Challenge</p>
                      <p className="text-gray-900 leading-relaxed">
                        <strong className="text-red-700">Clinical Evidence Gap:</strong> Healthcare providers need access to current clinical evidence and expert guidance to deliver optimal care
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-blue-50/30">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-[#0033A0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#0033A0] mb-1">Our Solution</p>
                      <p className="text-gray-900 leading-relaxed">
                        MSLs and medical information specialists deliver peer-reviewed scientific data, clinical trial results, and therapeutic guidelines directly to healthcare providers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-green-700 mb-1">Impact</p>
                      <p className="text-gray-900 leading-relaxed">
                        <strong className="text-green-700">Evidence-based treatment decisions</strong>, improved therapeutic outcomes, and enhanced confidence in medication use
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="grid md:grid-cols-3 divide-x divide-gray-200">
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <p className="text-xs text-red-700 mb-1">Challenge</p>
                      <p className="text-gray-900 leading-relaxed">
                        <strong className="text-red-700">Regulatory Compliance Complexity:</strong> Pharmaceutical manufacturers must meet stringent pharmacovigilance and medical information requirements across African markets
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-blue-50/30">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-[#0033A0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#0033A0] mb-1">Our Solution</p>
                      <p className="text-gray-900 leading-relaxed">
                        We establish and maintain compliant pharmacovigilance systems, ensure timely regulatory reporting, and provide local medical affairs expertise
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-green-700 mb-1">Impact</p>
                      <p className="text-gray-900 leading-relaxed">
                        <strong className="text-green-700">Full regulatory compliance</strong> with Kenya PPB, Ghana FDA, and other authorities, reducing risk and supporting successful market access
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="grid md:grid-cols-3 divide-x divide-gray-200">
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✗</span>
                    </div>
                    <div>
                      <p className="text-xs text-red-700 mb-1">Challenge</p>
                      <p className="text-gray-900 leading-relaxed">
                        <strong className="text-red-700">Infrastructure Gap:</strong> International manufacturers lack local medical affairs infrastructure and understanding of African healthcare contexts
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-blue-50/30">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-[#0033A0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-[#0033A0] mb-1">Our Solution</p>
                      <p className="text-gray-900 leading-relaxed">
                        Kenya and Ghana-based medical affairs teams provide on-the-ground support, cultural competence, and deep understanding of local healthcare systems
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-green-700 mb-1">Impact</p>
                      <p className="text-gray-900 leading-relaxed">
                        <strong className="text-green-700">Effective scientific engagement</strong> tailored to African healthcare realities, stronger relationships with local healthcare providers, and sustainable medical affairs operations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/30 to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#00A0DC]/10 rounded-full mb-6">
              <span className="text-sm text-[#0033A0]">Common Questions</span>
            </div>
            <h2 className="text-[#0033A0] mb-4 text-3xl md:text-4xl">Frequently Asked Questions</h2>
            <p className="leading-relaxed text-gray-700">
              Everything you need to know about our medical affairs services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="faq1" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC] hover:no-underline">
                What is the difference between an MSL and a pharmaceutical sales representative?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Medical Science Liaisons (MSLs) are scientific experts who provide evidence-based medical information and education. Unlike sales representatives, <strong>MSLs do not promote products, have no sales targets, and focus exclusively on scientific dialogue</strong>. MSLs typically hold advanced degrees (MD, PharmD, PhD) and engage healthcare providers as scientific peers, discussing clinical data, mechanisms of action, and therapeutic strategies based purely on evidence.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC] hover:no-underline">
                How quickly can you respond to medical information inquiries?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                We provide <strong>initial responses to routine medical information inquiries within 24 hours</strong>. Complex inquiries requiring extensive literature review or expert consultation may take 3-5 business days. Urgent safety-related inquiries receive same-day response. All responses are thoroughly referenced and evidence-based.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq3" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC] hover:no-underline">
                Do you provide medical affairs services for multiple manufacturers?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Yes. Our <strong>multi-manufacturer approach</strong> allows us to provide unbiased medical information and scientific support across therapeutic areas. This ensures healthcare providers receive objective, evidence-based information focused on patient outcomes rather than product promotion. We maintain strict confidentiality and information barriers between different manufacturer clients.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq4" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC] hover:no-underline">
                What therapeutic areas do you cover?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                We provide medical affairs support across <strong>all major therapeutic areas</strong>, with particular expertise in infectious diseases (HIV, TB, malaria), non-communicable diseases (diabetes, hypertension, cardiovascular), oncology, maternal-child health, and respiratory diseases. Our team includes specialists with deep therapeutic area knowledge and clinical experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq5" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC] hover:no-underline">
                How do you ensure pharmacovigilance compliance across different African countries?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                We maintain <strong>up-to-date knowledge of pharmacovigilance requirements</strong> for Kenya PPB, Ghana FDA, and other African regulatory authorities. Our pharmacovigilance specialists ensure all adverse event reporting meets local timelines and format requirements. We provide regular compliance audits, training, and maintain direct relationships with regulatory authorities to ensure ongoing compliance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq6" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC] hover:no-underline">
                Can you develop and deliver Continuing Medical Education (CME) programs?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Yes. We design and deliver <strong>accredited CME programs</strong> in collaboration with medical associations, universities, and accrediting bodies across Africa. Our programs are evidence-based, unbiased, and focused on practical clinical application. We handle all aspects of program development, accreditation, delivery, and evaluation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq7" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC] hover:no-underline">
                How does Medical Services integrate with your other service offerings?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Medical Services integrates seamlessly with our <strong>Regulatory Services</strong> (pharmacovigilance reporting to regulatory authorities), <strong>Quality Assurance</strong> (post-market surveillance), <strong>Market Access Services</strong> (prescriber education for reimbursement programs), and <strong>Compliance & Training</strong> (pharmacovigilance training). This integration provides manufacturers with comprehensive pharmaceutical support across the product lifecycle, all delivered through one trusted partner.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq8" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC] hover:no-underline">
                What qualifications do your MSLs and medical information specialists have?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Our medical affairs team includes <strong>PharmDs, MDs, PhDs, and Master's-level scientists</strong> with clinical or research backgrounds. All team members undergo rigorous therapeutic area training, medical information response training, and regulatory compliance training. Many have prior clinical practice experience and all maintain ongoing professional development through medical literature review and conference attendance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq9" className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-[#0033A0] hover:text-[#00A0DC] hover:no-underline">
                Can you support clinical trial activities and investigator-initiated research?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Yes. Our MSLs can <strong>facilitate investigator-initiated research</strong>, support clinical trial site identification, and provide scientific liaison between sponsors and investigators. We help identify qualified investigators, support protocol development, and maintain scientific relationships throughout the trial lifecycle. We work closely with our Regulatory Services team to ensure all activities meet local regulatory requirements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#00A0DC]/10 rounded-full mb-6">
              <span className="text-sm text-[#0033A0]">Why Pacem Health</span>
            </div>
            <h2 className="text-[#0033A0] mb-4 text-3xl md:text-4xl">Why Choose Pacem Medical Services</h2>
            <p className="leading-relaxed max-w-3xl mx-auto text-gray-700">
              Scientific excellence and local expertise for better patient outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-[#0033A0] text-xl mb-4">Multi-Manufacturer Independence</h3>
              <p className="text-gray-700 leading-relaxed">
                Unlike manufacturer-employed medical affairs teams, we provide <strong>unbiased scientific support across multiple products and therapeutic areas</strong>, ensuring healthcare providers receive objective, patient-centered information focused on optimal outcomes rather than product promotion.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-[#0033A0] text-xl mb-4">Local Presence & Understanding</h3>
              <p className="text-gray-700 leading-relaxed">
                Our <strong>Kenya and Ghana-based teams</strong> understand African healthcare contexts, regulatory requirements, and cultural considerations, enabling effective scientific engagement tailored to local realities. We're not outsourcing from Europe or North America—we're your local medical affairs partner.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-[#0033A0] text-xl mb-4">Integrated Service Delivery</h3>
              <p className="text-gray-700 leading-relaxed">
                Medical Services integrates seamlessly with <strong>Regulatory Services</strong> (pharmacovigilance reporting), <strong>Quality Assurance</strong> (post-market surveillance), <strong>Market Access Services</strong> (prescriber education), and <strong>Compliance & Training</strong> (PV training), providing manufacturers with comprehensive pharmaceutical support across the product lifecycle.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#00A0DC] transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0033A0] to-[#00A0DC] flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-[#0033A0] text-xl mb-4">Public Health Focus</h3>
              <p className="text-gray-700 leading-relaxed">
                We view medical affairs as a <strong>public health function, not just a commercial service</strong>. Our mission is to improve medication safety and therapeutic outcomes across Africa through scientific excellence and evidence-based practice. When healthcare providers make better-informed decisions, patients benefit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Get Started */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0033A0] to-[#0033A0]/90 text-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Headline & Value Prop */}
            <div>
              <h2 className="text-3xl md:text-4xl mb-4">
                Ready to Enhance Medical Information Support?
              </h2>
              <p className="text-lg leading-relaxed opacity-95 mb-6">
                Whether you're a pharmaceutical manufacturer entering African markets or a healthcare organization seeking evidence-based medical education—our medical affairs experts are ready to support your scientific communication, education, and pharmacovigilance needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A0DC] flex-shrink-0 mt-1" />
                  <p className="leading-relaxed">Free medical affairs needs assessment</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A0DC] flex-shrink-0 mt-1" />
                  <p className="leading-relaxed">Customized service package recommendations</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00A0DC] flex-shrink-0 mt-1" />
                  <p className="leading-relaxed">Regulatory compliance roadmap for African markets</p>
                </div>
              </div>
            </div>

            {/* Right Column - CTA Buttons */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl mb-4">Get Started Today</h3>
              <p className="leading-relaxed opacity-90 mb-6">
                Schedule a free consultation with our medical affairs experts and discover how we can support your scientific excellence and patient safety goals.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-[#00A0DC] text-white hover:bg-[#00A0DC]/90 border-0"
                >
                  Request Medical Affairs Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full border-2 border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Download Medical Affairs Brochure
                </Button>
                
                <div className="pt-4 border-t border-white/20 text-center">
                  <p className="text-sm opacity-90">
                    Questions? Email us at <a href="mailto:medical-affairs@pacemhealth.com" className="underline hover:text-[#00A0DC]">medical-affairs@pacemhealth.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
