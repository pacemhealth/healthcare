import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function LaboratoryConsumablesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Laboratory Consumables",
    "description": "Blood collection tubes, specimen containers, microscopy supplies, culture media, pipette tips for laboratory diagnostics across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'blood-collection-tubes',
      name: 'Blood Collection Tubes',
      products: ['EDTA tubes (purple cap)', 'Heparin tubes (green cap)', 'Plain tubes/SST (red/gold cap)', 'Sodium citrate tubes (blue cap)', 'Vacutainer systems'],
      icon: '🩸'
    },
    {
      id: 'specimen-containers',
      name: 'Specimen Containers',
      products: ['Urine collection cups (sterile)', 'Stool specimen containers', 'Sputum collection cups (TB diagnosis)', 'Swab transport media', 'Universal containers (50ml, 100ml)'],
      icon: '🧪'
    },
    {
      id: 'microscopy-supplies',
      name: 'Microscopy Supplies',
      products: ['Microscope slides (75x25mm)', 'Cover slips (various sizes)', 'Slide boxes & storage', 'Immersion oil', 'Staining racks & jars'],
      icon: '🔬'
    },
    {
      id: 'culture-media',
      name: 'Culture Media & Petri Dishes',
      products: ['Petri dishes (sterile, 90mm)', 'Blood agar plates', 'MacConkey agar', 'Sabouraud agar (fungal)', 'Dehydrated culture media'],
      icon: '🦠'
    },
    {
      id: 'pipettes-tips',
      name: 'Pipettes & Tips',
      products: ['Micropipettes (2-20μL, 20-200μL, 100-1000μL)', 'Pipette tips (sterile, non-sterile)', 'Serological pipettes (1ml-25ml)', 'Transfer pipettes (disposable)', 'Pipette tip racks'],
      icon: '💧'
    },
    {
      id: 'test-tubes-racks',
      name: 'Test Tubes & Racks',
      products: ['Test tubes (10ml, 15ml, 50ml)', 'Centrifuge tubes (conical bottom)', 'Microcentrifuge tubes (1.5ml, 2ml)', 'Test tube racks (plastic, metal)', 'Cryogenic vials'],
      icon: '🧫'
    },
    {
      id: 'rapid-diagnostic-tests',
      name: 'Rapid Diagnostic Tests (RDTs)',
      products: ['Malaria RDTs (Pf/Pan)', 'HIV rapid test kits', 'Hepatitis B/C rapid tests', 'Syphilis/VDRL test kits', 'Pregnancy tests (hCG)'],
      icon: '⚡'
    },
    {
      id: 'lab-reagents',
      name: 'Laboratory Reagents',
      products: ['Giemsa stain (malaria)', 'Ziehl-Neelsen stain (TB)', 'Gram stain kit', 'Hydrogen peroxide (3%)', 'Ethanol/methanol (lab grade)'],
      icon: '⚗️'
    },
    {
      id: 'lab-safety-equipment',
      name: 'Laboratory Safety Equipment',
      products: ['Lab coats (reusable)', 'Nitrile gloves (lab grade)', 'Safety goggles', 'Face shields', 'Biohazard waste bags'],
      icon: '🥽'
    },
    {
      id: 'phlebotomy-supplies',
      name: 'Phlebotomy Supplies',
      products: ['Blood collection needles (21G-23G)', 'Butterfly needles', 'Tourniquet bands', 'Alcohol swabs (70%)', 'Gauze pads & medical tape'],
      icon: '💉'
    },
    {
      id: 'lab-accessories',
      name: 'Lab Accessories & Consumables',
      products: ['Parafilm (sealing film)', 'Weighing boats/papers', 'Spatulas & scoops', 'Beakers & flasks (glass, plastic)', 'pH paper/strips'],
      icon: '🧰'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Laboratory Consumables | Lab Supplies | Pacem Health"
        description="Laboratory consumables including blood collection tubes, specimen containers, microscopy supplies, culture media, pipette tips. Essential lab supplies supporting diagnostics across African laboratories."
        keywords={[
          'laboratory consumables Africa',
          'blood collection tubes',
          'specimen containers Africa',
          'microscopy supplies',
          'culture media',
          'lab supplies Africa',
          'pipette tips',
          'laboratory supplies Africa'
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
            <Link to="/products/categories/medical-consumables" className="hover:underline">
              Medical Consumables
            </Link>
            <span>/</span>
            <span>Laboratory Consumables</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Laboratory Consumables
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive range of test tubes, pipettes, specimen containers, rapid diagnostic tests, and lab supplies designed to support accurate disease diagnosis across Africa. From malaria microscopy to TB culture, HIV testing to COVID-19 screening, our laboratory consumables enable frontline diagnostics in resource-limited settings.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of laboratory consumables and diagnostic supplies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-4 group-hover:text-[#4B2991] transition-colors">
                  {group.name}
                </h3>
                <div className="space-y-2">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-2 bg-[#4B2991] text-white rounded-lg hover:bg-[#3A1F70] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/medical-consumables')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Medical Consumables
            </button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Diagnostic Testing Foundation</h3>
              <p className="text-gray-700 mb-4">
                Laboratory diagnosis is essential for effective disease management. Accurate testing enables targeted treatment, prevents antimicrobial resistance, and tracks epidemic spread—but requires reliable consumables supply.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Rapid diagnostic tests (RDTs) provide results in 15-20 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Malaria microscopy remains gold standard for parasite quantification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>TB sputum microscopy detects infectious cases (GeneXpert for drug resistance)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>HIV rapid tests enable same-day diagnosis and treatment initiation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality & Validation Standards</h3>
              <p className="text-gray-700 mb-4">
                All laboratory consumables meet international quality standards with validation for accuracy, sterility, and tropical climate stability.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>WHO-prequalified diagnostic tests (malaria, HIV, TB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ISO 13485 certified manufacturing for medical devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterility validation for specimen containers and pipette tips</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Heat/humidity stability testing (40°C+ storage)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Products Matter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Critical for African Healthcare</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Laboratory consumables enable life-saving disease diagnosis across the continent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🦟</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Malaria Diagnosis</h4>
              <p className="text-sm text-gray-700">
                Malaria kills over 400,000 people annually, 95% in Africa. Microscopy slides, Giemsa stain, and RDTs enable rapid diagnosis, preventing presumptive treatment overuse (which drives drug resistance). Quality-assured RDTs detect infections in 15 minutes, guiding appropriate antimalarial therapy at the point of care.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🫁</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Tuberculosis Detection</h4>
              <p className="text-sm text-gray-700">
                TB remains a leading killer in Africa. Sputum specimen containers, Ziehl-Neelsen stain, and microscopy slides detect infectious TB cases, enabling treatment initiation and transmission interruption. Culture media (Lowenstein-Jensen) confirms diagnosis and tests drug susceptibility, critical for MDR-TB management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🩸</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>HIV Testing & Monitoring</h4>
              <p className="text-sm text-gray-700">
                HIV rapid test kits enable same-day diagnosis and ART initiation (Test & Treat strategy). EDTA tubes for CD4 counts and viral load monitoring track treatment response. Early diagnosis and treatment reduce AIDS mortality by 90% and prevent onward transmission, moving toward epidemic control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Challenges in Africa */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Laboratory Challenges in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Supply chain, infrastructure, and workforce barriers to diagnostic testing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Supply Chain & Infrastructure Gaps</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Stockouts:</strong> 40-60% of facilities lack basic lab consumables (slides, reagents, RDTs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Cold Chain Breaks:</strong> RDTs degrade above 30°C → false negatives, wasted resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Electricity Outages:</strong> No power for microscopes, centrifuges, refrigerators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Water Scarcity:</strong> Insufficient water for reagent preparation, glassware washing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Equipment Breakdowns:</strong> Microscopes, centrifuges broken → testing stops</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Quality & Workforce Challenges</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Lab Technician Shortage:</strong> Brain drain, low pay → understaffed labs, long turnaround times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Poor Quality Control:</strong> No external quality assurance → inaccurate results go undetected</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Substandard Products:</strong> Counterfeit/expired reagents, RDTs enter supply chain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Biosafety Lapses:</strong> Improper specimen handling → lab-acquired infections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">⚠️</span>
                  <span><strong>Result Delays:</strong> Specimens transported long distances → degradation, delayed diagnosis</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💡</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Solutions for Stronger Laboratory Systems</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Point-of-Care Testing:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ RDTs enable testing at health posts (no lab needed)</li>
                      <li>✓ GeneXpert near-patient TB/HIV diagnosis</li>
                      <li>✓ Hemoglobin meters for anemia screening</li>
                      <li>✓ Results in minutes → same-day treatment</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Specimen Referral Networks:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Hub-and-spoke lab system (centralized testing)</li>
                      <li>✓ Specimen transport systems (motorcycles, drones)</li>
                      <li>✓ SMS/WhatsApp result reporting</li>
                      <li>✓ Quality assurance at reference labs</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontWeight: 600 }}>Capacity Building:</p>
                    <ul className="text-gray-600 space-y-1">
                      <li>✓ Lab technician training & mentorship</li>
                      <li>✓ Standard operating procedures (SOPs)</li>
                      <li>✓ External quality assurance programs</li>
                      <li>✓ Biosafety training (specimen handling)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Training & Technical Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert guidance on diagnostic testing protocols and quality assurance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Malaria Microscopy</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Thick & thin blood film preparation</li>
                <li>• Giemsa staining technique</li>
                <li>• Parasite identification & quantification</li>
                <li>• Quality control slide reading</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>TB Diagnosis</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Sputum specimen collection</li>
                <li>• Ziehl-Neelsen staining (AFB smear)</li>
                <li>• Culture media preparation</li>
                <li>• Biosafety protocols (TB lab)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Rapid Diagnostic Tests</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• RDT performance & interpretation</li>
                <li>• Storage conditions monitoring</li>
                <li>• Invalid result troubleshooting</li>
                <li>• Lot testing before deployment</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Quality Assurance</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Standard operating procedures (SOPs)</li>
                <li>• Internal quality control</li>
                <li>• External quality assurance (EQA)</li>
                <li>• Equipment calibration & maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Need Laboratory Consumables?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us for bulk pricing, product specifications, and laboratory training support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support/request-equipment-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              to="/support/training-education"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors text-lg"
            >
              Training Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}