import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function DigitalHealthIntegrationPharmacyPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Digital Health Integration Pharmacy",
    "description": "EHR integration, telemedicine connectivity, mobile health integration for digital health pharmacy systems across Africa",
    "applicationCategory": "HealthApplication",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const solutionAreas = [
    {
      name: 'Electronic Health Records (EHR) Integration',
      description: 'Bidirectional connectivity between pharmacy systems and hospital/clinic EHRs enabling shared access to patient medication lists, lab results, allergies, and clinical notes. HL7/FHIR standards-based integration for interoperability across platforms',
      applications: ['Hospital EHR integration', 'Clinic EMR connectivity', 'Medication reconciliation', 'Shared patient records']
    },
    {
      name: 'Telemedicine Platform Connectivity',
      description: 'Integration with telehealth platforms enabling e-prescribing from virtual consultations, medication delivery coordination, remote patient monitoring medication adjustments, and telepharmacy consultations for rural/remote areas',
      applications: ['E-prescribing', 'Telepharmacy', 'Medication delivery', 'Remote consultations']
    },
    {
      name: 'Mobile Health Applications',
      description: 'Patient-facing mobile apps for medication reminders, refill requests, medication education, adherence tracking, and direct pharmacy communication. Pharmacist-facing apps for clinical references, drug information, and patient management on-the-go',
      applications: ['Patient apps', 'Pharmacist apps', 'Medication reminders', 'Adherence tracking']
    },
    {
      name: 'Patient Portal Systems',
      description: 'Web-based patient portals providing secure access to medication history, prescription refill requests, insurance information, medication education materials, and secure messaging with pharmacy staff for counseling and questions',
      applications: ['Patient portals', 'Online refills', 'Medication history', 'Secure messaging']
    }
  ];

  const keyFeatures = [
    {
      title: 'Interoperability Standards',
      description: 'HL7, FHIR, and IHE standards enable seamless data exchange between pharmacy, hospital, and clinic systems',
      icon: '🔗'
    },
    {
      title: 'Real-Time Data Sync',
      description: 'Medication updates, dispensing records, and patient information synchronized instantly across all connected systems',
      icon: '⚡'
    },
    {
      title: 'Secure Messaging',
      description: 'HIPAA-compliant encrypted communication for patient-pharmacist and pharmacist-prescriber consultations',
      icon: '🔒'
    },
    {
      title: 'Mobile Accessibility',
      description: 'Cloud-based systems accessible via smartphones, tablets, and computers enabling care from anywhere',
      icon: '📱'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Digital Health Integration Pharmacy | EHR & Telemedicine | Pacem Health"
        description="Digital health integration for pharmacy including EHR integration, telemedicine connectivity, mobile health platforms. Comprehensive digital health solutions for African pharmacies."
        keywords={[
          'digital health pharmacy Africa',
          'EHR integration pharmacy',
          'telemedicine pharmacy',
          'mobile health pharmacy',
          'pharmacy system integration',
          'digital pharmacy solutions',
          'health IT pharmacy',
          'pharmacy interoperability'
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
            <span>Digital Health Integration</span>
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
              Digital Health Integration
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Comprehensive pharmacy system integration with electronic health records, telemedicine platforms, mobile health applications, and patient portals creating connected digital health ecosystems. Interoperable pharmacy information systems that share medication data across care settings, support telehealth prescribing, enable patient engagement through mobile apps, and facilitate coordinated care. Essential for African health systems transitioning to digital platforms where fragmented systems and paper records limit care coordination, duplicate medications create safety risks, and geographic barriers prevent patients from accessing specialized pharmaceutical care.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Areas Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Integration Solution Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl">
              Connecting pharmacy systems with the broader digital health ecosystem
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Integration Capabilities</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Technical features enabling seamless digital health connectivity
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

      {/* EHR Integration Deep Dive */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">EHR-Pharmacy Integration</h2>
              <p className="text-gray-700 mb-6">
                Connecting pharmacy systems with hospital and clinic EHRs creates a unified patient medication record accessible across all care settings. This integration is critical for preventing duplicate medications, identifying drug interactions, and ensuring continuity of care.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>📋 Complete Medication History</h4>
                  <p className="text-sm text-gray-700">Pharmacist sees all medications from hospital admissions, outpatient clinics, and community pharmacies in single view—preventing duplicate prescriptions and identifying interactions</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>🔬 Lab Results Access</h4>
                  <p className="text-sm text-gray-700">Pharmacy can view relevant lab values (renal function, INR, glucose) to verify appropriate dosing and monitoring without duplicate testing</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>⚠️ Shared Allergy Alerts</h4>
                  <p className="text-sm text-gray-700">Allergy documentation in hospital EHR automatically appears in pharmacy system and vice versa, ensuring consistent allergy checking across all prescribers</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>📝 Medication Reconciliation</h4>
                  <p className="text-sm text-gray-700">At hospital admission/discharge, pharmacist reconciles EHR medications with pharmacy records identifying discrepancies and updating both systems</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl mb-4">Integration Benefits</h3>
              <div className="space-y-4 text-white/90">
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>🎯 70% Reduction in Medication Discrepancies</p>
                  <p className="text-sm">Studies show EHR-pharmacy integration catches 70% more medication discrepancies at care transitions (admission, discharge, transfer) compared to manual reconciliation</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>⏱️ 60% Faster Discharge Process</p>
                  <p className="text-sm">Electronic medication lists and automated prescription transmission to pharmacy reduce discharge prescription processing time from 45 minutes to 15 minutes</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>💰 30% Fewer Duplicate Tests</p>
                  <p className="text-sm">Shared lab results prevent unnecessary repeat testing. Pharmacy sees recent creatinine, doesn't request new test for renal dosing verification</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>🏥 50% Reduction in Hospital Readmissions</p>
                  <p className="text-sm">Accurate discharge medication lists and pharmacy follow-up enabled by integration reduce medication-related readmissions within 30 days by half</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telemedicine Integration */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Telemedicine & Telepharmacy Integration</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Extending pharmacy services to remote areas through digital connectivity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-xl mb-2">E-Prescribing from Telehealth</h3>
              <p className="text-gray-700 mb-3">
                Telemedicine consultation ends with physician electronically sending prescription directly to patient's preferred pharmacy. Patient receives SMS notification prescription is ready, eliminating need to carry paper prescription.
              </p>
              <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Key Benefit: Seamless Rx → Pharmacy workflow</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-xl mb-2">Telepharmacy Consultations</h3>
              <p className="text-gray-700 mb-3">
                Rural clinic with pharmacy technician connects via video to clinical pharmacist at regional hospital for complex medication reviews, drug interaction queries, and patient counseling. Extends pharmacist expertise to underserved areas.
              </p>
              <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Key Benefit: Expert access in remote settings</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🚚</div>
              <h3 className="text-xl mb-2">Coordinated Medication Delivery</h3>
              <p className="text-gray-700 mb-3">
                Integrated system coordinates telemedicine prescription, pharmacy dispensing, and last-mile delivery to patient's home. Patient tracks delivery status via mobile app. Particularly valuable for chronic disease management and immunocompromised patients.
              </p>
              <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Key Benefit: Complete end-to-end service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Health Apps */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Mobile Health Applications</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Patient and pharmacist mobile apps for medication management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">👤</div>
                <h3 className="text-2xl">Patient-Facing Apps</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Medication Reminders</span>
                    <span className="text-sm text-gray-600">Customizable alerts for medication dosing times improving adherence 40-60%</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Refill Requests</span>
                    <span className="text-sm text-gray-600">One-tap prescription refills with pharmacy pickup or delivery options</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Medication Education</span>
                    <span className="text-sm text-gray-600">Drug information, side effects, interactions in local languages with audio/video</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Medication History</span>
                    <span className="text-sm text-gray-600">Complete list of current and past medications with dosing instructions</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Chat with Pharmacist</span>
                    <span className="text-sm text-gray-600">Secure messaging for medication questions and counseling</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">👨‍⚕️</div>
                <h3 className="text-2xl">Pharmacist Apps</h3>
              </div>
              <div className="space-y-4 text-white/90">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Drug Information Database</span>
                    <span className="text-sm">Comprehensive drug monographs, interactions, dosing—searchable offline</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Clinical Calculators</span>
                    <span className="text-sm">CrCl, BMI, pediatric dosing, IV rates accessible on mobile device</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Patient Management</span>
                    <span className="text-sm">View patient medication lists, refill due dates, adherence scores on-the-go</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Inventory Checks</span>
                    <span className="text-sm">Real-time stock levels, reorder alerts, product search from anywhere</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Professional References</span>
                    <span className="text-sm">Treatment guidelines, STGs, clinical protocols at point of care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Health Information Exchange */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">National Health Information Exchanges</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Pharmacy participation in national digital health infrastructure
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl mb-4">HIE Architecture</h3>
                <p className="text-gray-700 mb-4">
                  National Health Information Exchanges (HIE) create centralized databases where patient health information from all care settings is aggregated and made accessible to authorized providers nationwide.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-[#4B2991] mt-1">•</span>
                    <span><span style={{ fontWeight: 600 }}>Patient Identity:</span> Unique national health ID links all care episodes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#4B2991] mt-1">•</span>
                    <span><span style={{ fontWeight: 600 }}>Medication Registry:</span> Complete longitudinal medication history from all pharmacies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#4B2991] mt-1">•</span>
                    <span><span style={{ fontWeight: 600 }}>Prescriber Access:</span> Physicians view medication history before prescribing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#4B2991] mt-1">•</span>
                    <span><span style={{ fontWeight: 600 }}>Pharmacy Query:</span> Pharmacies check for duplicate prescriptions across country</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#4B2991] mt-1">•</span>
                    <span><span style={{ fontWeight: 600 }}>Insurance Linkage:</span> Benefit verification and claims through HIE</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl mb-4">African HIE Examples</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2" style={{ fontWeight: 600 }}>🇷🇼 Rwanda National HIE</p>
                    <p className="text-sm text-gray-700">OpenMRS-based national system connecting 500+ health facilities. Pharmacies submit dispensing data to central registry. Enables tracking of ART adherence, TB treatment completion nationally.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2" style={{ fontWeight: 600 }}>🇰🇪 Kenya Health Information Exchange</p>
                    <p className="text-sm text-gray-700">HL7 FHIR-based HIE launched 2021. Private and public pharmacies report dispensing to national medication registry. Prevents duplicate ARV prescriptions across facilities.</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="mb-2" style={{ fontWeight: 600 }}>🇿🇦 South Africa National Health Insurance NHI</p>
                    <p className="text-sm text-gray-700">Building national HIE infrastructure to support universal health coverage. Pharmacy claims and dispensing records central to system for cost control and fraud prevention.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Considerations */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Integration Implementation</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Technical and operational considerations for successful integration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl mb-3">Technical Requirements</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Standards-based APIs (HL7, FHIR)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Secure data encryption in transit and at rest</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Authentication and authorization protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Reliable internet connectivity (or offline mode)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Data mapping and transformation capabilities</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl mb-3">Regulatory Compliance</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Data privacy laws (GDPR, local regulations)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Patient consent management for data sharing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Healthcare data breach notification requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Audit trail and access logging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Pharmacy board digital health regulations</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl mb-3">Operational Readiness</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Staff training on integrated workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Updated standard operating procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>IT support for troubleshooting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Phased rollout with pilot testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                  <span>Performance monitoring and optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Digital Integration Success Stories</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              African health systems leveraging integrated pharmacy technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg mb-2">Hospital Network, Ethiopia</h3>
              <p className="text-sm text-gray-700 mb-4">
                5-hospital network implements centralized EHR with integrated pharmacy system. Medication histories follow patients between facilities. Duplicate prescriptions drop 85%. Discharge prescription errors reduce 72%. Average discharge time decreases from 90 minutes to 25 minutes as electronic prescriptions sent directly to outpatient pharmacy.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Discharge time: 90min → 25min</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-lg mb-2">Pharmacy Chain + Telemedicine, Nigeria</h3>
              <p className="text-sm text-gray-700 mb-4">
                Pharmacy chain partners with telemedicine platform enabling e-prescribing directly to pharmacy locations. 12,000 virtual consultations in first 6 months generate 8,400 prescriptions filled same-day. 65% of patients opt for home delivery. Model extends healthcare access to underserved urban areas. Customer satisfaction 92%.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Satisfaction: 92%</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg mb-2">National HIV Program Mobile App, Uganda</h3>
              <p className="text-sm text-gray-700 mb-4">
                Ministry of Health deploys patient mobile app integrated with ART pharmacy systems nationwide. 180,000 patients receive medication reminders via SMS. App tracks adherence, sends refill reminders. 12-month ART retention increases from 78% to 88%. Lost-to-follow-up drops 45%. Viral suppression improves 12 percentage points.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Retention: 78% → 88%</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Integrate Your Pharmacy Systems</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Connect pharmacy with EHR, telemedicine, mobile apps, and national health information exchanges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/digital-health-integration')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                Digital Integration Support
              </button>
              <button
                onClick={() => navigate('/support/request-equipment-demo')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}