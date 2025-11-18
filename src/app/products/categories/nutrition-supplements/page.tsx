import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function NutritionSupplementsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Nutrition & Supplements",
    "description": "Therapeutic foods, micronutrient supplements, and fortified foods for malnutrition treatment and nutritional support across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'therapeutic-foods',
      name: 'Therapeutic Foods',
      description: 'Ready-to-use therapeutic foods (RUTF), supplementary foods, specialized nutrition for severe acute malnutrition treatment',
      productCount: '3 product areas'
    },
    {
      id: 'micronutrient-supplements',
      name: 'Micronutrient Supplements',
      description: 'Vitamin A, iron/folic acid, zinc, multiple micronutrient supplements addressing deficiencies across populations',
      productCount: '4 product areas'
    },
    {
      id: 'fortified-foods',
      name: 'Fortified Foods & Special Dietary Products',
      description: 'Fortified staple foods, specialized infant formulas, dietary supplements for specific conditions and populations',
      productCount: '3 product areas'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Nutrition & Supplements | Therapeutic Foods & Micronutrients Africa | Pacem Health"
        description="Nutrition products and supplements for African communities. Ready-to-use therapeutic foods (RUTF), micronutrient supplements, fortified foods, and specialized nutrition for malnutrition treatment. Combat nutritional deficiencies."
        keywords={[
          'therapeutic foods Africa',
          'RUTF malnutrition',
          'micronutrient supplements',
          'fortified foods Africa',
          'nutrition supplements',
          'malnutrition treatment',
          'vitamin supplements Africa'
        ]}
        structuredData={productSchema}
      />
      <section className="bg-[#4B2991] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/division3" className="hover:underline">Community Health Solutions</Link>
            <span>/</span>
            <span>Nutrition & Supplements</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Community Health Solutions</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Community Nutrition & Wellness Programs
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Therapeutic foods for malnutrition, vitamin supplementation programs, and specialized nutrition solutions that strengthen entire communities. Comprehensive nutrition interventions addressing Africa's dual burden of undernutrition and emerging diet-related chronic diseases through evidence-based supplementation, therapeutic feeding programs, food fortification, and community nutrition education—transforming malnourished populations into thriving communities where children grow strong, mothers stay healthy, and families break free from the nutrition-poverty cycle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Solution Type</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of nutrition and supplementation solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => navigate(`/products/subcategories/${subcategory.id}`)}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 text-left group"
              >
                <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                  {subcategory.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{subcategory.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>
                    {subcategory.productCount}
                  </span>
                  <span className="text-[#4B2991] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Africa's Nutrition Challenge</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the scale and complexity of malnutrition across the continent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📉</div>
              <h3 className="text-xl mb-2">Chronic Undernutrition</h3>
              <p className="text-gray-700">
                58 million African children under-5 are stunted—36% prevalence. Stunting reflects chronic inadequate nutrition, causing irreversible physical and cognitive impairment. Stunted children perform poorly in school, earn less as adults, and have stunted children themselves—perpetuating intergenerational poverty cycle.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="text-xl mb-2">Acute Malnutrition</h3>
              <p className="text-gray-700">
                14 million African children suffer severe acute malnutrition (SAM)—wasting, visible ribs, severely weakened immune systems. Without treatment, SAM has 30% mortality rate. With therapeutic feeding (RUTF), 90%+ recovery is achievable. Early identification and community-based treatment save lives at scale.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-xl mb-2">Micronutrient Deficiencies</h3>
              <p className="text-gray-700">
                "Hidden hunger"—vitamin A deficiency (affecting 44% of children), iron deficiency (anemia in 60% of pregnant women), iodine deficiency, zinc deficiency. Micronutrient deficiencies impair growth, weaken immunity, reduce cognitive function. Supplementation and fortification are cost-effective solutions with dramatic impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Evidence-Based Nutrition Interventions</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Proven strategies that transform nutritional status at community level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🥜</div>
              <h3 className="text-lg mb-2">Therapeutic Feeding</h3>
              <p className="text-sm text-gray-700 mb-3">
                Ready-to-use therapeutic food (RUTF) revolutionized SAM treatment. Peanut-based paste requires no preparation, stays fresh without refrigeration, treats children at home rather than hospital.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                <p style={{ fontWeight: 600 }}>Impact:</p>
                <p>90%+ recovery rate, 50% cost reduction vs. hospital, 10x scale increase</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-lg mb-2">Micronutrient Supplementation</h3>
              <p className="text-sm text-gray-700 mb-3">
                Vitamin A every 6 months reduces child mortality 23%. Iron/folic acid for pregnant women prevents maternal anemia and low birth weight. Zinc for diarrhea reduces severity and duration.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                <p style={{ fontWeight: 600 }}>Impact:</p>
                <p>23% mortality reduction, 50% anemia reduction, millions of lives saved annually</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🌾</div>
              <h3 className="text-lg mb-2">Food Fortification</h3>
              <p className="text-sm text-gray-700 mb-3">
                Adding micronutrients to staple foods (flour, salt, oil) reaches entire populations. Iodized salt eliminates iodine deficiency. Fortified flour provides iron, folic acid, B-vitamins at population scale.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                <p style={{ fontWeight: 600 }}>Impact:</p>
                <p>Sustainable, cost-effective (&lt;$0.30/person/year), reaches 80%+ of population</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">👩‍🏫</div>
              <h3 className="text-lg mb-2">Nutrition Education</h3>
              <p className="text-sm text-gray-700 mb-3">
                Teaching mothers optimal infant feeding, dietary diversity, hygiene practices. Behavior change communication on exclusive breastfeeding (0-6 months), timely complementary feeding, food preparation.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                <p style={{ fontWeight: 600 }}>Impact:</p>
                <p>Sustainable behavior change, improved practices in 60-70% of households</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Strengthen Communities Through Better Nutrition</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement comprehensive nutrition and supplementation programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Nutrition Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Explore Nutrition Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
