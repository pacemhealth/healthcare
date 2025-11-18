import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HealthcareInfrastructurePlanningPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#7C944B] to-[#6c843e] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Link to="/services" className="text-white/90 hover:text-white inline-flex items-center gap-2 mb-4">
                ← Back to Services
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              Healthcare Infrastructure Planning & Advisory
            </h1>
            <p className="text-2xl md:text-3xl mb-4">
              From Vision to Facility — Building Healthcare Systems for Resilience and Equity
            </p>
            <p className="text-lg md:text-xl text-white/90">
              Pacem Health partners with governments, development banks, NGOs, and private investors to design and implement healthcare infrastructure that serves communities for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">
              Strategic Infrastructure Planning That Creates Lasting Impact
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Healthcare infrastructure is not just buildings and equipment—it's the physical foundation that enables or constrains health system performance for decades. Poor facility design creates operational inefficiencies, increases infection risks, wastes staff time, and limits service delivery capacity. Yet too often, healthcare facilities are designed without deep understanding of clinical workflows, equipment requirements, or operational realities.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Pacem Health's Healthcare Infrastructure Planning & Advisory services bring together expertise in clinical operations, biomedical engineering, architectural design, and health systems strengthening. Our comprehensive planning approach ensures every facility is optimized for clinical excellence, operational sustainability, and community impact—from initial concept through operational readiness.
            </p>
            <p className="text-lg text-muted-foreground">
              We integrate WHO guidelines, national health policy objectives, and demographic projections to ensure each facility is future-proof, scalable, and cost-effective. From energy planning to infection control zoning, every layout we deliver balances clinical function, operational efficiency, and community need.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Comprehensive Infrastructure Planning Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end advisory from strategic planning through operational handover
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Master Planning */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Master Facility Planning & Architectural Design</h3>
                <p className="text-muted-foreground mb-6">
                  We develop comprehensive facility master plans that align infrastructure investments with health system goals, population needs, and budget realities. Our architectural design integrates clinical functionality, infection prevention principles, patient flow optimization, and sustainable building practices to create facilities that serve communities effectively for decades.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Strategic facility master planning aligned with health policy</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Population health needs assessment and service gap analysis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Conceptual and detailed architectural design development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Phased development strategies for budget flexibility</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">WHO and international standards compliance verification</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Clinical Workflow */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Clinical Workflow Optimization & Space Planning</h3>
                <p className="text-muted-foreground mb-6">
                  Effective healthcare facilities are designed around clinical workflows, not generic templates. We conduct detailed workflow analysis, develop functional programming for each department, and create space layouts that minimize unnecessary movement, reduce wait times, and support efficient care delivery while maintaining infection prevention protocols.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Clinical workflow analysis and process mapping</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Functional space programming by department and service</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Patient flow and staff circulation optimization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Infection prevention and control zone design</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Adjacency planning for operational efficiency</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Equipment Planning */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Equipment Selection & Layout Engineering</h3>
                <p className="text-muted-foreground mb-6">
                  Medical equipment represents 15-30% of facility capital costs and drives operational workflows. We develop comprehensive equipment master plans, specify appropriate technologies for local contexts, design detailed equipment layouts, and plan infrastructure requirements—ensuring facilities can actually accommodate and operate the equipment they need.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Medical equipment master planning and budgeting</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Technology selection appropriate for local capacity</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Detailed equipment layout and placement design</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Infrastructure requirements (power, cooling, plumbing)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Equipment lifecycle and replacement planning</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Infrastructure Systems */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Infrastructure Systems Design</h3>
                <p className="text-muted-foreground mb-6">
                  Reliable power, water, waste management, and medical gas systems are essential for healthcare facility operations. We design robust infrastructure systems adapted to local conditions, incorporating backup power, water treatment, medical waste management, and sustainable energy solutions that ensure continuous operations even in challenging environments.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Electrical power systems with backup and redundancy</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Water supply, treatment, and storage systems</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Medical waste management and disposal planning</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">HVAC and climate control for critical areas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Medical gas systems (oxygen, vacuum, compressed air)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regulatory Compliance */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Regulatory Compliance & Approval Support</h3>
                <p className="text-muted-foreground mb-6">
                  Healthcare facility development requires navigating complex regulatory requirements from multiple agencies. We manage the approval process, prepare required documentation, coordinate with regulatory authorities, and ensure designs meet all national building codes, health facility standards, and environmental regulations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Ministry of Health facility standards compliance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">National building code and safety regulations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Environmental impact assessment and permits</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Fire safety and life safety code compliance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Approval coordination and documentation management</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Management */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Project Management & Implementation Oversight</h3>
                <p className="text-muted-foreground mb-6">
                  Successful facility development requires coordinating multiple stakeholders, contractors, and technical specialists. We provide comprehensive project management services that keep development on schedule and within budget, manage quality control, coordinate construction supervision, and ensure successful transition to operations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Project planning and schedule development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Budget management and cost control</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Construction supervision and quality assurance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Stakeholder coordination and communication</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C944B] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Commissioning and operational readiness support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planning Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Infrastructure Planning Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive methodology from strategic vision to operational facility
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#7C944B] text-white flex items-center justify-center">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Strategic Assessment & Needs Analysis</h3>
                  <p className="text-muted-foreground">
                    We begin by understanding health system priorities, population health needs, existing infrastructure capacity, and service delivery gaps. This phase includes stakeholder consultations, demographic analysis, epidemiological data review, and assessment of current facility utilization to establish clear planning parameters.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#7C944B] text-white flex items-center justify-center">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Conceptual Planning & Service Programming</h3>
                  <p className="text-muted-foreground">
                    Based on needs assessment, we develop conceptual facility plans defining service mix, bed capacity, department configurations, and space allocations. This includes clinical workflow modeling, equipment planning, and preliminary site planning that balances service delivery goals with budget realities and implementation timelines.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#7C944B] text-white flex items-center justify-center">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Detailed Design & Technical Specifications</h3>
                  <p className="text-muted-foreground">
                    With approved concepts, our technical teams develop complete design documentation including architectural plans, infrastructure systems design, equipment layouts, and construction specifications. All designs undergo rigorous review for functionality, compliance, and constructability before finalization.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#7C944B] text-white flex items-center justify-center">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Regulatory Approval & Procurement Support</h3>
                  <p className="text-muted-foreground">
                    We manage the regulatory approval process, preparing required documentation and coordinating with authorities. Simultaneously, we support procurement of contractors and suppliers through bid document preparation, proposal evaluation, and contract negotiation support.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#7C944B] text-white flex items-center justify-center">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Construction Oversight & Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    During construction, our project managers provide ongoing oversight, conduct site inspections, verify quality of work, manage change orders, and coordinate resolution of technical issues. Regular reporting keeps stakeholders informed and enables proactive problem-solving.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#7C944B] text-white flex items-center justify-center">
                    6
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Commissioning & Operational Transition</h3>
                  <p className="text-muted-foreground">
                    As construction completes, we manage facility commissioning including systems testing, equipment installation, staff training, and operational readiness activities. Our support continues through early operations to ensure smooth transition and address any emerging issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Healthcare Facilities We Plan & Design
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive planning expertise across the full spectrum of healthcare infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Primary Care Facilities</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Health centers and community clinics</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Health posts and dispensaries</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Maternal and child health clinics</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Mobile clinic design and outfitting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">District & Regional Hospitals</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>50-200 bed district hospitals</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Regional referral hospitals</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Surgical and emergency departments</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Diagnostic imaging centers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Specialized Treatment Centers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>TB and infectious disease centers</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>HIV/AIDS care and treatment clinics</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Cancer treatment facilities</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Mental health and rehabilitation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Laboratory Facilities</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>National reference laboratories</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Regional and district lab facilities</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Molecular diagnostics centers</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Blood bank and transfusion services</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Training & Simulation Centers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Medical and nursing training facilities</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Clinical skills labs and simulation</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Continuing education centers</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Biomedical technician training</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Support Infrastructure</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Central medical stores and warehouses</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Centralized sterilization facilities</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Medical waste treatment facilities</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                  <span>Health system operations centers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              What Makes Our Planning Approach Different?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Clinical Operations Expertise</h3>
                <p className="text-muted-foreground">
                  Our team includes clinicians and biomedical engineers who understand healthcare delivery—ensuring designs support actual clinical workflows, not just architectural concepts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Africa-Focused Design</h3>
                <p className="text-muted-foreground">
                  Deep understanding of African infrastructure challenges, climate considerations, local construction practices, and operational constraints that influence facility design.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Equipment-Integrated Planning</h3>
                <p className="text-muted-foreground">
                  Facilities designed from the start to accommodate specific medical equipment—not generic spaces that require costly retrofitting later.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Sustainability Focus</h3>
                <p className="text-muted-foreground">
                  Integration of renewable energy, water conservation, natural ventilation, and sustainable building materials appropriate for long-term operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Cost-Effective Solutions</h3>
                <p className="text-muted-foreground">
                  Value engineering and local material integration that optimizes construction costs without compromising functionality or quality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Implementation Support</h3>
                <p className="text-muted-foreground">
                  We don't just deliver drawings—we provide ongoing advisory through construction, commissioning, and early operations to ensure successful implementation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planning Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Core Planning Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every facility we design is guided by these fundamental principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Function Drives Form</h3>
              <p className="text-muted-foreground">
                Clinical workflows, infection prevention requirements, and operational efficiency determine facility design—not aesthetic preferences or template solutions. Every space is planned for its intended clinical function.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Design for Operations</h3>
              <p className="text-muted-foreground">
                Facilities must be operationally sustainable. We consider staffing patterns, maintenance capacity, utility reliability, and operational costs in every design decision—ensuring long-term functionality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Built-In Flexibility</h3>
              <p className="text-muted-foreground">
                Healthcare needs evolve. Our designs incorporate flexibility for future expansion, service changes, and technology upgrades—avoiding costly major renovations as programs grow.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Patient-Centered Design</h3>
              <p className="text-muted-foreground">
                Facilities should promote healing and dignity. We design with attention to natural light, ventilation, privacy, wayfinding, and accessibility—creating environments that support patient wellbeing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Local Context Integration</h3>
              <p className="text-muted-foreground">
                Designs respect local climate, construction practices, material availability, and cultural considerations while maintaining international healthcare facility standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Evidence-Based Standards</h3>
              <p className="text-muted-foreground">
                All designs comply with WHO healthcare facility guidelines, national MOH standards, and international best practices for infection prevention, safety, and quality care delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2c2c3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Plan Your Healthcare Infrastructure?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss your healthcare facility vision and explore how strategic planning can deliver infrastructure that serves your communities for decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white">
              Schedule a Planning Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-[#2c2c3e] hover:bg-gray-100">
              Download Planning Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}