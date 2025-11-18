import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function MedicalEquipmentDeployment() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#4B2991]">Home</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[#4B2991]">News & Media</Link>
            <span>/</span>
            <span className="text-foreground">Medical Equipment Deployment</span>
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
            <span className="px-4 py-1.5 bg-[#4B2991] text-white rounded-full text-sm">
              Company News
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>February 10, 2025</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Target: Medical Equipment Deployment to 100 District Hospitals
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Pipeline initiative aims to strengthen diagnostic capabilities in underserved regions through comprehensive equipment and training packages
          </p>

          <div className="mb-12 rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Medical Equipment"
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Pacem Health has announced an ambitious pipeline initiative to deploy essential diagnostic equipment to 100 district hospitals across sub-Saharan Africa over the next three years, significantly expanding access to basic diagnostic services in underserved areas.
            </p>

            <h2>Equipment Package</h2>
            <p>Each participating hospital will receive:</p>
            <ul>
              <li>Digital X-ray system with PACS integration</li>
              <li>Portable ultrasound machine</li>
              <li>Automated hematology analyzer</li>
              <li>Chemistry analyzer for routine blood tests</li>
              <li>Centrifuge, microscope, and basic lab equipment</li>
            </ul>

            <h2>Comprehensive Support Model</h2>
            <p>
              Beyond equipment supply, the program includes installation, training, preventive maintenance, and ongoing technical support to ensure long-term sustainability and optimal utilization.
            </p>

            <h3>Training Component</h3>
            <ul>
              <li>Equipment operation training for clinical staff</li>
              <li>Biomedical technician training for maintenance</li>
              <li>Quality assurance protocols for laboratory procedures</li>
              <li>Safety training for radiology services</li>
            </ul>

            <h2>Expected Impact</h2>
            <p>
              The initiative is projected to bring diagnostic services to an estimated 10 million people in rural and peri-urban areas who currently lack access to basic X-rays, ultrasounds, and laboratory tests.
            </p>

            <p>
              "Many district hospitals have the infrastructure and staff but lack basic diagnostic equipment," explained Dr. Peter Kamau, Pacem Health's Medical Technology Director. "This gap forces patients to travel long distances to tertiary centers for routine tests, delaying treatment and increasing costs. Our goal is to bring these essential services closer to communities."
            </p>

            <h2>Financing and Partnerships</h2>
            <p>
              The program is structured as a public-private partnership, with equipment and training costs shared between Pacem Health, development partners, and host governments. The company is currently in discussions with the African Development Bank, World Bank, and bilateral donors to secure financing for the full 100-hospital target.
            </p>

            <p>
              Pilot deployments are underway in Kenya (5 hospitals), Ghana (3 hospitals), and Zambia (2 hospitals), with full-scale rollout planned for Q3 2025.
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
