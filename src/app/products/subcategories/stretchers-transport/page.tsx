import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function StretchersTransportPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Stretchers & Transport",
    "description": "Emergency stretchers, hospital stretchers, transport chairs, patient transfer equipment across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'emergency-stretchers',
      name: 'Emergency Stretchers',
      products: ['Emergency transport stretchers', 'Folding stretchers', 'Scoop stretchers (orthopedic)', 'Basket stretchers (rescue)', 'Flexible stretchers'],
      icon: '🚑',
      description: 'Emergency patient transport'
    },
    {
      id: 'hospital-stretchers',
      name: 'Hospital Transport Stretchers',
      products: ['Hydraulic stretchers (height-adjustable)', 'Manual stretchers', 'Electric stretchers', 'X-ray stretchers (radiolucent)', 'Bariatric stretchers'],
      icon: '🏥',
      description: 'Inter-departmental transport'
    },
    {
      id: 'ambulance-stretchers',
      name: 'Ambulance Stretchers',
      products: ['Collapsible ambulance stretchers', 'Loading stretchers (wheeled)', 'Track-mounted stretchers', 'Stair chair stretchers', 'Patient restraint straps'],
      icon: '🚨',
      description: 'Ambulance equipment'
    },
    {
      id: 'stair-chairs',
      name: 'Stair Chairs',
      products: ['Emergency stair chairs', 'Track-wheeled stair chairs', 'Folding stair chairs', 'Evacuation chairs', 'Bariatric stair chairs'],
      icon: '🪜',
      description: 'Stairway patient transport'
    },
    {
      id: 'evacuation-chairs',
      name: 'Evacuation Chairs',
      products: ['Fire evacuation chairs', 'Track-descent chairs', 'Emergency stairway chairs', 'Portable evacuation seats', 'Multi-story evacuation systems'],
      icon: '🔥',
      description: 'Emergency egress'
    },
    {
      id: 'shower-trolleys',
      name: 'Shower & Bathing Trolleys',
      products: ['Shower trolleys (waterproof)', 'Hydraulic shower trolleys', 'Pediatric shower trolleys', 'Tilt shower trolleys', 'Bathing stretchers'],
      icon: '🚿',
      description: 'Bathing assistance'
    },
    {
      id: 'transfer-trolleys',
      name: 'Transfer Trolleys',
      products: ['Patient transfer trolleys', 'Imaging trolleys (MRI-compatible)', 'Surgery transfer trolleys', 'Mortuary trolleys', 'Multi-level trolleys'],
      icon: '🛒',
      description: 'Patient movement aids'
    },
    {
      id: 'spine-boards',
      name: 'Spine Boards & Immobilization',
      products: ['Long spine boards', 'Short spine boards (KED)', 'Backboards with straps', 'Head immobilizers', 'Pediatric immobilization boards'],
      icon: '🦴',
      description: 'Spinal injury management'
    },
    {
      id: 'transport-accessories',
      name: 'Transport Accessories',
      products: ['Stretcher sheets', 'Restraint straps', 'IV pole attachments', 'Oxygen cylinder holders', 'Side rails'],
      icon: '🔧',
      description: 'Stretcher add-ons'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Stretchers & Transport | Patient Transfer Equipment | Pacem Health"
        description="Stretchers and transport equipment including emergency stretchers, hospital stretchers, transport chairs. Comprehensive patient transfer equipment for African healthcare facilities."
        keywords={[
          'stretchers Africa',
          'patient transport',
          'emergency stretchers',
          'hospital stretchers',
          'patient transfer',
          'medical transport equipment',
          'ambulance stretchers',
          'transport chairs'
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
            <Link to="/products/categories/durable-medical-equipment" className="hover:underline">
              Durable Medical Equipment
            </Link>
            <span>/</span>
            <span>Stretchers & Patient Transport</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Stretchers & Patient Transport
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive patient transport solutions including emergency stretchers, ambulance stretchers, stair chairs, evacuation equipment, and spine boards. Quality transport devices ensuring patient safety during emergency response, inter-departmental transfers, and facility evacuations across African healthcare settings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of stretchers and patient transport equipment</p>
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
              onClick={() => navigate('/products/categories/durable-medical-equipment')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Durable Medical Equipment
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Safe Patient Transport</h3>
              <p className="text-gray-700 mb-4">
                Proper transport equipment and techniques prevent patient and staff injuries.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Secure patient restraint during transport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper lifting and transferring techniques</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Equipment maintenance and inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Staff training on stretcher operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Communication during patient movement</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Emergency Response Equipment</h3>
              <p className="text-gray-700 mb-4">
                Emergency stretchers and immobilization equipment are critical for trauma care.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Spinal immobilization (trauma patients)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Rapid extrication from confined spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Ambulance-compatible equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Multi-story building evacuation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Durability for high-use environments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}