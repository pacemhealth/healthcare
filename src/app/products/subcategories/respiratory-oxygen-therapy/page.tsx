import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function RespiratoryOxygenTherapyPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Respiratory & Oxygen Therapy",
    "description": "Oxygen masks, nasal cannulas, nebulizers, respiratory therapy equipment for patient care across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'oxygen-masks',
      name: 'Oxygen Masks',
      products: ['Simple oxygen masks (6-10 L/min)', 'Non-rebreather masks (10-15 L/min)', 'Venturi masks (precise FiO2)', 'Pediatric oxygen masks', 'Mask tubing connectors'],
      icon: '😷'
    },
    {
      id: 'nasal-cannulas',
      name: 'Nasal Cannulas',
      products: ['Standard nasal cannulas (1-6 L/min)', 'Pediatric nasal cannulas', 'High-flow nasal cannulas', 'Soft-tip comfort design', 'Oxygen tubing (various lengths)'],
      icon: '👃'
    },
    {
      id: 'nebulizers-accessories',
      name: 'Nebulizers & Accessories',
      products: ['Jet nebulizers (compressor-driven)', 'Ultrasonic nebulizers', 'Mesh nebulizers (portable)', 'Nebulizer masks & mouthpieces', 'Medication cups & tubing'],
      icon: '💨'
    },
    {
      id: 'oxygen-delivery-systems',
      name: 'Oxygen Delivery Systems',
      products: ['Oxygen concentrators (5L, 10L)', 'Oxygen cylinders (portable, stationary)', 'Oxygen regulators & flowmeters', 'Humidifier bottles', 'Oxygen cylinder carts/stands'],
      icon: '🔵'
    },
    {
      id: 'ventilator-circuits',
      name: 'Ventilator Circuits & Filters',
      products: ['Ventilator breathing circuits', 'HEPA/bacterial filters', 'Heat & moisture exchangers (HME)', 'Water traps', 'Circuit adapters & connectors'],
      icon: '🔄'
    },
    {
      id: 'manual-resuscitators',
      name: 'Manual Resuscitators (Ambu Bags)',
      products: ['Adult Ambu bags (1600ml)', 'Pediatric Ambu bags (500ml)', 'Neonatal Ambu bags (240ml)', 'Self-inflating resuscitators', 'Oxygen reservoir bags'],
      icon: '💼'
    },
    {
      id: 'tracheostomy-supplies',
      name: 'Tracheostomy Supplies',
      products: ['Tracheostomy tubes (cuffed, uncuffed)', 'Fenestrated tracheostomy tubes', 'Speaking valves (Passy-Muir)', 'Tracheostomy care kits', 'Tube holders & ties'],
      icon: '🔌'
    },
    {
      id: 'suction-equipment',
      name: 'Suction Equipment & Catheters',
      products: ['Suction catheters (various sizes)', 'Yankauer suction tips (rigid)', 'Suction tubing & connectors', 'Portable suction units', 'Suction collection canisters'],
      icon: '🧹'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Respiratory & Oxygen Therapy | Medical Oxygen Equipment | Pacem Health"
        description="Respiratory and oxygen therapy including oxygen masks, nasal cannulas, nebulizers. Comprehensive respiratory care equipment for African healthcare facilities."
        keywords={[
          'respiratory therapy Africa',
          'oxygen therapy equipment',
          'oxygen masks',
          'nasal cannulas',
          'nebulizers',
          'respiratory care',
          'medical oxygen supplies',
          'breathing equipment'
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
            <span>Respiratory & Oxygen Therapy</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Respiratory & Oxygen Therapy
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive range of oxygen masks, nasal cannulas, nebulizers, ventilator circuits, and breathing support equipment designed to manage respiratory emergencies and chronic lung diseases across Africa. From pneumonia and COVID-19 to asthma and COPD, our respiratory consumables enable life-saving oxygen therapy while addressing the continent's critical oxygen access gap.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of respiratory and oxygen therapy supplies</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Oxygen Saves Lives</h3>
              <p className="text-gray-700 mb-4">
                Hypoxemia (low blood oxygen) is a final common pathway to death from pneumonia, malaria, sepsis, trauma, and many other conditions. Oxygen therapy is one of the most cost-effective medical interventions—yet remains inaccessible to millions in Africa.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Oxygen therapy reduces child pneumonia deaths by 35%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Simple oxygen masks deliver 40-60% oxygen (FiO2)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Non-rebreather masks provide 80-95% oxygen for severe hypoxemia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Nebulizers deliver bronchodilators for asthma/COPD exacerbations</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality & Safety Standards</h3>
              <p className="text-gray-700 mb-4">
                All respiratory therapy products meet international safety and performance standards with validation for clinical effectiveness.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ISO 13485 certified manufacturing for medical devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>CE Mark and FDA approval for critical devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Oxygen concentrators: WHO technical specifications compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Single-use devices prevent cross-contamination between patients</span>
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
              Respiratory therapy addresses major causes of mortality across the continent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">👶</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Child Pneumonia Deaths</h4>
              <p className="text-sm text-gray-700">
                Pneumonia kills more children under 5 than any other infectious disease—over 800,000 annually, mostly in sub-Saharan Africa. Oxygen therapy reduces pneumonia mortality by 35%, but oxygen is unavailable in 90% of African health facilities. Simple oxygen delivery systems (masks, cannulas, concentrators) can save hundreds of thousands of children's lives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🦠</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>COVID-19 & Pandemic Preparedness</h4>
              <p className="text-sm text-gray-700">
                The COVID-19 pandemic exposed Africa's oxygen crisis: hospitals ran out of oxygen, patients died gasping for breath, families scrambled to buy cylinders on black markets. Ventilator circuits, high-flow oxygen systems, and oxygen concentrators are essential for future pandemic preparedness and epidemic response (influenza, respiratory syncytial virus).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🫁</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Chronic Respiratory Diseases</h4>
              <p className="text-sm text-gray-700">
                Asthma, COPD, and tuberculosis create large populations needing respiratory support. Nebulizers deliver bronchodilators (salbutamol) for asthma exacerbations. Home oxygen concentrators enable long-term oxygen therapy for COPD patients. Tracheostomy supplies support patients with chronic respiratory failure, improving quality of life and reducing hospital readmissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Oxygen Access Crisis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">The Oxygen Access Crisis in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Systemic barriers prevent life-saving oxygen from reaching those who need it most
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Supply & Infrastructure Gaps</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Limited Availability:</strong> Only 10% of African health facilities have reliable oxygen access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Oxygen Plant Shortages:</strong> Few countries have oxygen production capacity (import dependence)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Cylinder Stockouts:</strong> Oxygen cylinders run out, refills delayed or unavailable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Distribution Challenges:</strong> Poor roads, long distances → oxygen doesn't reach rural facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Equipment Failures:</strong> Oxygen concentrators break, no technicians for repairs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Clinical & Capacity Barriers</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>High Cost:</strong> Oxygen cylinders expensive → patients sent home to die (can't afford)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Limited Training:</strong> Staff don't know how to use oxygen systems, calculate flow rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>No Pulse Oximeters:</strong> Can't measure oxygen saturation → don't know who needs oxygen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Electricity Outages:</strong> No power for oxygen concentrators (most reliable oxygen source)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Safety Risks:</strong> Improper storage (fire hazards), lack of humidification (dry airways)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Solutions for Universal Oxygen Access</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Oxygen Concentrators:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Generate oxygen from air (no refills needed)</li>
                      <li>✓ Cost-effective over time vs. cylinders</li>
                      <li>✓ Solar-powered models for off-grid facilities</li>
                      <li>✓ Maintenance contracts ensure uptime</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Pulse Oximetry:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Low-cost pulse oximeters identify hypoxemia</li>
                      <li>✓ Triage tool (who needs oxygen urgently?)</li>
                      <li>✓ Monitor response to oxygen therapy</li>
                      <li>✓ Battery-powered, portable models</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Training & Protocols:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ WHO oxygen therapy guidelines</li>
                      <li>✓ Calculating oxygen flow rates</li>
                      <li>✓ Equipment maintenance training</li>
                      <li>✓ Oxygen safety (fire prevention)</li>
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
              Expert guidance on oxygen therapy protocols and respiratory care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Oxygen Therapy Basics</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Pulse oximetry (SpO2 measurement)</li>
                <li>• Oxygen delivery device selection</li>
                <li>• Flow rate calculation (L/min)</li>
                <li>• Humidification indications</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Respiratory Emergencies</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Severe pneumonia management</li>
                <li>• Asthma exacerbation protocols</li>
                <li>• Manual resuscitation (Ambu bag)</li>
                <li>• Recognizing respiratory failure</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Equipment Operation</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Oxygen concentrator setup</li>
                <li>• Nebulizer operation & cleaning</li>
                <li>• Cylinder safety & storage</li>
                <li>• Troubleshooting equipment failures</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Infection Prevention</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Single-use vs. reusable devices</li>
                <li>• Cleaning & disinfection protocols</li>
                <li>• Preventing ventilator-associated pneumonia</li>
                <li>• Patient isolation (TB, COVID-19)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Need Respiratory & Oxygen Therapy Supplies?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us for bulk pricing, oxygen systems, and respiratory care training support.
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