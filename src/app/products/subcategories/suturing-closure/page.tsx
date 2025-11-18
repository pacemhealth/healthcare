import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function SuturingClosurePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Suturing & Closure",
    "description": "Absorbable sutures, non-absorbable sutures, surgical staplers, wound closure devices for surgical procedures across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'absorbable-sutures',
      name: 'Absorbable Sutures',
      products: ['Polyglactin 910 (Vicryl)', 'Polyglycolic acid (Dexon)', 'Polydioxanone (PDS)', 'Chromic catgut', 'Fast-absorbing gut'],
      icon: '🧵',
      description: 'Dissolving suture materials'
    },
    {
      id: 'non-absorbable-sutures',
      name: 'Non-Absorbable Sutures',
      products: ['Silk (braided)', 'Nylon (monofilament, braided)', 'Polypropylene (Prolene)', 'Polyester (Ethibond, Mersilene)', 'Stainless steel wire'],
      icon: '🔗',
      description: 'Permanent suture materials'
    },
    {
      id: 'suture-needles',
      name: 'Suture Needles',
      products: ['Cutting needles (skin, tough tissue)', 'Taper needles (internal organs)', 'Blunt needles (liver, kidney)', 'Reverse cutting needles', 'Needle sizes (various curves, lengths)'],
      icon: '📌',
      description: 'Surgical needle varieties'
    },
    {
      id: 'pre-loaded-sutures',
      name: 'Pre-Loaded Sutures',
      products: ['Swaged sutures (needle-suture combination)', 'Single-armed sutures', 'Double-armed sutures', 'Control release sutures', 'Pre-packaged sizes (various gauges)'],
      icon: '💉',
      description: 'Ready-to-use suture-needle combinations'
    },
    {
      id: 'skin-staplers',
      name: 'Skin Staplers',
      products: ['Disposable skin staplers (35W, 55W)', 'Staple removers', 'Reusable stapler cartridges', 'Wide staples (cosmetic)', 'Specialty staplers (scalp)'],
      icon: '📎',
      description: 'Mechanical skin closure devices'
    },
    {
      id: 'gi-surgical-staplers',
      name: 'GI & Surgical Staplers',
      products: ['Linear staplers (GIA, TA)', 'Circular staplers (EEA)', 'Laparoscopic staplers', 'Staple cartridges (various sizes)', 'Reloads and accessories'],
      icon: '🔧',
      description: 'Internal organ stapling devices'
    },
    {
      id: 'tissue-adhesives',
      name: 'Tissue Adhesives',
      products: ['Cyanoacrylate glue (Dermabond)', 'Fibrin sealants', 'Hydrogel adhesives', 'Surgical glue applicators', 'Topical skin adhesives'],
      icon: '💧',
      description: 'Liquid wound closure products'
    },
    {
      id: 'adhesive-strips-tapes',
      name: 'Adhesive Strips & Tapes',
      products: ['Steri-Strips (various sizes)', 'Surgical tapes (paper, silk)', 'Skin closure tapes', 'Reinforced strips', 'Hypoallergenic options'],
      icon: '🩹',
      description: 'Non-invasive closure methods'
    },
    {
      id: 'hemostatic-clips',
      name: 'Hemostatic Clips & Ligatures',
      products: ['Ligating clips (titanium, plastic)', 'Clip appliers (laparoscopic, open)', 'Vascular clips (small, medium, large)', 'Endoscopic clips', 'Absorbable clips'],
      icon: '🔒',
      description: 'Vessel ligation devices'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Suturing & Closure | Surgical Wound Closure | Pacem Health"
        description="Suturing and closure including absorbable sutures, non-absorbable sutures, surgical staplers. Comprehensive wound closure devices for African surgical facilities."
        keywords={[
          'suturing supplies Africa',
          'surgical sutures',
          'wound closure',
          'absorbable sutures',
          'surgical staplers',
          'suture materials',
          'wound closure devices',
          'surgical closure'
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
            <span>Suturing & Wound Closure</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Suturing & Wound Closure
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive wound closure solutions including sutures, surgical staplers, clips, and wound closure devices. From absorbable and non-absorbable sutures to tissue adhesives and mechanical closure systems for optimal surgical outcomes across African healthcare settings.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of suturing and wound closure products</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Suture Selection</h3>
              <p className="text-gray-700 mb-4">
                Choosing the right suture material and technique affects wound healing and cosmetic outcomes.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Tissue type considerations (skin, fascia, mucosa)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Absorption timeline matching wound healing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Tensile strength requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Infection risk and material selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cosmetic outcomes and scar minimization</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Alternative Closure Methods</h3>
              <p className="text-gray-700 mb-4">
                Non-suture closure options offer advantages in specific clinical situations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Staplers for rapid closure (trauma, emergency)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Tissue adhesives for pediatric lacerations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Adhesive strips for low-tension wounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cost-effectiveness in resource-limited settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reduced infection risk (no foreign body retention)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wound Healing Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Optimal Wound Closure</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Proper closure technique promotes healing and minimizes complications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">🩹</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Reduced Scarring</h4>
              <p className="text-sm text-gray-700">Proper technique and material selection minimize scar formation and improve cosmesis</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Infection Prevention</h4>
              <p className="text-sm text-gray-700">Appropriate closure reduces wound contamination and surgical site infections</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Faster Healing</h4>
              <p className="text-sm text-gray-700">Quality materials and proper approximation accelerate wound healing process</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}