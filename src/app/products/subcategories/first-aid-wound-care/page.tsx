import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function FirstAidWoundCarePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "First Aid & Wound Care Products",
    "description": "Antiseptic solutions, bandages, wound dressings, topical antibiotics, medical tapes for wound treatment and first aid across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'antiseptic-solutions',
      name: 'Antiseptic Solutions & Cleansers',
      products: ['Povidone-iodine 10% solution', 'Chlorhexidine gluconate 4%', 'Hydrogen peroxide 3%', 'Alcohol-based antiseptics (70% isopropyl)', 'Benzalkonium chloride', 'Saline wound wash', 'Antiseptic wipes/swabs'],
      icon: '🧪',
      description: 'Wound cleansing and infection prevention'
    },
    {
      id: 'topical-antibiotics',
      name: 'Topical Antibiotic Ointments',
      products: ['Triple antibiotic ointment (Neomycin/Polymyxin/Bacitracin)', 'Mupirocin 2% ointment', 'Gentamicin cream', 'Silver sulfadiazine cream (burns)', 'Fusidic acid cream', 'Bacitracin zinc ointment'],
      icon: '💊',
      description: 'Preventing and treating wound infections'
    },
    {
      id: 'bandages-gauze',
      name: 'Bandages, Gauze & Dressings',
      products: ['Sterile gauze pads (various sizes)', 'Rolled gauze bandages', 'Elastic bandages (compression)', 'Adhesive bandages (various sizes)', 'Triangular bandages (slings)', 'Tubular gauze', 'Non-stick pads', 'Eye pads'],
      icon: '🩹',
      description: 'Wound coverage and protection'
    },
    {
      id: 'advanced-dressings',
      name: 'Advanced Wound Dressings',
      products: ['Hydrocolloid dressings', 'Foam dressings', 'Alginate dressings', 'Transparent film dressings', 'Hydrogel dressings', 'Silver-impregnated dressings', 'Honey-based wound dressings', 'Charcoal dressings (odor control)'],
      icon: '🔬',
      description: 'Specialized dressings for complex wounds'
    },
    {
      id: 'adhesive-tapes',
      name: 'Medical Tapes & Adhesives',
      products: ['Micropore tape', 'Zinc oxide tape (athletic)', 'Silk/cloth tape', 'Waterproof adhesive tape', 'Paper tape (sensitive skin)', 'Elastic adhesive bandage', 'Butterfly closures/Steri-Strips', 'Liquid bandage'],
      icon: '📏',
      description: 'Securing dressings and wound closure'
    },
    {
      id: 'burn-care',
      name: 'Burn Care Products',
      products: ['Burn gel/cream', 'Silver sulfadiazine cream', 'Burn dressings (non-stick)', 'Aloe vera gel', 'Hydrogel burn pads', 'Cooling burn spray', 'Burn sheets/blankets', 'Petroleum jelly'],
      icon: '🔥',
      description: 'Treatment and management of thermal injuries'
    },
    {
      id: 'hemostatic-products',
      name: 'Hemostatic & Bleeding Control',
      products: ['Hemostatic gauze/sponges', 'Pressure bandages', 'Tourniquet', 'Styptic pencil/powder', 'Nosebleed plugs', 'Compression bandages', 'Emergency trauma dressings', 'Cellulose hemostatic agents'],
      icon: '🩸',
      description: 'Controlling severe bleeding and hemorrhage'
    },
    {
      id: 'wound-closure',
      name: 'Wound Closure & Suture Products',
      products: ['Steri-Strips (butterfly closures)', 'Skin adhesive glue (Dermabond)', 'Suture kits (trained personnel)', 'Staples and staple removers', 'Wound closure strips', 'Tissue adhesive'],
      icon: '🪡',
      description: 'Non-invasive and invasive wound closure methods'
    },
    {
      id: 'first-aid-essentials',
      name: 'First Aid Kit Essentials',
      products: ['Disposable gloves (nitrile/latex)', 'Scissors (trauma shears)', 'Tweezers/forceps', 'Safety pins', 'Cotton balls/swabs', 'Instant cold packs', 'CPR face shield', 'Thermometer', 'Emergency blanket', 'First aid manual'],
      icon: '🧰',
      description: 'Essential tools and supplies for emergency care'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="First Aid & Wound Care Products | Antiseptics & Bandages | Pacem Health"
        description="First aid and wound care products including antiseptic solutions, bandages, wound dressings, topical antibiotics, medical tapes, burn care. Essential supplies preventing infection and supporting healing across African communities."
        keywords={[
          'first aid products Africa',
          'wound care supplies',
          'antiseptic solutions Africa',
          'bandages Africa',
          'wound dressings',
          'topical antibiotics',
          'burn care products',
          'medical tapes Africa'
        ]}
        structuredData={productSchema}
      />
      {/* Breadcrumb Bar */}
      <section className="bg-[#7C944B] text-white py-3">
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
            <span>First Aid & Wound Care</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#7C944B] to-[#5A6D35] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              First Aid & Wound Care
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive emergency and wound care solutions designed for African healthcare settings where immediate medical access may be limited. From antiseptic solutions and advanced wound dressings to burn care and bleeding control, we provide essential first aid supplies that enable effective initial treatment, prevent infection, and support healing in diverse environments ranging from urban clinics to remote community health posts.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of first aid and wound care products</p>
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

      {/* First Aid in African Settings Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">First Aid in African Healthcare Settings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unique challenges and considerations for emergency care across the continent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🏥</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Limited Healthcare Access</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Challenge:</strong> Many communities are hours away from the nearest hospital or clinic
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Impact:</strong> First aid becomes critical primary care, not just temporary care before medical treatment
              </p>
              <p className="text-sm text-gray-700">
                <strong>Solution:</strong> Comprehensive first aid kits at community health posts, schools, workplaces. Training community health workers in advanced first aid and wound management
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌡️</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Tropical Climate Challenges</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Heat & Humidity:</strong> Increased infection risk, faster wound contamination, adhesive failure
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Storage:</strong> Some products degrade rapidly without climate control (adhesives melt, solutions concentrate)
              </p>
              <p className="text-sm text-gray-700">
                <strong>Solution:</strong> Climate-stable products, frequent first aid kit rotation, moisture-proof packaging, storage in cool locations
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💧</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Water & Sanitation Access</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Challenge:</strong> Clean water not always available for wound cleansing
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Risk:</strong> Using contaminated water can worsen infections
              </p>
              <p className="text-sm text-gray-700">
                <strong>Solution:</strong> Antiseptic wipes, alcohol-based cleansers, packaged saline solution, boiled/treated water when possible. Hand sanitizer for caregivers
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🔥</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Common Injuries & Burns</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Frequent:</strong> Cooking burns (open fires, hot oil), agricultural injuries, snake bites, traffic accidents
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Severity:</strong> Often present late with infection, traditional remedies may complicate (ash, herbs on burns)
              </p>
              <p className="text-sm text-gray-700">
                <strong>Management:</strong> Early proper wound care critical. Burn care supplies, tetanus prevention, antibiotics when indicated
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💰</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Cost & Affordability</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Reality:</strong> Many families cannot afford advanced wound care products
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Result:</strong> Improvised dressings (cloth, plastic bags), delayed care, untreated wounds
              </p>
              <p className="text-sm text-gray-700">
                <strong>Solution:</strong> Affordable basic supplies (gauze, antiseptics), community first aid stations, government/NGO distribution programs
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🎓</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Training & Knowledge Gaps</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Issue:</strong> Limited formal first aid training in many communities
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Misconceptions:</strong> Harmful traditional practices (applying butter to burns, using dirty cloth)
              </p>
              <p className="text-sm text-gray-700">
                <strong>Solution:</strong> Community-based first aid training, visual instruction guides, train-the-trainer programs, school-based first aid education
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wound Care Protocol Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Proper Wound Care Protocol</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Evidence-based steps for effective wound management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-[#E6F4EA] p-6 rounded-xl">
              <div className="text-4xl mb-4">1️⃣</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Stop the Bleeding</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Apply direct pressure with clean cloth/gauze</li>
                <li>• Elevate injured area above heart if possible</li>
                <li>• Apply pressure for 5-10 minutes continuously</li>
                <li>• For severe bleeding: pressure points, hemostatic gauze</li>
                <li>• Tourniquet only for life-threatening limb bleeding</li>
              </ul>
            </div>

            <div className="bg-[#E6F4EA] p-6 rounded-xl">
              <div className="text-4xl mb-4">2️⃣</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Clean Your Hands</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Wash hands with soap and water for 20 seconds</li>
                <li>• If no water: alcohol-based hand sanitizer (60%+ alcohol)</li>
                <li>• Put on disposable gloves if available</li>
                <li>• Never touch wound with dirty hands</li>
                <li>• Prevents introducing bacteria into wound</li>
              </ul>
            </div>

            <div className="bg-[#E6F4EA] p-6 rounded-xl">
              <div className="text-4xl mb-4">3️⃣</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Clean the Wound</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Rinse with clean water or saline solution</li>
                <li>• Remove visible dirt, debris gently</li>
                <li>• Apply antiseptic (povidone-iodine, chlorhexidine)</li>
                <li>• Pat dry with clean gauze</li>
                <li>• Do NOT use alcohol directly on open wounds (painful, tissue damage)</li>
              </ul>
            </div>

            <div className="bg-[#E6F4EA] p-6 rounded-xl">
              <div className="text-4xl mb-4">4️⃣</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Apply Treatment</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Small clean wounds: antibiotic ointment (thin layer)</li>
                <li>• Keeps wound moist, prevents infection</li>
                <li>• Burns: specialized burn cream, cool gel</li>
                <li>• Deep/contaminated: seek medical care before applying ointment</li>
                <li>• Do NOT apply: butter, oils, toothpaste, herbs</li>
              </ul>
            </div>

            <div className="bg-[#E6F4EA] p-6 rounded-xl">
              <div className="text-4xl mb-4">5️⃣</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Cover & Monitor</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Cover with sterile bandage/dressing</li>
                <li>• Change dressing daily or when wet/dirty</li>
                <li>• Watch for infection signs (redness, warmth, pus, increased pain, fever)</li>
                <li>• Keep wound dry between cleanings</li>
                <li>• Seek medical care if infection develops</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">⚠️</div>
              <div>
                <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Tetanus Prevention</h4>
                <p className="text-sm text-gray-700">
                  For dirty wounds, puncture wounds, animal bites, or if tetanus vaccination status is unknown or last dose was more than 5 years ago, seek medical care for tetanus prophylaxis. Tetanus is preventable but fatal if it develops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Wounds Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Types of Wounds & Appropriate Treatment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Different wounds require different care approaches
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Abrasions (Scrapes)</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Description:</strong> Superficial skin injury from friction (falls on rough surface)
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• Clean thoroughly to remove dirt/debris</li>
                <li>• Apply antibiotic ointment</li>
                <li>• Cover with non-stick pad or bandage</li>
                <li>• Change dressing daily</li>
              </ul>
              <p className="text-sm text-gray-700">
                <strong>Risk:</strong> High contamination risk if not cleaned well
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Lacerations (Cuts)</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Description:</strong> Deep cut through skin layers from sharp objects
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• Control bleeding with direct pressure</li>
                <li>• Small/shallow: clean, apply Steri-Strips or liquid bandage</li>
                <li>• Deep/gaping: needs medical care (sutures/staples)</li>
                <li>• Face/joint wounds: medical care for best healing</li>
              </ul>
              <p className="text-sm text-gray-700">
                <strong>Urgent if:</strong> Deep, won't stop bleeding, involves tendons/nerves
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Puncture Wounds</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Description:</strong> Deep narrow wound from sharp pointed object (nail, thorn, animal bite)
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• Do NOT remove embedded object (stabilize it)</li>
                <li>• Clean surface, apply antiseptic</li>
                <li>• Seek medical care (high infection risk, tetanus concern)</li>
                <li>• May need antibiotics, tetanus shot</li>
              </ul>
              <p className="text-sm text-gray-700">
                <strong>Risk:</strong> Deep infection, tetanus (especially rusty objects, soil)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Avulsion (Torn Tissue)</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Description:</strong> Skin/tissue partially or completely torn away (machinery, animal attacks)
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• Control bleeding with pressure bandage</li>
                <li>• If tissue still attached: rinse, replace in normal position</li>
                <li>• If completely torn: wrap tissue in saline-moistened gauze, ice</li>
                <li>• Immediate medical care required</li>
              </ul>
              <p className="text-sm text-gray-700">
                <strong>Emergency:</strong> Tissue reattachment possible if treated quickly
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Burns (Thermal)</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Classification:</strong> 1st degree (red), 2nd degree (blisters), 3rd degree (charred/white)
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• Cool with clean water 10-20 minutes (not ice)</li>
                <li>• Remove jewelry, tight clothing before swelling</li>
                <li>• 1st/small 2nd degree: burn gel, aloe, non-stick dressing</li>
                <li>• Large/3rd degree burns: medical care immediately</li>
              </ul>
              <p className="text-sm text-gray-700">
                <strong>Never:</strong> Apply ice, butter, oil, toothpaste, or break blisters
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Infected Wounds</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Signs:</strong> Increasing redness/warmth, pus, red streaks, swelling, fever, increased pain
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• Seek medical care (may need oral/IV antibiotics)</li>
                <li>• Keep wound clean, change dressings frequently</li>
                <li>• Elevate affected area</li>
                <li>• Do NOT ignore signs of spreading infection</li>
              </ul>
              <p className="text-sm text-gray-700">
                <strong>Danger:</strong> Sepsis, abscess, tissue death if untreated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Medical Care Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">When to Seek Immediate Medical Care</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Some wounds require professional medical treatment beyond first aid
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600, color: '#DC2626' }}>URGENT - Seek Care Immediately</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🚨</span>
                  <span><strong>Severe Bleeding:</strong> Blood spurting, soaking through bandages, won't stop after 10 minutes pressure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🚨</span>
                  <span><strong>Deep Wounds:</strong> Can see bone, muscle, or fat. Gaping wound edges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🚨</span>
                  <span><strong>Embedded Objects:</strong> Large object stuck in wound (do not remove)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🚨</span>
                  <span><strong>Loss of Function:</strong> Cannot move fingers/toes, numbness, loss of sensation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🚨</span>
                  <span><strong>Severe Burns:</strong> Large area, 3rd degree (charred/white), electrical/chemical burns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🚨</span>
                  <span><strong>Animal/Human Bites:</strong> High infection risk, rabies concern</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🚨</span>
                  <span><strong>Signs of Shock:</strong> Pale, cold/clammy skin, rapid pulse, confusion, unconsciousness</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-8">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600, color: '#EA580C' }}>IMPORTANT - Seek Care Within Hours</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">⚠️</span>
                  <span><strong>Face/Eye/Genital Wounds:</strong> Need careful treatment to prevent scarring/complications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">⚠️</span>
                  <span><strong>Infection Signs:</strong> Increasing redness, pus, red streaks, warmth, swelling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">⚠️</span>
                  <span><strong>Dirty/Contaminated Wounds:</strong> Soil, animal feces, rusty object (tetanus risk)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">⚠️</span>
                  <span><strong>Wounds Over Joints:</strong> May affect movement if not properly treated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">⚠️</span>
                  <span><strong>Fever Develops:</strong> Temperature above 38°C (100.4°F) after injury</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">⚠️</span>
                  <span><strong>Diabetes/Immunocompromised:</strong> Higher infection risk, need professional monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">⚠️</span>
                  <span><strong>Not Healing:</strong> No improvement after 48-72 hours of proper care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Burn Care Detailed Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Burn Care: Classification & Treatment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Burns are common in African settings due to cooking with open fires and hot oil
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600, color: '#CA8A04' }}>First-Degree Burns</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Appearance:</strong> Red, painful, no blisters. Affects outer skin layer only (epidermis)
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Examples:</strong> Mild sunburn, brief contact with hot object
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• Cool with water 10-15 minutes</li>
                <li>• Aloe vera gel or burn cream</li>
                <li>• Over-the-counter pain relief</li>
                <li>• Moisturize as it heals</li>
              </ul>
              <p className="text-sm text-gray-700">
                <strong>Healing:</strong> 3-7 days, no scarring
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600, color: '#EA580C' }}>Second-Degree Burns</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Appearance:</strong> Red, blistered, swollen, very painful. Affects epidermis + dermis
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Examples:</strong> Severe sunburn, hot liquid scalds, flame contact
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• Cool with water 15-20 minutes</li>
                <li>• Do NOT break blisters (infection risk)</li>
                <li>• Silver sulfadiazine cream or burn dressing</li>
                <li>• Large burns: medical care needed</li>
              </ul>
              <p className="text-sm text-gray-700">
                <strong>Healing:</strong> 2-3 weeks, may scar if deep
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600, color: '#DC2626' }}>Third-Degree Burns</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Appearance:</strong> White/charred/leathery skin, may be painless (nerve damage). All skin layers destroyed
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Examples:</strong> Prolonged flame contact, electrical burns, scalding
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• Call for emergency help immediately</li>
                <li>• Do NOT cool large areas (hypothermia risk)</li>
                <li>• Cover with clean dry cloth</li>
                <li>• Treat for shock</li>
                <li>• Hospital care required (grafting may be needed)</li>
              </ul>
              <p className="text-sm text-gray-700">
                <strong>Healing:</strong> Weeks-months, permanent scarring
              </p>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🚫</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600, color: '#DC2626' }}>NEVER Do This to Burns</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Ice:</strong> Causes tissue damage, frostbite</li>
                      <li>• <strong>Butter/Oil:</strong> Traps heat, increases infection risk</li>
                      <li>• <strong>Toothpaste:</strong> Not sterile, can cause infection</li>
                      <li>• <strong>Egg whites:</strong> Infection risk</li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• <strong>Ash/Charcoal:</strong> Contaminates wound severely</li>
                      <li>• <strong>Breaking blisters:</strong> Opens door to infection</li>
                      <li>• <strong>Cotton directly on burn:</strong> Fibers stick to wound</li>
                      <li>• <strong>Tight bandages:</strong> Cuts off circulation as swelling occurs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Aid Kit Essentials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Building a First Aid Kit for African Settings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Essential supplies for home, workplace, and community health posts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Basic Home Kit (Minimum)</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Disposable gloves (5-10 pairs)</li>
                <li>✓ Gauze pads (various sizes, 20-30)</li>
                <li>✓ Rolled gauze bandages (2-3 rolls)</li>
                <li>✓ Adhesive bandages (assorted, 20-30)</li>
                <li>✓ Antiseptic solution (povidone-iodine or chlorhexidine)</li>
                <li>✓ Antibiotic ointment</li>
                <li>✓ Medical tape</li>
                <li>✓ Scissors</li>
                <li>✓ Tweezers</li>
                <li>✓ Thermometer</li>
                <li>✓ Pain relievers (acetaminophen/ibuprofen)</li>
                <li>✓ Oral rehydration salts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Enhanced Community Kit</h4>
              <p className="text-sm text-gray-600 mb-3">
                All basic items PLUS:
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Elastic bandages (compression)</li>
                <li>✓ Triangular bandages (slings)</li>
                <li>✓ Burn dressings/cream</li>
                <li>✓ Eye pads</li>
                <li>✓ Instant cold packs</li>
                <li>✓ Emergency blanket</li>
                <li>✓ CPR face shield</li>
                <li>✓ Hemostatic gauze</li>
                <li>✓ Steri-Strips/wound closure strips</li>
                <li>✓ Safety pins</li>
                <li>✓ Flashlight + batteries</li>
                <li>✓ First aid manual (local language)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Professional/Clinic Kit</h4>
              <p className="text-sm text-gray-600 mb-3">
                All enhanced items PLUS:
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ Advanced wound dressings (hydrocolloid, foam)</li>
                <li>✓ Pressure bandages</li>
                <li>✓ Tourniquet</li>
                <li>✓ Suture kit (if trained personnel)</li>
                <li>✓ Wound irrigation syringe</li>
                <li>✓ Splinting materials</li>
                <li>✓ Cervical collar</li>
                <li>✓ Blood pressure cuff</li>
                <li>✓ Stethoscope</li>
                <li>✓ Oxygen mask/bag-valve-mask</li>
                <li>✓ Injectable medications (epinephrine, etc.)</li>
                <li>✓ Sharps container</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">💡</div>
              <div>
                <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>First Aid Kit Maintenance</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Check expiration dates every 6 months (tropical heat accelerates degradation)</li>
                  <li>• Replace used items immediately</li>
                  <li>• Store in cool, dry place (heat/humidity damage products)</li>
                  <li>• Use waterproof container (protects from moisture)</li>
                  <li>• Label clearly with contents list</li>
                  <li>• Keep kit accessible, known location</li>
                  <li>• Include emergency contact numbers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Practices Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Traditional Practices & Modern First Aid</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Respectfully addressing harmful traditional wound care practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600, color: '#DC2626' }}>Harmful Traditional Practices to Avoid</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span><strong>Ash/Charcoal on Burns:</strong> Severe contamination, deep infection risk, delays healing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span><strong>Butter/Oil on Burns:</strong> Traps heat, worsens injury, increases infection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span><strong>Animal Dung on Wounds:</strong> Introduces tetanus spores, bacteria, extremely dangerous</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span><strong>Unclean Cloth/Leaves:</strong> Contamination, foreign bodies in wound</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span><strong>Tightly Binding Wounds:</strong> Can cut off circulation, cause tissue death</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✗</span>
                  <span><strong>Herbal Pastes on Open Wounds:</strong> Unless sterile/proven, infection risk</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600, color: '#059669' }}>Safe Traditional Practices</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Honey (Medical Grade):</strong> Antimicrobial properties, wound healing. Must be clean/sterile honey, not contaminated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Aloe Vera (Fresh, Clean):</strong> Soothes burns, promotes healing. Clean leaf thoroughly first</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Clean Water Rinse:</strong> Boiled and cooled water effective for initial cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Elevation:</strong> Raising injured limb reduces swelling, bleeding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Rest & Nutrition:</strong> Traditional emphasis on rest, nourishing foods supports healing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🤝</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Community Education Approach</h4>
                <p className="text-gray-700 mb-3">
                  Rather than condemning traditional practices outright, effective health education:
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Respects cultural beliefs and traditional knowledge</li>
                  <li>• Explains WHY certain practices are harmful (infection, contamination concepts)</li>
                  <li>• Offers BETTER alternatives that are affordable and accessible</li>
                  <li>• Involves traditional healers and community leaders as partners</li>
                  <li>• Uses local languages, visual demonstrations, storytelling</li>
                  <li>• Acknowledges some traditional practices have value (honey, aloe, elevation)</li>
                  <li>• Emphasizes that modern first aid complements, not replaces, cultural healing where safe</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Storage Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Product Quality & Storage in Tropical Climates</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Quality Standards</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Medical Grade:</strong> All wound care products meet international sterility standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Individually Packaged:</strong> Sterile items sealed to maintain sterility until use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Climate-Tested:</strong> Products validated for storage at 30°C/75% relative humidity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Moisture-Resistant Packaging:</strong> Protects from tropical humidity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Clear Expiration Dates:</strong> Easy to monitor product viability</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Proper Storage</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">•</span>
                  <span><strong>Cool Location:</strong> Store below 25°C if possible. Avoid direct sunlight</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">•</span>
                  <span><strong>Dry Environment:</strong> Keep away from moisture. Use desiccants in humid areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">•</span>
                  <span><strong>Sealed Containers:</strong> Waterproof first aid boxes or plastic containers with tight lids</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">•</span>
                  <span><strong>Regular Checks:</strong> Inspect every 3-6 months for degradation, adhesive failure, discoloration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">•</span>
                  <span><strong>Rotation:</strong> Use first-in-first-out system. Replace items approaching expiration</span>
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
              <div className="text-4xl mb-2 text-[#7C944B]">9</div>
              <div className="text-gray-600">Product Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">60+</div>
              <div className="text-gray-600">Essential Items</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">Sterile</div>
              <div className="text-gray-600">Medical Grade</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">Life-Saving</div>
              <div className="text-gray-600">When Minutes Matter</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
