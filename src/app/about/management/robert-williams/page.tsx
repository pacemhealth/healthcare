import { Button } from '../../../../components/ui/button';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RobertWilliamsBio() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <span>/</span>
            <Link to="/about/management" className="hover:text-white transition-colors">Management</Link>
            <span>/</span>
            <span className="text-white">Robert Williams</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/about/management">
          <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Management
          </Button>
        </Link>
      </div>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Robert Williams
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            VP of Product & Procurement
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-white/90">
              <p className="text-base md:text-lg leading-relaxed">
                Robert Williams serves as VP of Product & Procurement at Pacem Health, leading product strategy, vendor relationships, and procurement operations across pharmaceutical, medical equipment, and laboratory supplies. His 20+ years in global healthcare procurement ensure quality products at competitive pricing for African health systems.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                With extensive experience in medical product sourcing and vendor management, Robert brings deep expertise in supplier qualification, contract negotiation, product quality assurance, and global procurement strategies. He has built procurement operations for healthcare companies serving emerging markets worldwide.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to joining Pacem Health, Robert held procurement leadership roles at major medical device distributors and pharmaceutical companies. He managed supplier relationships with leading global manufacturers, negotiated multi-million dollar contracts, and implemented procurement systems that reduced costs while maintaining quality standards.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Robert's expertise spans product sourcing strategy, vendor due diligence, quality management systems, regulatory compliance for medical products, and supply chain risk management. He has established procurement relationships across North America, Europe, Asia, and the Middle East.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At Pacem Health, Robert oversees the product portfolio across all categories, ensures compliance with international quality standards, manages relationships with over 200 manufacturers, and develops procurement strategies that balance quality, cost, and availability. He leads a team of product specialists and procurement professionals.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Robert holds an MBA in Supply Chain Management and a Bachelor's degree in Pharmacy. He is certified in Good Distribution Practices (GDP) and has completed executive training in global procurement and supplier relationship management.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                He is an active member of the Healthcare Supply Chain Association and regularly presents at industry conferences on procurement best practices for emerging markets. Robert is committed to ensuring African health facilities have access to quality healthcare products.
              </p>
            </div>

            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691737605-69a0e78bd193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBsZWFkZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjEwMjEwODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Robert Williams"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  Robert Williams
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <a href="mailto:robert.williams@pacemhealth.com" className="text-base md:text-lg">
                robert.williams@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with Robert
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
