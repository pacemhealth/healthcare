import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';

export default function Division2Page() {
  const [expandedCategory, setExpandedCategory] = useState<string>('main');

  const sidebarCategories = [
    'Inventory Management Systems',
    'Automated Ordering Systems',
    'Storage & Organization Solutions',
    'Inventory Tracking Technologies',
    'Regulatory Compliance & Quality Assurance',
    'Licensing & Certification Support',
    'Quality Control Systems',
    'Good Pharmacy Practice (GPP)',
    'Technology Solutions',
    'Pharmacy Management Software',
    'Clinical Decision Support',
    'Digital Health Integration',
    'Clinical Services & Training',
    'Pharmacist Education',
    'Patient Care Services',
    'Pharmaceutical Care Programs',
    'Overview'
  ];

  const productCategories = [
    {
      name: 'Inventory Management Systems',
      description: 'Automated ordering, storage solutions, and tracking technologies',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop',
      link: '/products/categories/inventory-management-systems'
    },
    {
      name: 'Hospital & Clinical Pharmacy Services',
      description: 'Inpatient operations, disease programs, critical care pharmacy',
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop',
      link: '/products/categories/hospital-clinical-pharmacy-services'
    },
    {
      name: 'Technology Solutions',
      description: 'Pharmacy management software, clinical decision support, digital health integration',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      link: '/products/categories/technology-solutions'
    },
    {
      name: 'Regulatory Compliance & Quality Assurance',
      description: 'Licensing support, quality control systems, Good Pharmacy Practice',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop',
      link: '/products/categories/regulatory-compliance-quality-assurance'
    },
    {
      name: 'Clinical Services & Training',
      description: 'Pharmacist education, patient care services, pharmaceutical care',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&h=300&fit=crop',
      link: '/products/categories/clinical-services-training'
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
            <span>Pharmacy services</span>
          </div>
        </div>
      </section>

      {/* Page Title and Description */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl mb-4">
            Pharmacy Services & Solutions
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl leading-relaxed">
            We help pharmacies operate more efficiently through comprehensive inventory management solutions, regulatory compliance support, cold chain management, and clinical training programs tailored for the African market. Our pharmacy services strengthen pharmaceutical care delivery while ensuring quality, safety, and operational excellence across healthcare facilities from rural clinics to major hospitals.
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
                      <span>Pharmacy services & solutions</span>
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
                    <Link to="/products/division1" className="block py-2 text-sm text-gray-700 hover:text-[#DC3545] hover:underline">
                      Essential healthcare products »
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
              <h2 className="text-2xl mb-3">Pharmacy Operations & Management</h2>
              <p className="text-gray-600 mb-6">Browse all {productCategories.length} service categories below</p>
              
              {/* Product Category Cards Grid - ALL 5 CATEGORIES */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {productCategories.map((product) => (
                  <Link
                    key={product.name}
                    to={product.link}
                    className="group border-2 border-gray-200 rounded-lg overflow-hidden hover:border-[#4B2991] hover:shadow-xl transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="mb-2 group-hover:text-[#4B2991] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {product.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Featured Solutions Section */}
              <div className="border border-gray-200 rounded-lg p-8 mb-6 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=200&h=200&fit=crop"
                      alt="Pharmacy Management Solutions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Comprehensive Pharmacy Management</h3>
                  <p className="text-gray-700 mb-4">
                    Our integrated pharmacy management solutions combine inventory control, regulatory compliance, and clinical support to help you deliver exceptional pharmaceutical care while maintaining operational efficiency.
                  </p>
                  <Link to="#" className="text-[#DC3545] hover:underline">
                    Discover pharmacy management solutions »
                  </Link>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-8 flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                    <img 
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=200&h=200&fit=crop"
                      alt="Training and Education"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Clinical Training & Workforce Development</h3>
                  <p className="text-gray-700 mb-4">
                    Strengthen your pharmacy team with our comprehensive training programs covering clinical pharmacy practice, pharmaceutical care, and specialized therapy management tailored for African healthcare settings.
                  </p>
                  <Link to="#" className="text-[#DC3545] hover:underline">
                    Explore our training programs »
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
