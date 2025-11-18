import { Button } from '../../../../components/ui/button';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function GraceWanjiruBio() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Grace Wanjiru",
    "jobTitle": "Director of Training & Capacity Building",
    "worksFor": {"@type": "Organization", "name": "Pacem Health"}
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0d1f0d] via-[#1a3a1a] to-[#0d1f0d]">
      <SEOHead
        title="Grace Wanjiru - Director of Training & Capacity Building | Pacem Health Leadership"
        description="Meet Grace Wanjiru, Director of Training & Capacity Building at Pacem Health. Expert in healthcare training, medical equipment education, and capacity building across Africa."
        keywords={[
          'Grace Wanjiru Pacem Health',
          'Director of Training Capacity Building',
          'healthcare training Africa',
          'medical equipment training',
          'nursing education'
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
            <span className="text-white">Grace Wanjiru</span>
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
            Grace Wanjiru
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Director of Training & Capacity Building
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-white/90">
              <p className="text-base md:text-lg leading-relaxed">
                Grace Wanjiru serves as Director of Training & Capacity Building at Pacem Health, designing and implementing training programs for healthcare workers across Africa on medical equipment, laboratory systems, and pharmacy operations. Based in Nairobi, Kenya, she has trained over 5,000 healthcare professionals across 12 countries.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                With a unique background combining nursing education and biomedical engineering, Grace brings over 17 years of experience in healthcare training, clinical education, and technical capacity building. Her expertise spans curriculum development, hands-on clinical skills training, medical equipment operation and maintenance, and adult learning methodologies.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to joining Pacem Health, Grace served as Head of Clinical Training at a regional hospital network in Kenya, where she developed competency-based training programs for nurses, laboratory technicians, and biomedical engineers. She previously worked as a biomedical engineering trainer for international NGOs implementing health facility strengthening programs across East Africa.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Grace's expertise includes training needs assessment, competency-based curriculum design, clinical skills training, medical equipment operation and troubleshooting, laboratory quality systems training, pharmacy best practices education, and train-the-trainer programs. She specializes in practical, hands-on training methodologies adapted to resource-limited settings.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At Pacem Health, Grace leads all training and capacity building initiatives. She designs training curricula for medical equipment installation and use, develops clinical training modules for pharmaceutical and laboratory systems, conducts on-site training for health facility staff, implements mentorship and supervision programs, and evaluates training effectiveness and competency attainment.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Grace holds a Bachelor of Science in Nursing from the University of Nairobi and a Master's degree in Biomedical Engineering from Jomo Kenyatta University of Agriculture and Technology. She is a registered nurse in Kenya and holds professional certifications in clinical education and biomedical equipment maintenance.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                She has published training manuals and job aids widely used across African health facilities and regularly conducts training-of-trainers workshops for Ministries of Health and implementing partners. Grace is recognized as a leading expert in practical clinical and technical training for African healthcare workers and serves as a technical advisor on multiple regional health workforce development initiatives.
              </p>
            </div>

            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjB0cmFpbmVyfGVufDF8fHx8MTc2MTAyMDc4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Grace Wanjiru"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  Grace Wanjiru
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
              <a href="mailto:grace.wanjiru@pacemhealth.com" className="text-base md:text-lg">
                grace.wanjiru@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with Grace Wanjiru
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
