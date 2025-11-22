import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { ArrowRight, Target, TrendingUp, DollarSign, Award, Users, Lightbulb, Globe, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl mb-6">
              Our Team
            </h1>
            <p className="text-2xl md:text-3xl mb-4">
              Combining Strategic Vision with Implementation Excellence
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              We bring together healthcare leaders, systems experts, and implementation specialists united by a shared mission to strengthen Africa's health systems through innovative solutions and strategic partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Coming Soon */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Building a world-class leadership team with deep healthcare expertise and proven track records in African health systems transformation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#4B2991]/5 to-[#7C944B]/5 rounded-2xl p-8 lg:p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-[#4B2991]/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-[#4B2991]" />
              </div>
              <h3 className="text-2xl md:text-3xl mb-4">
                Building Our Executive Team
              </h3>
              <p className="text-muted-foreground mb-6">
                We are in the process of assembling a senior leadership team combining healthcare industry veterans, African health systems experts, and technology innovators who share our commitment to transforming healthcare delivery across Africa.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Our leadership profiles will be featured here as we formalize our executive structure in 2024.
              </p>
              <Link to="/careers">
                <Button className="bg-[#4B2991] hover:bg-[#3d1e7d] text-white">
                  Join Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values & Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Values & Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to strengthening Africa's health systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#4B2991]/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-[#4B2991]" />
                </div>
                <h3 className="text-xl mb-3">Human-Centered</h3>
                <p className="text-sm text-muted-foreground">
                  Every solution we design starts with the needs of patients, healthcare workers, and communities we serve across Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#7C944B]/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#7C944B]" />
                </div>
                <h3 className="text-xl mb-3">Systems-Focused</h3>
                <p className="text-sm text-muted-foreground">
                  We think beyond individual products to design comprehensive solutions that strengthen entire health systems.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#4B2991]/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#4B2991]" />
                </div>
                <h3 className="text-xl mb-3">Implementation Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We combine strategic vision with operational expertise to ensure transformations actually happen and deliver results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Advisory Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Advisory Team
            </h2>
            {/* <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Senior advisors who guide our strategic approach to African health systems transformation
            </p> */}
            <h1 className="text-2xl md:text-3xl mb-4 text-center ">Coming Soon</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Advisory Team Member 1 */}
            {/* <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] flex items-center justify-center mx-auto mb-6">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl mb-2">Senior Health Systems Advisor</h3>
                <p className="text-sm text-[#4B2991] mb-4">Health System Strategy & Planning</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Former senior Ministry of Health official with 25+ years experience in national health strategy development, primary care strengthening, and health system transformation across East and Southern Africa.
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4B2991]"></div>
                    <span>12 National Health Strategies</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4B2991]"></div>
                    <span>WHO Technical Advisory</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4B2991]"></div>
                    <span>UHC Implementation Expert</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            {/* Advisory Team Member 2 */}
            {/* <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#7C944B] to-[#6c843e] flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl mb-2">Digital Health Transformation Lead</h3>
                <p className="text-sm text-[#7C944B] mb-4">Digital Health & Innovation</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Health informatics specialist with extensive experience implementing digital health platforms, DHIS2 systems, and mHealth solutions across resource-limited settings in West and Central Africa.
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7C944B]"></div>
                    <span>90+ Health Facilities Digitized</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7C944B]"></div>
                    <span>DHIS2 Implementation Expert</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7C944B]"></div>
                    <span>Interoperability Frameworks</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            {/* Advisory Team Member 3 */}
            {/* <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl mb-2">Health Economics & Financing Expert</h3>
                <p className="text-sm text-[#4B2991] mb-4">Health System Financing & Sustainability</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Health economist specializing in national health insurance schemes, sustainable financing mechanisms, and transition from donor dependency to domestic financing across multiple African countries.
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4B2991]"></div>
                    <span>6 National Insurance Schemes</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4B2991]"></div>
                    <span>$450M+ Health Programs</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4B2991]"></div>
                    <span>UHC Roadmap Development</span>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              
              {/* Our advisory team members are carefully selected for each engagement based on regional expertise, technical specialization, and proven track record in African health systems. We match the right advisors to your specific transformation challenges. */}
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Network */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Expert Advisory Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We collaborate with Africa's leading health systems experts, bringing together the right combination of technical expertise, regional knowledge, and implementation experience for each engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Health System Strategy Experts */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-[#4B2991]/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[#4B2991]" />
                </div>
                <h3 className="text-xl mb-3">Health System Strategy</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Former Ministers of Health, WHO technical advisors, and national health strategy architects with decades of experience across African health systems.
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-[#4B2991] bg-[#4B2991]/5 px-2 py-1 rounded">
                    25+ Countries
                  </div>
                  <div className="text-xs text-[#4B2991] bg-[#4B2991]/5 px-2 py-1 rounded">
                    40+ National Health Strategies
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Digital Health Transformation */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-[#4B2991]/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[#4B2991]" />
                </div>
                <h3 className="text-xl mb-3">Digital Health Innovation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Health informatics specialists, DHIS2 experts, and mHealth platform architects experienced in low-resource environments.
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-[#4B2991] bg-[#4B2991]/5 px-2 py-1 rounded">
                    120+ Health Facilities
                  </div>
                  <div className="text-xs text-[#4B2991] bg-[#4B2991]/5 px-2 py-1 rounded">
                    2M+ Digital Health Records
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Economics & Financing */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-[#4B2991]/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-[#4B2991]" />
                </div>
                <h3 className="text-xl mb-3">Health Economics & Financing</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Health economists, insurance scheme designers, and sustainable financing specialists with UHC implementation experience.
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-[#4B2991] bg-[#4B2991]/5 px-2 py-1 rounded">
                    12 Countries
                  </div>
                  <div className="text-xs text-[#4B2991] bg-[#4B2991]/5 px-2 py-1 rounded">
                    $850M+ Health Programs
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality & Accreditation */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-[#4B2991]/10 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#4B2991]" />
                </div>
                <h3 className="text-xl mb-3">Quality & Accreditation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  JCI assessors, COHSASA consultants, and quality improvement specialists experienced in resource-limited African settings.
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-[#4B2991] bg-[#4B2991]/5 px-2 py-1 rounded">
                    60+ Health Facilities
                  </div>
                  <div className="text-xs text-[#4B2991] bg-[#4B2991]/5 px-2 py-1 rounded">
                    15+ Accreditations
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Workforce Development */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-[#4B2991]/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#4B2991]" />
                </div>
                <h3 className="text-xl mb-3">Workforce Development</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Medical educators, nursing administrators, and technical training specialists with African health workforce experience.
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-[#4B2991] bg-[#4B2991]/5 px-2 py-1 rounded">
                    8,500+ Healthcare Workers
                  </div>
                  <div className="text-xs text-[#4B2991] bg-[#4B2991]/5 px-2 py-1 rounded">
                    35+ Training Programs
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Policy & Regulatory */}
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-[#4B2991]/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-[#4B2991]" />
                </div>
                <h3 className="text-xl mb-3">Policy & Regulatory</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Former regulatory authority officials, pharmaceutical policy experts, and regional harmonization specialists.
                </p>
                <div className="space-y-2">
                  <div className="text-xs text-[#4B2991] bg-[#4B2991]/5 px-2 py-1 rounded">
                    18 Regulatory Systems
                  </div>
                  <div className="text-xs text-[#4B2991] bg-[#4B2991]/5 px-2 py-1 rounded">
                    200+ Policy Frameworks
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-br from-[#4B2991]/5 to-[#7C944B]/5 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl mb-4">
                Customized Expert Teams for Every Engagement
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                We don't offer one-size-fits-all consulting. For each engagement, we assemble a specialized team combining the right mix of technical expertise, regional knowledge, and implementation experience to address your specific health system challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg mb-4">Our Advisory Network Includes:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4B2991]"></div>
                    <span className="text-sm">Former Ministers of Health and senior MOH officials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4B2991]"></div>
                    <span className="text-sm">WHO, UNICEF, and Global Fund technical officers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4B2991]"></div>
                    <span className="text-sm">Hospital CEOs and chief medical officers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4B2991]"></div>
                    <span className="text-sm">Health insurance executives and financing experts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4B2991]"></div>
                    <span className="text-sm">Regulatory authority directors and policy specialists</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg mb-4">Regional Expertise Covers:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#7C944B]" />
                    <span className="text-sm">East Africa (Kenya, Tanzania, Uganda, Rwanda, Ethiopia)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#7C944B]" />
                    <span className="text-sm">West Africa (Nigeria, Ghana, Senegal, Mali, Burkina Faso)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#7C944B]" />
                    <span className="text-sm">Southern Africa (South Africa, Botswana, Zambia, Zimbabwe)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#7C944B]" />
                    <span className="text-sm">Central Africa (DRC, Cameroon, CAR)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#7C944B]" />
                    <span className="text-sm">North Africa (Egypt, Morocco, Tunisia)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#7C944B] to-[#6c843e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Work with Our Expert Network?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Schedule a consultation to discuss how our advisory network can support your health system transformation goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/advisory">
              <Button size="lg" className="bg-white text-[#7C944B] hover:bg-gray-100">
                Explore Advisory Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/careers">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full">
                Join Our Network
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}