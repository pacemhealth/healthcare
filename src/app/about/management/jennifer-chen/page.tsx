import { Button } from '../../../../components/ui/button';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function JenniferChenBio() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jennifer Chen",
    "jobTitle": "Chief Technology Officer",
    "worksFor": {"@type": "Organization", "name": "Pacem Health"}
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
      <SEOHead
        title="Jennifer Chen - Chief Technology Officer | Pacem Health Leadership"
        description="Meet Jennifer Chen, Chief Technology Officer at Pacem Health. Leading digital health innovation, health tech platforms, and technology transformation across African healthcare systems."
        keywords={[
          'Jennifer Chen Pacem Health',
          'CTO healthcare Africa',
          'health technology innovation',
          'digital health platforms',
          'healthcare technology leadership'
        ]}
        structuredData={personSchema}
      />
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <span>/</span>
            <Link to="/about/management" className="hover:text-white transition-colors">Management</Link>
            <span>/</span>
            <span className="text-white">Jennifer Chen</span>
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
            Jennifer Chen
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Chief Financial Officer
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-white/90">
              <p className="text-base md:text-lg leading-relaxed">
                Jennifer Chen serves as Chief Financial Officer at Pacem Health, managing financial operations, investment planning, and sustainable financing strategies. She ensures the company's financial health while supporting its mission-driven approach to strengthening African health systems.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                With extensive experience in healthcare finance and international development, Jennifer brings expertise in financial planning and analysis, capital allocation, risk management, and impact investing. She has worked at the intersection of healthcare and finance throughout her career.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to joining Pacem Health, Jennifer held senior finance roles at global healthcare companies and impact investment firms. She managed financial operations for multi-country healthcare initiatives, structured innovative financing mechanisms, and developed partnerships with development finance institutions.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Jennifer's expertise includes financial modeling for healthcare projects, working capital management, currency risk hedging for cross-border transactions, and developing financial sustainability plans for health programs. She has secured over $150 million in financing for healthcare initiatives across emerging markets.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At Pacem Health, Jennifer oversees budgeting and forecasting, manages relationships with financial institutions and investors, and develops innovative financing solutions that make quality healthcare products accessible to African health facilities. She ensures financial discipline while enabling strategic growth.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Jennifer holds an MBA in Finance from Wharton School and a Bachelor's degree in Economics. She is a Chartered Financial Analyst (CFA) and has completed executive education in impact investing and sustainable development finance.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                She serves on the boards of several healthcare social enterprises and is an active member of the Global Impact Investing Network. Jennifer is passionate about leveraging finance to improve healthcare access in underserved markets.
              </p>
            </div>

            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA5MzExMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Jennifer Chen"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  Jennifer Chen
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
              <a href="mailto:jennifer.chen@pacemhealth.com" className="text-base md:text-lg">
                jennifer.chen@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with Jennifer
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
