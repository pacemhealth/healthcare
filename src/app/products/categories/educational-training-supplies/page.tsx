import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function EducationalTrainingSuppliesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Educational & Training Supplies",
    "description": "Nursing training equipment, anatomical models, medical simulation, laboratory science education, and training consumables for African healthcare education",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'nursing-clinical-skills-training',
      name: 'Nursing & Clinical Skills Training',
      description: 'Nursing manikins, patient care models, clinical skills trainers, and hands-on practice equipment for essential nursing competencies',
      productCount: '12 product groups'
    },
    {
      id: 'anatomical-models-teaching-aids',
      name: 'Anatomical Models & Teaching Aids',
      description: 'Human anatomy models, organ models, skeletal systems, physiological charts, and visual teaching aids for medical education',
      productCount: '14 product groups'
    },
    {
      id: 'medical-simulation-task-trainers',
      name: 'Medical Simulation & Task Trainers',
      description: 'Procedural task trainers for IV access, suturing, catheterization, CPR, intubation, and surgical skills practice',
      productCount: '13 product groups'
    },
    {
      id: 'laboratory-science-education',
      name: 'Laboratory Science Education',
      description: 'Educational microscopes, basic laboratory equipment, demonstration kits, and hands-on training tools for laboratory sciences',
      productCount: '11 product groups'
    },
    {
      id: 'educational-materials-curricula',
      name: 'Educational Materials & Curricula',
      description: 'Training manuals, clinical guidelines, competency assessment tools, e-learning platforms, and standardized curricula',
      productCount: '10 product groups'
    },
    {
      id: 'training-consumables-practice-supplies',
      name: 'Training Consumables & Practice Supplies',
      description: 'Practice materials, training-specific consumables, simulation fluids, disposable training aids, and educational supply kits',
      productCount: '9 product groups'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Educational & Training Supplies | Medical Simulation & Nursing Training Africa | Pacem Health"
        description="Educational and training supplies for African healthcare education. Nursing manikins, anatomical models, medical simulation, laboratory science education, training materials, and practice supplies. Build healthcare workforce capacity."
        keywords={[
          'medical training equipment Africa',
          'nursing manikins',
          'anatomical models',
          'medical simulation',
          'healthcare education supplies',
          'clinical skills training',
          'laboratory science education Africa'
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
            <span>Educational & Training Supplies</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Essential Healthcare Products</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Educational & Training Supplies
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive healthcare education and training solutions including nursing skills trainers, anatomical models, medical simulation equipment, laboratory science education tools, curricula materials, and practice consumables. Quality training equipment building healthcare workforce capacity and competency across African nursing schools, medical colleges, and in-service training programs.
            </p>
          </div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by Subcategory</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of educational and training solutions for healthcare workforce development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                onClick={() => navigate(`/products/subcategories/${subcategory.id}`)}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 text-left group"
              >
                <h3 className="text-xl mb-2 group-hover:text-[#4B2991] transition-colors">
                  {subcategory.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{subcategory.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#7C944B]" style={{ fontWeight: 600 }}>
                    {subcategory.productCount}
                  </span>
                  <span className="text-[#4B2991] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Strengthening Africa's Healthcare Workforce</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Quality training equipment addressing critical healthcare workforce gaps across the continent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👨‍⚕️</div>
              <h3 className="text-xl mb-2">Competency-Based Training</h3>
              <p className="text-gray-700">
                Hands-on simulation and task trainers enabling practice of essential clinical skills before patient contact, improving safety, confidence, and quality of care delivery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-xl mb-2">Pre-Service Education</h3>
              <p className="text-gray-700">
                Anatomical models, training equipment, and educational resources supporting nursing schools, medical colleges, and health sciences programs preparing Africa's next generation of healthcare workers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-xl mb-2">In-Service Training</h3>
              <p className="text-gray-700">
                Continuing education materials, skills refresher training, new technology introduction, and competency assessment tools for practicing healthcare providers and facility-based training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Workforce Crisis Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Africa's Healthcare Workforce Challenge</h3>
              <p className="text-gray-700 mb-4">
                Quality healthcare education is essential to address critical workforce shortages across the continent.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Severe shortages (doctors, nurses, lab technicians)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Urban-rural distribution imbalances</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Limited pre-service training capacity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Insufficient hands-on practice opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Skills gaps in new technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Weak continuing education systems</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Training Infrastructure Solutions</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive training equipment and educational resources strengthen health professions education.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Skills labs (nursing schools, medical colleges)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Simulation centers (procedural competency)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>In-service training rooms (hospitals, health centers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Mobile training units (outreach, rural areas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>E-learning platforms (distance education)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Competency assessment systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Modalities Section */}
      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Comprehensive Training Approaches</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Blended learning combining theory, simulation, and supervised clinical practice
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">📖</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Didactic Learning</h4>
              <p className="text-sm text-gray-700">Textbooks, curricula, lectures, anatomical models, visual aids</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Skills Lab Practice</h4>
              <p className="text-sm text-gray-700">Manikins, task trainers, hands-on repetitive practice in safe environment</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Clinical Supervision</h4>
              <p className="text-sm text-gray-700">Supervised patient care, bedside teaching, mentorship, preceptorship</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Competency Assessment</h4>
              <p className="text-sm text-gray-700">OSCE, skills check-offs, simulation-based assessment, certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Strengthen Your Training Program</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Connect with our education specialists to design comprehensive training solutions for your institution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Training Solutions Inquiry
              </button>
              <button
                onClick={() => navigate('/support/request-equipment-quote')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Educational Equipment Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
