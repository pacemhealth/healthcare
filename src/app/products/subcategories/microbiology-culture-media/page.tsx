import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function MicrobiologyCultureMediaPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Microbiology Culture Media",
    "description": "General purpose media, selective media, enrichment media for bacterial culture and identification across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'general-purpose-media',
      name: 'General Purpose Culture Media',
      products: ['Blood agar plates', 'Chocolate agar', 'Nutrient agar', 'Brain heart infusion agar', 'Tryptic soy agar'],
      icon: '🧫',
      description: 'Routine bacterial culture'
    },
    {
      id: 'selective-media',
      name: 'Selective & Differential Media',
      products: ['MacConkey agar', 'EMB agar', 'Mannitol salt agar', 'XLD agar (Salmonella/Shigella)', 'TCBS agar (Vibrio)'],
      icon: '🎯',
      description: 'Selective isolation'
    },
    {
      id: 'urine-culture-media',
      name: 'Urine Culture Media',
      products: ['CLED agar', 'Chromogenic UTI agar', 'MacConkey agar', 'Blood agar (urine)', 'Urine culture paddles'],
      icon: '💧',
      description: 'UTI diagnosis'
    },
    {
      id: 'anaerobic-media',
      name: 'Anaerobic Culture Media',
      products: ['Thioglycollate broth', 'Brucella blood agar', 'Bacteroides bile esculin (BBE)', 'Anaerobic blood agar', 'Egg yolk agar'],
      icon: '🫙',
      description: 'Anaerobe cultivation'
    },
    {
      id: 'fungal-media',
      name: 'Fungal Culture Media',
      products: ['Sabouraud dextrose agar', 'Potato dextrose agar', 'Dermatophyte test medium (DTM)', 'Birdseed agar (Crypto)', 'Mycological agar'],
      icon: '🍄',
      description: 'Fungal isolation'
    },
    {
      id: 'mycobacterial-media',
      name: 'Mycobacterial Culture Media',
      products: ['Löwenstein-Jensen (LJ) medium', 'Middlebrook 7H9/7H10/7H11', 'MGIT tubes (liquid culture)', 'Ogawa medium', 'Mycobacteria growth indicator'],
      icon: '🦠',
      description: 'TB culture'
    },
    {
      id: 'biochemical-tests',
      name: 'Biochemical Identification Tests',
      products: ['Oxidase reagent strips', 'Catalase reagent', 'Indole test reagent', 'API identification strips', 'Triple sugar iron (TSI) agar'],
      icon: '⚗️',
      description: 'Bacterial identification'
    },
    {
      id: 'ast-media',
      name: 'Antimicrobial Susceptibility Testing',
      products: ['Mueller-Hinton agar', 'Mueller-Hinton broth', 'Antibiotic discs', 'E-test strips', 'CLSI/EUCAST standards'],
      icon: '💊',
      description: 'Antibiotic sensitivity'
    },
    {
      id: 'enrichment-broths',
      name: 'Enrichment & Transport Media',
      products: ['Selenite F broth', 'Alkaline peptone water', 'Stuart transport medium', 'Amies transport medium', 'Buffered glycerol saline'],
      icon: '🧪',
      description: 'Specimen transport & enrichment'
    },
    {
      id: 'culture-swabs',
      name: 'Culture Swabs & Collection',
      products: ['Sterile cotton swabs', 'Rayon swabs', 'Flocked swabs', 'Transport swabs (Amies/Stuart)', 'Nasal/throat swabs'],
      icon: '🩹',
      description: 'Specimen collection'
    },
    {
      id: 'staining-reagents',
      name: 'Microbiology Stains',
      products: ['Gram stain kits', 'Ziehl-Neelsen (AFB) stain', 'Auramine-rhodamine stain', 'India ink (Crypto)', 'Lactophenol cotton blue'],
      icon: '🎨',
      description: 'Microscopy staining'
    },
    {
      id: 'quality-control-strains',
      name: 'Quality Control Strains',
      products: ['ATCC control strains', 'QC organisms (E. coli, S. aureus, P. aeruginosa)', 'Neisseria controls', 'Candida controls', 'Lyophilized strains'],
      icon: '✅',
      description: 'Microbiology QC'
    },
    {
      id: 'blood-culture-media',
      name: 'Blood Culture Systems',
      products: ['Blood culture bottles (aerobic/anaerobic)', 'Pediatric blood culture bottles', 'Automated blood culture systems', 'Manual blood culture media', 'Myco/F Lytic bottles'],
      icon: '🩸',
      description: 'Sepsis diagnosis'
    },
    {
      id: 'water-testing-media',
      name: 'Water & Food Testing Media',
      products: ['Membrane lactose glucuronide agar (MLGA)', 'Brilliant green bile broth', 'Lactose broth', 'Salmonella enrichment media', 'Coliform detection'],
      icon: '💧',
      description: 'Environmental & food microbiology'
    },
    {
      id: 'dehydrated-media',
      name: 'Dehydrated Media & Supplements',
      products: ['Dehydrated agar powder', 'Horse blood (sterile)', 'Sheep blood (sterile)', 'Antibiotic supplements', 'Vitamin K & hemin'],
      icon: '📦',
      description: 'Media preparation'
    },
    {
      id: 'rapid-ID-systems',
      name: 'Rapid Identification Systems',
      products: ['API strips (20E, 20NE, Staph, Candida)', 'RapID systems', 'Chromogenic agars', 'Latex agglutination kits', 'MALDI-TOF consumables'],
      icon: '⚡',
      description: 'Rapid organism ID'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Microbiology Culture Media | Bacterial Culture | Pacem Health"
        description="Microbiology culture media including general purpose media, selective media, enrichment media. Comprehensive bacterial culture supplies for African laboratories."
        keywords={[
          'microbiology culture media Africa',
          'bacterial culture media',
          'culture plates',
          'agar media',
          'selective media',
          'enrichment media',
          'microbiology supplies',
          'culture media'
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
            <span>Microbiology Culture Media & Reagents</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Microbiology Culture Media & Reagents
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive microbiology supplies including culture media, agar plates, biochemical tests, antimicrobial susceptibility testing, staining reagents, and blood culture systems. Quality media supporting bacterial culture, TB diagnosis, fungal isolation, and antimicrobial resistance surveillance across African healthcare laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of microbiology culture media and reagents</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Microbiology in African Healthcare</h3>
              <p className="text-gray-700 mb-4">
                Microbiological culture is essential for infection diagnosis and antimicrobial stewardship.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sepsis & bacteremia diagnosis (blood cultures)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>UTI diagnosis (urine culture)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>TB culture & drug susceptibility testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Antimicrobial resistance surveillance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Healthcare-associated infection (HAI) investigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Outbreak investigation & typing</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Media Quality & Storage</h3>
              <p className="text-gray-700 mb-4">
                Proper media preparation and storage ensure reliable culture results.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterile technique during media preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Storage at 2-8°C (protect from light)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Shelf-life monitoring and expiration dating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterility checks (negative controls)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>QC with known organisms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Inspection for contamination or drying</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}