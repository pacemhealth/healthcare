import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function HematologyCoagulationReagentsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Hematology & Coagulation Reagents",
    "description": "Hematology analyzer reagents, blood stains, coagulation reagents, QC materials for blood testing across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'hematology-analyzer-reagents',
      name: 'Hematology Analyzer Reagents',
      products: ['Diluent solutions', 'Lyse reagents', 'Rinse/cleaner solutions', 'RBC/WBC reagents', 'Platelet reagents'],
      icon: '🩸',
      description: 'CBC analyzer reagents'
    },
    {
      id: 'blood-stains',
      name: 'Blood Smear Stains',
      products: ['Wright-Giemsa stain', 'Leishman stain', 'Field stain (rapid)', 'May-Grünwald stain', 'Automated stainers'],
      icon: '🎨',
      description: 'Manual differential staining'
    },
    {
      id: 'hemoglobin-reagents',
      name: 'Hemoglobin & PCV Reagents',
      products: ['Drabkin reagent (cyanmethemoglobin)', 'Hemoglobin standards', 'Micro-hematocrit tubes', 'Capillary blood collection', 'Hemoglobin meters'],
      icon: '💉',
      description: 'Anemia screening'
    },
    {
      id: 'reticulocyte-reagents',
      name: 'Reticulocyte Stains',
      products: ['New methylene blue', 'Brilliant cresyl blue', 'Automated reticulocyte reagents', 'Miller disc reticles', 'Reticulocyte controls'],
      icon: '🔵',
      description: 'Bone marrow assessment'
    },
    {
      id: 'coagulation-reagents',
      name: 'Coagulation Reagents',
      products: ['PT reagents (thromboplastin)', 'APTT reagents', 'Thrombin time reagents', 'Fibrinogen reagents', 'Factor assay reagents'],
      icon: '🩹',
      description: 'Hemostasis testing'
    },
    {
      id: 'pt-inr-reagents',
      name: 'PT/INR Testing',
      products: ['PT/INR reagents (various ISI)', 'Coagulation controls', 'PT/INR meters (POC)', 'Warfarin monitoring', 'ISI-calibrated thromboplastins'],
      icon: '⏱️',
      description: 'Anticoagulation monitoring'
    },
    {
      id: 'd-dimer-reagents',
      name: 'D-Dimer & FDP Reagents',
      products: ['D-dimer assays (latex agglutination)', 'D-dimer ELISA kits', 'Fibrin degradation products (FDP)', 'Point-of-care D-dimer', 'VTE screening'],
      icon: '🧬',
      description: 'Thrombosis testing'
    },
    {
      id: 'esr-reagents',
      name: 'ESR & Inflammation Markers',
      products: ['Westergren ESR tubes', 'Wintrobe ESR tubes', 'ESR racks & stands', 'Automated ESR analyzers', 'Sodium citrate solution'],
      icon: '📏',
      description: 'Inflammation screening'
    },
    {
      id: 'hematology-controls',
      name: 'Hematology Quality Controls',
      products: ['CBC controls (3-level)', 'Reticulocyte controls', 'Coagulation controls (normal, abnormal)', 'Third-party hematology QC', 'Hematology calibrators'],
      icon: '✅',
      description: 'Hematology QA'
    },
    {
      id: 'special-stains',
      name: 'Special Hematology Stains',
      products: ['Peroxidase stain', 'PAS stain', 'Sudan black B', 'Acid phosphatase', 'Non-specific esterase'],
      icon: '🔬',
      description: 'Leukemia/lymphoma workup'
    },
    {
      id: 'hemoglobin-electrophoresis',
      name: 'Hemoglobin Electrophoresis',
      products: ['Cellulose acetate membranes', 'Agarose gel systems', 'Hemoglobin controls', 'HPLC reagents (Hb variants)', 'Sickle cell screening kits'],
      icon: '⚡',
      description: 'Hemoglobinopathy testing'
    },
    {
      id: 'g6pd-screening',
      name: 'G6PD Screening',
      products: ['Fluorescent spot test', 'G6PD quantitative kits', 'Methemoglobin reduction test', 'G6PD controls', 'Rapid G6PD tests'],
      icon: '🧪',
      description: 'Enzyme deficiency screening'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Hematology & Coagulation Reagents | Blood Testing Reagents | Pacem Health"
        description="Hematology and coagulation reagents including CBC analyzer reagents, blood stains, coagulation reagents, QC materials. Supporting accurate blood testing across African laboratories."
        keywords={[
          'hematology reagents Africa',
          'coagulation reagents',
          'blood stains Africa',
          'CBC reagents',
          'blood testing reagents',
          'hematology QC materials',
          'laboratory reagents Africa',
          'blood analyzer reagents'
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
            <Link to="/products/categories/laboratory-reagents-chemicals" className="hover:underline">
              Laboratory Reagents & Chemicals
            </Link>
            <span>/</span>
            <span>Hematology & Coagulation Reagents</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Hematology & Coagulation Reagents
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive blood testing reagents including hematology analyzer reagents, blood stains, coagulation reagents, PT/INR testing, hemoglobin electrophoresis, and quality controls. Quality-assured reagents supporting anemia screening, malaria diagnosis, hemoglobinopathies, and anticoagulation monitoring across African healthcare laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of hematology and coagulation reagents</p>
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
              onClick={() => navigate('/products/categories/laboratory-reagents-chemicals')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Laboratory Reagents & Chemicals
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
                Hematology testing is critical for anemia, malaria, sickle cell disease, and infection diagnosis.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Anemia screening (high prevalence in Africa)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Malaria parasitemia assessment (thick/thin films)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sickle cell disease diagnosis & management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>HIV/TB treatment monitoring (WBC, neutropenia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Leukemia & lymphoma screening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pre-operative blood counts</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Manual vs. Automated Hematology</h3>
              <p className="text-gray-700 mb-4">
                Both manual and automated methods remain essential in African laboratories.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Automated analyzers (high-volume, accuracy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Manual methods (backup, low-volume sites)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Blood film review (abnormal cell morphology)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Malaria microscopy (gold standard)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Quality control for both methods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Competency in manual differential counts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}