import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { ArrowRight, Users, Award, Heart, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import heroImage from 'figma:asset/d88215645f359fab540796259f96db7f96c7a229.png';
import healthcareDevImage from 'figma:asset/27817c2b820c13603fde8eab22bbe6ba1fb44783.png';
import pacemExcellenceImage from 'figma:asset/b718982397c18b0aadcd09aaf8434b4e438b1197.png';
import pediatricPharmacyImage from 'figma:asset/5500d1083ea5356ebfbd2911829b3438a8ac670d.png';

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] to-[#002875] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Building health ecosystems"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0033A0]/85 via-[#0033A0]/65 to-[#0033A0]/45"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl mb-6">
              Building Health Ecosystems That Transform Communities
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Strategic programs that go beyond medical supply to strengthen health systems, build capacity, and create lasting impact across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
                Explore Our Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-6">
              Beyond Medical Supply: Investing in Africa's Health Future
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't just deliver medical supplies—we invest in the people, systems, and infrastructure that make healthcare sustainable. Our strategic programs create competitive advantage while generating measurable health impact across Africa.
            </p>
          </div>

          {/* Key Principles */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-[#0033A0] mx-auto mb-4" />
                <h3 className="text-xl mb-3">Strategic Investment</h3>
                <p className="text-muted-foreground">
                  Programs are business strategy, not charity—generating demand, building trust, and creating competitive moats
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-[#00A0DC] mx-auto mb-4" />
                <h3 className="text-xl mb-3">Financial Sustainability</h3>
                <p className="text-muted-foreground">
                  Blended finance model combining commercial revenue, government contracts, and grants for long-term viability
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-[#0033A0] mx-auto mb-4" />
                <h3 className="text-xl mb-3">Measurable Impact</h3>
                <p className="text-muted-foreground">
                  Rigorous evaluation and data-driven decision making demonstrate real health outcomes and return on investment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Program Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Strategic Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three integrated programs that strengthen health systems, ensure pharmaceutical quality, and transform maternal-child health outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Healthcare Development Program */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={healthcareDevImage}
                  alt="Healthcare Development Program"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-4">Healthcare Development</h3>
                <p className="text-muted-foreground mb-6">
                  Building health literacy and clinical capacity through community health worker training, public health campaigns, and provider continuing education across Africa.
                </p>
                <Link to="/programs/healthcare-development" className="block w-full">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#00A0DC] text-white transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pacem Excellence */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={pacemExcellenceImage}
                  alt="Pacem Excellence Program"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-4">Pacem Excellence</h3>
                <p className="text-muted-foreground mb-6">
                  Combating counterfeit medicines through independent pharmaceutical quality testing, university research partnerships, and STEM education programs.
                </p>
                <Link to="/programs/pacem-excellence" className="block w-full">
                  <Button className="w-full bg-[#00A0DC] hover:bg-[#0033A0] text-white transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pediatric Pharmacy Program */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-2 border-[#00A0DC]/30">
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={pediatricPharmacyImage}
                  alt="Pediatric Pharmacy Program"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-4">Pediatric Pharmacy</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive maternal-child health services combining pediatric pharmacies, home visitation, economic empowerment, and multi-agency partnerships.
                </p>
                <Link to="/programs/pediatric-pharmacy" className="block w-full">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#00A0DC] text-white transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Transforming Health Systems at Scale
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our programs create measurable impact while building sustainable competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#0033A0]">$15M</div>
              <p className="text-sm text-muted-foreground">Annual program revenue by Year 5</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#00A0DC]">85%</div>
              <p className="text-sm text-muted-foreground">Cost recovery by Year 5</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#0033A0]">15+</div>
              <p className="text-sm text-muted-foreground">Countries operational</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#00A0DC]">300+</div>
              <p className="text-sm text-muted-foreground">Total staff across programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] to-[#002875] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Partner With Us to Scale Impact
          </h2>
          <p className="text-xl mb-8 text-white/90">
            We work with governments, foundations, development banks, NGOs, and impact investors to strengthen health systems and create lasting change across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100 transition-colors">
              Explore Partnership Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors">
              Download Program Overview
            </Button>
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-sm mb-4 text-white/80">Partnership Audiences:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-default">Ministries of Health</span>
              <span className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-default">Development Partners</span>
              <span className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-default">Foundations & Donors</span>
              <span className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-default">Impact Investors</span>
              <span className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-default">Universities & Research</span>
              <span className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-default">NGOs & Humanitarian Organizations</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}