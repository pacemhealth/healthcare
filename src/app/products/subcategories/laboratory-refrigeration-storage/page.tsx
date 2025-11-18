import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function LaboratoryRefrigerationStoragePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Laboratory Refrigeration & Storage",
    "description": "Laboratory refrigerators, vaccine refrigerators, ultra-low freezers, specimen storage for sample preservation across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'laboratory-refrigerators',
      name: 'Laboratory Refrigerators',
      products: ['General purpose lab refrigerators (2-8°C)', 'Explosion-proof refrigerators', 'Pharmacy refrigerators', 'Undercounter lab refrigerators', 'Glass-door refrigerators'],
      icon: '❄️',
      description: 'Reagent & sample storage'
    },
    {
      id: 'vaccine-refrigerators',
      name: 'Vaccine Refrigerators',
      products: ['WHO PQS-approved vaccine refrigerators', 'Solar direct-drive (SDD) refrigerators', 'Ice-lined refrigerators (ILR)', 'Combination refrigerator/freezers', 'Temperature monitoring systems'],
      icon: '💉',
      description: 'Cold chain equipment'
    },
    {
      id: 'laboratory-freezers',
      name: 'Laboratory Freezers',
      products: ['-20°C laboratory freezers', '-40°C low-temperature freezers', 'Upright freezers (150-600L)', 'Chest freezers', 'Alarm systems (temperature, door)'],
      icon: '🧊',
      description: 'Sample preservation'
    },
    {
      id: 'ultra-low-freezers',
      name: 'Ultra-Low Temperature Freezers',
      products: ['-80°C ultra-low freezers', '-150°C cryogenic freezers', 'Upright ULT freezers', 'Chest ULT freezers', 'Energy-efficient models'],
      icon: '🥶',
      description: 'Long-term specimen storage'
    },
    {
      id: 'blood-bank-refrigerators',
      name: 'Blood Bank Refrigerators',
      products: ['Blood storage refrigerators (4±2°C)', 'Plasma freezers (-30°C)', 'Blood bank combination units', 'Alarm & monitoring systems', 'Lockable blood banks'],
      icon: '🩸',
      description: 'Blood product storage'
    },
    {
      id: 'pharmacy-refrigerators',
      name: 'Pharmacy & Medication Refrigerators',
      products: ['Medication refrigerators (lockable)', 'Pharmacy-grade cold storage', 'Temperature-controlled cabinets', 'Insulin refrigerators', 'Data logging systems'],
      icon: '💊',
      description: 'Drug storage'
    },
    {
      id: 'portable-coolers',
      name: 'Portable Coolers & Transport',
      products: ['Vaccine carriers', 'Cold boxes (passive)', 'Portable electric coolers', 'Ice packs (gel, water)', 'Insulated transport bags'],
      icon: '🧊',
      description: 'Mobile cold chain'
    },
    {
      id: 'specimen-storage',
      name: 'Specimen Storage Systems',
      products: ['Freezer racks & boxes', 'Cryovial storage systems', 'Upright rack systems', 'Drawer storage systems', 'Inventory management software'],
      icon: '📦',
      description: 'Sample organization'
    },
    {
      id: 'temperature-monitoring',
      name: 'Temperature Monitoring & Alarms',
      products: ['Digital temperature data loggers', 'Wireless monitoring systems', 'Audible/visual alarms', 'Cloud-based monitoring', 'Min/max thermometers'],
      icon: '🌡️',
      description: 'Cold chain monitoring'
    },
    {
      id: 'cryogenic-storage',
      name: 'Cryogenic Storage',
      products: ['Liquid nitrogen dewars', 'Cryogenic freezers', 'LN2 storage racks', 'Cryovials & straws', 'Protective equipment (gloves, aprons)'],
      icon: '🧪',
      description: 'Cryo-preservation'
    },
    {
      id: 'fridge-thermometers',
      name: 'Refrigeration Thermometers',
      products: ['Digital probe thermometers', 'Glass thermometers (certified)', 'Wireless temperature sensors', 'Infrared thermometers', 'Calibrated reference thermometers'],
      icon: '🌡️',
      description: 'Temperature verification'
    },
    {
      id: 'backup-power',
      name: 'Backup Power Systems',
      products: ['Uninterruptible power supply (UPS)', 'Voltage stabilizers', 'Solar power systems', 'Backup generators', 'Battery backup systems'],
      icon: '🔋',
      description: 'Power protection'
    },
    {
      id: 'refrigeration-maintenance',
      name: 'Refrigeration Maintenance',
      products: ['Door gaskets & seals', 'Refrigerant recharge services', 'Preventive maintenance kits', 'Cleaning supplies', 'Calibration services'],
      icon: '🔧',
      description: 'Equipment servicing'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Laboratory Refrigeration & Storage | Lab Freezers | Pacem Health"
        description="Laboratory refrigeration and storage including lab refrigerators, vaccine refrigerators, ultra-low freezers. Comprehensive cold chain equipment for African laboratories."
        keywords={[
          'laboratory refrigeration Africa',
          'lab refrigerators',
          'vaccine refrigerators',
          'ultra-low freezers',
          'specimen storage',
          'lab cold storage',
          'laboratory freezers',
          'cold chain equipment'
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
            <span>Laboratory Refrigeration & Storage</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Laboratory Refrigeration & Storage
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive cold chain and storage solutions including laboratory refrigerators, freezers, ultra-low temperature freezers, vaccine refrigerators, blood bank refrigerators, and temperature monitoring systems. Quality cold storage ensuring specimen integrity, reagent stability, and vaccine potency across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of laboratory refrigeration and storage equipment</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Cold Chain Management</h3>
              <p className="text-gray-700 mb-4">
                Maintaining the cold chain is critical for vaccine potency and specimen integrity.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Temperature range 2-8°C (vaccines)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Continuous temperature monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Power backup systems (solar, generator, UPS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Alarm systems (temperature excursions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Staff training on cold chain protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular maintenance and defrosting</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Sample Storage Best Practices</h3>
              <p className="text-gray-700 mb-4">
                Proper storage conditions ensure specimen and reagent stability.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Store at recommended temperature for each analyte</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper labeling and inventory management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>First-in, first-out (FIFO) for reagents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Avoid repeated freeze-thaw cycles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Separate storage (reagents vs. specimens)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular expiration date checks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}