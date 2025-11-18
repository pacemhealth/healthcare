import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function MicroscopyImagingSystemsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Microscopy & Imaging Systems",
    "description": "Binocular microscopes, fluorescence microscopes, digital microscopy, imaging systems for laboratory diagnostics across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'binocular-microscopes',
      name: 'Binocular Light Microscopes',
      products: ['Student-grade binocular microscopes', 'Clinical-grade binocular microscopes', 'LED illumination microscopes', '40x-1000x magnification', 'Rechargeable battery models'],
      icon: '🔬',
      description: 'Standard laboratory microscopy'
    },
    {
      id: 'fluorescence-microscopes',
      name: 'Fluorescence Microscopes',
      products: ['Epi-fluorescence microscopes', 'TB fluorescence microscopy (LED)', 'Malaria fluorescence', 'Multi-band filter sets', 'UV light sources'],
      icon: '💡',
      description: 'Fluorescent staining analysis'
    },
    {
      id: 'digital-microscopes',
      name: 'Digital Microscopy & Imaging',
      products: ['Digital microscope cameras', 'Imaging software', 'Digital pathology systems', 'Telepathology platforms', 'Image analysis software'],
      icon: '📸',
      description: 'Digital image capture'
    },
    {
      id: 'stereo-microscopes',
      name: 'Stereo Microscopes',
      products: ['Dissecting microscopes', 'Low-power stereo scopes', 'Dual illumination (top/bottom)', 'Zoom stereo microscopes', 'Surgical microscopes'],
      icon: '👁️',
      description: '3D specimen viewing'
    },
    {
      id: 'portable-microscopes',
      name: 'Portable & Field Microscopes',
      products: ['Battery-operated field microscopes', 'Portable LED microscopes', 'Mobile phone microscopy', 'Compact diagnostic microscopes', 'Solar-powered models'],
      icon: '🔋',
      description: 'Remote area diagnostics'
    },
    {
      id: 'slide-preparation',
      name: 'Slide Preparation Equipment',
      products: ['Manual slide staining racks', 'Automated slide stainers', 'Coverslipping equipment', 'Slide drying racks', 'Staining jars & dishes'],
      icon: '🧫',
      description: 'Specimen preparation'
    },
    {
      id: 'microscope-accessories',
      name: 'Microscope Accessories',
      products: ['Objective lenses (10x-100x)', 'Eyepieces (widefield)', 'Immersion oil (Type A, Type B)', 'Mechanical stages', 'LED light sources'],
      icon: '🔧',
      description: 'Microscope components'
    },
    {
      id: 'staining-reagents',
      name: 'Microscopy Stains & Reagents',
      products: ['Giemsa stain', 'Field stain', 'Gram stain kits', 'Ziehl-Neelsen (AFB) stain', 'Hematoxylin & eosin'],
      icon: '🎨',
      description: 'Microscopy staining'
    },
    {
      id: 'slides-coverslips',
      name: 'Microscope Slides & Coverslips',
      products: ['Frosted glass slides', 'Plain glass slides', 'Coverslips (18x18mm, 22x22mm)', 'Pre-cleaned slides', 'Cavity slides'],
      icon: '📋',
      description: 'Slide consumables'
    },
    {
      id: 'hemocytometers',
      name: 'Counting Chambers',
      products: ['Neubauer hemocytometers', 'Improved Neubauer chambers', 'Disposable counting chambers', 'Sperm counting chambers', 'Cell counting grids'],
      icon: '🔢',
      description: 'Manual cell counting'
    },
    {
      id: 'centrifuge-microscopy',
      name: 'Cytocentrifuges',
      products: ['Cytocentrifuge systems', 'Cytology slide preparation', 'Centrifuge rotors (cytology)', 'Cytology funnels', 'Filter cards'],
      icon: '🌀',
      description: 'Cytology specimen prep'
    },
    {
      id: 'microscope-maintenance',
      name: 'Microscope Care & Maintenance',
      products: ['Lens cleaning solution', 'Lens cleaning tissue', 'Dust covers', 'Desiccant packs (storage)', 'Calibration slides'],
      icon: '🧼',
      description: 'Equipment maintenance'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Microscopy & Imaging Systems | Laboratory Microscopes | Pacem Health"
        description="Microscopy and imaging systems including binocular microscopes, fluorescence microscopes, digital microscopy. Comprehensive laboratory imaging equipment for African diagnostic facilities."
        keywords={[
          'microscopy systems Africa',
          'laboratory microscopes',
          'binocular microscopes',
          'fluorescence microscopes',
          'digital microscopy',
          'imaging systems',
          'lab microscopy',
          'diagnostic microscopes'
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
            <Link to="/products/categories/laboratory-equipment-instrumentation" className="hover:underline">
              Laboratory Equipment & Instrumentation
            </Link>
            <span>/</span>
            <span>Microscopy & Imaging Systems</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Microscopy & Imaging Systems
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive microscopy solutions including light microscopes, fluorescence microscopes, digital imaging systems, portable microscopes, and slide preparation equipment. Quality microscopy supporting malaria diagnosis, TB detection, pathology, and laboratory training across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of microscopy and imaging equipment</p>
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
              onClick={() => navigate('/products/categories/laboratory-equipment-instrumentation')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Laboratory Equipment & Instrumentation
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Microscopy in African Healthcare</h3>
              <p className="text-gray-700 mb-4">
                Microscopy remains essential for malaria, TB, and parasitic disease diagnosis.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Malaria microscopy (gold standard diagnosis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>TB sputum smear microscopy (AFB staining)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Parasitology (stool, urine examinations)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Hematology (manual differential counts)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cervical cancer screening (cytology)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Histopathology and tissue diagnosis</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Microscopy Quality & Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Proper microscope care and competency ensure accurate diagnostic results.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular cleaning and lens care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper storage (dust-free, humidity control)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Bulb replacement and illumination checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Staff training and competency assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Quality control slides and testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Preventive maintenance schedules</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}