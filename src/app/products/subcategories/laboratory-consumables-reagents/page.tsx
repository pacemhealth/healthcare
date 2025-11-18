import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function LaboratoryConsumablesReagentsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Laboratory Consumables & Reagents",
    "description": "Chemistry reagents, hematology reagents, laboratory consumables for diagnostic testing across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'chemistry-reagents',
      name: 'Chemistry Test Reagents',
      products: ['Glucose reagents', 'Liver function reagents (ALT, AST)', 'Kidney function (creatinine, urea)', 'Lipid profile reagents', 'Electrolyte reagents'],
      icon: '🧪',
      description: 'Clinical chemistry test kits'
    },
    {
      id: 'hematology-reagents',
      name: 'Hematology Reagents',
      products: ['CBC reagents (diluent, lyse)', 'Hemoglobin reagents', 'Coagulation reagents (PT, APTT)', 'ESR tubes', 'Blood typing reagents'],
      icon: '🩸',
      description: 'Blood testing reagents'
    },
    {
      id: 'immunoassay-kits',
      name: 'Immunoassay Test Kits',
      products: ['ELISA kits (HIV, HBV, HCV)', 'Pregnancy test kits', 'Cardiac marker kits', 'Hormone assay kits', 'Tumor marker kits'],
      icon: '🔬',
      description: 'Immunological testing'
    },
    {
      id: 'rapid-test-kits',
      name: 'Rapid Diagnostic Test Kits',
      products: ['Malaria RDTs', 'HIV rapid tests', 'TB LAM tests', 'Dengue rapid tests', 'COVID-19 antigen tests'],
      icon: '⚡',
      description: 'Point-of-care test kits'
    },
    {
      id: 'microbiology-media',
      name: 'Microbiology Culture Media',
      products: ['Ready-made agar plates', 'Culture broths', 'Selective media', 'Blood culture bottles', 'Transport media'],
      icon: '🧫',
      description: 'Bacterial culture supplies'
    },
    {
      id: 'calibrators-controls',
      name: 'Calibrators & Quality Controls',
      products: ['Multi-level chemistry controls', 'Hematology calibrators', 'Quality control sera', 'Linearity verification', 'EQA materials'],
      icon: '✅',
      description: 'Quality assurance products'
    },
    {
      id: 'molecular-reagents',
      name: 'Molecular Diagnostic Reagents',
      products: ['GeneXpert cartridges (TB, HIV VL)', 'PCR reagents & primers', 'DNA extraction kits', 'RT-PCR kits', 'Sequencing reagents'],
      icon: '🧬',
      description: 'Nucleic acid testing'
    },
    {
      id: 'stains-dyes',
      name: 'Laboratory Stains & Dyes',
      products: ['Gram stain kits', 'Giemsa stain (malaria)', 'Ziehl-Neelsen (TB)', 'Wright-Giemsa (blood films)', 'H&E staining (histology)'],
      icon: '🎨',
      description: 'Microscopy stains'
    },
    {
      id: 'specimen-tubes',
      name: 'Specimen Collection Tubes',
      products: ['EDTA tubes (purple top)', 'Serum tubes (red top)', 'Sodium citrate tubes (blue)', 'Heparin tubes (green)', 'Urine containers'],
      icon: '🧪',
      description: 'Sample collection vessels'
    },
    {
      id: 'pipette-tips',
      name: 'Pipette Tips & Consumables',
      products: ['Micropipette tips (filtered, non-filtered)', 'Serological pipettes', 'Transfer pipettes', 'Multichannel tips', 'Tip racks'],
      icon: '💧',
      description: 'Liquid handling supplies'
    },
    {
      id: 'lab-plasticware',
      name: 'Laboratory Plasticware',
      products: ['Microcentrifuge tubes', 'PCR tubes & plates', 'Petri dishes', 'Specimen cups', 'Reagent reservoirs'],
      icon: '🥤',
      description: 'Disposable labware'
    },
    {
      id: 'gloves-ppe',
      name: 'Laboratory Gloves & PPE',
      products: ['Nitrile examination gloves', 'Latex gloves', 'Lab coats', 'Safety goggles', 'Face shields'],
      icon: '🧤',
      description: 'Personal protective equipment'
    },
    {
      id: 'disinfectants-cleaners',
      name: 'Disinfectants & Cleaners',
      products: ['Surface disinfectants', 'Instrument cleaners', 'Bleach solutions', 'Alcohol (70%, 90%)', 'Autoclave detergents'],
      icon: '🧽',
      description: 'Lab cleaning supplies'
    },
    {
      id: 'microscope-supplies',
      name: 'Microscope Supplies',
      products: ['Glass slides (frosted)', 'Coverslips', 'Immersion oil', 'Lens paper', 'Slide storage boxes'],
      icon: '🔬',
      description: 'Microscopy accessories'
    },
    {
      id: 'sample-transport',
      name: 'Sample Transport & Storage',
      products: ['Specimen transport bags', 'Cold chain boxes', 'Absorbent pads', 'Biohazard labels', 'Sample tracking forms'],
      icon: '📦',
      description: 'Specimen logistics'
    },
    {
      id: 'reagent-storage',
      name: 'Reagent Storage Solutions',
      products: ['Reagent bottles (amber, clear)', 'Chemical storage cabinets', 'Desiccators', 'Cold storage boxes', 'pH buffer solutions'],
      icon: '🏺',
      description: 'Storage and preservation'
    },
    {
      id: 'lab-paper-products',
      name: 'Laboratory Paper Products',
      products: ['Lab notebooks', 'Bench paper', 'Filter paper', 'pH paper', 'Parafilm'],
      icon: '📄',
      description: 'Paper consumables'
    },
    {
      id: 'safety-waste',
      name: 'Safety & Waste Disposal',
      products: ['Sharps containers', 'Biohazard bags', 'Waste autoclaves', 'Spill kits', 'Safety signage'],
      icon: '⚠️',
      description: 'Hazardous waste management'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Laboratory Consumables & Reagents | Lab Supplies | Pacem Health"
        description="Laboratory consumables and reagents including chemistry reagents, hematology reagents. Comprehensive lab supplies for African diagnostic facilities."
        keywords={[
          'laboratory consumables Africa',
          'laboratory reagents',
          'chemistry reagents',
          'hematology reagents',
          'lab supplies',
          'diagnostic reagents',
          'laboratory chemicals',
          'lab consumables'
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
            <Link to="/products/categories/diagnostic-equipment-supplies" className="hover:underline">
              Diagnostic Equipment & Supplies
            </Link>
            <span>/</span>
            <span>Laboratory Consumables & Reagents</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Laboratory Consumables & Reagents
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Complete range of laboratory test kits, reagents, calibrators, controls, quality control materials, and consumable supplies. From chemistry and hematology reagents to molecular diagnostics, microbiology media, and specimen collection supplies for African laboratory operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of laboratory consumables and reagents</p>
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
              onClick={() => navigate('/products/categories/diagnostic-equipment-supplies')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Diagnostic Equipment & Supplies
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Supply Chain Management</h3>
              <p className="text-gray-700 mb-4">
                Reliable reagent and consumable supply is critical for sustained laboratory operations.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Consistent product availability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Temperature-controlled storage and transport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Adequate shelf life for tropical climates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Just-in-time inventory systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Forecasting and demand planning</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality Assurance</h3>
              <p className="text-gray-700 mb-4">
                Quality controls and calibrators ensure accurate and reliable test results.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Multi-level internal QC (normal, abnormal)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>External quality assessment (EQA/PT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular calibration verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Lot-to-lot reagent validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>QC documentation and trending</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}