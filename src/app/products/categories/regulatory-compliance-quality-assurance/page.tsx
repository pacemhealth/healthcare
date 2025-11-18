import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function RegulatoryComplianceQualityAssurancePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Regulatory Compliance & Quality Assurance",
    "description": "Pharmacy licensing, certification support, quality control systems, and Good Pharmacy Practice (GPP) implementation for African pharmacies",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'licensing-certification-support',
      name: 'Licensing & Certification Support',
      description: 'Pharmacy license applications, pharmacist registration assistance, continuing education programs, and regulatory update services',
      productCount: '4 service areas'
    },
    {
      id: 'quality-control-systems',
      name: 'Quality Control Systems',
      description: 'Standard Operating Procedures (SOPs), quality assurance protocols, audit preparation services, and documentation management',
      productCount: '4 service areas'
    },
    {
      id: 'good-pharmacy-practice',
      name: 'Good Pharmacy Practice (GPP)',
      description: 'GPP implementation guidance, staff training programs, facility assessment services, and compliance monitoring tools',
      productCount: '4 service areas'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Regulatory Compliance & Quality Assurance | Pharmacy Licensing Africa | Pacem Health"
        description="Regulatory compliance and quality assurance services for African pharmacies. Licensing and certification support, quality control systems, Good Pharmacy Practice (GPP) implementation, and compliance monitoring."
        keywords={[
          'pharmacy compliance Africa',
          'regulatory quality assurance',
          'pharmacy licensing',
          'Good Pharmacy Practice GPP',
          'quality control pharmacy',
          'pharmaceutical compliance Africa'
        ]}
        structuredData={productSchema}
      />
      <section className="bg-[#4B2991] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/division2" className="hover:underline">Pharmacy Services</Link>
            <span>/</span>
            <span>Regulatory Compliance & Quality Assurance</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Pharmacy Operations & Management</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Regulatory Compliance & Quality Assurance
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive regulatory compliance support including licensing and certification assistance, quality control systems, and Good Pharmacy Practice (GPP) implementation. Quality assurance services ensuring pharmacy compliance with national regulations, professional standards, and international best practices across diverse African regulatory environments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Service Area</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of compliance and quality assurance services
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

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Regulatory Landscape in Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Diverse regulatory frameworks govern pharmacy practice across the continent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-xl mb-2">Varied Regulations</h3>
              <p className="text-gray-700">
                54 African countries have different pharmacy laws, licensing requirements, and practice standards. Harmonization efforts (AMRH, EAC) are ongoing, but pharmacies must navigate complex, often outdated, country-specific regulations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h3 className="text-xl mb-2">Professional Bodies</h3>
              <p className="text-gray-700">
                National pharmacy councils regulate practice, enforce standards, and handle complaints. Capacity varies widely—some are well-resourced with robust inspection programs, while others lack resources for effective oversight and enforcement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="text-xl mb-2">Enforcement Challenges</h3>
              <p className="text-gray-700">
                Limited inspection capacity, informal drug markets, counterfeit medicines, and unregistered pharmacies undermine regulatory compliance. Many pharmacies struggle to meet standards due to resource constraints, not willful non-compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Common Compliance Gaps</h3>
              <p className="text-gray-700 mb-4">
                Many African pharmacies struggle with regulatory compliance and quality standards.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Expired or invalid pharmacy licenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate record-keeping and documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Poor controlled substance management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Substandard storage conditions (temperature)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Lack of Standard Operating Procedures (SOPs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Insufficient staff training and supervision</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Compliance Best Practices</h3>
              <p className="text-gray-700 mb-4">
                Proactive compliance management protects pharmacies and ensures patient safety.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Maintain current licenses and registrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Implement comprehensive SOPs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Secure controlled substance storage and tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Temperature-controlled storage with monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular staff training on GPP standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Internal audits and quality reviews</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Good Pharmacy Practice (GPP) Standards</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              WHO/FIP Good Pharmacy Practice guidelines adapted for African contexts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏢</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Facility Standards</h4>
              <p className="text-sm text-gray-700">Adequate space, proper storage, security, hygiene, accessibility</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Professional Practice</h4>
              <p className="text-sm text-gray-700">Qualified pharmacists, ethical conduct, patient counseling, privacy</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Inventory Management</h4>
              <p className="text-sm text-gray-700">Proper sourcing, storage, stock rotation, expiry management</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📝</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Documentation</h4>
              <p className="text-sm text-gray-700">Prescription records, dispensing logs, controlled substance registers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Ensure Pharmacy Compliance</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Connect with our regulatory compliance specialists for guidance on licensing, quality systems, and GPP implementation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/product-safety-compliance')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Compliance Assessment
              </button>
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                GPP Training Programs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
