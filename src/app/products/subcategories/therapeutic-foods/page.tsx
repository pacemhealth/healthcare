import { Link, useNavigate } from 'react-router-dom';

export default function TherapeuticFoodsPage() {
  const navigate = useNavigate();

  const productGroups = [
    {
      id: 'ready-to-use-therapeutic-food',
      name: 'Ready-to-Use Therapeutic Food (RUTF)',
      description: 'Peanut-based pastes, lipid nutrient supplements, ready-to-use formulations for outpatient treatment of severe acute malnutrition',
      icon: '🥜'
    },
    {
      id: 'supplementary-feeding-products',
      name: 'Supplementary Feeding Products',
      description: 'Ready-to-use supplementary foods (RUSF), corn-soy blends, fortified blended foods for moderate acute malnutrition and prevention',
      icon: '🌾'
    },
    {
      id: 'specialized-therapeutic-milk',
      name: 'Specialized Therapeutic Milk & Formulas',
      description: 'F-75 and F-100 therapeutic milk formulas, rehydration solutions, specialized products for inpatient SAM treatment with complications',
      icon: '🍼'
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
            <span>Therapeutic Foods</span>
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
              Therapeutic Foods
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Ready-to-use therapeutic foods (RUTF), supplementary foods, and specialized nutrition for severe acute malnutrition treatment. Life-saving therapeutic nutrition products enabling community-based management of malnutrition—transforming treatment from hospital-based feeding programs requiring months of admission to home-based therapy with weekly follow-up, achieving 85-90% recovery rates while reaching 10x more children at fraction of the cost.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete therapeutic nutrition solutions from severe to moderate malnutrition
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">The Malnutrition Emergency</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why therapeutic foods revolutionized malnutrition treatment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl mb-2">Acute Malnutrition Crisis</h3>
              <p className="text-gray-700">
                14 million African children suffer severe acute malnutrition (SAM), 30 million have moderate acute malnutrition (MAM). Without treatment, SAM carries 30-50% mortality. Malnutrition causes 45% of child deaths—1 million annually. Most deaths preventable with timely therapeutic feeding.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-xl mb-2">Treatment Revolution</h3>
              <p className="text-gray-700">
                Traditional hospital-based therapeutic feeding required 6-8 week admissions, specialized staff, kitchen facilities—treating only fraction of cases. RUTF enables home-based treatment with weekly clinic visits. Same outcomes (85-90% recovery), 10x more children reached, 75% lower cost per child treated.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-xl mb-2">Community-Based Management</h3>
              <p className="text-gray-700">
                Community-based Management of Acute Malnutrition (CMAM) using RUTF transformed malnutrition response. Mothers trained to use MUAC bands screen own children. Community health workers provide weekly RUTF packets, monitor progress. Integrated into health systems, sustainable at scale across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Malnutrition Treatment Challenges</h3>
              <p className="text-gray-700 mb-4">
                Barriers to reaching malnourished children with life-saving treatment
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Late presentation—most children reach health facility when severely ill</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited inpatient therapeutic feeding program capacity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Geographic barriers to accessing treatment facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>RUTF supply chain challenges and stockouts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate community screening and case-finding systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited health worker training in SAM/MAM management</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Treatment Strategies</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based approaches to managing acute malnutrition
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community screening using MUAC (mid-upper arm circumference)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Outpatient therapeutic program (OTP) with weekly RUTF distribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Inpatient care for SAM with medical complications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Supplementary feeding programs (SFP) for MAM using RUSF</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Integration with routine child health services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Nutrition education and infant feeding counseling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">CMAM Protocol: Outpatient Treatment</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Standard protocol for treating SAM without medical complications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📏</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Week 1: Admission</h4>
              <p className="text-sm text-gray-700 mb-3">
                MUAC &lt;11.5cm confirms SAM. Appetite test with RUTF. Medical check for complications (edema, fever, diarrhea). If passing appetite test and no complications, admit to OTP.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Given: 2 RUTF packets/day</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Weeks 2-6: Treatment</h4>
              <p className="text-sm text-gray-700 mb-3">
                Weekly clinic visits. Weight measured, MUAC checked. Mother receives week supply of RUTF (14 packets). Medical screening for illness. Nutrition counseling. Breastfeeding support.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>RUTF dose: 150-220 kcal/kg/day</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Weeks 7-8: Recovery</h4>
              <p className="text-sm text-gray-700 mb-3">
                Child gains 5-10g/kg/day. MUAC increases above 11.5cm threshold. Energy level improves. Appetite normalizes. Continues RUTF until MUAC &gt;12.5cm for 2 consecutive visits.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Target: 15% weight gain</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Discharge & Follow-up</h4>
              <p className="text-sm text-gray-700 mb-3">
                Discharge when MUAC &gt;12.5cm and no edema for 2 weeks. Follow-up visits at 1, 3, 6 months. Family receives nutrition counseling, infant feeding education. Referral to food security programs if needed.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Recovery rate: 85-90%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Save Malnourished Children With Proven Treatment</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement community-based malnutrition treatment programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Malnutrition Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request RUTF Supply Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
