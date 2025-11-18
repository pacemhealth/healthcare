import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function ElectrosurgicalEquipmentPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Electrosurgical Equipment",
    "description": "Electrosurgical generators, cautery units, vessel sealing devices, electrosurgical pencils, grounding pads for surgical hemostasis across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'monopolar-cautery-units',
      name: 'Monopolar Cautery Units',
      products: ['Electrosurgical generators (50W-400W)', 'Monopolar handpieces & pencils', 'Footswitch controls', 'Patient return electrodes (grounding pads)', 'Monopolar accessories & cables'],
      icon: '⚡',
      description: 'Single-electrode cutting and coagulation'
    },
    {
      id: 'bipolar-cautery-systems',
      name: 'Bipolar Cautery Systems',
      products: ['Bipolar electrosurgical units', 'Bipolar forceps (various sizes)', 'Bipolar cables & cords', 'Irrigation bipolar forceps', 'Micro-bipolar forceps (neurosurgery)'],
      icon: '🔌',
      description: 'Dual-electrode precision coagulation'
    },
    {
      id: 'electrosurgical-pencils',
      name: 'Electrosurgical Pencils & Handpieces',
      products: ['Disposable electrosurgical pencils', 'Reusable pencil handles', 'Button & foot-activated controls', 'Pencil tips & electrodes (blade, needle, ball)', 'Holsters & safety features'],
      icon: '✏️',
      description: 'Handheld cautery instruments'
    },
    {
      id: 'cautery-tips-electrodes',
      name: 'Cautery Tips & Electrodes',
      products: ['Blade electrodes (straight, curved)', 'Needle electrodes (fine point)', 'Ball electrodes (coagulation)', 'Loop electrodes (LEEP procedures)', 'Specialized tips (spatula, extended)'],
      icon: '🔧',
      description: 'Interchangeable electrode tips'
    },
    {
      id: 'vessel-sealing-devices',
      name: 'Vessel Sealing Devices',
      products: ['Advanced bipolar sealers (LigaSure-type)', 'Ultrasonic surgical devices (Harmonic-type)', 'Vessel sealing forceps', 'Generator units (dedicated)', 'Handpiece accessories'],
      icon: '🩸',
      description: 'Advanced hemostasis systems'
    },
    {
      id: 'argon-plasma-coagulation',
      name: 'Argon Plasma Coagulation (APC)',
      products: ['APC generator units', 'APC applicator probes (flexible, rigid)', 'Argon gas supply systems', 'APC foot pedals', 'Endoscopic APC accessories'],
      icon: '💨',
      description: 'Non-contact thermal coagulation'
    },
    {
      id: 'smoke-evacuation-systems',
      name: 'Smoke Evacuation Systems',
      products: ['Surgical smoke evacuators', 'Evacuation tubing & pencils', 'ULPA filters (smoke filtration)', 'Pencil attachments with suction', 'Wall-mounted evacuation systems'],
      icon: '🌫️',
      description: 'Surgical plume removal devices'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Electrosurgical Equipment | Cautery Units & Vessel Sealers | Pacem Health"
        description="Electrosurgical equipment including monopolar and bipolar cautery units, vessel sealing devices, electrosurgical pencils, grounding pads. Advanced hemostasis technology reducing blood loss and improving surgical outcomes across African operating theaters."
        keywords={[
          'electrosurgical equipment Africa',
          'cautery units Africa',
          'bipolar cautery',
          'vessel sealing devices',
          'electrosurgical generators',
          'surgical cautery Africa',
          'hemostasis equipment',
          'operating room equipment Africa'
        ]}
        structuredData={productSchema}
      />
      {/* Breadcrumb Bar */}
      <section className="bg-[#0033A0] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/division1" className="hover:underline">Essential Healthcare Products</Link>
            <span>/</span>
            <Link to="/products/categories/surgical-procedural-supplies" className="hover:underline">
              Surgical & Procedural Supplies
            </Link>
            <span>/</span>
            <span>Electrosurgical Equipment</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Electrosurgical Equipment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive electrosurgical systems including cautery devices, diathermy units, and electrosurgical accessories. From monopolar and bipolar units to advanced vessel sealing devices and smoke evacuation systems for safe surgical procedures across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of electrosurgical equipment</p>
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
              onClick={() => navigate('/products/categories/surgical-procedural-supplies')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Surgical & Procedural Supplies
            </button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Electrosurgical Safety</h3>
              <p className="text-gray-700 mb-4">
                Proper equipment use and safety protocols are essential for preventing patient and staff injuries.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper patient grounding pad placement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular equipment calibration and testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Staff training on safe electrosurgery practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Burn prevention protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Smoke evacuation for surgical plume removal</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Equipment Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Regular maintenance ensures optimal performance and extends equipment lifespan.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Preventive maintenance schedules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Output power verification and calibration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cable and connector inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Replacement parts availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Technical support and service contracts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Advantages Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Electrosurgery Benefits</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Modern electrosurgical technology improves surgical outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">🩸</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Hemostasis Control</h4>
              <p className="text-sm text-gray-700">Precise cutting with simultaneous coagulation reduces blood loss and improves visualization</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Surgical Efficiency</h4>
              <p className="text-sm text-gray-700">Faster procedures with less tissue trauma and improved surgical precision</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Reduced Infections</h4>
              <p className="text-sm text-gray-700">Tissue sealing reduces contamination risk and promotes faster healing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}