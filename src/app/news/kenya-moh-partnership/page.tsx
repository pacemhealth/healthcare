import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowLeft, Calendar, Tag, Share2, Download } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function KenyaMOHPartnership() {
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
            <span className="text-foreground">Kenya MoH Partnership</span>
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
              Partnership
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>January 15, 2025</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Pacem Health Signs Landmark MOU with Kenya Ministry of Health
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8">
            Strategic partnership to strengthen health infrastructure across 15 counties, supporting primary care facilities with medical equipment, technical training, and sustainable supply chain solutions
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
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Healthcare workers in Kenya facility"
              className="w-full h-96 object-cover rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Healthcare workers at a primary care facility in Kenya preparing to receive new medical equipment
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Nairobi, Kenya — Pacem Health Inc. announced today a comprehensive Memorandum of Understanding with the Ministry of Health, Kenya, marking a significant milestone in the country's efforts to strengthen primary healthcare delivery across underserved regions.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Expanding Access to Quality Healthcare</h2>
            <p className="mb-6">
              The five-year partnership will focus on equipping and supporting primary care facilities across 15 counties in Kenya's rural and peri-urban areas. This initiative directly supports Kenya's Universal Health Coverage agenda and aligns with the country's commitment to achieving Sustainable Development Goal 3.
            </p>

            <p className="mb-6">
              Under the agreement, Pacem Health will provide comprehensive support including medical equipment procurement, installation, maintenance services, and ongoing technical training for healthcare workers. The partnership emphasizes sustainable solutions that ensure long-term operational success beyond the initial implementation phase.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Comprehensive Support Framework</h2>
            <p className="mb-6">
              The MOU encompasses multiple pillars of healthcare systems strengthening. Pacem Health will deploy its proven modular infrastructure solutions, bringing essential diagnostic capabilities to facilities that have historically lacked adequate equipment. This includes point-of-care testing devices, basic laboratory equipment, and patient monitoring systems designed for resource-limited settings.
            </p>

            <p className="mb-6">
              Beyond hardware provision, the partnership includes a robust capacity-building component. Healthcare workers will receive hands-on training in equipment operation, basic maintenance, quality assurance protocols, and inventory management. This knowledge transfer ensures facilities can sustain operations independently while maintaining high standards of care.
            </p>

            <div className="bg-gradient-to-br from-[#4B2991]/5 to-[#7C944B]/5 p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">Partnership Highlights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl mb-2">Geographic Reach</h4>
                  <p className="text-muted-foreground">15 counties across rural and peri-urban Kenya, focusing on underserved populations</p>
                </div>
                <div>
                  <h4 className="text-xl mb-2">Facilities Supported</h4>
                  <p className="text-muted-foreground">120+ primary healthcare facilities receiving equipment and training</p>
                </div>
                <div>
                  <h4 className="text-xl mb-2">Healthcare Workers Trained</h4>
                  <p className="text-muted-foreground">500+ clinical staff receiving technical and operational training</p>
                </div>
                <div>
                  <h4 className="text-xl mb-2">Expected Impact</h4>
                  <p className="text-muted-foreground">Improved access to quality care for over 2 million Kenyans</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Sustainable Supply Chain Solutions</h2>
            <p className="mb-6">
              A critical component of the partnership addresses the persistent challenge of medical supply continuity in remote areas. Pacem Health will work with the Ministry to establish reliable supply chains for essential medicines, laboratory reagents, and medical consumables.
            </p>

            <p className="mb-6">
              This includes implementing digital inventory management systems that provide real-time visibility into stock levels, automated reordering triggers, and demand forecasting capabilities. These systems will help prevent stockouts of critical supplies while optimizing inventory carrying costs.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Government and Donor Collaboration</h2>
            <p className="mb-6">
              The initiative has received strong support from Kenya's national and county governments, as well as international development partners. The collaborative approach ensures alignment with existing health programs and maximizes the impact of investments across the healthcare system.
            </p>

            <p className="mb-6">
              Dr. Sarah Kimani, Director of Primary Healthcare at Kenya's Ministry of Health, emphasized the partnership's strategic importance: "This collaboration represents exactly the kind of innovative, sustainable approach we need to strengthen healthcare delivery at the community level. Pacem Health's track record in systems strengthening and their commitment to capacity building makes them an ideal partner."
            </p>

            <h2 className="text-3xl mt-12 mb-6">Implementation Timeline</h2>
            <p className="mb-6">
              The initial phase will launch in March 2025, beginning with a comprehensive needs assessment across targeted facilities. Equipment deployment and training programs will commence in the second quarter, with full implementation across all 15 counties expected by early 2026.
            </p>

            <p className="mb-6">
              Monitoring and evaluation frameworks will track key performance indicators including equipment utilization rates, service availability, patient volumes, and health outcomes. Regular reviews will ensure the partnership remains responsive to evolving needs and opportunities for optimization.
            </p>

            <div className="bg-[#4B2991] text-white p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">About Pacem Health</h3>
              <p className="text-white/90">
                Pacem Health is a U.S.-based global health innovation and systems delivery company focused on strengthening healthcare across Africa. With deep expertise in health system design, medical equipment solutions, supply chain optimization, and workforce development, Pacem Health partners with governments, NGOs, and healthcare institutions to build sustainable, high-performing health systems.
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Looking Ahead</h2>
            <p className="mb-6">
              This MOU builds on Pacem Health's growing portfolio of government partnerships across East Africa and represents a significant expansion of the company's presence in Kenya. The learnings and best practices from this initiative will inform similar partnerships across the region, contributing to broader health systems strengthening efforts.
            </p>

            <p className="mb-6">
              Both organizations expressed optimism about the partnership's potential to serve as a model for public-private collaboration in healthcare delivery. The focus on sustainability, capacity building, and systems thinking positions this initiative for long-term success and meaningful health impact.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl mb-4">Media Contact</h3>
            <div className="text-muted-foreground">
              <p className="mb-2">For more information, please contact:</p>
              <p>Pacem Health Communications</p>
              <p>Email: <a href="mailto:media@pacemhealth.com" className="text-[#4B2991] hover:underline">media@pacemhealth.com</a></p>
              <p>Phone: +1 (202) 555-0100</p>
            </div>
          </div>

          {/* Related News */}
          <div className="mt-16 pt-8 border-t">
            <h3 className="text-2xl mb-6">Related News</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/news/digital-fleet-platform">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-xs text-[#7C944B] mb-2 block uppercase tracking-wide">Product Launch</span>
                    <h4 className="text-lg mb-2">Digital Fleet Management Platform</h4>
                    <p className="text-sm text-muted-foreground">New cloud-based solution for real-time tracking and analytics</p>
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
