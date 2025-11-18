import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function InpatientPharmacyOperationsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Inpatient Pharmacy Operations Services",
    "description": "Central hospital pharmacy, ward-based services, medication distribution systems, formulary management for inpatient pharmacy operations across Africa",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  const serviceAreas = [
    {
      name: 'Central Hospital Pharmacy Services',
      description: 'Main dispensing pharmacy providing medications for all admitted patients, outpatient services, and emergency department. Includes prescription processing, medication preparation, quality control, and patient counseling services',
      applications: ['Inpatient dispensing', 'Outpatient pharmacy', 'Emergency medications', 'Discharge prescriptions']
    },
    {
      name: 'Ward-Based Pharmacy Services',
      description: 'Decentralized pharmacy services with clinical pharmacists integrated into ward teams, conducting medication reviews, participating in ward rounds, monitoring drug therapy, and providing bedside patient education',
      applications: ['Medical wards', 'Surgical wards', 'Pediatric wards', 'Maternity wards']
    },
    {
      name: 'Medication Distribution Systems',
      description: 'Structured systems for delivering medications from central pharmacy to patient care areas including unit dose dispensing, automated dispensing cabinets (ADCs), medication carts, and pneumatic tube systems',
      applications: ['Unit dose systems', 'ADC implementation', 'Medication carts', 'Distribution automation']
    },
    {
      name: 'Hospital Formulary Management',
      description: 'Evidence-based selection and management of medications available in the hospital, including Pharmacy & Therapeutics Committee support, formulary reviews, medication use evaluations, and cost-effectiveness analysis',
      applications: ['Formulary development', 'P&T committees', 'Drug utilization review', 'Therapeutic substitution']
    },
    {
      name: 'Inpatient Medication Reconciliation',
      description: 'Systematic process of obtaining accurate medication histories at admission, verifying orders, identifying discrepancies, and ensuring continuity of appropriate therapy throughout hospitalization and at discharge',
      applications: ['Admission reconciliation', 'Transfer reconciliation', 'Discharge reconciliation', 'Transition of care']
    }
  ];

  const keyFeatures = [
    {
      title: 'Clinical Pharmacists on Wards',
      description: 'Pharmacists embedded in care teams conducting medication reviews, identifying drug-related problems, and optimizing therapy',
      icon: '👨‍⚕️'
    },
    {
      title: 'Automated Dispensing',
      description: 'ADCs and automation reduce medication errors, improve inventory control, and provide 24/7 ward access to medications',
      icon: '🤖'
    },
    {
      title: 'Electronic Prescribing',
      description: 'CPOE systems eliminate handwriting errors, provide clinical decision support, and enable real-time pharmacy review',
      icon: '💻'
    },
    {
      title: 'Medication Safety',
      description: 'Barcode scanning, high-alert medication protocols, look-alike/sound-alike safeguards, and error reporting systems',
      icon: '🛡️'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Inpatient Pharmacy Operations Services | Hospital Pharmacy | Pacem Health"
        description="Inpatient pharmacy operations services including central hospital pharmacy, ward-based services, medication distribution systems, formulary management. Supporting quality hospital pharmacy operations across Africa."
        keywords={[
          'inpatient pharmacy operations Africa',
          'hospital pharmacy services',
          'ward pharmacy Africa',
          'medication distribution systems',
          'formulary management',
          'hospital pharmacy operations',
          'clinical pharmacy services Africa',
          'inpatient medication management'
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
            <span>Inpatient Pharmacy Operations</span>
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
              Inpatient Pharmacy Operations
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Comprehensive hospital pharmacy services ensuring safe, effective medication management for admitted patients across all care areas. From central dispensing operations and ward-based clinical pharmacy to medication distribution systems, formulary management, and medication reconciliation processes, these services form the foundation of quality inpatient pharmaceutical care in African hospitals—addressing medication safety, therapeutic optimization, and efficient resource utilization in settings where pharmacist shortages and infrastructure gaps create significant patient safety risks.
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
              Comprehensive inpatient pharmacy services for hospital medication management
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Modern Inpatient Pharmacy Features</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Technologies and services that transform hospital medication management
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

      {/* Challenges & Solutions */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">Inpatient Pharmacy Challenges in Africa</h2>
              <p className="text-gray-700 mb-6">
                Most African hospitals operate with centralized pharmacy models that create medication access delays, safety risks, and missed opportunities for clinical pharmacy intervention.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#DC3545] text-xl flex-shrink-0 mt-0.5">✗</span>
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Long Medication Delays</span>
                    <span className="text-sm text-gray-600">Patients or nurses walk to distant central pharmacy, creating 1-4 hour delays for stat medications</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DC3545] text-xl flex-shrink-0 mt-0.5">✗</span>
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>No Clinical Pharmacy Presence</span>
                    <span className="text-sm text-gray-600">Pharmacists confined to dispensing; no medication reviews or ward round participation</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DC3545] text-xl flex-shrink-0 mt-0.5">✗</span>
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Medication Errors</span>
                    <span className="text-sm text-gray-600">Handwritten prescriptions, no pharmacy review before administration, dosing errors</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#DC3545] text-xl flex-shrink-0 mt-0.5">✗</span>
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Poor Medication Continuity</span>
                    <span className="text-sm text-gray-600">No admission/discharge medication reconciliation leading to duplications and omissions</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl mb-4">Decentralized Pharmacy Model</h3>
              <div className="space-y-4 text-white/90">
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>🏥 Ward-Based Satellite Pharmacies</p>
                  <p className="text-sm">Decentralized dispensing points on major wards reduce medication access time from hours to minutes, improving patient care and nurse workflow</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>👨‍⚕️ Clinical Pharmacist Ward Rounds</p>
                  <p className="text-sm">Pharmacists join medical teams on rounds, review all medication orders, identify drug interactions, optimize dosing, and reduce adverse events by 50%</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>🤖 Automated Dispensing Cabinets</p>
                  <p className="text-sm">ADCs on wards provide secure 24/7 medication access with automated inventory tracking, reducing nursing time and preventing diversion</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>📋 Medication Reconciliation</p>
                  <p className="text-sm">Pharmacist-led reconciliation at admission and discharge prevents 70% of medication errors at care transitions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Models */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Phased Implementation Approach</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Realistic pathways for strengthening inpatient pharmacy in resource-limited settings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center" style={{ fontWeight: 600 }}>1</div>
                <h3 className="text-lg">Foundation Phase</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Establish medication safety policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Create hospital formulary and P&T committee</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Standardize medication storage on wards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Implement medication error reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Train staff on high-alert medications</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center" style={{ fontWeight: 600 }}>2</div>
                <h3 className="text-lg">Clinical Services Phase</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Deploy clinical pharmacists to priority wards (ICU, pediatrics)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Launch medication reconciliation at admission</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Establish ward-based medication review protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Implement antimicrobial stewardship program</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Create discharge medication counseling service</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center" style={{ fontWeight: 600 }}>3</div>
                <h3 className="text-lg">Advanced Systems Phase</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Install automated dispensing cabinets on wards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Implement electronic prescribing (CPOE)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Deploy barcode medication administration (BCMA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Establish unit dose medication system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Full clinical pharmacy coverage on all wards</span>
                </li>
              </ul>
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
              African hospitals transforming inpatient pharmacy services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg mb-2">Tertiary Hospital, East Africa</h3>
              <p className="text-sm text-gray-700 mb-4">
                800-bed teaching hospital deploys clinical pharmacists to medical, surgical, and pediatric wards. Pharmacists join daily rounds, review all new orders, and conduct discharge counseling. Medication errors drop 65%, average length of stay reduces by 1.2 days, and drug costs decrease 18% through therapeutic optimization.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Impact: 65% fewer medication errors</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg mb-2">District Hospital, West Africa</h3>
              <p className="text-sm text-gray-700 mb-4">
                250-bed district hospital implements medication reconciliation at admission and discharge using pharmacist technicians supervised by one pharmacist. System catches an average of 3.2 medication discrepancies per patient, preventing adverse events and readmissions. Simple paper-based process requires minimal resources.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Impact: 3.2 discrepancies caught per patient</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg mb-2">Regional Hospital, Southern Africa</h3>
              <p className="text-sm text-gray-700 mb-4">
                450-bed regional hospital installs 8 automated dispensing cabinets on high-acuity wards (ICU, emergency, maternity, pediatrics). Medication access time drops from 90 minutes to 5 minutes. Narcotic discrepancies eliminated. Nurse satisfaction improves significantly as medication retrieval time decreases 85%.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Impact: 90min → 5min medication access</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Strengthen Inpatient Pharmacy Services</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Partner with our clinical pharmacy specialists to design and implement comprehensive inpatient pharmacy services
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
                Clinical Pharmacy Training
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}