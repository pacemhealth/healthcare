import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function DiagnosticTestingSuppliesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Diagnostic Testing Supplies",
    "description": "Rapid diagnostic tests, glucose monitoring systems, pregnancy tests, infectious disease screening, urinalysis supplies for diagnostic testing across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'rapid-diagnostic-tests',
      name: 'Rapid Diagnostic Tests (RDTs)',
      products: ['Malaria RDTs (Pf/Pv)', 'HIV rapid test kits (screening, confirmation)', 'Hepatitis B & C rapid tests', 'Syphilis rapid tests (VDRL, RPR)', 'Pregnancy test kits (hCG urine)'],
      icon: '🧪'
    },
    {
      id: 'glucose-monitoring',
      name: 'Glucose Monitoring Systems',
      products: ['Glucometers (blood glucose meters)', 'Blood glucose test strips', 'Lancets & lancing devices', 'Control solutions (quality check)', 'Continuous glucose monitors (CGM)'],
      icon: '📊'
    },
    {
      id: 'pregnancy-fertility',
      name: 'Pregnancy & Fertility Tests',
      products: ['Pregnancy test kits (urine hCG)', 'Serum pregnancy tests (quantitative)', 'Ovulation predictor kits', 'Fertility monitors', 'Early detection pregnancy tests'],
      icon: '🤰'
    },
    {
      id: 'infectious-disease-screening',
      name: 'Infectious Disease Screening',
      products: ['TB screening tests (GeneXpert, sputum microscopy)', 'COVID-19 rapid antigen tests', 'Dengue NS1 antigen tests', 'Typhoid rapid tests (Widal)', 'Cholera rapid diagnostic tests'],
      icon: '🦠'
    },
    {
      id: 'urinalysis-supplies',
      name: 'Urinalysis Supplies',
      products: ['Urine dipsticks (10-parameter)', 'Urine collection cups (sterile)', 'Pregnancy test strips (bulk)', 'Urine sediment analysis kits', 'Urine culture bottles'],
      icon: '🧫'
    },
    {
      id: 'blood-typing-crossmatch',
      name: 'Blood Typing & Crossmatch',
      products: ['Blood typing cards (ABO, Rh)', 'Blood grouping reagents', 'Crossmatch testing kits', 'Coombs test reagents', 'Blood typing antisera'],
      icon: '🩸'
    },
    {
      id: 'hemoglobin-anemia',
      name: 'Hemoglobin & Anemia Testing',
      products: ['HemoCue hemoglobin analyzers', 'Hemoglobin test cuvettes', 'Sickle cell screening kits', 'G6PD deficiency tests', 'Anemia detection systems'],
      icon: '💉'
    },
    {
      id: 'point-of-care-testing',
      name: 'Point-of-Care Testing (POCT)',
      products: ['Portable chemistry analyzers', 'Electrolyte analyzers (Na, K, Cl)', 'Cardiac marker tests (troponin)', 'Lipid profile test kits', 'HbA1c testing devices'],
      icon: '📱'
    },
    {
      id: 'specimen-collection',
      name: 'Specimen Collection Supplies',
      products: ['Blood collection tubes (EDTA, serum, heparin)', 'Vacutainer needles & holders', 'Sputum collection containers', 'Swab collection kits (nasal, throat)', 'Stool sample containers'],
      icon: '🧴'
    },
    {
      id: 'quality-control',
      name: 'Quality Control & Calibration',
      products: ['Control sera (normal, abnormal)', 'Calibration standards', 'Proficiency testing panels', 'Temperature monitoring devices', 'Biosafety equipment (spill kits)'],
      icon: '✓'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Diagnostic Testing Supplies | Rapid Tests & Screening Kits | Pacem Health"
        description="Diagnostic testing supplies including rapid diagnostic tests, glucose monitoring systems, pregnancy tests, infectious disease screening, urinalysis supplies. Quality diagnostic consumables enabling accurate testing across African healthcare facilities and communities."
        keywords={[
          'diagnostic testing supplies Africa',
          'rapid diagnostic tests',
          'malaria RDTs Africa',
          'glucose monitoring Africa',
          'pregnancy test kits',
          'HIV rapid tests Africa',
          'urinalysis supplies',
          'diagnostic screening Africa'
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
            <Link to="/products/categories/medical-consumables" className="hover:underline">
              Medical Consumables
            </Link>
            <span>/</span>
            <span>Diagnostic Testing Supplies</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Diagnostic Testing Supplies
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive range of rapid diagnostic tests, glucose monitoring systems, pregnancy tests, infectious disease screening tools, and point-of-care testing equipment designed to enable early diagnosis and treatment across Africa. From malaria RDTs that guide antimalarial therapy to glucose monitors for diabetes management, our diagnostic supplies address the continent's critical need for accessible, reliable, and affordable testing at every level of the health system.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of diagnostic testing supplies and screening tools</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-4 group-hover:text-[#4B2991] transition-colors">
                  {group.name}
                </h3>
                <div className="space-y-2">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-2 bg-[#4B2991] text-white rounded-lg hover:bg-[#3A1F70] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/medical-consumables')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Medical Consumables
            </button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Diagnosis Guides Treatment</h3>
              <p className="text-gray-700 mb-4">
                Accurate diagnosis is the foundation of effective healthcare. Without reliable diagnostic tests, clinicians prescribe empirically—leading to antibiotic overuse, delayed treatment, and preventable deaths. Diagnostic testing enables evidence-based treatment, rational drug use, and disease surveillance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Malaria RDTs reduce unnecessary antimalarial use by 40-60%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>HIV rapid tests enable same-day diagnosis and treatment initiation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Glucose monitoring prevents diabetic complications (blindness, amputation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>TB screening identifies infectious cases, breaks transmission chains</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality & Accuracy Standards</h3>
              <p className="text-gray-700 mb-4">
                All diagnostic tests meet international standards for sensitivity, specificity, and shelf stability in tropical climates.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>WHO prequalified RDTs (&gt;95% sensitivity, &gt;90% specificity)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ISO 13485 certified manufacturing for medical diagnostics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Tropical climate stability (heat & humidity resistant packaging)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>External quality assessment (EQA) programs for lab quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Products Matter */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Critical for African Healthcare</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Diagnostic testing addresses major disease burdens and enables targeted treatment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🦟</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Malaria Diagnosis & Treatment</h4>
              <p className="text-sm text-gray-700">
                Malaria kills 400,000+ people annually, mostly African children. Fever is a common symptom—but most fevers are NOT malaria. Malaria RDTs (15-minute results) enable targeted treatment: give antimalarials only when test-positive. This reduces drug waste, prevents resistance, and ensures patients with other causes of fever (pneumonia, typhoid, meningitis) get the right treatment quickly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🩸</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>HIV Testing & Treatment Access</h4>
              <p className="text-sm text-gray-700">
                Sub-Saharan Africa accounts for 67% of global HIV cases (25 million people). HIV rapid tests (20-minute results) enable same-day diagnosis and immediate antiretroviral therapy (ART) initiation—reducing loss to follow-up. Community-based testing, self-testing kits, and partner notification expand access. Early diagnosis and treatment suppress viral load, prevent AIDS, and stop HIV transmission.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Diabetes & NCD Monitoring</h4>
              <p className="text-sm text-gray-700">
                Diabetes prevalence in Africa is rising rapidly (24 million cases, projected to double by 2045). Most people don't know they have diabetes until complications arise (blindness, kidney failure, amputations). Glucose monitoring (glucometers, test strips) enables diagnosis, treatment monitoring, and complication prevention. HbA1c testing assesses long-term glycemic control, guides medication adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Challenges */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Diagnostic Challenges in Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Access, quality, and capacity barriers prevent timely and accurate diagnosis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Access & Infrastructure Gaps</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Limited Lab Capacity:</strong> Only 30-40% of African health facilities have basic laboratory services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Distance Barriers:</strong> Patients travel hours to reach diagnostic facilities, often can't afford transport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Test Stockouts:</strong> 40-60% of facilities lack essential diagnostic tests (RDTs, glucose strips)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Long Turnaround Times:</strong> Results take days/weeks → patients lost to follow-up, empiric treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>High Cost:</strong> Out-of-pocket test costs catastrophic for poor families (skip testing, treat blindly)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Quality & Capacity Issues</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Poor Test Quality:</strong> Counterfeit/substandard RDTs give false results (missed diagnoses, wrong treatment)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Storage Failures:</strong> Heat/humidity degrades tests → false negatives (especially RDTs, glucose strips)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Staff Training Gaps:</strong> Lab technicians lack skills, make errors (wrong specimen collection, interpretation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>No Quality Control:</strong> Labs don't use control materials → can't detect equipment failures, errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Equipment Breakdowns:</strong> Analyzers fail, no technicians for repairs, spare parts unavailable</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Solutions for Strengthening Diagnostic Capacity</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Point-of-Care Testing:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ RDTs at community level (malaria, HIV, pregnancy)</li>
                      <li>✓ GeneXpert for TB diagnosis (2-hour results)</li>
                      <li>✓ Portable analyzers (glucose, electrolytes, HbA1c)</li>
                      <li>✓ Same-day diagnosis and treatment initiation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Quality Assurance:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ WHO prequalified tests (verified quality)</li>
                      <li>✓ Daily quality control (control sera, standards)</li>
                      <li>✓ External quality assessment (proficiency testing)</li>
                      <li>✓ Temperature monitoring (cold chain, storage)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Lab Strengthening:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Tiered laboratory network (referral systems)</li>
                      <li>✓ Lab technician training & mentorship</li>
                      <li>✓ Equipment maintenance contracts</li>
                      <li>✓ Integrated disease surveillance (data use)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Training & Technical Support</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Expert guidance on diagnostic testing protocols and quality assurance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Rapid Diagnostic Tests</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• RDT technique (timing, reading results)</li>
                <li>• Malaria test-and-treat protocols</li>
                <li>• HIV testing algorithms (serial, parallel)</li>
                <li>• Storage & cold chain management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Glucose Monitoring</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Glucometer operation & calibration</li>
                <li>• Finger-stick technique (minimize pain)</li>
                <li>• Result interpretation & recording</li>
                <li>• Patient education (self-monitoring)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Specimen Collection</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Phlebotomy (venipuncture technique)</li>
                <li>• Blood culture collection (sterile)</li>
                <li>• Sputum collection (TB diagnosis)</li>
                <li>• Chain of custody (sample tracking)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Quality Control</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Daily QC (control materials, log books)</li>
                <li>• Equipment calibration & maintenance</li>
                <li>• Proficiency testing (EQA participation)</li>
                <li>• Standard operating procedures (SOPs)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Africa's Diagnostic Testing Challenge */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl text-gray-900 mb-3 md:mb-4">
              Africa's Diagnostic Testing Challenge
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Limited access to quality diagnostic testing prevents timely treatment and drives poor health outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl md:text-5xl mb-3 text-[#4B2991]" style={{ fontWeight: 700 }}>
                60%
              </div>
              <h4 className="text-lg md:text-xl mb-2 md:mb-3 text-gray-900" style={{ fontWeight: 600 }}>
                Testing Gap
              </h4>
              <p className="text-sm text-gray-600">
                Of African health facilities lack basic laboratory diagnostic capacity
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl md:text-5xl mb-3 text-[#4B2991]" style={{ fontWeight: 700 }}>
                200M
              </div>
              <h4 className="text-lg md:text-xl mb-2 md:mb-3 text-gray-900" style={{ fontWeight: 600 }}>
                Malaria Tests
              </h4>
              <p className="text-sm text-gray-600">
                Annual malaria RDTs needed to guide treatment decisions across Africa
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl md:text-5xl mb-3 text-[#4B2991]" style={{ fontWeight: 700 }}>
                45%
              </div>
              <h4 className="text-lg md:text-xl mb-2 md:mb-3 text-gray-900" style={{ fontWeight: 600 }}>
                Undiagnosed HIV
              </h4>
              <p className="text-sm text-gray-600">
                Of people living with HIV in Africa don't know their status
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-4xl md:text-5xl mb-3 text-[#4B2991]" style={{ fontWeight: 700 }}>
                50%
              </div>
              <h4 className="text-lg md:text-xl mb-2 md:mb-3 text-gray-900" style={{ fontWeight: 600 }}>
                Test Stockouts
              </h4>
              <p className="text-sm text-gray-600">
                Of facilities experience stockouts of essential diagnostic tests monthly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 md:mb-6">Need Diagnostic Testing Supplies?</h2>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto">
            Contact us for bulk pricing, rapid diagnostic tests, POCT equipment, and laboratory quality assurance support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support/request-equipment-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors text-base md:text-lg"
            >
              Request Quote
            </Link>
            <Link
              to="/support/training-education"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors text-base md:text-lg"
            >
              Training Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}