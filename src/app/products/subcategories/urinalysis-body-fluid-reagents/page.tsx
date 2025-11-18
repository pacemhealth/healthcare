import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function UrinalysisBodyFluidReagentsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Urinalysis & Body Fluid Reagents",
    "description": "Urine dipsticks, pregnancy tests, urinalysis reagents for urine and body fluid testing across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'urine-dipsticks',
      name: 'Urine Dipstick Reagent Strips',
      products: ['10-parameter dipsticks (glucose, protein, pH, blood, etc.)', '5-parameter dipsticks', 'Microalbumin strips', 'Urine specific gravity', 'Automated strip readers'],
      icon: '🧪',
      description: 'Urinalysis screening'
    },
    {
      id: 'pregnancy-tests',
      name: 'Pregnancy Tests',
      products: ['Urine hCG cassettes', 'Urine hCG strips', 'Midstream pregnancy tests', 'Serum beta-hCG', 'Early detection tests (10 mIU/mL)'],
      icon: '🤰',
      description: 'Pregnancy diagnosis'
    },
    {
      id: 'urine-sediment-stains',
      name: 'Urine Sediment Stains',
      products: ['Sternheimer-Malbin stain', 'Eosin-Y stain', 'Gram stain (urine)', 'Supravital stains', 'Crystal identification'],
      icon: '🔬',
      description: 'Microscopy staining'
    },
    {
      id: 'csf-reagents',
      name: 'CSF Analysis Reagents',
      products: ['CSF protein reagents', 'CSF glucose reagents', 'CSF cell counting chambers', 'India ink (Crypto)', 'CSF culture media'],
      icon: '🧠',
      description: 'Cerebrospinal fluid testing'
    },
    {
      id: 'pleural-fluid',
      name: 'Pleural & Ascitic Fluid',
      products: ['ADA (adenosine deaminase) kits', 'Fluid protein & glucose', 'LDH reagents', 'Cell count chambers', 'Gram stain kits'],
      icon: '💧',
      description: 'Body fluid analysis'
    },
    {
      id: 'urine-culture-screening',
      name: 'Urine Culture Screening',
      products: ['Urine culture paddles (dip-slides)', 'Nitrite reduction test', 'Leukocyte esterase', 'UTI screening strips', 'Colony count estimation'],
      icon: '🦠',
      description: 'UTI screening'
    },
    {
      id: 'urine-chemistry',
      name: 'Urine Chemistry Reagents',
      products: ['24-hour urine creatinine', 'Urine protein quantitation', 'Urine calcium & phosphate', 'Urine uric acid', 'Microalbumin/creatinine ratio'],
      icon: '⚗️',
      description: 'Quantitative urinalysis'
    },
    {
      id: 'drug-screening',
      name: 'Drug Screening Tests',
      products: ['Multi-drug urine screening panels', 'THC (marijuana) tests', 'Cocaine metabolite tests', 'Amphetamine tests', 'Opioid screening'],
      icon: '🚫',
      description: 'Toxicology screening'
    },
    {
      id: 'urinalysis-consumables',
      name: 'Urinalysis Consumables',
      products: ['Urine collection cups (sterile)', 'Urine transfer devices', 'Conical centrifuge tubes (12mL)', 'Microscope slides & coverslips', 'Urine sediment pipettes'],
      icon: '🧴',
      description: 'Collection & processing'
    },
    {
      id: 'urinalysis-controls',
      name: 'Urinalysis Quality Controls',
      products: ['Positive urinalysis controls', 'Negative urinalysis controls', 'Dipstick QC strips', 'Pregnancy test controls', 'Proficiency testing samples'],
      icon: '✅',
      description: 'Urinalysis QC'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Urinalysis & Body Fluid Reagents | Urine Test Strips | Pacem Health"
        description="Urinalysis and body fluid reagents including urine dipsticks, pregnancy tests, urinalysis reagents. Comprehensive urine testing supplies for African laboratories."
        keywords={[
          'urinalysis reagents Africa',
          'urine test strips',
          'urine dipsticks',
          'pregnancy tests',
          'body fluid testing',
          'urinalysis supplies',
          'urine testing',
          'clinical urinalysis'
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
            <Link to="/products/categories/laboratory-reagents-chemicals" className="hover:underline">
              Laboratory Reagents & Chemicals
            </Link>
            <span>/</span>
            <span>Urinalysis & Body Fluid Reagents</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Urinalysis & Body Fluid Reagents
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive urinalysis and body fluid testing reagents including urine dipsticks, pregnancy tests, CSF reagents, pleural fluid analysis, and urinalysis quality controls. Quality reagents supporting kidney disease screening, UTI diagnosis, pregnancy testing, and meningitis investigation across African healthcare laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of urinalysis and body fluid reagents</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{group.description}</p>
                <div className="space-y-2">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-2 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/laboratory-reagents-chemicals')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Laboratory Reagents & Chemicals
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Urinalysis in African Healthcare</h3>
              <p className="text-gray-700 mb-4">
                Urinalysis is an essential screening test for kidney disease, diabetes, and UTIs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Diabetes screening (glucosuria)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Chronic kidney disease (proteinuria)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>UTI diagnosis (leukocytes, nitrites)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Schistosomiasis screening (hematuria)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Preeclampsia monitoring (proteinuria)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pre-operative screening</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Proper Urinalysis Technique</h3>
              <p className="text-gray-700 mb-4">
                Accurate urinalysis requires proper specimen collection and testing procedures.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Clean-catch midstream specimen collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Test within 1 hour or refrigerate (2-8°C)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Dipstick testing at room temperature</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper timing for dipstick reading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Microscopy of fresh centrifuged sediment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Quality control (positive & negative strips)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}