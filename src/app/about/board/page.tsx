import { Card, CardContent } from '../../../components/ui/card';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { Shield, Users, Target, TrendingUp, Globe, Award } from 'lucide-react';
import { SEOHead } from '../../../components/SEOHead';

export default function BoardOfDirectors() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pacem Health",
    "description": "Board of Directors providing strategic governance for African healthcare strengthening",
    "url": "https://pacemhealth.com/about/board"
  };

  // Board Members Data
  const boardMembers = [
    {
      name: 'Dr. Chimamanda Adebayo',
      title: 'Board Member',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      bio: 'Former Director of Health Systems at the World Health Organization, where she led initiatives to strengthen pharmaceutical supply chains across 30 African countries. Brings 25 years of experience in health systems strengthening, pharmaceutical regulation, and public-private partnerships.',
      expertise: ['Health Systems', 'Pharmaceutical Regulation', 'African Markets'],
      color: '#4B2991'
    },
    {
      name: 'Robert Chen',
      title: 'Board Member',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      bio: 'Managing Partner at Global Health Ventures, a private equity firm focused on healthcare companies in emerging markets. Previously CFO of a publicly-traded medical device company. Brings expertise in growth-stage healthcare finance, capital markets, and strategic M&A.',
      expertise: ['Healthcare Finance', 'Private Equity', 'Emerging Markets'],
      color: '#4B2991'
    },
    {
      name: 'Kofi Mensah',
      title: 'Board Member',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      bio: 'Chairman & CEO of Mensah Group, a diversified conglomerate with operations across West Africa including healthcare, logistics, and manufacturing. Serves on boards of multiple African corporations and maintains deep relationships with African governments and business leaders.',
      expertise: ['African Business', 'Government Relations', 'Regional Networks'],
      color: '#7C944B'
    },
    {
      name: 'Dr. Patricia Morrison',
      title: 'Board Member',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      bio: 'Former Vice President of Health, Nutrition & Population at the World Bank, where she oversaw $6 billion in health sector investments across Africa, Asia, and Latin America. Expert in health system financing, development partnerships, and multilateral donor coordination.',
      expertise: ['International Development', 'Development Finance', 'Donor Relations'],
      color: '#4B2991'
    },
    {
      name: 'James Thompson',
      title: 'Board Member',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      bio: 'Former CEO of MediSupply International, a global pharmaceutical distribution company serving emerging markets. Led expansion into 45 countries with expertise in cold chain logistics, last-mile delivery, and regulatory compliance for pharmaceutical distribution.',
      expertise: ['Supply Chain', 'Pharmaceutical Distribution', 'Logistics'],
      color: '#7C944B'
    },
    {
      name: 'Ambassador Marie Nkunda',
      title: 'Independent Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      bio: 'Former Commissioner for Social Affairs at the African Union and Ambassador to the European Union. Brings extensive experience in African regional integration, multilateral diplomacy, and governance. Serves as independent director on multiple corporate and foundation boards.',
      expertise: ['Governance', 'African Union', 'Public Policy'],
      color: '#4B2991'
    }
  ];

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Board of Directors | Leadership & Governance | Pacem Health"
        description="Meet Pacem Health's Board of Directors. Experienced leaders in healthcare systems, pharmaceutical distribution, international development, and African business. Providing strategic governance for healthcare strengthening across Africa."
        keywords={[
          'Pacem Health board directors',
          'healthcare governance Africa',
          'pharmaceutical industry leadership',
          'health systems experts',
          'African healthcare board',
          'international development leaders'
        ]}
        structuredData={organizationSchema}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4B2991] via-[#5c3aa8] to-[#7C944B] text-white overflow-hidden min-h-[400px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 sm:mb-6">Corporate Governance</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Board of Directors
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Providing strategic oversight and governance excellence to strengthen healthcare delivery across Africa
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg md:text-xl text-muted-foreground">
              Pacem Health's Board of Directors brings together global health systems expertise, financial leadership, African business acumen, and governance experience to guide our strategic direction and ensure accountability to stakeholders. Our Board members provide oversight, strategic guidance, and deep industry expertise as we work to strengthen healthcare systems across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">Our Board Members</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Distinguished leaders with complementary expertise in healthcare systems, international development, African markets, and corporate governance.
            </p>
          </div>

          {/* Board Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-all overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-1">{member.name}</h3>
                    <p className="text-sm mb-3" style={{ color: member.color }}>{member.title}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-1 text-xs rounded"
                          style={{ 
                            backgroundColor: `${member.color}1A`, 
                            color: member.color 
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board Governance Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">Board Governance</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Our Board provides strategic oversight and ensures alignment with our mission to strengthen Africa's health systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#4B2991]/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#4B2991]" />
                </div>
                <h3 className="text-xl mb-3">Strategic Oversight</h3>
                <p className="text-sm text-muted-foreground">
                  Quarterly board meetings review strategic initiatives, financial performance, risk management, and mission alignment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#7C944B]/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#7C944B]" />
                </div>
                <h3 className="text-xl mb-3">Stakeholder Accountability</h3>
                <p className="text-sm text-muted-foreground">
                  Ensures accountability to partners, investors, customers, and the communities we serve across Africa.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#4B2991]/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#4B2991]" />
                </div>
                <h3 className="text-xl mb-3">Mission Alignment</h3>
                <p className="text-sm text-muted-foreground">
                  Guides company direction to ensure we stay true to our mission of strengthening healthcare across Africa.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Board Expertise Areas */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl mb-6 text-center">Board Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-[#4B2991]" />
                </div>
                <div>
                  <h4 className="mb-1">Healthcare Systems</h4>
                  <p className="text-sm text-muted-foreground">WHO experience, pharmaceutical regulation, health system strengthening</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-[#7C944B]" />
                </div>
                <div>
                  <h4 className="mb-1">Financial Leadership</h4>
                  <p className="text-sm text-muted-foreground">Private equity, healthcare finance, growth-stage companies</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-[#4B2991]" />
                </div>
                <div>
                  <h4 className="mb-1">African Markets</h4>
                  <p className="text-sm text-muted-foreground">Regional business networks, government relations, local expertise</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-[#7C944B]" />
                </div>
                <div>
                  <h4 className="mb-1">International Development</h4>
                  <p className="text-sm text-muted-foreground">World Bank, development finance, multilateral partnerships</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-5 w-5 text-[#4B2991]" />
                </div>
                <div>
                  <h4 className="mb-1">Supply Chain Excellence</h4>
                  <p className="text-sm text-muted-foreground">Pharmaceutical distribution, logistics, emerging markets</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-[#7C944B]" />
                </div>
                <div>
                  <h4 className="mb-1">Governance & Policy</h4>
                  <p className="text-sm text-muted-foreground">African Union, public policy, corporate governance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Information */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">About Our Board</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Board Composition:</strong> Pacem Health's Board of Directors is composed of six distinguished members with complementary expertise spanning healthcare systems, international development, African markets, financial leadership, supply chain operations, and corporate governance.
                  </p>
                  <p>
                    <strong className="text-foreground">Meeting Frequency:</strong> The Board meets quarterly to review strategic initiatives, financial performance, operational metrics, risk management, and alignment with our mission to strengthen healthcare delivery across Africa.
                  </p>
                  <p>
                    <strong className="text-foreground">Oversight Responsibilities:</strong> Board members provide strategic guidance on market expansion, partnership development, capital allocation, governance policies, and long-term sustainability. They ensure the company maintains the highest standards of corporate governance while staying true to our mission-driven values.
                  </p>
                  <p>
                    <strong className="text-foreground">Independence:</strong> Our Board includes independent directors who bring objective oversight and ensure accountability to all stakeholders including partners, investors, customers, and the communities we serve.
                  </p>
                  <p>
                    <strong className="text-foreground">Stakeholder Trust:</strong> This governance structure demonstrates our commitment to transparency, accountability, and professional management as we build lasting partnerships with governments, development agencies, health systems, and communities across Africa.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
