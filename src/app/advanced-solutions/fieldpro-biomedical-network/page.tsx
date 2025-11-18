import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Wrench, 
  Users, 
  MapPin,
  Clock,
  Award,
  Smartphone,
  TrendingUp,
  Shield,
  FileText,
  Video,
  Package
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { StructuredData, generateBreadcrumbSchema } from '../../../components/StructuredData';

export default function FieldProBiomedicalNetwork() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.pacemhealth.com" },
    { name: "Advanced Solutions", url: "https://www.pacemhealth.com/advanced-solutions" },
    { name: "FieldPro™ Biomedical Network", url: "https://www.pacemhealth.com/advanced-solutions/fieldpro-biomedical-network" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "FieldPro™ Biomedical Technician Network",
    "description": "On-demand network of certified biomedical engineers for rapid equipment repair and maintenance",
    "provider": {
      "@type": "Organization",
      "name": "Pacem Health Inc."
    },
    "areaServed": {
      "@type": "Place",
      "name": "Africa"
    },
    "serviceType": "Biomedical Engineering Services"
  };

  const [activeTab, setActiveTab] = useState('network');

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Structured Data for SEO */}
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] via-[#0033A0] to-[#00A0DC] text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Wrench className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl">FieldPro™ Biomedical Technician Network</h1>
            </div>
            <p className="text-xl md:text-2xl text-white/95 mb-6">
              On-demand network of certified biomedical engineers for rapid equipment repair, preventive maintenance, and installation. Our distributed technician model brings specialized expertise to facilities across Africa—solving the medical equipment maintenance crisis.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
                <Link href="/support/platform-systems-support">Request Service Coverage Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <Link href="/support/donor-ngo-government">Download Service Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Africa Context Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-8">Built for African Healthcare Realities</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Up to 50% of medical equipment in African health facilities sits idle due to minor breakdowns—not because parts are unavailable, but because qualified biomedical technicians cannot reach remote locations. Traditional manufacturer service contracts don't cover rural areas, and in-house biomedical departments can't keep pace with diverse equipment portfolios.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our FieldPro™ network deploys certified biomedical engineers strategically across regions, with mobile apps for work order management, remote video troubleshooting, and digital service documentation. Technicians carry common spare parts inventories and can access manufacturer technical libraries through the platform—bringing specialist expertise to facilities that would otherwise wait weeks for service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We integrate directly with Asset360™ equipment management systems, enabling automatic technician dispatch when maintenance is due or equipment malfunctions. This proactive model has reduced equipment downtime by 60% and extended equipment lifespan by 30-50% through proper preventive maintenance rather than reactive repairs.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=80"
                alt="Biomedical technician repairing medical equipment in African hospital"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Comprehensive Biomedical Engineering Services</h2>
            <p className="text-xl text-gray-600">End-to-end equipment lifecycle support with certified technicians</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#0033A0]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Rapid Emergency Repair Response</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Critical equipment failures receive priority dispatch with same-day service in urban areas and 24-48 hour response for rural facilities—minimizing clinical service disruptions.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority routing for ICU, OR, and diagnostic equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Real-time technician location tracking and ETA updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Remote video troubleshooting for immediate diagnosis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Temporary equipment rental during extended repairs</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#00A0DC]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Preventive Maintenance Programs</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Scheduled maintenance visits based on manufacturer specifications and Asset360™ usage data—preventing breakdowns through proactive service rather than reactive repairs.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Customized maintenance schedules for each equipment type</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Calibration, cleaning, and performance verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Digital service logs with photo documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automatic integration with Asset360™ platform</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#0033A0]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Wrench className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Installation & Commissioning Services</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Professional installation, calibration, and staff training for new equipment—ensuring optimal performance and compliance with manufacturer specifications from day one.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Site readiness assessment and infrastructure verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Equipment unpacking, assembly, and calibration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Staff training and competency verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Acceptance testing and regulatory documentation</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#00A0DC]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Technical Training & Capacity Building</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive training programs for clinical and biomedical staff—building in-house capacity for basic troubleshooting and preventive maintenance to reduce dependency on external technicians.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Equipment operation and safety training for clinical staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">First-line troubleshooting for in-house biomedical teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Preventive maintenance procedures and documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Certification programs for biomedical technicians</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">How FieldPro™ Works</h2>
            <p className="text-xl text-gray-600">Seamless service delivery from request to resolution</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('network')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'network'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Technician Network
            </button>
            <button
              onClick={() => setActiveTab('dispatch')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'dispatch'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Service Dispatch
            </button>
            <button
              onClick={() => setActiveTab('quality')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'quality'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Quality Assurance
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'pricing'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Pricing Models
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-xl p-8">
            {activeTab === 'network' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Distributed Technician Network Model</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      FieldPro™ operates a hybrid employment model combining full-time regional technicians with vetted independent specialists. All technicians undergo rigorous certification including manufacturer-specific training for major equipment brands (GE, Philips, Siemens, Mindray).
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Regional hubs in major cities for rapid urban response</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Independent specialists covering rural corridors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Mobile technician app with work order management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Common spare parts kits carried by all technicians</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg text-[#0033A0] mb-3">Technician Qualifications</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                        <p>Biomedical engineering degree or diploma with 3+ years experience</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                        <p>Manufacturer-specific certifications (GE, Philips, Siemens)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                        <p>Background checks and professional reference verification</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                        <p>Quarterly competency assessments and continuing education</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                        <p>Customer service training and professionalism standards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'dispatch' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Intelligent Service Dispatch</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Service requests are automatically routed to the nearest qualified technician based on real-time GPS location, equipment expertise, current workload, and parts availability. The system prioritizes critical equipment to minimize clinical service disruptions.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Automatic routing based on proximity and expertise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Real-time ETA updates sent to facility managers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Remote video consultation before dispatch when possible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Escalation protocols for complex or urgent cases</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg text-[#0033A0] mb-3">Service Request Process</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                        <p>Facility submits request via mobile app, web, or phone</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                        <p>System assigns priority level and identifies qualified technicians</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                        <p>Technician accepts assignment and provides ETA</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                        <p>On-site repair with digital documentation and photos</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
                        <p>Service completion sign-off and performance rating</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'quality' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Quality Assurance & Accountability</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Service Documentation</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Every service visit is comprehensively documented through the FieldPro™ mobile app, creating permanent digital records integrated with Asset360™ equipment profiles.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Photo Documentation:</strong> Before/after images of repairs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Diagnostic Reports:</strong> Detailed fault analysis and root causes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Parts Used:</strong> Serial numbers and inventory tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Performance Testing:</strong> Post-repair calibration verification</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Performance Monitoring</h4>
                    <div className="bg-white p-6 rounded-lg space-y-3 text-sm">
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Customer Ratings</strong></p>
                        <p className="text-gray-600">Facilities rate technicians after each visit on quality, professionalism, timeliness</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>First-Time Fix Rate</strong></p>
                        <p className="text-gray-600">Percentage of repairs completed in single visit without return trips</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Response Time</strong></p>
                        <p className="text-gray-600">Average time from request to on-site arrival for each priority level</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Equipment Uptime</strong></p>
                        <p className="text-gray-600">Post-service functionality tracked through Asset360™ integration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Transparent Pricing Models</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Pay-Per-Service</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Fixed pricing for specific services with no hidden fees. Ideal for facilities with occasional equipment needs.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Installation: $150-500</li>
                      <li>• PM Visit: $100-300</li>
                      <li>• Emergency Repair: $200-800</li>
                      <li>• Plus parts at cost</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Monthly Retainer</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Predictable monthly fees covering scheduled preventive maintenance plus discounted emergency repairs.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• $500-2,000/month per facility</li>
                      <li>• Quarterly PM visits included</li>
                      <li>• 40% off emergency repairs</li>
                      <li>• Priority dispatch</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Enterprise Contract</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Comprehensive coverage for health systems managing multiple facilities and large equipment portfolios.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Custom pricing per equipment item</li>
                      <li>• Unlimited PM and repairs</li>
                      <li>• Dedicated account manager</li>
                      <li>• SLA guarantees</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Proven Impact Across African Health Systems</h2>
            <p className="text-xl text-gray-600">Real-world results from biomedical technician network deployments</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">60%</div>
              <p className="text-lg text-gray-700 mb-2">Reduction in equipment downtime</p>
              <p className="text-sm text-gray-600">Through rapid response and preventive maintenance programs</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">24-48h</div>
              <p className="text-lg text-gray-700 mb-2">Rural facility response time</p>
              <p className="text-sm text-gray-600">Average time from service request to technician arrival in remote areas</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">85%</div>
              <p className="text-lg text-gray-700 mb-2">First-time fix rate</p>
              <p className="text-sm text-gray-600">Repairs completed in single visit without return trips or escalation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Explanation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-6">What Biomedical Technician Networks Deliver</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Biomedical technician networks solve Africa's medical equipment maintenance crisis by bringing specialized expertise to facilities that cannot support full-time in-house biomedical departments. Our distributed model positions certified technicians strategically across regions, enabling rapid response to equipment failures that would otherwise cause prolonged service disruptions.
            </p>
            <p>
              Remote video troubleshooting resolves approximately 30% of reported issues without site visits, providing immediate support that saves facilities days or weeks of waiting time. For issues requiring on-site service, our mobile app automatically routes work orders to the nearest qualified technician with appropriate parts inventory—minimizing travel time and maximizing first-time fix rates.
            </p>
            <p>
              Integration with Asset360™ equipment management systems enables proactive preventive maintenance scheduling based on actual usage data rather than arbitrary time intervals. This prevents breakdowns before they occur, extending equipment lifespan by 30-50% while reducing overall maintenance costs through planned service rather than emergency repairs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] via-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to End Equipment Downtime?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team can assess your current equipment portfolio and service coverage, then design a customized FieldPro™ implementation that delivers measurable improvements in equipment uptime and maintenance efficiency.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
              <Link href="/support/platform-systems-support">Schedule Coverage Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <Link href="/advanced-solutions">Explore All Advanced Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl text-[#0033A0] mb-2">Related Advanced Solutions</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/advanced-solutions/asset360-equipment-lifecycle" className="bg-white p-6 rounded-xl hover:shadow-lg transition-all border border-gray-200 group">
              <h4 className="text-xl text-[#0033A0] mb-3">Asset360™ Equipment Management</h4>
              <p className="text-gray-600 mb-4">
                Unified platform for medical equipment and fleet tracking with predictive maintenance and utilization analytics.
              </p>
              <span className="text-[#00A0DC] flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link href="/advanced-solutions/digital-health-platforms" className="bg-white p-6 rounded-xl hover:shadow-lg transition-all border border-gray-200 group">
              <h4 className="text-xl text-[#0033A0] mb-3">Digital Health Platforms</h4>
              <p className="text-gray-600 mb-4">
                Comprehensive HMIS, telemedicine, EMR, and patient engagement systems for modern healthcare delivery.
              </p>
              <span className="text-[#00A0DC] flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link href="/advanced-solutions" className="bg-white p-6 rounded-xl hover:shadow-lg transition-all border border-gray-200 group">
              <h4 className="text-xl text-[#0033A0] mb-3">View All Solutions</h4>
              <p className="text-gray-600 mb-4">
                Explore our complete portfolio of advanced technology solutions for African health systems.
              </p>
              <span className="text-[#00A0DC] flex items-center gap-2 group-hover:gap-3 transition-all">
                Browse solutions <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}