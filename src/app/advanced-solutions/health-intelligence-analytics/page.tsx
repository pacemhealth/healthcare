import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  BarChart3, 
  TrendingUp, 
  Database,
  Activity,
  Target,
  Map,
  Users,
  AlertTriangle,
  Calendar,
  FileText,
  Zap,
  Eye
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { StructuredData, generateBreadcrumbSchema } from '../../../components/StructuredData';

export default function HealthIntelligenceAnalytics() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.pacemhealth.com" },
    { name: "Advanced Solutions", url: "https://www.pacemhealth.com/advanced-solutions" },
    { name: "Health Intelligence & Analytics", url: "https://www.pacemhealth.com/advanced-solutions/health-intelligence-analytics" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Health Intelligence & Analytics",
    "description": "Transform health system data into actionable insights through real-time dashboards and predictive analytics",
    "provider": {
      "@type": "Organization",
      "name": "Pacem Health Inc."
    },
    "areaServed": {
      "@type": "Place",
      "name": "Africa"
    },
    "serviceType": "Health Data Analytics & Intelligence"
  };

  const [activeTab, setActiveTab] = useState('dashboards');

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
                <BarChart3 className="h-7 w-7 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl">Health Intelligence & Analytics</h1>
            </div>
            <p className="text-xl md:text-2xl text-white/95 mb-6">
              Transform health system data into actionable insights through real-time dashboards, predictive analytics, and automated reporting. Our intelligence platforms integrate data from all sources—HMIS, EMR, supply chain, equipment, and field operations—providing unified visibility for evidence-based decision-making.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
                <Link href="/support/platform-systems-support">Request Analytics Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <Link href="/support/donor-ngo-government">Download Analytics Overview</Link>
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
                African health systems generate vast amounts of data through facility reporting, disease surveillance, supply chain tracking, and equipment monitoring—yet most of this information remains trapped in disconnected systems, making real-time decision-making impossible. Program managers wait weeks for aggregated reports that arrive too late to influence operational decisions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our health intelligence platforms integrate data across all Pacem systems—HMIS, EMR, MedTrace™ pharmaceuticals, Asset360™ equipment, FieldPro™ technicians, and fleet operations—creating unified dashboards that provide instant visibility into health system performance. Predictive analytics identify emerging disease outbreaks, equipment failures, and supply stockouts before they become crises.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We design analytics for decision-makers, not data scientists—with intuitive visualizations, automated insights, and mobile-optimized interfaces accessible on smartphones. Role-based dashboards ensure facility managers, district health officers, program directors, and ministers see exactly the information they need without overwhelming complexity.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Health data analytics dashboard displaying African healthcare metrics"
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
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Comprehensive Analytics & Intelligence</h2>
            <p className="text-xl text-gray-600">From raw data to actionable insights in real-time</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#0033A0]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Real-Time Performance Dashboards</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Live visualization of key health indicators across facilities, districts, and national programs—updating automatically as field data flows in without manual compilation.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Customizable KPI dashboards for each organizational level</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Drill-down from national to facility-level granularity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Mobile-optimized for smartphone access anywhere</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automatic alerts when indicators fall outside targets</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#00A0DC]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Predictive Analytics & Forecasting</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Machine learning models predict disease outbreaks, equipment failures, supply stockouts, and patient demand—enabling proactive management instead of reactive firefighting.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Disease outbreak early warning based on case trends</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Supply chain forecasting prevents stockouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Equipment failure prediction for preventive maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Patient demand forecasting for resource allocation</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#0033A0]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Map className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Geospatial Analytics & Mapping</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Interactive maps visualize health indicators, disease hotspots, service gaps, and resource distribution—revealing geographic patterns invisible in traditional reports.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Disease burden mapping with outbreak visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Facility catchment areas and service coverage gaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Fleet and ambulance tracking with heat maps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Infrastructure planning and resource optimization</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-[#00A0DC]">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-[#0033A0] mb-3">Automated Reporting & Compliance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    One-click generation of donor reports, government submissions, and WHO compliance documents—eliminating weeks of manual data compilation and formatting.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Pre-configured templates for WHO, USAID, Global Fund</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Scheduled automatic report generation and distribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom report builder for ad-hoc analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Export to PDF, Excel, PowerPoint for stakeholders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Advanced Analytics Capabilities</h2>
            <p className="text-xl text-gray-600">Comprehensive intelligence across all health system operations</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('dashboards')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'dashboards'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Performance Dashboards
            </button>
            <button
              onClick={() => setActiveTab('disease')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'disease'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Disease Surveillance
            </button>
            <button
              onClick={() => setActiveTab('supply')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'supply'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Supply Chain
            </button>
            <button
              onClick={() => setActiveTab('integration')}
              className={`px-6 py-3 transition-all ${
                activeTab === 'integration'
                  ? 'border-b-2 border-[#0033A0] text-[#0033A0]'
                  : 'text-gray-600 hover:text-[#0033A0]'
              }`}
            >
              Data Integration
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-xl p-8">
            {activeTab === 'dashboards' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Real-Time Performance Intelligence</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our dashboard platform provides role-specific views for every organizational level—from individual health workers tracking their daily activities through national ministers monitoring country-wide program performance. Each user sees exactly the metrics relevant to their responsibilities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Facility-level operational metrics for managers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">District aggregations for health officers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Program-specific views for disease control managers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Executive summaries for ministry leadership</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg text-[#0033A0] mb-3">Dashboard Categories</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                        <p><strong>Clinical Services:</strong> Patient volumes, wait times, treatment outcomes</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                        <p><strong>Disease Programs:</strong> HIV/TB/Malaria case management and outcomes</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                        <p><strong>Maternal & Child Health:</strong> ANC coverage, immunization rates, child mortality</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#0033A0] text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                        <p><strong>Resource Management:</strong> Equipment uptime, supply availability, fleet utilization</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'disease' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Disease Surveillance & Outbreak Detection</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Advanced algorithms continuously analyze disease reporting patterns to identify outbreaks before they escalate—detecting unusual case clusters, seasonal deviations, and cross-border transmission patterns that would be invisible in weekly aggregated reports.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Real-time case-based surveillance with alert thresholds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Syndromic surveillance for early outbreak warning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Geographic hotspot mapping with transmission modeling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Automatic alerts to district and national teams</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg text-[#0033A0] mb-3">Surveillance Capabilities</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Outbreak Prediction</strong></p>
                        <p className="text-gray-600">Machine learning identifies patterns preceding historical outbreaks</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Contact Tracing</strong></p>
                        <p className="text-gray-600">Automated contact identification and follow-up tracking</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Laboratory Integration</strong></p>
                        <p className="text-gray-600">Test results feed directly into surveillance dashboards</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Cross-Border Monitoring</strong></p>
                        <p className="text-gray-600">Regional disease patterns for early international alerts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'supply' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Supply Chain Intelligence</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Predictive Supply Chain Management</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Integration with MedTrace™ pharmaceutical tracking provides complete supply chain visibility from manufacturer through patient dispensing. Predictive algorithms forecast stockouts weeks in advance, enabling proactive procurement instead of emergency orders.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Consumption Forecasting:</strong> Predict future demand based on trends</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Stockout Alerts:</strong> Early warning before inventory depletes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Expiry Tracking:</strong> Prevent wastage from expired products</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Distribution Optimization:</strong> Route planning for deliveries</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Equipment Performance Analytics</h4>
                    <div className="bg-white p-6 rounded-lg space-y-3 text-sm">
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Uptime Monitoring</strong></p>
                        <p className="text-gray-600">Real-time equipment availability and downtime tracking</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Maintenance Forecasting</strong></p>
                        <p className="text-gray-600">Predict when preventive maintenance is needed</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>Utilization Analytics</strong></p>
                        <p className="text-gray-600">Identify underutilized equipment for redistribution</p>
                      </div>
                      <div>
                        <p className="text-[#0033A0] mb-1"><strong>ROI Calculation</strong></p>
                        <p className="text-gray-600">Cost-per-use and total cost of ownership analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'integration' && (
              <div>
                <h3 className="text-2xl text-[#0033A0] mb-6">Unified Data Integration</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Cross-Platform Data Aggregation</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Our analytics platform automatically integrates data from all Pacem systems and external sources—HMIS, EMR, MedTrace™, Asset360™, FieldPro™, DHIS2, laboratory systems, and financial platforms—creating a single source of truth.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Real-time data synchronization across platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Automated data quality validation and cleaning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Master data management for consistency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">API connectors for third-party systems</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg text-[#0033A0] mb-3">Data Sources Integrated</h4>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-[#0033A0] text-sm"><strong>Clinical Systems:</strong> EMR, HMIS, laboratory, radiology</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-[#0033A0] text-sm"><strong>Supply Chain:</strong> MedTrace™, procurement, inventory</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-[#0033A0] text-sm"><strong>Equipment:</strong> Asset360™, FieldPro™, maintenance logs</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-[#0033A0] text-sm"><strong>Operations:</strong> Fleet tracking, staff attendance, financials</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <p className="text-[#0033A0] text-sm"><strong>External:</strong> DHIS2, WHO reports, donor platforms</p>
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
            <p className="text-xl text-gray-600">Real-world results from health intelligence implementations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">70%</div>
              <p className="text-lg text-gray-700 mb-2">Faster decision-making</p>
              <p className="text-sm text-gray-600">Real-time dashboards eliminate weeks of manual report compilation</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">3-4 weeks</div>
              <p className="text-lg text-gray-700 mb-2">Early outbreak detection</p>
              <p className="text-sm text-gray-600">Predictive algorithms identify disease outbreaks before they escalate</p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl text-[#0033A0] mb-3">90%</div>
              <p className="text-lg text-gray-700 mb-2">Reduction in stockout events</p>
              <p className="text-sm text-gray-600">Predictive supply chain analytics enable proactive procurement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Explanation */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-6">What Health Intelligence Delivers</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Health intelligence platforms transform disconnected data into unified visibility that enables evidence-based decision-making at every organizational level. Real-time dashboards eliminate the weeks-long delay between field activities and management awareness—enabling rapid response to emerging challenges before they become crises.
            </p>
            <p>
              Predictive analytics shift health system management from reactive to proactive—identifying disease outbreaks 3-4 weeks earlier than traditional surveillance, preventing equipment failures through usage-based maintenance scheduling, and forecasting supply stockouts with sufficient lead time for procurement. This anticipatory approach has reduced emergency interventions by 60% in implementation countries.
            </p>
            <p>
              Integration across all data sources—clinical, supply chain, equipment, operations, and financial—creates powerful synergies invisible to isolated systems. Disease outbreak detection triggers automatic supply chain alerts for treatment commodities, equipment downtime patterns inform procurement priorities, and fleet utilization analytics optimize ambulance deployment. This holistic intelligence drives system-wide optimization impossible through disconnected point solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] via-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Transform Data into Insights?</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our team can assess your current data landscape and design a customized health intelligence platform that provides real-time visibility across all health system operations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
              <Link href="/support/platform-systems-support">Schedule Analytics Demo</Link>
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
            <Link href="/advanced-solutions/digital-health-platforms" className="bg-white p-6 rounded-xl hover:shadow-lg transition-all border border-gray-200 group">
              <h4 className="text-xl text-[#0033A0] mb-3">Digital Health Platforms</h4>
              <p className="text-gray-600 mb-4">
                HMIS, EMR, telemedicine, and immunization registries providing the data foundation for analytics.
              </p>
              <span className="text-[#00A0DC] flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link href="/advanced-solutions/medtrace-pharmaceutical-tracking" className="bg-white p-6 rounded-xl hover:shadow-lg transition-all border border-gray-200 group">
              <h4 className="text-xl text-[#0033A0] mb-3">MedTrace™ Pharmaceutical Tracking</h4>
              <p className="text-gray-600 mb-4">
                Supply chain intelligence powered by blockchain pharmaceutical tracking and forecasting.
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