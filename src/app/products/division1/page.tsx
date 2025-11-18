import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';

export default function Division1Page() {
  const [expandedCategory, setExpandedCategory] = useState<string>('main');

  const sidebarCategories = [
    'Anesthesia Supplies & Products',
    'Durable Medical Equipment',
    'Enteral Feeding Tubes and Devices',
    'Gloves',
    'Infection Control',
    'Lab Supplies and Equipment',
    'OEM Medical Specialty Products',
    'Patient Care',
    'Patient Monitoring',
    'Personal Protective Equipment (PPE)',
    'Presource® Procedural Packs and Solutions',
    'Skin and Wound Management',
    'Surgical Supplies and Equipment',
    'VTE Prevention Solutions',
    'Woman and Baby',
    'Overview'
  ];

  const productCategories = [
    {
      name: 'Anesthesia Supplies & Products',
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop'
    },
    {
      name: 'Durable Medical Equipment',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop'
    },
    {
      name: 'Enteral Feeding Tubes and Devices',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop'
    },
    {
      name: 'Gloves',
      image: 'https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400&h=300&fit=crop'
    },
    {
      name: 'Infection Control',
      image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=300&fit=crop'
    },
    {
      name: 'Lab Supplies and Equipment',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop'
    },
    {
      name: 'OEM Medical Specialty Products',
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop'
    },
    {
      name: 'Patient Care',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop'
    },
    {
      name: 'Patient Monitoring',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop'
    },
    {
      name: 'Personal Protective Equipment (PPE)',
      image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=300&fit=crop'
    },
    {
      name: 'Presource® Procedural Packs and Solutions',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop'
    },
    {
      name: 'Skin and Wound Management',
      image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=300&fit=crop'
    },
    {
      name: 'Surgical Supplies and Equipment',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=300&fit=crop'
    },
    {
      name: 'VTE Prevention Solutions',
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop'
    },
    {
      name: 'Woman and Baby',
      image: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Breadcrumb Bar - Cardinal Health Style */}
      <section className="bg-[#4B2991] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Professional products</Link>
            <span>/</span>
            <span>Essential healthcare products</span>
          </div>
        </div>
      </section>

      {/* Page Title and Description */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">
            Essential Healthcare Products
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
            Our essential healthcare products bridge the gap between the constant need for quality and the increasing demand for accessible care. Our comprehensive portfolio includes pharmaceuticals, medical supplies, laboratory equipment, and specialized devices, helping healthcare providers improve the bottom line while delivering high-quality care. Because we work from acute facilities to community health centers, we're uniquely positioned to strengthen healthcare systems across Africa.
          </p>
        </div>
      </section>

      {/* Main Content with Sticky Sidebar */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[240px_1fr] gap-8">
            {/* Left Sidebar - Sticky */}
            <aside>
              <div className="sticky top-4">
                <h2 className="text-xs text-[#DC3545] mb-4 uppercase tracking-wide">Professional products</h2>
                <nav>
                  {/* Main Category - Expandable */}
                  <div className="mb-4">
                    <button
                      onClick={() => setExpandedCategory(expandedCategory === 'main' ? '' : 'main')}
                      className="w-full text-left py-2 text-sm flex items-center justify-between text-[#DC3545] hover:underline"
                    >
                      <span>Essential healthcare products</span>
                      {expandedCategory === 'main' ? (
                        <ChevronDown className="h-4 w-4 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="h-4 w-4 flex-shrink-0" />
                      )}
                    </button>
                    
                    {/* Subcategories - shown when expanded */}
                    {expandedCategory === 'main' && (
                      <div className="mt-2 space-y-0">
                        {sidebarCategories.map((category) => (
                          <Link
                            key={category}
                            to="#"
                            className="block py-2 text-sm text-gray-700 hover:text-[#4B2991] transition-colors pl-0"
                          >
                            {category} »
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Other Top-level Categories */}
                  <div className="space-y-2 pt-2 border-t border-gray-200">
                    <Link to="#" className="block py-2 text-sm text-gray-700 hover:text-[#DC3545] hover:underline">
                      Pharmaceutical products »
                    </Link>
                    <Link to="#" className="block py-2 text-sm text-gray-700 hover:text-[#DC3545] hover:underline">
                      Overview »
                    </Link>
                  </div>
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main>
              <h2 className="text-2xl mb-6">Professional products</h2>
              
              {/* Product Category Cards Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {productCategories.map((product) => (
                  <Link
                    key={product.name}
                    to="#"
                    className="group border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm group-hover:text-[#4B2991] transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Featured Solutions Section - Like Cardinal Health */}
              <div className="border border-gray-200 rounded-lg p-8 mb-6 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=200&h=200&fit=crop"
                      alt="PPE Solutions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Pacem Health PPE Solutions</h3>
                  <p className="text-gray-700 mb-4">
                    Quality head-to-toe PPE solutions allow you to have peace of mind to confidently focus on the task at hand.
                  </p>
                  <Link to="#" className="text-[#DC3545] hover:underline">
                    Discover our PPE product solutions »
                  </Link>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-8 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=200&fit=crop"
                      alt="National Brand Products"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Featured National Brand Products</h3>
                  <p className="text-gray-700 mb-4">
                    Along with our Pacem Health suite of products, our comprehensive offering of featured national brand supplier products helps us to deliver the clinically relevant, cost effective, and supply-chain efficient products you need to best serve patients.
                  </p>
                  <Link to="#" className="text-[#DC3545] hover:underline">
                    Learn more about our product offerings »
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Featured Products & Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Featured Products & Services</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of essential healthcare products organized by category
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Medical Consumables */}
            <Link
              to="/products/categories/medical-consumables"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-3">💉</div>
              <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                Medical Consumables
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Injection & infusion, wound care, PPE, laboratory consumables, and essential medical supplies
              </p>
              <span className="text-sm text-[#4B2991] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                Browse category →
              </span>
            </Link>

            {/* Surgical & Procedural Supplies */}
            <Link
              to="/products/categories/surgical-procedural-supplies"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-3">🔪</div>
              <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                Surgical & Procedural Supplies
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Surgical instruments, operating room supplies, procedural packs, and specialty surgical equipment
              </p>
              <span className="text-sm text-[#4B2991] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                Browse category →
              </span>
            </Link>

            {/* Diagnostic Equipment & Supplies */}
            <Link
              to="/products/categories/diagnostic-equipment-supplies"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                Diagnostic Equipment & Supplies
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Point-of-care testing, laboratory equipment, diagnostic imaging, and clinical analyzers
              </p>
              <span className="text-sm text-[#4B2991] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                Browse category →
              </span>
            </Link>

            {/* Durable Medical Equipment */}
            <Link
              to="/products/categories/durable-medical-equipment"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-3">🛏️</div>
              <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                Durable Medical Equipment
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Hospital beds, wheelchairs, examination tables, patient monitoring, and therapeutic equipment
              </p>
              <span className="text-sm text-[#4B2991] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                Browse category →
              </span>
            </Link>

            {/* Laboratory Equipment & Instrumentation */}
            <Link
              to="/products/categories/laboratory-equipment-instrumentation"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-3">🧬</div>
              <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                Laboratory Equipment & Instrumentation
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Lab analyzers, microscopes, centrifuges, incubators, autoclaves, and laboratory infrastructure
              </p>
              <span className="text-sm text-[#4B2991] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                Browse category →
              </span>
            </Link>

            {/* Laboratory Reagents & Chemicals */}
            <Link
              to="/products/categories/laboratory-reagents-chemicals"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-3">🧪</div>
              <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                Laboratory Reagents & Chemicals
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Clinical chemistry reagents, microbiology media, immunoassays, molecular diagnostics, and lab chemicals
              </p>
              <span className="text-sm text-[#4B2991] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                Browse category →
              </span>
            </Link>

            {/* Educational & Training Supplies */}
            <Link
              to="/products/categories/educational-training-supplies"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                Educational & Training Supplies
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Nursing skills trainers, anatomical models, medical simulation, laboratory education, and training materials
              </p>
              <span className="text-sm text-[#4B2991] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                Browse category →
              </span>
            </Link>

            {/* Research & Development Equipment */}
            <Link
              to="/products/categories/research-development-equipment"
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                Research & Development Equipment
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Advanced analytical instruments, biotechnology systems, environmental research, infectious disease, and clinical trials
              </p>
              <span className="text-sm text-[#4B2991] group-hover:translate-x-1 inline-flex items-center gap-1 transition-transform">
                Browse category →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
