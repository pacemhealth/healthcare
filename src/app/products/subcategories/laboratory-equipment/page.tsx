import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function LaboratoryEquipmentPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Laboratory Equipment",
    "description": "Microscopes, centrifuges, incubators, laboratory instruments for diagnostic testing across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'microscopes',
      name: 'Microscopes',
      products: ['Binocular compound microscopes', 'LED microscopes (battery/solar)', 'Phase-contrast microscopes', 'Fluorescence microscopes (TB, malaria)', 'Microscope accessories (objectives, slides)'],
      icon: '🔬',
      description: 'Visual examination and diagnosis'
    },
    {
      id: 'centrifuges',
      name: 'Centrifuges',
      products: ['Benchtop centrifuges (clinical)', 'Microcentrifuges', 'Hematocrit centrifuges', 'Refrigerated centrifuges', 'Centrifuge rotors & tubes'],
      icon: '⚙️',
      description: 'Sample separation equipment'
    },
    {
      id: 'incubators',
      name: 'Incubators',
      products: ['Bacteriology incubators (37°C)', 'CO2 incubators (cell culture)', 'BOD incubators', 'Portable incubators', 'Temperature monitoring systems'],
      icon: '🌡️',
      description: 'Culture growth systems'
    },
    {
      id: 'water-baths',
      name: 'Water Baths',
      products: ['Serological water baths', 'Digital water baths (precision temp)', 'Shaking water baths', 'Circulating water baths', 'Water bath accessories'],
      icon: '💧',
      description: 'Temperature-controlled incubation'
    },
    {
      id: 'autoclaves',
      name: 'Autoclaves & Sterilizers',
      products: ['Vertical autoclaves (pressure cooker)', 'Horizontal autoclaves', 'Portable autoclaves', 'Biological indicators', 'Autoclave tape & pouches'],
      icon: '♨️',
      description: 'Laboratory sterilization'
    },
    {
      id: 'refrigerators-freezers',
      name: 'Laboratory Refrigerators & Freezers',
      products: ['Blood bank refrigerators (2-8°C)', 'Laboratory freezers (-20°C, -80°C)', 'Vaccine refrigerators', 'Temperature data loggers', 'Alarm systems'],
      icon: '❄️',
      description: 'Cold chain storage'
    },
    {
      id: 'shakers-mixers',
      name: 'Shakers & Mixers',
      products: ['Vortex mixers', 'Orbital shakers', 'Rotary mixers', 'Magnetic stirrers (hot plate)', 'Tube rockers & rollers'],
      icon: '🔄',
      description: 'Sample mixing devices'
    },
    {
      id: 'pipettes-dispensers',
      name: 'Pipettes & Dispensers',
      products: ['Micropipettes (single, multi-channel)', 'Automatic pipettes', 'Pipette tips (filtered, non-filtered)', 'Bottle-top dispensers', 'Pipette calibration services'],
      icon: '💉',
      description: 'Precise liquid handling'
    },
    {
      id: 'lab-balances',
      name: 'Laboratory Balances',
      products: ['Analytical balances (0.0001g)', 'Precision balances (0.01g)', 'Top-loading balances', 'Portable balances', 'Calibration weights'],
      icon: '⚖️',
      description: 'Weighing equipment'
    },
    {
      id: 'ph-meters',
      name: 'pH Meters & Electrodes',
      products: ['Benchtop pH meters', 'Portable pH meters', 'pH electrodes (various types)', 'Buffer solutions (pH 4, 7, 10)', 'Conductivity meters'],
      icon: '📊',
      description: 'pH and conductivity measurement'
    },
    {
      id: 'spectrophotometers',
      name: 'Spectrophotometers',
      products: ['UV-Vis spectrophotometers', 'Colorimeters', 'Photometers (clinical chemistry)', 'Cuvettes & accessories', 'Wavelength filters'],
      icon: '🌈',
      description: 'Light absorbance measurement'
    },
    {
      id: 'lab-ovens',
      name: 'Laboratory Ovens',
      products: ['Drying ovens', 'Hot air ovens (sterilization)', 'Vacuum ovens', 'Hybridization ovens', 'Temperature controllers'],
      icon: '🔥',
      description: 'Heating and drying'
    },
    {
      id: 'lab-furniture',
      name: 'Laboratory Furniture',
      products: ['Laboratory benches (chemical-resistant)', 'Fume hoods', 'Biosafety cabinets (Class II)', 'Storage cabinets', 'Lab stools & chairs'],
      icon: '🪑',
      description: 'Lab infrastructure'
    },
    {
      id: 'distillation-purification',
      name: 'Water Distillation & Purification',
      products: ['Water distillers', 'Deionization systems', 'Reverse osmosis units', 'Water quality monitors', 'Distilled water storage'],
      icon: '💧',
      description: 'Pure water production'
    },
    {
      id: 'lab-glassware',
      name: 'Laboratory Glassware',
      products: ['Volumetric flasks', 'Beakers & cylinders', 'Pipettes (glass, graduated)', 'Test tubes & racks', 'Reagent bottles'],
      icon: '🧪',
      description: 'Essential glassware'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Laboratory Equipment | Medical Lab Instruments | Pacem Health"
        description="Laboratory equipment including microscopes, centrifuges, incubators. Comprehensive lab instruments for African diagnostic facilities."
        keywords={[
          'laboratory equipment Africa',
          'medical lab instruments',
          'microscopes',
          'centrifuges',
          'lab equipment',
          'diagnostic instruments',
          'laboratory machinery',
          'medical lab tools'
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
            <Link to="/products/categories/diagnostic-equipment-supplies" className="hover:underline">
              Diagnostic Equipment & Supplies
            </Link>
            <span>/</span>
            <span>Laboratory Equipment</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Laboratory Equipment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Essential laboratory instrumentation including microscopes, centrifuges, incubators, autoclaves, water baths, and complete lab infrastructure. Quality equipment enabling accurate diagnostics and research across African healthcare and research facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of laboratory equipment</p>
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

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/diagnostic-equipment-supplies')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Diagnostic Equipment & Supplies
            </button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Equipment Selection for African Labs</h3>
              <p className="text-gray-700 mb-4">
                Laboratory equipment must be robust, maintainable, and suitable for resource-limited settings.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Voltage stabilizers for power fluctuations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Minimal moving parts (reduced maintenance)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Local spare parts availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Climate-appropriate (heat, humidity, dust)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>User-friendly operation and training</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Maintenance & Support</h3>
              <p className="text-gray-700 mb-4">
                Sustained laboratory capacity requires comprehensive equipment maintenance programs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Installation and commissioning services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Preventive maintenance schedules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Calibration and validation programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Technical support (phone, remote, on-site)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Biomedical technician training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}