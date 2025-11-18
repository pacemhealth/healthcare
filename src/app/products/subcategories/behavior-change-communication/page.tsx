import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function BehaviorChangeCommunicationPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Behavior Change Communication",
    "description": "Evidence-based BCC campaigns, community mobilization programs, peer education systems, and social behavior change strategies transforming health behaviors across African communities",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'social-behavior-change-campaigns',
      name: 'Social & Behavior Change Campaigns',
      description: 'Integrated communication campaigns, mass media strategies, community mobilization programs addressing health behaviors at scale',
      icon: '📢'
    },
    {
      id: 'peer-education-networks',
      name: 'Peer Education Networks',
      description: 'Peer educator training systems, youth health programs, mother-to-mother support groups enabling community-led behavior change',
      icon: '👥'
    },
    {
      id: 'community-dialogue-engagement',
      name: 'Community Dialogue & Engagement',
      description: 'Participatory learning tools, community conversation guides, action-planning frameworks, and engagement methodologies',
      icon: '💬'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Behavior Change Communication | BCC Campaigns & Peer Education | Pacem Health"
        description="Evidence-based BCC campaigns, community mobilization programs, peer education systems, and social behavior change strategies transforming health behaviors across African communities. Theory-driven approaches addressing social norms, behavioral determinants."
        keywords={[
          'behavior change communication Africa',
          'BCC campaigns Africa',
          'social behavior change',
          'peer education networks',
          'community mobilization',
          'health behavior change',
          'health education Africa',
          'community dialogue'
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
            <Link to="/products/categories/health-education-awareness" className="hover:underline">Health Education & Awareness</Link>
            <span>/</span>
            <span>Behavior Change Communication</span>
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
              Behavior Change Communication
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              BCC campaigns, community mobilization programs, peer education systems, and social behavior change strategies. Evidence-based communication approaches transforming health behaviors at individual, family, and community levels—moving beyond knowledge transfer to addressing social norms, environmental barriers, and behavioral determinants that drive sustainable practice change where handwashing becomes habit, bed net use becomes routine, and healthy behaviors become community standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete BCC solutions from campaigns to peer networks
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">From Knowledge to Action</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why behavior change requires more than information
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl mb-2">The Knowledge-Practice Gap</h3>
              <p className="text-gray-700">
                Knowledge alone doesn't change behavior. Studies show 80% of Africans know key health practices (handwashing, bed nets, exclusive breastfeeding), yet only 30% practice consistently. Behavior change requires addressing beliefs, social norms, self-efficacy, environmental barriers. Effective BCC moves beyond information to tackle behavioral determinants systematically.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl mb-2">Social Norms Drive Behavior</h3>
              <p className="text-gray-700">
                Individual behavior shaped by community norms. Open defecation continues because "everyone does it." Female genital cutting persists because "our culture requires it." Child marriage normalized. Effective BCC addresses social norms through community dialogue, peer influence, role modeling—creating new norms where healthy behaviors become expected, practiced, enforced by community.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl mb-2">Evidence-Based BCC Works</h3>
              <p className="text-gray-700">
                Well-designed BCC campaigns achieve 20-40% behavior change across diverse practices—bed net use, facility delivery, HIV testing, nutrition practices. Key elements: formative research understanding barriers, segmented targeting, multi-channel delivery, community mobilization, sustained exposure, monitoring and adaptation. Cost-effective: BCC often &lt;10% program costs, drives 50%+ impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">BCC Implementation Challenges</h3>
              <p className="text-gray-700 mb-4">
                Common barriers to effective behavior change programs
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Generic campaigns not adapted to local context and barriers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited formative research understanding behavioral determinants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>One-time interventions without sustained exposure and reinforcement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Focus on knowledge transfer rather than behavioral drivers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate community engagement and ownership</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Weak monitoring systems measuring behavior change outcomes</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective BCC Strategies</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based approaches to sustainable behavior change
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Formative research identifying specific barriers and motivators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Theory-driven design (Health Belief Model, Social Cognitive Theory)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Multi-channel approach—mass media plus interpersonal communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community mobilization and peer influence leveraging social networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Environmental enabling—making healthy behaviors easy/default</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sustained campaigns with repeated exposure over 18-24 months</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">BCC Campaign Design Framework</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Systematic approach to designing effective behavior change interventions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>1. Formative Research</h4>
              <p className="text-sm text-gray-700 mb-3">
                Understand current behaviors, barriers (perceived and actual), motivators, social norms, influencers. Qualitative research (FGDs, interviews) + quantitative baseline. Identify "doers" vs. "non-doers" to understand what enables behavior.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Knowledge, attitudes, practices</div>
                <div>• Barriers and enablers</div>
                <div>• Communication preferences</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>2. Strategy Development</h4>
              <p className="text-sm text-gray-700 mb-3">
                Define behavioral objectives (specific, measurable). Segment audiences by readiness to change. Select behavior change theories and techniques. Design multi-channel strategy addressing identified barriers with appropriate communication mix.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Target behaviors defined</div>
                <div>• Audience segments</div>
                <div>• Channel selection</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📢</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>3. Campaign Implementation</h4>
              <p className="text-sm text-gray-700 mb-3">
                Launch integrated campaign—mass media (radio/TV), community mobilization, interpersonal communication, environmental cues. Train implementers. Ensure materials available. Build in repeated exposure and reinforcement across channels over sustained period.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Multi-channel delivery</div>
                <div>• Sustained exposure</div>
                <div>• Community engagement</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>4. Monitoring & Adaptation</h4>
              <p className="text-sm text-gray-700 mb-3">
                Track reach and exposure. Monitor behavior change through surveys. Conduct process evaluation identifying implementation gaps. Adapt strategy based on data—refine messages, adjust channels, intensify where change lagging. Endline evaluation measuring impact.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Behavior tracking</div>
                <div>• Process evaluation</div>
                <div>• Adaptive management</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Drive Lasting Health Behavior Change</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to design and implement evidence-based BCC campaigns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                BCC Campaign Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request BCC Materials
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}