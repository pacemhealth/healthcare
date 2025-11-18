import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function HealthEducationMaterialsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Health Education Materials",
    "description": "Visual learning aids, community education toolkits, print media, digital health education platforms for health literacy across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'visual-learning-aids',
      name: 'Visual Learning Aids',
      description: 'Flip charts, posters, pictorial cards, anatomical models, demonstration materials enabling visual education for low-literacy populations',
      icon: '📊'
    },
    {
      id: 'community-education-toolkits',
      name: 'Community Education Toolkits',
      description: 'Pre-packaged educational kits, health topic modules, community dialogue guides, and culturally-adapted health education resources',
      icon: '🧰'
    },
    {
      id: 'print-media-resources',
      name: 'Print & Media Resources',
      description: 'Health brochures, pamphlets, booklets, radio spots, video content, and multi-media educational materials for community distribution',
      icon: '📚'
    },
    {
      id: 'digital-health-education',
      name: 'Digital Health Education Platforms',
      description: 'Mobile health education apps, SMS health messages, digital learning platforms, and e-learning systems for health literacy',
      icon: '📱'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Health Education Materials | Community Health Resources | Pacem Health"
        description="Health education materials including visual learning aids, community toolkits, print media, digital health platforms. Supporting health literacy and education across African communities."
        keywords={[
          'health education materials Africa',
          'community health education',
          'visual learning aids',
          'health literacy resources',
          'health education toolkits',
          'digital health education',
          'health promotion materials',
          'community education Africa'
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
            <Link to="/products/categories/health-education-awareness" className="hover:underline">Health Education & Awareness</Link>
            <span>/</span>
            <span>Health Education Materials</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Health Education & Awareness</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Health Education Materials
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Culturally-adapted educational resources, health promotion materials, community engagement tools, and visual learning aids. Comprehensive educational materials transforming health knowledge across diverse African communities—from pictorial flip charts teaching disease prevention to mothers who cannot read, to mobile health apps delivering daily health tips, to community dialogue toolkits facilitating participatory learning where knowledge becomes practice and communities become their own health educators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete health education materials from print to digital
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Why Health Education Materials Matter</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Knowledge empowers communities to prevent disease and seek appropriate care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-xl mb-2">Health Literacy Gap</h3>
              <p className="text-gray-700">
                Limited health literacy drives poor health outcomes—delayed care-seeking, medication non-adherence, preventable complications. In Africa, 40% of adults cannot read, making text-based health information inaccessible. Visual, oral, and experiential learning methods reach everyone. Health education increases care-seeking 50%+, improves treatment adherence 40%, prevents disease through behavior change.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl mb-2">Prevention Through Knowledge</h3>
              <p className="text-gray-700">
                Most African disease burden is preventable with knowledge and behavior change—malaria (bed nets), diarrhea (handwashing), HIV (prevention), malnutrition (infant feeding), maternal deaths (danger signs recognition). Education interventions cost-effective: $1 invested in health education returns $10+ in prevented treatment costs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-xl mb-2">Cultural Adaptation Critical</h3>
              <p className="text-gray-700">
                Generic health materials fail across Africa's diverse cultures, languages, beliefs. Culturally-adapted education—respecting local knowledge, using familiar imagery, delivered by trusted community members—achieves 3x higher knowledge retention and 2x greater behavior change. Community ownership of health knowledge creates sustainable change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Health Education Barriers</h3>
              <p className="text-gray-700 mb-4">
                Challenges to effective health education in African communities
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Low literacy rates limiting text-based education effectiveness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Linguistic diversity—materials needed in hundreds of languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited distribution channels reaching remote communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Cultural beliefs and practices conflicting with health messages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited resources for developing quality educational materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Weak evaluation systems measuring education impact</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Education Strategies</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based approaches to health education that work
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Visual learning—pictorial materials accessible to non-literate populations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Local language translation and cultural adaptation of all materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Participatory methods—community dialogue, drama, role-play</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Multi-channel delivery—print, radio, mobile, interpersonal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community health workers as trusted educators and counselors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Repeated exposure and reinforcement through multiple touchpoints</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Effective Health Education Methods</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Learning approaches that achieve knowledge retention and behavior change
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🖼️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Pictorial Flip Charts</h4>
              <p className="text-sm text-gray-700 mb-2">
                Counseling cards with clear images telling health stories without words. Health worker guides discussion using visuals. Effective for non-literate populations. Achieves 80% knowledge retention vs. 20% for verbal-only education.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Most effective for low literacy</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📻</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Radio & Audio</h4>
              <p className="text-sm text-gray-700 mb-2">
                Radio spots, health dramas, call-in shows reaching entire communities. Local language programming builds trust. Interactive formats enable Q&A. Reaches 75% of rural African populations. Low-cost, high-reach medium.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Widest population reach</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎭</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Community Drama</h4>
              <p className="text-sm text-gray-700 mb-2">
                Theater, role-plays, and storytelling engaging communities in health learning. Entertainment-education embedding health messages in compelling stories. Followed by community discussion. Most memorable format—90% message recall.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Highest engagement</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Mobile Health (mHealth)</h4>
              <p className="text-sm text-gray-700 mb-2">
                SMS health tips, interactive voice response, mobile apps delivering personalized health education. Enables two-way communication, reminders, reinforcement. Reaches 70% of Africans with mobile phones.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Personalized & scalable</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Empower Communities Through Health Knowledge</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to develop culturally-adapted health education materials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Health Education Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Educational Materials
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
