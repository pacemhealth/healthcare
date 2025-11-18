import { Button } from '../../../../components/ui/button';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function KwameMensahBio() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kwame Mensah",
    "jobTitle": "West Africa Operations Director",
    "worksFor": {"@type": "Organization", "name": "Pacem Health"}
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0d1f0d] via-[#1a3a1a] to-[#0d1f0d]">
      <SEOHead
        title="Kwame Mensah - West Africa Operations Director | Pacem Health Leadership"
        description="Meet Kwame Mensah, West Africa Operations Director at Pacem Health. Expert in pharmaceutical distribution and hospital equipment installation across Nigeria, Ghana, Senegal, and Francophone West Africa."
        keywords={[
          'Kwame Mensah Pacem Health',
          'West Africa Operations Director',
          'pharmaceutical distribution',
          'hospital equipment installation',
          'healthcare logistics Africa'
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
            <span className="text-white">Kwame Mensah</span>
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
            Kwame Mensah
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            West Africa Operations Director
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-white/90">
              <p className="text-base md:text-lg leading-relaxed">
                Kwame Mensah serves as West Africa Operations Director at Pacem Health, directing operations across Nigeria, Ghana, Senegal, and Francophone West Africa. Based in Accra, Ghana, he brings extensive experience in pharmaceutical distribution and hospital equipment installation, managing regional logistics, warehousing, and last-mile delivery across challenging environments.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                With over 18 years of experience in healthcare supply chain and operations management, Kwame has built and scaled distribution networks across West Africa's most complex operating environments. His expertise spans pharmaceutical cold chain management, medical equipment logistics, customs clearance, warehousing operations, and transportation fleet management.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to joining Pacem Health, Kwame served as Regional Operations Manager for a leading pharmaceutical distributor covering ECOWAS countries, where he managed a network of 12 warehouses and coordinated deliveries to over 2,000 health facilities. He previously held senior logistics positions with international NGOs implementing health programs across West Africa.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Kwame's operational expertise includes designing distribution networks for remote areas, managing temperature-controlled supply chains, coordinating cross-border logistics, implementing warehouse management systems, and training local teams on pharmaceutical handling and equipment installation. He has successfully delivered medical equipment and pharmaceuticals to health facilities in conflict-affected areas and during humanitarian emergencies.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At Pacem Health, Kwame oversees all operational aspects of the West Africa region, including warehouse management, inventory control, transportation logistics, equipment installation and commissioning, maintenance operations, and field team coordination. He ensures reliable supply availability, timely deliveries, proper cold chain maintenance, and quality service delivery across diverse geographies.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Kwame holds a Bachelor's degree in Supply Chain Management from the University of Ghana and a Master's degree in Logistics and Transport Management from Kwame Nkrumah University of Science and Technology. He is fluent in English, French, and Twi, enabling effective communication across Anglophone and Francophone West Africa.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                He maintains strong relationships with customs authorities, port officials, and transportation providers across the region. Kwame is recognized for his ability to navigate complex regulatory environments, solve logistical challenges, and build operational capacity in resource-limited settings. He regularly mentors young operations professionals and contributes to regional supply chain forums.
              </p>
            </div>

            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFuJTIwYnVzaW5lc3MlMjBsZWFkZXJ8ZW58MXx8fHwxNzYxMDIwNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Kwame Mensah"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  Kwame Mensah
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
              <a href="mailto:kwame.mensah@pacemhealth.com" className="text-base md:text-lg">
                kwame.mensah@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with Kwame Mensah
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
