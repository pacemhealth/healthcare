import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowRight, Target, CheckCircle2, Award, Microscope, GraduationCap, Shield, Beaker, TrendingUp, Users, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../../components/SEOHead';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import pharmaInnovationImage from 'figma:asset/a90528fa0b28883a585a7007888462f9d623c926.png';
import scholarImage from 'figma:asset/3390cc44f0607df77c0cf40cb3940cd9e10d1d0d.png';
import labWorkImage from 'figma:asset/a872c908a68994871aa6bb8fb69ae0d3c57c7c84.png';
import heroImage from 'figma:asset/b718982397c18b0aadcd09aaf8434b4e438b1197.png';

export default function PacemExcellencePage() {
  const programSchema = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    "name": "Pacem Excellence",
    "description": "Advancing pharmaceutical quality and scientific excellence across Africa through independent quality surveillance, university research partnerships, and STEM education programs",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Pacem Excellence | Pharmaceutical Quality Surveillance Africa | Pacem Health"
        description="Advancing pharmaceutical quality through independent surveillance, university research partnerships, and STEM education. Combat counterfeit medicines and build scientific capacity across Africa."
        keywords={[
          'pharmaceutical quality surveillance Africa',
          'independent medicine testing',
          'university research partnerships',
          'STEM education Africa',
          'counterfeit medicine detection',
          'pharmaceutical science capacity building',
          'ISO 17025 laboratory Africa'
        ]}
        structuredData={programSchema}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] to-[#002875] text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Pacem Excellence team"
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
              <span>Pacem Excellence</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              Pacem Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Advancing Pharmaceutical Quality and Scientific Excellence Across Africa
            </p>
            <p className="text-lg mb-8 text-white/80">
              Pacem Excellence is our commitment to Africa's pharmaceutical future. Through independent quality surveillance, university research partnerships, and STEM education programs, we combat counterfeit medicines, advance scientific knowledge, and inspire the next generation of African scientists. This is our investment in building health systems that last.
            </p>
            <Button size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100 transition-colors">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Public Health Mission Banner */}
      <section className="py-8 bg-[#0033A0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <p className="text-lg">
              <strong>A Social Impact Program, Not a Commercial Service</strong> — Pacem Excellence provides independent pharmaceutical quality surveillance and research to protect public health across Africa
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">
              Africa's Pharmaceutical Quality Crisis
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Pharmaceutical quality is a life-and-death crisis in Africa. The WHO estimates that <strong>1 in 10 medical products</strong> in low- and middle-income countries is substandard or falsified, with Africa bearing the highest burden at <strong>42% of all reported cases</strong>. This epidemic kills hundreds of thousands annually—267,000 malaria deaths alone are attributable to poor-quality antimalarials in sub-Saharan Africa.
              </p>
              <p>
                The <strong>$30 billion annual cost</strong> of fake medicines devastates African economies while undermining trust in health systems. Yet fewer than 5% of African countries have functional medicine quality assurance systems, and the continent faces a critical shortage of pharmaceutical scientists and laboratory technicians capable of detecting and preventing counterfeit medicines.
              </p>
              <p>
                <strong>Pacem Excellence addresses this crisis</strong> through three integrated pillars: independent pharmaceutical quality surveillance in partnership with leading African universities, applied research that generates evidence and builds local expertise, and comprehensive STEM education programs that inspire and train Africa's next generation of pharmaceutical scientists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={pharmaInnovationImage}
              alt="Pharmaceutical quality testing laboratory"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Three Pillars of Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Three Pillars of Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ensuring quality, advancing science, and inspiring the next generation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <Card className="border-t-4 border-t-[#0033A0] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {/* <Shield className="h-8 w-8 text-[#0033A0]" /> */}
                  <h3 className="text-2xl">Quality Testing & Surveillance</h3>
                </div>
                <p className="mb-4 text-sm text-[#00A0DC]">Independent Verification for Public Health Protection</p>
                <p className="text-muted-foreground mb-4">
                  ISO 17025 accredited testing laboratories in partnership with leading African universities conducting independent pharmaceutical quality surveillance to protect patients and strengthen quality systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">University laboratory partnerships (ISO 17025 accredited)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Government quality surveillance contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Mobile laboratory units for field testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">WHO prequalification program collaboration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Counterfeit detection and reporting systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 2 */}
            <Card className="border-t-4 border-t-[#00A0DC] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {/* <Beaker className="h-8 w-8 text-[#00A0DC]" /> */}
                  <h3 className="text-2xl">Research Partnerships</h3>
                </div>
                <p className="mb-4 text-sm text-[#0033A0]">Advancing Pharmaceutical Science Through Academic Collaboration</p>
                <p className="text-muted-foreground mb-4">
                  Partnering with African universities to conduct applied research on pharmaceutical quality, generating evidence for policy-making and building research capacity at African institutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Pharmaceutical quality surveillance studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Drug stability in tropical climates research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Counterfeit detection methodology development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Joint publications in peer-reviewed journals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Annual Pan-African Pharmaceutical Quality Conference</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pillar 3 */}
            <Card className="border-t-4 border-t-[#0033A0] hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  {/* <GraduationCap className="h-8 w-8 text-[#0033A0]" /> */}
                  <h3 className="text-2xl">STEM Education</h3>
                </div>
                <p className="mb-4 text-sm text-[#00A0DC]">Inspiring Africa's Next Generation of Scientists</p>
                <p className="text-muted-foreground mb-4">
                  Investing in Africa's future through scholarships, mentorship, and hands-on experience for students pursuing careers in pharmaceutical sciences, chemistry, and public health.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Pacem Science Scholars Program (20 scholars by Year 3)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Pan-African Health Science Fair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Mobile Science Laboratory Program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Secondary school teacher training workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Internships at Pacem and university facilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Distinction Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-[#00A0DC] bg-[#00A0DC]/5">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  {/* <Shield className="h-8 w-8 text-[#00A0DC] flex-shrink-0" /> */}
                  <div>
                    <h3 className="text-xl mb-3">Independent Quality Surveillance</h3>
                    <p className="text-muted-foreground mb-4">
                      Pacem Excellence provides <strong>independent pharmaceutical quality surveillance</strong> of the African market—not testing of Pacem's commercial products. This independence is critical for building trust with regulatory authorities and governments.
                    </p>
                    <p className="text-muted-foreground">
                      Our commercial Quality Assurance Service ensures the quality of products we distribute. Pacem Excellence focuses on protecting public health by detecting and removing substandard and falsified medicines from the broader market through partnerships with universities and government regulatory bodies.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* University Partnership Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              University Partnership Model
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Building quality testing capacity through strategic partnerships with Africa's leading research institutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                {/* <Microscope className="h-10 w-10 text-[#0033A0] mx-auto mb-4" /> */}
                <h3 className="text-xl mb-3">Tier 1: Testing Infrastructure</h3>
                <p className="text-sm text-muted-foreground">
                  Partner with universities with ISO 17025 accredited labs. Share government surveillance contracts and access testing capacity without building all infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                {/* <FlaskConical className="h-10 w-10 text-[#00A0DC] mx-auto mb-4" /> */}
                <h3 className="text-xl mb-3">Tier 2: Research Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Joint research on pharmaceutical quality, drug stability, and detection methods. Publications, thought leadership, and WHO partnership opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                {/* <GraduationCap className="h-10 w-10 text-[#0033A0] mx-auto mb-4" /> */}
                <h3 className="text-xl mb-3">Tier 3: Talent Pipeline</h3>
                <p className="text-sm text-muted-foreground">
                  Student internships, graduate research projects, and the Pacem Science Scholars Program create future talent pipeline and brand building.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={labWorkImage}
              alt="University laboratory research partnership"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Laboratory Testing Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl mb-4">
              Quality Surveillance Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Independent pharmaceutical quality testing in partnership with accredited university laboratories
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* <Shield className="h-6 w-6 text-[#0033A0] flex-shrink-0" /> */}
                  <div>
                    <h3 className="text-lg mb-2">Government Quality Surveillance</h3>
                    <p className="text-sm text-muted-foreground">
                      Testing medicines collected from pharmacies and hospitals to detect substandard and falsified products in the market through contracts with regulatory authorities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* <Microscope className="h-6 w-6 text-[#00A0DC] flex-shrink-0" /> */}
                  <div>
                    <h3 className="text-lg mb-2">Post-Market Surveillance Studies</h3>
                    <p className="text-sm text-muted-foreground">
                      Research-based surveillance studies in partnership with universities, generating evidence for policy-making and regulatory decision-making
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* <Beaker className="h-6 w-6 text-[#0033A0] flex-shrink-0" /> */}
                  <div>
                    <h3 className="text-lg mb-2">Advanced Laboratory Testing</h3>
                    <p className="text-sm text-muted-foreground">
                      HPLC, mass spectrometry, dissolution testing, microbial contamination analysis using ISO 17025 accredited university laboratory facilities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* <Target className="h-6 w-6 text-[#00A0DC] flex-shrink-0" /> */}
                  <div>
                    <h3 className="text-lg mb-2">Mobile Field Testing</h3>
                    <p className="text-sm text-muted-foreground">
                      Mobile laboratory units for rapid field testing and market sampling, enabling surveillance in remote areas and border crossings
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* STEM Programs Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              STEM Education & Science Fair Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Inspiring and training the next generation of African pharmaceutical scientists
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                {/* <Award className="h-10 w-10 text-[#0033A0] mx-auto mb-4" /> */}
                <h3 className="text-xl mb-3 text-center">Pacem Science Scholars Program</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Phased growth: 5 scholars (Year 1) → 12 scholars (Year 2) → 20 scholars (Year 3)</li>
                  <li>• Partial to full scholarships (50-100% tuition) based on need + living stipend</li>
                  <li>• Focus: pharmaceutical sciences, chemistry, biomedical engineering</li>
                  <li>• Mentorship from Pacem Excellence scientists</li>
                  <li>• Guaranteed internships at laboratory facilities</li>
                  <li>• Preference for students from underserved regions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                {/* <GraduationCap className="h-10 w-10 text-[#00A0DC] mx-auto mb-4" /> */}
                <h3 className="text-xl mb-3 text-center">Pan-African Health Science Fair</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Annual competition for secondary and university students</li>
                  <li>• Categories: pharmaceutical sciences, medical devices, public health, digital health</li>
                  <li>• Regional competitions feeding into continental finals</li>
                  <li>• Prizes: scholarships, laboratory equipment for schools</li>
                  <li>• Judged by Pacem scientists, university faculty, industry leaders</li>
                  <li>• Target: 500 participants from 10 countries by Year 3</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                {/* <Microscope className="h-10 w-10 text-[#0033A0] mx-auto mb-4" /> */}
                <h3 className="text-xl mb-3 text-center">Mobile Science Laboratory</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Converted shipping container laboratories</li>
                  <li>• Visit schools in rural areas lacking laboratory facilities</li>
                  <li>• Hands-on experiments in chemistry, biology, pharmaceutical science</li>
                  <li>• Staffed by Pacem scientists and university student volunteers</li>
                  <li>• Target: 1 unit, 30 schools (Year 1) → 3 units, 100 schools (Year 3)</li>
                  <li>• Inspiring students who lack access to science resources</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                {/* <Users className="h-10 w-10 text-[#00A0DC] mx-auto mb-4" /> */}
                <h3 className="text-xl mb-3 text-center">Teacher Training Workshops</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Train secondary school science teachers in modern lab techniques</li>
                  <li>• Provide low-cost experiment kits for resource-limited schools</li>
                  <li>• Online resource library of lesson plans and videos</li>
                  <li>• Continuing education credits for professional development</li>
                  <li>• Target: 200 teachers trained and 50 schools equipped by Year 3</li>
                  <li>• Creating sustainable science education infrastructure</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={scholarImage}
              alt="Pacem Science Scholars - Recipients"
              className="w-full h-auto object-cover"
            />
          </div> */}
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center">
              Expected Impact & Results (Year 3)
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  {/* <Shield className="h-10 w-10 text-[#0033A0] mx-auto mb-4" /> */}
                  <h3 className="text-xl mb-3">Quality Assurance</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">• 5 university laboratory partnerships</p>
                    <p className="text-sm">• 2,000+ pharmaceutical samples tested annually</p>
                    <p className="text-sm">• 20+ government surveillance contracts</p>
                    <p className="text-sm">• WHO prequalification partner</p>
                    <p className="text-sm">• Counterfeit medicines removed from market</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  {/* <Beaker className="h-10 w-10 text-[#00A0DC] mx-auto mb-4" /> */}
                  <h3 className="text-xl mb-3">Research Impact</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">• 5 university partnerships</p>
                    <p className="text-sm">• 50+ peer-reviewed publications</p>
                    <p className="text-sm">• Evidence-based policy recommendations</p>
                    <p className="text-sm">• Pan-African Pharmaceutical Quality Conference</p>
                    <p className="text-sm">• Talent pipeline for Pacem recruitment</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  {/* <GraduationCap className="h-10 w-10 text-[#0033A0] mx-auto mb-4" /> */}
                  <h3 className="text-xl mb-3">STEM Education</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">• 37 scholars enrolled (5 + 12 + 20 across three cohorts)</p>
                    <p className="text-sm">• 500 Science Fair participants from 10 countries</p>
                    <p className="text-sm">• 100 schools reached by mobile lab</p>
                    <p className="text-sm">• 200+ teachers trained</p>
                    <p className="text-sm">• Next generation of African scientists inspired</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center">
              Creating Competitive Advantage
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3 text-[#0033A0]">Regulatory Relationships</h3>
                  <p className="text-sm text-muted-foreground">
                    Independent testing builds trust with regulatory authorities, creating partnerships competitors cannot replicate
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3 text-[#00A0DC]">University Partnerships</h3>
                  <p className="text-sm text-muted-foreground">
                    Access to research capacity and talent pipeline through strategic academic collaborations
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3 text-[#0033A0]">Brand Reputation</h3>
                  <p className="text-sm text-muted-foreground">
                    Positioned as public health partner, not just commercial vendor, differentiating from pure distributors
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3 text-[#00A0DC]">Market Intelligence</h3>
                  <p className="text-sm text-muted-foreground">
                    Surveillance provides insights into counterfeit trends and quality issues that inform commercial strategy
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Partnership & Funding Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Multiple partnership models for governments, universities, and development partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Regulatory Authorities</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contract for pharmaceutical quality surveillance and post-market testing services
                </p>
                <p className="text-sm">Annual retainer contracts for ongoing quality monitoring</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Universities</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Laboratory partnerships, research collaborations, student internships, faculty consulting
                </p>
                <p className="text-sm">Joint publications and academic collaboration</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Development Partners</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fund pharmaceutical quality programs and laboratory infrastructure
                </p>
                <p className="text-sm">USAID, DFID, Gates Foundation partnerships</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Pharmaceutical Companies</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Independent quality verification and STEM program sponsorships
                </p>
                <p className="text-sm">Sponsor Science Fair, scholarships, mobile laboratories</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Education Foundations</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fund STEM education programs and science scholarships
                </p>
                <p className="text-sm">Mastercard Foundation, Varkey Foundation</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">WHO & Professional Associations</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Prequalification program partnership and quality assurance initiatives
                </p>
                <p className="text-sm">Technical collaboration and standard-setting</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] to-[#002875] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Join the Fight Against Counterfeit Medicines
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Partner with pharmaceutical quality experts to ensure medicine safety, advance scientific research, and inspire Africa's next generation of scientists. Together, we can build health systems that protect patients and advance pharmaceutical excellence across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#0033A0] hover:bg-gray-100 transition-colors">
              Schedule Partnership Discussion
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors">
              Download Program Brief
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}