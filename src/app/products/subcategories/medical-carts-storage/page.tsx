import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function MedicalCartsStoragePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Medical Carts & Storage",
    "description": "Crash carts, medication carts, medical storage solutions, mobile equipment carts for healthcare facilities across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'crash-carts',
      name: 'Crash Carts & Emergency Carts',
      products: ['5-drawer crash carts', 'Anesthesia carts', 'Resuscitation carts', 'Locking crash carts', 'Pediatric crash carts'],
      icon: '🚨',
      description: 'Emergency resuscitation equipment'
    },
    {
      id: 'medication-carts',
      name: 'Medication Carts',
      products: ['Medication distribution carts', 'Locking medication carts', 'Unit-dose medication carts', 'Narcotic storage carts', 'Mobile pharmacy carts'],
      icon: '💊',
      description: 'Drug storage and dispensing'
    },
    {
      id: 'procedure-carts',
      name: 'Procedure & Treatment Carts',
      products: ['Procedure carts (multi-drawer)', 'Dressing carts', 'Isolation carts', 'Minor surgery carts', 'Wound care carts'],
      icon: '🏥',
      description: 'Procedural supply carts'
    },
    {
      id: 'anesthesia-carts',
      name: 'Anesthesia Carts',
      products: ['Anesthesia supply carts', 'Airway management carts', 'Intubation carts', 'Regional anesthesia carts', 'PACU carts'],
      icon: '😴',
      description: 'Anesthesia supply storage'
    },
    {
      id: 'isolation-carts',
      name: 'Isolation & Infection Control Carts',
      products: ['PPE storage carts', 'Isolation supply carts', 'Hand hygiene stations (mobile)', 'Biohazard waste carts', 'Spill kit carts'],
      icon: '🦠',
      description: 'Infection prevention supplies'
    },
    {
      id: 'computer-carts',
      name: 'Computer & Documentation Carts',
      products: ['Laptop carts (mobile workstations)', 'Tablet carts', 'Powered computer carts', 'Standing desk carts', 'Documentation carts'],
      icon: '💻',
      description: 'Mobile computing'
    },
    {
      id: 'iv-poles',
      name: 'IV Poles & Stands',
      products: ['Standard IV poles (4-hook)', '6-hook IV poles', 'Weighted base IV stands', 'Ceiling-mounted IV tracks', 'Mobile IV poles'],
      icon: '💉',
      description: 'Infusion equipment stands'
    },
    {
      id: 'instrument-carts',
      name: 'Instrument & Supply Carts',
      products: ['Stainless steel instrument carts', 'Utility carts (2-3 tier)', 'Wire basket carts', 'Linen carts', 'Cleaning supply carts'],
      icon: '🧰',
      description: 'General supply transport'
    },
    {
      id: 'laundry-carts',
      name: 'Linen & Laundry Carts',
      products: ['Soiled linen carts', 'Clean linen carts', 'Hamper carts', 'Laundry sorting carts', 'Canvas laundry bags'],
      icon: '🧺',
      description: 'Textile management'
    },
    {
      id: 'specialty-carts',
      name: 'Specialty Medical Carts',
      products: ['Dialysis carts', 'Ultrasound machine carts', 'EKG carts', 'Phlebotomy carts', 'X-ray film carts'],
      icon: '🔬',
      description: 'Equipment-specific carts'
    },
    {
      id: 'mobile-storage',
      name: 'Mobile Storage Solutions',
      products: ['Mobile supply cabinets', 'Rolling storage bins', 'Multi-drawer mobile units', 'Pegboard carts', 'Bin carts'],
      icon: '📦',
      description: 'Portable storage units'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Medical Carts & Storage | Hospital Storage Solutions | Pacem Health"
        description="Medical carts and storage including crash carts, medication carts, mobile equipment carts. Comprehensive hospital storage solutions for African healthcare facilities."
        keywords={[
          'medical carts Africa',
          'crash carts',
          'medication carts',
          'hospital storage',
          'medical storage solutions',
          'emergency carts',
          'mobile medical equipment',
          'healthcare storage'
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
            <span>Medical Carts & Storage Solutions</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Medical Carts & Storage Solutions
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Mobile medical storage including crash carts, medication carts, procedure carts, IV poles, and mobile storage units. Efficient, organized supply management solutions supporting clinical workflow and point-of-care delivery across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of medical carts and storage solutions</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Cart Organization Benefits</h3>
              <p className="text-gray-700 mb-4">
                Well-organized medical carts improve clinical workflow and patient safety.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Point-of-care supply availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reduced medication errors (organized storage)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Faster emergency response (crash carts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Infection control (proper isolation supplies)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Efficient restocking and inventory management</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Cart Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Regular cart maintenance ensures reliability and infection prevention.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Daily cleaning and disinfection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Wheel and caster maintenance (mobility)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Lock functionality checks (security)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular restocking schedules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Expiration date monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}