import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function HospitalClinicalPharmacyServicesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hospital & Clinical Pharmacy Services",
    "description": "Inpatient pharmacy operations, specialized disease programs, and critical care pharmacy services for African hospitals",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'inpatient-pharmacy-operations',
      name: 'Inpatient Pharmacy Operations',
      description: 'Central hospital pharmacy services, ward-based pharmacy, medication distribution systems, hospital formulary management, and inpatient medication reconciliation',
      productCount: '5 service areas'
    },
    {
      id: 'specialized-disease-program-pharmacy',
      name: 'Specialized Disease Program Pharmacy',
      description: 'ART clinics (HIV), TB pharmacy programs (DOTS & MDR-TB), maternal & child health pharmacy, chronic disease clinics, and oncology pharmacy services',
      productCount: '5 program areas'
    },
    {
      id: 'critical-care-emergency-pharmacy',
      name: 'Critical Care & Emergency Pharmacy',
      description: 'ICU/HDU pharmacy, emergency department pharmacy, surgical & anesthesia pharmacy, pediatric & neonatal pharmacy, and obstetric emergency pharmacy',
      productCount: '5 specialty areas'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Hospital & Clinical Pharmacy Services | Inpatient Pharmacy Africa | Pacem Health"
        description="Comprehensive hospital and clinical pharmacy services for Africa. Inpatient pharmacy operations, specialized disease programs (HIV/TB), critical care pharmacy, and medication management systems. Strengthen hospital pharmacy practice."
        keywords={[
          'hospital pharmacy Africa',
          'clinical pharmacy services',
          'inpatient pharmacy operations',
          'specialized disease pharmacy',
          'critical care pharmacy',
          'hospital medication management',
          'pharmacy services Africa'
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
            <span>Hospital & Clinical Pharmacy Services</span>
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
              Hospital & Clinical Pharmacy Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Specialized clinical pharmacy services including inpatient pharmacy operations, disease-specific program pharmacy (ART, TB, chronic diseases), and critical care pharmacy support. Clinical pharmacy infrastructure strengthening medication management, patient safety, and therapeutic outcomes across African hospital settings from district hospitals to tertiary referral centers.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Service Area</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of hospital and clinical pharmacy services
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

      {/* Hospital Pharmacy Landscape Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Hospital Pharmacy in Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Clinical pharmacy services are critical for safe, effective medication use in hospital settings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-xl mb-2">Inpatient Pharmacy</h3>
              <p className="text-gray-700">
                Central hospital pharmacies dispense medications for admitted patients, but many African hospitals lack ward-based clinical pharmacists, unit dose dispensing, or automated medication distribution systems—resulting in medication errors and delayed care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-xl mb-2">Disease Programs</h3>
              <p className="text-gray-700">
                Specialized pharmacy services for HIV/ART clinics, TB programs (DOTS), chronic disease management (diabetes, hypertension), and maternal-child health require trained pharmacists, dedicated infrastructure, and adherence support tailored to Africa's disease burden.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⚕️</div>
              <h3 className="text-xl mb-2">Critical Care</h3>
              <p className="text-gray-700">
                ICU, emergency, surgical, and neonatal pharmacy require 24/7 medication access, emergency drug preparation, and clinical pharmacist expertise—services often unavailable in resource-limited settings, compromising patient safety in the most vulnerable populations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Pharmacy Models Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Pharmacy Service Gaps</h3>
              <p className="text-gray-700 mb-4">
                Many African hospitals operate with limited clinical pharmacy services and infrastructure.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Single central pharmacy with long patient queues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>No ward-based clinical pharmacists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited medication reconciliation at admission/discharge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate ICU/emergency pharmacy coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Poor integration with disease-specific programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Medication errors and adverse drug events</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Strengthened Clinical Pharmacy</h3>
              <p className="text-gray-700 mb-4">
                Modern hospital pharmacy models improve medication safety and patient outcomes.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Decentralized ward pharmacy services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Clinical pharmacists on ward rounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Automated dispensing cabinets (ADCs) on wards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Medication therapy management (MTM)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Integrated disease program pharmacy clinics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>24/7 critical care pharmacy support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Disease Programs Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Priority Disease Program Pharmacy</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized pharmacy services for Africa's major disease programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🩺</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>HIV/ART Pharmacy</h4>
              <p className="text-sm text-gray-700">Antiretroviral therapy clinics, adherence counseling, viral load monitoring, PMTCT services, pediatric ART</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🫁</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>TB Pharmacy</h4>
              <p className="text-sm text-gray-700">DOTS supervision, MDR-TB regimens, drug-resistant TB, contact tracing, treatment completion tracking</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">❤️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>NCD Clinics</h4>
              <p className="text-sm text-gray-700">Diabetes management, hypertension control, cardiovascular disease, chronic kidney disease, asthma/COPD</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🤰</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>MCH Pharmacy</h4>
              <p className="text-sm text-gray-700">Antenatal care, PMTCT, postnatal support, pediatric dosing, immunization programs, family planning</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎗️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Oncology Pharmacy</h4>
              <p className="text-sm text-gray-700">Chemotherapy preparation, cytotoxic handling, supportive care, pain management, palliative care</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🧠</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Mental Health</h4>
              <p className="text-sm text-gray-700">Psychiatric medications, adherence support, substance abuse treatment, epilepsy management</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Strengthen Your Hospital Pharmacy Services</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Connect with our clinical pharmacy specialists to design comprehensive hospital pharmacy solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/request-equipment-quote')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Request Service Assessment
              </button>
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Clinical Pharmacy Training
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
