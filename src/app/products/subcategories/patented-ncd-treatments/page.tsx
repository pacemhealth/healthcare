import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function PatentedNCDTreatmentsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Patented NCD Treatments",
    "description": "Advanced diabetes therapies, cardiovascular innovations, respiratory biologics for NCD management across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'advanced-diabetes',
      name: 'Advanced Diabetes Therapies',
      products: ['GLP-1 receptor agonists', 'SGLT-2 inhibitors', 'DPP-4 inhibitors', 'Novel insulin analogs', 'Combination therapies'],
      icon: '💉',
      description: 'Next-generation glucose control medications'
    },
    {
      id: 'cardiovascular-innovations',
      name: 'Cardiovascular Innovations',
      products: ['PCSK9 inhibitors', 'ARNI therapy', 'Novel anticoagulants (NOACs)', 'Antiplatelet agents', 'Heart failure medications'],
      icon: '❤️',
      description: 'Advanced cardiac and lipid management'
    },
    {
      id: 'respiratory-biologics',
      name: 'Respiratory & Asthma Biologics',
      products: ['Monoclonal antibody therapies', 'ICS/LABA combinations', 'LAMA/LABA combinations', 'Triple therapy inhalers', 'Severe asthma treatments', 'Long-acting bronchodilators', 'Short-acting bronchodilators'],
      icon: '🫁',
      description: 'Innovative respiratory disease management'
    },
    {
      id: 'renal-protection',
      name: 'Renal Protection Therapies',
      products: ['Diabetic kidney disease medications', 'CKD progression inhibitors', 'Phosphate binders', 'ESA biosimilars'],
      icon: '🔬',
      description: 'Chronic kidney disease management'
    },
    {
      id: 'osteoporosis',
      name: 'Osteoporosis & Bone Health',
      products: ['Denosumab', 'Teriparatide', 'Romosozumab', 'Bisphosphonates (branded)', 'Combination therapies'],
      icon: '🦴',
      description: 'Advanced bone density management'
    },
    {
      id: 'neurological',
      name: 'Neurological Disorders',
      products: ['Novel anticonvulsants', 'Parkinson\'s disease therapies', 'Multiple sclerosis treatments', 'Migraine prevention', 'Alzheimer\'s medications'],
      icon: '🧠',
      description: 'Innovative neurological therapeutics'
    },
    {
      id: 'obesity-metabolic',
      name: 'Obesity & Metabolic Syndrome',
      products: ['GLP-1 for weight management', 'Combination weight loss therapies', 'Metabolic syndrome treatments'],
      icon: '⚖️',
      description: 'Weight management and metabolic health'
    },
    {
      id: 'rheumatology',
      name: 'Rheumatology & Autoimmune',
      products: ['JAK inhibitors', 'IL-17 inhibitors', 'IL-23 inhibitors', 'TNF-alpha blockers', 'Biosimilar biologics'],
      icon: '🤲',
      description: 'Advanced inflammatory disease management'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Patented NCD Treatments | Advanced NCD Medications | Pacem Health"
        description="Patented NCD treatments including advanced diabetes therapies, cardiovascular innovations, respiratory biologics. Next-generation NCD management for African healthcare."
        keywords={[
          'patented NCD treatments Africa',
          'advanced diabetes therapies',
          'cardiovascular innovations',
          'respiratory biologics Africa',
          'NCD medications',
          'patented pharmaceuticals',
          'advanced NCD treatments',
          'branded NCD medications Africa'
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
            <Link to="/products/categories/branded-patented-pharmaceuticals" className="hover:underline">
              Branded & Patented Pharmaceuticals
            </Link>
            <span>/</span>
            <span>Patented NCD Treatments</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Patented NCD Treatments
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Innovative pharmaceutical solutions for non-communicable diseases including advanced diabetes therapies, novel cardiovascular treatments, and cutting-edge respiratory medications. Our portfolio features breakthrough therapies from leading innovators designed to improve outcomes for Africa's growing NCD burden.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete portfolio of innovative NCD treatments</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#2563EB] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-2 group-hover:text-[#2563EB] transition-colors">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{group.description}</p>
                <div className="space-y-1 mb-4">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#2563EB] text-xs mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/branded-patented-pharmaceuticals')}
              className="text-[#2563EB] hover:underline"
            >
              ← Back to Branded & Patented Pharmaceuticals
            </button>
          </div>
        </div>
      </section>

      {/* Africa's NCD Challenge Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Addressing Africa's NCD Challenge</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Non-communicable diseases are rising rapidly across Africa, requiring access to innovative treatments
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-4xl mb-3 text-[#2563EB]">463M</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Diabetes</h4>
              <p className="text-sm text-gray-600">Adults with diabetes in Africa by 2045 (projected)</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-4xl mb-3 text-[#2563EB]">27M</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Cardiovascular</h4>
              <p className="text-sm text-gray-600">Deaths from CVD annually across the continent</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-4xl mb-3 text-[#2563EB]">125M</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Hypertension</h4>
              <p className="text-sm text-gray-600">Adults living with high blood pressure</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-4xl mb-3 text-[#2563EB]">71%</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>NCD Burden</h4>
              <p className="text-sm text-gray-600">Projected increase in NCD burden by 2030</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive NCD Management Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Comprehensive NCD Management Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond medications: integrated services for chronic disease programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#EBF8FF] p-8 rounded-xl">
              <div className="text-4xl mb-4">🏥</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>NCD Clinic Setup</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Diabetes and hypertension clinic design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Equipment and diagnostic tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Patient flow optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Pharmacy integration and stock management</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-8 rounded-xl">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Clinical Training</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Evidence-based treatment guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Medication titration protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Complication screening and management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Patient counseling and education</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-8 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Data & Monitoring</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>NCD patient registries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Treatment adherence tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Outcome measurement and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Quality improvement initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Focus Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Key Therapeutic Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Innovative therapies for Africa's priority NCD conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">💉</div>
                <div>
                  <h4 className="text-xl mb-2" style={{ fontWeight: 600 }}>Diabetes Management</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Beyond traditional insulin: novel mechanisms for glucose control
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>GLP-1 Receptor Agonists:</strong> Weekly injections for Type 2 diabetes with cardiovascular and renal benefits</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>SGLT-2 Inhibitors:</strong> Oral medications reducing glucose, CV events, and kidney disease progression</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>Novel Insulins:</strong> Ultra-long-acting basal insulins and rapid-acting analogs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>Combination Therapies:</strong> Fixed-dose combinations for simplified regimens</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">❤️</div>
                <div>
                  <h4 className="text-xl mb-2" style={{ fontWeight: 600 }}>Cardiovascular Innovation</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Advanced therapies for heart disease and stroke prevention
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>PCSK9 Inhibitors:</strong> Monoclonal antibodies for aggressive LDL reduction in high-risk patients</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>ARNI Therapy:</strong> Angiotensin receptor-neprilysin inhibition for heart failure</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>Novel Anticoagulants:</strong> Direct oral anticoagulants (DOACs) for stroke prevention</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>Antiplatelet Agents:</strong> Advanced P2Y12 inhibitors for acute coronary syndromes</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🫁</div>
                <div>
                  <h4 className="text-xl mb-2" style={{ fontWeight: 600 }}>Respiratory Disease</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Biologics and advanced inhalers for asthma and COPD
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>Monoclonal Antibodies:</strong> Targeted biologics for severe eosinophilic asthma</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>Triple Therapy:</strong> Single-inhaler ICS/LAMA/LABA combinations for COPD</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>Novel Inhalers:</strong> Dry powder and soft mist delivery systems</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>Exacerbation Prevention:</strong> Long-term control medications</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">🧠</div>
                <div>
                  <h4 className="text-xl mb-2" style={{ fontWeight: 600 }}>Neurological Conditions</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Novel therapies for epilepsy, Parkinson's, and MS
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>Novel Anticonvulsants:</strong> New mechanisms for refractory epilepsy</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>Parkinson's Therapies:</strong> Extended-release formulations and adjunctive treatments</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>MS Treatments:</strong> Oral and injectable disease-modifying therapies</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">→</span>
                  <span><strong>Migraine Prevention:</strong> CGRP monoclonal antibodies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Access & Affordability Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Improving Access to Innovative NCD Treatments</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic programs to make patented medications affordable and accessible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#EBF8FF] p-6 rounded-xl">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Tiered Pricing</h4>
              <p className="text-sm text-gray-600">
                Country-specific pricing based on economic status and disease burden
              </p>
            </div>

            <div className="bg-[#EBF8FF] p-6 rounded-xl">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Patient Assistance</h4>
              <p className="text-sm text-gray-600">
                Manufacturer-sponsored programs for qualifying patients
              </p>
            </div>

            <div className="bg-[#EBF8FF] p-6 rounded-xl">
              <div className="text-3xl mb-3">🏛️</div>
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Government Programs</h4>
              <p className="text-sm text-gray-600">
                National health insurance integration and bulk procurement
              </p>
            </div>

            <div className="bg-[#EBF8FF] p-6 rounded-xl">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Biosimilar Transition</h4>
              <p className="text-sm text-gray-600">
                Access to biosimilar biologics as patents expire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Evidence Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Clinical Evidence & Outcomes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Supporting treatment decisions with robust clinical data
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-4" style={{ fontWeight: 600 }}>Cardiovascular Outcome Trials</h4>
              <p className="text-sm text-gray-700 mb-4">
                Major clinical trials demonstrating CV risk reduction:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• SGLT-2 inhibitors: 35% reduction in HF hospitalizations</li>
                <li>• GLP-1 RAs: 26% reduction in CV death/MI/stroke</li>
                <li>• PCSK9 inhibitors: 15% reduction in major CV events</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-4" style={{ fontWeight: 600 }}>Renal Protection Studies</h4>
              <p className="text-sm text-gray-700 mb-4">
                Evidence for kidney disease progression prevention:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• SGLT-2i: 39% reduction in CKD progression</li>
                <li>• GLP-1 RA: 22% reduction in kidney outcomes</li>
                <li>• Finerenone: 18% reduction in CKD composite</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-4" style={{ fontWeight: 600 }}>Quality of Life Improvements</h4>
              <p className="text-sm text-gray-700 mb-4">
                Patient-reported outcomes and functional benefits:
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Biologics: Significant asthma control improvement</li>
                <li>• Novel MS therapies: Reduced relapse rates</li>
                <li>• ARNI therapy: Improved heart failure symptoms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Safety Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Regulatory Excellence & Quality Assurance</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Stringent Regulatory Standards</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>FDA/EMA Approval:</strong> All products approved by stringent regulatory authorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Phase III Trials:</strong> Comprehensive efficacy and safety data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Post-Marketing Surveillance:</strong> Ongoing real-world safety monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Label Updates:</strong> Regular safety information updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Distribution & Handling</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Temperature Control:</strong> Specialized storage for biologics and sensitive medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Authentication:</strong> Serialization and anti-counterfeiting measures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Expiry Management:</strong> Real-time inventory and FEFO protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Provider Training:</strong> Proper storage, handling, and administration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">8</div>
              <div className="text-gray-600">Therapeutic Areas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">40+</div>
              <div className="text-gray-600">Innovative Medications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">100%</div>
              <div className="text-gray-600">FDA/EMA Approved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">20+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}