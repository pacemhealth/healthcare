import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function CentrifugesSampleProcessingPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Centrifuges & Sample Processing",
    "description": "Comprehensive centrifuges and sample processing equipment including benchtop centrifuges, microcentrifuges, blood bank centrifuges, hematocrit centrifuges, cell washers for African laboratories",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'benchtop-centrifuges',
      name: 'Benchtop Clinical Centrifuges',
      products: ['General purpose centrifuges (3000-6000 rpm)', 'High-speed centrifuges (10,000+ rpm)', 'Refrigerated centrifuges', 'Micro-hematocrit centrifuges', 'Swing-out rotor centrifuges'],
      icon: '🌀',
      description: 'Standard laboratory centrifugation'
    },
    {
      id: 'microcentrifuges',
      name: 'Microcentrifuges',
      products: ['Mini centrifuges (6000-13,000 rpm)', 'Micro-tube centrifuges', 'PCR tube centrifuges', 'Refrigerated microcentrifuges', 'Portable microcentrifuges'],
      icon: '🧪',
      description: 'Small volume processing'
    },
    {
      id: 'blood-bank-centrifuges',
      name: 'Blood Bank Centrifuges',
      products: ['Blood bag centrifuges', 'Platelet-rich plasma (PRP) centrifuges', 'Serology centrifuges', 'Cross-match centrifuges', 'Refrigerated blood bank models'],
      icon: '🩸',
      description: 'Transfusion medicine'
    },
    {
      id: 'hematocrit-centrifuges',
      name: 'Hematocrit Centrifuges',
      products: ['Micro-hematocrit centrifuges', 'Capillary tube centrifuges', '6-12 position rotors', 'Battery-operated models', 'Solar-powered options'],
      icon: '💉',
      description: 'PCV determination'
    },
    {
      id: 'urine-sediment',
      name: 'Urine Sediment Centrifuges',
      products: ['Urine centrifuges (swing-out)', '12-16 position rotors', 'Conical tube adapters', 'Low-speed models (1500-3000 rpm)', 'Timer-controlled'],
      icon: '🧫',
      description: 'Urinalysis processing'
    },
    {
      id: 'cell-washers',
      name: 'Cell Washers',
      products: ['Automated cell washers', 'Blood bank cell washing', 'ELISA plate washers', 'Microtiter plate washers', 'Multi-channel washers'],
      icon: '🧽',
      description: 'Automated washing systems'
    },
    {
      id: 'centrifuge-rotors',
      name: 'Centrifuge Rotors & Adapters',
      products: ['Fixed-angle rotors', 'Swing-out rotors', 'Tube adapters (various sizes)', 'Microplate rotors', 'Blood bag rotors'],
      icon: '🔄',
      description: 'Rotor accessories'
    },
    {
      id: 'centrifuge-tubes',
      name: 'Centrifuge Tubes & Consumables',
      products: ['Conical centrifuge tubes (15ml, 50ml)', 'Microcentrifuge tubes (1.5ml, 2ml)', 'Blood collection tubes (evacuated)', 'Capillary tubes (hematocrit)', 'Tube racks'],
      icon: '🧴',
      description: 'Centrifuge consumables'
    },
    {
      id: 'sample-mixers',
      name: 'Vortex Mixers & Shakers',
      products: ['Vortex mixers', 'Orbital shakers', 'Roller mixers (blood bank)', 'Tube rockers', 'Multi-tube vortexers'],
      icon: '💫',
      description: 'Sample mixing equipment'
    },
    {
      id: 'homogenizers',
      name: 'Homogenizers & Tissue Processors',
      products: ['Tissue homogenizers', 'Bead mill homogenizers', 'Ultrasonic homogenizers', 'Mortar & pestle sets', 'Sample grinding mills'],
      icon: '⚙️',
      description: 'Sample preparation'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Centrifuges & Sample Processing | Benchtop, Microcentrifuges & Blood Bank | Pacem Health"
        description="Comprehensive sample processing equipment including clinical centrifuges, microcentrifuges, blood bank centrifuges, hematocrit centrifuges, cell washers, vortex mixers. Quality processing equipment enabling sample separation, preparation, analysis across African healthcare laboratories."
        keywords={[
          'centrifuges Africa',
          'laboratory centrifuges',
          'microcentrifuges Africa',
          'blood bank centrifuges',
          'hematocrit centrifuges',
          'sample processing equipment',
          'cell washers Africa',
          'clinical centrifuges Africa'
        ]}
        structuredData={productSchema}
      />
      <section className="bg-[#4B2991] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/division1" className="hover:underline">Essential Healthcare Products</Link>
            <span>/</span>
            <Link to="/products/categories/laboratory-equipment-instrumentation" className="hover:underline">
              Laboratory Equipment & Instrumentation
            </Link>
            <span>/</span>
            <span>Centrifuges & Sample Processing</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Centrifuges & Sample Processing
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive sample processing equipment including clinical centrifuges, microcentrifuges, blood bank centrifuges, hematocrit centrifuges, cell washers, and vortex mixers. Quality processing equipment enabling sample separation, preparation, and analysis across African healthcare laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of centrifuges and sample processing equipment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{group.description}</p>
                <div className="space-y-2">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-2 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/laboratory-equipment-instrumentation')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Laboratory Equipment & Instrumentation
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Centrifuge Safety</h3>
              <p className="text-gray-700 mb-4">
                Proper centrifuge operation prevents accidents and specimen integrity issues.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Balanced loading (opposite tubes equal weight)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Properly closed lids before operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Never open lid while rotor spinning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Inspect rotors for cracks or damage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Clean spills immediately (biohazard risk)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular maintenance and calibration</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Sample Processing Best Practices</h3>
              <p className="text-gray-700 mb-4">
                Quality sample processing ensures accurate laboratory results.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Appropriate centrifugation speeds and times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Use correct tube types for application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Avoid hemolysis (gentle handling)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Temperature control (refrigerated when needed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper labeling and tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Standard operating procedures (SOPs)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}