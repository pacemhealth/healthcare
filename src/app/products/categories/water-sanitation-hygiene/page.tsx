import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function WaterSanitationHygienePage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Water, Sanitation & Hygiene (WASH)",
    "description": "Water quality treatment, sanitation infrastructure, and hygiene promotion supplies for African community health programs",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const subcategories = [
    {
      id: 'water-quality-treatment',
      name: 'Water Quality & Treatment',
      description: 'Water purification systems, chlorination supplies, water testing kits, and household water treatment solutions',
      productCount: '4 product areas'
    },
    {
      id: 'sanitation-infrastructure',
      name: 'Sanitation Infrastructure',
      description: 'Latrine construction materials, waste management systems, sanitation facilities, and community sanitation programs',
      productCount: '3 product areas'
    },
    {
      id: 'hygiene-promotion-supplies',
      name: 'Hygiene Promotion Supplies',
      description: 'Handwashing stations, soap distribution programs, menstrual hygiene products, and hygiene education materials',
      productCount: '4 product areas'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Water, Sanitation & Hygiene (WASH) | Water Treatment & Sanitation Africa | Pacem Health"
        description="WASH solutions for African communities. Water purification systems, water quality testing, sanitation infrastructure, hygiene promotion supplies, and community WASH programs. Improve health through clean water and sanitation."
        keywords={[
          'WASH programs Africa',
          'water purification systems',
          'water quality treatment',
          'sanitation infrastructure',
          'hygiene promotion',
          'community sanitation Africa',
          'water sanitation hygiene'
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
            <Link to="/products/division3" className="hover:underline">Community Health Solutions</Link>
            <span>/</span>
            <span>Water, Sanitation & Hygiene</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Community Health Solutions</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Clean Water & Healthy Communities
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Water treatment systems, sanitation infrastructure, and hygiene education programs that create the foundation for healthy, thriving communities. Comprehensive WASH solutions addressing Africa's water, sanitation, and hygiene crisis where 418 million lack basic drinking water, 779 million lack basic sanitation, and poor WASH drives 50% of malnutrition—through sustainable water systems, dignified sanitation facilities, hygiene behavior change, and integrated community-led approaches transforming health outcomes by addressing root causes of preventable disease burden.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Browse by WASH Component</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of water, sanitation, and hygiene solutions
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

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Africa's WASH Crisis</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the devastating health impact of inadequate water, sanitation, and hygiene
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💧</div>
              <h3 className="text-xl mb-2">Water Access Gap</h3>
              <p className="text-gray-700">
                418 million Africans (1 in 3) lack basic drinking water access. Women and girls walk average 30 minutes to collect water—often unsafe, contaminated with pathogens. Waterborne diseases (cholera, typhoid, dysentery) kill hundreds of thousands annually. Water scarcity perpetuates poverty, limits development, undermines health.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🚽</div>
              <h3 className="text-xl mb-2">Sanitation Deficit</h3>
              <p className="text-gray-700">
                779 million Africans lack basic sanitation. 220 million practice open defecation—contaminating environment, spreading disease, threatening dignity especially for women and girls. Inadequate sanitation drives diarrheal disease (2nd leading killer of under-five children), intestinal worms, and malnutrition. Sustainable sanitation is human right and health imperative.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👐</div>
              <h3 className="text-xl mb-2">Hygiene Behaviors</h3>
              <p className="text-gray-700">
                Only 15% of African population has handwashing facilities with soap and water at home. Handwashing at critical times (after toilet, before eating, before food prep) reduces diarrhea 40-50%, respiratory infections 20%. Simple behavior—profound impact. Hygiene education plus enabling environment transform community health.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Health Impact of WASH Improvements</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              How water, sanitation, and hygiene interventions transform health outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Disease Burden Without WASH</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#DC3545] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">✗</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>829,000 deaths annually</p>
                    <p className="text-sm text-gray-700">From diarrhea due to unsafe water, sanitation, and hygiene</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#DC3545] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">✗</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>50% of malnutrition</p>
                    <p className="text-sm text-gray-700">Poor WASH drives stunting through repeated infections and poor nutrient absorption</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#DC3545] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">✗</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>443 million school days lost</p>
                    <p className="text-sm text-gray-700">Children missing school due to water collection or water-related illness</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#DC3545] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">✗</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>Cholera, typhoid outbreaks</p>
                    <p className="text-sm text-gray-700">Epidemic-prone diseases thrive where WASH is inadequate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl mb-4">Health Gains From WASH</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>60% diarrhea reduction</p>
                    <p className="text-sm text-gray-700">Combined water, sanitation, and hygiene improvements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>30% malnutrition reduction</p>
                    <p className="text-sm text-gray-700">Fewer infections improve nutrient absorption and growth</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>25% child mortality reduction</p>
                    <p className="text-sm text-gray-700">Fewer deaths from diarrhea and improved overall health</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#4B2991] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
                  <div>
                    <p style={{ fontWeight: 600 }}>$5.50 return per $1 invested</p>
                    <p className="text-sm text-gray-700">WASH among most cost-effective health interventions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Sustainable WASH Approaches</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Community-led strategies that create lasting WASH improvements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Community-Led Total Sanitation (CLTS)</h4>
              <p className="text-sm text-gray-700">Communities identify own sanitation problems, develop solutions, declare open defecation free (ODF) status. No subsidies—community ownership. Proven approach eliminating open defecation in thousands of African villages.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Household Water Treatment</h4>
              <p className="text-sm text-gray-700">Point-of-use chlorination, filtration, solar disinfection make water safe at household level. Sustainable where piped water unavailable. Combined with safe storage (covered containers with tap) prevents recontamination.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏫</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>School WASH Programs</h4>
              <p className="text-sm text-gray-700">Schools with water, toilets (separate boys/girls), handwashing stations create healthy learning environments. Children learn hygiene behaviors, share with families. Girls' school attendance increases—menstrual hygiene management critical.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Health Facility WASH</h4>
              <p className="text-sm text-gray-700">Ensuring health facilities have functional water supply, toilets, handwashing, waste management. Foundation for infection prevention, safe delivery, quality care. Shockingly, 1 in 4 African health facilities lacks basic water service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">WASH Program Success Stories</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Community transformation through comprehensive WASH improvements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">🚽</div>
              <h3 className="text-lg mb-2">CLTS Scale-Up, Ethiopia</h3>
              <p className="text-sm text-gray-700 mb-4">
                National CLTS program reaches 60 million people, 96,000 communities. 50,000+ communities achieve ODF status. Open defecation decreases from 38% to 7% nationally. Diarrhea incidence drops 42%. Child stunting reduced 15%. Demonstrates power of behavior change without massive infrastructure investment—communities building own solutions.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Open defecation: 38% → 7%</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">💧</div>
              <h3 className="text-lg mb-2">Water Chlorination, Kenya</h3>
              <p className="text-sm text-gray-700 mb-4">
                Social marketing program promotes household water chlorination (Waterguard product). 4.5 million people adopt chlorination. Cholera cases drop 50% in program areas. Diarrhea in children under-5 decreases 37%. Cost-effective intervention ($0.50/person/year) with massive health impact. Scaled to multiple African countries.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Diarrhea reduction: 37%</div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="text-3xl mb-3">👐</div>
              <h3 className="text-lg mb-2">Handwashing Program, Ghana</h3>
              <p className="text-sm text-gray-700 mb-4">
                National handwashing promotion—mass media, community "handwashing ambassadors," subsidized soap, school programs. Handwashing with soap at critical times increases from 14% to 52%. Diarrhea incidence drops 38%. School absenteeism decreases 43%. Simple behavior—profound impact on community health and child development.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Handwashing: 14% → 52%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Build the Foundation for Healthy Communities</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement comprehensive water, sanitation, and hygiene programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                WASH Program Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Explore WASH Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
