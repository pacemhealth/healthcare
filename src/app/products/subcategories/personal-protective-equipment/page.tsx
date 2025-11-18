import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function PersonalProtectiveEquipmentPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Personal Protective Equipment",
    "description": "Examination gloves, surgical gloves, face masks, gowns, eye protection for infection prevention across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'examination-gloves',
      name: 'Examination Gloves',
      products: ['Nitrile gloves (powder-free)', 'Latex gloves (natural rubber)', 'Vinyl gloves (synthetic)', 'Sizes: XS, S, M, L, XL', 'Ambidextrous, single-use'],
      icon: '🧤'
    },
    {
      id: 'surgical-gloves',
      name: 'Surgical Gloves (Sterile)',
      products: ['Latex surgical gloves (powder-free)', 'Nitrile surgical gloves (latex-free)', 'Neoprene surgical gloves', 'Anatomical sizing (6.0-9.0)', 'Double gloving protocols'],
      icon: '🩺'
    },
    {
      id: 'respiratory-protection',
      name: 'Respiratory Protection',
      products: ['N95/FFP2 respirators (fitted)', 'Surgical masks (ASTM Level 1-3)', 'KN95 masks', 'Procedure masks (tie-on, ear loops)', 'Fit testing kits'],
      icon: '😷'
    },
    {
      id: 'face-shields-eye-protection',
      name: 'Face Shields & Eye Protection',
      products: ['Full-face shields (reusable)', 'Disposable face shields', 'Safety goggles (indirect vented)', 'Protective eyewear (side shields)', 'Anti-fog coating'],
      icon: '🥽'
    },
    {
      id: 'isolation-gowns',
      name: 'Isolation Gowns & Aprons',
      products: ['Disposable isolation gowns (AAMI Level 1-4)', 'Reusable isolation gowns (fabric)', 'Plastic aprons (fluid-resistant)', 'Coveralls (full-body protection)', 'Thumb loops, tie closures'],
      icon: '👗'
    },
    {
      id: 'surgical-gowns',
      name: 'Surgical Gowns (Sterile)',
      products: ['Sterile surgical gowns (AAMI Level 3-4)', 'Reinforced gowns (critical zones)', 'Standard surgical gowns', 'Laparotomy drapes', 'Single-use, barrier protection'],
      icon: '🏥'
    },
    {
      id: 'head-foot-covers',
      name: 'Head & Foot Covers',
      products: ['Surgical caps (bouffant, skull)', 'Disposable shoe covers', 'Boot covers (knee-high)', 'Hair nets', 'Non-slip, fluid-resistant'],
      icon: '👷'
    },
    {
      id: 'ppe-kits-stockpiles',
      name: 'PPE Kits & Emergency Stockpiles',
      products: ['COVID-19 response kits', 'Ebola/VHF PPE kits (full protection)', 'Outbreak emergency stockpiles', 'Customized facility kits', 'Pre-packaged, ready-to-deploy'],
      icon: '📦'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Personal Protective Equipment (PPE) | Medical Safety Gear | Pacem Health"
        description="Personal protective equipment including examination gloves, surgical gloves, face masks, gowns. Comprehensive PPE supplies for African healthcare worker safety."
        keywords={[
          'PPE Africa',
          'personal protective equipment',
          'medical gloves',
          'surgical masks',
          'face shields',
          'medical gowns',
          'infection prevention',
          'healthcare safety equipment'
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
            <span>Personal Protective Equipment (PPE)</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Personal Protective Equipment (PPE)
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive range of gloves, masks, gowns, and face shields designed to protect healthcare workers and prevent healthcare-associated infections. From standard examination gloves to advanced respiratory protection, our PPE products meet international standards while addressing Africa's unique infection prevention challenges, including COVID-19 preparedness and epidemic response.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of personal protective equipment</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Infection Prevention & Control</h3>
              <p className="text-gray-700 mb-4">
                PPE is the last line of defense against healthcare-associated infections (HAIs). Proper selection, donning, and doffing techniques protect both healthcare workers and patients from disease transmission.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Hand hygiene before and after PPE use (WHO 5 Moments)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper donning sequence: gown → mask → goggles → gloves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Doffing sequence prevents self-contamination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Single-use PPE must NEVER be reused (except in dire emergencies with decontamination)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality & Safety Standards</h3>
              <p className="text-gray-700 mb-4">
                All PPE products meet international quality and performance standards with third-party testing and certification for safety and efficacy.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ASTM/EN standards for barrier protection levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>N95 respirators: NIOSH-approved, 95% filtration efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Gloves tested for puncture resistance, tensile strength</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Tropical climate validated (heat & humidity stable)</span>
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
              PPE protects healthcare workers and prevents disease transmission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🦠</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>COVID-19 Lessons Learned</h4>
              <p className="text-sm text-gray-700">
                The pandemic exposed critical PPE shortages across Africa, leading to healthcare worker infections and deaths. Countries were outbid for supplies by wealthier nations. Pre-positioned PPE stockpiles and local manufacturing capacity are now essential for pandemic preparedness and epidemic response (Ebola, Lassa fever, cholera).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">👩‍⚕️</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Healthcare Worker Safety</h4>
              <p className="text-sm text-gray-700">
                Healthcare workers face constant exposure to bloodborne pathogens (HIV, hepatitis B/C), TB, and other infectious diseases. Adequate PPE supply—especially gloves, masks, and gowns—is fundamental to worker safety. PPE shortages force dangerous choices: provide care without protection or turn patients away.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Preventing Healthcare-Associated Infections</h4>
              <p className="text-sm text-gray-700">
                HAI rates in Africa (10-15%) are double those in high-income countries. PPE prevents patient-to-patient transmission via contaminated hands and clothing. Gloves, gowns, and masks are essential for standard precautions during all patient contact involving body fluids, reducing cross-contamination and nosocomial infections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PPE Challenges in Africa */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">PPE Challenges in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Supply, cost, and behavioral barriers to effective PPE use
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Supply Chain & Cost Barriers</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Chronic Stockouts:</strong> PPE shortages in 40-80% of facilities at any given time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>High Costs:</strong> PPE consumes 15-25% of facility budgets, leading to rationing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Import Dependence:</strong> Limited local manufacturing → vulnerable to global supply shocks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Quality Issues:</strong> Substandard PPE (thin gloves, poor barrier protection) enters supply chain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Storage Challenges:</strong> Heat/humidity degrades PPE (elastic bands, adhesives fail)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Behavioral & Training Barriers</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Poor Compliance:</strong> PPE use rates often below 50% even when available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Improper Use:</strong> Wearing same gloves for multiple patients (defeats purpose)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Heat Intolerance:</strong> Gowns, masks uncomfortable in hot climates → removed prematurely</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Lack of Training:</strong> Staff not trained on proper donning/doffing → self-contamination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Reuse Pressure:</strong> Managers pressure staff to reuse single-use PPE (cost savings)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Solutions for Sustainable PPE Access</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Supply Chain:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Pre-positioned stockpiles for epidemics</li>
                      <li>✓ Demand forecasting (data-driven)</li>
                      <li>✓ Consignment stock models</li>
                      <li>✓ Local manufacturing partnerships</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Quality Assurance:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Third-party testing (ASTM, EN standards)</li>
                      <li>✓ Tropical climate validation</li>
                      <li>✓ Supplier audits and certification</li>
                      <li>✓ Counterfeit prevention measures</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Behavior Change:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Regular donning/doffing training</li>
                      <li>✓ Hand hygiene campaigns</li>
                      <li>✓ Performance monitoring & feedback</li>
                      <li>✓ Leadership commitment to safety</li>
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
              Expert guidance on PPE selection, use, and infection prevention protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>PPE Selection & Sizing</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Risk assessment for procedures</li>
                <li>• Barrier level requirements (AAMI)</li>
                <li>• Glove sizing & fit testing</li>
                <li>• N95 respirator fit testing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Donning & Doffing</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Proper donning sequence</li>
                <li>• Safe doffing to avoid contamination</li>
                <li>• Hand hygiene integration</li>
                <li>• Buddy system for high-risk PPE</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Standard Precautions</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• WHO infection prevention guidelines</li>
                <li>• Transmission-based precautions</li>
                <li>• Airborne/droplet/contact isolation</li>
                <li>• PPE for specific pathogens (TB, Ebola)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Supply Management</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• PPE consumption quantification</li>
                <li>• Stockpile planning (epidemic surge)</li>
                <li>• Storage conditions (temperature, humidity)</li>
                <li>• Expiry tracking (FEFO)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Need Personal Protective Equipment?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us for bulk pricing, emergency stockpiles, and infection prevention training support.
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