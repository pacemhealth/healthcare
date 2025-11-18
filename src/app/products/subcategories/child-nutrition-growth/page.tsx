import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function ChildNutritionGrowthPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Child Nutrition & Growth Monitoring",
    "description": "Therapeutic foods, growth monitoring equipment, micronutrient supplements addressing Africa's childhood malnutrition through community-based screening, therapeutic feeding, and nutrition education",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'therapeutic-nutrition-products',
      name: 'Therapeutic Nutrition Products',
      description: 'Ready-to-use therapeutic food (RUTF), F-75/F-100 formulas, therapeutic milk, and specialized nutrition for treating severe acute malnutrition',
      icon: '🥜'
    },
    {
      id: 'growth-monitoring-equipment',
      name: 'Growth Monitoring Equipment',
      description: 'Baby scales, length boards, height boards, MUAC tapes, growth charts, and child development assessment tools for tracking growth',
      icon: '📏'
    },
    {
      id: 'micronutrient-supplementation',
      name: 'Micronutrient Supplementation',
      description: 'Vitamin A capsules, zinc supplements, iron drops, deworming tablets, and micronutrient powders for preventing deficiencies',
      icon: '💊'
    },
    {
      id: 'nutrition-education-tools',
      name: 'Nutrition Education Tools',
      description: 'Infant feeding counseling cards, recipe demonstrations, nutrition education materials, and behavior change communication resources',
      icon: '📚'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Child Nutrition & Growth Monitoring | RUTF, Micronutrients & Growth Charts | Pacem Health"
        description="Therapeutic foods, growth monitoring equipment, micronutrient supplements addressing Africa's childhood malnutrition. RUTF therapeutic feeding, vitamin A supplementation, growth monitoring systems, nutrition education ensuring healthy child development across African communities."
        keywords={[
          'child nutrition Africa',
          'RUTF Africa',
          'therapeutic feeding',
          'growth monitoring Africa',
          'micronutrient supplements',
          'vitamin A supplementation',
          'child malnutrition treatment',
          'MUAC screening'
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
            <Link to="/products/categories/maternal-child-health" className="hover:underline">Maternal & Child Health</Link>
            <span>/</span>
            <span>Child Nutrition & Growth Monitoring</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Maternal & Child Health</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Child Nutrition & Growth Monitoring
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Therapeutic foods, growth monitoring equipment, micronutrient supplements, and childhood nutrition programs. Comprehensive nutrition solutions addressing Africa's malnutrition crisis through community-based screening, therapeutic feeding for severely malnourished children, micronutrient supplementation, growth monitoring systems, and nutrition education—ensuring every child has the nutrition foundation needed for healthy development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete child nutrition solutions from treatment to prevention
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">The Child Malnutrition Crisis</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why child nutrition programs save lives and transform futures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl mb-2">Malnutrition Burden</h3>
              <p className="text-gray-700">
                58 million African children under-5 are stunted (chronically malnourished), 14 million wasted (acutely malnourished), 10 million severely wasted. Malnutrition underlies 45% of child deaths—weakening immunity, increasing infection severity, impairing recovery. Most preventable with proper nutrition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl mb-2">Lifelong Consequences</h3>
              <p className="text-gray-700">
                Malnutrition in first 1,000 days (conception to age 2) causes irreversible stunting, cognitive impairment, reduced school performance, lower adult earnings. Stunted children earn 20% less as adults, perpetuating poverty cycle. Early nutrition intervention prevents permanent damage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-xl mb-2">Micronutrient Deficiencies</h3>
              <p className="text-gray-700">
                Beyond protein-energy malnutrition, vitamin A deficiency affects 44% of African children (increasing measles deaths 50%), iron deficiency causes 60% childhood anemia (impairing development), zinc deficiency increases diarrhea and pneumonia. Targeted supplementation prevents deaths and disability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Nutrition Program Barriers</h3>
              <p className="text-gray-700 mb-4">
                Challenges to addressing child malnutrition at scale
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Late detection—most severely malnourished children not identified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited therapeutic feeding program coverage and supplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate community-based nutrition screening systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Micronutrient supplementation program gaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Poor infant and young child feeding practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Food insecurity and poverty limiting dietary diversity</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Nutrition Strategies</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based interventions preventing and treating malnutrition
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community-based screening using MUAC bands—mothers identify cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Outpatient therapeutic feeding with RUTF (ready-to-use therapeutic food)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Biannual vitamin A supplementation for all children 6-59 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Growth monitoring and promotion at every health contact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Infant and young child feeding counseling and support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Food fortification and micronutrient powder programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Community-Based Malnutrition Management</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated approach to child nutrition from screening to recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📏</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>MUAC Screening</h4>
              <p className="text-sm text-gray-700 mb-2">
                Mid-upper arm circumference &lt;11.5cm identifies severe acute malnutrition. Mothers trained to screen own children monthly using color-coded bands. Simple, accurate, enables early detection before complications.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Cost: $0.50 per MUAC band</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🥜</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>RUTF Treatment</h4>
              <p className="text-sm text-gray-700 mb-2">
                Ready-to-use therapeutic food—peanut-based paste with vitamins and minerals. Home-based treatment via weekly visits. 85-90% recovery rate. Revolutionized malnutrition treatment—no hospitalization needed.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>8 weeks treatment: $60</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Micronutrient Supplementation</h4>
              <p className="text-sm text-gray-700 mb-2">
                Vitamin A every 6 months reduces child mortality 24%. Zinc with diarrhea treatment reduces duration 25%. Deworming improves nutrition and development. Multiple micronutrient powders for home fortification.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Vitamin A: $0.02 per dose</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Growth Monitoring</h4>
              <p className="text-sm text-gray-700 mb-2">
                Monthly weight measurement plotted on growth chart. Identifies growth faltering before severe malnutrition. Triggers counseling, supplementation, feeding support. Prevention cheaper than treatment.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Early intervention prevents progression</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Every Child Deserves to Thrive</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement comprehensive child nutrition programs
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
                Request Nutrition Supplies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}