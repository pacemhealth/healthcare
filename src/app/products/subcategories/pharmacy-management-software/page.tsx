import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../../../../components/SEOHead';

export default function PharmacyManagementSoftwarePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Pharmacy Management Software",
    "description": "Pharmacy POS systems, inventory management, prescription software for African pharmacies",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const solutionAreas = [
    {
      name: 'Point-of-Sale (POS) Systems',
      description: 'Integrated pharmacy POS software for prescription and OTC sales, barcode scanning, receipt printing, payment processing (cash, mobile money, cards), and customer transaction management with real-time inventory updates',
      applications: ['Retail pharmacy POS', 'Hospital dispensary', 'Cashier management', 'Sales reporting']
    },
    {
      name: 'Prescription Management Software',
      description: 'Digital prescription processing systems including e-prescribing capabilities, prescription verification workflows, refill management, dosage calculations, medication history tracking, and prescription label printing',
      applications: ['E-prescribing', 'Rx verification', 'Refill tracking', 'Label printing']
    },
    {
      name: 'Patient Information Systems',
      description: 'Patient database management with medication profiles, allergy records, chronic disease tracking, medication history, adherence monitoring, and patient communication tools for SMS reminders and health education',
      applications: ['Patient profiles', 'Medication history', 'Adherence tracking', 'SMS reminders']
    },
    {
      name: 'Insurance Billing Platforms',
      description: 'Claims submission and adjudication systems for national health insurance schemes, private insurance, employer plans, and donor-funded programs with automated claims generation, benefit verification, and reimbursement tracking',
      applications: ['NHIS claims', 'Private insurance', 'Benefit verification', 'Reimbursement tracking']
    }
  ];

  const keyFeatures = [
    {
      title: 'Barcode Scanning',
      description: 'Scan medication barcodes for rapid product identification, pricing, and inventory updates reducing dispensing errors',
      icon: '🔍'
    },
    {
      title: 'Inventory Integration',
      description: 'Real-time stock level updates with every sale, automated reorder alerts, and expiry date tracking built into POS',
      icon: '📦'
    },
    {
      title: 'Multi-Branch Support',
      description: 'Centralized management for pharmacy chains with branch-level reporting, inventory transfers, and consolidated analytics',
      icon: '🏢'
    },
    {
      title: 'Mobile Access',
      description: 'Cloud-based systems accessible via smartphones and tablets enabling mobile dispensing and management on-the-go',
      icon: '📱'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Pharmacy Management Software | Digital Pharmacy Solutions | Pacem Health"
        description="Pharmacy management software including POS systems, inventory management, prescription management. Comprehensive digital pharmacy solutions for African pharmacies."
        keywords={[
          'pharmacy management software Africa',
          'pharmacy POS systems',
          'pharmacy inventory management',
          'prescription management software',
          'digital pharmacy solutions',
          'pharmacy technology Africa',
          'pharmacy software',
          'pharmacy automation'
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
            <span>Pharmacy Management Software</span>
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
              Pharmacy Management Software
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90">
              Comprehensive digital pharmacy management systems integrating point-of-sale operations, prescription processing, patient information management, and insurance billing. Modern pharmacy software addressing operational inefficiencies, medication safety, inventory control, and business intelligence needs across African pharmacy settings. Cloud-based, mobile-accessible solutions designed for contexts with varying connectivity, affordable subscription pricing models, and offline capabilities essential for reliable pharmacy operations where internet access may be intermittent.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Areas Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Solution Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl">
              Integrated pharmacy management software modules for complete operational control
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Essential Pharmacy Software Features</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Core capabilities that transform pharmacy operations
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

      {/* Manual vs Digital Comparison */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Manual vs Digital Pharmacy Operations</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              The transformation from paper-based to digital pharmacy management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Manual Paper-Based Systems</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span className="text-sm text-gray-700">Handwritten prescriptions prone to errors (illegibility, wrong dosing)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span className="text-sm text-gray-700">Manual stock cards and inventory ledgers (time-consuming, inaccurate)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span className="text-sm text-gray-700">No patient medication history visibility at point of dispensing</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span className="text-sm text-gray-700">Slow checkout process with manual price lookups and calculations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span className="text-sm text-gray-700">Insurance claims submitted manually (delays, errors, lost paperwork)</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span className="text-sm text-gray-700">Limited business intelligence (no sales analytics, profitability tracking)</span>
                </div>
              </div>
              <p className="text-xs text-gray-600"><span style={{ fontWeight: 600 }}>Result:</span> Inefficient operations, medication errors, poor inventory control, and limited growth potential</p>
            </div>

            <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white p-8 rounded-2xl">
              <h3 className="text-xl mb-4">Digital Pharmacy Management</h3>
              <div className="space-y-3 mb-6 text-white/90">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Electronic prescriptions eliminate handwriting errors and enable clinical checks</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Real-time inventory updates with every sale, automated stock alerts</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Complete patient medication history at fingertips during dispensing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Rapid barcode scanning checkout process reducing customer wait times 60%</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Electronic insurance claims submission with instant adjudication</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Comprehensive analytics on sales, inventory, profitability, and customer patterns</span>
                </div>
              </div>
              <p className="text-xs text-white/80"><span style={{ fontWeight: 600 }}>Result:</span> Efficient operations, improved safety, optimized inventory, actionable business intelligence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Africa-Specific Requirements */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Africa-Optimized Pharmacy Software</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Features essential for African pharmacy contexts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📡</div>
              <h3 className="text-xl mb-2">Offline Capability</h3>
              <p className="text-gray-700 mb-3">
                Systems must function without internet connectivity. Offline mode enables full dispensing operations during power outages or connectivity issues, with automatic cloud synchronization when connection restored.
              </p>
              <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Critical for rural and underserved areas</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl mb-2">Mobile Money Integration</h3>
              <p className="text-gray-700 mb-3">
                Direct integration with M-Pesa, MTN Mobile Money, Airtel Money, and other mobile payment platforms for seamless customer payments. Mobile money represents 50-80% of non-cash transactions in many African markets.
              </p>
              <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Essential payment method across Africa</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-xl mb-2">SMS Capabilities</h3>
              <p className="text-gray-700 mb-3">
                Bulk SMS for prescription refill reminders, medication adherence messages, promotional campaigns, and patient education. SMS remains primary communication channel with 95%+ reach compared to app-based messaging.
              </p>
              <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Most effective patient communication</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💵</div>
              <h3 className="text-xl mb-2">Affordable Pricing</h3>
              <p className="text-gray-700 mb-3">
                Subscription models starting $20-50/month make software accessible to independent pharmacies. Tiered pricing based on transaction volume or features enables entry-level adoption with upgrade paths as businesses grow.
              </p>
              <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Low barrier to entry for SME pharmacies</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-xl mb-2">Local Language Support</h3>
              <p className="text-gray-700 mb-3">
                User interface available in English, French, Portuguese, Swahili, Hausa, Amharic, and other widely-spoken African languages. Critical for staff training and reducing errors, especially for pharmacy technicians with limited English.
              </p>
              <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Improves staff adoption and accuracy</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-xl mb-2">NHIS Integration</h3>
              <p className="text-gray-700 mb-3">
                Built-in connectivity to national health insurance schemes (NHIS, NHI, etc.) for electronic benefit verification, claims submission, and reimbursement tracking. Reduces paperwork and accelerates payment cycles from 60-90 days to 30 days.
              </p>
              <p className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>Streamlines insurance billing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & Training */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">Successful Software Implementation</h2>
              <p className="text-gray-700 mb-6">
                Technology adoption requires more than just software purchase—comprehensive training, change management, and ongoing support ensure successful transition from manual to digital operations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Data Migration Support</span>
                    <span className="text-sm text-gray-600">Transfer existing patient records, inventory data, and supplier information to new system</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Hands-On Staff Training</span>
                    <span className="text-sm text-gray-600">On-site training for pharmacists, technicians, and cashiers with follow-up refresher sessions</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Parallel Run Period</span>
                    <span className="text-sm text-gray-600">2-4 week period running old and new systems simultaneously to ensure accuracy</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block" style={{ fontWeight: 600 }}>Local Technical Support</span>
                    <span className="text-sm text-gray-600">Phone/WhatsApp helpdesk in local time zones plus periodic on-site visits</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Typical Implementation Timeline</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ fontWeight: 600 }}>1</div>
                    <span style={{ fontWeight: 600 }}>Week 1: Setup & Configuration</span>
                  </div>
                  <p className="text-sm text-gray-700 ml-11">Install software, configure settings, add users, input opening inventory</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ fontWeight: 600 }}>2</div>
                    <span style={{ fontWeight: 600 }}>Week 2: Staff Training</span>
                  </div>
                  <p className="text-sm text-gray-700 ml-11">Hands-on training for all staff on core functions and workflows</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ fontWeight: 600 }}>3</div>
                    <span style={{ fontWeight: 600 }}>Weeks 3-4: Parallel Running</span>
                  </div>
                  <p className="text-sm text-gray-700 ml-11">Use both old and new systems concurrently to verify accuracy</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ fontWeight: 600 }}>4</div>
                    <span style={{ fontWeight: 600 }}>Week 5+: Full Go-Live</span>
                  </div>
                  <p className="text-sm text-gray-700 ml-11">Complete transition to digital system with ongoing support</p>
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Pharmacy Software Success Stories</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              African pharmacies transformed through digital management systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">💊</div>
              <h3 className="text-lg mb-2">Independent Pharmacy, Kenya</h3>
              <p className="text-sm text-gray-700 mb-4">
                Single-location pharmacy implements cloud-based POS system with barcode scanning. Customer checkout time drops from 8 minutes to 2 minutes. Inventory accuracy improves from 75% to 98%. Expiry waste reduces 40%. Monthly subscription cost $35 delivers 10x ROI within 6 months through improved efficiency and reduced waste.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>ROI: 10x within 6 months</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg mb-2">Hospital Pharmacy, Ghana</h3>
              <p className="text-sm text-gray-700 mb-4">
                400-bed hospital pharmacy deploys integrated management system connecting inpatient, outpatient, and insurance billing. NHIS claims processing time reduces from 45 days to 12 days. Prescription errors drop 68% through clinical alerts. System generates analytics identifying high-cost medications enabling formulary optimization saving $150,000 annually.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Savings: $150K annually</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="text-lg mb-2">Pharmacy Chain, Nigeria</h3>
              <p className="text-sm text-gray-700 mb-4">
                7-location pharmacy chain implements multi-branch management system with centralized inventory control. Stock transfers between branches automated based on demand patterns. Consolidated purchasing increases negotiating power with suppliers reducing procurement costs 18%. Real-time sales analytics inform marketing decisions improving profitability 25%.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Profit increase: 25%</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Digitize Your Pharmacy Operations</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Explore pharmacy management software solutions tailored for African pharmacy practice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/request-equipment-demo')}
                className="px-6 py-3 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors"
              >
                Schedule Software Demo
              </button>
              <button
                onClick={() => navigate('/support/digital-health-integration')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Digital Integration Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}