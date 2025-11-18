import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function WheelchairsMobilityAidsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Wheelchairs & Mobility Aids",
    "description": "Manual wheelchairs, mobility aids, walkers, crutches for patient mobility across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'manual-wheelchairs',
      name: 'Manual Wheelchairs',
      products: ['Standard manual wheelchairs', 'Lightweight wheelchairs (aluminum)', 'Folding wheelchairs (portable)', 'Fixed-frame wheelchairs', 'Self-propelling wheelchairs'],
      icon: '♿',
      description: 'Hand-propelled wheelchairs'
    },
    {
      id: 'pediatric-wheelchairs',
      name: 'Pediatric Wheelchairs',
      products: ['Child-size wheelchairs', 'Infant strollers (special needs)', 'Tilt-in-space pediatric chairs', 'Growth-adjustable wheelchairs', 'Pediatric positioning systems'],
      icon: '👶',
      description: 'Children\'s mobility devices'
    },
    {
      id: 'commode-shower-wheelchairs',
      name: 'Commode & Shower Wheelchairs',
      products: ['Commode wheelchairs (with toilet seat)', 'Shower chairs (waterproof)', 'Transport shower chairs', 'Tilt shower commode chairs', 'Pediatric shower chairs'],
      icon: '🚿',
      description: 'Bathroom mobility aids'
    },
    {
      id: 'electric-powered-wheelchairs',
      name: 'Electric Powered Wheelchairs',
      products: ['Power wheelchairs (indoor)', 'Outdoor power wheelchairs', 'Standing power wheelchairs', 'Pediatric power chairs', 'Bariatric power wheelchairs'],
      icon: '⚡',
      description: 'Battery-powered mobility'
    },
    {
      id: 'bariatric-wheelchairs',
      name: 'Bariatric Wheelchairs',
      products: ['Heavy-duty wheelchairs (500+ lbs)', 'Extra-wide wheelchairs (24"-30" seat)', 'Reinforced frames', 'Bariatric transport chairs', 'Heavy-duty commode chairs'],
      icon: '💪',
      description: 'High weight capacity'
    },
    {
      id: 'walkers-rollators',
      name: 'Walkers & Rollators',
      products: ['Standard walkers (no wheels)', '2-wheel walkers', '4-wheel rollators (with seat)', 'Folding walkers', 'Bariatric walkers'],
      icon: '🚶',
      description: 'Ambulatory assistance'
    },
    {
      id: 'canes-walking-sticks',
      name: 'Canes & Walking Sticks',
      products: ['Single-point canes', 'Quad canes (4-point base)', 'Offset handle canes', 'Folding canes (travel)', 'Adjustable-height canes'],
      icon: '🦯',
      description: 'Walking support aids'
    },
    {
      id: 'crutches',
      name: 'Crutches',
      products: ['Axillary crutches (underarm)', 'Forearm crutches (elbow)', 'Platform crutches', 'Pediatric crutches', 'Bariatric crutches (heavy-duty)'],
      icon: '🩼',
      description: 'Temporary mobility support'
    },
    {
      id: 'wheelchair-cushions',
      name: 'Wheelchair Cushions',
      products: ['Foam wheelchair cushions', 'Gel cushions (pressure relief)', 'Air-filled cushions', 'Memory foam cushions', 'Incontinence-resistant covers'],
      icon: '🛋️',
      description: 'Seating pressure relief'
    },
    {
      id: 'wheelchair-accessories',
      name: 'Wheelchair Accessories',
      products: ['Wheelchair ramps (portable)', 'Wheelchair bags & pouches', 'Cup holders', 'Oxygen tank holders', 'Wheelchair gloves'],
      icon: '🔧',
      description: 'Wheelchair add-ons'
    },
    {
      id: 'transfer-boards',
      name: 'Transfer Boards & Slides',
      products: ['Wooden transfer boards', 'Plastic slide boards', 'Curved transfer boards', 'Notched transfer boards', 'Long transfer boards (bed to chair)'],
      icon: '📋',
      description: 'Patient transfer aids'
    },
    {
      id: 'knee-walkers',
      name: 'Knee Walkers & Scooters',
      products: ['Knee scooters (leg injury)', 'Steerable knee walkers', 'All-terrain knee walkers', 'Folding knee scooters', 'Adjustable knee platforms'],
      icon: '🛴',
      description: 'Lower limb injury mobility'
    },
    {
      id: 'gait-belts',
      name: 'Gait Belts & Transfer Aids',
      products: ['Gait belts (standard)', 'Padded gait belts', 'Transfer belts with handles', 'Pediatric gait belts', 'Bariatric transfer belts'],
      icon: '🎀',
      description: 'Assisted ambulation'
    },
    {
      id: 'standing-aids',
      name: 'Standing & Mobility Frames',
      products: ['Standing frames (pediatric, adult)', 'Tilt tables', 'Standing wheelchairs', 'Mobile standing frames', 'Prone standers'],
      icon: '🧍',
      description: 'Upright positioning aids'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Wheelchairs & Mobility Aids | Patient Mobility Equipment | Pacem Health"
        description="Wheelchairs and mobility aids including manual wheelchairs, walkers, crutches. Comprehensive patient mobility equipment for African healthcare facilities."
        keywords={[
          'wheelchairs Africa',
          'mobility aids',
          'manual wheelchairs',
          'patient mobility',
          'walkers',
          'crutches',
          'mobility equipment',
          'patient transport'
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
            <span>Wheelchairs & Mobility Aids</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Wheelchairs & Mobility Aids
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive mobility solutions including manual and powered wheelchairs, walkers, canes, crutches, and ambulatory assistance devices. Quality mobility aids enabling patient independence, rehabilitation, and community reintegration across African healthcare settings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of wheelchairs and mobility aids</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Wheelchair Provision in Africa</h3>
              <p className="text-gray-700 mb-4">
                Access to appropriate wheelchairs is critical for disability inclusion and rehabilitation.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Individual assessment and proper sizing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Terrain-appropriate (rough roads, uneven paths)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Durability for high-use environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Local repair and spare parts availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>User training and education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Follow-up and maintenance services</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Mobility Aid Selection</h3>
              <p className="text-gray-700 mb-4">
                Choosing the right mobility device depends on patient needs, environment, and functional goals.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Assess patient's functional ability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Consider home and community environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Upper body strength for manual propulsion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Weight capacity and patient size</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Portability and transport needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Budget and affordability considerations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}