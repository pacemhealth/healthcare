import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function EnvironmentalFieldResearchPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Environmental & Field Research Equipment",
    "description": "Water quality testing, air quality monitors, soil analysis equipment, field microscopy, environmental monitoring instruments for research across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'water-quality-testing',
      name: 'Water Quality Testing',
      products: ['pH meters (field & benchtop)', 'Dissolved oxygen meters', 'Turbidity meters', 'Conductivity/TDS meters', 'Water sampling kits'],
      icon: '💧',
      description: 'Water analysis'
    },
    {
      id: 'microbial-water-testing',
      name: 'Microbial Water Quality',
      products: ['Coliform testing kits', 'Membrane filtration systems', 'Portable incubators', 'Water sterilization indicators', 'Fecal contamination tests'],
      icon: '🦠',
      description: 'Waterborne pathogens'
    },
    {
      id: 'air-quality-monitoring',
      name: 'Air Quality Monitoring',
      products: ['Particulate matter (PM2.5, PM10)', 'CO/CO2 monitors', 'Gas analyzers (SO2, NO2, O3)', 'Air sampling pumps', 'Indoor air quality monitors'],
      icon: '🌬️',
      description: 'Atmospheric monitoring'
    },
    {
      id: 'soil-analysis',
      name: 'Soil & Agricultural Analysis',
      products: ['Soil pH meters', 'Soil moisture sensors', 'NPK nutrient analyzers', 'Soil sampling kits', 'Soil testing laboratories'],
      icon: '🌱',
      description: 'Soil health'
    },
    {
      id: 'field-microscopy',
      name: 'Field Microscopy',
      products: ['Portable microscopes', 'USB digital microscopes', 'Battery-operated microscopes', 'Field identification guides', 'Specimen collection kits'],
      icon: '🔬',
      description: 'On-site analysis'
    },
    {
      id: 'environmental-sampling',
      name: 'Environmental Sampling Equipment',
      products: ['Water samplers (automatic)', 'Soil core samplers', 'Air samplers', 'Grab sampling devices', 'Sample preservation kits'],
      icon: '🧪',
      description: 'Sample collection'
    },
    {
      id: 'field-instruments',
      name: 'Portable Field Instruments',
      products: ['Multi-parameter water testers', 'Handheld GPS devices', 'Weather stations (portable)', 'Data loggers', 'Field notebooks (waterproof)'],
      icon: '📱',
      description: 'Field-portable tools'
    },
    {
      id: 'vector-surveillance',
      name: 'Vector & Disease Surveillance',
      products: ['Insect traps (mosquito, tsetse)', 'Light traps', 'Aspirators', 'Larval sampling dippers', 'Entomological surveillance kits'],
      icon: '🦟',
      description: 'Vector monitoring'
    },
    {
      id: 'climate-weather',
      name: 'Climate & Weather Monitoring',
      products: ['Weather stations', 'Rain gauges', 'Temperature/humidity loggers', 'Anemometers (wind speed)', 'Solar radiation sensors'],
      icon: '☀️',
      description: 'Meteorological data'
    },
    {
      id: 'food-safety-testing',
      name: 'Food Safety & Hygiene',
      products: ['ATP bioluminescence meters', 'Food thermometers', 'Hygiene swabs', 'Mycotoxin detection kits', 'Pesticide residue tests'],
      icon: '🍽️',
      description: 'Food quality'
    },
    {
      id: 'radiation-detection',
      name: 'Radiation Detection',
      products: ['Geiger counters', 'Dosimeters', 'Radiation survey meters', 'Radon detectors', 'UV meters'],
      icon: '☢️',
      description: 'Radiation monitoring'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Environmental & Field Research Equipment | Water & Air Quality Testing | Pacem Health"
        description="Environmental and field research equipment including water quality testing, air quality monitors, soil analysis, field microscopy, environmental sampling. Research instruments supporting public health and environmental studies across Africa."
        keywords={[
          'environmental research equipment Africa',
          'water quality testing Africa',
          'air quality monitors',
          'soil analysis equipment',
          'field research instruments',
          'environmental monitoring Africa',
          'public health research',
          'field microscopy Africa'
        ]}
        structuredData={productSchema}
      />
      {/* Breadcrumb Bar */}
      <section className="bg-[#0033A0] text-white py-3">
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
            <span>Environmental & Field Research</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Environmental & Field Research
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Field-portable research equipment including water quality testing, air monitoring, soil analysis, environmental sampling, vector surveillance, and climate monitoring systems. Rugged instrumentation supporting environmental health research, disease ecology studies, water-sanitation-hygiene (WASH) programs, and climate-health research across diverse African field settings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of environmental and field research equipment</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Environmental Health in Africa</h3>
              <p className="text-gray-700 mb-4">
                Environmental factors are major determinants of health outcomes across the continent.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Water, sanitation & hygiene (WASH)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Air pollution (urban & household)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Vector-borne diseases (malaria, dengue)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Climate change & health</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Food safety & nutrition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Occupational & industrial hazards</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Field Research Applications</h3>
              <p className="text-gray-700 mb-4">
                Portable equipment enables environmental health research in resource-limited settings.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Water source testing (wells, boreholes, rivers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Household air quality (cooking smoke)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Vector ecology & mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Mining & industrial site monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Agricultural & pesticide exposure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Climate-sensitive disease surveillance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}