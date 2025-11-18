import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { SEOHead } from '../../components/SEOHead';

export default function CEOMessagePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "David Seyaker",
    "jobTitle": "Chief Executive Officer",
    "worksFor": {
      "@type": "Organization",
      "name": "Pacem Health"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="CEO Message | David Seyaker Leadership Vision | Pacem Health"
        description="Message from Pacem Health CEO David Seyaker on strengthening African healthcare systems through comprehensive programs, quality assurance, and maternal-child health services. Building sustainable health infrastructure across Africa."
        keywords={[
          'Pacem Health CEO',
          'David Seyaker',
          'healthcare leadership Africa',
          'health system strengthening',
          'African healthcare development',
          'pharmaceutical quality assurance',
          'maternal child health programs'
        ]}
        structuredData={personSchema}
      />
      {/* Header */}
      <section className="bg-gradient-to-br from-[#003D5B] to-[#17A2B8] text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">
            A Message from Our CEO
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            David Seyaker, Chief Executive Officer
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              I am very excited to announce that Pacem Health is launching three strategic programs that will strengthen healthcare systems across Africa: the <strong>Pacem Healthcare Development Program</strong>, <strong>Pacem Excellence</strong>, and the <strong>Pacem Health Pediatric Pharmacy Program</strong>. These programs represent our commitment to building complete health ecosystems—training healthcare workers, ensuring medication quality, and delivering specialized maternal-child health services to communities that need them most.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Our core medical supply chain business will continue to deliver essential pharmaceuticals, medical equipment, and diagnostic supplies to healthcare facilities across the continent. These new programs build on that foundation, expanding our impact through comprehensive training for thousands of community health workers, pharmaceutical quality testing laboratories that ensure medication safety, and state-of-the-art pediatric pharmacies integrated with community-based care that brings prenatal and newborn health services directly to mothers in underserved areas.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              This strategic expansion marks the next phase in our evolution and a renewed commitment to addressing Africa's most critical healthcare challenges. Through these programs, we're strengthening the three pillars that determine whether health systems succeed: human capacity, quality assurance, and accessible care delivery. Our priority remains steadfast: building health infrastructure that delivers measurable outcomes and transforms lives across Africa.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              While we have always been proud to support healthcare providers with essential medical products, these programs underscore our dedication to comprehensive health system strengthening. We're addressing the gaps that limit healthcare effectiveness across the continent: insufficient training and support for frontline health workers, uncertainty about medication quality in supply chains, and limited access to specialized maternal-child health services in rural and peri-urban areas where most Africans live. These are the challenges that keep health systems from reaching their full potential, and these are the challenges we're solving.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Investments in these core capabilities will better position Pacem Health to support transformative health outcomes across Africa. The Healthcare Development Program will train over 5,000 community health workers in evidence-based protocols for pneumonia, cardiovascular disease, and diabetes while launching public health campaigns that reach millions. Pacem Excellence will establish pharmaceutical quality testing laboratories in partnership with leading African universities including the University of Nairobi and KNUST, testing tens of thousands of medication samples annually while training the next generation of African scientists and supporting STEM education through Pan-African Science Fairs. And our Pediatric Pharmacy Program will deploy comprehensive maternal-child health services combining specialized pediatric pharmacies with community health worker networks that bring prenatal care, nutrition counseling, and newborn health monitoring to an estimated 500,000 mothers and babies in our first three years.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              And with strategic partnerships secured with ministries of health across multiple countries, collaborations with Africa's leading universities, and support from international development organizations, Pacem Health sits at the center of Africa's healthcare transformation. Not only will we strengthen infrastructure and improve health outcomes, but we're creating over 300 jobs for African healthcare professionals—pharmacists, laboratory technicians, community health workers, and program managers. This is health system strengthening and economic development combined, with every job created representing better healthcare access for thousands of people.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              These investments are built on top of our proven track record of execution in challenging environments and deep understanding of African healthcare realities. We've successfully navigated supply chains across multiple countries, built trusted partnerships with governments and healthcare institutions, and demonstrated our ability to deliver complex health solutions where infrastructure is limited and needs are urgent. From this foundation, we're positioned to scale these programs rapidly and sustainably. We anticipate continued growth and are poised to capitalize on the enormous opportunity to transform healthcare delivery across a continent of more than one billion people.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Throughout our history, our commitment to strengthening healthcare systems across Africa has remained steadfast, and our priority has always been delivering measurable health impact. This next phase will be no exception. Our outstanding team—everyone from supply chain specialists to clinical advisors to laboratory scientists to community health workers—will work hand-in-hand with African healthcare professionals to ensure best-in-class implementation. We're building partnerships, not dependencies, and our success will be measured in lives saved, health workers empowered, and communities transformed.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              I couldn't be more excited for this next chapter as Pacem Health evolves from medical supplier to comprehensive health ecosystem builder. These programs represent our vision of what African healthcare can become: systems where every healthcare worker receives ongoing training and support, every medication meets international quality standards, and every mother and child receives the specialized care they deserve. This is the future we're building together.
            </p>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
              Thank you,
            </p>

            <div className="border-l-4 border-[#17A2B8] pl-6 mb-8">
              <p className="text-lg text-[#003D5B] mb-1">
                <strong>David Seyaker</strong>
              </p>
              <p className="text-base text-muted-foreground">
                Chief Executive Officer, Pacem Health Inc.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl sm:text-2xl mb-4">
              Join Us in Strengthening Healthcare Across Africa
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#17A2B8] hover:bg-[#138496] text-white">
                <Link to="/about">
                  Learn About Pacem Health
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#003D5B] text-[#003D5B] hover:bg-[#003D5B] hover:text-white">
                <Link to="/careers">
                  Explore Careers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
