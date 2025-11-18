import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function LaboratoryEquipmentInstrumentationPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Laboratory Equipment & Instrumentation",
    "description": "Clinical analyzers, microscopy systems, centrifuges, incubators, sterilization equipment, and laboratory furniture for African healthcare laboratories",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'clinical-lab-analyzers',
      name: 'Clinical Laboratory Analyzers',
      description: 'Chemistry analyzers, hematology analyzers, immunoassay systems, blood gas analyzers, and multi-parameter testing platforms',
      productCount: '14 product groups'
    },
    {
      id: 'microscopy-imaging-systems',
      name: 'Microscopy & Imaging Systems',
      description: 'Light microscopes, fluorescence microscopes, digital imaging systems, microscope accessories, and slide preparation equipment',
      productCount: '12 product groups'
    },
    {
      id: 'centrifuges-sample-processing',
      name: 'Centrifuges & Sample Processing',
      description: 'Laboratory centrifuges, microcentrifuges, blood bank centrifuges, sample processors, and separation equipment',
      productCount: '10 product groups'
    },
    {
      id: 'incubators-environmental-chambers',
      name: 'Incubators & Environmental Chambers',
      description: 'CO2 incubators, microbiological incubators, BOD incubators, environmental chambers, and temperature control systems',
      productCount: '11 product groups'
    },
    {
      id: 'sterilization-autoclave-equipment',
      name: 'Sterilization & Autoclave Equipment',
      description: 'Steam autoclaves, dry heat sterilizers, biological indicators, autoclave accessories, and validation equipment',
      productCount: '9 product groups'
    },
    {
      id: 'laboratory-refrigeration-storage',
      name: 'Laboratory Refrigeration & Storage',
      description: 'Laboratory refrigerators, freezers, ultra-low temperature freezers, blood bank refrigerators, and specimen storage',
      productCount: '13 product groups'
    },
    {
      id: 'laboratory-furniture-workstations',
      name: 'Laboratory Furniture & Workstations',
      description: 'Laboratory benches, biosafety cabinets, fume hoods, laboratory sinks, and modular lab furniture',
      productCount: '15 product groups'
    },
    {
      id: 'laboratory-safety-containment',
      name: 'Laboratory Safety & Containment',
      description: 'Biosafety cabinets, laminar flow hoods, chemical fume hoods, safety equipment, and spill containment',
      productCount: '12 product groups'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Laboratory Equipment & Instrumentation | Clinical Analyzers Africa | Pacem Health"
        description="Comprehensive laboratory equipment for African healthcare. Clinical analyzers, microscopy systems, centrifuges, incubators, sterilization equipment, cold storage, and laboratory furniture. Build modern diagnostic laboratories."
        keywords={[
          'laboratory equipment Africa',
          'clinical analyzers',
          'microscopy systems',
          'laboratory centrifuges',
          'autoclave sterilization',
          'laboratory furniture',
          'diagnostic equipment Africa'
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
            <span>Laboratory Equipment & Instrumentation</span>
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
              Laboratory Equipment & Instrumentation
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive laboratory equipment solutions including clinical analyzers, microscopy systems, centrifuges, incubators, autoclaves, refrigeration, laboratory furniture, and biosafety equipment. Quality instrumentation supporting accurate diagnostics, research, and quality control across African healthcare and reference laboratories.
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
              Explore our complete range of laboratory equipment and instrumentation solutions
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

      {/* Key Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Laboratory Excellence for Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              World-class laboratory equipment supporting diagnostic capacity and healthcare delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-xl mb-2">Diagnostic Capacity</h3>
              <p className="text-gray-700">
                Advanced analyzers and instrumentation enabling accurate disease diagnosis, treatment monitoring, and surveillance programs from district to national reference laboratories.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-xl mb-2">Quality & Biosafety</h3>
              <p className="text-gray-700">
                Biosafety cabinets, quality control systems, and validation equipment ensuring laboratory safety, accurate results, and compliance with international standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="text-xl mb-2">Reliability & Support</h3>
              <p className="text-gray-700">
                Robust equipment designed for challenging environments, with comprehensive training, preventive maintenance, and local technical support ensuring operational uptime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Strengthening Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Laboratory Systems Strengthening</h3>
              <p className="text-gray-700 mb-4">
                Equipment selection must align with laboratory networks, disease burden, and technical capacity.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Test menu aligned with disease burden (HIV, TB, malaria, NCDs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Equipment appropriate for testing volumes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Power and infrastructure requirements (generators, UPS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reagent and consumable supply chain reliability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Technical staff capacity and training needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Quality management systems and accreditation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Comprehensive Equipment Lifecycle</h3>
              <p className="text-gray-700 mb-4">
                End-to-end equipment support ensuring long-term laboratory performance and sustainability.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pre-installation site assessments and preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Installation, validation, and commissioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Operator and technician training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Preventive maintenance and calibration services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Corrective maintenance and spare parts availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Performance monitoring and quality assurance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Network Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Tiered Laboratory Network Support</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Equipment solutions designed for each level of the laboratory network
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Primary Level</h4>
              <p className="text-sm text-gray-700">Point-of-care devices, microscopy, basic hematology for health centers</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🏨</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>District Level</h4>
              <p className="text-sm text-gray-700">Semi-automated analyzers, chemistry, hematology, microbiology for district hospitals</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🏛️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Regional Level</h4>
              <p className="text-sm text-gray-700">Fully automated platforms, specialized testing, blood bank for regional referrals</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>National Reference</h4>
              <p className="text-sm text-gray-700">Advanced instrumentation, molecular diagnostics, research capacity, quality oversight</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Ready to Strengthen Your Laboratory?</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Connect with our laboratory specialists to design the right equipment solution for your facility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/request-equipment-quote')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Request Equipment Quote
              </button>
              <button
                onClick={() => navigate('/support/technical-support')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Contact Laboratory Specialists
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
