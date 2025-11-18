import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function LaboratoryChemicalsSolventsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Laboratory Chemicals & Solvents",
    "description": "Laboratory acids, bases, solvents, buffer solutions for laboratory testing across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'acids',
      name: 'Laboratory Acids',
      products: ['Hydrochloric acid (HCl)', 'Sulfuric acid (H2SO4)', 'Nitric acid (HNO3)', 'Acetic acid (glacial)', 'Phosphoric acid'],
      icon: '⚗️',
      description: 'Mineral & organic acids'
    },
    {
      id: 'bases',
      name: 'Laboratory Bases',
      products: ['Sodium hydroxide (NaOH)', 'Potassium hydroxide (KOH)', 'Ammonium hydroxide (NH4OH)', 'Calcium hydroxide', 'Sodium carbonate'],
      icon: '🧪',
      description: 'Alkali solutions'
    },
    {
      id: 'solvents',
      name: 'Organic Solvents',
      products: ['Methanol', 'Ethanol (absolute, denatured)', 'Acetone', 'Isopropanol', 'Xylene', 'Toluene'],
      icon: '💧',
      description: 'Extraction & cleaning'
    },
    {
      id: 'salts',
      name: 'Laboratory Salts',
      products: ['Sodium chloride (NaCl)', 'Potassium chloride (KCl)', 'Calcium chloride', 'Magnesium sulfate', 'Sodium bicarbonate'],
      icon: '🧂',
      description: 'Inorganic salts'
    },
    {
      id: 'buffers',
      name: 'Buffer Solutions',
      products: ['Phosphate buffers (PBS)', 'Tris buffer (Tris-HCl)', 'HEPES buffer', 'Citrate buffer', 'Acetate buffer'],
      icon: '⚖️',
      description: 'pH control solutions'
    },
    {
      id: 'indicators',
      name: 'pH Indicators & Dyes',
      products: ['Phenolphthalein', 'Methyl red', 'Bromothymol blue', 'Universal pH indicator', 'Litmus paper'],
      icon: '🎨',
      description: 'pH & redox indicators'
    },
    {
      id: 'stains',
      name: 'General Laboratory Stains',
      products: ['Crystal violet', 'Safranin', 'Methylene blue', 'Eosin Y', 'Iodine solution'],
      icon: '🖌️',
      description: 'Microscopy staining'
    },
    {
      id: 'fixatives',
      name: 'Fixatives & Preservatives',
      products: ['Formalin (10% buffered)', 'Methanol (fixative)', 'Ethanol (fixative)', 'Glutaraldehyde', 'Paraformaldehyde'],
      icon: '🧫',
      description: 'Tissue & specimen preservation'
    },
    {
      id: 'disinfectants',
      name: 'Laboratory Disinfectants',
      products: ['Sodium hypochlorite (bleach)', 'Ethanol 70%', 'Hydrogen peroxide', 'Phenol solutions', 'Quaternary ammonium compounds'],
      icon: '🧼',
      description: 'Lab surface disinfection'
    },
    {
      id: 'water-quality',
      name: 'Laboratory Water',
      products: ['Deionized water (Type II)', 'Distilled water', 'Ultrapure water (Type I)', 'Sterile water for injection', 'RNase/DNase-free water'],
      icon: '💦',
      description: 'Reagent-grade water'
    },
    {
      id: 'standards',
      name: 'Reference Standards',
      products: ['pH buffer standards (pH 4, 7, 10)', 'Conductivity standards', 'Certified reference materials', 'Gravimetric standards', 'Spectrophotometric standards'],
      icon: '📏',
      description: 'Calibration standards'
    },
    {
      id: 'lab-gases',
      name: 'Laboratory Gases',
      products: ['Oxygen cylinders', 'Carbon dioxide cylinders', 'Nitrogen gas', 'Compressed air', 'Gas regulators'],
      icon: '💨',
      description: 'Compressed gases'
    },
    {
      id: 'safety-equipment',
      name: 'Chemical Safety Equipment',
      products: ['Chemical spill kits', 'Acid/base neutralizers', 'Safety bottles (wash bottles)', 'Chemical storage cabinets', 'Secondary containment trays'],
      icon: '🛡️',
      description: 'Chemical safety'
    },
    {
      id: 'glassware-cleaning',
      name: 'Glassware Cleaning Agents',
      products: ['Laboratory detergents', 'Chromic acid cleaning solution', 'Alkaline cleaners', 'Acetone (rinse)', 'Glassware drying ovens'],
      icon: '🧴',
      description: 'Cleaning solutions'
    },
    {
      id: 'specialty-chemicals',
      name: 'Specialty Chemicals',
      products: ['EDTA (chelating agent)', 'SDS (sodium dodecyl sulfate)', 'Urea', 'Glycerol', 'Mercaptoethanol'],
      icon: '🔬',
      description: 'Research chemicals'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Laboratory Chemicals & Solvents | Lab Reagents | Pacem Health"
        description="Laboratory chemicals and solvents including acids, bases, solvents, buffer solutions. Comprehensive laboratory chemicals for African diagnostic facilities."
        keywords={[
          'laboratory chemicals Africa',
          'lab solvents',
          'laboratory acids',
          'laboratory reagents',
          'buffer solutions',
          'lab chemicals',
          'analytical reagents',
          'laboratory solvents'
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
            <Link to="/products/categories/laboratory-reagents-chemicals" className="hover:underline">
              Laboratory Reagents & Chemicals
            </Link>
            <span>/</span>
            <span>Laboratory Chemicals & Solvents</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Laboratory Chemicals & Solvents
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive general laboratory chemicals including acids, bases, organic solvents, buffers, pH indicators, stains, fixatives, disinfectants, and reference standards. Quality laboratory-grade chemicals supporting reagent preparation, media formulation, equipment cleaning, and general laboratory operations across African healthcare and research facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of laboratory chemicals and solvents</p>
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
              onClick={() => navigate('/products/categories/laboratory-reagents-chemicals')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Laboratory Reagents & Chemicals
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Chemical Safety in the Laboratory</h3>
              <p className="text-gray-700 mb-4">
                Proper chemical handling, storage, and disposal prevent laboratory accidents and exposure.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Safety Data Sheets (SDS) readily accessible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper chemical labeling (GHS symbols)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Segregated storage (incompatible chemicals)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Fume hood use for volatile chemicals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>PPE (gloves, goggles, lab coats)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Chemical waste disposal procedures</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Reagent Grade & Quality</h3>
              <p className="text-gray-700 mb-4">
                Chemical purity grades ensure appropriate quality for intended use.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ACS Reagent Grade (analytical work)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>HPLC Grade (chromatography)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Molecular Biology Grade (DNA/RNA work)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>USP/NF Grade (pharmaceutical use)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Technical Grade (general laboratory use)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Certificate of Analysis (COA) verification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}