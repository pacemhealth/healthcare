import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function SurgicalConsumablesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Surgical Consumables",
    "description": "Surgical sutures, blades, drapes, surgical gloves for operating room procedures across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'surgical-sutures',
      name: 'Surgical Sutures',
      products: ['Absorbable sutures (Vicryl, chromic catgut)', 'Non-absorbable sutures (nylon, silk, prolene)', 'Monofilament & braided sutures', 'Various sizes (2-0 to 6-0)', 'Pre-mounted on needles (taper, cutting)'],
      icon: '🧵'
    },
    {
      id: 'surgical-blades-scalpels',
      name: 'Surgical Blades & Scalpels',
      products: ['Disposable scalpel blades (#10, #11, #15, #20)', 'Reusable scalpel handles (#3, #4, #7)', 'Safety scalpels (retractable)', 'Surgical scissors (Mayo, Metzenbaum)', 'Dissecting forceps'],
      icon: '🔪'
    },
    {
      id: 'surgical-drapes-gowns',
      name: 'Surgical Drapes & Gowns',
      products: ['Sterile surgical drapes (disposable)', 'Fenestrated drapes (various openings)', 'Sterile surgical gowns (AAMI Level 3-4)', 'Laparotomy drape packs', 'Adhesive incise drapes'],
      icon: '🏥'
    },
    {
      id: 'surgical-sponges-swabs',
      name: 'Surgical Sponges & Swabs',
      products: ['Laparotomy sponges (lap pads)', 'Gauze sponges (4x4, 8x8)', 'X-ray detectable sponges', 'Surgical swabs (cotton balls)', 'Sponge counting systems'],
      icon: '🧽'
    },
    {
      id: 'catheters-tubes',
      name: 'Catheters & Tubes',
      products: ['Foley urinary catheters (various sizes)', 'Nasogastric tubes (Ryles tube)', 'Endotracheal tubes (cuffed, uncuffed)', 'Chest drainage tubes', 'Urinary catheter insertion kits'],
      icon: '🔌'
    },
    {
      id: 'surgical-gloves-sterile',
      name: 'Surgical Gloves (Sterile)',
      products: ['Latex surgical gloves (powder-free)', 'Nitrile surgical gloves (latex-free)', 'Double gloving systems', 'Anatomical sizing (6.0-9.0)', 'Orthopedic gloves (extra thick)'],
      icon: '🧤'
    },
    {
      id: 'surgical-staplers-clips',
      name: 'Surgical Staplers & Clips',
      products: ['Skin staplers (35W, 55W)', 'Staple removers', 'Hemostatic clips (ligating clips)', 'Vessel clips (small, medium, large)', 'Disposable clip appliers'],
      icon: '📌'
    },
    {
      id: 'surgical-drainage-systems',
      name: 'Surgical Drainage Systems',
      products: ['Jackson-Pratt drains (bulb suction)', 'Hemovac drains', 'Penrose drains (passive)', 'Chest drainage bottles/bags', 'Wound drainage collection systems'],
      icon: '💧'
    },
    {
      id: 'surgical-kits-packs',
      name: 'Surgical Kits & Procedure Packs',
      products: ['C-section delivery packs', 'Laparotomy procedure packs', 'Minor surgery kits', 'Suture removal kits', 'Central line insertion kits'],
      icon: '📦'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Surgical Consumables | Operating Room Supplies | Pacem Health"
        description="Surgical consumables including surgical sutures, blades, drapes, surgical gloves. Comprehensive operating room supplies for African surgical facilities."
        keywords={[
          'surgical consumables Africa',
          'surgical sutures',
          'surgical blades',
          'operating room supplies',
          'surgical drapes',
          'sterile surgical supplies',
          'surgical equipment',
          'OR supplies'
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
            <Link to="/products/categories/medical-consumables" className="hover:underline">
              Medical Consumables
            </Link>
            <span>/</span>
            <span>Surgical Consumables</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Surgical Consumables
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive range of sutures, surgical blades, sterile drapes, gowns, and operating room supplies designed to support safe surgical procedures across Africa. From emergency C-sections to complex abdominal surgeries, our surgical consumables meet international sterility standards while addressing the continent's unique challenges of limited operating room capacity, supply chain disruptions, and surgical site infection prevention.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of surgical consumables and operating room supplies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-4 group-hover:text-[#4B2991] transition-colors">
                  {group.name}
                </h3>
                <div className="space-y-2">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-2 bg-[#4B2991] text-white rounded-lg hover:bg-[#3A1F70] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/medical-consumables')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Medical Consumables
            </button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Safe Surgery Saves Lives</h3>
              <p className="text-gray-700 mb-4">
                The WHO Safe Surgery Checklist and proper surgical consumables are essential to prevent complications. Surgical site infections (SSIs), anesthesia complications, and inadequate sterile supplies are major causes of surgical mortality in low-resource settings.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterile surgical drapes create barrier against contamination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Quality sutures enable proper wound closure, reduce dehiscence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Surgical sponge counts prevent retained foreign bodies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper catheters reduce urinary tract infections, pressure ulcers</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality & Sterility Assurance</h3>
              <p className="text-gray-700 mb-4">
                All surgical consumables meet international sterility and quality standards with validated packaging for tropical climate stability.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Gamma-irradiated or EtO sterilization validated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ISO 13485 certified manufacturing facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterility indicators on every package (chemical, biological)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Tropical climate packaging (heat & humidity stable)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Products Matter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Critical for African Healthcare</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Surgical consumables enable life-saving emergency and elective surgeries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🤰</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Emergency Obstetric Surgery</h4>
              <p className="text-sm text-gray-700">
                C-sections save lives when labor complications arise (obstructed labor, fetal distress, eclampsia). Surgical consumables—sutures, blades, drapes, catheters—are essential for safe emergency obstetric surgery. Stockouts delay C-sections, leading to maternal and neonatal deaths that could be prevented with timely surgical intervention.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🚑</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Trauma & Emergency Surgery</h4>
              <p className="text-sm text-gray-700">
                Road traffic injuries, penetrating trauma, and acute abdominal emergencies (appendicitis, ectopic pregnancy) require emergency surgery. Sutures, scalpels, and laparotomy packs enable life-saving procedures. Delays due to consumables shortages increase mortality from preventable surgical conditions, especially in rural areas with limited surgical capacity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🦠</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Preventing Surgical Site Infections</h4>
              <p className="text-sm text-gray-700">
                SSI rates in Africa (5-30%) are 5-10 times higher than developed countries due to inadequate sterile supplies, overcrowding, and poor infection control. Sterile drapes, gowns, and proper wound closure with quality sutures significantly reduce infection risk. SSIs prolong hospital stays, require antibiotics, and can lead to sepsis and death.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Challenges in Africa */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Surgical Challenges in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access, infrastructure, and supply chain barriers to safe surgery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Access & Capacity Gaps</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Surgeon Shortage:</strong> 0.7 surgeons per 100,000 people (vs. 20+ in high-income countries)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Limited Operating Rooms:</strong> Many district hospitals have 1-2 ORs, often non-functional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Anesthesia Gaps:</strong> Shortage of anesthesiologists → delays, cancellations, complications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Geographic Barriers:</strong> Rural patients travel hours to reach surgical facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Cost Barriers:</strong> Out-of-pocket surgical costs catastrophic for poor families</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Supply Chain & Quality Issues</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Stockouts:</strong> 40-70% of facilities lack essential surgical consumables (sutures, gloves, drapes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Surgery Cancellations:</strong> Procedures postponed or cancelled due to consumables shortages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Expired Products:</strong> Poor inventory management → expired sutures, sterile packs discarded</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Substandard Supplies:</strong> Low-quality sutures break during procedures, drapes tear easily</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Sterilization Failures:</strong> Autoclave breakdowns → non-sterile supplies, infection risk</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Solutions for Strengthening Surgical Services</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Task Shifting:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Train non-physician clinicians (NPCs) for essential surgeries</li>
                      <li>✓ C-sections, hernia repairs, trauma surgery by NPCs</li>
                      <li>✓ Expands surgical access in rural areas</li>
                      <li>✓ WHO-endorsed safe surgery protocols</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Supply Chain Solutions:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Pre-positioned surgical kits (C-section, laparotomy)</li>
                      <li>✓ Just-in-time ordering systems</li>
                      <li>✓ Consignment stock for high-turnover items</li>
                      <li>✓ Emergency stockpiles for disaster response</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Infection Prevention:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ WHO Safe Surgery Checklist (antibiotic prophylaxis)</li>
                      <li>✓ Sterile technique training</li>
                      <li>✓ Surgical site surveillance (track SSI rates)</li>
                      <li>✓ Quality improvement programs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Training & Technical Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert guidance on surgical techniques and infection prevention protocols
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Suturing Techniques</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Simple interrupted sutures</li>
                <li>• Continuous running sutures</li>
                <li>• Subcuticular closure (cosmetic)</li>
                <li>• Suture material selection</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Sterile Technique</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Surgical hand scrub protocols</li>
                <li>• Sterile gowning & gloving</li>
                <li>• Maintaining sterile field</li>
                <li>• Draping techniques</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Safe Surgery Checklist</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• WHO Safe Surgery protocol</li>
                <li>• Sign In, Time Out, Sign Out</li>
                <li>• Sponge & instrument counts</li>
                <li>• Antibiotic prophylaxis timing</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Supply Management</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Surgical consumables forecasting</li>
                <li>• Inventory management (FEFO)</li>
                <li>• Emergency stockpile planning</li>
                <li>• Autoclave operation & maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Need Surgical Consumables?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us for bulk pricing, surgical kits, and safe surgery training support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support/request-equipment-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              to="/support/training-education"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors text-lg"
            >
              Training Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}