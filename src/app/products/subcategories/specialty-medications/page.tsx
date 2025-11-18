import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function SpecialtyMedicationsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Specialty Medications",
    "description": "Oncology medications, biologics, immunosuppressants for complex disease management across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'oncology',
      name: 'Oncology',
      products: ['Chemotherapy agents', 'Targeted therapies', 'Immunotherapies', 'Hormonal therapies', 'Supportive care medications'],
      icon: '🎗️'
    },
    {
      id: 'biologics',
      name: 'Biologics',
      products: ['Monoclonal antibodies', 'Growth factors', 'Cytokines', 'Recombinant proteins', 'Biosimilars'],
      icon: '🧬'
    },
    {
      id: 'immunosuppressants',
      name: 'Immunosuppressants',
      products: ['Cyclosporine', 'Tacrolimus', 'Mycophenolate', 'Azathioprine', 'Sirolimus'],
      icon: '💊'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Specialty Medications | Oncology & Biologics | Pacem Health"
        description="Specialty medications including oncology drugs, biologics, immunosuppressants for complex disease management. Advanced pharmaceutical solutions for African healthcare."
        keywords={[
          'specialty medications Africa',
          'oncology drugs Africa',
          'biologics',
          'immunosuppressants Africa',
          'chemotherapy agents',
          'specialty pharmaceuticals',
          'cancer medications Africa',
          'specialty drugs'
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
            <Link to="/products/categories/branded-patented-pharmaceuticals" className="hover:underline">
              Branded & Patented Pharmaceuticals
            </Link>
            <span>/</span>
            <span>Specialty Medications</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Specialty Medications
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Advanced therapeutic solutions for complex medical conditions including oncology treatments, biologics, and immunosuppressants. Our specialty portfolio provides access to cutting-edge medications that require specialized handling, administration, and patient monitoring across African healthcare settings.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of specialty pharmaceutical products</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#2563EB] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-4 group-hover:text-[#2563EB] transition-colors">
                  {group.name}
                </h3>
                <div className="space-y-2">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#2563EB] mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/branded-patented-pharmaceuticals')}
              className="text-[#2563EB] hover:underline"
            >
              ← Back to Branded & Patented Pharmaceuticals
            </button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Premium Quality & Authentication</h3>
              <p className="text-gray-700 mb-4">
                All specialty medications are sourced directly from original manufacturers with full authentication and quality verification protocols.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>FDA, EMA, or WHO-prequalified products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Temperature-controlled cold chain distribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Serialization and anti-counterfeiting measures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Real-time inventory and expiry tracking</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Comprehensive Clinical Support</h3>
              <p className="text-gray-700 mb-4">
                Expert guidance and training for healthcare providers on specialty medication management and patient care protocols.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Oncology pharmacist consultation services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Administration and dosing protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Adverse event monitoring and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Patient education and adherence programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Pharmacy Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Integrated Specialty Pharmacy Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions for complex medication management
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#EBF8FF] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4">
                1
              </div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Procurement</h4>
              <p className="text-sm text-gray-700 mb-3">Direct sourcing and import logistics</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Manufacturer partnerships</li>
                <li>• Regulatory compliance</li>
                <li>• Custom importation</li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4">
                2
              </div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Storage & Handling</h4>
              <p className="text-sm text-gray-700 mb-3">Specialized facilities and protocols</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cold chain management</li>
                <li>• Controlled access</li>
                <li>• Environmental monitoring</li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4">
                3
              </div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Distribution</h4>
              <p className="text-sm text-gray-700 mb-3">Secure delivery to treatment centers</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Temperature monitoring</li>
                <li>• Chain of custody</li>
                <li>• Just-in-time delivery</li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4">
                4
              </div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Clinical Support</h4>
              <p className="text-sm text-gray-700 mb-3">Ongoing pharmacy services</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dosing consultation</li>
                <li>• Patient monitoring</li>
                <li>• Outcomes tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Key Therapeutic Applications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Addressing Africa's most critical specialty healthcare needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="text-4xl mb-4">🎗️</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Cancer Treatment</h4>
              <p className="text-sm text-gray-700 mb-4">
                Comprehensive oncology medications for solid tumors and hematologic malignancies
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB]">•</span>
                  <span>Breast, cervical, and prostate cancer</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB]">•</span>
                  <span>Leukemias and lymphomas</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB]">•</span>
                  <span>Supportive care medications</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="text-4xl mb-4">🫀</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Transplant Medicine</h4>
              <p className="text-sm text-gray-700 mb-4">
                Immunosuppressive therapies for organ and bone marrow transplantation
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB]">•</span>
                  <span>Kidney and liver transplants</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB]">•</span>
                  <span>Bone marrow transplantation</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB]">•</span>
                  <span>Rejection prevention protocols</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="text-4xl mb-4">🧬</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Autoimmune Disorders</h4>
              <p className="text-sm text-gray-700 mb-4">
                Biologic therapies for chronic inflammatory and autoimmune conditions
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB]">•</span>
                  <span>Rheumatoid arthritis</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB]">•</span>
                  <span>Inflammatory bowel disease</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#2563EB]">•</span>
                  <span>Psoriasis and lupus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Access Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Improving Access to Specialty Medications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Programs designed to make life-saving therapies accessible across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#EBF8FF] p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Tiered Pricing</h4>
              <p className="text-sm text-gray-600">Country-specific pricing models for affordability</p>
            </div>
            <div className="bg-[#EBF8FF] p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Patient Assistance</h4>
              <p className="text-sm text-gray-600">Financial aid and copay support programs</p>
            </div>
            <div className="bg-[#EBF8FF] p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Treatment Centers</h4>
              <p className="text-sm text-gray-600">Network of certified specialty pharmacies</p>
            </div>
            <div className="bg-[#EBF8FF] p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Outcomes Monitoring</h4>
              <p className="text-sm text-gray-600">Real-world evidence and registry programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Safety Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Quality Assurance & Safety</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Product Integrity</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Manufacturer Verification:</strong> Direct sourcing from original innovator companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Batch Testing:</strong> Certificate of analysis for every shipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Serialization:</strong> Track and trace capabilities throughout supply chain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Storage Validation:</strong> Temperature mapping and monitoring records</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Patient Safety</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Pharmacovigilance:</strong> Active adverse event monitoring and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>REMS Programs:</strong> Risk evaluation and mitigation strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Drug Interactions:</strong> Clinical decision support tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Patient Education:</strong> Comprehensive medication guides and counseling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}