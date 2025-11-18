import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function MinimallyInvasiveSurgeryPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Minimally Invasive Surgery",
    "description": "Laparoscopic trocars, laparoscopic instruments, endoscopy equipment for minimally invasive procedures across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'laparoscopic-trocars',
      name: 'Laparoscopic Trocars',
      products: ['5mm trocars (accessory ports)', '10mm trocars (camera port)', '12mm trocars (specimen removal)', 'Bladeless trocars (safety)', 'Optical trocars (visualization)'],
      icon: '🔧',
      description: 'Minimally invasive port access'
    },
    {
      id: 'laparoscopic-graspers',
      name: 'Laparoscopic Graspers & Forceps',
      products: ['Atraumatic graspers', 'Babcock graspers', 'Bowel graspers', 'Dissecting forceps', 'Specimen retrieval forceps'],
      icon: '🔩',
      description: 'Tissue manipulation instruments'
    },
    {
      id: 'laparoscopic-scissors',
      name: 'Laparoscopic Scissors',
      products: ['Curved scissors', 'Straight scissors', 'Hook scissors', 'Metzenbaum scissors', 'Monopolar scissors'],
      icon: '✂️',
      description: 'Cutting and dissection tools'
    },
    {
      id: 'laparoscopic-camera-systems',
      name: 'Laparoscopic Camera Systems',
      products: ['HD camera heads (1080p, 4K)', 'Laparoscopes (0°, 30°, 45° viewing)', 'Light sources (LED, Xenon)', 'Camera control units', 'Image capture systems'],
      icon: '📹',
      description: 'Visualization equipment'
    },
    {
      id: 'insufflation-equipment',
      name: 'Insufflation Equipment',
      products: ['CO2 insufflators (pneumoperitoneum)', 'Veress needles', 'Hasson trocars (open technique)', 'Pressure monitoring systems', 'Gas filters & tubing'],
      icon: '💨',
      description: 'Abdominal cavity inflation'
    },
    {
      id: 'laparoscopic-suction-irrigation',
      name: 'Laparoscopic Suction-Irrigation',
      products: ['Suction-irrigation cannulas', 'Suction tubing & systems', 'Irrigation fluid bags', 'Trumpet valve controls', 'Disposable tips'],
      icon: '💧',
      description: 'Fluid management devices'
    },
    {
      id: 'clip-appliers',
      name: 'Clip Appliers & Ligators',
      products: ['Laparoscopic clip appliers', 'Titanium clips (small, medium, large)', 'Polymer clips (absorbable)', 'Endo-loop ligatures', 'Automatic clip appliers'],
      icon: '📎',
      description: 'Hemostasis and ligation'
    },
    {
      id: 'laparoscopic-staplers',
      name: 'Laparoscopic Staplers',
      products: ['Linear cutting staplers (Endo-GIA)', 'Articulating staplers', 'Vessel sealing staplers', 'Staple cartridges (various sizes)', 'Reload cartridges'],
      icon: '🔗',
      description: 'Tissue division and anastomosis'
    },
    {
      id: 'specimen-retrieval',
      name: 'Specimen Retrieval Systems',
      products: ['Specimen bags (various sizes)', 'Retrieval forceps', 'Morcellators (electromechanical)', 'Bag introducers', 'Specimen extraction devices'],
      icon: '🎯',
      description: 'Tissue removal instruments'
    },
    {
      id: 'robotic-surgery-instruments',
      name: 'Robotic Surgery Instruments',
      products: ['Robotic instrument arms', 'EndoWrist instruments', 'Robotic camera systems', 'Surgeon console components', 'Patient cart accessories'],
      icon: '🤖',
      description: 'Robot-assisted surgical tools'
    },
    {
      id: 'energy-devices-laparoscopy',
      name: 'Energy Devices for Laparoscopy',
      products: ['Laparoscopic vessel sealers', 'Ultrasonic dissectors (Harmonic)', 'Bipolar energy devices', 'Monopolar instruments', 'Advanced hemostasis systems'],
      icon: '⚡',
      description: 'Advanced energy-based instruments'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Minimally Invasive Surgery | Laparoscopic Equipment | Pacem Health"
        description="Minimally invasive surgery including laparoscopic trocars, laparoscopic instruments, endoscopy equipment. Comprehensive MIS equipment for African surgical facilities."
        keywords={[
          'minimally invasive surgery Africa',
          'laparoscopic equipment',
          'laparoscopic instruments',
          'endoscopy equipment',
          'MIS surgery',
          'laparoscopic surgery',
          'surgical laparoscopy',
          'minimally invasive equipment'
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
            <span>Minimally Invasive Surgery</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Minimally Invasive Surgery
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Advanced laparoscopic and minimally invasive surgical equipment including trocars, graspers, scissors, camera systems, and endoscopic instruments. Complete solutions supporting the expansion of minimally invasive techniques across African surgical centers.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of minimally invasive surgery equipment</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">MIS Benefits for African Healthcare</h3>
              <p className="text-gray-700 mb-4">
                Minimally invasive surgery offers significant advantages in resource-limited settings.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reduced hospital stay (shorter bed occupancy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Lower infection rates (smaller incisions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Faster patient recovery and return to work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reduced postoperative pain and narcotic use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Better cosmetic outcomes</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Training & Implementation</h3>
              <p className="text-gray-700 mb-4">
                Successful MIS programs require comprehensive training and ongoing support.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Surgeon training and proctoring programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>OR staff equipment handling education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Simulation-based training facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Technical support and maintenance services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Equipment troubleshooting and repair</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MIS Advantages Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Transforming Surgical Care</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Minimally invasive surgery represents the future of surgical care in Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Expanded Access</h4>
              <p className="text-sm text-gray-700">More patients can access advanced surgical care with reduced perioperative risk</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Cost Efficiency</h4>
              <p className="text-sm text-gray-700">Shorter hospital stays and faster recovery reduce overall healthcare costs</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Surgical Excellence</h4>
              <p className="text-sm text-gray-700">Advanced technology enables complex procedures with improved precision</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}