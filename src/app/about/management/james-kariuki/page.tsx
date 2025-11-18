import { Button } from '../../../../components/ui/button';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function JamesKariukiBio() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "James Kariuki",
    "jobTitle": "Chief Operating Officer",
    "worksFor": {"@type": "Organization", "name": "Pacem Health"}
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0d1f0d] via-[#1a3a1a] to-[#0d1f0d]">
      <SEOHead
        title="James Kariuki - Chief Operating Officer | Pacem Health Leadership"
        description="Meet James Kariuki, Chief Operating Officer at Pacem Health. Leading operational excellence, supply chain optimization, and systems delivery across African healthcare markets."
        keywords={[
          'James Kariuki Pacem Health',
          'COO Africa healthcare',
          'supply chain leadership',
          'operations excellence Africa',
          'healthcare logistics'
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
            <span className="text-white">James Kariuki</span>
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
            James Kariuki
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            East Africa Operations Director
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-white/90">
              <p className="text-base md:text-lg leading-relaxed">
                James Kariuki serves as East Africa Operations Director at Pacem Health, managing operations across Kenya, Tanzania, Uganda, Rwanda, and Ethiopia. Based in Nairobi, Kenya, he brings over 20 years of experience in healthcare logistics and facility management across East Africa, ensuring seamless delivery of equipment, training, and technical support to health facilities.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                With deep expertise in medical supply chain operations and health facility support, James has built extensive networks across East African health systems. He understands the operational challenges facing hospitals, clinics, and laboratories across the region and has developed innovative solutions to overcome them.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to joining Pacem Health, James held senior operations roles at major pharmaceutical distributors and medical equipment companies serving East Africa. He managed distribution networks spanning hundreds of health facilities, oversaw warehouse and logistics operations, and led technical support teams providing installation, maintenance, and training services.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                James's expertise includes last-mile delivery in challenging environments, cold chain management for vaccines and temperature-sensitive products, medical equipment installation and commissioning, biomedical equipment maintenance, and healthcare worker training. He has worked across public hospitals, private facilities, and NGO-supported health programs.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At Pacem Health, James oversees country operations teams in each East African market, manages regional warehousing and logistics, ensures timely delivery and installation of products, and provides ongoing technical support to health facilities. He builds relationships with procurement officials, facility administrators, and healthcare professionals across the region.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                James holds a Bachelor's degree in Biomedical Engineering from the University of Nairobi and has completed professional certifications in medical equipment management, Good Distribution Practices, and supply chain management. He regularly participates in East African health sector forums and professional associations.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                He is passionate about improving healthcare delivery across East Africa and is committed to ensuring health facilities have reliable access to quality medical products and ongoing technical support. James believes operational excellence is essential to health system strengthening.
              </p>
            </div>

            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1621282807498-aac696326c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZXhlY3V0aXZlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTAyMDc4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="James Kariuki"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  James Kariuki
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
              <a href="mailto:james.kariuki@pacemhealth.com" className="text-base md:text-lg">
                james.kariuki@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with James
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
