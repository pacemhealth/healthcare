import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function PostnatalNewbornCarePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Postnatal & Newborn Care",
    "description": "Postpartum care, neonatal resuscitation equipment, newborn care supplies for maternal and child health across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'postpartum-maternal-care',
      name: 'Postpartum Maternal Care',
      description: 'Postnatal assessment tools, family planning supplies, iron tablets, maternal health monitoring equipment, and postpartum care supplies',
      icon: '🤱'
    },
    {
      id: 'neonatal-resuscitation-equipment',
      name: 'Neonatal Resuscitation Equipment',
      description: 'Bag-valve-masks, suction devices, oxygen supplies, thermal care equipment, and newborn resuscitation kits for immediate newborn care',
      icon: '👶'
    },
    {
      id: 'newborn-screening-assessment',
      name: 'Newborn Screening & Assessment',
      description: 'Baby scales, thermometers, APGAR scoring tools, newborn examination equipment, and screening supplies for early detection',
      icon: '🩺'
    },
    {
      id: 'mother-baby-care-supplies',
      name: 'Mother-Baby Care Supplies',
      description: 'Breastfeeding support products, umbilical cord care supplies, baby clothing, blankets, and essential mother-baby care items',
      icon: '🍼'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Postnatal & Newborn Care | Neonatal Supplies | Pacem Health"
        description="Postnatal and newborn care including postpartum care, neonatal resuscitation, newborn care supplies. Comprehensive maternal and newborn health products for African healthcare."
        keywords={[
          'postnatal care Africa',
          'newborn care supplies',
          'neonatal resuscitation',
          'postpartum care',
          'newborn health',
          'maternal postnatal care',
          'neonatal equipment',
          'newborn care'
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
            <Link to="/products/division3" className="hover:underline">Community Health Solutions</Link>
            <span>/</span>
            <Link to="/products/categories/maternal-child-health" className="hover:underline">Maternal & Child Health</Link>
            <span>/</span>
            <span>Postnatal & Newborn Care</span>
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
              Postnatal & Newborn Care
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Postpartum care supplies, neonatal resuscitation equipment, newborn screening tools, and mother-baby care products. Comprehensive postnatal solutions addressing the most dangerous period for mothers and babies—the first hours, days, and weeks after birth—through systematic postnatal visits, immediate newborn care, thermal protection, breastfeeding support, and early detection of complications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete postnatal and newborn care solutions
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">The Critical First Days</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why postnatal and newborn care saves the most lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-xl mb-2">The First 24 Hours</h3>
              <p className="text-gray-700">
                50% of maternal deaths occur within 24 hours of delivery, mostly from postpartum hemorrhage. 40% of neonatal deaths occur on day of birth—from birth asphyxia, prematurity, infections. Immediate postnatal care in first hours detects and treats complications when intervention most effective.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👶</div>
              <h3 className="text-xl mb-2">Neonatal Deaths</h3>
              <p className="text-gray-700">
                2.4 million newborns die annually in first 28 days, 75% in first week. Leading causes: birth asphyxia (23%), prematurity (28%), sepsis (26%)—all preventable with proper newborn care. Immediate drying, warmth, early breastfeeding, clean cord care, resuscitation if needed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="text-xl mb-2">Postnatal Care Gap</h3>
              <p className="text-gray-700">
                Only 50% of African mothers and babies receive postnatal care within 2 days of birth despite highest risk period. Most deliver in facility then leave within hours, miss critical postnatal screening. Home visits on days 1, 3, 7 detect danger signs, support breastfeeding, prevent deaths.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Postnatal Care Challenges</h3>
              <p className="text-gray-700 mb-4">
                Barriers to quality postnatal and newborn care
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Early discharge from facilities (within 6-12 hours of birth)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited postnatal home visit programs and CHW capacity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate newborn resuscitation equipment and training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Poor recognition of maternal and newborn danger signs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Cultural practices harmful to newborns (prelacteal feeding, delayed breastfeeding)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited availability of essential newborn care supplies</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Evidence-Based Interventions</h3>
              <p className="text-gray-700 mb-4">
                Proven approaches to postnatal and newborn care
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Immediate newborn care—drying, warmth, early breastfeeding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Neonatal resuscitation (bag-mask ventilation) if not breathing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Clean cord care (dry cord care or chlorhexidine in high-risk settings)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Postnatal visits on days 1, 3, 7 for mother and baby</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Kangaroo mother care for preterm/low birth weight babies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Exclusive breastfeeding promotion and support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Essential Newborn Care</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Simple, life-saving interventions in the first minutes and hours
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👶</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Immediate Care (Golden Minute)</h4>
              <p className="text-sm text-gray-700 mb-2">
                Dry baby thoroughly, assess breathing, keep warm (skin-to-skin or radiant warmer), clamp/cut cord with sterile equipment. If not breathing: clear airway, stimulate, begin bag-mask ventilation.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Prevents birth asphyxia deaths</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔥</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Thermal Protection</h4>
              <p className="text-sm text-gray-700 mb-2">
                Immediate drying, skin-to-skin contact, covering head, warm room. Hypothermia increases infection risk 5x, mortality 3x. Kangaroo mother care for preterm babies reduces mortality 40%.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Simple, zero-cost intervention</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🍼</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Early Breastfeeding</h4>
              <p className="text-sm text-gray-700 mb-2">
                Initiate breastfeeding within 1 hour of birth, support exclusive breastfeeding. Colostrum provides immunity, early breastfeeding reduces newborn mortality 22%, establishes milk production.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Prevents infections, malnutrition</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔗</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Clean Cord Care</h4>
              <p className="text-sm text-gray-700 mb-2">
                Clean blade for cutting, nothing applied to cord stump (dry cord care) or chlorhexidine if high infection risk. Prevents cord infections causing 15% of neonatal deaths.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Chlorhexidine reduces sepsis 23%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Every Newborn Deserves the Best Start</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to strengthen postnatal and newborn care programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Postnatal Care Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Newborn Care Supplies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}