import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function SanitationInfrastructurePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Sanitation Infrastructure",
    "description": "Latrine systems, waste management, sanitation facilities for improved sanitation across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'latrine-toilet-systems',
      name: 'Latrine & Toilet Systems',
      description: 'Improved pit latrines, pour-flush toilets, composting toilets, ventilated improved pit (VIP) latrines, and sanitation platforms',
      icon: '🚽'
    },
    {
      id: 'waste-management-systems',
      name: 'Waste Management Systems',
      description: 'Fecal sludge management, septage treatment, solid waste disposal, and environmental sanitation infrastructure',
      icon: '♻️'
    },
    {
      id: 'community-sanitation-programs',
      name: 'Community Sanitation Programs',
      description: 'CLTS (Community-Led Total Sanitation), sanitation marketing, open defecation elimination, and school sanitation facilities',
      icon: '🏘️'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Sanitation Infrastructure | Latrine Systems | Pacem Health"
        description="Sanitation infrastructure including latrine systems, waste management, sanitation facilities. Comprehensive sanitation solutions for African communities."
        keywords={[
          'sanitation infrastructure Africa',
          'latrine systems',
          'toilet facilities',
          'waste management',
          'improved sanitation',
          'sanitation solutions',
          'community sanitation',
          'public health sanitation'
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
            <Link to="/products/categories/water-sanitation-hygiene" className="hover:underline">Water, Sanitation & Hygiene</Link>
            <span>/</span>
            <span>Sanitation Infrastructure</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Water, Sanitation & Hygiene</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Sanitation Infrastructure
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Latrine construction materials, waste management systems, sanitation facilities, and community sanitation programs. Dignified sanitation solutions ending open defecation and creating healthy environments—from simple pit latrines providing privacy and safety to community-led approaches achieving open defecation-free villages to school toilets enabling girls' education, where 779 million Africans lack basic sanitation, unsafe feces disposal drives disease, and access to toilets transforms health, dignity, and development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete sanitation solutions from household latrines to community systems
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">The Sanitation Crisis</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why sanitation access is critical for health, dignity, and development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl mb-2">Access Gap</h3>
              <p className="text-gray-700">
                779 million Africans lack basic sanitation—using unimproved latrines, open pits, or practicing open defecation. 200+ million still defecate openly in fields, bushes, water bodies. Rural areas worst: 70% lack basic sanitation vs. 30% urban. School sanitation inadequate—60% of schools lack functional toilets. Girls miss school during menstruation due to lack of private facilities with water.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🦠</div>
              <h3 className="text-xl mb-2">Health Impact</h3>
              <p className="text-gray-700">
                Poor sanitation drives diarrheal disease, cholera, typhoid, dysentery, parasitic worms, trachoma. Fecal contamination of water, soil, food spreads pathogens. Children most affected—stunting from repeated infections. Sanitation improvements reduce diarrhea 35%, helminth infections 50%. Open defecation perpetuates disease transmission cycles. Environmental contamination affects entire communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-xl mb-2">Dignity & Gender</h3>
              <p className="text-gray-700">
                Lack of toilets robs dignity—forced to wait for darkness, seek bushes, risk assault, harassment. Women and girls particularly vulnerable to violence during open defecation. Menstrual hygiene management impossible without private facilities. Girls drop out of school at puberty without adequate toilets. Toilets enable privacy, safety, dignity. Community-led sanitation approaches address social norms driving open defecation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Sanitation Barriers</h3>
              <p className="text-gray-700 mb-4">
                Challenges to achieving universal sanitation access
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>High cost of latrine construction exceeding household budgets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Social norms accepting open defecation as normal practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited technical knowledge for latrine construction and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Challenging soil conditions (rock, high water table) complicating construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Weak fecal sludge management for pit emptying and safe disposal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Subsidy approaches creating dependency, undermining sustainability</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Sanitation Approaches</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based strategies for sustainable sanitation
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community-Led Total Sanitation (CLTS) mobilizing collective action</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sanitation marketing creating demand and enabling supply chains</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Affordable latrine options enabling households to self-invest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>School sanitation improving attendance, especially for girls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Fecal sludge management systems for safe emptying and treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Behavior change addressing social norms around open defecation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Sanitation Technology Options</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Appropriate sanitation technologies for diverse African contexts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🕳️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Simple Pit Latrine</h4>
              <p className="text-sm text-gray-700 mb-3">
                Basic pit with slab/platform and shelter. Most affordable: $50-100. Appropriate where water table deep. Requires pit emptying after 3-5 years. Odor and fly issues without ventilation. Entry-level sanitation ending open defecation. Community-built using local materials.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Lowest cost option</div>
                <div>• Locally constructed</div>
                <div>• Basic dignity</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🌬️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>VIP Latrine</h4>
              <p className="text-sm text-gray-700 mb-3">
                Ventilated Improved Pit with ventilation pipe and fly screen. Eliminates odor and flies through airflow. Dark interior attracts flies to light at pipe top, screen prevents escape. More expensive: $150-250. Longer lifespan. More acceptable to users. WHO-recommended.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Odor-free design</div>
                <div>• Fly control</div>
                <div>• User-friendly</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Pour-Flush Toilet</h4>
              <p className="text-sm text-gray-700 mb-3">
                Water-seal toilet with pour-flush mechanism to pit or septic tank. Requires 2-3 liters water per use. Eliminates odor and flies completely. More hygienic. Higher acceptance. Cost: $200-400. Appropriate where water available. Requires pit emptying or septic tank.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Water-seal hygiene</div>
                <div>• High acceptance</div>
                <div>• Requires water access</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Composting Toilet</h4>
              <p className="text-sm text-gray-700 mb-3">
                Separates urine and feces for composting into fertilizer. No water required. Dual-pit system for continuous use while one pit composts. Produces useful compost for agriculture. Requires user education and maintenance. Cost: $150-300. Sustainable, ecological approach.
              </p>
              <div className="text-xs text-gray-600">
                <div>• No water needed</div>
                <div>• Produces fertilizer</div>
                <div>• Ecological sanitation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">End Open Defecation, Restore Dignity</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement community-led sanitation programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Sanitation Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Sanitation Supplies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}