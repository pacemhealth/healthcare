import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function BiotechnologyLifeSciencesResearchPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Biotechnology & Life Sciences Research",
    "description": "Comprehensive biotechnology research infrastructure including cell culture systems, molecular biology equipment, genomics platforms, protein analysis, flow cytometry, and gene editing tools for African research institutions",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'cell-culture-systems',
      name: 'Cell Culture Systems',
      products: ['CO2 incubators (cell culture)', 'Biological safety cabinets (BSC)', 'Inverted microscopes', 'Cell counters (hemocytometers, automated)', 'Culture media preparation'],
      icon: '🧫',
      description: 'Cell biology research'
    },
    {
      id: 'molecular-biology-equipment',
      name: 'Molecular Biology Equipment',
      products: ['PCR thermal cyclers (standard, gradient)', 'Real-time PCR (qPCR)', 'Digital PCR systems', 'Nucleic acid extractors', 'Thermal cyclers for cloning'],
      icon: '🧬',
      description: 'DNA/RNA analysis'
    },
    {
      id: 'electrophoresis-systems',
      name: 'Electrophoresis & Blotting',
      products: ['Horizontal gel electrophoresis (DNA)', 'Vertical gel systems (protein)', 'Capillary electrophoresis', 'Western blot equipment', 'Gel documentation systems'],
      icon: '⚡',
      description: 'Separation techniques'
    },
    {
      id: 'protein-research',
      name: 'Protein Analysis',
      products: ['Protein purification systems (FPLC, AKTA)', 'SDS-PAGE equipment', '2D gel electrophoresis', 'Protein quantification (Bradford, BCA)', 'Dialysis & concentration systems'],
      icon: '🧪',
      description: 'Protein biochemistry'
    },
    {
      id: 'genomics-sequencing',
      name: 'Genomics & Sequencing',
      products: ['Next-generation sequencing (NGS)', 'Sanger sequencing systems', 'DNA sequencers', 'Library preparation equipment', 'Bioinformatics workstations'],
      icon: '📊',
      description: 'Genome analysis'
    },
    {
      id: 'flow-cytometry',
      name: 'Flow Cytometry',
      products: ['Flow cytometers (analytical)', 'Cell sorters (FACS)', 'Immunophenotyping systems', 'Apoptosis analysis', 'Multi-parameter analysis'],
      icon: '🔬',
      description: 'Cell analysis'
    },
    {
      id: 'imaging-systems',
      name: 'Advanced Imaging Systems',
      products: ['Confocal microscopes', 'Fluorescence microscopes', 'Live-cell imaging systems', 'High-content screening', 'Image analysis software'],
      icon: '📷',
      description: 'Cellular imaging'
    },
    {
      id: 'microbiome-fermentation',
      name: 'Microbiology & Fermentation',
      products: ['Bioreactors (benchtop)', 'Fermenters (small-scale)', 'Anaerobic chambers', 'Shaking incubators', 'Colony counters'],
      icon: '🦠',
      description: 'Microbial research'
    },
    {
      id: 'crispr-gene-editing',
      name: 'Gene Editing Tools',
      products: ['CRISPR-Cas9 systems', 'Electroporation devices', 'Microinjection systems', 'Gene delivery platforms', 'Transfection reagents & equipment'],
      icon: '✂️',
      description: 'Genome editing'
    },
    {
      id: 'biobanking-storage',
      name: 'Biobanking & Sample Management',
      products: ['Ultra-low freezers (-80°C)', 'Liquid nitrogen storage', 'Cryogenic vials & racks', 'Sample tracking systems (LIMS)', 'Controlled-rate freezers'],
      icon: '❄️',
      description: 'Sample preservation'
    },
    {
      id: 'immunology-elisa',
      name: 'Immunology Research',
      products: ['ELISA readers (plate readers)', 'Luminometers', 'Automated ELISA processors', 'Antibody production systems', 'Immunofluorescence equipment'],
      icon: '🛡️',
      description: 'Immunological assays'
    },
    {
      id: 'drug-discovery-screening',
      name: 'Drug Discovery & Screening',
      products: ['High-throughput screening (HTS)', 'Liquid handling robots', 'Microplate readers (multi-mode)', 'Compound libraries', 'Hit-to-lead platforms'],
      icon: '💊',
      description: 'Drug development'
    },
    {
      id: 'bioinformatics-software',
      name: 'Bioinformatics & Data Analysis',
      products: ['Sequence analysis software', 'Protein modeling software', 'Statistical analysis tools', 'Data management systems', 'Cloud computing platforms'],
      icon: '💻',
      description: 'Computational biology'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Biotechnology & Life Sciences Research Equipment | Cell Culture, Genomics & Gene Editing | Pacem Health"
        description="Comprehensive biotechnology research infrastructure including cell culture systems, molecular biology equipment, genomics platforms, protein analysis, flow cytometry, CRISPR gene editing tools. Advanced life sciences instrumentation for vaccine development, diagnostics innovation, pharmaceutical R&D across African research institutions."
        keywords={[
          'biotechnology equipment Africa',
          'life sciences research Africa',
          'cell culture systems',
          'molecular biology equipment',
          'genomics sequencing Africa',
          'flow cytometry Africa',
          'CRISPR gene editing',
          'PCR thermal cyclers Africa'
        ]}
        structuredData={productSchema}
      />
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
            <span>Biotechnology & Life Sciences Research</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Biotechnology & Life Sciences Research
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive biotechnology research infrastructure including cell culture systems, molecular biology equipment, genomics platforms, protein analysis, flow cytometry, and gene editing tools. Advanced life sciences instrumentation supporting vaccine development, diagnostics innovation, pharmaceutical R&D, and biotechnology capacity building across African research institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of biotechnology and life sciences research equipment</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Africa's Biotech Revolution</h3>
              <p className="text-gray-700 mb-4">
                Building local biotechnology capacity is essential for health security and economic development.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Vaccine development (COVID-19 highlighted gaps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Diagnostics innovation (RDTs, molecular tests)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Local pharmaceutical manufacturing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Genomic surveillance (infectious diseases)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Biopharmaceutical production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Agricultural biotechnology</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Strategic Research Areas</h3>
              <p className="text-gray-700 mb-4">
                Biotechnology research addresses Africa's unique health challenges and development needs.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Infectious disease diagnostics (malaria, TB, HIV)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pathogen genomics & antimicrobial resistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Neglected tropical diseases (NTDs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cancer research (African-specific genetics)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Traditional medicine validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regenerative medicine & stem cells</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}