import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { CheckCircle2, ArrowRight, Truck, MapPin, BarChart3, Clock, Database } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { StructuredData, generateServiceSchema, generateBreadcrumbSchema } from '../../../components/StructuredData';
import { SEOHead } from '../../../components/SEOHead';

export default function FleetEquipmentManagement() {
  const serviceSchema = generateServiceSchema({
    name: "Fleet & Equipment Management Systems",
    description: "Real-time transportation and logistics management for healthcare supply chains and patient transport across Africa",
    provider: "Pacem Health Inc.",
    areaServed: ["Africa"],
    serviceType: "Logistics Technology"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.pacemhealth.com" },
    { name: "Advanced Solutions", url: "https://www.pacemhealth.com/advanced-solutions" },
    { name: "Fleet Management", url: "https://www.pacemhealth.com/advanced-solutions/fleet-equipment-management" }
  ]);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Fleet & Equipment Management | Real-Time Logistics Healthcare Africa | Pacem Health"
        description="Real-time fleet management and logistics technology for African healthcare. Track medical supplies, patient transport, and field personnel with GPS, route optimization, and predictive maintenance. Reduce costs and improve delivery."
        keywords={[
          'fleet management Africa',
          'medical logistics tracking',
          'healthcare transportation',
          'ambulance fleet management',
          'supply chain logistics Africa',
          'GPS tracking healthcare',
          'route optimization Africa'
        ]}
        structuredData={serviceSchema}
      />
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] via-[#0033A0] to-[#00A0DC] text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm">Advanced System Solutions / Pillar 4</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Fleet & Equipment Management Systems
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Real-time managed transportation of goods, patients, and personnel — powered by logistics tech. Our fleet management systems optimize routes, reduce costs, and ensure reliable service delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
                <Link to="/support/platform-systems-support">Request Fleet Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <Link to="/support/technical-support">Download System Overview</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration with Proprietary Platforms */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white border-b-4 border-[#00A0DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#0033A0]">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl text-[#0033A0] mb-3">Enhanced by Asset360™ Integration</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fleet Management Systems integrate seamlessly with Asset360™ equipment lifecycle management for complete vehicle and medical equipment tracking:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link to="/advanced-solutions/asset360-equipment-lifecycle" className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-all">
                    <div className="text-[#0033A0] mb-2">Asset360™ Integration</div>
                    <div className="text-sm text-gray-600">Fleet vehicles tracked as assets with predictive maintenance scheduling</div>
                  </Link>
                  <Link to="/advanced-solutions/medtrace-pharmaceutical-tracking" className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-all">
                    <div className="text-[#00A0DC] mb-2">MedTrace™ Integration</div>
                    <div className="text-sm text-gray-600">Track medicine shipments in transit with cold chain monitoring</div>
                  </Link>
                  <Link to="/advanced-solutions/fieldpro-biomedical-network" className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-all">
                    <div className="text-[#0033A0] mb-2">FieldPro™ Integration</div>
                    <div className="text-sm text-gray-600">Optimize technician routing and mobile service unit dispatch</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-6">
                Intelligent Fleet Operations for Healthcare Delivery
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Healthcare delivery across Africa depends on reliable transportation—from <span className="text-[#0033A0]">emergency patient transfers and mobile clinic deployments to cold chain vaccine delivery and medical supply distribution</span>. Yet many health systems lack visibility into their fleet operations.
                </p>
                <p>
                  Our Fleet & Equipment Management Systems bring enterprise-grade logistics technology to healthcare, providing real-time tracking, route optimization, and predictive maintenance that reduce costs while improving service reliability.
                </p>
                <p>
                  We integrate GPS tracking, telematics, driver behavior monitoring, and automated maintenance scheduling into a unified platform that works even in areas with limited connectivity, ensuring accountability and optimization at every level.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633987212835-4f14d9d435c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGVldCUyMHZlaGljbGVzJTIwdHJhbnNwb3J0YXRpb258ZW58MXx8fHwxNzU5NTg5NzM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fleet of medical transport vehicles"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Platform Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">
              Complete Fleet Management Infrastructure
            </h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              End-to-end solutions covering vehicle tracking, maintenance, driver management, and logistics optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Real-Time Vehicle Tracking */}
            <Card className="border-t-4 border-[#0033A0]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-[#0033A0] mb-4">Real-Time Vehicle Tracking</h3>
                <p className="text-gray-700 mb-6">
                  GPS-enabled tracking provides live visibility into vehicle locations, routes, and status across your entire fleet—ambulances, mobile clinics, and supply delivery vehicles.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#0033A0]">Live Location Tracking</div>
                      <div className="text-sm text-gray-600">Real-time GPS monitoring of all fleet vehicles</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#0033A0]">Geofencing Alerts</div>
                      <div className="text-sm text-gray-600">Automated notifications for unauthorized route deviations</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#0033A0]">Historical Route Playback</div>
                      <div className="text-sm text-gray-600">Review vehicle movements and verify delivery completion</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Route Optimization */}
            <Card className="border-t-4 border-[#00A0DC]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-[#00A0DC] mb-4">Route Optimization & Planning</h3>
                <p className="text-gray-700 mb-6">
                  AI-powered route optimization reduces fuel consumption by 20-30% while improving delivery times and patient transport efficiency.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#00A0DC]">Automated Route Planning</div>
                      <div className="text-sm text-gray-600">AI calculates optimal routes considering traffic, distance, and priorities</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#00A0DC]">Multi-Stop Optimization</div>
                      <div className="text-sm text-gray-600">Optimize delivery sequences for multiple destinations</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#00A0DC]">Fuel Cost Reduction</div>
                      <div className="text-sm text-gray-600">Reduce fuel consumption through optimized routing</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Maintenance Management */}
            <Card className="border-t-4 border-[#0033A0]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-[#0033A0] mb-4">Predictive Maintenance Management</h3>
                <p className="text-gray-700 mb-6">
                  Integration with Asset360™ enables predictive maintenance for fleet vehicles, reducing breakdowns and extending vehicle lifespan.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#0033A0]">Automated Service Scheduling</div>
                      <div className="text-sm text-gray-600">Based on mileage, hours, and manufacturer specifications</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#0033A0]">Service History Tracking</div>
                      <div className="text-sm text-gray-600">Complete maintenance logs integrated with Asset360™</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#0033A0]">Parts Inventory Management</div>
                      <div className="text-sm text-gray-600">Track spare parts usage and automate reordering</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cold Chain Transport Monitoring */}
            <Card className="border-t-4 border-[#00A0DC]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-[#00A0DC] mb-4">Cold Chain Transport Monitoring</h3>
                <p className="text-gray-700 mb-6">
                  Integration with MedTrace™ IoT sensors provides real-time temperature monitoring for vaccine and medicine delivery, ensuring cold chain integrity.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#00A0DC]">Temperature Monitoring</div>
                      <div className="text-sm text-gray-600">Real-time alerts for temperature excursions during transport</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#00A0DC]">Automated Documentation</div>
                      <div className="text-sm text-gray-600">Compliance records for regulatory inspections</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#00A0DC]">MedTrace™ Integration</div>
                      <div className="text-sm text-gray-600">Link transport data to pharmaceutical tracking records</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-6">Benefits of Fleet Management</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Reduce Operating Costs</h3>
              <p className="text-gray-700 leading-relaxed">
                Optimize routes, reduce fuel consumption by 20-30%, and prevent costly vehicle breakdowns through predictive maintenance.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Improve Response Times</h3>
              <p className="text-gray-700 leading-relaxed">
                Faster ambulance dispatch, optimized mobile clinic routes, and efficient medical supply delivery to remote facilities.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Complete Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                Seamlessly connects with Asset360™ for vehicle tracking, MedTrace™ for cold chain monitoring, and FieldPro™ for technician routing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] via-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Optimize Your Healthcare Fleet Operations</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Deploy fleet management systems integrated with our proprietary platforms for complete visibility and control over healthcare transportation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
              <Link to="/support/platform-systems-support">Request Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <Link to="/support/donor-ngo-government">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-[#0033A0] mb-2">Explore Pacem's Proprietary Platforms</h3>
            <p className="text-gray-600">Integrated technology ecosystem for complete health system transformation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/advanced-solutions/asset360-equipment-lifecycle" className="bg-white p-6 rounded-lg hover:shadow-md transition-all border border-gray-200">
              <h4 className="text-xl text-[#0033A0] mb-2">Asset360™</h4>
              <p className="text-gray-600 text-sm mb-3">Equipment and vehicle lifecycle management with predictive maintenance</p>
              <span className="text-[#00A0DC] text-sm flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link to="/advanced-solutions/medtrace-pharmaceutical-tracking" className="bg-white p-6 rounded-lg hover:shadow-md transition-all border border-gray-200">
              <h4 className="text-xl text-[#0033A0] mb-2">MedTrace™</h4>
              <p className="text-gray-600 text-sm mb-3">Cold chain monitoring during medicine transport and delivery</p>
              <span className="text-[#00A0DC] text-sm flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link to="/advanced-solutions/fieldpro-biomedical-network" className="bg-white p-6 rounded-lg hover:shadow-md transition-all border border-gray-200">
              <h4 className="text-xl text-[#0033A0] mb-2">FieldPro™</h4>
              <p className="text-gray-600 text-sm mb-3">Optimize mobile technician routing and service vehicle dispatch</p>
              <span className="text-[#00A0DC] text-sm flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}