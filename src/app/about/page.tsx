import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Building2, Users, Globe, TrendingUp, Lightbulb, Heart, Target, ArrowRight } from 'lucide-react';
import aboutHeroImage from 'figma:asset/3da44bda02853a792a778549ec7171dd5b06de46.png';
import { SEOHead } from '../../components/SEOHead';

export default function About() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pacem Health Inc.",
    "description": "U.S.-based global health innovation company strengthening healthcare systems across Africa",
    "foundingDate": "2025",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "areaServed": ["Kenya", "Ghana", "Nigeria"],
    "knowsAbout": [
      "Healthcare Systems Strengthening",
      "Medical Equipment Lifecycle Management",
      "Pharmaceutical Supply Chain Management",
      "Biomedical Engineering"
    ]
  };
  const impactMetrics = [
    { 
      number: '10+', 
      label: 'Healthcare Facilities in Active Pipeline',
      icon: Building2 
    },
    { 
      number: '3', 
      label: 'Priority Countries (Kenya, Ghana, Nigeria)',
      icon: Globe 
    },
    { 
      number: '50,000+', 
      label: 'Target Patient Lives Impacted (Years 1-2)',
      icon: Users 
    },
    { 
      number: '$500K+', 
      label: 'Initial Product Commitments Secured',
      icon: TrendingUp 
    }
  ];

  const strategyPillars = [
    {
      number: '1',
      title: 'Systems, Not Just Solutions',
      description: 'We focus on building integrated, resilient systems that last—not just delivering one-off products. Our approach addresses the full lifecycle, from infrastructure and equipment to training, maintenance, and data-driven performance.'
    },
    {
      number: '2',
      title: 'True Partnership',
      description: 'We listen to and collaborate with local leaders to ensure every solution is context-appropriate and community-approved. We work alongside Ministries of Health and frontline teams to co-create sustainable pathways to better care.'
    },
    {
      number: '3',
      title: 'Building for Self-Sufficiency',
      description: 'We build local capacity through training and long-term lifecycle management, empowering health systems to operate independently. Our goal is to transfer knowledge, develop skills, and ensure long-term sustainability.'
    }
  ];

  const innovationAreas = [
    {
      title: 'Digital Health Infrastructure',
      description: 'Deploying open-source EMRs, health information systems, and analytics dashboards optimized for low-bandwidth environments. Cloud and offline-capable platforms with interoperable data standards and real-time performance dashboards.'
    },
    {
      title: 'Mobile & Modular Solutions',
      description: 'Designing solar-powered mobile clinics, portable diagnostic tools, and rapidly deployable health infrastructure for rural and remote areas. Containerized health facilities and off-grid diagnostic equipment bring care to the last mile.'
    },
    {
      title: 'Workforce Development',
      description: 'Using simulation labs, VR-based training, and train-the-trainer programs to build skilled, confident healthcare teams at every level. High-fidelity simulation training combined with digital learning platforms and clinical mentorship programs ensure excellence in care delivery.'
    },
    {
      title: 'Smart Supply Chain',
      description: 'Implementing end-to-end visibility, cold chain monitoring, and AI-powered forecasting to ensure products reach the last mile. Real-time inventory tracking, temperature monitoring systems, and predictive demand analytics prevent stockouts and wastage.'
    }
  ];

  const partnerTypes = [
    'Ministries of Health',
    'African Union & Regional Bodies',
    'World Bank & AfDB',
    'USAID & PEPFAR',
    'GAVI & The Global Fund',
    'WHO & UN Agencies',
    'National Health Insurance Schemes',
    'Private Healthcare Networks',
    'NGOs & Community Organizations',
    'Medical Universities & Training Institutions'
  ];

  const featureCards = [
    {
      title: 'Careers',
      description: 'We want to be an employer of choice for everyone who seeks to continuously learn, innovate, and pioneer breakthroughs in healthcare. For everyone. Everywhere.',
      image: 'https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZSUyMGRpdmVyc2l0e-xlbnwxfHx8fDE3NTk2NzYxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/careers'
    },
    {
      title: 'Our Management',
      description: 'As the company\'s leadership body, our management team is committed to serving the interests of the company and achieving sustainable growth in company value.',
      image: 'https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWVkaWNhbCUyMGZhY2lsaXR5fGVufDF8fHx8MTc1OTY3NjE0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/about/management'
    },
    {
      title: 'Our Commitments',
      description: 'Quality healthcare is a human right. Through our core commitments, we leverage our expertise to strengthen health systems, build local capacity, and advance health equity across Africa.',
      image: 'https://images.unsplash.com/photo-1673515336414-0db19994707f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY29tbWl0bWVudCUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc2MzE3NjIwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/about/commitments'
    },
    {
      title: 'Sustainability',
      description: 'Sustainable development is key. For Pacem Health, for societies, for humankind. Learn more about our targets and commitments to building a healthier, more equitable future.',
      image: 'https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGhlYWx0aGNhcmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTY3NjEzOXww&ixlib=rb-4.1.0&q=80&w=1080',
      link: '/about/sustainability'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* SEO Meta Tags */}
      <SEOHead
        title="About Pacem Health | Building Resilient Health Systems Across Africa"
        description="U.S.-based global health innovation company strengthening healthcare systems across Africa. Serving 10+ facilities in 3 countries, reaching 20,000+ patients. Partnership-driven approach to sustainable healthcare development."
        keywords={[
          'about Pacem Health',
          'healthcare company Africa',
          'health systems strengthening',
          'medical infrastructure Africa',
          'healthcare partnerships Africa',
          'sustainable healthcare development',
          'health innovation company',
          'medical equipment management Africa'
        ]}
        structuredData={organizationSchema}
      />
      
      {/* Hero Section: Purpose Statement with Image */}
      <section className="relative bg-gradient-to-br from-[#0033A0] via-[#0047cc] to-[#00A0DC] text-white overflow-hidden min-h-[500px] sm:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={aboutHeroImage}
            alt="Healthcare professional in Africa"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 sm:mb-6">About Pacem Health</p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-0">
              Pioneering resilient health systems to improve human health
            </h1>
          </div>
        </div>
      </section>

      {/* Founding Story Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12">When David Seyaker founded Pacem Health in 2025, he envisioned a new kind of global health company—one built not just to supply, but to strengthen.</h2>
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground mb-8">
              <p>
                The vision was born from a fundamental conviction: access to quality healthcare is the foundation of human dignity and national progress. Not as charity, but as a right. Not as dependence, but as partnership.
              </p>
              <p>
                David saw African health systems not as recipients of aid, but as centers of innovation waiting to be unleashed. He imagined a future where resilient infrastructure, smart technology, and local expertise converge—where health systems don't just survive, but lead their own transformation.
              </p>
              <p>
                Today, this founding principle—empowerment through systems—defines everything we do. It shapes our partnerships, drives our solutions, and fuels our commitment to building a healthier, more equitable Africa for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Our Mission, Vision & Values</h2>
            <div className="w-20 h-1 bg-[#00A0DC] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {/* Mission */}
            <Card className="border-t-4 border-[#0033A0] shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div> */}
                  <h3 className="text-2xl text-[#0033A0]">Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To deliver health security across Africa through quality-assured pharmaceutical solutions and resilient health systems—empowering communities and nations to achieve equitable, sustainable access to essential medicines.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="border-t-4 border-[#00A0DC] shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-[#00A0DC] to-[#0033A0] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div> */}
                  <h3 className="text-2xl text-[#00A0DC]">Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  An Africa where every nation achieves pharmaceutical security through self-sufficient health systems—where quality-assured medicines reach every community, local expertise drives innovation, and equitable access to essential healthcare is the foundation for thriving societies.
                </p>
              </CardContent>
            </Card>

            {/* Values Preview */}
            <Card className="border-t-4 border-[#0033A0] shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div> */}
                  <h3 className="text-2xl text-[#0033A0]">Values</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>PACEM:</strong> Partnership, Accountability, Commitment to Excellence, Equity, and Mutual Respect—core principles that guide every decision, every project, and every relationship we build.
                </p>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  These values, combined with our IMPACT leadership framework, define how we build health security across Africa.
                </p>
                <Link to="/about/management" className="inline-flex items-center text-[#0033A0] hover:text-[#002080] transition-colors group">
                  <span className="mr-2">Learn about our Leadership Approach</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Detailed PACEM Values Section - McKesson Style */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl md:text-4xl mb-4">Our Values</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence starts from within.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h4 className="text-xl sm:text-2xl md:text-3xl text-center mb-6">
                <span className="text-[#0033A0]">PACEM:</span> Partnership, Accountability, Commitment to Excellence, Equity, Mutual Respect
              </h4>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-10">
                At Pacem Health, how we deliver health security is as important as the impact we create. Our exceptional team embodies this principle and is unified by our PACEM values. These values are the foundation of our company culture and underpin our reputation as a trusted partner to governments, donors, and communities across Africa.
              </p>

              <Tabs defaultValue="partnership" className="w-full">
                <TabsList className="grid w-full grid-cols-5 mb-8">
                  <TabsTrigger value="partnership" className="data-[state=active]:bg-[#0033A0] data-[state=active]:text-white">
                    Partnership
                  </TabsTrigger>
                  <TabsTrigger value="accountability" className="data-[state=active]:bg-[#0033A0] data-[state=active]:text-white">
                    Accountability
                  </TabsTrigger>
                  <TabsTrigger value="excellence" className="data-[state=active]:bg-[#0033A0] data-[state=active]:text-white">
                    Excellence
                  </TabsTrigger>
                  <TabsTrigger value="equity" className="data-[state=active]:bg-[#0033A0] data-[state=active]:text-white">
                    Equity
                  </TabsTrigger>
                  <TabsTrigger value="respect" className="data-[state=active]:bg-[#0033A0] data-[state=active]:text-white">
                    Mutual Respect
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="partnership" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h5 className="text-xl sm:text-2xl text-[#0033A0] mb-4">Partnership</h5>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        We believe sustainable change comes through genuine collaboration. We listen to local leaders, co-create solutions together, and build long-term, enduring relationships grounded in mutual respect and shared goals. Our partnerships with governments, NGOs, manufacturers, and communities are the foundation of lasting, sustainable health security.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1758574437870-f83c160efd82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYzMTMzNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Healthcare team collaboration"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="accountability" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h5 className="text-xl sm:text-2xl text-[#0033A0] mb-4">Accountability</h5>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        We take ownership of our commitments and deliver on our promises. From transparent procurement processes to rigorous quality testing, we hold ourselves accountable to the highest standards. Our customers, donors, and partners trust us because we do what we say we will do—every time, building trust that sustains long-term partnerships.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1659353888922-7c7b1ad21650?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFscyUyMGludGVncml0eXxlbnwxfHx8fDE3NjMxNDM1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Medical professionals demonstrating integrity"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="excellence" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h5 className="text-xl sm:text-2xl text-[#0033A0] mb-4">Commitment to Excellence</h5>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        We uphold the highest standards in everything we do—from our ISO 17025 accredited laboratory testing to our pharmaceutical procurement and health systems strengthening. Every product is quality-assured, every service is professionally delivered, and every partnership is built on integrity and excellence. We build systems and capacity that endure, ensuring sustainable impact beyond individual projects.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1700257908452-582cb156b037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcXVhbGl0eSUyMGV4Y2VsbGVuY2V8ZW58MXx8fHwxNzYzMTQzNTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Laboratory quality excellence"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="equity" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h5 className="text-xl sm:text-2xl text-[#0033A0] mb-4">Equity</h5>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        We are driven by a fundamental belief: quality healthcare is not charity—it's a human right. Every community deserves sustainable, equitable access to quality-assured medicines, regardless of geography, income, or circumstance. We work tirelessly to eliminate barriers and ensure health security reaches those who need it most—not just today, but for generations to come.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1695891835452-9b130c1d9a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXF1aXR5JTIwYWNjZXNzfGVufDF8fHx8MTc2MzE0MzU3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Healthcare equity and access"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="respect" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h5 className="text-xl sm:text-2xl text-[#0033A0] mb-4">Mutual Respect</h5>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        We honor the dignity, expertise, and aspirations of every person and organization we work with. We approach every partnership with humility, recognizing that sustainable health systems are built on mutual respect, cultural understanding, and shared ownership. We listen, learn, and lead together—investing in local capacity and knowledge transfer to ensure lasting self-sufficiency.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwaGVhbHRoY2FyZSUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzYzMTQzNTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Diverse healthcare professionals"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* <div className="mt-10 p-6 bg-gradient-to-r from-gray-50 to-white rounded-lg border-l-4 border-[#00A0DC]">
                 <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
                  Our team members make decisions, both big and small, with a focus on what is ethically right and what serves the greater good. Above all, we are committed to health security—for our partners, the communities we serve, and the future of African healthcare.
                </p> 
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl mb-6">Pacem Health is a leading health systems integrator, strengthening healthcare delivery across Africa.</h2>
            <div className="max-w-4xl">
              <p className="text-lg text-muted-foreground mb-6">
                Our mission goes beyond distribution. We engineer complete health systems—from strategic infrastructure planning and technology deployment to workforce development and lifecycle management. We support African health systems at every stage of transformation, improving health outcomes for millions today while building the foundation for resilient, self-sufficient systems that will serve generations to come.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                As a trusted systems integrator, we bridge the gap between world-class manufacturers and on-the-ground healthcare providers. We source FDA-approved, WHO-prequalified, and EU-certified medical equipment and pharmaceuticals from leading U.S., European, and global manufacturers—connecting proven technology with the specific needs of Ministries of Health, regional health authorities, and development partners across the continent.
              </p>
              <p className="text-lg text-muted-foreground">
                Sustainable health systems are built through partnership, not prescription. By combining global expertise with deep local knowledge, we help African nations move from fragmented care to integrated, measurable, technology-powered systems that serve every community with excellence and dignity.
              </p>
            </div>
          </div>

          <div className="mb-16 flex flex-col sm:flex-row gap-4">
            <Link to="/support/donor-ngo-government">
              <Button size="lg" className="bg-[#0033A0] hover:bg-[#002080] w-full sm:w-auto">
                Partner With Us
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Download Company Overview
            </Button>
            <Link to="/programs">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore our Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Impact Metrics */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl mb-4 text-[#0033A0]">{metric.number}</div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strategy & Values Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Our Blueprint for Impact</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Three core pillars guide everything we do at Pacem Health:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {strategyPillars.map((pillar, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-[#0033A0] flex-shrink-0">{pillar.number}</span>
                  <h3 className="pt-2">{pillar.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">Innovation That Fits the Field</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
            {innovationAreas.map((area, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl md:text-2xl">{area.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Portfolio Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">Our Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              We are at the center of clinical decision making across the full healthcare spectrum.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/products">
              <Card className="hover:shadow-lg transition group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwaGVhbHRoY2FyZSUyMHdvcmtlcnMlMjBob3NwaXRhbHxlbnwxfHx8fDE3NTk2NzYxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Medical equipment and technology"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2">Products & Equipment</h3>
                    <p className="text-muted-foreground mb-4">
                      From diagnostic imaging and laboratory equipment to maternal health and emergency care solutions, we provide certified, quality-assured medical products for healthcare facilities across Africa.
                    </p>
                    <div className="flex items-center text-[#0033A0] hover:text-[#002080] group-hover:translate-x-2 transition-transform">
                      <span className="mr-2">Explore Products</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/programs">
              <Card className="hover:shadow-lg transition group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWVkaWNhbCUyMGZhY2lsaXR5fGVufDF8fHx8MTc1OTY3NjE0MHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Healthcare services and training"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2">Services & Solutions</h3>
                    <p className="text-muted-foreground mb-4">
                      We deliver comprehensive health systems strengthening through infrastructure planning, digital health platforms, supply chain optimization, workforce training, and performance management solutions.
                    </p>
                    <div className="flex items-center text-[#0033A0] hover:text-[#002080] group-hover:translate-x-2 transition-transform">
                      <span className="mr-2">Explore Services</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">In Partnership for a Healthier Africa</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We collaborate with governments, development partners, NGOs, and private sector leaders to strengthen health systems at every level.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {partnerTypes.map((partner, index) => (
              <Card key={index} className="hover:shadow-md transition">
                <CardContent className="p-6 text-center">
                  <p className="text-sm">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="mb-4">Become a Partner</h3>
              <p className="text-white/90 mb-6">
                Whether you're a Ministry of Health, development partner, NGO, or healthcare institution, we're ready to collaborate on building stronger, more resilient health systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/support/donor-ngo-government">
                  <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90 w-full sm:w-auto">
                    Request Partnership Information
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  Download Capabilities Brief
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Cards Section - Careers, Management, Sustainability */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureCards.map((card, index) => (
              <Link key={index} to={card.link}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <ImageWithFallback
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl mb-3">{card.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {card.description}
                      </p>
                      <div className="flex items-center text-[#0033A0] hover:text-[#002080] group-hover:translate-x-2 transition-transform">
                        <span className="mr-2">Learn more</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0033A0] via-[#0047cc] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Let's Build Stronger Health Systems Together</h2>
          <p className="text-white/90 mb-8">
            Partner with Pacem Health to transform healthcare delivery across Africa from infrastructure and equipment to training, technology, and long-term system strengthening.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support/site-planning-readiness">
              <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90 w-full sm:w-auto">
                Request a Readiness Brief
              </Button>
            </Link>
            <Link to="/programs">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Explore Our Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}