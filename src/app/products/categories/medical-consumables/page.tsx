import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function MedicalConsumablesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Medical Consumables",
    "description": "Injection supplies, wound care, diagnostic testing, personal protective equipment, and sterilization consumables for African healthcare",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'injection-infusion',
      name: 'Injection & Infusion Supplies',
      description: 'Syringes, needles, IV sets, infusion pumps, and safe injection equipment',
      productCount: '12 product groups'
    },
    {
      id: 'wound-care-dressings',
      name: 'Wound Care & Dressings',
      description: 'Advanced wound dressings, gauze, bandages, and healing solutions',
      productCount: '10 product groups'
    },
    {
      id: 'personal-protective-equipment',
      name: 'Personal Protective Equipment (PPE)',
      description: 'Gloves, masks, gowns, face shields for infection prevention',
      productCount: '8 product groups'
    },
    {
      id: 'laboratory-consumables',
      name: 'Laboratory Consumables',
      description: 'Test tubes, pipettes, specimen containers, and lab supplies',
      productCount: '11 product groups'
    },
    {
      id: 'surgical-consumables',
      name: 'Surgical Consumables',
      description: 'Sutures, blades, drapes, and operating room supplies',
      productCount: '9 product groups'
    },
    {
      id: 'respiratory-oxygen-therapy',
      name: 'Respiratory & Oxygen Therapy',
      description: 'Oxygen masks, nasal cannulas, nebulizers, and breathing circuits',
      productCount: '8 product groups'
    },
    {
      id: 'sterilization-disinfection',
      name: 'Sterilization & Disinfection',
      description: 'Sterilization indicators, disinfectants, and cleaning supplies',
      productCount: '7 product groups'
    },
    {
      id: 'maternal-child-health-consumables',
      name: 'Maternal & Child Health Consumables',
      description: 'Delivery kits, umbilical cord clamps, and neonatal supplies',
      productCount: '8 product groups'
    },
    {
      id: 'diagnostic-testing-supplies',
      name: 'Diagnostic Testing Supplies',
      description: 'Rapid tests, glucose monitors, pregnancy tests, and screening tools',
      productCount: '10 product groups'
    },
    {
      id: 'chronic-disease-management-consumables',
      name: 'Chronic Disease Management Consumables',
      description: 'Diabetes supplies, blood pressure cuffs, and home monitoring',
      productCount: '6 product groups'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Medical Consumables | Injection Supplies & Wound Care Africa | Pacem Health"
        description="Essential medical consumables for African healthcare. Injection supplies, wound care dressings, PPE, diagnostic testing supplies, surgical consumables, and sterilization products. Quality assured healthcare consumables."
        keywords={[
          'medical consumables Africa',
          'injection supplies',
          'wound care dressings',
          'PPE Africa',
          'surgical consumables',
          'diagnostic testing supplies',
          'healthcare consumables Africa'
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
            <span>Medical Consumables</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-5xl mb-4">🧤</div>
            <h1 className="text-4xl md:text-5xl mb-4">
              Medical Consumables
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Essential single-use medical supplies that form the backbone of safe, effective healthcare delivery across Africa. From injection safety to infection prevention, our medical consumables meet WHO standards while addressing the continent's unique supply chain, storage, and training challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl mb-4">Browse by Subcategory</h2>
            <p className="text-gray-600">Select a subcategory to view product groups and specific medical consumables</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => navigate(`/products/subcategories/${subcategory.id}`)}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 text-left hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl group-hover:text-[#4B2991] transition-colors">
                    {subcategory.name}
                  </h3>
                  <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-[#4B2991] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600 mb-4">{subcategory.description}</p>
                <div className="flex items-center gap-2 text-sm text-[#4B2991]">
                  <span>{subcategory.productCount}</span>
                  <span>→</span>
                </div>
              </button>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/division1')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Essential Healthcare Products
            </button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Why Choose Our Medical Consumables</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quality products with comprehensive support for African healthcare systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#4B2991] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">WHO-Compliant Quality</h3>
              <p className="text-gray-600">
                All products meet international quality and safety standards. WHO prequalified auto-disable syringes, sterile surgical supplies, and validated diagnostic tools.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#4B2991] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Tropical Climate Validated</h3>
              <p className="text-gray-600">
                Products tested for storage in high heat (40°C+) and humidity without degradation. Packaging designed to maintain sterility in challenging environments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#4B2991] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Reliable Supply Chain</h3>
              <p className="text-gray-600">
                Prepositioned stockpiles, demand forecasting, and last-mile delivery networks ensure consistent availability when healthcare facilities need them most.
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
              <div className="text-4xl mb-2 text-[#4B2991]">10</div>
              <div className="text-gray-600">Subcategories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#4B2991]">89+</div>
              <div className="text-gray-600">Product Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#4B2991]">500+</div>
              <div className="text-gray-600">SKUs Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#4B2991]">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Focus Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Critical Focus Areas for African Healthcare</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Addressing the continent's unique consumables supply and safety challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">💉</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Injection Safety</h4>
              <p className="text-sm text-gray-600">
                Auto-disable syringes prevent reuse, protecting against 1.7M annual Hep B and 315K Hep C infections from unsafe injections
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">🦠</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Infection Prevention</h4>
              <p className="text-sm text-gray-600">
                PPE, sterilization supplies, and hand hygiene products reduce HAI rates (10-15% in Africa vs. 5-7% in high-income countries)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">🗑️</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Waste Management</h4>
              <p className="text-sm text-gray-600">
                Sharps containers and color-coded waste segregation protect communities from contaminated medical waste exposure
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Supply Chain Resilience</h4>
              <p className="text-sm text-gray-600">
                Combating 30-70% stockout rates through demand forecasting, prepositioned inventory, and last-mile delivery networks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Quality Standards & Compliance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All medical consumables meet stringent international quality standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">✓</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>WHO Prequalified</h4>
              <p className="text-sm text-gray-600">Products meet international standards for safety, quality, and performance</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">✓</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>ISO 13485 Certified</h4>
              <p className="text-sm text-gray-600">Medical device quality management system certification for manufacturers</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">✓</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>CE Mark / FDA Approved</h4>
              <p className="text-sm text-gray-600">Regulatory compliance for international markets ensures product safety</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">✓</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Sterility Validated</h4>
              <p className="text-sm text-gray-600">Batch testing confirms sterility, integrity, and performance before distribution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Training & Technical Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services ensure safe and effective use
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Safe Injection Practices</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Auto-disable syringe training</li>
                <li>• WHO injection safety protocols</li>
                <li>• Sharps disposal procedures</li>
                <li>• Needlestick injury prevention</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Infection Prevention & Control</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Hand hygiene protocols (WHO 5 Moments)</li>
                <li>• PPE donning/doffing training</li>
                <li>• Sterilization and disinfection</li>
                <li>• Waste segregation systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Supply Chain Management</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Consumption quantification tools</li>
                <li>• Inventory management systems</li>
                <li>• Cold chain logistics (where needed)</li>
                <li>• 24/7 emergency hotline support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Strengthen Your Medical Supply Chain?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Partner with Pacem Health to ensure consistent availability of quality medical consumables for your healthcare facility or national program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support/request-equipment-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Request Product Quote
            </Link>
            <Link
              to="/support/procurement-supply-chain"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors text-lg"
            >
              Procurement Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
