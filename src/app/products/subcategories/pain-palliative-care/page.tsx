import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function PainPalliativeCarePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Pain & Palliative Care Medications",
    "description": "Analgesics, opioids, muscle relaxants for pain management and palliative care across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'analgesics',
      name: 'Analgesics',
      products: ['Paracetamol', 'Ibuprofen', 'Diclofenac', 'Naproxen', 'Acetaminophen'],
      icon: '💊'
    },
    {
      id: 'opioids',
      name: 'Opioids',
      products: ['Morphine', 'Tramadol', 'Codeine', 'Fentanyl', 'Pethidine'],
      icon: '💉'
    },
    {
      id: 'muscle-relaxants',
      name: 'Muscle Relaxants',
      products: ['Diazepam', 'Baclofen', 'Cyclobenzaprine', 'Methocarbamol'],
      icon: '💪'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Pain & Palliative Care Medications | Pain Management | Pacem Health"
        description="Pain and palliative care medications including analgesics, opioids, muscle relaxants. Essential pain management solutions for African healthcare facilities."
        keywords={[
          'pain medications Africa',
          'analgesics',
          'opioids Africa',
          'palliative care medications',
          'pain management',
          'morphine Africa',
          'pain relief medications',
          'palliative care Africa'
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
            <Link to="/products/categories/generic-pharmaceuticals" className="hover:underline">
              Generic Pharmaceuticals
            </Link>
            <span>/</span>
            <span>Pain & Palliative Care</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Pain & Palliative Care
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive pain management and palliative care medications including analgesics, opioids, and muscle relaxants designed to improve quality of life and provide effective symptom relief across African healthcare settings.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of pain management and palliative care medications</p>
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
              onClick={() => navigate('/products/categories/generic-pharmaceuticals')}
              className="text-[#2563EB] hover:underline"
            >
              ← Back to Generic Pharmaceuticals
            </button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality Pain Management Solutions</h3>
              <p className="text-gray-700 mb-4">
                All pain and palliative care medications are sourced from WHO-prequalified manufacturers and comply with international controlled substances regulations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>WHO-prequalified or stringent regulatory authority approved</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Secure supply chain for controlled substances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Multiple dosage forms and strengths available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Compliance with narcotic import/export regulations</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Palliative Care Program Support</h3>
              <p className="text-gray-700 mb-4">
                Our team provides comprehensive support for establishing and strengthening palliative care programs across Africa.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Pain assessment and management training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Controlled substances regulatory guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Palliative care protocol development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Healthcare provider certification programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHO Pain Ladder Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">WHO Pain Management Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Supporting implementation of the WHO three-step analgesic ladder for effective pain relief
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#EBF8FF] p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4">
                1
              </div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Mild to Moderate Pain</h4>
              <p className="text-sm text-gray-700 mb-3">Non-opioid analgesics ± Adjuvants</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Paracetamol</li>
                <li>• Ibuprofen</li>
                <li>• Diclofenac</li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4">
                2
              </div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Moderate to Severe Pain</h4>
              <p className="text-sm text-gray-700 mb-3">Weak opioids ± Non-opioids ± Adjuvants</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tramadol</li>
                <li>• Codeine</li>
                <li>• Combined formulations</li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4">
                3
              </div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Severe Pain</h4>
              <p className="text-sm text-gray-700 mb-3">Strong opioids ± Non-opioids ± Adjuvants</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Morphine</li>
                <li>• Fentanyl</li>
                <li>• Adjuvant therapies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Palliative Care Focus Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Comprehensive Palliative Care Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Addressing the full spectrum of pain and symptom management needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-3xl mb-3">🎗️</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Cancer Pain</h4>
              <p className="text-sm text-gray-600">Comprehensive oncology pain management</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-3xl mb-3">🩺</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Chronic Pain</h4>
              <p className="text-sm text-gray-600">Long-term pain condition management</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Post-Operative</h4>
              <p className="text-sm text-gray-600">Surgical recovery pain control</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-3xl mb-3">🤲</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>End-of-Life Care</h4>
              <p className="text-sm text-gray-600">Compassionate symptom relief</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}