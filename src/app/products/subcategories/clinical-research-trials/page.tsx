import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function ClinicalResearchTrialsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Clinical Research & Trial Equipment",
    "description": "GCP-compliant laboratory equipment, specimen biobanking, clinical trial pharmacy, data collection systems, safety monitoring for clinical trials across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'gcp-compliant-equipment',
      name: 'GCP-Compliant Laboratory Equipment',
      products: ['Validated analytical instruments', 'Temperature-monitored storage', 'Sample processing equipment', 'Quality control systems', 'Calibration & qualification'],
      icon: '✅',
      description: 'Regulatory compliance'
    },
    {
      id: 'specimen-biobanking',
      name: 'Specimen Biobanking',
      products: ['Ultra-low freezers (-80°C)', 'Liquid nitrogen storage', 'Sample tracking (LIMS)', 'Barcode labeling systems', 'Chain-of-custody management'],
      icon: '❄️',
      description: 'Sample preservation'
    },
    {
      id: 'clinical-trial-pharmacy',
      name: 'Clinical Trial Pharmacy',
      products: ['IMP storage (temperature-controlled)', 'Dispensing systems', 'Accountability tracking', 'Randomization equipment', 'Drug destruction documentation'],
      icon: '💊',
      description: 'Investigational products'
    },
    {
      id: 'vital-signs-monitoring',
      name: 'Vital Signs & Monitoring',
      products: ['Clinical-grade BP monitors', 'ECG machines', 'Pulse oximeters', 'Holter monitors', 'Ambulatory BP monitors'],
      icon: '📊',
      description: 'Patient monitoring'
    },
    {
      id: 'point-of-care-trials',
      name: 'Point-of-Care Trial Equipment',
      products: ['Hemoglobin analyzers', 'Blood glucose meters', 'Rapid diagnostic tests', 'Pregnancy tests', 'Urine analyzers'],
      icon: '🔬',
      description: 'Bedside testing'
    },
    {
      id: 'data-collection-systems',
      name: 'Data Collection & EDC',
      products: ['Electronic Data Capture (EDC)', 'Tablets for data collection', 'eCRF systems', 'Source document templates', 'Data management software'],
      icon: '💻',
      description: 'Electronic data'
    },
    {
      id: 'safety-monitoring',
      name: 'Safety Monitoring Equipment',
      products: ['Adverse event reporting systems', 'Pharmacovigilance software', 'Safety labs (hematology, chemistry)', 'Drug interaction screening', 'Toxicity monitoring'],
      icon: '⚠️',
      description: 'Safety surveillance'
    },
    {
      id: 'imaging-trials',
      name: 'Clinical Trial Imaging',
      products: ['Ultrasound (trial-grade)', 'Digital X-ray systems', 'ECG interpretation software', 'Image archiving (PACS)', 'Central reading facilities'],
      icon: '📷',
      description: 'Diagnostic imaging'
    },
    {
      id: 'mobile-trial-units',
      name: 'Mobile Clinical Trial Units',
      products: ['Mobile research vehicles', 'Portable laboratories', 'Field-deployable equipment', 'Solar power systems', 'Satellite connectivity'],
      icon: '🚐',
      description: 'Community-based trials'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Clinical Research & Trial Equipment | GCP Laboratory & Biobanking | Pacem Health"
        description="GCP-compliant clinical trial infrastructure including biobanking systems, trial pharmacy equipment, data collection platforms, safety monitoring, specimen management. Quality research equipment supporting pharmaceutical trials, vaccine studies across African clinical trial sites."
        keywords={[
          'clinical trial equipment Africa',
          'GCP compliant laboratory',
          'biobanking systems Africa',
          'clinical research equipment',
          'trial pharmacy equipment',
          'EDC systems Africa',
          'specimen management',
          'research trials Africa'
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
            <Link to="/products/categories/research-development-equipment" className="hover:underline">
              Research & Development Equipment
            </Link>
            <span>/</span>
            <span>Clinical Research & Trials Equipment</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Clinical Research & Trials Equipment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              GCP-compliant clinical trial infrastructure including biobanking systems, trial pharmacy equipment, data collection platforms, safety monitoring, and specimen management. Quality research equipment supporting pharmaceutical trials, vaccine studies, device trials, and implementation science research across African clinical trial sites and research networks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of clinical research and trials equipment</p>
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
              onClick={() => navigate('/products/categories/research-development-equipment')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Research & Development Equipment
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Clinical Trials in Africa</h3>
              <p className="text-gray-700 mb-4">
                Growing clinical trial infrastructure enables local evidence generation and participation in global research.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Increasing multinational pharmaceutical trials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Vaccine efficacy studies (malaria, TB, HIV)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Implementation science research</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Device trials (diagnostics, medical devices)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Investigator-initiated trials (local priorities)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community-based research</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">GCP Compliance & Quality</h3>
              <p className="text-gray-700 mb-4">
                High-quality clinical trial infrastructure requires adherence to international standards.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Good Clinical Practice (GCP) training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Ethics committee/IRB approval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regulatory authority oversight</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Standard Operating Procedures (SOPs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Data integrity and ALCOA principles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sponsor/CRO monitoring and audits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}