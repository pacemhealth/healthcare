import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function DisasterPreparednessSystemsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Disaster Preparedness Systems",
    "description": "Early warning surveillance systems, emergency planning coordination platforms, community preparedness training for disaster response across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'early-warning-surveillance',
      name: 'Early Warning & Surveillance Systems',
      description: 'Disease surveillance platforms, early warning systems, risk monitoring tools, and real-time alert mechanisms for crisis anticipation',
      icon: '🚨'
    },
    {
      id: 'emergency-planning-coordination',
      name: 'Emergency Planning & Coordination',
      description: 'Contingency planning frameworks, emergency operations centers, coordination platforms, and multi-sectoral response planning tools',
      icon: '📋'
    },
    {
      id: 'community-preparedness-training',
      name: 'Community Preparedness & Training',
      description: 'Emergency response training programs, community preparedness initiatives, simulation exercises, and capacity-building systems',
      icon: '👥'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Disaster Preparedness Systems | Early Warning & Emergency Planning | Pacem Health"
        description="Disaster preparedness systems including early warning surveillance, emergency planning coordination, community preparedness training for health emergencies. Proactive crisis management infrastructure building resilience across African health systems."
        keywords={[
          'disaster preparedness Africa',
          'early warning systems',
          'emergency planning Africa',
          'community preparedness training',
          'health emergency preparedness',
          'outbreak surveillance systems',
          'disaster risk reduction',
          'emergency response training'
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
            <Link to="/products/categories/emergency-response-disaster-relief" className="hover:underline">Emergency Response & Disaster Relief</Link>
            <span>/</span>
            <span>Disaster Preparedness Systems</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Emergency Response & Disaster Relief</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Disaster Preparedness Systems
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Early warning systems, contingency planning tools, emergency response training, and community preparedness programs. Systematic preparedness infrastructure transforming reactive emergency response into proactive crisis management—from disease surveillance systems detecting outbreaks before they explode to trained emergency response teams ready to deploy within hours to communities knowing what to do when disaster strikes, where preparedness investment saves lives and reduces suffering exponentially.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete disaster preparedness systems from early warning to training
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">From Reactive to Proactive</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why preparedness systems prevent disasters from becoming catastrophes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="text-xl mb-2">Early Warning Saves Lives</h3>
              <p className="text-gray-700">
                Most disasters predictable—drought patterns, seasonal floods, epidemic-prone periods, conflict risk indicators. Early warning systems detect emerging threats enabling proactive response: evacuations, pre-positioning supplies, surge staffing, public alerts. Each day of advance warning reduces mortality 50%. Surveillance systems detecting disease outbreaks at 10 cases vs. 10,000 cases prevent epidemics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl mb-2">Preparedness ROI</h3>
              <p className="text-gray-700">
                Every $1 invested in disaster preparedness saves $4-7 in emergency response costs. Preparedness reduces mortality 90% compared to unprepared response. Pre-positioned supplies deployed in 24 hours vs. 7-14 days. Trained responders effective immediately vs. weeks learning on-job. Contingency plans prevent chaos, coordinate actors, optimize resources. Preparedness investment essential, not optional.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏘️</div>
              <h3 className="text-xl mb-2">Community Resilience</h3>
              <p className="text-gray-700">
                Communities are first responders—local people provide 90% of initial rescue/aid before external help arrives. Community preparedness training creates resilient populations: knowing evacuation routes, recognizing danger signs, basic first aid, water purification, family preparedness plans. Trained community health workers provide triage, treatment during surge. Community preparedness multiplies response capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Preparedness System Gaps</h3>
              <p className="text-gray-700 mb-4">
                Barriers to effective disaster preparedness in Africa
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited investment in preparedness vs. reactive response spending</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Weak disease surveillance systems with delayed outbreak detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate contingency planning and coordination mechanisms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited emergency response training and simulation exercises</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Poor community awareness and household preparedness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Fragmented systems across health, disaster management, humanitarian sectors</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:md-4">Effective Preparedness Approaches</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based strategies for comprehensive preparedness
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Integrated disease surveillance and response (IDSR) systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Multi-hazard contingency planning with regular updates/testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Emergency operations centers coordinating multi-sectoral response</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Trained rapid response teams with regular drills/simulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community-based disaster risk reduction (CBDRR) programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Risk mapping, vulnerability assessments, scenario planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Comprehensive Preparedness Framework</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated system for anticipating, preparing, and responding to health emergencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>1. Risk Assessment</h4>
              <p className="text-sm text-gray-700 mb-3">
                Hazard mapping identifying threats: disease outbreak risk, flood zones, drought-prone areas, conflict hotspots. Vulnerability assessment of population, infrastructure, capacities. Scenario planning for high-probability emergencies.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Multi-hazard risk mapping</div>
                <div>• Vulnerability analysis</div>
                <div>• Scenario development</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>2. Contingency Planning</h4>
              <p className="text-sm text-gray-700 mb-3">
                Emergency response plans for each scenario: roles/responsibilities, resource requirements, coordination mechanisms, SOPs. Pre-approved procurement, pre-identified suppliers. Regular plan updates and testing through simulations.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Multi-hazard response plans</div>
                <div>• Coordination protocols</div>
                <div>• Simulation exercises</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>3. Capacity Building</h4>
              <p className="text-sm text-gray-700 mb-3">
                Training emergency response teams in mass casualty management, outbreak investigation, emergency surgery. Community training in first aid, disaster preparedness. Regular drills maintaining readiness. Certification and refresher programs.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Emergency response teams</div>
                <div>• Community preparedness</div>
                <div>• Regular training drills</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🚨</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>4. Early Warning Systems</h4>
              <p className="text-sm text-gray-700 mb-3">
                Disease surveillance detecting outbreaks early. Weather/climate monitoring for floods/droughts. Conflict early warning. Real-time data systems triggering alerts. Communication platforms disseminating warnings to responders and communities.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Surveillance systems</div>
                <div>• Alert mechanisms</div>
                <div>• Communication platforms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Build Resilience Before Crisis Strikes</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to strengthen disaster preparedness systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Preparedness Systems Consultation
              </button>
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Training Programs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}