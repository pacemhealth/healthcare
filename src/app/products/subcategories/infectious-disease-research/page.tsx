import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function InfectiousDiseaseResearchPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Infectious Disease Research Equipment",
    "description": "Pathogen detection, antimicrobial resistance testing, virology research, parasitology equipment for infectious disease research across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'pathogen-detection',
      name: 'Pathogen Detection & Identification',
      products: ['PCR systems (pathogen-specific)', 'Multiplex pathogen panels', 'Sequencing platforms (pathogen ID)', 'MALDI-TOF (microbial ID)', 'Rapid diagnostic development'],
      icon: '🦠',
      description: 'Organism identification'
    },
    {
      id: 'antimicrobial-resistance',
      name: 'Antimicrobial Resistance (AMR) Testing',
      products: ['Automated susceptibility testing', 'Disc diffusion equipment', 'E-test strips', 'Molecular AMR detection', 'Whole genome sequencing (AMR genes)'],
      icon: '💊',
      description: 'Drug resistance'
    },
    {
      id: 'virology-research',
      name: 'Virology Research',
      products: ['Viral culture systems (BSL-2/3)', 'Viral load testing', 'Serological assays (antibodies)', 'Plaque assays', 'Virus neutralization tests'],
      icon: '🔬',
      description: 'Viral pathogens'
    },
    {
      id: 'parasitology-research',
      name: 'Parasitology Research',
      products: ['Parasite microscopy', 'PCR (parasite detection)', 'Drug sensitivity assays', 'Vector competence studies', 'Parasite culture systems'],
      icon: '🔎',
      description: 'Parasitic diseases'
    },
    {
      id: 'mycobacteriology',
      name: 'Mycobacteriology (TB Research)',
      products: ['TB culture systems (MGIT, LJ media)', 'GeneXpert MTB/RIF', 'Drug susceptibility testing (TB)', 'Microscopy (AFB staining)', 'Molecular TB diagnostics'],
      icon: '🫁',
      description: 'Tuberculosis research'
    },
    {
      id: 'hiv-research',
      name: 'HIV/AIDS Research',
      products: ['CD4/CD8 counters (flow cytometry)', 'Viral load systems', 'HIV drug resistance testing', 'Rapid antibody tests (development)', 'Point-of-care CD4'],
      icon: '🩺',
      description: 'HIV research tools'
    },
    {
      id: 'vaccine-development',
      name: 'Vaccine Development & Testing',
      products: ['Immunogenicity assays', 'Vaccine potency testing', 'Adjuvant screening', 'Animal models (small animal)', 'Cold chain monitoring systems'],
      icon: '💉',
      description: 'Vaccine research'
    },
    {
      id: 'epidemiology-surveillance',
      name: 'Epidemiology & Surveillance',
      products: ['Specimen transport systems', 'Field sample collection', 'Mobile laboratory units', 'Data management (outbreak)', 'GPS mapping tools'],
      icon: '📊',
      description: 'Disease surveillance'
    },
    {
      id: 'outbreak-response',
      name: 'Outbreak Investigation',
      products: ['Portable PCR (field-deployable)', 'Rapid testing kits', 'PPE for outbreak response', 'Biosafety equipment (portable)', 'Contact tracing technology'],
      icon: '🚨',
      description: 'Rapid response'
    },
    {
      id: 'neglected-tropical-diseases',
      name: 'Neglected Tropical Diseases (NTDs)',
      products: ['NTD diagnostic tools', 'Schistosomiasis detection', 'Filariasis testing', 'Trachoma screening', 'Soil-transmitted helminths'],
      icon: '🌍',
      description: 'NTD research'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Infectious Disease Research Equipment | Pathogen Detection | Pacem Health"
        description="Infectious disease research equipment including pathogen detection, antimicrobial resistance testing, virology research, parasitology. Supporting infectious disease research and surveillance across Africa."
        keywords={[
          'infectious disease research Africa',
          'pathogen detection equipment',
          'antimicrobial resistance testing',
          'virology research equipment',
          'parasitology research',
          'disease surveillance Africa',
          'research laboratory equipment',
          'infectious disease diagnostics'
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
            <Link to="/products/categories/research-development-equipment" className="hover:underline">
              Research & Development Equipment
            </Link>
            <span>/</span>
            <span>Infectious Disease Research</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Infectious Disease Research
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Specialized infectious disease research infrastructure including pathogen detection platforms, antimicrobial resistance testing, virology systems, TB research equipment, HIV diagnostics, vaccine development, and outbreak investigation tools. Critical research instrumentation supporting Africa's response to its infectious disease burden and emerging pandemic threats.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of infectious disease research equipment</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Africa's Infectious Disease Burden</h3>
              <p className="text-gray-700 mb-4">
                Infectious diseases remain the leading cause of death and disability across Africa.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>HIV/AIDS (ongoing epidemic management)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Tuberculosis (highest burden globally)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Malaria (endemic in most countries)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Neglected tropical diseases (NTDs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Emerging infectious diseases (Ebola, COVID-19)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Antimicrobial resistance (growing threat)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Research Priorities</h3>
              <p className="text-gray-700 mb-4">
                Local research capacity is essential for understanding and addressing Africa's disease dynamics.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pathogen genomic surveillance networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>AMR surveillance and stewardship</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Vaccine efficacy trials (local populations)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Diagnostics development (point-of-care)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Outbreak preparedness & rapid response</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Operational research (implementation science)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}