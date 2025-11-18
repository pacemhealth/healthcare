import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function PreventiveCareProductsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Preventive Care Products",
    "description": "Vaccination supplies, health screening programs, disease prevention products, and community health monitoring tools for African preventive healthcare",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'vaccination-immunization',
      name: 'Vaccination & Immunization',
      description: 'Vaccine supply chains, cold chain equipment, immunization supplies, and mass vaccination campaign materials ensuring community-wide protection',
      productCount: '4 product areas'
    },
    {
      id: 'health-screening-programs',
      name: 'Health Screening Programs',
      description: 'Community screening kits, point-of-care diagnostics, mobile health screening equipment, and early detection tools for common diseases',
      productCount: '4 product areas'
    },
    {
      id: 'disease-prevention-supplies',
      name: 'Disease Prevention Supplies',
      description: 'Vector control products, personal protection items, community hygiene supplies, and preventive health commodities',
      productCount: '4 product areas'
    },
    {
      id: 'community-health-monitoring',
      name: 'Community Health Monitoring',
      description: 'Health surveillance tools, disease tracking systems, community health worker equipment, and monitoring supplies for population health',
      productCount: '4 product areas'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Preventive Care Products | Vaccination & Health Screening Africa | Pacem Health"
        description="Preventive healthcare products for African communities. Vaccination supplies, health screening programs, disease prevention products, and community health monitoring tools. Strengthen preventive health systems."
        keywords={[
          'preventive care Africa',
          'vaccination supplies',
          'health screening programs',
          'disease prevention',
          'community health monitoring',
          'immunization supplies Africa',
          'preventive healthcare products'
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
            <span>Preventive Care Products</span>
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
              Community Health Protection & Early Detection
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Vaccination programs, health screening initiatives, and disease prevention tools that protect entire communities and detect health issues early. Comprehensive preventive care solutions addressing Africa's vaccine-preventable disease burden, enabling community-wide immunity, early disease detection, and proactive health protection—shifting healthcare from reactive treatment to preventive protection where communities thrive through coordinated immunization, systematic screening, and evidence-based prevention strategies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Product Area</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of preventive care and community protection solutions
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">The Power of Prevention in Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why preventive care is critical for community health transformation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💉</div>
              <h3 className="text-xl mb-2">Vaccine-Preventable Diseases</h3>
              <p className="text-gray-700">
                Despite availability of effective vaccines, diseases like measles, polio, diphtheria, and yellow fever continue affecting African children. Comprehensive immunization programs achieving 90%+ coverage create herd immunity protecting entire communities—particularly vulnerable infants, elderly, and immunocompromised individuals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-xl mb-2">Early Detection Saves Lives</h3>
              <p className="text-gray-700">
                Many African health conditions—hypertension, diabetes, cervical cancer, HIV—are asymptomatic in early stages. Community-based screening programs identify disease before symptoms appear, enabling early intervention when treatment is most effective and least costly. Screen 1,000 people, save dozens of lives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl mb-2">Cost-Effective Health Investment</h3>
              <p className="text-gray-700">
                Prevention is dramatically more cost-effective than treatment. Vaccinating child costs $50; treating preventable disease costs thousands. Community screening identifies hypertension costs $5; treating stroke costs $10,000+. Investing in prevention frees resources for other health priorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Immunization Challenges in Africa</h3>
              <p className="text-gray-700 mb-4">
                Despite progress, significant barriers prevent universal immunization coverage.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Cold chain failures compromising vaccine potency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Last-mile distribution challenges in remote areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Stockouts and supply chain interruptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited community awareness and vaccine hesitancy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate health worker training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Poor data systems tracking immunization status</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Prevention Strategies</h3>
              <p className="text-gray-700 mb-4">
                Proven approaches to strengthening community preventive care.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reliable cold chain with solar-powered refrigeration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Mobile vaccination outreach to hard-to-reach areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community health worker networks for screening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Digital immunization registries tracking coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community mobilization and health education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Integrated campaigns combining multiple interventions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Community Prevention in Action</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Real impact from preventive care programs across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💉</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Measles Elimination, Rwanda</h4>
              <p className="text-sm text-gray-700">National vaccination campaign achieves 98% coverage. Measles cases drop from 3,000+ annually to zero. Demonstrates power of comprehensive immunization.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🩺</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Hypertension Screening, Ghana</h4>
              <p className="text-sm text-gray-700">Community screening program identifies 12,000 undiagnosed hypertension cases. Early treatment prevents estimated 240 strokes and 180 heart attacks annually.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🦟</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Malaria Prevention, Tanzania</h4>
              <p className="text-sm text-gray-700">Mass bed net distribution plus indoor spraying reduces malaria incidence 72% in 3 years. Child mortality drops 45%. Prevention transforms community health.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👶</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Cervical Cancer, Kenya</h4>
              <p className="text-sm text-gray-700">HPV vaccination program for girls plus community screening for women. Pre-cancerous lesions detected early, treated immediately. Projected 67% reduction in cervical cancer deaths.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Protect Your Community Through Prevention</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement comprehensive vaccination, screening, and prevention programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Request Prevention Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Explore Preventive Care Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
