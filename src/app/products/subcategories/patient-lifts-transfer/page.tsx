import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function PatientLiftsTransferPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Patient Lifts & Transfer",
    "description": "Floor lifts, ceiling lifts, transfer boards, patient slings for safe patient transfer across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'floor-lifts',
      name: 'Floor Patient Lifts',
      products: ['Manual hydraulic lifts', 'Electric patient lifts', 'Portable floor lifts', 'Bariatric floor lifts (600+ lbs)', 'Battery-operated lifts'],
      icon: '🏗️',
      description: 'Portable patient lifting'
    },
    {
      id: 'ceiling-lifts',
      name: 'Ceiling-Mounted Lifts',
      products: ['Fixed ceiling track lifts', 'Portable ceiling lifts', 'Room-to-room track systems', 'XY track systems', 'Bariatric ceiling lifts'],
      icon: '🚡',
      description: 'Overhead transfer systems'
    },
    {
      id: 'sit-to-stand-lifts',
      name: 'Sit-to-Stand Lifts',
      products: ['Standing transfer aids', 'Electric sit-to-stand lifts', 'Manual standing assists', 'Pediatric standing lifts', 'Compact standing lifts'],
      icon: '🧍',
      description: 'Assisted standing transfers'
    },
    {
      id: 'slings-harnesses',
      name: 'Patient Slings & Harnesses',
      products: ['Full-body slings (hammock)', 'Universal slings', 'Toileting slings', 'Bathing slings (mesh)', 'Amputee slings'],
      icon: '🎀',
      description: 'Lift attachment slings'
    },
    {
      id: 'transfer-boards',
      name: 'Transfer Boards',
      products: ['Sliding transfer boards', 'Curved transfer boards', 'Notched boards (wheelchair)', 'Long transfer boards', 'Bariatric transfer boards'],
      icon: '📋',
      description: 'Lateral transfer aids'
    },
    {
      id: 'slide-sheets',
      name: 'Slide Sheets & Glide Pads',
      products: ['Tubular slide sheets', 'Flat slide sheets', 'Repositioning sheets', 'Single-patient use sheets', 'Reusable slide sheets'],
      icon: '🛏️',
      description: 'Friction-reducing transfers'
    },
    {
      id: 'transfer-belts',
      name: 'Transfer Belts & Aids',
      products: ['Gait belts with handles', 'Padded transfer belts', 'Quick-release belts', 'Bariatric transfer belts', 'Pediatric transfer belts'],
      icon: '🔗',
      description: 'Manual transfer assistance'
    },
    {
      id: 'bath-transfer-equipment',
      name: 'Bath & Shower Transfer Equipment',
      products: ['Bath lifts (powered)', 'Shower transfer benches', 'Tub transfer boards', 'Swivel bath seats', 'Pool lifts'],
      icon: '🛁',
      description: 'Bathing transfer aids'
    },
    {
      id: 'stair-lifts',
      name: 'Stair Lifts & Evacuation',
      products: ['Straight stair lifts', 'Curved stair lifts', 'Evacuation chairs', 'Portable stair climbers', 'Track-mounted stair lifts'],
      icon: '🪜',
      description: 'Stairway mobility'
    },
    {
      id: 'turning-devices',
      name: 'Patient Turning & Repositioning',
      products: ['Patient turning systems', 'Repositioning aids', 'Lateral rotation devices', 'Air-assisted lateral transfer', 'Prone positioning devices'],
      icon: '🔄',
      description: 'In-bed repositioning'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Patient Lifts & Transfer | Patient Handling Equipment | Pacem Health"
        description="Patient lifts and transfer equipment including floor lifts, ceiling lifts, transfer boards. Safe patient handling equipment for African healthcare facilities."
        keywords={[
          'patient lifts Africa',
          'patient transfer equipment',
          'floor lifts',
          'ceiling lifts',
          'patient handling',
          'transfer aids',
          'patient mobility',
          'lift equipment'
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
            <span>Patient Lifts & Transfer Equipment</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Patient Lifts & Transfer Equipment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Safe patient handling solutions including floor lifts, ceiling lifts, sit-to-stand aids, transfer boards, slide sheets, and patient slings. Quality transfer equipment protecting both patients and healthcare workers from injury during transfers and repositioning across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of patient lifts and transfer equipment</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Healthcare Worker Safety</h3>
              <p className="text-gray-700 mb-4">
                Patient handling injuries are a leading cause of healthcare worker disability.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Back injuries from manual lifting (most common)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Safe patient handling policies (no manual lifts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Staff training on lift equipment use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Two-person assisted transfers when needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Ergonomic patient handling techniques</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Patient Safety & Dignity</h3>
              <p className="text-gray-700 mb-4">
                Mechanical lifts improve patient safety while preserving dignity during transfers.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reduced patient falls during transfers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Smooth, controlled lifting motion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper sling sizing and positioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Privacy during toileting and bathing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Respectful communication during transfers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}