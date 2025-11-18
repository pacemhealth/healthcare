import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function NonCommunicableDiseasesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Non-Communicable Disease Medications",
    "description": "Antihypertensives, oral hypoglycemics, statins, cardiovascular medications for NCD management across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'antihypertensives',
      name: 'Antihypertensives',
      products: ['Amlodipine', 'Lisinopril', 'Hydrochlorothiazide', 'Atenolol', 'Nifedipine'],
      icon: '💊'
    },
    {
      id: 'oral-hypoglycemics',
      name: 'Oral Hypoglycemics',
      products: ['Metformin', 'Glibenclamide', 'Insulin', 'Gliclazide', 'Pioglitazone'],
      icon: '💉'
    },
    {
      id: 'statins',
      name: 'Statins',
      products: ['Atorvastatin', 'Simvastatin', 'Rosuvastatin', 'Pravastatin', 'Lovastatin'],
      icon: '💊'
    },
    {
      id: 'cardiovascular',
      name: 'Cardiovascular',
      products: ['Aspirin', 'Clopidogrel', 'Warfarin', 'Digoxin', 'Furosemide'],
      icon: '❤️'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Non-Communicable Disease Medications | NCD Treatment | Pacem Health"
        description="Non-communicable disease medications including antihypertensives, oral hypoglycemics, statins, cardiovascular medications. Essential NCD management solutions for African healthcare."
        keywords={[
          'NCD medications Africa',
          'antihypertensives',
          'diabetes medications Africa',
          'statins',
          'cardiovascular medications',
          'NCD treatment',
          'chronic disease medications Africa',
          'hypertension treatment'
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
            <span>Non-Communicable Diseases (NCDs)</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Non-Communicable Diseases (NCDs)
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive pharmaceutical solutions for managing chronic non-communicable diseases including hypertension, diabetes, cardiovascular conditions, and hyperlipidemia across African healthcare settings.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of NCD medications for chronic disease management</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality Assured NCD Medications</h3>
              <p className="text-gray-700 mb-4">
                All NCD medications are sourced from WHO-prequalified manufacturers and meet stringent quality standards for chronic disease management.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>WHO-prequalified or stringent regulatory authority approved</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Stable formulations suitable for tropical climates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Extended shelf life with proper storage guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Available in multiple dosage strengths</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Comprehensive Support Services</h3>
              <p className="text-gray-700 mb-4">
                Our pharmaceutical team provides specialized support for NCD program implementation and patient management.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>NCD treatment protocol development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Healthcare provider training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Patient adherence and monitoring tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Supply chain optimization for chronic care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Focus Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Addressing Africa's NCD Burden</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Supporting healthcare systems in managing the growing prevalence of non-communicable diseases across the continent
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-[#EBF8FF] p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🩺</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Hypertension</h4>
              <p className="text-sm text-gray-600">Comprehensive blood pressure management solutions</p>
            </div>
            <div className="bg-[#EBF8FF] p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🩸</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Diabetes</h4>
              <p className="text-sm text-gray-600">Complete glycemic control medications and insulin</p>
            </div>
            <div className="bg-[#EBF8FF] p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">❤️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Cardiovascular</h4>
              <p className="text-sm text-gray-600">Heart disease prevention and treatment options</p>
            </div>
            <div className="bg-[#EBF8FF] p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🧬</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Lipid Management</h4>
              <p className="text-sm text-gray-600">Cholesterol-lowering therapies and statins</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}