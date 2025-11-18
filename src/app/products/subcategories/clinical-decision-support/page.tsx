import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';
import { CheckCircle2 } from 'lucide-react';

export default function ClinicalDecisionSupportPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Clinical Decision Support Systems",
    "description": "Clinical decision support tools including drug interaction checkers, dosing calculators, clinical guidelines, allergy alerts for pharmacy safety across African healthcare settings",
    "applicationCategory": "HealthApplication",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const solutionAreas = [
    {
      name: 'Drug Interaction Checkers',
      description: 'Real-time screening systems that analyze patient medication lists against comprehensive drug interaction databases, identifying potential drug-drug, drug-food, and drug-disease interactions with severity ratings and clinical management recommendations',
      applications: ['Drug-drug interactions', 'Drug-food interactions', 'Drug-disease contraindications', 'Severity assessment']
    },
    {
      name: 'Dosing Calculators',
      description: 'Clinical calculation tools for weight-based dosing, body surface area calculations, renal dose adjustments (CrCl, eGFR), hepatic dosing, pediatric and neonatal dosing, and IV drip rate calculations ensuring accurate medication administration',
      applications: ['Weight-based dosing', 'Renal adjustments', 'Pediatric dosing', 'IV calculations']
    },
    {
      name: 'Clinical Guidelines Database',
      description: 'Point-of-care access to evidence-based treatment protocols, disease management guidelines (WHO, national guidelines), antibiotic stewardship recommendations, vaccination schedules, and standard treatment guidelines customized for local formularies',
      applications: ['Treatment protocols', 'Disease guidelines', 'Antibiotic stewardship', 'Vaccination schedules']
    },
    {
      name: 'Allergy Alert Systems',
      description: 'Automated allergy checking that cross-references new prescriptions against patient allergy profiles, identifies chemically similar medications, provides alternative drug suggestions, and generates clinical alerts preventing adverse allergic reactions',
      applications: ['Allergy screening', 'Cross-sensitivity alerts', 'Alternative recommendations', 'ADR prevention']
    }
  ];

  const keyFeatures = [
    {
      title: 'Real-Time Alerts',
      description: 'Instant pop-up warnings at point of dispensing when potential safety issues detected, requiring pharmacist acknowledgment',
      icon: '⚠️'
    },
    {
      title: 'Severity Grading',
      description: 'Interactions classified as contraindicated, major, moderate, or minor enabling prioritization of clinical interventions',
      icon: '📊'
    },
    {
      title: 'Clinical Guidance',
      description: 'Detailed management recommendations including timing adjustments, monitoring requirements, and therapeutic alternatives',
      icon: '📋'
    },
    {
      title: 'Local Customization',
      description: 'Guidelines and formularies adapted to local disease patterns, available medications, and national treatment protocols',
      icon: '🌍'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Clinical Decision Support Systems | Drug Interactions, Dosing & Guidelines | Pacem Health"
        description="Intelligent clinical decision support tools including drug interaction checkers, dosing calculators, clinical guidelines, allergy alerts preventing medication errors. Evidence-based guidance enhancing medication safety across African pharmacy practice."
        keywords={[
          'clinical decision support Africa',
          'drug interaction checker',
          'dosing calculator pharmacy',
          'pharmacy safety systems',
          'allergy alert systems',
          'clinical guidelines database',
          'medication error prevention',
          'pharmacy technology Africa'
        ]}
        structuredData={productSchema}
      />
      {/* Breadcrumb Bar */}
      <section className="bg-[#4B2991] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/division2" className="hover:underline">Pharmacy Services</Link>
            <span>/</span>
            <Link to="/products/categories/technology-solutions" className="hover:underline">Technology Solutions</Link>
            <span>/</span>
            <span>Clinical Decision Support</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Technology Solutions</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Clinical Decision Support Systems
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Intelligent clinical decision support tools that enhance medication safety and therapeutic outcomes through real-time drug interaction screening, precise dosing calculations, evidence-based clinical guidelines, and allergy alert systems. These systems serve as critical safety nets in African pharmacy practice where pharmacist-to-patient ratios are often 1:10,000 or higher, polypharmacy is common in patients managing multiple chronic conditions, and access to clinical references may be limited—providing instant, evidence-based guidance at the point of dispensing to prevent medication errors and optimize therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Areas Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Solution Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl">
              Clinical decision support tools that prevent errors and optimize therapy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {solutionAreas.map((solution, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-lg transition-all">
                <h3 className="text-xl mb-3">{solution.name}</h3>
                <p className="text-gray-700 mb-4">{solution.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Key Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.applications.map((app, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Decision Support Features</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Critical capabilities that enhance clinical decision-making
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drug Interaction Deep Dive */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">The Drug Interaction Problem</h2>
              <p className="text-gray-700 mb-6">
                Drug interactions cause 20-30% of adverse drug events, yet many go undetected in African pharmacy practice due to limited clinical resources and time constraints. Automated screening catches interactions that manual checking misses.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>🔴 High-Risk Interactions</h4>
                  <p className="text-sm text-gray-700">Warfarin + NSAIDs (bleeding risk), Rifampicin + HIV meds (treatment failure), ACE inhibitors + K+ supplements (hyperkalemia)</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>💊 Polypharmacy Challenge</h4>
                  <p className="text-sm text-gray-700">Patients with diabetes, hypertension, HIV on 8-12 medications daily. Manual interaction checking for all possible combinations is impossible.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>📚 Knowledge Gaps</h4>
                  <p className="text-sm text-gray-700">Pharmacy technicians and newly qualified pharmacists may not recognize all clinically significant interactions, especially with newer medications</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>⏱️ Time Constraints</h4>
                  <p className="text-sm text-gray-700">High patient volumes (100+ patients/day) leave insufficient time for thorough manual interaction checking</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl mb-4">Automated Interaction Screening</h3>
              <div className="space-y-4 text-white/90">
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>⚡ Instant Screening</p>
                  <p className="text-sm">System checks new prescription against patient's entire medication list in {'<'}1 second, screening thousands of potential interactions instantly</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>📊 Severity Grading</p>
                  <p className="text-sm">Interactions categorized as Contraindicated (do not dispense), Major (intervention required), Moderate (monitoring needed), or Minor (document only)</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>💡 Management Guidance</p>
                  <p className="text-sm">System provides specific recommendations: "Separate doses by 2 hours", "Monitor INR weekly", "Consider alternative: Drug X", "Contraindicated—contact prescriber"</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>📝 Documentation</p>
                  <p className="text-sm">All alerts and pharmacist responses logged for quality assurance, regulatory compliance, and medico-legal protection</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>🎯 Clinical Impact</p>
                  <p className="text-sm">Studies show automated screening catches 95% of clinically significant interactions vs. 40-60% with manual checking, reducing adverse drug events by 50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dosing Calculator Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Clinical Dosing Calculators</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Precise dose calculations preventing medication errors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👶</div>
              <h3 className="text-xl mb-2">Pediatric Dosing</h3>
              <p className="text-gray-700 mb-3">
                Weight-based calculations for children with age-appropriate dose ranges, maximum dose limits, and volume calculations for liquid formulations. Critical for preventing 10-fold overdoses common in pediatric pharmacy.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p className="mb-1" style={{ fontWeight: 600 }}>Example:</p>
                <p className="text-gray-700">Amoxicillin 40mg/kg/day ÷ 3 doses for 12kg child = 160mg TID. If suspension is 250mg/5ml, give 3.2ml TID.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🩺</div>
              <h3 className="text-xl mb-2">Renal Dose Adjustment</h3>
              <p className="text-gray-700 mb-3">
                Calculate creatinine clearance (Cockcroft-Gault) or eGFR, then adjust medication doses for renal impairment. Essential for preventing toxicity from renally-excreted drugs (aminoglycosides, vancomycin, metformin).
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p className="mb-1" style={{ fontWeight: 600 }}>Example:</p>
                <p className="text-gray-700">Patient CrCl 35ml/min. Ciprofloxacin dose reduced from 500mg BID to 250mg BID per renal dosing guidelines.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💉</div>
              <h3 className="text-xl mb-2">IV Drip Rate Calculations</h3>
              <p className="text-gray-700 mb-3">
                Calculate infusion rates for continuous IV medications (dopamine, insulin, heparin) from mcg/kg/min to ml/hour. Prevents calculation errors that lead to over/under-dosing in critical care settings.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p className="mb-1" style={{ fontWeight: 600 }}>Example:</p>
                <p className="text-gray-700">Dopamine 5mcg/kg/min for 70kg patient. 400mg in 250ml = 1600mcg/ml. Rate = 13.1ml/hr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Guidelines Integration */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Point-of-Care Clinical Guidelines</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Evidence-based protocols accessible during patient care
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl mb-4">Essential Clinical References</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block" style={{ fontWeight: 600 }}>WHO Essential Medicines List</span>
                      <span className="text-sm text-gray-600">Standard treatment guidelines for common conditions</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block" style={{ fontWeight: 600 }}>National STG</span>
                      <span className="text-sm text-gray-600">Country-specific standard treatment guidelines and protocols</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block" style={{ fontWeight: 600 }}>Disease Management Protocols</span>
                      <span className="text-sm text-gray-600">HIV/ART, TB (DOTS), diabetes, hypertension, asthma management</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block" style={{ fontWeight: 600 }}>Antibiotic Stewardship</span>
                      <span className="text-sm text-gray-600">Appropriate antimicrobial selection, duration, and resistance patterns</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block" style={{ fontWeight: 600 }}>Immunization Schedules</span>
                      <span className="text-sm text-gray-600">EPI vaccines, adult immunizations, catch-up schedules</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-4">Practical Clinical Scenarios</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2" style={{ fontWeight: 600 }}>Scenario: Malaria Treatment</p>
                    <p className="text-gray-700">Patient presents with confirmed malaria. System provides first-line treatment (Artemether-Lumefantrine dosing by weight), identifies G6PD testing requirements, flags drug interactions with current medications, and reminds about pregnancy testing for women of childbearing age.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2" style={{ fontWeight: 600 }}>Scenario: Hypertension Management</p>
                    <p className="text-gray-700">New hypertension diagnosis. Guidelines suggest first-line therapy options (thiazide, ACE-I, CCB), provide BP targets by age and comorbidity, recommend monitoring frequency, identify when to escalate therapy, and flag contraindications based on patient conditions.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2" style={{ fontWeight: 600 }}>Scenario: Antibiotic Selection</p>
                    <p className="text-gray-700">UTI treatment needed. System recommends empiric therapy (nitrofurantoin, TMP-SMX) based on local resistance patterns, suggests culture if treatment fails, provides alternative options for allergies/contraindications, and specifies appropriate duration (3 days uncomplicated, 7 days complicated).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Allergy Alert System */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Allergy Screening Workflow</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ fontWeight: 600 }}>1</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Patient Allergy Profile</p>
                    <p className="text-sm text-gray-600">System stores documented allergies and adverse reactions</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ fontWeight: 600 }}>2</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>New Prescription Entered</p>
                    <p className="text-sm text-gray-600">Pharmacist scans or enters new medication order</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#DC3545] text-white w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ fontWeight: 600 }}>3</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Alert Triggered</p>
                    <p className="text-sm text-gray-600">If allergy detected, prominent red alert blocks dispensing</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#7C944B] text-white w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ fontWeight: 600 }}>4</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Alternative Suggested</p>
                    <p className="text-sm text-gray-600">System recommends therapeutically equivalent non-allergenic option</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ fontWeight: 600 }}>5</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Prescriber Contact</p>
                    <p className="text-sm text-gray-600">Pharmacist contacts prescriber for alternative prescription</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">Preventing Allergic Reactions</h2>
              <p className="text-gray-700 mb-6">
                Medication allergies cause 15-20% of adverse drug events. Automated allergy screening prevents potentially fatal allergic reactions by cross-checking every prescription against documented allergies.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-2 border-[#4B2991]">
                  <p className="mb-2" style={{ fontWeight: 600 }}>🚨 High-Risk Alert: Penicillin Allergy</p>
                  <p className="text-sm text-gray-700">Patient allergic to penicillin. New prescription: Amoxicillin. <span className="text-[#DC3545]" style={{ fontWeight: 600 }}>CONTRAINDICATED—ALLERGY DOCUMENTED.</span> Alternative: Azithromycin 500mg OD x 3 days.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-[#4B2991]">
                  <p className="mb-2" style={{ fontWeight: 600 }}>⚠️ Cross-Sensitivity Alert: Sulfa Drugs</p>
                  <p className="text-sm text-gray-700">Patient allergic to sulfamethoxazole. New prescription: Furosemide. <span className="text-[#DC3545]" style={{ fontWeight: 600 }}>CAUTION—POTENTIAL CROSS-SENSITIVITY.</span> Monitor closely or consider alternative diuretic.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <p className="mb-2" style={{ fontWeight: 600 }}>✓ No Allergy Conflict</p>
                  <p className="text-sm text-gray-700">Patient allergic to penicillin. New prescription: Metformin. No allergy conflict detected. Safe to dispense.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Clinical Decision Support Impact</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Real-world evidence of decision support systems preventing medication errors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg mb-2">Hospital Pharmacy, Tanzania</h3>
              <p className="text-sm text-gray-700 mb-4">
                500-bed hospital implements clinical decision support integrated with pharmacy management system. In first 6 months, system generates 1,847 clinically significant alerts: 234 contraindicated interactions, 612 major interactions, 891 allergy alerts, and 110 severe renal dosing errors—all caught before medication reached patient. Estimated prevention of 50+ serious adverse drug events.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Prevented: 50+ serious ADEs</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-lg mb-2">HIV Clinic, South Africa</h3>
              <p className="text-sm text-gray-700 mb-4">
                High-volume ART clinic serving 5,000 patients implements drug interaction checker. System identifies 38% of patients on ART + anti-TB therapy have clinically significant rifampicin interactions requiring regimen adjustment. Pharmacists work with physicians to optimize therapy. Virologic suppression rates improve from 84% to 92% as treatment failures from interactions eliminated.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Viral suppression: 84% → 92%</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">👶</div>
              <h3 className="text-lg mb-2">Pediatric Hospital, Kenya</h3>
              <p className="text-sm text-gray-700 mb-4">
                Children's hospital deploys pediatric dosing calculator integrated into electronic prescribing. System flags 156 dosing errors in first 3 months—12 would have been 10-fold overdoses, 67 were 2-5x overdoses, 77 were sub-therapeutic underdoses. Calculator prevents all errors before medication administration. No serious medication errors recorded in 18-month post-implementation period.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Prevented: 156 dosing errors in 3 months</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Implement Clinical Decision Support</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Enhance medication safety with intelligent clinical decision support tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/request-equipment-demo')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                Schedule CDS Demo
              </button>
              <button
                onClick={() => navigate('/support/digital-health-integration')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Integration Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}