import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function ResearchDevelopmentEquipmentPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Research & Development Equipment",
    "description": "Advanced analytical instruments, biotechnology equipment, environmental research tools, infectious disease research, and clinical trial equipment for African research institutions",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'advanced-analytical-instruments',
      name: 'Advanced Analytical Instruments',
      description: 'Chromatography systems, mass spectrometry, spectroscopy, and advanced laboratory analytical platforms for research and quality control',
      productCount: '12 product groups'
    },
    {
      id: 'biotechnology-life-sciences-research',
      name: 'Biotechnology & Life Sciences Research',
      description: 'Cell culture systems, molecular biology equipment, genomics research tools, protein analysis, and biotech research infrastructure',
      productCount: '13 product groups'
    },
    {
      id: 'environmental-field-research',
      name: 'Environmental & Field Research',
      description: 'Water quality testing, air monitoring, soil analysis, field portable equipment, and environmental health research tools',
      productCount: '11 product groups'
    },
    {
      id: 'infectious-disease-research',
      name: 'Infectious Disease Research',
      description: 'Pathogen detection, epidemiology tools, vaccine development equipment, antimicrobial resistance testing, and outbreak investigation',
      productCount: '10 product groups'
    },
    {
      id: 'clinical-research-trials',
      name: 'Clinical Research & Trials Equipment',
      description: 'GCP-compliant trial equipment, specimen biobanking, data collection systems, clinical research laboratory infrastructure',
      productCount: '9 product groups'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Research & Development Equipment | Laboratory Research Equipment Africa | Pacem Health"
        description="Advanced research and development equipment for African institutions. Analytical instruments, biotechnology equipment, environmental research tools, infectious disease research, and clinical trial equipment. Build research capacity."
        keywords={[
          'research equipment Africa',
          'laboratory analytical instruments',
          'biotechnology equipment',
          'clinical research equipment',
          'infectious disease research',
          'scientific equipment Africa',
          'R&D laboratory equipment'
        ]}
        structuredData={productSchema}
      />
      {/* Breadcrumb Bar */}
      <section className="bg-[#4B2991] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/division1" className="hover:underline">Essential Healthcare Products</Link>
            <span>/</span>
            <span>Research & Development Equipment</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Essential Healthcare Products</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Research & Development Equipment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Advanced research instrumentation including analytical platforms, biotechnology systems, environmental monitoring, infectious disease research, and clinical trials equipment. Quality research infrastructure supporting African universities, research institutes, national reference laboratories, and emerging biotech sectors driving scientific innovation and evidence-based healthcare policy.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Subcategory</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of research and development equipment solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => navigate(`/products/subcategories/${subcategory.id}`)}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 text-left group"
              >
                <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                  {subcategory.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{subcategory.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>
                    {subcategory.productCount}
                  </span>
                  <span className="text-[#4B2991] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Research Landscape Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Strengthening Africa's Research Capacity</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Building the scientific infrastructure for locally-relevant research and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-xl mb-2">Academic Research</h3>
              <p className="text-gray-700">
                University research laboratories, graduate training programs, basic science research, and academic-clinical partnerships generating evidence and training Africa's next generation of scientists.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-xl mb-2">Applied Health Research</h3>
              <p className="text-gray-700">
                Operational research, health systems research, clinical trials, disease surveillance, and implementation science addressing Africa's unique disease burden and healthcare delivery challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🧬</div>
              <h3 className="text-xl mb-2">Biotechnology Innovation</h3>
              <p className="text-gray-700">
                Emerging biotech sector, pharmaceutical R&D, vaccine development, diagnostics innovation, and local manufacturing capacity building Africa's bioeconomy and health security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Infrastructure Challenges */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Research Capacity Gaps</h3>
              <p className="text-gray-700 mb-4">
                Limited research infrastructure constrains Africa's ability to address its own health challenges.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Inadequate laboratory research equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Limited funding for research infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Brain drain of trained researchers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Weak research-to-policy translation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Dependence on external research agendas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Limited regional research collaboration</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Strategic Research Priorities</h3>
              <p className="text-gray-700 mb-4">
                Investments in research infrastructure must align with Africa's priority health challenges.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Infectious diseases (malaria, TB, HIV, emerging threats)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Non-communicable diseases (cardiovascular, diabetes, cancer)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Maternal & child health outcomes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Antimicrobial resistance surveillance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Environmental health and climate impacts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Health systems strengthening research</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Research Ecosystem Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">African Research Ecosystem</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Supporting the full spectrum of research activities across the continent
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Universities</h4>
              <p className="text-sm text-gray-700">Teaching hospitals, research laboratories, graduate programs</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🏛️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Research Institutes</h4>
              <p className="text-sm text-gray-700">National institutes, Centers of Excellence, specialized research centers</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Reference Labs</h4>
              <p className="text-sm text-gray-700">National reference labs, WHO collaborating centers, diagnostic networks</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">💼</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Private Sector</h4>
              <p className="text-sm text-gray-700">Pharma R&D, biotech startups, clinical research organizations (CROs)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Equip Your Research Laboratory</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Connect with our scientific equipment specialists to design comprehensive research infrastructure solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/request-equipment-quote')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Request Research Equipment Quote
              </button>
              <button
                onClick={() => navigate('/support/product-equipment-documentation')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                View Technical Specifications
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
