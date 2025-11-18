import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowLeft, Calendar, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function UniversityPartnership() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#4B2991]">Home</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[#4B2991]">News & Media</Link>
            <span>/</span>
            <span className="text-foreground">University Partnership</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/news" className="inline-flex items-center text-[#4B2991] hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#0033A0] text-white rounded-full text-sm">
              Partnership Announcement
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>March 20, 2025</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Strategic Partnership with Leading African Universities
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8">
            Collaboration aims to strengthen pharmaceutical education and clinical training programs across five East African medical schools
          </p>

          {/* Featured Image */}
          <div className="mb-12 rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="University Partnership"
              className="w-full h-auto"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p>
              Pacem Health has announced strategic partnerships with five leading medical universities across East Africa to strengthen pharmaceutical education, clinical training, and research capacity in the region.
            </p>

            <h2>Partner Institutions</h2>
            <ul>
              <li>University of Nairobi School of Pharmacy (Kenya)</li>
              <li>Muhimbili University of Health and Allied Sciences (Tanzania)</li>
              <li>Makerere University College of Health Sciences (Uganda)</li>
              <li>University of Rwanda School of Medicine</li>
              <li>University of Dar es Salaam School of Pharmacy (Tanzania)</li>
            </ul>

            <h2>Program Components</h2>
            <p>
              The partnership will focus on three key areas:
            </p>

            <h3>1. Clinical Training Enhancement</h3>
            <p>
              Development of practical training modules in hospital pharmacy practice, pharmaceutical care, and medication safety. Students will gain hands-on experience through structured rotations in partner health facilities.
            </p>

            <h3>2. Research Collaboration</h3>
            <p>
              Joint research projects focusing on pharmaceutical access, medication safety, health systems strengthening, and implementation science. Research findings will inform evidence-based policy and practice improvements.
            </p>

            <h3>3. Continuing Professional Development</h3>
            <p>
              Certificate and diploma programs for practicing pharmacists in specialized areas including clinical pharmacy, pharmaceutical management, and quality assurance.
            </p>

            <h2>Expected Impact</h2>
            <p>
              The partnership aims to:
            </p>
            <ul>
              <li>Train 500+ pharmacy students annually in enhanced clinical programs</li>
              <li>Provide continuing education for 200+ practicing pharmacists per year</li>
              <li>Produce 20+ joint research publications over the next three years</li>
              <li>Develop region-specific pharmaceutical care protocols and guidelines</li>
            </ul>

            <p>
              "Strengthening Africa's healthcare workforce is essential for sustainable health systems improvement," said Dr. Sarah Mwangi, Pacem Health's Director of Professional Development. "These partnerships will help ensure the next generation of pharmacists has the skills and knowledge needed to deliver high-quality pharmaceutical care across the continent."
            </p>
          </div>

          {/* Back to News */}
          <div className="mt-12 text-center">
            <Link to="/news">
              <Button variant="outline" size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All News
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
