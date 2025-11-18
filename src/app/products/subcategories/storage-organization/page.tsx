import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function StorageOrganizationPage() {
  const navigate = useNavigate();

  const productGroups = [
    {
      name: 'Pharmacy Shelving Systems',
      description: 'Modular pharmaceutical shelving units designed for efficient product storage, easy access, and optimal space utilization. Adjustable shelves accommodate different product sizes, clear labeling systems, and color-coding for product categories',
      applications: ['Retail pharmacies', 'Hospital dispensaries', 'Central medical stores', 'Health center pharmacies']
    },
    {
      name: 'Refrigerated Storage Units',
      description: 'Temperature-controlled cold chain equipment for vaccines, insulin, biologics, and temperature-sensitive medications. Includes vaccine refrigerators, pharmacy-grade cold rooms, portable coolers, and temperature monitoring systems',
      applications: ['Vaccine storage', 'Insulin storage', 'Biologics', 'Temperature-sensitive medications']
    },
    {
      name: 'Controlled Substance Safes',
      description: 'Secure storage solutions for narcotics, psychotropics, and high-value medications. Heavy-duty safes with access control systems, audit trails, dual-key mechanisms, and regulatory compliance features for Schedule II-IV medications',
      applications: ['Narcotic storage', 'Controlled drugs', 'High-value medications', 'Psychotropic substances']
    },
    {
      name: 'Automated Dispensing Cabinets',
      description: 'Computerized medication storage and dispensing systems that control access, track usage, prevent diversion, and integrate with pharmacy management software. Password-protected, with biometric options and real-time inventory updates',
      applications: ['Hospital wards', 'Emergency departments', 'Operating theaters', 'ICU medication storage']
    }
  ];

  const keyFeatures = [
    {
      title: 'FEFO/FIFO Organization',
      description: 'Shelving configured to facilitate First-Expired-First-Out (FEFO) or First-In-First-Out (FIFO) stock rotation, minimizing expiry waste',
      icon: '🔄'
    },
    {
      title: 'Temperature Monitoring',
      description: 'Digital temperature loggers, alarms, and real-time monitoring for cold chain storage with SMS/email alerts for temperature excursions',
      icon: '🌡️'
    },
    {
      title: 'Access Control',
      description: 'Biometric locks, PIN codes, smart cards, and audit trails ensuring only authorized personnel access controlled substances',
      icon: '🔐'
    },
    {
      title: 'Space Optimization',
      description: 'Maximize storage capacity in limited space through vertical storage, compact mobile shelving, and efficient layout design',
      icon: '📦'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Breadcrumb Bar */}
      <section className="bg-[#4B2991] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/division2" className="hover:underline">Pharmacy Services</Link>
            <span>/</span>
            <Link to="/products/categories/inventory-management-systems" className="hover:underline">Inventory Management Systems</Link>
            <span>/</span>
            <span>Storage & Organization</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Inventory Management Systems</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Storage & Organization Solutions
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Professional pharmaceutical storage infrastructure ensuring proper medication organization, security, and environmental control. From modular shelving systems and temperature-controlled cold chain storage to controlled substance safes and automated dispensing cabinets, these solutions address the unique storage challenges of African pharmacy settings where space constraints, temperature extremes, security concerns, and regulatory requirements demand specialized storage solutions that protect product integrity and ensure patient safety.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Solution Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl">
              Comprehensive storage infrastructure for pharmaceutical inventory management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {productGroups.map((group, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-lg transition-all">
                <h3 className="text-xl mb-3">{group.name}</h3>
                <p className="text-gray-700 mb-4">{group.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Key Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {group.applications.map((app, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Key Features & Capabilities</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced storage technologies that protect pharmaceutical inventory
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Challenges */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Pharmacy Storage Challenges in Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Poor storage infrastructure compromises medication quality and pharmacy operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🌡️</div>
              <h3 className="text-xl mb-2">Temperature Control</h3>
              <p className="text-gray-700">
                High ambient temperatures (30-40°C) and unreliable electricity make cold chain maintenance challenging. Many vaccines and temperature-sensitive medications are stored improperly, compromising efficacy. Solar-powered refrigerators and backup systems are essential.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl mb-2">Security & Theft</h3>
              <p className="text-gray-700">
                High-value medications and controlled substances are targets for theft. Basic locks are inadequate. Pharmacies need robust safes, access control systems, and surveillance to prevent internal and external theft, particularly for narcotics and ARVs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl mb-2">Space Constraints</h3>
              <p className="text-gray-700">
                Limited pharmacy space requires efficient vertical storage and organization. Poor shelving leads to products being stored on floors or in disorganized piles, making stock management impossible and increasing expiry risk. Modular systems optimize limited space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Benefits */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl mb-4">Professional Storage Standards</h3>
              <div className="space-y-4 text-white/90">
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>✓ WHO Storage Guidelines</p>
                  <p className="text-sm">Compliance with international pharmaceutical storage standards for temperature, humidity, light protection, and product segregation</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>✓ Cold Chain Integrity</p>
                  <p className="text-sm">Maintain vaccines and biologics at 2-8°C with backup power, temperature monitoring, and alarm systems</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>✓ Controlled Substance Security</p>
                  <p className="text-sm">Meet regulatory requirements for narcotic storage with dual locks, access logs, and inventory reconciliation</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>✓ Good Storage Practices</p>
                  <p className="text-sm">Proper separation of medications from cleaning supplies, chemicals, and food items</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">Benefits of Modern Storage</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>80% Reduction in Product Damage</span>
                    <span className="text-sm text-gray-600">Proper storage prevents heat exposure, moisture, and physical damage</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>60% Faster Product Location</span>
                    <span className="text-sm text-gray-600">Organized shelving reduces time spent searching for medications</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>95% Reduction in Controlled Substance Discrepancies</span>
                    <span className="text-sm text-gray-600">Automated dispensing cabinets virtually eliminate narcotic diversion</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>100% Vaccine Potency Protection</span>
                    <span className="text-sm text-gray-600">Temperature monitoring ensures cold chain integrity</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Real-World Applications</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              How modern storage transforms pharmacy operations across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg mb-2">District Hospital Pharmacy</h3>
              <p className="text-sm text-gray-700">
                300-bed hospital installs modular shelving system for 1,200 SKUs, walk-in cold room for vaccines, and controlled substance safe for narcotics. Product accessibility improves 70%, expiry waste drops 50%, and zero cold chain breaches recorded in 18 months.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-lg mb-2">Community Pharmacy</h3>
              <p className="text-sm text-gray-700">
                Independent pharmacy implements color-coded shelving, medical-grade refrigerator with SMS alerts, and wall-mounted controlled substance safe. Customer waiting times reduce by 40% as staff locate medications faster. Temperature excursions caught and corrected within minutes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-lg mb-2">Regional Medical Store</h3>
              <p className="text-sm text-gray-700">
                Regional distribution center serving 50 health facilities installs 2,000 sq ft of industrial pharmacy shelving with mobile compactor systems, three walk-in cold rooms, and automated dispensing cabinets for high-value items. Storage capacity doubles without expanding building footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Upgrade Your Pharmacy Storage</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Implement professional storage and organization solutions for your pharmacy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/request-equipment-quote')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                Request Storage Quote
              </button>
              <button
                onClick={() => navigate('/support/request-equipment-demo')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Schedule Site Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
