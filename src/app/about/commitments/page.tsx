import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { ArrowRight, Heart, Award, CheckCircle2, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Commitments() {
  const commitmentCards = [
    {
      title: 'Our Impact',
      description: 'We are guided by our PACEM values: Partnership, Accountability, Commitment to Excellence, Equity, and Mutual Respect. These principles drive everything we do.',
      image: 'https://images.unsplash.com/photo-1722235625873-7b2d84c27acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdmFsdWVzJTIwdGVhbXdvcmt8ZW58MXx8fHwxNzYzMTc1MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/about#values',
      icon: Heart
    },
    {
      title: 'Pacem Excellence Program',
      description: 'Our flagship initiative is on a mission to build Africa\'s next generation of health leaders through scholarships, STEM education, research grants, and workforce development across the continent.',
      image: 'https://images.unsplash.com/photo-1645263012668-a6617115f9b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBzdGVtJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzE3NTIwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/programs/pacem-excellence',
      icon: Award
    },
    {
      title: 'Quality Assurance',
      description: 'As a trusted pharmaceutical partner, we ensure every medicine meets international standards through our ISO 17025 accredited laboratory and rigorous quality testing protocols.',
      image: 'https://images.unsplash.com/photo-1700727448542-50531bc60211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcXVhbGl0eSUyMHRlc3Rpbmd8ZW58MXx8fHwxNzYzMTc1MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/services/quality-assurance',
      icon: CheckCircle2
    },
    {
      title: 'Health Systems Strengthening',
      description: 'We partner with governments and NGOs to build resilient, sustainable health systems—from pharmaceutical procurement to capacity building and policy advocacy.',
      image: 'https://images.unsplash.com/photo-1659874632641-24fd6a5cace9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaW5mcmFzdHJ1Y3R1cmUlMjBzeXN0ZW1zfGVufDF8fHx8MTc2MzE3NTIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      link: '/services',
      icon: Target
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] via-[#0047cc] to-[#00A0DC] text-white overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1689152496131-9cecc95cde25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlJTIwYWZyaWNhfGVufDF8fHx8MTc2MzE3NTE5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Partnership collaboration"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 sm:mb-6">Building Health Security Together</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-0">
              Our Commitments
            </h1>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
            Delivering Health Security Across Africa
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Together with our partners, we're committed to building self-sufficient health systems where quality-assured medicines reach every community. When health security becomes reality, there's no stopping us.
          </p>
        </div>
      </section>

      {/* Four Cards Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6">
              Learn More About Our Commitments
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
              Quality healthcare is a human right. Through our core commitments, we are leveraging our expertise for the greater good—which includes strengthening health systems, building local capacity, partnering with governments and NGOs, advancing health equity, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {commitmentCards.map((card, index) => (
              <Link key={index} to={card.link}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <ImageWithFallback
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#0033A0]/10 flex items-center justify-center flex-shrink-0">
                          <card.icon className="h-6 w-6 text-[#0033A0]" />
                        </div>
                        <h3 className="text-2xl">{card.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
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

      {/* Mission Statement Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8">
            Putting communities first
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Putting communities first is at the heart of our commitment to deliver health security for all. That's why we partner with governments, NGOs, manufacturers, and donors across Africa to build self-sufficient health systems where quality-assured medicines reach every person—not just today, but for generations to come.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0033A0] via-[#0047cc] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-4">Partner With Us</h2>
          <p className="text-xl text-white/90 mb-8">
            Join us in building stronger, more resilient health systems across Africa. Whether you're a government, donor, NGO, or healthcare institution, we're ready to collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support/donor-ngo-government">
              <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90 w-full sm:w-auto">
                Request Partnership Information
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Learn About Pacem Health
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
