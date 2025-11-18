import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowLeft, Calendar, Share2, Download, Truck, MapPin, Activity, Bell } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function DigitalFleetPlatform() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#4B2991]">Home</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[#4B2991]">News & Media</Link>
            <span>/</span>
            <span className="text-foreground">Digital Fleet Platform</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/news" className="inline-flex items-center text-[#4B2991] hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#7C944B] text-white rounded-full text-sm">
              Product Launch
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>December 10, 2024</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Pacem Health Launches Next-Generation Digital Fleet Management Platform
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8">
            Cloud-based solution delivers real-time tracking, predictive maintenance scheduling, and comprehensive performance analytics for mobile health units and medical equipment fleets across Africa
          </p>

          {/* Share Actions */}
          <div className="flex flex-wrap gap-3 pb-8 border-b">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>

          {/* Featured Image */}
          <div className="my-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Digital fleet management dashboard"
              className="w-full h-96 object-cover rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-3 text-center">
              The new platform provides real-time visibility and analytics for mobile health units
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Washington, D.C. — Pacem Health today unveiled its Digital Fleet Management Platform, a comprehensive cloud-based solution designed to optimize operations, reduce downtime, and improve service delivery for mobile health units and medical equipment fleets serving communities across Africa.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Addressing Critical Operational Challenges</h2>
            <p className="mb-6">
              Mobile health units and medical equipment fleets play a vital role in extending healthcare services to remote and underserved populations. However, organizations managing these assets face persistent challenges including limited visibility into vehicle locations, reactive maintenance approaches leading to unexpected breakdowns, inefficient route planning, and difficulty tracking service delivery metrics.
            </p>

            <p className="mb-6">
              The Digital Fleet Management Platform addresses these pain points through an integrated suite of capabilities that provide complete operational visibility and enable data-driven decision making. The solution has been specifically designed for the unique requirements of healthcare delivery in resource-limited settings.
            </p>

            <div className="bg-gradient-to-br from-[#7C944B]/5 to-[#4B2991]/5 p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">Core Platform Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#7C944B]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Real-Time Tracking</h4>
                    <p className="text-muted-foreground">GPS-enabled monitoring of vehicle location, route adherence, and service area coverage</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                    <Activity className="h-6 w-6 text-[#4B2991]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Predictive Maintenance</h4>
                    <p className="text-muted-foreground">AI-powered algorithms that forecast maintenance needs before failures occur</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-[#7C944B]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Fleet Performance</h4>
                    <p className="text-muted-foreground">Comprehensive analytics on utilization, fuel efficiency, and service delivery</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                    <Bell className="h-6 w-6 text-[#4B2991]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Smart Alerts</h4>
                    <p className="text-muted-foreground">Automated notifications for maintenance schedules, route deviations, and performance anomalies</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Built for African Healthcare Context</h2>
            <p className="mb-6">
              Recognizing the unique operational environment across Africa, the platform incorporates features specifically designed for low-connectivity settings. The system operates seamlessly in areas with intermittent internet access through intelligent data synchronization and offline capabilities.
            </p>

            <p className="mb-6">
              The mobile application allows drivers and field staff to log activities, record patient encounters, and update vehicle status even without connectivity. Data automatically syncs when connection is restored, ensuring no information is lost and providing continuous operational visibility.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Predictive Maintenance Intelligence</h2>
            <p className="mb-6">
              One of the platform's most powerful features is its predictive maintenance engine. By analyzing historical maintenance data, usage patterns, operating conditions, and equipment specifications, the system can forecast when specific components are likely to need service.
            </p>

            <p className="mb-6">
              This shift from reactive to predictive maintenance delivers significant operational benefits. Organizations can schedule maintenance during planned downtime rather than experiencing unexpected breakdowns during service delivery. Parts and supplies can be procured in advance, reducing emergency procurement costs and minimizing vehicle out-of-service time.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Performance Analytics and Reporting</h2>
            <p className="mb-6">
              The platform provides comprehensive analytics dashboards that translate raw operational data into actionable insights. Fleet managers can track key performance indicators including vehicle utilization rates, service area coverage, patient encounters per route, fuel consumption trends, and maintenance costs per vehicle.
            </p>

            <p className="mb-6">
              Automated reporting features generate regular summaries for different stakeholder audiences. Program managers receive operational performance reports, finance teams get cost analysis breakdowns, and donors receive impact metrics demonstrating service delivery outcomes.
            </p>

            <div className="bg-[#7C944B] text-white p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">Early Adoption Success</h3>
              <p className="text-white/90 mb-4">
                During the pilot phase, three organizations managing mobile health programs in Kenya, Tanzania, and Uganda deployed the platform across a combined fleet of 45 vehicles. Results from the first six months demonstrated the platform's impact:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">32%</div>
                  <div className="text-sm text-white/80">Reduction in unplanned downtime</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">28%</div>
                  <div className="text-sm text-white/80">Increase in service area coverage</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">41%</div>
                  <div className="text-sm text-white/80">Decrease in maintenance costs</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Integration Capabilities</h2>
            <p className="mb-6">
              The platform features open APIs that enable integration with existing health information systems, electronic medical records, and logistics management software. This interoperability ensures the fleet management solution complements rather than duplicates existing technology investments.
            </p>

            <p className="mb-6">
              For organizations using Pacem Health's other digital solutions, the fleet platform integrates seamlessly with inventory management systems, enabling automatic tracking of medical supplies loaded onto mobile units and reconciliation of supplies consumed during service delivery.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Implementation and Support</h2>
            <p className="mb-6">
              Pacem Health provides comprehensive implementation support including hardware installation, staff training, data migration, and system configuration. The company's technical support team offers ongoing assistance through multiple channels including phone, email, and in-person visits.
            </p>

            <p className="mb-6">
              The platform is available through flexible licensing models designed to accommodate organizations of different sizes and budgets. Pricing scales with fleet size, and organizations can choose between subscription-based or perpetual licensing arrangements.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Advancing Mobile Health Service Delivery</h2>
            <p className="mb-6">
              The launch of the Digital Fleet Management Platform represents Pacem Health's continued commitment to leveraging technology for healthcare systems strengthening. By addressing the operational challenges that limit the effectiveness of mobile health programs, the platform enables organizations to extend their reach and impact.
            </p>

            <p className="mb-6">
              As mobile health models continue to expand across Africa, tools that optimize fleet operations become increasingly critical. The platform provides the visibility, intelligence, and control needed to manage these complex operations efficiently and deliver consistent, reliable healthcare services to communities that need them most.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl mb-4">Product Information</h3>
            <div className="text-muted-foreground">
              <p className="mb-2">For product demonstrations or implementation inquiries:</p>
              <p>Pacem Health Digital Solutions</p>
              <p>Email: <a href="mailto:solutions@pacemhealth.com" className="text-[#4B2991] hover:underline">solutions@pacemhealth.com</a></p>
              <p>Phone: +1 (202) 555-0150</p>
            </div>
          </div>

          {/* Related News */}
          <div className="mt-16 pt-8 border-t">
            <h3 className="text-2xl mb-6">Related News</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/news/kenya-moh-partnership">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-xs text-[#4B2991] mb-2 block uppercase tracking-wide">Partnership</span>
                    <h4 className="text-lg mb-2">New MOU with Ministry of Health, Kenya</h4>
                    <p className="text-sm text-muted-foreground">Strategic partnership to strengthen health infrastructure</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/news/ghana-75k-patients">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-xs text-[#4B2991] mb-2 block uppercase tracking-wide">Impact Story</span>
                    <h4 className="text-lg mb-2">75,000 Patients Reached in Rural Ghana</h4>
                    <p className="text-sm text-muted-foreground">Mobile diagnostic units bringing care to underserved communities</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link to="/news">
              <Button className="bg-[#4B2991] hover:bg-[#3d1e7d]">
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
