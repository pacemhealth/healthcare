import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function PointOfCareTestingPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Point-of-Care Testing",
    "description": "Rapid HIV tests, malaria RDTs, glucose monitors, pregnancy tests for immediate diagnostic results across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'rapid-hiv-tests',
      name: 'Rapid HIV Testing Kits',
      products: ['HIV 1/2 rapid test cassettes', 'HIV confirmatory tests (tie-breaker)', 'HIV self-testing kits', 'Oral fluid HIV tests', 'Whole blood/serum/plasma tests'],
      icon: '🩸',
      description: 'Point-of-care HIV diagnosis'
    },
    {
      id: 'malaria-rdts',
      name: 'Malaria Rapid Diagnostic Tests',
      products: ['Pf/Pan malaria combo tests', 'Plasmodium falciparum RDTs', 'Malaria Pf/Pv combination tests', 'High-sensitivity malaria tests', 'Pediatric malaria cassettes'],
      icon: '🦟',
      description: 'Rapid malaria detection'
    },
    {
      id: 'blood-glucose-monitoring',
      name: 'Blood Glucose Monitoring',
      products: ['Blood glucose meters (various models)', 'Glucose test strips', 'Lancing devices & lancets', 'Control solutions', 'Continuous glucose monitors (CGM)'],
      icon: '💉',
      description: 'Diabetes monitoring devices'
    },
    {
      id: 'pregnancy-tests',
      name: 'Pregnancy & Fertility Tests',
      products: ['hCG pregnancy test cassettes', 'Urine pregnancy test strips', 'Serum hCG rapid tests', 'Ovulation prediction kits', 'Early detection pregnancy tests'],
      icon: '👶',
      description: 'Reproductive health testing'
    },
    {
      id: 'hemoglobin-meters',
      name: 'Hemoglobin Meters & Anemia Testing',
      products: ['Portable hemoglobin meters', 'Hemoglobin test strips', 'HemoCue systems', 'Point-of-care anemia screening', 'Pediatric hemoglobin testing'],
      icon: '🩸',
      description: 'Anemia detection devices'
    },
    {
      id: 'tb-diagnostics',
      name: 'TB Diagnostic Tests',
      products: ['TB LAM (urine lipoarabinomannan)', 'TB-IGRA blood tests', 'GeneXpert MTB/RIF cartridges', 'TB sputum collection kits', 'Rapid TB antigen tests'],
      icon: '🫁',
      description: 'Tuberculosis rapid testing'
    },
    {
      id: 'hepatitis-testing',
      name: 'Hepatitis Rapid Tests',
      products: ['HBsAg rapid test kits', 'Anti-HCV antibody tests', 'Hepatitis B/C combo tests', 'Hepatitis B viral load', 'HAV IgM rapid tests'],
      icon: '🧬',
      description: 'Viral hepatitis screening'
    },
    {
      id: 'cardiac-markers',
      name: 'Cardiac Marker Tests',
      products: ['Troponin I rapid tests', 'CK-MB test cassettes', 'Myoglobin rapid tests', 'Multi-marker cardiac panels', 'BNP/NT-proBNP tests'],
      icon: '❤️',
      description: 'Acute cardiac diagnostics'
    },
    {
      id: 'infectious-disease-panels',
      name: 'Infectious Disease Rapid Tests',
      products: ['Dengue NS1/IgG/IgM combo', 'COVID-19 antigen tests', 'Influenza A/B rapid tests', 'Strep A throat swabs', 'Respiratory pathogen panels'],
      icon: '🦠',
      description: 'Multi-pathogen detection'
    },
    {
      id: 'blood-typing',
      name: 'Blood Typing & Grouping',
      products: ['ABO/Rh blood typing cards', 'Eldon blood typing kits', 'Rapid blood group test cassettes', 'Bedside crossmatch tests', 'Emergency blood typing kits'],
      icon: '💉',
      description: 'Point-of-care blood grouping'
    },
    {
      id: 'urinalysis-poc',
      name: 'Point-of-Care Urinalysis',
      products: ['Urine dipstick strips (10-parameter)', 'Urine pregnancy + protein combos', 'UTI rapid screening', 'Microalbumin test strips', 'Urine readers (automated)'],
      icon: '🧪',
      description: 'Rapid urine testing'
    },
    {
      id: 'coagulation-poc',
      name: 'Point-of-Care Coagulation',
      products: ['PT/INR portable monitors', 'CoaguChek systems', 'Warfarin monitoring devices', 'Coagulation test strips', 'Bleeding time assessment'],
      icon: '🩸',
      description: 'Bedside coagulation testing'
    },
    {
      id: 'electrolytes-blood-gas',
      name: 'Electrolytes & Blood Gas',
      products: ['Portable blood gas analyzers', 'i-STAT handheld analyzer', 'Electrolyte test cartridges', 'Lactate meters', 'pH/blood gas cartridges'],
      icon: '⚡',
      description: 'Critical care diagnostics'
    },
    {
      id: 'std-screening',
      name: 'STI/STD Rapid Screening',
      products: ['Syphilis rapid tests (RPR/TPPA)', 'Chlamydia rapid tests', 'Gonorrhea detection kits', 'Trichomonas rapid tests', 'Multi-STI screening panels'],
      icon: '🔬',
      description: 'Sexual health diagnostics'
    },
    {
      id: 'fecal-occult-blood',
      name: 'Fecal Occult Blood Testing',
      products: ['FOB rapid test cassettes', 'Immunochemical FOB tests (FIT)', 'Colorectal cancer screening', 'Stool sample collection kits', 'Multi-sample FOB cards'],
      icon: '🩺',
      description: 'GI bleeding detection'
    },
    {
      id: 'drug-screening-poc',
      name: 'Drug of Abuse Screening',
      products: ['Multi-drug urine test panels', 'Alcohol breath analyzers', 'Marijuana (THC) rapid tests', 'Opioid screening cassettes', 'Amphetamine detection kits'],
      icon: '💊',
      description: 'Substance abuse testing'
    },
    {
      id: 'hba1c-poc',
      name: 'HbA1c Point-of-Care',
      products: ['HbA1c portable analyzers', 'A1C test cartridges', 'Diabetes monitoring stations', 'HbA1c quality controls', 'Fingerstick HbA1c systems'],
      icon: '📊',
      description: 'Glycemic control monitoring'
    },
    {
      id: 'lipid-profile-poc',
      name: 'Lipid Profile Testing',
      products: ['Cholesterol meters (total)', 'Multi-lipid analyzers (HDL/LDL/TG)', 'Lipid test strips', 'CardioChek systems', 'Portable lipid panels'],
      icon: '🫀',
      description: 'Cardiovascular risk screening'
    },
    {
      id: 'poc-readers-accessories',
      name: 'POC Readers & Accessories',
      products: ['Lateral flow test readers', 'Barcode scanners (lot tracking)', 'Temperature monitoring devices', 'Quality control materials', 'Test strip storage containers'],
      icon: '📱',
      description: 'Supporting equipment'
    },
    {
      id: 'specimen-collection-poc',
      name: 'POC Specimen Collection',
      products: ['Capillary blood collection tubes', 'Lancets & lancing devices', 'Alcohol swabs & gauze', 'Specimen transport bags', 'Safety sharps containers'],
      icon: '💉',
      description: 'Sample collection supplies'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Point-of-Care Testing | Rapid Diagnostic Tests | Pacem Health"
        description="Point-of-care testing including rapid HIV tests, malaria RDTs, glucose monitors. Immediate diagnostic results for African healthcare facilities."
        keywords={[
          'point-of-care testing Africa',
          'rapid diagnostic tests',
          'rapid HIV tests',
          'malaria RDTs',
          'POC testing',
          'rapid diagnostics',
          'bedside testing',
          'immediate diagnostics'
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
            <span>Point-of-Care Testing</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Point-of-Care Testing
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Rapid diagnostic tests enabling immediate clinical decisions at the bedside, in outpatient clinics, and remote community health settings. Comprehensive POC solutions including HIV tests, malaria RDTs, glucose meters, pregnancy tests, TB diagnostics, and critical care analyzers for African healthcare delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of point-of-care testing devices</p>
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

          {/* Back Button */}
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

      {/* Information Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">POC Testing Advantages for Africa</h3>
              <p className="text-gray-700 mb-4">
                Point-of-care testing brings laboratory diagnostics closer to patients, improving access and outcomes.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Immediate results (15-30 minutes vs. days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Same-visit treatment decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Minimal training requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>No electricity or refrigeration needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Deployment in remote/rural settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reduced patient loss to follow-up</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality & Accuracy</h3>
              <p className="text-gray-700 mb-4">
                POC tests must meet rigorous quality standards to ensure reliable clinical decisions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>WHO prequalification or CE/FDA approval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sensitivity & specificity validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Temperature stability (tropical climates)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Extended shelf life (18-24 months)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Built-in quality controls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular external quality assessment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* POC Impact Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Transforming Healthcare Delivery</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              POC testing enables test-and-treat strategies critical for African disease control
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>HIV/TB Cascade</h4>
              <p className="text-sm text-gray-700">Same-day HIV testing and linkage to treatment, TB screening at point-of-care</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">👶</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Maternal Health</h4>
              <p className="text-sm text-gray-700">Antenatal screening (anemia, HIV, syphilis) and pregnancy monitoring</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">💉</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>NCD Management</h4>
              <p className="text-sm text-gray-700">Glucose and lipid monitoring for diabetes and cardiovascular disease</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}