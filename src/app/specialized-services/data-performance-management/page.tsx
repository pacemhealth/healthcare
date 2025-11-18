import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DataPerformanceManagementPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#3a1f73] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Link to="/services" className="text-white/90 hover:text-white inline-flex items-center gap-2 mb-4">
                ← Back to Services
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              Data & Performance Management for Ministries of Health
            </h1>
            <p className="text-2xl md:text-3xl mb-4">
              Track Progress. Strengthen Systems. Make Decisions That Save Lives.
            </p>
            <p className="text-lg md:text-xl text-white/90">
              Pacem Health helps Ministries of Health and district-level agencies transform fragmented reporting into unified, action-oriented insights.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">
              From Data to Decisions: Empowering Health System Leadership
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Health system leaders face a persistent challenge: data exists everywhere, but actionable insights remain elusive. Program managers receive reports weeks after they're needed. District health officers lack visibility into facility performance. National directors struggle to track progress against health targets. And donors demand accountability that fragmented systems cannot provide.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Pacem Health's Data & Performance Management services ensure that health leaders—from national program managers to regional directors—can monitor real-time service delivery, disease trends, and investment outcomes with confidence. We design custom dashboards, KPI frameworks, and data systems tailored to each country's goals, infrastructure, and donor requirements.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're overseeing a maternal health program, tracking vaccination coverage, or managing resource allocation across 500 clinics, our tools help you see what matters and act faster. Our services span from data governance frameworks and system integration to capacity building and data use training. We embed accountability, transparency, and evidence-based action into every level of public health delivery—aligned with WHO standards and national health information strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Comprehensive Data & Performance Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end data systems that turn information into action
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Real-Time Dashboards */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Real-Time Health System Dashboards & Analytics</h3>
                <p className="text-muted-foreground mb-6">
                  We design and deploy interactive dashboards that provide real-time visibility into health system performance across facilities, districts, and programs. Our dashboards aggregate data from multiple sources, present key metrics at a glance, and enable drill-down analysis for root cause investigation—transforming data into actionable intelligence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Executive dashboards for national MOH leadership</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Program-specific dashboards (HIV, TB, MCH, immunization)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">District-level performance monitoring and facility comparisons</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Interactive maps and geographic analysis tools</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Mobile-responsive design for field access</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* KPI Frameworks */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Custom KPI Frameworks Aligned with National Priorities</h3>
                <p className="text-muted-foreground mb-6">
                  Every country has unique health priorities, targets, and measurement needs. We develop customized KPI frameworks that align with national health strategic plans, donor requirements, and global health initiatives while remaining practical for routine monitoring. These frameworks establish clear metrics, targets, and accountability structures.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">KPI development aligned with national health strategies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Target-setting workshops and stakeholder consultations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Performance scorecards for facilities and districts</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Indicator dictionaries and data quality standards</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Alignment with SDGs, UHC, and global health metrics</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Integration */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Data Integration Across Health Information Systems</h3>
                <p className="text-muted-foreground mb-6">
                  Health systems operate multiple databases: HMIS, LMIS, HR systems, facility registries, disease surveillance platforms. We integrate disparate data sources into unified analytics platforms using modern interoperability standards (FHIR, HL7) and ETL processes—enabling comprehensive analysis without replacing existing systems.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Integration of DHIS2, OpenMRS, and custom databases</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">API development and interoperability implementation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Data warehousing and centralized analytics platforms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Real-time data synchronization and automated ETL</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Master facility registries and unique identifiers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Capacity Building */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Capacity Building & Training for Data Use</h3>
                <p className="text-muted-foreground mb-6">
                  Technology alone doesn't improve decisions—people do. We provide comprehensive training programs that build data literacy, analytical skills, and data-driven decision-making capabilities at all levels. Our capacity building creates sustainable data use cultures beyond technology implementation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Data literacy training for health managers and staff</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Dashboard user training and ongoing support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Data quality assessment and improvement workshops</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Analytics skills development (basic to advanced)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Data review meetings and performance dialogues facilitation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Monitoring */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Performance Monitoring & Evaluation Systems</h3>
                <p className="text-muted-foreground mb-6">
                  Effective health systems require continuous performance monitoring and rigorous evaluation. We design M&E systems that track implementation progress, measure outcomes, identify performance gaps, and generate evidence for program improvement—meeting both internal management needs and external donor requirements.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">M&E framework development and indicator selection</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Performance benchmarking and trend analysis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Quarterly and annual performance review reporting</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Impact evaluation and program effectiveness studies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Donor reporting automation and compliance tracking</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decision Support */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Evidence-Based Decision Support Tools</h3>
                <p className="text-muted-foreground mb-6">
                  Data becomes valuable when it informs decisions. We develop decision support tools that present complex information in accessible formats, provide scenario modeling capabilities, and offer evidence-based recommendations—helping health leaders make faster, more informed strategic and operational decisions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Predictive analytics for disease surveillance and outbreaks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Resource allocation optimization models</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Service delivery gap analysis and planning tools</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Forecasting and demand planning for commodities</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Automated alerts and early warning systems</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Data Solutions Across Health Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored data systems for every health priority
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">HIV/AIDS Program Management</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>ART enrollment and retention tracking</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Viral load suppression monitoring</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>PMTCT cascade analysis</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>90-90-90 target progress tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">TB & Disease Surveillance</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>TB case notification and outcomes</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Contact tracing and testing coverage</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Drug-resistant TB monitoring</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Outbreak detection and response</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Maternal & Child Health</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>ANC attendance and quality metrics</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Skilled birth delivery coverage</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Postnatal care follow-up tracking</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Maternal mortality review systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Immunization Programs</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Vaccination coverage by antigen and age</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Cold chain monitoring and alerts</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Dropout rate analysis and interventions</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Vaccine stock and wastage tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Supply Chain & Logistics</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Medicine stock levels and stockouts</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Distribution performance monitoring</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Consumption forecasting and quantification</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Expiry and waste management tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Health Facility Operations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Patient volume and service utilization</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Staffing levels and HR analytics</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Equipment functionality status</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Quality of care and patient satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Data Systems Implementation Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A phased methodology that delivers value quickly while building sustainable capacity
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#4B2991] text-white flex items-center justify-center">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Assessment & Co-Design</h3>
                  <p className="text-muted-foreground">
                    We begin by understanding current data systems, user needs, and decision-making processes through stakeholder consultations, system assessments, and workflow analysis. Working collaboratively with MOH teams, we co-design solutions that fit existing workflows and address real pain points—ensuring adoption and sustainability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#4B2991] text-white flex items-center justify-center">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Rapid Prototyping & Validation</h3>
                  <p className="text-muted-foreground">
                    Rather than lengthy development cycles, we rapidly prototype dashboards and tools, test with users, gather feedback, and iterate. This agile approach delivers working solutions in weeks, not months, while ensuring the final product meets actual user needs and preferences.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#4B2991] text-white flex items-center justify-center">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Phased Rollout & Training</h3>
                  <p className="text-muted-foreground">
                    We deploy solutions in phases—starting with pilot districts or programs, learning from implementation, and expanding gradually. Comprehensive training accompanies each phase, building user confidence and competence before moving to broader deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#4B2991] text-white flex items-center justify-center">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Institutionalization & Handover</h3>
                  <p className="text-muted-foreground">
                    Our goal is sustainability—not dependency. We work toward full institutionalization of data systems within MOH structures, building local technical capacity to maintain and enhance systems independently. Complete documentation, training, and knowledge transfer prepare teams for long-term ownership.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#4B2991] text-white flex items-center justify-center">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Continuous Improvement & Support</h3>
                  <p className="text-muted-foreground">
                    Data systems must evolve as health priorities and technologies change. We provide ongoing technical support, regular system enhancements, and continuous improvement cycles that keep data systems relevant, functional, and aligned with emerging needs and opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              What Makes Our Data Solutions Different?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">User-Centered Design</h3>
                <p className="text-muted-foreground">
                  We design for actual users—busy district health officers, program managers, and facility staff—not IT departments. Solutions are intuitive, accessible, and aligned with real workflows.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Context-Appropriate Technology</h3>
                <p className="text-muted-foreground">
                  Our solutions work within African infrastructure realities—low bandwidth, intermittent power, mobile-first access—using appropriate technologies that perform reliably in real conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Integration, Not Replacement</h3>
                <p className="text-muted-foreground">
                  We integrate with existing systems (DHIS2, OpenMRS, etc.) rather than requiring costly replacements, preserving prior investments and minimizing disruption.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Action-Oriented Analytics</h3>
                <p className="text-muted-foreground">
                  Beyond descriptive statistics, we provide actionable insights, root cause analysis, and decision recommendations that enable concrete interventions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Capacity Building Focus</h3>
                <p className="text-muted-foreground">
                  Comprehensive training and mentorship build local analytical capacity and data use cultures—creating sustainable improvement beyond technology.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Open Standards & Interoperability</h3>
                <p className="text-muted-foreground">
                  Solutions built on open standards (FHIR, HL7) and interoperable architectures prevent vendor lock-in and enable future system evolution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Measurable Impact from Data-Driven Decision Making
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real improvements when health leaders have the right information at the right time
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Faster Response to Stockouts</h3>
              <p className="text-muted-foreground mb-4">
                Real-time commodity tracking dashboards enabled district health teams to identify and respond to medicine stockouts within days instead of weeks, reducing facility stockout rates by 40% and improving treatment continuity for chronic disease patients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Improved Vaccination Coverage</h3>
              <p className="text-muted-foreground mb-4">
                Immunization dashboards highlighting under-performing districts and dropout rates enabled targeted interventions—increasing full vaccination coverage from 78% to 89% over 18 months through data-guided outreach and follow-up.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Better Resource Allocation</h3>
              <p className="text-muted-foreground mb-4">
                Integrated facility performance data revealed staffing and equipment gaps, enabling evidence-based resource reallocation that improved service delivery capacity in underserved districts without additional budget.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Enhanced Accountability</h3>
              <p className="text-muted-foreground mb-4">
                Public-facing performance dashboards increased accountability and transparency, motivating improvement among lower-performing facilities and building public confidence in health system leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2c2c3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Transform Data into Action?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how data and performance management solutions can strengthen your health system decision-making and accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white">
              Schedule a Data Systems Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-[#2c2c3e] hover:bg-gray-100">
              Download Data Solutions Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
