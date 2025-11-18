import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function AntiInfectivesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Anti-Infectives",
    "description": "WHO-prequalified anti-infective medications including antibiotics, antifungals, antivirals, and antimalarials for treating infectious diseases across African healthcare settings",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'antibiotics',
      name: 'Antibiotics',
      products: ['Amoxicillin', 'Ciprofloxacin', 'Azithromycin', 'Ceftriaxone', 'Metronidazole'],
      icon: '💊'
    },
    {
      id: 'antifungals',
      name: 'Antifungals',
      products: ['Fluconazole', 'Nystatin', 'Clotrimazole', 'Ketoconazole'],
      icon: '🍄'
    },
    {
      id: 'antivirals',
      name: 'Antivirals',
      products: ['Acyclovir', 'Oseltamivir', 'Zidovudine', 'Lamivudine'],
      icon: '🦠'
    },
    {
      id: 'antimalarials',
      name: 'Antimalarials',
      products: ['Artemether-Lumefantrine', 'Quinine', 'Doxycycline', 'Artesunate'],
      icon: '🦟'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Anti-Infectives | Antibiotics, Antifungals, Antivirals & Antimalarials | Pacem Health"
        description="WHO-prequalified anti-infective medications for Africa. Comprehensive range of antibiotics, antifungals, antivirals, and antimalarials for treating infectious diseases. Quality-assured, climate-tested formulations."
        keywords={[
          'anti-infectives Africa',
          'antibiotics Africa',
          'antifungals Africa',
          'antivirals Africa',
          'antimalarials Africa',
          'WHO prequalified antibiotics',
          'infectious disease medications',
          'essential medicines anti-infectives'
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
            <span>Anti-Infectives</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Anti-Infectives
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Essential anti-infective medications including antibiotics, antifungals, antivirals, and antimalarials for treating infectious diseases across African healthcare settings.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of anti-infective medications</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality Assured Products</h3>
              <p className="text-gray-700 mb-4">
                All anti-infective medications meet WHO prequalification standards and are sourced from certified manufacturers.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>WHO-prequalified or equivalent certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Temperature-controlled cold chain distribution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Extended shelf life for African climate conditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Available in bulk and retail packaging</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Technical Support</h3>
              <p className="text-gray-700 mb-4">
                Our pharmaceutical team provides comprehensive support for anti-infective selection and usage.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Antimicrobial stewardship guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Treatment protocol recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Training on proper storage and handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span>Ongoing pharmacovigilance support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}