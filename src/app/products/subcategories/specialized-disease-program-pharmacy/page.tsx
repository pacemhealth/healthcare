import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function SpecializedDiseaseProgramPharmacyPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Specialized Disease Program Pharmacy",
    "description": "HIV/ART clinic pharmacy, TB DOTS programs, malaria programs, chronic disease pharmacy services for specialized disease programs across Africa",
    "provider": {"@type": "Organization", "name": "Pacem Health"}
  };

  const programAreas = [
    {
      name: 'ART Clinics (HIV Pharmacy)',
      description: 'Comprehensive pharmacy services for antiretroviral therapy programs including medication dispensing, adherence counseling, viral load monitoring, drug interaction screening, PMTCT services, and pediatric ART formulation management',
      applications: ['Adult ART clinics', 'Pediatric ART', 'PMTCT programs', 'Adherence support']
    },
    {
      name: 'TB Pharmacy Programs (DOTS & MDR-TB)',
      description: 'Directly Observed Therapy Short-course (DOTS) supervision, multidrug-resistant TB medication management, contact tracing support, treatment completion monitoring, and adverse effect management for complex TB regimens',
      applications: ['DOTS supervision', 'MDR-TB treatment', 'XDR-TB programs', 'TB-HIV coinfection']
    },
    {
      name: 'Maternal & Child Health Pharmacy',
      description: 'Specialized pharmacy services for antenatal care, PMTCT integration, postnatal medication support, pediatric dosing and formulations, immunization programs, and family planning services tailored to maternal-child populations',
      applications: ['Antenatal clinics', 'PMTCT', 'Pediatric dosing', 'Immunization programs']
    },
    {
      name: 'Chronic Disease Clinics (NCD Pharmacy)',
      description: 'Long-term medication management for non-communicable diseases including diabetes, hypertension, cardiovascular disease, asthma/COPD, and chronic kidney disease with refill systems, therapeutic monitoring, and lifestyle counseling',
      applications: ['Diabetes management', 'Hypertension control', 'Cardiovascular care', 'Respiratory disease']
    },
    {
      name: 'Oncology Pharmacy Services',
      description: 'Specialized chemotherapy preparation in sterile compounding facilities, cytotoxic medication handling protocols, supportive care medications, pain management, palliative care pharmacy, and patient/family education for cancer treatment',
      applications: ['Chemotherapy compounding', 'Supportive care', 'Pain management', 'Palliative pharmacy']
    }
  ];

  const keyFeatures = [
    {
      title: 'Adherence Counseling',
      description: 'Pharmacist-led adherence support identifies barriers, provides education, and implements strategies to improve medication compliance',
      icon: '💬'
    },
    {
      title: 'Multi-Month Dispensing',
      description: '3-6 month medication refills for stable patients reduce clinic visits, improve retention in care, and decrease pharmacy workload',
      icon: '📦'
    },
    {
      title: 'Community Distribution',
      description: 'Decentralized drug distribution points and community pharmacy networks bring medications closer to patients in rural areas',
      icon: '🏘️'
    },
    {
      title: 'Treatment Monitoring',
      description: 'Viral load, CD4 count, drug resistance testing, and therapeutic drug monitoring guide treatment optimization',
      icon: '📊'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Specialized Disease Program Pharmacy | HIV, TB, Malaria Programs | Pacem Health"
        description="Specialized disease program pharmacy including HIV/ART clinics, TB DOTS programs, malaria programs, chronic disease management. Disease-specific pharmaceutical services for African healthcare."
        keywords={[
          'HIV pharmacy Africa',
          'ART clinic pharmacy',
          'TB pharmacy programs',
          'DOTS pharmacy',
          'malaria program pharmacy',
          'disease program pharmacy',
          'specialized pharmacy services',
          'chronic disease pharmacy'
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
            <span>Specialized Disease Program Pharmacy</span>
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
              Specialized Disease Program Pharmacy
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Dedicated pharmacy services for major disease burden programs across Africa including HIV/ART clinics, TB treatment programs (DOTS and MDR-TB), maternal and child health pharmacy, chronic disease management clinics, and oncology services. These specialized pharmacy operations require disease-specific knowledge, adherence support strategies, long-term medication management systems, and integration with vertical health programs—addressing the unique pharmaceutical needs of Africa's priority health conditions where pharmacist expertise directly impacts treatment success, retention in care, and population health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Program Areas Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Program Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl">
              Specialized pharmacy services for Africa's priority disease programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {programAreas.map((program, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-lg transition-all">
                <h3 className="text-xl mb-3">{program.name}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <div className="space-y-2">
                  <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Key Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {program.applications.map((app, idx) => (
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Program Pharmacy Innovations</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Modern approaches to disease program pharmaceutical care
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

      {/* HIV/ART Pharmacy Deep Dive */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">HIV/ART Pharmacy Services</h2>
              <p className="text-gray-700 mb-6">
                With 25+ million people living with HIV in sub-Saharan Africa, ART pharmacy services are foundational to epidemic control. Specialized pharmacy support ensures optimal treatment outcomes and retention in care.
              </p>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>🩺 First-Line & Second-Line ART</h4>
                  <p className="text-sm text-gray-700">TDF/3TC/DTG, TDF/3TC/EFV, AZT-based regimens, pediatric formulations, and second-line protease inhibitor-based therapy</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>👶 Pediatric ART & PMTCT</h4>
                  <p className="text-sm text-gray-700">Age-appropriate formulations, weight-based dosing, PMTCT integration, infant prophylaxis, and adolescent transition support</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>💊 Adherence Support</h4>
                  <p className="text-sm text-gray-700">Pill burden reduction, side effect management, adherence counseling, appointment scheduling, and SMS reminder systems</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  <h4 className="mb-2" style={{ fontWeight: 600 }}>📊 Viral Load Monitoring</h4>
                  <p className="text-sm text-gray-700">Pharmacy-coordinated VL testing, enhanced adherence counseling for virologic failure, and regimen switch management</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <h3 className="text-xl md:text-2xl mb-4">Differentiated Service Delivery (DSD)</h3>
              <div className="space-y-4 text-white/90">
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>📦 Multi-Month Dispensing (MMD)</p>
                  <p className="text-sm">Stable patients receive 3-6 month ART refills, reducing clinic visits from 12 to 2-4 per year. Improves retention, reduces lost-to-follow-up, and decreases pharmacy workload</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>🏘️ Community ART Distribution</p>
                  <p className="text-sm">Community drug distribution points (CDDPs), community pharmacies, and outreach teams bring ART closer to patients in remote areas</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>👥 Community ART Groups</p>
                  <p className="text-sm">Patient-led medication pick-up groups reduce individual clinic visits while maintaining peer support and adherence monitoring</p>
                </div>
                <div>
                  <p className="mb-2" style={{ fontWeight: 600 }}>📱 Appointment Spacing</p>
                  <p className="text-sm">Fast-track pharmacy refills for stable patients separate pharmacy visits from clinical consultations, decongesting facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TB Pharmacy Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">TB Pharmacy Programs</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized pharmaceutical support for tuberculosis treatment success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-xl mb-2">DOTS Implementation</h3>
              <p className="text-gray-700 mb-3">
                Directly Observed Therapy Short-course requires trained treatment supporters who watch patients swallow medications daily during intensive phase (2 months) and 3x/week during continuation phase (4 months).
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Community DOTS support</li>
                <li>• Facility-based DOT</li>
                <li>• Contact tracing</li>
                <li>• Treatment card management</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-xl mb-2">MDR/XDR-TB Treatment</h3>
              <p className="text-gray-700 mb-3">
                Multidrug-resistant and extensively drug-resistant TB require complex 18-24 month regimens with second-line injectable agents, fluoroquinolones, and newer agents (bedaquiline, delamanid, linezolid).
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Injectable administration</li>
                <li>• Adverse effect monitoring</li>
                <li>• Drug interaction screening</li>
                <li>• Therapeutic drug monitoring</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-xl mb-2">TB-HIV Coinfection</h3>
              <p className="text-gray-700 mb-3">
                30-50% of TB patients in high HIV prevalence settings are coinfected, requiring coordinated TB and ART pharmacy services with attention to drug interactions (especially rifampicin) and overlapping toxicities.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Rifampicin-ART interactions</li>
                <li>• Co-trimoxazole prophylaxis</li>
                <li>• Timing of ART initiation</li>
                <li>• IRIS management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NCD Pharmacy Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">NCD Pharmacy Clinics</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Chronic disease pharmacy services for Africa's growing NCD burden
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl mb-4">The NCD Challenge in Africa</h3>
                <p className="text-gray-700 mb-4">
                  Non-communicable diseases (diabetes, hypertension, cardiovascular disease) are rising rapidly across Africa, often diagnosed late with poor control. Lifelong medication adherence is challenging with:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545] mt-1">✗</span>
                    <span>Medication stockouts in public sector</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545] mt-1">✗</span>
                    <span>High out-of-pocket costs for chronic medications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545] mt-1">✗</span>
                    <span>Poor medication adherence and therapeutic control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545] mt-1">✗</span>
                    <span>Limited patient education on chronic disease management</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-4">Pharmacy-Led NCD Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block" style={{ fontWeight: 600 }}>NCD Pharmacy Clubs</span>
                      <span className="text-sm text-gray-600">Group refill visits with peer support, medication adherence strategies, and lifestyle counseling</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block" style={{ fontWeight: 600 }}>Multi-Month Prescribing</span>
                      <span className="text-sm text-gray-600">3-6 month refills for stable patients reduce clinic burden and improve adherence</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block" style={{ fontWeight: 600 }}>Pharmacist-Led Monitoring</span>
                      <span className="text-sm text-gray-600">BP monitoring, glucose testing, medication review, and dose titration by protocol</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block" style={{ fontWeight: 600 }}>Community Pharmacy Partnerships</span>
                      <span className="text-sm text-gray-600">Private pharmacies provide refills and monitoring, expanding access beyond public facilities</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Program Implementation Examples</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Disease program pharmacy services transforming outcomes across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🩺</div>
              <h3 className="text-lg mb-2">National ART Program Scale-Up</h3>
              <p className="text-sm text-gray-700 mb-4">
                Country-wide implementation of 6-month multi-month dispensing for stable ART patients. 70% of 1.2 million patients on treatment transitioned to 6MMD. Clinic visits reduced from 2.4 million to 800,000 annually. 12-month retention in care improves from 82% to 91%. Pharmacy workload more manageable.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Impact: 91% retention vs. 82% baseline</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-lg mb-2">Community-Based TB DOTS</h3>
              <p className="text-sm text-gray-700 mb-4">
                District health office trains 200 community health workers as DOTS supporters for remote villages. CHWs supervise daily TB medication intake, monitor for side effects, and report treatment interruptions. TB treatment success rate increases from 73% to 89%, meeting WHO targets. Lost-to-follow-up drops from 15% to 4%.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Impact: 89% treatment success rate</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="text-lg mb-2">NCD Pharmacy Club Model</h3>
              <p className="text-sm text-gray-700 mb-4">
                Regional hospital establishes diabetes/hypertension pharmacy clubs with 30-patient groups meeting quarterly for medication refills, peer support, and pharmacist education. Medication adherence improves from 45% to 78%. BP control (140/90) increases from 38% to 64%. HbA1c {'<'}7% achieved in 52% vs. 31% at baseline.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Impact: 78% adherence vs. 45% baseline</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Strengthen Disease Program Pharmacy</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Partner with our specialists to design and implement disease-specific pharmacy services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/request-equipment-quote')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                Request Program Assessment
              </button>
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Disease Program Training
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}