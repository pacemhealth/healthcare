import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function SpecialtySurgicalInstrumentsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Specialty Surgical Instruments",
    "description": "Orthopedic, cardiovascular, neurosurgical, ophthalmology specialized surgical instruments across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'orthopedic-trauma',
      name: 'Orthopedic & Trauma Instruments',
      products: ['External fixators (Ilizarov, monolateral)', 'Intramedullary nails (femur, tibia)', 'Bone plates & screws (various sizes)', 'Bone saws & drills', 'K-wires & Steinmann pins'],
      icon: '🦴',
      description: 'Fracture fixation and bone surgery'
    },
    {
      id: 'cardiovascular-instruments',
      name: 'Cardiovascular Instruments',
      products: ['Vascular clamps (DeBakey, Satinsky, bulldog)', 'Cardiovascular scissors & forceps', 'Vessel loops & umbilical tapes', 'Cardiovascular sutures (Prolene)', 'Vein strippers'],
      icon: '❤️',
      description: 'Cardiac and vascular procedures'
    },
    {
      id: 'neurosurgery-instruments',
      name: 'Neurosurgery Instruments',
      products: ['Craniotomy drills & perforators', 'Rongeurs (bone biting forceps)', 'Brain spatulas & retractors', 'Micro-neurosurgical instruments', 'Spinal retractor systems'],
      icon: '🧠',
      description: 'Brain and spinal surgery tools'
    },
    {
      id: 'ophthalmic-surgery',
      name: 'Ophthalmic Surgery Instruments',
      products: ['Cataract extraction sets', 'Phaco handpieces & tips', 'IOL insertion devices', 'Ophthalmic forceps & scissors', 'Eye speculums & retractors'],
      icon: '👁️',
      description: 'Eye surgery instruments'
    },
    {
      id: 'ent-instruments',
      name: 'ENT Surgery Instruments',
      products: ['Nasal speculum & instruments', 'Tonsillectomy sets', 'Microlaryngeal instruments', 'Ear surgery sets (ossicles)', 'Sinus surgery instruments'],
      icon: '👂',
      description: 'Ear, nose, throat procedures'
    },
    {
      id: 'thoracic-instruments',
      name: 'Thoracic Surgery Instruments',
      products: ['Rib spreaders & retractors', 'Lung graspers & clamps', 'Thoracic scissors & forceps', 'Sternum saws & retractors', 'Chest closure instruments'],
      icon: '🫁',
      description: 'Chest surgery tools'
    },
    {
      id: 'urology-instruments',
      name: 'Urology Instruments',
      products: ['Cystoscopes (rigid, flexible)', 'Lithotripsy instruments', 'TURP resectoscopes', 'Urethral dilators & sounds', 'Stone baskets & graspers'],
      icon: '💧',
      description: 'Urological procedure instruments'
    },
    {
      id: 'gynecology-instruments',
      name: 'Gynecology Instruments',
      products: ['Vaginal speculums (Graves, Cusco)', 'Uterine curettes (sharp, blunt)', 'Tenaculum forceps', 'Cervical biopsy instruments', 'Hysteroscopes'],
      icon: '🩺',
      description: 'Gynecological surgery tools'
    },
    {
      id: 'plastic-reconstructive',
      name: 'Plastic & Reconstructive Instruments',
      products: ['Skin graft knives (dermatomes)', 'Micro-surgical instruments', 'Tissue expanders', 'Suction-assisted lipectomy', 'Specialized retractors'],
      icon: '✨',
      description: 'Plastic surgery instruments'
    },
    {
      id: 'maxillofacial-instruments',
      name: 'Maxillofacial Surgery Instruments',
      products: ['Mandibular plating systems', 'Maxillary osteotomy instruments', 'TMJ surgery sets', 'Facial fracture fixation', 'Bone grafting instruments'],
      icon: '🦴',
      description: 'Facial bone surgery tools'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Specialty Surgical Instruments | Advanced Surgery Tools | Pacem Health"
        description="Specialty surgical instruments including orthopedic, cardiovascular, neurosurgical, ophthalmology instruments. Advanced surgical tools for African specialty surgeries."
        keywords={[
          'specialty surgical instruments Africa',
          'orthopedic instruments',
          'neurosurgical tools',
          'cardiovascular instruments',
          'specialized surgery equipment',
          'advanced surgical instruments',
          'specialty surgery tools',
          'specialized medical instruments'
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
            <span>Specialty Surgical Instruments</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Specialty Surgical Instruments
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Advanced specialty instruments for orthopedic, cardiovascular, neurosurgery, and other specialized surgical procedures. Precision-engineered tools supporting complex interventions across African tertiary care facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of specialty surgical instruments</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Precision Engineering</h3>
              <p className="text-gray-700 mb-4">
                Specialty instruments demand the highest manufacturing standards for optimal surgical outcomes.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Surgical-grade materials (titanium, stainless steel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Precision tolerances for complex procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Specialized coatings (anodized, diamond-coated)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Ergonomic designs for extended procedures</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Training & Support</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive training ensures proper use of advanced surgical instruments.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Surgeon training and proctoring programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>OR staff instrument handling education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Maintenance and calibration services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Technical support and troubleshooting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}