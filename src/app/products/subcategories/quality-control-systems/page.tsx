import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function QualityControlSystemsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Quality Control Systems",
    "description": "Standard operating procedures, quality assurance protocols, performance monitoring for pharmacy quality control across Africa",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  const serviceAreas = [
    {
      name: 'Standard Operating Procedures (SOPs)',
      description: 'Comprehensive SOPs library for all pharmacy operations including dispensing workflows, inventory management, controlled substance handling, patient counseling, and emergency procedures. Customizable templates adapted to local regulations and specific pharmacy contexts',
      applications: ['Dispensing SOPs', 'Inventory SOPs', 'Safety SOPs', 'Quality assurance SOPs']
    },
    {
      name: 'Quality Assurance Protocols',
      description: 'Systematic quality assurance frameworks including medication error monitoring, patient safety protocols, adverse event reporting, quality improvement initiatives, and performance measurement systems ensuring consistent high-quality pharmaceutical care',
      applications: ['Error prevention', 'Incident reporting', 'Quality metrics', 'Continuous improvement']
    },
    {
      name: 'Audit Preparation Services',
      description: 'Comprehensive support for regulatory inspections including pre-audit facility assessments, documentation reviews, staff training on inspection procedures, corrective action planning, and mock audits preparing pharmacies for successful regulatory reviews',
      applications: ['Pre-inspection audits', 'Documentation review', 'Deficiency remediation', 'Inspection readiness']
    },
    {
      name: 'Documentation Management',
      description: 'Systems and templates for maintaining required pharmacy records including prescription registers, controlled substance logs, temperature monitoring records, staff training documentation, and supplier qualification records meeting regulatory retention requirements',
      applications: ['Record-keeping systems', 'Document templates', 'Retention schedules', 'Digital archives']
    }
  ];

  const keyFeatures = [
    {
      title: 'Customizable Templates',
      description: 'SOPs and forms adapted to specific pharmacy size, type, and local regulatory requirements',
      icon: '📝'
    },
    {
      title: 'Training Materials',
      description: 'Staff training guides and checklists ensuring SOPs are understood and consistently followed',
      icon: '🎓'
    },
    {
      title: 'Audit Checklists',
      description: 'Comprehensive inspection preparation checklists covering all common regulatory review areas',
      icon: '✅'
    },
    {
      title: 'Digital Solutions',
      description: 'Electronic document management systems with version control, access tracking, and backup',
      icon: '💻'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Quality Control Systems | Pharmacy Quality Assurance | Pacem Health"
        description="Quality control systems including standard operating procedures, quality assurance protocols, performance monitoring. Comprehensive quality management for African pharmacies."
        keywords={[
          'pharmacy quality control Africa',
          'quality assurance pharmacy',
          'standard operating procedures',
          'pharmacy SOPs',
          'quality management systems',
          'pharmacy quality assurance',
          'quality control',
          'performance monitoring'
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
            <span>Quality Control Systems</span>
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
              Quality Control Systems
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Comprehensive quality management systems for pharmacy operations including Standard Operating Procedures, quality assurance protocols, audit preparation services, and documentation management. These systems establish consistent, high-quality pharmacy practice addressing the widespread absence of formal quality systems in African pharmacies where operations rely on informal knowledge transfer, documentation is incomplete, and preparation for regulatory inspections is reactive rather than proactive—creating risks for medication errors, compliance failures, and poor patient outcomes despite pharmacist good intentions.
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
              Complete quality control and assurance systems for pharmacy operations
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Quality System Features</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Tools and support for implementing effective quality management
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

      {/* Essential SOPs for Pharmacies */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Essential Pharmacy SOPs</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Core Standard Operating Procedures every pharmacy should have
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-lg mb-3" style={{ fontWeight: 600 }}>💊 Dispensing & Patient Care</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Prescription processing and verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Medication dispensing procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Patient counseling protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Medication therapy management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Adverse drug reaction reporting</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-lg mb-3" style={{ fontWeight: 600 }}>📦 Inventory Management</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Product receiving and inspection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Storage and stock rotation (FEFO)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Expiry date management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Stock reconciliation procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Supplier qualification and auditing</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-lg mb-3" style={{ fontWeight: 600 }}>🔒 Controlled Substances</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Narcotic receiving and storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Controlled substance dispensing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Register maintenance and reconciliation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Discrepancy investigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Loss or theft reporting</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-lg mb-3" style={{ fontWeight: 600 }}>🌡️ Cold Chain & Storage</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Temperature monitoring procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Refrigerator/freezer maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Temperature excursion response</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Vaccine storage and handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Power outage contingency plans</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-lg mb-3" style={{ fontWeight: 600 }}>⚠️ Safety & Emergency</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Medication error prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Error identification and reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Product recall procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Counterfeit medication detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Fire, theft, and emergency response</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-lg mb-3" style={{ fontWeight: 600 }}>👥 Staff & Training</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Staff hiring and orientation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Training program management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Performance evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Pharmacist supervision of technicians</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Disciplinary procedures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOP Implementation Process */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">SOP Development & Implementation</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Structured approach to creating and deploying Standard Operating Procedures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">SOP Development Steps</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0" style={{ fontWeight: 600 }}>1</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Identify Critical Processes</p>
                    <p className="text-sm text-gray-600">Map all pharmacy operations requiring standardization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0" style={{ fontWeight: 600 }}>2</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Document Current Practice</p>
                    <p className="text-sm text-gray-600">Observe and record how tasks are currently performed</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0" style={{ fontWeight: 600 }}>3</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Draft SOPs</p>
                    <p className="text-sm text-gray-600">Write clear, step-by-step procedures with rationale</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex-shrink-0 text-sm" style={{ fontWeight: 600 }}>4</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Review & Validate</p>
                    <p className="text-sm text-gray-600">Test procedures, gather staff feedback, refine</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex-items-center justify-center text-sm flex-shrink-0" style={{ fontWeight: 600 }}>5</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Approve & Implement</p>
                    <p className="text-sm text-gray-600">Obtain pharmacist sign-off, train staff, launch</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex-items-center justify-center text-sm flex-shrink-0" style={{ fontWeight: 600 }}>6</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Monitor & Update</p>
                    <p className="text-sm text-gray-600">Regular review, continuous improvement, version control</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <h3 className="text-xl mb-4">SOP Best Practices</h3>
              <div className="space-y-4 text-white/90">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p style={{ fontWeight: 600 }}>Clear & Concise</p>
                    <p className="text-sm">Use simple language, short sentences, and active voice. Avoid jargon.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p style={{ fontWeight: 600 }}>Step-by-Step Format</p>
                    <p className="text-sm">Number sequential steps. Include decision points and alternative actions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p style={{ fontWeight: 600 }}>Include Visual Aids</p>
                    <p className="text-sm">Flowcharts, photos, and diagrams improve understanding and compliance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p style={{ fontWeight: 600 }}>Define Roles</p>
                    <p className="text-sm">Specify who performs each step (pharmacist, technician, intern).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p style={{ fontWeight: 600 }}>Reference Regulations</p>
                    <p className="text-sm">Cite relevant laws, guidelines, and standards supporting procedures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p style={{ fontWeight: 600 }}>Version Control</p>
                    <p className="text-sm">Date, version number, approval signatures, and change history on each SOP.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Preparation */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Regulatory Inspection Preparation</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Systematic approach to preparing for pharmacy council inspections
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl mb-4">Common Inspection Findings</h3>
                <p className="text-sm text-gray-700 mb-4">Most frequent deficiencies cited during African pharmacy inspections:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545] mt-1">⚠️</span>
                    <span><span style={{ fontWeight: 600 }}>Expired medications on shelves</span> - failure to properly check and remove expiries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545] mt-1">⚠️</span>
                    <span><span style={{ fontWeight: 600 }}>Incomplete prescription records</span> - missing information, illegible entries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545] mt-1">⚠️</span>
                    <span><span style={{ fontWeight: 600 }}>Controlled substance discrepancies</span> - register doesn't match physical count</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545] mt-1">⚠️</span>
                    <span><span style={{ fontWeight: 600 }}>Temperature monitoring gaps</span> - incomplete records or out-of-range temps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545] mt-1">⚠️</span>
                    <span><span style={{ fontWeight: 600 }}>Inadequate pharmacist supervision</span> - technicians dispensing without oversight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545] mt-1">⚠️</span>
                    <span><span style={{ fontWeight: 600 }}>Poor storage conditions</span> - medications exposed to heat, light, or moisture</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-4">Pre-Inspection Audit Checklist</h3>
                <p className="text-sm text-gray-700 mb-4">Conduct internal audit 2-4 weeks before scheduled inspection:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                    <span>Review all licenses, registrations, and insurance certificates (current & displayed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                    <span>Audit prescription records for completeness and accuracy (6-12 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                    <span>Reconcile controlled substance registers (narcotics, psychotropics)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                    <span>Conduct comprehensive expiry date check—remove ALL expired products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                    <span>Review temperature monitoring logs (refrigerators, storage areas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                    <span>Verify staff training documentation and pharmacist CPD compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                    <span>Assess facility cleanliness, organization, and security measures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-1" />
                    <span>Ensure SOPs are current, accessible, and staff can demonstrate knowledge</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <h4 className="mb-2" style={{ fontWeight: 600 }}>💡 Inspection Day Tips</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Greet inspector professionally, provide designated workspace with good lighting</li>
                <li>• Assign knowledgeable staff member to accompany inspector, answer questions</li>
                <li>• Provide requested documents promptly—have organized file ready</li>
                <li>• Take notes during inspection—record all findings and inspector comments</li>
                <li>• If deficiency identified, acknowledge and explain corrective action plan</li>
                <li>• Request written inspection report and timeline for remediation if deficiencies found</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Quality System Success Stories</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Pharmacies strengthening quality through systematic approaches
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg mb-2">SOP Implementation, Rwanda</h3>
              <p className="text-sm text-gray-700 mb-4">
                Hospital pharmacy with 8 staff implements comprehensive SOP system. 35 SOPs developed covering all operations. Staff trained over 4-week period. Medication errors decrease 68% in 6 months post-implementation. Regulatory inspection passes with zero deficiencies—first time in pharmacy's 12-year history. Inspector commends documentation quality.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Errors reduced: 68%</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="text-lg mb-2">Pre-Audit Support, Uganda</h3>
              <p className="text-sm text-gray-700 mb-4">
                Community pharmacy receives notice of inspection in 30 days—has previously failed 2 inspections with multiple deficiencies. Engages audit preparation service. Consultants conduct thorough pre-audit, identify 18 issues, guide remediation. Pharmacy passes inspection with only 2 minor observations requiring follow-up documentation. License renewed without restrictions.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Result: Passed after 2 previous failures</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg mb-2">Quality Metrics, Kenya</h3>
              <p className="text-sm text-gray-700 mb-4">
                Pharmacy chain implements quality assurance program with systematic error monitoring, monthly audits, and performance dashboards. Track dispensing accuracy, prescription wait times, patient satisfaction, and near-miss events. Data-driven quality improvement initiatives reduce wait times 40%, improve patient satisfaction scores from 72% to 89%, and decrease reportable errors 75%.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Satisfaction: 72% → 89%</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Implement Quality Control Systems</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Establish SOPs, quality protocols, and audit readiness systems for your pharmacy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/product-safety-compliance')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                Quality System Assessment
              </button>
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                SOP Training
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}