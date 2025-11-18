import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function TrainingCapacityBuildingPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Training & Capacity Building",
    "description": "Community health worker training, health education curricula, professional development programs for African health workforce",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'community-health-worker-training',
      name: 'Community Health Worker Training',
      description: 'CHW curriculum packages, competency-based training modules, field practice guides, and standardized training systems for community health workforce',
      icon: '👩‍⚕️'
    },
    {
      id: 'health-education-curricula',
      name: 'Health Education Curricula',
      description: 'Topic-specific training packages, facilitator guides, participant materials, and standardized curricula for health education programs',
      icon: '📖'
    },
    {
      id: 'train-the-trainer-programs',
      name: 'Train-the-Trainer Programs',
      description: 'Master trainer development, training-of-trainers (TOT) methodology, supervision and mentoring systems, and cascade training frameworks',
      icon: '🎓'
    },
    {
      id: 'knowledge-management-systems',
      name: 'Knowledge Management Systems',
      description: 'Digital learning platforms, knowledge repositories, continuing education systems, and quality improvement frameworks for sustained capacity',
      icon: '💻'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Training & Capacity Building | Health Workforce Development | Pacem Health"
        description="Training and capacity building including community health worker training, health education curricula, professional development. Comprehensive health workforce development for African health systems."
        keywords={[
          'health training Africa',
          'capacity building health',
          'CHW training',
          'health workforce development',
          'health education',
          'professional development health',
          'training programs Africa',
          'health capacity building'
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
            <Link to="/products/division3" className="hover:underline">Community Health Solutions</Link>
            <span>/</span>
            <Link to="/products/categories/health-education-awareness" className="hover:underline">Health Education & Awareness</Link>
            <span>/</span>
            <span>Training & Capacity Building</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Health Education & Awareness</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Training & Capacity Building
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Community health worker training, health education curricula, train-the-trainer programs, and knowledge management systems. Comprehensive capacity-building solutions creating sustainable health workforce at community level—from standardized CHW training packages ensuring consistent competencies across regions to digital learning platforms enabling continuous professional development to cascade training systems rapidly scaling capacity where trained community health workers become master trainers, and community capacity becomes self-sustaining.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete training and capacity-building solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {productGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => navigate(`/products/product-groups/${group.id}`)}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 md:p-8 hover:border-[#4B2991] hover:shadow-xl transition-all duration-300 text-left group"
              >
                <div className="text-4xl mb-4">{group.icon}</div>
                <h3 className="text-xl mb-3 group-hover:text-[#4B2991] transition-colors">
                  {group.name}
                </h3>
                <p className="text-gray-600 mb-4">{group.description}</p>
                <span className="text-[#4B2991] group-hover:translate-x-2 transition-transform inline-block">
                  Explore Products →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Building Sustainable Health Capacity</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why investing in community health workforce training transforms health systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-xl mb-2">Community Health Workers: The Last Mile</h3>
              <p className="text-gray-700">
                CHWs are frontline of African health systems—reaching 80% of population inaccessible to facility-based care. 1 million+ CHWs provide basic health services, health education, disease surveillance, referrals. Well-trained CHWs reduce child mortality 20%, improve maternal health, increase immunization coverage. CHW programs cost-effective: $1.50 per capita annually.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-xl mb-2">Training Quality Matters</h3>
              <p className="text-gray-700">
                CHW effectiveness depends on training quality. Too often: inadequate initial training (1-2 weeks), no standardization, limited supervision, no continuing education. Result: low competency, high attrition, poor performance. Comprehensive training (6+ weeks competency-based), ongoing supervision, refresher training, clear career pathways improve performance 3x, retention 2x.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-xl mb-2">Sustainable Capacity Through Systems</h3>
              <p className="text-gray-700">
                One-time training insufficient—capacity degrades without reinforcement. Sustainable systems needed: standardized curricula, trained master trainers enabling cascade training, supervision/mentoring structures, digital learning platforms for continuous education, knowledge management systems, performance monitoring. Systems approach creates self-sustaining capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Capacity Building Challenges</h3>
              <p className="text-gray-700 mb-4">
                Barriers to effective health workforce training at scale
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Lack of standardized, evidence-based training curricula</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Insufficient master trainers to scale training programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited supervision and mentoring post-training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>No continuing education or refresher training systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>High attrition due to poor motivation and career development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Weak competency assessment and quality assurance</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Training Approaches</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based strategies for sustainable capacity building
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Competency-based training with clear learning objectives and assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Standardized national curricula ensuring consistent quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Train-the-trainer approach creating cadre of master trainers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>On-the-job coaching and supportive supervision systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Digital learning platforms enabling continuous education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Performance monitoring with regular competency assessments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Comprehensive CHW Training Model</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Integrated approach to community health worker capacity building
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📘</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Pre-Service Training</h4>
              <p className="text-sm text-gray-700 mb-3">
                6-8 weeks competency-based initial training. Core modules: maternal-child health, infectious diseases, nutrition, health promotion, basic clinical skills. Theory plus hands-on practice. Competency assessment before certification.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Standardized curriculum</div>
                <div>• Hands-on practice</div>
                <div>• Competency certification</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Mentoring & Supervision</h4>
              <p className="text-sm text-gray-700 mb-3">
                Monthly supportive supervision by trained supervisors. On-the-job coaching, clinical case review, problem-solving. Peer learning groups. Continuous quality improvement. Performance data review and action planning.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Monthly supervision</div>
                <div>• Clinical mentoring</div>
                <div>• Peer learning</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Continuing Education</h4>
              <p className="text-sm text-gray-700 mb-3">
                Quarterly refresher training on new topics/protocols. Annual competency assessment. Digital learning modules for self-paced learning. Knowledge updates via SMS/app. Communities of practice for ongoing learning.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Quarterly refreshers</div>
                <div>• Digital learning</div>
                <div>• Annual assessment</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Performance Monitoring</h4>
              <p className="text-sm text-gray-700 mb-3">
                Regular data collection on service delivery, health outcomes. Performance dashboards identifying training needs. Competency reassessment. Recognition and rewards for high performers. Certification renewal linked to performance.
              </p>
              <div className="text-xs text-gray-600">
                <div>• Performance tracking</div>
                <div>• Outcome monitoring</div>
                <div>• Recognition systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Build Sustainable Community Health Capacity</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement comprehensive training and capacity-building programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Training Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/training-education')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Training Materials
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}