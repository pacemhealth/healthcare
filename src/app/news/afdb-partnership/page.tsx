import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowLeft, Calendar, Share2, Download, Handshake, DollarSign, MapPin, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function AfDBPartnership() {
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
            <span className="text-foreground">AfDB Partnership</span>
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
              Strategic Partnership
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>March 12, 2025</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Pacem Health Secures Strategic Partnership with African Development Bank
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8">
            Multi-year collaboration will leverage AfDB financing mechanisms to expand healthcare infrastructure, medical equipment access, and supply chain solutions across priority African markets
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
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Business partnership handshake"
              className="w-full h-96 object-cover rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Strategic partnership signing ceremony between Pacem Health and African Development Bank
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Abidjan, Côte d'Ivoire — Pacem Health Inc. and the African Development Bank announced today a strategic partnership to expand access to healthcare infrastructure, medical equipment, and supply chain solutions across Africa. The collaboration will leverage AfDB's financing instruments and country relationships to scale Pacem Health's integrated healthcare delivery solutions.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Addressing Healthcare Infrastructure Financing Gaps</h2>
            <p className="mb-6">
              Healthcare facilities across Africa face persistent challenges in procuring and maintaining essential medical equipment and infrastructure. Limited capital budgets, foreign exchange constraints, and high upfront costs create significant barriers to upgrading healthcare delivery capacity. Traditional procurement models often prove unsustainable for resource-constrained health systems.
            </p>

            <p className="mb-6">
              The Pacem Health and AfDB partnership addresses these challenges through innovative financing mechanisms that make healthcare investments more accessible and affordable. By combining AfDB's development finance expertise with Pacem Health's healthcare systems knowledge, the partnership creates sustainable pathways for health infrastructure strengthening.
            </p>

            <div className="bg-gradient-to-br from-[#4B2991]/5 to-[#7C944B]/5 p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">Partnership Framework</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-[#4B2991]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Financing Mechanisms</h4>
                    <p className="text-muted-foreground">Access to AfDB credit lines and development finance instruments for healthcare investments</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#7C944B]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Geographic Coverage</h4>
                    <p className="text-muted-foreground">Initial focus on 12 priority countries across East, West, and Southern Africa</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                    <Handshake className="h-6 w-6 text-[#4B2991]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Government Partnerships</h4>
                    <p className="text-muted-foreground">Joint engagement with ministries of health and finance in target countries</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-[#7C944B]" />
                  </div>
                  <div>
                    <h4 className="text-xl mb-2">Capacity Building</h4>
                    <p className="text-muted-foreground">Technical assistance for procurement planning and health systems strengthening</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Innovative Financing Solutions</h2>
            <p className="mb-6">
              The partnership introduces several innovative financing approaches tailored to healthcare sector needs. Medium-term equipment financing allows health facilities to procure essential medical equipment through manageable payment schedules aligned with operational budgets. This removes the barrier of large upfront capital requirements.
            </p>

            <p className="mb-6">
              Supply chain financing mechanisms ensure continuous availability of medicines and medical supplies without straining facility cash flow. Healthcare institutions can maintain appropriate inventory levels while spreading payments over time, preventing the stockouts that compromise patient care.
            </p>

            <p className="mb-6">
              Infrastructure development loans support facility construction, renovation, and expansion projects. These longer-term financing instruments enable strategic infrastructure investments that would otherwise remain unfunded due to budget constraints.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Priority Investment Areas</h2>
            <p className="mb-6">
              The partnership will initially focus on several high-impact investment areas aligned with country health priorities and AfDB sector strategies. Primary healthcare facility upgrades represent a key focus, supporting governments' efforts to strengthen community-level service delivery through equipment, infrastructure, and supply chain improvements.
            </p>

            <p className="mb-6">
              Diagnostic capacity expansion will bring laboratory and imaging capabilities to facilities currently lacking these essential services. This includes both fixed equipment installations and mobile diagnostic solutions for hard-to-reach areas.
            </p>

            <p className="mb-6">
              Maternal and child health infrastructure improvements will support specialized equipment and facility modifications needed for quality prenatal, delivery, and pediatric care. These investments directly contribute to reducing maternal and child mortality.
            </p>

            <p className="mb-6">
              Medical supply chain modernization will introduce inventory management systems, cold chain infrastructure, and logistics solutions that ensure continuous availability of essential medicines and supplies throughout healthcare networks.
            </p>

            <div className="bg-[#4B2991] text-white p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">Development Impact Objectives</h3>
              <p className="text-white/90 mb-6">
                The partnership establishes clear development impact targets to guide implementation and measure success:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">500+</div>
                  <div className="text-sm text-white/80">Healthcare facilities upgraded with equipment and infrastructure</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">10M+</div>
                  <div className="text-sm text-white/80">Patients with improved access to quality healthcare services</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">$150M</div>
                  <div className="text-sm text-white/80">Total healthcare infrastructure investment facilitated</div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Government and Institutional Engagement</h2>
            <p className="mb-6">
              Successful implementation requires strong collaboration with national governments and health institutions. The partnership includes a structured government engagement framework that begins with country-level assessments to identify priority needs and investment opportunities aligned with national health strategies.
            </p>

            <p className="mb-6">
              Joint planning sessions bring together ministries of health, finance, and planning with AfDB and Pacem Health teams to design country-specific investment programs. This collaborative approach ensures solutions are contextually appropriate and aligned with government priorities.
            </p>

            <p className="mb-6">
              Technical assistance supports governments in project preparation, procurement planning, and implementation management. This capacity building component ensures sustainable outcomes beyond the initial investment period.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Risk Mitigation and Sustainability</h2>
            <p className="mb-6">
              The partnership incorporates comprehensive risk mitigation strategies to protect both financial and developmental investments. Rigorous due diligence processes assess institutional capacity, financial viability, and technical readiness before finalizing investment commitments.
            </p>

            <p className="mb-6">
              Sustainability planning begins at project design, with clear strategies for ongoing maintenance, supply replenishment, and operational cost coverage. Pacem Health provides post-installation support including preventive maintenance, technical training, and supply chain management to ensure long-term functionality.
            </p>

            <p className="mb-6">
              Performance monitoring frameworks track equipment utilization, service delivery improvements, and financial sustainability indicators. Regular reviews enable course corrections and continuous improvement throughout implementation.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Regional Focus and Phased Rollout</h2>
            <p className="mb-6">
              The partnership will launch with pilot programs in three countries representing different African sub-regions. East Africa pilots in Kenya and Tanzania will focus on primary healthcare strengthening and mobile diagnostic expansion. West Africa programs in Ghana and Nigeria will emphasize maternal child health infrastructure and supply chain modernization. Southern Africa initiatives in Zambia will pilot innovative financing models for rural facility upgrades.
            </p>

            <p className="mb-6">
              Learning from these initial implementations will inform expansion to additional countries. The phased approach allows for adaptation based on real-world experience while building demonstration effects that encourage broader adoption.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Alignment with Continental Health Priorities</h2>
            <p className="mb-6">
              The AfDB-Pacem Health partnership directly supports continental health priorities articulated in the Africa Health Strategy and national health sector plans. Investments will contribute to progress toward universal health coverage, strengthen primary healthcare systems, expand access to essential health services, improve health security and emergency preparedness, and enhance health system resilience.
            </p>

            <p className="mb-6">
              This alignment ensures investments complement rather than duplicate existing initiatives while filling critical gaps in healthcare infrastructure and service delivery capacity.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Private Sector Mobilization</h2>
            <p className="mb-6">
              Beyond direct investments, the partnership aims to demonstrate viable business models that mobilize additional private sector participation in African healthcare. By proving that healthcare infrastructure investments can be financially sustainable while delivering strong developmental impact, the partnership hopes to catalyze broader private capital flows into the sector.
            </p>

            <p className="mb-6">
              Success stories and evidence from early implementations will be widely shared to encourage other private sector actors to enter the market with innovative solutions and financing approaches.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Looking Forward</h2>
            <p className="mb-6">
              The AfDB-Pacem Health partnership represents a new model for development finance institutions and private companies to collaborate on health system strengthening. By combining development finance expertise with healthcare systems implementation knowledge, the partnership creates sustainable pathways for expanding access to quality healthcare across Africa.
            </p>

            <p className="mb-6">
              As the partnership begins implementation, both organizations remain committed to transparency, rigorous impact measurement, and continuous learning. The goal is not simply to deploy capital and equipment, but to contribute meaningfully to building stronger, more resilient health systems that serve African communities for generations to come.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl mb-4">Media Contacts</h3>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <p className="mb-2">Pacem Health:</p>
                <p>Email: <a href="mailto:media@pacemhealth.com" className="text-[#4B2991] hover:underline">media@pacemhealth.com</a></p>
                <p>Phone: +1 (202) 555-0100</p>
              </div>
              <div>
                <p className="mb-2">African Development Bank:</p>
                <p>Email: communications@afdb.org</p>
                <p>Phone: +225 20 26 29 00</p>
              </div>
            </div>
          </div>

          {/* Related News */}
          <div className="mt-16 pt-8 border-t">
            <h3 className="text-2xl mb-6">Related News</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/news/pacem-health-launches">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-xs text-[#4B2991] mb-2 block uppercase tracking-wide">Company Announcement</span>
                    <h4 className="text-lg mb-2">Pacem Health Officially Launches</h4>
                    <p className="text-sm text-muted-foreground">New company to transform African healthcare systems</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/news/kenya-moh-partnership">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-xs text-[#4B2991] mb-2 block uppercase tracking-wide">Partnership</span>
                    <h4 className="text-lg mb-2">New MOU with Ministry of Health, Kenya</h4>
                    <p className="text-sm text-muted-foreground">Strategic partnership to strengthen health infrastructure</p>
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
