import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowRight, Target, CheckCircle2, Heart, Home, DollarSign, Users, Baby, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../../components/SEOHead';
import heroImage from 'figma:asset/5500d1083ea5356ebfbd2911829b3438a8ac670d.png';

export default function PediatricPharmacyPage() {
  const programSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Pacem Health Pediatric Pharmacy Program",
    "description": "Comprehensive maternal-child health services with pediatric pharmacies, home visitation, economic empowerment, and community-based care across Africa",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Pediatric Pharmacy Program | Maternal Child Health Services Africa | Pacem Health"
        description="Transform maternal-child health through integrated pediatric pharmacies, home visitation, economic empowerment, and multi-agency partnerships. Reduce maternal and infant mortality across Africa with comprehensive care."
        keywords={[
          'pediatric pharmacy Africa',
          'maternal child health services',
          'home visitation programs',
          'maternal mortality reduction',
          'infant health programs Africa',
          'pediatric pharmaceutical care',
          'maternal health Africa'
        ]}
        structuredData={programSchema}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] to-[#002875] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Healthcare worker with family and child in maternal-child health setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0033A0]/90 to-[#002875]/85"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/programs" className="text-white/80 hover:text-white transition-colors">
                Programs
              </Link>
              <span className="text-white/60">/</span>
              <span>Pediatric Pharmacy Program</span>
            </div>
            <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-4">
              Pilot Program | Scaling Across Africa
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              Pacem Health Pediatric Pharmacy Program
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Comprehensive maternal-child health services combining state-of-the-art pediatric pharmacies, home visitation, economic empowerment, and multi-agency partnerships
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
          <h2 className="text-center text-2xl mb-8 text-muted-foreground">
            Operations at a Glance
          </h2>

          {/* Current Pilot Phase */}
          <div className="mb-12">
            <p className="text-center text-sm mb-6 text-muted-foreground">
              Current Pilot Phase
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2 text-[#0033A0]">2</div>
                <p className="text-sm text-muted-foreground">Pharmacy centers launching</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2 text-[#00A0DC]">500</div>
                <p className="text-sm text-muted-foreground">Families enrolled in pilot</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2 text-[#0033A0]">2</div>
                <p className="text-sm text-muted-foreground">Countries (Kenya, Ghana)</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2 text-[#00A0DC]">12 mo</div>
                <p className="text-sm text-muted-foreground">Proof of concept period</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-white text-sm text-muted-foreground">Funded Scale Projections</span>
            </div>
          </div>

          {/* Year 3 Projections */}
          <div>
            <p className="text-center text-sm mb-6 text-muted-foreground">
              Year 3 Scale Target
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2 text-[#0033A0]">10</div>
                <p className="text-sm text-muted-foreground">Pharmacy centers operational</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2 text-[#00A0DC]">5,000</div>
                <p className="text-sm text-muted-foreground">Pregnant women served annually</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2 text-[#0033A0]">10,000</div>
                <p className="text-sm text-muted-foreground">Families supported</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2 text-[#00A0DC]">5</div>
                <p className="text-sm text-muted-foreground">Countries across Africa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">
              Africa's Maternal-Child Health Crisis
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Maternal and child health remains Africa's greatest health challenge. Despite decades of progress, Africa accounts for 66% of global maternal deaths (290,000 annually) and 43% of neonatal deaths (2.4 million annually). The maternal mortality ratio in Africa stands at 542 deaths per 100,000 live births—nearly 50 times higher than Europe's rate of 11. Under-5 mortality reaches 74 deaths per 1,000 live births, compared to just 6 in high-income countries.
              </p>
              <p>
                These devastating statistics reflect systemic failures across multiple dimensions: lack of access to quality maternal-child health services, shortage of pediatric-trained healthcare providers, inadequate pharmaceutical care for children with wrong dosing and formulations, poverty and economic insecurity that prevents families from affording healthcare, and fragmented care that fails to address social determinants of health.
              </p>
              <p>
                The Pacem Health Pediatric Pharmacy Program addresses this crisis through an integrated ecosystem approach inspired by proven models like Cradle Kalamazoo and Rx Kids. We combine state-of-the-art pediatric pharmacies with comprehensive home visitation (Cradle Program), economic empowerment for mothers (Thrive Program), and multi-agency partnerships—all designed to transform maternal-child health outcomes across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Status Section - NEW */}
      <section className="py-16 bg-gradient-to-br from-[#0033A0]/5 to-[#00A0DC]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-8 w-8 text-[#0033A0]" />
              <h2 className="text-3xl md:text-4xl">
                Pilot Program Status
              </h2>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                We are currently launching pilot pharmacy centers in Kenya and Ghana with 500 families enrolled for our 12-month proof-of-concept phase. This pilot demonstrates our integrated model combining pharmaceutical care, home visitation, and economic support—generating the evidence base needed to scale across Africa.
              </p>
              <p>
                Our pilot phase focuses on validating the model's clinical effectiveness, financial sustainability, and operational feasibility. We're tracking maternal-child health outcomes, cost-recovery rates, multi-agency coordination success, and community acceptance to refine our approach before full-scale expansion.
              </p>
              <p>
                <strong className="text-foreground">We are actively seeking scale-up partners</strong> including national governments, development banks, foundations, and impact investors to expand from 2 pilot sites to 10 centers across 5 countries by Year 3.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Integrated Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Three Integrated Program Components
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive care from pregnancy through early childhood
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Component 1 */}
            <Card className="border-t-4 border-t-[#0033A0]">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0033A0] text-white flex items-center justify-center">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl">Pediatric Pharmacies</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  State-of-the-art pharmacy centers focused exclusively on maternal-child health
                </p>
                <ul className="space-y-2">
                  <li className="text-sm">Specialized pediatric formulations and dosing</li>
                  <li className="text-sm">Immunization services and growth monitoring</li>
                  <li className="text-sm">Medication therapy management by pharmacists</li>
                  <li className="text-sm">Prenatal and parenting education classes</li>
                  <li className="text-sm">Child-friendly environment with play areas</li>
                </ul>
              </CardContent>
            </Card>

            {/* Component 2 */}
            <Card className="border-t-4 border-t-[#00A0DC]">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#00A0DC] text-white flex items-center justify-center">
                    <Home className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl">Cradle Program</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Community health worker home visitation from pregnancy through age 3
                </p>
                <ul className="space-y-2">
                  <li className="text-sm">Monthly prenatal visits during pregnancy</li>
                  <li className="text-sm">Weekly postpartum visits for first month</li>
                  <li className="text-sm">Breastfeeding support and infant care education</li>
                  <li className="text-sm">Growth monitoring and developmental screening</li>
                  <li className="text-sm">Referral coordination and social services navigation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Component 3 */}
            <Card className="border-t-4 border-t-[#0033A0]">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#0033A0] text-white flex items-center justify-center">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl">Thrive Program</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Economic empowerment through cash transfers and savings support
                </p>
                <ul className="space-y-2">
                  <li className="text-sm">$150 prenatal payment upon pregnancy confirmation</li>
                  <li className="text-sm">$50/month for first year of child's life</li>
                  <li className="text-sm">Mobile money delivery (M-Pesa, MTN Mobile Money)</li>
                  <li className="text-sm">Financial stress reduction for healthy pregnancy</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pharmacy Services Detail */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8">
              Pediatric Pharmacy Center Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0033A0]/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="h-5 w-5 text-[#0033A0]" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2">Specialized Pharmaceutical Care</h3>
                      <p className="text-sm text-muted-foreground">
                        Pediatric formulations, maternal health products, vaccines, medical devices, nutritional products, and medication therapy management
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00A0DC]/10 flex items-center justify-center flex-shrink-0">
                      <Baby className="h-5 w-5 text-[#00A0DC]" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2">Clinical Services</h3>
                      <p className="text-sm text-muted-foreground">
                        Medication counseling, growth monitoring, basic health screening, immunization services, and referral coordination
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0033A0]/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-[#0033A0]" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2">Health Education</h3>
                      <p className="text-sm text-muted-foreground">
                        Prenatal classes, parenting workshops, disease prevention education, nutrition counseling, and family planning services
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00A0DC]/10 flex items-center justify-center flex-shrink-0">
                      <Home className="h-5 w-5 text-[#00A0DC]" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2">Community Integration</h3>
                      <p className="text-sm text-muted-foreground">
                        Coordinate with home visitation team, connect families to social services, and serve as hub for multi-agency partnerships
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Agency Partnership Network */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Multi-Agency Partnership Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each pharmacy center serves as hub coordinating 26+ partner organizations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Clinical Partners</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hospitals and referral facilities</li>
                  <li>• Maternal-child health clinics</li>
                  <li>• Midwifery practices</li>
                  <li>• Pediatricians (telemedicine)</li>
                  <li>• Mental health providers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Social Services</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Government social welfare</li>
                  <li>• NGO support programs</li>
                  <li>• Microfinance institutions</li>
                  <li>• Food assistance programs</li>
                  <li>• Housing support services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Community Partners</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Community organizations</li>
                  <li>• Traditional leaders</li>
                  <li>• Women's support groups</li>
                  <li>• Early childhood education</li>
                  <li>• Community health committees</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Private Sector</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Employer health benefits</li>
                  <li>• Baby product companies</li>
                  <li>• Telecommunications (SMS, mobile money)</li>
                  <li>• Transportation providers</li>
                  <li>• Corporate sponsors</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Pacem serves as hub coordinator: providing physical space, managing shared technology platform, coordinating referrals, tracking outcomes, and demonstrating collective impact
            </p>
          </div>
        </div>
      </section>

      {/* Expected Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center">
              Pilot Results & Projected Scale Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <TrendingUp className="h-10 w-10 text-[#0033A0] mx-auto mb-4" />
                  <h3 className="text-xl mb-3">Year 3 Scale</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">• 10 pharmacy centers</p>
                    <p className="text-sm">• 5 countries operational</p>
                    <p className="text-sm">• 5,000 pregnant women served</p>
                    <p className="text-sm">• 10,000 families supported</p>
                    <p className="text-sm">• 100 CHWs employed</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <Heart className="h-10 w-10 text-[#00A0DC] mx-auto mb-4" />
                  <h3 className="text-xl mb-3">Projected Health Outcomes</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">• 50% reduction in maternal mortality</p>
                    <p className="text-sm">• 40% reduction in neonatal mortality</p>
                    <p className="text-sm">• &gt;90% facility delivery rate</p>
                    <p className="text-sm">• &gt;70% exclusive breastfeeding</p>
                    <p className="text-sm">• &gt;95% immunization completion</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <Target className="h-10 w-10 text-[#0033A0] mx-auto mb-4" />
                  <h3 className="text-xl mb-3">Financial Sustainability</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm">• $2M annual operating budget</p>
                    <p className="text-sm">• 60% cost recovery ($1.2M)</p>
                    <p className="text-sm">• Pharmacy sales: $1M</p>
                    <p className="text-sm">• Government contracts: $200K</p>
                    <p className="text-sm">• Foundation grants: $800K</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Partnership & Funding Opportunities
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
                  Service delivery contracts for maternal-child health programs and CHW home visitation
                </p>
                <p className="text-sm">Part of national health system strengthening initiatives</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Foundations</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fund Cradle and Thrive programs with measurable maternal-child health impact
                </p>
                <p className="text-sm">Gates Foundation, Mastercard Foundation, Bernard van Leer</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Impact Investors</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Blended finance for pharmacy expansion with social returns
                </p>
                <p className="text-sm">Acumen, Root Capital, development finance institutions</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Development Partners</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fund pilot programs, research, and evaluation
                </p>
                <p className="text-sm">USAID, World Bank, UNICEF maternal-child health initiatives</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Corporate Sponsors</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Baby product companies, telecommunications, employer health programs
                </p>
                <p className="text-sm">CSR partnerships and cause marketing opportunities</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Community Organizations</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Community outreach partners leveraging local networks
                </p>
                <p className="text-sm">Relief organizations, community groups, local coalitions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0033A0] to-[#002875] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Partner to Scale Proven Maternal-Child Health Innovation
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join us in scaling a pilot-tested model that combines clinical excellence, community support, and economic empowerment to transform maternal-child health across Africa.
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