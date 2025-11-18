import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function LaboratorySafetyContainmentPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Laboratory Safety & Containment",
    "description": "Biosafety cabinets, chemical fume hoods, safety equipment, containment systems for laboratory safety across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'biosafety-cabinets-safety',
      name: 'Biosafety Cabinets',
      products: ['Class II Type A2 biosafety cabinets', 'Class II Type B2 BSCs', 'Cytotoxic safety cabinets', 'Portable BSCs', 'BSC certification services'],
      icon: '🛡️',
      description: 'Biological containment'
    },
    {
      id: 'chemical-fume-hoods',
      name: 'Chemical Fume Hoods',
      products: ['Ducted fume hoods (VAV, CAV)', 'Ductless carbon-filter hoods', 'Walk-in fume hoods', 'Variable air volume (VAV)', 'Face velocity monitors'],
      icon: '💨',
      description: 'Chemical vapor containment'
    },
    {
      id: 'laminar-flow-safety',
      name: 'Laminar Flow Cabinets',
      products: ['Horizontal flow cabinets', 'Vertical flow cabinets', 'HEPA filtration', 'UV sterilization lamps', 'Sterile compounding hoods'],
      icon: '🌬️',
      description: 'Particulate-free environments'
    },
    {
      id: 'personal-protective-equipment',
      name: 'Laboratory PPE',
      products: ['Laboratory coats & gowns', 'Nitrile gloves', 'Safety goggles & face shields', 'N95 respirators', 'Shoe covers & hair nets'],
      icon: '🥽',
      description: 'Personal protection'
    },
    {
      id: 'spill-kits',
      name: 'Spill Kits & Containment',
      products: ['Chemical spill kits', 'Biological spill kits', 'Mercury spill kits', 'Spill absorbent materials', 'Spill containment pallets'],
      icon: '🧽',
      description: 'Emergency spill response'
    },
    {
      id: 'sharps-containers',
      name: 'Sharps & Biohazard Disposal',
      products: ['Sharps containers (various sizes)', 'Biohazard bags (red)', 'Autoclave bags', 'Needle destroyers', 'Sharps disposal stations'],
      icon: '⚠️',
      description: 'Safe waste disposal'
    },
    {
      id: 'safety-showers-eyewash',
      name: 'Emergency Safety Equipment',
      products: ['Combination shower/eyewash stations', 'Plumbed eyewash stations', 'Portable eyewash units', 'Drench hoses', 'Safety signage'],
      icon: '🚿',
      description: 'Emergency decontamination'
    },
    {
      id: 'fire-safety',
      name: 'Fire Safety Equipment',
      products: ['Fire extinguishers (ABC, CO2)', 'Fire blankets', 'Smoke detectors', 'Fire alarm systems', 'Emergency exit lighting'],
      icon: '🧯',
      description: 'Fire protection'
    },
    {
      id: 'first-aid',
      name: 'First Aid Supplies',
      products: ['Laboratory first aid kits', 'Burn treatment supplies', 'Eye irrigation solutions', 'Bandages & wound care', 'Emergency medical supplies'],
      icon: '🩹',
      description: 'Medical emergencies'
    },
    {
      id: 'ventilation-systems',
      name: 'Ventilation & Air Quality',
      products: ['Laboratory exhaust fans', 'Air handling units', 'HEPA air purifiers', 'Air quality monitors', 'Negative pressure systems'],
      icon: '💨',
      description: 'Air exchange & filtration'
    },
    {
      id: 'safety-signage',
      name: 'Safety Signage & Labels',
      products: ['Biohazard signs & labels', 'Chemical hazard labels (GHS)', 'Emergency equipment signs', 'Directional signage', 'Floor marking tape'],
      icon: '🚧',
      description: 'Hazard communication'
    },
    {
      id: 'decontamination-equipment',
      name: 'Decontamination Equipment',
      products: ['UV sterilization lamps', 'Formaldehyde generators', 'Hydrogen peroxide foggers', 'Surface disinfectants', 'Decontamination showers'],
      icon: '🧪',
      description: 'Surface & equipment decon'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Laboratory Safety & Containment | Biosafety Cabinets | Pacem Health"
        description="Laboratory safety and containment including biosafety cabinets, chemical fume hoods, safety equipment. Comprehensive laboratory safety systems for African facilities."
        keywords={[
          'laboratory safety Africa',
          'biosafety cabinets',
          'fume hoods',
          'lab containment',
          'laboratory safety equipment',
          'chemical safety',
          'biological containment',
          'lab safety systems'
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
            <span>Laboratory Safety & Containment</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Laboratory Safety & Containment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive laboratory safety solutions including biosafety cabinets, fume hoods, personal protective equipment, spill kits, sharps disposal, emergency equipment, fire safety, and decontamination systems. Critical safety infrastructure protecting laboratory personnel, patients, and communities across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of laboratory safety and containment equipment</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Laboratory Biosafety Levels</h3>
              <p className="text-gray-700 mb-4">
                Laboratory design and containment must match the biohazard risk level.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>BSL-1: Minimal risk (standard microbiological practices)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>BSL-2: Moderate risk (Class II BSC required)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>BSL-3: High risk (controlled access, negative pressure)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>BSL-4: Extreme risk (maximum containment)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>TB laboratories (special ventilation requirements)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Laboratory Safety Culture</h3>
              <p className="text-gray-700 mb-4">
                A strong safety culture prevents laboratory-acquired infections and injuries.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Biosafety officer and safety committee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Standard operating procedures (SOPs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular staff training and competency assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Incident reporting and investigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Post-exposure prophylaxis protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Annual safety audits and inspections</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}