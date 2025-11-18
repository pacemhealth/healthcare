import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function ServicesMegaMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const coreServices = [
    {
      title: 'Market Access Services',
      description: 'Comprehensive market entry support for international manufacturers entering African markets.',
      link: '/services/market-access'
    },
    {
      title: 'Procurement & Distribution',
      description: 'Strategic sourcing and wholesale distribution of quality-assured health products from trusted global suppliers.',
      link: '/services/procurement-sourcing'
    },
    {
      title: 'Supply Chain & Logistics',
      description: 'End-to-end supply chain management including warehousing, cold chain, and distribution.',
      link: '/services/supply-chain-logistics'
    },
    {
      title: 'Regulatory & Compliance Services',
      description: 'Product registration, compliance, pharmacovigilance, and quality management across African markets.',
      link: '/services/regulatory'
    },
    {
      title: 'Infrastructure & Planning',
      description: 'Healthcare infrastructure design and delivery that strengthens entire health systems.',
      link: '/services/infrastructure-planning'
    },
    {
      title: 'Digital Health & Technology Solutions',
      description: 'Integrated digital platforms, fleet management, mobile diagnostics, and health intelligence analytics.',
      link: '/advanced-solutions'
    }
  ];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-sm hover:text-[#00A0DC] transition flex items-center gap-1">
        Services
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-screen max-w-5xl">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-8">
            {/* Featured Link - Our Approach */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <Link 
                to="/our-approach" 
                className="group flex items-start justify-between hover:bg-gray-50 p-3 rounded-lg transition"
              >
                <div>
                  <h3 className="text-[#0033A0] group-hover:text-[#00A0DC] transition mb-1">
                    Our Approach
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Strategy and implementation seamlessly integrated for comprehensive health systems solutions
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-[#00A0DC] opacity-0 group-hover:opacity-100 transition flex-shrink-0 mt-1" />
              </Link>
            </div>

            {/* Core Services Grid - 3 columns x 2 rows */}
            <div className="mb-6">
              <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-3 px-3">Core Services</h4>
              <div className="grid md:grid-cols-3 gap-x-6 gap-y-4">
                {coreServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.link}
                    className="group block p-3 hover:bg-gray-50 rounded-lg transition"
                  >
                    <h3 className="text-[#0033A0] group-hover:text-[#00A0DC] transition mb-1 text-sm">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quality Assurance - Featured Link */}
            <div className="pt-4 border-t border-gray-200 mb-4">
              <Link 
                to="/services/quality-assurance" 
                className="group flex items-start justify-between hover:bg-gray-50 p-3 rounded-lg transition"
              >
                <div>
                  <h3 className="text-[#0033A0] group-hover:text-[#00A0DC] transition mb-1">
                    Quality Assurance
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Triple-verified quality systems ensuring every product meets international standards
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-[#00A0DC] opacity-0 group-hover:opacity-100 transition flex-shrink-0 mt-1" />
              </Link>
            </div>

            {/* View All Services Link */}
            <div className="pt-4 border-t border-gray-200">
              <Link 
                to="/services" 
                className="group inline-flex items-center gap-2 text-sm text-[#0033A0] hover:text-[#00A0DC] transition"
              >
                View All Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}