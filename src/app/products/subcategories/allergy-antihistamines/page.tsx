import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function AllergyAntihistaminesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Allergy & Antihistamines",
    "description": "Comprehensive range of antihistamines, nasal sprays, eye drops, and topical allergy relief products for treating allergic reactions across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'oral-antihistamines',
      name: 'Oral Antihistamines',
      products: ['Non-drowsy antihistamines (loratadine, cetirizine, fexofenadine)', 'Sedating antihistamines (diphenhydramine, chlorpheniramine)', 'Long-acting 24-hour formulations', 'Children\'s antihistamine liquids/chewables', 'Combination products (antihistamine + decongestant)', 'Allergy relief tablets', 'Antihistamine syrups'],
      icon: '💊',
      description: 'Systemic allergy relief for hay fever, hives, and allergic reactions'
    },
    {
      id: 'nasal-sprays',
      name: 'Nasal Sprays & Decongestants',
      products: ['Steroid nasal sprays (fluticasone, mometasone)', 'Antihistamine nasal sprays (azelastine)', 'Saline nasal sprays (irrigation, moisturizing)', 'Decongestant nasal sprays (oxymetazoline, xylometazoline)', 'Nasal wash/rinse systems', 'Menthol/eucalyptus nasal inhalers', 'Nasal strips (external)'],
      icon: '👃',
      description: 'Targeted nasal congestion and allergy symptom relief'
    },
    {
      id: 'allergy-eye-drops',
      name: 'Allergy Eye Drops',
      products: ['Antihistamine eye drops (ketotifen, olopatadine)', 'Mast cell stabilizer drops', 'Combination antihistamine/decongestant drops', 'Preservative-free allergy drops', 'Anti-redness drops', 'Multi-symptom allergy eye relief'],
      icon: '👁️',
      description: 'Relief from itchy, watery, red eyes due to allergies'
    },
    {
      id: 'topical-allergy-relief',
      name: 'Topical Allergy & Itch Relief',
      products: ['Antihistamine creams/gels (diphenhydramine)', 'Hydrocortisone cream 1% (anti-itch, anti-inflammatory)', 'Calamine lotion', 'Cooling anti-itch gels (aloe, menthol)', 'Insect bite/sting relief sticks', 'Oatmeal-based anti-itch lotions', 'Pramoxine (topical anesthetic)'],
      icon: '🧴',
      description: 'Topical treatments for allergic skin reactions, rashes, insect bites'
    },
    {
      id: 'asthma-respiratory-allergy',
      name: 'Asthma & Respiratory Allergy Support',
      products: ['Bronchodilator inhalers (salbutamol/albuterol - OTC in some countries)', 'Saline nebulizer solutions', 'Steam inhalation products', 'Chest rubs (menthol, eucalyptus)', 'Breathing support supplements', 'Air purifier filters', 'Dust mite covers (bedding)'],
      icon: '🫁',
      description: 'Managing allergic asthma and respiratory allergy symptoms'
    },
    {
      id: 'allergy-prevention',
      name: 'Allergy Prevention & Avoidance',
      products: ['Dust masks/N95 respirators', 'Allergen-barrier bedding covers', 'HEPA air purifier filters', 'Saline nasal rinse (preventive)', 'Petroleum jelly (nose barrier)', 'Sunglasses (pollen protection)', 'Allergy-friendly cleaning products'],
      icon: '🛡️',
      description: 'Products to prevent allergen exposure and reduce symptoms'
    },
    {
      id: 'severe-allergy-emergency',
      name: 'Severe Allergy & Anaphylaxis Products',
      products: ['Epinephrine auto-injectors (EpiPen, generic alternatives)', 'Emergency antihistamine injections', 'Medical alert bracelets/tags', 'Anaphylaxis emergency action plans', 'Portable nebulizers', 'Emergency medication pouches'],
      icon: '🚨',
      description: 'Life-saving products for severe allergic reactions and anaphylaxis'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Allergy & Antihistamines | Non-Drowsy & Sedating Allergy Relief Products | Pacem Health"
        description="Complete allergy relief solutions for Africa. Antihistamines, nasal sprays, eye drops, topical treatments, and emergency anaphylaxis products. Manage allergies in tropical climates."
        keywords={[
          'antihistamines Africa',
          'allergy relief products',
          'non-drowsy antihistamines',
          'allergy medications Africa',
          'epinephrine auto-injector',
          'anaphylaxis treatment',
          'hay fever medications',
          'allergic rhinitis treatment'
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
            <span>Allergy & Antihistamines</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-4">
              Allergy & Antihistamine Products
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Essential allergy relief solutions for Africa's unique environmental challenges: year-round dust exposure, distinctive pollen seasons, limited access to allergists, and managing allergic conditions in tropical climates. From treating common hay fever and dust allergies to life-saving epinephrine for anaphylaxis, we provide accessible self-care options that help Africans manage allergies, prevent severe reactions, and maintain quality of life despite environmental allergen exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of allergy and antihistamine products</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{group.description}</p>
                <div className="space-y-1 mb-4">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#4B2991] text-xs mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 bg-[#4B2991] text-white rounded-lg hover:bg-[#3A1F70] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/over-the-counter-products')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Over-the-Counter Products
            </button>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer Section */}
      <section className="py-12 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-yellow-400 rounded-xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div className="flex-1">
                <h3 className="text-xl mb-3 text-yellow-800" style={{ fontWeight: 600 }}>
                  Important Medical Disclaimer
                </h3>
                <div className="text-gray-700 space-y-3">
                  <p>
                    <strong>The information provided on this page is for educational and informational purposes only.</strong> It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                  </p>
                  <p>
                    Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition, allergies, or treatment options. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
                  </p>
                  <p>
                    <strong>If you think you may have a medical emergency, including anaphylaxis or severe allergic reaction, call your doctor or emergency services immediately.</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    Pacem Health Inc. does not recommend or endorse any specific tests, physicians, products, procedures, or other information mentioned on this website. Reliance on any information provided is solely at your own risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Allergies in African Context Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Understanding Allergies in African Contexts</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Environmental and healthcare challenges unique to Africa
            </p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🌍</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Allergy Landscape in Africa</h4>
                <p className="text-gray-700 mb-3">
                  Allergies are increasingly recognized across Africa, though they're often underdiagnosed due to limited access to allergists and allergy testing. Environmental factors like year-round dust exposure, changing pollen seasons due to climate shifts, urbanization, air pollution, and Western dietary patterns are driving rising allergy rates, particularly in cities.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Common Allergens in Africa:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Dust:</strong> Constant exposure (Saharan dust, construction, unpaved roads)</li>
                      <li>• <strong>Pollen:</strong> Grasses, trees, weeds - different species than temperate climates</li>
                      <li>• <strong>Dust Mites:</strong> Thrive in warm, humid tropical climates</li>
                      <li>• <strong>Mold:</strong> High humidity promotes indoor and outdoor mold growth</li>
                      <li>• <strong>Cockroaches:</strong> Major indoor allergen in urban areas</li>
                      <li>• <strong>Pet Dander:</strong> Dogs, cats (less common than dust/pollen)</li>
                      <li>• <strong>Smoke:</strong> Cooking fires, agricultural burning, vehicle exhaust</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Healthcare Challenges:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Limited Allergists:</strong> Very few allergy specialists across continent</li>
                      <li>• <strong>No Allergy Testing:</strong> Skin prick tests, blood tests rarely available</li>
                      <li>• <strong>Underdiagnosis:</strong> Allergies often mistaken for infections or "normal"</li>
                      <li>• <strong>OTC Self-Care:</strong> Patients manage symptoms without formal diagnosis</li>
                      <li>• <strong>Medication Access:</strong> Limited antihistamine variety in rural areas</li>
                      <li>• <strong>Education Gap:</strong> Low awareness of allergy triggers, management</li>
                      <li>• <strong>Epinephrine Shortage:</strong> Life-saving auto-injectors expensive, rarely available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Dust Allergies (Year-Round)</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ <strong>Saharan Dust:</strong> Seasonal dust storms (Harmattan winds) carry fine particles thousands of miles</li>
                <li>✓ <strong>Construction/Roads:</strong> Unpaved roads, building projects create constant dust</li>
                <li>✓ <strong>Dust Mites:</strong> Microscopic bugs in bedding, furniture thrive in warmth/humidity</li>
                <li>✓ <strong>Symptoms:</strong> Sneezing, runny nose, itchy eyes, coughing, asthma flare-ups</li>
                <li>✓ <strong>Management:</strong> Daily antihistamines, dust masks, nasal saline rinses, keep windows closed during dust storms</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Pollen Allergies (Seasonal)</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ <strong>Different Seasons:</strong> Rainy/dry season patterns differ from Northern Hemisphere spring/fall</li>
                <li>✓ <strong>Tropical Grasses:</strong> Year-round in some areas due to constant warmth</li>
                <li>✓ <strong>Acacia, Mesquite:</strong> Tree pollen during flowering seasons</li>
                <li>✓ <strong>Symptoms:</strong> Hay fever (allergic rhinitis), sneezing, itchy nose/eyes, congestion</li>
                <li>✓ <strong>Management:</strong> Antihistamines before season starts, nasal steroid sprays, avoid outdoor activities during high pollen times (early morning)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Food Allergies</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ <strong>Common:</strong> Peanuts, tree nuts, shellfish, fish, eggs, milk</li>
                <li>✓ <strong>Severe Reactions:</strong> Anaphylaxis (life-threatening) - swelling, difficulty breathing, drop in blood pressure</li>
                <li>✓ <strong>Critical:</strong> Epinephrine auto-injector (EpiPen) required for known severe allergies</li>
                <li>✓ <strong>Challenge:</strong> Limited access to epinephrine, emergency care in Africa</li>
                <li>✓ <strong>Prevention:</strong> Strict avoidance, read labels, carry emergency medication, inform others of allergy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Antihistamines Explained Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">How Antihistamines Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding allergy medications and choosing the right one
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🧬</span>
                <h4 className="text-xl" style={{ fontWeight: 600 }}>The Allergic Reaction Process</h4>
              </div>
              <p className="text-gray-700 mb-4">
                When you're exposed to an allergen (pollen, dust, pet dander), your immune system overreacts:
              </p>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li>Immune system mistakenly identifies harmless substance as threat</li>
                <li>Body produces IgE antibodies against the allergen</li>
                <li>IgE antibodies trigger mast cells to release <strong>histamine</strong></li>
                <li>Histamine binds to receptors in nose, eyes, throat, skin, causing symptoms:
                  <ul className="ml-6 mt-2 text-sm text-gray-600 space-y-1">
                    <li>• Sneezing, runny nose, congestion</li>
                    <li>• Itchy, watery eyes</li>
                    <li>• Itchy throat, coughing</li>
                    <li>• Skin rashes, hives, itching</li>
                    <li>• In severe cases: swelling, difficulty breathing</li>
                  </ul>
                </li>
              </ol>
              <p className="text-gray-700 mt-4">
                <strong>Antihistamines work by blocking histamine receptors</strong>, preventing histamine from causing allergy symptoms. They're most effective when taken BEFORE symptoms start or at first sign.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💊</span>
                <h4 className="text-xl" style={{ fontWeight: 600 }}>Types of Antihistamines</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>First-Generation (Sedating)</p>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Examples:</strong> Diphenhydramine (Benadryl), chlorpheniramine, promethazine
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Pros:</strong> Fast-acting, inexpensive, widely available, good for acute allergic reactions
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Cons:</strong> Cause drowsiness (don't drive/operate machinery), dry mouth, short duration (4-6 hours)
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Nighttime use, acute allergic reactions, when sedation helpful (sleep aid)
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Second-Generation (Non-Drowsy)</p>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Examples:</strong> Loratadine (Claritin), cetirizine (Zyrtec), fexofenadine (Allegra)
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Pros:</strong> Non-drowsy (or minimal drowsiness), long-acting (24 hours), once-daily dosing
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Cons:</strong> More expensive, slower onset than first-generation
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Best for:</strong> Daily use, daytime allergy relief, seasonal allergies, chronic allergies
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300">
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Which to Choose?</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Seasonal allergies (daily use):</strong> Second-generation (non-drowsy)</li>
                    <li>• <strong>Occasional allergies:</strong> Either type works</li>
                    <li>• <strong>Nighttime/trouble sleeping:</strong> First-generation (sedating)</li>
                    <li>• <strong>Acute reaction (bee sting, hives):</strong> First-generation (fast-acting)</li>
                    <li>• <strong>Children:</strong> Age-appropriate formulations available for both types</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Allergic Conditions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Common Allergic Conditions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognizing and treating different types of allergic reactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🤧</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Allergic Rhinitis (Hay Fever)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Very common - affects 10-30% of population in urban African areas
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Triggers:</strong> Pollen, dust, mold, pet dander, smoke
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Sneezing, runny/stuffy nose, itchy nose/throat, post-nasal drip, itchy/watery eyes, fatigue
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Oral Antihistamines:</strong> First-line treatment (loratadine, cetirizine) - take daily during allergy season</li>
                <li>• <strong>Nasal Steroid Sprays:</strong> Most effective for nasal symptoms (fluticasone, mometasone) - takes 1-2 weeks for full effect</li>
                <li>• <strong>Saline Nasal Rinse:</strong> Flushes out allergens, mucus</li>
                <li>• <strong>Decongestants:</strong> Short-term relief of congestion (pseudoephedrine oral, or nasal sprays max 3 days)</li>
                <li>• <strong>Eye Drops:</strong> Antihistamine eye drops for itchy, watery eyes</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🔴</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Hives (Urticaria)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common - 15-25% of people experience at least once in lifetime
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Triggers:</strong> Foods, medications, insect stings, infections, heat, stress, unknown (idiopathic)
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Raised, red, itchy welts on skin, can appear anywhere on body, welts come and go (migratory), swelling (angioedema) possible
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Antihistamines:</strong> First-line (cetirizine, loratadine) - may need higher doses than for hay fever</li>
                <li>• <strong>Cool Compresses:</strong> Soothe itching, reduce swelling</li>
                <li>• <strong>Avoid Triggers:</strong> Identify and avoid trigger if known</li>
                <li>• <strong>⚠️ SEEK CARE IF:</strong> Difficulty breathing, throat swelling, dizziness (signs of anaphylaxis)</li>
                <li>• Most hives resolve within 24 hours. Chronic hives (&gt;6 weeks) need medical evaluation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🫁</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Allergic Asthma</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Increasing in urban Africa - 60-80% of asthma has allergic component
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Triggers:</strong> Same as allergic rhinitis (pollen, dust mites, mold, pets) + smoke, cold air, exercise
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Wheezing, shortness of breath, chest tightness, coughing (especially at night/early morning)
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Rescue Inhaler:</strong> Salbutamol/albuterol (bronchodilator) - OTC in some African countries, prescription in others</li>
                <li>• <strong>Antihistamines:</strong> May reduce allergic triggers</li>
                <li>• <strong>Avoid Triggers:</strong> Critical for prevention</li>
                <li>• <strong>NOTE:</strong> Asthma needs medical management. Controller medications (inhaled steroids) prevent attacks</li>
                <li>• <strong>⚠️ EMERGENCY:</strong> Severe attack not relieved by inhaler needs immediate medical care</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🦟</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Insect Bite/Sting Allergies</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Very common in Africa (mosquitoes, bees, wasps, ants)
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Reactions:</strong> Range from mild local swelling to severe anaphylaxis
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Mild/Moderate Reactions:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Symptoms:</strong> Pain, redness, swelling at sting site, itching</li>
                <li>• <strong>Treatment:</strong> Remove stinger (scrape, don't pinch), wash area, ice pack, antihistamine cream, oral antihistamine if widespread itching</li>
              </ul>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Severe Reactions (Anaphylaxis):</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Symptoms:</strong> Swelling of face/throat, difficulty breathing, rapid pulse, dizziness, collapse</li>
                <li>• <strong>⚠️ EMERGENCY:</strong> Use epinephrine auto-injector immediately, call for help, go to hospital</li>
                <li>• People with known severe sting allergies MUST carry epinephrine at all times</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌿</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Contact Dermatitis (Allergic)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common from plants, metals (jewelry), cosmetics, rubber
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Triggers:</strong> Poison ivy (in some regions), nickel (jewelry), latex, fragrances, preservatives in cosmetics
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Red, itchy rash where substance contacted skin, may have blisters, oozing, scaling
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Avoid Trigger:</strong> Identify and stop contact with allergen</li>
                <li>• <strong>Wash Skin:</strong> Remove allergen from skin immediately</li>
                <li>• <strong>Hydrocortisone Cream 1%:</strong> Reduces inflammation, itching (apply 2-3 times daily)</li>
                <li>• <strong>Calamine Lotion:</strong> Soothes itching</li>
                <li>• <strong>Cool Compresses:</strong> Relieve itching</li>
                <li>• <strong>Oral Antihistamines:</strong> Help with itching, especially at night</li>
                <li>• Usually resolves in 2-4 weeks with treatment</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🍴</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Food Allergies</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Affects 2-8% of children, 1-3% of adults
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Common Allergens:</strong> Peanuts, tree nuts, shellfish, fish, eggs, milk, soy, wheat
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Range from mild (itchy mouth, hives) to severe (anaphylaxis)
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Management:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Strict Avoidance:</strong> ONLY treatment for food allergy</li>
                <li>• <strong>Read Labels:</strong> Check all food ingredients</li>
                <li>• <strong>Inform Others:</strong> Family, friends, restaurants of allergy</li>
                <li>• <strong>Carry Medication:</strong> Antihistamines for mild reactions, epinephrine auto-injector for severe allergies</li>
                <li>• <strong>Medical Alert ID:</strong> Bracelet/necklace stating food allergy</li>
                <li>• <strong>⚠️ ANAPHYLAXIS RISK:</strong> Peanuts, tree nuts, shellfish, fish most likely to cause severe reactions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Anaphylaxis & Epinephrine Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Anaphylaxis: Life-Threatening Allergic Reaction</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognizing and treating severe allergic emergencies
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🚨</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>What is Anaphylaxis?</h4>
                <p className="text-gray-700 mb-3">
                  Anaphylaxis is a severe, rapid, whole-body allergic reaction that can be FATAL within minutes if untreated. It requires immediate epinephrine injection and emergency medical care. Anyone with a history of severe allergies (especially food allergies, insect sting allergies) must carry an epinephrine auto-injector at all times.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Common Triggers:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Foods:</strong> Peanuts, tree nuts, shellfish, fish, eggs, milk</li>
                      <li>• <strong>Insect Stings:</strong> Bees, wasps, hornets, fire ants</li>
                      <li>• <strong>Medications:</strong> Antibiotics (penicillin), aspirin, NSAIDs</li>
                      <li>• <strong>Latex:</strong> Rubber gloves, balloons, medical equipment</li>
                      <li>• <strong>Exercise:</strong> Rare - exercise-induced anaphylaxis</li>
                      <li>• <strong>Idiopathic:</strong> Unknown trigger</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>⚠️ EMERGENCY SIGNS (Call for help immediately):</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Breathing:</strong> Difficulty breathing, wheezing, throat tightness, swelling of tongue/throat</li>
                      <li>• <strong>Circulation:</strong> Rapid weak pulse, dizziness, fainting, drop in blood pressure</li>
                      <li>• <strong>Skin:</strong> Hives all over body, flushing, swelling of face/lips</li>
                      <li>• <strong>Digestive:</strong> Severe nausea, vomiting, abdominal cramps, diarrhea</li>
                      <li>• <strong>Mental:</strong> Sense of impending doom, confusion, loss of consciousness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Epinephrine (Adrenaline): Life-Saving Treatment</h4>
              <p className="text-gray-700 mb-4">
                Epinephrine is the ONLY effective treatment for anaphylaxis. It reverses life-threatening symptoms within minutes by:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Relaxing airway muscles (improves breathing)</li>
                <li>• Constricting blood vessels (raises blood pressure)</li>
                <li>• Reducing swelling</li>
                <li>• Slowing release of allergy chemicals</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Epinephrine Auto-Injectors (EpiPen, Jext, Generic)</p>
                <p className="text-sm text-gray-700 mb-2">
                  Pre-filled devices that deliver a single dose of epinephrine through clothing into outer thigh muscle.
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Dosing:</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Adults/Children &gt;30 kg (66 lbs): 0.3 mg dose</li>
                  <li>• Children 15-30 kg (33-66 lbs): 0.15 mg dose</li>
                  <li>• Can repeat dose after 5-15 minutes if no improvement</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>How to Use Epinephrine Auto-Injector</h4>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 shrink-0" style={{ fontWeight: 600 }}>1.</span>
                  <span><strong>Remove from Tube:</strong> Take auto-injector out of carrying case</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 shrink-0" style={{ fontWeight: 600 }}>2.</span>
                  <span><strong>Remove Safety Cap:</strong> Pull off blue (or yellow) safety release</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 shrink-0" style={{ fontWeight: 600 }}>3.</span>
                  <span><strong>Position on Outer Thigh:</strong> Hold orange tip (needle end) against outer mid-thigh, perpendicular to leg. Can inject through clothing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 shrink-0" style={{ fontWeight: 600 }}>4.</span>
                  <span><strong>Press Firmly and Hold:</strong> Push down hard until click heard. Hold in place for 3 seconds (some devices: 10 seconds - check instructions)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 shrink-0" style={{ fontWeight: 600 }}>5.</span>
                  <span><strong>Remove and Massage:</strong> Remove injector, massage injection site for 10 seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 shrink-0" style={{ fontWeight: 600 }}>6.</span>
                  <span><strong>Call Emergency Services:</strong> Even if symptoms improve, call for ambulance. Anaphylaxis can recur (biphasic reaction)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 shrink-0" style={{ fontWeight: 600 }}>7.</span>
                  <span><strong>Position Person:</strong> Lie person down (unless vomiting/breathing difficulty - then sit up). Elevate legs if possible</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 shrink-0" style={{ fontWeight: 600 }}>8.</span>
                  <span><strong>Monitor:</strong> Stay with person. Be ready to give second dose if no improvement in 5-15 minutes</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">⚠️</div>
              <div>
                <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Challenges in Africa: Epinephrine Access Crisis</h4>
                <p className="text-gray-700 mb-3">
                  Epinephrine auto-injectors are often unavailable or unaffordable across much of Africa, creating a life-threatening gap for people with severe allergies. A device that costs $100-700 is out of reach for most families, and even when affordable, pharmacies rarely stock them.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2"><strong>Access Barriers:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• High cost (prohibitively expensive for most Africans)</li>
                      <li>• Limited availability (not stocked in most pharmacies)</li>
                      <li>• Short shelf life (12-18 months, must be replaced)</li>
                      <li>• Heat degradation (requires cool storage - challenging without reliable electricity)</li>
                      <li>• Import restrictions in some countries</li>
                      <li>• No insurance coverage for most people</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Critical Actions for Those at Risk:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Work with doctor to obtain prescription for epinephrine</li>
                      <li>• Explore generic alternatives (less expensive than brand names)</li>
                      <li>• Keep in cool, dark place (check expiration monthly)</li>
                      <li>• Teach family/friends how to use device</li>
                      <li>• Wear medical alert bracelet stating allergy</li>
                      <li>• <strong>Strict allergen avoidance is critical</strong> when epinephrine unavailable</li>
                      <li>• In emergency without epinephrine: Antihistamine + immediate hospital transport</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nasal Sprays & Proper Use Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Nasal Sprays: Types and Proper Use</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choosing the right nasal spray and using it correctly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Steroid Nasal Sprays</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Examples:</strong> Fluticasone (Flonase), mometasone (Nasonex), budesonide
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>How They Work:</strong> Reduce inflammation in nasal passages, prevent allergy symptoms
              </p>
              <p className="text-sm text-gray-700 mb-2"><strong>Pros:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1 mb-2">
                <li>✓ Most effective treatment for allergic rhinitis</li>
                <li>✓ Reduce all nasal symptoms (congestion, sneezing, runny nose)</li>
                <li>✓ Once-daily dosing</li>
                <li>✓ Safe for long-term use</li>
                <li>✓ Non-drowsy</li>
              </ul>
              <p className="text-sm text-gray-700 mb-2"><strong>Cons:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• Takes 1-2 weeks for full effect (not immediate)</li>
                <li>• Must use daily for best results</li>
                <li>• May cause nosebleeds if used incorrectly</li>
              </ul>
              <p className="text-sm text-gray-700"><strong>Best for:</strong> Moderate to severe allergic rhinitis, daily prevention</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Decongestant Nasal Sprays</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Examples:</strong> Oxymetazoline (Afrin), xylometazoline
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>How They Work:</strong> Constrict blood vessels in nose, rapidly reduce swelling and congestion
              </p>
              <p className="text-sm text-gray-700 mb-2"><strong>Pros:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1 mb-2">
                <li>✓ Fast-acting (works in minutes)</li>
                <li>✓ Very effective for congestion</li>
                <li>✓ Good for acute congestion (colds, sinus infections)</li>
              </ul>
              <p className="text-sm text-red-600 mb-2"><strong>⚠️ MAJOR WARNING:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>MAXIMUM 3 DAYS USE</strong></li>
                <li>• Longer use causes "rebound congestion" - nose becomes MORE congested when you stop</li>
                <li>• Can lead to dependence (need spray to breathe)</li>
                <li>• NOT for allergies - for short-term congestion only</li>
              </ul>
              <p className="text-sm text-gray-700"><strong>Best for:</strong> Acute congestion from colds, short-term relief while waiting for steroid spray to work</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Saline Nasal Sprays/Rinses</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Examples:</strong> Saline spray, neti pot, nasal irrigation bottle
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>How They Work:</strong> Salt water rinses allergens, mucus, irritants from nasal passages
              </p>
              <p className="text-sm text-gray-700 mb-2"><strong>Pros:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1 mb-2">
                <li>✓ Completely safe - no side effects</li>
                <li>✓ Can use unlimited times daily</li>
                <li>✓ Safe for children, pregnant women</li>
                <li>✓ Moisturizes dry nasal passages</li>
                <li>✓ Physically removes allergens before they cause reaction</li>
                <li>✓ Inexpensive</li>
              </ul>
              <p className="text-sm text-gray-700 mb-2"><strong>Cons:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• Doesn't treat underlying allergy</li>
                <li>• Temporary relief</li>
                <li>• Requires frequent use</li>
              </ul>
              <p className="text-sm text-gray-700"><strong>Best for:</strong> Mild allergies, dusty environments, prevention, adjunct to other treatments</p>
            </div>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">💡</div>
              <div>
                <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>How to Use Nasal Spray Correctly</h4>
                <p className="text-gray-700 mb-3">
                  Many people use nasal sprays incorrectly, reducing effectiveness and increasing side effects (nosebleeds). Follow these steps:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Proper Technique:</p>
                    <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                      <li>Blow nose gently to clear mucus</li>
                      <li>Shake bottle (if required by product)</li>
                      <li>Tilt head slightly forward (NOT back)</li>
                      <li>Insert nozzle into nostril, pointing AWAY from center of nose (toward outer wall/ear)</li>
                      <li>Close other nostril with finger</li>
                      <li>Spray while breathing in gently through nose</li>
                      <li>Breathe out through mouth</li>
                      <li>Repeat for other nostril</li>
                      <li>Don't blow nose for 15 minutes after</li>
                    </ol>
                  </div>
                  <div>
                    <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Common Mistakes to Avoid:</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>❌ Tilting head back (causes spray to drip down throat, not stay in nose)</li>
                      <li>❌ Aiming spray at nasal septum (center wall) → Causes nosebleeds</li>
                      <li>❌ Sniffing hard (sends medication to throat instead of nose)</li>
                      <li>❌ Blowing nose immediately after (wastes medication)</li>
                      <li>❌ Using decongestant spray &gt;3 days</li>
                      <li>❌ Giving up on steroid spray after 2-3 days (needs 1-2 weeks for full effect)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Allergy Prevention & Avoidance Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Allergy Prevention & Trigger Avoidance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Practical strategies to reduce allergen exposure in African environments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Indoor Allergen Reduction</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Dust Mites (Bedding, Furniture):</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Wash bedding weekly in hot water (60°C/140°F)</li>
                    <li>• Use allergen-proof mattress/pillow covers</li>
                    <li>• Remove carpets (hard floors easier to clean)</li>
                    <li>• Reduce clutter (less dust accumulation)</li>
                    <li>• Vacuum with HEPA filter weekly</li>
                    <li>• Keep humidity low (&lt;50% - dust mites thrive in humidity)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Mold:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Fix water leaks immediately</li>
                    <li>• Improve ventilation (open windows when possible)</li>
                    <li>• Use exhaust fans in bathroom/kitchen</li>
                    <li>• Clean visible mold with bleach solution</li>
                    <li>• Don't dry clothes indoors (increases humidity)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Cockroaches:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Store food in sealed containers</li>
                    <li>• Clean up food/crumbs immediately</li>
                    <li>• Seal cracks/crevices where roaches hide</li>
                    <li>• Use baits/traps (avoid sprays if asthma)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Outdoor Allergen Avoidance</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Pollen:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Stay indoors during high pollen times (early morning, dry windy days)</li>
                    <li>• Keep windows closed during pollen season</li>
                    <li>• Shower and change clothes after being outside</li>
                    <li>• Wear sunglasses (keeps pollen out of eyes)</li>
                    <li>• Dry clothes indoors (pollen sticks to wet laundry)</li>
                    <li>• Start allergy medication before pollen season begins</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Dust (Saharan Dust, Construction):</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Wear dust mask (N95 or surgical mask) during dust storms</li>
                    <li>• Keep windows/doors closed during dusty periods</li>
                    <li>• Use damp cloth to clean surfaces (don't dry dust - stirs particles)</li>
                    <li>• Rinse nasal passages with saline after dust exposure</li>
                    <li>• Stay indoors during Harmattan season if very allergic</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Air Quality:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Avoid smoke (cooking fires, burning waste, vehicle exhaust)</li>
                    <li>• Use improved cookstoves (less smoke exposure)</li>
                    <li>• Don't exercise near busy roads (vehicle exhaust worsens allergies)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border-2 border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🛡️</div>
              <div>
                <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Pet Allergies: To Keep or Not to Keep?</h4>
                <p className="text-gray-700 mb-3">
                  Pet dander (skin flakes), saliva, and urine proteins cause allergic reactions. Unfortunately, there's no such thing as a truly "hypoallergenic" pet - all furry animals produce allergens.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2"><strong>If You Must Keep Pet:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Keep pet out of bedroom (most important)</li>
                      <li>• Bathe pet weekly (reduces dander)</li>
                      <li>• HEPA air purifier in living areas</li>
                      <li>• Remove carpets (hard floors easier to clean)</li>
                      <li>• Wash hands after petting</li>
                      <li>• Have non-allergic person groom pet outdoors</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Reality Check:</strong></p>
                    <p className="text-gray-600 mb-2">
                      For severe pet allergies, the only reliable solution is re-homing the pet. Even with all precautions, allergens persist in homes for months after pet removal. This is a difficult decision, but health must come first, especially if asthma is involved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Quality & Distribution Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Product Quality & Distribution</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Quality Standards</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Antihistamines:</strong> WHO-recommended formulations (loratadine, cetirizine), pediatric and adult dosing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Nasal Sprays:</strong> Sterile formulations, metered-dose accuracy, validated for tropical storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Epinephrine Auto-Injectors:</strong> FDA/CE-approved devices, temperature-stable formulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Eye Drops:</strong> Sterile, preservative-free options available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Topical Products:</strong> Pharmaceutical-grade active ingredients, hypoallergenic bases</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Access & Education</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Wide Distribution:</strong> Pharmacies, clinics, hospitals, even small shops (basic antihistamines)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Multiple Price Points:</strong> Generic antihistamines (affordable) to brand-name products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Allergy Education:</strong> Patient information leaflets, pharmacist counseling on proper use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Anaphylaxis Training:</strong> Community education on recognizing and treating severe reactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Visual Instructions:</strong> Picture-based guides for nasal spray use, epinephrine injection</span>
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
              <div className="text-4xl mb-2 text-[#4B2991]">7</div>
              <div className="text-gray-600">Product Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#4B2991]">45+</div>
              <div className="text-gray-600">Product Options</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#4B2991]">24hr</div>
              <div className="text-gray-600">Relief Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#4B2991]">Life</div>
              <div className="text-gray-600">Saving Care</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
