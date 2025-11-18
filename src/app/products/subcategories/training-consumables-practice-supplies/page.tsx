import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function TrainingConsumablesPracticeSuppliesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Training Consumables & Practice Supplies",
    "description": "Practice gloves, simulation fluids, training disposables for hands-on medical training across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'practice-gloves',
      name: 'Practice Gloves & PPE',
      products: ['Examination gloves (training grade)', 'Sterile gloves (practice)', 'Gowns & aprons', 'Face masks', 'Eye protection'],
      icon: '🧤',
      description: 'PPE for training'
    },
    {
      id: 'simulation-fluids',
      name: 'Simulation Fluids & Blood Substitutes',
      products: ['Simulated blood (manikin use)', 'IV practice fluids', 'Amniotic fluid substitute', 'Fake blood (trauma simulation)', 'Lubricants for trainers'],
      icon: '💧',
      description: 'Training fluids'
    },
    {
      id: 'practice-medications',
      name: 'Practice Medications & Labels',
      products: ['Empty vials & ampoules', 'Practice IV bags', 'Medication labels (training)', 'Simulated drug packaging', 'Dosage calculation aids'],
      icon: '💊',
      description: 'Medication practice'
    },
    {
      id: 'suture-materials',
      name: 'Suture Practice Materials',
      products: ['Practice suture thread', 'Suture needles (training)', 'Needle holders', 'Forceps & scissors', 'Suture removal kits'],
      icon: '🪡',
      description: 'Suturing supplies'
    },
    {
      id: 'iv-practice-supplies',
      name: 'IV Practice Consumables',
      products: ['Practice IV catheters', 'Tourniquets', 'Alcohol swabs', 'Gauze & tape', 'IV tubing & connectors'],
      icon: '💉',
      description: 'IV access supplies'
    },
    {
      id: 'wound-dressing-practice',
      name: 'Wound Care Practice Supplies',
      products: ['Practice dressings', 'Bandages & gauze', 'Adhesive tape', 'Wound cleansing supplies', 'Compression wraps'],
      icon: '🩹',
      description: 'Dressing materials'
    },
    {
      id: 'specimen-collection-training',
      name: 'Specimen Collection Practice',
      products: ['Blood collection tubes (empty)', 'Urine collection cups', 'Stool containers', 'Swabs & transport media', 'Specimen labels'],
      icon: '🧪',
      description: 'Collection supplies'
    },
    {
      id: 'airway-consumables',
      name: 'Airway Management Consumables',
      products: ['Practice endotracheal tubes', 'Laryngoscope blades (training)', 'Bag-valve masks', 'Oropharyngeal airways', 'Suctioning catheters'],
      icon: '🫁',
      description: 'Airway supplies'
    },
    {
      id: 'training-kits',
      name: 'Complete Training Supply Kits',
      products: ['Nursing skills practice kits', 'Emergency response kits', 'Childbirth simulation supplies', 'Surgical skills kits', 'Laboratory practice sets'],
      icon: '🎒',
      description: 'Ready-to-use kits'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Training Consumables & Practice Supplies | Medical Training | Pacem Health"
        description="Training consumables and practice supplies including practice gloves, simulation fluids, training disposables. Comprehensive training materials for African medical education."
        keywords={[
          'training consumables Africa',
          'practice supplies',
          'medical training materials',
          'training disposables',
          'simulation supplies',
          'practice medical supplies',
          'training equipment consumables',
          'medical education supplies'
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
            <span>Training Consumables & Practice Supplies</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Training Consumables & Practice Supplies
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive training consumables including practice gloves, simulation fluids, suture materials, IV practice supplies, wound dressing materials, and complete training kits. Cost-effective practice supplies enabling repetitive hands-on skills training without depleting clinical supplies across African healthcare education programs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of training consumables and practice supplies</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Training vs. Clinical Supplies</h3>
              <p className="text-gray-700 mb-4">
                Dedicated training supplies prevent depletion of clinical stocks and enable repetitive practice.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Training-grade (lower cost, reusable where possible)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Protects clinical supply chain from training use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Allows repetitive practice without waste concerns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Dedicated skills lab inventory management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Bulk purchasing for training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Safe disposal of practice materials</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Skills Lab Resource Management</h3>
              <p className="text-gray-700 mb-4">
                Effective skills lab management ensures sustainable training supply availability.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Forecasting based on student enrollment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Stock level monitoring and replenishment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Reusable vs. single-use supply decisions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Student sign-out systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Budget allocation for consumables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Inventory tracking and cost control</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}