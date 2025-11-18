import { Button } from '../../../../components/ui/button';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function YoussefElAminBio() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Youssef El-Amin",
    "jobTitle": "North Africa & Francophone Director",
    "worksFor": {"@type": "Organization", "name": "Pacem Health"}
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0d1f0d] via-[#1a3a1a] to-[#0d1f0d]">
      <SEOHead
        title="Youssef El-Amin - North Africa & Francophone Director | Pacem Health Leadership"
        description="Meet Youssef El-Amin, North Africa & Francophone Director at Pacem Health. Expert in operations across North Africa and Francophone countries including Egypt, Morocco, Tunisia, and Central Africa."
        keywords={[
          'Youssef El-Amin Pacem Health',
          'North Africa Director',
          'Francophone Director',
          'healthcare operations North Africa',
          'multilingual healthcare executive'
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
            <span className="text-white">Youssef El-Amin</span>
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
            Youssef El-Amin
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            North Africa & Francophone Director
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-white/90">
              <p className="text-base md:text-lg leading-relaxed">
                Youssef El-Amin serves as North Africa & Francophone Director at Pacem Health, leading operations across North Africa and Francophone countries including Egypt, Morocco, Tunisia, and Central Africa. Based in Cairo, Egypt, he navigates diverse regulatory environments and cultural contexts to expand Pacem Health's reach across the continent.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Fluent in French, Arabic, and English, Youssef brings over 19 years of experience in pharmaceutical business development, market access, and operations management across North Africa, the Middle East, and Francophone Africa. His multilingual capabilities and cultural fluency enable effective engagement across diverse markets and regulatory landscapes.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to joining Pacem Health, Youssef served as Regional Director for a multinational pharmaceutical company covering the MENA and Francophone Africa regions, where he established market presence in 15 countries and built local partnerships with distributors, importers, and health authorities. He previously held senior commercial positions across the Middle East and North Africa with leading healthcare companies.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Youssef's expertise includes market entry strategy, regulatory navigation across diverse legal systems, distributor and partner identification, government stakeholder engagement, cultural adaptation of business models, and cross-border logistics coordination. He has successfully navigated the distinct regulatory, commercial, and cultural requirements of Arab League countries and Francophone Central Africa.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At Pacem Health, Youssef leads all aspects of operations in North Africa and Francophone regions. He develops market entry strategies, establishes local partnerships and distribution networks, manages regulatory registrations and import licenses, coordinates with health authorities and procurement agencies, adapts product offerings to local needs, and ensures cultural appropriateness of all initiatives.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Youssef holds a Bachelor's degree in Pharmacy from Cairo University and a Master of Business Administration from INSEAD. He maintains professional networks across North African and Francophone pharmaceutical associations and has deep relationships with import agents, distributors, and health officials across the region.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                He is recognized as an expert on pharmaceutical market access in North Africa and Francophone countries, with particular expertise in navigating French colonial legacy regulatory systems, Arab League procurement frameworks, and Islamic finance mechanisms. Youssef regularly advises on regional expansion strategies and speaks at industry forums on market dynamics in North Africa and the Sahel region.
              </p>
            </div>

            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiJTIwYnVzaW5lc3MlMjBtYW58ZW58MXx8fHwxNzYxMDIwNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Youssef El-Amin"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  Youssef El-Amin
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
              <a href="mailto:youssef.elamin@pacemhealth.com" className="text-base md:text-lg">
                youssef.elamin@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with Youssef El-Amin
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
