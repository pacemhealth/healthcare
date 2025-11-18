import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function BrandedPatentedPharmaceuticalsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Branded & Patented Pharmaceuticals",
    "description": "Specialty medications, vaccines, and patented treatments for complex medical conditions across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'specialty-medications',
      name: 'Specialty Medications',
      description: 'Oncology treatments, biologics, and immunosuppressants for complex medical conditions',
      productCount: '9 product groups'
    },
    {
      id: 'vaccines',
      name: 'Vaccines',
      description: 'Routine immunization, specialized vaccines, and travel vaccines',
      productCount: '15 product groups'
    },
    {
      id: 'patented-ncd-treatments',
      name: 'Patented NCD Treatments',
      description: 'Advanced diabetes therapies, novel cardiovascular treatments, and respiratory medications',
      productCount: '8 product groups'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Branded & Patented Pharmaceuticals | Specialty Medications Africa | Pacem Health"
        description="Access to specialty medications, vaccines, and patented NCD treatments for African healthcare. Oncology, biologics, immunosuppressants, advanced diabetes and cardiovascular therapies. Quality branded pharmaceuticals with regulatory support."
        keywords={[
          'specialty medications Africa',
          'patented pharmaceuticals',
          'vaccines Africa',
          'oncology treatments Africa',
          'biologics Africa',
          'NCD patented treatments',
          'branded pharmaceuticals',
          'specialty pharma Africa'
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
            <span>Branded & Patented Pharmaceuticals</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-5xl mb-4">🏷️</div>
            <h1 className="text-4xl md:text-5xl mb-4">
              Branded & Patented Pharmaceuticals
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Advanced pharmaceutical solutions including specialty medications, vaccines, and patented NCD treatments. Our portfolio features innovative therapies from leading manufacturers designed to address complex health challenges across African healthcare systems.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl mb-4">Browse by Subcategory</h2>
            <p className="text-gray-600">Select a subcategory to view product groups and specific medications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => navigate(`/products/subcategories/${subcategory.id}`)}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 text-left hover:border-[#2563EB] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl group-hover:text-[#2563EB] transition-colors">
                    {subcategory.name}
                  </h3>
                  <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600 mb-4">{subcategory.description}</p>
                <div className="flex items-center gap-2 text-sm text-[#2563EB]">
                  <span>{subcategory.productCount}</span>
                  <span>→</span>
                </div>
              </button>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products')}
              className="text-[#2563EB] hover:underline"
            >
              ← Back to All Products
            </button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Why Choose Our Branded & Patented Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access to innovative therapies with comprehensive support services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Manufacturer Direct</h3>
              <p className="text-gray-600">
                Direct partnerships with leading pharmaceutical manufacturers ensure authenticity, quality, and optimal pricing for innovative medications.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Cold Chain Excellence</h3>
              <p className="text-gray-600">
                Temperature-controlled storage and distribution ensures vaccine potency and biologic stability throughout the supply chain.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Clinical Training</h3>
              <p className="text-gray-600">
                Specialized training programs for healthcare providers on proper administration, monitoring, and patient management protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">3</div>
              <div className="text-gray-600">Subcategories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">32+</div>
              <div className="text-gray-600">Product Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">150+</div>
              <div className="text-gray-600">Branded Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">25+</div>
              <div className="text-gray-600">Manufacturer Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Regulatory Compliance & Quality Assurance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All branded and patented products meet stringent international quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">✓</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>FDA Approved</h4>
              <p className="text-sm text-gray-600">US FDA stringent regulatory authority approval</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">✓</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>EMA Certified</h4>
              <p className="text-sm text-gray-600">European Medicines Agency certification</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">✓</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>WHO Prequalified</h4>
              <p className="text-sm text-gray-600">World Health Organization prequalification</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">✓</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>GMP Compliant</h4>
              <p className="text-sm text-gray-600">Good Manufacturing Practice standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Key Therapeutic Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage across critical disease areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#EBF8FF] p-8 rounded-xl">
              <div className="text-4xl mb-4">🎗️</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Oncology</h4>
              <p className="text-sm text-gray-700 mb-3">Advanced cancer therapies</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Chemotherapy agents</li>
                <li>• Targeted therapies</li>
                <li>• Immunotherapies</li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-8 rounded-xl">
              <div className="text-4xl mb-4">💉</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Immunology</h4>
              <p className="text-sm text-gray-700 mb-3">Vaccines and immunization</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Routine immunization</li>
                <li>• Specialized vaccines</li>
                <li>• Travel vaccines</li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-8 rounded-xl">
              <div className="text-4xl mb-4">🫀</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Cardio-Metabolic</h4>
              <p className="text-sm text-gray-700 mb-3">Advanced NCD treatments</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Novel diabetes therapies</li>
                <li>• Cardiovascular innovations</li>
                <li>• Respiratory medications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
