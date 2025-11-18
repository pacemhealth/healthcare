import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function LicensingCertificationSupportPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Licensing & Certification Support Services",
    "description": "Pharmacy license applications, pharmacist registration assistance, regulatory compliance support for African pharmacy professionals",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  const serviceAreas = [
    {
      name: 'Pharmacy License Applications',
      description: 'Complete application support for new pharmacy licenses including site inspections preparation, documentation compilation, regulatory submission, and follow-up with pharmacy councils. Guidance through approval process from initial application to license issuance',
      applications: ['New pharmacy licenses', 'Branch licenses', 'License renewals', 'License amendments']
    },
    {
      name: 'Pharmacist Registration Assistance',
      description: 'Support for individual pharmacist registration with national pharmacy councils including credential verification, foreign qualification recognition, internship program coordination, and professional examination preparation. Ensures pharmacists meet local registration requirements',
      applications: ['Initial registration', 'Foreign pharmacist registration', 'License transfers', 'Registration renewals']
    },
    {
      name: 'Continuing Education Programs',
      description: 'Accredited CPD (Continuing Professional Development) courses meeting mandatory education requirements for license renewal. Online and in-person training on clinical topics, pharmacy law, ethics, and emerging practice areas with certificates recognized by pharmacy councils',
      applications: ['CPD credits', 'License renewal requirements', 'Specialty certifications', 'Skills development']
    },
    {
      name: 'Regulatory Update Services',
      description: 'Subscription service providing timely updates on pharmacy law changes, new regulations, practice guidelines, and policy developments. Includes interpretation guidance, compliance impact assessments, and implementation support ensuring pharmacies stay current with evolving requirements',
      applications: ['Law updates', 'Regulatory alerts', 'Compliance newsletters', 'Policy interpretation']
    }
  ];

  const keyFeatures = [
    {
      title: 'Expert Guidance',
      description: 'Regulatory specialists with deep knowledge of national pharmacy councils and licensing processes across Africa',
      icon: '👨‍⚕️'
    },
    {
      title: 'Documentation Support',
      description: 'Complete assistance preparing required documents, forms, and evidence for licensing applications',
      icon: '📄'
    },
    {
      title: 'Inspection Readiness',
      description: 'Facility assessment and preparation services ensuring pharmacies pass pre-licensing inspections',
      icon: '✅'
    },
    {
      title: 'Ongoing Compliance',
      description: 'Renewal reminders, continuing education tracking, and regulatory update services maintain licenses',
      icon: '🔄'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Licensing & Certification Support | Pharmacy Regulatory | Pacem Health"
        description="Licensing and certification support including pharmacy license applications, pharmacist registration, regulatory compliance. Comprehensive regulatory support for African pharmacy professionals."
        keywords={[
          'pharmacy licensing Africa',
          'pharmacy certification',
          'pharmacist registration',
          'pharmacy regulatory support',
          'license applications',
          'pharmacy compliance',
          'pharmacy regulation',
          'certification support'
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
            <span>Licensing & Certification Support</span>
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
              Licensing & Certification Support
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Comprehensive regulatory support services for pharmacy licensing, pharmacist registration, continuing professional development, and regulatory compliance. Expert guidance navigating complex and varied African pharmacy regulations—from initial license applications and foreign pharmacist credential recognition to CPD programs meeting mandatory requirements and ongoing regulatory update services. These services address the significant compliance burden facing pharmacies across Africa where regulations vary by country, application processes are often opaque, and keeping current with regulatory changes requires dedicated monitoring pharmacies rarely have capacity to maintain.
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
              Complete licensing and certification support for pharmacies and pharmacists
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Support Services Features</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive assistance throughout the licensing and registration process
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

      {/* Pharmacy License Application Process */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Pharmacy License Application Process</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Step-by-step guidance through pharmacy licensing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ fontWeight: 600 }}>1</div>
                <h3 className="text-lg">Pre-Application Phase</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Verify eligibility requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Select appropriate pharmacy location</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Prepare facility to meet physical standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Identify responsible pharmacist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Conduct facility self-assessment</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ fontWeight: 600 }}>2</div>
                <h3 className="text-lg">Application Submission</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Complete application forms accurately</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Compile required supporting documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Pay application and inspection fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Submit to pharmacy council</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Obtain acknowledgment receipt</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#4B2991] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg" style={{ fontWeight: 600 }}>3</div>
                <h3 className="text-lg">Inspection & Approval</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Prepare for pre-licensing inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Host inspector site visit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Address any deficiencies identified</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Await council decision</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Collect pharmacy license certificate</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-[#F0EBF8] p-6 rounded-xl">
            <p className="text-sm text-gray-700">
              <span style={{ fontWeight: 600 }}>Timeline:</span> Pharmacy license applications typically take 3-6 months from submission to approval, varying by country and pharmacy council backlog. Some countries offer fast-track processing for well-prepared applications with all documentation complete.
            </p>
          </div>
        </div>
      </section>

      {/* Required Documents Checklist */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Typical License Application Requirements</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Common documents required across African jurisdictions (specific requirements vary)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Pharmacy Owner/Business Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Business Registration</span>
                    <span className="text-sm text-gray-600">Certificate of incorporation or business registration</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Tax Clearance</span>
                    <span className="text-sm text-gray-600">Current tax compliance certificate</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Premises Lease/Ownership</span>
                    <span className="text-sm text-gray-600">Proof of premises occupation rights</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Facility Plans</span>
                    <span className="text-sm text-gray-600">Floor plan showing dispensing, storage, counseling areas</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Pharmacist Credentials</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Pharmacist Registration</span>
                    <span className="text-sm text-gray-600">Current pharmacist license from national council</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Academic Credentials</span>
                    <span className="text-sm text-gray-600">Pharmacy degree certificate and transcripts</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Good Standing Letter</span>
                    <span className="text-sm text-gray-600">Letter from pharmacy council confirming no disciplinary actions</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Professional Indemnity</span>
                    <span className="text-sm text-gray-600">Professional liability insurance certificate</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CPD & Continuing Education */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">Continuing Professional Development (CPD)</h2>
              <p className="text-gray-700 mb-6">
                Most African pharmacy councils mandate CPD for license renewal—typically 20-40 hours annually. Pharmacists must complete accredited courses, attend conferences, or participate in professional activities earning CPD credits.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>📚 Online CPD Courses</h4>
                  <p className="text-sm text-gray-700">Self-paced e-learning modules on clinical topics, pharmacy law, and professional skills. Accessible 24/7, affordable, and accredited by multiple national councils.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>🎓 In-Person Workshops</h4>
                  <p className="text-sm text-gray-700">Hands-on training sessions and conferences providing networking opportunities and practical skill development alongside CPD credit.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>📝 CPD Portfolio Management</h4>
                  <p className="text-sm text-gray-700">Digital platform for tracking CPD activities, storing certificates, and generating council-required documentation for license renewal.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl mb-4">Popular CPD Topics</h3>
              <div className="space-y-3 text-white/90">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💊</span>
                  <div>
                    <p style={{ fontWeight: 600 }}>Antimicrobial Stewardship</p>
                    <p className="text-sm">Appropriate antibiotic use and resistance prevention</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🩺</span>
                  <div>
                    <p style={{ fontWeight: 600 }}>Chronic Disease Management</p>
                    <p className="text-sm">Diabetes, hypertension, asthma pharmaceutical care</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚖️</span>
                  <div>
                    <p style={{ fontWeight: 600 }}>Pharmacy Law & Ethics</p>
                    <p className="text-sm">Legal obligations, ethical dilemmas, professional conduct</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💻</span>
                  <div>
                    <p style={{ fontWeight: 600 }}>Digital Health & Technology</p>
                    <p className="text-sm">Pharmacy software, telemedicine, electronic prescribing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p style={{ fontWeight: 600 }}>Patient Counseling Skills</p>
                    <p className="text-sm">Communication techniques and medication adherence support</p>
                  </div>
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Licensing Support Success Stories</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Pharmacies and pharmacists successfully navigating regulatory requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏪</div>
              <h3 className="text-lg mb-2">New Pharmacy License, Nigeria</h3>
              <p className="text-sm text-gray-700 mb-4">
                Entrepreneur opening first community pharmacy engages licensing support service. Consultants guide facility selection, prepare all documentation, conduct mock inspection, and accompany owner during official inspection. Application approved first attempt. Pharmacy opens 4 months after initial consultation—faster than 6-9 month average for self-applications.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Approved: First attempt, 4 months</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h3 className="text-lg mb-2">Foreign Pharmacist Registration, Kenya</h3>
              <p className="text-sm text-gray-700 mb-4">
                Zimbabwean pharmacist relocating to Kenya requires registration with Pharmacy and Poisons Board. Registration service verifies credentials, prepares equivalency documentation, coordinates required exams, and manages application. Pharmacist registered and employed within 3 months despite initially being told process takes "up to 2 years".
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Registered: 3 months vs. 2 year estimate</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg mb-2">CPD Compliance, Ghana</h3>
              <p className="text-sm text-gray-700 mb-4">
                Pharmacy chain with 12 locations and 18 pharmacists struggles to track CPD compliance. Implements online CPD platform providing courses, tracking, and automated reminders. 100% of pharmacists meet 25-hour annual requirement for license renewal. Previously, 30% of staff required expedited CPD completion causing operational disruption.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Compliance: 100% vs. 70% baseline</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Get Licensing & Certification Support</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Partner with regulatory experts to navigate pharmacy licensing and registration requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/product-safety-compliance')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                Licensing Consultation
              </button>
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                CPD Programs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}