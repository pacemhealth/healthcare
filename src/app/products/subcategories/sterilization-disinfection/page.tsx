import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function SterilizationDisinfectionPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Sterilization & Disinfection",
    "description": "Sterilization indicators, high-level disinfectants, cleaning solutions for infection prevention across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'sterilization-indicators',
      name: 'Sterilization Indicators & Test Packs',
      products: ['Chemical indicators (Class 1-6)', 'Biological indicators (spore tests)', 'Bowie-Dick test packs', 'Sterilization tape', 'Process challenge devices (PCDs)'],
      icon: '🧪'
    },
    {
      id: 'high-level-disinfectants',
      name: 'High-Level Disinfectants',
      products: ['Glutaraldehyde solutions (2%)', 'Hydrogen peroxide disinfectants', 'Peracetic acid solutions', 'Orthophthalaldehyde (OPA)', 'Disinfectant test strips'],
      icon: '⚗️'
    },
    {
      id: 'surface-disinfectants',
      name: 'Surface Disinfectants & Sanitizers',
      products: ['Quaternary ammonium compounds', 'Chlorine-based disinfectants (sodium hypochlorite)', 'Alcohol-based surface wipes', 'Phenolic disinfectants', 'Disinfectant spray bottles'],
      icon: '🧴'
    },
    {
      id: 'hand-hygiene',
      name: 'Hand Hygiene Products',
      products: ['Alcohol-based hand rubs (60-95%)', 'Antimicrobial hand soap (chlorhexidine)', 'Surgical hand scrub solutions', 'Hand sanitizer dispensers (wall-mount, portable)', 'Moisturizing hand creams (dermatitis prevention)'],
      icon: '🧼'
    },
    {
      id: 'instrument-cleaning',
      name: 'Instrument Cleaning Solutions',
      products: ['Enzymatic detergents (multi-enzyme)', 'Ultrasonic cleaning solutions', 'Instrument lubricants (milk)', 'Pre-soak solutions', 'Cleaning brushes & accessories'],
      icon: '🔧'
    },
    {
      id: 'sterilization-wraps',
      name: 'Sterilization Wraps & Pouches',
      products: ['Sterilization paper wraps (SMS)', 'Self-sealing sterilization pouches', 'Indicator tape & labels', 'Sterilization containers (rigid)', 'Tyvek pouches (peel-pack)'],
      icon: '📦'
    },
    {
      id: 'waste-disposal',
      name: 'Waste Disposal & Sharps Containers',
      products: ['Sharps containers (puncture-proof)', 'Biohazard waste bags (red, yellow)', 'Infectious waste bins', 'Needle destroyers', 'Autoclave waste bags'],
      icon: '🗑️'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Sterilization & Disinfection | Infection Prevention | Pacem Health"
        description="Sterilization and disinfection including sterilization indicators, high-level disinfectants, cleaning solutions. Comprehensive infection prevention supplies for African healthcare."
        keywords={[
          'sterilization Africa',
          'disinfection supplies',
          'sterilization indicators',
          'high-level disinfectants',
          'infection prevention',
          'sterilization equipment',
          'medical disinfection',
          'healthcare sterilization'
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
            <Link to="/products/categories/medical-consumables" className="hover:underline">
              Medical Consumables
            </Link>
            <span>/</span>
            <span>Sterilization & Disinfection</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Sterilization & Disinfection
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive range of sterilization indicators, high-level disinfectants, surface sanitizers, hand hygiene products, and waste disposal supplies designed to prevent healthcare-associated infections across Africa. From verifying autoclave sterilization cycles to maintaining clean clinical environments, our infection prevention products address the continent's critical challenge of reducing HAIs while strengthening sterilization capacity and hand hygiene compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of sterilization and disinfection supplies</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Infection Prevention Saves Lives</h3>
              <p className="text-gray-700 mb-4">
                Healthcare-associated infections (HAIs) kill millions globally, with the highest burden in low-resource settings. Proper sterilization, disinfection, and hand hygiene are the foundation of infection prevention—yet remain inconsistently practiced in many African health facilities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Hand hygiene reduces HAIs by 30-50% (single most effective intervention)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterilization indicators verify autoclave effectiveness (prevent failed cycles)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>High-level disinfection essential for endoscopes, ultrasound probes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Surface disinfection prevents environmental contamination (C. diff, MRSA)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality & Efficacy Standards</h3>
              <p className="text-gray-700 mb-4">
                All sterilization and disinfection products meet international standards for microbial kill effectiveness and safety.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterilization indicators: ISO 11140 compliance (chemical indicators)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Biological indicators: ISO 11138 (Geobacillus spore tests)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Disinfectants: EPA-registered or WHO-approved formulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Hand rubs: WHO formulation (60-95% alcohol, emollients)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Products Matter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Critical for African Healthcare</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Infection prevention products address major sources of preventable mortality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🦠</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Healthcare-Associated Infections</h4>
              <p className="text-sm text-gray-700">
                HAI rates in Africa (10-30%) are 2-5 times higher than high-income countries. Surgical site infections, bloodstream infections (central lines), ventilator-associated pneumonia, and catheter-associated UTIs prolong hospital stays, require expensive antibiotics, and cause preventable deaths. Hand hygiene, proper sterilization, and environmental disinfection dramatically reduce HAI burden.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🧫</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Antimicrobial Resistance (AMR)</h4>
              <p className="text-sm text-gray-700">
                Africa has the world's highest AMR burden. Multi-drug resistant organisms (MRSA, ESBL, carbapenem-resistant bacteria) spread through contaminated hands, instruments, and surfaces. Effective sterilization and disinfection prevent transmission of resistant organisms. Hand hygiene compliance is critical—yet remains below 20% in many African hospitals, fueling AMR spread.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💉</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Blood-Borne Pathogen Transmission</h4>
              <p className="text-sm text-gray-700">
                Hepatitis B, hepatitis C, and HIV remain significant occupational risks for healthcare workers in Africa. Sharps injuries from unsafe disposal, inadequate sterilization of reusable instruments, and poor hand hygiene increase transmission risk. Proper sharps containers, sterilization verification (indicators), and hand hygiene products protect both patients and healthcare workers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infection Prevention Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Infection Prevention Challenges in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Systemic barriers prevent effective infection prevention and control
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Sterilization & Equipment Gaps</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Autoclave Failures:</strong> 30-50% of autoclaves non-functional or inadequately maintained</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>No Sterilization Monitoring:</strong> Indicators not used → failed sterilization cycles undetected</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Reuse of Single-Use Items:</strong> Syringes, catheters reused without proper sterilization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Inadequate Cleaning:</strong> Instruments not properly cleaned before sterilization (organic matter blocks process)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Electricity Outages:</strong> Autoclaves can't run during power failures (delays in instrument availability)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Hand Hygiene & Environmental Barriers</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Water Shortages:</strong> No running water for handwashing (common in rural facilities)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Soap & Hand Rub Stockouts:</strong> Hand hygiene products unavailable or unaffordable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Low Compliance:</strong> Hand hygiene compliance &lt;20% in many facilities (staff too busy, forgetful)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Inadequate Disinfection:</strong> Surfaces, floors cleaned with water only (no disinfectant)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Overcrowding:</strong> Hospital beds too close → cross-contamination between patients</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Solutions for Strengthening Infection Prevention</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Sterilization Assurance:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Chemical indicators in every load (verify conditions)</li>
                      <li>✓ Weekly biological indicators (spore tests)</li>
                      <li>✓ Autoclave maintenance contracts (prevent downtime)</li>
                      <li>✓ Training: loading, operation, record-keeping</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Hand Hygiene Promotion:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Alcohol-based hand rub at point-of-care</li>
                      <li>✓ WHO "5 Moments" posters & training</li>
                      <li>✓ Hand hygiene audits & feedback</li>
                      <li>✓ Local hand rub production (WHO formula)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Environmental Cleaning:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Daily disinfection of high-touch surfaces</li>
                      <li>✓ Chlorine solutions (0.05% for surfaces, 0.5% for spills)</li>
                      <li>✓ Cleaning protocols with checklists</li>
                      <li>✓ Safe waste segregation (sharps, biohazard)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Training & Technical Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert guidance on infection prevention and control protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Sterilization Practices</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Autoclave operation & validation</li>
                <li>• Chemical & biological indicators use</li>
                <li>• Instrument cleaning & packaging</li>
                <li>• Sterilization cycle documentation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Hand Hygiene Training</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• WHO "5 Moments" protocol</li>
                <li>• Proper handwashing technique</li>
                <li>• Alcohol-based hand rub use</li>
                <li>• Hand hygiene audits & feedback</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Disinfection Protocols</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• High-level disinfection (endoscopes)</li>
                <li>• Surface disinfection schedules</li>
                <li>• Chlorine solution preparation</li>
                <li>• Contact time & concentration</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Waste Management</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Waste segregation (color coding)</li>
                <li>• Sharps container safety</li>
                <li>• Infectious waste handling</li>
                <li>• Autoclave waste treatment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Need Sterilization & Disinfection Supplies?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us for bulk pricing, infection prevention protocols, and training support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support/request-equipment-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              to="/support/training-education"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors text-lg"
            >
              Training Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}