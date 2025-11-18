import { Button } from '../../../../components/ui/button';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SarahMitchellBio() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
      {/* Breadcrumb */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <span>/</span>
            <Link to="/about/management" className="hover:text-white transition-colors">Management</Link>
            <span>/</span>
            <span className="text-white">Sarah Mitchell</span>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/about/management">
          <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 -ml-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Management
          </Button>
        </Link>
      </div>

      {/* Header Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Sarah Mitchell
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Chief Operating Officer
          </p>
        </div>
      </section>

      {/* Biography Content */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Biography Text */}
            <div className="space-y-6 text-white/90">
              <p className="text-base md:text-lg leading-relaxed">
                Sarah Mitchell serves as Chief Operating Officer at Pacem Health, overseeing operational excellence across product sourcing, quality assurance, and service delivery. In this role, she ensures that the company's three divisions operate efficiently and deliver exceptional value to healthcare facilities across Africa.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                With more than 15 years of experience in healthcare supply chain optimization and operational management, Sarah brings deep expertise in managing complex medical equipment distribution networks, pharmaceutical logistics, and laboratory supply systems. She has worked with major medical equipment distributors serving emerging markets worldwide.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to joining Pacem Health, Sarah held senior operations roles at global healthcare companies where she managed supply chain operations spanning 30+ countries. She led initiatives to reduce delivery times by 40%, improve inventory accuracy to 99.5%, and implement quality management systems that achieved ISO certifications across multiple facilities.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Sarah's expertise includes vendor relationship management, logistics optimization, warehouse operations, quality assurance programs, and regulatory compliance. She has successfully implemented enterprise resource planning (ERP) systems, demand forecasting models, and performance dashboards that provide real-time visibility into operations.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At Pacem Health, Sarah has established rigorous quality control processes, built relationships with top-tier manufacturers, and developed operational protocols that ensure products meet international standards while remaining accessible to African health facilities. She oversees procurement teams, warehouse operations, logistics partners, and quality assurance specialists.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Sarah holds an MBA in Operations Management from a leading business school and a Bachelor's degree in Industrial Engineering. She is certified in Six Sigma Black Belt methodologies and has completed executive education programs in supply chain management at top universities.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                She is a member of professional associations including the Council of Supply Chain Management Professionals (CSCMP) and regularly speaks at healthcare logistics conferences. Sarah is passionate about leveraging operational excellence to improve healthcare access in resource-limited settings.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBleGVjdXRpdmUlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEwMjA3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sarah Mitchell"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  Sarah Mitchell
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <a href="mailto:sarah.mitchell@pacemhealth.com" className="text-base md:text-lg">
                sarah.mitchell@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with Sarah
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
