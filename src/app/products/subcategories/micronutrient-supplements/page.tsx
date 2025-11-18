import { Link, useNavigate } from 'react-router-dom';

export default function MicronutrientSupplementsPage() {
  const navigate = useNavigate();

  const productGroups = [
    {
      id: 'vitamin-a-supplementation',
      name: 'Vitamin A Supplementation',
      description: 'High-dose vitamin A capsules, mass supplementation campaign supplies, and biannual dosing programs preventing blindness and reducing child mortality',
      icon: '💊'
    },
    {
      id: 'iron-folic-acid-supplements',
      name: 'Iron & Folic Acid Supplements',
      description: 'Prenatal iron-folic acid tablets, anemia treatment protocols, and universal supplementation programs for pregnant women and adolescent girls',
      icon: '🩸'
    },
    {
      id: 'zinc-therapeutic-supplements',
      name: 'Zinc & Therapeutic Supplements',
      description: 'Zinc tablets for diarrhea treatment, therapeutic zinc supplementation, and combination micronutrient products for deficiency prevention',
      icon: '⚡'
    },
    {
      id: 'multiple-micronutrient-powders',
      name: 'Multiple Micronutrient Powders & Products',
      description: 'Home fortification sachets (sprinkles), lipid-based nutrient supplements (LNS), and comprehensive micronutrient formulations for diverse populations',
      icon: '🌟'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <section className="bg-[#4B2991] text-white py-3">
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
            <span>Micronutrient Supplements</span>
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
              Micronutrient Supplements
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Vitamin A, iron/folic acid, zinc, and multiple micronutrient supplements addressing deficiencies across populations. Life-saving supplementation programs preventing blindness, anemia, and childhood deaths through targeted vitamin and mineral delivery—from biannual vitamin A campaigns reaching millions of children to prenatal iron-folic acid preventing maternal deaths and birth defects to zinc treatment cutting diarrhea deaths in half.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete micronutrient supplementation solutions for all populations
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Hidden Hunger: Micronutrient Deficiencies</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why vitamin and mineral supplementation saves lives and prevents disability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👁️</div>
              <h3 className="text-xl mb-2">Vitamin A Deficiency</h3>
              <p className="text-gray-700">
                44% of African children under-5 vitamin A deficient. Increases measles deaths 50%, diarrhea deaths 30%, weakens immunity. Causes 250,000-500,000 children to go blind annually worldwide. Biannual vitamin A supplementation reduces child mortality 24%—one of most cost-effective health interventions at $0.02 per dose.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🩸</div>
              <h3 className="text-xl mb-2">Iron Deficiency Anemia</h3>
              <p className="text-gray-700">
                60% of African pregnant women anemic, mostly from iron deficiency. Causes 115,000 maternal deaths annually. Increases hemorrhage risk 3x, infection risk 2x. Impairs fetal brain development, causes low birth weight, preterm delivery. Universal prenatal iron-folic acid (180 tablets) prevents maternal anemia, reduces maternal deaths 20%, prevents neural tube defects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💧</div>
              <h3 className="text-xl mb-2">Zinc Deficiency</h3>
              <p className="text-gray-700">
                Zinc deficiency affects 17% of world population, higher in Africa. Increases diarrhea incidence and severity, pneumonia risk, growth stunting. Zinc supplementation with diarrhea treatment reduces diarrhea duration 25%, severity 30%, subsequent episodes 15%. Zinc plus ORS prevents 300,000 child deaths annually. Cost: $0.25 per 10-day treatment course.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Supplementation Program Challenges</h3>
              <p className="text-gray-700 mb-4">
                Barriers to effective micronutrient supplementation at scale
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Supply chain challenges delivering supplements to remote areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Low coverage—many at-risk populations not reached by campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Poor adherence to daily supplementation (iron-folic acid)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited community awareness of micronutrient importance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Stockouts of supplements at health facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate monitoring and data systems tracking coverage</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Supplementation Strategies</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based approaches to preventing micronutrient deficiencies
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Mass vitamin A campaigns integrated with immunization (Child Health Days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Universal prenatal iron-folic acid through antenatal care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Zinc with ORS as standard diarrhea treatment protocol</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Multiple micronutrient powders for home fortification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community distribution through health workers and volunteers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Nutrition education on dietary diversity and micronutrient sources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Priority Supplementation Programs</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Most cost-effective micronutrient interventions for Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Vitamin A Campaigns</h4>
              <p className="text-sm text-gray-700 mb-2">
                Biannual mass distribution targeting all children 6-59 months. Integrated with immunization, deworming. Achieves 80-95% coverage in 2-3 days. Reduces child mortality 24%.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Cost: $1.20/child/year</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🤰</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Prenatal Iron-Folic Acid</h4>
              <p className="text-sm text-gray-700 mb-2">
                180 tablets during pregnancy (1 daily). Prevents maternal anemia, reduces maternal mortality 20%, prevents neural tube defects 72%. Delivered through antenatal care.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Cost: $3/pregnancy</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Zinc + ORS for Diarrhea</h4>
              <p className="text-sm text-gray-700 mb-2">
                10-day zinc course with oral rehydration solution for all diarrhea episodes. Reduces diarrhea duration 25%, prevents 300,000 child deaths annually. Standard protocol worldwide.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Cost: $0.50/treatment</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🌟</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Micronutrient Powders</h4>
              <p className="text-sm text-gray-700 mb-2">
                Single-dose sachets (15 vitamins/minerals) mixed into complementary foods at home. Point-of-use fortification for children 6-23 months. Prevents anemia, supports growth.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Cost: $6/child/year (60 sachets)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Combat Hidden Hunger With Targeted Supplementation</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement comprehensive micronutrient supplementation programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Supplementation Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Micronutrient Supplies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
