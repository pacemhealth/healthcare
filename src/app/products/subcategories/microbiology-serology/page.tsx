import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function MicrobiologySerologyPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Microbiology & Serology",
    "description": "Culture media, blood culture systems, serology tests for infectious disease diagnosis across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'culture-media',
      name: 'Culture Media',
      products: ['Blood agar plates', 'MacConkey agar', 'Chocolate agar', 'Sabouraud agar (fungi)', 'Thioglycollate broth'],
      icon: '🧫',
      description: 'Bacterial culture media'
    },
    {
      id: 'blood-culture-systems',
      name: 'Blood Culture Systems',
      products: ['Automated blood culture systems', 'Blood culture bottles (aerobic, anaerobic)', 'Manual blood culture methods', 'Pediatric blood culture bottles', 'Media supplements'],
      icon: '🩸',
      description: 'Sepsis diagnosis'
    },
    {
      id: 'antimicrobial-susceptibility',
      name: 'Antimicrobial Susceptibility Testing',
      products: ['Antibiotic discs (Kirby-Bauer)', 'E-test strips (MIC determination)', 'Automated AST systems', 'ESBL detection discs', 'Quality control strains'],
      icon: '💊',
      description: 'Antibiotic resistance testing'
    },
    {
      id: 'tb-diagnostics-culture',
      name: 'TB Diagnostics & Culture',
      products: ['Lowenstein-Jensen media', 'MGIT liquid culture systems', 'Ziehl-Neelsen staining', 'TB microscopy supplies', 'Drug susceptibility testing (DST)'],
      icon: '🫁',
      description: 'Tuberculosis detection'
    },
    {
      id: 'molecular-diagnostics',
      name: 'Molecular Diagnostics',
      products: ['GeneXpert systems (TB, HIV viral load)', 'PCR thermal cyclers', 'Real-time PCR systems', 'DNA extraction kits', 'Molecular test cartridges'],
      icon: '🧬',
      description: 'Nucleic acid testing'
    },
    {
      id: 'rapid-antigen-tests',
      name: 'Rapid Antigen Tests',
      products: ['Strep A rapid tests', 'Legionella antigen', 'Cryptococcal antigen (CrAg)', 'H. pylori tests', 'Rotavirus/Adenovirus tests'],
      icon: '⚡',
      description: 'Quick pathogen detection'
    },
    {
      id: 'serology-immunology',
      name: 'Serology & Immunology',
      products: ['ELISA kits (HIV, HBV, HCV)', 'Rapid syphilis tests (TPPA, RPR)', 'Typhoid serology (Widal)', 'Brucella serology', 'ASO titers (rheumatic fever)'],
      icon: '🔬',
      description: 'Antibody detection'
    },
    {
      id: 'parasitology',
      name: 'Parasitology',
      products: ['Malaria microscopy (Giemsa stain)', 'Stool parasite examination', 'Concentration techniques', 'Cryptosporidium staining', 'Helminth identification'],
      icon: '🦠',
      description: 'Parasitic disease diagnosis'
    },
    {
      id: 'mycology',
      name: 'Mycology (Fungal Testing)',
      products: ['Fungal culture media', 'KOH preparation (skin/nails)', 'India ink (cryptococcus)', 'Fungal stains (PAS, GMS)', 'Antifungal susceptibility'],
      icon: '🍄',
      description: 'Fungal infection diagnosis'
    },
    {
      id: 'anaerobe-culture',
      name: 'Anaerobic Culture',
      products: ['Anaerobic jars & sachets', 'Anaerobic indicators', 'Anaerobic blood agar', 'Gas-generating systems', 'Anaerobic chambers'],
      icon: '🫥',
      description: 'Anaerobic bacteria isolation'
    },
    {
      id: 'sterility-testing',
      name: 'Sterility Testing',
      products: ['Sterility test media', 'Membrane filtration systems', 'Direct inoculation methods', 'Environmental monitoring', 'Endotoxin testing'],
      icon: '✅',
      description: 'Pharmaceutical sterility'
    },
    {
      id: 'gram-staining',
      name: 'Staining & Microscopy',
      products: ['Gram stain kits', 'Acid-fast staining (ZN, Auramine)', 'Giemsa stain (malaria)', 'Methylene blue', 'Microscope slides & coverslips'],
      icon: '🔬',
      description: 'Microscopy stains'
    },
    {
      id: 'viral-diagnostics',
      name: 'Viral Diagnostics',
      products: ['HIV viral load testing', 'Hepatitis B/C viral load', 'COVID-19 PCR tests', 'Influenza PCR', 'Viral culture systems'],
      icon: '🦠',
      description: 'Virus detection'
    },
    {
      id: 'microbiology-equipment',
      name: 'Microbiology Equipment',
      products: ['Biosafety cabinets (Class II)', 'Autoclave sterilizers', 'Anaerobic workstations', 'Colony counters', 'Inoculating loops & needles'],
      icon: '🧰',
      description: 'Lab infrastructure'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Microbiology & Serology | Infectious Disease Testing | Pacem Health"
        description="Microbiology and serology including culture media, blood culture systems, serology tests. Comprehensive infectious disease testing for African laboratories."
        keywords={[
          'microbiology Africa',
          'serology testing',
          'culture media',
          'blood culture',
          'infectious disease testing',
          'bacteriology',
          'microbiology testing',
          'serological tests'
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
            <span>Microbiology & Serology</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Microbiology & Serology
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive microbiology solutions including culture equipment, antimicrobial susceptibility testing, TB diagnostics, molecular systems, immunoassay platforms, and serology testing. Supporting infectious disease diagnosis and antimicrobial stewardship across African laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of microbiology and serology products</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Infectious Disease Priorities</h3>
              <p className="text-gray-700 mb-4">
                Microbiology laboratories in Africa focus on high-burden infectious diseases.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Tuberculosis (drug-sensitive and MDR-TB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>HIV/AIDS opportunistic infections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Malaria and parasitic diseases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Typhoid and enteric fevers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Antimicrobial resistance monitoring</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Antimicrobial Stewardship</h3>
              <p className="text-gray-700 mb-4">
                AST capabilities are critical for combating antimicrobial resistance in Africa.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Antibiotic susceptibility testing (disc diffusion, MIC)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ESBL and carbapenemase detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>MRSA screening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Surveillance culture programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>AMR data reporting to national programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}