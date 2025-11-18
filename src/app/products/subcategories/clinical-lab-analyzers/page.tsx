import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function ClinicalLabAnalyzersPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Clinical Laboratory Analyzers",
    "description": "Clinical chemistry analyzers, hematology systems, immunoassay platforms, blood gas analyzers, molecular diagnostics for African laboratory settings",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'chemistry-analyzers',
      name: 'Clinical Chemistry Analyzers',
      products: ['Semi-automated chemistry analyzers', 'Fully automated chemistry analyzers', 'Benchtop analyzers (100-400 tests/hour)', 'High-throughput analyzers (800+ tests/hour)', 'Integrated workstations'],
      icon: '🧪',
      description: 'Biochemistry testing platforms'
    },
    {
      id: 'hematology-analyzers',
      name: 'Hematology Analyzers',
      products: ['3-part differential analyzers', '5-part differential analyzers', 'CBC analyzers', 'Reticulocyte counters', 'Automated slide stainers'],
      icon: '🩸',
      description: 'Blood count analysis'
    },
    {
      id: 'immunoassay-systems',
      name: 'Immunoassay Systems',
      products: ['ELISA readers & washers', 'Chemiluminescence analyzers', 'Immunofluorescence analyzers', 'Rapid test readers', 'Automated immunoassay platforms'],
      icon: '💉',
      description: 'Antibody & antigen testing'
    },
    {
      id: 'blood-gas-analyzers',
      name: 'Blood Gas Analyzers',
      products: ['Benchtop blood gas analyzers', 'Portable blood gas systems', 'Point-of-care blood gas', 'Electrolyte analyzers', 'Co-oximetry systems'],
      icon: '🫁',
      description: 'Critical care testing'
    },
    {
      id: 'coagulation-analyzers',
      name: 'Coagulation Analyzers',
      products: ['Semi-automated coagulometers', 'Fully automated coag analyzers', 'PT/INR testing systems', 'Multi-parameter coagulation', 'Point-of-care INR meters'],
      icon: '🩹',
      description: 'Hemostasis testing'
    },
    {
      id: 'molecular-diagnostics',
      name: 'Molecular Diagnostic Systems',
      products: ['PCR thermal cyclers', 'Real-time PCR systems', 'GeneXpert platforms', 'Nucleic acid extraction', 'HIV/TB molecular testing'],
      icon: '🧬',
      description: 'DNA/RNA analysis'
    },
    {
      id: 'urinalysis-analyzers',
      name: 'Urinalysis Analyzers',
      products: ['Automated urine chemistry analyzers', 'Urine strip readers', 'Urine sediment analyzers', 'Semi-automated urinalysis', 'Microscopy-based systems'],
      icon: '🧫',
      description: 'Urine analysis systems'
    },
    {
      id: 'hba1c-analyzers',
      name: 'HbA1c & Diabetes Testing',
      products: ['HbA1c analyzers (HPLC)', 'Point-of-care HbA1c', 'Immunoassay HbA1c systems', 'Glucose analyzers', 'Integrated diabetes platforms'],
      icon: '🩺',
      description: 'Diabetes monitoring'
    },
    {
      id: 'electrolyte-analyzers',
      name: 'Electrolyte Analyzers',
      products: ['ISE electrolyte analyzers', 'Na/K/Cl analyzers', 'Critical care electrolytes', 'Portable electrolyte meters', 'Integrated platforms'],
      icon: '⚡',
      description: 'Electrolyte testing'
    },
    {
      id: 'blood-bank-systems',
      name: 'Blood Bank Equipment',
      products: ['Blood typing systems', 'Cross-match analyzers', 'Antibody screening systems', 'Blood grouping cards', 'Gel card systems'],
      icon: '🩸',
      description: 'Transfusion medicine'
    },
    {
      id: 'cd4-analyzers',
      name: 'CD4 & Flow Cytometry',
      products: ['CD4 counting systems', 'Flow cytometers', 'Point-of-care CD4', 'Immunophenotyping platforms', 'HIV monitoring systems'],
      icon: '🔬',
      description: 'Immune cell analysis'
    },
    {
      id: 'microbiology-systems',
      name: 'Automated Microbiology Systems',
      products: ['Blood culture systems', 'Antimicrobial susceptibility testing', 'Bacterial identification systems', 'TB culture systems (MGIT)', 'Automated incubators'],
      icon: '🦠',
      description: 'Bacterial culture & ID'
    },
    {
      id: 'rapid-diagnostic-readers',
      name: 'Rapid Test Readers',
      products: ['Lateral flow readers', 'Malaria RDT readers', 'HIV rapid test readers', 'Multi-disease RDT platforms', 'Mobile-connected readers'],
      icon: '📱',
      description: 'RDT quantification'
    },
    {
      id: 'quality-control-systems',
      name: 'Quality Control & EQA',
      products: ['QC materials (chemistry, hematology)', 'Proficiency testing programs', 'Control sera', 'Calibration materials', 'Data management software'],
      icon: '✅',
      description: 'Laboratory quality assurance'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Clinical Laboratory Analyzers | Chemistry, Hematology & Molecular Testing | Pacem Health"
        description="Comprehensive clinical laboratory analyzers including chemistry, hematology, immunoassay, blood gas, coagulation, molecular diagnostics, specialized testing. Quality instrumentation for accurate disease diagnosis, treatment monitoring across African healthcare laboratories."
        keywords={[
          'clinical laboratory analyzers Africa',
          'chemistry analyzers Africa',
          'hematology analyzers',
          'immunoassay systems Africa',
          'blood gas analyzers',
          'molecular diagnostics Africa',
          'lab equipment Africa',
          'diagnostic analyzers'
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
            <span>Clinical Laboratory Analyzers</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Clinical Laboratory Analyzers
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive laboratory analyzer platforms including chemistry, hematology, immunoassay, blood gas, coagulation, molecular diagnostics, and specialized testing systems. Quality instrumentation enabling accurate disease diagnosis, treatment monitoring, and surveillance across African healthcare laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of clinical laboratory analyzers</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Analyzer Selection Criteria</h3>
              <p className="text-gray-700 mb-4">
                Choosing appropriate laboratory analyzers depends on test menu, volume, and technical capacity.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Testing volume (samples per day)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Test menu requirements (disease burden)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reagent open vs. closed systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Power requirements and stability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Maintenance and technical support availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Total cost of ownership (reagents, service)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Laboratory Quality Management</h3>
              <p className="text-gray-700 mb-4">
                Quality systems ensure accurate, reliable laboratory results for patient care.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Daily quality control (QC) testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>External quality assessment (EQA/PT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular calibration and verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Equipment maintenance and validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Staff competency assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ISO 15189 accreditation pathway</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}