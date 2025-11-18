import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowLeft, Calendar, MapPin, Building2, Truck, Package } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function PharmaceuticalHubLaunch() {
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
            <span className="text-foreground">Pharmaceutical Hub Launch</span>
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
            <span className="px-4 py-1.5 bg-[#4B2991] text-white rounded-full text-sm">
              Company Announcement
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>April 15, 2025</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Pacem Health Announces East African Regional Pharmaceutical Hub
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8">
            New facility in Kenya will serve as central distribution center for essential medicines and medical supplies across East African Community member states
          </p>

          {/* Featured Image */}
          <div className="mb-12 rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Pharmaceutical Distribution Hub"
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              <strong>NAIROBI, KENYA</strong> — Pacem Health Inc. today announced the establishment of its first regional pharmaceutical distribution hub in Nairobi, Kenya, marking a significant milestone in the company's mission to strengthen healthcare systems across Africa.
            </p>

            <p>
              The 15,000 square meter facility will serve as the central distribution point for essential medicines, medical supplies, and pharmaceutical products across the East African Community (EAC) member states, including Kenya, Tanzania, Uganda, Rwanda, Burundi, South Sudan, and the Democratic Republic of Congo.
            </p>

            <h2>Strategic Location and Infrastructure</h2>

            <p>
              Located near Jomo Kenyatta International Airport in Nairobi, the hub is strategically positioned to serve the entire East African region. The facility features:
            </p>

            <ul>
              <li>Temperature-controlled storage zones maintaining 2-8°C for cold chain products</li>
              <li>Ambient storage areas with climate control for general pharmaceuticals</li>
              <li>Quality assurance laboratory for incoming product testing</li>
              <li>Modern warehouse management system with real-time inventory tracking</li>
              <li>Last-mile distribution coordination center</li>
            </ul>

            <h2>Serving the Region's Healthcare Needs</h2>

            <p>
              The pharmaceutical hub will significantly reduce lead times for essential medicine delivery across East Africa, from the current average of 90-180 days to 7-14 days for most products. This improvement will help ensure more consistent availability of critical medicines in hospitals, clinics, and pharmacies throughout the region.
            </p>

            <p>
              "Access to essential medicines remains a critical challenge across Africa," said Dr. Emmanuel Okoye, Pacem Health's Regional Director for East Africa. "This hub represents our commitment to building the infrastructure necessary for reliable pharmaceutical supply chains that serve healthcare providers and patients across the region."
            </p>

            <h2>Regulatory Compliance and Quality Assurance</h2>

            <p>
              The facility has been designed to meet Good Distribution Practice (GDP) standards and will operate in compliance with regulatory requirements from the Pharmacy and Poisons Board of Kenya, the East African Community Medicines Regulatory Harmonization initiative, and international pharmaceutical distribution standards.
            </p>

            <p>
              All products distributed through the hub will undergo quality verification, including:
            </p>

            <ul>
              <li>Documentation review and authenticity verification</li>
              <li>Physical inspection of packaging and labeling</li>
              <li>Temperature monitoring throughout storage and transport</li>
              <li>Batch traceability from manufacturer to end user</li>
            </ul>

            <h2>Employment and Local Partnerships</h2>

            <p>
              The hub is expected to create approximately 150 direct jobs in Kenya, including positions in warehouse operations, quality assurance, logistics coordination, and administration. Pacem Health has partnered with local logistics providers and transportation companies to establish reliable distribution networks throughout the region.
            </p>

            <p>
              The company is also working with local educational institutions to develop training programs for pharmaceutical supply chain professionals, helping build regional capacity in logistics and distribution management.
            </p>

            <h2>Expansion Plans</h2>

            <p>
              The Nairobi hub is the first of several planned regional distribution centers across Africa. Pacem Health is currently conducting feasibility studies for additional hubs in West Africa (Accra, Ghana) and Southern Africa (Johannesburg, South Africa), with plans to establish a network of interconnected distribution centers serving the entire continent by 2028.
            </p>

            <p>
              "This is just the beginning," said Michael Adeyemi, Pacem Health's Chief Operating Officer. "Our vision is to create a pan-African pharmaceutical distribution network that ensures every hospital and clinic has reliable access to the medicines they need, when they need them."
            </p>

            <h2>Impact on Healthcare Delivery</h2>

            <p>
              The pharmaceutical hub is expected to have significant positive impacts on healthcare delivery across East Africa:
            </p>

            <ul>
              <li>Reduced medicine stock-outs in health facilities</li>
              <li>Lower procurement costs through volume consolidation</li>
              <li>Improved cold chain integrity for vaccines and biologics</li>
              <li>Enhanced traceability and counterfeit prevention</li>
              <li>Faster emergency medicine deployment during health crises</li>
            </ul>

            <h2>About the East African Market</h2>

            <p>
              The East African Community represents a combined population of over 300 million people, with pharmaceutical market size estimated at $3.5 billion annually. Despite this substantial market, the region faces significant challenges in pharmaceutical access, including:
            </p>

            <ul>
              <li>Heavy dependence on imports (85-95% of medicines)</li>
              <li>Long procurement and delivery lead times</li>
              <li>Frequent stock-outs of essential medicines</li>
              <li>Limited cold chain infrastructure</li>
              <li>Fragmented distribution networks</li>
            </ul>

            <p>
              The new pharmaceutical hub addresses these challenges by providing reliable, efficient distribution infrastructure specifically designed for the African context.
            </p>
          </div>

          {/* Key Facts Card */}
          <Card className="my-12 border-2 border-[#4B2991]/20">
            <CardContent className="p-8">
              <h3 className="text-2xl mb-6">Hub Overview</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Building2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Facility Size</p>
                    <p>15,000 square meters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p>Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Service Area</p>
                    <p>7 EAC Member States</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Capacity</p>
                    <p>$50M annual throughput</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Links */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl mb-4">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/news/africa-market-entry" className="p-4 border rounded-lg hover:shadow-md transition-all">
                <p className="text-sm text-muted-foreground mb-1">Strategic Announcement</p>
                <p className="hover:text-[#4B2991]">Africa Market Entry Strategy</p>
              </Link>
              <Link to="/news/product-catalog-launch" className="p-4 border rounded-lg hover:shadow-md transition-all">
                <p className="text-sm text-muted-foreground mb-1">Product Launch</p>
                <p className="hover:text-[#4B2991]">Medical Product Catalog Unveiled</p>
              </Link>
            </div>
          </div>

          {/* Back to News */}
          <div className="mt-12 text-center">
            <Link to="/news">
              <Button variant="outline" size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All News
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
