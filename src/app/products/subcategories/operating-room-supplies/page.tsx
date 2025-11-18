import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function OperatingRoomSuppliesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Operating Room Supplies",
    "description": "Surgical drapes, sterile gowns, surgical packs, OR equipment for operating theaters across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'surgical-drapes-sterile',
      name: 'Sterile Surgical Drapes',
      products: ['Fenestrated drapes (laparotomy, C-section)', 'Plain sterile drapes (various sizes)', 'Adhesive drapes (incise drapes)', 'Extremity drapes', 'U-shaped drapes'],
      icon: '🏥',
      description: 'Single-use sterile barrier drapes'
    },
    {
      id: 'surgical-drapes-reusable',
      name: 'Reusable Surgical Drapes',
      products: ['Cotton surgical drapes (washable)', 'Reinforced reusable drapes', 'Drape packs (pre-configured sets)', 'Mayo stand covers', 'Drape clips & holders'],
      icon: '♻️',
      description: 'Cost-effective autoclavable drapes'
    },
    {
      id: 'surgical-gowns',
      name: 'Surgical Gowns',
      products: ['Sterile surgical gowns (disposable)', 'Reinforced surgical gowns (fluid-resistant)', 'Reusable cotton surgical gowns', 'Isolation gowns (various levels)', 'Gown sizes (S, M, L, XL, XXL)'],
      icon: '🥼',
      description: 'Sterile protective gowns for surgical staff'
    },
    {
      id: 'surgical-scrubs',
      name: 'Surgical Scrubs',
      products: ['Scrub tops (V-neck, round neck)', 'Scrub pants (drawstring, elastic)', 'Scrub caps (bouffant, skull cap)', 'Shoe covers (disposable)', 'Scrub sets (pre-packaged)'],
      icon: '👔',
      description: 'OR attire for surgical teams'
    },
    {
      id: 'operating-table-accessories',
      name: 'Operating Table Accessories',
      products: ['Patient positioning pads', 'Operating table straps', 'Arm boards & supports', 'Head rests & rings', 'Lithotomy stirrups'],
      icon: '🛏️',
      description: 'Patient positioning and safety equipment'
    },
    {
      id: 'anesthesia-masks',
      name: 'Anesthesia Masks',
      products: ['Face masks (various sizes: neonatal, pediatric, adult)', 'Laryngeal masks (LMA)', 'Oxygen masks (simple, non-rebreather)', 'Nebulizer masks', 'CPAP masks'],
      icon: '😷',
      description: 'Airway management masks'
    },
    {
      id: 'anesthesia-circuits',
      name: 'Anesthesia Circuits',
      products: ['Breathing circuits (circle, Bain)', 'CO2 absorber canisters', 'Anesthesia tubing & connectors', 'Bacterial/viral filters', 'Heat & moisture exchangers (HME)'],
      icon: '🔄',
      description: 'Gas delivery and ventilation systems'
    },
    {
      id: 'endotracheal-tubes',
      name: 'Endotracheal Tubes',
      products: ['Cuffed ETT (various sizes)', 'Uncuffed ETT (pediatric)', 'Reinforced ETT (armored)', 'Preformed ETT (RAE tubes)', 'Double-lumen tubes'],
      icon: '🫁',
      description: 'Airway intubation devices'
    },
    {
      id: 'laryngoscopes-intubation',
      name: 'Laryngoscopes & Intubation Equipment',
      products: ['Laryngoscope handles (standard, fiber-optic)', 'Laryngoscope blades (Macintosh, Miller)', 'Video laryngoscopes', 'Stylets & bougies', 'Magill forceps'],
      icon: '🔦',
      description: 'Visualization and intubation tools'
    },
    {
      id: 'or-linen-supplies',
      name: 'OR Linen & Supplies',
      products: ['Surgical towels & sponges', 'Patient blankets (warming)', 'OR mattress covers', 'Pillow cases (sterile)', 'Laundry bags (color-coded)'],
      icon: '🧺',
      description: 'Textiles and linen for operating rooms'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Operating Room Supplies | Surgical OR Equipment | Pacem Health"
        description="Operating room supplies including surgical drapes, sterile gowns, surgical packs. Comprehensive OR equipment for African surgical theaters."
        keywords={[
          'operating room supplies Africa',
          'surgical drapes',
          'OR equipment',
          'surgical gowns',
          'sterile supplies',
          'operating theater equipment',
          'surgical theater supplies',
          'OR consumables'
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
            <span>Operating Room Supplies</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Operating Room Supplies
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Essential operating room supplies including surgical drapes (sterile, disposable, reusable), surgical gowns and scrubs, operating table accessories, and comprehensive anesthesia supplies (masks, circuits, endotracheal tubes). Quality OR equipment supporting safe surgical procedures across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of operating room supplies</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Sterile Barrier Systems</h3>
              <p className="text-gray-700 mb-4">
                Surgical drapes and gowns providing critical infection control barriers during operative procedures.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Fluid-resistant barrier protection (AAMI Level 3-4)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterile single-use and reusable options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reinforced high-risk areas (chest, sleeves)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cost-effective solutions for resource-limited settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Fenestrated drapes for various surgical procedures</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Anesthesia Equipment Safety</h3>
              <p className="text-gray-700 mb-4">
                Quality anesthesia supplies ensuring patient safety and effective airway management during surgery.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper sizing for neonatal to adult patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Disposable circuits reducing infection risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Backup equipment always available</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular equipment inspection and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Training programs for anesthesia providers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OR Efficiency Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Optimizing OR Workflow</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Well-stocked operating rooms improve surgical efficiency and patient outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">⏱️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Reduced Turnover Time</h4>
              <p className="text-sm text-gray-700">Pre-packaged drape sets and standardized supplies accelerate room preparation</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">📋</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Inventory Management</h4>
              <p className="text-sm text-gray-700">Proper stock levels prevent surgical delays and cancellations</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Infection Control</h4>
              <p className="text-sm text-gray-700">Consistent use of sterile barriers reduces surgical site infections</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}