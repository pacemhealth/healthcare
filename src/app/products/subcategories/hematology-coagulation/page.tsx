import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function HematologyCoagulationPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Hematology & Coagulation Equipment",
    "description": "Hematology analyzers, hemoglobin meters, coagulation analyzers, ESR testing, blood typing equipment for comprehensive blood testing across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'automated-hematology',
      name: 'Automated Hematology Analyzers',
      products: ['3-part differential analyzers', '5-part differential analyzers', 'Benchtop CBC analyzers', 'Portable hematology systems', 'Pediatric hematology analyzers'],
      icon: '🔬',
      description: 'Complete blood count automation'
    },
    {
      id: 'hemoglobin-meters-poct',
      name: 'Hemoglobin Meters',
      products: ['HemoCue Hb meters', 'Portable hemoglobin analyzers', 'Hb test cuvettes', 'Anemia screening devices', 'Quality control materials'],
      icon: '🩸',
      description: 'Point-of-care hemoglobin'
    },
    {
      id: 'coagulation-analyzers',
      name: 'Coagulation Analyzers',
      products: ['PT/INR analyzers', 'APTT testing systems', 'Fibrinogen analyzers', 'D-dimer testing', 'Full coagulation panels'],
      icon: '⏱️',
      description: 'Hemostasis testing'
    },
    {
      id: 'esr-analyzers',
      name: 'ESR Analyzers',
      products: ['Automated ESR systems', 'Westergren ESR racks', '1-hour ESR', 'ESR tubes & accessories', 'ESR quality controls'],
      icon: '',
      description: 'Erythrocyte sedimentation rate'
    },
    {
      id: 'blood-cell-counters',
      name: 'Blood Cell Counters',
      products: ['WBC manual counters', 'RBC counting systems', 'Platelet counters', 'Reticulocyte counters', 'Hemocytometer slides'],
      icon: '🔢',
      description: 'Manual cell counting'
    },
    {
      id: 'microscopy-hematology',
      name: 'Hematology Microscopy',
      products: ['Blood film preparation', 'Differential counters (manual)', 'Staining racks & jars', 'Immersion oil', 'Blood smear slides'],
      icon: '🔬',
      description: 'Manual blood film review'
    },
    {
      id: 'blood-typing-systems',
      name: 'Blood Typing Systems',
      products: ['ABO/Rh grouping reagents', 'Blood group analyzers', 'Gel card systems', 'Reverse typing antisera', 'Coombs test reagents'],
      icon: '🩸',
      description: 'Blood bank testing'
    },
    {
      id: 'hematology-reagents',
      name: 'Hematology Reagents',
      products: ['CBC reagents (diluent, lyse)', 'Calibrators (3-level)', 'Quality controls', 'Cleaning solutions', 'Anticoagulants (EDTA, citrate)'],
      icon: '🧪',
      description: 'Testing reagents'
    },
    {
      id: 'bone-marrow-analysis',
      name: 'Bone Marrow Analysis',
      products: ['Bone marrow aspiration kits', 'Biopsy needles (Jamshidi)', 'Bone marrow smear slides', 'Special stains', 'Flow cytometry preparation'],
      icon: '🦴',
      description: 'Bone marrow diagnostics'
    },
    {
      id: 'sickle-cell-testing',
      name: 'Sickle Cell & Hemoglobinopathy',
      products: ['Sickle cell rapid tests', 'Hemoglobin electrophoresis', 'HPLC hemoglobin analysis', 'Solubility tests', 'Thalassemia screening'],
      icon: '🧬',
      description: 'Hemoglobin disorder testing'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Hematology & Coagulation Equipment | Blood Testing | Pacem Health"
        description="Hematology and coagulation equipment including automated analyzers, hemoglobin meters, coagulation analyzers, ESR testing. Comprehensive blood testing solutions for African laboratories."
        keywords={[
          'hematology equipment Africa',
          'coagulation analyzers',
          'hemoglobin meters Africa',
          'blood testing equipment',
          'CBC analyzers Africa',
          'ESR testing',
          'hematology analyzers',
          'blood typing equipment Africa'
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
            <Link to="/products/categories/diagnostic-equipment-supplies" className="hover:underline">
              Diagnostic Equipment & Supplies
            </Link>
            <span>/</span>
            <span>Hematology & Coagulation</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Hematology & Coagulation
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Complete blood count analyzers, hemoglobin meters, coagulation testing systems, and hemoglobinopathy diagnostics. From automated hematology analyzers to sickle cell screening, supporting blood disorder diagnosis and monitoring across African healthcare settings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of hematology and coagulation equipment</p>
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
              onClick={() => navigate('/products/categories/diagnostic-equipment-supplies')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Diagnostic Equipment & Supplies
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Hematology in African Healthcare</h3>
              <p className="text-gray-700 mb-4">
                Blood disorders are highly prevalent in Africa, making hematology services critical.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Anemia screening (pregnant women, children)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sickle cell disease diagnosis and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Malaria-related blood changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>HIV/AIDS hematological complications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Nutritional deficiencies (iron, B12, folate)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Coagulation Testing</h3>
              <p className="text-gray-700 mb-4">
                Hemostasis testing for bleeding disorders, anticoagulation monitoring, and surgical preparation.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Warfarin/anticoagulant monitoring (PT/INR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pre-surgical screening (PT, APTT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Bleeding disorder diagnosis (hemophilia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Thrombotic disorder screening (D-dimer)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>DIC monitoring in critical illness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}