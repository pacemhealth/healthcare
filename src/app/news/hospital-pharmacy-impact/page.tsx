import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function HospitalPharmacyImpact() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#4B2991]">Home</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[#4B2991]">News & Media</Link>
            <span>/</span>
            <span className="text-foreground">Hospital Pharmacy Impact</span>
          </div>
        </div>
      </section>

      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/news" className="inline-flex items-center text-[#4B2991] hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#00A0DC] text-white rounded-full text-sm">
              Impact Story
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>February 28, 2025</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Hospital Pharmacy Transformation Reaches 50,000 Patients
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Target milestone achieved as clinical pharmacy services expand across regional hospital network, improving medication safety and patient outcomes
          </p>

          <div className="mb-12 rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Hospital Pharmacy"
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Pacem Health's hospital pharmacy transformation program has reached a significant milestone, with clinical pharmacy services now benefiting over 50,000 patients across six partner hospitals in East Africa.
            </p>

            <h2>Program Achievements</h2>
            <ul>
              <li>50,000+ patients receiving clinical pharmacy services</li>
              <li>Medication errors reduced by 65% across partner facilities</li>
              <li>Stock-outs decreased from 35% to 8% average</li>
              <li>120 pharmacists trained in clinical pharmacy practice</li>
              <li>Antibiotic stewardship programs implemented in all facilities</li>
            </ul>

            <h2>Impact on Patient Care</h2>
            <p>
              The introduction of ward-based clinical pharmacists has significantly improved patient outcomes, particularly in medication management for chronic diseases, post-surgical care, and infectious disease treatment.
            </p>

            <p>
              "Having a clinical pharmacist on our ward rounds has transformed how we manage medications," said Dr. James Omondi, Head of Internal Medicine at Kenyatta National Hospital. "We're catching potential drug interactions earlier, optimizing dosing, and seeing better patient outcomes as a result."
            </p>

            <h2>Sustainability and Scale</h2>
            <p>
              The program is designed for long-term sustainability, with partner hospitals gradually assuming full operational costs as they realize savings from reduced medication waste, fewer adverse drug events, and improved efficiency.
            </p>

            <p>
              Plans are underway to expand the model to an additional 15 hospitals across Kenya, Tanzania, and Uganda over the next 18 months, potentially reaching 200,000+ patients annually by 2027.
            </p>
          </div>

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
