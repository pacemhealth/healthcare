import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function SurgicalProceduralSuppliesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Surgical & Procedural Supplies",
    "description": "Surgical instruments, procedural supplies, electrosurgical equipment, and specialty surgical tools for African healthcare facilities",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'surgical-instruments',
      name: 'Surgical Instruments',
      description: 'Basic surgical sets, specialty instruments, electrosurgical equipment, laparoscopic instruments, suturing supplies, and wound closure devices',
      productCount: '18 product groups'
    },
    {
      id: 'operating-room-supplies',
      name: 'Operating Room Supplies',
      description: 'Surgical drapes (sterile, disposable, reusable), surgical gowns and scrubs, operating table accessories, and anesthesia supplies',
      productCount: '10 product groups'
    },
    {
      id: 'procedural-packs',
      name: 'Procedural Packs',
      description: 'Delivery kits (normal delivery, C-section), minor surgery packs, and emergency procedure kits for African healthcare settings',
      productCount: '15 product groups'
    },
    {
      id: 'specialty-surgical-instruments',
      name: 'Specialty Surgical Instruments',
      description: 'Orthopedic, cardiovascular, neurosurgery, and specialty procedure instruments',
      productCount: '10 product groups'
    },
    {
      id: 'electrosurgical-equipment',
      name: 'Electrosurgical Equipment',
      description: 'Cautery devices, diathermy units, and electrosurgical accessories',
      productCount: '7 product groups'
    },
    {
      id: 'suturing-closure',
      name: 'Suturing & Wound Closure',
      description: 'Sutures, surgical staplers, clips, and wound closure devices',
      productCount: '9 product groups'
    },
    {
      id: 'minimally-invasive-surgery',
      name: 'Minimally Invasive Surgery',
      description: 'Laparoscopic instruments, trocars, and endoscopic equipment',
      productCount: '11 product groups'
    },
    {
      id: 'surgical-lighting-visualization',
      name: 'Surgical Lighting & Visualization',
      description: 'Operating lights, headlamps, loupes, and surgical microscopes',
      productCount: '6 product groups'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Surgical & Procedural Supplies | Operating Room Equipment Africa | Pacem Health"
        description="Comprehensive surgical and procedural supplies for African healthcare. Surgical instruments, operating room equipment, electrosurgical devices, suturing supplies, and specialty surgical tools. Equip modern operating rooms."
        keywords={[
          'surgical supplies Africa',
          'operating room equipment',
          'surgical instruments',
          'procedural supplies',
          'electrosurgical equipment',
          'minimally invasive surgery',
          'surgical equipment Africa'
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
            <span>Surgical & Procedural Supplies</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-5xl mb-4">🔧</div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Surgical & Procedural Supplies
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive portfolio of surgical instruments, operating room supplies, and procedural equipment enabling safe, effective surgical interventions across African healthcare facilities. From basic general surgery tools to advanced minimally invasive equipment, we provide quality instruments and supplies that meet international standards while addressing the continent's unique surgical care needs.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Subcategory</h2>
            <p className="text-gray-600">Select a subcategory to view product groups and specific surgical supplies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => navigate(`/products/subcategories/${subcategory.id}`)}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 text-left hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl md:text-2xl group-hover:text-[#4B2991] transition-colors">
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
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Why Choose Our Surgical Supplies</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Quality surgical equipment with comprehensive support for African healthcare systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#4B2991] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl mb-2 md:mb-3">International Quality Standards</h3>
              <p className="text-sm md:text-base text-gray-600">
                All surgical instruments meet CE, ISO, and WHO-PQS standards for safety and effectiveness in surgical procedures.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#4B2991] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl mb-2 md:mb-3">Rapid Deployment</h3>
              <p className="text-sm md:text-base text-gray-600">
                Pre-configured surgical packs and standardized instrument sets enable quick setup and efficient OR workflows.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#4B2991] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl mb-2 md:mb-3">Sterilization Support</h3>
              <p className="text-sm md:text-base text-gray-600">
                Reusable instruments designed for multiple sterilization cycles with proper maintenance and care protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Care Context Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Strengthening Surgical Care in Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Essential surgical capacity challenges across the continent
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F0EBF8] p-6 rounded-xl text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3" style={{ fontWeight: 700 }}>93%</div>
              <h4 className="text-base md:text-lg mb-2" style={{ fontWeight: 600 }}>Surgical Access Gap</h4>
              <p className="text-sm text-gray-700">Of African population lacks access to safe, timely surgical care</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3" style={{ fontWeight: 700 }}>1.2/100K</div>
              <h4 className="text-base md:text-lg mb-2" style={{ fontWeight: 600 }}>Surgeon Density</h4>
              <p className="text-sm text-gray-700">Average surgeons per 100,000 population (vs. 20+ in high-income countries)</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3" style={{ fontWeight: 700 }}>60%</div>
              <h4 className="text-base md:text-lg mb-2" style={{ fontWeight: 600 }}>Equipment Shortages</h4>
              <p className="text-sm text-gray-700">Of African ORs report insufficient surgical instruments and supplies</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl text-center">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3" style={{ fontWeight: 700 }}>17M</div>
              <h4 className="text-base md:text-lg mb-2" style={{ fontWeight: 600 }}>Unmet Need</h4>
              <p className="text-sm text-gray-700">Annual surgical procedures needed but not performed in sub-Saharan Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Comprehensive Surgical Solutions</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              From basic instruments to advanced surgical systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Reusable Surgical Instruments</h3>
              <p className="text-gray-700 mb-4">
                High-quality stainless steel instruments designed for multiple uses with proper sterilization and maintenance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>German or Pakistani surgical-grade stainless steel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Autoclavable up to 500+ sterilization cycles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Ergonomic designs for reduced surgeon fatigue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Comprehensive instrument servicing and sharpening</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Single-Use Procedural Supplies</h3>
              <p className="text-gray-700 mb-4">
                Sterile, disposable surgical supplies ensuring infection prevention and patient safety.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pre-packaged sterile procedure packs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Surgical drapes, gowns, and barrier protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Disposable scalpels, blades, and cutting instruments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cost-effective solutions for resource-limited settings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Specialties Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Surgical Specialty Support</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized instruments and equipment for different surgical disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-4xl mb-3">🏥</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>General Surgery</h4>
              <p className="text-sm text-gray-600">Laparotomy, appendectomy, hernia repair</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-4xl mb-3">🦴</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Orthopedics</h4>
              <p className="text-sm text-gray-600">Fracture fixation, joint procedures</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-4xl mb-3">👶</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Obstetrics</h4>
              <p className="text-sm text-gray-600">C-sections, maternal care procedures</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-4xl mb-3">👁️</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Ophthalmology</h4>
              <p className="text-sm text-gray-600">Cataract surgery, eye procedures</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-4xl mb-3">🦷</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Dental Surgery</h4>
              <p className="text-sm text-gray-600">Extractions, oral surgical procedures</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-4xl mb-3">🫀</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Cardiovascular</h4>
              <p className="text-sm text-gray-600">Cardiac and vascular procedures</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Neurosurgery</h4>
              <p className="text-sm text-gray-600">Brain and spinal procedures</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>ENT Surgery</h4>
              <p className="text-sm text-gray-600">Ear, nose, throat procedures</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
