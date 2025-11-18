import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function HealthScreeningProgramsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Health Screening Programs",
    "description": "Community screening kits, point-of-care diagnostics, mobile screening equipment, data management systems for disease prevention across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'community-screening-kits',
      name: 'Community Screening Kits',
      description: 'Portable screening packages for blood pressure, glucose, cholesterol, anemia, and common conditions enabling community-based health assessments',
      icon: '🩺'
    },
    {
      id: 'point-of-care-diagnostics-screening',
      name: 'Point-of-Care Diagnostics',
      description: 'Rapid test kits for HIV, malaria, TB, hepatitis, syphilis, and other diseases providing immediate results for early detection',
      icon: '🔬'
    },
    {
      id: 'mobile-screening-equipment',
      name: 'Mobile Screening Equipment',
      description: 'Portable ultrasound, visual inspection tools, cervical cancer screening equipment, and mobile health screening units for outreach',
      icon: '📱'
    },
    {
      id: 'screening-data-management',
      name: 'Screening Data & Management',
      description: 'Digital screening registries, result tracking systems, referral management platforms, and program monitoring tools',
      icon: '📊'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Health Screening Programs | Community Screening & Early Detection | Pacem Health"
        description="Health screening programs including community screening kits, point-of-care diagnostics, mobile screening equipment. Supporting early disease detection and prevention across African communities."
        keywords={[
          'health screening programs Africa',
          'community health screening',
          'point of care diagnostics',
          'mobile screening equipment',
          'disease screening Africa',
          'early detection programs',
          'health screening kits',
          'preventive screening Africa'
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
            <Link to="/products/categories/preventive-care-products" className="hover:underline">Preventive Care Products</Link>
            <span>/</span>
            <span>Health Screening Programs</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Preventive Care Products</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Health Screening Programs
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Community screening kits, point-of-care diagnostics, mobile health screening equipment, and early detection tools for common diseases. Comprehensive screening solutions identifying disease before symptoms appear—enabling early intervention when treatment is most effective and least costly, transforming community health through systematic detection of hypertension, diabetes, cancer, HIV, and other conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete screening solutions from detection to data management
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">The Power of Early Detection</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why community-based screening programs save lives and resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-xl mb-2">Silent Killers</h3>
              <p className="text-gray-700">
                Most major African health burdens—hypertension, diabetes, cervical cancer, HIV—are asymptomatic in early stages. By the time symptoms appear, disease is advanced and treatment costly. Community screening catches disease early when intervention is simple.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl mb-2">Cost-Effective Prevention</h3>
              <p className="text-gray-700">
                Screening 1,000 people for hypertension costs $5,000; treating one stroke costs $10,000+. Cervical cancer screening costs $10; treating advanced cancer costs $20,000+. Early detection prevents expensive late-stage treatment and saves lives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-xl mb-2">Community-Based Access</h3>
              <p className="text-gray-700">
                Hospital-based screening misses most people. Community health worker-led screening programs bring detection to villages, markets, and workplaces—reaching 10x more people at fraction of cost. Point-of-care tests enable immediate results and treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Screening Program Challenges</h3>
              <p className="text-gray-700 mb-4">
                Barriers to implementing effective community screening
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited awareness—people don't seek screening without symptoms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Geographic access barriers to facility-based screening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Cost barriers for screening tests and services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Weak referral systems for positive cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited data systems tracking screening and follow-up</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate health worker training on screening protocols</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Screening Strategies</h3>
              <p className="text-gray-700 mb-4">
                Proven approaches to systematic early detection
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community health worker-led screening at household level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Point-of-care tests providing immediate results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Mobile screening units for hard-to-reach populations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Digital registries tracking screening coverage and referrals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Integration with existing health services and campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community mobilization and health education on screening benefits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Priority Screening Programs for Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              High-impact screening targeting major disease burdens
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🩺</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Hypertension Screening</h4>
              <p className="text-sm text-gray-700 mb-2">
                30%+ African adults have hypertension; 80% undiagnosed. Simple blood pressure measurement identifies cases. Early treatment prevents stroke, heart disease, kidney failure.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Cost: $5 per person screened</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💉</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>HIV Testing</h4>
              <p className="text-sm text-gray-700 mb-2">
                6 million Africans living with HIV don't know their status. Rapid test provides result in 15 minutes. Early detection enables treatment, prevents transmission, saves lives.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Cost: $3 per rapid test</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🩸</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Diabetes Screening</h4>
              <p className="text-sm text-gray-700 mb-2">
                Diabetes prevalence doubling in Africa; most undiagnosed. Glucose finger-prick test identifies cases. Early lifestyle changes and medication prevent complications.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Cost: $2 per glucometer test</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👩</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Cervical Cancer Screening</h4>
              <p className="text-sm text-gray-700 mb-2">
                Leading cancer killer of African women; 90%+ curable if detected early. Visual inspection or HPV test identifies pre-cancerous lesions. Immediate treatment prevents cancer.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Cost: $10 per woman screened</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Find Disease Early, Save Lives</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement comprehensive community screening programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Screening Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Screening Equipment Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
