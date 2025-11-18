import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function OverTheCounterProductsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Over-the-Counter Products",
    "description": "OTC medications and health products including pain relief, cold/flu medications, digestive health, vitamins, skin care, and first aid supplies for African consumers",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'pain-fever-relief',
      name: 'Pain & Fever Relief',
      description: 'Analgesics, antipyretics, and anti-inflammatory medications for pain and fever management',
      productCount: '8 product groups'
    },
    {
      id: 'cold-flu-medications',
      name: 'Cold & Flu Medications',
      description: 'Decongestants, cough suppressants, expectorants, and combination cold remedies',
      productCount: '10 product groups'
    },
    {
      id: 'digestive-health',
      name: 'Digestive Health',
      description: 'Antacids, laxatives, anti-diarrheals, and probiotics for gastrointestinal wellness',
      productCount: '12 product groups'
    },
    {
      id: 'vitamins-supplements',
      name: 'Vitamins & Supplements',
      description: 'Essential vitamins, minerals, and nutritional supplements for health maintenance',
      productCount: '15 product groups'
    },
    {
      id: 'skin-care-topicals',
      name: 'Skin Care & Topicals',
      description: 'Topical treatments, antifungals, antibacterials, and dermatological care products',
      productCount: '14 product groups'
    },
    {
      id: 'first-aid-wound-care',
      name: 'First Aid & Wound Care',
      description: 'Antiseptics, bandages, wound dressings, and emergency first aid supplies',
      productCount: '9 product groups'
    },
    {
      id: 'womens-health-otc',
      name: "Women's Health OTC",
      description: "Feminine hygiene, menstrual relief, pregnancy tests, and women's wellness products",
      productCount: '7 product groups'
    },
    {
      id: 'oral-health',
      name: 'Oral Health',
      description: 'Toothpastes, mouthwashes, dental pain relief, and oral care products',
      productCount: '6 product groups'
    },
    {
      id: 'eye-ear-care',
      name: 'Eye & Ear Care',
      description: 'Eye drops, ear drops, contact lens solutions, and ophthalmic care',
      productCount: '8 product groups'
    },
    {
      id: 'allergy-antihistamines',
      name: 'Allergy & Antihistamines',
      description: 'Antihistamines, nasal sprays, and allergy relief medications',
      productCount: '7 product groups'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Over-the-Counter Products | OTC Medications & Health Products Africa | Pacem Health"
        description="Comprehensive OTC products for African consumers. Pain relief, cold/flu medications, digestive health, vitamins, skin care, first aid, women's health, and oral care. Quality self-care products at accessible prices."
        keywords={[
          'OTC products Africa',
          'over-the-counter medications',
          'pain relief Africa',
          'vitamins supplements',
          'first aid supplies',
          'skin care products',
          'health wellness products Africa'
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
            <span>Over-the-Counter Products</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#7C944B] to-[#5A6D35] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-5xl mb-4">💊</div>
            <h1 className="text-4xl md:text-5xl mb-4">
              Over-the-Counter Products
            </h1>
            <p className="text-xl text-white/90 mb-6">
              Comprehensive portfolio of non-prescription medications and health products for self-care and wellness. From pain relief to vitamins, cold remedies to first aid supplies, we provide quality OTC products that empower communities to manage common health conditions and maintain preventive care across African markets.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl mb-4">Browse by Subcategory</h2>
            <p className="text-gray-600">Select a subcategory to view product groups and specific OTC medications</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => navigate(`/products/subcategories/${subcategory.id}`)}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 text-left hover:border-[#7C944B] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl group-hover:text-[#7C944B] transition-colors">
                    {subcategory.name}
                  </h3>
                  <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-[#7C944B] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-600 mb-4">{subcategory.description}</p>
                <div className="flex items-center gap-2 text-sm text-[#7C944B]">
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
              className="text-[#7C944B] hover:underline"
            >
              ← Back to All Products
            </button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Why Choose Our OTC Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Quality non-prescription products with comprehensive support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#7C944B] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Quality Assured</h3>
              <p className="text-gray-600">
                All OTC products meet international quality standards from WHO-approved manufacturers, ensuring safety and efficacy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#7C944B] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Affordable Access</h3>
              <p className="text-gray-600">
                Competitive pricing and bulk supply options make essential OTC medications accessible to all healthcare levels.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 bg-[#7C944B] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Consumer Education</h3>
              <p className="text-gray-600">
                Patient information materials and pharmacist training support safe, effective self-care medication use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">10</div>
              <div className="text-gray-600">Subcategories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">96+</div>
              <div className="text-gray-600">Product Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">500+</div>
              <div className="text-gray-600">OTC Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">35+</div>
              <div className="text-gray-600">Countries Supplied</div>
            </div>
          </div>
        </div>
      </section>

      {/* OTC Market Trends Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">OTC Market in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Growing demand for accessible self-care solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">📈</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Market Growth</h4>
              <p className="text-sm text-gray-600">12% annual growth rate in African OTC market</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">🏪</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Retail Expansion</h4>
              <p className="text-sm text-gray-600">Growing pharmacy and retail healthcare networks</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Health Awareness</h4>
              <p className="text-sm text-gray-600">Increased consumer health literacy and self-care</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">🌍</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Urban & Rural Access</h4>
              <p className="text-sm text-gray-600">Expanding availability beyond urban centers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Comprehensive OTC Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meeting diverse consumer health needs across therapeutic areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F5F7F0] p-8 rounded-xl">
              <div className="text-4xl mb-4">💊</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Symptom Relief</h4>
              <p className="text-sm text-gray-700 mb-3">Immediate relief for common ailments</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Pain and fever medications</li>
                <li>• Cold and flu remedies</li>
                <li>• Allergy relief products</li>
                <li>• Digestive health aids</li>
              </ul>
            </div>

            <div className="bg-[#F5F7F0] p-8 rounded-xl">
              <div className="text-4xl mb-4">🌿</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Wellness & Prevention</h4>
              <p className="text-sm text-gray-700 mb-3">Preventive care and health maintenance</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vitamins and minerals</li>
                <li>• Nutritional supplements</li>
                <li>• Probiotics and prebiotics</li>
                <li>• Immune support products</li>
              </ul>
            </div>

            <div className="bg-[#F5F7F0] p-8 rounded-xl">
              <div className="text-4xl mb-4">🩹</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Personal Care</h4>
              <p className="text-sm text-gray-700 mb-3">Topical and personal health products</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Skin care treatments</li>
                <li>• First aid supplies</li>
                <li>• Oral health products</li>
                <li>• Eye and ear care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory & Safety Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Quality Standards & Regulatory Compliance</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All OTC products meet stringent safety and quality requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Manufacturing & Quality</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>GMP Certified:</strong> All manufacturers comply with Good Manufacturing Practice standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>WHO Prequalification:</strong> Products from WHO-approved sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Batch Testing:</strong> Quality control testing for every production batch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Stability Studies:</strong> Proper storage and shelf-life validation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Consumer Safety</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Clear Labeling:</strong> Patient-friendly instructions and warnings in local languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Adverse Event Reporting:</strong> Pharmacovigilance systems for safety monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Counterfeit Prevention:</strong> Anti-counterfeiting measures and authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Pharmacist Counseling:</strong> Support materials for proper medication use</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution & Access Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Distribution & Market Access</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive supply chain ensuring product availability
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Hospital Pharmacies</h4>
              <p className="text-sm text-gray-600">OTC products for hospital retail pharmacies</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">💊</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Community Pharmacies</h4>
              <p className="text-sm text-gray-600">Private pharmacy and drugstore supply</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">🏪</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Retail Chains</h4>
              <p className="text-sm text-gray-600">Supermarkets and retail health sections</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Wholesale Distribution</h4>
              <p className="text-sm text-gray-600">Bulk supply for distributor networks</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
