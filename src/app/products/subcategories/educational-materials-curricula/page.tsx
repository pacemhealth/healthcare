import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function EducationalMaterialsCurriculaPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Educational Materials & Curricula",
    "description": "Clinical textbooks, training manuals, competency assessment tools, clinical guidelines, e-learning platforms for health worker education across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'clinical-textbooks',
      name: 'Clinical Textbooks & Reference Materials',
      products: ['Medical textbooks (major specialties)', 'Nursing fundamentals texts', 'Anatomy & physiology references', 'Clinical guidelines (WHO, national)', 'Medical dictionaries'],
      icon: '📚',
      description: 'Core educational texts'
    },
    {
      id: 'training-manuals',
      name: 'Training Manuals & Protocols',
      products: ['IMCI training materials', 'ETAT (Emergency Triage)', 'Essential surgical care manuals', 'Infection prevention protocols', 'Maternal & newborn care guides'],
      icon: '📖',
      description: 'Standardized training guides'
    },
    {
      id: 'competency-assessment',
      name: 'Competency Assessment Tools',
      products: ['Skills check-off lists', 'OSCE examination materials', 'Clinical evaluation forms', 'Competency assessment frameworks', 'Certification exam prep'],
      icon: '✅',
      description: 'Skills evaluation'
    },
    {
      id: 'clinical-guidelines',
      name: 'Clinical Practice Guidelines',
      products: ['Essential medicines lists', 'Standard treatment guidelines (STG)', 'Disease management protocols', 'Diagnostic algorithms', 'Clinical decision support'],
      icon: '📋',
      description: 'Evidence-based protocols'
    },
    {
      id: 'elearning-platforms',
      name: 'E-Learning & Digital Platforms',
      products: ['Learning management systems (LMS)', 'Online course content', 'Video training modules', 'Interactive case studies', 'Mobile learning apps'],
      icon: '💻',
      description: 'Digital education'
    },
    {
      id: 'continuing-education',
      name: 'Continuing Professional Development',
      products: ['CPD modules', 'Clinical update materials', 'Refresher course content', 'Specialty training programs', 'Journal access subscriptions'],
      icon: '🎓',
      description: 'Lifelong learning'
    },
    {
      id: 'patient-education',
      name: 'Patient Education Materials',
      products: ['Health education flipcharts', 'Patient counseling guides', 'Community health education', 'Visual aids (pictorial)', 'Multilingual resources'],
      icon: '🗣️',
      description: 'Health literacy tools'
    },
    {
      id: 'curriculum-development',
      name: 'Curriculum Development Resources',
      products: ['Curriculum frameworks', 'Learning objectives banks', 'Teaching guides (for faculty)', 'Lesson plan templates', 'Educational assessment tools'],
      icon: '📝',
      description: 'Faculty development'
    },
    {
      id: 'specialty-training',
      name: 'Specialty Training Materials',
      products: ['Obstetric emergency training (EmONC)', 'Surgical skills training (ATLS, ALSO)', 'Neonatal resuscitation (HBB)', 'Mental health training (mhGAP)', 'Palliative care education'],
      icon: '🏥',
      description: 'Specialized training programs'
    },
    {
      id: 'multimedia-resources',
      name: 'Multimedia Teaching Resources',
      products: ['Educational videos (procedures)', 'Anatomical software', 'Virtual patient simulators', 'Medical illustration libraries', 'Presentation slides & lectures'],
      icon: '🎬',
      description: 'Visual & interactive content'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Educational Materials & Curricula | Medical Textbooks & Training | Pacem Health"
        description="Health education materials including clinical textbooks, training manuals, competency assessment tools, clinical guidelines, e-learning platforms. Quality educational resources strengthening health workforce capacity across African training institutions."
        keywords={[
          'medical education materials Africa',
          'clinical textbooks Africa',
          'health training manuals',
          'nursing education materials',
          'medical curricula Africa',
          'e-learning health Africa',
          'clinical guidelines Africa',
          'health worker training materials'
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
            <span>Educational Materials & Curricula</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Educational Materials & Curricula
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive educational content including clinical textbooks, training manuals, competency assessment tools, clinical guidelines, e-learning platforms, continuing education materials, and standardized curricula. Quality educational resources supporting evidence-based health professions education and in-service training across African healthcare institutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of educational materials and curricula</p>
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
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Standardized Training Programs</h3>
              <p className="text-gray-700 mb-4">
                WHO and internationally-recognized training programs ensure evidence-based, quality healthcare education.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>IMCI (Integrated Management of Childhood Illness)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>EmONC (Emergency Obstetric & Newborn Care)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>HBB (Helping Babies Breathe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ETAT (Emergency Triage Assessment & Treatment)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>IMAI (Integrated Management of Adolescent & Adult Illness)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Safe Surgery & Anesthesia training</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Digital Learning & Access</h3>
              <p className="text-gray-700 mb-4">
                E-learning platforms expand access to quality education, especially in remote areas.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Distance learning for remote healthcare workers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Mobile-based training modules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Blended learning (online + in-person)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Self-paced continuing education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Virtual simulation and case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Assessment and competency tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}