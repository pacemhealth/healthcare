import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function ImmunologySerologyReagentsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Immunology & Serology Reagents",
    "description": "HIV testing kits, hepatitis testing, syphilis serology, pregnancy tests, infectious disease diagnostics for African laboratories",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'hiv-testing-kits',
      name: 'HIV Testing Kits',
      products: ['HIV rapid tests (1st line, 2nd line, 3rd line)', 'HIV ELISA kits (screening & confirmatory)', 'HIV-1/HIV-2 differentiation', 'HIV p24 antigen tests', 'HIV quality control panels'],
      icon: '🦠',
      description: 'HIV diagnosis & screening'
    },
    {
      id: 'hepatitis-testing',
      name: 'Hepatitis Testing',
      products: ['HBsAg rapid tests & ELISA', 'Anti-HCV rapid tests & ELISA', 'Anti-HBs (immunity)', 'HBeAg/Anti-HBe', 'Anti-HAV IgM/IgG'],
      icon: '🫀',
      description: 'Hepatitis screening'
    },
    {
      id: 'syphilis-testing',
      name: 'Syphilis Testing',
      products: ['RPR (rapid plasma reagin) kits', 'VDRL tests', 'TPHA/TPPA (treponemal tests)', 'Syphilis rapid tests', 'Confirmatory FTA-ABS'],
      icon: '💉',
      description: 'Syphilis serology'
    },
    {
      id: 'pregnancy-testing',
      name: 'Pregnancy Testing',
      products: ['Urine hCG tests (cassette, strip, midstream)', 'Serum hCG qualitative', 'Serum beta-hCG quantitative', 'Early detection tests', 'Control materials'],
      icon: '🤰',
      description: 'Pregnancy diagnosis'
    },
    {
      id: 'infectious-disease-serology',
      name: 'Infectious Disease Serology',
      products: ['Typhoid (Widal test, Tubex TF)', 'Brucella serology', 'Toxoplasmosis (TORCH)', 'Rubella IgM/IgG', 'CMV IgM/IgG'],
      icon: '🦠',
      description: 'Infectious disease testing'
    },
    {
      id: 'tuberculosis-serology',
      name: 'TB Immunoassays',
      products: ['TB LAM urine test', 'Interferon-gamma release assays (IGRA)', 'TB antibody tests', 'TB-SPOT tests', 'QuantiFERON-TB Gold'],
      icon: '🫁',
      description: 'TB immunodiagnostics'
    },
    {
      id: 'malaria-rdt',
      name: 'Malaria Rapid Diagnostic Tests',
      products: ['Pf (falciparum) RDTs', 'Pf/Pan RDTs (all species)', 'Pf/Pv RDTs', 'HRP2 & pLDH-based tests', 'Malaria RDT quality control'],
      icon: '🦟',
      description: 'Malaria point-of-care testing'
    },
    {
      id: 'elisa-reagents',
      name: 'ELISA Reagents & Accessories',
      products: ['TMB substrate', 'Wash buffer concentrates', 'Diluent buffers', 'Stop solution', 'Adhesive plate seals'],
      icon: '🧪',
      description: 'ELISA consumables'
    },
    {
      id: 'tumor-markers',
      name: 'Tumor Markers',
      products: ['PSA (prostate-specific antigen)', 'CEA (carcinoembryonic antigen)', 'AFP (alpha-fetoprotein)', 'CA 125 (ovarian)', 'CA 19-9 (pancreatic)'],
      icon: '🎗️',
      description: 'Cancer screening'
    },
    {
      id: 'thyroid-hormones',
      name: 'Thyroid Function Tests',
      products: ['TSH immunoassays', 'Free T4 (FT4)', 'Free T3 (FT3)', 'Total T4 & T3', 'Thyroid antibodies (anti-TPO)'],
      icon: '🦋',
      description: 'Thyroid testing'
    },
    {
      id: 'fertility-hormones',
      name: 'Fertility & Reproductive Hormones',
      products: ['LH (luteinizing hormone)', 'FSH (follicle-stimulating hormone)', 'Prolactin', 'Estradiol', 'Testosterone'],
      icon: '💑',
      description: 'Fertility assessment'
    },
    {
      id: 'autoimmune-testing',
      name: 'Autoimmune Markers',
      products: ['Rheumatoid factor (RF)', 'Anti-CCP (rheumatoid arthritis)', 'ANA (antinuclear antibodies)', 'Anti-dsDNA', 'ANCA testing'],
      icon: '🔬',
      description: 'Autoimmune disease testing'
    },
    {
      id: 'emerging-infections',
      name: 'Emerging Infectious Disease Tests',
      products: ['COVID-19 antibody tests', 'Ebola rapid tests', 'Dengue NS1 & IgM/IgG', 'Chikungunya serology', 'Zika virus antibodies'],
      icon: '🌍',
      description: 'Outbreak response testing'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Immunology & Serology Reagents | Infectious Disease Testing | Pacem Health"
        description="Immunology and serology reagents including HIV testing kits, hepatitis testing, syphilis serology, pregnancy tests, infectious disease diagnostics. Supporting disease diagnosis across African laboratories."
        keywords={[
          'immunology reagents Africa',
          'serology reagents',
          'HIV testing kits Africa',
          'hepatitis testing',
          'syphilis testing Africa',
          'infectious disease diagnostics',
          'rapid test kits Africa',
          'serology testing reagents'
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
            <span>Immunology & Serology Reagents</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Immunology & Serology Reagents
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive immunoassay reagents including HIV testing kits, hepatitis serology, syphilis testing, ELISA reagents, malaria RDTs, tumor markers, hormone assays, and infectious disease diagnostics. Quality serological reagents supporting disease surveillance, diagnosis, and screening across African healthcare laboratories.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of immunology and serology reagents</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Serology in African Healthcare</h3>
              <p className="text-gray-700 mb-4">
                Serological testing is critical for infectious disease screening, blood safety, and surveillance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>HIV screening (PMTCT, blood safety, VCT)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Blood bank screening (HIV, HBV, HCV, syphilis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Antenatal screening (syphilis, HIV, hepatitis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Malaria point-of-care diagnosis (RDTs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Outbreak investigation (Ebola, dengue, Zika)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Vaccine efficacy monitoring (serology surveys)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">RDT Quality & Validation</h3>
              <p className="text-gray-700 mb-4">
                Rapid diagnostic test quality ensures accurate diagnosis at point-of-care.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>WHO prequalification (quality-assured tests)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Storage at proper temperature (avoid heat)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Lot testing and quality control panels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Staff training on proper technique</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Result interpretation & weak positives</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>External quality assessment participation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}