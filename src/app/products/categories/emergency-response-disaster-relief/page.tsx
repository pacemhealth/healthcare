import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function EmergencyResponseDisasterReliefPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Emergency Response & Disaster Relief",
    "description": "Emergency medical supplies, disaster preparedness systems, and outbreak response equipment for African emergency healthcare",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'emergency-medical-supplies',
      name: 'Emergency Medical Supplies',
      description: 'Pre-positioned emergency kits, trauma supplies, field hospital equipment, and rapid deployment medical commodities',
      productCount: '4 product areas'
    },
    {
      id: 'disaster-preparedness-systems',
      name: 'Disaster Preparedness Systems',
      description: 'Early warning systems, contingency planning tools, emergency response training, and community preparedness programs',
      productCount: '3 product areas'
    },
    {
      id: 'outbreak-response-equipment',
      name: 'Outbreak Response Equipment',
      description: 'Epidemic investigation supplies, disease surveillance systems, outbreak containment materials, and rapid response kits',
      productCount: '4 product areas'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Emergency Response & Disaster Relief | Emergency Medical Supplies Africa | Pacem Health"
        description="Emergency response and disaster relief products for Africa. Emergency medical supplies, disaster preparedness systems, outbreak response equipment, and rapid deployment solutions. Strengthen emergency healthcare capacity."
        keywords={[
          'emergency response Africa',
          'disaster relief supplies',
          'emergency medical supplies',
          'outbreak response',
          'disaster preparedness',
          'humanitarian healthcare',
          'emergency healthcare Africa'
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
            <span>Emergency Response & Disaster Relief</span>
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
              Community Resilience & Emergency Preparedness
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Emergency response systems, disaster preparedness training, and rapid deployment solutions that help communities respond effectively to health crises. Comprehensive emergency preparedness addressing Africa's vulnerability to natural disasters, disease outbreaks, conflicts, and humanitarian emergencies through pre-positioned supplies, trained responders, coordinated systems, and resilient communities capable of effective crisis response—minimizing loss of life, protecting health infrastructure, and enabling rapid recovery when disasters inevitably strike vulnerable populations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Emergency Type</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of emergency response and preparedness solutions
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Africa's Emergency Landscape</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the urgent need for emergency preparedness
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🌪️</div>
              <h3 className="text-xl mb-2">Natural Disasters</h3>
              <p className="text-gray-700">
                Africa experiences floods, droughts, cyclones, earthquakes affecting millions annually. Climate change increases frequency and severity. Disasters overwhelm weak health systems, displace populations, disrupt essential services, trigger disease outbreaks. 2019 Cyclone Idai (Mozambique) affected 3 million people—preparedness saves lives, reduces suffering.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🦠</div>
              <h3 className="text-xl mb-2">Disease Outbreaks</h3>
              <p className="text-gray-700">
                Cholera, measles, Ebola, COVID-19, meningitis regularly cause outbreaks requiring rapid response. Weak surveillance delays detection. Inadequate supplies hamper containment. Unprepared communities suffer preventable deaths. 2014-16 Ebola killed 11,000+. Early detection, rapid response, preparedness are critical for outbreak control.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⚔️</div>
              <h3 className="text-xl mb-2">Conflicts & Displacement</h3>
              <p className="text-gray-700">
                Armed conflicts across Africa displace millions, destroy health infrastructure, create humanitarian crises. Refugees and internally displaced persons (IDPs) need emergency health services—trauma care, disease prevention, maternal health. 26 million African refugees/IDPs require sustained emergency health support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Core Components of Emergency Preparedness</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Building resilient health systems that can respond to crises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-lg mb-2">Pre-Positioned Supplies</h3>
              <p className="text-sm text-gray-700">
                Emergency health kits (trauma, surgical, disease outbreak) stockpiled at strategic locations enable immediate response. WHO Inter-Agency Emergency Health Kits treat 10,000 people for 3 months. Minutes matter in emergencies—pre-positioning saves lives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h3 className="text-lg mb-2">Trained Response Teams</h3>
              <p className="text-sm text-gray-700">
                Rapid response teams trained in emergency medicine, outbreak investigation, disaster management deploy within hours. Community-level responders provide first aid, triage, basic stabilization. Training before crisis enables effective response during crisis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">📡</div>
              <h3 className="text-lg mb-2">Surveillance & Early Warning</h3>
              <p className="text-sm text-gray-700">
                Disease surveillance systems detect outbreaks early—weekly reporting, laboratory confirmation, rapid investigation. Weather monitoring, flood forecasting, early warning systems allow pre-emptive action. Early detection and prediction provide critical time for preparedness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-lg mb-2">Coordination Mechanisms</h3>
              <p className="text-sm text-gray-700">
                Emergency Operation Centers coordinate multi-sector response. Incident Management Systems provide command structure. Cluster approach (health, WASH, nutrition, shelter) ensures coordinated humanitarian response. Chaos without coordination—lives saved through organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Build Community Resilience Before Crisis Strikes</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to strengthen emergency preparedness and response capacity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Emergency Preparedness Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Emergency Supplies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
