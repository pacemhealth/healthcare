import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function LaboratoryScienceEducationPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Laboratory Science Education",
    "description": "Educational microscopes, lab glassware sets, teaching equipment for laboratory science education across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'educational-microscopes',
      name: 'Educational Microscopes',
      products: ['Student binocular microscopes', 'Demonstration microscopes', 'Digital microscopy systems', 'Portable microscopes', 'Multi-head teaching microscopes'],
      icon: '🔬',
      description: 'Microscopy training'
    },
    {
      id: 'lab-glassware-sets',
      name: 'Laboratory Glassware & Equipment Sets',
      products: ['Student glassware kits', 'Beakers & flasks', 'Graduated cylinders', 'Petri dishes', 'Test tubes & racks'],
      icon: '🧪',
      description: 'Basic lab equipment'
    },
    {
      id: 'specimen-preparation',
      name: 'Specimen Preparation Training',
      products: ['Slide preparation kits', 'Staining reagents (teaching)', 'Microtome practice', 'Smear preparation tools', 'Wet mount techniques'],
      icon: '🧫',
      description: 'Sample processing skills'
    },
    {
      id: 'microbiology-teaching',
      name: 'Microbiology Teaching Kits',
      products: ['Culture media preparation', 'Sterile technique trainers', 'Bacterial identification kits', 'Antibiotic sensitivity demos', 'Biosafety practice'],
      icon: '🦠',
      description: 'Microbiology education'
    },
    {
      id: 'chemistry-experiments',
      name: 'Chemistry & Biochemistry Kits',
      products: ['pH measurement sets', 'Titration equipment', 'Spectrophotometry demos', 'Enzymatic reaction kits', 'Chemical reaction sets'],
      icon: '⚗️',
      description: 'Chemistry fundamentals'
    },
    {
      id: 'hematology-teaching',
      name: 'Hematology Teaching Aids',
      products: ['Blood smear preparation', 'Differential counting practice', 'Hemoglobin measurement demos', 'Blood typing education', 'Coagulation testing kits'],
      icon: '🩸',
      description: 'Hematology training'
    },
    {
      id: 'parasitology-kits',
      name: 'Parasitology Teaching Kits',
      products: ['Malaria microscopy training', 'Parasite identification sets', 'Stool examination demos', 'Helminth life cycle models', 'Parasite slide collections'],
      icon: '🔎',
      description: 'Parasitology education'
    },
    {
      id: 'lab-safety-training',
      name: 'Laboratory Safety Training',
      products: ['PPE practice sets', 'Spill simulation kits', 'Chemical safety demos', 'Biosafety technique trainers', 'Waste disposal practice'],
      icon: '🛡️',
      description: 'Safety & biosecurity'
    },
    {
      id: 'quality-control-teaching',
      name: 'Quality Control & QA Teaching',
      products: ['QC charting exercises', 'Calibration practice', 'Proficiency testing demos', 'Standard operating procedures', 'Documentation training'],
      icon: '✅',
      description: 'Lab quality systems'
    },
    {
      id: 'molecular-biology-teaching',
      name: 'Molecular Biology Teaching Kits',
      products: ['DNA extraction demos', 'PCR principle models', 'Gel electrophoresis sets', 'Molecular technique trainers', 'Nucleic acid visualization'],
      icon: '🧬',
      description: 'Molecular techniques'
    },
    {
      id: 'lab-math-calculations',
      name: 'Laboratory Math & Calculations',
      products: ['Dilution calculation tools', 'Concentration exercises', 'Unit conversion charts', 'Reagent preparation guides', 'Statistics for lab scientists'],
      icon: '📐',
      description: 'Lab calculations'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Laboratory Science Education | Teaching Lab Equipment | Pacem Health"
        description="Laboratory science education including educational microscopes, lab glassware sets, teaching equipment. Comprehensive laboratory training equipment for African educational institutions."
        keywords={[
          'laboratory education Africa',
          'educational microscopes',
          'lab teaching equipment',
          'laboratory training',
          'lab science education',
          'teaching lab equipment',
          'laboratory education equipment',
          'lab training Africa'
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
            <span>Laboratory Science Education</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Laboratory Science Education
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive laboratory training equipment including educational microscopes, glassware sets, microbiology teaching kits, parasitology aids, chemistry experiments, and quality control training materials. Quality educational equipment supporting laboratory sciences education for medical laboratory technicians, technologists, and health sciences students across African training institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of laboratory science education equipment</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Laboratory Workforce Training</h3>
              <p className="text-gray-700 mb-4">
                Quality laboratory services depend on well-trained laboratory technicians and technologists.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Critical laboratory workforce shortages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Medical laboratory training schools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Hands-on technical skills development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Competency-based assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Continuing professional development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Certification and registration</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Practical Laboratory Training</h3>
              <p className="text-gray-700 mb-4">
                Laboratory education requires extensive hands-on practice with equipment and techniques.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Microscopy and specimen examination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sterile technique and culture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Chemical analysis and testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Equipment operation and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Quality control and troubleshooting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Result interpretation and reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}