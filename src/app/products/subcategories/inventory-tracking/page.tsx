import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function InventoryTrackingPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Inventory Tracking & Management Services",
    "description": "Barcode scanning, RFID tracking, expiry management, lot tracking for pharmacy inventory management across Africa",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      name: 'Barcode Scanning Systems',
      description: 'Handheld and fixed barcode scanners for rapid product identification, receiving, dispensing, and inventory counting. Includes barcode printers for labeling, mobile scanning apps, and integration with pharmacy management systems for real-time stock updates',
      applications: ['Product receiving', 'Point-of-sale scanning', 'Stock taking', 'Prescription verification']
    },
    {
      name: 'RFID Tracking Solutions',
      description: 'Radio-frequency identification technology for automated inventory tracking without line-of-sight scanning. RFID tags, readers, and antennas enable instant stock counts, anti-theft systems, and location tracking for high-value medications and controlled substances',
      applications: ['High-value medications', 'Controlled substances', 'Automated inventory', 'Asset tracking']
    },
    {
      name: 'Expiry Date Management',
      description: 'Software systems that track expiration dates for every batch and lot, automatically flag products approaching expiry, prioritize dispensing of short-dated stock (FEFO), and generate reports for regulatory compliance and waste reduction',
      applications: ['Expiry monitoring', 'FEFO management', 'Waste prevention', 'Regulatory compliance']
    },
    {
      name: 'Lot Number Tracking',
      description: 'Comprehensive lot and batch tracking systems for pharmaceutical traceability from manufacturer to patient. Critical for product recalls, adverse event reporting, quality investigations, and meeting regulatory requirements for controlled substances',
      applications: ['Product recalls', 'Adverse event tracking', 'Quality assurance', 'Regulatory audits']
    }
  ];

  const keyFeatures = [
    {
      title: 'Real-Time Stock Visibility',
      description: 'Instant visibility into current stock levels, locations, and movements across multiple storage areas, dispensing points, and pharmacy branches',
      icon: '👁️'
    },
    {
      title: 'Automated Stock Counts',
      description: 'RFID technology enables continuous inventory counting without manual effort, eliminating discrepancies between physical and system stock',
      icon: '📊'
    },
    {
      title: 'Expiry Alerts',
      description: 'Automated SMS, email, and in-system alerts when products approach expiry (30, 60, 90 days), enabling proactive action to minimize waste',
      icon: '⏰'
    },
    {
      title: 'Traceability & Compliance',
      description: 'Complete chain of custody tracking for controlled substances, vaccines, and high-risk medications meeting regulatory audit requirements',
      icon: '📋'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Inventory Tracking & Management Services | Pharmacy Technology | Pacem Health"
        description="Inventory tracking and management services including barcode scanning, RFID tracking, expiry management, lot tracking. Modern pharmacy inventory solutions for African facilities."
        keywords={[
          'inventory tracking Africa',
          'pharmacy inventory management',
          'barcode scanning pharmacy',
          'RFID tracking',
          'expiry date management',
          'lot tracking systems',
          'pharmacy technology Africa',
          'inventory management systems'
        ]}
        structuredData={productSchema}
      />
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
            <span>Inventory Tracking</span>
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
              Inventory Tracking Technologies
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Advanced pharmaceutical tracking solutions providing complete visibility and traceability throughout the supply chain. From barcode scanning systems and RFID technology to expiry date monitoring and lot number tracking, these tools eliminate manual record-keeping errors, prevent medication expiry waste, enable rapid product recalls, and ensure regulatory compliance. Essential for African pharmacies managing thousands of products with limited staffing, where manual tracking is impossible and accountability gaps create risks for both patient safety and business viability.
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
              Comprehensive tracking technologies for pharmaceutical inventory control
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
              Advanced technologies that transform pharmaceutical inventory control
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

      {/* Tracking Challenges */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Inventory Tracking Challenges</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Poor tracking undermines pharmacy operations and patient safety
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl mb-2">Manual Record-Keeping</h3>
              <p className="text-gray-700">
                Paper-based stock cards and bin cards are time-consuming, error-prone, and impossible to maintain accurately for thousands of products. Staff spend hours on manual counts instead of patient care. Discrepancies between physical stock and records are common.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-xl mb-2">Expiry Tracking Failures</h3>
              <p className="text-gray-700">
                Without automated expiry monitoring, products expire on shelves unnoticed. Visual inspection of expiry dates during dispensing is unreliable. Result: 10-20% of inventory value lost to expiry, financial losses for pharmacies with thin margins, and risk of dispensing expired medications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🚨</div>
              <h3 className="text-xl mb-2">Product Recall Challenges</h3>
              <p className="text-gray-700">
                When manufacturers issue recalls, pharmacies without lot tracking cannot identify affected products. Manual search through thousands of items is impractical. Delays in removing recalled products create patient safety risks and regulatory penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Comparison */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Barcode vs RFID Technology</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the tracking technology options for your pharmacy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">📱</div>
                <h3 className="text-2xl">Barcode Scanning</h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Lower implementation cost (1/10th of RFID)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Widely adopted globally, mature technology</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Works with existing product packaging</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Suitable for most pharmacy operations</span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p><span style={{ fontWeight: 600 }}>Best For:</span> Community pharmacies, health center dispensaries, outpatient pharmacies, small-medium operations</p>
                <p><span style={{ fontWeight: 600 }}>Limitation:</span> Requires line-of-sight scanning, item-by-item processing</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">📡</div>
                <h3 className="text-2xl">RFID Technology</h3>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Scan entire shelf/room in seconds without line-of-sight</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Real-time location tracking and movement detection</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Anti-theft systems and automated stock counts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Eliminates 95% of manual inventory work</span>
                </div>
              </div>
              <div className="space-y-2 text-sm text-white/90">
                <p><span style={{ fontWeight: 600 }}>Best For:</span> Large hospital pharmacies, central medical stores, high-value medications, controlled substances</p>
                <p><span style={{ fontWeight: 600 }}>Consideration:</span> Higher upfront cost, requires RFID-tagged products or re-tagging</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Benefits */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">Impact of Tracking Technology</h2>
              <p className="text-gray-700 mb-6">
                Automated tracking transforms pharmacy operations by eliminating manual processes, reducing errors, and providing real-time visibility.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>99.9% Inventory Accuracy</span>
                    <span className="text-sm text-gray-600">Barcode/RFID scanning eliminates counting errors</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>75% Reduction in Expiry Waste</span>
                    <span className="text-sm text-gray-600">Automated alerts enable proactive management of short-dated stock</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>90% Faster Stock Counts</span>
                    <span className="text-sm text-gray-600">Complete inventory in hours instead of days</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Instant Product Recalls</span>
                    <span className="text-sm text-gray-600">Identify and remove affected lots within minutes</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Regulatory Compliance Benefits</h3>
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-[#4B2991]" style={{ fontWeight: 600 }}>🔍 Controlled Substance Tracking</p>
                  <p className="text-sm text-gray-700">Complete audit trail for narcotics and psychotropics with lot numbers, expiry dates, and chain of custody from receiving to dispensing. Meets pharmacy board requirements.</p>
                </div>
                <div>
                  <p className="mb-2 text-[#4B2991]" style={{ fontWeight: 600 }}>💉 Vaccine Traceability</p>
                  <p className="text-sm text-gray-700">Track vaccine lots, storage conditions, and administration records for EPI program reporting and adverse event investigations.</p>
                </div>
                <div>
                  <p className="mb-2 text-[#4B2991]" style={{ fontWeight: 600 }}>📋 GMP/GDP Documentation</p>
                  <p className="text-sm text-gray-700">Automated record-keeping for Good Manufacturing Practices and Good Distribution Practices compliance, simplifying regulatory inspections.</p>
                </div>
                <div>
                  <p className="mb-2 text-[#4B2991]" style={{ fontWeight: 600 }}>🏛️ NMRA Requirements</p>
                  <p className="text-sm text-gray-700">Meet national medicines regulatory authority requirements for inventory records, expiry tracking, and product recall capabilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Real-World Applications</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              How tracking technology transforms pharmacy operations across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg mb-2">Hospital Pharmacy Transformation</h3>
              <p className="text-sm text-gray-700">
                600-bed teaching hospital implements barcode scanning for all medication transactions. Stock count time drops from 5 days to 8 hours. Expiry waste reduces 80% through automated FEFO management. Narcotic discrepancies eliminated with complete lot tracking for controlled substances.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-lg mb-2">Community Pharmacy Network</h3>
              <p className="text-sm text-gray-700">
                Pharmacy chain with 8 locations deploys mobile barcode scanning and cloud-based expiry tracking. Staff scan products during receiving, transferring between branches, and dispensing. Real-time visibility enables redistribution of short-dated stock, reducing expiry waste by 65% across network.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-lg mb-2">National Medical Stores</h3>
              <p className="text-sm text-gray-700">
                National pharmaceutical procurement agency implements RFID for high-value items (ARVs, cancer medications, biologics). Automated stock counts enable monthly inventory reconciliation instead of annual. Theft drops 90% through real-time movement alerts. Product recall time reduces from weeks to hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Implement Tracking Technology</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Transform your inventory management with modern tracking solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/request-equipment-quote')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                Request Tracking System Quote
              </button>
              <button
                onClick={() => navigate('/support/request-equipment-demo')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}