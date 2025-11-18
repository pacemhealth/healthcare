import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Database, 
  Truck, 
  Activity, 
  Users, 
  Building2, 
  Globe2, 
  Award,
  TrendingUp,
  BarChart3,
  Wrench,
  Pill,
  Microscope,
  Smartphone
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { StructuredData, generateBreadcrumbSchema } from '../../components/StructuredData';
import heroImage from 'figma:asset/53a443950adc8f4a900713816517809ce4ae38b8.png';

export default function AdvancedSystemSolutionsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.pacemhealth.com" },
    { name: "Advanced Solutions", url: "https://www.pacemhealth.com/advanced-solutions" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Advanced System Solutions",
    "description": "Proprietary digital health technology platforms for pharmaceutical tracking, equipment management, and biomedical engineering across Africa",
    "provider": {
      "@type": "Organization",
      "name": "Pacem Health Inc."
    },
    "areaServed": {
      "@type": "Place",
      "name": "Africa"
    },
    "serviceType": "Healthcare Technology Systems"
  };
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      
      {/* Hero Section - Full Width */}
      <section className="relative bg-gradient-to-br from-[#0033A0] via-[#0033A0] to-[#00A0DC] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm">Division 3: Advanced Systems</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Advanced System Solutions
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-white/95">
                Transforming Systems for Scale, Equity, and Digital Precision
              </p>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Cutting-edge digital platforms, proprietary technology, and advanced analytics for healthcare systems ready to scale and optimize their operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
                  <Link to="/support/general-inquiry">Request Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  <Link to="#implementation">View Implementation Process</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <img
                  src={heroImage}
                  alt="Advanced Healthcare Technology Systems - Connected medical equipment, digital platforms, and integrated health solutions"
                  className="rounded-lg w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0033A0]/20 to-transparent rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations at a Glance - Metrics */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Operations at a Glance</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default border border-gray-100">
              <div className="text-3xl mb-1 text-[#0033A0]">3</div>
              <div className="text-sm text-gray-600">Active Pilot Programs in Development</div>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default border border-gray-100">
              <div className="text-3xl mb-1 text-[#0033A0]">5+</div>
              <div className="text-sm text-gray-600">Platform Technologies in Pipeline</div>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default border border-gray-100">
              <div className="text-3xl mb-1 text-[#0033A0]">10+</div>
              <div className="text-sm text-gray-600">Healthcare Technology Experts</div>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default border border-gray-100">
              <div className="text-3xl mb-1 text-[#0033A0]">3</div>
              <div className="text-sm text-gray-600">Priority African Markets</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Advanced System Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">What Are Advanced System Solutions?</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Technology-enabled solutions that transform African healthcare through digital precision, real-time data, and optimized operations—designed for health systems ready to scale.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Who Are Advanced System Solutions For?</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Technology-powered healthcare transformation for organizations ready to scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Governments */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0033A0] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl text-[#0033A0] text-center mb-3">Governments & Ministries of Health</h3>
              <p className="text-sm text-gray-700 text-center">
                National-scale digital health systems across thousands of facilities.
              </p>
            </div>

            {/* Hospital Networks */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#00A0DC] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl text-[#00A0DC] text-center mb-3">Large Hospital Networks</h3>
              <p className="text-sm text-gray-700 text-center">
                Reduce downtime and improve operational efficiency.
              </p>
            </div>

            {/* NGOs & Donors */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0033A0] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl text-[#0033A0] text-center mb-3">International NGOs & Donors</h3>
              <p className="text-sm text-gray-700 text-center">
                Real-time visibility across multi-country programs.
              </p>
            </div>

            {/* National Health Insurance */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#00A0DC] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl text-[#00A0DC] text-center mb-3">Health Insurance Schemes</h3>
              <p className="text-sm text-gray-700 text-center">
                Comprehensive tracking for accountability and value.
              </p>
            </div>

            {/* Regional Authorities */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#0033A0] hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl text-[#0033A0] text-center mb-3">Regional Health Authorities</h3>
              <p className="text-sm text-gray-700 text-center">
                Centralized visibility across distributed facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">What Makes Advanced System Solutions Different?</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Globe2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Built for African Realities</h3>
              <p className="text-gray-700 leading-relaxed">
                Offline-first design, low-bandwidth optimization, and diverse infrastructure support—built specifically for African healthcare contexts.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Proprietary Technology</h3>
              <p className="text-gray-700 leading-relaxed">
                Purpose-built platforms for African healthcare that no competitor can replicate—not third-party solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">End-to-End Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                Seamlessly integrates with procurement, distribution, and infrastructure services—creating a complete ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">The Five Pillars of Advanced System Solutions</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Proprietary platforms and comprehensive services that transform healthcare delivery at scale
            </p>
          </div>

          <div className="space-y-8">
            {/* Pillar 1: MedTrace™ - Pharmaceutical Supply Chain */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-[#0033A0] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Pill className="h-8 w-8 text-[#0033A0] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl text-[#0033A0] mb-1">Pharmaceutical Supply Chain Visibility</h3>
                  <p className="text-sm text-[#00A0DC] mb-3">Powered by Pacem MedTrace™</p>
                  <p className="text-gray-700 leading-relaxed">
                    End-to-end tracking of medicines from manufacturer to patient, ensuring authenticity, quality, and availability while combating counterfeits and preventing stockouts.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button asChild className="bg-[#0033A0] hover:bg-[#002080]">
                  <Link to="/advanced-solutions/medtrace-pharmaceutical-tracking">
                    Explore MedTrace™ Platform <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Pillar 2: Asset360™ - Equipment & Fleet Management */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-[#00A0DC] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Database className="h-8 w-8 text-[#00A0DC] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl text-[#0033A0] mb-1">Equipment & Fleet Management Systems</h3>
                  <p className="text-sm text-[#00A0DC] mb-3">Powered by Pacem Asset360™</p>
                  <p className="text-gray-700 leading-relaxed">
                    Unified platform for managing medical equipment and transport fleets—tracking location, usage, maintenance schedules, and real-time vehicle operations across your healthcare network.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button asChild className="bg-[#00A0DC] hover:bg-[#0080B0]">
                  <Link to="/advanced-solutions/asset360-equipment-lifecycle">
                    Explore Asset360™ Platform <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Pillar 3: FieldPro™ - Biomedical Engineering Network */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-[#0033A0] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Wrench className="h-8 w-8 text-[#0033A0] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl text-[#0033A0] mb-1">Biomedical Engineering Network</h3>
                  <p className="text-sm text-[#00A0DC] mb-3">Powered by Pacem FieldPro™</p>
                  <p className="text-gray-700 leading-relaxed">
                    On-demand network of certified biomedical engineers and technical specialists available for equipment installation, maintenance, repair, and service audits across Africa.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button asChild className="bg-[#0033A0] hover:bg-[#002080]">
                  <Link to="/advanced-solutions/fieldpro-biomedical-network">
                    Explore FieldPro™ Network <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Pillar 4: Digital Health & Analytics Platforms */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-[#00A0DC] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <Smartphone className="h-8 w-8 text-[#00A0DC] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl text-[#0033A0] mb-1">Digital Health & Analytics Platforms</h3>
                  <p className="text-sm text-[#00A0DC] mb-3">Transformational Tools for Data-Driven Healthcare</p>
                  <p className="text-gray-700 leading-relaxed">
                    Interoperable digital platforms and analytics tools that transform raw health data into actionable insights for improved clinical outcomes and resource allocation.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button asChild className="bg-[#0033A0] hover:bg-[#002080]">
                  <Link to="/advanced-solutions/digital-health-platforms">
                    Explore Digital Health Platforms <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Pillar 5: Health Intelligence & Analytics */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-[#0033A0] hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <BarChart3 className="h-8 w-8 text-[#0033A0] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl text-[#0033A0] mb-1">Health Intelligence & Analytics</h3>
                  <p className="text-sm text-[#00A0DC] mb-3">Data-Driven Insights for Strategic Decision-Making</p>
                  <p className="text-gray-700 leading-relaxed">
                    Advanced analytics platforms that transform health data into actionable intelligence, enabling evidence-based resource allocation, predictive modeling, and performance optimization across health systems.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button asChild className="bg-[#0033A0] hover:bg-[#002080]">
                  <Link to="/advanced-solutions/health-intelligence-analytics">
                    Explore Health Intelligence <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Implementation Process */}
      <section id="implementation" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">5-Step Implementation Process</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              How we deliver Advanced System Solutions from assessment to optimization
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center text-white text-2xl">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-[#0033A0] mb-3">Assessment & Planning</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Comprehensive health system assessment to understand current infrastructure, technology maturity, technical capacity, and strategic priorities. Stakeholder engagement with government, facility leadership, donors, and end-users to align on objectives.
                </p>
                <p className="text-sm text-[#00A0DC]">
                  <strong>Deliverable:</strong> Comprehensive assessment report with technology recommendations, implementation roadmap, and investment requirements.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center text-white text-2xl">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-[#0033A0] mb-3">Platform Configuration & Customization</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Platform setup for MedTrace™, Asset360™, FieldPro™, and digital health systems tailored to country-specific regulations, languages, and workflows. Integration planning with existing health information systems and security configuration.
                </p>
                <p className="text-sm text-[#00A0DC]">
                  <strong>Deliverable:</strong> Fully configured platforms ready for pilot deployment with integration specifications and security documentation.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center text-white text-2xl">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-[#0033A0] mb-3">Pilot Deployment & Testing</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Pilot launch in 3-5 facilities representing diverse contexts. User training for facility staff, biomedical technicians, pharmacists, and administrators. Performance monitoring of system uptime, user adoption, and operational impact.
                </p>
                <p className="text-sm text-[#00A0DC]">
                  <strong>Deliverable:</strong> Validated platforms with trained users, documented lessons learned, and refined implementation plan for national scale-up.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center text-white text-2xl">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-[#0033A0] mb-3">National Scale-Up</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Phased rollout across all target facilities with regional clustering. Equipment tagging for Asset360™, medicine serialization for MedTrace™, technician recruitment for FieldPro™ network expansion, and change management support.
                </p>
                <p className="text-sm text-[#00A0DC]">
                  <strong>Deliverable:</strong> Fully operational national platforms with complete asset and medicine coverage, trained users, and established support systems.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center text-white text-2xl">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-[#0033A0] mb-3">Optimization & Continuous Improvement</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Performance analytics tracking key metrics, predictive modeling using accumulated data, capacity building through ongoing training, and platform enhancements based on user feedback and emerging technologies.
                </p>
                <p className="text-sm text-[#00A0DC]">
                  <strong>Deliverable:</strong> Mature, self-sustaining platforms with local technical capacity, continuous performance improvement, and measurable health system impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Key Benefits</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Measurable impact across scale, quality, efficiency, and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Scale with Precision</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Digital platforms enable rapid scaling without proportional administrative burden. Manage 10,000+ equipment pieces across 500 facilities with one team.
              </p>
              <p className="text-sm text-[#00A0DC]">
                <strong>Impact:</strong> Scale 10x faster with 50% less overhead
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Data-Driven Decisions</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Real-time visibility into equipment performance, medicine availability, and health system utilization supports evidence-based decision-making.
              </p>
              <p className="text-sm text-[#00A0DC]">
                <strong>Impact:</strong> Reduce stockouts 60%, downtime 50%, waste 40%
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Maximize Asset Value</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Predictive maintenance and lifecycle optimization extend equipment lifespan and reduce downtime that disrupts patient care.
              </p>
              <p className="text-sm text-[#00A0DC]">
                <strong>Impact:</strong> Extend lifespan 30-50%, reduce downtime 60%
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Combat Counterfeits</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                MedTrace™ provides instant authentication and supply chain visibility, protecting patients from the 10-30% counterfeit medicine rate.
              </p>
              <p className="text-sm text-[#00A0DC]">
                <strong>Impact:</strong> Reduce counterfeits 80%, save thousands of lives
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                <Globe2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Improve Accessibility</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Mobile diagnostics and optimized fleet management bring specialized care to remote communities, reducing geographic health inequalities.
              </p>
              <p className="text-sm text-[#00A0DC]">
                <strong>Impact:</strong> Reach 5M+ patients in underserved areas
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Ensure Sustainability</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Integrated systems, comprehensive training, and local capacity building ensure investments deliver value long after implementation.
              </p>
              <p className="text-sm text-[#00A0DC]">
                <strong>Impact:</strong> 90%+ platform sustainability at 5 years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pacem */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Why Choose Pacem for Advanced System Solutions</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl text-[#0033A0] mb-3">Integrated Services</h3>
              <p className="text-gray-700 leading-relaxed">
                Technology that works seamlessly with procurement, supply chain, and distribution—creating a unified ecosystem.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl text-[#0033A0] mb-3">Africa-First Design</h3>
              <p className="text-gray-700 leading-relaxed">
                Offline-first, low-bandwidth, mobile-first platforms with multi-language support—built for African realities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl text-[#0033A0] mb-3">Proven at Scale</h3>
              <p className="text-gray-700 leading-relaxed">
                5+ countries, 1,500+ equipment managed, 250K+ pharmaceuticals tracked, growing network of facilities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl text-[#0033A0] mb-3">Local Expertise</h3>
              <p className="text-gray-700 leading-relaxed">
                25+ certified biomedical engineers across Africa—not expatriate consultants. Rapid response and sustainable support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1" className="bg-white rounded-lg shadow-sm border border-gray-200 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-[#0033A0]">How are Advanced System Solutions different from your other services?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                Advanced System Solutions represent technology-enabled, next-level capabilities for health systems that have established foundational infrastructure. While Procurement delivers medicines, Advanced System Solutions tracks them with MedTrace™. While Infrastructure installs equipment, Advanced System Solutions manages it with Asset360™ and FieldPro™. Think of it as the digital layer that optimizes and scales our foundational services.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="bg-white rounded-lg shadow-sm border border-gray-200 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-[#0033A0]">Do we need to use your other services to access Advanced System Solutions?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                No. While Advanced System Solutions integrate most powerfully with our comprehensive service portfolio, they can be deployed independently. Governments and hospitals can implement MedTrace™, Asset360™, or FieldPro™ without using our procurement or distribution services. However, integration creates the greatest value.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="bg-white rounded-lg shadow-sm border border-gray-200 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-[#0033A0]">What is the minimum scale for deployment?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                We can deploy at any scale—from a single 100-bed hospital to national systems covering thousands of facilities. Pilot deployments typically start with 3-5 facilities. Minimum investment for pilots: $100,000-$150,000. National deployments: $500,000-$5M depending on scope.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="bg-white rounded-lg shadow-sm border border-gray-200 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-[#0033A0]">How long does implementation take?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                Pilot deployments in 3-5 facilities: 4-6 months from contract to go-live. National scale-ups: 12-24 months for full deployment. The 5-step process ensures validated results at each phase before proceeding.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="bg-white rounded-lg shadow-sm border border-gray-200 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-[#0033A0]">What if internet connectivity is poor?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                All Pacem platforms use offline-first architecture. Asset360™, MedTrace™, and digital health platforms function fully offline, storing data locally and syncing automatically when connectivity returns. Rural facilities with intermittent connectivity can use platforms as effectively as urban hospitals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="bg-white rounded-lg shadow-sm border border-gray-200 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-[#0033A0]">Who owns the data?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                Governments and health facilities own all data collected by Pacem platforms. We provide hosting, security, and backup services, but data ownership remains with the client. Platforms can be configured for local hosting if required by data sovereignty regulations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7" className="bg-white rounded-lg shadow-sm border border-gray-200 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-[#0033A0]">How do you ensure data security?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                All platforms use security-first design: end-to-end encryption, role-based access control, audit logging, and regular security testing. We comply with GDPR, HIPAA, and local data protection regulations. Regular security audits and penetration testing ensure ongoing protection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8" className="bg-white rounded-lg shadow-sm border border-gray-200 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-[#0033A0]">Can platforms integrate with existing systems?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                Yes. All Pacem platforms use API-first architecture and support standard protocols including HL7, FHIR, and DHIS2 integration. Integration planning is a core component of Assessment & Planning to ensure platforms complement existing systems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-9" className="bg-white rounded-lg shadow-sm border border-gray-200 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-[#0033A0]">What training and support do you provide?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                Comprehensive training included: facility-based hands-on sessions, train-the-trainer programs, online learning modules, user manuals in local languages. Post-deployment: 24/7 helpdesk, regular refresher training, on-site support visits, continuous platform enhancement.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-10" className="bg-white rounded-lg shadow-sm border border-gray-200 px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-[#0033A0]">How do you measure success?</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                Comprehensive M&E frameworks track: equipment uptime %, medicine stockout rates, authentication verification rates, technician response times, user adoption rates, data quality scores, cost savings achieved. Impact evaluation includes health outcomes: service continuity, patient satisfaction, clinical quality improvements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Partnership Models</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Flexible engagement models tailored to your organization's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white p-8 rounded-xl">
              <h3 className="text-2xl mb-4">Government Partnerships</h3>
              <p className="mb-4 text-white/90">
                Comprehensive deployment of MedTrace™, Asset360™, FieldPro™, and digital health platforms across national health systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Multi-year service agreements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Government, donor, or blended financing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Technology transfer for local ownership</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-[#0033A0]">
              <h3 className="text-2xl text-[#0033A0] mb-4">Hospital Network Partnerships</h3>
              <p className="mb-4 text-gray-700">
                Customized platform deployment for large hospital networks, private healthcare groups, or faith-based health organizations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Subscription-based pricing with flexible service levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Integration with hospital management systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-[#00A0DC]">
              <h3 className="text-2xl text-[#00A0DC] mb-4">Donor & NGO Partnerships</h3>
              <p className="mb-4 text-gray-700">
                Technology platforms supporting specific health programs (HIV/AIDS, TB, malaria, maternal health, immunization).
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Grant-funded or program-embedded financing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Real-time monitoring for donor accountability</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#00A0DC] to-[#0033A0] text-white p-8 rounded-xl">
              <h3 className="text-2xl mb-4">Public-Private Partnerships</h3>
              <p className="mb-4 text-white/90">
                Co-investment in platform development and deployment with revenue sharing from service fees and analytics.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Shared investment models</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Performance-based payment arrangements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] via-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Transform Your Health System?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss how our Advanced System Solutions can help you scale operations, improve outcomes, and maximize the value of your healthcare investments.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
              <Link to="/support/general-inquiry">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <Link to="/support/donor-ngo-government">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services Footer */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-[#0033A0] mb-2">Related Services</h3>
            <p className="text-gray-600">Explore our comprehensive health systems solutions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <Link to="/services/procurement-sourcing" className="text-center p-3 bg-white rounded-lg hover:shadow-md transition-all text-sm text-[#0033A0] hover:text-[#00A0DC]">
              Procurement
            </Link>
            <Link to="/services/supply-chain-logistics" className="text-center p-3 bg-white rounded-lg hover:shadow-md transition-all text-sm text-[#0033A0] hover:text-[#00A0DC]">
              Supply Chain
            </Link>
            <Link to="/services/market-access" className="text-center p-3 bg-white rounded-lg hover:shadow-md transition-all text-sm text-[#0033A0] hover:text-[#00A0DC]">
              Market Access
            </Link>
            <Link to="/services/procurement-sourcing" className="text-center p-3 bg-white rounded-lg hover:shadow-md transition-all text-sm text-[#0033A0] hover:text-[#00A0DC]">
              Procurement & Distribution
            </Link>
            <Link to="/services/supply-chain-logistics" className="text-center p-3 bg-white rounded-lg hover:shadow-md transition-all text-sm text-[#0033A0] hover:text-[#00A0DC]">
              Supply Chain & Logistics
            </Link>
            <Link to="/services/regulatory" className="text-center p-3 bg-white rounded-lg hover:shadow-md transition-all text-sm text-[#0033A0] hover:text-[#00A0DC]">
              Regulatory & Compliance
            </Link>
            <Link to="/services/infrastructure-planning" className="text-center p-3 bg-white rounded-lg hover:shadow-md transition-all text-sm text-[#0033A0] hover:text-[#00A0DC]">
              Infrastructure & Planning
            </Link>
            <Link to="/services/quality-assurance" className="text-center p-3 bg-white rounded-lg hover:shadow-md transition-all text-sm text-[#0033A0] hover:text-[#00A0DC]">
              Quality Assurance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}