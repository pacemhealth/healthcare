import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function HealthEducationAwarenessPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Health Education & Awareness",
    "description": "Health education materials, behavior change communication, and capacity building programs for African community health",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'health-education-materials',
      name: 'Health Education Materials',
      description: 'Culturally-adapted educational resources, health promotion materials, community engagement tools, and visual learning aids',
      productCount: '4 product areas'
    },
    {
      id: 'behavior-change-communication',
      name: 'Behavior Change Communication',
      description: 'BCC campaigns, community mobilization programs, peer education systems, and social behavior change strategies',
      productCount: '3 product areas'
    },
    {
      id: 'training-capacity-building',
      name: 'Training & Capacity Building',
      description: 'Community health worker training, health education curricula, train-the-trainer programs, and knowledge management systems',
      productCount: '4 product areas'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Health Education & Awareness | Community Health Programs Africa | Pacem Health"
        description="Health education and awareness programs for African communities. Health education materials, behavior change communication, training and capacity building. Empower communities with health knowledge."
        keywords={[
          'health education Africa',
          'community health awareness',
          'behavior change communication',
          'health promotion materials',
          'community health training',
          'health education programs Africa'
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
            <span>Health Education & Awareness</span>
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
              Empowering Communities Through Health Education
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Training programs, educational resources, and community mobilization tools that build local health knowledge and create lasting behavior change. Comprehensive health education solutions transforming African communities from passive health service recipients to empowered health actors—where communities understand disease prevention, practice healthy behaviors, seek care appropriately, and take ownership of their collective health through knowledge, skills, and sustainable behavior change driven by culturally-adapted education, peer-to-peer learning, and community-led health initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Education Type</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of health education and training solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">The Power of Health Education</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why knowledge is the foundation of healthy communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl mb-2">Knowledge Transforms Behavior</h3>
              <p className="text-gray-700">
                Many harmful health practices stem from lack of knowledge, not lack of caring. Teaching hand-washing reduces diarrhea 40%. Education on exclusive breastfeeding saves infant lives. Knowledge about malaria prevention protects families. Once communities understand why healthy behaviors matter and how to practice them, sustainable behavior change follows.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-xl mb-2">Community Ownership</h3>
              <p className="text-gray-700">
                External health workers come and go, but educated communities sustain healthy practices. Training community health workers creates local health expertise. Peer education leverages trusted community members. Mother-to-mother support groups share knowledge organically. Health education builds internal capacity for communities to manage their own health—the most sustainable approach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl mb-2">High-Impact, Low-Cost</h3>
              <p className="text-gray-700">
                Health education is among the most cost-effective health interventions. Training program costs $10-50/person but prevents diseases costing thousands to treat. Behavior change communication campaigns reach millions for modest investment. Community health worker training creates workforce serving populations for years. Education multiplies impact of other health investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Effective Health Education Approaches</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Evidence-based strategies for sustainable community health education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h3 className="text-lg mb-2">Community Health Workers</h3>
              <p className="text-sm text-gray-700">
                CHWs are trusted community members trained to provide health education, basic services, and referrals. Living in communities they serve, speaking local languages, understanding cultural context. Most effective health education delivery channel in Africa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg mb-2">Mass Media Campaigns</h3>
              <p className="text-sm text-gray-700">
                Radio, TV, and mobile messaging reach large populations with health messages. Radio dramas model healthy behaviors. SMS reminders prompt action (clinic visits, medication adherence). Social media engages youth. Mass media creates awareness; community programs drive behavior change.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">👪</div>
              <h3 className="text-lg mb-2">Peer Education</h3>
              <p className="text-sm text-gray-700">
                People learn best from peers—mothers from other mothers, youth from youth, farmers from farmers. Peer educators are credible, accessible, culturally appropriate. Support groups (HIV, breastfeeding, chronic disease) provide ongoing education and mutual support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🎭</div>
              <h3 className="text-lg mb-2">Participatory Methods</h3>
              <p className="text-sm text-gray-700">
                Interactive drama, role-playing, community dialogues engage participants actively rather than passive lectures. Communities identify local health priorities, develop solutions, take ownership. Participatory approaches drive deeper behavior change than information alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Build Healthier Communities Through Education</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to develop comprehensive health education and behavior change programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Education Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Training Resources
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
