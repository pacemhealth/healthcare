import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowRight, Target, CheckCircle2, Users, GraduationCap, Heart, Radio, Smartphone, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../../components/SEOHead';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import heroImage from 'figma:asset/27817c2b820c13603fde8eab22bbe6ba1fb44783.png';

export default function HealthcareDevelopmentPage() {
  const programSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Pacem Healthcare Development Program",
    "description": "Community health worker training, public health campaigns, and healthcare provider education across Africa addressing infectious diseases and NCDs",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Healthcare Development Program | Community Health Worker Training Africa | Pacem Health"
        description="Build clinical capacity across Africa through community health worker training, public health campaigns, and provider education. Address pneumonia, diabetes, cardiovascular disease through sustainable workforce development."
        keywords={[
          'community health worker training Africa',
          'healthcare capacity building',
          'public health campaigns',
          'clinical education Africa',
          'health workforce development',
          'disease prevention programs',
          'healthcare provider training'
        ]}
        structuredData={programSchema}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] to-[#002875] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Healthcare development training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0033A0]/85 via-[#0033A0]/65 to-[#0033A0]/45"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/programs" className="text-white/80 hover:text-white transition-colors">
                Programs
              </Link>
              <span className="text-white/60">/</span>
              <span>Healthcare Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              Healthcare Development Program
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Building health literacy and clinical capacity through community health worker training, public health campaigns, and provider education across Africa
            </p>
            <Button size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Operations at a Glance */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl mb-2 text-muted-foreground">
            Operations at a Glance
          </h2>
          <p className="text-center text-sm mb-8 text-muted-foreground">
            Year 5 Projections
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#0033A0]">3,500+</div>
              <p className="text-sm text-muted-foreground">Community health workers trained</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#00A0DC]">12</div>
              <p className="text-sm text-muted-foreground">Countries operational</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#0033A0]">1M+</div>
              <p className="text-sm text-muted-foreground">Community members reached annually</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#00A0DC]">$1.5M</div>
              <p className="text-sm text-muted-foreground">Annual revenue (80% cost recovery)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">
              Africa's Dual Disease Burden and Workforce Crisis
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Africa faces a catastrophic dual disease burden: infectious diseases that kill millions annually, combined with rapidly rising non-communicable diseases (NCDs) that now account for 46% of deaths. Meanwhile, the continent has only 2.3 health workers per 1,000 people—far below the global average of 10—creating a devastating gap between disease burden and healthcare capacity.
              </p>
              <p>
                Pneumonia alone kills 800,000 children under 5 annually, with half of these deaths in sub-Saharan Africa. Diabetes affects 24 million African adults today, projected to reach 55 million by 2045. Cardiovascular disease is now the leading cause of adult deaths, yet 80% of CVD deaths are preventable through education and lifestyle modification. Critical gaps persist in health literacy, community health worker training, and provider continuing education.
              </p>
              <p>
                The Pacem Healthcare Development Program addresses these challenges through targeted training and education that builds sustainable clinical capacity. We train community health workers to recognize danger signs and provide frontline care, deliver public health campaigns that prevent disease before it starts, and provide continuing education for rural healthcare providers who lack access to modern training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Program Components
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive approach to building health capacity at every level
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Component 1 */}
            <Card className="border-t-4 border-t-[#0033A0]">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {/* <div className="w-12 h-12 rounded-full bg-[#0033A0] text-white flex items-center justify-center text-xl">
                    1
                  </div> */}
                  <h3 className="text-2xl">CHW Training Academy</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Comprehensive training and certification for community health workers
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">2-week intensive residential training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Disease recognition and referral protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Equipment training (BP cuffs, glucometers, thermometers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Pacem Certified CHW credential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Mobile app-based continuing education</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Component 2 */}
            <Card className="border-t-4 border-t-[#00A0DC]">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {/* <div className="w-12 h-12 rounded-full bg-[#00A0DC] text-white flex items-center justify-center text-xl">
                    2
                  </div> */}
                  <h3 className="text-2xl">Community Education</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Multi-channel public health campaigns focused on priority diseases
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Radio campaigns in local languages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Community health fairs and screening events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Door-to-door education by trained CHWs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">SMS/WhatsApp health tips and reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">School-based health education programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Component 3 */}
            <Card className="border-t-4 border-t-[#0033A0]">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {/* <div className="w-12 h-12 rounded-full bg-[#0033A0] text-white flex items-center justify-center text-xl">
                    3
                  </div> */}
                  <h3 className="text-2xl">Provider Education</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Continuing education for nurses, clinical officers, and pharmacists
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Quarterly regional workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Pacem Health Academy online platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Equipment-linked training (ventilators, diagnostics)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Clinical protocol updates and best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Annual clinical conference</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Focus Diseases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8">
              Priority Disease Focus Areas
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* <Heart className="h-6 w-6 text-[#0033A0] flex-shrink-0 mt-1" /> */}
                    <div>
                      <h3 className="text-lg mb-2">Pneumonia</h3>
                      <p className="text-sm text-muted-foreground">
                        Recognition of danger signs in children, appropriate use of antibiotics, prevention through vaccination and nutrition
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* <Target className="h-6 w-6 text-[#00A0DC] flex-shrink-0 mt-1" /> */}
                    <div>
                      <h3 className="text-lg mb-2">Diabetes</h3>
                      <p className="text-sm text-muted-foreground">
                        Prevention through lifestyle modification, blood glucose monitoring, medication adherence, foot care and complication prevention
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* <TrendingUp className="h-6 w-6 text-[#0033A0] flex-shrink-0 mt-1" /> */}
                    <div>
                      <h3 className="text-lg mb-2">Cardiovascular Disease</h3>
                      <p className="text-sm text-muted-foreground">
                        Risk factor modification, blood pressure monitoring, medication management, emergency recognition of heart attacks and strokes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              How the Program Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to building sustainable healthcare capacity
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4">
              {/* <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#0033A0] text-white flex items-center justify-center">
                  {/* <GraduationCap className="h-6 w-6" /> *
                </div>
              </div> */}
              <div>
                <h3 className="text-xl mb-2">CHW Selection & Training</h3>
                <p className="text-muted-foreground">
                  Counties nominate community health workers for training. Selected CHWs undergo 2-week intensive training covering disease recognition, equipment use, and communication skills. Upon completion, they receive certification and starter equipment kits.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              {/* <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#00A0DC] text-white flex items-center justify-center">
                  <Radio className="h-6 w-6" />  *
                </div>
              </div> */}
              <div>
                <h3 className="text-xl mb-2">Public Health Campaigns</h3>
                <p className="text-muted-foreground">
                  Multi-channel campaigns combine radio broadcasts, community health fairs, and door-to-door education. Campaigns are co-branded with Ministries of Health and sponsored by pharmaceutical companies, ensuring credibility and sustainability.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              {/* <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#0033A0] text-white flex items-center justify-center">
                  {/* <Smartphone className="h-6 w-6" /> *
                </div>
              </div> */}
              <div>
                <h3 className="text-xl mb-2">Digital Support Systems</h3>
                <p className="text-muted-foreground">
                  CHWs use mobile apps for continuing education, clinical protocols, and patient tracking. Providers access online courses through Pacem Health Academy. SMS systems send health tips and reminders to community members.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              {/* <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#00A0DC] text-white flex items-center justify-center">
                  {/* <TrendingUp className="h-6 w-6" /> *
                </div>
              </div> */}
              <div>
                <h3 className="text-xl mb-2">Continuous Improvement</h3>
                <p className="text-muted-foreground">
                  University partnerships provide evaluation and research support. Regular data collection measures health outcomes, informing program refinements. Annual conferences bring together healthcare workers for knowledge sharing and networking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center">
              Impact & Expected Results
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  {/* <Users className="h-10 w-10 text-[#0033A0] mx-auto mb-4" /> */}
                  <h3 className="text-xl mb-3">Year 3 Targets</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">• 2,000 CHWs trained</p>
                    <p className="text-sm">• 10 countries operational</p>
                    <p className="text-sm">• 500,000 community members reached</p>
                    <p className="text-sm">• 1,000 providers certified</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  {/* <TrendingUp className="h-10 w-10 text-[#00A0DC] mx-auto mb-4" /> */}
                  <h3 className="text-xl mb-3">Health Outcomes</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">• 25% reduction in child pneumonia mortality</p>
                    <p className="text-sm">• Improved medication adherence rates</p>
                    <p className="text-sm">• Increased facility referral rates</p>
                    <p className="text-sm">• Better disease prevention knowledge</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  {/* <Target className="h-10 w-10 text-[#0033A0] mx-auto mb-4" /> */}
                  <h3 className="text-xl mb-3">Financial Sustainability</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">• $1.5M annual revenue</p>
                    <p className="text-sm">• 80% cost recovery</p>
                    <p className="text-sm">• Government contracts: 50%</p>
                    <p className="text-sm">• Pharma sponsorships: 25%</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Multiple partnership models for diverse stakeholders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Governments</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contract for CHW training as part of national health system strengthening initiatives
                </p>
                <p className="text-sm">Typical contract: $500/CHW trained</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Pharmaceutical Companies</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sponsor disease-specific education campaigns and provider training programs
                </p>
                <p className="text-sm">ROI: Increased product demand and brand awareness</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">NGOs</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Training for their community health workers and field staff
                </p>
                <p className="text-sm">Examples: BRAC, Living Goods, Partners In Health</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Development Partners</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fund pilot programs, research, and capacity building initiatives
                </p>
                <p className="text-sm">Partners: World Bank, USAID, Gates Foundation</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Universities</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Curriculum development, evaluation, and research partnerships
                </p>
                <p className="text-sm">Joint publications and academic collaboration</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Equipment Manufacturers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Sponsor training in exchange for product demonstrations
                </p>
                <p className="text-sm">Creates demand for quality medical equipment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] to-[#002875] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Build Healthcare Capacity With Us
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Partner with healthcare development experts who understand Africa's unique challenges to train community health workers, educate communities, and strengthen clinical capacity across the continent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100">
              Schedule Partnership Discussion
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
              Download Program Brief
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}