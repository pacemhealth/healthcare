import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function OutbreakResponseEquipmentPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Outbreak Response Equipment",
    "description": "Epidemic investigation supplies, disease surveillance systems, emergency response kits for outbreak management across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'epidemic-investigation-supplies',
      name: 'Epidemic Investigation Supplies',
      description: 'Outbreak investigation kits, sample collection materials, rapid diagnostic tests, field laboratory equipment for epidemic assessment',
      icon: '🔬'
    },
    {
      id: 'disease-surveillance-systems',
      name: 'Disease Surveillance Systems',
      description: 'Real-time reporting platforms, disease tracking software, laboratory information systems, and integrated surveillance networks',
      icon: '📊'
    },
    {
      id: 'outbreak-containment-materials',
      name: 'Outbreak Containment Materials',
      description: 'Infection prevention supplies, isolation equipment, decontamination materials, contact tracing tools for outbreak control',
      icon: '🛡️'
    },
    {
      id: 'rapid-response-deployment-kits',
      name: 'Rapid Response Deployment Kits',
      description: 'Pre-packed rapid response kits, outbreak-specific supplies (cholera, measles, Ebola), and emergency vaccination materials',
      icon: '🎒'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Outbreak Response Equipment | Epidemic Investigation | Pacem Health"
        description="Outbreak response equipment including epidemic investigation supplies, disease surveillance systems, emergency response kits. Comprehensive outbreak management equipment for African public health."
        keywords={[
          'outbreak response Africa',
          'epidemic investigation',
          'disease surveillance',
          'emergency response equipment',
          'outbreak management',
          'epidemic response',
          'public health emergency',
          'disease outbreak equipment'
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
            <Link to="/products/categories/emergency-response-disaster-relief" className="hover:underline">Emergency Response & Disaster Relief</Link>
            <span>/</span>
            <span>Outbreak Response Equipment</span>
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
              Outbreak Response Equipment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Epidemic investigation supplies, disease surveillance systems, outbreak containment materials, and rapid response kits. Specialized outbreak response equipment enabling rapid detection, investigation, and control of infectious disease epidemics—from field investigation kits diagnosing outbreaks within 24 hours to real-time surveillance systems tracking disease spread to isolation equipment containing transmission where every hour of delay allows exponential spread and rapid response prevents local outbreaks from becoming regional epidemics.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete outbreak response solutions from detection to containment
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">The Epidemic Threat</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why rapid outbreak response prevents catastrophic epidemics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl mb-2">Exponential Spread</h3>
              <p className="text-gray-700">
                Infectious diseases spread exponentially—1 case becomes 10, then 100, then 1,000 within weeks. Cholera outbreak: 1 case detected day 1, 10,000 cases by week 3 without intervention. Measles outbreak: single case infects 12-18 others in unvaccinated population. Early detection and rapid response at 10 cases prevents epidemic reaching 10,000. Each day of delay exponentially increases outbreak size, mortality, costs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-xl mb-2">Africa's Outbreak Burden</h3>
              <p className="text-gray-700">
                Africa experiences 100+ disease outbreaks annually—cholera, measles, yellow fever, meningitis, Ebola, Lassa fever, Rift Valley fever. Weak surveillance means late detection—outbreaks detected at hundreds/thousands of cases, not 10. Limited laboratory capacity delays confirmation. Inadequate outbreak supplies. Result: preventable epidemics killing thousands, overwhelming health systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl mb-2">Rapid Response Imperative</h3>
              <p className="text-gray-700">
                Outbreak control window is narrow—first 2-3 weeks critical. Rapid response (within 48-72 hours) contains most outbreaks: investigation identifying source, case isolation, contact tracing, vaccination campaigns, water chlorination. Delayed response allows widespread transmission, requiring months-long campaigns costing 100x more, causing 10x mortality. Preparedness and pre-positioned outbreak kits enable rapid deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Outbreak Response Challenges</h3>
              <p className="text-gray-700 mb-4">
                Barriers to effective epidemic detection and response
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Weak surveillance systems with delayed outbreak detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited laboratory capacity for rapid pathogen confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate pre-positioned outbreak investigation and response supplies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited trained rapid response teams for outbreak deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Poor infection prevention capacity in healthcare facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate coordination between surveillance, laboratory, response</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Outbreak Control</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based strategies for rapid epidemic response
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Integrated disease surveillance and response (IDSR) with real-time reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Rapid diagnostic testing at point-of-care for early confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pre-positioned outbreak investigation kits for 24-48 hour deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Trained rapid response teams on standby for immediate activation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Emergency vaccination stockpiles and cold chain capacity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Infection prevention systems isolating cases and protecting healthcare workers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Outbreak Response Cycle</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Systematic approach to detecting and controlling infectious disease epidemics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔔</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>1. Early Detection</h4>
              <p className="text-sm text-gray-700 mb-3">
                Surveillance systems detect unusual disease patterns—increases above threshold, unexpected cases, cluster alerts. Healthcare workers report through IDSR. Laboratory confirmation using rapid tests. Alert triggers within 24 hours.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Surveillance monitoring</div>
                <div>• Alert threshold triggers</div>
                <div>• Rapid diagnostic tests</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔍</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>2. Rapid Investigation</h4>
              <p className="text-sm text-gray-700 mb-3">
                Rapid response team deploys within 48 hours with investigation kit. Case definition, active case finding, contact tracing. Source identification—water, food, contacts. Lab samples for confirmation. Assess outbreak scale and spread.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Field investigation</div>
                <div>• Case identification</div>
                <div>• Source determination</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>3. Containment Response</h4>
              <p className="text-sm text-gray-700 mb-3">
                Immediate control measures: case isolation, contact quarantine, vaccination campaigns, water chlorination, food safety. Infection prevention in facilities. Community education. Ring vaccination around cases. Source elimination.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Case isolation</div>
                <div>• Vaccination campaigns</div>
                <div>• Source control</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>4. Monitoring & Documentation</h4>
              <p className="text-sm text-gray-700 mb-3">
                Daily case reporting tracking epidemic curve. Monitoring control measure effectiveness. Adjusting strategy based on trends. Declaration of outbreak end after 2 incubation periods without new cases. After-action review identifying lessons.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Epidemic curve tracking</div>
                <div>• Effectiveness monitoring</div>
                <div>• Lessons documentation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Stop Outbreaks Before They Become Epidemics</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to strengthen outbreak detection and response capacity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Outbreak Response Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Outbreak Supplies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}