import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  Database, 
  QrCode, 
  Calendar,
  AlertCircle,
  BarChart3,
  Wrench,
  TrendingUp,
  MapPin,
  Clock,
  Settings,
  Smartphone,
  FileText
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { StructuredData, generateBreadcrumbSchema } from '../../../components/StructuredData';

export default function Asset360EquipmentLifecycle() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.pacemhealth.com" },
    { name: "Advanced Solutions", url: "https://www.pacemhealth.com/advanced-solutions" },
    { name: "Asset360™ Equipment Lifecycle", url: "https://www.pacemhealth.com/advanced-solutions/asset360-equipment-lifecycle" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Asset360™ Equipment Lifecycle Management",
    "description": "Complete medical equipment and fleet tracking from procurement through decommissioning",
    "provider": {
      "@type": "Organization",
      "name": "Pacem Health Inc."
    },
    "areaServed": {
      "@type": "Place",
      "name": "Africa"
    },
    "serviceType": "Medical Equipment & Fleet Management"
  };

  const [activeTab, setActiveTab] = useState('tracking');

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
              <h1 className="text-4xl md:text-5xl">Asset360™ Equipment Lifecycle Management</h1>
            </div>
            <p className="text-xl md:text-2xl text-white/95 mb-6">
              Complete medical equipment and fleet tracking from procurement through decommissioning. Our unified platform combines asset management, predictive maintenance, GPS fleet monitoring, and utilization analytics to maximize equipment value and eliminate downtime.
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
                African health facilities lose an estimated 40% of equipment value to preventable breakdowns, theft, and poor maintenance planning. Paper-based asset registers cannot track equipment location, service history, or usage patterns—leading to critical equipment sitting idle while facilities purchase unnecessary duplicates.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Asset360™ platform provides unified visibility across medical equipment and transport fleets, with QR code tagging enabling instant smartphone-based tracking of location, service history, and utilization. Predictive maintenance algorithms analyze usage patterns to schedule preventive service before breakdowns occur—extending equipment lifespan by 30-50%.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We integrate with FieldPro™ biomedical technician networks for rapid repair response, GPS tracking for ambulance and supply vehicle fleets, and procurement systems to eliminate duplicate purchases. This comprehensive approach has reduced equipment downtime by 60% while cutting maintenance costs by 35%.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80"
                alt="African healthcare worker managing medical equipment"
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
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Comprehensive Asset Intelligence</h2>
            <p className="text-xl text-gray-600">Complete lifecycle management for medical equipment and transport fleets</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#0033A0]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <QrCode className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">QR Code Asset Tracking</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every equipment item receives a unique QR code tag linking to complete digital records—enabling instant smartphone access to service history, location, and specifications.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Scan QR codes to view complete equipment profiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Track location changes and custody transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Access manuals, training videos, and troubleshooting guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Submit service requests directly from smartphone</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#00A0DC]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Wrench className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Predictive Maintenance & Service Alerts</h3>
                  <p className="text-gray-700 leading-relaxed">
                    AI-powered algorithms analyze usage patterns and manufacturer specifications to automatically schedule preventive maintenance before equipment failures occur.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automated service reminders based on time and usage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Integration with FieldPro™ technician dispatch</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Digital service logs with technician sign-off</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Warranty tracking and parts inventory management</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#0033A0]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">GPS Fleet Monitoring & Logistics</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Real-time GPS tracking for ambulances, supply vehicles, and mobile health units—enabling dispatch optimization, fuel monitoring, and geofencing alerts.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Live vehicle location tracking and route history</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Geofencing alerts for unauthorized use</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Fuel consumption tracking and driver performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Integration with patient transport scheduling</span>
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
                  <h3 className="text-2xl text-[#0033A0] mb-3">Utilization Analytics & ROI Tracking</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive dashboards reveal which equipment is underutilized, enabling resource optimization, informed procurement decisions, and accurate depreciation accounting.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Usage pattern analysis and idle time tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cost-per-use calculation and ROI metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Equipment sharing recommendations across facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automated depreciation and compliance reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Integration Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Enterprise Asset Management Platform</h2>
            <p className="text-xl text-gray-600">Designed for African infrastructure with global standards</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('tracking')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'tracking'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Asset Tracking
            </button>
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'maintenance'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Maintenance
            </button>
            <button
              onClick={() => setActiveTab('fleet')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'fleet'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Fleet Management
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
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-xl p-8">
            {activeTab === 'tracking' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Complete Asset Lifecycle Visibility</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Asset360™ creates a digital twin for every equipment item from the moment of procurement. QR code tags link physical assets to comprehensive digital records accessible via smartphone, tablet, or web browser.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Procurement tracking with PO and invoice storage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Real-time location updates and custody transfers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Complete service history and maintenance logs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Decommissioning workflow with disposal records</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg text-[#0033A0] mb-3">Lifecycle Stages Tracked</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                        <p><strong>Procurement:</strong> Purchase orders, invoices, warranties</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                        <p><strong>Commissioning:</strong> Installation, calibration, staff training</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                        <p><strong>Operation:</strong> Daily usage, location, performance monitoring</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                        <p><strong>Maintenance:</strong> Preventive and corrective service records</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
                        <p><strong>Decommissioning:</strong> Retirement and disposal documentation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'maintenance' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Predictive Maintenance Intelligence</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our platform combines manufacturer maintenance schedules with actual usage data to create customized preventive maintenance calendars for each equipment item. Automated alerts ensure service happens before breakdowns occur.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Usage-based and time-based service scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Email/SMS alerts to facility managers and technicians</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Digital work orders with mobile technician app</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Parts inventory tracking and procurement triggers</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg text-[#0033A0] mb-3">FieldPro™ Integration</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      Asset360™ connects directly to our FieldPro™ biomedical technician network, enabling one-click dispatch of certified technicians for preventive maintenance and emergency repairs.
                    </p>
                    <div className="border-l-4 border-[#00A0DC] pl-4 bg-blue-50 p-3 rounded">
                      <p className="text-sm text-gray-700">
                        <strong className="text-[#0033A0]">Average Response Time:</strong> 60% of service requests receive same-day technician dispatch. Remote troubleshooting via video call resolves 30% of issues without site visits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'fleet' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">GPS Fleet Management & Logistics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Real-Time Vehicle Tracking</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      GPS tracking devices installed on ambulances, supply vehicles, and mobile health units provide live location data, route history, and geofencing alerts—reducing unauthorized use and improving dispatch efficiency.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Ambulance Dispatch:</strong> Automated nearest-vehicle selection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Supply Chain:</strong> Delivery tracking and proof of delivery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Mobile Clinics:</strong> Outreach program route optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Theft Prevention:</strong> Geofencing and unauthorized movement alerts</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Fleet Performance Analytics</h4>
                    <div className="bg-white p-6 rounded-lg space-y-3 text-sm">
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Fuel Monitoring</strong></p>
                        <p className="text-gray-600">Track fuel consumption, identify inefficient drivers, detect fuel theft</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Driver Behavior</strong></p>
                        <p className="text-gray-600">Monitor speeding, harsh braking, idle time for safety improvements</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Maintenance Scheduling</strong></p>
                        <p className="text-gray-600">Mileage-based service reminders and tire rotation tracking</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Cost Analysis</strong></p>
                        <p className="text-gray-600">Per-mile costs, total cost of ownership, replacement planning</p>
                      </div>
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
                      Asset360™ integrates with existing HMIS, ERP, and procurement systems through standard REST APIs, enabling bidirectional data flow without manual entry.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>HMIS Integration:</strong> Equipment availability for clinical scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>ERP/Finance:</strong> Depreciation, asset value, budget planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Procurement:</strong> Purchase request automation for parts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>FieldPro™:</strong> Technician dispatch and service ticketing</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Deployment Options</h4>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-[#0033A0] mb-1"><strong>Cloud SaaS</strong></p>
                        <p className="text-gray-600 text-sm">Fully managed platform with 99.9% uptime, automatic updates, mobile apps</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-[#0033A0] mb-1"><strong>Hybrid</strong></p>
                        <p className="text-gray-600 text-sm">Local database with cloud sync for offline operation and data sovereignty</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-[#0033A0] mb-1"><strong>On-Premise</strong></p>
                        <p className="text-gray-600 text-sm">Full platform deployed in government data centers with air-gapped security</p>
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
            <p className="text-xl text-gray-600">Real-world results from equipment lifecycle management implementations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">60%</div>
              <p className="text-lg text-gray-700 mb-2">Reduction in equipment downtime</p>
              <p className="text-sm text-gray-600">Through predictive maintenance and rapid technician dispatch</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">35%</div>
              <p className="text-lg text-gray-700 mb-2">Lower maintenance costs</p>
              <p className="text-sm text-gray-600">Preventive service prevents expensive emergency repairs and replacements</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">30-50%</div>
              <p className="text-lg text-gray-700 mb-2">Equipment lifespan extension</p>
              <p className="text-sm text-gray-600">Proper maintenance and utilization tracking maximize asset value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Explanation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-6">What Equipment Lifecycle Management Delivers</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Equipment lifecycle management transforms medical equipment from liability to strategic asset. Complete visibility into location, condition, and utilization enables facilities to identify underutilized equipment that can be shared across locations, preventing unnecessary duplicate purchases.
            </p>
            <p>
              Predictive maintenance scheduling based on actual usage patterns—rather than arbitrary time intervals—ensures equipment receives service exactly when needed. This approach has reduced unexpected breakdowns by 60% while cutting maintenance costs by 35% compared to reactive repair models.
            </p>
            <p>
              GPS fleet tracking for ambulances and supply vehicles provides real-time dispatch optimization, fuel monitoring, and geofencing alerts that prevent unauthorized use. Facilities report 40% reduction in fuel costs and 50% faster emergency response times through intelligent dispatch based on vehicle location.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] via-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Maximize Your Equipment Investment?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team can assess your current asset management practices and design a customized Asset360™ implementation that delivers measurable reductions in downtime and maintenance costs.
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
            <Link href="/advanced-solutions/fieldpro-biomedical-network" className="bg-white p-6 rounded-xl hover:shadow-lg transition-all border border-gray-200 group">
              <h4 className="text-xl text-[#0033A0] mb-3">FieldPro™ Biomedical Technician Network</h4>
              <p className="text-gray-600 mb-4">
                On-demand network of certified biomedical engineers for rapid equipment repair and preventive maintenance.
              </p>
              <span className="text-[#00A0DC] flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link href="/advanced-solutions/medtrace-pharmaceutical-tracking" className="bg-white p-6 rounded-xl hover:shadow-lg transition-all border border-gray-200 group">
              <h4 className="text-xl text-[#0033A0] mb-3">MedTrace™ Pharmaceutical Tracking</h4>
              <p className="text-gray-600 mb-4">
                Blockchain-verified pharmaceutical supply chain tracking with QR code authentication and cold chain monitoring.
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