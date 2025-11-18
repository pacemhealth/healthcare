import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function SkinCareTopicalsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Skin Care & Topical Medications",
    "description": "Antifungal creams, antibacterial ointments, anti-inflammatory topicals for skin conditions across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'antifungal-topicals',
      name: 'Antifungal Topical Treatments',
      products: ['Clotrimazole cream/powder', 'Miconazole cream', 'Terbinafine cream', 'Ketoconazole cream/shampoo', 'Nystatin cream', 'Tolnaftate powder', 'Undecylenic acid'],
      icon: '🦠',
      description: 'Fungal infections: ringworm, athlete\'s foot, candidiasis'
    },
    {
      id: 'antibacterial-topicals',
      name: 'Antibacterial Topical Agents',
      products: ['Neomycin/Polymyxin/Bacitracin ointment', 'Mupirocin cream (impetigo)', 'Gentamicin cream', 'Silver sulfadiazine (burns)', 'Fusidic acid cream', 'Chlorhexidine solutions'],
      icon: '💉',
      description: 'Bacterial skin infections and wound care'
    },
    {
      id: 'antiseptics-wound-care',
      name: 'Antiseptics & Wound Care',
      products: ['Povidone-iodine solution', 'Hydrogen peroxide', 'Chlorhexidine gluconate', 'Alcohol-based antiseptics', 'Saline wound wash', 'Benzalkonium chloride', 'Wound healing ointments'],
      icon: '🩹',
      description: 'Wound cleansing and infection prevention'
    },
    {
      id: 'scabies-ectoparasites',
      name: 'Scabies & Ectoparasite Treatments',
      products: ['Permethrin cream (5%)', 'Benzyl benzoate lotion', 'Sulfur ointment', 'Ivermectin (oral - where indicated)', 'Lindane (restricted use)', 'Crotamiton cream'],
      icon: '🐛',
      description: 'Scabies, lice, and skin parasites'
    },
    {
      id: 'corticosteroid-creams',
      name: 'Topical Corticosteroids',
      products: ['Hydrocortisone 1% cream (mild)', 'Betamethasone cream (potent)', 'Clobetasol cream (very potent)', 'Mometasone cream', 'Triamcinolone cream', 'Combination steroid + antifungal/antibiotic'],
      icon: '💊',
      description: 'Anti-inflammatory for eczema, dermatitis, allergic reactions'
    },
    {
      id: 'acne-treatments',
      name: 'Acne & Comedone Treatments',
      products: ['Benzoyl peroxide gel/wash', 'Salicylic acid products', 'Adapalene gel (retinoid)', 'Azelaic acid cream', 'Sulfur-based acne products', 'Tea tree oil acne treatments'],
      icon: '🧴',
      description: 'Acne vulgaris management and prevention'
    },
    {
      id: 'moisturizers-emollients',
      name: 'Moisturizers & Emollients',
      products: ['Petroleum jelly (Vaseline)', 'Aqueous cream', 'Glycerin lotions', 'Urea cream (10-20%)', 'Shea butter products', 'Cocoa butter', 'Lanolin-based emollients', 'Ceramide moisturizers'],
      icon: '🧴',
      description: 'Dry skin, eczema support, skin barrier repair'
    },
    {
      id: 'anti-itch-antipruritic',
      name: 'Anti-Itch & Antipruritic Products',
      products: ['Calamine lotion', 'Menthol/camphor lotions', 'Pramoxine cream', 'Diphenhydramine cream', 'Hydrocortisone + antipruritic combinations', 'Cooling gels'],
      icon: '🌡️',
      description: 'Itching relief from rashes, insect bites, allergies'
    },
    {
      id: 'sunscreens-protection',
      name: 'Sunscreens & Sun Protection',
      products: ['SPF 30-50+ broad spectrum sunscreens', 'Physical blockers (zinc oxide, titanium dioxide)', 'Water-resistant formulations', 'Lip balms with SPF', 'After-sun care products', 'Melanin-friendly formulations'],
      icon: '☀️',
      description: 'UV protection and sun damage prevention'
    },
    {
      id: 'skin-lightening',
      name: 'Skin Tone & Hyperpigmentation',
      products: ['Hydroquinone cream (2-4%, regulated)', 'Kojic acid products', 'Vitamin C serums', 'Niacinamide creams', 'Alpha arbutin', 'Licorice extract', 'Safe skin brightening formulations'],
      icon: '✨',
      description: 'Hyperpigmentation, melasma, dark spots (safe products only)'
    },
    {
      id: 'burn-care',
      name: 'Burn Care & Healing',
      products: ['Silver sulfadiazine cream', 'Aloe vera gel', 'Burn dressings', 'Petroleum-based ointments', 'Honey-based burn treatments', 'Cooling burn gels', 'Scar prevention products'],
      icon: '🔥',
      description: 'Minor burns, scalds, and thermal injuries'
    },
    {
      id: 'antiviral-topicals',
      name: 'Antiviral Topical Treatments',
      products: ['Acyclovir cream (cold sores/herpes)', 'Podophyllin solution (warts)', 'Imiquimod cream (warts, molluscum)', 'Salicylic acid (wart removal)', 'Cryotherapy products'],
      icon: '🦠',
      description: 'Viral skin infections: herpes, warts, molluscum'
    },
    {
      id: 'specialized-dermatology',
      name: 'Specialized Dermatological Products',
      products: ['Psoriasis treatments (coal tar, salicylic acid)', 'Vitiligo products (tacrolimus)', 'Keloid/scar treatments', 'Anti-aging retinol products', 'Rosacea treatments', 'Seborrheic dermatitis products'],
      icon: '🔬',
      description: 'Chronic skin conditions and specialized care'
    },
    {
      id: 'pediatric-skin-care',
      name: 'Pediatric Skin Care',
      products: ['Baby diaper rash cream (zinc oxide)', 'Gentle baby moisturizers', 'Cradle cap treatments', 'Pediatric eczema creams', 'Mild baby soaps/cleansers', 'Baby sunscreen', 'Prickly heat powder'],
      icon: '👶',
      description: 'Age-appropriate skin care for infants and children'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Skin Care & Topical Medications | Dermatology Products | Pacem Health"
        description="Skin care and topical medications including antifungal creams, antibacterial ointments, anti-inflammatory topicals. Essential dermatology solutions for African healthcare."
        keywords={[
          'topical medications Africa',
          'skin care products',
          'antifungal creams Africa',
          'antibacterial ointments',
          'dermatology products',
          'topical treatments',
          'skin infection treatments Africa',
          'dermatological care'
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
            <span>Skin Care & Topicals</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#7C944B] to-[#5A6D35] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Skin Care & Topical Treatments
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive dermatological care products addressing Africa's unique skin health challenges. From antifungal and antibacterial treatments for tropical climate infections to specialized care for eczema, scabies, and wound healing, we provide evidence-based topical therapies that protect, treat, and maintain skin health across diverse African skin types and environmental conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of skin care and topical treatment products</p>
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

      {/* Common Skin Conditions in Africa Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Common Skin Conditions in African Climates</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tropical and sub-tropical environments create unique dermatological challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🦠</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Fungal Infections (Dermatomycoses)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Extremely common in hot, humid climates
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Types:</strong> Ringworm (tinea corporis), athlete's foot (tinea pedis), jock itch (tinea cruris), scalp fungus (tinea capitis), nail fungus (onychomycosis)
              </p>
              <p className="text-sm text-gray-700">
                <strong>Treatment:</strong> Topical antifungals (clotrimazole, miconazole, terbinafine), keep affected areas dry, improve hygiene
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🐛</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Scabies</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Endemic in many African regions, especially overcrowded settings
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Symptoms:</strong> Intense itching (worse at night), burrows between fingers, wrists, waistline. Highly contagious through direct contact
              </p>
              <p className="text-sm text-gray-700">
                <strong>Treatment:</strong> Permethrin 5% cream (first-line), benzyl benzoate lotion. Treat entire household, wash bedding/clothing in hot water
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💧</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Bacterial Skin Infections</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Common types:</strong> Impetigo, folliculitis, cellulitis, infected wounds
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Risk factors:</strong> Poor hygiene, crowding, skin trauma, insect bites, scratching
              </p>
              <p className="text-sm text-gray-700">
                <strong>Treatment:</strong> Topical antibiotics (mupirocin, fusidic acid) for localized infections. Oral antibiotics if severe or spreading
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌡️</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Eczema & Atopic Dermatitis</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Increasing in urban African populations
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Symptoms:</strong> Dry, itchy, inflamed skin. Can be triggered by heat, sweat, dust, stress
              </p>
              <p className="text-sm text-gray-700">
                <strong>Treatment:</strong> Emollients (frequent moisturizing), topical corticosteroids (hydrocortisone), avoid triggers, cool compresses
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">☀️</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Sun Damage & Hyperpigmentation</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Challenge:</strong> High UV exposure year-round, melanin-rich skin can develop post-inflammatory hyperpigmentation
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Conditions:</strong> Melasma, dark spots, uneven skin tone, photoaging
              </p>
              <p className="text-sm text-gray-700">
                <strong>Prevention/Treatment:</strong> Broad-spectrum sunscreen, protective clothing, safe skin brightening agents (vitamin C, niacinamide, kojic acid)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌿</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Acne Vulgaris</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common in adolescents and young adults across Africa
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Exacerbating factors:</strong> Heat, humidity, sweat, occlusive cosmetics, stress
              </p>
              <p className="text-sm text-gray-700">
                <strong>Treatment:</strong> Benzoyl peroxide, salicylic acid, topical retinoids (adapalene). Avoid comedogenic products, gentle cleansing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tropical Dermatology Considerations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Tropical Climate Dermatology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Environmental factors influencing skin health in Africa
            </p>
          </div>

          <div className="bg-[#E6F4EA] border-2 border-[#34A853] rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🌍</div>
              <div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Climate Impact on Skin Conditions</h4>
                <p className="text-gray-700 mb-3">
                  Tropical and sub-tropical climates create a perfect environment for skin infections and conditions due to high temperature, humidity, UV exposure, and environmental challenges. Understanding these factors helps guide appropriate treatment and prevention strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>High Humidity</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Promotes fungal growth (ringworm, candidiasis)</li>
                <li>• Maceration of skin folds</li>
                <li>• Prickly heat (miliaria)</li>
                <li>• Bacterial proliferation</li>
                <li>• Slower wound healing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🌡️</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Heat & Sweating</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Heat rash (prickly heat)</li>
                <li>• Folliculitis from sweat</li>
                <li>• Acne exacerbation</li>
                <li>• Dehydration affecting skin</li>
                <li>• Sweat duct blockage</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">☀️</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>UV Exposure</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Year-round high UV index</li>
                <li>• Post-inflammatory hyperpigmentation</li>
                <li>• Photoaging (even in melanin-rich skin)</li>
                <li>• Vitamin D synthesis (benefit)</li>
                <li>• Skin cancer (lower but present risk)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🦟</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Environmental Factors</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Insect bites (secondary infections)</li>
                <li>• Dust and pollution</li>
                <li>• Water scarcity (hygiene challenges)</li>
                <li>• Overcrowding (contagious conditions)</li>
                <li>• Limited healthcare access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Use Guidelines Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Safe Use of Topical Medications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important guidelines for effective and safe topical treatment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Key Safety Considerations</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Steroid Strength Awareness:</strong> Don't use potent corticosteroids on face, groin, or for extended periods (skin thinning, striae)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Antifungal Duration:</strong> Continue treatment for full course (2-4 weeks) even after symptoms improve to prevent recurrence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Skin Lightening Products:</strong> Avoid mercury-containing products, high-dose steroids, or unregulated bleaching agents (serious health risks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Scabies Treatment:</strong> Apply from neck down to entire body, leave on 8-14 hours, treat all household members simultaneously</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Wound Care:</strong> Keep wounds clean and covered, watch for signs of infection (increased redness, pus, warmth, fever)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>When to Seek Medical Care</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Spreading Infections:</strong> Redness, warmth spreading beyond initial area, red streaks (lymphangitis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Severe Burns:</strong> Large area, blistering, charred skin, electrical/chemical burns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>No Improvement:</strong> Condition worsening or not improving after 1-2 weeks of OTC treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Systemic Symptoms:</strong> Fever, chills, malaise accompanying skin condition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Allergic Reactions:</strong> Severe itching, swelling, difficulty breathing after product application</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Chronic Conditions:</strong> Persistent eczema, psoriasis, or other dermatological issues requiring specialist care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Topical Corticosteroid Ladder Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Topical Corticosteroid Potency Ladder</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding steroid strength for safe and effective use
            </p>
          </div>

          <div className="bg-[#FFF9E6] border-2 border-[#FFD700] rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Important: Choose Appropriate Potency</h4>
                <p className="text-gray-700">
                  Use the weakest potency steroid that controls symptoms. Potent steroids should not be used on face, groin, or armpits due to increased absorption and risk of side effects (skin thinning, striae, hypopigmentation). Avoid prolonged use without medical supervision.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600, color: '#059669' }}>Class VII - Mild</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Examples:</strong> Hydrocortisone 0.5-1%
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Uses:</strong> Face, groin, armpits, children, mild eczema, diaper rash
              </p>
              <p className="text-sm text-gray-700">
                <strong>Safety:</strong> Safest for long-term use and sensitive areas
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600, color: '#2563EB' }}>Class V-VI - Moderate</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Examples:</strong> Hydrocortisone 2.5%, Triamcinolone 0.1%
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Uses:</strong> Trunk, limbs, moderate dermatitis
              </p>
              <p className="text-sm text-gray-700">
                <strong>Duration:</strong> Short courses (1-2 weeks), then reassess
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600, color: '#EA580C' }}>Class III-IV - Potent</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Examples:</strong> Betamethasone 0.1%, Mometasone
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Uses:</strong> Severe eczema, thick plaques, body only
              </p>
              <p className="text-sm text-gray-700">
                <strong>Caution:</strong> Avoid face/groin, limit duration, medical supervision
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600, color: '#DC2626' }}>Class I-II - Very Potent</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Examples:</strong> Clobetasol 0.05%
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Uses:</strong> Severe psoriasis, thick plaques, limited areas
              </p>
              <p className="text-sm text-gray-700">
                <strong>Warning:</strong> Short-term only, prescription-strength, specialist supervision required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skin Lightening Safety Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Skin Lightening & Hyperpigmentation: Safe Practices</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Addressing hyperpigmentation safely without harmful bleaching agents
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🚫</div>
              <div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600, color: '#DC2626' }}>DANGER: Avoid Harmful Skin Bleaching Products</h4>
                <p className="text-gray-700 mb-3">
                  Many skin lightening products in African markets contain dangerous ingredients that cause serious health problems:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• <strong>Mercury:</strong> Kidney damage, neurological problems, skin discoloration (BANNED - do not use)</li>
                  <li>• <strong>High-dose steroids:</strong> Skin thinning, striae (stretch marks), increased infection risk, Cushing's syndrome</li>
                  <li>• <strong>Hydroquinone &gt;4%:</strong> Ochronosis (permanent darkening), increased cancer risk (use only under medical supervision)</li>
                  <li>• <strong>Unregulated products:</strong> Unknown ingredients, contamination, unpredictable effects</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Safe Alternatives for Hyperpigmentation</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Hydroquinone 2-4%:</strong> FDA-approved concentration, use under supervision, max 3-4 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Kojic Acid:</strong> Natural skin brightener, inhibits melanin production, safer for long-term use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Vitamin C (Ascorbic Acid):</strong> Antioxidant, brightening, safe, improves skin tone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Niacinamide:</strong> Reduces melanin transfer, anti-inflammatory, safe for all skin types</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Alpha Arbutin:</strong> Plant-derived, gentle, effective for dark spots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Licorice Extract:</strong> Natural, anti-inflammatory, gradual lightening</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Prevention is Key</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">1</span>
                  <span><strong>Sun Protection:</strong> Daily broad-spectrum SPF 30+ sunscreen (prevents darkening, most important step)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">2</span>
                  <span><strong>Treat Inflammation Early:</strong> Address acne, eczema, injuries promptly to prevent post-inflammatory hyperpigmentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">3</span>
                  <span><strong>Gentle Skin Care:</strong> Avoid harsh scrubbing, picking at skin (causes trauma and darkening)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">4</span>
                  <span><strong>Professional Treatment:</strong> Dermatologist guidance for melasma, severe hyperpigmentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">5</span>
                  <span><strong>Realistic Expectations:</strong> Safe lightening is gradual (months), aims for even tone, not changing natural skin color</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wound Care & Healing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Wound Care & Healing Principles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proper wound management to prevent infection and promote healing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#E6F4EA] p-8 rounded-xl">
              <div className="text-4xl mb-4">1️⃣</div>
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Clean the Wound</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Wash hands before touching wound</li>
                <li>• Rinse wound with clean water or saline</li>
                <li>• Remove dirt, debris gently</li>
                <li>• Apply antiseptic (povidone-iodine, chlorhexidine)</li>
                <li>• Pat dry with clean cloth/gauze</li>
                <li>• For dirty/contaminated wounds, seek medical care</li>
              </ul>
            </div>

            <div className="bg-[#E6F4EA] p-8 rounded-xl">
              <div className="text-4xl mb-4">2️⃣</div>
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Apply Appropriate Treatment</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Minor wounds: Petroleum jelly or antibiotic ointment</li>
                <li>• Infected wounds: Topical antibiotics (mupirocin, bacitracin)</li>
                <li>• Burns: Silver sulfadiazine, aloe vera, specialized burn dressing</li>
                <li>• Deep/large wounds: May need medical closure (sutures, steri-strips)</li>
                <li>• Keep wound moist for faster healing</li>
              </ul>
            </div>

            <div className="bg-[#E6F4EA] p-8 rounded-xl">
              <div className="text-4xl mb-4">3️⃣</div>
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Cover & Monitor</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Cover with clean, sterile dressing</li>
                <li>• Change dressing daily or when wet/dirty</li>
                <li>• Watch for infection signs (redness, warmth, pus, increased pain)</li>
                <li>• Keep wound dry between cleanings</li>
                <li>• Avoid picking at scabs (delays healing, causes scarring)</li>
                <li>• Tetanus vaccination status check</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pediatric Skin Care Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Pediatric Skin Care</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Special considerations for infant and child dermatology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Diaper Rash</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevention:</strong> Frequent diaper changes, air drying, barrier creams
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Zinc oxide barrier cream (40%)</li>
                <li>• Keep area clean and dry</li>
                <li>• Air exposure when possible</li>
                <li>• If fungal (satellite lesions): antifungal cream + barrier</li>
                <li>• Avoid talc powder (aspiration risk)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Eczema in Children</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Common in infants/children:</strong> Dry, itchy patches on cheeks, elbows, knees
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Management:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Frequent moisturizing (emollients 2-3x daily)</li>
                <li>• Mild corticosteroids (hydrocortisone 1%) for flares</li>
                <li>• Avoid irritants (harsh soaps, wool)</li>
                <li>• Lukewarm baths, pat dry gently</li>
                <li>• Keep nails short to prevent scratching damage</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Cradle Cap (Seborrheic Dermatitis)</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Presentation:</strong> Greasy, scaly patches on infant scalp
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gentle shampooing (baby shampoo)</li>
                <li>• Soft brush to loosen scales</li>
                <li>• Mineral oil application before washing</li>
                <li>• Mild hydrocortisone if inflamed</li>
                <li>• Usually resolves by 6-12 months</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Prickly Heat (Miliaria)</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Common in hot climates:</strong> Blocked sweat ducts, tiny red bumps
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Management:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Keep baby cool, avoid overdressing</li>
                <li>• Loose, breathable cotton clothing</li>
                <li>• Cool baths</li>
                <li>• Calamine lotion for itching</li>
                <li>• Avoid heavy creams/oils that block pores</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Impetigo</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Bacterial infection:</strong> Honey-colored crusted sores, highly contagious
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Topical antibiotics (mupirocin)</li>
                <li>• Gently remove crusts with warm compresses</li>
                <li>• Oral antibiotics if widespread</li>
                <li>• Keep child home until treated (prevent spread)</li>
                <li>• Wash towels, bedding separately</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Sun Protection for Children</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Critical in Africa:</strong> Year-round high UV exposure
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Protection:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Infants &lt;6 months: shade, protective clothing (no sunscreen)</li>
                <li>• Children &gt;6 months: broad-spectrum SPF 30+, mineral-based preferred</li>
                <li>• Reapply every 2 hours, after swimming</li>
                <li>• Hats, long sleeves, seek shade 10am-4pm</li>
                <li>• Even darker skin needs sun protection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Application Tips Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Proper Application Techniques</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Maximizing effectiveness of topical treatments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🧴</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Creams & Ointments</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Wash and dry area first</li>
                <li>• Apply thin layer, rub in gently</li>
                <li>• Use fingertip unit method for dosing</li>
                <li>• Ointments more occlusive (better for very dry skin)</li>
                <li>• Creams lighter, better for hairy areas</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🧪</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Antifungal Treatment</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Clean and dry affected area thoroughly</li>
                <li>• Apply to affected area PLUS 1-2 cm beyond visible lesion</li>
                <li>• Continue for full course (2-4 weeks) after symptoms resolve</li>
                <li>• Keep area dry (moisture promotes fungal growth)</li>
                <li>• Change socks/underwear daily</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Moisturizers</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Apply to damp skin (within 3 min of bathing) for best absorption</li>
                <li>• Use liberally, reapply 2-3x daily for dry skin</li>
                <li>• Downward strokes (direction of hair growth)</li>
                <li>• Ointments &gt; creams &gt; lotions for moisturizing power</li>
                <li>• Apply before steroid cream (wait 30 min after steroid)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">☀️</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Sunscreen</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Apply 15-30 min before sun exposure</li>
                <li>• Use 1 ounce (shot glass) for entire body</li>
                <li>• Reapply every 2 hours, immediately after swimming/sweating</li>
                <li>• Don't forget ears, neck, tops of feet</li>
                <li>• Use even on cloudy days (80% UV penetrates clouds)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Quality Assurance & Product Availability</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Quality Standards</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Pharmaceutical Grade:</strong> All topical medications manufactured in GMP-certified facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Stability Testing:</strong> Products validated for tropical climate storage (30°C/75% RH)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Regulatory Compliance:</strong> Meet local pharmaceutical regulatory requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Safety Screening:</strong> Products screened for mercury, high-dose steroids, banned substances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Appropriate Formulations:</strong> Climate-suitable bases (non-melting ointments, stable creams)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Distribution & Access</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Wide Availability:</strong> Pharmacies, clinics, health centers across urban and rural areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Affordable Options:</strong> Generic and branded products at various price points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Public Health Programs:</strong> Scabies treatments, antifungals included in essential medicine lists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Patient Education:</strong> Clear labeling, pharmacist counseling, usage instructions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Packaging:</strong> Moisture-resistant, tamper-evident, appropriate sizes for treatment courses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">14</div>
              <div className="text-gray-600">Product Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">90+</div>
              <div className="text-gray-600">Product Variations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">100%</div>
              <div className="text-gray-600">Climate-Tested</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">Safe</div>
              <div className="text-gray-600">Mercury-Free</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}