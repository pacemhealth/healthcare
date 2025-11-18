import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { Users, Globe, Heart, Target, Lightbulb, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Management() {
  // U.S. Leadership Team Data
  const usLeadership = [
    {
      name: 'David Seyaker',
      title: 'Founder & Chief Executive Officer',
      slug: 'david-seyaker',
      image: 'https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc2MTAyMDc4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'David founded Pacem Health in 2024 with a vision to strengthen healthcare delivery across Africa through integrated systems and sustainable solutions. With extensive experience in global health systems and medical supply chain management, he leads the company\'s strategic direction and partnership development.'
    },
    {
      name: 'Sarah Mitchell',
      title: 'Chief Operating Officer',
      slug: 'sarah-mitchell',
      image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEwMjA3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Sarah oversees operational excellence across product sourcing, quality assurance, and service delivery. Previously with major medical equipment distributors, she brings 15+ years of experience in healthcare supply chain optimization and operational management.'
    },
    {
      name: 'Michael Anderson',
      title: 'Chief Strategy Officer',
      slug: 'michael-anderson',
      image: 'https://images.unsplash.com/photo-1615702669705-0d3002c6801c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGNvcnBvcmF0ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc2MTAyMDc4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Michael leads strategic planning, market development, and advisory services expansion. He has consulted on health systems strengthening projects across 18 African countries and brings deep expertise in health system financing and digital health transformation.'
    },
    {
      name: 'Jennifer Chen',
      title: 'Chief Financial Officer',
      slug: 'jennifer-chen',
      image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA5MzExMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Jennifer manages financial operations, investment planning, and sustainable financing strategies. With a background in healthcare finance and international development, she ensures the company\'s financial health while supporting our mission-driven approach to African health systems.'
    },
    {
      name: 'Robert Williams',
      title: 'VP of Product & Procurement',
      slug: 'robert-williams',
      image: 'https://images.unsplash.com/photo-1758691737605-69a0e78bd193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsZWFkZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjEwMjEwODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Robert leads product strategy, vendor relationships, and procurement operations across pharmaceutical, medical equipment, and laboratory supplies. His 20+ years in global healthcare procurement ensure quality products at competitive pricing for African health systems.'
    },
    {
      name: 'Lisa Thompson',
      title: 'VP of Business Development',
      slug: 'lisa-thompson',
      image: 'https://images.unsplash.com/photo-1585554414787-09b821c321c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDk4ODE3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Lisa drives new market expansion, government partnerships, and strategic alliances across Africa. Previously with USAID and the World Bank, she brings extensive experience in public-private partnerships and development finance for health system strengthening.'
    }
  ];

  // Global Leadership Team Data
  const globalLeadership = [
    {
      name: 'Dr. Amara Okonkwo',
      title: 'Africa Regional Director',
      slug: 'amara-okonkwo',
      image: 'https://images.unsplash.com/photo-1604783020105-a1c1a856a55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBsZWFkZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxMDIwNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Okonkwo leads regional operations across Africa, overseeing market development, government partnerships, and on-the-ground implementation. Former senior advisor to multiple African Ministries of Health, she brings unparalleled regional expertise and strategic relationships.'
    },
    {
      name: 'James Kariuki',
      title: 'East Africa Operations Director',
      slug: 'james-kariuki',
      image: 'https://images.unsplash.com/photo-1621282807498-aac696326c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXhlY3V0aXZlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTAyMDc4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'James manages operations across Kenya, Tanzania, Uganda, Rwanda, and Ethiopia. With 20+ years in healthcare logistics and facility management across East Africa, he ensures seamless delivery of equipment, training, and technical support to health facilities.'
    },
    {
      name: 'Fatima Diallo',
      title: 'Director of Partnerships - Africa',
      slug: 'fatima-diallo',
      image: 'https://images.unsplash.com/photo-1545005785-a4a5554b8efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjBsZWFkZXJzJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTAyMDc4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Fatima builds and manages strategic partnerships with Ministries of Health, development agencies, and regional health organizations. Previously with USAID and the African Union, she has deep expertise in public-private partnerships and donor coordination.'
    },
    {
      name: 'Kwame Mensah',
      title: 'West Africa Operations Director',
      slug: 'kwame-mensah',
      image: 'https://images.unsplash.com/photo-1588544108061-3c44c505d45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYnVzaW5lc3MlMjBsZWFkZXJ8ZW58MXx8fHwxNzYxMDIxMDg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Kwame directs operations across Nigeria, Ghana, Senegal, and Francophone West Africa. With extensive experience in pharmaceutical distribution and hospital equipment installation, he manages regional logistics, warehousing, and last-mile delivery across challenging environments.'
    },
    {
      name: 'Dr. Thandiwe Moyo',
      title: 'Chief Medical Officer - Africa',
      slug: 'thandiwe-moyo',
      image: 'https://images.unsplash.com/photo-1715232294269-bb4613f6039a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxMDIxMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Moyo provides clinical leadership and medical expertise across product selection, clinical training programs, and health facility support. A trained physician with public health experience across Southern Africa, she ensures clinical appropriateness of all solutions and services.'
    },
    {
      name: 'Mohammed Hassan',
      title: 'Southern Africa Regional Manager',
      slug: 'mohammed-hassan',
      image: 'https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZXhlY3V0aXZlJTIwdGVhbXxlbnwxfHx8fDE3NjEwMjEwODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Mohammed manages market development and operations across South Africa, Botswana, Zambia, Zimbabwe, and Mozambique. His expertise in regulatory compliance and tender management ensures successful engagement with Southern African health systems and procurement agencies.'
    },
    {
      name: 'Grace Wanjiru',
      title: 'Director of Training & Capacity Building',
      slug: 'grace-wanjiru',
      image: 'https://images.unsplash.com/photo-1606596556957-f6566cc865a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjA5NjYxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Grace designs and implements training programs for healthcare workers across Africa on medical equipment, laboratory systems, and pharmacy operations. With a background in nursing education and biomedical engineering, she has trained over 5,000 healthcare professionals across 12 countries.'
    },
    {
      name: 'Youssef El-Amin',
      title: 'North Africa & Francophone Director',
      slug: 'youssef-el-amin',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MDk1ODA4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Youssef leads operations across North Africa and Francophone countries including Egypt, Morocco, Tunisia, and Central Africa. Fluent in French and Arabic, he navigates diverse regulatory environments and cultural contexts to expand Pacem Health\'s reach across the continent.'
    },
    {
      name: 'Adaeze Nwachukwu',
      title: 'Director of Quality & Regulatory Affairs - Africa',
      slug: 'adaeze-nwachukwu',
      image: 'https://images.unsplash.com/photo-1758691737605-69a0e78bd193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsZWFkZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjEwMjEwODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Adaeze ensures compliance with national and regional regulatory requirements across all African markets. With experience at national medicines regulatory authorities and WHO pre-qualification programs, she maintains quality standards and regulatory compliance across all product categories.'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4B2991] via-[#5c3aa8] to-[#7C944B] text-white overflow-hidden min-h-[400px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 sm:mb-6">Leadership & Management</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              Our Management
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Combining strategic vision with implementation excellence to strengthen Africa's health systems
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg md:text-xl text-muted-foreground">
              As the company's leadership body, our management team is committed to serving the interests of the company and achieving sustainable growth in company value. We bring together healthcare leaders, systems experts, and implementation specialists united by a shared mission to strengthen Africa's health systems through innovative solutions and strategic partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT Leadership Framework Section - McKesson Style */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4">Our Leadership Principles</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everyone is a leader at Pacem Health
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl text-center mb-6">
                <span className="text-[#0033A0]">IMPACT:</span> Inspire, Mobilize, Partner, Act, Create, Transform
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-10">
                At Pacem Health, we believe everyone is a leader—from our laboratory technicians ensuring quality to our procurement specialists serving customers to our partnerships team building relationships across Africa. IMPACT is our collective commitment to leadership excellence. By embracing IMPACT, we unlock our full potential and position our organization to deliver lasting health security for all.
              </p>

              <Tabs defaultValue="inspire" className="w-full">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
                  <TabsTrigger value="inspire" className="data-[state=active]:bg-[#0033A0] data-[state=active]:text-white">
                    Inspire
                  </TabsTrigger>
                  <TabsTrigger value="mobilize" className="data-[state=active]:bg-[#0033A0] data-[state=active]:text-white">
                    Mobilize
                  </TabsTrigger>
                  <TabsTrigger value="partner" className="data-[state=active]:bg-[#0033A0] data-[state=active]:text-white">
                    Partner
                  </TabsTrigger>
                  <TabsTrigger value="act" className="data-[state=active]:bg-[#0033A0] data-[state=active]:text-white">
                    Act
                  </TabsTrigger>
                  <TabsTrigger value="create" className="data-[state=active]:bg-[#0033A0] data-[state=active]:text-white">
                    Create
                  </TabsTrigger>
                  <TabsTrigger value="transform" className="data-[state=active]:bg-[#0033A0] data-[state=active]:text-white">
                    Transform
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="inspire" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-xl sm:text-2xl text-[#0033A0] mb-4">Inspire Vision</h4>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Great leaders paint a compelling picture of the future. We inspire our teams, partners, and communities with a clear vision of health security—where every African nation achieves pharmaceutical self-sufficiency and every community has equitable access to quality-assured medicines. We communicate this vision consistently and rally others to join the mission.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1746021278356-66b31ca55dbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdmlzaW9uJTIwaW5zcGlyYXRpb258ZW58MXx8fHwxNzYzMTU3OTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Leadership vision and inspiration"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="mobilize" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-xl sm:text-2xl text-[#0033A0] mb-4">Mobilize Teams</h4>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Leadership is about bringing people together to achieve shared goals. We mobilize diverse teams—across departments, organizations, and borders—to collaborate effectively. We break down silos, foster cross-functional partnerships, and create the conditions for collective success. We recognize that health security requires coordinated action from many stakeholders.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1676276374429-3902f2666824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vYmlsaXplfGVufDF8fHx8MTc2MzE1Nzk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Team collaboration and mobilization"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="partner" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-xl sm:text-2xl text-[#0033A0] mb-4">Partner Authentically</h4>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        We lead through genuine partnership, not hierarchy. We listen deeply to governments, NGOs, manufacturers, and communities—understanding their needs, respecting their expertise, and co-creating solutions together. We build trust through transparency, follow through on commitments, and honor the dignity and aspirations of every partner.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2MzE1MDA4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Authentic business partnerships"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="act" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-xl sm:text-2xl text-[#0033A0] mb-4">Act Decisively</h4>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        Leaders make tough decisions with incomplete information. We gather data, consult stakeholders, and then act decisively—even in uncertain environments. We take calculated risks, learn from failures, and adjust course when needed. We don't let perfect be the enemy of good, especially when lives depend on timely access to medicines.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1583088515955-427feb96d847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNpc2l2ZSUyMGFjdGlvbiUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzYzMTU3OTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Decisive leadership and action"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="create" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-xl sm:text-2xl text-[#0033A0] mb-4">Create Lasting Change</h4>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        We focus on sustainable impact, not short-term wins. We design systems that endure beyond initial projects—training local teams, establishing quality assurance protocols, and building supply chains that function independently. We measure success not by transactions completed, but by capacity built and systems strengthened.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1759734065157-e4b98bb7e607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwc3VzdGFpbmFibGUlMjBjaGFuZ2V8ZW58MXx8fHwxNzYzMTU3OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Innovation and sustainable change"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="transform" className="mt-0">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-xl sm:text-2xl text-[#0033A0] mb-4">Transform Systems</h4>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        The ultimate leadership challenge is systems transformation. We don't just deliver medicines—we transform pharmaceutical access systems across Africa. We advocate for policy change, invest in workforce development (STEM education), pioneer new procurement models, and demonstrate that African nations can achieve pharmaceutical self-sufficiency. We lead the transformation we want to see.
                      </p>
                    </div>
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1607000975735-011d084e559c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdHJhbnNmb3JtYXRpb24lMjBzeXN0ZW1zfGVufDF8fHx8MTc2MzE1Nzk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Healthcare transformation and systems change"
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-10 p-6 bg-gradient-to-r from-gray-50 to-white rounded-lg border-l-4 border-[#00A0DC]">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
                  Every Pacem Health team member—regardless of role or seniority—has the opportunity and responsibility to lead. By embracing IMPACT, we collectively drive the transformation African healthcare systems need and deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* U.S. Leadership Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">U.S. Leadership</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              The Pacem Health U.S. Leadership team is committed to serving the interests of the company and achieving sustainable growth in company value. In the following, you will also find further information on the management of our businesses.
            </p>
          </div>

          {/* U.S. Leadership Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {usLeadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-all overflow-hidden group">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl mb-1">{leader.name}</h3>
                    <p className="text-sm text-[#4B2991] mb-4">{leader.title}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {leader.bio}
                    </p>
                    <Link to={`/about/management/${leader.slug}`}>
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto text-[#4B2991] hover:text-[#3d1e7d] group/btn"
                      >
                        <span className="mr-2">Biography</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Leadership Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">Global Leadership</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Our Global Leadership team brings together African health systems expertise, regional operational knowledge, and strategic partnerships to drive health system transformation across the continent.
            </p>
          </div>

          {/* Global Leadership Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {globalLeadership.map((leader, index) => (
              <Card key={index} className="hover:shadow-lg transition-all overflow-hidden group">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl mb-1">{leader.name}</h3>
                    <p className="text-sm text-[#7C944B] mb-4">{leader.title}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {leader.bio}
                    </p>
                    <Link to={`/about/management/${leader.slug}`}>
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto text-[#7C944B] hover:text-[#6c843e] group/btn"
                      >
                        <span className="mr-2">Biography</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leadership Values Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#4B2991]/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-[#4B2991]" />
                </div>
                <h3 className="text-lg mb-2">Mission-Driven Leadership</h3>
                <p className="text-sm text-muted-foreground">
                  Leaders committed to strengthening Africa's health systems and improving patient outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#7C944B]/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#7C944B]" />
                </div>
                <h3 className="text-lg mb-2">Systems Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Deep experience in health system strategy, operations, and sustainable transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#4B2991]/10 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-[#4B2991]" />
                </div>
                <h3 className="text-lg mb-2">Innovation Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Forward-thinking approach to digital health, sustainable solutions, and technology integration.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Cross-link to Board of Directors */}
          <div className="mt-12 p-6 bg-gradient-to-r from-[#4B2991]/5 to-[#7C944B]/5 rounded-lg border border-[#4B2991]/20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg mb-1">Interested in Our Governance?</h3>
                <p className="text-sm text-muted-foreground">
                  Learn about our Board of Directors and corporate governance structure
                </p>
              </div>
              <Link to="/about/board">
                <Button className="bg-[#4B2991] hover:bg-[#3d1e7d] text-white">
                  <span className="mr-2">View Board of Directors</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values & Approach */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Leadership Values & Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our leadership team and define our commitment to strengthening Africa's health systems
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
                  <Lightbulb className="h-8 w-8 text-[#4B2991]" />
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#4B2991] via-[#5c3aa8] to-[#7C944B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-4">Join Our Team</h2>
          <p className="text-xl text-white/90 mb-8">
            We're looking for exceptional leaders and professionals who share our commitment to strengthening Africa's health systems. Explore career opportunities at Pacem Health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-white/90">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}