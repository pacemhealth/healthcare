import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { 
  TrendingUp, 
  Globe, 
  Users, 
  Target, 
  Award, 
  Heart,
  Building2,
  FileText,
  Mail,
  Download,
  ArrowRight,
  Briefcase,
  DollarSign
} from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export default function InvestorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white py-20 sm:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
                Invest in Africa's Healthcare Future
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Pacem Health is building integrated healthcare systems infrastructure to serve 500 million+ people across Africa through pharmaceutical supply chains, medical equipment distribution, and clinical services delivery.
              </p>
              <Button size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
                Request Investment Information
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-xs text-white/60 uppercase tracking-wide mb-1">Market Opportunity</div>
                  <div className="text-4xl mb-2">$259B</div>
                  <div className="text-sm text-white/80">African Healthcare by 2030</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-xs text-white/60 uppercase tracking-wide mb-1">Product Catalog</div>
                  <div className="text-4xl mb-2">3,500+</div>
                  <div className="text-sm text-white/80">Medical Products</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-xs text-white/60 uppercase tracking-wide mb-1">Focus Markets</div>
                  <div className="text-4xl mb-2">12</div>
                  <div className="text-sm text-white/80">Priority Countries</div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6 text-center">
                  <div className="text-xs text-white/60 uppercase tracking-wide mb-1">Business Model</div>
                  <div className="text-4xl mb-2">3</div>
                  <div className="text-sm text-white/80">Integrated Divisions</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide">
            <a 
              href="#overview" 
              className="py-4 px-3 sm:px-4 border-b-2 border-[#4B2991] text-[#4B2991] whitespace-nowrap transition-all duration-200 text-sm tracking-wide"
            >
              OVERVIEW
            </a>
            <a 
              href="#opportunity" 
              className="py-4 px-3 sm:px-4 border-b-2 border-transparent hover:border-[#7C944B] text-muted-foreground hover:text-[#7C944B] whitespace-nowrap transition-all duration-200 text-sm tracking-wide"
            >
              OPPORTUNITY
            </a>
            <a 
              href="#traction" 
              className="py-4 px-3 sm:px-4 border-b-2 border-transparent hover:border-[#7C944B] text-muted-foreground hover:text-[#7C944B] whitespace-nowrap transition-all duration-200 text-sm tracking-wide"
            >
              TRACTION
            </a>
            <a 
              href="#team" 
              className="py-4 px-3 sm:px-4 border-b-2 border-transparent hover:border-[#7C944B] text-muted-foreground hover:text-[#7C944B] whitespace-nowrap transition-all duration-200 text-sm tracking-wide"
            >
              TEAM
            </a>
            <a 
              href="#impact" 
              className="py-4 px-3 sm:px-4 border-b-2 border-transparent hover:border-[#7C944B] text-muted-foreground hover:text-[#7C944B] whitespace-nowrap transition-all duration-200 text-sm tracking-wide"
            >
              IMPACT
            </a>
            <a 
              href="#news" 
              className="py-4 px-3 sm:px-4 border-b-2 border-transparent hover:border-[#7C944B] text-muted-foreground hover:text-[#7C944B] whitespace-nowrap transition-all duration-200 text-sm tracking-wide"
            >
              NEWS
            </a>
            <a 
              href="#contact" 
              className="py-4 px-3 sm:px-4 border-b-2 border-transparent hover:border-[#7C944B] text-muted-foreground hover:text-[#7C944B] whitespace-nowrap transition-all duration-200 text-sm tracking-wide"
            >
              CONTACT
            </a>
          </nav>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">Investment Thesis</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            African healthcare systems face a $66 billion annual infrastructure gap. Pacem Health addresses this massive market opportunity through a differentiated, systems-based approach that combines equipment solutions, supply chain optimization, and strategic advisory services to strengthen healthcare delivery at scale.
          </p>
          <Link to="/about">
            <Button variant="outline" size="lg">
              Read Full Corporate Overview
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991]/5 to-[#7C944B]/5 rounded-2xl p-8 sm:p-12 border border-[#4B2991]/10">
            <div className="text-center mb-8">
              <p className="text-[#4B2991] uppercase text-sm tracking-wide mb-3">Message from Leadership</p>
              <h2 className="text-3xl sm:text-4xl mb-4">A Word from Our CEO</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Dear Prospective Investors,
              </p>
              
              <p className="text-base text-muted-foreground mb-4">
                At Pacem Health, we're building something that matters — a comprehensive healthcare systems delivery company focused on strengthening health infrastructure across Africa. Our mission goes beyond products and services; we're engineering sustainable solutions that improve health outcomes for millions of people.
              </p>
              
              <p className="text-base text-muted-foreground mb-4">
                The opportunity ahead is extraordinary. Africa's healthcare market represents one of the most significant growth opportunities of our generation, driven by population expansion, economic development, and government commitment to universal health coverage. Yet the challenges are equally profound — fragmented supply chains, infrastructure gaps, and limited access to quality healthcare products and services.
              </p>
              
              <p className="text-base text-muted-foreground mb-4">
                Pacem Health is uniquely positioned to address these challenges through our integrated approach combining pharmaceutical supply chains, medical equipment lifecycle management, and advanced digital health solutions. Our U.S.-based operations ensure quality and compliance, while our Africa-focused expertise enables us to navigate complex regulatory environments and deliver lasting impact.
              </p>
              
              <p className="text-base text-muted-foreground mb-4">
                We're not just building a company — we're building partnerships with governments, development banks, and health systems that will define Africa's healthcare future for decades to come. Our projected growth trajectory reflects both the market opportunity and our execution capabilities across 12 African countries by 2026.
              </p>
              
              <p className="text-base text-muted-foreground mb-6">
                I invite you to explore the opportunities ahead and join us in this mission to transform African healthcare systems.
              </p>
              
              <div className="border-t border-[#4B2991]/20 pt-6 mt-8">
                <p className="text-lg">
                  <strong>David Seyaker</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  Chief Executive Officer<br/>
                  Pacem Health Inc.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/ceo-message">
                <Button size="lg" className="bg-[#4B2991] hover:bg-[#3d1e7d] text-white">
                  Read Full CEO Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section id="opportunity" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">Market Opportunity</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Africa's healthcare market presents exceptional growth potential driven by population expansion, economic development, and government commitment to universal health coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-[#4B2991]" />
                </div>
                <h3 className="text-2xl mb-3">$259B Market</h3>
                <p className="text-muted-foreground">
                  African healthcare market projected to reach $259 billion by 2030, growing at 11% CAGR
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-[#7C944B]/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#7C944B]" />
                </div>
                <h3 className="text-2xl mb-3">1.4B Population</h3>
                <p className="text-muted-foreground">
                  Rapidly growing population with increasing middle class and healthcare demand
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-[#4B2991]" />
                </div>
                <h3 className="text-2xl mb-3">$66B Gap</h3>
                <p className="text-muted-foreground">
                  Annual healthcare infrastructure investment gap requiring innovative solutions
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-[#4B2991]/5 to-[#7C944B]/5 rounded-lg p-8 sm:p-12">
            <h3 className="text-2xl mb-6">Why Pacem Health</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#4B2991] text-white flex items-center justify-center">1</div>
                </div>
                <div>
                  <h4 className="text-lg mb-2">Integrated Solutions Platform</h4>
                  <p className="text-muted-foreground">Three business divisions working together to address interconnected healthcare system challenges</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#4B2991] text-white flex items-center justify-center">2</div>
                </div>
                <div>
                  <h4 className="text-lg mb-2">Government & Institutional Focus</h4>
                  <p className="text-muted-foreground">Deep partnerships with ministries of health, development banks, and major donors</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#4B2991] text-white flex items-center justify-center">3</div>
                </div>
                <div>
                  <h4 className="text-lg mb-2">Proven Business Model</h4>
                  <p className="text-muted-foreground">Revenue-generating operations with clear pathways to scale and profitability</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-[#4B2991] text-white flex items-center justify-center">4</div>
                </div>
                <div>
                  <h4 className="text-lg mb-2">Experienced Leadership</h4>
                  <p className="text-muted-foreground">Team with deep expertise from leading healthcare companies and development organizations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traction & Milestones */}
      <section id="traction" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">Traction & Growth Projections</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Demonstrated execution with major partnerships, geographic expansion, and ambitious 2026 growth targets across African healthcare systems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Key Partnerships */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="h-6 w-6 text-[#4B2991]" />
                  <h3 className="text-2xl">Strategic Partnerships</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#4B2991] pl-4">
                    <h4 className="mb-1">African Development Bank</h4>
                    <p className="text-sm text-muted-foreground">Multi-year collaboration for healthcare infrastructure financing across 12 countries</p>
                  </div>
                  <div className="border-l-4 border-[#7C944B] pl-4">
                    <h4 className="mb-1">Ministry of Health, Kenya</h4>
                    <p className="text-sm text-muted-foreground">Strategic MOU to strengthen health infrastructure across 15 counties</p>
                  </div>
                  <div className="border-l-4 border-[#4B2991] pl-4">
                    <h4 className="mb-1">Government of Ghana</h4>
                    <p className="text-sm text-muted-foreground">75,000+ patients reached through mobile diagnostic program expansion</p>
                  </div>
                </div>
                <Link to="/news" className="inline-flex items-center text-[#4B2991] hover:underline mt-6">
                  View All Partnership News
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Key Milestones */}
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-6 w-6 text-[#7C944B]" />
                  <h3 className="text-2xl">Key Milestones</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Q1 2025</div>
                    <div>
                      <h4 className="mb-1">Official Company Launch</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive platform with three integrated business divisions</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Q1 2025</div>
                    <div>
                      <h4 className="mb-1">Product Catalog Launch</h4>
                      <p className="text-sm text-muted-foreground">3,500+ medical products with transparent pricing</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Q1 2025</div>
                    <div>
                      <h4 className="mb-1">AfDB Partnership</h4>
                      <p className="text-sm text-muted-foreground">$150M healthcare infrastructure investment pipeline</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-sm text-muted-foreground whitespace-nowrap">Q1 2025</div>
                    <div>
                      <h4 className="mb-1">Infant Nutrition Product</h4>
                      <p className="text-sm text-muted-foreground">Innovative solution for infant malnutrition launched</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Growth Metrics */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-8 w-8 text-[#4B2991] mx-auto mb-3" />
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2026 Projected</div>
                <div className="text-3xl mb-2">200%</div>
                <div className="text-sm text-muted-foreground">YoY Revenue Growth</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-[#7C944B] mx-auto mb-3" />
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2026 Projected</div>
                <div className="text-3xl mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Active Countries</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Building2 className="h-8 w-8 text-[#4B2991] mx-auto mb-3" />
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2026 Projected</div>
                <div className="text-3xl mb-2">1,500+</div>
                <div className="text-sm text-muted-foreground">Partner Facilities</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 text-[#7C944B] mx-auto mb-3" />
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2026 Projected</div>
                <div className="text-3xl mb-2">15M+</div>
                <div className="text-sm text-muted-foreground">People Reached</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team & Governance */}
      <section id="team" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">Leadership & Governance</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experienced leadership team with proven track records in global health, healthcare delivery, international development, and business operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">Executive Leadership</h3>
                <p className="text-muted-foreground mb-6">
                  Our management team brings deep expertise from leading healthcare companies including McKesson, Cardinal Health, and international development organizations including USAID, WHO, and the World Bank.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4B2991] mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Combined 100+ years of healthcare and development experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4B2991] mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Deep on-the-ground experience across 30+ African countries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4B2991] mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Proven ability to execute complex, multi-country programs</span>
                  </li>
                </ul>
                <Link to="/about/management">
                  <Button variant="outline">
                    View Management Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">Board of Directors</h3>
                <p className="text-muted-foreground mb-6">
                  Our Board includes distinguished leaders in global health, development finance, public health policy, and healthcare innovation, ensuring strong governance and strategic oversight.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#7C944B] mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Former senior executives from Fortune 500 healthcare companies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#7C944B] mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Former government health officials and development bank leaders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#7C944B] mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Academic leaders and global health experts</span>
                  </li>
                </ul>
                <Link to="/about/board">
                  <Button variant="outline">
                    View Board of Directors
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Governance Principles */}
          <div className="bg-[#4B2991] text-white rounded-lg p-8 sm:p-12">
            <h3 className="text-2xl mb-6 text-center">Corporate Governance Principles</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="h-10 w-10 mx-auto mb-4 text-white/90" />
                <h4 className="text-lg mb-2">Transparency</h4>
                <p className="text-sm text-white/80">Commitment to clear reporting, stakeholder communication, and ethical business practices</p>
              </div>
              <div className="text-center">
                <FileText className="h-10 w-10 mx-auto mb-4 text-white/90" />
                <h4 className="text-lg mb-2">Accountability</h4>
                <p className="text-sm text-white/80">Rigorous financial controls, independent audits, and performance monitoring</p>
              </div>
              <div className="text-center">
                <Heart className="h-10 w-10 mx-auto mb-4 text-white/90" />
                <h4 className="text-lg mb-2">Impact Focus</h4>
                <p className="text-sm text-white/80">Measuring both financial performance and health system strengthening outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & ESG */}
      <section id="impact" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">Impact & Sustainability Projections</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Delivering measurable health outcomes while building sustainable, financially viable healthcare systems across Africa. 2026 impact targets reflect our ambitious scale-up plans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-[#4B2991] mx-auto mb-4" />
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2026 Projected</div>
                <div className="text-4xl mb-2">15M+</div>
                <h4 className="mb-2">People Reached</h4>
                <p className="text-sm text-muted-foreground">Patients served through our healthcare facility partners and mobile programs</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Building2 className="h-12 w-12 text-[#7C944B] mx-auto mb-4" />
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2026 Projected</div>
                <div className="text-4xl mb-2">1,500+</div>
                <h4 className="mb-2">Facilities Strengthened</h4>
                <p className="text-sm text-muted-foreground">Healthcare facilities with improved infrastructure, equipment, and capabilities</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-[#4B2991] mx-auto mb-4" />
                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">2026 Projected</div>
                <div className="text-4xl mb-2">15,000+</div>
                <h4 className="mb-2">Workers Trained</h4>
                <p className="text-sm text-muted-foreground">Healthcare professionals with enhanced skills and competencies</p>
              </CardContent>
            </Card>
          </div>

          {/* SDG Alignment */}
          <div className="bg-gradient-to-br from-[#7C944B]/5 to-[#4B2991]/5 rounded-lg p-8 sm:p-12">
            <h3 className="text-2xl mb-6 text-center">UN Sustainable Development Goals Alignment</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="mb-2">SDG 3: Good Health & Well-Being</h4>
                <p className="text-sm text-muted-foreground">Directly strengthening health systems and expanding access to quality healthcare services</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="mb-2">SDG 8: Decent Work & Economic Growth</h4>
                <p className="text-sm text-muted-foreground">Creating jobs and supporting local economic development through healthcare investments</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="mb-2">SDG 9: Industry, Innovation & Infrastructure</h4>
                <p className="text-sm text-muted-foreground">Building sustainable healthcare infrastructure and fostering innovation</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="mb-2">SDG 10: Reduced Inequalities</h4>
                <p className="text-sm text-muted-foreground">Expanding healthcare access to underserved and marginalized populations</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h4 className="mb-2">SDG 17: Partnerships for the Goals</h4>
                <p className="text-sm text-muted-foreground">Building multi-stakeholder partnerships with governments, donors, and institutions</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <Link to="/about/sustainability">
                  <Button variant="outline" size="sm">
                    View Sustainability Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="news" className="py-16 sm:py-20 bg-[#4B2991] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl sm:text-4xl">Latest News</h2>
            <Link to="/news">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#4B2991]">
                View All News
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/news/afdb-partnership">
              <Card className="h-full hover:shadow-xl transition-shadow bg-white/10 backdrop-blur border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="text-xs uppercase tracking-wide mb-2 text-white/80">Partnership</div>
                  <h3 className="text-xl mb-3">AfDB Strategic Partnership</h3>
                  <p className="text-sm text-white/80 mb-4">Collaboration with African Development Bank to expand healthcare infrastructure access</p>
                  <div className="text-xs text-white/60">March 2025</div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/news/product-catalog-launch">
              <Card className="h-full hover:shadow-xl transition-shadow bg-white/10 backdrop-blur border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="text-xs uppercase tracking-wide mb-2 text-white/80">Product Launch</div>
                  <h3 className="text-xl mb-3">Medical Product Catalog</h3>
                  <p className="text-sm text-white/80 mb-4">Comprehensive catalog with 3,500+ products and transparent pricing</p>
                  <div className="text-xs text-white/60">February 2025</div>
                </CardContent>
              </Card>
            </Link>
            <Link to="/news/pacem-health-launches">
              <Card className="h-full hover:shadow-xl transition-shadow bg-white/10 backdrop-blur border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="text-xs uppercase tracking-wide mb-2 text-white/80">Company News</div>
                  <h3 className="text-xl mb-3">Pacem Health Launches</h3>
                  <p className="text-sm text-white/80 mb-4">Official launch of comprehensive healthcare systems strengthening platform</p>
                  <div className="text-xs text-white/60">February 2025</div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact / Investment Inquiry */}
      <section id="contact" className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">Investment Inquiries</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We welcome inquiries from qualified investors interested in learning more about Pacem Health's investment opportunity.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl mb-6">Investor Relations Contact</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Mail className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="mb-1">Email</h4>
                        <a href="mailto:investors@pacemhealth.com" className="text-[#4B2991] hover:underline">
                          investors@pacemhealth.com
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Building2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          Pacem Health Inc.<br />
                          Washington, D.C.<br />
                          United States
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Download className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="mb-1">Investment Materials</h4>
                        <p className="text-muted-foreground mb-3">
                          Detailed investment materials available for qualified investors upon request.
                        </p>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Request Information Packet
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6">Send an Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm mb-2 block">Name *</label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">Organization *</label>
                    <Input placeholder="Company/Fund name" required />
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">Email *</label>
                    <Input type="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">Investor Type *</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                      <option>Select...</option>
                      <option>Venture Capital</option>
                      <option>Private Equity</option>
                      <option>Impact Investor</option>
                      <option>Development Finance Institution</option>
                      <option>Family Office</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm mb-2 block">Message</label>
                    <Textarea placeholder="Tell us about your interest..." rows={4} />
                  </div>
                  <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d]">
                    Submit Inquiry
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    All inquiries are confidential and will be reviewed by our investor relations team.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              <strong>Important Notice:</strong> This website does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any such offer or solicitation will be made only by means of a confidential private placement memorandum and in accordance with applicable securities laws. Past performance is not indicative of future results. Investment in Pacem Health involves substantial risk and should only be considered by qualified investors who can afford to lose their entire investment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}