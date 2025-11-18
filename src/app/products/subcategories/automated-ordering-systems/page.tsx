import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function AutomatedOrderingSystemsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Automated Ordering Systems",
    "description": "Automated inventory management and ordering systems for pharmaceutical supply chains across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      name: 'Perpetual Inventory Software',
      description: 'Real-time inventory tracking systems that automatically update stock levels with each transaction, providing instant visibility into current stock status, consumption patterns, and reorder needs',
      applications: ['Community pharmacies', 'Hospital pharmacies', 'Pharmacy chains', 'Clinic dispensaries']
    },
    {
      name: 'Automated Reorder Point Systems',
      description: 'Smart systems that automatically generate purchase orders when stock reaches predetermined minimum levels, calculate economic order quantities, and optimize reorder timing based on lead times and consumption patterns',
      applications: ['Essential medicines programs', 'Hospital central stores', 'Regional medical stores', 'Pharmacy procurement']
    },
    {
      name: 'Vendor Management Platforms',
      description: 'Digital platforms for managing multiple pharmaceutical suppliers, comparing pricing, tracking delivery performance, handling purchase orders, and maintaining supplier qualification records',
      applications: ['Multi-supplier pharmacies', 'Procurement departments', 'Pharmacy chains', 'Hospital purchasing']
    },
    {
      name: 'Stock Optimization Tools',
      description: 'Analytics-driven tools that forecast demand, identify fast vs. slow-moving items, optimize stock levels to minimize working capital, and reduce expiry waste through intelligent ordering recommendations',
      applications: ['Pharmacy inventory management', 'Supply chain optimization', 'Financial planning', 'Procurement strategy']
    }
  ];

  const keyFeatures = [
    {
      title: 'Demand Forecasting',
      description: 'AI-powered consumption analysis predicts future needs based on historical patterns, seasonal variations, disease outbreaks, and local health trends',
      icon: '📊'
    },
    {
      title: 'Multi-Supplier Integration',
      description: 'Connect directly to multiple pharmaceutical distributors and manufacturers for automated ordering, real-time pricing, and streamlined procurement',
      icon: '🔗'
    },
    {
      title: 'Mobile Ordering Apps',
      description: 'Order medications from suppliers using mobile phones even in areas with limited internet connectivity, with offline mode and sync capabilities',
      icon: '📱'
    },
    {
      title: 'Budget Controls',
      description: 'Set spending limits, approval workflows, and budget alerts to ensure procurement stays within available funds and prevents overstocking',
      icon: '💰'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Automated Ordering Systems | Pharmaceutical Inventory Management Software Africa | Pacem Health"
        description="Smart automated ordering and inventory management systems for pharmaceutical supply chains. Real-time tracking, automated reordering, vendor management platforms for hospitals and pharmacies across Africa."
        keywords={[
          'automated ordering system Africa',
          'pharmaceutical inventory software',
          'automated reordering system',
          'pharmacy inventory management',
          'vendor management platform',
          'hospital supply chain software',
          'inventory tracking system Africa',
          'pharmaceutical procurement software'
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
            <span>Automated Ordering Systems</span>
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
              Automated Ordering Systems
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Intelligent pharmaceutical procurement solutions that eliminate manual ordering, prevent stockouts through automated reorder triggers, optimize inventory levels with demand forecasting, and streamline vendor management. These systems address the chronic stockout crisis affecting African pharmacies by ensuring timely, data-driven procurement decisions that maintain continuous availability of essential medicines while minimizing excess inventory and working capital requirements.
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
              Comprehensive automated ordering technologies for modern pharmacy operations
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
              Advanced technologies that transform pharmaceutical procurement
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

      {/* Implementation Benefits */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">Why Automate Ordering?</h2>
              <p className="text-gray-700 mb-6">
                Manual ordering processes are slow, error-prone, and often result in stockouts or overstocking. Automated systems eliminate these inefficiencies while reducing staff workload.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>95% Reduction in Stockouts</span>
                    <span className="text-sm text-gray-600">Automated alerts prevent medicines from running out</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>70% Faster Ordering Process</span>
                    <span className="text-sm text-gray-600">Generate orders in minutes instead of hours</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>30% Lower Working Capital</span>
                    <span className="text-sm text-gray-600">Optimize stock levels to free up cash</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>50% Less Expired Stock</span>
                    <span className="text-sm text-gray-600">Better forecasting reduces overstocking</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl mb-4">African Context Challenges</h3>
              <div className="space-y-4 text-white/90">
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>🚚 Unreliable Supply Chains</p>
                  <p className="text-sm">Long and variable lead times from suppliers require buffer stock calculations and safety stock optimization</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>💸 Limited Working Capital</p>
                  <p className="text-sm">Pharmacies cannot afford to overstock, making accurate demand forecasting critical</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>📱 Mobile-First Solutions</p>
                  <p className="text-sm">Many pharmacists need to order via smartphone with intermittent connectivity</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>📈 Disease Seasonality</p>
                  <p className="text-sm">Malaria, flu, and other seasonal conditions require predictive ordering</p>
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
              How automated ordering transforms pharmacy operations across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg mb-2">Hospital Central Pharmacy</h3>
              <p className="text-sm text-gray-700">
                500-bed district hospital implements perpetual inventory system with automated reorder points for 800 essential medicines. Stockouts drop from 40% to {'<'}5%, while expiry waste reduces by 60%. System generates orders for 15 suppliers automatically.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-lg mb-2">Community Pharmacy Chain</h3>
              <p className="text-sm text-gray-700">
                Regional pharmacy chain with 12 locations uses centralized ordering platform to consolidate purchases, negotiate better pricing, and redistribute stock between branches. Working capital requirements drop 35% while product availability improves to 98%.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-lg mb-2">National ART Program</h3>
              <p className="text-sm text-gray-700">
                National HIV program serving 50,000 patients implements demand forecasting for antiretroviral medications. System accounts for patient adherence patterns, new enrollments, and regimen changes to optimize procurement timing and quantities, ensuring zero treatment interruptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Implement Automated Ordering</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Transform your pharmacy procurement with intelligent automated ordering systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/request-equipment-quote')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                Request System Quote
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
