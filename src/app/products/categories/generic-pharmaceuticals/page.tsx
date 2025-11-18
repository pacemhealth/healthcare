import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function GenericPharmaceuticalsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Generic Pharmaceuticals",
    "description": "WHO-prequalified generic medications for anti-infectives, NCDs, pain management, and maternal child health across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'anti-infectives',
      name: 'Anti-Infectives',
      description: 'Antibiotics, antifungals, antivirals, and antimalarials',
      productCount: '12 product groups'
    },
    {
      id: 'non-communicable-diseases',
      name: 'Non-Communicable Diseases (NCDs)',
      description: 'Antihypertensives, oral hypoglycemics, statins, and cardiovascular medications',
      productCount: '10 product groups'
    },
    {
      id: 'pain-palliative-care',
      name: 'Pain & Palliative Care',
      description: 'Analgesics, opioids, and muscle relaxants',
      productCount: '8 product groups'
    },
    {
      id: 'maternal-child-health-pharma',
      name: 'Maternal & Child Health',
      description: 'Prenatal vitamins, pediatric formulations, and contraceptives',
      productCount: '9 product groups'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Generic Pharmaceuticals | WHO-Prequalified Essential Medicines Africa | Pacem Health"
        description="Quality-assured generic pharmaceuticals for Africa. Anti-infectives, NCD medications, pain management, and maternal child health formulations. WHO-prequalified essential medicines at accessible prices."
        keywords={[
          'generic pharmaceuticals Africa',
          'WHO prequalified medicines',
          'essential medicines Africa',
          'generic antibiotics',
          'NCD generic medications',
          'affordable medicines Africa',
          'quality generic drugs'
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
            <span>Generic Pharmaceuticals</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-5xl mb-4">💊</div>
            <h1 className="text-4xl md:text-5xl mb-4">
              Generic Pharmaceuticals
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Comprehensive range of generic pharmaceuticals including anti-infectives, NCD medications, pain management solutions, and maternal & child health products designed for African healthcare systems.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl mb-4">Browse by Subcategory</h2>
            <p className="text-gray-600">Select a subcategory to view product groups and specific products</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => navigate(`/products/subcategories/${subcategory.id}`)}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 text-left hover:border-[#2563EB] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl group-hover:text-[#2563EB] transition-colors">
                    {subcategory.name}
                  </h3>
                  <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600 mb-4">{subcategory.description}</p>
                <div className="flex items-center gap-2 text-sm text-[#2563EB]">
                  <span>{subcategory.productCount}</span>
                  <span>→</span>
                </div>
              </button>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products')}
              className="text-[#2563EB] hover:underline"
            >
              ← Back to All Products
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">4</div>
              <div className="text-gray-600">Subcategories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">39+</div>
              <div className="text-gray-600">Product Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">200+</div>
              <div className="text-gray-600">Individual Products</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
