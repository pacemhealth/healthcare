import { Button } from '../../../../components/ui/button';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function ThandiweMoyoBio() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Thandiwe Moyo",
    "jobTitle": "Chief Medical Officer - Africa",
    "worksFor": {"@type": "Organization", "name": "Pacem Health"}
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0d1f0d] via-[#1a3a1a] to-[#0d1f0d]">
      <SEOHead
        title="Dr. Thandiwe Moyo - Chief Medical Officer - Africa | Pacem Health Leadership"
        description="Meet Dr. Thandiwe Moyo, Chief Medical Officer - Africa at Pacem Health. Expert in clinical leadership, medical expertise, and health facility support across Southern Africa."
        keywords={[
          'Thandiwe Moyo Pacem Health',
          'Chief Medical Officer Africa',
          'clinical leadership',
          'public health Southern Africa',
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
            <span className="text-white">Dr. Thandiwe Moyo</span>
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
            Dr. Thandiwe Moyo
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Chief Medical Officer - Africa
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-white/90">
              <p className="text-base md:text-lg leading-relaxed">
                Dr. Thandiwe Moyo serves as Chief Medical Officer - Africa at Pacem Health, providing clinical leadership and medical expertise across product selection, clinical training programs, and health facility support. Based in Gaborone, Botswana, she ensures clinical appropriateness of all solutions and services delivered across the continent.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                A trained physician with over 20 years of clinical and public health experience across Southern Africa, Dr. Moyo brings deep expertise in clinical medicine, health systems strengthening, and medical education. Her clinical background spans internal medicine, infectious diseases, and primary health care in both tertiary hospitals and rural health facilities.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to joining Pacem Health, Dr. Moyo served as Director of Clinical Services at a regional health authority in Botswana, overseeing clinical quality, medical protocols, and workforce development across 45 health facilities. She previously worked as a public health physician with Médecins Sans Frontières (MSF), providing clinical leadership for HIV/TB and maternal health programs across Southern and East Africa.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Dr. Moyo's expertise includes clinical protocol development, medical equipment selection and evaluation, clinical training curriculum design, health worker mentorship, quality of care improvement, and disease program management. She has designed and implemented clinical training programs for physicians, nurses, and allied health professionals across multiple countries.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At Pacem Health, Dr. Moyo leads all clinical and medical aspects of the company's operations. She evaluates medical products and equipment for clinical appropriateness, designs clinical training programs for healthcare workers, provides technical guidance on health facility strengthening, advises on disease-specific interventions, and ensures adherence to clinical best practices and medical ethics.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Dr. Moyo holds an MBChB (Bachelor of Medicine and Bachelor of Surgery) from the University of Cape Town, a Master of Public Health from the University of the Witwatersrand, and specialized training in infectious diseases and HIV medicine. She is registered with medical councils in Botswana and South Africa.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                She maintains active clinical practice and serves on multiple technical working groups for regional health initiatives. Dr. Moyo is a recognized expert on HIV/TB integration, clinical quality improvement in resource-limited settings, and health workforce development. She has published in peer-reviewed medical journals and regularly presents at regional clinical conferences.
              </p>
            </div>

            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBkb2N0b3J8ZW58MXx8fHwxNzYxMDIwNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dr. Thandiwe Moyo"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  Dr. Thandiwe Moyo
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
              <a href="mailto:thandiwe.moyo@pacemhealth.com" className="text-base md:text-lg">
                thandiwe.moyo@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with Dr. Thandiwe Moyo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
