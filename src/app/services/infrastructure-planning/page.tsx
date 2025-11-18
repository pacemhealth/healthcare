import { useState } from 'react';
import { CheckCircle, ArrowRight, Building2, Ruler, Cog, Users, Globe, TrendingUp, Layers, Shield, Target, Wrench, Package, BarChart3, Heart, Lightbulb, Clock, DollarSign, Award, FileCheck, Truck, Zap, AlertTriangle } from 'lucide-react';
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
import heroImage from 'figma:asset/3af56b897040ecbbb4f78c8e2f306d96207a3e71.png';

export default function InfrastructurePlanningPage() {
  const [activeTab, setActiveTab] = useState('facilities');

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Healthcare Infrastructure Planning",
    "description": "Comprehensive facility design, equipment planning, and infrastructure development for healthcare facilities across Africa. From site assessment to operational readiness.",
    "provider": {"@type": "Organization", "name": "Pacem Health Inc."},
    "areaServed": {"@type": "Place", "name": "Africa"},
    "serviceType": "Healthcare Infrastructure Planning"
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Healthcare Infrastructure Planning | Facility Design & Development Africa | Pacem Health"
        description="End-to-end healthcare facility planning and development services for Africa. Site assessment, architectural design, equipment planning, cold chain systems, and operational readiness. Build modern, WHO-compliant healthcare infrastructure."
        keywords={[
          'healthcare facility planning Africa',
          'hospital design Africa',
          'medical infrastructure development',
          'healthcare facility construction',
          'pharmaceutical warehouse design',
          'cold chain infrastructure',
          'healthcare facility equipment planning',
          'hospital operational readiness',
          'WHO compliant facility design'
        ]}
        structuredData={serviceSchema}
      />
      {/* Hero Section - Full Width with Overlay */}
      <section className="relative bg-[#0033A0] text-white overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Healthcare infrastructure architectural site plan showing facility design and layout"
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
                  <pattern id="diagonal-lines-infra" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.5"/>
                    <line x1="0" y1="50" x2="50" y2="100" stroke="white" strokeWidth="0.5"/>
                    <line x1="50" y1="0" x2="100" y2="50" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonal-lines-infra)"/>
              </svg>
            </div>

            {/* Text Content - Positioned above overlays */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Infrastructure & Planning
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Designing and Building the Future of African Healthcare
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-[#0033A0] hover:bg-gray-100">
                Schedule Infrastructure Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Infrastructure Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Our Infrastructure Philosophy</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-[#0033A0]">From Buildings to Health Systems</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Strong health systems are built on a foundation of robust infrastructure and strategic planning. Pacem Health provides comprehensive services to help <span className="text-[#0033A0]">government health systems, private hospital networks, faith-based organizations, healthcare investors, and development partners</span> design, build, and manage healthcare facilities and systems across Africa. From rural primary care clinics to private specialty hospitals to national reference laboratories, we bring the expertise, partnerships, and project management skills to turn ambitious health goals into reality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Successful healthcare infrastructure requires more than physical structures—it demands integration with the broader health system context to ensure facilities are well-utilized, properly maintained, and aligned with community needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Pacem Health takes a <span className="text-[#0033A0]">health systems approach</span> to infrastructure development. We start by understanding the population you serve, the health challenges you face, and the resources you have available. We then design infrastructure solutions that are not only clinically effective but also financially sustainable, operationally efficient, and integrated into the broader health system. Our goal is not just to build facilities, but to strengthen the entire ecosystem of care delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve - Public & Private Sectors */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Who We Serve</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Trusted infrastructure partner to public health systems and private healthcare organizations across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Public Sector */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#0033A0]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0]">Public Sector</h3>
                  <p className="text-sm text-gray-600">Government & Institutional Partners</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <div className="text-gray-700">
                    <strong className="text-[#0033A0]">Ministries of Health:</strong> National and regional government health departments
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <div className="text-gray-700">
                    <strong className="text-[#0033A0]">Development Banks:</strong> African Development Bank (AfDB), World Bank, regional financial institutions
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <div className="text-gray-700">
                    <strong className="text-[#0033A0]">Multilateral Agencies:</strong> WHO, UNICEF, UNFPA, and UN health programs
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <div className="text-gray-700">
                    <strong className="text-[#0033A0]">Bilateral Donors:</strong> USAID, DFID, GIZ, and government aid agencies
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <div className="text-gray-700">
                    <strong className="text-[#0033A0]">Public Health Institutions:</strong> National teaching hospitals, research institutes, public health networks
                  </div>
                </div>
              </div>
            </div>

            {/* Private Sector */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#00A0DC]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#00A0DC] rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#00A0DC]">Private Sector</h3>
                  <p className="text-sm text-gray-600">Healthcare Organizations & Investors</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <div className="text-gray-700">
                    <strong className="text-[#00A0DC]">Private Hospital Networks:</strong> Multi-site hospital groups, specialty care centers, ambulatory facilities
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <div className="text-gray-700">
                    <strong className="text-[#00A0DC]">Healthcare Investment Groups:</strong> Private equity healthcare funds, impact investors, venture capital
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <div className="text-gray-700">
                    <strong className="text-[#00A0DC]">Faith-Based Organizations:</strong> Mission hospitals, church health systems, religious healthcare networks
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <div className="text-gray-700">
                    <strong className="text-[#00A0DC]">Corporate Health Systems:</strong> Employer-based clinics, occupational health facilities, corporate wellness centers
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <div className="text-gray-700">
                    <strong className="text-[#00A0DC]">International NGOs:</strong> Global health NGOs, humanitarian organizations, development implementers
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#0033A0] max-w-4xl mx-auto">
            <p className="text-center text-gray-700 leading-relaxed">
              <strong className="text-[#0033A0]">Our Dual-Sector Expertise:</strong> Whether you're a Ministry of Health planning a national laboratory network or a private hospital group expanding specialty services, we bring the same rigor, quality standards, and health systems thinking to every infrastructure engagement—ensuring sustainable, high-impact healthcare delivery across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Operations at a Glance - Metrics */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Infrastructure Operations at a Glance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven infrastructure development delivering sustainable healthcare systems across Africa
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">15+</div>
              <div className="text-sm text-gray-600 leading-relaxed">Healthcare Facilities<br />in Active Pipeline</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">5</div>
              <div className="text-sm text-gray-600 leading-relaxed">Target African Countries<br />(Kenya, Ghana, Nigeria + 2)</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">100%</div>
              <div className="text-sm text-gray-600 leading-relaxed">Commitment to On-Time<br />& On-Budget Delivery</div>
            </div>

            <div className="group text-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#00A0DC]">
              <div className="text-5xl mb-3 text-[#0033A0] group-hover:text-[#00A0DC] transition-colors">ISO</div>
              <div className="text-sm text-gray-600 leading-relaxed">International Standards<br />Compliance (Target)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Health System Planning */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Strategic Health System Planning</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-xl text-[#0033A0]">Beyond Buildings: Comprehensive Health System Transformation</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-[#0033A0]">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Infrastructure & Planning service includes comprehensive strategic advisory support for <span className="text-[#0033A0]">Ministries of Health, private hospital networks, development partners, healthcare investors, and health systems</span>. We don't just build facilities—we help design multi-year transformation roadmaps that ensure infrastructure investments align with organizational health priorities and deliver measurable health outcomes for both public health systems and private healthcare organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-2 border-[#0033A0]">
              <div className="flex items-start gap-3 mb-3">
                <BarChart3 className="h-6 w-6 text-[#0033A0] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-[#0033A0] mb-2">Health System Assessments</h3>
                  <p className="text-gray-700">
                    Conduct comprehensive assessments of health system infrastructure gaps, service delivery challenges, and capacity constraints to inform strategic planning.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-2 border-[#00A0DC]">
              <div className="flex items-start gap-3 mb-3">
                <Layers className="h-6 w-6 text-[#00A0DC] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-[#00A0DC] mb-2">Multi-Year Transformation Roadmaps</h3>
                  <p className="text-gray-700">
                    Develop phased infrastructure development plans aligned with national health strategies, disease burden priorities, and available resources.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-2 border-[#0033A0]">
              <div className="flex items-start gap-3 mb-3">
                <DollarSign className="h-6 w-6 text-[#0033A0] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-[#0033A0] mb-2">Donor Coordination & Financing</h3>
                  <p className="text-gray-700">
                    Help coordinate multiple donor investments, structure blended financing mechanisms, and optimize funding allocation across infrastructure priorities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-2 border-[#00A0DC]">
              <div className="flex items-start gap-3 mb-3">
                <Zap className="h-6 w-6 text-[#00A0DC] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-[#00A0DC] mb-2">Digital Health Integration</h3>
                  <p className="text-gray-700">
                    Design strategies for integrating digital health information systems (DHIS2, OpenMRS) with physical infrastructure to strengthen data-driven decision making.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-t-2 border-[#0033A0] md:col-span-2">
              <div className="flex items-start gap-3 mb-3">
                <Heart className="h-6 w-6 text-[#0033A0] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg text-[#0033A0] mb-2">Primary Care Network Strengthening</h3>
                  <p className="text-gray-700">
                    Develop comprehensive strategies for strengthening primary care infrastructure, improving referral pathways, and extending healthcare access to underserved rural communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              Every infrastructure engagement begins with strategic planning to ensure your investments create lasting health system impact, not just buildings.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars of Infrastructure Excellence */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#0033A0]">Four Pillars of Infrastructure Excellence</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure strategy built on planning, equipment, partnerships, and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#0033A0]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Ruler className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#00A0DC]">PILLAR 1</div>
                  <h3 className="text-2xl text-[#0033A0]">Facility Planning & Design</h3>
                </div>
              </div>
              <p className="mb-6 text-gray-700">
                <strong className="text-[#0033A0]">From Concept to Clinic</strong>
              </p>
              <p className="text-gray-700 mb-6">
                We work with you to design healthcare facilities that are fit for purpose, scalable, and built to last. Our human-centered design approach ensures that facilities are not only clinically effective but also welcoming and accessible to patients and staff.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0033A0]">Needs Assessment:</span> Analyzing demographic and health data to determine appropriate facility size, scope, and services
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0033A0]">Architectural Design:</span> Partnering with leading healthcare architecture firms
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0033A0]">Workflow Optimization:</span> Designing layouts that maximize efficiency and patient flow
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0033A0]">Climate Adaptation:</span> Incorporating design features for local environmental conditions
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#00A0DC]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#00A0DC] rounded-full flex items-center justify-center flex-shrink-0">
                  <Cog className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#0033A0]">PILLAR 2</div>
                  <h3 className="text-2xl text-[#00A0DC]">Equipment Sourcing & Lifecycle Management</h3>
                </div>
              </div>
              <p className="mb-6 text-gray-700">
                <strong className="text-[#00A0DC]">The Right Tools for the Job</strong>
              </p>
              <p className="text-gray-700 mb-6">
                We manage the complex process of sourcing, installing, and maintaining medical equipment, ensuring that your facility is equipped with the right tools to provide high-quality care throughout the equipment lifecycle.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#00A0DC]">Equipment Specification:</span> Selecting appropriate equipment for your needs and budget
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#00A0DC]">Procurement & Installation:</span> Sourcing from leading manufacturers and managing commissioning
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#00A0DC]">Maintenance Planning:</span> Developing comprehensive maintenance plans for equipment longevity
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#00A0DC]">Staff Training:</span> Providing clinical and technical training on equipment operation
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#0033A0]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#00A0DC]">PILLAR 3</div>
                  <h3 className="text-2xl text-[#0033A0]">Partnership Development & Project Management</h3>
                </div>
              </div>
              <p className="mb-6 text-gray-700">
                <strong className="text-[#0033A0]">Bringing It All Together</strong>
              </p>
              <p className="text-gray-700 mb-6">
                Building healthcare infrastructure requires collaboration between multiple stakeholders. We act as your central point of contact, managing the entire process from start to finish with proven project management methodologies.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0033A0]">Partnership Brokering:</span> Identifying and bringing together the right partners, from construction firms to technology vendors
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0033A0]">Project Management:</span> Certified project managers oversee every aspect, ensuring on-time and on-budget delivery
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0033A0]">Stakeholder Engagement:</span> Facilitating communication and collaboration to ensure alignment
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#0033A0]">Risk Management:</span> Identifying potential risks and developing mitigation strategies
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#00A0DC]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#00A0DC] rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#0033A0]">PILLAR 4</div>
                  <h3 className="text-2xl text-[#00A0DC]">Multi-Year Planning & Sustainability</h3>
                </div>
              </div>
              <p className="mb-6 text-gray-700">
                <strong className="text-[#00A0DC]">Building for the Future</strong>
              </p>
              <p className="text-gray-700 mb-6">
                We help you develop long-term strategies to ensure the sustainability of your health system beyond the initial infrastructure investment, including environmental, financial, and operational sustainability.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#00A0DC]">Multi-Year Supply Agreements:</span> Negotiating long-term agreements for consumables, reagents, and maintenance services
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#00A0DC]">Health System Strengthening:</span> Developing strategies for human resources, governance, and financing
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#00A0DC]">Environmental Sustainability:</span> Incorporating eco-friendly design principles and technologies
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#00A0DC]">Community Engagement:</span> Building strong relationships with communities to ensure long-term support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Infrastructure Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Our 5-Step Infrastructure Development Process</h2>
            <p className="text-lg text-gray-600">
              From vision to reality—a proven methodology for successful infrastructure delivery
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
                    <h3 className="text-xl text-[#0033A0]">Vision & Feasibility</h3>
                    <p className="text-sm text-gray-600">Defining project vision and conducting feasibility analysis</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 pl-16">
                <p className="text-gray-700 mb-4">
                  We work with you to define the vision for your project and conduct a thorough feasibility study, including needs assessment, site evaluation, and financial analysis.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm mb-2"><strong className="text-[#0033A0]">Key Activities:</strong></p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Stakeholder consultations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Demographic and health data analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Site assessment and selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Financial feasibility modeling</span>
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
                    <h3 className="text-xl text-[#0033A0]">Design & Planning</h3>
                    <p className="text-sm text-gray-600">Developing detailed project plans and specifications</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 pl-16">
                <p className="text-gray-700 mb-4">
                  We develop a detailed project plan, including architectural designs, equipment specifications, budgets, and timelines, ensuring all elements are aligned with your vision and resources.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm mb-2"><strong className="text-[#0033A0]">Key Activities:</strong></p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Architectural design development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Equipment list and specifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Budget development and refinement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Project timeline and milestone planning</span>
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
                    <h3 className="text-xl text-[#0033A0]">Partnership & Procurement</h3>
                    <p className="text-sm text-gray-600">Selecting partners and managing procurement processes</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 pl-16">
                <p className="text-gray-700 mb-4">
                  We identify and select the right partners and manage the procurement process, ensuring quality, value, and compliance with all relevant regulations and donor requirements.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm mb-2"><strong className="text-[#0033A0]">Key Activities:</strong></p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Partner identification and vetting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Competitive bidding processes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Contract negotiation and management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Regulatory compliance verification</span>
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
                    <h3 className="text-xl text-[#0033A0]">Construction & Installation</h3>
                    <p className="text-sm text-gray-600">Overseeing construction and equipment installation</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 pl-16">
                <p className="text-gray-700 mb-4">
                  We oversee the construction of the facility and the installation of all equipment, providing regular progress updates and ensuring quality standards are maintained throughout.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm mb-2"><strong className="text-[#0033A0]">Key Activities:</strong></p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Construction supervision and quality control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Equipment installation and commissioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Progress monitoring and reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Issue resolution and change management</span>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step5" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#0033A0]">Commissioning & Handover</h3>
                    <p className="text-sm text-gray-600">Final testing, training, and facility handover</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pb-6 pl-16">
                <p className="text-gray-700 mb-4">
                  We manage the final commissioning process, staff training, and facility handover, ensuring your team is fully prepared to operate and maintain the new infrastructure.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm mb-2"><strong className="text-[#0033A0]">Key Activities:</strong></p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Final inspections and testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Staff training programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Documentation and handover</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Post-handover support planning</span>
                    </li>
                  </ul>
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
              How our infrastructure approach delivers sustainable healthcare systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 - Integrated Health System Design */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Layers className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl text-[#0033A0] leading-tight pt-2">Integrated Health System Design</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-600">Challenge:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Infrastructure projects must be carefully integrated with existing health systems and community needs to ensure optimal utilization and impact.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-[#00A0DC]">Our Solution:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We take a health systems approach, ensuring that every infrastructure project is aligned with broader health goals, existing services, and community needs.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <ArrowRight className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <p className="text-[#0033A0]">Result:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Higher facility utilization rates, better integration with existing services, and improved health outcomes through strategic alignment.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 - Cost-Effective Solutions */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl text-[#0033A0] leading-tight pt-2">Cost-Effective & Sustainable Solutions</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-600">Challenge:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Successful infrastructure projects require comprehensive budget planning that accounts for both initial capital costs and long-term operational and maintenance expenses.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-[#00A0DC]">Our Solution:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Our Total Cost of Ownership approach and multi-year planning ensure financial sustainability by considering lifecycle costs from day one.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <ArrowRight className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <p className="text-[#0033A0]">Result:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Projects completed on time and on budget, predictable long-term costs, and financial sustainability throughout the facility lifecycle.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 - Expert Project Management */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl text-[#0033A0] leading-tight pt-2">Expert Project Management</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-600">Challenge:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Complex infrastructure projects require coordination between multiple stakeholders, creating management challenges and potential delays.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-[#00A0DC]">Our Solution:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Our certified project managers (PMI, PRINCE2) provide single-point accountability and proven methodologies for managing all project aspects.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <ArrowRight className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <p className="text-[#0033A0]">Result:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Reduced project delays, better stakeholder coordination, transparent communication, and higher quality outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 - Long-Term Partnership */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[#0033A0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl text-[#0033A0] leading-tight pt-2">Long-Term Partnership & Support</h3>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-600">Challenge:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Infrastructure projects require ongoing support beyond initial construction to ensure continued functionality and optimal performance.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-[#00A0DC]">Our Solution:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We provide ongoing support through multi-year agreements, maintenance services, capacity building, and technical assistance.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-2 mb-3">
                    <ArrowRight className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <p className="text-[#0033A0]">Result:</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Continued equipment functionality, ongoing technical support, staff capacity development, and true long-term partnership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Project Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Infrastructure Project Types</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions across healthcare delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Healthcare Facilities */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#0033A0] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0033A0]/10 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-[#0033A0]" />
                </div>
                <h3 className="text-lg text-[#0033A0]">Healthcare Facilities</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Public hospitals and private specialty hospitals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Rural clinics and faith-based health facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Corporate occupational health centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Maternal and child health facilities</span>
                </li>
              </ul>
            </div>

            {/* Laboratory Infrastructure */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#00A0DC] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00A0DC]/10 rounded-lg flex items-center justify-center">
                  <FileCheck className="h-5 w-5 text-[#00A0DC]" />
                </div>
                <h3 className="text-lg text-[#00A0DC]">Laboratory Infrastructure</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>National reference laboratories</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Regional diagnostic centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Point-of-care testing facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Cold chain and sample transport systems</span>
                </li>
              </ul>
            </div>

            {/* Pharmaceutical Infrastructure */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#0033A0] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#0033A0]/10 rounded-lg flex items-center justify-center">
                  <Package className="h-5 w-5 text-[#0033A0]" />
                </div>
                <h3 className="text-lg text-[#0033A0]">Pharmaceutical Infrastructure</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Central medical stores</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Regional warehouses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Pharmacy facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span>Cold chain storage facilities</span>
                </li>
              </ul>
            </div>

            {/* Specialized Centers */}
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#00A0DC] hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00A0DC]/10 rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-[#00A0DC]" />
                </div>
                <h3 className="text-lg text-[#00A0DC]">Specialized Centers</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Cancer treatment centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Cardiac care facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Infectious disease centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span>Rehabilitation facilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Common questions about our infrastructure and planning services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq1" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="text-lg text-gray-900">What types of infrastructure projects do you manage?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-700">
                We manage a wide range of healthcare infrastructure projects, including new hospital and clinic construction, facility renovations, specialized diagnostic and treatment centers, laboratory infrastructure, pharmaceutical warehouses, and medical equipment installation projects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq2" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="text-lg text-gray-900">Do you work with both government and private sector clients?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-700">
                <p className="mb-3">
                  Yes. We serve both <strong className="text-[#0033A0]">public sector</strong> clients (Ministries of Health, development banks, multilateral agencies, bilateral donors) and <strong className="text-[#00A0DC]">private sector</strong> organizations (private hospital networks, healthcare investment groups, faith-based organizations, corporate health systems).
                </p>
                <p>
                  Whether you're a government planning a national health infrastructure program or a private hospital group expanding specialty services, we bring the same rigorous project management, quality standards, and health systems expertise to ensure sustainable, high-impact healthcare delivery across Africa.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq3" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="text-lg text-gray-900">How do you ensure projects are completed on time and on budget?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-700">
                Our certified project managers use proven methodologies (PMI, PRINCE2) to manage all project aspects, from planning and scheduling to risk management and quality control. We provide regular progress reports, maintain transparent communication, and proactively address issues to keep projects on track.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq4" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="text-lg text-gray-900">Can you help us secure financing for our project?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-700">
                While we do not provide financing directly, we have a strong network of partners in the development finance community and can help you identify and apply for funding opportunities from development banks, foundations, bilateral donors, and impact investors.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq5" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="text-lg text-gray-900">Do you provide ongoing support after project completion?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-700">
                Yes. We offer multi-year service agreements that include equipment maintenance, consumable supply, staff training, and technical support. Our goal is to be a long-term partner throughout the facility lifecycle, not just a one-time contractor.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq6" className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm">
              <AccordionTrigger className="text-left hover:no-underline py-5">
                <span className="text-lg text-gray-900">How do you ensure community engagement and buy-in?</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-700">
                We work closely with local communities throughout the project lifecycle, from initial needs assessment to facility handover. This includes community consultations, local hiring where possible, ongoing communication, and ensuring that the facility design and services meet community needs and expectations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Why Choose Pacem Infrastructure & Planning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#0033A0]">Why Choose Pacem Infrastructure & Planning</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for sustainable healthcare infrastructure across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-8 border-2 border-gray-200 hover:border-[#0033A0] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#0033A0] rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl text-[#0033A0]">Health Systems Expertise</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We understand that infrastructure is just one component of a functioning health system. Our approach integrates facility design with broader health system strengthening, ensuring sustainable impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-8 border-2 border-gray-200 hover:border-[#00A0DC] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#00A0DC] rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl text-[#00A0DC]">Local Knowledge & Presence</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                With offices in Kenya and Ghana, we understand African healthcare contexts, regulatory requirements, and community dynamics, enabling effective project implementation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-8 border-2 border-gray-200 hover:border-[#0033A0] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#0033A0] rounded-full flex items-center justify-center">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl text-[#0033A0]">Comprehensive Service Delivery</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Infrastructure & Planning integrates seamlessly with our Procurement & Sourcing (for equipment), Supply Chain & Logistics (for distribution infrastructure), Quality Assurance (for facility compliance), and Regulatory Services (for licensing) to provide end-to-end healthcare system solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md p-8 border-2 border-gray-200 hover:border-[#00A0DC] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#00A0DC] rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl text-[#00A0DC]">Proven Project Management</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our certified project managers bring international best practices combined with local implementation experience, ensuring projects are delivered successfully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] to-[#0052CC] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to build the future of healthcare?</h2>
          <p className="text-xl mb-8 text-white/90">
            Contact our Infrastructure & Planning team to discuss your project and learn how we can help you turn your vision into reality.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-[#0033A0] hover:bg-gray-100">
            Schedule Infrastructure Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/80 mb-2">Pacem Health Infrastructure & Planning</p>
            <p className="text-sm text-white/70 mb-4">
              Designing and building sustainable healthcare infrastructure across Africa through integrated health systems planning, expert project management, and long-term partnership.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/80">
              <span>📧 infrastructure@pacemhealth.com</span>
              <span className="hidden sm:inline">|</span>
              <span>📍 Nairobi, Kenya | Accra, Ghana</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
