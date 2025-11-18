import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function GoodPharmacyPracticePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Good Pharmacy Practice (GPP) Implementation Services",
    "description": "GPP implementation guidance, staff training programs, facility assessments, compliance monitoring for pharmacy standards across Africa",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  const serviceAreas = [
    {
      name: 'GPP Implementation Guidance',
      description: 'Step-by-step support implementing WHO/FIP Good Pharmacy Practice standards including gap analysis, priority setting, action planning, and phased implementation roadmaps. Customized guidance adapting international standards to local resources, regulatory requirements, and practice contexts',
      applications: ['GPP gap assessment', 'Implementation planning', 'Priority interventions', 'Progress monitoring']
    },
    {
      name: 'Staff Training Programs',
      description: 'Comprehensive training for pharmacists and pharmacy technicians on GPP principles, ethical practice, patient-centered care, and professional responsibilities. Interactive workshops, e-learning modules, and competency assessments ensuring staff understand and apply GPP standards',
      applications: ['Pharmacist training', 'Technician training', 'Orientation programs', 'Continuing education']
    },
    {
      name: 'Facility Assessment Services',
      description: 'Professional assessment of pharmacy premises against GPP facility standards including space adequacy, layout optimization, storage conditions, security, hygiene, accessibility, and patient counseling areas. Detailed reports with prioritized recommendations and cost estimates',
      applications: ['Facility audits', 'Layout optimization', 'Renovation guidance', 'New pharmacy design']
    },
    {
      name: 'Compliance Monitoring Tools',
      description: 'Self-assessment checklists, audit tools, and dashboard systems for ongoing GPP compliance monitoring. Digital platforms tracking key performance indicators, generating compliance reports, and identifying areas requiring attention ensuring sustained adherence to professional standards',
      applications: ['Self-assessment tools', 'Performance dashboards', 'Compliance reports', 'Continuous monitoring']
    }
  ];

  const keyFeatures = [
    {
      title: 'WHO/FIP Standards',
      description: 'Implementation based on internationally-recognized Good Pharmacy Practice guidelines adapted for Africa',
      icon: '🌍'
    },
    {
      title: 'Practical Approach',
      description: 'Realistic recommendations considering resource constraints and local practice realities',
      icon: '💡'
    },
    {
      title: 'Staff Engagement',
      description: 'Training and change management support ensuring staff buy-in and sustained behavior change',
      icon: '👥'
    },
    {
      title: 'Measurable Improvement',
      description: 'Assessment tools and metrics demonstrating progress toward GPP compliance over time',
      icon: '📊'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Good Pharmacy Practice (GPP) Implementation Services | Pacem Health"
        description="Good Pharmacy Practice implementation services including GPP guidance, staff training programs, facility assessments, compliance monitoring. Supporting professional pharmacy standards across Africa."
        keywords={[
          'good pharmacy practice Africa',
          'GPP implementation',
          'pharmacy standards Africa',
          'pharmacy facility assessment',
          'pharmacist training Africa',
          'pharmacy compliance',
          'WHO FIP standards',
          'pharmacy quality assurance'
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
            <Link to="/products/categories/regulatory-compliance-quality-assurance" className="hover:underline">Regulatory Compliance & Quality Assurance</Link>
            <span>/</span>
            <span>Good Pharmacy Practice (GPP)</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Regulatory Compliance & Quality Assurance</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Good Pharmacy Practice (GPP)
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Comprehensive Good Pharmacy Practice implementation support including WHO/FIP GPP guidance, staff training programs, facility assessments, and compliance monitoring tools. These services help African pharmacies achieve international professional standards addressing gaps in facility quality, professional practice, patient care, and ethical conduct where many pharmacies operate below minimum standards not from lack of commitment but from limited guidance, resource constraints, and competing demands. GPP implementation transforms pharmacies into professional healthcare destinations delivering safe, effective, patient-centered pharmaceutical care.
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
              Complete support for implementing Good Pharmacy Practice standards
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">GPP Support Features</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Practical, sustainable approach to professional pharmacy practice
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

      {/* GPP Core Principles */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">WHO/FIP GPP Core Principles</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Seven foundational elements of Good Pharmacy Practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-[#4B2991]">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ fontWeight: 600 }}>1</div>
                <h3 className="text-lg">Patient Care</h3>
              </div>
              <p className="text-sm text-gray-700">
                The pharmacist's first concern is the welfare of the patient. All pharmacy services must be patient-centered, prioritizing safety, efficacy, and patient well-being above commercial interests.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-[#4B2991]">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ fontWeight: 600 }}>2</div>
                <h3 className="text-lg">Professional Competence</h3>
              </div>
              <p className="text-sm text-gray-700">
                Pharmacists must possess and maintain professional knowledge and skills through initial education, continuing professional development, and lifelong learning. Competence in pharmaceutical sciences, clinical practice, and patient communication is essential.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-[#4B2991]">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ fontWeight: 600 }}>3</div>
                <h3 className="text-lg">Ethical Conduct</h3>
              </div>
              <p className="text-sm text-gray-700">
                Pharmacists adhere to ethical principles including honesty, integrity, confidentiality, and professional responsibility. Decisions prioritize patient health over personal or financial gain. Conflicts of interest are disclosed and managed appropriately.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-[#4B2991]">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ fontWeight: 600 }}>4</div>
                <h3 className="text-lg">Quality Services</h3>
              </div>
              <p className="text-sm text-gray-700">
                Pharmacy provides high-quality services through proper facilities, adequate equipment, trained staff, quality-assured medications, and standardized procedures. Continuous quality improvement is integral to practice.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-[#4B2991]">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ fontWeight: 600 }}>5</div>
                <h3 className="text-lg">Respect & Communication</h3>
              </div>
              <p className="text-sm text-gray-700">
                Patients are treated with dignity and respect. Clear, culturally-sensitive communication ensures patients understand their medications. Privacy and confidentiality are protected. Patient autonomy in healthcare decisions is supported.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-[#4B2991]">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ fontWeight: 600 }}>6</div>
                <h3 className="text-lg">Accessible Services</h3>
              </div>
              <p className="text-sm text-gray-700">
                Pharmacy services are accessible to all patients regardless of socioeconomic status, location, or health condition. Operating hours, physical accessibility, and service design accommodate community needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-[#4B2991]">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ fontWeight: 600 }}>7</div>
                <h3 className="text-lg">Collaborative Practice</h3>
              </div>
              <p className="text-sm text-gray-700">
                Pharmacists work collaboratively with physicians, nurses, and other healthcare providers ensuring coordinated patient care. Professional relationships are built on mutual respect, clear communication, and shared patient care goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GPP Facility Standards */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Pharmacy Facility Standards</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Physical infrastructure requirements for Good Pharmacy Practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Essential Facility Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Adequate Space</span>
                    <span className="text-sm text-gray-600">Minimum 20-30 m² for community pharmacy with separate dispensing, storage, and counseling areas</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Proper Lighting & Ventilation</span>
                    <span className="text-sm text-gray-600">Natural and artificial lighting, adequate airflow preventing heat and humidity damage</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Storage Conditions</span>
                    <span className="text-sm text-gray-600">Climate control, refrigeration for cold chain, protection from sunlight, separate areas for different product categories</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Security Measures</span>
                    <span className="text-sm text-gray-600">Lockable controlled substance safe, burglar bars, alarm system, restricted access to medication areas</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Hygiene & Cleanliness</span>
                    <span className="text-sm text-gray-600">Clean, pest-free environment; proper waste disposal; staff hygiene facilities</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Functional Area Layout</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>🏪 Dispensing Area</p>
                  <p className="text-sm text-gray-700">Counter/workspace for prescription processing, computer system, reference materials, dispensing supplies. Visible to pharmacist but separated from public access.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>💬 Patient Counseling Space</p>
                  <p className="text-sm text-gray-700">Semi-private area for confidential patient consultations ensuring visual privacy and reduced noise. Chairs, table, educational materials.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>📦 Storage Areas</p>
                  <p className="text-sm text-gray-700">Organized shelving with proper separation: prescription medications, OTC products, controlled substances (locked), refrigerated items (monitored fridge), hazardous materials (separate).</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>📝 Administrative Office</p>
                  <p className="text-sm text-gray-700">Workspace for pharmacist administrative tasks, record storage, staff training, private phone calls with prescribers.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>👥 Staff Facilities</p>
                  <p className="text-sm text-gray-700">Break room, bathroom, secure storage for personal belongings separate from medication areas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Practice Standards */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Professional Practice Standards</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Expected pharmacist behaviors and service delivery under GPP
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-xl mb-2">Dispensing Excellence</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Verify prescription validity and appropriateness</li>
                <li>• Check for drug interactions and allergies</li>
                <li>• Ensure correct medication, strength, and quantity</li>
                <li>• Clear labeling with dosing instructions</li>
                <li>• Provide verbal counseling on administration</li>
                <li>• Document all interventions and advice</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-xl mb-2">Patient-Centered Communication</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Use patient's preferred name and language</li>
                <li>• Assess patient understanding (teach-back method)</li>
                <li>• Culturally-sensitive health education</li>
                <li>• Respect patient privacy and dignity</li>
                <li>• Encourage questions and address concerns</li>
                <li>• Provide written information when helpful</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-xl mb-2">Collaborative Healthcare</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Communicate with prescribers when needed</li>
                <li>• Coordinate with other healthcare providers</li>
                <li>• Participate in multidisciplinary care teams</li>
                <li>• Share medication information appropriately</li>
                <li>• Refer patients to other services when needed</li>
                <li>• Document collaborative interventions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GPP Implementation Roadmap */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Phased GPP Implementation</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Realistic, sustainable approach to achieving Good Pharmacy Practice standards
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white px-4 py-2 rounded-lg" style={{ fontWeight: 600 }}>Phase 1 (0-3 months)</div>
                <h3 className="text-xl">Foundation - Patient Safety Essentials</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="mb-2 text-gray-700" style={{ fontWeight: 600 }}>Priority Actions:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Remove all expired medications</li>
                    <li>• Implement prescription verification checklist</li>
                    <li>• Establish patient counseling protocol</li>
                    <li>• Create medication error reporting system</li>
                    <li>• Secure controlled substances properly</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-gray-700" style={{ fontWeight: 600 }}>Expected Outcomes:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Zero expired products dispensed</li>
                    <li>• All prescriptions verified by pharmacist</li>
                    <li>• Patients counseled on all medications</li>
                    <li>• Errors documented for learning</li>
                    <li>• Narcotics theft/loss prevented</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white px-4 py-2 rounded-lg" style={{ fontWeight: 600 }}>Phase 2 (3-6 months)</div>
                <h3 className="text-xl">Systems - Documentation & Quality</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="mb-2 text-gray-700" style={{ fontWeight: 600 }}>Priority Actions:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Develop essential SOPs (dispensing, storage)</li>
                    <li>• Implement systematic record-keeping</li>
                    <li>• Establish temperature monitoring system</li>
                    <li>• Create staff training program</li>
                    <li>• Organize storage areas systematically</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-gray-700" style={{ fontWeight: 600 }}>Expected Outcomes:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Consistent processes documented</li>
                    <li>• Complete, accurate records maintained</li>
                    <li>• Cold chain integrity ensured</li>
                    <li>• Staff competency verified</li>
                    <li>• Efficient medication retrieval</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white px-4 py-2 rounded-lg" style={{ fontWeight: 600 }}>Phase 3 (6-12 months)</div>
                <h3 className="text-xl">Enhancement - Facility & Services</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="mb-2 text-gray-700" style={{ fontWeight: 600 }}>Priority Actions:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Create private counseling space</li>
                    <li>• Upgrade storage conditions (AC, shelving)</li>
                    <li>• Implement patient medication profiles</li>
                    <li>• Enhance security measures</li>
                    <li>• Develop community health programs</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-gray-700" style={{ fontWeight: 600 }}>Expected Outcomes:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Patient privacy protected</li>
                    <li>• Optimal medication storage</li>
                    <li>• Comprehensive patient records</li>
                    <li>• Theft/loss minimized</li>
                    <li>• Expanded professional services</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4B2991] text-white px-4 py-2 rounded-lg" style={{ fontWeight: 600 }}>Phase 4 (12+ months)</div>
                <h3 className="text-xl">Excellence - Continuous Improvement</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="mb-2 text-gray-700" style={{ fontWeight: 600 }}>Priority Actions:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Implement quality metrics dashboard</li>
                    <li>• Advanced clinical services (MTM, immunizations)</li>
                    <li>• Digital health integration (pharmacy software)</li>
                    <li>• Collaborative practice agreements</li>
                    <li>• Continuous quality improvement culture</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-gray-700" style={{ fontWeight: 600 }}>Expected Outcomes:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Data-driven quality improvement</li>
                    <li>• Expanded scope of practice</li>
                    <li>• Efficient digital operations</li>
                    <li>• Integrated healthcare delivery</li>
                    <li>• Recognized GPP excellence</li>
                  </ul>
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">GPP Transformation Stories</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Pharmacies achieving Good Pharmacy Practice standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏪</div>
              <h3 className="text-lg mb-2">Community Pharmacy, Tanzania</h3>
              <p className="text-sm text-gray-700 mb-4">
                Family-owned pharmacy struggling with compliance implements GPP program over 12 months. Facility renovations create counseling area, controlled substance room, climate-controlled storage. Staff training emphasizes patient communication. Customer satisfaction increases from 65% to 93%. Patient volume grows 45% through word-of-mouth referrals. Pharmacy becomes model for district.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Satisfaction: 65% → 93%</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg mb-2">Hospital Pharmacy, Ghana</h3>
              <p className="text-sm text-gray-700 mb-4">
                200-bed hospital pharmacy fails accreditation survey with 23 deficiencies. Engages GPP consultants for 6-month intensive program. Implement SOPs, staff training, facility upgrades, quality metrics. Re-survey 8 months later: only 2 minor findings. Achieves full accreditation. Hospital administration invests in expanded clinical pharmacy services recognizing professionalism.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Deficiencies: 23 → 2</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg mb-2">National GPP Program, Rwanda</h3>
              <p className="text-sm text-gray-700 mb-4">
                Ministry of Health launches national GPP initiative training 500 pharmacists over 2 years. Provides facility assessment tools, SOPs library, ongoing mentorship. Follow-up surveys show 78% of participating pharmacies meet GPP standards vs. 32% baseline. Patient complaints to pharmacy council decrease 60%. Program becomes regional model for pharmacy professionalization.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>GPP compliance: 32% → 78%</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Implement Good Pharmacy Practice</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Transform your pharmacy with WHO/FIP GPP standards—professional practice, quality facilities, patient-centered care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/product-safety-compliance')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                GPP Assessment
              </button>
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                GPP Training Programs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
