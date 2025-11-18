import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  QrCode, 
  Thermometer,
  AlertTriangle,
  BarChart3,
  Lock,
  Database,
  Smartphone,
  TrendingUp,
  Package
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { StructuredData, generateBreadcrumbSchema } from '../../../components/StructuredData';

export default function MedTracePharmaceuticalTracking() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.pacemhealth.com" },
    { name: "Advanced Solutions", url: "https://www.pacemhealth.com/advanced-solutions" },
    { name: "MedTrace™ Pharmaceutical Tracking", url: "https://www.pacemhealth.com/advanced-solutions/medtrace-pharmaceutical-tracking" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "MedTrace™ Pharmaceutical Tracking",
    "description": "End-to-end pharmaceutical supply chain visibility and anti-counterfeiting powered by blockchain",
    "provider": {
      "@type": "Organization",
      "name": "Pacem Health Inc."
    },
    "areaServed": {
      "@type": "Place",
      "name": "Africa"
    },
    "serviceType": "Pharmaceutical Tracking & Anti-Counterfeiting"
  };

  const [activeTab, setActiveTab] = useState('authentication');

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
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl">MedTrace™ Pharmaceutical Tracking</h1>
            </div>
            <p className="text-xl md:text-2xl text-white/95 mb-6">
              End-to-end pharmaceutical supply chain visibility and anti-counterfeiting powered by blockchain. Our tracking systems ensure medicine authenticity from manufacturer to patient.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
                <Link href="/support/platform-systems-support">Request Implementation Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <Link href="/support/donor-ngo-government">Download Technical Specifications</Link>
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
                Counterfeit and substandard medicines represent up to 30% of pharmaceutical products in African markets, causing preventable deaths and undermining confidence in health systems. Traditional supply chains lack visibility, enabling diversion, theft, and parallel markets that governments cannot track or control.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our MedTrace™ platform brings blockchain-verified tracking to pharmaceutical supply chains, providing instant authentication from manufacturer to patient. Every medicine package receives a cryptographically unique QR code that patients and pharmacists can scan via smartphone to verify authenticity in real-time.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We don't just deploy technology—we implement complete anti-counterfeiting ecosystems that include public awareness campaigns, enforcement support for regulatory authorities, IoT integration for cold chain monitoring, and predictive analytics that prevent stockouts before they occur.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80"
                alt="African pharmacist using pharmaceutical tracking system"
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
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Comprehensive Pharmaceutical Intelligence</h2>
            <p className="text-xl text-gray-600">Complete visibility and control over medicine supply chains</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#0033A0]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <QrCode className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Product Authentication & Anti-Counterfeiting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Blockchain-verified QR codes enable instant medicine authentication by patients, pharmacists, and regulators—eliminating counterfeit products from the supply chain.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cryptographically unique QR codes on every package</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Instant smartphone verification with offline capability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Batch, expiry, and manufacturing origin validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Public awareness campaigns and patient education</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#00A0DC]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Real-Time Supply Chain Tracking</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Complete visibility from manufacturer through import, distribution, and dispensing—with immutable blockchain audit trails that prevent diversion and theft.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Track location and custody changes in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Detect unauthorized diversion and parallel markets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automated inventory management with reorder alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Integration with customs and regulatory systems</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#0033A0]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Thermometer className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Cold Chain Monitoring & Compliance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    IoT temperature sensors on vaccines and biologics provide continuous monitoring throughout transport and storage—preventing quality degradation and wastage.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Bluetooth temperature loggers with continuous tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automatic alerts for temperature excursions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Compliance reporting for WHO and donor requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Quarantine flagging for compromised products</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#00A0DC]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Predictive Analytics & Intelligence</h3>
                  <p className="text-gray-700 leading-relaxed">
                    AI-powered demand forecasting, consumption pattern analysis, and counterfeit network mapping—enabling proactive management and enforcement.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Demand forecasting to prevent stockouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Counterfeit network detection and mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Real-time dashboards for regulators and managers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Consumption analytics and utilization reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Standards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Enterprise-Grade Technology Stack</h2>
            <p className="text-xl text-gray-600">Built on global standards, optimized for African infrastructure</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('authentication')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'authentication'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Authentication
            </button>
            <button
              onClick={() => setActiveTab('blockchain')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'blockchain'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Blockchain
            </button>
            <button
              onClick={() => setActiveTab('integration')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'integration'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Integration
            </button>
            <button
              onClick={() => setActiveTab('deployment')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'deployment'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Deployment
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-xl p-8">
            {activeTab === 'authentication' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Blockchain-Verified QR Authentication</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Each medicine package receives a cryptographically unique QR code generated at the point of manufacture or import. These codes are registered on an immutable blockchain ledger with complete product metadata.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">256-bit cryptographic hash functions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Hyperledger blockchain infrastructure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">GS1 barcode standard compatibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Offline verification with cached databases</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg text-[#0033A0] mb-3">Verification Process</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                        <p>Patient or pharmacist scans QR code using smartphone</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                        <p>System verifies code against blockchain ledger</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                        <p>Batch details, expiry, and scan history displayed</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                        <p>Suspicious patterns trigger automatic regulatory alerts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'blockchain' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Immutable Blockchain Ledger</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our Hyperledger-based blockchain creates an immutable audit trail of every medicine package's journey from manufacturer to patient—making supply chain fraud mathematically impossible.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Distributed ledger with government control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Permissioned network for authorized parties</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Smart contracts for automated compliance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Cryptographic proof of custody transfers</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg text-[#0033A0] mb-3">Data Sovereignty</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Governments maintain complete ownership and control of pharmaceutical supply chain data. Blockchain nodes can be hosted in-country to comply with data sovereignty requirements.
                    </p>
                    <div className="border-l-4 border-[#00A0DC] pl-4 bg-blue-50 p-3 rounded">
                      <p className="text-sm text-gray-700">
                        <strong className="text-[#0033A0]">Security:</strong> End-to-end AES-256 encryption, role-based access control, and regular security audits ensure pharmaceutical data remains protected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'integration' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Seamless System Integration</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Pre-Built Connectors</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      MedTrace™ integrates with existing pharmaceutical management systems, customs databases, and national health information platforms through standard APIs.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Pharmacy Systems:</strong> Bi-directional inventory synchronization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>ERP Platforms:</strong> Supply chain and procurement integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>DHIS2/HMIS:</strong> Health information system connectors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Customs Systems:</strong> Import verification and clearance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg text-[#0033A0] mb-3">API Architecture</h4>
                    <div className="bg-white p-6 rounded-lg space-y-3 text-sm">
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>RESTful APIs</strong></p>
                        <p className="text-gray-600">Standard JSON-based integration with OAuth 2.0 authentication</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Webhook Notifications</strong></p>
                        <p className="text-gray-600">Real-time alerts for counterfeit detections and supply chain events</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Bulk Data Export</strong></p>
                        <p className="text-gray-600">CSV and JSON exports for regulatory reporting and analytics</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>HL7 FHIR Support</strong></p>
                        <p className="text-gray-600">Healthcare interoperability standards for medication tracking</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'deployment' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Flexible Deployment Options</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Cloud-Hosted</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Fully managed SaaS deployment with 99.9% uptime SLA, automatic scaling, and global CDN for fast QR verification.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Fastest time to deployment</li>
                      <li>• Lowest upfront cost</li>
                      <li>• Automatic updates</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Hybrid</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Blockchain nodes in-country with cloud-based mobile apps and dashboards—balancing data sovereignty with accessibility.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Data sovereignty compliance</li>
                      <li>• Global accessibility</li>
                      <li>• Balanced cost model</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg text-[#0033A0] mb-3">On-Premise</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Complete platform deployed within government data centers for maximum control and compliance with strict data regulations.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Full data control</li>
                      <li>• Custom security policies</li>
                      <li>• Regulatory compliance</li>
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
            <p className="text-xl text-gray-600">Real-world results from pharmaceutical tracking implementations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">80%</div>
              <p className="text-lg text-gray-700 mb-2">Reduction in counterfeit medicines</p>
              <p className="text-sm text-gray-600">Through blockchain-verified authentication and enforcement support</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">60%</div>
              <p className="text-lg text-gray-700 mb-2">Fewer stockouts at health facilities</p>
              <p className="text-sm text-gray-600">Using predictive analytics and automated reorder alerts</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">$0.02</div>
              <p className="text-lg text-gray-700 mb-2">Cost per QR code label</p>
              <p className="text-sm text-gray-600">Minimal investment with 10:1 return preventing counterfeit losses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Explanation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-6">What Pharmaceutical Tracking Delivers</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Pharmaceutical tracking eliminates counterfeit medicines from supply chains, prevents stockouts through predictive analytics, and ensures cold chain integrity for vaccines and biologics. Real-time visibility enables rapid response to quality issues and regulatory enforcement against counterfeit networks.
            </p>
            <p>
              With blockchain-verified authentication accessible to anyone with a smartphone, patients can verify medicine authenticity before purchase—creating powerful demand-side pressure that complements regulatory enforcement. This two-pronged approach has reduced counterfeit prevalence by up to 80% in deployment countries.
            </p>
            <p>
              The system's offline-first design ensures QR code verification continues functioning even in areas without cellular coverage, with automatic synchronization when connectivity is restored. This makes pharmaceutical tracking viable across Africa's diverse infrastructure landscape—from urban centers to remote rural facilities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] via-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Protect Your Pharmaceutical Supply Chain?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team can assess your current pharmaceutical supply chain and design a customized MedTrace™ implementation that delivers measurable results in combating counterfeits and preventing stockouts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
              <Link href="/support/platform-systems-support">Schedule Technical Consultation</Link>
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
              <h4 className="text-xl text-[#0033A0] mb-3">Asset360™ Equipment & Fleet Management</h4>
              <p className="text-gray-600 mb-4">
                Unified tracking for medical equipment and transport fleets with GPS monitoring and predictive maintenance.
              </p>
              <span className="text-[#00A0DC] flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link href="/advanced-solutions/health-intelligence-analytics" className="bg-white p-6 rounded-xl hover:shadow-lg transition-all border border-gray-200 group">
              <h4 className="text-xl text-[#0033A0] mb-3">Health Intelligence & Analytics</h4>
              <p className="text-gray-600 mb-4">
                Real-time dashboards, predictive analytics, and automated reporting for health system performance.
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