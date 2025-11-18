import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function MaternalChildHealthPharmaPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Maternal & Child Health Pharmaceuticals",
    "description": "Prenatal vitamins, pediatric formulations, contraceptives for maternal and child health across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'prenatal-vitamins',
      name: 'Prenatal Vitamins',
      products: ['Folic Acid', 'Iron Supplements', 'Calcium', 'Multivitamins', 'Vitamin D'],
      icon: '💊'
    },
    {
      id: 'pediatric-formulations',
      name: 'Pediatric Formulations',
      products: ['ORS (Oral Rehydration Salts)', 'Zinc Sulfate', 'Vitamin A', 'Albendazole', 'Mebendazole'],
      icon: '👶'
    },
    {
      id: 'contraceptives',
      name: 'Contraceptives',
      products: ['Oral contraceptives', 'Injectable contraceptives', 'Condoms', 'Emergency contraception', 'Implants'],
      icon: '💊'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Maternal & Child Health Pharmaceuticals | MCH Medications | Pacem Health"
        description="Maternal and child health pharmaceuticals including prenatal vitamins, pediatric formulations, contraceptives. Essential MCH medications supporting African women and children."
        keywords={[
          'maternal health pharmaceuticals Africa',
          'child health medications',
          'prenatal vitamins Africa',
          'pediatric formulations',
          'contraceptives Africa',
          'MCH medications',
          'maternal child health',
          'family planning medications Africa'
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
            <span>Maternal & Child Health</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Maternal & Child Health
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Essential pharmaceutical products supporting maternal health, child nutrition, and family planning programs across Africa. Our comprehensive range ensures healthy pregnancies, proper child development, and reproductive health services.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of maternal and child health pharmaceuticals</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality Assured MCH Products</h3>
              <p className="text-gray-700 mb-4">
                All maternal and child health products meet WHO standards and are specifically formulated for use in African healthcare contexts.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>WHO-prequalified essential medicines for MCH</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Age-appropriate formulations and dosing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Climate-stable packaging for tropical conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Compliance with national MCH program guidelines</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">MCH Program Support</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive support for implementing effective maternal and child health programs at scale.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Antenatal and postnatal care protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Healthcare provider training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Community health worker education materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Family planning counseling resources</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Continuum of Care Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Continuum of Care Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Supporting health across the lifecycle from preconception through early childhood
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#EBF8FF] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4">
                1
              </div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Preconception</h4>
              <p className="text-sm text-gray-700 mb-3">Family planning and reproductive health</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Contraceptives</li>
                <li>• Folic acid</li>
                <li>• Pre-pregnancy counseling</li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4">
                2
              </div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Pregnancy</h4>
              <p className="text-sm text-gray-700 mb-3">Antenatal care and nutrition</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Prenatal vitamins</li>
                <li>• Iron and folic acid</li>
                <li>• Calcium supplements</li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4">
                3
              </div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Postnatal</h4>
              <p className="text-sm text-gray-700 mb-3">Mother and newborn care</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Postnatal vitamins</li>
                <li>• Newborn essentials</li>
                <li>• Breastfeeding support</li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center text-white mb-4">
                4
              </div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Early Childhood</h4>
              <p className="text-sm text-gray-700 mb-3">Child health and development</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vitamin A</li>
                <li>• Zinc supplements</li>
                <li>• Deworming tablets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Supporting Global Health Goals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our maternal and child health products directly contribute to achieving key Sustainable Development Goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>SDG 3: Good Health</h4>
              <p className="text-sm text-gray-700 mb-3">Ensuring healthy lives and promoting well-being</p>
              <div className="text-xs text-gray-600 space-y-1">
                <div>• Reduce maternal mortality</div>
                <div>• End preventable child deaths</div>
                <div>• Universal health coverage</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>SDG 5: Gender Equality</h4>
              <p className="text-sm text-gray-700 mb-3">Empowering women and girls</p>
              <div className="text-xs text-gray-600 space-y-1">
                <div>• Reproductive health access</div>
                <div>• Family planning services</div>
                <div>• Maternal health rights</div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>SDG 10: Reduced Inequalities</h4>
              <p className="text-sm text-gray-700 mb-3">Equitable access to essential medicines</p>
              <div className="text-xs text-gray-600 space-y-1">
                <div>• Affordable medications</div>
                <div>• Rural health access</div>
                <div>• Quality healthcare for all</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Health Indicators Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Addressing Critical Health Challenges</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our products target the leading causes of maternal and child mortality in Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#EBF8FF] p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🤰</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Maternal Anemia</h4>
              <p className="text-sm text-gray-600">Iron and folic acid supplementation</p>
            </div>
            <div className="bg-[#EBF8FF] p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Dehydration</h4>
              <p className="text-sm text-gray-600">ORS for diarrheal disease management</p>
            </div>
            <div className="bg-[#EBF8FF] p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🔆</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Vitamin Deficiency</h4>
              <p className="text-sm text-gray-600">Vitamin A and micronutrient supplements</p>
            </div>
            <div className="bg-[#EBF8FF] p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">👪</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Unplanned Pregnancy</h4>
              <p className="text-sm text-gray-600">Modern contraceptive methods</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}