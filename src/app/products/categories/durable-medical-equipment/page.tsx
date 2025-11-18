import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function DurableMedicalEquipmentPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Durable Medical Equipment",
    "description": "Hospital beds, wheelchairs, patient monitoring equipment, respiratory devices, and medical furniture for African healthcare facilities",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'hospital-beds-furniture',
      name: 'Hospital Beds & Patient Room Furniture',
      description: 'Manual and electric hospital beds, bedside tables, overbed tables, patient room furniture, and mattresses',
      productCount: '15 product groups'
    },
    {
      id: 'wheelchairs-mobility-aids',
      name: 'Wheelchairs & Mobility Aids',
      description: 'Manual and powered wheelchairs, walkers, canes, crutches, and ambulatory assistance devices',
      productCount: '14 product groups'
    },
    {
      id: 'examination-treatment-tables',
      name: 'Examination & Treatment Tables',
      description: 'Examination tables, treatment couches, gynecology tables, physical therapy tables, and procedure chairs',
      productCount: '12 product groups'
    },
    {
      id: 'patient-lifts-transfer',
      name: 'Patient Lifts & Transfer Equipment',
      description: 'Ceiling lifts, floor lifts, transfer boards, sliding sheets, and patient handling devices',
      productCount: '10 product groups'
    },
    {
      id: 'therapeutic-rehabilitation',
      name: 'Therapeutic & Rehabilitation Equipment',
      description: 'CPM machines, traction devices, exercise equipment, parallel bars, and physical therapy tools',
      productCount: '16 product groups'
    },
    {
      id: 'medical-carts-storage',
      name: 'Medical Carts & Storage Solutions',
      description: 'Crash carts, medication carts, procedure carts, IV poles, and mobile storage units',
      productCount: '11 product groups'
    },
    {
      id: 'patient-monitoring-vitals',
      name: 'Patient Monitoring & Vital Signs Equipment',
      description: 'Vital signs monitors, pulse oximeters, blood pressure monitors, thermometers, and bedside monitoring',
      productCount: '13 product groups'
    },
    {
      id: 'stretchers-transport',
      name: 'Stretchers & Patient Transport',
      description: 'Emergency stretchers, transport stretchers, stair chairs, evacuation chairs, and ambulance equipment',
      productCount: '9 product groups'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Durable Medical Equipment | Hospital Beds & Patient Monitoring Africa | Pacem Health"
        description="Durable medical equipment for African healthcare facilities. Hospital beds, wheelchairs, patient monitoring, respiratory equipment, medical furniture, and transport devices. Build resilient healthcare infrastructure."
        keywords={[
          'durable medical equipment Africa',
          'hospital beds Africa',
          'patient monitoring equipment',
          'wheelchairs mobility aids',
          'respiratory equipment',
          'medical furniture Africa',
          'healthcare equipment Africa'
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
            <span>Durable Medical Equipment</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Essential Healthcare Products</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Durable Medical Equipment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive durable medical equipment solutions including hospital beds, wheelchairs, mobility aids, examination tables, patient lifts, therapeutic equipment, and medical carts. Quality patient room equipment and rehabilitation devices supporting patient care, safety, and recovery across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Subcategory</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of durable medical equipment and patient care solutions
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

      {/* Key Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">DME Excellence for Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Durable medical equipment supporting patient care, rehabilitation, and healthcare delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🛏️</div>
              <h3 className="text-xl mb-2">Patient Care Infrastructure</h3>
              <p className="text-gray-700">
                Hospital beds, examination tables, and patient room furniture creating safe, comfortable care environments from district hospitals to tertiary referral centers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">♿</div>
              <h3 className="text-xl mb-2">Mobility & Independence</h3>
              <p className="text-gray-700">
                Wheelchairs, walkers, and mobility aids enabling patient independence, discharge readiness, and community reintegration after illness or injury.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💪</div>
              <h3 className="text-xl mb-2">Rehabilitation Solutions</h3>
              <p className="text-gray-700">
                Therapeutic equipment and rehabilitation devices supporting physical therapy, occupational therapy, and patient recovery programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DME Considerations Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">DME Selection for African Healthcare</h3>
              <p className="text-gray-700 mb-4">
                Durable medical equipment must be robust, maintainable, and appropriate for resource settings.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Durability and longevity (high patient volumes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Easy maintenance and cleaning protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Spare parts availability and local repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Manual options (power unreliable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Weight capacity for diverse patient populations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cost-effectiveness and budget constraints</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Lifecycle Support Services</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive DME support ensuring equipment longevity and patient safety.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Equipment installation and commissioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Staff training on proper use and safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Preventive maintenance programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Repair and refurbishment services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Replacement parts inventory management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Equipment tracking and asset management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Safety Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Patient Safety & Quality Care</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              DME plays a critical role in preventing patient harm and ensuring quality outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Fall Prevention</h4>
              <p className="text-sm text-gray-700">Proper bed rails, transfer aids, and mobility devices reduce patient falls</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🩹</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Pressure Ulcer Prevention</h4>
              <p className="text-sm text-gray-700">Quality mattresses and repositioning equipment prevent pressure injuries</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">💪</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Staff Safety</h4>
              <p className="text-sm text-gray-700">Patient lifts and transfer devices prevent healthcare worker injuries</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Infection Control</h4>
              <p className="text-sm text-gray-700">Cleanable surfaces and proper equipment hygiene reduce HAIs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Ready to Upgrade Your Patient Care Equipment?</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Connect with our equipment specialists to design the right DME solution for your facility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/request-equipment-quote')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Request Equipment Quote
              </button>
              <button
                onClick={() => navigate('/support/request-equipment-demo')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Schedule Equipment Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
