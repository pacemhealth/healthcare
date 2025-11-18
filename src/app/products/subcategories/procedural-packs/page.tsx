import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function ProceduralPacksPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Procedural Packs",
    "description": "Delivery kits, C-section packs, minor surgery kits, procedure-specific sterile packs across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'normal-delivery-kits',
      name: 'Normal Delivery Kits',
      products: ['Sterile delivery drapes & towels', 'Umbilical cord clamps & scissors', 'Bulb suction (mucus extractor)', 'Sterile gloves (various sizes)', 'Delivery pack (complete set)'],
      icon: '👶',
      description: 'Spontaneous vaginal delivery supplies'
    },
    {
      id: 'c-section-kits',
      name: 'C-Section Delivery Kits',
      products: ['Surgical drapes (fenestrated)', 'Scalpels, scissors, forceps', 'Abdominal retractors', 'Suture materials (absorbable, non-absorbable)', 'Bladder catheterization supplies'],
      icon: '🏥',
      description: 'Cesarean section procedure packs'
    },
    {
      id: 'suture-packs',
      name: 'Suture & Laceration Packs',
      products: ['Local anesthetic (lidocaine)', 'Needles & syringes', 'Suture materials (various gauges)', 'Needle holders & forceps', 'Sterile drapes & gauze'],
      icon: '🧵',
      description: 'Wound closure and repair kits'
    },
    {
      id: 'biopsy-packs',
      name: 'Biopsy Procedure Packs',
      products: ['Biopsy needles (core, fine-needle)', 'Local anesthetic supplies', 'Specimen containers (formalin)', 'Sterile drapes & sponges', 'Pressure dressings'],
      icon: '🔬',
      description: 'Tissue sampling kits'
    },
    {
      id: 'catheterization-packs',
      name: 'Catheterization Packs',
      products: ['Foley catheters (various sizes)', 'Urinary drainage bags', 'Sterile gloves & drapes', 'Antiseptic solution', 'Lubricant jelly (sterile)'],
      icon: '💧',
      description: 'Urinary catheter insertion kits'
    },
    {
      id: 'tracheostomy-kits',
      name: 'Tracheostomy Kits',
      products: ['Tracheostomy tubes (cuffed, uncuffed)', 'Scalpel & dissection instruments', 'Tracheal dilators', 'Tracheostomy ties & dressings', 'Suction catheters'],
      icon: '🫁',
      description: 'Emergency airway procedure kits'
    },
    {
      id: 'chest-tube-kits',
      name: 'Chest Tube Insertion Kits',
      products: ['Chest tubes (various sizes)', 'Thoracostomy tray (instruments)', 'Drainage bottles/bags', 'Suture materials', 'Occlusive dressings'],
      icon: '🏥',
      description: 'Thoracostomy procedure supplies'
    },
    {
      id: 'central-line-kits',
      name: 'Central Line Insertion Kits',
      products: ['Central venous catheters (CVC)', 'Ultrasound probe covers', 'Sterile drapes (full body)', 'Guidewires & dilators', 'Suture & securing devices'],
      icon: '💉',
      description: 'Central venous access kits'
    },
    {
      id: 'lumbar-puncture-kits',
      name: 'Lumbar Puncture Kits',
      products: ['Spinal needles (various gauges)', 'Manometer (CSF pressure)', 'Specimen tubes (sterile)', 'Local anesthetic supplies', 'Sterile drapes & gloves'],
      icon: '🧠',
      description: 'Spinal tap procedure kits'
    },
    {
      id: 'circumcision-kits',
      name: 'Circumcision Kits',
      products: ['Circumcision devices (Gomco, Mogen)', 'Sterile drapes & instruments', 'Local anesthetic', 'Hemostatic agents', 'Dressing materials'],
      icon: '👶',
      description: 'Male circumcision procedure packs'
    },
    {
      id: 'minor-surgery-packs',
      name: 'Minor Surgery Packs',
      products: ['Basic surgical instruments', 'Sterile drapes & towels', 'Suture materials', 'Local anesthetic supplies', 'Dressing materials'],
      icon: '🩹',
      description: 'General minor procedure kits'
    },
    {
      id: 'dental-extraction-packs',
      name: 'Dental Extraction Packs',
      products: ['Tooth extraction forceps', 'Dental elevators', 'Local anesthetic (lidocaine with epinephrine)', 'Gauze sponges', 'Hemostatic agents'],
      icon: '🦷',
      description: 'Tooth extraction procedure kits'
    },
    {
      id: 'wound-debridement-packs',
      name: 'Wound Debridement Packs',
      products: ['Surgical scissors & forceps', 'Scalpels & blades', 'Irrigation solutions (saline)', 'Sterile gauze & dressings', 'Anesthetic supplies'],
      icon: '🩹',
      description: 'Wound cleaning and debridement kits'
    },
    {
      id: 'burn-care-packs',
      name: 'Burn Care Procedure Packs',
      products: ['Silver sulfadiazine cream', 'Non-adherent burn dressings', 'Sterile gauze & bandages', 'Debridement instruments', 'Pain management supplies'],
      icon: '🔥',
      description: 'Acute burn treatment kits'
    },
    {
      id: 'paracentesis-thoracentesis-packs',
      name: 'Paracentesis & Thoracentesis Packs',
      products: ['Aspiration needles & catheters', 'Drainage bottles/bags', 'Sterile drapes & gloves', 'Local anesthetic supplies', 'Specimen containers'],
      icon: '💧',
      description: 'Fluid drainage procedure kits'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Procedural Packs | Sterile Surgery Kits | Pacem Health"
        description="Procedural packs including delivery kits, C-section packs, minor surgery kits. Procedure-specific sterile packs for African healthcare facilities."
        keywords={[
          'procedural packs Africa',
          'delivery kits',
          'C-section packs',
          'sterile surgery kits',
          'procedure kits',
          'surgical packs',
          'medical procedure supplies',
          'sterile procedural kits'
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
            <Link to="/products/categories/surgical-procedural-supplies" className="hover:underline">
              Surgical & Procedural Supplies
            </Link>
            <span>/</span>
            <span>Procedural Packs</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Procedural Packs
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Pre-packaged sterile procedure kits designed for African healthcare settings. From delivery kits (normal delivery, C-section) to minor surgery packs (suture, biopsy, catheterization) and emergency procedure kits (tracheostomy, chest tube insertion). Ready-to-use packs improving efficiency and ensuring complete supply availability for common procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of procedural packs</p>
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

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/surgical-procedural-supplies')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Surgical & Procedural Supplies
            </button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Procedural Pack Benefits</h3>
              <p className="text-gray-700 mb-4">
                Pre-configured packs streamline procedures and ensure all necessary supplies are available.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reduced procedure setup time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Consistent sterile barrier protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Complete supply sets (nothing missing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cost-effective inventory management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Customizable packs for facility needs</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality & Sterilization</h3>
              <p className="text-gray-700 mb-4">
                All procedural packs meet international sterility and quality standards.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Ethylene oxide or gamma sterilization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterility indicators on each pack</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper packaging with expiry dating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Storage recommendations for tropical climates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Batch traceability and quality documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Procedural Efficiency Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Improving Procedural Efficiency</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Standardized packs enhance healthcare delivery across African facilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Faster Procedures</h4>
              <p className="text-sm text-gray-700">Pre-packaged supplies reduce preparation time and enable quick response</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Inventory Simplification</h4>
              <p className="text-sm text-gray-700">Single SKU for entire procedure reduces stock management complexity</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Quality Assurance</h4>
              <p className="text-sm text-gray-700">Standardized packs ensure consistent procedural quality and outcomes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}