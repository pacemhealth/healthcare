import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function AnatomicalModelsTeachingAidsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Anatomical Models & Teaching Aids",
    "description": "Professional anatomical models, educational charts, and teaching aids for medical education across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'skeletal-systems',
      name: 'Skeletal Systems & Bone Models',
      products: ['Full human skeleton (life-size)', 'Mini skeleton models', 'Articulated skull models', 'Vertebral column models', 'Individual bone sets'],
      icon: '🦴',
      description: 'Osteology & skeletal anatomy'
    },
    {
      id: 'muscular-system',
      name: 'Muscular System Models',
      products: ['Muscle anatomy models', 'Superficial muscle layers', 'Deep muscle models', 'Muscle origin/insertion', 'Functional muscle models'],
      icon: '💪',
      description: 'Myology & muscle function'
    },
    {
      id: 'cardiovascular-models',
      name: 'Cardiovascular System',
      products: ['Heart models (anatomical)', '4-chamber heart models', 'Blood vessel systems', 'Cardiac valve models', 'Circulatory system charts'],
      icon: '❤️',
      description: 'Heart & circulation'
    },
    {
      id: 'respiratory-models',
      name: 'Respiratory System Models',
      products: ['Lung models', 'Larynx & trachea models', 'Bronchial tree models', 'Diaphragm & breathing models', 'Alveoli demonstration'],
      icon: '🫁',
      description: 'Respiratory anatomy'
    },
    {
      id: 'digestive-system',
      name: 'Digestive System Models',
      products: ['GI tract models', 'Liver & gallbladder', 'Stomach & intestines', 'Pancreas models', 'Digestive process charts'],
      icon: '🫃',
      description: 'Gastrointestinal anatomy'
    },
    {
      id: 'nervous-system',
      name: 'Nervous System & Brain',
      products: ['Brain models (sectional)', 'Spinal cord models', 'Nerve pathways', 'Cranial nerve models', 'Neuron models'],
      icon: '🧠',
      description: 'Neurology & neuroanatomy'
    },
    {
      id: 'reproductive-system',
      name: 'Reproductive System Models',
      products: ['Female pelvis & reproductive organs', 'Male reproductive anatomy', 'Pregnancy development series', 'Fetal development models', 'Pelvic floor anatomy'],
      icon: '🤰',
      description: 'Reproductive anatomy'
    },
    {
      id: 'urinary-system',
      name: 'Urinary System Models',
      products: ['Kidney models (sectional)', 'Nephron models', 'Bladder & urethra', 'Male/female urinary tract', 'Renal system charts'],
      icon: '🫘',
      description: 'Renal & urinary anatomy'
    },
    {
      id: 'eye-ear-models',
      name: 'Eye & Ear Models',
      products: ['Eye anatomy models (sectional)', 'Ear anatomy models', 'Vision mechanism', 'Hearing mechanism', 'Ophthalmology models'],
      icon: '👁️',
      description: 'Special senses'
    },
    {
      id: 'skin-models',
      name: 'Integumentary System',
      products: ['Skin cross-section models', 'Hair follicle models', 'Wound healing stages', 'Burn classification', 'Dermatology models'],
      icon: '🫱',
      description: 'Skin & integument'
    },
    {
      id: 'disease-pathology',
      name: 'Disease & Pathology Models',
      products: ['Disease process models', 'Pathological organ models', 'Cancer progression', 'Infectious disease models', 'Chronic disease visualization'],
      icon: '🦠',
      description: 'Pathophysiology teaching'
    },
    {
      id: 'torso-models',
      name: 'Torso & Full-Body Models',
      products: ['Unisex torso models', 'Miniature full-body anatomy', 'Dual-sex torso models', 'Layered anatomy models', 'Transparent body models'],
      icon: '👤',
      description: 'Comprehensive anatomy'
    },
    {
      id: 'charts-posters',
      name: 'Anatomical Charts & Posters',
      products: ['Full-body system charts', 'Organ-specific posters', 'Physiological process diagrams', 'Laminated wall charts', 'Student anatomy atlases'],
      icon: '📊',
      description: 'Visual teaching aids'
    },
    {
      id: 'dental-models',
      name: 'Dental & Oral Anatomy',
      products: ['Dental typodont models', 'Jaw & teeth models', 'Tooth anatomy (sectional)', 'Periodontal disease models', 'Orthodontic models'],
      icon: '🦷',
      description: 'Oral health education'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Anatomical Models & Teaching Aids | Medical Education Equipment Africa | Pacem Health"
        description="Professional anatomical models, skeletal systems, organ models, and educational charts for medical training. High-quality teaching aids for nursing schools, medical colleges across Africa."
        keywords={[
          'anatomical models Africa',
          'medical education equipment',
          'skeleton models Africa',
          'anatomy teaching aids',
          'medical training equipment',
          'nursing education models',
          'anatomical charts Africa',
          'medical college equipment'
        ]}
        structuredData={productSchema}
      />
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
            <span>Anatomical Models & Teaching Aids</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Anatomical Models & Teaching Aids
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive anatomical education resources including skeletal systems, organ models, cardiovascular models, brain anatomy, reproductive systems, and full-body torsos. Quality 3D models, charts, and visual aids supporting human anatomy and physiology education across African medical schools, nursing programs, and health sciences curricula.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of anatomical models and teaching aids</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Anatomy Education Challenges</h3>
              <p className="text-gray-700 mb-4">
                Limited access to cadavers and anatomical resources requires high-quality teaching models.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Few medical schools with anatomy labs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Limited cadaver availability (ethical, cultural)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Large class sizes with limited resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Need for durable, reusable teaching aids</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Integration with clinical context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Student self-study and review needs</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Anatomy Teaching</h3>
              <p className="text-gray-700 mb-4">
                3D models and visual aids enhance understanding of complex anatomical relationships.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Hands-on manipulation of models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Visualization of spatial relationships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sectional anatomy and internal structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Clinical correlation with patient examination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Integration with imaging (X-ray, CT, MRI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pathology and disease visualization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
