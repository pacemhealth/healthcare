import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EquipmentInstallationMaintenancePage() {
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
              Equipment Installation & Maintenance Services
            </h1>
            <p className="text-2xl md:text-3xl mb-4">
              Deploy with Confidence. Operate with Reliability. Extend Every Asset's Impact.
            </p>
            <p className="text-lg md:text-xl text-white/90">
              Pacem Health provides comprehensive installation, commissioning, and maintenance services that ensure your medical equipment performs at peak efficiency throughout its lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">
              Beyond Installation: Complete Equipment Lifecycle Management
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Purchasing medical equipment is just the beginning. Without proper installation, staff training, and ongoing maintenance, even the best equipment fails to deliver its intended clinical value. Studies show that up to 40% of medical equipment in low-resource settings is non-functional at any given time—not because of equipment failure, but due to inadequate installation, poor maintenance, and lack of technical support.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Pacem Health's Equipment Installation & Maintenance Services ensure your investments deliver sustained clinical impact. Our certified biomedical engineers combine technical expertise with local knowledge to provide end-to-end equipment lifecycle management—from initial installation and commissioning to preventive maintenance, emergency repairs, and eventual replacement planning.
            </p>
            <p className="text-lg text-muted-foreground">
              We don't just install equipment and walk away. We build local technical capacity, establish sustainable maintenance systems, and provide ongoing support that ensures maximum uptime, extends equipment lifespan, and protects your infrastructure investments for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Comprehensive Equipment Lifecycle Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From deployment to decommissioning—complete technical support for medical equipment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Certified Installation */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Certified Installation & Commissioning</h3>
                <p className="text-muted-foreground mb-6">
                  Every piece of medical equipment requires precise installation to function correctly and safely. Our certified biomedical engineers conduct comprehensive site preparation assessments, perform manufacturer-compliant installations, calibrate equipment to clinical specifications, and verify performance before handover—ensuring equipment is ready for safe clinical use from day one.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Pre-installation site assessment and infrastructure verification</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Manufacturer-certified equipment installation and assembly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">System integration and network connectivity setup</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Calibration and performance verification testing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Safety inspection and regulatory compliance documentation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Staff Training */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Comprehensive Staff Training & Knowledge Transfer</h3>
                <p className="text-muted-foreground mb-6">
                  Equipment only delivers value when staff can operate it correctly and safely. We provide hands-on training programs tailored to staff skill levels, covering equipment operation, routine maintenance, basic troubleshooting, and safety protocols. Our training approach emphasizes practical skills development and builds confidence for daily clinical use.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Clinical operator training on equipment features and workflows</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Biomedical technician training on maintenance procedures</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Safety protocols and infection prevention practices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Basic troubleshooting and first-line problem resolution</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Training materials and reference guides in local languages</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preventive Maintenance */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Preventive Maintenance Programs</h3>
                <p className="text-muted-foreground mb-6">
                  Regular preventive maintenance is the single most effective strategy for maximizing equipment lifespan and preventing costly breakdowns. We design and implement customized PM programs tailored to local operating conditions, including scheduled inspections, cleaning, calibration, parts replacement, and performance testing—all documented for regulatory compliance and asset tracking.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Risk-based PM schedule development by equipment type</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Regular inspection, cleaning, and calibration services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Wear parts replacement and consumables management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Performance testing and quality assurance verification</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Digital maintenance logs and compliance documentation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Remote Diagnostics */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Remote Diagnostics & 24/7 Technical Support</h3>
                <p className="text-muted-foreground mb-6">
                  When equipment issues arise, rapid response is critical. Our remote diagnostics platform enables real-time troubleshooting and technical guidance without waiting for on-site visits. Combined with 24/7 helpdesk support staffed by experienced biomedical engineers, we provide immediate assistance that minimizes downtime and gets equipment back in service faster.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">24/7 technical helpdesk with multilingual support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Remote diagnostics and performance monitoring</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Video-assisted troubleshooting and repair guidance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Predictive maintenance alerts based on usage patterns</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Equipment performance analytics and trend reporting</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Contracts */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Long-Term Service Contracts</h3>
                <p className="text-muted-foreground mb-6">
                  Sustainable equipment operations require predictable, long-term service arrangements. We offer flexible service contracts with guaranteed response times, priority support, and fixed annual costs that simplify budget planning. Contracts include all preventive maintenance, corrective repairs, parts replacement, and performance verification—providing complete peace of mind.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Multi-year service agreements with guaranteed uptime SLAs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Fixed annual pricing for predictable budget planning</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Priority emergency response with defined timeframes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Comprehensive coverage including parts and labor</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Performance reporting and asset lifecycle planning</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Spare Parts */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Spare Parts Inventory & Rapid Delivery</h3>
                <p className="text-muted-foreground mb-6">
                  Equipment downtime is often caused by unavailable spare parts. We maintain strategic inventories of critical spare parts in-country and regionally, enabling rapid replacement and minimizing equipment downtime. Our parts management system tracks usage patterns, predicts part requirements, and ensures parts availability when needed.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Strategic spare parts inventory positioned in-country</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Genuine OEM parts sourced directly from manufacturers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Rapid delivery logistics with 24-72 hour fulfillment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Predictive parts forecasting based on usage data</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Consignment stock programs for critical equipment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Equipment We Service
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive service coverage across all medical equipment categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Diagnostic Imaging</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>X-ray systems and digital radiography</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Ultrasound machines (portable and fixed)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>CT scanners and MRI systems</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Mammography and fluoroscopy</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Laboratory Equipment</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Clinical chemistry analyzers</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Hematology and immunology systems</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Molecular diagnostic platforms</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Centrifuges and incubators</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Surgical & Operating Room</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Surgical lights and operating tables</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Anesthesia machines and ventilators</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Electrosurgical units and cautery</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Surgical instrument sterilization</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Patient Monitoring</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Vital signs monitors (multi-parameter)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>ECG machines and cardiac monitors</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Pulse oximeters and capnography</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Central monitoring stations</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Life Support & Critical Care</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>ICU ventilators and CPAP devices</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Infusion pumps and syringe drivers</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Defibrillators and AEDs</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Oxygen concentrators and delivery systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Support Equipment</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Autoclaves and sterilizers</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Medical refrigerators and cold chain</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Backup power systems and UPS</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Medical gas systems and piping</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Delivery Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Service Delivery Model
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Flexible service options designed for African healthcare contexts
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
                  <h3 className="text-xl mb-2">In-Country Technical Teams</h3>
                  <p className="text-muted-foreground">
                    We establish local technical teams in each country we serve, staffed with certified biomedical engineers who understand local infrastructure challenges and can respond rapidly to service requests. This ensures faster response times, reduced travel costs, and better continuity of service than fly-in/fly-out models.
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
                  <h3 className="text-xl mb-2">Regional Hubs & Mobile Workshops</h3>
                  <p className="text-muted-foreground">
                    Regional service hubs equipped with diagnostic tools, test equipment, and spare parts inventory support outlying facilities. Mobile workshop vehicles extend service reach to remote locations, bringing technical expertise and repair capabilities directly to district and rural health facilities.
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
                  <h3 className="text-xl mb-2">Partnership with MOH Biomedical Teams</h3>
                  <p className="text-muted-foreground">
                    We work collaboratively with Ministry of Health biomedical engineering departments, providing training, mentorship, and technical support that builds local capacity. This hybrid model ensures sustainability while maintaining service quality during capacity-building phases.
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
                  <h3 className="text-xl mb-2">Digital Service Management Platform</h3>
                  <p className="text-muted-foreground">
                    All service activities are managed through our digital platform, providing real-time visibility into equipment status, maintenance schedules, service requests, and performance metrics. This enables proactive management, data-driven decision-making, and transparent accountability.
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
              Why Choose Pacem for Equipment Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Manufacturer Certifications</h3>
                <p className="text-muted-foreground">
                  Our biomedical engineers hold manufacturer certifications from leading OEMs, ensuring compliance with warranty requirements and technical specifications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Local Presence</h3>
                <p className="text-muted-foreground">
                  In-country technical teams provide faster response times and lower service costs compared to international fly-in support models.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Genuine Parts</h3>
                <p className="text-muted-foreground">
                  We source and stock only genuine OEM parts, avoiding counterfeit or substandard replacements that compromise equipment performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Comprehensive Documentation</h3>
                <p className="text-muted-foreground">
                  Complete service records, maintenance logs, and compliance documentation support regulatory requirements and asset management.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Capacity Building Focus</h3>
                <p className="text-muted-foreground">
                  Training and knowledge transfer build local technical capacity, creating sustainable maintenance systems beyond external support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Performance Guarantees</h3>
                <p className="text-muted-foreground">
                  Service level agreements with uptime guarantees and response time commitments provide accountability and peace of mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Service Performance Metrics
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Measurable outcomes from our equipment service programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl text-[#4B2991] mb-2">95%+</div>
              <div className="text-lg mb-2">Equipment Uptime</div>
              <p className="text-sm text-muted-foreground">Operational availability rate</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl text-[#4B2991] mb-2">24hr</div>
              <div className="text-lg mb-2">Emergency Response</div>
              <p className="text-sm text-muted-foreground">Critical equipment support</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl text-[#4B2991] mb-2">50%</div>
              <div className="text-lg mb-2">Lifespan Extension</div>
              <p className="text-sm text-muted-foreground">Through preventive maintenance</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl text-[#4B2991] mb-2">100%</div>
              <div className="text-lg mb-2">OEM Compliance</div>
              <p className="text-sm text-muted-foreground">Genuine parts and procedures</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2c2c3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Maximize Your Equipment Performance?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how comprehensive installation and maintenance services can extend equipment lifespan, reduce downtime, and protect your infrastructure investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white">
              Request Equipment Service Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-[#2c2c3e] hover:bg-gray-100">
              Download Service Overview
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
