import { Button } from '../../../../components/ui/button';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function FatimaDialloBio() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fatima Diallo",
    "jobTitle": "Director of Partnerships - Africa",
    "worksFor": {"@type": "Organization", "name": "Pacem Health"}
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0d1f0d] via-[#1a3a1a] to-[#0d1f0d]">
      <SEOHead
        title="Fatima Diallo - Director of Partnerships - Africa | Pacem Health Leadership"
        description="Meet Fatima Diallo, Director of Partnerships - Africa at Pacem Health. Expert in strategic partnerships with Ministries of Health, development agencies, and regional health organizations."
        keywords={[
          'Fatima Diallo Pacem Health',
          'Director of Partnerships Africa',
          'health partnerships',
          'public-private partnerships Africa',
          'healthcare executive'
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
            <span className="text-white">Fatima Diallo</span>
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
            Fatima Diallo
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Director of Partnerships - Africa
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-white/90">
              <p className="text-base md:text-lg leading-relaxed">
                Fatima Diallo serves as Director of Partnerships - Africa at Pacem Health, building and managing strategic partnerships with Ministries of Health, development agencies, and regional health organizations. Based in Dakar, Senegal, she brings extensive expertise in public-private partnerships and donor coordination across the African continent.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                With over 15 years of experience in international development and health systems strengthening, Fatima has worked with USAID, the African Union, and multiple bilateral development agencies. Her expertise spans partnership strategy, donor relations, multilateral coordination, and institutional capacity building.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to joining Pacem Health, Fatima served as Senior Partnership Advisor at the African Union Commission's Department of Health, Humanitarian Affairs and Social Development, where she coordinated relationships between member states, development partners, and implementing organizations. She previously held positions at USAID's West Africa Regional Mission and the World Health Organization.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Fatima's expertise includes designing and implementing partnership frameworks, negotiating memoranda of understanding with government entities, coordinating donor alignment initiatives, and managing multi-stakeholder platforms. She has successfully facilitated partnerships across 20+ African countries with cumulative project values exceeding $500 million.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At Pacem Health, Fatima leads engagement with African governments, development banks, bilateral donors, UN agencies, and foundations. She identifies partnership opportunities, negotiates framework agreements, coordinates stakeholder relationships, and ensures alignment with national health priorities and donor strategies.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Fatima holds a Master's degree in International Development from Sciences Po Paris and a Bachelor's degree in Economics from Cheikh Anta Diop University in Dakar. She is fluent in French, English, and Wolof, enabling her to navigate diverse institutional and cultural contexts across Francophone and Anglophone Africa.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                She maintains strong relationships with senior officials at African Ministries of Health, development partner missions, and regional economic communities. Fatima is a trusted advisor on partnership models for health systems strengthening and regularly speaks at development forums on innovative financing and public-private collaboration.
              </p>
            </div>

            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBidXNpbmVzcyUyMGxlYWRlcnxlbnwxfHx8fDE3NjEwMjA3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Fatima Diallo"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  Fatima Diallo
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
              <a href="mailto:fatima.diallo@pacemhealth.com" className="text-base md:text-lg">
                fatima.diallo@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with Fatima Diallo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
