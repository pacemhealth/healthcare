import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function HygienePromotionSuppliesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Hygiene Promotion Supplies",
    "description": "Handwashing facilities, soap distribution, menstrual hygiene management, behavior change materials for hygiene promotion across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'handwashing-facilities',
      name: 'Handwashing Facilities & Supplies',
      description: 'Handwashing stations, tippy taps, soap dispensers, hand sanitizers, and community handwashing infrastructure',
      icon: '🧼'
    },
    {
      id: 'soap-distribution-programs',
      name: 'Soap Distribution Programs',
      description: 'Bulk soap procurement, soap-making supplies, detergent products, and subsidized soap distribution systems',
      icon: '🧴'
    },
    {
      id: 'menstrual-hygiene-management',
      name: 'Menstrual Hygiene Management',
      description: 'Sanitary pads, menstrual cups, reusable cloth pads, disposal facilities, and menstrual health education materials',
      icon: '🎀'
    },
    {
      id: 'hygiene-behavior-change',
      name: 'Hygiene Behavior Change Materials',
      description: 'Hygiene education toolkits, handwashing promotion materials, community hygiene campaigns, and behavior change programs',
      icon: '📚'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Hygiene Promotion Supplies | Handwashing & Sanitation | Pacem Health"
        description="Hygiene promotion supplies including handwashing facilities, soap distribution, menstrual hygiene management, behavior change materials. Supporting hygiene practices and disease prevention across African communities."
        keywords={[
          'hygiene promotion supplies Africa',
          'handwashing facilities',
          'soap distribution Africa',
          'menstrual hygiene management',
          'hygiene behavior change',
          'sanitation supplies Africa',
          'handwashing stations',
          'hygiene education materials'
        ]}
        structuredData={productSchema}
      />
      <section className="bg-[#7C944B] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/division3" className="hover:underline">Community Health Solutions</Link>
            <span>/</span>
            <Link to="/products/categories/water-sanitation-hygiene" className="hover:underline">Water, Sanitation & Hygiene</Link>
            <span>/</span>
            <span>Hygiene Promotion Supplies</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Water, Sanitation & Hygiene</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Hygiene Promotion Supplies
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Handwashing stations, soap distribution programs, menstrual hygiene products, and hygiene education materials. Life-saving hygiene interventions preventing disease transmission—from simple handwashing with soap reducing diarrhea 40% and respiratory infections 20% to menstrual hygiene management enabling girls' education to community hygiene campaigns creating behavioral norms, where hygiene practices are foundation of disease prevention yet only 25% of Africans have handwashing facilities with soap at home.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete hygiene promotion solutions from handwashing to education
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">The Power of Handwashing</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why handwashing with soap is the most cost-effective health intervention
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🦠</div>
              <h3 className="text-xl mb-2">Disease Prevention</h3>
              <p className="text-gray-700">
                Handwashing with soap at critical times (after toilet, before eating, before food preparation) prevents disease transmission. Reduces diarrheal disease 40%, acute respiratory infections 20%, soil-transmitted helminths 50%. Hands are primary vehicle transmitting pathogens from feces to mouth. Simple act of handwashing breaks transmission cycle. Most cost-effective health intervention: pennies prevent diseases costing dollars to treat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-xl mb-2">Current Practice Gap</h3>
              <p className="text-gray-700">
                Only 25% of African households have handwashing facility with soap and water. Even where facilities exist, handwashing rates low at critical times: 15% wash hands with soap after defecation, 12% before eating. Knowledge-practice gap: people know importance but don't practice consistently. Barriers: soap expense, lack of facilities, time, social norms. Behavior change interventions essential.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💧</div>
              <h3 className="text-xl mb-2">Enabling Handwashing</h3>
              <p className="text-gray-700">
                Handwashing adoption requires facilities enabling behavior: water availability, soap access, convenient location. Low-cost handwashing stations (tippy taps, jerry cans with taps) costing $2-10 enable practice. Community handwashing facilities at public places, schools, health facilities create enabling environment. Subsidized soap for poorest households removes economic barrier. Infrastructure plus behavior change achieve sustained practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Hygiene Practice Barriers</h3>
              <p className="text-gray-700 mb-4">
                Challenges to consistent hygiene behavior adoption
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited access to handwashing facilities at household level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Soap affordability barriers for poorest households</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Water scarcity limiting handwashing practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Cultural norms and habits not prioritizing handwashing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate menstrual hygiene management facilities and products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited hygiene education and behavior change programming</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Hygiene Interventions</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based approaches to hygiene behavior change
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Low-cost handwashing stations enabling convenient practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Soap availability through subsidies, local production, marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Hygiene behavior change campaigns using emotional drivers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>School hygiene programs creating lifelong habits in children</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Menstrual hygiene management in schools enabling girls' education</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community hygiene promotion leveraging social norms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Critical Handwashing Times</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Key moments when handwashing with soap prevents disease transmission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🚽</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>After Using Toilet</h4>
              <p className="text-sm text-gray-700 mb-2">
                Most critical time—fecal contamination on hands transmits diarrheal disease, cholera, typhoid, parasites. Yet only 15% wash hands with soap after defecation globally. Hands harbor 100+ million bacteria after toilet use. Washing with soap removes 99.9% of pathogens. Single most important handwashing moment.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Prevents fecal-oral transmission</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👶</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>After Cleaning Child</h4>
              <p className="text-sm text-gray-700 mb-2">
                Cleaning child's bottom, disposing feces contaminates hands. Without handwashing, pathogens spread to food, surfaces, other children. Critical for preventing diarrheal disease in infants and young children who are most vulnerable. Caregivers must wash hands after every diaper change, cleaning child.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Protects vulnerable children</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🍳</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Before Food Preparation</h4>
              <p className="text-sm text-gray-700 mb-2">
                Contaminated hands during cooking spread pathogens to food consumed by entire family. Handwashing before and during food preparation prevents foodborne illness. Especially critical when handling ready-to-eat foods, foods for children. Protect family health by washing hands before cooking.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Prevents food contamination</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🍽️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Before Eating</h4>
              <p className="text-sm text-gray-700 mb-2">
                Hands touch contaminated surfaces throughout day. Eating with unwashed hands transfers pathogens directly to mouth. Children particularly at risk—play in dirt, touch animals, then eat. Handwashing before meals prevents ingestion of fecal pathogens. Critical for children under 5.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Breaks disease transmission</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Menstrual Hygiene Management</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Ensuring dignity and enabling education for girls and women
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl mb-3">The Challenge</h3>
                <p className="text-gray-700 mb-4">
                  Millions of African girls and women lack access to menstrual hygiene products, private facilities with water for changing, and safe disposal systems. Consequences devastating:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545]">•</span>
                    <span>Girls miss 4-5 school days monthly, falling behind academically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545]">•</span>
                    <span>1 in 10 girls drops out of school at puberty due to menstruation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545]">•</span>
                    <span>Use of unhygienic materials (rags, newspapers, leaves) causes infections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545]">•</span>
                    <span>Stigma and shame surrounding menstruation limits participation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DC3545]">•</span>
                    <span>Lack of private facilities forcing girls to stay home during periods</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-3">Comprehensive Solutions</h3>
                <p className="text-gray-700 mb-4">
                  Effective menstrual hygiene management requires integrated approach addressing products, facilities, education, and stigma:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4B2991]">•</span>
                    <span>Affordable menstrual products—disposable pads, reusable cloth pads, menstrual cups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4B2991]">•</span>
                    <span>School facilities—private toilets with water, soap, bins for disposal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4B2991]">•</span>
                    <span>Menstrual health education breaking stigma, teaching hygiene</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4B2991]">•</span>
                    <span>Safe disposal systems—incinerators, bins, sanitary waste management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4B2991]">•</span>
                    <span>Teacher training enabling supportive, stigma-free school environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Promote Hygiene, Prevent Disease</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement comprehensive hygiene promotion programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Hygiene Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Hygiene Supplies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}