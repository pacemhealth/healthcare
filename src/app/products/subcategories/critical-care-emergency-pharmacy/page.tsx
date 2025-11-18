import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';
import { CheckCircle2 } from 'lucide-react';

export default function CriticalCareEmergencyPharmacyPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Critical Care & Emergency Pharmacy Services",
    "description": "ICU pharmacy, emergency department pharmacy, surgical anesthesia pharmacy, pediatric neonatal pharmacy, obstetric emergency pharmacy services for African healthcare facilities",
    "serviceType": "Healthcare Service",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  const specialtyAreas = [
    {
      name: 'ICU/HDU Pharmacy Services',
      description: 'Intensive and high-dependency unit pharmacy providing 24/7 medication access, critical care drug protocols, continuous infusion preparation, hemodynamic medication management, and clinical pharmacist participation in ICU rounds',
      applications: ['Adult ICU', 'Pediatric ICU', 'Neonatal ICU', 'High-dependency units']
    },
    {
      name: 'Emergency Department Pharmacy',
      description: 'Rapid medication access for emergency care including resuscitation medications, emergency drug boxes, code cart management, trauma protocols, poisoning/overdose antidotes, and pharmacist support for emergency stabilization',
      applications: ['Casualty/A&E', 'Trauma bays', 'Resuscitation areas', 'Emergency observation']
    },
    {
      name: 'Surgical & Anesthesia Pharmacy',
      description: 'Perioperative pharmaceutical support including anesthetic agents, controlled substance management for operating theaters, post-operative pain management, prophylactic antibiotics, and surgical pharmacy inventory control',
      applications: ['Operating theaters', 'Post-anesthesia care', 'Day surgery', 'Surgical wards']
    },
    {
      name: 'Pediatric & Neonatal Pharmacy',
      description: 'Specialized pediatric pharmacy services including age-appropriate dosing calculations, neonatal formulations, compounding for special populations, total parenteral nutrition (TPN), and NICU medication management',
      applications: ['Neonatal ICU', 'Pediatric wards', 'Special care nursery', 'Pediatric emergency']
    },
    {
      name: 'Obstetric Emergency Pharmacy',
      description: 'Maternal emergency pharmaceutical care including eclampsia/pre-eclampsia protocols (magnesium sulfate), postpartum hemorrhage medications (oxytocin, misoprostol), emergency cesarean medications, and maternal resuscitation support',
      applications: ['Labor & delivery', 'Maternity theater', 'Postpartum care', 'High-risk obstetrics']
    }
  ];

  const keyFeatures = [
    {
      title: '24/7 Medication Access',
      description: 'Round-the-clock pharmacy coverage or automated dispensing cabinets ensure critical medications available at all times',
      icon: '🕐'
    },
    {
      title: 'Emergency Drug Protocols',
      description: 'Standardized resuscitation protocols, code carts, emergency boxes, and clinical pathways for time-critical conditions',
      icon: '🚨'
    },
    {
      title: 'IV Admixture Services',
      description: 'Sterile preparation of continuous infusions, TPN, chemotherapy, and high-risk injectable medications',
      icon: '💉'
    },
    {
      title: 'Clinical Pharmacist Presence',
      description: 'Pharmacists participate in ICU rounds, emergency consultations, and rapid response teams providing real-time expertise',
      icon: '👨‍⚕️'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Critical Care & Emergency Pharmacy Services | ICU & Trauma Pharmacy | Pacem Health"
        description="Specialized critical care pharmacy including ICU/HDU services, emergency department pharmacy, surgical anesthesia pharmacy, pediatric neonatal pharmacy, obstetric emergencies. 24/7 pharmaceutical support, clinical pharmacist rounds, sterile compounding for African hospitals."
        keywords={[
          'critical care pharmacy Africa',
          'ICU pharmacy services',
          'emergency department pharmacy',
          'neonatal pharmacy Africa',
          'obstetric emergency pharmacy',
          'hospital pharmacy services',
          'clinical pharmacist ICU',
          'emergency medications Africa'
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
            <Link to="/products/categories/hospital-clinical-pharmacy-services" className="hover:underline">Hospital & Clinical Pharmacy Services</Link>
            <span>/</span>
            <span>Critical Care & Emergency Pharmacy</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Hospital & Clinical Pharmacy Services</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Critical Care & Emergency Pharmacy
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Specialized pharmaceutical support for the most vulnerable and time-critical patient populations including ICU/HDU services, emergency department pharmacy, surgical and anesthesia medication management, pediatric and neonatal intensive care, and obstetric emergencies. These high-acuity pharmacy services require 24/7 medication access, clinical pharmacist expertise in complex drug therapy, sterile compounding capabilities, and rapid response systems—addressing critical care pharmacy gaps in African hospitals where medication errors and delays directly impact survival in sepsis, trauma, maternal emergencies, and neonatal conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Specialty Areas Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Specialty Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl">
              Critical care and emergency pharmacy services for high-acuity patient populations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {specialtyAreas.map((specialty, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-lg transition-all">
                <h3 className="text-xl mb-3">{specialty.name}</h3>
                <p className="text-gray-700 mb-4">{specialty.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Key Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {specialty.applications.map((app, idx) => (
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Critical Care Pharmacy Capabilities</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Essential features of high-acuity pharmaceutical care
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

      {/* ICU Pharmacy Deep Dive */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">ICU Pharmacy Services</h2>
              <p className="text-gray-700 mb-6">
                Critical care patients require complex medication regimens with narrow therapeutic windows, multiple continuous infusions, and frequent dose adjustments. Clinical pharmacist expertise prevents errors and optimizes outcomes.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>💊 Critical Care Medications</h4>
                  <p className="text-sm text-gray-700">Vasopressors (norepinephrine, dopamine), sedation (propofol, midazolam), analgesia (fentanyl, morphine), paralytics, inotropes, and antimicrobials</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>🔬 Pharmacist ICU Rounds</h4>
                  <p className="text-sm text-gray-700">Daily participation in multidisciplinary rounds reviewing all medications, adjusting doses for renal/hepatic function, identifying interactions, and recommending evidence-based therapy</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>💉 Continuous Infusions</h4>
                  <p className="text-sm text-gray-700">Preparation and dose calculation for weight-based infusions, concentration standardization, compatibility assessment, and infusion rate management</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>🧪 TPN & Specialized Nutrition</h4>
                  <p className="text-sm text-gray-700">Total parenteral nutrition compounding, electrolyte management, and nutritional assessment for critically ill patients</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl mb-4">ICU Pharmacy Impact</h3>
              <div className="space-y-4 text-white/90">
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>📉 66% Reduction in Medication Errors</p>
                  <p className="text-sm">Meta-analysis shows clinical pharmacist presence in ICU reduces preventable adverse drug events by two-thirds through prospective order review and dosing optimization</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>💰 Cost Savings</p>
                  <p className="text-sm">ICU pharmacists reduce unnecessary medication use, optimize antibiotic therapy, prevent complications—saving $3-5 for every $1 invested in ICU pharmacy services</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>⏱️ Faster Response Times</p>
                  <p className="text-sm">Dedicated ICU pharmacist enables immediate medication problem-solving, rapid protocol implementation, and real-time dosing adjustments critical for hemodynamic instability</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>🎯 Improved Outcomes</p>
                  <p className="text-sm">Clinical pharmacy interventions associated with reduced length of stay, lower mortality, decreased ICU readmissions, and better infection control outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Pharmacy Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Emergency Department Pharmacy</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Time-critical pharmaceutical support for emergency and trauma care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🚨</div>
              <h3 className="text-xl mb-2">Code Cart Management</h3>
              <p className="text-gray-700 mb-3">
                Standardized emergency medication kits (code carts) positioned throughout hospital with standardized drug concentrations, regular expiry checks, tamper-evident seals, and post-code restocking protocols.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Epinephrine, atropine, amiodarone</li>
                <li>• Sodium bicarbonate, calcium</li>
                <li>• Emergency airway medications</li>
                <li>• Monthly cart checks</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-xl mb-2">Emergency Drug Boxes</h3>
              <p className="text-gray-700 mb-3">
                Pre-packed medication sets for common emergency protocols enabling rapid treatment initiation without waiting for individual medication dispensing—critical in resource-limited settings with nighttime pharmacy closures.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Severe malaria treatment pack</li>
                <li>• Snakebite antivenom kit</li>
                <li>• Sepsis bundle medications</li>
                <li>• Anaphylaxis emergency kit</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">☠️</div>
              <h3 className="text-xl mb-2">Poisoning & Antidotes</h3>
              <p className="text-gray-700 mb-3">
                Stock of antidotes and treatments for common poisonings and overdoses seen in African emergency departments including organophosphate pesticides, snake envenomation, paracetamol, and traditional medicine toxicity.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Atropine (organophosphate)</li>
                <li>• N-acetylcysteine (paracetamol)</li>
                <li>• Polyvalent antivenom</li>
                <li>• Activated charcoal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Maternal & Neonatal Pharmacy */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Maternal & Neonatal Emergency Pharmacy</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized pharmacy support for obstetric and neonatal emergencies
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl mb-4">Obstetric Emergency Protocols</h3>
                <p className="text-gray-700 mb-4">
                  Maternal mortality remains high in sub-Saharan Africa (533 per 100,000 live births). Many deaths from obstetric hemorrhage, eclampsia, and sepsis are preventable with timely access to essential medications.
                </p>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="mb-1" style={{ fontWeight: 600 }}>🩸 Postpartum Hemorrhage</p>
                    <p className="text-sm text-gray-700">Oxytocin, misoprostol, tranexamic acid—available immediately in labor ward, standardized protocols</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="mb-1" style={{ fontWeight: 600 }}>⚡ Eclampsia/Pre-eclampsia</p>
                    <p className="text-sm text-gray-700">Magnesium sulfate loading and maintenance dosing, antihypertensives (labetalol, hydralazine, nifedipine)</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="mb-1" style={{ fontWeight: 600 }}>🦠 Maternal Sepsis</p>
                    <p className="text-sm text-gray-700">Broad-spectrum antibiotics (ceftriaxone + metronidazole), fluid resuscitation, sepsis bundle implementation</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-4">Neonatal Intensive Care Pharmacy</h3>
                <p className="text-gray-700 mb-4">
                  Neonatal medication dosing is complex, requiring weight-based calculations, specialized formulations, and careful dilutions. Errors are common without pharmacist oversight.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block" style={{ fontWeight: 600 }}>Neonatal Dosing Calculations</span>
                      <span className="text-sm text-gray-600">Weight-based doses in micrograms, complex dilutions, and gestational age adjustments require pharmacist verification</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block" style={{ fontWeight: 600 }}>Neonatal Sepsis Protocols</span>
                      <span className="text-sm text-gray-600">Ampicillin + gentamicin for early-onset sepsis, cefotaxime for late-onset, therapeutic drug monitoring</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block" style={{ fontWeight: 600 }}>Respiratory Support</span>
                      <span className="text-sm text-gray-600">Surfactant administration, caffeine citrate for apnea, and respiratory distress management</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block" style={{ fontWeight: 600 }}>Neonatal TPN</span>
                      <span className="text-sm text-gray-600">Total parenteral nutrition for premature infants with specialized micronutrient requirements</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Coverage Models */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">After-Hours Pharmacy Coverage</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Ensuring critical medication access when central pharmacy is closed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">1</div>
                <h3 className="text-lg">Automated Dispensing Cabinets</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Install ADCs in ICU, emergency department, labor ward, and operating theaters. Provide 24/7 access to emergency medications, controlled substances, and critical care drugs without pharmacist presence.
              </p>
              <p className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Best for: Larger hospitals with budget for automation</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">2</div>
                <h3 className="text-lg">After-Hours Pharmacy Technician</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Pharmacy technician on-call or on-site during nights/weekends with pharmacist phone support. Technician dispenses pre-approved medications, pharmacist consulted for complex cases via phone.
              </p>
              <p className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Best for: Medium-sized hospitals with limited automation budget</p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">3</div>
                <h3 className="text-lg">Sealed Emergency Boxes</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Pre-packed, sealed emergency medication boxes in critical care areas. Nurses access boxes for true emergencies, document use, and report to pharmacy next day for restocking and review.
              </p>
              <p className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Best for: District hospitals with minimal resources</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Implementation Success Stories</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Critical care pharmacy services saving lives across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg mb-2">Teaching Hospital ICU Pharmacy</h3>
              <p className="text-sm text-gray-700 mb-4">
                Tertiary hospital deploys dedicated clinical pharmacist to 18-bed ICU working alongside critical care team. Pharmacist reviews all orders, adjusts for renal/hepatic function, and manages antimicrobial stewardship. Medication errors drop 72%, ICU length of stay decreases 1.8 days, and inappropriate antibiotic use reduces by 45%.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Impact: 72% fewer medication errors</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🤰</div>
              <h3 className="text-lg mb-2">Maternal Emergency Pharmacy Kits</h3>
              <p className="text-sm text-gray-700 mb-4">
                District hospital implements sealed emergency kits for labor ward containing PPH medications (oxytocin, misoprostol, tranexamic acid) and eclampsia treatment (magnesium sulfate). Time to treatment for PPH drops from 45 minutes to 8 minutes. Maternal mortality from obstetric hemorrhage eliminated over 24-month period.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Impact: 45min → 8min treatment time</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">👶</div>
              <h3 className="text-lg mb-2">Neonatal Pharmacy Service</h3>
              <p className="text-sm text-gray-700 mb-4">
                Regional hospital establishes dedicated neonatal pharmacy service with pharmacist calculating all NICU doses, preparing dilutions, and reviewing nutrition support. Neonatal medication errors decrease 85%, neonatal sepsis treatment outcomes improve, and nursing staff report increased confidence in medication administration.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Impact: 85% reduction in dosing errors</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Establish Critical Care Pharmacy Services</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Partner with our critical care pharmacy specialists to implement life-saving pharmaceutical services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/request-equipment-quote')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                Request Service Assessment
              </button>
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Critical Care Pharmacy Training
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}