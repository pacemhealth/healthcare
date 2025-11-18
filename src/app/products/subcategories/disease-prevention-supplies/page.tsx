import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function DiseasePreventionSuppliesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Disease Prevention Supplies",
    "description": "Vector control products, personal protection supplies, community hygiene products, preventive health commodities for disease prevention across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'vector-control-products',
      name: 'Vector Control Products',
      description: 'Insecticide-treated bed nets, indoor residual spraying supplies, larvicides, mosquito control equipment preventing malaria and vector-borne diseases',
      icon: '🦟'
    },
    {
      id: 'personal-protection-prevention',
      name: 'Personal Protection & Prevention',
      description: 'Condoms, masks, hand sanitizers, insect repellents, sunscreen, and personal protective products preventing disease transmission',
      icon: '🛡️'
    },
    {
      id: 'community-hygiene-supplies',
      name: 'Community Hygiene Supplies',
      description: 'Handwashing stations, soap distribution programs, menstrual hygiene products, and community sanitation supplies',
      icon: '🧼'
    },
    {
      id: 'preventive-health-commodities',
      name: 'Preventive Health Commodities',
      description: 'Antimalarial prophylaxis, deworming medications, fluoride supplements, and other preventive health products for community distribution',
      icon: '💊'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Disease Prevention Supplies | Vector Control & Hygiene Products | Pacem Health"
        description="Disease prevention supplies including vector control products, personal protection equipment, community hygiene supplies, preventive health commodities. ITNs, malaria prevention, sanitation products building healthier communities across Africa."
        keywords={[
          'disease prevention supplies Africa',
          'vector control products',
          'malaria prevention Africa',
          'community hygiene supplies',
          'insecticide treated nets',
          'preventive health commodities',
          'sanitation supplies Africa',
          'disease control products'
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
            <Link to="/products/categories/preventive-care-products" className="hover:underline">Preventive Care Products</Link>
            <span>/</span>
            <span>Disease Prevention Supplies</span>
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
              Disease Prevention Supplies
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Vector control products, personal protection items, community hygiene supplies, and preventive health commodities. Comprehensive prevention tools addressing Africa's major disease transmission routes—from malaria-carrying mosquitoes to waterborne pathogens to person-to-person spread—protecting communities through proven interventions like bed nets, hygiene promotion, and mass prevention campaigns.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete disease prevention solutions for community protection
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Why Prevention Supplies Matter</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Simple, low-cost interventions preventing major disease burdens
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🦟</div>
              <h3 className="text-xl mb-2">Malaria Prevention</h3>
              <p className="text-gray-700">
                Malaria kills 400,000+ annually, mostly African children. Insecticide-treated bed nets reduce malaria transmission 50-70%. Universal bed net coverage combined with indoor spraying can eliminate malaria from entire regions. Cost: $5 per net protecting family for 3 years.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🧼</div>
              <h3 className="text-xl mb-2">Hygiene & Handwashing</h3>
              <p className="text-gray-700">
                Diarrheal diseases kill 500,000+ African children annually. Handwashing with soap reduces diarrhea 40-50%. Community handwashing programs providing soap and stations prevent disease at scale. Cost: $2 per person per year for soap and promotion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-xl mb-2">HIV Prevention</h3>
              <p className="text-gray-700">
                1.3 million new HIV infections in Africa annually. Condom promotion and distribution reduces HIV transmission 80%+. Male circumcision reduces acquisition 60%. Combination prevention dramatically reduces new infections. Cost: $0.50 per condom distributed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Prevention Supply Challenges</h3>
              <p className="text-gray-700 mb-4">
                Barriers to effective community disease prevention
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Supply chain interruptions and stockouts of prevention commodities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Last-mile distribution challenges to remote communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited community awareness and behavior change</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Cultural barriers to adoption of some interventions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Product quality issues with low-cost commodities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate monitoring of distribution and utilization</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Prevention Strategies</h3>
              <p className="text-gray-700 mb-4">
                Proven approaches to scaling prevention commodities
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Mass distribution campaigns achieving universal coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community health worker distribution networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Social marketing and behavior change communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Quality assurance and product testing systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Digital tracking of distribution and coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Integration with routine health services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">High-Impact Prevention Interventions</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Most cost-effective prevention supplies for African communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🛏️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Bed Nets (ITNs)</h4>
              <p className="text-sm text-gray-700 mb-2">
                Long-lasting insecticide-treated nets protecting families from malaria-carrying mosquitoes during sleep. Properly used nets reduce malaria 50%+.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>$5/net, 3-year protection</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Water Treatment</h4>
              <p className="text-sm text-gray-700 mb-2">
                Household chlorination, filters, and safe storage containers making water safe to drink. Reduces diarrheal disease 30-40%.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>$3/household/year</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🧴</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Soap Programs</h4>
              <p className="text-sm text-gray-700 mb-2">
                Soap distribution plus handwashing promotion at critical times (after toilet, before eating). Reduces diarrhea 40%, respiratory infections 20%.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>$2/person/year</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Deworming</h4>
              <p className="text-sm text-gray-700 mb-2">
                Mass drug administration treating intestinal worms. Improves nutrition, school attendance, cognitive development. One of most cost-effective interventions.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>$0.50/child/year</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Prevent Disease Before It Starts</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health for comprehensive disease prevention supply programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Prevention Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Prevention Supplies Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}