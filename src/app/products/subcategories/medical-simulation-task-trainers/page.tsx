import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function MedicalSimulationTaskTrainersPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Medical Simulation & Task Trainers",
    "description": "IV trainers, suturing models, airway management, clinical procedure simulators for medical skills training across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'iv-vascular-access',
      name: 'IV & Vascular Access Trainers',
      products: ['Peripheral IV insertion arms', 'Central venous line trainers', 'Intraosseous access models', 'PICC line insertion', 'Ultrasound-guided IV practice'],
      icon: '💉',
      description: 'Vascular access skills'
    },
    {
      id: 'suturing-trainers',
      name: 'Suturing & Wound Closure',
      products: ['Suture practice pads', 'Wound closure trainers', 'Laceration models', 'Stapling practice', 'Skin suturing kits'],
      icon: '🪡',
      description: 'Surgical closure practice'
    },
    {
      id: 'cpr-resuscitation',
      name: 'CPR & Resuscitation Manikins',
      products: ['Adult CPR manikins', 'Child CPR manikins', 'Infant CPR manikins', 'AED training units', 'Choking rescue trainers'],
      icon: '❤️‍🩹',
      description: 'Life-saving skills'
    },
    {
      id: 'intubation-airway',
      name: 'Intubation & Airway Management',
      products: ['Adult intubation heads', 'Pediatric intubation trainers', 'Difficult airway simulators', 'Video laryngoscopy practice', 'Cricothyrotomy trainers'],
      icon: '🫁',
      description: 'Advanced airway skills'
    },
    {
      id: 'childbirth-delivery',
      name: 'Childbirth & Delivery Simulators',
      products: ['Birthing simulators', 'Vaginal delivery models', 'Breech delivery trainers', 'Newborn resuscitation manikins', 'Postpartum hemorrhage models'],
      icon: '👶',
      description: 'Obstetric skills training'
    },
    {
      id: 'surgical-procedures',
      name: 'Surgical Procedure Trainers',
      products: ['Laparoscopic trainers (box trainers)', 'Surgical knot-tying boards', 'Appendectomy models', 'Cesarean section trainers', 'Hernia repair models'],
      icon: '🔪',
      description: 'Surgical skills practice'
    },
    {
      id: 'trauma-emergency',
      name: 'Trauma & Emergency Medicine',
      products: ['Chest tube insertion', 'FAST ultrasound trainers', 'Trauma assessment manikins', 'Burn management models', 'Hemorrhage control trainers'],
      icon: '🚑',
      description: 'Emergency procedures'
    },
    {
      id: 'arthrocentesis-procedures',
      name: 'Arthrocentesis & Joint Procedures',
      products: ['Knee arthrocentesis models', 'Shoulder injection trainers', 'Hip injection models', 'Joint aspiration practice', 'Corticosteroid injection training'],
      icon: '🦵',
      description: 'Joint procedures'
    },
    {
      id: 'lumbar-puncture',
      name: 'Lumbar Puncture & Spinal Procedures',
      products: ['Lumbar puncture simulators', 'Spinal anesthesia trainers', 'Epidural injection models', 'CSF collection practice', 'Spinal anatomy models'],
      icon: '🧠',
      description: 'Spinal procedures'
    },
    {
      id: 'gynecological-procedures',
      name: 'Gynecological Procedure Trainers',
      products: ['Pelvic examination models', 'IUD insertion trainers', 'Pap smear practice', 'Cervical biopsy models', 'Speculum examination trainers'],
      icon: '🏥',
      description: 'Women\'s health procedures'
    },
    {
      id: 'dental-procedures',
      name: 'Dental Procedure Trainers',
      products: ['Dental extraction models', 'Tooth restoration trainers', 'Local anesthesia injection', 'Dental hygiene practice heads', 'Periodontal procedure models'],
      icon: '🦷',
      description: 'Dental skills practice'
    },
    {
      id: 'ultrasound-training',
      name: 'Ultrasound Training Phantoms',
      products: ['Abdominal ultrasound phantoms', 'OB/GYN ultrasound models', 'Vascular access ultrasound', 'FAST exam trainers', 'Echocardiography phantoms'],
      icon: '📡',
      description: 'Ultrasound skills'
    },
    {
      id: 'high-fidelity-simulators',
      name: 'High-Fidelity Patient Simulators',
      products: ['Computer-controlled manikins', 'Vital signs simulation', 'Programmable scenarios', 'Team-based simulation', 'Debriefing systems'],
      icon: '🤖',
      description: 'Advanced simulation'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Medical Simulation & Task Trainers | Clinical Skills Training | Pacem Health"
        description="Medical simulation and task trainers including IV trainers, suturing models, airway management simulators. Comprehensive clinical procedure training equipment for African medical education."
        keywords={[
          'medical simulation Africa',
          'task trainers',
          'clinical skills training',
          'IV trainers',
          'suturing models',
          'airway management simulators',
          'procedure training',
          'medical education equipment'
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
            <span>Medical Simulation & Task Trainers</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Medical Simulation & Task Trainers
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive procedural training equipment including IV access trainers, suturing pads, CPR manikins, intubation heads, childbirth simulators, surgical task trainers, trauma models, and high-fidelity patient simulators. Quality simulation equipment enabling safe, repetitive practice of critical medical procedures across African medical education and healthcare training programs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of medical simulation and task training equipment</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Simulation-Based Medical Education</h3>
              <p className="text-gray-700 mb-4">
                Procedural simulation improves patient safety by enabling practice before real patient encounters.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Safe environment for learning from mistakes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Deliberate practice of high-risk procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Team-based training (crisis scenarios)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Standardized training and assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reduced patient harm during training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Competency-based progression</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Essential Procedural Skills for Africa</h3>
              <p className="text-gray-700 mb-4">
                Simulation training focuses on high-impact, life-saving procedures relevant to African healthcare.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Obstetric emergencies (PPH, shoulder dystocia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Neonatal resuscitation (preventing birth asphyxia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Emergency airway management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Trauma care and hemorrhage control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Essential surgical procedures (C-section, laparotomy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Point-of-care ultrasound (FAST, OB)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}