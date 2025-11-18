import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function PharmacistEducationPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pharmacist Education & Training",
    "description": "Clinical pharmacy training, continuing education, certification programs, skills development for pharmacy professionals across Africa",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  const trainingAreas = [
    {
      name: 'Clinical Pharmacy Training',
      description: 'Comprehensive clinical pharmacy education including pharmacotherapeutics, clinical assessment skills, drug information retrieval, evidence-based medicine, and clinical decision-making. Bridging gap between product-focused education and patient-centered practice through practical clinical rotations and case-based learning',
      applications: ['Pharmacotherapy', 'Clinical assessment', 'Evidence-based medicine', 'Clinical rotations']
    },
    {
      name: 'Pharmaceutical Care Certification',
      description: 'Structured certification programs teaching pharmaceutical care philosophy, systematic approach to medication therapy management, identification and resolution of drug therapy problems, documentation methods, and patient follow-up protocols. Prepares pharmacists for expanded clinical roles',
      applications: ['Pharmaceutical care principles', 'MTM methodology', 'Problem-solving', 'Documentation']
    },
    {
      name: 'Specialized Therapy Training',
      description: 'Disease-specific training programs for high-burden conditions in Africa including HIV/AIDS antiretroviral therapy, tuberculosis DOTS, diabetes management, hypertension control, asthma care, and malaria treatment. Deep clinical knowledge enabling pharmacist-led disease management clinics',
      applications: ['HIV/ART management', 'TB/DOTS', 'Diabetes care', 'Hypertension management']
    },
    {
      name: 'Leadership Development Programs',
      description: 'Professional development training in pharmacy management, team leadership, change management, quality improvement, business development, and advocacy. Preparing pharmacists for expanded roles as healthcare team leaders, practice innovators, and professional advocates promoting pharmacy\'s value',
      applications: ['Practice management', 'Team leadership', 'Quality improvement', 'Professional advocacy']
    }
  ];

  const keyFeatures = [
    {
      title: 'Practical Training',
      description: 'Hands-on clinical rotations, case studies, and real-world problem-solving beyond didactic lectures',
      icon: '👨‍⚕️'
    },
    {
      title: 'Africa-Focused',
      description: 'Training content addresses diseases, medications, and practice contexts specific to African settings',
      icon: '🌍'
    },
    {
      title: 'Flexible Delivery',
      description: 'Online modules, in-person workshops, and hybrid formats accommodating working pharmacists\' schedules',
      icon: '📱'
    },
    {
      title: 'Certification',
      description: 'Recognized credentials and continuing education credits meeting professional requirements',
      icon: '🎓'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Pharmacist Education & Training | Continuing Education | Pacem Health"
        description="Pharmacist education and training including clinical pharmacy training, continuing education, certification programs. Professional development for pharmacy professionals across Africa."
        keywords={[
          'pharmacist education Africa',
          'pharmacy training',
          'continuing education pharmacy',
          'clinical pharmacy training',
          'pharmacy certification',
          'pharmacy professional development',
          'pharmacist training programs',
          'pharmacy education'
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
            <span>Pharmacist Education</span>
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
              Pharmacist Education
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Comprehensive clinical pharmacy training, pharmaceutical care certification, specialized disease therapy programs, and leadership development for African pharmacists. These education initiatives address the critical gap between traditional product-focused pharmacy education and the clinical competencies required for modern patient-centered practice. Training programs equip pharmacists with skills in pharmacotherapy, clinical assessment, medication therapy management, and disease-specific care enabling them to function as accessible primary healthcare providers—particularly vital in African contexts where physician shortages leave populations underserved and pharmacists represent the most accessible healthcare professionals in many communities.
            </p>
          </div>
        </div>
      </section>

      {/* Training Areas Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Training Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl">
              Comprehensive education programs building clinical pharmacy competencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {trainingAreas.map((area, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-lg transition-all">
                <h3 className="text-xl mb-3">{area.name}</h3>
                <p className="text-gray-700 mb-4">{area.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Key Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {area.applications.map((app, idx) => (
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Training Program Features</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Effective, accessible education for African pharmacists
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

      {/* Clinical Pharmacy Training Curriculum */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Clinical Pharmacy Training Curriculum</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Core competencies for patient-centered pharmaceutical care
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Core Clinical Skills</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Patient Assessment</span>
                    <span className="text-sm text-gray-600">Medical history taking, symptom evaluation, vital signs interpretation</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Pharmacotherapy</span>
                    <span className="text-sm text-gray-600">Drug selection, dosing, monitoring, and optimization for common conditions</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Drug Information</span>
                    <span className="text-sm text-gray-600">Literature evaluation, evidence appraisal, guideline interpretation</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Clinical Communication</span>
                    <span className="text-sm text-gray-600">Patient counseling, provider communication, team collaboration</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Disease State Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Infectious Diseases</span>
                    <span className="text-sm text-gray-600">Malaria, TB, HIV/AIDS, bacterial infections, antimicrobial stewardship</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Chronic Diseases</span>
                    <span className="text-sm text-gray-600">Diabetes, hypertension, asthma, COPD, heart failure management</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Women's Health</span>
                    <span className="text-sm text-gray-600">Contraception, pregnancy, maternal health, menopause</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Pediatric Care</span>
                    <span className="text-sm text-gray-600">Childhood illnesses, immunizations, growth & development</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Professional Practice</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Documentation</span>
                    <span className="text-sm text-gray-600">SOAP notes, care plans, intervention records, outcomes tracking</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Ethics & Law</span>
                    <span className="text-sm text-gray-600">Professional ethics, pharmacy law, patient confidentiality, consent</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Quality Improvement</span>
                    <span className="text-sm text-gray-600">Error prevention, safety systems, performance metrics, QI methodologies</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Practice Management</span>
                    <span className="text-sm text-gray-600">Clinical service design, billing, workflow optimization, staff training</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Disease Training */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Specialized Disease Management Training</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Deep expertise in high-burden African diseases
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">💊</div>
                <h3 className="text-2xl">HIV/AIDS & ART Management</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Comprehensive training for pharmacist-led HIV care in sub-Saharan Africa where HIV prevalence is highest globally and pharmacist-managed ART clinics improve access and outcomes.
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>ART Pharmacotherapy</p>
                  <p className="text-gray-700">First-line, second-line, third-line regimens; drug interactions; resistance; pediatric ART</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Adherence Support</p>
                  <p className="text-gray-700">Counseling techniques, adherence monitoring, intervention strategies, patient retention</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Opportunistic Infections</p>
                  <p className="text-gray-700">Prevention, diagnosis, treatment of TB, cryptococcal meningitis, PCP, toxoplasmosis</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Monitoring & Outcomes</p>
                  <p className="text-gray-700">Viral load interpretation, CD4 monitoring, treatment failure, clinical staging</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🩺</div>
                <h3 className="text-2xl">Diabetes & Hypertension</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Training for pharmacist-led NCD clinics addressing Africa's growing diabetes and cardiovascular disease burden. Pharmacists provide accessible chronic disease management in primary care settings.
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Diabetes Management</p>
                  <p className="text-gray-700">Oral agents, insulin therapy, blood glucose monitoring, complications prevention, nutrition</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Hypertension Control</p>
                  <p className="text-gray-700">Antihypertensive selection, combination therapy, BP monitoring, lifestyle modifications</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Cardiovascular Risk</p>
                  <p className="text-gray-700">Risk assessment, lipid management, antiplatelet therapy, heart failure, stroke prevention</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2" style={{ fontWeight: 600 }}>Patient Self-Management</p>
                  <p className="text-gray-700">Self-monitoring training, diet & exercise counseling, medication adherence, goal-setting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Delivery Models */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Flexible Training Delivery</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Multiple formats accommodating working pharmacists across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="text-xl mb-2">Online Learning</h3>
              <p className="text-gray-700 mb-4">
                Self-paced e-learning modules accessible 24/7 via computer or smartphone. Video lectures, interactive case studies, quizzes, discussion forums. Ideal for remote areas and flexible scheduling.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Learn at your own pace</li>
                <li>• Access from anywhere with internet</li>
                <li>• Lower cost than in-person training</li>
                <li>• Replay content as needed</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🏫</div>
              <h3 className="text-xl mb-2">In-Person Workshops</h3>
              <p className="text-gray-700 mb-4">
                Intensive multi-day workshops with hands-on practice, role-playing, case discussions, and peer networking. Expert faculty, practical skills development, immediate feedback and mentorship.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Hands-on skills practice</li>
                <li>• Direct interaction with faculty</li>
                <li>• Peer learning and networking</li>
                <li>• Real-time Q&A and feedback</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-xl mb-2">Hybrid Programs</h3>
              <p className="text-gray-700 mb-4">
                Blended approach combining online didactic content with periodic in-person practical sessions. Online theory followed by hands-on workshops. Best of both worlds—flexibility plus practice.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Flexible online theory modules</li>
                <li>• Scheduled in-person skills sessions</li>
                <li>• Optimized learning outcomes</li>
                <li>• Reduced time away from practice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Training Impact Stories</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Pharmacist education transforming practice and patient outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-lg mb-2">ART Clinic Training, Uganda</h3>
              <p className="text-sm text-gray-700 mb-4">
                50 pharmacists complete 6-month ART management certificate program including online modules and 4-week clinical rotation. Graduates launch pharmacist-led ART clinics in rural areas previously lacking HIV care. 12-month ART retention rates: 88% (pharmacist clinics) vs. 76% (physician clinics). 3,200 patients initiated on ART. Ministry of Health expands program nationally.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Retention: 88% vs. 76% physician-led</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🩺</div>
              <h3 className="text-lg mb-2">Diabetes Training, Ghana</h3>
              <p className="text-sm text-gray-700 mb-4">
                Community pharmacy chain trains 25 pharmacists in diabetes management. Pharmacists launch in-pharmacy diabetes clinics offering HbA1c testing, medication reviews, lifestyle counseling, and insulin training. 450 patients enrolled in 18 months. Average HbA1c decrease: 1.8% over 6 months. Hospital referrals for complications reduce 35%. Insurance reimburses pharmacist consultations.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>HbA1c reduction: 1.8%</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-lg mb-2">National Training Program, Rwanda</h3>
              <p className="text-sm text-gray-700 mb-4">
                Pharmacy council mandates clinical pharmacy training for all licensed pharmacists over 3-year period. 800+ pharmacists complete hybrid program (online + regional workshops). Follow-up survey: 72% of trained pharmacists offer clinical services vs. 18% pre-training. Patient satisfaction with pharmacy services increases from 61% to 84%. Clinical pharmacy recognized in national health insurance.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Clinical services: 18% → 72%</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Advance Your Clinical Pharmacy Skills</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Explore training programs in clinical pharmacy, pharmaceutical care, and specialized disease management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                View Training Programs
              </button>
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Custom Training Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}