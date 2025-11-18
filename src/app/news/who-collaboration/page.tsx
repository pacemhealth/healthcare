import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function WHOCollaboration() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#4B2991]">Home</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[#4B2991]">News & Media</Link>
            <span>/</span>
            <span className="text-foreground">WHO Collaboration</span>
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
            <span className="px-4 py-1.5 bg-[#0033A0] text-white rounded-full text-sm">
              Strategic Partnership
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>January 25, 2025</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Collaboration with WHO on Essential Medicines Access
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Pipeline partnership focuses on improving pharmaceutical supply chains and regulatory harmonization across African Union member states
          </p>

          <div className="mb-12 rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="WHO Collaboration"
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Pacem Health has entered into a collaborative agreement with the World Health Organization (WHO) to support essential medicines access initiatives across Africa, focusing on supply chain strengthening and regulatory harmonization.
            </p>

            <h2>Collaboration Areas</h2>

            <h3>1. Essential Medicines List Implementation</h3>
            <p>
              Supporting countries in implementing national essential medicines lists based on WHO guidelines, including procurement planning, supply forecasting, and distribution optimization.
            </p>

            <h3>2. Regulatory Harmonization</h3>
            <p>
              Working with the African Medicines Agency (AMA) and regional regulatory authorities to streamline product registration and quality assurance processes, reducing time-to-market for essential medicines.
            </p>

            <h3>3. Supply Chain Strengthening</h3>
            <p>
              Deploying best practices in pharmaceutical supply chain management, including demand forecasting, inventory optimization, and last-mile distribution solutions.
            </p>

            <h3>4. Quality Assurance</h3>
            <p>
              Supporting WHO prequalification efforts and implementing quality management systems in pharmaceutical supply chains to ensure product integrity from manufacturer to patient.
            </p>

            <h2>Focus Countries</h2>
            <p>
              The initial collaboration will focus on 15 priority countries identified by WHO as having significant gaps in essential medicines access, including fragile and conflict-affected states where supply chain challenges are most acute.
            </p>

            <h2>Expected Outcomes</h2>
            <ul>
              <li>Improved availability of essential medicines in public health facilities</li>
              <li>Reduced lead times for medicine procurement and delivery</li>
              <li>Enhanced regulatory capacity for medicine quality assurance</li>
              <li>Strengthened pharmaceutical supply chain infrastructure</li>
              <li>Better preparedness for health emergency response</li>
            </ul>

            <p>
              "Access to quality-assured essential medicines is a cornerstone of universal health coverage," said Dr. Matshidiso Moeti, WHO Regional Director for Africa. "This collaboration brings together WHO's normative guidance with Pacem Health's operational expertise in pharmaceutical supply chains, creating a powerful platform for sustainable improvements in medicine access across the continent."
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
