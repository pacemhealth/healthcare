import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function IncubatorsEnvironmentalChambersPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Incubators & Environmental Chambers",
    "description": "CO2 incubators, microbiological incubators, shaking incubators, environmental chambers for laboratory culture and testing across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'co2-incubators',
      name: 'CO₂ Incubators',
      products: ['Water-jacketed CO2 incubators', 'Air-jacketed CO2 incubators', 'Cell culture incubators', 'Multi-gas incubators (O2/CO2)', 'HEPA-filtered incubators'],
      icon: '🫧',
      description: 'Cell culture & tissue growth'
    },
    {
      id: 'microbiological-incubators',
      name: 'Microbiological Incubators',
      products: ['Standard bacteriological incubators', 'Gravity convection incubators', 'Forced air incubators', '30-65°C temperature range', 'Stacking models'],
      icon: '🦠',
      description: 'Bacterial culture'
    },
    {
      id: 'bod-incubators',
      name: 'BOD & Low-Temperature Incubators',
      products: ['BOD incubators (5-50°C)', 'Cooled incubators', 'Refrigerated incubators', 'Environmental testing chambers', 'Dual temperature models'],
      icon: '❄️',
      description: 'Low temperature incubation'
    },
    {
      id: 'shaking-incubators',
      name: 'Shaking Incubators',
      products: ['Orbital shaking incubators', 'Reciprocal shaking incubators', 'Benchtop shakers (heated)', 'Microbiology shakers', 'Multi-tier shakers'],
      icon: '💫',
      description: 'Culture mixing & agitation'
    },
    {
      id: 'dry-bath-incubators',
      name: 'Dry Bath Incubators',
      products: ['Single-block dry baths', 'Multi-block dry baths', 'Bead bath incubators', 'PCR tube heating blocks', 'Temperature up to 150°C'],
      icon: '🔥',
      description: 'Small volume heating'
    },
    {
      id: 'water-baths',
      name: 'Water Baths',
      products: ['Digital water baths', 'Analog control water baths', 'Shaking water baths', 'Circulating water baths', 'Hinged or gabled covers'],
      icon: '💧',
      description: 'Sample heating & thawing'
    },
    {
      id: 'hybridization-ovens',
      name: 'Hybridization Ovens & Rotators',
      products: ['Hybridization ovens (rotating)', 'Tube rotators', 'Bottle rollers', 'Molecular biology ovens', 'Programmable rotation'],
      icon: '🧬',
      description: 'Molecular biology'
    },
    {
      id: 'anaerobic-chambers',
      name: 'Anaerobic Chambers & Jars',
      products: ['Anaerobic jars (GasPak)', 'Anaerobic chambers (glove box)', 'Anaerobic gas generators', 'Anaerobic indicators', 'Palladium catalysts'],
      icon: '🫙',
      description: 'Anaerobe cultivation'
    },
    {
      id: 'candle-jars',
      name: 'Microaerophilic & Candle Jars',
      products: ['Candle extinction jars', 'Microaerophilic gas generators', 'CO2 gas generators', 'Culture jars with lids', 'Disposable gas packs'],
      icon: '🕯️',
      description: 'Special atmosphere culture'
    },
    {
      id: 'incubator-accessories',
      name: 'Incubator Accessories',
      products: ['Shelf kits (adjustable)', 'Temperature data loggers', 'CO2 sensors', 'Humidity pans', 'Door gaskets & seals'],
      icon: '🔧',
      description: 'Incubator add-ons'
    },
    {
      id: 'temperature-monitoring',
      name: 'Temperature Monitoring Systems',
      products: ['Digital thermometers (calibrated)', 'Data loggers (continuous)', 'Temperature alarms', 'Chart recorders', 'Wireless monitoring'],
      icon: '🌡️',
      description: 'Temperature control & logging'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Incubators & Environmental Chambers | Laboratory Equipment | Pacem Health"
        description="Incubators and environmental chambers including CO2 incubators, microbiological incubators, shaking incubators, environmental chambers. Supporting laboratory culture and testing across Africa."
        keywords={[
          'incubators Africa',
          'CO2 incubators',
          'microbiological incubators Africa',
          'laboratory incubators',
          'environmental chambers',
          'shaking incubators Africa',
          'cell culture equipment',
          'bacterial culture incubators'
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
            <Link to="/products/division1" className="hover:underline">Essential Healthcare Products</Link>
            <span>/</span>
            <Link to="/products/categories/laboratory-equipment-instrumentation" className="hover:underline">
              Laboratory Equipment & Instrumentation
            </Link>
            <span>/</span>
            <span>Incubators & Environmental Chambers</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Incubators & Environmental Chambers
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive temperature control solutions including CO₂ incubators, microbiological incubators, BOD incubators, water baths, anaerobic chambers, and temperature monitoring systems. Quality environmental control supporting microbiology, cell culture, and molecular diagnostics across African healthcare laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of incubators and environmental chambers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{group.description}</p>
                <div className="space-y-2">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-2 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/laboratory-equipment-instrumentation')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Laboratory Equipment & Instrumentation
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Incubation Requirements</h3>
              <p className="text-gray-700 mb-4">
                Different organisms require specific incubation temperatures and atmospheres.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Bacteria (most): 35-37°C aerobic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Fungi/yeasts: 25-30°C aerobic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Anaerobes: 35-37°C anaerobic atmosphere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cell culture: 37°C, 5% CO₂, high humidity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Mycobacteria: 35-37°C extended periods</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Incubator Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Regular maintenance ensures accurate temperature control and prevents contamination.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Daily temperature checks and logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Weekly cleaning and decontamination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Monthly calibration verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Door gasket inspection and replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Backup power (UPS) for critical cultures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}