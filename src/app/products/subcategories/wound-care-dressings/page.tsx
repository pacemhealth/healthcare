import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function WoundCareDressingsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Wound Care Dressings",
    "description": "Sterile gauze, non-adherent dressings, advanced wound care products for clinical wound management across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'sterile-gauze',
      name: 'Sterile Gauze & Rolls',
      products: ['Gauze pads (2x2, 4x4, 8x8)', 'Gauze rolls (various widths)', 'Non-woven gauze sponges', 'X-ray detectable gauze', 'Bulk packaging for facilities'],
      icon: '📦'
    },
    {
      id: 'non-adherent-dressings',
      name: 'Non-Adherent Dressings',
      products: ['Paraffin gauze (tulle gras)', 'Silicone-coated dressings', 'Low-adherent pads', 'Contact layer dressings', 'Prevents tissue damage on removal'],
      icon: '🩹'
    },
    {
      id: 'advanced-dressings',
      name: 'Advanced Wound Dressings',
      products: ['Hydrocolloid dressings (DuoDERM-style)', 'Foam dressings (absorbent)', 'Alginate dressings (hemostatic)', 'Hydrogel dressings (moist healing)', 'Hydrofiber technology'],
      icon: '🔬'
    },
    {
      id: 'antimicrobial-dressings',
      name: 'Antimicrobial Dressings',
      products: ['Silver sulfadiazine dressings', 'Silver-impregnated foam', 'Honey-based dressings', 'Iodine-based dressings', 'Prevents infection in chronic wounds'],
      icon: '🛡️'
    },
    {
      id: 'transparent-films',
      name: 'Transparent Film Dressings',
      products: ['Semipermeable films', 'IV site dressings', 'Surgical site protection', 'Waterproof barrier films', 'Allows visual wound inspection'],
      icon: '💧'
    },
    {
      id: 'compression-bandages',
      name: 'Compression Bandages',
      products: ['Elastic bandages (crepe)', 'Short-stretch bandages', 'Long-stretch bandages', 'Multi-layer compression systems', 'Venous ulcer treatment'],
      icon: '🔄'
    },
    {
      id: 'surgical-tapes',
      name: 'Surgical Tapes & Adhesives',
      products: ['Paper tape (hypoallergenic)', 'Cloth tape (strong adhesion)', 'Transparent tape', 'Silicone tape (gentle)', 'Skin adhesives (liquid bandage)'],
      icon: '📌'
    },
    {
      id: 'wound-closure',
      name: 'Wound Closure Products',
      products: ['Adhesive strips (Steri-Strips)', 'Skin closure tapes', 'Surgical staples & removers', 'Suture materials (absorbable, non-absorbable)', 'Tissue adhesives (cyanoacrylate)'],
      icon: '🔗'
    },
    {
      id: 'burn-care',
      name: 'Burn Care Products',
      products: ['Silver sulfadiazine cream (1%)', 'Burn dressings (non-adherent)', 'Hydrogel burn sheets', 'Burn gauze (impregnated)', 'Emergency burn kits'],
      icon: '🔥'
    },
    {
      id: 'wound-accessories',
      name: 'Wound Care Accessories',
      products: ['Wound cleansing solutions (saline, antiseptics)', 'Irrigation syringes', 'Wound measurement guides', 'Skin barrier wipes', 'Dressing scissors & forceps'],
      icon: '🧰'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Wound Care Dressings | Medical Wound Management | Pacem Health"
        description="Wound care dressings including sterile gauze, non-adherent dressings, advanced wound care products. Comprehensive wound management supplies for African healthcare facilities."
        keywords={[
          'wound care dressings Africa',
          'sterile gauze',
          'medical dressings',
          'wound management',
          'advanced wound care',
          'surgical dressings',
          'wound treatment supplies',
          'medical wound care'
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
            <span>Wound Care & Dressings</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Wound Care & Dressings
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive range of advanced wound dressings, sterile gauze, bandages, and healing solutions designed to promote faster healing, prevent infection, and reduce scarring. From basic gauze to advanced antimicrobial dressings, our products address Africa's high burden of traumatic injuries, surgical wounds, burns, and chronic ulcers.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of wound care and dressing products</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Modern Wound Care Principles</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based wound management promotes moist wound healing, reduces infection risk, and accelerates tissue repair compared to traditional dry dressing techniques.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Moist wound environment speeds healing by 50%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Advanced dressings reduce dressing changes (less pain, lower cost)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Antimicrobial dressings prevent biofilm formation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Non-adherent products reduce tissue trauma during removal</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality & Sterility Assurance</h3>
              <p className="text-gray-700 mb-4">
                All wound care products meet international sterility and safety standards with validated packaging for tropical climates.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Gamma-irradiated or EtO sterilization validated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ISO 13485 certified manufacturing facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Tropical climate packaging (heat & humidity stable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterility indicators on every package</span>
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
              Wound care addresses major health challenges across the continent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🚗</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Trauma & Road Traffic Injuries</h4>
              <p className="text-sm text-gray-700">
                Africa has the world's highest road traffic fatality rate. Proper wound care (gauze, dressings, antiseptics) prevents infection in traumatic injuries, reducing mortality and disability from preventable complications like sepsis and tetanus.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🔪</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Surgical Site Infections (SSIs)</h4>
              <p className="text-sm text-gray-700">
                SSI rates in Africa (5-30%) are 5-10 times higher than developed countries. Advanced dressings with antimicrobial properties (silver, honey) significantly reduce infection risk, shortening hospital stays and preventing deaths from post-operative sepsis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🩺</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Chronic Wounds (Diabetic Ulcers)</h4>
              <p className="text-sm text-gray-700">
                Rising diabetes prevalence creates epidemic of foot ulcers leading to amputations. Advanced wound care (hydrocolloid, foam, alginate dressings) promotes healing, prevents infection, and saves limbs when combined with glycemic control and debridement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wound Healing Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Wound Care Challenges in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Context-specific barriers require adapted solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Resource Limitations</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Limited Product Availability:</strong> Advanced dressings expensive, rarely stocked → reliance on gauze alone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Frequent Dressing Changes:</strong> Basic gauze requires daily changes (painful, time-consuming, costly)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Lack of Specialist Nurses:</strong> Few trained wound care nurses → suboptimal dressing selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Water Scarcity:</strong> Wound irrigation, hand hygiene compromised in water-scarce facilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Clinical Challenges</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>High Infection Rates:</strong> Environmental contamination, overcrowding, limited hand hygiene</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Delayed Presentation:</strong> Patients present with advanced, infected wounds (harder to heal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Malnutrition:</strong> Protein-energy malnutrition impairs wound healing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Co-morbidities:</strong> HIV, TB, diabetes complicate wound management</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Cost-Effective Solutions</h4>
                <p className="text-sm text-gray-700 mb-3">
                  While advanced dressings cost more upfront, they reduce total cost of care:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Traditional Gauze:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Daily dressing changes (high nursing time)</li>
                      <li>• Painful removal (tissue trauma)</li>
                      <li>• Longer healing times</li>
                      <li>• Higher infection risk</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Advanced Dressings:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Changes every 3-7 days (less nursing time)</li>
                      <li>✓ Painless removal (non-adherent)</li>
                      <li>✓ 50% faster healing</li>
                      <li>✓ Lower infection rates</li>
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
              Expert guidance on wound assessment and evidence-based dressing selection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Wound Assessment</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Wound measurement & staging</li>
                <li>• Tissue type identification</li>
                <li>• Exudate level assessment</li>
                <li>• Infection signs recognition</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Dressing Selection</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Match dressing to wound type</li>
                <li>• Exudate management strategies</li>
                <li>• Antimicrobial dressing indications</li>
                <li>• Cost-effectiveness analysis</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Application Techniques</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Aseptic technique (hand hygiene)</li>
                <li>• Wound cleansing protocols</li>
                <li>• Dressing application & fixation</li>
                <li>• Safe dressing removal</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Specialized Wounds</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Diabetic foot ulcer care</li>
                <li>• Burn management protocols</li>
                <li>• Surgical wound care</li>
                <li>• Pressure ulcer prevention</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Need Wound Care Supplies?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us for bulk pricing, product specifications, and wound care training support.
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