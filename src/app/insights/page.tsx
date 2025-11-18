import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { ArrowRight, BookOpen, FileText, TrendingUp, Users, Presentation, CheckCircle2, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InsightsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0033A0] to-[#002d8f] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#00A0DC]/20 text-[#00A0DC] rounded-full text-sm border border-[#00A0DC]/30">
                Insights & Thought Leadership
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              Leading the Conversation on Africa's Health System Transformation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Access our research, case studies, industry reports, and thought leadership content shaping the future of healthcare delivery across Africa. Learn from real implementation experiences and evidence-based strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#00A0DC] text-white hover:bg-[#0090cc]">
                Explore Our Research
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">
              Evidence-Based Knowledge for Africa's Health Systems
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Pacem Health doesn't just implement solutions—we generate knowledge, share lessons learned, and advance the field of health systems strengthening across Africa. Our thought leadership spans peer-reviewed research, practical case studies, comprehensive industry analysis, and strategic partnerships with leading academic institutions.
            </p>
            <p className="text-lg text-muted-foreground">
              From regulatory harmonization strategies to digital health implementation frameworks, our insights are grounded in real-world experience delivering health solutions across diverse African contexts. We share what works, what doesn't, and why—contributing to the global evidence base for health system transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-br from-[#0033A0] to-[#002d8f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">60+ Pipeline</div>
              <p className="text-white/80">Case Studies in Development</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">35+ Target</div>
              <p className="text-white/80">Research Publications (Pipeline)</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">25+ Target</div>
              <p className="text-white/80">Countries in Research Scope</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">15+ Target</div>
              <p className="text-white/80">University Partnerships (Africa)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Explore Our Thought Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access comprehensive knowledge resources across five key categories
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Publications */}
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0033A0]/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-[#0033A0]" />
                    </div>
                    <h3 className="text-2xl">Research Publications</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Peer-reviewed research articles, white papers, and technical publications advancing the evidence base for health systems strengthening, pharmaceutical access, and medical technology implementation across Africa.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Peer-reviewed journal articles on health systems delivery</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">White papers on pharmaceutical access and regulatory frameworks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Technical briefs on medical equipment implementation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Evidence synthesis on health financing mechanisms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Research collaborations with leading academic institutions</p>
                  </div>
                </div>

                <Link to="/insights/publications" className="block w-full">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002d8f] text-white">
                    View Publications
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0033A0]/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-[#0033A0]" />
                    </div>
                    <h3 className="text-2xl">Case Studies & Success Stories</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Real-world implementation stories showcasing measurable health outcomes, lessons learned, and practical insights from health system strengthening initiatives across African countries.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Hospital pharmacy transformation case studies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Medical equipment deployment success stories</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Supply chain optimization implementation examples</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Digital health transformation journeys</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Impact reports with measurable health outcomes</p>
                  </div>
                </div>

                <Link to="/insights/case-studies" className="block w-full">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002d8f] text-white">
                    Read Case Studies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Industry Reports */}
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0033A0]/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-[#0033A0]" />
                    </div>
                    <h3 className="text-2xl">Industry Reports & Analysis</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive market analyses, policy briefs, and strategic reports on Africa's healthcare landscape—from pharmaceutical markets to regulatory trends and health technology adoption patterns.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">African pharmaceutical market analyses and trends</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Medical equipment market landscape reports</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Regulatory harmonization policy briefs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Health financing mechanism assessments</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Digital health technology adoption studies</p>
                  </div>
                </div>

                <Link to="/insights/reports" className="block w-full">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002d8f] text-white">
                    Download Reports
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Events & Speaking */}
            <Card className="hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0033A0]/10 flex items-center justify-center">
                      <Presentation className="h-6 w-6 text-[#0033A0]" />
                    </div>
                    <h3 className="text-2xl">Events & Speaking Engagements</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Connect with our experts at global health conferences, webinars, and speaking engagements. Access event archives, presentation materials, and register for upcoming knowledge-sharing sessions.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Global health conference presentations and panels</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Webinar series on health systems topics</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Technical workshops and training events</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Downloadable presentation materials and recordings</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Upcoming events calendar and registration</p>
                  </div>
                </div>

                <Link to="/insights/events-speaking" className="block w-full">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002d8f] text-white">
                    View Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Academic Partnerships */}
            <Card className="hover:shadow-xl transition-all border-2 border-[#7C944B]/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#7C944B]/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-[#7C944B]" />
                    </div>
                    <h3 className="text-2xl">Academic Partnerships & Collaborations</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Explore our strategic partnerships with leading universities, research institutions, and academic networks advancing health systems research, workforce development, and knowledge translation across Africa.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">University research collaborations and joint studies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Pharmacy and medical school partnerships</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Student research opportunities and internships</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Academic advisory board and institutional affiliations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <p className="text-sm">Knowledge exchange programs and fellowships</p>
                  </div>
                </div>

                <Link to="/insights/partnerships" className="block w-full">
                  <Button className="w-full bg-[#7C944B] hover:bg-[#6c843e] text-white">
                    Explore Partnerships
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Our Insights Matter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">
                Why Pacem Health Thought Leadership Matters
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our insights bridge the gap between global health theory and African implementation realities. We share practical, evidence-based knowledge that actually works in resource-constrained settings.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0033A0]/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-5 w-5 text-[#0033A0]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Grounded in Real Implementation</h4>
                    <p className="text-sm text-muted-foreground">
                      Our research and case studies come from actual health system strengthening projects across Africa—not theoretical frameworks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0033A0]/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-5 w-5 text-[#0033A0]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Africa-Specific Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      We address Africa's unique challenges: regulatory fragmentation, import dependency, limited manufacturing, infrastructure gaps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0033A0]/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-5 w-5 text-[#0033A0]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Measurable Impact Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Every case study and research publication includes quantitative outcomes—patient lives impacted, costs reduced, efficiency gained.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0033A0]/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-5 w-5 text-[#0033A0]" />
                  </div>
                  <div>
                    <h4 className="mb-1">Knowledge Sharing Commitment</h4>
                    <p className="text-sm text-muted-foreground">
                      We openly share lessons learned, implementation challenges, and practical solutions to advance the entire field.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0033A0] to-[#002d8f] rounded-2xl p-8 lg:p-12 text-white">
              <h3 className="text-2xl md:text-3xl mb-4">
                Stay Connected with Our Latest Insights
              </h3>
              <p className="text-white/90 mb-6">
                Subscribe to receive our latest research publications, case studies, industry reports, and event announcements directly to your inbox.
              </p>
              <p className="text-white/90 mb-8">
                Join health system leaders, policymakers, and practitioners staying informed on Africa's healthcare transformation.
              </p>
              <Button size="lg" className="bg-[#00A0DC] text-white hover:bg-[#0090cc] w-full">
                Subscribe to Insights Newsletter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#7C944B] to-[#6c843e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Collaborate on Research or Share Your Story
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Partner with us on health systems research, contribute case studies from your implementation experience, or invite our experts to speak at your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#7C944B] hover:bg-gray-100">
              Propose Research Collaboration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Request Speaker
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}