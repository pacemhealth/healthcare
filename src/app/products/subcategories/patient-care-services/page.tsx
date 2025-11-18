import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function PatientCareServicesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Patient Care Services",
    "description": "Medication therapy management, patient counseling, adherence support, chronic disease management for patient-centered pharmaceutical care across Africa",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  const serviceAreas = [
    {
      name: 'Medication Therapy Management (MTM)',
      description: 'Comprehensive medication reviews evaluating all medications for appropriateness, effectiveness, safety, and adherence. Identification and resolution of drug therapy problems including unnecessary therapy, suboptimal drug selection, incorrect dosing, adverse drug reactions, and non-adherence with personalized action plans',
      applications: ['Comprehensive medication reviews', 'Drug therapy problem identification', 'Therapeutic optimization', 'Follow-up care plans']
    },
    {
      name: 'Patient Counseling Training',
      description: 'Evidence-based counseling techniques ensuring patients understand medication purposes, proper use, expected benefits, potential side effects, and adherence strategies. Training in motivational interviewing, teach-back methods, cultural competency, and shared decision-making creating patient partnerships for better outcomes',
      applications: ['Motivational interviewing', 'Teach-back methods', 'Adherence counseling', 'Cultural competency']
    },
    {
      name: 'Health Screening Services',
      description: 'Point-of-care health screenings expanding pharmacist role in preventive care and early disease detection. Blood pressure, blood glucose, cholesterol, BMI measurements with interpretation, risk assessment, lifestyle counseling, and physician referral when indicated—improving access to preventive services',
      applications: ['BP screening', 'Glucose testing', 'Cholesterol screening', 'Risk assessment']
    },
    {
      name: 'Immunization Programs',
      description: 'Pharmacist-administered immunization services where scope of practice permits including seasonal flu, pneumonia, HPV, hepatitis B, and travel vaccines. Training in vaccine storage, administration techniques, adverse event management, and documentation increasing vaccination rates through improved access and convenience',
      applications: ['Vaccine administration', 'Immunization counseling', 'Travel health', 'Vaccination campaigns']
    }
  ];

  const keyFeatures = [
    {
      title: 'Patient-Centered',
      description: 'Services designed around patient needs, preferences, and health literacy levels',
      icon: '👥'
    },
    {
      title: 'Evidence-Based',
      description: 'Clinical interventions grounded in current guidelines and best available evidence',
      icon: '📚'
    },
    {
      title: 'Accessible',
      description: 'Pharmacy-based services reach underserved populations lacking physician access',
      icon: '🌍'
    },
    {
      title: 'Documented',
      description: 'Structured documentation of services, interventions, and outcomes for quality and reimbursement',
      icon: '📋'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Patient Care Services | Medication Therapy Management | Pacem Health"
        description="Patient care services including medication therapy management, patient counseling, adherence support, chronic disease management. Comprehensive patient-centered care for African healthcare."
        keywords={[
          'patient care services Africa',
          'medication therapy management',
          'patient counseling',
          'medication adherence',
          'chronic disease management',
          'pharmaceutical care',
          'patient-centered care',
          'pharmacy services'
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
            <span>Patient Care Services</span>
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
              Patient Care Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Comprehensive patient-centered pharmacy services including Medication Therapy Management, evidence-based counseling, health screening programs, and immunization services. These clinical services transform pharmacists from medication dispensers to accessible healthcare providers addressing Africa's healthcare access gaps. With physician-to-population ratios often 1:10,000 or worse and geographic barriers limiting clinic access, pharmacists positioned in communities become critical access points for medication optimization, chronic disease management, preventive services, and health education—particularly vital for underserved rural and peri-urban populations requiring ongoing healthcare support.
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
              Expanding pharmacist scope to deliver comprehensive patient care
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Service Features</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              High-quality, accessible patient care from community pharmacies
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

      {/* MTM Service Model */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Medication Therapy Management (MTM) Process</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Systematic approach to optimizing medication therapy
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center" style={{ fontWeight: 600 }}>1</div>
                <h3 className="text-lg">Collect</h3>
              </div>
              <p className="text-sm text-gray-700">Gather complete medication list (Rx, OTC, herbals), medical history, allergies, lab values, and patient goals</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center" style={{ fontWeight: 600 }}>2</div>
                <h3 className="text-lg">Assess</h3>
              </div>
              <p className="text-sm text-gray-700">Evaluate each medication for indication, effectiveness, safety, and adherence. Identify drug therapy problems</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center" style={{ fontWeight: 600 }}>3</div>
                <h3 className="text-lg">Plan</h3>
              </div>
              <p className="text-sm text-gray-700">Develop personalized care plan addressing identified problems with specific recommendations and goals</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center" style={{ fontWeight: 600 }}>4</div>
                <h3 className="text-lg">Implement</h3>
              </div>
              <p className="text-sm text-gray-700">Execute plan through patient education, prescriber communication, therapy adjustments, and monitoring strategies</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center" style={{ fontWeight: 600 }}>5</div>
                <h3 className="text-lg">Follow-Up</h3>
              </div>
              <p className="text-sm text-gray-700">Monitor outcomes, assess goal achievement, modify plan as needed, document results, schedule ongoing reviews</p>
            </div>
          </div>

          <div className="mt-8 bg-[#F0EBF8] p-6 rounded-xl">
            <h4 className="mb-2" style={{ fontWeight: 600 }}>💡 MTM Target Populations</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Polypharmacy patients (5+ chronic medications)</li>
              <li>• Chronic disease patients (diabetes, hypertension, HIV, asthma)</li>
              <li>• Patients with medication non-adherence</li>
              <li>• High-risk patients (elderly, multiple comorbidities, recent hospitalization)</li>
              <li>• Patients experiencing adverse drug reactions</li>
              <li>• New medication starts or significant therapy changes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Health Screening Services */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Pharmacy-Based Health Screening</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Expanding access to preventive care and early disease detection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🩺</div>
              <h3 className="text-xl mb-2">Blood Pressure Screening</h3>
              <p className="text-gray-700 mb-4">
                Free or low-cost BP checks identifying undiagnosed hypertension. In Africa, 50-70% of hypertensive individuals are unaware. Pharmacist screening with linkage to care dramatically improves hypertension detection and control.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p className="mb-1" style={{ fontWeight: 600 }}>Service Components:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• BP measurement and interpretation</li>
                  <li>• Cardiovascular risk assessment</li>
                  <li>• Lifestyle counseling</li>
                  <li>• Physician referral if elevated</li>
                  <li>• Follow-up monitoring</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🩸</div>
              <h3 className="text-xl mb-2">Diabetes Screening</h3>
              <p className="text-gray-700 mb-4">
                Point-of-care glucose and HbA1c testing identifying pre-diabetes and undiagnosed diabetes. Early detection enables lifestyle intervention preventing progression. Ongoing monitoring supports diabetes control.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p className="mb-1" style={{ fontWeight: 600 }}>Service Components:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Fasting/random glucose testing</li>
                  <li>• HbA1c testing (3-month average)</li>
                  <li>• Diabetes risk assessment</li>
                  <li>• Diet and exercise counseling</li>
                  <li>• Self-monitoring training</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl mb-2">Comprehensive Wellness</h3>
              <p className="text-gray-700 mb-4">
                Multi-parameter screenings including cholesterol, BMI, waist circumference, and health risk appraisals. Holistic assessment identifying multiple risk factors with integrated counseling and care coordination.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p className="mb-1" style={{ fontWeight: 600 }}>Service Components:</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• Lipid panel (cholesterol, HDL, LDL)</li>
                  <li>• BMI and waist circumference</li>
                  <li>• Metabolic syndrome screening</li>
                  <li>• Comprehensive risk assessment</li>
                  <li>• Personalized wellness plan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Counseling Excellence */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">Effective Patient Counseling</h2>
              <p className="text-gray-700 mb-6">
                Quality counseling ensures patients understand and properly use medications, improving adherence and outcomes. Training pharmacists in evidence-based communication techniques transforms routine dispensing into meaningful therapeutic partnerships.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Motivational Interviewing</span>
                    <span className="text-sm text-gray-600">Non-confrontational approach exploring patient motivations, addressing ambivalence, building commitment to medication adherence</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Teach-Back Method</span>
                    <span className="text-sm text-gray-600">Ask patients to explain back in own words verifying understanding rather than assuming comprehension</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Cultural Competency</span>
                    <span className="text-sm text-gray-600">Adapt communication to cultural beliefs, languages, health literacy levels, and traditional medicine practices</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Shared Decision-Making</span>
                    <span className="text-sm text-gray-600">Partnership approach where pharmacist expertise and patient preferences jointly guide therapeutic decisions</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl mb-4">Essential Counseling Points</h3>
              <p className="text-white/90 text-sm mb-4">Every medication counseling session should address:</p>
              <div className="space-y-3 text-white/90 text-sm">
                <div>
                  <p style={{ fontWeight: 600 }}>1. Indication</p>
                  <p className="text-xs">What is the medication for? What condition is it treating?</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>2. Instructions</p>
                  <p className="text-xs">How to take it? How much? How often? With/without food?</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>3. Duration</p>
                  <p className="text-xs">How long to take it? Complete the course or ongoing therapy?</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>4. Benefits</p>
                  <p className="text-xs">What improvements to expect? When will it start working?</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>5. Side Effects</p>
                  <p className="text-xs">Common side effects? What to do if they occur? Warning signs?</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>6. Interactions</p>
                  <p className="text-xs">Foods, alcohol, other medications to avoid?</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>7. Storage</p>
                  <p className="text-xs">How to store? Special requirements (refrigeration)?</p>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>8. Follow-Up</p>
                  <p className="text-xs">When to return? What to monitor? When to contact healthcare provider?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Patient Care Service Impact</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Pharmacist-led services improving access and outcomes across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-lg mb-2">MTM Program, Kenya</h3>
              <p className="text-sm text-gray-700 mb-4">
                Chain of 15 pharmacies launches MTM service for diabetes and hypertension patients. 620 comprehensive medication reviews completed in first year. Pharmacists identify 1,847 drug therapy problems (average 3 per patient): 412 medication adherence issues, 358 suboptimal drug selections, 291 dosing problems, 786 others. Interventions result in 28% improvement in BP control, 1.2% HbA1c reduction.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>HbA1c reduction: 1.2%</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🩺</div>
              <h3 className="text-lg mb-2">Hypertension Screening, Nigeria</h3>
              <p className="text-sm text-gray-700 mb-4">
                Community pharmacy campaign offers free BP screening during "Hypertension Awareness Month." 4,200 adults screened across 50 pharmacies. 1,680 (40%) have elevated BP; of these, 924 (55%) were previously undiagnosed. Pharmacists refer to physicians, provide lifestyle counseling. 6-month follow-up: 71% of referred patients initiated treatment vs. historical 30% treatment rate from physician-only screening.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Treatment initiation: 71% vs. 30%</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">💉</div>
              <h3 className="text-lg mb-2">Immunization Services, South Africa</h3>
              <p className="text-sm text-gray-700 mb-4">
                Scope of practice expanded permitting pharmacist flu vaccination. 180 pharmacies offer immunizations in first season. 12,400 flu vaccines administered—90% to patients who stated they "wouldn't have gotten vaccinated otherwise" due to inconvenience of clinic visits. Pharmacy vaccination rates 3.5x higher than clinic-based program in same communities. Expands to pneumonia and travel vaccines.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Vaccination rate: 3.5x higher than clinics</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Launch Patient Care Services</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Implement MTM, counseling, screening, and immunization services in your pharmacy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                Patient Care Training
              </button>
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Service Implementation Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}