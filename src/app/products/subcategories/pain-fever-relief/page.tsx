import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function PainFeverReliefPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Pain & Fever Relief Medications",
    "description": "Paracetamol, NSAIDs, combination products for pain and fever relief across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'paracetamol',
      name: 'Acetaminophen/Paracetamol',
      products: ['Paracetamol tablets (500mg, 1000mg)', 'Paracetamol suspension (pediatric)', 'Effervescent tablets', 'Extended-release formulations', 'Suppositories'],
      icon: '💊',
      description: 'First-line analgesic and antipyretic'
    },
    {
      id: 'nsaids',
      name: 'NSAIDs (Non-Steroidal Anti-Inflammatory)',
      products: ['Ibuprofen (200mg, 400mg, 600mg)', 'Aspirin (various strengths)', 'Diclofenac (tablets, capsules)', 'Naproxen sodium', 'Mefenamic acid'],
      icon: '⚕️',
      description: 'Anti-inflammatory pain and fever relief'
    },
    {
      id: 'combination-analgesics',
      name: 'Combination Pain Relievers',
      products: ['Paracetamol + Caffeine', 'Paracetamol + Ibuprofen', 'Aspirin + Caffeine', 'Multi-symptom formulations', 'Paracetamol + Codeine (where permitted)'],
      icon: '💉',
      description: 'Enhanced pain relief combinations'
    },
    {
      id: 'topical-pain-relief',
      name: 'Topical Pain Relief',
      products: ['Diclofenac gel/cream', 'Methyl salicylate ointments', 'Menthol/camphor rubs', 'Capsaicin cream', 'Pain relief patches'],
      icon: '🧴',
      description: 'External application for localized pain'
    },
    {
      id: 'pediatric-formulations',
      name: 'Pediatric Pain & Fever',
      products: ['Pediatric paracetamol suspension', 'Pediatric ibuprofen suspension', 'Suppositories (various strengths)', 'Infant drops', 'Chewable tablets'],
      icon: '👶',
      description: 'Age-appropriate formulations for children'
    },
    {
      id: 'migraine-headache',
      name: 'Migraine & Headache Relief',
      products: ['Aspirin + Paracetamol + Caffeine', 'Ibuprofen (fast-acting)', 'Migraine-specific combinations', 'Tension headache formulations'],
      icon: '🤕',
      description: 'Specialized headache and migraine treatment'
    },
    {
      id: 'menstrual-pain',
      name: 'Menstrual Pain Relief',
      products: ['Ibuprofen (menstrual formulations)', 'Naproxen sodium', 'Mefenamic acid', 'Combination products', 'Extended-release formulations'],
      icon: '🌸',
      description: 'Dysmenorrhea and menstrual cramp relief'
    },
    {
      id: 'muscle-joint-pain',
      name: 'Muscle & Joint Pain Relief',
      products: ['Diclofenac (oral & topical)', 'Ibuprofen (high strength)', 'Naproxen', 'Muscle relaxant combinations', 'Arthritis relief formulations'],
      icon: '💪',
      description: 'Musculoskeletal pain management'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Pain & Fever Relief Medications | OTC Pain Relief | Pacem Health"
        description="Pain and fever relief medications including paracetamol, NSAIDs, combination products. Essential OTC pain management solutions for African communities."
        keywords={[
          'pain relief Africa',
          'fever medications',
          'paracetamol Africa',
          'NSAIDs',
          'ibuprofen Africa',
          'OTC pain relief',
          'fever reducers',
          'pain medications Africa'
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
            <Link to="/products/categories/over-the-counter-products" className="hover:underline">
              Over-the-Counter Products
            </Link>
            <span>/</span>
            <span>Pain & Fever Relief</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#7C944B] to-[#5A6D35] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Pain & Fever Relief
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive portfolio of analgesics, antipyretics, and anti-inflammatory medications for effective pain and fever management. From paracetamol to NSAIDs, topical applications to pediatric formulations, we provide safe and effective OTC solutions for common pain conditions across African communities.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of pain and fever relief medications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#7C944B] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-2 group-hover:text-[#7C944B] transition-colors">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{group.description}</p>
                <div className="space-y-1 mb-4">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#7C944B] text-xs mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7F40] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/over-the-counter-products')}
              className="text-[#7C944B] hover:underline"
            >
              ← Back to Over-the-Counter Products
            </button>
          </div>
        </div>
      </section>

      {/* Safe Use Guidelines Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Safe Use of Pain & Fever Medications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important guidelines for safe and effective use
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Dosage & Administration</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Follow Label Instructions:</strong> Always adhere to recommended dosages and frequency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Maximum Daily Dose:</strong> Never exceed the maximum daily limit (e.g., 4000mg paracetamol)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Spacing Doses:</strong> Maintain appropriate intervals between doses (typically 4-6 hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>With or Without Food:</strong> NSAIDs should be taken with food to reduce stomach irritation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Contraindications & Warnings</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Liver Conditions:</strong> Use paracetamol with caution in liver disease patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Stomach Ulcers:</strong> NSAIDs contraindicated in active peptic ulcer disease</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Pregnancy:</strong> Consult healthcare provider, especially in third trimester</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Drug Interactions:</strong> Be aware of interactions with blood thinners and other medications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanism of Action Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">How These Medications Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the mechanisms of pain and fever relief
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F7F0] p-8 rounded-xl">
              <div className="text-4xl mb-4">🌡️</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Antipyretic Action</h4>
              <p className="text-sm text-gray-700 mb-3">
                Fever reduction through hypothalamic action
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B]">•</span>
                  <span>Reduces prostaglandin production in brain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B]">•</span>
                  <span>Lowers body temperature set point</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B]">•</span>
                  <span>Promotes heat dissipation</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F7F0] p-8 rounded-xl">
              <div className="text-4xl mb-4">💊</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Analgesic Effect</h4>
              <p className="text-sm text-gray-700 mb-3">
                Pain relief through multiple pathways
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B]">•</span>
                  <span>Central and peripheral pain modulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B]">•</span>
                  <span>Blocks pain signal transmission</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B]">•</span>
                  <span>Reduces pain mediator production</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F7F0] p-8 rounded-xl">
              <div className="text-4xl mb-4">⚕️</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Anti-Inflammatory</h4>
              <p className="text-sm text-gray-700 mb-3">
                Inflammation reduction (NSAIDs)
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B]">•</span>
                  <span>COX enzyme inhibition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B]">•</span>
                  <span>Reduces swelling and redness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B]">•</span>
                  <span>Decreases inflammatory mediators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Pain Conditions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Common Conditions Treated</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When to use pain and fever medications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🤒</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Fever</h4>
              <p className="text-sm text-gray-600">
                Viral and bacterial infections, post-vaccination fever, malaria-related fever
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🤕</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Headaches</h4>
              <p className="text-sm text-gray-600">
                Tension headaches, migraines, sinus headaches, cluster headaches
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💪</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Muscle Pain</h4>
              <p className="text-sm text-gray-600">
                Sports injuries, muscle strains, back pain, post-exercise soreness
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🦴</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Joint Pain</h4>
              <p className="text-sm text-gray-600">
                Arthritis, joint inflammation, sprains, overuse injuries
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🦷</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Dental Pain</h4>
              <p className="text-sm text-gray-600">
                Toothaches, post-dental procedure pain, gum inflammation
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🌸</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Menstrual Cramps</h4>
              <p className="text-sm text-gray-600">
                Dysmenorrhea, menstrual pain, premenstrual symptoms
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">👶</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Pediatric Pain</h4>
              <p className="text-sm text-gray-600">
                Teething pain, childhood fever, growing pains, minor injuries
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🩹</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Minor Injuries</h4>
              <p className="text-sm text-gray-600">
                Bruises, sprains, minor cuts, soft tissue injuries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pediatric Dosing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Pediatric Dosing Guidelines</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Safe medication use for children
            </p>
          </div>

          <div className="bg-[#FFF9E6] border-2 border-[#FFD700] rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Important Safety Notice</h4>
                <p className="text-gray-700">
                  Always calculate pediatric doses based on <strong>weight (mg/kg)</strong> rather than age alone. Consult healthcare providers for infants under 3 months. Never give aspirin to children under 16 years due to Reye's syndrome risk.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Paracetamol (Acetaminophen)</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">•</span>
                  <span><strong>Dosage:</strong> 10-15 mg/kg per dose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">•</span>
                  <span><strong>Frequency:</strong> Every 4-6 hours as needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">•</span>
                  <span><strong>Maximum:</strong> Not to exceed 60 mg/kg/day or 4 doses/day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">•</span>
                  <span><strong>Forms:</strong> Suspension, suppositories, drops for infants</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Ibuprofen</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">•</span>
                  <span><strong>Dosage:</strong> 5-10 mg/kg per dose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">•</span>
                  <span><strong>Frequency:</strong> Every 6-8 hours as needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">•</span>
                  <span><strong>Maximum:</strong> Not to exceed 40 mg/kg/day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">•</span>
                  <span><strong>Age Restriction:</strong> Not for infants under 6 months</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Counseling Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Pharmacist Counseling Points</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key information for patient education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>When to Seek Medical Care</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Fever above 39.4°C (103°F) or lasting more than 3 days</li>
                <li>• Severe pain not relieved by OTC medications</li>
                <li>• Signs of allergic reaction (rash, swelling, difficulty breathing)</li>
                <li>• Black or bloody stools (NSAID use)</li>
                <li>• Symptoms worsening despite treatment</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Storage & Handling</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Store at room temperature (15-30°C)</li>
                <li>• Keep away from moisture and direct sunlight</li>
                <li>• Store out of reach of children</li>
                <li>• Check expiration dates before use</li>
                <li>• Do not transfer to unmarked containers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Combination Products</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Check all medication labels for duplicate ingredients</li>
                <li>• Avoid combining multiple paracetamol-containing products</li>
                <li>• Be aware of multi-symptom cold/flu medications</li>
                <li>• Consult pharmacist about drug interactions</li>
                <li>• Maintain a medication list</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Availability Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Quality Assurance & Product Availability</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Quality Standards</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>WHO Prequalification:</strong> Products from WHO-approved manufacturers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>GMP Compliance:</strong> Good Manufacturing Practice certified facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Bioequivalence:</strong> Generic formulations meet bioequivalence standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Stability Testing:</strong> Climate zone-appropriate formulations for Africa</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Distribution Network</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Wide Availability:</strong> Hospital, community pharmacies, and retail outlets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Multiple Brands:</strong> Generic and branded options at various price points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Pack Sizes:</strong> From single doses to bulk packaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Counterfeit Prevention:</strong> Authentication measures and secure supply chain</span>
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
              <div className="text-4xl mb-2 text-[#7C944B]">8</div>
              <div className="text-gray-600">Product Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">35+</div>
              <div className="text-gray-600">Product Variations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">100%</div>
              <div className="text-gray-600">WHO Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">24/7</div>
              <div className="text-gray-600">Availability</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}