import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function InjectionInfusionPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Injection & Infusion Supplies",
    "description": "Auto-disable syringes, safety syringes, IV cannulas, infusion sets, needles for safe injection and infusion across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'auto-disable-syringes',
      name: 'Auto-Disable (AD) Syringes',
      products: ['WHO-prequalified AD syringes', '0.05ml, 0.5ml, 1ml volumes', 'Immunization programs', 'Single-use lock mechanism', 'Prevents reuse and disease transmission'],
      icon: '💉'
    },
    {
      id: 'safety-syringes',
      name: 'Safety-Engineered Syringes',
      products: ['Retractable needle syringes', 'Shielded needle systems', 'Needlestick injury prevention', '1ml-60ml volumes', 'Pre-filled syringe compatibility'],
      icon: '🛡️'
    },
    {
      id: 'standard-syringes',
      name: 'Standard Syringes & Needles',
      products: ['Luer lock syringes (1ml-60ml)', 'Luer slip syringes', 'Hypodermic needles (18G-30G)', 'Insulin syringes (0.3ml, 0.5ml, 1ml)', 'Tuberculin syringes (1ml)'],
      icon: '💊'
    },
    {
      id: 'iv-cannulas',
      name: 'IV Cannulas & Catheters',
      products: ['Peripheral IV cannulas (14G-24G)', 'Butterfly needles', 'Safety IV catheters', 'Central venous catheters', 'PICC lines'],
      icon: '🔌'
    },
    {
      id: 'iv-administration-sets',
      name: 'IV Administration Sets',
      products: ['Gravity infusion sets', 'Blood transfusion sets', 'Burette sets (pediatric)', 'Extension tubing', 'Three-way stopcocks'],
      icon: '💧'
    },
    {
      id: 'infusion-solutions',
      name: 'Infusion Solutions & Bags',
      products: ['Normal saline (0.9% NaCl)', 'Dextrose solutions (5%, 10%)', 'Ringer\'s lactate', 'Electrolyte solutions', 'IV bags (250ml-1000ml)'],
      icon: '🧪'
    },
    {
      id: 'infusion-pumps',
      name: 'Infusion Pumps & Controllers',
      products: ['Volumetric infusion pumps', 'Syringe pumps', 'Patient-controlled analgesia (PCA) pumps', 'Gravity infusion monitors', 'Infusion pump consumables'],
      icon: '⚙️'
    },
    {
      id: 'blood-collection',
      name: 'Blood Collection Supplies',
      products: ['Vacutainer tubes (EDTA, heparin, plain)', 'Blood collection needles', 'Tourniquet bands', 'Alcohol swabs', 'Specimen labels'],
      icon: '🩸'
    },
    {
      id: 'insulin-supplies',
      name: 'Insulin Delivery Supplies',
      products: ['Insulin pen needles (4mm-12mm)', 'Insulin syringes (U-40, U-100)', 'Insulin vials & cartridges', 'Pen injectors', 'Needle disposal containers'],
      icon: '🍬'
    },
    {
      id: 'sharps-disposal',
      name: 'Sharps Disposal Systems',
      products: ['Puncture-proof sharps containers', 'Wall-mounted sharps boxes', 'Portable sharps containers', 'Needle destruction devices', 'Biohazard labels'],
      icon: '🗑️'
    },
    {
      id: 'injection-accessories',
      name: 'Injection Accessories',
      products: ['Alcohol prep pads', 'Antiseptic wipes', 'Gauze pads (2x2, 4x4)', 'Medical tape', 'Bandages'],
      icon: '🩹'
    },
    {
      id: 'specialized-injection',
      name: 'Specialized Injection Equipment',
      products: ['Spinal needles (epidural, lumbar puncture)', 'Bone marrow aspiration needles', 'Biopsy needles', 'Amniocentesis needles', 'Arterial blood gas (ABG) syringes'],
      icon: '🔬'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Injection & Infusion Supplies | Syringes & IV Equipment | Pacem Health"
        description="Injection and infusion supplies including auto-disable syringes, safety syringes, IV cannulas, infusion sets, needles. Safe injection equipment preventing disease transmission across Africa."
        keywords={[
          'injection supplies Africa',
          'auto disable syringes',
          'safety syringes Africa',
          'IV cannulas',
          'infusion sets Africa',
          'medical needles',
          'safe injection equipment',
          'syringes Africa'
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
            <span>Injection & Infusion Supplies</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Injection & Infusion Supplies
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive range of syringes, needles, IV sets, infusion pumps, and safe injection equipment designed to prevent disease transmission and ensure patient safety. From WHO-prequalified auto-disable syringes to advanced infusion systems, our products meet international standards while addressing Africa's unique injection safety challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of injection and infusion supplies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-4 group-hover:text-[#4B2991] transition-colors">
                  {group.name}
                </h3>
                <div className="space-y-2">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full py-2 bg-[#4B2991] text-white rounded-lg hover:bg-[#3A1F70] transition-colors">
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Safe Injection Practices</h3>
              <p className="text-gray-700 mb-4">
                Unsafe injection practices cause 1.7 million Hepatitis B, 315,000 Hepatitis C, and 33,800 HIV infections annually. Our WHO-compliant products prevent disease transmission.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>WHO-prequalified auto-disable syringes prevent reuse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Safety-engineered devices reduce needlestick injuries by 80%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sharps containers protect healthcare workers and communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Single-use design eliminates sterilization requirements</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Quality & Compliance</h3>
              <p className="text-gray-700 mb-4">
                All injection and infusion supplies meet stringent international quality standards with full traceability and authentication protocols.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ISO 13485 certified manufacturing facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>CE Mark and FDA approval for critical devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterility validation for every production batch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Tropical climate packaging (40°C+ stability)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Products Matter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Critical for African Healthcare</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Injection and infusion supplies address major public health challenges across the continent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🦠</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Preventing Bloodborne Infections</h4>
              <p className="text-sm text-gray-700">
                Syringe reuse remains a major transmission route for HIV, hepatitis B/C in resource-limited settings. Auto-disable syringes physically prevent reuse, protecting millions of patients from preventable infections during immunizations and medical procedures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">👷</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Healthcare Worker Safety</h4>
              <p className="text-sm text-gray-700">
                Needlestick injuries expose healthcare workers to life-threatening infections. Safety-engineered syringes with retractable needles and proper sharps disposal systems reduce injuries by 80%, protecting the frontline workforce.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>Life-Saving Fluid Resuscitation</h4>
              <p className="text-sm text-gray-700">
                IV therapy saves lives in emergencies (trauma, dehydration, sepsis). Reliable IV cannulas, administration sets, and infusion solutions ensure healthcare facilities can deliver critical fluid resuscitation when seconds count.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Training & Technical Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive support ensures safe and effective use of injection equipment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Safe Injection Training</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• WHO injection safety protocols</li>
                <li>• Auto-disable syringe use</li>
                <li>• Aseptic technique</li>
                <li>• Hand hygiene (5 Moments)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>IV Therapy Skills</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Peripheral IV insertion</li>
                <li>• Infusion rate calculation</li>
                <li>• Pump programming</li>
                <li>• Complication management</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Sharps Safety</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Never recap used needles</li>
                <li>• Sharps container placement</li>
                <li>• Needlestick injury response</li>
                <li>• Post-exposure prophylaxis</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Supply Management</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Consumption quantification</li>
                <li>• Storage and handling</li>
                <li>• Expiry tracking (FEFO)</li>
                <li>• Emergency stockpiles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Need Injection & Infusion Supplies?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us for bulk pricing, product specifications, and safe injection training support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/support/request-equipment-quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              Request Quote
            </Link>
            <Link
              to="/support/training-education"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors text-lg"
            >
              Training Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}