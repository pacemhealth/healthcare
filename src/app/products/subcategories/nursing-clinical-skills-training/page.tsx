import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function NursingClinicalSkillsTrainingPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Nursing Clinical Skills Training",
    "description": "Nursing manikins, patient care simulators, clinical procedure training models for nursing education across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'adult-nursing-manikins',
      name: 'Adult Nursing Care Manikins',
      products: ['Full-body adult manikins', 'Patient care simulators', 'Bed bath practice models', 'Positioning & transfer manikins', 'Male/female nursing models'],
      icon: '🛏️',
      description: 'Basic nursing care practice'
    },
    {
      id: 'pediatric-infant-models',
      name: 'Pediatric & Infant Care Models',
      products: ['Newborn baby manikins', 'Infant care models', 'Pediatric patient simulators', 'Child nursing models', 'Premature infant models'],
      icon: '👶',
      description: 'Pediatric nursing training'
    },
    {
      id: 'injection-practice',
      name: 'Injection & Venipuncture Trainers',
      products: ['IV arm trainers', 'Intramuscular injection pads', 'Subcutaneous injection models', 'Venipuncture practice arms', 'Multi-site injection trainers'],
      icon: '💉',
      description: 'Injection skills practice'
    },
    {
      id: 'wound-care-models',
      name: 'Wound Care & Dressing Models',
      products: ['Pressure ulcer models (stage I-IV)', 'Surgical wound models', 'Burn wound trainers', 'Diabetic foot ulcer models', 'Wound assessment & dressing practice'],
      icon: '🩹',
      description: 'Wound management training'
    },
    {
      id: 'catheterization-trainers',
      name: 'Catheterization Trainers',
      products: ['Male urinary catheterization', 'Female urinary catheterization', 'Suprapubic catheter models', 'Foley catheter insertion', 'Catheter care trainers'],
      icon: '🔧',
      description: 'Catheter insertion practice'
    },
    {
      id: 'vital-signs-training',
      name: 'Vital Signs & Assessment',
      products: ['Blood pressure arm trainers', 'Auscultation training systems', 'Heart & lung sound simulators', 'Pulse palpation trainers', 'Temperature measurement models'],
      icon: '🩺',
      description: 'Clinical assessment skills'
    },
    {
      id: 'maternal-health-models',
      name: 'Maternal & Reproductive Health',
      products: ['Pregnancy examination models', 'Pelvic examination trainers', 'Breast examination models', 'Contraceptive counseling aids', 'Postpartum care models'],
      icon: '🤰',
      description: 'Maternal health training'
    },
    {
      id: 'airway-management',
      name: 'Airway Management Trainers',
      products: ['Intubation head trainers', 'Bag-valve-mask practice', 'Suctioning trainers', 'Oropharyngeal airway insertion', 'Oxygen therapy models'],
      icon: '🫁',
      description: 'Airway & breathing skills'
    },
    {
      id: 'nasogastric-feeding',
      name: 'NG Tube & Feeding Trainers',
      products: ['Nasogastric tube insertion', 'NG feeding practice models', 'Gastrostomy care trainers', 'Enteral nutrition models', 'Tube position verification'],
      icon: '🍼',
      description: 'Enteral nutrition training'
    },
    {
      id: 'ostomy-care',
      name: 'Ostomy & Stoma Care',
      products: ['Colostomy care models', 'Ileostomy trainers', 'Urostomy models', 'Stoma appliance practice', 'Ostomy irrigation trainers'],
      icon: '🔄',
      description: 'Ostomy management'
    },
    {
      id: 'geriatric-care-models',
      name: 'Geriatric Care Trainers',
      products: ['Elderly patient simulators', 'Geriatric assessment models', 'Fall prevention training', 'Age-related condition models', 'Mobility assistance practice'],
      icon: '👴',
      description: 'Elderly care training'
    },
    {
      id: 'clinical-skills-kits',
      name: 'Comprehensive Skills Kits',
      products: ['Nursing skills laboratory kits', 'Portable training kits', 'Community health nurse sets', 'Emergency response kits', 'Mobile skills lab packages'],
      icon: '🎒',
      description: 'Complete training packages'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Nursing Clinical Skills Training | Patient Care Simulators | Pacem Health"
        description="Nursing clinical skills training including nursing manikins, patient care simulators, clinical procedure models. Comprehensive nursing education equipment for African nursing schools."
        keywords={[
          'nursing training Africa',
          'nursing manikins',
          'patient care simulators',
          'clinical skills training nursing',
          'nursing education equipment',
          'nursing simulation',
          'nursing practice models',
          'nursing education'
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
            <Link to="/products/division1" className="hover:underline">Essential Healthcare Products</Link>
            <span>/</span>
            <Link to="/products/categories/educational-training-supplies" className="hover:underline">
              Educational & Training Supplies
            </Link>
            <span>/</span>
            <span>Nursing & Clinical Skills Training</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Nursing & Clinical Skills Training
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive nursing education equipment including adult manikins, pediatric models, injection trainers, catheterization models, wound care trainers, vital signs assessment, and maternal health simulators. Quality training equipment enabling hands-on nursing skills practice for pre-service education and in-service competency development across African healthcare institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of nursing and clinical skills training equipment</p>
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
              onClick={() => navigate('/products/categories/educational-training-supplies')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Educational & Training Supplies
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Nursing Education in Africa</h3>
              <p className="text-gray-700 mb-4">
                Quality nursing education is foundational to achieving universal health coverage and strengthening primary healthcare.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Critical nursing shortages across the continent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Expanding nursing school enrollment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Skills lab infrastructure development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Competency-based education models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>In-service training and mentorship</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Task-shifting and task-sharing models</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Simulation-Based Learning</h3>
              <p className="text-gray-700 mb-4">
                Hands-on practice with manikins and trainers builds competence and confidence before patient contact.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Safe environment for practice and mistakes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Repetitive practice until competency achieved</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Standardized patient scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Objective skills assessment (OSCE)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reduced patient safety risks during training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Faculty demonstration and student practice</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}