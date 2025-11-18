import { Button } from '../../../../components/ui/button';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MichaelAndersonBio() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
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
            <span className="text-white">Michael Anderson</span>
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
            Michael Anderson
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            Chief Strategy Officer
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
                Michael Anderson serves as Chief Strategy Officer at Pacem Health, leading strategic planning, market development, and advisory services expansion. He is responsible for shaping the company's long-term strategic direction and ensuring alignment across all three business divisions.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                With deep expertise in health systems strengthening, Michael has consulted on projects across 18 African countries, working with Ministries of Health, development agencies, and healthcare facilities. His experience spans health system financing, digital health transformation, universal health coverage implementation, and public-private partnerships.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to joining Pacem Health, Michael worked at leading global health consulting firms where he led engagements for the World Bank, USAID, Global Fund, and national governments. He has designed national health strategies, developed health financing mechanisms, and guided digital health implementations across Sub-Saharan Africa.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Michael's consulting work has addressed critical health system challenges including sustainable financing for essential medicines, health workforce planning and development, hospital autonomy reforms, national health insurance scheme design, and health information system strengthening. He brings both strategic vision and implementation expertise.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At Pacem Health, Michael oversees the Advisory Services division, ensuring high-quality technical assistance that drives sustainable health system transformation. He leads business development efforts, identifies strategic partnership opportunities, and guides market entry strategies across new African countries.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Michael holds a Master's degree in Public Health from Johns Hopkins Bloomberg School of Public Health and a Bachelor's degree in Economics. He has completed advanced training in health economics, health financing, and digital health at Harvard, Oxford, and the London School of Hygiene and Tropical Medicine.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                He has published extensively on African health systems in peer-reviewed journals and is a frequent speaker at global health conferences. Michael serves on technical advisory groups for multilateral organizations and maintains close relationships with key stakeholders across African health systems.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1615702669705-0d3002c6801c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGNvcnBvcmF0ZSUyMGhlYWRzaG90fGVufDF8fHx8MTc2MTAyMDc4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Michael Anderson"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  Michael Anderson
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
              <a href="mailto:michael.anderson@pacemhealth.com" className="text-base md:text-lg">
                michael.anderson@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with Michael
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
