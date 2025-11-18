import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function SurgicalLightingVisualizationPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Surgical Lighting & Visualization",
    "description": "Operating room lights, surgical headlamps, surgical cameras, endoscopic visualization systems across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'operating-room-lights',
      name: 'Operating Room Lights',
      products: ['LED surgical lights (single, double dome)', 'Ceiling-mounted OR lights', 'Mobile surgical lights (stand-mounted)', 'Examination lights', 'Minor procedure lights'],
      icon: '💡',
      description: 'Primary surgical illumination'
    },
    {
      id: 'surgical-headlamps',
      name: 'Surgical Headlamps',
      products: ['LED headlamps (rechargeable)', 'Fiber-optic headlights', 'Headband & loupes combinations', 'Battery packs & chargers', 'Light intensity controls'],
      icon: '🔦',
      description: 'Surgeon-worn lighting systems'
    },
    {
      id: 'surgical-loupes',
      name: 'Surgical Loupes & Magnification',
      products: ['Surgical loupes (2.5x, 3.5x, 4.5x magnification)', 'TTL loupes (through-the-lens)', 'Flip-up loupes', 'Galilean loupes', 'Prismatic loupes'],
      icon: '🔍',
      description: 'Magnification for precision surgery'
    },
    {
      id: 'surgical-microscopes',
      name: 'Surgical Microscopes',
      products: ['Ophthalmic microscopes', 'ENT microscopes', 'Neurosurgical microscopes', 'Dental operating microscopes', 'Microscope accessories (cameras, beamsplitters)'],
      icon: '🔬',
      description: 'High-magnification visualization'
    },
    {
      id: 'endoscopy-visualization',
      name: 'Endoscopy Visualization Systems',
      products: ['HD endoscopy cameras', 'Flexible endoscopes (GI, bronchoscopy)', 'Rigid endoscopes (cystoscopy, arthroscopy)', 'Light sources (LED, Xenon)', 'Image processors & monitors'],
      icon: '📹',
      description: 'Internal organ visualization'
    },
    {
      id: 'surgical-monitors-displays',
      name: 'Surgical Monitors & Displays',
      products: ['HD surgical monitors (27", 32", 55")', '4K imaging displays', 'Ceiling-mounted monitor arms', 'Medical-grade displays', 'Multi-input video systems'],
      icon: '🖥️',
      description: 'Video display equipment'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Surgical Lighting & Visualization | OR Lights | Pacem Health"
        description="Surgical lighting and visualization including operating room lights, surgical headlamps, surgical cameras. Comprehensive OR lighting systems for African surgical facilities."
        keywords={[
          'surgical lighting Africa',
          'operating room lights',
          'surgical headlamps',
          'OR lights',
          'surgical visualization',
          'surgical cameras',
          'medical lighting',
          'operating theater lights'
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
            <span>Surgical Lighting & Visualization</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Surgical Lighting & Visualization
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Advanced surgical lighting and visualization systems including operating lights, headlamps, loupes, and surgical microscopes. Quality illumination and magnification equipment enabling precise surgical techniques across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of surgical lighting and visualization equipment</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">LED Technology Benefits</h3>
              <p className="text-gray-700 mb-4">
                Modern LED surgical lighting provides superior illumination with energy efficiency.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>50,000+ hour LED lifespan (minimal bulb replacement)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Energy efficient (lower electricity costs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Minimal heat generation (patient & surgeon comfort)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Excellent color rendering (true tissue visualization)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Shadowless illumination (multiple light sources)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Magnification & Precision</h3>
              <p className="text-gray-700 mb-4">
                Loupes and microscopes enable microsurgical techniques and improved outcomes.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Enhanced visualization of fine anatomical structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Improved ergonomics and surgeon posture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Precision in microsurgery and delicate procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reduced eye strain during long procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Better surgical outcomes and fewer complications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visualization Importance Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Essential for Surgical Excellence</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Quality lighting and visualization are fundamental to safe surgery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">👁️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Improved Visibility</h4>
              <p className="text-sm text-gray-700">Optimal illumination enables precise identification of anatomical structures and pathology</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Enhanced Safety</h4>
              <p className="text-sm text-gray-700">Better visualization reduces inadvertent injury to vital structures</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Surgical Efficiency</h4>
              <p className="text-sm text-gray-700">Quality lighting accelerates procedures and reduces surgeon fatigue</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}