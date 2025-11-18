import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function CommunityHealthMonitoringPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Community Health Monitoring Systems",
    "description": "Health surveillance tools, disease tracking systems, CHW equipment, population health monitoring supplies for community health programs. Digital monitoring infrastructure enabling outbreak detection, case reporting, demographic tracking across African community health networks.",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'health-surveillance-tools',
      name: 'Health Surveillance Tools',
      description: 'Disease surveillance equipment, outbreak detection systems, syndromic surveillance tools, and early warning systems for population health monitoring',
      icon: '📡'
    },
    {
      id: 'disease-tracking-systems',
      name: 'Disease Tracking Systems',
      description: 'Case reporting platforms, disease registries, contact tracing tools, and epidemiological monitoring systems for tracking disease patterns',
      icon: '📊'
    },
    {
      id: 'community-health-worker-equipment',
      name: 'Community Health Worker Equipment',
      description: 'CHW mobile devices, digital health apps, community assessment tools, household registers, and field monitoring equipment',
      icon: '📱'
    },
    {
      id: 'population-health-monitoring-supplies',
      name: 'Population Health Monitoring',
      description: 'Vital statistics collection tools, health surveys equipment, demographic tracking systems, and community health assessment supplies',
      icon: '📈'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Community Health Monitoring Systems | Surveillance & Disease Tracking | Pacem Health"
        description="Health surveillance tools, disease tracking systems, CHW equipment, population health monitoring supplies for community health programs. Digital monitoring infrastructure enabling outbreak detection, case reporting, demographic tracking across African community health networks."
        keywords={[
          'community health monitoring Africa',
          'health surveillance systems',
          'disease tracking Africa',
          'CHW equipment',
          'outbreak detection systems',
          'population health monitoring',
          'community health worker tools',
          'health data systems Africa'
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
            <span>Community Health Monitoring</span>
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
              Community Health Monitoring
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Health surveillance tools, disease tracking systems, community health worker equipment, and monitoring supplies for population health. Comprehensive monitoring infrastructure enabling real-time disease surveillance, outbreak detection, community health assessment, and data-driven decision-making—transforming health systems from reactive response to proactive prevention through systematic population health tracking.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete health monitoring solutions from surveillance to data systems
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Why Health Monitoring Matters</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Data-driven health systems detecting and responding to population health needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🚨</div>
              <h3 className="text-xl mb-2">Outbreak Detection</h3>
              <p className="text-gray-700">
                Early warning systems detect disease outbreaks days or weeks before traditional surveillance. Rapid detection enables immediate response—containing cholera, measles, meningitis outbreaks before widespread transmission. Digital surveillance transforms outbreak response from reactive to proactive.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-700">
                Real-time health data enables evidence-based resource allocation, program planning, and policy decisions. Community health monitoring identifies disease hotspots, coverage gaps, and intervention priorities—ensuring limited resources target greatest needs and highest impact opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl mb-2">Targeted Interventions</h3>
              <p className="text-gray-700">
                Population health monitoring identifies vulnerable populations, geographic gaps, and disease patterns. Enables precise targeting of vaccination campaigns, screening programs, and prevention interventions—maximizing impact while minimizing costs through strategic, data-informed deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Health Monitoring Challenges</h3>
              <p className="text-gray-700 mb-4">
                Barriers to effective community health surveillance
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Fragmented, paper-based data systems with delayed reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited connectivity and technology infrastructure in rural areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate health worker training on data collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Poor data quality and completeness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Weak linkages between community and facility data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited capacity for data analysis and interpretation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Monitoring Solutions</h3>
              <p className="text-gray-700 mb-4">
                Proven approaches to strengthening health surveillance
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Digital health platforms enabling real-time reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Mobile devices for community health workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Integrated disease surveillance and response (IDSR) systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Automated data validation and quality checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Dashboard visualization for decision-makers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community-based surveillance networks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Community Health Monitoring Systems</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated surveillance from household to national level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏘️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Community Level</h4>
              <p className="text-sm text-gray-700 mb-3">
                Community health workers collect household data using mobile apps, register births/deaths, track disease cases, monitor health indicators
              </p>
              <div className="text-xs text-gray-600">
                <div>• Household registers</div>
                <div>• Disease case reporting</div>
                <div>• Birth/death notification</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Facility Level</h4>
              <p className="text-sm text-gray-700 mb-3">
                Health facilities aggregate community data, add facility-based surveillance, report to district using standardized tools and platforms
              </p>
              <div className="text-xs text-gray-600">
                <div>• Weekly disease surveillance</div>
                <div>• Patient registries</div>
                <div>• Service statistics</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🗺️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>District Level</h4>
              <p className="text-sm text-gray-700 mb-3">
                District teams analyze data, investigate alerts, coordinate outbreak response, provide feedback to facilities and communities
              </p>
              <div className="text-xs text-gray-600">
                <div>• Data analysis dashboards</div>
                <div>• Outbreak investigation</div>
                <div>• Performance monitoring</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏛️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>National Level</h4>
              <p className="text-sm text-gray-700 mb-3">
                National surveillance systems aggregate all data, identify national trends, guide policy, allocate resources, report internationally
              </p>
              <div className="text-xs text-gray-600">
                <div>• National dashboards</div>
                <div>• Policy decisions</div>
                <div>• International reporting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Build Data-Driven Health Systems</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement comprehensive community health monitoring systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Health Monitoring Consultation
              </button>
              <button
                onClick={() => navigate('/support/digital-health-integration')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Digital Health Systems
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}