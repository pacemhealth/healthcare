import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';
import NCDChallengeSection from '../../../../components/NCDChallengeSection';

export default function ChronicDiseaseManagementConsumablesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Chronic Disease Management Consumables",
    "description": "Diabetes monitoring supplies, blood pressure monitors, insulin delivery systems, medication adherence tools for chronic disease management across African healthcare settings",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'diabetes-monitoring',
      name: 'Diabetes Monitoring Supplies',
      products: ['Blood glucose meters (digital)', 'Glucose test strips', 'Lancets & lancing devices', 'Continuous glucose monitoring (CGM) sensors', 'Ketone test strips'],
      icon: '🩸',
      description: 'Complete blood sugar monitoring solutions'
    },
    {
      id: 'blood-pressure-monitoring',
      name: 'Blood Pressure Monitoring',
      products: ['Digital BP monitors (automatic)', 'Manual sphygmomanometers (aneroid)', 'BP cuffs (small, medium, large, thigh)', 'Stethoscopes (dual-head)', '24-hour ambulatory BP monitors'],
      icon: '🫀',
      description: 'Hypertension screening and monitoring tools'
    },
    {
      id: 'home-diagnostic-devices',
      name: 'Home Diagnostic Devices',
      products: ['Digital thermometers (oral, tympanic)', 'Pulse oximeters (fingertip)', 'Peak flow meters (asthma)', 'Body weight scales (digital)', 'BMI measurement tools'],
      icon: '🏠',
      description: 'Self-monitoring tools for home use'
    },
    {
      id: 'insulin-delivery-systems',
      name: 'Insulin Delivery Systems',
      products: ['Insulin pens (reusable, disposable)', 'Insulin pen needles (4mm-8mm)', 'Insulin syringes (U-40, U-100)', 'Insulin pump supplies', 'Cold chain insulin storage bags'],
      icon: '💉',
      description: 'Safe insulin administration supplies'
    },
    {
      id: 'medication-adherence',
      name: 'Medication Adherence Tools',
      products: ['Pill organizers (daily, weekly)', 'Medication reminder alarms', 'Blister pack dispensers', 'Medicine cups & spoons (graduated)', 'Pill crushers & splitters'],
      icon: '💊',
      description: 'Supporting treatment compliance'
    },
    {
      id: 'chronic-care-accessories',
      name: 'Chronic Care Accessories',
      products: ['Medical alert bracelets', 'Patient health diaries/logbooks', 'Sharps disposal containers (home use)', 'Alcohol swabs (sterile)', 'Cotton balls & gauze pads'],
      icon: '🧰',
      description: 'Essential accessories for chronic disease management'
    }
  ];

  const challengeData = {
    title: "Africa's Chronic Disease Monitoring Challenge",
    description: "Enabling effective home-based chronic disease management across African communities",
    metrics: [
      {
        value: '70%',
        label: 'Monitoring Gap',
        detail: 'Patients lack access to basic home monitoring devices'
      },
      {
        value: '150M',
        label: 'Hypertension',
        detail: 'Adults living with hypertension across Africa'
      },
      {
        value: '55%',
        label: 'Undiagnosed',
        detail: 'Diabetic patients remain undiagnosed in Africa'
      },
      {
        value: '40%',
        label: 'Adherence Gap',
        detail: 'Poor medication adherence due to lack of tools'
      }
    ]
  };

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Chronic Disease Management Consumables | Glucose Meters, BP Monitors & Insulin Delivery | Pacem Health"
        description="Comprehensive chronic disease management consumables including diabetes monitoring supplies, blood pressure monitors, insulin delivery systems, medication adherence tools. Quality home monitoring devices empowering NCD patients across African healthcare settings."
        keywords={[
          'chronic disease management Africa',
          'glucose meters Africa',
          'blood pressure monitors Africa',
          'insulin delivery systems',
          'diabetes monitoring supplies',
          'medication adherence tools',
          'NCD consumables Africa',
          'home monitoring devices Africa'
        ]}
        structuredData={productSchema}
      />
      {/* Breadcrumb Bar */}
      <section className="bg-[#4B2991] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/categories/medical-consumables" className="hover:underline">
              Medical Consumables
            </Link>
            <span>/</span>
            <span>Chronic Disease Management Consumables</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Chronic Disease Management Consumables
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive range of home monitoring devices and chronic care supplies empowering patients with diabetes, hypertension, and other NCDs to actively manage their conditions. From glucose meters and blood pressure monitors to medication adherence tools and insulin delivery systems, we provide quality consumables that enable effective self-care and improve treatment outcomes across African healthcare settings.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of chronic disease management supplies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{group.description}</p>
                <div className="space-y-2">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-2 bg-[#4B2991] text-white rounded-lg hover:bg-[#6B3FA8] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/medical-consumables')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Medical Consumables
            </button>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality Home Monitoring Solutions</h3>
              <p className="text-gray-700 mb-4">
                All chronic disease management consumables meet international quality standards and are designed for reliable self-monitoring in African home settings.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>CE marked or FDA approved devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>User-friendly designs for patient self-care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Durable construction for tropical climates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Long battery life and reliable accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Affordable consumables and replacement parts</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Patient Education & Support</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive training and resources to ensure effective use of chronic disease management tools across African healthcare systems.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Patient education materials (multilingual)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Healthcare provider training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Device calibration and maintenance support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community health worker training on device use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Technical support and troubleshooting assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NCD Challenge Section */}
      <NCDChallengeSection {...challengeData} />

      {/* Clinical Impact Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Enabling Better Chronic Care Outcomes</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Home monitoring and self-management tools are essential for effective chronic disease control
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Improved Glycemic Control</h4>
              <p className="text-sm text-gray-700">Regular glucose monitoring enables better diabetes management and reduces complications</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">💓</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Blood Pressure Management</h4>
              <p className="text-sm text-gray-700">Home BP monitoring improves hypertension control and prevents cardiovascular events</p>
            </div>
            <div className="bg-[#F0EBF8] p-6 rounded-xl">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Medication Adherence</h4>
              <p className="text-sm text-gray-700">Adherence tools help patients stay on track with their treatment regimens</p>
            </div>
          </div>
        </div>
      </section>

      {/* Device Types Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Key Device Categories</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Essential monitoring and management tools for chronic disease care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-4xl mb-3">🩸</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Glucose Meters</h4>
              <p className="text-sm text-gray-600">Self-monitoring blood glucose (SMBG) devices</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-4xl mb-3">🫀</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>BP Monitors</h4>
              <p className="text-sm text-gray-600">Digital and manual blood pressure devices</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-4xl mb-3">💉</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Insulin Delivery</h4>
              <p className="text-sm text-gray-600">Pens, syringes, and administration supplies</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center border-2 border-gray-200">
              <div className="text-4xl mb-3">💊</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Adherence Tools</h4>
              <p className="text-sm text-gray-600">Organizers and reminder systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Home Monitoring Best Practices</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Ensuring accurate and effective use of chronic disease management tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>📋 Patient Education</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Proper device operation and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Recording and interpreting results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>When to seek medical attention</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Safe disposal of sharps and consumables</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>🔧 Device Maintenance</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Regular calibration and quality control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Proper storage conditions (temperature, humidity)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Battery replacement and cleaning protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">•</span>
                  <span>Timely replacement of expired consumables</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}