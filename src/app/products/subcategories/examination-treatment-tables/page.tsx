import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function ExaminationTreatmentTablesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Examination & Treatment Tables",
    "description": "Examination tables, gynecology tables, physical therapy tables, pediatric exam tables, treatment couches for patient care across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'examination-tables',
      name: 'Examination Tables',
      products: ['Manual examination tables', 'Electric examination tables', 'Adjustable-height exam tables', 'Pediatric exam tables', 'Stirrup attachments'],
      icon: '🏥',
      description: 'General patient examination'
    },
    {
      id: 'gynecology-tables',
      name: 'Gynecology & Obstetric Tables',
      products: ['Gynecology examination chairs', 'Obstetric examination tables', 'Stirrup leg supports', 'Adjustable backrest', 'Pelvic examination tables'],
      icon: '🤰',
      description: 'Women\'s health examination'
    },
    {
      id: 'physical-therapy-tables',
      name: 'Physical Therapy Tables',
      products: ['Treatment plinths (manual)', 'Electric treatment tables', 'Hi-lo therapy tables', 'Traction therapy tables', 'Mat platforms'],
      icon: '💪',
      description: 'Rehabilitation treatment'
    },
    {
      id: 'massage-therapy-tables',
      name: 'Massage & Spa Tables',
      products: ['Stationary massage tables', 'Portable massage tables', 'Adjustable face cradles', 'Bolsters and positioning aids', 'Waterproof covers'],
      icon: '💆',
      description: 'Therapeutic massage'
    },
    {
      id: 'pediatric-exam-tables',
      name: 'Pediatric Examination Tables',
      products: ['Infant examination tables', 'Toddler exam tables', 'Pediatric scales (integrated)', 'Pull-out step stools', 'Safety straps'],
      icon: '👶',
      description: 'Child examination'
    },
    {
      id: 'procedure-chairs',
      name: 'Procedure Chairs',
      products: ['Minor surgery chairs', 'ENT examination chairs', 'Dental-style procedure chairs', 'Blood draw chairs', 'Adjustable treatment chairs'],
      icon: '💺',
      description: 'Minor procedures'
    },
    {
      id: 'tilt-tables',
      name: 'Tilt & Imaging Tables',
      products: ['Tilt tables (neuro assessment)', 'X-ray imaging tables', 'Fluoroscopy tables', 'Radiolucent tables', 'C-arm compatible tables'],
      icon: '📐',
      description: 'Specialized positioning'
    },
    {
      id: 'surgery-tables',
      name: 'Surgery & Operating Tables',
      products: ['Manual operating tables', 'Electric operating tables', 'Orthopedic tables (fracture)', 'Ophthalmic surgery tables', 'C-section tables'],
      icon: '⚕️',
      description: 'Surgical procedures'
    },
    {
      id: 'dressing-trolleys',
      name: 'Dressing & Procedure Trolleys',
      products: ['Stainless steel dressing trolleys', '2-tier procedure trolleys', '3-tier instrument trolleys', 'Dressing carts with drawers', 'Mobile procedure stations'],
      icon: '🛒',
      description: 'Procedure supply carts'
    },
    {
      id: 'chiropractic-tables',
      name: 'Chiropractic & Manipulation Tables',
      products: ['Drop-section tables', 'Flexion-distraction tables', 'Elevation tables', 'Portable chiropractic tables', 'Adjustable head pieces'],
      icon: '🦴',
      description: 'Spinal manipulation'
    },
    {
      id: 'table-accessories',
      name: 'Table Accessories',
      products: ['Examination table paper rolls', 'Disposable table covers', 'Arm boards', 'Positioning cushions', 'Step stools'],
      icon: '🔧',
      description: 'Table add-ons'
    },
    {
      id: 'bariatric-exam-tables',
      name: 'Bariatric Examination Tables',
      products: ['Heavy-duty exam tables (500+ lbs)', 'Extra-wide tables (30"+)', 'Reinforced frames', 'Power lift tables', 'Bariatric step stools'],
      icon: '💪',
      description: 'High weight capacity'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Examination & Treatment Tables | Medical Exam Furniture | Pacem Health"
        description="Examination and treatment tables including medical exam tables, gynecology tables, physical therapy tables, pediatric exam tables. Quality patient examination furniture for healthcare facilities across Africa."
        keywords={[
          'examination tables Africa',
          'medical exam tables',
          'gynecology tables Africa',
          'physical therapy tables',
          'pediatric exam tables',
          'treatment tables Africa',
          'medical furniture Africa',
          'patient examination equipment'
        ]}
        structuredData={productSchema}
      />
      {/* Breadcrumb Bar */}
      <section className="bg-[#0033A0] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/division1" className="hover:underline">Essential Healthcare Products</Link>
            <span>/</span>
            <Link to="/products/categories/durable-medical-equipment" className="hover:underline">
              Durable Medical Equipment
            </Link>
            <span>/</span>
            <span>Examination & Treatment Tables</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Examination & Treatment Tables
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Professional examination and treatment tables including general exam tables, gynecology tables, physical therapy plinths, procedure chairs, and surgical tables. Quality, durable tables supporting patient examination, diagnosis, and treatment across African outpatient and inpatient facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of examination and treatment tables</p>
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

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/durable-medical-equipment')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Durable Medical Equipment
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Table Selection Criteria</h3>
              <p className="text-gray-700 mb-4">
                Choosing appropriate examination tables depends on clinical specialty and patient population.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Manual vs. electric height adjustment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Weight capacity for patient population</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Positioning requirements (backrest, leg sections)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Upholstery (easy-clean, durable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Accessibility features (step stools, low height)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Infection Control</h3>
              <p className="text-gray-700 mb-4">
                Proper table cleaning and maintenance prevent cross-contamination between patients.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Seamless upholstery (no cracks for bacteria)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Disinfectant-resistant materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Disposable table paper or covers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular cleaning between patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Waterproof upholstery for fluid spills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}