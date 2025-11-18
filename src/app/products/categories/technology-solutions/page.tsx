import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function TechnologySolutionsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Technology Solutions",
    "description": "Pharmacy management software, clinical decision support systems, and digital health integration for African pharmacies",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'pharmacy-management-software',
      name: 'Pharmacy Management Software',
      description: 'Point-of-sale (POS) systems, prescription management software, patient information systems, and insurance billing platforms for efficient pharmacy operations',
      productCount: '4 solution areas'
    },
    {
      id: 'clinical-decision-support',
      name: 'Clinical Decision Support',
      description: 'Drug interaction checkers, dosing calculators, clinical guidelines database, and allergy alert systems for safe medication dispensing',
      productCount: '4 solution areas'
    },
    {
      id: 'digital-health-integration-pharmacy',
      name: 'Digital Health Integration',
      description: 'Electronic health records (EHR) integration, telemedicine platform connectivity, mobile health applications, and patient portal systems',
      productCount: '4 solution areas'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Technology Solutions | Pharmacy Management Software Africa | Pacem Health"
        description="Pharmacy technology solutions for Africa. Pharmacy management software, clinical decision support systems, digital health integration, EHR connectivity, and medication safety technology. Modernize pharmacy operations."
        keywords={[
          'pharmacy management software Africa',
          'pharmacy technology solutions',
          'clinical decision support',
          'digital health pharmacy',
          'pharmacy POS systems',
          'EHR integration pharmacy',
          'pharmacy software Africa'
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
            <span>Technology Solutions</span>
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
              Technology Solutions
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Digital pharmacy technology including pharmacy management software, clinical decision support systems, and digital health integration platforms. Modern pharmacy information systems addressing operational inefficiencies, medication safety, and patient care coordination across African pharmacy settings from independent pharmacies to hospital networks.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Technology Area</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of pharmacy technology solutions
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

      {/* Digital Transformation Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Digital Transformation in African Pharmacy</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Technology adoption is transforming pharmacy practice across the continent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-xl mb-2">Mobile-First Solutions</h3>
              <p className="text-gray-700">
                Africa's mobile-first digital landscape enables pharmacy management through smartphones and tablets. Cloud-based systems accessible via mobile browsers reduce hardware costs and enable real-time inventory updates even in remote settings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl mb-2">Patient Safety</h3>
              <p className="text-gray-700">
                Clinical decision support systems prevent medication errors through drug interaction alerts, allergy warnings, dosing calculators, and clinical guidelines—critical safety nets where pharmacist training levels vary and polypharmacy is common.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="text-xl mb-2">Health System Integration</h3>
              <p className="text-gray-700">
                Interoperable pharmacy systems connect with EHRs, national health information exchanges, insurance platforms, and telemedicine services—enabling coordinated care, reducing duplicate medications, and supporting continuity across healthcare touchpoints.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Adoption Barriers Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Barriers to Technology Adoption</h3>
              <p className="text-gray-700 mb-4">
                Multiple challenges slow digital transformation in African pharmacy practice.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>High upfront costs of pharmacy software</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Unreliable internet connectivity (rural areas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited computer literacy among staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Resistance to change from paper-based systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Lack of local technical support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Incompatible with existing health systems</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Successful Implementation Strategies</h3>
              <p className="text-gray-700 mb-4">
                Practical approaches enable effective pharmacy technology adoption in resource-limited settings.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Affordable SaaS models with monthly subscriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Offline-capable systems with cloud sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Simple, intuitive user interfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Comprehensive training and change management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Local technical support and helpdesks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Standards-based interoperability (HL7, FHIR)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Benefits Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Benefits of Pharmacy Technology</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Digital systems deliver measurable improvements in pharmacy operations and patient care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Faster Dispensing</h4>
              <p className="text-sm text-gray-700">Reduce prescription processing time by 40-60% with barcode scanning and automated workflows</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Fewer Errors</h4>
              <p className="text-sm text-gray-700">Decrease dispensing errors by 50-80% through automated checks and clinical alerts</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Better Inventory</h4>
              <p className="text-sm text-gray-700">Reduce stockouts by 60% and expiry waste by 30% with smart inventory management</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Business Intelligence</h4>
              <p className="text-sm text-gray-700">Gain insights into sales trends, profitability, customer patterns, and operational efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Digitize Your Pharmacy Operations</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Connect with our pharmacy technology specialists to find the right digital solutions for your practice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/request-equipment-demo')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Software Demo
              </button>
              <button
                onClick={() => navigate('/support/digital-health-integration')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Digital Health Integration
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
