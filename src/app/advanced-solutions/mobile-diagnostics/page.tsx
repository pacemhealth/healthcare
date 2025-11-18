import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { CheckCircle2, ArrowRight, Smartphone, MapPin, Activity, Truck, Users, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { StructuredData, generateServiceSchema, generateBreadcrumbSchema } from '../../../components/StructuredData';
import { SEOHead } from '../../../components/SEOHead';

export default function MobileDiagnostics() {
  const serviceSchema = generateServiceSchema({
    name: "Mobile Diagnostics & Point-of-Care Testing",
    description: "Portable diagnostic solutions and mobile laboratories for remote and rural African communities",
    provider: "Pacem Health Inc.",
    areaServed: ["Africa", "Rural Africa"],
    serviceType: "Mobile Healthcare Diagnostics"
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.pacemhealth.com" },
    { name: "Advanced Solutions", url: "https://www.pacemhealth.com/advanced-solutions" },
    { name: "Mobile Diagnostics", url: "https://www.pacemhealth.com/advanced-solutions/mobile-diagnostics" }
  ]);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Mobile Diagnostics & Point-of-Care Testing | Portable Labs Rural Africa | Pacem Health"
        description="Portable diagnostic units and mobile laboratories extending specialized care to remote African communities. Solar-powered mobile clinics, rapid testing kits, and point-of-care devices bringing lab-quality diagnostics to the last mile."
        keywords={[
          'mobile diagnostics Africa',
          'point of care testing',
          'portable laboratory equipment',
          'rural healthcare diagnostics',
          'mobile clinics Africa',
          'rapid diagnostic tests',
          'last mile healthcare'
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
              Mobile Diagnostics & Point-of-Care Testing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Portable diagnostic units that extend specialized care into hard-to-reach communities. Our mobile solutions bring laboratory-quality testing directly to patients who need it most.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
                <Link href="/support/platform-systems-support">Request Mobile Unit Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <Link href="/support/request-equipment-quote">Download Equipment Catalog</Link>
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
                <h2 className="text-2xl text-[#0033A0] mb-3">Powered by Pacem's Integrated Platform Ecosystem</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mobile Diagnostics units leverage our proprietary platforms for complete operational support:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link href="/advanced-solutions/asset360-equipment-lifecycle" className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-all">
                    <div className="text-[#0033A0] mb-2">Asset360™ Integration</div>
                    <div className="text-sm text-gray-600">Track mobile unit equipment, schedule maintenance, monitor usage</div>
                  </Link>
                  <Link href="/advanced-solutions/fleet-equipment-management" className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-all">
                    <div className="text-[#00A0DC] mb-2">Fleet Management</div>
                    <div className="text-sm text-gray-600">Optimize mobile unit routing, track locations, schedule deployments</div>
                  </Link>
                  <Link href="/advanced-solutions/fieldpro-biomedical-network" className="p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-all">
                    <div className="text-[#0033A0] mb-2">FieldPro™ Support</div>
                    <div className="text-sm text-gray-600">On-demand technicians for mobile unit equipment repairs</div>
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
                Bringing Healthcare to Communities in Need
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  In many African communities, accessing diagnostic services means <span className="text-[#0033A0]">traveling long distances, waiting weeks for appointments, and facing prohibitive costs</span>. By the time patients reach diagnostic facilities, diseases have often progressed beyond early intervention stages.
                </p>
                <p>
                  Our Mobile Diagnostics solutions bring laboratory-quality testing, imaging, and specialist consultations directly to underserved populations. From portable ultrasound units for maternal health to mobile laboratories for infectious disease screening, we deploy technology that works reliably in remote settings.
                </p>
                <p>
                  Each mobile diagnostic unit is a complete healthcare ecosystem—equipped with point-of-care testing devices, telemedicine connectivity for specialist support, and digital health record integration to ensure continuity of care. We handle everything from vehicle conversion and equipment installation to training, maintenance, and ongoing technical support.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639154968821-6dbc3efb8d23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBtZWRpY2FsJTIwY2xpbmljJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NTk1OTAwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mobile diagnostic unit providing healthcare services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">
              Mobile Diagnostic Capabilities
            </h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Complete diagnostic services delivered directly to remote communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mobile Laboratory Services */}
            <Card className="border-t-4 border-[#0033A0]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-[#0033A0] mb-4">Mobile Laboratory Services</h3>
                <p className="text-gray-700 mb-6">
                  Fully equipped mobile laboratories bring point-of-care testing for infectious diseases, chronic conditions, and general health screening to remote communities.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#0033A0]">Infectious Disease Testing</div>
                      <div className="text-sm text-gray-600">HIV, TB, malaria, COVID-19 rapid tests and confirmatory assays</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#0033A0]">Chronic Disease Screening</div>
                      <div className="text-sm text-gray-600">Diabetes, hypertension, cholesterol, kidney function testing</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#0033A0]">Digital Results Integration</div>
                      <div className="text-sm text-gray-600">Results uploaded to EHR systems for continuity of care</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Portable Imaging Solutions */}
            <Card className="border-t-4 border-[#00A0DC]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-[#00A0DC] mb-4">Portable Imaging Solutions</h3>
                <p className="text-gray-700 mb-6">
                  Battery-powered ultrasound and portable X-ray units provide diagnostic imaging in areas without reliable electricity.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#00A0DC]">Maternal Health Ultrasound</div>
                      <div className="text-sm text-gray-600">Prenatal screening, fetal monitoring, obstetric emergencies</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#00A0DC]">Portable Digital X-Ray</div>
                      <div className="text-sm text-gray-600">Chest X-rays for TB screening, trauma assessment</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#00A0DC]">Telemedicine Radiology</div>
                      <div className="text-sm text-gray-600">Remote radiologist review via cloud connectivity</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Telemedicine & Specialist Consultations */}
            <Card className="border-t-4 border-[#0033A0]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-[#0033A0] mb-4">Telemedicine & Specialist Consultations</h3>
                <p className="text-gray-700 mb-6">
                  Satellite connectivity enables video consultations with specialists, bringing expert care to patients in remote locations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#0033A0]">Real-Time Video Consultations</div>
                      <div className="text-sm text-gray-600">Connect patients with urban specialists via satellite</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#0033A0]">Remote Case Review</div>
                      <div className="text-sm text-gray-600">Specialists review test results and images for complex cases</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#0033A0]">Store-and-Forward</div>
                      <div className="text-sm text-gray-600">Asynchronous consultations when real-time not available</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Equipment Tracking & Fleet Management */}
            <Card className="border-t-4 border-[#00A0DC]">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl text-[#00A0DC] mb-4">Integrated Fleet & Asset Management</h3>
                <p className="text-gray-700 mb-6">
                  Asset360™ and Fleet Management integration provides complete operational visibility for mobile diagnostic units.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#00A0DC]">Real-Time Location Tracking</div>
                      <div className="text-sm text-gray-600">GPS tracking of mobile units via Fleet Management system</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#00A0DC]">Equipment Lifecycle Tracking</div>
                      <div className="text-sm text-gray-600">Asset360™ manages all mobile unit equipment maintenance</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-[#00A0DC]">FieldPro™ Technical Support</div>
                      <div className="text-sm text-gray-600">On-demand technician dispatch for equipment repairs</div>
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
            <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-6">Benefits of Mobile Diagnostics</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Expand Access</h3>
              <p className="text-gray-700 leading-relaxed">
                Bring specialized diagnostics to 5 million+ patients in remote communities who would otherwise lack access to quality healthcare.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Early Detection</h3>
              <p className="text-gray-700 leading-relaxed">
                Enable early disease detection and intervention before conditions progress to advanced stages requiring expensive treatment.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center mb-4 mx-auto">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl text-[#0033A0] mb-3">Complete Integration</h3>
              <p className="text-gray-700 leading-relaxed">
                Seamlessly integrates with Asset360™, Fleet Management, and FieldPro™ for comprehensive operational support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] via-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Bring Diagnostics to Remote Communities</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Deploy mobile diagnostic units powered by Pacem's integrated platform ecosystem for complete operational support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
              <Link href="/support/platform-systems-support">Request Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              <Link href="/support/request-equipment-quote">Get Equipment Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-[#0033A0] mb-2">Supporting Infrastructure</h3>
            <p className="text-gray-600">Mobile diagnostics powered by Pacem's proprietary platform ecosystem</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/advanced-solutions/asset360-equipment-lifecycle" className="bg-white p-6 rounded-lg hover:shadow-md transition-all border border-gray-200">
              <h4 className="text-xl text-[#0033A0] mb-2">Asset360™</h4>
              <p className="text-gray-600 text-sm mb-3">Track and maintain all mobile unit diagnostic equipment</p>
              <span className="text-[#00A0DC] text-sm flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link href="/advanced-solutions/fleet-equipment-management" className="bg-white p-6 rounded-lg hover:shadow-md transition-all border border-gray-200">
              <h4 className="text-xl text-[#0033A0] mb-2">Fleet Management</h4>
              <p className="text-gray-600 text-sm mb-3">Optimize mobile unit routing and deployment scheduling</p>
              <span className="text-[#00A0DC] text-sm flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <Link href="/advanced-solutions/fieldpro-biomedical-network" className="bg-white p-6 rounded-lg hover:shadow-md transition-all border border-gray-200">
              <h4 className="text-xl text-[#0033A0] mb-2">FieldPro™</h4>
              <p className="text-gray-600 text-sm mb-3">On-demand technician support for equipment repairs</p>
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
