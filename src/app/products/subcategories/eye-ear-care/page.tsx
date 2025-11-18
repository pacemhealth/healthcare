import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function EyeEarCarePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Eye & Ear Care Products",
    "description": "Eye drops, artificial tears, contact lens solutions, ear drops, earwax removal, eye infection treatments for vision and hearing health across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'eye-drops-lubricants',
      name: 'Eye Drops & Lubricants',
      products: ['Artificial tears (dry eye relief)', 'Lubricating eye drops', 'Eye moisturizing gels', 'Preservative-free single-dose drops', 'Nighttime eye ointments', 'Rewetting drops for contact lenses', 'Saline eye drops'],
      icon: '💧',
      description: 'Hydrating and lubricating drops for dry, irritated eyes'
    },
    {
      id: 'eye-infection-treatments',
      name: 'Eye Infection Treatments',
      products: ['Antibiotic eye drops (chloramphenicol, gentamicin)', 'Antibiotic eye ointments', 'Conjunctivitis (pink eye) treatments', 'Stye treatments', 'Blepharitis cleansers', 'Tetracycline eye ointment (trachoma)', 'Antiseptic eye drops'],
      icon: '🦠',
      description: 'Treating bacterial eye infections and conjunctivitis'
    },
    {
      id: 'eye-allergy-irritation',
      name: 'Eye Allergy & Irritation Relief',
      products: ['Antihistamine eye drops', 'Anti-redness eye drops', 'Anti-itch eye drops', 'Mast cell stabilizer drops (allergies)', 'Decongestant eye drops', 'Combination allergy/redness relief', 'Preservative-free allergy drops'],
      icon: '😢',
      description: 'Relief from allergies, redness, itching, and irritation'
    },
    {
      id: 'contact-lens-care',
      name: 'Contact Lens Solutions & Care',
      products: ['Multipurpose contact lens solution', 'Hydrogen peroxide cleaning systems', 'Saline solution (rinsing)', 'Enzymatic cleaners (protein removal)', 'Rewetting/lubricating drops for lenses', 'Contact lens cases', 'Daily cleaner solutions', 'Travel-size solutions'],
      icon: '👁️',
      description: 'Complete care for soft and rigid contact lenses'
    },
    {
      id: 'ear-drops-treatments',
      name: 'Ear Drops & Treatments',
      products: ['Earwax removal drops (carbamide peroxide, glycerin)', 'Swimmer\'s ear drops (acetic acid, isopropyl alcohol)', 'Antibiotic ear drops (for infections)', 'Ear pain relief drops', 'Ear drying drops', 'Olive oil ear drops (wax softening)', 'Saline ear rinse'],
      icon: '👂',
      description: 'Ear cleaning, infection treatment, and pain relief'
    },
    {
      id: 'eye-health-supplements',
      name: 'Eye Health Supplements',
      products: ['Vitamin A supplements (night blindness, xerophthalmia)', 'Lutein & zeaxanthin (macular health)', 'Omega-3 fatty acids (dry eyes, retinal health)', 'Bilberry extract', 'Vitamin C & E (antioxidants)', 'Zinc (macular degeneration prevention)', 'AREDS formula (age-related eye disease)', 'Beta-carotene'],
      icon: '🌟',
      description: 'Nutritional support for eye health and vision'
    },
    {
      id: 'eye-care-accessories',
      name: 'Eye Protection & Care Accessories',
      products: ['Sterile eye wash solution', 'Eye wash cups', 'Eye pads/patches', 'Warm/cold compress eye masks', 'Protective eyewear (dust, UV)', 'Eye shields (post-surgery, injury)', 'Eyelid wipes (hygiene)', 'Cotton eye pads'],
      icon: '🛡️',
      description: 'Protective equipment and first aid for eyes'
    },
    {
      id: 'specialized-eye-care',
      name: 'Specialized Eye & Ear Care',
      products: ['Glaucoma support supplements', 'Cataract prevention vitamins', 'Tinnitus relief supplements', 'Ear candling alternatives (NOT recommended)', 'Pterygium eye drops', 'Dry eye syndrome treatments', 'Eustachian tube support', 'Earplug varieties (water, noise)'],
      icon: '🔬',
      description: 'Advanced care for specific eye and ear conditions'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Eye & Ear Care Products | Eye Drops & Ear Treatments | Pacem Health"
        description="Eye and ear care products including artificial tears, eye drops, contact lens solutions, ear drops, earwax removal, eye infection treatments. Safe effective solutions supporting vision and hearing health across African communities."
        keywords={[
          'eye care products Africa',
          'eye drops Africa',
          'artificial tears',
          'ear drops Africa',
          'earwax removal',
          'contact lens solution Africa',
          'eye infection treatments',
          'ear care products'
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
            <span>Eye & Ear Care</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#7C944B] to-[#5A6D35] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Eye & Ear Care Products
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Essential eye and ear care solutions addressing Africa's unique challenges: trachoma infections, vitamin A deficiency causing preventable blindness, dust and UV damage from harsh environments, and limited access to ophthalmologists and audiologists. From treating common conjunctivitis to preventing childhood blindness through vitamin A supplementation, we provide affordable self-care products that preserve vision and hearing across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of eye and ear care products</p>
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

      {/* Eye Health Crisis in Africa Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Eye Health Crisis in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Preventable blindness remains a major public health challenge
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🚨</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>The Challenge: Limited Eye Care Access</h4>
                <p className="text-gray-700 mb-3">
                  Africa bears a disproportionate burden of preventable blindness and visual impairment. With fewer than 1 ophthalmologist per 1 million people in some countries (vs. 1 per 10,000 in developed nations), most Africans never see an eye specialist in their lifetime. Environmental factors like intense UV exposure, dust, poor sanitation, and malnutrition compound the crisis.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Major Causes of Blindness in Africa:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Cataracts:</strong> Leading cause (50% of blindness) - treatable but surgery access limited</li>
                      <li>• <strong>Trachoma:</strong> Bacterial eye infection from poor sanitation, flies. WHO neglected tropical disease</li>
                      <li>• <strong>Vitamin A Deficiency:</strong> Causes childhood blindness (xerophthalmia) - entirely preventable</li>
                      <li>• <strong>Glaucoma:</strong> Often undiagnosed until advanced, causing irreversible blindness</li>
                      <li>• <strong>Onchocerciasis (River Blindness):</strong> Parasitic infection in endemic areas</li>
                      <li>• <strong>Uncorrected Refractive Errors:</strong> No access to glasses/contact lenses</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Environmental Risk Factors:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>UV Radiation:</strong> Intense equatorial sun → cataracts, pterygium, photokeratitis</li>
                      <li>• <strong>Dust & Sand:</strong> Constant eye irritation, corneal abrasions, infections</li>
                      <li>• <strong>Poor Water/Sanitation:</strong> Spreads trachoma, bacterial conjunctivitis</li>
                      <li>• <strong>Flies:</strong> Transmit trachoma bacteria from eye to eye</li>
                      <li>• <strong>Smoke (Cooking Fires):</strong> Indoor air pollution irritates eyes</li>
                      <li>• <strong>Malnutrition:</strong> Vitamin A, zinc deficiency → night blindness, corneal damage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Prevention & Early Detection</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ <strong>Vitamin A Supplementation:</strong> Prevents childhood blindness (WHO recommendation: every 6 months for children 6-59 months)</li>
                <li>✓ <strong>UV Protection:</strong> Sunglasses, hats to prevent cataracts, pterygium</li>
                <li>✓ <strong>Eye Hygiene:</strong> Clean faces (especially children) to prevent trachoma</li>
                <li>✓ <strong>Sanitation:</strong> Latrines, clean water reduce trachoma transmission</li>
                <li>✓ <strong>Early Screening:</strong> Basic vision tests can detect refractive errors, cataracts</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>OTC Products Can Help</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ <strong>Antibiotic Eye Drops:</strong> Treat bacterial conjunctivitis, trachoma (early stages)</li>
                <li>✓ <strong>Vitamin A Supplements:</strong> Prevent xerophthalmia (night blindness, corneal damage)</li>
                <li>✓ <strong>Artificial Tears:</strong> Relieve dry eye from dust, wind, smoke</li>
                <li>✓ <strong>Allergy Eye Drops:</strong> Manage environmental allergies, irritation</li>
                <li>✓ <strong>Eye Wash:</strong> Flush dust, debris, irritants from eyes</li>
                <li>✓ <strong>UV Sunglasses:</strong> Protect from harmful UV rays</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>When to Seek Professional Care</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Sudden vision loss or blurry vision</li>
                <li>• Severe eye pain</li>
                <li>• Eye injury or trauma</li>
                <li>• Flashing lights, floaters (retinal detachment)</li>
                <li>• Persistent redness, discharge (infection)</li>
                <li>• Foreign object embedded in eye</li>
                <li>• Chemical exposure to eye</li>
                <li>• Symptoms not improving with OTC treatment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trachoma Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Trachoma: Africa's Leading Infectious Cause of Blindness</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A preventable and treatable disease that still affects millions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🦠</span>
                <h4 className="text-xl" style={{ fontWeight: 600 }}>What is Trachoma?</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Trachoma is a bacterial eye infection caused by <em>Chlamydia trachomatis</em>. It's the world's leading infectious cause of blindness and is endemic in many African countries. The disease spreads through contact with eye discharge from infected people, often carried by flies or on contaminated hands, clothing, and towels.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>How It Progresses:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>1. <strong>Active Trachoma:</strong> Repeated infections cause inflammation, discharge, irritation</li>
                    <li>2. <strong>Scarring:</strong> Chronic infection scars the inside of eyelid</li>
                    <li>3. <strong>Trichiasis:</strong> Scarring causes eyelashes to turn inward, scratching cornea</li>
                    <li>4. <strong>Corneal Opacity:</strong> Constant scratching clouds cornea → irreversible blindness</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Risk Factors:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Poor sanitation (no latrines)</li>
                    <li>• Lack of clean water for face washing</li>
                    <li>• Overcrowded living conditions</li>
                    <li>• Flies (transmit bacteria eye to eye)</li>
                    <li>• Women and children most affected</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💊</span>
                <h4 className="text-xl" style={{ fontWeight: 600 }}>WHO SAFE Strategy</h4>
              </div>
              <p className="text-gray-700 mb-4">
                The WHO recommends the SAFE strategy to eliminate trachoma:
              </p>
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>S - Surgery</p>
                  <p className="text-sm text-gray-600">Trichiasis surgery to prevent corneal damage and blindness (for advanced cases)</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>A - Antibiotics</p>
                  <p className="text-sm text-gray-600">Mass drug administration: Azithromycin (oral, single dose) or tetracycline eye ointment (6 weeks) to entire communities</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>F - Facial Cleanliness</p>
                  <p className="text-sm text-gray-600">Regular face washing, especially children. Clean faces reduce transmission by removing discharge</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>E - Environmental Improvement</p>
                  <p className="text-sm text-gray-600">Access to clean water, latrines, waste management. Reduces fly breeding, improves hygiene</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Treatment with OTC Products</h4>
                <p className="text-gray-700 mb-3">
                  While mass drug administration programs are the primary approach, tetracycline eye ointment is available OTC in many countries for individual treatment of early-stage trachoma and other bacterial eye infections.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2"><strong>Tetracycline Eye Ointment 1%:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Apply to affected eye(s) 2-4 times daily</li>
                      <li>• Continue for 6 weeks (WHO recommendation for trachoma)</li>
                      <li>• All household members should be treated</li>
                      <li>• Effective against <em>C. trachomatis</em></li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Prevention:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Wash children's faces daily with soap and water</li>
                      <li>• Don't share towels, pillows</li>
                      <li>• Keep flies away from faces</li>
                      <li>• Use latrines (reduce fly breeding)</li>
                      <li>• Community-wide treatment prevents reinfection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vitamin A Deficiency Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Vitamin A Deficiency: Preventable Childhood Blindness</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A leading cause of blindness in African children - 100% preventable
            </p>
          </div>

          <div className="bg-orange-50 border-2 border-orange-300 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🥕</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>The Crisis</h4>
                <p className="text-gray-700 mb-3">
                  Vitamin A deficiency (VAD) is a major public health problem in Africa, affecting an estimated 190 million children under 5 years old across the continent. It's the leading preventable cause of childhood blindness. Even mild deficiency impairs immune function, increasing risk of death from measles, malaria, diarrhea, and respiratory infections.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Eye Manifestations (Xerophthalmia):</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Night Blindness:</strong> First sign - can't see in dim light</li>
                      <li>• <strong>Conjunctival Xerosis:</strong> Dry, thickened conjunctiva (white of eye)</li>
                      <li>• <strong>Bitot's Spots:</strong> Foamy white patches on conjunctiva</li>
                      <li>• <strong>Corneal Xerosis:</strong> Cornea becomes dry, cloudy</li>
                      <li>• <strong>Corneal Ulceration:</strong> Open sores on cornea</li>
                      <li>• <strong>Keratomalacia:</strong> Cornea melts, liquefies → total blindness</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Why It's Common in Africa:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Diet lacks vitamin A-rich foods (liver, eggs, dairy, orange vegetables)</li>
                      <li>• Poverty limits food diversity</li>
                      <li>• Infections (measles, diarrhea) deplete vitamin A stores</li>
                      <li>• Poor maternal nutrition → low breastmilk vitamin A</li>
                      <li>• Early weaning to vitamin A-poor foods</li>
                      <li>• Parasitic infections impair absorption</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Prevention: Vitamin A Supplementation</h4>
              <p className="text-gray-700 mb-4">
                The WHO recommends high-dose vitamin A supplementation for all children 6-59 months in areas where VAD is a public health problem (most of sub-Saharan Africa).
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>WHO Dosing Schedule:</p>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Infants 6-11 months:</strong> 100,000 IU (one dose)</li>
                    <li>• <strong>Children 12-59 months:</strong> 200,000 IU every 6 months</li>
                    <li>• <strong>Postpartum Women:</strong> 200,000 IU within 6 weeks of delivery (improves breastmilk vitamin A)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Benefits:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Prevents night blindness and xerophthalmia</li>
                    <li>✓ Reduces child mortality by 23-30%</li>
                    <li>✓ Strengthens immune system</li>
                    <li>✓ Reduces severity of measles, diarrhea</li>
                    <li>✓ Single dose lasts 4-6 months</li>
                    <li>✓ Extremely cost-effective ($1-2 per dose)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Dietary Sources & Long-Term Solutions</h4>
              <p className="text-gray-700 mb-4">
                While supplementation is critical, improving diet provides sustainable vitamin A intake.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Best Food Sources (African Context):</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Animal sources (Preformed Vitamin A):</strong> Liver, eggs, fish, dairy (butter, cheese, fortified milk)</li>
                    <li>• <strong>Plant sources (Provitamin A Carotenoids):</strong> Orange/yellow vegetables and fruits</li>
                    <li>&nbsp;&nbsp;- Orange-fleshed sweet potato (OFSP) - promoted across Africa</li>
                    <li>&nbsp;&nbsp;- Carrots, pumpkin, butternut squash</li>
                    <li>&nbsp;&nbsp;- Mango, papaya, apricots</li>
                    <li>&nbsp;&nbsp;- Dark leafy greens (spinach, kale, amaranth)</li>
                    <li>• <strong>Fortified foods:</strong> Vitamin A-fortified cooking oil, sugar (in some countries)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Enhancing Absorption:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Vitamin A is fat-soluble - eat with small amount of oil/fat</li>
                    <li>• Cook vegetables to break down cell walls (improves carotenoid absorption)</li>
                    <li>• Treat parasitic infections (improve nutrient absorption)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">⚠️</div>
              <div>
                <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Emergency: Treating Active Xerophthalmia</h4>
                <p className="text-gray-700 mb-3">
                  If a child shows signs of vitamin A deficiency eye disease (night blindness, dry eyes, Bitot's spots), this is a MEDICAL EMERGENCY requiring immediate high-dose vitamin A treatment.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2"><strong>WHO Emergency Treatment:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Day 1: 200,000 IU (100,000 IU if under 12 months)</li>
                      <li>• Day 2: Repeat same dose</li>
                      <li>• Week 2: Repeat same dose</li>
                      <li>• Plus supportive eye care (antibiotic ointment if ulceration)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Seek Medical Care Immediately If:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Child can't see at night (night blindness)</li>
                      <li>• Dry, dull-looking eyes</li>
                      <li>• White spots on eyes (Bitot's spots)</li>
                      <li>• Cloudy cornea</li>
                      <li>• Eye ulcers or drainage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Eye Problems Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Common Eye Problems in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conditions frequently managed with OTC eye care products
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">👁️‍🗨️</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Bacterial Conjunctivitis (Pink Eye)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Very common, especially in children in crowded, dusty environments
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Causes:</strong> Bacterial infection (Staphylococcus, Streptococcus, Haemophilus), spread by contaminated hands, towels, flies
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Red, bloodshot eyes, thick yellow/green discharge (especially on waking), crusty eyelids, gritty feeling
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Antibiotic Eye Drops:</strong> Chloramphenicol, gentamicin, tobramycin (4-6 times daily for 5-7 days)</li>
                <li>• <strong>Antibiotic Eye Ointment:</strong> Apply at bedtime (stays in eye longer)</li>
                <li>• <strong>Warm Compresses:</strong> Soften and remove crusted discharge</li>
                <li>• <strong>Eye Hygiene:</strong> Gently clean eyelids with warm water</li>
                <li>• <strong>Prevention:</strong> Wash hands frequently, don't touch eyes, don't share towels/pillows</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💧</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Dry Eyes (Keratoconjunctivitis Sicca)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common in dry, dusty, windy climates; smoke exposure
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Causes:</strong> Insufficient tear production, rapid tear evaporation (wind, heat, low humidity), dust, smoke, aging
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Gritty/sandy feeling, burning, redness, light sensitivity, paradoxical tearing (reflex tearing), blurry vision
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Artificial Tears:</strong> Lubricating eye drops (use as needed, 4-6 times daily or more)</li>
                <li>• <strong>Preservative-Free Drops:</strong> Better for frequent use (&gt;4 times/day)</li>
                <li>• <strong>Eye Gels/Ointments:</strong> Thicker formulations, longer-lasting (use at bedtime)</li>
                <li>• <strong>Omega-3 Supplements:</strong> May improve tear quality (fish oil, flaxseed oil)</li>
                <li>• <strong>Warm Compresses:</strong> Improve oil gland function in eyelids</li>
                <li>• <strong>Environmental:</strong> Avoid direct wind/fans, use humidifier, wear wraparound sunglasses</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌿</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Allergic Conjunctivitis</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common, especially during pollen seasons, dust exposure
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Triggers:</strong> Pollen, dust mites, animal dander, mold, smoke
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Itchy eyes (key symptom), redness, watery discharge (clear, not thick), swollen eyelids, usually affects both eyes
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Antihistamine Eye Drops:</strong> Ketotifen, olopatadine (fast itch relief)</li>
                <li>• <strong>Mast Cell Stabilizers:</strong> Sodium cromoglicate (prevents allergic reaction - use before exposure)</li>
                <li>• <strong>Decongestant Drops:</strong> Reduce redness (use sparingly, max 3-4 days - rebound redness)</li>
                <li>• <strong>Artificial Tears:</strong> Rinse out allergens, soothe eyes</li>
                <li>• <strong>Cold Compresses:</strong> Reduce itching, swelling</li>
                <li>• <strong>Oral Antihistamines:</strong> Cetirizine, loratadine (if also nasal symptoms)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🔴</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Stye (Hordeolum)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common, often recurrent in some individuals
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Cause:</strong> Bacterial infection (usually Staphylococcus) of eyelash follicle or oil gland in eyelid
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Painful red lump on eyelid edge, swelling, tenderness, may have pus-filled center, tearing, light sensitivity
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Warm Compresses:</strong> Apply 10-15 min, 3-4 times daily (promotes drainage, most important treatment)</li>
                <li>• <strong>Antibiotic Eye Ointment:</strong> Apply to affected eyelid (erythromycin, bacitracin)</li>
                <li>• <strong>Pain Relief:</strong> Ibuprofen or acetaminophen if needed</li>
                <li>• <strong>DON'T:</strong> Squeeze or pop stye (spreads infection)</li>
                <li>• <strong>Hygiene:</strong> Keep eyelids clean, avoid eye makeup until healed, don't share towels</li>
                <li>• Usually resolves in 5-7 days with treatment</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">☀️</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Pterygium ("Surfer's Eye")</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Very common in equatorial Africa due to intense UV exposure, dust, wind
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Cause:</strong> Chronic UV radiation, dust, wind irritation causes growth of conjunctival tissue over cornea
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Wedge-shaped pink/fleshy growth on white of eye (nasal side most common), grows toward pupil, gritty feeling, redness, may blur vision if large
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Management:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Artificial Tears:</strong> Lubricate, reduce irritation</li>
                <li>• <strong>UV Protection:</strong> Sunglasses with UV400 protection, wide-brimmed hat (PREVENT GROWTH)</li>
                <li>• <strong>Anti-Redness Drops:</strong> Short-term use for cosmetic improvement</li>
                <li>• <strong>NOTE:</strong> Surgery needed if pterygium grows large, affects vision, or causes significant discomfort</li>
                <li>• <strong>Prevention Critical:</strong> Protect eyes from UV, wind, dust to prevent formation/recurrence</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">⚡</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Foreign Body in Eye (Dust, Sand)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Extremely common in dusty, sandy African environments
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Causes:</strong> Wind-blown dust, sand, plant debris, insects entering eye
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Sharp pain, gritty sensation, excessive tearing, redness, light sensitivity, feeling something in eye
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>First Aid Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>DON'T RUB:</strong> Can scratch cornea or embed particle deeper</li>
                <li>• <strong>Blink Repeatedly:</strong> Tears may flush out particle</li>
                <li>• <strong>Rinse with Clean Water:</strong> Tilt head, pour water across eye from inner to outer corner</li>
                <li>• <strong>Sterile Eye Wash:</strong> Use if available (better than tap water)</li>
                <li>• <strong>Pull Upper Eyelid Over Lower:</strong> Eyelashes may sweep out particle</li>
                <li>• <strong>If Removed:</strong> Use artificial tears to soothe, antibiotic drops if corneal abrasion suspected</li>
                <li>• <strong>Seek Care If:</strong> Can't remove, embedded in eye, vision affected, severe pain persists</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Ear Problems Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Common Ear Problems in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ear conditions frequently managed with OTC products
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🏊</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Swimmer's Ear (Otitis Externa)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common in areas with frequent swimming, bathing in rivers/lakes
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Cause:</strong> Bacterial or fungal infection of ear canal, often after water exposure (swimming, bathing)
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Ear pain (worse when pulling on ear or chewing), itching in ear canal, discharge (clear, yellow, or pus), muffled hearing, redness
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Acetic Acid Ear Drops:</strong> 2% acetic acid (vinegar) - acidifies ear canal, kills bacteria (use 3-4 times daily for 5-7 days)</li>
                <li>• <strong>Isopropyl Alcohol Drops:</strong> Dries ear canal moisture</li>
                <li>• <strong>Combination Drops:</strong> Acetic acid + isopropyl alcohol (very effective)</li>
                <li>• <strong>Prevention Drops:</strong> Use after swimming (50/50 vinegar and rubbing alcohol)</li>
                <li>• <strong>Pain Relief:</strong> Ibuprofen or acetaminophen</li>
                <li>• <strong>Keep Ear Dry:</strong> Don't swim until healed, dry ears thoroughly after bathing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🟤</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Earwax Buildup (Cerumen Impaction)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Very common, especially in dusty environments (ear produces more wax to trap dust)
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Cause:</strong> Excessive wax production, pushing wax deeper with cotton swabs, narrow ear canals
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Muffled hearing, fullness in ear, earache, ringing (tinnitus), dizziness, cough (reflex)
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Carbamide Peroxide Drops:</strong> Foaming action softens and breaks up wax (use 2-3 days)</li>
                <li>• <strong>Glycerin/Mineral Oil Drops:</strong> Softens wax naturally</li>
                <li>• <strong>Olive Oil:</strong> Traditional, safe wax softener (2-3 drops, 2x daily for 3-5 days)</li>
                <li>• <strong>Warm Water Irrigation:</strong> After softening, gently flush with bulb syringe and warm water</li>
                <li>• <strong>DON'T:</strong> Use cotton swabs deep in ear (pushes wax deeper, can puncture eardrum)</li>
                <li>• <strong>See Doctor If:</strong> Ear pain, drainage, doesn't clear after treatment (may need professional removal)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">👂</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Middle Ear Infection (Otitis Media)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Very common in children, often follows upper respiratory infections
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Cause:</strong> Bacterial or viral infection in middle ear (behind eardrum), often after cold/flu
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Ear pain (children may pull on ear), fever, irritability, difficulty sleeping, muffled hearing, fluid drainage if eardrum ruptures
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Support:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Pain Relief:</strong> Ibuprofen or acetaminophen (reduces pain and fever)</li>
                <li>• <strong>Warm Compress:</strong> Apply to affected ear (provides comfort)</li>
                <li>• <strong>Ear Drops:</strong> NOT effective for middle ear infection (eardrum blocks access). Only use if eardrum ruptured (see doctor first)</li>
                <li>• <strong>⚠️ IMPORTANT:</strong> Middle ear infections often need prescription antibiotics. See healthcare provider, especially for children</li>
                <li>• <strong>Prevention:</strong> Breastfeeding (infants), avoid secondhand smoke, flu vaccination</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🔔</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Tinnitus (Ringing in Ears)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common, often from noise exposure, earwax, aging
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Causes:</strong> Loud noise exposure, earwax buildup, ear infection, aging, medications (aspirin, antibiotics), high blood pressure
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Ringing, buzzing, hissing, clicking sounds in ears (no external sound), may be constant or intermittent
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Management:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Remove Earwax:</strong> If earwax buildup is cause (carbamide peroxide drops)</li>
                <li>• <strong>Ginkgo Biloba:</strong> Some evidence for improvement (may take 6-12 weeks)</li>
                <li>• <strong>Magnesium/Zinc Supplements:</strong> May help if deficient</li>
                <li>• <strong>Avoid Triggers:</strong> Loud noise, caffeine, alcohol, tobacco (may worsen)</li>
                <li>• <strong>White Noise:</strong> Fans, sound machines mask tinnitus (especially at bedtime)</li>
                <li>• <strong>See Doctor If:</strong> Sudden onset, one ear only, with hearing loss/dizziness (may indicate serious condition)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Lens Care Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Contact Lens Care in African Climates</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dust, heat, and limited water access create unique challenges
            </p>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Environmental Challenges</h4>
                <p className="text-gray-700 mb-3">
                  Contact lens wear in many African settings is more challenging than in developed countries due to environmental factors and infrastructure limitations. Proper hygiene is critical to prevent serious eye infections.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Challenges:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Dust & Sand:</strong> Particles get under lenses, cause irritation, abrasion</li>
                      <li>• <strong>Dry Climate:</strong> Lenses dry out faster, less comfortable</li>
                      <li>• <strong>Limited Clean Water:</strong> Hard to maintain hygiene for cleaning/storage</li>
                      <li>• <strong>Power Outages:</strong> Can't boil water reliably for sterilization</li>
                      <li>• <strong>Limited Optometry Access:</strong> Hard to get proper fitting, replacement lenses</li>
                      <li>• <strong>Heat:</strong> Solutions, lenses degrade faster in high temperatures</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Infection Risks:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Acanthamoeba Keratitis:</strong> Severe infection from contaminated water (can cause blindness)</li>
                      <li>• <strong>Bacterial Keratitis:</strong> Poor hygiene, overnight wear, contaminated solutions</li>
                      <li>• <strong>Fungal Keratitis:</strong> More common in tropical climates</li>
                      <li>• <strong>Giant Papillary Conjunctivitis:</strong> Allergic reaction to dirty lenses, protein buildup</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Essential Contact Lens Hygiene</h4>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#7C944B] shrink-0" style={{ fontWeight: 600 }}>1.</span>
                  <span><strong>Wash Hands:</strong> Always wash hands with soap and water before touching lenses. Dry with lint-free towel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7C944B] shrink-0" style={{ fontWeight: 600 }}>2.</span>
                  <span><strong>Use Fresh Solution:</strong> NEVER reuse old solution in case. Empty and refill with fresh multipurpose solution daily</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7C944B] shrink-0" style={{ fontWeight: 600 }}>3.</span>
                  <span><strong>Rub and Rinse:</strong> Clean each lens with solution in palm of hand (gentle circular motion), even if using "no-rub" solution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7C944B] shrink-0" style={{ fontWeight: 600 }}>4.</span>
                  <span><strong>Store Properly:</strong> Lenses must be fully submerged in fresh solution in clean case. Minimum 6 hours for disinfection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7C944B] shrink-0" style={{ fontWeight: 600 }}>5.</span>
                  <span><strong>Replace Case:</strong> Get new lens case every 3 months (cases harbor bacteria over time)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7C944B] shrink-0" style={{ fontWeight: 600 }}>6.</span>
                  <span><strong>Replace Lenses:</strong> Follow schedule (daily, weekly, monthly). Don't overwear - old lenses increase infection risk</span>
                </li>
              </ol>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Safety Rules (CRITICAL)</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">❌</span>
                  <span><strong>NEVER Use Tap Water:</strong> Even if boiled! Can contain Acanthamoeba (causes severe infection). ONLY use sterile contact lens solution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">❌</span>
                  <span><strong>NEVER Sleep in Lenses:</strong> Unless specifically approved for extended wear. Increases infection risk 10-15 times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">❌</span>
                  <span><strong>NEVER Swim/Shower in Lenses:</strong> Water exposure = infection risk. Remove before water activities or wear swim goggles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">❌</span>
                  <span><strong>NEVER Put Lenses in Mouth:</strong> Saliva has bacteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">❌</span>
                  <span><strong>NEVER Share Lenses:</strong> Transmits infections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">❌</span>
                  <span><strong>NEVER Use Expired Solution:</strong> Check expiration dates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Remove if Eyes Red/Painful:</strong> Stop wearing, see eye doctor if doesn't improve</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">💡</div>
              <div>
                <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Recommendation for African Settings</h4>
                <p className="text-gray-700 mb-3">
                  <strong>Daily Disposable Lenses</strong> are ideal for dusty, water-limited environments:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2"><strong>Benefits:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ No cleaning needed - wear once, throw away</li>
                      <li>✓ No storage case needed</li>
                      <li>✓ No solutions needed</li>
                      <li>✓ Lowest infection risk (fresh lens daily)</li>
                      <li>✓ Perfect for areas with limited clean water</li>
                      <li>✓ Convenient for travel</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Cost Consideration:</strong></p>
                    <p className="text-gray-600 mb-2">While daily disposables cost more upfront, they eliminate solution costs and reduce infection risk (which can lead to expensive treatment or vision loss).</p>
                    <p className="text-gray-600">If monthly lenses are used, follow ALL hygiene rules meticulously and use only sterile solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eye & Ear First Aid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Eye & Ear First Aid Emergencies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Critical actions for common emergencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Chemical Splash in Eye</h4>
              <p className="text-sm text-red-600 mb-2"><strong>⚠️ TRUE EMERGENCY - ACT IMMEDIATELY</strong></p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>1. <strong>FLUSH IMMEDIATELY:</strong> Rinse eye with large amounts of clean water for 15-20 minutes (hold eye open, pour continuously)</li>
                <li>2. <strong>Remove Contact Lenses:</strong> If wearing contacts, try to remove during flushing</li>
                <li>3. <strong>Continue Flushing:</strong> Don't stop to call for help - flush FIRST</li>
                <li>4. <strong>Get Medical Care:</strong> After flushing, go to hospital immediately. Bring chemical container if possible</li>
                <li>5. <strong>Don't Rub Eye:</strong> Can spread chemical, worsen damage</li>
                <li className="text-red-600 mt-3"><strong>Time is vision:</strong> Seconds matter. Permanent blindness can occur within minutes with alkali (drain cleaner, cement) chemicals</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Eye Trauma/Injury</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Blunt Trauma (Punch, Ball to Eye):</strong></li>
                <li className="ml-4 text-sm text-gray-600">• Apply cold compress (ice wrapped in cloth) for 15 min to reduce swelling</li>
                <li className="ml-4 text-sm text-gray-600">• Avoid pressure on eye</li>
                <li className="ml-4 text-sm text-gray-600">• See doctor if: vision changes, severe pain, blood in eye, cut on eyelid</li>
                <li className="mt-3"><strong>Penetrating Injury (Sharp Object):</strong></li>
                <li className="ml-4 text-sm text-gray-600">• DON'T remove object if embedded</li>
                <li className="ml-4 text-sm text-gray-600">• DON'T rinse or apply pressure</li>
                <li className="ml-4 text-sm text-gray-600">• Cover both eyes loosely (reduces eye movement)</li>
                <li className="ml-4 text-sm text-gray-600">• GO TO HOSPITAL IMMEDIATELY</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Sudden Vision Loss</h4>
              <p className="text-sm text-red-600 mb-2"><strong>⚠️ MEDICAL EMERGENCY</strong></p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Possible Causes:</strong> Retinal detachment, stroke, central retinal artery occlusion, acute glaucoma</li>
                <li>• <strong>Symptoms:</strong> Sudden blurry vision, curtain/shadow over vision, flashing lights, many new floaters</li>
                <li>• <strong>Action:</strong> GO TO HOSPITAL IMMEDIATELY. Time-sensitive - permanent vision loss possible within hours</li>
                <li>• <strong>Don't Wait:</strong> This is NEVER normal. Don't "wait and see" - seek care immediately</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Object Stuck in Ear</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Insect in Ear:</strong></li>
                <li className="ml-4 text-sm text-gray-600">• Tilt head with affected ear up</li>
                <li className="ml-4 text-sm text-gray-600">• Pour warm (not hot) mineral oil, olive oil, or baby oil into ear (suffocates insect)</li>
                <li className="ml-4 text-sm text-gray-600">• Insect should float out. If not, see doctor</li>
                <li className="mt-3"><strong>Other Objects (Beads, Seeds, etc.):</strong></li>
                <li className="ml-4 text-sm text-gray-600">• DON'T try to remove with cotton swabs or tools (pushes deeper)</li>
                <li className="ml-4 text-sm text-gray-600">• Tilt head, let gravity help</li>
                <li className="ml-4 text-sm text-gray-600">• See doctor for removal if doesn't fall out</li>
                <li className="ml-4 text-sm text-gray-600">• NEVER irrigate ear if you think eardrum might be perforated</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Quality & Distribution Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Product Quality & Distribution</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Quality Standards</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Eye Drops:</strong> Sterile formulations, preservative-free options for frequent use, validated for tropical storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Antibiotic Drops/Ointments:</strong> WHO-recommended active ingredients (chloramphenicol, gentamicin, tetracycline)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Contact Lens Solutions:</strong> Sterile, effective disinfection, stable in heat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Vitamin A:</strong> WHO prequalified supplements, appropriate dosing for pediatric and adult use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Tamper-Evident Packaging:</strong> Ensures sterility until first use</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Access & Education</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Wide Distribution:</strong> Pharmacies, clinics, health centers, community health worker programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Vitamin A Campaigns:</strong> National supplementation days (every 6 months) for children under 5</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Trachoma Programs:</strong> Mass drug administration (azithromycin), community education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Eye Health Education:</strong> School programs, community outreach, radio campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Visual Instructions:</strong> Picture-based guides for eye drop administration, hygiene</span>
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
              <div className="text-4xl mb-2 text-[#7C944B]">50+</div>
              <div className="text-gray-600">Product Options</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">90%</div>
              <div className="text-gray-600">Blindness Preventable</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">Vision</div>
              <div className="text-gray-600">Worth Protecting</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
