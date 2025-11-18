import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Database, 
  Smartphone, 
  Activity,
  Shield,
  Users,
  FileText,
  Video,
  Calendar,
  TrendingUp,
  Globe,
  Wifi,
  Lock
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { StructuredData, generateBreadcrumbSchema } from '../../../components/StructuredData';

export default function DigitalHealthPlatforms() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.pacemhealth.com" },
    { name: "Advanced Solutions", url: "https://www.pacemhealth.com/advanced-solutions" },
    { name: "Digital Health Platforms", url: "https://www.pacemhealth.com/advanced-solutions/digital-health-platforms" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Health Platforms",
    "description": "Comprehensive health information systems designed for African realities",
    "provider": {
      "@type": "Organization",
      "name": "Pacem Health Inc."
    },
    "areaServed": {
      "@type": "Place",
      "name": "Africa"
    },
    "serviceType": "Digital Health Technology Systems"
  };

  const [activeTab, setActiveTab] = useState('hmis');

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
                <Database className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl">Digital Health Platforms</h1>
            </div>
            <p className="text-xl md:text-2xl text-white/95 mb-6">
              Comprehensive health information systems designed for African realities. Our integrated platforms include HMIS, telemedicine, electronic medical records, patient engagement tools, and immunization registries—all optimized for offline operation and low-bandwidth environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
                <Link href="/support/platform-systems-support">Request Platform Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <Link href="/support/donor-ngo-government">Download Platform Overview</Link>
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
                Most digital health platforms fail in African settings because they assume reliable electricity, constant internet connectivity, and high-bandwidth infrastructure. These systems work well in European or North American hospitals but become unusable when connectivity drops or power fluctuates—forcing clinicians back to paper records.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our digital health platforms are purpose-built for Africa's infrastructure realities. Offline-first architecture ensures clinical workflows continue functioning without internet, automatically syncing data when connectivity returns. Low-bandwidth optimization enables operation over 2G/3G networks. Solar-compatible hardware designs work with battery backup systems rather than requiring stable grid power.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We provide complete ecosystems—not just software licenses—including hardware procurement, network infrastructure design, staff training, and ongoing technical support. Our implementation approach has achieved 85% sustained platform adoption rates compared to industry averages below 40%, because we design for actual operational conditions rather than ideal scenarios.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                alt="African healthcare worker using digital health platform"
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
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Integrated Digital Health Ecosystem</h2>
            <p className="text-xl text-gray-600">Modular platforms that work together or standalone</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#0033A0]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Health Management Information Systems (HMIS)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    National and district-level health information systems for program management, reporting, and decision-making—with DHIS2 integration and automated indicator calculation.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Real-time facility reporting and aggregation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automated health indicator calculation and dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Disease surveillance and outbreak detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Supply chain and logistics management integration</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#00A0DC]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Video className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Telemedicine & Remote Consultation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Low-bandwidth video consultation platforms connecting rural health workers with specialist physicians—enabling expert guidance for complex cases without patient travel.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Compressed video optimized for 2G/3G networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Store-and-forward for asynchronous consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Integrated EMR access for patient history review</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Digital prescription and treatment plan sharing</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#0033A0]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Electronic Medical Records (EMR)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Patient-level electronic health records with offline capability, clinical decision support, and interoperability—replacing paper files with secure digital documentation.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Offline-first design with automatic cloud sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Clinical decision support and treatment protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lab results, imaging, and prescription management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Patient portal for appointment booking and records access</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#00A0DC]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Activity className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Immunization & Maternal Health Registries</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Program-specific registries for immunization tracking, antenatal care, and child health monitoring—with SMS reminders and defaulter tracing functionality.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automated SMS appointment reminders for mothers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Vaccine schedule management and cold chain tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Growth monitoring and malnutrition screening</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Defaulter identification and community follow-up</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Architecture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Africa-Optimized Technology Architecture</h2>
            <p className="text-xl text-gray-600">Designed for unreliable infrastructure, not ideal conditions</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('hmis')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'hmis'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              HMIS
            </button>
            <button
              onClick={() => setActiveTab('telemedicine')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'telemedicine'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Telemedicine
            </button>
            <button
              onClick={() => setActiveTab('emr')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'emr'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              EMR Systems
            </button>
            <button
              onClick={() => setActiveTab('infrastructure')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'infrastructure'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Infrastructure
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-xl p-8">
            {activeTab === 'hmis' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">National Health Management Information Systems</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our HMIS platforms aggregate facility-level data into district, regional, and national dashboards—providing real-time visibility into health program performance. Integration with DHIS2 enables seamless reporting to WHO and donor agencies.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Facility-level data entry via mobile or web</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Automated indicator calculation and validation rules</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Real-time dashboards for program managers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">DHIS2 integration for WHO/donor reporting</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg text-[#0033A0] mb-3">Key Capabilities</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                        <p><strong>Disease Surveillance:</strong> Real-time outbreak detection with threshold alerts</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                        <p><strong>Supply Chain:</strong> Commodity tracking integrated with MedTrace™</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                        <p><strong>HR Management:</strong> Staff deployment and training records</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                        <p><strong>Financial Tracking:</strong> Budget allocation and expenditure monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'telemedicine' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Low-Bandwidth Telemedicine Platform</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our telemedicine platform is specifically optimized for African bandwidth constraints. Compressed video enables consultations over 2G/3G networks, while store-and-forward functionality works entirely offline for asynchronous case reviews.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Video compression optimized for 256kbps connections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Store-and-forward for offline case submission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Mobile apps for iOS/Android/web access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Specialist networks in cardiology, pediatrics, radiology</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg text-[#0033A0] mb-3">Use Cases</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Specialist Consultation</strong></p>
                        <p className="text-gray-600">Rural clinicians consult urban specialists for complex diagnoses</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Radiology Interpretation</strong></p>
                        <p className="text-gray-600">X-rays/ultrasounds reviewed remotely by radiologists</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Mental Health Support</strong></p>
                        <p className="text-gray-600">Telepsychiatry for areas without mental health specialists</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Training & Mentorship</strong></p>
                        <p className="text-gray-600">Clinical mentorship for junior staff in remote facilities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'emr' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Offline-First Electronic Medical Records</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our EMR systems function fully offline, storing patient records locally on facility devices with automatic cloud synchronization when internet is available. Clinical decision support algorithms work offline using cached protocol databases.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Complete offline functionality with local storage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Automatic conflict resolution when syncing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Clinical protocols and treatment guidelines built-in</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Biometric patient identification via fingerprint</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg text-[#0033A0] mb-3">Clinical Modules</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-[#0033A0]">• Outpatient Care</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-[#0033A0]">• Inpatient Management</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-[#0033A0]">• Laboratory Orders</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-[#0033A0]">• Pharmacy Dispensing</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-[#0033A0]">• Radiology/Imaging</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-[#0033A0]">• Billing & Insurance</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-[#0033A0]">• Maternal & Child Health</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="text-[#0033A0]">• Chronic Disease Mgmt</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'infrastructure' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Infrastructure & Deployment</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Hardware & Connectivity</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      We provide complete technology stacks including solar-powered servers, low-power thin clients, satellite internet where needed, and battery backup systems—not just software that assumes infrastructure exists.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Solar Servers:</strong> Low-power edge computing with battery backup</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Hybrid Connectivity:</strong> Cellular + satellite + WiFi mesh networks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Rugged Devices:</strong> Industrial tablets with drop/water resistance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Secure Storage:</strong> Encrypted local databases with cloud backup</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Deployment Models</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-[#0033A0] mb-1"><strong>Cloud-Hosted SaaS</strong></p>
                        <p className="text-gray-600 text-sm">Fully managed platform with mobile/web access, automatic updates</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-[#0033A0] mb-1"><strong>Hybrid Cloud-Local</strong></p>
                        <p className="text-gray-600 text-sm">Facility servers with cloud sync for data sovereignty compliance</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-[#0033A0] mb-1"><strong>On-Premise</strong></p>
                        <p className="text-gray-600 text-sm">Government data centers with complete control and air-gapped security</p>
                      </div>
                    </div>
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
            <p className="text-xl text-gray-600">Real-world results from digital health platform implementations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">85%</div>
              <p className="text-lg text-gray-700 mb-2">Sustained platform adoption rate</p>
              <p className="text-sm text-gray-600">Compared to industry average below 40% for digital health systems</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">70%</div>
              <p className="text-lg text-gray-700 mb-2">Reduction in reporting time</p>
              <p className="text-sm text-gray-600">Automated data aggregation eliminates manual calculation and compilation</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">99.8%</div>
              <p className="text-lg text-gray-700 mb-2">Offline functionality uptime</p>
              <p className="text-sm text-gray-600">Clinical workflows continue functioning regardless of internet connectivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Explanation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-6">What Digital Health Platforms Deliver</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Digital health platforms eliminate paper-based workflows that create data silos, delay decision-making, and prevent real-time health program management. Our systems provide instant visibility from individual patient encounters through facility performance to national health indicators—enabling evidence-based decision-making at every level.
            </p>
            <p>
              Offline-first architecture ensures clinical workflows continue functioning even without internet connectivity, with automatic data synchronization when connections return. This design achieves 99.8% system availability compared to cloud-only platforms that become unusable during connectivity outages—which occur daily in many African health facilities.
            </p>
            <p>
              Integration across platforms creates powerful synergies: EMR patient data feeds HMIS reporting, telemedicine consultations update patient records, immunization registries trigger SMS reminders, and all systems connect to MedTrace™ pharmaceutical tracking and Asset360™ equipment management. This ecosystem approach delivers exponentially more value than standalone point solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] via-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Transform Your Health Information Systems?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team can assess your current health information needs and design a customized digital health platform implementation that works with your infrastructure realities—not against them.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
              <Link href="/support/platform-systems-support">Schedule Platform Demo</Link>
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
            <Link href="/advanced-solutions/medtrace-pharmaceutical-tracking" className="bg-white p-6 rounded-xl hover:shadow-lg transition-all border border-gray-200 group">
              <h4 className="text-xl text-[#0033A0] mb-3">MedTrace™ Pharmaceutical Tracking</h4>
              <p className="text-gray-600 mb-4">
                Blockchain-verified pharmaceutical supply chain tracking integrating with EMR and HMIS platforms.
              </p>
              <span className="text-[#00A0DC] flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link href="/advanced-solutions/health-intelligence-analytics" className="bg-white p-6 rounded-xl hover:shadow-lg transition-all border border-gray-200 group">
              <h4 className="text-xl text-[#0033A0] mb-3">Health Intelligence & Analytics</h4>
              <p className="text-gray-600 mb-4">
                Real-time dashboards and predictive analytics transforming health data into actionable insights.
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