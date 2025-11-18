import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function PharmaceuticalCarePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pharmaceutical Care Services",
    "description": "Drug utilization reviews, medication reconciliation, therapeutic monitoring for patient-centered pharmaceutical care across Africa",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  const serviceAreas = [
    {
      name: 'Drug Utilization Reviews (DUR)',
      description: 'Systematic evaluation of medication use patterns identifying inappropriate prescribing, over-utilization, under-utilization, and therapeutic duplication. Prospective DUR at point of dispensing prevents problems; retrospective DUR analyzes patterns for quality improvement. Essential for medication safety and cost optimization',
      applications: ['Prospective DUR', 'Retrospective DUR', 'Prescribing pattern analysis', 'Quality metrics']
    },
    {
      name: 'Medication Reconciliation',
      description: 'Systematic process comparing patient\'s medication orders across care transitions (hospital admission, transfer, discharge) to current medication regimen identifying and resolving discrepancies. Prevents medication errors, omissions, duplications, and adverse events at vulnerable transition points critical for patient safety',
      applications: ['Admission reconciliation', 'Transfer reconciliation', 'Discharge reconciliation', 'Discrepancy resolution']
    },
    {
      name: 'Adverse Drug Reaction (ADR) Monitoring',
      description: 'Active surveillance, identification, documentation, and reporting of adverse drug reactions. Pharmacist-led ADR monitoring programs detect events early, implement interventions, contribute to pharmacovigilance databases strengthening medication safety systems and regulatory oversight particularly for new medications in African markets',
      applications: ['ADR detection', 'Causality assessment', 'ADR reporting', 'Pharmacovigilance']
    },
    {
      name: 'Therapeutic Drug Monitoring (TDM)',
      description: 'Measurement of drug concentrations in blood optimizing therapy for narrow therapeutic index medications (aminoglycosides, vancomycin, anticonvulsants, immunosuppressants). Pharmacist interpretation of levels with dosing recommendations prevents toxicity and ensures efficacy. Critical for vulnerable populations and severe infections',
      applications: ['Level interpretation', 'Dose adjustments', 'Toxicity prevention', 'Efficacy optimization']
    }
  ];

  const keyFeatures = [
    {
      title: 'Systematic',
      description: 'Structured processes ensuring comprehensive, consistent identification of medication issues',
      icon: '📋'
    },
    {
      title: 'Preventive',
      description: 'Proactive identification and resolution of problems before patient harm occurs',
      icon: '🛡️'
    },
    {
      title: 'Collaborative',
      description: 'Partnership with physicians, nurses, and patients for coordinated medication management',
      icon: '🤝'
    },
    {
      title: 'Outcome-Focused',
      description: 'Services measured by clinical outcomes, safety metrics, and quality improvements',
      icon: '📊'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Pharmaceutical Care Services | Patient-Centered Pharmacy | Pacem Health"
        description="Pharmaceutical care services including drug utilization reviews, medication reconciliation, therapeutic monitoring. Comprehensive patient-centered pharmaceutical care for African healthcare."
        keywords={[
          'pharmaceutical care Africa',
          'drug utilization review',
          'medication reconciliation',
          'therapeutic monitoring',
          'patient-centered pharmacy',
          'pharmaceutical services',
          'medication management',
          'pharmacy care'
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
            <Link to="/products/categories/clinical-services-training" className="hover:underline">Clinical Services & Training</Link>
            <span>/</span>
            <span>Pharmaceutical Care</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Clinical Services & Training</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Pharmaceutical Care
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Advanced pharmaceutical care services including drug utilization reviews, medication reconciliation, adverse drug reaction monitoring, and therapeutic drug monitoring. These systematic quality assurance and clinical monitoring services represent the highest expression of pharmacist professional responsibility—taking ownership of medication-related outcomes through proactive identification and resolution of drug therapy problems. Essential for modern healthcare systems addressing medication safety challenges, optimizing therapeutic effectiveness, preventing adverse events, and ensuring appropriate medication use particularly critical in African contexts where medication errors, polypharmacy, counterfeit medicines, and limited clinical monitoring create significant patient safety risks requiring pharmacist expertise and vigilance.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Service Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl">
              Advanced clinical services ensuring medication safety and therapeutic optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {serviceAreas.map((service, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-lg transition-all">
                <h3 className="text-xl mb-3">{service.name}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Key Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.applications.map((app, idx) => (
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Pharmaceutical Care Features</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive approach to medication-related outcomes
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

      {/* Drug Utilization Review Deep Dive */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Drug Utilization Review (DUR) Programs</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Systematic evaluation of medication use patterns for quality and safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Prospective DUR</h3>
              <p className="text-gray-700 mb-4">
                Real-time screening at point of prescribing or dispensing identifying potential problems before medication reaches patient. Most effective for preventing medication errors and adverse events.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Drug-Drug Interactions</p>
                  <p className="text-sm text-gray-700">Automated screening flags clinically significant interactions requiring intervention (dose adjustment, timing, alternative therapy, or monitoring)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Therapeutic Duplication</p>
                  <p className="text-sm text-gray-700">Identifies multiple medications from same therapeutic class where duplication increases risk without benefit</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Allergy Alerts</p>
                  <p className="text-sm text-gray-700">Cross-references new prescriptions against documented allergies preventing allergic reactions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Inappropriate Dosing</p>
                  <p className="text-sm text-gray-700">Flags doses outside recommended ranges for age, weight, renal function, or indication</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Retrospective DUR</h3>
              <p className="text-gray-700 mb-4">
                Periodic review of medication use patterns identifying trends, problematic prescribing, and quality improvement opportunities. Drives system-level interventions and provider education.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Prescribing Patterns</p>
                  <p className="text-sm text-gray-700">Analyze prescriber habits identifying over-prescribing, under-prescribing, or inappropriate medication selection trends</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Antibiotic Stewardship</p>
                  <p className="text-sm text-gray-700">Review antibiotic use identifying inappropriate prescribing, excessive durations, or resistance-promoting patterns</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>High-Risk Medications</p>
                  <p className="text-sm text-gray-700">Monitor use of narrow therapeutic index drugs, controlled substances, or medications requiring special monitoring</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Cost Optimization</p>
                  <p className="text-sm text-gray-700">Identify opportunities for therapeutic substitution to equally effective but lower-cost alternatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medication Reconciliation */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Medication Reconciliation at Care Transitions</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Preventing medication errors during vulnerable transition points
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="bg-[#4B2991] text-white p-3 rounded-lg mb-3 text-center" style={{ fontWeight: 600 }}>
                  Admission
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Compare home medications to admission orders identifying unintended omissions, duplications, or dose changes.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Obtain accurate medication history</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Review admission orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Identify discrepancies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Clarify with physician</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Document reconciliation</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-[#4B2991] text-white p-3 rounded-lg mb-3 text-center" style={{ fontWeight: 600 }}>
                  Transfer
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Verify medication continuity when patients transfer between units, services, or levels of care within hospital.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Review current medications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Compare transfer orders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Ensure continuity of therapy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Address changes needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Communicate to receiving unit</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-[#4B2991] text-white p-3 rounded-lg mb-3 text-center" style={{ fontWeight: 600 }}>
                  Discharge
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Reconcile discharge medications with pre-admission and hospital medications ensuring appropriate transition home.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Review discharge prescriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Compare to home medications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Identify stopped/changed meds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Patient/family counseling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <span>Communicate to outpatient pharmacy</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <h4 className="mb-3" style={{ fontWeight: 600 }}>📊 Medication Reconciliation Impact</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-[#4B2991]" style={{ fontWeight: 600 }}>67% Error Reduction</p>
                  <p className="text-gray-700">Medication reconciliation reduces medication errors at care transitions by 67%</p>
                </div>
                <div>
                  <p className="text-[#4B2991]" style={{ fontWeight: 600 }}>30% Fewer Readmissions</p>
                  <p className="text-gray-700">Proper discharge reconciliation decreases 30-day readmissions by 30%</p>
                </div>
                <div>
                  <p className="text-[#4B2991]" style={{ fontWeight: 600 }}>2.2 Discrepancies/Patient</p>
                  <p className="text-gray-700">Average 2.2 medication discrepancies found per patient at admission</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADR Monitoring */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">Adverse Drug Reaction Monitoring</h2>
              <p className="text-gray-700 mb-6">
                ADRs cause 5-10% of hospital admissions and occur in 10-20% of hospitalized patients. Pharmacist-led monitoring detects events early, implements interventions, and contributes to pharmacovigilance strengthening medication safety systems.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>🔍 Active Surveillance</h4>
                  <p className="text-sm text-gray-700">Proactive monitoring through patient interviews, chart review, lab monitoring, and clinical assessment identifying ADRs often missed by spontaneous reporting</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>⚖️ Causality Assessment</h4>
                  <p className="text-sm text-gray-700">Systematic evaluation (Naranjo algorithm, WHO-UMC scale) determining likelihood medication caused observed reaction—definite, probable, possible, or unlikely</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>📝 Standardized Reporting</h4>
                  <p className="text-sm text-gray-700">Documentation using WHO ADR reporting forms submitted to national pharmacovigilance centers contributing to medication safety databases and regulatory decisions</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>💊 Intervention & Follow-Up</h4>
                  <p className="text-sm text-gray-700">Immediate management (medication discontinuation, dose adjustment, symptomatic treatment) plus patient education preventing future recurrence</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl mb-4">Common ADRs in Africa</h3>
              <p className="text-white/90 text-sm mb-4">High-priority adverse reactions pharmacists monitor:</p>
              <div className="space-y-3 text-sm text-white/90">
                <div>
                  <p style={{ fontWeight: 600 }}>Antibiotic-Associated Diarrhea</p>
                  <p className="text-xs">Broad-spectrum antibiotics disrupting gut flora; C. difficile risk with fluoroquinolones, cephalosporins</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>ARV-Related Toxicities</p>
                  <p className="text-xs">Hepatotoxicity, renal dysfunction, hypersensitivity reactions, lipodystrophy requiring regimen modifications</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>Anti-TB Drug Hepatotoxicity</p>
                  <p className="text-xs">Isoniazid, rifampicin, pyrazinamide causing liver injury; LFT monitoring essential</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>NSAID GI Bleeding</p>
                  <p className="text-xs">High NSAID use for pain/fever causing ulcers, bleeding especially with co-prescribing (aspirin, steroids)</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>Antimalarial Reactions</p>
                  <p className="text-xs">G6PD deficiency with primaquine; neuropsychiatric effects with mefloquine</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>Aminoglycoside Toxicity</p>
                  <p className="text-xs">Nephrotoxicity and ototoxicity from gentamicin, amikacin requiring TDM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TDM Services */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Therapeutic Drug Monitoring (TDM)</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Optimizing therapy through pharmacokinetic monitoring
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-xl mb-2">Aminoglycosides</h3>
              <p className="text-gray-700 mb-4">
                Gentamicin, amikacin, tobramycin have narrow therapeutic index. High peaks ensure efficacy against gram-negative bacteria; low troughs prevent nephrotoxicity and ototoxicity. Essential in severe infections, neonates, renal impairment.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p className="mb-1" style={{ fontWeight: 600 }}>TDM Parameters:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Peak: 5-10 mg/L (gentamicin)</li>
                  <li>• Trough: {'<'}2 mg/L</li>
                  <li>• Timing: Peak 30min post-infusion, trough pre-dose</li>
                  <li>• Frequency: Initial dose, then 2-3x weekly</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-xl mb-2">Anticonvulsants</h3>
              <p className="text-gray-700 mb-4">
                Phenytoin, carbamazepine, valproic acid require monitoring due to narrow therapeutic windows, saturable kinetics (phenytoin), and variable metabolism. Critical for seizure control while avoiding toxicity (ataxia, sedation, hepatotoxicity).
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p className="mb-1" style={{ fontWeight: 600 }}>TDM Parameters:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Phenytoin: 10-20 mg/L</li>
                  <li>• Carbamazepine: 4-12 mg/L</li>
                  <li>• Valproic acid: 50-100 mg/L</li>
                  <li>• Monitor: Steady-state, dose changes, breakthrough seizures</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🫀</div>
              <h3 className="text-xl mb-2">Immunosuppressants</h3>
              <p className="text-gray-700 mb-4">
                Tacrolimus, cyclosporine in transplant patients require tight control. Subtherapeutic levels risk organ rejection; supratherapeutic levels cause nephrotoxicity, neurotoxicity. Pharmacist-managed monitoring programs improve transplant outcomes and reduce toxicity.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p className="mb-1" style={{ fontWeight: 600 }}>TDM Parameters:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Tacrolimus: 5-15 ng/mL (varies by time post-transplant)</li>
                  <li>• Cyclosporine: 100-300 ng/mL</li>
                  <li>• Trough levels (pre-dose)</li>
                  <li>• Frequent early post-transplant, then weekly/monthly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Pharmaceutical Care Impact</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced pharmacy services improving safety and outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-lg mb-2">DUR Program, South Africa</h3>
              <p className="text-sm text-gray-700 mb-4">
                Hospital implements pharmacist-led prospective DUR program. 18,500 prescriptions reviewed in first year. 2,340 interventions (12.6% of prescriptions): 892 drug interactions, 445 dose adjustments, 387 therapeutic duplications, 616 other issues. 89% of interventions accepted by prescribers. Estimated prevention of 156 serious ADEs, cost avoidance $280,000 annually.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Interventions: 12.6% of prescriptions</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-lg mb-2">Med Reconciliation, Ethiopia</h3>
              <p className="text-sm text-gray-700 mb-4">
                600-bed hospital launches pharmacist-led medication reconciliation at admission and discharge. 3,200 patients reconciled in first 6 months. Average 2.8 discrepancies per patient identified; 68% clinically significant requiring intervention. 30-day readmission rate for reconciled patients: 8.2% vs. 12.7% for non-reconciled (35% reduction). Program becomes mandatory for all admissions.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Readmissions: 35% reduction</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg mb-2">TDM Service, Kenya</h3>
              <p className="text-sm text-gray-700 mb-4">
                Teaching hospital establishes pharmacist-managed aminoglycoside TDM service. Pharmacists calculate individualized doses based on levels, renal function, clinical response. Therapeutic target achievement increases from 54% to 87%. Nephrotoxicity incidence decreases from 18% to 7%. Length of antibiotic therapy reduces 2.1 days average. Clinical outcomes improve with shorter hospital stays.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Target achievement: 54% → 87%</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Implement Pharmaceutical Care Services</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Establish DUR, medication reconciliation, ADR monitoring, and TDM programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                Pharmaceutical Care Training
              </button>
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Program Development Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}