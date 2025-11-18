import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function SpecimenCollectionProcessingPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Specimen Collection & Processing",
    "description": "Blood collection tubes, needles, specimen containers, phlebotomy supplies for laboratory sample collection across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'blood-collection-tubes',
      name: 'Blood Collection Tubes',
      products: ['EDTA tubes (CBC)', 'Serum tubes (chemistry)', 'Sodium citrate tubes (coagulation)', 'Heparin tubes', 'Glucose tubes (sodium fluoride)'],
      icon: '🧪',
      description: 'Evacuated blood collection'
    },
    {
      id: 'needles-holders',
      name: 'Needles & Holders',
      products: ['Butterfly needles (21G, 23G, 25G)', 'Vacutainer holders', 'Safety needles (retractable)', 'Pediatric collection needles', 'Lancets (fingerstick)'],
      icon: '💉',
      description: 'Phlebotomy needles'
    },
    {
      id: 'capillary-collection',
      name: 'Capillary Blood Collection',
      products: ['Capillary tubes (hematocrit)', 'Microtubes (EDTA, serum)', 'Lancets & lancing devices', 'Heel stick lancets (neonates)', 'Capillary collection kits'],
      icon: '🩸',
      description: 'Fingerstick collection'
    },
    {
      id: 'urine-collection',
      name: 'Urine Collection',
      products: ['Urine collection cups (sterile)', '24-hour urine containers', 'Pediatric urine bags', 'Urine transport tubes', 'Preservatives (boric acid)'],
      icon: '🧪',
      description: 'Urine specimen collection'
    },
    {
      id: 'stool-collection',
      name: 'Stool & Fecal Collection',
      products: ['Stool collection containers', 'Fecal occult blood kits', 'Parasite collection (preservative)', 'Cary-Blair transport media', 'Spatulas & scoops'],
      icon: '📦',
      description: 'Fecal specimen collection'
    },
    {
      id: 'swabs-transport',
      name: 'Swabs & Transport Media',
      products: ['Sterile swabs (rayon, flocked)', 'Viral transport media (VTM)', 'Bacterial transport (Stuart, Amies)', 'Nasopharyngeal swabs', 'Wound swab kits'],
      icon: '🧬',
      description: 'Microbiology specimen collection'
    },
    {
      id: 'sputum-collection',
      name: 'Sputum Collection',
      products: ['Sputum collection cups', 'TB sputum containers', 'Induced sputum kits', 'Mucolytic agents', 'Safety collection (biosafety)'],
      icon: '🫁',
      description: 'Respiratory specimen collection'
    },
    {
      id: 'csf-collection',
      name: 'CSF & Body Fluid Collection',
      products: ['CSF collection tubes (numbered 1-4)', 'Pleural fluid containers', 'Ascitic fluid tubes', 'Synovial fluid tubes', 'Pericardial fluid collection'],
      icon: '💧',
      description: 'Sterile fluid collection'
    },
    {
      id: 'tissue-biopsy',
      name: 'Tissue & Biopsy Collection',
      products: ['Biopsy containers (formalin)', 'Tissue cassettes', 'Specimen bags', 'Fine needle aspiration kits', 'Bone marrow collection tubes'],
      icon: '🔬',
      description: 'Histology specimens'
    },
    {
      id: 'blood-culture-collection',
      name: 'Blood Culture Collection',
      products: ['Blood culture bottles (aerobic, anaerobic)', 'Pediatric blood culture bottles', 'Blood culture collection kits', 'Skin disinfection (chlorhexidine)', 'Specimen labels'],
      icon: '🧫',
      description: 'Sepsis specimen collection'
    },
    {
      id: 'tourniquet-accessories',
      name: 'Tourniquets & Accessories',
      products: ['Latex-free tourniquets', 'Disposable tourniquets', 'Alcohol prep pads', 'Gauze sponges', 'Bandages & tape'],
      icon: '🩹',
      description: 'Phlebotomy accessories'
    },
    {
      id: 'specimen-transport',
      name: 'Specimen Transport Supplies',
      products: ['Biohazard specimen bags', 'Triple packaging kits', 'Absorbent pads', 'Cold chain boxes (with ice packs)', 'Specimen tracking labels'],
      icon: '📦',
      description: 'Sample logistics'
    },
    {
      id: 'centrifuge-tubes',
      name: 'Centrifuge Tubes',
      products: ['Conical centrifuge tubes (15ml, 50ml)', 'Microcentrifuge tubes (1.5ml, 2ml)', 'Centrifuge tube racks', 'Ultra-centrifuge tubes', 'Screw-cap tubes'],
      icon: '⚙️',
      description: 'Sample processing tubes'
    },
    {
      id: 'sample-aliquoting',
      name: 'Sample Aliquoting & Storage',
      products: ['Cryovials (freezer storage)', 'Sample storage boxes', 'Barcode labels', 'Pipettes for aliquoting', 'Freezer racks'],
      icon: '❄️',
      description: 'Sample archiving'
    },
    {
      id: 'phlebotomy-chairs',
      name: 'Phlebotomy Stations',
      products: ['Phlebotomy chairs (adjustable)', 'Blood draw chairs with armrest', 'Pediatric collection chairs', 'Mobile phlebotomy carts', 'Sharps disposal containers'],
      icon: '🪑',
      description: 'Collection room furniture'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Specimen Collection & Processing | Phlebotomy Supplies | Pacem Health"
        description="Specimen collection and processing including blood collection tubes, needles, specimen containers. Comprehensive phlebotomy supplies for African laboratories."
        keywords={[
          'specimen collection Africa',
          'blood collection tubes',
          'phlebotomy supplies',
          'specimen containers',
          'laboratory collection',
          'sample collection',
          'blood draw supplies',
          'specimen processing'
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
            <Link to="/products/categories/diagnostic-equipment-supplies" className="hover:underline">
              Diagnostic Equipment & Supplies
            </Link>
            <span>/</span>
            <span>Specimen Collection & Processing</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Specimen Collection & Processing
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Complete specimen collection and processing supplies including blood collection tubes, needles, swabs, transport media, and specimen processing equipment. Quality pre-analytical supplies ensuring specimen integrity from collection through testing across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of specimen collection and processing supplies</p>
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
              onClick={() => navigate('/products/categories/diagnostic-equipment-supplies')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Diagnostic Equipment & Supplies
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Pre-Analytical Quality</h3>
              <p className="text-gray-700 mb-4">
                Proper specimen collection is critical for accurate laboratory results.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Correct tube selection (anticoagulant matching)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper order of draw (cross-contamination prevention)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Adequate sample volume</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Patient identification and labeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Time-sensitive specimen handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Phlebotomist training and competency</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Specimen Transport & Storage</h3>
              <p className="text-gray-700 mb-4">
                Maintaining specimen integrity during transport and storage ensures reliable results.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Temperature control (refrigerated, ambient, frozen)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Leak-proof packaging (triple-packaging for infectious)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Biosafety compliance (UN 3373 regulations)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Specimen tracking and chain of custody</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Timely delivery to laboratory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Rejection criteria for compromised specimens</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Safety in Specimen Collection</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Protecting healthcare workers and patients during specimen collection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">🩹</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Needlestick Prevention</h4>
              <p className="text-sm text-gray-700">Safety-engineered devices, sharps containers, and proper disposal procedures</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">🧤</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Personal Protection</h4>
              <p className="text-sm text-gray-700">Gloves, hand hygiene, and PPE for infection prevention</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">⚠️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Biohazard Handling</h4>
              <p className="text-sm text-gray-700">Proper labeling, containment, and transport of infectious specimens</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}