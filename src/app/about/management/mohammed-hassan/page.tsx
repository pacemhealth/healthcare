import { Button } from '../../../../components/ui/button';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function MohammedHassanBio() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohammed Hassan",
    "jobTitle": "Southern Africa Regional Manager",
    "worksFor": {"@type": "Organization", "name": "Pacem Health"}
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0d1f0d] via-[#1a3a1a] to-[#0d1f0d]">
      <SEOHead
        title="Mohammed Hassan - Southern Africa Regional Manager | Pacem Health Leadership"
        description="Meet Mohammed Hassan, Southern Africa Regional Manager at Pacem Health. Expert in market development, regulatory compliance, and tender management across Southern Africa."
        keywords={[
          'Mohammed Hassan Pacem Health',
          'Southern Africa Regional Manager',
          'regulatory compliance',
          'tender management',
          'healthcare market development'
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
            <span className="text-white">Mohammed Hassan</span>
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
            Mohammed Hassan
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Southern Africa Regional Manager
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-white/90">
              <p className="text-base md:text-lg leading-relaxed">
                Mohammed Hassan serves as Southern Africa Regional Manager at Pacem Health, managing market development and operations across South Africa, Botswana, Zambia, Zimbabwe, and Mozambique. Based in Johannesburg, South Africa, his expertise in regulatory compliance and tender management ensures successful engagement with Southern African health systems and procurement agencies.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                With over 16 years of experience in pharmaceutical market development and government tender processes, Mohammed has built deep expertise in navigating complex regulatory environments across Southern Africa. His background spans pharmaceutical sales and marketing, regulatory affairs, public sector engagement, and strategic account management.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to joining Pacem Health, Mohammed served as Regional Sales Director for a multinational pharmaceutical company covering the SADC region, where he managed government tender submissions, negotiated framework agreements, and built relationships with provincial health departments. He previously held positions in regulatory affairs and market access across Southern and East Africa.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Mohammed's expertise includes tender document preparation, regulatory product registration, compliance management, government stakeholder engagement, pricing and reimbursement strategies, and market access planning. He has successfully secured supply contracts with national and provincial health authorities across the region valued at over $200 million.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At Pacem Health, Mohammed leads all commercial and operational activities in Southern Africa. He identifies business opportunities, manages tender processes and government contracts, ensures regulatory compliance across all markets, coordinates with medicines regulatory authorities, oversees pricing strategies, and builds relationships with provincial health departments and hospital procurement units.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Mohammed holds a Bachelor's degree in Pharmacy from the University of Cape Town and a Master of Business Administration from the University of Pretoria. He maintains professional registrations with pharmacy councils across multiple Southern African countries and is actively engaged in regional pharmaceutical industry associations.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                He is recognized as a leading expert on Southern African pharmaceutical tender processes and regulatory requirements. Mohammed maintains strong relationships with procurement officials, medicines regulatory authorities, and health department leadership across the region. He regularly advises on regional harmonization initiatives and participates in industry-government dialogue platforms.
              </p>
            </div>

            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFuJTIwYnVzaW5lc3MlMjBleGVjdXRpdmV8ZW58MXx8fHwxNzYxMDIwNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mohammed Hassan"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  Mohammed Hassan
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
              <a href="mailto:mohammed.hassan@pacemhealth.com" className="text-base md:text-lg">
                mohammed.hassan@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with Mohammed Hassan
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
