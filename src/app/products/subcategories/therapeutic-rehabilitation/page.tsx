import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function TherapeuticRehabilitationPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Therapeutic & Rehabilitation",
    "description": "Parallel bars, exercise equipment, therapy tables, rehabilitation devices for physical therapy across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'parallel-bars',
      name: 'Parallel Bars & Gait Training',
      products: ['Fixed parallel bars', 'Adjustable height parallel bars', 'Folding parallel bars (portable)', 'Platform parallel bars', 'Pediatric parallel bars'],
      icon: '🚶',
      description: 'Ambulation training equipment'
    },
    {
      id: 'treadmills-gait',
      name: 'Treadmills & Gait Systems',
      products: ['Rehabilitation treadmills', 'Body-weight support treadmills', 'Medical treadmills (handrails)', 'Cardiac rehab treadmills', 'Gait analysis systems'],
      icon: '🏃',
      description: 'Walking rehabilitation'
    },
    {
      id: 'exercise-bikes',
      name: 'Exercise Bikes & Ergometers',
      products: ['Upright exercise bikes', 'Recumbent bikes', 'Arm ergometers (upper body)', 'Total body ergometers', 'Cardiac rehab bikes'],
      icon: '🚴',
      description: 'Cardiovascular conditioning'
    },
    {
      id: 'therapy-stairs-steps',
      name: 'Therapy Stairs & Steps',
      products: ['Physical therapy stairs', 'Adjustable step platforms', 'Balance steps', 'Corner stairs', 'Pediatric therapy steps'],
      icon: '🪜',
      description: 'Stair training equipment'
    },
    {
      id: 'balance-boards',
      name: 'Balance & Proprioception',
      products: ['Balance boards', 'Wobble boards', 'Balance discs', 'Foam balance pads', 'BOSU balance trainers'],
      icon: '⚖️',
      description: 'Balance training'
    },
    {
      id: 'traction-equipment',
      name: 'Traction Equipment',
      products: ['Cervical traction devices', 'Lumbar traction tables', 'Manual traction', 'Overhead traction frames', 'Pelvic traction belts'],
      icon: '🔗',
      description: 'Spinal decompression'
    },
    {
      id: 'cpm-machines',
      name: 'CPM Machines',
      products: ['Knee CPM machines', 'Ankle CPM devices', 'Shoulder CPM', 'Hip CPM', 'Elbow/wrist CPM'],
      icon: '🦵',
      description: 'Continuous passive motion'
    },
    {
      id: 'therapy-tables-mats',
      name: 'Therapy Tables & Mats',
      products: ['Treatment plinths', 'Hi-lo treatment tables', 'Floor mats (exercise)', 'Foam wedges', 'Positioning bolsters'],
      icon: '🛏️',
      description: 'Therapy surfaces'
    },
    {
      id: 'resistance-bands',
      name: 'Resistance & Strengthening',
      products: ['Resistance bands', 'Exercise tubing', 'Hand weights (dumbbells)', 'Ankle weights', 'Resistance pulleys'],
      icon: '💪',
      description: 'Strength training tools'
    },
    {
      id: 'shoulder-pulleys',
      name: 'Shoulder Pulleys & Ladders',
      products: ['Over-door shoulder pulleys', 'Wall-mounted pulleys', 'Shoulder ladder (wall)', 'Finger ladders', 'Shoulder wheels'],
      icon: '🎡',
      description: 'Upper extremity rehab'
    },
    {
      id: 'tens-units',
      name: 'TENS & Electrical Stimulation',
      products: ['TENS units (pain relief)', 'Neuromuscular electrical stimulation', 'Interferential therapy', 'Russian stimulation', 'Electrode pads'],
      icon: '⚡',
      description: 'Electrotherapy devices'
    },
    {
      id: 'ultrasound-therapy',
      name: 'Therapeutic Ultrasound',
      products: ['Ultrasound therapy units', 'Combination therapy units', 'Ultrasound gel', 'Sound heads (various sizes)', 'Portable ultrasound devices'],
      icon: '🔊',
      description: 'Deep tissue therapy'
    },
    {
      id: 'heat-cold-therapy',
      name: 'Heat & Cold Therapy',
      products: ['Hot packs (moist heat)', 'Cold packs (gel)', 'Paraffin wax baths', 'Heat lamps (infrared)', 'Hydrocollator units'],
      icon: '🔥',
      description: 'Thermal modalities'
    },
    {
      id: 'hand-therapy',
      name: 'Hand Therapy Equipment',
      products: ['Therapy putty (various resistances)', 'Hand grip exercisers', 'Finger extension devices', 'Peg boards', 'Hand exercise balls'],
      icon: '✋',
      description: 'Fine motor rehabilitation'
    },
    {
      id: 'occupational-therapy',
      name: 'Occupational Therapy Equipment',
      products: ['ADL training equipment', 'Simulated kitchen units', 'Dressing training boards', 'Fine motor skill kits', 'Cognitive therapy tools'],
      icon: '🏠',
      description: 'Activities of daily living'
    },
    {
      id: 'pediatric-therapy',
      name: 'Pediatric Therapy Equipment',
      products: ['Pediatric therapy balls', 'Sensory integration equipment', 'Developmental positioning', 'Crawling tracks', 'Pediatric swings'],
      icon: '👶',
      description: 'Pediatric rehabilitation'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Therapeutic & Rehabilitation Equipment | Physical Therapy | Pacem Health"
        description="Therapeutic and rehabilitation equipment including parallel bars, exercise equipment, therapy tables. Comprehensive physical therapy equipment for African healthcare facilities."
        keywords={[
          'rehabilitation equipment Africa',
          'therapeutic equipment',
          'physical therapy equipment',
          'parallel bars',
          'therapy tables',
          'rehabilitation devices',
          'physiotherapy equipment',
          'rehab equipment'
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
            <Link to="/products/categories/durable-medical-equipment" className="hover:underline">
              Durable Medical Equipment
            </Link>
            <span>/</span>
            <span>Therapeutic & Rehabilitation Equipment</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Therapeutic & Rehabilitation Equipment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive rehabilitation solutions including parallel bars, exercise equipment, CPM machines, traction devices, electrotherapy, therapeutic ultrasound, and physical/occupational therapy tools. Quality equipment supporting patient recovery, functional restoration, and independence across African healthcare rehabilitation programs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of therapeutic and rehabilitation equipment</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Rehabilitation in African Healthcare</h3>
              <p className="text-gray-700 mb-4">
                Physical and occupational therapy services are critical for trauma, stroke, and chronic disease management.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Post-traumarehabilitation (injuries, accidents)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Stroke recovery and mobility restoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Post-surgical rehabilitation (orthopedic)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Chronic pain management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pediatric developmental delays</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Evidence-Based Therapy</h3>
              <p className="text-gray-700 mb-4">
                Quality rehabilitation equipment supports evidence-based therapy protocols and improved outcomes.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Progressive resistance training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Functional mobility training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Task-specific training protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Objective outcome measurement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Patient education and home exercise programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}