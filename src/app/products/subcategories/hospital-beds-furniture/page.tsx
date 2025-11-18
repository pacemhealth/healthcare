import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function HospitalBedsFurniturePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Hospital Beds & Furniture",
    "description": "Hospital beds, patient furniture, bedside tables, medical storage, waiting room furniture for healthcare facilities across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'manual-hospital-beds',
      name: 'Manual Hospital Beds',
      products: ['3-function manual beds', '2-function manual beds', 'Hand-crank adjustment mechanisms', 'Fowler position capability', 'Trendelenburg positioning'],
      icon: '🛏️',
      description: 'Hand-operated patient beds'
    },
    {
      id: 'electric-hospital-beds',
      name: 'Electric Hospital Beds',
      products: ['Fully electric 5-function beds', 'Semi-electric beds', 'Remote control operation', 'Height adjustment', 'Battery backup systems'],
      icon: '⚡',
      description: 'Powered patient beds'
    },
    {
      id: 'icu-critical-care-beds',
      name: 'ICU & Critical Care Beds',
      products: ['ICU beds with scale', 'Cardiac chair positioning', 'CPR quick-release', 'X-ray cassette holder', 'IV pole attachments'],
      icon: '🏥',
      description: 'Intensive care beds'
    },
    {
      id: 'pediatric-beds',
      name: 'Pediatric & Neonatal Beds',
      products: ['Pediatric cribs with side rails', 'Infant bassinets', 'Neonatal incubator stands', 'Youth beds (adolescent)', 'Height-adjustable pediatric beds'],
      icon: '👶',
      description: 'Child and infant beds'
    },
    {
      id: 'obstetric-delivery-beds',
      name: 'Obstetric & Delivery Beds',
      products: ['Labor & delivery beds', 'Birthing beds (multi-position)', 'Gynecology examination beds', 'Obstetric delivery tables', 'Leg supports & stirrups'],
      icon: '🤰',
      description: 'Maternity care beds'
    },
    {
      id: 'bed-mattresses',
      name: 'Hospital Mattresses',
      products: ['Standard foam mattresses', 'Pressure redistribution mattresses', 'Waterproof mattress covers', 'Alternating pressure mattresses', 'Memory foam mattresses'],
      icon: '🛏️',
      description: 'Patient bed mattresses'
    },
    {
      id: 'bed-rails-accessories',
      name: 'Bed Rails & Accessories',
      products: ['Full-length side rails', 'Half-length side rails', 'Collapsible bed rails', 'IV pole attachments', 'Bed exit alarms'],
      icon: '🔒',
      description: 'Bed safety equipment'
    },
    {
      id: 'bedside-tables',
      name: 'Bedside Tables & Cabinets',
      products: ['Bedside lockers (with drawer)', 'Overbed tables (adjustable height)', 'Rolling bedside tables', 'Patient storage cabinets', 'Tilt-top overbed tables'],
      icon: '🪑',
      description: 'Patient bedside furniture'
    },
    {
      id: 'patient-chairs',
      name: 'Patient Chairs & Recliners',
      products: ['Geriatric chairs (high back)', 'Recliner chairs (therapeutic)', 'Bedside chairs', 'Visitor chairs', 'Bariatric patient chairs'],
      icon: '💺',
      description: 'Patient seating'
    },
    {
      id: 'ward-screens-dividers',
      name: 'Ward Screens & Privacy Dividers',
      products: ['3-panel privacy screens', '4-panel room dividers', 'Ceiling-mounted curtain tracks', 'Disposable privacy curtains', 'Mobile partition screens'],
      icon: '🚪',
      description: 'Patient privacy solutions'
    },
    {
      id: 'patient-wardrobes',
      name: 'Patient Wardrobes & Storage',
      products: ['Patient wardrobes (lockable)', 'Bedside storage units', 'Personal belongings lockers', 'Clothing storage cabinets', 'Multi-compartment storage'],
      icon: '🗄️',
      description: 'Patient personal storage'
    },
    {
      id: 'stretcher-trolleys',
      name: 'Stretcher Trolleys',
      products: ['Emergency stretchers (folding)', 'Transport trolleys', 'Shower trolleys', 'X-ray stretchers (radiolucent)', 'Bariatric stretchers'],
      icon: '🛒',
      description: 'Patient transport trolleys'
    },
    {
      id: 'dialysis-chairs',
      name: 'Dialysis & Chemotherapy Chairs',
      products: ['Dialysis treatment chairs', 'Chemotherapy recliners', 'Blood donation chairs', 'Infusion therapy chairs', 'Adjustable treatment recliners'],
      icon: '💉',
      description: 'Treatment recliners'
    },
    {
      id: 'bariatric-furniture',
      name: 'Bariatric Patient Furniture',
      products: ['Bariatric beds (800-1000 lbs capacity)', 'Extra-wide patient chairs', 'Reinforced bed frames', 'Heavy-duty mattresses', 'Wide stretchers'],
      icon: '💪',
      description: 'Heavy-duty patient equipment'
    },
    {
      id: 'morgue-equipment',
      name: 'Morgue & Mortuary Equipment',
      products: ['Mortuary refrigerators', 'Body storage racks', 'Mortuary trolleys', 'Body bags', 'Autopsy tables'],
      icon: '🏛️',
      description: 'Post-mortem facilities'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Hospital Beds & Furniture | Medical Furniture Solutions | Pacem Health"
        description="Hospital beds and furniture including manual and electric beds, ICU beds, pediatric beds, bedside tables, medical storage. Quality patient care furniture for African healthcare facilities."
        keywords={[
          'hospital beds Africa',
          'medical furniture Africa',
          'patient beds',
          'ICU beds Africa',
          'pediatric beds',
          'hospital furniture',
          'medical storage furniture',
          'healthcare furniture Africa'
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
            <span>Hospital Beds & Patient Room Furniture</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Hospital Beds & Patient Room Furniture
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive patient room solutions including manual and electric hospital beds, ICU beds, pediatric beds, obstetric beds, mattresses, bedside furniture, and patient room equipment. Quality, durable furniture supporting patient care, comfort, and safety across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of hospital beds and patient furniture</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Bed Selection Criteria</h3>
              <p className="text-gray-700 mb-4">
                Choosing appropriate hospital beds depends on patient acuity, clinical needs, and budget.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Manual vs. electric (cost, power availability)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Weight capacity and patient population</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Height adjustment for nursing care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Positioning functions (Fowler, Trendelenburg)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Side rail safety features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Ease of cleaning and infection control</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Patient Safety Considerations</h3>
              <p className="text-gray-700 mb-4">
                Hospital beds are critical for patient safety and preventing adverse events.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Fall prevention (low height, bed rails)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pressure ulcer prevention (mattress quality)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Bed exit alarms for confused patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper bed rail use (entrapment prevention)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Nurse call button accessibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Mattress flammability and safety standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}