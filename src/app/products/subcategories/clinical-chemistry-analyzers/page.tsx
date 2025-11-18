import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function ClinicalChemistryAnalyzersPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Clinical Chemistry Analyzers",
    "description": "Automated chemistry analyzers, biochemistry systems, electrolyte analyzers, immunoassay platforms, hormone testing equipment for clinical laboratories across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'automated-chemistry-analyzers',
      name: 'Automated Chemistry Analyzers',
      products: ['Semi-automated analyzers (100-200 tests/hour)', 'Fully automated systems (200-400 tests/hour)', 'Benchtop analyzers', 'High-throughput analyzers', 'ISE modules (electrolytes)'],
      icon: '🤖',
      description: 'High-volume automated testing'
    },
    {
      id: 'biochemistry-analyzers',
      name: 'Biochemistry Analyzers',
      products: ['Liver function tests (ALT, AST, bilirubin)', 'Kidney function (creatinine, urea, uric acid)', 'Lipid profile (cholesterol, HDL, LDL, TG)', 'Glucose testing', 'Total protein & albumin'],
      icon: '🧪',
      description: 'Comprehensive metabolic panels'
    },
    {
      id: 'electrolyte-analyzers',
      name: 'Electrolyte Analyzers',
      products: ['Na/K/Cl analyzers', 'Ca/Mg testing', 'Ion-selective electrode (ISE) systems', 'pH/blood gas analyzers', 'Portable electrolyte meters'],
      icon: '⚡',
      description: 'Electrolyte and pH measurement'
    },
    {
      id: 'enzyme-immunoassay',
      name: 'Enzyme Immunoassay Systems',
      products: ['ELISA readers (microplate)', 'ELISA washers (automated)', 'Chemiluminescence analyzers', 'Immunofluorescence readers', 'Rapid test readers'],
      icon: '🔬',
      description: 'Immunoassay platforms'
    },
    {
      id: 'hormone-assays',
      name: 'Hormone & Endocrine Testing',
      products: ['Thyroid function (TSH, T3, T4)', 'Reproductive hormones (LH, FSH, progesterone)', 'Insulin & C-peptide', 'Cortisol testing', 'Testosterone & estrogen'],
      icon: '🧬',
      description: 'Endocrine diagnostics'
    },
    {
      id: 'cardiac-biomarkers',
      name: 'Cardiac Biomarker Analyzers',
      products: ['Troponin I/T analyzers', 'CK-MB testing', 'BNP/NT-proBNP', 'Myoglobin assays', 'Multi-marker cardiac panels'],
      icon: '❤️',
      description: 'Cardiac injury markers'
    },
    {
      id: 'tumor-markers',
      name: 'Tumor Marker Testing',
      products: ['PSA (prostate cancer)', 'CEA (colon cancer)', 'CA 125 (ovarian cancer)', 'CA 19-9 (pancreatic)', 'AFP (liver cancer)'],
      icon: '🎗️',
      description: 'Cancer screening markers'
    },
    {
      id: 'therapeutic-drug-monitoring',
      name: 'Therapeutic Drug Monitoring',
      products: ['Antibiotic levels (vancomycin, gentamicin)', 'Anticonvulsant monitoring (phenytoin, valproate)', 'Immunosuppressant levels (tacrolimus)', 'Digoxin monitoring', 'Lithium testing'],
      icon: '💊',
      description: 'Drug level monitoring'
    },
    {
      id: 'chemistry-reagents',
      name: 'Chemistry Reagents & Kits',
      products: ['Test reagent kits (open/closed systems)', 'Calibrators & standards', 'Quality control materials', 'Washing solutions', 'Sample diluents'],
      icon: '🧴',
      description: 'Testing consumables'
    },
    {
      id: 'photometers',
      name: 'Photometers & Colorimeters',
      products: ['Filter photometers', 'Hemoglobin photometers', 'Bilirubin meters', 'Semi-automated colorimeters', 'Portable photometers'],
      icon: '🌈',
      description: 'Light measurement devices'
    },
    {
      id: 'urinalysis-analyzers',
      name: 'Urinalysis Analyzers',
      products: ['Automated urine chemistry analyzers', 'Urine strip readers', 'Urine sediment analyzers', 'Specific gravity refractometers', 'Urine protein quantitation'],
      icon: '🧪',
      description: 'Urine testing systems'
    },
    {
      id: 'chemistry-controls-calibrators',
      name: 'Controls & Calibrators',
      products: ['Multi-level controls (normal, abnormal)', 'Calibration standards', 'Linearity panels', 'External quality assessment materials', 'Proficiency testing kits'],
      icon: '✅',
      description: 'Quality assurance materials'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Clinical Chemistry Analyzers | Biochemistry & Immunoassay Systems | Pacem Health"
        description="Clinical chemistry analyzers including automated chemistry systems, biochemistry analyzers, electrolyte analyzers, enzyme immunoassay systems, hormone testing platforms. Advanced diagnostic technology strengthening laboratory capacity across African healthcare facilities."
        keywords={[
          'clinical chemistry analyzers Africa',
          'biochemistry analyzers',
          'automated chemistry systems',
          'electrolyte analyzers Africa',
          'immunoassay systems',
          'hormone testing equipment',
          'laboratory analyzers Africa',
          'diagnostic equipment Africa'
        ]}
        structuredData={productSchema}
      />
      {/* Breadcrumb Bar */}
      <section className="bg-[#0033A0] text-white py-3">
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
            <span>Clinical Chemistry Analyzers</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Clinical Chemistry Analyzers
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Automated and semi-automated clinical chemistry systems for blood chemistry analysis, electrolyte testing, liver/kidney function, lipid profiles, and comprehensive biochemistry panels. Quality analyzers supporting evidence-based diagnosis across African healthcare laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of clinical chemistry analyzers</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Chemistry Analyzer Selection</h3>
              <p className="text-gray-700 mb-4">
                Choosing the right chemistry analyzer depends on testing volume, test menu, and resource availability.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Test throughput requirements (samples/hour)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Open vs. closed reagent systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sample volume requirements (pediatric vs. adult)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reagent stability in tropical climates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Technical support and service availability</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality Assurance</h3>
              <p className="text-gray-700 mb-4">
                Ensuring accurate and reliable chemistry results through comprehensive QC programs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Daily internal quality control (multi-level)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>External quality assessment participation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular calibration and validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Method comparison and correlation studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Staff competency assessment and training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}