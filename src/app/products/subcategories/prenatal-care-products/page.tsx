import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function PrenatalCareProductsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Prenatal Care Products",
    "description": "Antenatal screening, prenatal vitamins, maternal health monitoring equipment for prenatal care across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'antenatal-screening-diagnostics',
      name: 'Antenatal Screening & Diagnostics',
      description: 'Blood pressure monitors, fetal dopplers, ultrasound equipment, urine dipsticks, and maternal health screening tools for comprehensive prenatal assessment',
      icon: '🩺'
    },
    {
      id: 'prenatal-vitamins-supplements',
      name: 'Prenatal Vitamins & Supplements',
      description: 'Iron-folic acid tablets, calcium supplements, multivitamins, anti-malarial prophylaxis (IPTp), and micronutrient supplementation for maternal health',
      icon: '💊'
    },
    {
      id: 'maternal-monitoring-equipment',
      name: 'Maternal Monitoring Equipment',
      description: 'Weight scales, height boards, MUAC tapes, blood pressure cuffs, thermometers, and maternal assessment tools for tracking pregnancy health',
      icon: '📏'
    },
    {
      id: 'pregnancy-education-materials',
      name: 'Pregnancy Education Materials',
      description: 'Antenatal care cards, educational flip charts, nutrition counseling aids, birth preparedness materials, and maternal health education resources',
      icon: '📚'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Prenatal Care Products | Antenatal Supplies | Pacem Health"
        description="Prenatal care products including antenatal screening, prenatal vitamins, maternal health monitoring. Comprehensive prenatal care supplies for African maternal health programs."
        keywords={[
          'prenatal care Africa',
          'antenatal supplies',
          'prenatal vitamins',
          'maternal health monitoring',
          'antenatal screening',
          'pregnancy care',
          'maternal health products',
          'prenatal care supplies'
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
            <span>Prenatal Care Products</span>
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
              Prenatal Care Products
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Antenatal screening supplies, prenatal vitamins, ultrasound equipment, maternal health monitoring tools ensuring healthy pregnancies. Comprehensive prenatal care solutions enabling early detection of pregnancy complications, nutritional support for maternal and fetal health, systematic monitoring of pregnancy progression, and health education—transforming pregnancy outcomes through evidence-based antenatal care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete prenatal care solutions from screening to education
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Why Antenatal Care Matters</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Quality prenatal care prevents maternal deaths and improves birth outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💔</div>
              <h3 className="text-xl mb-2">Preventable Maternal Deaths</h3>
              <p className="text-gray-700">
                94% of maternal deaths occur in low-resource settings, mostly from preventable complications: hemorrhage, hypertension, sepsis, unsafe abortion. Quality antenatal care detects risk factors early—anemia, hypertension, malaria, HIV—enabling timely intervention before complications become life-threatening.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-xl mb-2">Early Detection Saves Lives</h3>
              <p className="text-gray-700">
                Most pregnancy complications are asymptomatic initially. Regular ANC visits with blood pressure monitoring, urine testing, blood tests detect pre-eclampsia, gestational diabetes, anemia, infections before crisis. Early treatment prevents progression to eclampsia, severe anemia, intrauterine infection.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👶</div>
              <h3 className="text-xl mb-2">Better Birth Outcomes</h3>
              <p className="text-gray-700">
                Comprehensive ANC improves newborn outcomes: higher birth weights, fewer preterm births, lower neonatal mortality. Iron-folic acid prevents maternal anemia and neural tube defects. Malaria prophylaxis prevents placental malaria and low birth weight. Nutrition counseling optimizes fetal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">ANC Access Barriers</h3>
              <p className="text-gray-700 mb-4">
                Obstacles preventing pregnant women from receiving quality antenatal care
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Geographic distance to health facilities (average 2+ hours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Financial barriers—transport costs, service fees, opportunity costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited ANC service availability and quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Stockouts of essential medicines and supplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate equipment for screening and diagnostics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited health worker training and supervision</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality ANC Interventions</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based approaches to improving prenatal care
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>8 ANC contacts (WHO 2016 model) vs. traditional 4 visits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Systematic screening for complications and risk factors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Universal iron-folic acid supplementation (180 tablets)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>IPTp (malaria prophylaxis) in endemic areas—3+ doses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Ultrasound screening for fetal development and complications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Birth preparedness counseling and emergency planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Essential ANC Components</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              WHO-recommended focused antenatal care package
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Health Assessment</h4>
              <p className="text-sm text-gray-700 mb-2">
                Medical history, physical exam, blood pressure, weight, height, fundal height measurement, fetal heart rate monitoring
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Every visit</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Laboratory Tests</h4>
              <p className="text-sm text-gray-700 mb-2">
                Hemoglobin/anemia testing, blood typing, HIV testing, syphilis screening, urine protein/glucose, malaria testing in endemic areas
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>First visit + periodic</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Preventive Treatment</h4>
              <p className="text-sm text-gray-700 mb-2">
                Iron-folic acid (180 tablets), IPTp for malaria (3+ doses SP), tetanus toxoid vaccination, deworming, calcium supplementation
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Scheduled doses</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📚</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Health Education</h4>
              <p className="text-sm text-gray-700 mb-2">
                Nutrition counseling, danger signs recognition, birth preparedness, breastfeeding promotion, family planning, HIV prevention
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>All visits</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Every Pregnancy Deserves Quality Care</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to strengthen antenatal care programs and save maternal lives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                ANC Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Prenatal Care Supplies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}