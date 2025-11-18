import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function VaccinationImmunizationPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Vaccination & Immunization",
    "description": "Vaccine supply, cold chain equipment, immunization supplies for vaccination programs across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'vaccine-supply-cold-chain',
      name: 'Vaccine Supply & Cold Chain',
      description: 'Temperature-controlled vaccine storage, solar-powered refrigerators, cold boxes, vaccine carriers, and temperature monitoring ensuring vaccine potency',
      icon: '🧊'
    },
    {
      id: 'immunization-supplies-equipment',
      name: 'Immunization Supplies & Equipment',
      description: 'Auto-disable syringes, safety boxes, vaccination cards, immunization registers, and clinic supplies for safe immunization delivery',
      icon: '💉'
    },
    {
      id: 'mass-vaccination-campaigns',
      name: 'Mass Vaccination Campaigns',
      description: 'Mobile vaccination kits, outreach supplies, community mobilization materials, and campaign logistics for reaching underserved populations',
      icon: '🚐'
    },
    {
      id: 'immunization-data-systems',
      name: 'Immunization Data Systems',
      description: 'Digital immunization registries, coverage tracking tools, stock management systems, and reporting platforms for program monitoring',
      icon: '📊'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Vaccination & Immunization | Vaccine Cold Chain | Pacem Health"
        description="Vaccination and immunization supplies including vaccine cold chain, immunization equipment, vaccine storage. Comprehensive vaccination program supplies for African public health."
        keywords={[
          'vaccination supplies Africa',
          'immunization equipment',
          'vaccine cold chain',
          'vaccine storage',
          'immunization programs',
          'vaccination campaigns',
          'vaccine refrigerators',
          'cold chain equipment'
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
            <Link to="/products/categories/preventive-care-products" className="hover:underline">Preventive Care Products</Link>
            <span>/</span>
            <span>Vaccination & Immunization</span>
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
              Vaccination & Immunization
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive vaccine supply chains, cold chain equipment, immunization supplies, and mass vaccination campaign materials ensuring community-wide protection. Complete immunization systems combining temperature-controlled vaccine storage, safe delivery supplies, outreach capabilities, and digital tracking—protecting communities through coordinated vaccination programs achieving high coverage rates and preventing disease outbreaks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete immunization solutions from vaccine storage to delivery
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Why Immunization Matters</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Vaccination prevents 2-3 million deaths annually and is one of the most cost-effective health interventions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🦠</div>
              <h3 className="text-xl mb-2">Vaccine-Preventable Deaths</h3>
              <p className="text-gray-700">
                Despite availability of effective vaccines, 1.5 million children die annually from diseases like measles, diphtheria, pertussis, and tetanus. Most deaths occur in sub-Saharan Africa and South Asia where immunization coverage is lowest.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">❄️</div>
              <h3 className="text-xl mb-2">Cold Chain Challenges</h3>
              <p className="text-gray-700">
                Vaccines require continuous 2-8°C storage from manufacturer to patient. In Africa, power outages, equipment failures, and last-mile distribution challenges compromise 25-50% of vaccine potency. Solar-powered cold chain solves this.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl mb-2">Cost-Effectiveness</h3>
              <p className="text-gray-700">
                Vaccination is among the most cost-effective health interventions. Every $1 invested in immunization returns $16 in healthcare savings, lost wages, and lost productivity. Measles vaccine costs $1; treating measles costs $100+.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Immunization Barriers in Africa</h3>
              <p className="text-gray-700 mb-4">
                Multiple challenges prevent universal vaccine coverage
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Cold chain failures from power outages and equipment breakdown</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Vaccine stockouts and supply chain interruptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Last-mile access challenges in remote/hard-to-reach areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate immunization data systems and tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Vaccine hesitancy and community awareness gaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Health worker training and supervision needs</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Immunization Solutions</h3>
              <p className="text-gray-700 mb-4">
                Proven approaches to achieving high vaccination coverage
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Solar-powered refrigeration ensuring reliable cold chain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Mobile outreach teams reaching remote communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Digital immunization registries tracking coverage and defaulters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Auto-disable syringes ensuring injection safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community mobilization and health education campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Integration with child health services (vitamin A, deworming)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Achieving Universal Immunization Coverage</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Key strategies for protecting every child through vaccination
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📍</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Fixed Posts</h4>
              <p className="text-sm text-gray-700">Health facilities with reliable cold chain providing routine immunization services during regular clinic days and scheduled sessions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🚐</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Outreach Services</h4>
              <p className="text-sm text-gray-700">Mobile teams with vaccine carriers reaching remote communities on scheduled basis, often monthly or quarterly depending on distance</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Mass Campaigns</h4>
              <p className="text-sm text-gray-700">Periodic intensive vaccination drives targeting specific diseases or age groups, often integrated with other interventions like vitamin A</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Defaulter Tracking</h4>
              <p className="text-sm text-gray-700">Digital systems identifying children who missed vaccinations, enabling community health workers to follow up and complete schedules</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Protect Your Community Through Immunization</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health for complete vaccination solutions from cold chain to delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Immunization Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Vaccine Supply Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}