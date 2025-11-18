import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function MaternalChildHealthPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Maternal & Child Health Products",
    "description": "Prenatal care, safe delivery supplies, newborn care equipment, and child nutrition products for African maternal and child health programs",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'prenatal-care-products',
      name: 'Prenatal Care Products',
      description: 'Antenatal screening supplies, prenatal vitamins, ultrasound equipment, maternal health monitoring tools ensuring healthy pregnancies',
      productCount: '4 product areas'
    },
    {
      id: 'safe-delivery-supplies',
      name: 'Safe Delivery Supplies',
      description: 'Clean delivery kits, obstetric equipment, emergency birth supplies, and skilled birth attendance materials reducing maternal mortality',
      productCount: '4 product areas'
    },
    {
      id: 'postnatal-newborn-care',
      name: 'Postnatal & Newborn Care',
      description: 'Postpartum care supplies, neonatal resuscitation equipment, newborn screening tools, and mother-baby care products',
      productCount: '4 product areas'
    },
    {
      id: 'child-nutrition-growth',
      name: 'Child Nutrition & Growth Monitoring',
      description: 'Therapeutic foods, growth monitoring equipment, micronutrient supplements, and childhood nutrition programs',
      productCount: '4 product areas'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Maternal & Child Health Products | Safe Delivery & Newborn Care Africa | Pacem Health"
        description="Comprehensive maternal and child health products for Africa. Prenatal care, safe delivery supplies, newborn care equipment, and child nutrition. Reduce maternal and infant mortality with quality MCH products."
        keywords={[
          'maternal child health Africa',
          'safe delivery supplies',
          'prenatal care products',
          'newborn care equipment',
          'child nutrition',
          'maternal health Africa',
          'MCH products Africa'
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
            <span>Maternal & Child Health</span>
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
              Supporting Mothers & Children Through Every Stage
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive care from pregnancy through childhood—prenatal support, safe delivery supplies, and nutrition programs that give every child the best start in life. Integrated maternal and child health solutions addressing Africa's unacceptably high maternal and infant mortality rates through quality antenatal care, skilled birth attendance, emergency obstetric services, postnatal support, and evidence-based childhood nutrition programs ensuring mothers survive childbirth and children thrive through critical early years.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Care Stage</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete continuum of maternal and child health solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">The Maternal & Child Health Crisis in Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the urgent need for comprehensive MCH programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🤰</div>
              <h3 className="text-xl mb-2">Maternal Mortality</h3>
              <p className="text-gray-700">
                Sub-Saharan Africa accounts for 66% of global maternal deaths despite having only 29% of world births. Maternal mortality ratio averages 542 deaths per 100,000 live births—100x higher than developed countries. Most deaths preventable with quality prenatal care, skilled birth attendance, and emergency obstetric services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👶</div>
              <h3 className="text-xl mb-2">Under-Five Mortality</h3>
              <p className="text-gray-700">
                African children are 15x more likely to die before age 5 than children in high-income countries. Neonatal deaths (first 28 days) account for 43% of under-five mortality—mostly from preventable causes: birth asphyxia, prematurity, infections. Simple interventions like skilled birth attendance and immediate newborn care save thousands of lives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🍼</div>
              <h3 className="text-xl mb-2">Child Malnutrition</h3>
              <p className="text-gray-700">
                58 million African children under-5 are stunted (chronically malnourished), 14 million are wasted (acutely malnourished). Malnutrition underlies 45% of child deaths, impairs cognitive development, and perpetuates poverty. Therapeutic feeding programs, micronutrient supplementation, and nutrition education transform outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Barriers to Quality MCH Care</h3>
              <p className="text-gray-700 mb-4">
                Multiple obstacles prevent African mothers and children from accessing life-saving care.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited access to skilled birth attendants (only 59% of births)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Lack of emergency obstetric and newborn care (EmONC) facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate antenatal and postnatal care attendance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Stockouts of essential medicines and supplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Geographic barriers—average 2+ hours to nearest facility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Financial barriers and high out-of-pocket costs</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Evidence-Based MCH Interventions</h3>
              <p className="text-gray-700 mb-4">
                Proven strategies that dramatically reduce maternal and child deaths.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Focused antenatal care with risk screening and supplements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Skilled birth attendance with clean delivery practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Emergency obstetric care for complications (C-section, transfusion)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Immediate newborn care (drying, warmth, breastfeeding)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Postnatal home visits in first week of life</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community-based malnutrition screening and treatment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">The Continuum of MCH Care</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated services throughout pregnancy, birth, and early childhood
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🤰</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Pregnancy (9 Months)</h4>
              <p className="text-sm text-gray-700 mb-3">Antenatal care monitoring maternal and fetal health</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• 4+ ANC visits</li>
                <li>• Blood pressure monitoring</li>
                <li>• Iron/folic acid supplements</li>
                <li>• Ultrasound screening</li>
                <li>• HIV/syphilis testing</li>
                <li>• Malaria prevention (IPTp)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👶</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Birth (24 Hours)</h4>
              <p className="text-sm text-gray-700 mb-3">Skilled attendance and emergency care if needed</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Clean delivery practices</li>
                <li>• Active management 3rd stage</li>
                <li>• Neonatal resuscitation</li>
                <li>• EmONC if complications</li>
                <li>• Immediate breastfeeding</li>
                <li>• Cord care & warmth</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🍼</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Postnatal (6 Weeks)</h4>
              <p className="text-sm text-gray-700 mb-3">Mother and baby care after delivery</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Home visits (days 1, 3, 7)</li>
                <li>• Maternal health check</li>
                <li>• Newborn health check</li>
                <li>• Breastfeeding support</li>
                <li>• Family planning counseling</li>
                <li>• Danger sign education</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👦</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Childhood (5 Years)</h4>
              <p className="text-sm text-gray-700 mb-3">Growth monitoring and preventive care</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Immunizations (EPI schedule)</li>
                <li>• Growth monitoring</li>
                <li>• Vitamin A supplementation</li>
                <li>• Deworming</li>
                <li>• Malnutrition screening/treatment</li>
                <li>• Developmental monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Give Every Mother and Child a Fighting Chance</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement comprehensive maternal and child health programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                MCH Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Explore MCH Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
