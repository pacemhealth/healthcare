import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function VaccinesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Vaccines & Immunizations",
    "description": "Routine immunization vaccines, hepatitis vaccines, HPV vaccines for disease prevention across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'routine-immunization',
      name: 'Routine Immunization',
      vaccines: ['BCG', 'OPV/IPV', 'DPT/Pentavalent', 'Measles/MMR', 'Pneumococcal (PCV)', 'Rotavirus'],
      icon: '👶',
      description: 'Essential childhood vaccines per EPI schedule'
    },
    {
      id: 'hepatitis-vaccines',
      name: 'Hepatitis Vaccines',
      vaccines: ['Hepatitis B', 'Hepatitis A', 'Hepatitis A+B combination'],
      icon: '💉',
      description: 'Prevention of viral hepatitis infections'
    },
    {
      id: 'hpv-cervical-cancer',
      name: 'HPV & Cervical Cancer Prevention',
      vaccines: ['HPV bivalent', 'HPV quadrivalent', 'HPV nonavalent'],
      icon: '🎗️',
      description: 'Human papillomavirus immunization'
    },
    {
      id: 'meningitis',
      name: 'Meningitis Vaccines',
      vaccines: ['Meningococcal ACWY', 'Meningococcal B', 'MenAfriVac (A)'],
      icon: '🧠',
      description: 'Meningococcal disease prevention'
    },
    {
      id: 'yellow-fever',
      name: 'Yellow Fever',
      vaccines: ['Yellow Fever (Live attenuated)'],
      icon: '🦟',
      description: 'Endemic disease prevention across Africa'
    },
    {
      id: 'typhoid',
      name: 'Typhoid Vaccines',
      vaccines: ['Typhoid conjugate vaccine (TCV)', 'Typhoid polysaccharide'],
      icon: '🔬',
      description: 'Typhoid fever prevention'
    },
    {
      id: 'rabies',
      name: 'Rabies Vaccines',
      vaccines: ['Rabies (pre-exposure)', 'Rabies (post-exposure prophylaxis)'],
      icon: '🐕',
      description: 'Rabies prevention and treatment'
    },
    {
      id: 'influenza',
      name: 'Influenza Vaccines',
      vaccines: ['Seasonal flu (trivalent)', 'Seasonal flu (quadrivalent)'],
      icon: '🤧',
      description: 'Annual influenza prevention'
    },
    {
      id: 'covid19',
      name: 'COVID-19 Vaccines',
      vaccines: ['mRNA vaccines', 'Viral vector vaccines', 'Protein subunit vaccines'],
      icon: '🦠',
      description: 'SARS-CoV-2 immunization'
    },
    {
      id: 'cholera',
      name: 'Cholera Vaccines',
      vaccines: ['Oral cholera vaccine (OCV)'],
      icon: '💧',
      description: 'Cholera outbreak prevention'
    },
    {
      id: 'ebola',
      name: 'Ebola Vaccines',
      vaccines: ['rVSV-ZEBOV', 'Ad26.ZEBOV/MVA-BN-Filo'],
      icon: '🩸',
      description: 'Ebola virus disease prevention'
    },
    {
      id: 'travel-vaccines',
      name: 'Travel & Specialized Vaccines',
      vaccines: ['Japanese encephalitis', 'Tick-borne encephalitis', 'Polio boosters'],
      icon: '✈️',
      description: 'Travel medicine and specialized needs'
    },
    {
      id: 'tetanus-diphtheria',
      name: 'Tetanus & Diphtheria Boosters',
      vaccines: ['Td (Tetanus-diphtheria)', 'Tdap (with pertussis)'],
      icon: '💪',
      description: 'Adult booster immunizations'
    },
    {
      id: 'varicella-shingles',
      name: 'Varicella & Shingles',
      vaccines: ['Varicella (Chickenpox)', 'Zoster (Shingles)'],
      icon: '🔴',
      description: 'Varicella-zoster virus prevention'
    },
    {
      id: 'pneumococcal-adult',
      name: 'Adult Pneumococcal',
      vaccines: ['PPSV23', 'PCV13/PCV15/PCV20'],
      icon: '🫁',
      description: 'Pneumococcal disease in adults'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Vaccines & Immunizations | Disease Prevention | Pacem Health"
        description="Vaccines and immunizations including routine childhood vaccines, hepatitis vaccines, HPV vaccines. Essential disease prevention solutions for African healthcare."
        keywords={[
          'vaccines Africa',
          'immunization Africa',
          'childhood vaccines',
          'hepatitis vaccines Africa',
          'HPV vaccine',
          'EPI vaccines',
          'vaccination programs Africa',
          'disease prevention vaccines'
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
            <Link to="/products/categories/branded-patented-pharmaceuticals" className="hover:underline">
              Branded & Patented Pharmaceuticals
            </Link>
            <span>/</span>
            <span>Vaccines</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Vaccines & Immunization
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive vaccine portfolio covering routine immunization, specialized vaccines, and travel medicine. From childhood EPI schedules to emerging disease prevention, we provide cold chain-assured vaccines with technical support for national immunization programs across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Vaccine Categories</h2>
            <p className="text-gray-600">Browse our complete vaccine portfolio by disease or population</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#2563EB] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-2 group-hover:text-[#2563EB] transition-colors">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{group.description}</p>
                <div className="space-y-1 mb-4">
                  {group.vaccines.map((vaccine, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#2563EB] text-xs mt-1">•</span>
                      <span className="text-sm text-gray-700">{vaccine}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/branded-patented-pharmaceuticals')}
              className="text-[#2563EB] hover:underline"
            >
              ← Back to Branded & Patented Pharmaceuticals
            </button>
          </div>
        </div>
      </section>

      {/* Cold Chain Excellence Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Cold Chain Excellence</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Maintaining vaccine potency from manufacturer to patient
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Temperature Control</h4>
              <p className="text-sm text-gray-600">
                +2°C to +8°C storage with continuous monitoring and alarm systems
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Distribution Network</h4>
              <p className="text-sm text-gray-600">
                Refrigerated vehicles and insulated containers with temperature loggers
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Documentation</h4>
              <p className="text-sm text-gray-600">
                Complete temperature records and vaccine vial monitors (VVM)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2563EB] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Training Support</h4>
              <p className="text-sm text-gray-600">
                Cold chain equipment maintenance and proper handling protocols
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* National Immunization Support Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">National Immunization Program Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive services for ministry of health immunization initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#EBF8FF] p-8 rounded-xl">
              <div className="text-4xl mb-4">📋</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Program Planning</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Population-based forecasting and quantification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>EPI schedule alignment and vaccine selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Budget planning and financial modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Gavi co-financing and donor coordination</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-8 rounded-xl">
              <div className="text-4xl mb-4">🚚</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Supply Chain Management</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Multi-year procurement agreements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Central and regional cold chain facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Last-mile distribution to health centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Stock management and expiry prevention</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#EBF8FF] p-8 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Data & Monitoring</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Coverage monitoring and reporting systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Vaccine adverse event surveillance (AEFI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Cold chain temperature monitoring systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  <span>Coverage surveys and data quality assessments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign & Outbreak Response Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Campaign & Outbreak Response</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rapid deployment capabilities for mass vaccination and emergency response
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Mass Vaccination Campaigns</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Measles Campaigns:</strong> Catch-up and follow-up campaigns for children</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>HPV Introduction:</strong> School-based vaccination for adolescent girls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Meningitis Belt:</strong> Reactive and preventive meningitis campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Polio Eradication:</strong> Supplementary immunization activities (SIAs)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Outbreak & Emergency Response</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Cholera Outbreaks:</strong> Rapid deployment of oral cholera vaccine (OCV)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Yellow Fever:</strong> Emergency stockpile access and ring vaccination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Ebola Prevention:</strong> Pre-positioning and rapid response protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Meningitis Outbreaks:</strong> Reactive vaccination in affected districts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccine Quality & Safety Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Quality Assurance & Safety</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Manufacturing Standards</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>WHO Prequalification:</strong> All vaccines meet WHO prequalification standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Regulatory Approval:</strong> FDA, EMA, or stringent regulatory authority (SRA) approval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Lot Release Testing:</strong> National regulatory authority (NRA) batch release</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>GMP Compliance:</strong> Current Good Manufacturing Practice certification</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Pharmacovigilance</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>AEFI Monitoring:</strong> Adverse events following immunization surveillance systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Safety Committees:</strong> National immunization technical advisory groups (NITAGs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Post-Marketing Surveillance:</strong> Ongoing safety monitoring and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] mt-1">✓</span>
                  <span><strong>Healthcare Provider Training:</strong> Recognition and reporting of adverse events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccine Innovation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Vaccine Innovation & New Introductions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Supporting African countries to introduce new and underutilized vaccines
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Next-Generation Vaccines</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Typhoid conjugate vaccines (TCV)</li>
                <li>• Malaria vaccines (RTS,S, R21)</li>
                <li>• Improved rotavirus vaccines</li>
                <li>• Multi-antigen combination vaccines</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🌍</div>
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Regional Priorities</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dengue vaccines for endemic areas</li>
                <li>• Rabies pre-exposure prophylaxis</li>
                <li>• Adolescent vaccination (HPV, Tdap)</li>
                <li>• Adult immunization programs</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💰</div>
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Access & Affordability</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gavi transition and co-financing</li>
                <li>• Tiered pricing mechanisms</li>
                <li>• Technology transfer initiatives</li>
                <li>• Local manufacturing support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">15+</div>
              <div className="text-gray-600">Vaccine Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">50+</div>
              <div className="text-gray-600">Individual Vaccines</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">100%</div>
              <div className="text-gray-600">WHO Prequalified</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#2563EB]">24/7</div>
              <div className="text-gray-600">Cold Chain Monitoring</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}