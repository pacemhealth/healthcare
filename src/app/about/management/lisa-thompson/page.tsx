import { Button } from '../../../../components/ui/button';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import { Mail, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LisaThompsonBio() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <span>/</span>
            <Link to="/about/management" className="hover:text-white transition-colors">Management</Link>
            <span>/</span>
            <span className="text-white">Lisa Thompson</span>
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
            Lisa Thompson
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            VP of Business Development
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6 text-white/90">
              <p className="text-base md:text-lg leading-relaxed">
                Lisa Thompson serves as VP of Business Development at Pacem Health, driving new market expansion, government partnerships, and strategic alliances across Africa. Previously with USAID and the World Bank, she brings extensive experience in public-private partnerships and development finance for health system strengthening.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                With deep expertise in business development and partnership management, Lisa has worked across 20+ African countries building relationships with Ministries of Health, development agencies, and private sector healthcare providers. She understands both the public and private sector dynamics in African healthcare markets.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Prior to joining Pacem Health, Lisa held senior positions at USAID where she managed health portfolio investments exceeding $500 million and led initiatives to strengthen public-private partnerships in health. She later joined the World Bank's health financing team, where she designed innovative financing mechanisms for health systems strengthening.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Lisa's expertise includes market entry strategy, partnership development, government relations, tender management for public procurement, and structuring blended finance solutions. She has successfully negotiated partnerships with multilateral organizations, bilateral donors, and African governments.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                At Pacem Health, Lisa leads business development across all three divisions, identifies strategic growth opportunities, manages relationships with key stakeholders, and develops market entry strategies for new countries. She oversees proposal development for major tenders and government contracts.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Lisa holds a Master's degree in International Development from Georgetown University and a Bachelor's degree in Political Science. She has completed executive education in public-private partnerships and health financing at Harvard Kennedy School.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                She serves on advisory boards for several health sector partnerships and is a frequent speaker at global health and development conferences. Lisa is passionate about leveraging private sector capabilities to strengthen public health systems across Africa.
              </p>
            </div>

            <div className="lg:sticky lg:top-8 h-fit">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1585554414787-09b821c321c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDk4ODE3NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Lisa Thompson"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="mt-4 text-sm text-white/60 text-right">
                  Lisa Thompson
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
              <a href="mailto:lisa.thompson@pacemhealth.com" className="text-base md:text-lg">
                lisa.thompson@pacemhealth.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
              <a href="#" className="text-base md:text-lg">
                Connect with Lisa
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
