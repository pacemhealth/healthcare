import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function AdvancedAnalyticalInstrumentsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Advanced Analytical Instruments",
    "description": "High-performance analytical laboratory instruments including chromatography, mass spectrometry, and spectroscopy systems for research and clinical labs across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'chromatography-systems',
      name: 'Chromatography Systems',
      products: ['HPLC (High-Performance Liquid Chromatography)', 'GC (Gas Chromatography)', 'Ion chromatography', 'Prep-scale chromatography', 'Column ovens & autosamplers'],
      icon: '🔬',
      description: 'Separation & analysis'
    },
    {
      id: 'mass-spectrometry',
      name: 'Mass Spectrometry',
      products: ['LC-MS (Liquid Chromatography-Mass Spec)', 'GC-MS (Gas Chromatography-Mass Spec)', 'MALDI-TOF MS', 'Triple quadrupole MS', 'Ion trap MS'],
      icon: '⚛️',
      description: 'Molecular identification'
    },
    {
      id: 'spectroscopy-instruments',
      name: 'Spectroscopy Instruments',
      products: ['UV-Vis spectrophotometers', 'IR spectrometers (FTIR)', 'Atomic absorption (AA)', 'Fluorescence spectroscopy', 'Raman spectroscopy'],
      icon: '🌈',
      description: 'Spectral analysis'
    },
    {
      id: 'nmr-spectroscopy',
      name: 'NMR Spectroscopy',
      products: ['Nuclear Magnetic Resonance (NMR)', 'Benchtop NMR systems', '1H-NMR, 13C-NMR', 'Structural elucidation', 'Quantitative NMR'],
      icon: '🧲',
      description: 'Structural analysis'
    },
    {
      id: 'xray-analysis',
      name: 'X-Ray Analysis',
      products: ['X-ray diffractometers (XRD)', 'X-ray fluorescence (XRF)', 'Crystallography systems', 'Elemental analysis', 'Material characterization'],
      icon: '☢️',
      description: 'Material analysis'
    },
    {
      id: 'elemental-analysis',
      name: 'Elemental Analysis',
      products: ['ICP-MS (Inductively Coupled Plasma)', 'ICP-OES (Optical Emission)', 'Elemental analyzers (CHN)', 'Trace metal analysis', 'Multi-element analysis'],
      icon: '⚗️',
      description: 'Elemental composition'
    },
    {
      id: 'thermal-analysis',
      name: 'Thermal Analysis',
      products: ['DSC (Differential Scanning Calorimetry)', 'TGA (Thermogravimetric Analysis)', 'DTA (Differential Thermal Analysis)', 'Melting point apparatus', 'Thermal stability testing'],
      icon: '🌡️',
      description: 'Thermal properties'
    },
    {
      id: 'particle-analysis',
      name: 'Particle Size & Surface Analysis',
      products: ['Particle size analyzers (laser diffraction)', 'Zeta potential analyzers', 'Surface area analyzers (BET)', 'Particle counters', 'Nanoparticle tracking'],
      icon: '🔍',
      description: 'Particle characterization'
    },
    {
      id: 'pharmaceutical-qa',
      name: 'Pharmaceutical Quality Control',
      products: ['Dissolution testers', 'Disintegration testers', 'Tablet hardness testers', 'Friability testers', 'Content uniformity systems'],
      icon: '💊',
      description: 'Drug quality testing'
    },
    {
      id: 'rheology-viscometry',
      name: 'Rheology & Viscometry',
      products: ['Rheometers', 'Viscometers', 'Flow properties testing', 'Texture analyzers', 'Formulation characterization'],
      icon: '🌀',
      description: 'Flow & viscosity'
    },
    {
      id: 'electrochemistry',
      name: 'Electrochemical Analysis',
      products: ['Potentiostats', 'pH meters (research-grade)', 'Ion-selective electrodes', 'Conductivity meters', 'Electrochemical sensors'],
      icon: '⚡',
      description: 'Electrochemical methods'
    },
    {
      id: 'analytical-balances',
      name: 'High-Precision Balances',
      products: ['Microbalances (0.001 mg)', 'Semi-microbalances', 'Analytical balances', 'Moisture analyzers', 'Density determination'],
      icon: '⚖️',
      description: 'Precise weighing'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <section className="bg-[#4B2991] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/division1" className="hover:underline">Essential Healthcare Products</Link>
            <span>/</span>
            <Link to="/products/categories/research-development-equipment" className="hover:underline">
              Research & Development Equipment
            </Link>
            <span>/</span>
            <span>Advanced Analytical Instruments</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Advanced Analytical Instruments
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Sophisticated analytical platforms including chromatography systems, mass spectrometry, spectroscopy instruments, NMR, X-ray analysis, and elemental analyzers. High-performance research instrumentation supporting pharmaceutical quality control, materials science, environmental analysis, and advanced laboratory research across African universities and research institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of advanced analytical instruments</p>
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
              onClick={() => navigate('/products/categories/research-development-equipment')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Research & Development Equipment
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Applications in Africa</h3>
              <p className="text-gray-700 mb-4">
                Advanced analytical instrumentation supports critical research and quality control needs across the continent.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pharmaceutical quality control and manufacturing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Drug discovery and development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Food safety and adulteration testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Environmental monitoring (water, soil, air)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Forensic analysis and toxicology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Natural products research (herbal medicines)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Regional Analytical Centers</h3>
              <p className="text-gray-700 mb-4">
                Establishing shared analytical facilities maximizes limited resources and enables advanced research.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>University-based core facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>National medicines quality control laboratories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Centers of excellence in analytical chemistry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Fee-for-service analytical testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Training programs for instrument specialists</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regional network collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
