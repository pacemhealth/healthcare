import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function MaternalChildHealthConsumablesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Maternal & Child Health Consumables",
    "description": "Delivery kits, newborn care supplies, pediatric equipment for maternal and child healthcare across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'delivery-kits',
      name: 'Delivery Kits & Birth Supplies',
      products: ['Sterile delivery kits (disposable)', 'Obstetric drapes & gowns', 'Cord clamps & scissors', 'Bulb suction (mucus extractors)', 'Placenta bowls & kidney dishes'],
      icon: '🤰'
    },
    {
      id: 'umbilical-cord-care',
      name: 'Umbilical Cord Clamps & Care',
      products: ['Disposable cord clamps (plastic)', 'Cord cutting scissors (sterile)', 'Chlorhexidine gel (cord care)', 'Umbilical cord ties', 'Cord stump dressings'],
      icon: '🔗'
    },
    {
      id: 'neonatal-resuscitation',
      name: 'Neonatal Resuscitation Equipment',
      products: ['Neonatal Ambu bags (240ml)', 'Neonatal face masks (sizes 0, 1)', 'Suction catheters (6Fr, 8Fr)', 'Laryngoscope blades (Miller 0, 1)', 'Endotracheal tubes (2.5-4.0mm)'],
      icon: '👶'
    },
    {
      id: 'infant-feeding',
      name: 'Infant Feeding Supplies',
      products: ['Nasogastric tubes (5Fr, 8Fr)', 'Feeding syringes (oral, catheter-tip)', 'Breast pumps (manual, electric)', 'Breast milk storage bags', 'Cup feeding cups (paladai)'],
      icon: '🍼'
    },
    {
      id: 'newborn-care',
      name: 'Newborn Care Consumables',
      products: ['Newborn hats (thermal protection)', 'Umbilical catheters (arterial, venous)', 'Neonatal IV cannulas (24G, 26G)', 'Phototherapy eye shields', 'Heel lancets (newborn screening)'],
      icon: '👼'
    },
    {
      id: 'maternal-hemorrhage',
      name: 'Maternal Hemorrhage Prevention',
      products: ['Oxytocin injection (10 IU/ml)', 'Misoprostol tablets (prevention of PPH)', 'Uterine balloon tamponade (Bakri, ESM-UBT)', 'IV fluids (Ringer\'s lactate, normal saline)', 'Blood collection bags (for transfusion)'],
      icon: '💉'
    },
    {
      id: 'family-planning',
      name: 'Family Planning Consumables',
      products: ['Contraceptive implants (Jadelle, Nexplanon)', 'IUDs (copper T380A)', 'Injectable contraceptives (Depo-Provera)', 'Condoms (male, female)', 'Emergency contraceptive pills'],
      icon: '💊'
    },
    {
      id: 'safe-abortion-care',
      name: 'Safe Abortion Care (PAC) Supplies',
      products: ['Manual vacuum aspiration (MVA) kits', 'Misoprostol tablets (medical abortion)', 'Cervical dilators (Hegar, Pratt)', 'Uterine curettes (sharp, blunt)', 'Post-abortion care supplies'],
      icon: '🏥'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Maternal & Child Health Consumables | MCH Supplies | Pacem Health"
        description="Maternal and child health consumables including delivery kits, newborn care supplies, pediatric equipment. Comprehensive MCH supplies for African healthcare facilities."
        keywords={[
          'maternal health supplies Africa',
          'child health consumables',
          'delivery kits',
          'newborn care supplies',
          'pediatric equipment',
          'MCH supplies',
          'maternal health products',
          'child healthcare supplies'
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
            <Link to="/products/categories/medical-consumables" className="hover:underline">
              Medical Consumables
            </Link>
            <span>/</span>
            <span>Maternal & Child Health Consumables</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Maternal & Child Health Consumables
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive range of delivery kits, umbilical cord clamps, neonatal resuscitation equipment, and maternal health supplies designed to reduce maternal and neonatal mortality across Africa. From preventing postpartum hemorrhage to ensuring every newborn breathes at birth, our maternal-child health consumables address the continent's persistent challenges of high maternal mortality ratios and preventable newborn deaths.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of maternal and child health consumables</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-4 group-hover:text-[#4B2991] transition-colors">
                  {group.name}
                </h3>
                <div className="space-y-2">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-2 bg-[#4B2991] text-white rounded-lg hover:bg-[#3A1F70] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/medical-consumables')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Medical Consumables
            </button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Every Mother, Every Newborn</h3>
              <p className="text-gray-700 mb-4">
                Sub-Saharan Africa accounts for 66% of global maternal deaths and 43% of newborn deaths despite having only 13% of the world's population. Most of these deaths are preventable with access to essential maternal-child health consumables and skilled birth attendance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterile delivery kits reduce infection risk during childbirth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Chlorhexidine cord care reduces neonatal sepsis deaths by 23%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Neonatal resuscitation equipment saves babies who don't breathe at birth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Oxytocin and misoprostol prevent postpartum hemorrhage (leading cause of maternal death)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality & Safety Standards</h3>
              <p className="text-gray-700 mb-4">
                All maternal-child health products meet WHO prequalification standards and international safety requirements for sterility and effectiveness.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterile delivery kits: WHO-approved contents for clean delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Uterotonic drugs (oxytocin): WHO prequalified, cold chain stable formulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Neonatal resuscitation: HBB (Helping Babies Breathe) protocol compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Contraceptive implants: Long-acting, reversible, WHO-approved devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Products Matter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Critical for African Healthcare</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Maternal-child health consumables address the leading causes of preventable deaths
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💔</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Maternal Mortality Crisis</h4>
              <p className="text-sm text-gray-700">
                Africa has the world's highest maternal mortality ratio: 542 deaths per 100,000 live births (vs. 12 in high-income countries). The top 3 killers—postpartum hemorrhage (25%), sepsis (15%), and eclampsia (12%)—are largely preventable with access to uterotonics (oxytocin, misoprostol), sterile delivery supplies, and emergency obstetric care. Stockouts of these life-saving consumables lead to unnecessary maternal deaths.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">👶</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Newborn Survival (First 28 Days)</h4>
              <p className="text-sm text-gray-700">
                Africa accounts for 43% of global neonatal deaths—1 million babies die in their first month of life annually. Leading causes: birth asphyxia (failure to breathe at birth), prematurity, and infections. Neonatal resuscitation equipment (Ambu bags, suction), chlorhexidine cord care, and kangaroo mother care supplies dramatically reduce these preventable deaths. Yet many facilities lack basic newborn care supplies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">👩‍👧</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Family Planning & Safe Abortion</h4>
              <p className="text-sm text-gray-700">
                Unmet need for family planning in Africa: 24% of women want to avoid pregnancy but lack access to contraception. This leads to unintended pregnancies, unsafe abortions (14% of maternal deaths), and short birth intervals (increases maternal/child mortality). Long-acting contraceptives (implants, IUDs) and safe abortion care supplies (MVA kits, misoprostol) prevent deaths while empowering reproductive choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Maternal-Child Health Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Maternal-Child Health Challenges in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Systemic barriers prevent mothers and newborns from accessing life-saving care
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Access & Facility Gaps</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Home Births:</strong> 60% of births in sub-Saharan Africa occur at home without skilled attendants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Distance Barriers:</strong> Rural women travel hours to reach delivery facilities (many give birth en route)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Facility Readiness:</strong> Only 20-40% of facilities have all EmONC (emergency obstetric/newborn care) supplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Referral Delays:</strong> Complications arise at home/health posts, delays in reaching higher-level care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Cost Barriers:</strong> Out-of-pocket delivery costs catastrophic for poor families (avoid facility births)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Supply Chain & Skills Gaps</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Oxytocin Stockouts:</strong> 40-60% of facilities lack oxytocin (prevents postpartum hemorrhage)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Cold Chain Failures:</strong> Oxytocin degrades in heat (most African facilities lack refrigeration)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Resuscitation Skills:</strong> Many birth attendants lack neonatal resuscitation training (babies die preventably)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Equipment Shortages:</strong> No Ambu bags, suction, or resuscitation equipment at many delivery sites</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Contraceptive Stockouts:</strong> Family planning supplies unavailable → unmet need, unintended pregnancies</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Solutions for Reducing Maternal & Newborn Deaths</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>EmONC Strengthening:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Pre-positioned delivery kits at all facilities</li>
                      <li>✓ Emergency oxytocin/misoprostol stockpiles</li>
                      <li>✓ Neonatal resuscitation equipment at every birth site</li>
                      <li>✓ Regular EmONC drills & simulations</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Helping Babies Breathe:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ HBB training for all birth attendants</li>
                      <li>✓ Neonatal resuscitation drills (Golden Minute)</li>
                      <li>✓ Bag-mask ventilation practice</li>
                      <li>✓ Equipment checklists & quality improvement</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Family Planning Access:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Long-acting contraceptives (implants, IUDs)</li>
                      <li>✓ Community-based distribution</li>
                      <li>✓ Postpartum family planning integration</li>
                      <li>✓ Youth-friendly services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Training & Technical Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert guidance on maternal-newborn care protocols and emergency obstetric skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Safe Delivery Practices</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Active management of 3rd stage labor</li>
                <li>• Oxytocin administration (prevent PPH)</li>
                <li>• Sterile technique during delivery</li>
                <li>• Partograph monitoring</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Neonatal Resuscitation</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Helping Babies Breathe (HBB)</li>
                <li>• Golden Minute protocol</li>
                <li>• Bag-mask ventilation technique</li>
                <li>• Neonatal assessment (APGAR)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Emergency Obstetric Care</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• PPH management (massage, uterotonic drugs)</li>
                <li>• Uterine balloon tamponade</li>
                <li>• Pre-eclampsia/eclampsia (MgSO4)</li>
                <li>• Sepsis recognition & antibiotics</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Family Planning Counseling</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Contraceptive method selection</li>
                <li>• Implant/IUD insertion techniques</li>
                <li>• Postpartum FP integration</li>
                <li>• Adolescent-friendly services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Need Maternal & Child Health Supplies?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us for bulk pricing, delivery kits, EmONC supplies, and safe motherhood training support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support/request-equipment-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              to="/support/training-education"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors text-lg"
            >
              Training Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}