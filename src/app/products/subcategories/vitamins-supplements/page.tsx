import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function VitaminsSupplementsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Vitamins & Supplements",
    "description": "Multivitamins, vitamin A, iron supplements, calcium for nutritional support across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'multivitamins',
      name: 'Multivitamins (Adult & Pediatric)',
      products: ['Adult multivitamin tablets', 'Pediatric multivitamin syrups', 'Senior formulations', 'Gender-specific multivitamins', 'Gummy multivitamins for children'],
      icon: '💊',
      description: 'Comprehensive daily vitamin and mineral support'
    },
    {
      id: 'vitamin-a',
      name: 'Vitamin A Supplementation',
      products: ['High-dose Vitamin A capsules (100,000 IU, 200,000 IU)', 'Pediatric Vitamin A drops', 'Vitamin A + D combinations', 'Beta-carotene supplements', 'WHO-recommended dosing schedules'],
      icon: '🥕',
      description: 'Critical for child survival and vision health'
    },
    {
      id: 'iron-anemia',
      name: 'Iron Supplements & Anemia Prevention',
      products: ['Ferrous sulfate tablets', 'Ferrous fumarate', 'Iron + Folic acid combinations', 'Pediatric iron drops/syrup', 'Slow-release iron formulations', 'Iron polymaltose complex'],
      icon: '🩸',
      description: 'Anemia prevention and treatment across all ages'
    },
    {
      id: 'folic-acid-b-complex',
      name: 'Folic Acid & B-Complex Vitamins',
      products: ['Folic acid 5mg tablets', 'Vitamin B-Complex', 'Vitamin B12 (cyanocobalamin)', 'Thiamine (B1)', 'Pyridoxine (B6)', 'Niacin (B3)'],
      icon: '🌾',
      description: 'Neural tube defect prevention and energy metabolism'
    },
    {
      id: 'vitamin-d-calcium',
      name: 'Vitamin D & Calcium',
      products: ['Vitamin D3 (cholecalciferol)', 'Calcium carbonate tablets', 'Calcium + Vitamin D combinations', 'Pediatric Vitamin D drops', 'High-dose Vitamin D (weekly/monthly)'],
      icon: '☀️',
      description: 'Bone health, immunity, and calcium absorption'
    },
    {
      id: 'zinc-supplements',
      name: 'Zinc Supplements',
      products: ['Zinc sulfate tablets (20mg)', 'Zinc acetate', 'Dispersible zinc tablets', 'Zinc + ORS combinations', 'Pediatric zinc syrup'],
      icon: '⚡',
      description: 'Immune function, diarrhea treatment, growth support'
    },
    {
      id: 'prenatal-postnatal',
      name: 'Prenatal & Postnatal Vitamins',
      products: ['Prenatal multivitamins', 'Iron + Folic acid (pregnancy)', 'Calcium for pregnancy', 'DHA prenatal supplements', 'Postnatal lactation support', 'Multiple micronutrient supplements (MMS)'],
      icon: '🤰',
      description: 'Maternal and fetal health optimization'
    },
    {
      id: 'pediatric-nutrition',
      name: 'Pediatric Nutritional Supplements',
      products: ['Multivitamin syrups', 'Growth support formulas', 'Appetite stimulants with vitamins', 'Chewable multivitamins', 'Fortified milk supplements', 'Micronutrient powders (MNP)'],
      icon: '👶',
      description: 'Supporting healthy growth and development'
    },
    {
      id: 'vitamin-c-immune',
      name: 'Vitamin C & Immune Support',
      products: ['Ascorbic acid tablets (500mg, 1000mg)', 'Chewable Vitamin C', 'Effervescent Vitamin C', 'Vitamin C syrup', 'Immune support combinations'],
      icon: '🍊',
      description: 'Immune function and antioxidant protection'
    },
    {
      id: 'omega-3',
      name: 'Omega-3 Fatty Acids',
      products: ['Fish oil capsules', 'Cod liver oil', 'DHA supplements', 'EPA + DHA combinations', 'Pediatric omega-3 syrups', 'Vegetarian omega-3 (algae-based)'],
      icon: '🐟',
      description: 'Cardiovascular and brain health support'
    },
    {
      id: 'electrolyte-minerals',
      name: 'Electrolyte & Mineral Supplements',
      products: ['Magnesium supplements', 'Potassium supplements', 'Multi-mineral formulations', 'Electrolyte replacement tablets', 'Selenium', 'Chromium'],
      icon: '⚗️',
      description: 'Essential mineral balance and cellular function'
    },
    {
      id: 'therapeutic-nutrition',
      name: 'Therapeutic Nutritional Products',
      products: ['Ready-to-Use Therapeutic Food (RUTF/Plumpy\'Nut)', 'Lipid-based nutrient supplements (LNS)', 'Micronutrient powders', 'Fortified blended foods', 'Therapeutic milk formulas'],
      icon: '🥜',
      description: 'Severe acute malnutrition treatment'
    },
    {
      id: 'herbal-traditional',
      name: 'Herbal & Traditional Supplements',
      products: ['Moringa supplements', 'Spirulina', 'African herbal blends', 'Ginger supplements', 'Turmeric/Curcumin', 'Echinacea', 'Garlic supplements'],
      icon: '🌿',
      description: 'Plant-based wellness and traditional medicine support'
    },
    {
      id: 'protein-nutrition',
      name: 'Protein & Nutritional Powders',
      products: ['Whey protein powder', 'Soy protein isolate', 'Nutritional meal replacements', 'High-protein supplements', 'Fortified porridge mixes', 'Peanut-based protein supplements'],
      icon: '🥛',
      description: 'Protein supplementation and nutrition fortification'
    },
    {
      id: 'disease-support',
      name: 'Specialized Disease Support Vitamins',
      products: ['HIV/AIDS support multivitamins', 'TB treatment support vitamins', 'Diabetic multivitamins', 'Chronic disease formulations', 'Post-infectious recovery vitamins'],
      icon: '💉',
      description: 'Nutritional support for chronic conditions'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Vitamins & Supplements | Nutritional Support | Pacem Health"
        description="Vitamins and supplements including multivitamins, vitamin A, iron supplements, calcium. Essential nutritional support for African communities."
        keywords={[
          'vitamins Africa',
          'supplements Africa',
          'multivitamins',
          'vitamin A Africa',
          'iron supplements',
          'calcium supplements',
          'nutritional support Africa',
          'dietary supplements'
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
            <span>Vitamins & Supplements</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#7C944B] to-[#5A6D35] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Vitamins & Supplements
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Essential vitamins, minerals, and nutritional supplements addressing Africa's critical micronutrient deficiencies and supporting health across the lifespan. From life-saving Vitamin A and zinc supplementation to prenatal nutrition and therapeutic feeding for malnutrition, we provide evidence-based nutritional interventions that strengthen immune function, prevent deficiency diseases, and optimize health outcomes for African populations.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of vitamins, minerals, and nutritional supplements</p>
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

      {/* Critical Micronutrient Deficiencies in Africa Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Priority Micronutrient Deficiencies in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding Africa's most critical nutritional gaps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🥕</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Vitamin A Deficiency</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Affects 30-40% of children under 5 in sub-Saharan Africa
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Consequences:</strong> Blindness, increased mortality from measles and diarrhea, impaired immunity
              </p>
              <p className="text-sm text-gray-700">
                <strong>Intervention:</strong> Biannual high-dose Vitamin A supplementation (100,000-200,000 IU) for children 6-59 months
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🩸</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Iron Deficiency Anemia</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> 60% of pregnant women, 40-50% of children in Africa
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Consequences:</strong> Maternal mortality, low birth weight, impaired cognitive development, reduced work capacity
              </p>
              <p className="text-sm text-gray-700">
                <strong>Intervention:</strong> Iron + folic acid supplementation for pregnancy, iron fortification, parasite control
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-red-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">⚡</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Zinc Deficiency</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Widespread in Africa due to cereal-based diets low in bioavailable zinc
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Consequences:</strong> Stunting, diarrhea, pneumonia, impaired immune function
              </p>
              <p className="text-sm text-gray-700">
                <strong>Intervention:</strong> Zinc supplementation (10-20mg daily for 10-14 days) during diarrhea, preventive zinc
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌾</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Folic Acid Deficiency</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common in pregnant women, particularly in malaria-endemic areas
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Consequences:</strong> Neural tube defects, anemia, pregnancy complications
              </p>
              <p className="text-sm text-gray-700">
                <strong>Intervention:</strong> Periconceptional folic acid (400-800 mcg daily), food fortification
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">☀️</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Vitamin D Deficiency</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Emerging issue in African populations, especially urban areas, darker skin
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Consequences:</strong> Rickets in children, bone health issues, immune dysfunction
              </p>
              <p className="text-sm text-gray-700">
                <strong>Intervention:</strong> Vitamin D supplementation for high-risk groups, sun exposure, fortification
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🔵</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Iodine Deficiency</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Progress made through salt iodization, but pockets remain
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Consequences:</strong> Goiter, cretinism, impaired mental development
              </p>
              <p className="text-sm text-gray-700">
                <strong>Intervention:</strong> Universal salt iodization (USI), iodine supplements where needed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO-Recommended Supplementation Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">WHO-Recommended Supplementation Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Evidence-based public health nutrition interventions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#E6F4EA] border-2 border-[#34A853] rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🥕</div>
                <div>
                  <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Vitamin A Supplementation (VAS)</h4>
                  <p className="text-gray-700 mb-3">
                    <strong>Target:</strong> Children aged 6-59 months in high-risk areas
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Dosage Schedule:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2 mb-3">
                    <li>• 6-11 months: 100,000 IU (once)</li>
                    <li>• 12-59 months: 200,000 IU every 6 months</li>
                    <li>• Often delivered during immunization campaigns or Child Health Days</li>
                  </ul>
                  <p className="text-gray-700">
                    <strong>Impact:</strong> Reduces all-cause child mortality by 12-24%, prevents blindness, strengthens immunity
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#E6F4EA] border-2 border-[#34A853] rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🩸</div>
                <div>
                  <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Iron & Folic Acid Supplementation (IFA)</h4>
                  <p className="text-gray-700 mb-3">
                    <strong>Target:</strong> Pregnant and lactating women, adolescent girls
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Dosage Schedule:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2 mb-3">
                    <li>• Pregnancy: 30-60mg elemental iron + 400 mcg folic acid daily</li>
                    <li>• Start early in pregnancy, continue through lactation</li>
                    <li>• Weekly IFA for adolescent girls (60mg iron + 2800 mcg folic acid)</li>
                  </ul>
                  <p className="text-gray-700">
                    <strong>Impact:</strong> Reduces maternal anemia, low birth weight, neural tube defects
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#E6F4EA] border-2 border-[#34A853] rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚡</div>
                <div>
                  <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Zinc for Diarrhea Management</h4>
                  <p className="text-gray-700 mb-3">
                    <strong>Target:</strong> Children with acute diarrhea
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Dosage Schedule:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2 mb-3">
                    <li>• Under 6 months: 10mg elemental zinc daily for 10-14 days</li>
                    <li>• Over 6 months: 20mg elemental zinc daily for 10-14 days</li>
                    <li>• Given alongside ORS therapy</li>
                  </ul>
                  <p className="text-gray-700">
                    <strong>Impact:</strong> Reduces diarrhea duration by 25%, severity, prevents recurrence
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#E6F4EA] border-2 border-[#34A853] rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🤰</div>
                <div>
                  <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Multiple Micronutrient Supplementation (MMS)</h4>
                  <p className="text-gray-700 mb-3">
                    <strong>Target:</strong> Pregnant women in low-resource settings
                  </p>
                  <p className="text-gray-700 mb-3">
                    <strong>Composition:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2 mb-3">
                    <li>• 15 vitamins and minerals (UNIMMAP formulation)</li>
                    <li>• Includes iron, folic acid, vitamins A, C, D, E, B-complex, zinc, copper, selenium, iodine</li>
                    <li>• One tablet daily throughout pregnancy</li>
                  </ul>
                  <p className="text-gray-700">
                    <strong>Impact:</strong> Superior to IFA alone for birth outcomes, may replace IFA in some settings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Malnutrition Treatment Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Therapeutic Nutrition for Malnutrition</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Managing acute malnutrition in African communities
            </p>
          </div>

          <div className="bg-[#FFF9E6] border-2 border-[#FFD700] rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🥜</div>
              <div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Ready-to-Use Therapeutic Foods (RUTF)</h4>
                <p className="text-gray-700 mb-3">
                  RUTF revolutionized the treatment of severe acute malnutrition (SAM), allowing community-based management instead of hospitalization. The most well-known brand is Plumpy'Nut®, a peanut-based paste fortified with vitamins and minerals.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Key Features:</strong>
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Energy-dense (500 kcal per 92g sachet)</li>
                  <li>• Complete nutrition: protein, fats, carbohydrates, 40+ vitamins/minerals</li>
                  <li>• Ready-to-eat, no water/cooking required (reduces contamination risk)</li>
                  <li>• Long shelf life, heat-stable for tropical climates</li>
                  <li>• Enables home-based treatment for uncomplicated SAM</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Severe Acute Malnutrition (SAM)</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Criteria:</strong> Weight-for-height &lt;-3 SD, MUAC &lt;115mm, or edema
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Uncomplicated: RUTF at home (150-200 kcal/kg/day)</li>
                <li>• Complicated: Inpatient F-75/F-100 therapeutic milk, then RUTF</li>
                <li>• Duration: 6-8 weeks typically</li>
                <li>• Antibiotic coverage, micronutrient supplementation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Moderate Acute Malnutrition (MAM)</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Criteria:</strong> Weight-for-height -3 to -2 SD, MUAC 115-125mm
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lipid-based Nutrient Supplements (LNS)</li>
                <li>• Medium-quantity LNS or fortified blended foods</li>
                <li>• Supplementary feeding programs</li>
                <li>• Nutrition counseling for caregivers</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Prevention (Blanket Supplementation)</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Target:</strong> All children 6-59 months in high-risk areas
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Interventions:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Micronutrient powders (MNP/Sprinkles)</li>
                <li>• Small-quantity LNS</li>
                <li>• Fortified foods (CSB++, Super Cereal)</li>
                <li>• During lean season/food insecurity periods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Use Guidelines Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Safe Use of Vitamins & Supplements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important guidelines for safe supplementation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Key Safety Considerations</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Vitamin A Toxicity:</strong> Never exceed recommended doses - hypervitaminosis A can cause serious adverse effects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Iron Overdose:</strong> Keep iron supplements away from children - potentially fatal if ingested in large amounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Drug Interactions:</strong> Calcium/iron can reduce absorption of antibiotics, thyroid medications - separate by 2+ hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Pregnancy Caution:</strong> High-dose Vitamin A contraindicated in first trimester (teratogenic above 10,000 IU/day)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Quality Concerns:</strong> Use products from reputable manufacturers - supplement quality varies widely</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Maximizing Absorption</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Iron:</strong> Take with Vitamin C (enhances absorption), avoid with tea/coffee (inhibits absorption)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Fat-Soluble Vitamins:</strong> A, D, E, K best absorbed with meals containing fat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Calcium:</strong> Divide doses (body absorbs max 500mg at once), don't take with iron/zinc</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>B-Complex:</strong> Water-soluble, can take on empty stomach, best absorbed in divided doses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Timing:</strong> Some vitamins (B-complex) energizing - take morning; others (magnesium) relaxing - take evening</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Population-Specific Recommendations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Population-Specific Supplement Recommendations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored nutritional support across the lifespan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🤰</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Pregnant Women</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Essential:</strong></li>
                <li>• Folic acid: 400-800 mcg daily (before conception through 12 weeks)</li>
                <li>• Iron: 30-60mg daily (or weekly IFA)</li>
                <li>• Calcium: 1000-1500mg daily</li>
                <li><strong>Recommended:</strong></li>
                <li>• Prenatal multivitamin or MMS</li>
                <li>• Vitamin D if at risk of deficiency</li>
                <li>• DHA (200-300mg) for fetal brain development</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">👶</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Infants & Young Children</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Infants (0-6 months):</strong></li>
                <li>• Breastfeeding provides complete nutrition</li>
                <li>• Vitamin D drops if exclusively breastfed (400 IU daily)</li>
                <li><strong>6-59 months:</strong></li>
                <li>• Vitamin A: 100,000-200,000 IU every 6 months</li>
                <li>• Micronutrient powders (if at risk)</li>
                <li>• Zinc during diarrhea (10-20mg for 10-14 days)</li>
                <li>• Iron if anemic or high-risk</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🧑</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Adolescents</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Girls:</strong></li>
                <li>• Weekly IFA (60mg iron + 2800 mcg folic acid)</li>
                <li>• Calcium for bone development (1200-1300mg)</li>
                <li>• Vitamin D (600 IU daily)</li>
                <li><strong>Boys:</strong></li>
                <li>• Multivitamin if diet inadequate</li>
                <li>• Calcium for peak bone mass</li>
                <li>• Zinc for growth and development</li>
                <li>• Iron if anemic</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💉</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>People Living with HIV/AIDS</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Evidence-based:</strong></li>
                <li>• Multivitamin (B-complex, C, E) improves outcomes, delays progression</li>
                <li>• Higher doses often needed due to malabsorption</li>
                <li>• Vitamin A: conflicting data, use caution with high doses</li>
                <li>• Selenium: may support immune function</li>
                <li>• Address malnutrition with therapeutic foods if needed</li>
                <li>• Avoid mega-doses - potential for harm</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🫁</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>TB Patients</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Supportive nutrition:</strong></li>
                <li>• Multivitamin to address deficiencies</li>
                <li>• Vitamin D: may enhance TB treatment outcomes</li>
                <li>• B-Complex: especially B6 if on isoniazid (prevents neuropathy)</li>
                <li>• Nutritional support: high-protein, high-calorie diet</li>
                <li>• Zinc, Vitamin A for immune support</li>
                <li>• Address malnutrition common in TB patients</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">👴</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Elderly Adults</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Age-related needs:</strong></li>
                <li>• Vitamin B12: absorption decreases with age (supplement or fortified foods)</li>
                <li>• Vitamin D + Calcium: bone health, fall prevention</li>
                <li>• Omega-3: cardiovascular and cognitive health</li>
                <li>• Vitamin C & E: antioxidant protection</li>
                <li>• Senior multivitamin formulation</li>
                <li>• Screen for deficiencies (B12, D, iron)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supplementation Timing & Combination Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Optimal Timing & Supplement Combinations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Maximizing effectiveness through proper timing and pairing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F5F7F0] p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Synergistic Combinations (Take Together)</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Iron + Vitamin C</p>
                  <p className="text-sm text-gray-600">Vitamin C enhances iron absorption by up to 300%. Take together for maximum effect.</p>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Calcium + Vitamin D</p>
                  <p className="text-sm text-gray-600">Vitamin D essential for calcium absorption and bone health. Always pair together.</p>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Vitamin K + Vitamin D + Calcium</p>
                  <p className="text-sm text-gray-600">Triple combination for optimal bone health - directs calcium to bones.</p>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Magnesium + Vitamin D</p>
                  <p className="text-sm text-gray-600">Magnesium needed to activate Vitamin D. Pair for better outcomes.</p>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Omega-3 + Fat-Soluble Vitamins</p>
                  <p className="text-sm text-gray-600">Take vitamins A, D, E, K with omega-3 or fatty meal for absorption.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF5F5] p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Avoid Taking Together (Separate)</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Iron + Calcium</p>
                  <p className="text-sm text-gray-600">Compete for absorption. Separate by at least 2 hours. Take iron morning, calcium evening.</p>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Iron + Zinc</p>
                  <p className="text-sm text-gray-600">High doses interfere with each other's absorption. Separate doses when possible.</p>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Calcium + Zinc/Magnesium</p>
                  <p className="text-sm text-gray-600">Calcium can reduce absorption of these minerals. Don't take all together.</p>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Iron + Tea/Coffee</p>
                  <p className="text-sm text-gray-600">Tannins inhibit iron absorption. Wait 1-2 hours after iron before tea/coffee.</p>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Fiber Supplements + Medications</p>
                  <p className="text-sm text-gray-600">Can reduce drug absorption. Take fiber 2+ hours away from medications/vitamins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Fortification Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Food Fortification in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Large-scale interventions complementing supplementation
            </p>
          </div>

          <div className="bg-[#E6F4EA] border-2 border-[#34A853] rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🌾</div>
              <div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Strategic Food Fortification Programs</h4>
                <p className="text-gray-700 mb-3">
                  Food fortification provides a cost-effective, sustainable approach to addressing micronutrient deficiencies at the population level. Unlike supplementation (targeted), fortification reaches entire populations through staple foods.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🧂</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Salt Iodization</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Target:</strong> Universal salt iodization (USI)</li>
                <li>• <strong>Nutrient:</strong> Iodine (prevents goiter, cretinism)</li>
                <li>• <strong>Status:</strong> Widely implemented across Africa</li>
                <li>• <strong>Challenge:</strong> Quality control, informal salt sector</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🌾</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Wheat/Maize Flour</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Nutrients:</strong> Iron, folic acid, B-vitamins, zinc</li>
                <li>• <strong>Target:</strong> Urban populations consuming processed flour</li>
                <li>• <strong>Impact:</strong> Reduces anemia, neural tube defects</li>
                <li>• <strong>Many African countries mandate flour fortification</strong></li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🍚</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Rice Fortification</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Technology:</strong> Artificial kernels coated with micronutrients</li>
                <li>• <strong>Nutrients:</strong> Iron, zinc, B-vitamins, folic acid</li>
                <li>• <strong>Expanding:</strong> Growing in rice-consuming African regions</li>
                <li>• <strong>Advantage:</strong> Reaches rural populations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🥛</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Cooking Oil & Others</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Oil:</strong> Vitamin A fortification (fat-soluble)</li>
                <li>• <strong>Sugar:</strong> Vitamin A in some countries</li>
                <li>• <strong>Condiments:</strong> Bouillon cubes (iron, iodine, B-vitamins)</li>
                <li>• <strong>Reaches all socioeconomic levels</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
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
                  <span><strong>WHO Specifications:</strong> Vitamin A, iron, zinc products meet WHO prequalification standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>UNICEF Supply:</strong> RUTF, micronutrient supplements for emergency/development programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>GMP Manufacturing:</strong> Pharmaceuticals-grade facilities for supplement production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Stability Testing:</strong> Products validated for tropical climate storage conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Batch Testing:</strong> Potency, purity, dissolution verified per batch</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Distribution & Access</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Public Health Programs:</strong> Free Vitamin A, IFA through government health systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Pharmacy Access:</strong> OTC vitamins widely available in urban/peri-urban areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Community Distribution:</strong> RUTF, micronutrient powders through community health workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Affordable Options:</strong> Generic and branded products at multiple price points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Supply Chain:</strong> Cold chain not required - facilitates last-mile delivery</span>
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
              <div className="text-4xl mb-2 text-[#7C944B]">15</div>
              <div className="text-gray-600">Product Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">75+</div>
              <div className="text-gray-600">Product Variations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">WHO</div>
              <div className="text-gray-600">Standards Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">Life-Saving</div>
              <div className="text-gray-600">Public Health Impact</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}