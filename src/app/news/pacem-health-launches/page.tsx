import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowLeft, Calendar, Share2, Download, Building2, Globe, Target, Users } from 'lucide-react';
import colorfulOfficeImage from 'figma:asset/123d7767e17f4e1f5befd5850ad82782337007ac.png';

export default function PacemHealthLaunches() {
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
            <span className="text-foreground">Pacem Health Launch</span>
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
              <span>February 3, 2025</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Pacem Health Officially Launches to Transform African Healthcare Systems
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8">
            U.S.-based global health innovation company announces official launch with comprehensive platform for strengthening healthcare delivery across Africa through medical equipment solutions, supply chain optimization, and health systems advisory services
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
            <img
              src={colorfulOfficeImage}
              alt="Modern office space representing Pacem Health headquarters"
              className="w-full h-96 object-cover rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Pacem Health headquarters in Washington, D.C.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Washington, D.C. — Pacem Health Inc. today announced its official launch as a comprehensive global health innovation and systems delivery company focused on strengthening healthcare across Africa. The company brings together deep expertise in health system design, medical equipment solutions, supply chain optimization, and workforce development to address critical gaps in healthcare delivery across the continent.
            </p>

            <h2 className="text-3xl mt-12 mb-6">A Systems Approach to Healthcare Strengthening</h2>
            <p className="mb-6">
              Pacem Health enters the market with a differentiated value proposition built on systems thinking and sustainable solutions. Rather than offering standalone products or services, the company provides integrated approaches that address multiple dimensions of healthcare delivery challenges simultaneously.
            </p>

            <p className="mb-6">
              The company's launch comes at a critical time for African healthcare systems. Countries across the continent are working to achieve universal health coverage while managing resource constraints, infrastructure gaps, and growing disease burdens. Pacem Health's model is designed specifically to support governments, health institutions, and development partners in navigating these complex challenges.
            </p>

            <div className="bg-gradient-to-br from-[#4B2991]/5 to-[#7C944B]/5 p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">Three Integrated Business Divisions</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-6 w-6 text-[#4B2991]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Core Solutions</h4>
                    <p className="text-muted-foreground">Essential infrastructure, equipment, and supply chain services for healthcare facilities</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-[#7C944B]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Advanced Solutions</h4>
                    <p className="text-muted-foreground">Digital health platforms, mobile diagnostics, and health intelligence analytics</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-[#4B2991]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Advisory Services</h4>
                    <p className="text-muted-foreground">Strategic consulting, policy development, and health systems transformation support</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Comprehensive Service Portfolio</h2>
            <p className="mb-6">
              Pacem Health's Core Solutions division provides the foundational elements of healthcare delivery including modular infrastructure for primary care facilities, medical equipment procurement and maintenance, pharmaceutical and medical supply distribution, cold chain management and logistics, and sustainable procurement financing models.
            </p>

            <p className="mb-6">
              The Advanced Solutions division leverages technology and innovation to enhance healthcare delivery through digital health platforms for patient management, mobile diagnostic units for remote service delivery, fleet management systems for mobile health programs, health data analytics and performance monitoring, and telehealth and remote consultation capabilities.
            </p>

            <p className="mb-6">
              Through its Advisory Services division, Pacem Health provides strategic guidance and technical assistance in health system strategy and planning, digital health transformation, procurement and supply chain optimization, quality improvement and accreditation support, workforce development and training programs, and health financing and resource mobilization.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Leadership and Expertise</h2>
            <p className="mb-6">
              Pacem Health is led by a team of experienced professionals with deep backgrounds in global health, healthcare delivery, international development, and business operations. The leadership team brings expertise from leading healthcare companies, development organizations, and government agencies.
            </p>

            <p className="mb-6">
              The company's Board of Directors includes distinguished leaders in global health, development finance, public health policy, and healthcare innovation. This governance structure ensures Pacem Health maintains the highest standards of ethical practice, financial stewardship, and developmental impact.
            </p>

            <div className="bg-[#4B2991] text-white p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">Founding Principles</h3>
              <p className="text-white/90 mb-4">
                Pacem Health was established on four core principles that guide all aspects of the company's work:
              </p>
              <div className="space-y-4 mt-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg mb-2">Systems Thinking</h4>
                  <p className="text-white/80 text-sm">Addressing interconnected challenges through integrated solutions rather than isolated interventions</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg mb-2">Sustainability Focus</h4>
                  <p className="text-white/80 text-sm">Building local capacity and creating financially viable models that endure beyond initial implementation</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg mb-2">Partnership Approach</h4>
                  <p className="text-white/80 text-sm">Collaborating with governments, institutions, and communities as equal partners in health system strengthening</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="text-lg mb-2">Evidence-Based Practice</h4>
                  <p className="text-white/80 text-sm">Grounding all work in research, data, and proven best practices while remaining adaptable to local contexts</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Initial Partnerships and Projects</h2>
            <p className="mb-6">
              Pacem Health launches with several foundational partnerships already established. The company has signed agreements with health ministries in multiple East African countries to support primary healthcare strengthening initiatives. Collaborations with international development organizations will support mobile health programs and diagnostic capacity building.
            </p>

            <p className="mb-6">
              The company is also working with development finance institutions to create innovative financing mechanisms for healthcare infrastructure and equipment procurement. These partnerships will enable health facilities and governments to access critical resources through sustainable financial models.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Geographic Focus and Expansion Plans</h2>
            <p className="mb-6">
              While Pacem Health's initial operations focus on East Africa including Kenya, Tanzania, Uganda, Rwanda, and Ethiopia, the company plans measured expansion across the continent. West Africa, particularly Ghana and Nigeria, represents near-term expansion opportunities given significant healthcare infrastructure needs and strong government commitment to health system strengthening.
            </p>

            <p className="mb-6">
              The company is establishing regional offices in Nairobi, Accra, and Abuja to ensure strong local presence and responsiveness to country-specific contexts. These offices will house technical teams, supply chain operations, and partnership management functions.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Innovation and Research Commitment</h2>
            <p className="mb-6">
              Pacem Health has established an Innovation Lab focused on developing context-appropriate solutions for African healthcare challenges. Current research and development efforts include energy-efficient medical equipment for low-resource settings, offline-capable digital health platforms for areas with limited connectivity, point-of-care diagnostic devices for common tropical diseases, and sustainable supply chain models for remote rural facilities.
            </p>

            <p className="mb-6">
              The company is also investing in operational research to generate evidence on effective implementation strategies, cost-effectiveness of different intervention models, and long-term sustainability factors. This research will inform both Pacem Health's work and contribute to the broader global health knowledge base.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Development Impact Goals</h2>
            <p className="mb-6">
              Pacem Health has established ambitious but achievable impact targets for its first five years of operation. These include supporting health infrastructure improvements in 500 facilities across 10 countries, training 5,000 healthcare workers in clinical and operational competencies, reaching 5 million patients through mobile health and outreach programs, and deploying diagnostic capacity in 200 underserved communities.
            </p>

            <p className="mb-6">
              Beyond quantitative metrics, the company is committed to measuring qualitative improvements in health system performance including service availability and readiness, quality of care, patient satisfaction, and operational efficiency. Rigorous monitoring and evaluation frameworks will track progress toward these goals.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Investor and Stakeholder Support</h2>
            <p className="mb-6">
              Pacem Health's launch is supported by a diverse group of investors and stakeholders including impact investors focused on healthcare and development, development finance institutions, strategic partners in the healthcare industry, and advisory support from global health leaders and institutions.
            </p>

            <p className="mb-6">
              This backing reflects confidence in Pacem Health's model and management team as well as recognition of the significant market opportunity in African healthcare strengthening. The company's dual focus on financial sustainability and developmental impact resonates with investors seeking both returns and meaningful social contributions.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Looking Ahead</h2>
            <p className="mb-6">
              As Pacem Health officially begins operations, the company remains focused on executing its mission with excellence while maintaining flexibility to adapt as it learns. The healthcare landscape across Africa is dynamic and complex, requiring both strategic vision and tactical responsiveness.
            </p>

            <p className="mb-6">
              The launch of Pacem Health represents not just a new company entering the market, but a new model for how private sector actors can contribute meaningfully to health system strengthening in partnership with governments and communities. Success will be measured not in market share or revenue alone, but in lives improved and health systems strengthened.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl mb-4">Media Contact</h3>
            <div className="text-muted-foreground">
              <p className="mb-2">For more information about Pacem Health:</p>
              <p>Pacem Health Communications</p>
              <p>Email: <a href="mailto:media@pacemhealth.com" className="text-[#4B2991] hover:underline">media@pacemhealth.com</a></p>
              <p>Phone: +1 (202) 555-0100</p>
              <p className="mt-4">Website: <a href="/" className="text-[#4B2991] hover:underline">www.pacemhealth.com</a></p>
            </div>
          </div>

          {/* Related News */}
          <div className="mt-16 pt-8 border-t">
            <h3 className="text-2xl mb-6">Related News</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/news/afdb-partnership">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-xs text-[#4B2991] mb-2 block uppercase tracking-wide">Partnership</span>
                    <h4 className="text-lg mb-2">Pacem Health Secures Partnership with AfDB</h4>
                    <p className="text-sm text-muted-foreground">Strategic collaboration with African Development Bank to expand healthcare access</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/news/product-catalog-launch">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-xs text-[#7C944B] mb-2 block uppercase tracking-wide">Product Launch</span>
                    <h4 className="text-lg mb-2">Comprehensive Medical Product Catalog Unveiled</h4>
                    <p className="text-sm text-muted-foreground">First comprehensive catalog for African healthcare market</p>
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