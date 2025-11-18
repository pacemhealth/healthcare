import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function FortifiedFoodsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Fortified Foods & Special Dietary Products",
    "description": "Fortified staple foods, specialized infant formulas, condition-specific nutrition products for addressing malnutrition and dietary needs across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'fortified-staple-foods',
      name: 'Fortified Staple Foods',
      description: 'Fortified flour, rice, oil, salt, and other staples with added vitamins and minerals reaching entire populations through food supply',
      icon: '🌾'
    },
    {
      id: 'specialized-infant-formulas',
      name: 'Specialized Infant Formulas',
      description: 'Therapeutic infant formulas, low-birth-weight formulas, specialized products for infants who cannot breastfeed or have medical conditions',
      icon: '🍼'
    },
    {
      id: 'condition-specific-nutrition',
      name: 'Condition-Specific Nutrition Products',
      description: 'Medical nutrition therapy products, immune-support nutrition for HIV/TB patients, diabetes-specific formulations, and specialized dietary products',
      icon: '💊'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Fortified Foods & Special Dietary Products | Nutrition Solutions | Pacem Health"
        description="Fortified foods and special dietary products including fortified staples, specialized infant formulas, condition-specific nutrition. Addressing malnutrition and dietary deficiencies across African populations."
        keywords={[
          'fortified foods Africa',
          'specialized infant formulas',
          'condition specific nutrition',
          'food fortification Africa',
          'malnutrition solutions',
          'dietary products Africa',
          'nutrition intervention',
          'fortified staples Africa'
        ]}
        structuredData={productSchema}
      />
      <section className="bg-[#7C944B] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/division3" className="hover:underline">Community Health Solutions</Link>
            <span>/</span>
            <Link to="/products/categories/nutrition-supplements" className="hover:underline">Nutrition & Supplements</Link>
            <span>/</span>
            <span>Fortified Foods & Special Dietary Products</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Nutrition & Supplements</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Fortified Foods & Special Dietary Products
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Fortified staple foods, specialized infant formulas, and dietary supplements for specific conditions and populations. Sustainable nutrition solutions reaching entire populations through food fortification—from iodized salt preventing mental impairment to vitamin A-fortified oil improving immunity to iron-fortified flour reducing anemia—plus specialized therapeutic nutrition for HIV/TB patients, low-birth-weight infants, and chronic disease management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete fortification and specialized nutrition solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {productGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => navigate(`/products/product-groups/${group.id}`)}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 text-left group"
              >
                <div className="text-4xl mb-4">{group.icon}</div>
                <h3 className="text-xl mb-3 group-hover:text-[#4B2991] transition-colors">
                  {group.name}
                </h3>
                <p className="text-gray-600 mb-4">{group.description}</p>
                <span className="text-[#4B2991] group-hover:translate-x-2 transition-transform inline-block">
                  Explore Products →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Food Fortification: Population-Wide Impact</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why fortified foods are the most sustainable nutrition intervention
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🧂</div>
              <h3 className="text-xl mb-2">Universal Salt Iodization</h3>
              <p className="text-gray-700">
                Before iodization, 2 billion people iodine deficient causing goiter, mental impairment, stillbirths. Universal salt iodization (USI)—adding iodine to all salt—prevents iodine deficiency at &lt;$0.05 per person per year. 88% of African households now use iodized salt. Prevents 2 million cases of mental impairment annually. Most cost-effective nutrition intervention.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🌾</div>
              <h3 className="text-xl mb-2">Flour Fortification</h3>
              <p className="text-gray-700">
                Large-scale mandatory fortification of wheat/maize flour with iron, folic acid, B vitamins reaches 80%+ of urban populations. Reduces neural tube defects 50-70%, improves iron status reducing anemia 20-30%. Sustainable—integrated into industrial production, minimal cost increase ($1-2 per person per year), no behavior change required.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🛢️</div>
              <h3 className="text-xl mb-2">Vitamin A Fortification</h3>
              <p className="text-gray-700">
                Fortifying cooking oil, sugar, or flour with vitamin A provides steady, year-round supply complementing biannual supplementation campaigns. Oil fortification cost-effective in countries with centralized processing. Combined with supplementation achieves universal vitamin A adequacy, eliminates deficiency as public health problem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Fortification Program Challenges</h3>
              <p className="text-gray-700 mb-4">
                Barriers to effective large-scale food fortification
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited fortification capacity in small-scale/informal food production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Weak regulatory frameworks and enforcement of fortification standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited quality control and monitoring of fortification levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Consumer awareness gaps about fortified product benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Supply chain for fortification premix and equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited reach in rural areas relying on home-processed foods</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Fortification Strategies</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based approaches to scaling food fortification
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Mandatory fortification standards with regulatory enforcement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Public-private partnerships with food industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular monitoring and quality control testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Consumer education campaigns on fortified products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Subsidized premix supply for small producers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Complementary home fortification (micronutrient powders) for rural areas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Specialized Nutrition Products</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Targeted nutrition for vulnerable populations and specific conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🍼</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Infant Formulas</h4>
              <p className="text-sm text-gray-700 mb-2">
                For infants who cannot breastfeed: orphans, HIV-positive mothers (where replacement feeding feasible), maternal illness. Low-birth-weight formulas for preterm babies. Lactose-free formulas for intolerance.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>When breastfeeding not possible</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🩺</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>HIV/TB Nutrition Support</h4>
              <p className="text-sm text-gray-700 mb-2">
                Nutritional supplementation improving treatment outcomes, immune function. Lipid-based nutrient supplements (LNS), ready-to-use supplementary foods. Improves ART adherence, reduces opportunistic infections, enhances recovery.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Supports treatment success</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Medical Nutrition Therapy</h4>
              <p className="text-sm text-gray-700 mb-2">
                Specialized formulas for chronic kidney disease, liver disease, diabetes, cancer. High-protein supplements for wound healing. Immune-enhancing formulations for surgical patients. Oral nutrition supplements preventing hospital malnutrition.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Condition-specific formulations</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👵</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Elderly & Disabled Nutrition</h4>
              <p className="text-sm text-gray-700 mb-2">
                Easy-to-consume, nutrient-dense supplements for elderly with poor appetite or chewing difficulties. Thickened liquids for dysphagia. Texture-modified foods. Prevents malnutrition in vulnerable populations.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Maintains nutrition status</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Sustainable Nutrition Through Food Fortification</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement fortification programs and specialized nutrition solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Fortification Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Fortified Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
