import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function MolecularBiologyReagentsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Molecular Biology Reagents",
    "description": "PCR master mixes, DNA extraction kits, molecular diagnostic reagents for molecular testing across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'pcr-master-mixes',
      name: 'PCR Master Mixes & Enzymes',
      products: ['Taq DNA polymerase', '2X PCR master mix', 'Hot-start PCR enzymes', 'High-fidelity polymerases', 'dNTP mixes'],
      icon: '🧬',
      description: 'PCR amplification'
    },
    {
      id: 'realtime-pcr',
      name: 'Real-Time PCR Reagents',
      products: ['SYBR Green master mix', 'TaqMan probe-based master mix', 'ROX reference dye', 'Multiplex PCR kits', 'RT-qPCR reagents'],
      icon: '📊',
      description: 'Quantitative PCR'
    },
    {
      id: 'dna-extraction',
      name: 'DNA Extraction Kits',
      products: ['Blood DNA extraction', 'Tissue DNA extraction', 'Bacterial DNA extraction', 'Viral DNA extraction', 'Column-based purification'],
      icon: '🧪',
      description: 'DNA isolation'
    },
    {
      id: 'rna-extraction',
      name: 'RNA Extraction Kits',
      products: ['Total RNA extraction', 'Viral RNA extraction', 'RNase-free reagents', 'RNA stabilization solutions', 'miRNA isolation'],
      icon: '🔬',
      description: 'RNA isolation'
    },
    {
      id: 'hiv-viral-load',
      name: 'HIV Viral Load Reagents',
      products: ['HIV-1 viral load kits', 'Sample preparation reagents', 'Internal controls', 'Calibrators & standards', 'Abbott m2000/Roche COBAS reagents'],
      icon: '🦠',
      description: 'HIV VL testing'
    },
    {
      id: 'tb-molecular',
      name: 'TB Molecular Diagnostics',
      products: ['GeneXpert MTB/RIF cartridges', 'Xpert Ultra cartridges', 'TB LAMP assays', 'Line probe assays (LPA)', 'MTB drug resistance detection'],
      icon: '🫁',
      description: 'TB molecular testing'
    },
    {
      id: 'hepatitis-molecular',
      name: 'Hepatitis Viral Load',
      products: ['HBV DNA quantification', 'HCV RNA quantification', 'Genotyping assays', 'Viral load calibrators', 'Real-time PCR kits'],
      icon: '🫀',
      description: 'Hepatitis VL monitoring'
    },
    {
      id: 'covid-molecular',
      name: 'COVID-19 Molecular Tests',
      products: ['SARS-CoV-2 RT-PCR kits', 'Multiplex respiratory panels', 'Variant detection', 'High-throughput pooling', 'Point-of-care molecular'],
      icon: '😷',
      description: 'COVID-19 testing'
    },
    {
      id: 'gel-electrophoresis',
      name: 'Gel Electrophoresis Reagents',
      products: ['Agarose powder', 'TAE/TBE buffer', 'DNA loading dye', 'Ethidium bromide/SYBR Safe', 'DNA ladders (100bp, 1kb)'],
      icon: '⚡',
      description: 'DNA/RNA visualization'
    },
    {
      id: 'primers-probes',
      name: 'Primers & Probes',
      products: ['Custom oligonucleotides', 'TaqMan probes', 'Molecular beacons', 'Lyophilized primers', 'Primer storage solutions'],
      icon: '🔧',
      description: 'Custom synthesis'
    },
    {
      id: 'molecular-controls',
      name: 'Molecular Quality Controls',
      products: ['Positive controls (plasmid DNA)', 'Negative controls (nuclease-free water)', 'Internal controls', 'Extraction controls', 'Proficiency testing panels'],
      icon: '✅',
      description: 'Molecular QC'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Molecular Biology Reagents | PCR Reagents | Pacem Health"
        description="Molecular biology reagents including PCR master mixes, DNA extraction kits, molecular diagnostic reagents. Comprehensive molecular testing supplies for African laboratories."
        keywords={[
          'molecular biology reagents Africa',
          'PCR reagents',
          'DNA extraction kits',
          'molecular diagnostics',
          'PCR master mixes',
          'molecular testing',
          'molecular biology supplies',
          'nucleic acid testing'
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
            <span>Molecular Biology Reagents</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Molecular Biology Reagents
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive molecular diagnostics reagents including PCR enzymes, DNA/RNA extraction kits, HIV viral load reagents, TB GeneXpert cartridges, real-time PCR, and molecular quality controls. Quality reagents supporting HIV monitoring, TB drug resistance testing, and infectious disease molecular diagnostics across African healthcare laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of molecular biology reagents</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Molecular Diagnostics in Africa</h3>
              <p className="text-gray-700 mb-4">
                Molecular testing enables early diagnosis, treatment monitoring, and drug resistance detection.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>HIV viral load monitoring (treatment efficacy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>TB drug resistance testing (MDR-TB, RIF resistance)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Early infant diagnosis (HIV EID)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Hepatitis B/C viral load & genotyping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>COVID-19 & emerging pathogen detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Outbreak investigation & pathogen surveillance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Molecular Quality Assurance</h3>
              <p className="text-gray-700 mb-4">
                Molecular testing requires strict quality control to prevent contamination and errors.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>RNase/DNase-free technique & workspace</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Unidirectional workflow (prevent contamination)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Positive & negative controls (every run)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Internal controls (extraction & amplification)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Calibration verification & lot-to-lot testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proficiency testing (WHO/CDC panels)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}