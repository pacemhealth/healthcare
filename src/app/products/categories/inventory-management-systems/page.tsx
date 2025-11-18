import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function InventoryManagementSystemsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Inventory Management Systems",
    "description": "Automated ordering systems, storage solutions, and inventory tracking technology for pharmaceutical and medical supply management in Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'automated-ordering-systems',
      name: 'Automated Ordering Systems',
      description: 'Perpetual inventory software, automated reorder point systems, vendor management platforms, and stock optimization tools for efficient pharmaceutical procurement',
      productCount: '4 solution areas'
    },
    {
      id: 'storage-organization',
      name: 'Storage & Organization',
      description: 'Pharmacy shelving systems, refrigerated storage units, controlled substance safes, and automated dispensing cabinets for secure medication management',
      productCount: '4 solution areas'
    },
    {
      id: 'inventory-tracking',
      name: 'Inventory Tracking',
      description: 'Barcode scanning systems, RFID tracking solutions, expiry date management, and lot number tracking for full pharmaceutical traceability',
      productCount: '4 solution areas'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Inventory Management Systems | Automated Pharmacy Ordering Africa | Pacem Health"
        description="Advanced inventory management systems for African healthcare. Automated ordering, smart storage solutions, barcode tracking, RFID technology, and pharmaceutical inventory optimization. Reduce stockouts and wastage."
        keywords={[
          'inventory management systems Africa',
          'automated pharmacy ordering',
          'pharmaceutical inventory tracking',
          'barcode scanning healthcare',
          'RFID pharmacy',
          'inventory optimization Africa',
          'medical supply management'
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
            <Link to="/products/division2" className="hover:underline">Pharmacy Services</Link>
            <span>/</span>
            <span>Inventory Management Systems</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Pharmacy Operations & Management</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Inventory Management Systems
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive pharmacy inventory solutions including automated ordering systems, smart storage and organization infrastructure, and advanced tracking technologies. Modern inventory management tools addressing stockouts, expiry waste, and supply chain inefficiencies common in African pharmacy settings from community pharmacies to hospital central stores.
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
              Explore our complete range of inventory management solutions
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

      {/* Pharmacy Inventory Challenges Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Inventory Management Challenges in Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Poor inventory control undermines pharmaceutical access and pharmacy viability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📉</div>
              <h3 className="text-xl mb-2">Stockouts & Shortages</h3>
              <p className="text-gray-700">
                Frequent stockouts of essential medicines force patients to seek alternatives, interrupt treatment regimens, and erode trust in the healthcare system. Manual inventory systems fail to predict demand or trigger timely reorders.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💸</div>
              <h3 className="text-xl mb-2">Expiry & Waste</h3>
              <p className="text-gray-700">
                Expired medications represent significant financial losses for pharmacies with thin margins. Poor stock rotation (FEFO/FIFO), inadequate expiry tracking, and overstocking of slow-moving items drive waste up to 10-20% in some settings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-xl mb-2">Theft & Diversion</h3>
              <p className="text-gray-700">
                Inadequate tracking enables theft of high-value medications and controlled substances. Poor accountability for narcotics and psychotropics creates regulatory risks and potential diversion to illicit markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Solutions Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Traditional Inventory Methods</h3>
              <p className="text-gray-700 mb-4">
                Many African pharmacies still rely on paper-based or basic spreadsheet inventory systems.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Manual stock cards and bin cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Excel spreadsheets (prone to errors)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Physical stock counts (time-consuming)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>No real-time visibility into stock levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Reactive ordering (after stockouts occur)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited expiry date tracking</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Modern Inventory Systems</h3>
              <p className="text-gray-700 mb-4">
                Digital pharmacy management systems transform inventory control with automation and intelligence.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Real-time stock level visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Automated reorder point alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Barcode/RFID scanning for accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Expiry date tracking and alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Demand forecasting and analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Multi-location inventory management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Transform Your Pharmacy Inventory Management</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Connect with our pharmacy systems specialists to implement modern inventory solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/request-equipment-quote')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                Request Inventory System Quote
              </button>
              <button
                onClick={() => navigate('/support/request-equipment-demo')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Schedule System Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
