import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';

export default function Division3Page() {
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState<string>('main');

  const sidebarCategories = [
    'Preventive Care Products',
    'Maternal & Child Health',
    'Nutrition & Supplements',
    'Health Education & Awareness',
    'Emergency Response & Disaster Relief',
    'Water, Sanitation & Hygiene'
  ];

  const productCategories = [
    {
      name: 'Preventive Care Products',
      description: 'Vaccination & immunization, health screening, disease prevention',
      icon: '💉',
      route: '/products/categories/preventive-care-products',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop'
    },
    {
      name: 'Maternal & Child Health',
      description: 'Prenatal care, delivery & postnatal care, child health & nutrition',
      icon: '🤱',
      route: '/products/categories/maternal-child-health',
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop'
    },
    {
      name: 'Nutrition & Supplements',
      description: 'Therapeutic foods, vitamins & minerals, special dietary products',
      icon: '🥗',
      route: '/products/categories/nutrition-supplements',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop'
    },
    {
      name: 'Health Education & Awareness',
      description: 'Educational materials, behavior change communication, training & capacity building',
      icon: '📚',
      route: '/products/categories/health-education-awareness',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop'
    },
    {
      name: 'Emergency Response & Disaster Relief',
      description: 'Emergency medical supplies, disaster preparedness, outbreak response',
      icon: '🚨',
      route: '/products/categories/emergency-response-disaster-relief',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop'
    },
    {
      name: 'Water, Sanitation & Hygiene',
      description: 'Water quality & treatment, sanitation supplies, hygiene promotion',
      icon: '💧',
      route: '/products/categories/water-sanitation-hygiene',
      image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      {/* Breadcrumb Bar */}
      <section className="bg-[#4B2991] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Professional products</Link>
            <span>/</span>
            <span>Community health solutions</span>
          </div>
        </div>
      </section>

      {/* Page Title and Description */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">
            Community Health Solutions
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
            Supporting public health initiatives, NGOs, and community programs with comprehensive preventive care products, maternal and child health supplies, health screening kits, and wellness solutions designed for community impact. Our community health solutions empower organizations to deliver sustainable health interventions that strengthen primary healthcare, improve health outcomes, and build healthier communities across Africa.
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
                      <span>Community health solutions</span>
                      {expandedCategory === 'main' ? (
                        <ChevronDown className="h-4 w-4 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="h-4 w-4 flex-shrink-0" />
                      )}
                    </button>
                    
                    {/* Subcategories - shown when expanded */}
                    {expandedCategory === 'main' && (
                      <div className="mt-2 space-y-0">
                        <Link to="/products/categories/preventive-care-products" className="block py-2 text-sm text-gray-700 hover:text-[#4B2991] transition-colors pl-0">
                          Preventive Care Products »
                        </Link>
                        <Link to="/products/categories/maternal-child-health" className="block py-2 text-sm text-gray-700 hover:text-[#4B2991] transition-colors pl-0">
                          Maternal & Child Health »
                        </Link>
                        <Link to="/products/categories/nutrition-supplements" className="block py-2 text-sm text-gray-700 hover:text-[#4B2991] transition-colors pl-0">
                          Nutrition & Supplements »
                        </Link>
                        <Link to="/products/categories/health-education-awareness" className="block py-2 text-sm text-gray-700 hover:text-[#4B2991] transition-colors pl-0">
                          Health Education & Awareness »
                        </Link>
                        <Link to="/products/categories/emergency-response-disaster-relief" className="block py-2 text-sm text-gray-700 hover:text-[#4B2991] transition-colors pl-0">
                          Emergency Response & Disaster Relief »
                        </Link>
                        <Link to="/products/categories/water-sanitation-hygiene" className="block py-2 text-sm text-gray-700 hover:text-[#4B2991] transition-colors pl-0">
                          Water, Sanitation & Hygiene »
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  {/* Other Top-level Categories */}
                  <div className="space-y-2 pt-2 border-t border-gray-200">
                    <Link to="/products/division1" className="block py-2 text-sm text-gray-700 hover:text-[#DC3545] hover:underline">
                      Essential healthcare products »
                    </Link>
                    <Link to="/products/division2" className="block py-2 text-sm text-gray-700 hover:text-[#DC3545] hover:underline">
                      Pharmacy services »
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {productCategories.map((product) => (
                  <button
                    key={product.name}
                    onClick={() => navigate(product.route)}
                    className="group border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all text-left"
                  >
                    <div className="text-4xl mb-3">{product.icon}</div>
                    <h3 className="text-lg mb-2 group-hover:text-[#4B2991] transition-colors" style={{ fontWeight: 600 }}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {product.description}
                    </p>
                  </button>
                ))}
              </div>

              {/* Featured Solutions Section */}
              <div className="border border-gray-200 rounded-lg p-8 mb-6 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=200&h=200&fit=crop"
                      alt="Maternal and Child Health"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Maternal & Child Health Programs</h3>
                  <p className="text-gray-700 mb-4">
                    Comprehensive maternal and child health solutions including prenatal care supplies, delivery kits, pediatric nutrition products, and child development screening tools designed to reduce maternal and infant mortality across African communities.
                  </p>
                  <Link to="#" className="text-[#DC3545] hover:underline">
                    Explore maternal and child health solutions »
                  </Link>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-8 mb-6 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=200&h=200&fit=crop"
                      alt="Preventive Care"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Preventive Care & Health Screening</h3>
                  <p className="text-gray-700 mb-4">
                    Early detection and prevention solutions including screening kits for common diseases, vaccination program support, health education materials, and community outreach tools to strengthen primary healthcare delivery.
                  </p>
                  <Link to="#" className="text-[#DC3545] hover:underline">
                    Discover preventive care solutions »
                  </Link>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-8 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=200&h=200&fit=crop"
                      alt="NGO Support"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">NGO & Public Health Program Support</h3>
                  <p className="text-gray-700 mb-4">
                    Tailored solutions for NGOs and public health organizations including mobile health solutions, community health worker equipment, health campaign materials, and program management tools for sustainable community health interventions.
                  </p>
                  <Link to="#" className="text-[#DC3545] hover:underline">
                    Learn about NGO support programs »
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
