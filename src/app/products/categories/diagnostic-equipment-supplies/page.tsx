import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function DiagnosticEquipmentSuppliesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Diagnostic Equipment & Supplies",
    "description": "Point-of-care testing devices, laboratory equipment, imaging systems, and diagnostic consumables for African healthcare",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'point-of-care-testing',
      name: 'Point-of-Care Testing',
      description: 'Rapid diagnostic tests, glucose meters, pregnancy tests, malaria RDTs, HIV testing kits, and bedside diagnostic devices',
      productCount: '20 product groups'
    },
    {
      id: 'laboratory-equipment',
      name: 'Laboratory Equipment',
      description: 'Microscopes, centrifuges, incubators, autoclaves, water baths, and essential lab instrumentation',
      productCount: '15 product groups'
    },
    {
      id: 'clinical-chemistry-analyzers',
      name: 'Clinical Chemistry Analyzers',
      description: 'Blood chemistry analyzers, electrolyte systems, liver/kidney function testing, and biochemistry equipment',
      productCount: '12 product groups'
    },
    {
      id: 'hematology-coagulation',
      name: 'Hematology & Coagulation',
      description: 'CBC analyzers, hemoglobin meters, coagulation testing, and blood cell counting equipment',
      productCount: '10 product groups'
    },
    {
      id: 'microbiology-serology',
      name: 'Microbiology & Serology',
      description: 'Culture equipment, immunoassay systems, TB diagnostics, antimicrobial susceptibility testing',
      productCount: '14 product groups'
    },
    {
      id: 'diagnostic-imaging-equipment',
      name: 'Diagnostic Imaging Equipment',
      description: 'Portable X-ray, ultrasound systems, digital radiography, and point-of-care imaging devices',
      productCount: '11 product groups'
    },
    {
      id: 'laboratory-consumables-reagents',
      name: 'Laboratory Consumables & Reagents',
      description: 'Test kits, reagents, calibrators, controls, and quality control materials',
      productCount: '18 product groups'
    },
    {
      id: 'specimen-collection-processing',
      name: 'Specimen Collection & Processing',
      description: 'Collection tubes, needles, swabs, transport media, and specimen processing supplies',
      productCount: '13 product groups'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Diagnostic Equipment & Supplies | Point-of-Care Testing Africa | Pacem Health"
        description="Comprehensive diagnostic equipment and supplies for African healthcare. Point-of-care testing, laboratory equipment, imaging systems, microbiology, and diagnostic consumables. Strengthen diagnostic capacity."
        keywords={[
          'diagnostic equipment Africa',
          'point-of-care testing',
          'laboratory equipment Africa',
          'diagnostic imaging',
          'rapid diagnostic tests',
          'medical laboratory supplies',
          'diagnostic consumables Africa'
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
            <span>Diagnostic Equipment & Supplies</span>
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
              Diagnostic Equipment & Supplies
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive diagnostic solutions enabling accurate disease detection and patient monitoring across African healthcare settings. From point-of-care rapid tests to advanced laboratory analyzers, imaging equipment, and complete diagnostic consumable supplies supporting evidence-based clinical decision-making.
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
              Explore our complete range of diagnostic equipment and laboratory supplies
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Diagnostic Excellence for Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Quality diagnostics are the foundation of effective healthcare delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-xl mb-2">Laboratory Infrastructure</h3>
              <p className="text-gray-700">
                Complete laboratory solutions from basic microscopy to automated analyzers, supporting disease diagnosis and patient monitoring across all care levels.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl mb-2">Point-of-Care Testing</h3>
              <p className="text-gray-700">
                Rapid diagnostic tests enabling immediate clinical decisions at the bedside, in outpatient settings, and remote community health posts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl mb-2">Quality Assurance</h3>
              <p className="text-gray-700">
                Comprehensive quality control materials, calibrators, and external quality assessment programs ensuring diagnostic accuracy and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Capabilities Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Essential Diagnostic Services</h3>
              <p className="text-gray-700 mb-4">
                Our diagnostic solutions enable comprehensive testing capabilities across African healthcare facilities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>HIV/AIDS, TB, and malaria diagnostics (priority diseases)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Complete blood count and blood chemistry analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Maternal and child health screening (pregnancy, hemoglobin)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Non-communicable disease monitoring (glucose, lipids, HbA1c)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Microbiology and antimicrobial resistance testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Emergency diagnostics (cardiac markers, electrolytes)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Equipment & Support Services</h3>
              <p className="text-gray-700 mb-4">
                Complete lifecycle support ensuring sustained diagnostic capacity and quality results.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Equipment installation and commissioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Staff training and competency assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Preventive maintenance and calibration programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reagent and consumable supply chain management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Quality control and external quality assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Technical support and troubleshooting (remote & on-site)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Systems Approach */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Strengthening Diagnostic Systems</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond equipment supply, we build sustainable diagnostic capacity
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Laboratory Networks</h4>
              <p className="text-sm text-gray-700">Tiered lab systems from health posts to national reference laboratories</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Digital Connectivity</h4>
              <p className="text-sm text-gray-700">Laboratory information systems and result transmission platforms</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Workforce Training</h4>
              <p className="text-sm text-gray-700">Continuous professional development for laboratory technicians</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Quality Management</h4>
              <p className="text-sm text-gray-700">ISO 15189 accreditation support and quality systems implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Ready to Enhance Your Diagnostic Capabilities?</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Connect with our diagnostic solutions specialists to design the right testing infrastructure for your facility
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
                Contact Technical Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
