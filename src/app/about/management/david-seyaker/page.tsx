import { Button } from '../../../../components/ui/button';
import { Card } from '../../../../components/ui/card';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function DavidSeyakerBio() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "David Seyaker",
    "jobTitle": "Founder & CEO",
    "worksFor": {"@type": "Organization", "name": "Pacem Health"}
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
      <SEOHead
        title="David Seyaker - Founder & CEO | Pacem Health Leadership"
        description="Meet David Seyaker, Founder & CEO of Pacem Health. Leading global health innovation and systems delivery strengthening healthcare across Africa through strategic partnerships and sustainable solutions."
        keywords={[
          'David Seyaker Pacem Health',
          'healthcare CEO Africa',
          'global health innovation leader',
          'pharmaceutical leadership Africa',
          'health systems strengthening'
        ]}
        structuredData={personSchema}
      />
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
            <span className="text-white">David Seyaker</span>
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
            David Seyaker
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Founder & Chief Executive Officer
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
                David Seyaker founded Pacem Health in 2024 with a vision to strengthen healthcare delivery across Africa through integrated systems and sustainable solutions. As CEO, he guides the company's strategic direction, partnership development, and expansion across the African continent.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                With more than 15 years of experience in global health systems and medical supply chain management, David brings a unique combination of operational expertise and strategic vision. He has worked extensively across East, West, and Southern Africa, developing deep relationships with Ministries of Health, healthcare facilities, and development partners.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to founding Pacem Health, David served in leadership roles at international medical equipment distributors and global health organizations, where he managed multi-million dollar procurement programs and health system strengthening initiatives across 12 African countries. His experience spans pharmaceutical supply chains, medical equipment distribution, laboratory systems, and healthcare facility operations.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                David's approach to health systems strengthening emphasizes sustainability, local capacity building, and systems thinking. He believes that transforming African healthcare requires more than just delivering products – it requires integrated solutions that address procurement, training, maintenance, and sustainable financing simultaneously.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Under his leadership, Pacem Health has established operations across multiple African countries, built partnerships with leading global manufacturers, and developed innovative financing mechanisms to improve healthcare access. The company's three-division model (Products & Procurement, Advisory Services, and Advanced Solutions) reflects his vision of comprehensive health system support.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                David holds a Master's degree in International Health from a leading U.S. university and a Bachelor's degree in Business Administration. He is a frequent speaker at global health conferences and has published on topics including health supply chain optimization, sustainable procurement models, and public-private partnerships in African healthcare.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                He serves on the advisory boards of several health technology companies and is actively involved in industry associations focused on improving healthcare access in resource-limited settings. David is passionate about mentoring the next generation of global health leaders and regularly engages with African universities and training programs.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc2MTAyMDc4Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="David Seyaker"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  David Seyaker
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
              <a href="mailto:david.seyaker@pacemhealth.com" className="text-base md:text-lg">
                david.seyaker@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with David
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
