import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function ClinicalChemistryReagentsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Clinical Chemistry Reagents",
    "description": "Comprehensive clinical chemistry reagents for liver function, renal function, lipid profiles, glucose metabolism, cardiac markers across African laboratory settings",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'liver-function-reagents',
      name: 'Liver Function Test Reagents',
      products: ['ALT (SGPT) reagents', 'AST (SGOT) reagents', 'Alkaline phosphatase (ALP)', 'Total & direct bilirubin', 'Gamma-GT (GGT) reagents'],
      icon: '🫀',
      description: 'Hepatic panel testing'
    },
    {
      id: 'renal-function-reagents',
      name: 'Renal Function Test Reagents',
      products: ['Creatinine reagents (Jaffe, enzymatic)', 'Urea/BUN reagents', 'Uric acid reagents', 'Electrolyte reagents (Na, K, Cl)', 'Microalbumin reagents'],
      icon: '🫘',
      description: 'Kidney function testing'
    },
    {
      id: 'lipid-profile-reagents',
      name: 'Lipid Profile Reagents',
      products: ['Total cholesterol reagents', 'HDL cholesterol reagents', 'LDL cholesterol (direct)', 'Triglyceride reagents', 'Non-HDL cholesterol'],
      icon: '💧',
      description: 'Cardiovascular risk assessment'
    },
    {
      id: 'glucose-metabolism',
      name: 'Glucose & Metabolic Reagents',
      products: ['Glucose reagents (GOD-POD, Hexokinase)', 'HbA1c reagents', 'Fructosamine reagents', 'Lactate reagents', 'Ketone body reagents'],
      icon: '🍬',
      description: 'Diabetes & metabolic testing'
    },
    {
      id: 'cardiac-markers',
      name: 'Cardiac Marker Reagents',
      products: ['Troponin I/T assays', 'CK-MB reagents', 'Creatine kinase (CK) total', 'LDH reagents', 'Myoglobin assays'],
      icon: '❤️',
      description: 'Cardiac injury testing'
    },
    {
      id: 'protein-reagents',
      name: 'Protein & Electrophoresis Reagents',
      products: ['Total protein reagents', 'Albumin reagents (BCG, BCP)', 'Globulin calculation', 'Protein electrophoresis', 'C-reactive protein (CRP)'],
      icon: '🧬',
      description: 'Protein analysis'
    },
    {
      id: 'enzyme-reagents',
      name: 'Enzyme Reagents',
      products: ['Amylase reagents', 'Lipase reagents', 'Acid phosphatase', 'Cholinesterase', 'Adenosine deaminase (ADA)'],
      icon: '⚗️',
      description: 'Enzyme activity testing'
    },
    {
      id: 'electrolyte-reagents',
      name: 'Electrolyte & Mineral Reagents',
      products: ['Sodium (Na) reagents', 'Potassium (K) reagents', 'Chloride (Cl) reagents', 'Calcium reagents', 'Phosphorus reagents', 'Magnesium reagents'],
      icon: '⚡',
      description: 'Electrolyte balance testing'
    },
    {
      id: 'chemistry-calibrators',
      name: 'Chemistry Calibrators & Standards',
      products: ['Multi-analyte calibrators', 'Single-analyte calibrators', 'Linearity sets', 'ISE calibrators', 'Certified reference materials'],
      icon: '📐',
      description: 'Analyzer calibration'
    },
    {
      id: 'chemistry-controls',
      name: 'Chemistry Quality Controls',
      products: ['Normal level controls', 'Abnormal level controls', 'Multi-level QC sets', 'Third-party controls', 'Specialized QC materials'],
      icon: '✅',
      description: 'Quality assurance'
    },
    {
      id: 'ise-reagents',
      name: 'ISE Reagents & Consumables',
      products: ['ISE reference solutions', 'ISE buffer solutions', 'Electrode fill solutions', 'ISE cleaning solutions', 'ISE membranes & modules'],
      icon: '🔬',
      description: 'Ion-selective electrode supplies'
    },
    {
      id: 'chemistry-consumables',
      name: 'Chemistry Analyzer Consumables',
      products: ['Cuvettes & reaction vessels', 'Sample cups', 'Reagent bottles', 'Probe cleaning solution', 'System cleaning solutions'],
      icon: '🧪',
      description: 'Analyzer consumables'
    },
    {
      id: 'specialty-chemistry',
      name: 'Specialty Chemistry Reagents',
      products: ['Therapeutic drug monitoring', 'Toxicology screening reagents', 'Hemoglobin variants', 'Iron studies (Fe, TIBC, ferritin)', 'Vitamin assays'],
      icon: '💊',
      description: 'Specialized testing'
    },
    {
      id: 'chemistry-diluents',
      name: 'Diluents & System Solutions',
      products: ['Sample diluent', 'Reagent diluent', 'Wash solution', 'Deionized water (reagent-grade)', 'System priming solutions'],
      icon: '💧',
      description: 'System support solutions'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Clinical Chemistry Reagents | Liver, Renal & Lipid Testing | Pacem Health"
        description="Comprehensive clinical chemistry reagents including liver function, renal function, lipid profile, glucose metabolism, cardiac markers, electrolytes, quality controls. Quality-assured reagents for accurate NCD, infectious disease and metabolic testing across African laboratories."
        keywords={[
          'clinical chemistry reagents Africa',
          'liver function test reagents',
          'renal function reagents',
          'lipid profile reagents Africa',
          'glucose reagents Africa',
          'cardiac marker reagents',
          'chemistry quality controls',
          'laboratory reagents Africa'
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
            <Link to="/products/categories/laboratory-reagents-chemicals" className="hover:underline">
              Laboratory Reagents & Chemicals
            </Link>
            <span>/</span>
            <span>Clinical Chemistry Reagents</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Clinical Chemistry Reagents
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive biochemistry testing reagents including liver function, renal function, lipid profile, glucose metabolism, cardiac markers, electrolytes, and quality control materials. Quality-assured reagents supporting accurate clinical chemistry testing for NCDs, infectious diseases, and metabolic disorders across African healthcare laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of clinical chemistry reagents</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Chemistry Testing in Africa</h3>
              <p className="text-gray-700 mb-4">
                Clinical chemistry is essential for NCD management, infectious disease monitoring, and metabolic screening.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Diabetes management (glucose, HbA1c)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Hypertension & CVD risk (lipids, renal function)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>HIV/TB treatment monitoring (liver, renal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Malnutrition assessment (protein, albumin)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sickle cell crisis management (electrolytes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pre-operative screening (renal, liver, glucose)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Reagent Quality Assurance</h3>
              <p className="text-gray-700 mb-4">
                Proper reagent handling and quality control ensure accurate chemistry results.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Storage at recommended temperature (2-8°C)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Lot-to-lot verification when changing reagents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Daily quality control (normal & abnormal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Calibration per manufacturer recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Monitoring reagent expiration dates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Participation in external quality assessment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}