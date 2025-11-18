import { Button } from '../../../../components/ui/button';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function AmaraOkonkwoBio() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Amara Okonkwo",
    "jobTitle": "Chief Medical Officer",
    "worksFor": {"@type": "Organization", "name": "Pacem Health"}
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0d1f0d] via-[#1a3a1a] to-[#0d1f0d]">
      <SEOHead
        title="Dr. Amara Okonkwo - Chief Medical Officer | Pacem Health Leadership"
        description="Meet Dr. Amara Okonkwo, Chief Medical Officer at Pacem Health. Expert in clinical program design, public health strategy, and medical services delivery across Africa."
        keywords={[
          'Amara Okonkwo Pacem Health',
          'Chief Medical Officer Africa',
          'public health leadership',
          'clinical programs Africa',
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
            <span className="text-white">Dr. Amara Okonkwo</span>
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
            Dr. Amara Okonkwo
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Africa Regional Director
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-white/90">
              <p className="text-base md:text-lg leading-relaxed">
                Dr. Amara Okonkwo serves as Africa Regional Director at Pacem Health, leading regional operations across the continent and overseeing market development, government partnerships, and on-the-ground implementation. Based in Lagos, Nigeria, she brings unparalleled regional expertise and strategic relationships across African health systems.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                A former senior advisor to multiple African Ministries of Health, Dr. Okonkwo has over 25 years of experience in African health systems at the highest levels of government and international organizations. She has worked across 30+ African countries, advising on national health strategies, health system reforms, and universal health coverage implementation.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to joining Pacem Health, Dr. Okonkwo served as Director of Health Systems Strengthening at the African Union Commission, where she coordinated regional health initiatives and supported member states with policy development and implementation. She previously held senior positions at WHO Africa Regional Office and has consulted for the World Bank, Global Fund, and USAID.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Dr. Okonkwo's expertise spans health system strategy and planning, primary health care strengthening, health workforce development, pharmaceutical systems, and health financing mechanisms. She has led technical assistance programs supporting Ministries of Health across West, East, and Southern Africa.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At Pacem Health, Dr. Okonkwo oversees regional operations, manages relationships with African governments and health institutions, leads market entry strategies, and ensures cultural appropriateness and contextual relevance of all company initiatives. She guides local teams across multiple countries and ensures alignment with regional health priorities.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Dr. Okonkwo holds a medical degree from the University of Lagos, a Master's in Public Health from the London School of Hygiene and Tropical Medicine, and a PhD in Health Policy from Johns Hopkins University. She has published extensively on African health systems in leading journals.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                She serves on multiple technical advisory groups for continental health initiatives and maintains close relationships with African health ministers, permanent secretaries, and senior health officials. Dr. Okonkwo is a respected voice on African health systems transformation and regularly speaks at high-level policy forums.
              </p>
            </div>

            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1604783020105-a1c1a856a55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBsZWFkZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxMDIwNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dr. Amara Okonkwo"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  Dr. Amara Okonkwo
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
              <a href="mailto:amara.okonkwo@pacemhealth.com" className="text-base md:text-lg">
                amara.okonkwo@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with Dr. Okonkwo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
