import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function SterilizationAutoclaveEquipmentPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Sterilization & Autoclave Equipment",
    "description": "Steam autoclaves, dry heat sterilizers, autoclave accessories for medical instrument sterilization across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'steam-autoclaves',
      name: 'Steam Autoclaves',
      products: ['Vertical pressure steam sterilizers', 'Horizontal autoclaves (front-loading)', 'Benchtop autoclaves (20-60L)', 'Double-door autoclaves (pass-through)', 'Gravity displacement autoclaves'],
      icon: '♨️',
      description: 'High-pressure steam sterilization'
    },
    {
      id: 'dry-heat-sterilizers',
      name: 'Dry Heat Sterilizers',
      products: ['Hot air ovens (160-180°C)', 'Forced air circulation', 'Gravity convection ovens', 'Glassware sterilization ovens', 'Digital temperature control'],
      icon: '🔥',
      description: 'Dry heat sterilization'
    },
    {
      id: 'rapid-autoclaves',
      name: 'Rapid/Flash Sterilizers',
      products: ['Rapid cycle autoclaves (3-10 min)', 'Unwrapped instrument sterilization', 'Flash sterilization units', 'Emergency sterilizers', 'Point-of-use models'],
      icon: '⚡',
      description: 'Fast cycle sterilization'
    },
    {
      id: 'biological-indicators',
      name: 'Biological Indicators',
      products: ['Geobacillus stearothermophilus spores (steam)', 'Bacillus atrophaeus spores (dry heat)', 'Self-contained BIs', 'Spore strips', 'BI incubators'],
      icon: '🧫',
      description: 'Sterilization validation'
    },
    {
      id: 'chemical-indicators',
      name: 'Chemical Indicators',
      products: ['Autoclave tape (Class 1)', 'Internal chemical indicators (Class 4-5)', 'Bowie-Dick test packs', 'Emulating indicators (Class 5)', 'Integrating indicators'],
      icon: '🎨',
      description: 'Sterilization monitoring'
    },
    {
      id: 'autoclave-accessories',
      name: 'Autoclave Accessories',
      products: ['Stainless steel trays & baskets', 'Instrument pouches & wraps', 'Steam penetration test packs', 'Autoclave-safe containers', 'Loading racks'],
      icon: '📦',
      description: 'Sterilization supplies'
    },
    {
      id: 'validation-equipment',
      name: 'Sterilization Validation Equipment',
      products: ['Temperature data loggers', 'Pressure recorders', 'Thermocouple probes', 'Validation software', 'Documentation systems'],
      icon: '📊',
      description: 'Performance monitoring'
    },
    {
      id: 'washer-disinfectors',
      name: 'Washer-Disinfectors',
      products: ['Automated instrument washers', 'Thermal disinfection washers', 'Ultrasonic cleaners', 'Laboratory glassware washers', 'Multi-chamber washers'],
      icon: '🧽',
      description: 'Cleaning & disinfection'
    },
    {
      id: 'autoclave-maintenance',
      name: 'Autoclave Maintenance Supplies',
      products: ['Door gaskets & seals', 'Safety valves', 'Pressure gauges', 'Heating elements', 'Water filters & descaling'],
      icon: '🔧',
      description: 'Equipment maintenance'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Sterilization & Autoclave Equipment | Medical Sterilizers | Pacem Health"
        description="Sterilization and autoclave equipment including steam autoclaves, dry heat sterilizers. Comprehensive medical sterilization equipment for African healthcare facilities."
        keywords={[
          'sterilization equipment Africa',
          'autoclaves',
          'steam sterilizers',
          'medical autoclaves',
          'sterilization machines',
          'autoclave equipment',
          'infection control',
          'surgical sterilization'
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
            <span>Sterilization & Autoclave Equipment</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Sterilization & Autoclave Equipment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive sterilization solutions including steam autoclaves, dry heat sterilizers, biological and chemical indicators, validation equipment, and washer-disinfectors. Quality sterilization ensuring laboratory safety, infection prevention, and regulatory compliance across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of sterilization and autoclave equipment</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Sterilization Validation</h3>
              <p className="text-gray-700 mb-4">
                Proper validation ensures effective sterilization and patient safety.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Biological indicators (weekly minimum)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Chemical indicators (every load)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Physical parameters (time, temp, pressure)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Bowie-Dick test (porous load autoclaves)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Load configuration and documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Annual performance qualification (PQ)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Autoclave Operation</h3>
              <p className="text-gray-700 mb-4">
                Safe autoclave operation requires training and proper procedures.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper loading (no overcrowding)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cycle selection (wrapped vs. unwrapped)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Water quality (distilled or RO water)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Door safety interlocks (never force)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cooling period before opening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Personal protective equipment (PPE)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}