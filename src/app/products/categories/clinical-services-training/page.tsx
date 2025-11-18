import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function ClinicalServicesTrainingPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Clinical Services & Training",
    "description": "Pharmacist education, patient care services, pharmaceutical care training, and clinical pharmacy capacity building for African healthcare professionals",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'pharmacist-education',
      name: 'Pharmacist Education',
      description: 'Clinical pharmacy training, pharmaceutical care certification, specialized therapy training (HIV, TB, Diabetes), and leadership development programs',
      productCount: '4 training areas'
    },
    {
      id: 'patient-care-services',
      name: 'Patient Care Services',
      description: 'Medication Therapy Management (MTM), patient counseling training, health screening services, and immunization programs',
      productCount: '4 service areas'
    },
    {
      id: 'pharmaceutical-care',
      name: 'Pharmaceutical Care',
      description: 'Drug utilization reviews, medication reconciliation, adverse drug reaction monitoring, and therapeutic drug monitoring',
      productCount: '4 service areas'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Clinical Services & Training | Pharmacist Education Africa | Pacem Health"
        description="Clinical pharmacy services and training for African healthcare professionals. Pharmacist education, patient care services, pharmaceutical care, medication therapy management, and clinical pharmacy capacity building."
        keywords={[
          'clinical pharmacy training Africa',
          'pharmacist education',
          'pharmaceutical care training',
          'medication therapy management',
          'pharmacy professional development',
          'clinical services training Africa'
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
            <span>Clinical Services & Training</span>
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
              Clinical Services & Training
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive clinical pharmacy education and patient care services including pharmacist training programs, medication therapy management, patient counseling, and pharmaceutical care services. Workforce development and clinical service expansion strengthening pharmacy practice transformation from product-focused dispensing to patient-centered pharmaceutical care across African healthcare systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Service Area</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of clinical services and training programs
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Evolution of Pharmacy Practice in Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Shifting from product-focused dispensing to patient-centered pharmaceutical care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl mb-2">Traditional Model</h3>
              <p className="text-gray-700">
                Historically, African pharmacies focused primarily on product supply—receiving prescriptions, dispensing medications, and selling over-the-counter products. Limited patient interaction beyond basic instructions. Pharmacists underutilized as clinical resources.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h3 className="text-xl mb-2">Clinical Pharmacy</h3>
              <p className="text-gray-700">
                Emerging clinical pharmacy practice emphasizes medication therapy optimization, patient counseling, chronic disease management, and collaboration with physicians. Pharmacists as accessible healthcare providers, especially in primary care settings with limited physician access.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl mb-2">Pharmaceutical Care</h3>
              <p className="text-gray-700">
                Patient-centered practice taking responsibility for medication-related outcomes. Identifying, resolving, and preventing drug therapy problems. Continuous monitoring and follow-up. Partnership with patients to achieve therapeutic goals—the future of African pharmacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Pharmacy Training Needs</h3>
              <p className="text-gray-700 mb-4">
                Significant skills gaps exist between current pharmacy education and modern practice requirements.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited clinical pharmacy training in curricula</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Few opportunities for continuing education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Lack of exposure to disease-specific management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Minimal training in patient counseling skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited mentorship and supervision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Brain drain of trained clinical pharmacists</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Clinical Services Opportunities</h3>
              <p className="text-gray-700 mb-4">
                Pharmacists can fill critical healthcare gaps through expanded clinical roles.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Medication therapy management (MTM) services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Chronic disease management clinics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Health screening & preventive services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Immunization services (expanded scope)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Medication adherence programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Point-of-care testing (POCT)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Pharmacist-Led Healthcare Services</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Expanding pharmacist scope of practice to improve access and outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Medication Reviews</h4>
              <p className="text-sm text-gray-700">Comprehensive medication reviews for polypharmacy, adherence assessment, dose optimization</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Health Monitoring</h4>
              <p className="text-sm text-gray-700">Blood pressure, blood glucose, cholesterol screening, BMI assessment, health risk evaluations</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💉</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Immunizations</h4>
              <p className="text-sm text-gray-700">Vaccine administration (where permitted), immunization counseling, travel health advice</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Patient Education</h4>
              <p className="text-sm text-gray-700">Disease state education, lifestyle modifications, medication adherence counseling, self-care support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Advance Your Clinical Pharmacy Practice</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Connect with our training specialists to develop clinical services and enhance pharmacist capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                View Training Programs
              </button>
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Clinical Services Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
