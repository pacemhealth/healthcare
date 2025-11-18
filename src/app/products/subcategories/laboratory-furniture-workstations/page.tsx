import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function LaboratoryFurnitureWorkstationsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Laboratory Furniture & Workstations",
    "description": "Laboratory benches, fume hoods, lab cabinets, workstations for laboratory infrastructure across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'laboratory-benches',
      name: 'Laboratory Benches & Workstations',
      products: ['Epoxy resin benchtops', 'Stainless steel benchtops', 'Phenolic resin tops', 'Island benches', 'Wall-mounted benches'],
      icon: '🪑',
      description: 'Lab work surfaces'
    },
    {
      id: 'fume-hoods',
      name: 'Fume Hoods',
      products: ['Ducted fume hoods', 'Ductless fume hoods (carbon filter)', 'Walk-in fume hoods', 'Perchloric acid hoods', 'Radioisotope hoods'],
      icon: '💨',
      description: 'Chemical fume extraction'
    },
    {
      id: 'biosafety-cabinets',
      name: 'Biosafety Cabinets',
      products: ['Class I biosafety cabinets', 'Class II BSC (Type A1, A2, B1, B2)', 'Class III BSCs (glove boxes)', 'Cytotoxic safety cabinets', 'HEPA filtration systems'],
      icon: '🛡️',
      description: 'Biological safety containment'
    },
    {
      id: 'laminar-flow-hoods',
      name: 'Laminar Flow Hoods',
      products: ['Horizontal laminar flow cabinets', 'Vertical laminar flow cabinets', 'Clean benches', 'Sterile compounding hoods', 'HEPA-filtered workstations'],
      icon: '🌬️',
      description: 'Sterile work environments'
    },
    {
      id: 'laboratory-sinks',
      name: 'Laboratory Sinks & Fixtures',
      products: ['Epoxy resin sinks', 'Stainless steel sinks', 'Cup sinks', 'Gooseneck faucets', 'Eyewash stations'],
      icon: '🚰',
      description: 'Lab plumbing fixtures'
    },
    {
      id: 'laboratory-cabinets',
      name: 'Laboratory Storage Cabinets',
      products: ['Reagent storage cabinets', 'Glassware cabinets', 'Underbench cabinets', 'Overhead cabinets', 'Mobile storage cabinets'],
      icon: '🗄️',
      description: 'Lab storage solutions'
    },
    {
      id: 'chemical-storage',
      name: 'Chemical & Hazardous Material Storage',
      products: ['Flammable storage cabinets', 'Acid storage cabinets', 'Corrosive storage', 'Poison cabinets (lockable)', 'Ventilated storage cabinets'],
      icon: '⚠️',
      description: 'Hazardous material safety'
    },
    {
      id: 'laboratory-seating',
      name: 'Laboratory Seating',
      products: ['Laboratory stools (adjustable)', 'Ergonomic lab chairs', 'ESD-safe seating', 'Cleanroom chairs', 'Footrests'],
      icon: '💺',
      description: 'Lab seating'
    },
    {
      id: 'mobile-carts',
      name: 'Mobile Laboratory Carts',
      products: ['Instrument carts', 'Phlebotomy carts', 'Specimen transport carts', 'Chemical transport carts', 'Utility carts'],
      icon: '🛒',
      description: 'Mobile lab equipment'
    },
    {
      id: 'pegboards-racks',
      name: 'Pegboards & Drying Racks',
      products: ['Wall-mounted pegboards', 'Glassware drying racks', 'Pipette stands', 'Draining boards', 'Drip trays'],
      icon: '📌',
      description: 'Lab organization'
    },
    {
      id: 'safety-showers',
      name: 'Safety Showers & Eyewash',
      products: ['Emergency showers', 'Eyewash stations (plumbed)', 'Portable eyewash stations', 'Combination shower/eyewash', 'Drench hoses'],
      icon: '🚿',
      description: 'Emergency safety equipment'
    },
    {
      id: 'anti-fatigue-mats',
      name: 'Anti-Fatigue Mats & Flooring',
      products: ['Anti-fatigue mats', 'Chemical-resistant mats', 'ESD mats', 'Absorbent mats', 'Cleanroom flooring'],
      icon: '🧩',
      description: 'Ergonomic flooring'
    },
    {
      id: 'laboratory-lighting',
      name: 'Laboratory Lighting',
      products: ['LED overhead lighting', 'Task lighting (benchtop)', 'Magnifying lamps', 'Emergency lighting', 'UV lamps (germicidal)'],
      icon: '💡',
      description: 'Lab illumination'
    },
    {
      id: 'laboratory-signage',
      name: 'Laboratory Signage & Labels',
      products: ['Biohazard signs', 'Chemical hazard labels', 'Safety signage', 'Directional signs', 'GHS labeling systems'],
      icon: '🚧',
      description: 'Safety communication'
    },
    {
      id: 'modular-systems',
      name: 'Modular Laboratory Systems',
      products: ['Modular lab furniture', 'Flexible workstation systems', 'Service columns (gas, power, data)', 'Adjustable shelving', 'Reconfigurable labs'],
      icon: '🔧',
      description: 'Adaptable lab design'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Laboratory Furniture & Workstations | Lab Benches | Pacem Health"
        description="Laboratory furniture and workstations including lab benches, fume hoods, lab cabinets. Comprehensive laboratory infrastructure for African facilities."
        keywords={[
          'laboratory furniture Africa',
          'lab benches',
          'laboratory workstations',
          'fume hoods',
          'lab cabinets',
          'laboratory infrastructure',
          'lab equipment furniture',
          'laboratory benches'
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
            <span>Laboratory Furniture & Workstations</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Laboratory Furniture & Workstations
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive laboratory infrastructure including benches, fume hoods, biosafety cabinets, laminar flow hoods, sinks, storage cabinets, chemical storage, and safety equipment. Quality lab furniture creating safe, efficient, and ergonomic work environments across African healthcare laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of laboratory furniture and workstations</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Laboratory Design Principles</h3>
              <p className="text-gray-700 mb-4">
                Good laboratory design enhances safety, efficiency, and workflow.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Workflow optimization (specimen → result)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Segregation by function (clean vs. dirty areas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Adequate bench space and storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper ventilation and air changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Ergonomic design (reduce repetitive strain)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Modular and adaptable infrastructure</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Biosafety Cabinet Requirements</h3>
              <p className="text-gray-700 mb-4">
                BSCs protect personnel, environment, and samples from biological hazards.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Class II BSC for most clinical microbiology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Annual certification and airflow testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper installation (location, ducting)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>HEPA filter replacement schedules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Staff training on proper use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>UV decontamination between uses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}