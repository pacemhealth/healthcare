import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function LaboratoryReagentsChemicalsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Laboratory Reagents & Chemicals",
    "description": "Clinical chemistry reagents, hematology reagents, microbiology media, immunology kits, molecular biology reagents, and laboratory chemicals for African diagnostic laboratories",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'clinical-chemistry-reagents',
      name: 'Clinical Chemistry Reagents',
      description: 'Biochemistry testing reagents, calibrators, controls, and chemistry analyzer consumables for liver, kidney, lipid, and metabolic testing',
      productCount: '14 product groups'
    },
    {
      id: 'hematology-coagulation-reagents',
      name: 'Hematology & Coagulation Reagents',
      description: 'Blood count reagents, stains, coagulation reagents, controls, and hematology analyzer consumables for CBC and hemostasis testing',
      productCount: '12 product groups'
    },
    {
      id: 'microbiology-culture-media',
      name: 'Microbiology Culture Media & Reagents',
      description: 'Culture media, agar plates, biochemical tests, staining reagents, and antimicrobial susceptibility testing supplies',
      productCount: '16 product groups'
    },
    {
      id: 'immunology-serology-reagents',
      name: 'Immunology & Serology Reagents',
      description: 'ELISA kits, immunoassay reagents, HIV/HBV/HCV test kits, syphilis testing, and serological diagnostic reagents',
      productCount: '13 product groups'
    },
    {
      id: 'molecular-biology-reagents',
      name: 'Molecular Biology Reagents',
      description: 'PCR reagents, DNA/RNA extraction kits, molecular diagnostic assays, primers, probes, and TB/HIV molecular testing',
      productCount: '11 product groups'
    },
    {
      id: 'urinalysis-body-fluid-reagents',
      name: 'Urinalysis & Body Fluid Reagents',
      description: 'Urine dipsticks, reagent strips, CSF/pleural fluid reagents, pregnancy tests, and urinalysis consumables',
      productCount: '10 product groups'
    },
    {
      id: 'blood-bank-transfusion-reagents',
      name: 'Blood Bank & Transfusion Reagents',
      description: 'Blood typing sera, antibody screening cells, cross-match reagents, Coombs reagents, and blood bank consumables',
      productCount: '12 product groups'
    },
    {
      id: 'laboratory-chemicals-solvents',
      name: 'Laboratory Chemicals & Solvents',
      description: 'General laboratory chemicals, solvents, acids, bases, buffers, stains, indicators, and laboratory-grade reagents',
      productCount: '15 product groups'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Laboratory Reagents & Chemicals | Diagnostic Testing Supplies Africa | Pacem Health"
        description="Comprehensive laboratory reagents and chemicals for African healthcare. Clinical chemistry, hematology, microbiology media, immunology kits, molecular biology reagents, blood bank supplies, and laboratory-grade chemicals."
        keywords={[
          'laboratory reagents Africa',
          'diagnostic reagents',
          'clinical chemistry reagents',
          'microbiology culture media',
          'molecular biology reagents',
          'blood bank reagents',
          'laboratory chemicals Africa'
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
            <span>Laboratory Reagents & Chemicals</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Essential Healthcare Products</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Laboratory Reagents & Chemicals
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive laboratory reagents and chemicals including clinical chemistry reagents, hematology reagents, microbiology culture media, immunoassay reagents, molecular biology reagents, urinalysis supplies, blood bank reagents, and general laboratory chemicals. Quality reagents ensuring accurate diagnostic testing, research excellence, and laboratory operations across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Subcategory</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of laboratory reagents and chemical solutions
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

      {/* Key Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Quality Reagents for Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Reliable laboratory reagents supporting diagnostic excellence and patient care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🧪</div>
              <h3 className="text-xl mb-2">Diagnostic Accuracy</h3>
              <p className="text-gray-700">
                Quality-assured reagents and controls ensuring accurate, reproducible laboratory results for patient diagnosis, treatment monitoring, and disease surveillance programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">❄️</div>
              <h3 className="text-xl mb-2">Cold Chain Integrity</h3>
              <p className="text-gray-700">
                Temperature-controlled supply chain, proper storage, and shelf-life management ensuring reagent stability from manufacturer to laboratory bench across Africa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-xl mb-2">Africa-Ready Solutions</h3>
              <p className="text-gray-700">
                Reagents selected for tropical stability, extended shelf-life, and compatibility with equipment commonly deployed in African healthcare laboratories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reagent Management Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Reagent Selection & Procurement</h3>
              <p className="text-gray-700 mb-4">
                Strategic reagent selection ensures test menu alignment, cost-effectiveness, and supply reliability.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Alignment with disease burden and test volumes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Analyzer compatibility and reagent lock-in</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Open vs. closed reagent systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cost per test and budget constraints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Shelf-life and expiration management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Supplier reliability and lead times</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Reagent Quality Management</h3>
              <p className="text-gray-700 mb-4">
                Proper reagent handling, storage, and quality control ensure accurate laboratory results.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Receipt inspection and documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper storage (temperature, humidity)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>FIFO inventory management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Lot-to-lot verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Quality control testing (daily QC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reagent troubleshooting protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Reagent Supply Chain Excellence</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Ensuring uninterrupted reagent availability for critical diagnostic services
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Reliable Sourcing</h4>
              <p className="text-sm text-gray-700">Direct manufacturer relationships and quality-assured suppliers</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">❄️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Cold Chain</h4>
              <p className="text-sm text-gray-700">Temperature-controlled logistics from factory to laboratory</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Inventory Optimization</h4>
              <p className="text-sm text-gray-700">Data-driven forecasting and minimum/maximum stock levels</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">⏱️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Just-in-Time Delivery</h4>
              <p className="text-sm text-gray-700">Scheduled deliveries preventing stockouts and waste</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Need Laboratory Reagents?</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Connect with our laboratory supply specialists for reagent procurement and supply chain solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Request Reagent Quote
              </button>
              <button
                onClick={() => navigate('/support/technical-support')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Contact Supply Chain Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
