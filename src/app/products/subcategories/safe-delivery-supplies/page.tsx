import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function SafeDeliverySuppliesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Safe Delivery Supplies",
    "description": "Clean delivery kits, obstetric equipment, delivery supplies for safe childbirth across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'clean-delivery-kits',
      name: 'Clean Delivery Kits',
      description: 'Sterile delivery packs, cord clamps, surgical blades, gloves, plastic sheets, and essential supplies for safe, hygienic childbirth',
      icon: '📦'
    },
    {
      id: 'obstetric-emergency-equipment',
      name: 'Obstetric Emergency Equipment',
      description: 'Vacuum extractors, forceps, manual vacuum aspirators, postpartum hemorrhage kits, magnesium sulfate, and emergency obstetric care supplies',
      icon: '🚨'
    },
    {
      id: 'skilled-birth-attendance-tools',
      name: 'Skilled Birth Attendance Tools',
      description: 'Partographs, fetal dopplers, blood pressure monitors, delivery beds, examination lights, and monitoring equipment for labor management',
      icon: '👩‍⚕️'
    },
    {
      id: 'infection-prevention-delivery',
      name: 'Infection Prevention Supplies',
      description: 'Hand sanitizers, antiseptic solutions, sterile gloves, face masks, gowns, and infection control supplies for clean delivery practices',
      icon: '🧤'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Safe Delivery Supplies | Clean Delivery Kits | Pacem Health"
        description="Safe delivery supplies including clean delivery kits, obstetric equipment, childbirth supplies. Comprehensive safe delivery products for African maternal health programs."
        keywords={[
          'safe delivery supplies Africa',
          'clean delivery kits',
          'obstetric equipment',
          'childbirth supplies',
          'delivery equipment',
          'maternal health supplies',
          'safe childbirth',
          'delivery kits'
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
            <span>Safe Delivery Supplies</span>
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
              Safe Delivery Supplies
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Clean delivery kits, obstetric equipment, emergency birth supplies, and skilled birth attendance materials reducing maternal mortality. Comprehensive delivery solutions ensuring hygienic birth practices, management of labor complications, emergency obstetric care capacity, and infection prevention—transforming childbirth from the most dangerous day of a woman's life into a safe, supported experience.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete delivery care solutions from basic supplies to emergency equipment
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">The Childbirth Crisis</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why safe delivery supplies and skilled attendance save lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💔</div>
              <h3 className="text-xl mb-2">Maternal Deaths at Birth</h3>
              <p className="text-gray-700">
                Most maternal deaths occur during labor, delivery, or first 24 hours postpartum—from hemorrhage (27%), hypertension (14%), sepsis (11%), obstructed labor (9%). Clean delivery practices, skilled attendance, and emergency obstetric care prevent 80%+ of these deaths.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-xl mb-2">Home Birth Risks</h3>
              <p className="text-gray-700">
                60% of African births occur at home, often without skilled attendant or clean supplies. Home births have 2-3x higher maternal mortality than facility births. When complications arise—hemorrhage, obstructed labor, eclampsia—delay reaching emergency care proves fatal. Clean delivery kits reduce infection risk.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl mb-2">Emergency Obstetric Care</h3>
              <p className="text-gray-700">
                15% of pregnancies develop complications requiring emergency care—C-section, blood transfusion, assisted delivery. Most African facilities lack EmONC capacity. Equipping facilities with obstetric emergency supplies—vacuum extractor, MVA, IV fluids, uterotonics—prevents maternal deaths from treatable complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Barriers to Safe Delivery</h3>
              <p className="text-gray-700 mb-4">
                Obstacles preventing women from accessing skilled birth attendance
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Only 59% of African births have skilled birth attendant present</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited EmONC facility availability (only 1 per 500,000 people)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Stockouts of essential delivery supplies and medications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Geographic barriers—average 2+ hours to facility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Financial barriers to facility delivery and emergency care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate health worker training in EmONC</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Safe Delivery Strategies</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based interventions reducing maternal mortality
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Skilled birth attendance—nurse, midwife, or doctor at every birth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Clean delivery practices preventing puerperal sepsis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Active management of third stage of labor (AMTSL)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Emergency obstetric care for complications (EmONC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Referral systems and emergency transport (ambulances)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Maternity waiting homes for high-risk/remote pregnancies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Essential Delivery Interventions</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Critical supplies and practices for every delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🧤</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Clean Delivery (6 Cleans)</h4>
              <p className="text-sm text-gray-700 mb-2">
                Clean hands, clean surface, clean blade for cord, clean cord tie, nothing unclean on cord stump, clean cloth for baby. Prevents 50% of neonatal infections.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Cost: $5 per delivery kit</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💉</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>AMTSL</h4>
              <p className="text-sm text-gray-700 mb-2">
                Uterotonic within 1 minute of birth (oxytocin preferred), controlled cord traction, uterine massage. Reduces postpartum hemorrhage 60%, saves thousands of lives.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>PPH: Leading cause of maternal death</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔧</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Assisted Delivery</h4>
              <p className="text-sm text-gray-700 mb-2">
                Vacuum extraction or forceps for obstructed labor when C-section unavailable. Reduces need for referral, prevents prolonged labor complications, saves maternal and newborn lives.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>15% of deliveries need intervention</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🩸</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Hemorrhage Management</h4>
              <p className="text-sm text-gray-700 mb-2">
                IV fluids, additional uterotonics, uterine balloon tamponade, blood transfusion capacity. First-line response to PPH preventing progression to shock and death.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>PPH: 27% of maternal deaths</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">No Woman Should Die Giving Life</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to equip facilities with life-saving delivery supplies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                EmONC Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Delivery Supplies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}