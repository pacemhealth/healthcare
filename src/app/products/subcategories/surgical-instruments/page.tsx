import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function SurgicalInstrumentsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Surgical Instruments",
    "description": "Basic surgical sets, retractors, clamps, cutting instruments for surgical procedures across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'basic-surgical-sets',
      name: 'Basic Surgical Sets',
      products: ['Scalpel handles & blades', 'Mayo scissors (straight, curved)', 'Tissue forceps (toothed, non-toothed)', 'Hemostatic forceps (Kelly, Crile, Mosquito)', 'Needle holders (Mayo-Hegar, Olsen-Hegar)'],
      icon: '🔪',
      description: 'Essential general surgery instruments'
    },
    {
      id: 'retractors-spreaders',
      name: 'Retractors & Spreaders',
      products: ['Army-Navy retractors', 'Deaver retractors (various sizes)', 'Richardson retractors', 'Balfour self-retaining retractor', 'Weitlaner self-retaining retractor'],
      icon: '🔧',
      description: 'Surgical field exposure tools'
    },
    {
      id: 'clamps-forceps',
      name: 'Clamps & Forceps',
      products: ['Allis tissue forceps', 'Babcock tissue graspers', 'Kocher clamps', 'Towel clamps (Backhaus)', 'Sponge forceps (ring forceps)'],
      icon: '🔩',
      description: 'Tissue handling and clamping instruments'
    },
    {
      id: 'specialty-instruments-orthopedic',
      name: 'Orthopedic Instruments',
      products: ['Bone saws (Gigli wire saw, oscillating saw)', 'Bone drills & drill bits', 'Bone plates & screws (various sizes)', 'Bone mallets & chisels', 'External fixation devices'],
      icon: '🦴',
      description: 'Fracture repair and bone surgery tools'
    },
    {
      id: 'cardiovascular-instruments',
      name: 'Cardiovascular Instruments',
      products: ['Vascular clamps (DeBakey, Satinsky)', 'Vascular forceps', 'Vascular scissors', 'Arterial cannulas', 'Cardiovascular sutures (specialized)'],
      icon: '❤️',
      description: 'Vascular and cardiac surgery instruments'
    },
    {
      id: 'neurosurgical-instruments',
      name: 'Neurosurgical Instruments',
      products: ['Cranial perforators & drills', 'Rongeurs (bone biting forceps)', 'Brain spatulas', 'Micro-scissors & forceps', 'Neurosurgical retractors'],
      icon: '🧠',
      description: 'Brain and spinal surgery tools'
    },
    {
      id: 'electrosurgical-units',
      name: 'Electrosurgical Units',
      products: ['Monopolar cautery units', 'Bipolar cautery forceps', 'Electrosurgical pencils', 'Ground pads (patient plates)', 'Cautery tips & electrodes'],
      icon: '⚡',
      description: 'Cutting and coagulation devices'
    },
    {
      id: 'laparoscopic-instruments',
      name: 'Laparoscopic Instruments',
      products: ['Trocars (5mm, 10mm, 12mm)', 'Laparoscopic graspers & forceps', 'Laparoscopic scissors', 'Clip appliers', 'Laparoscopic suction-irrigation'],
      icon: '🔬',
      description: 'Minimally invasive surgery tools'
    },
    {
      id: 'suture-materials',
      name: 'Suture Materials',
      products: ['Absorbable sutures (Vicryl, chromic catgut)', 'Non-absorbable sutures (Silk, Nylon, Prolene)', 'Suture needles (cutting, taper, blunt)', 'Pre-loaded suture needles', 'Suture removal kits'],
      icon: '🧵',
      description: 'Wound closure materials'
    },
    {
      id: 'surgical-staplers',
      name: 'Surgical Staplers',
      products: ['Skin staplers (35W, 55W)', 'GI staplers (linear, circular)', 'Staple removers', 'Staple cartridges (various sizes)', 'Laparoscopic staplers'],
      icon: '📌',
      description: 'Mechanical wound closure devices'
    },
    {
      id: 'wound-closure-devices',
      name: 'Wound Closure Devices',
      products: ['Tissue adhesives (cyanoacrylate)', 'Adhesive strips (Steri-Strips)', 'Skin closure tapes', 'Hemostatic clips (ligating clips)', 'Vessel sealing devices'],
      icon: '🩹',
      description: 'Alternative closure methods'
    },
    {
      id: 'surgical-scissors',
      name: 'Surgical Scissors',
      products: ['Operating scissors (straight, curved)', 'Metzenbaum scissors (dissecting)', 'Iris scissors (fine dissection)', 'Bandage scissors (Lister)', 'Wire cutting scissors'],
      icon: '✂️',
      description: 'Cutting and dissection instruments'
    },
    {
      id: 'specialty-forceps',
      name: 'Specialty Forceps',
      products: ['Adson forceps (toothed, non-toothed)', 'DeBakey tissue forceps', 'Russian tissue forceps', 'Cushing tissue forceps', 'Gerald forceps (delicate)'],
      icon: '🔧',
      description: 'Precision tissue handling'
    },
    {
      id: 'diathermy-equipment',
      name: 'Diathermy Equipment',
      products: ['Monopolar diathermy handpieces', 'Bipolar diathermy forceps', 'Diathermy footswitches', 'Return electrode cables', 'Smoke evacuation systems'],
      icon: '⚡',
      description: 'Thermal tissue treatment'
    },
    {
      id: 'endoscopic-instruments',
      name: 'Endoscopic Instruments',
      products: ['Flexible endoscopes (gastroscope, colonoscope)', 'Rigid endoscopes (cystoscope, arthroscope)', 'Biopsy forceps', 'Polypectomy snares', 'Endoscopic clips & bands'],
      icon: '🔍',
      description: 'Internal visualization tools'
    },
    {
      id: 'ophthalmic-instruments',
      name: 'Ophthalmic Instruments',
      products: ['Cataract extraction instruments', 'Micro-forceps & scissors', 'Eye speculums', 'IOL insertion devices', 'Ophthalmic sutures (10-0, 9-0)'],
      icon: '👁️',
      description: 'Eye surgery instruments'
    },
    {
      id: 'obstetric-instruments',
      name: 'Obstetric Instruments',
      products: ['Episiotomy scissors', 'Placental forceps', 'Umbilical cord clamps', 'Vacuum extractors', 'Obstetric forceps (outlet, mid-cavity)'],
      icon: '👶',
      description: 'Delivery and maternal care instruments'
    },
    {
      id: 'dental-surgical-instruments',
      name: 'Dental Surgical Instruments',
      products: ['Tooth extraction forceps', 'Dental elevators', 'Surgical dental drills', 'Bone files & rasps', 'Mouth gags & retractors'],
      icon: '🦷',
      description: 'Oral and maxillofacial surgery tools'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Surgical Instruments | Medical Surgery Equipment | Pacem Health"
        description="Surgical instruments including basic surgical sets, retractors, clamps, cutting instruments. Comprehensive surgical equipment for African operating rooms."
        keywords={[
          'surgical instruments Africa',
          'surgical equipment',
          'operating room instruments',
          'surgical sets',
          'medical instruments',
          'surgery tools',
          'surgical supplies',
          'hospital surgical equipment'
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
            <span>Surgical Instruments</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Surgical Instruments
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive range of surgical instruments combining basic surgical sets, specialty instruments for orthopedic, cardiovascular, and neurosurgical procedures, electrosurgical equipment, laparoscopic instruments, suturing supplies, and wound closure devices. Quality instruments meeting international standards while addressing African surgical care needs.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of surgical instruments</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality & Standards</h3>
              <p className="text-gray-700 mb-4">
                All surgical instruments meet international quality standards from reputable manufacturers worldwide.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>CE marked and ISO certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Surgical-grade stainless steel (German or Pakistani)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Autoclavable for multiple sterilization cycles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Ergonomic designs reducing surgeon fatigue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Comprehensive warranty and servicing support</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Instrument Care & Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Proper care extends instrument lifespan and ensures surgical safety across African healthcare facilities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cleaning protocols immediately post-procedure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper sterilization techniques (autoclave, ETO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular sharpening and calibration services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Storage in proper instrument trays and containers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Training programs for instrument handling staff</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Safety Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Surgical Safety Considerations</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Quality instruments are essential for safe surgical outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Infection Prevention</h4>
              <p className="text-sm text-gray-700">Properly designed instruments minimize tissue trauma and reduce infection risk</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">⚕️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Precision Surgery</h4>
              <p className="text-sm text-gray-700">High-quality instruments enable precise surgical techniques and better outcomes</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Surgeon Confidence</h4>
              <p className="text-sm text-gray-700">Reliable instruments build surgical team confidence and workflow efficiency</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}