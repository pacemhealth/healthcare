import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function WaterQualityTreatmentPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Water Quality & Treatment",
    "description": "Household water treatment, community water systems, water quality testing for safe water access across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'household-water-treatment',
      name: 'Household Water Treatment',
      description: 'Point-of-use water purification, household filters, chlorination tablets, UV treatment systems, and ceramic water filters',
      icon: '🏠'
    },
    {
      id: 'community-water-systems',
      name: 'Community Water Systems',
      description: 'Borehole rehabilitation, piped water systems, communal water points, water storage tanks, and distribution infrastructure',
      icon: '🚰'
    },
    {
      id: 'water-testing-monitoring',
      name: 'Water Testing & Monitoring',
      description: 'Water quality test kits, microbiological testing, chemical analysis supplies, field testing equipment for safe water verification',
      icon: '🔬'
    },
    {
      id: 'chlorination-disinfection',
      name: 'Chlorination & Disinfection',
      description: 'Chlorine products, dosing equipment, disinfection systems, safe water storage, and residual chlorine monitoring',
      icon: '💧'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Water Quality & Treatment | Safe Water Solutions | Pacem Health"
        description="Water quality and treatment including household water treatment, community water systems, water testing. Comprehensive safe water solutions for African communities."
        keywords={[
          'water treatment Africa',
          'water quality testing',
          'household water purification',
          'community water systems',
          'safe water',
          'water filtration',
          'water chlorination',
          'water safety'
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
            <Link to="/products/categories/water-sanitation-hygiene" className="hover:underline">Water, Sanitation & Hygiene</Link>
            <span>/</span>
            <span>Water Quality & Treatment</span>
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
              Water Quality & Treatment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Water purification systems, chlorination supplies, water testing kits, and household water treatment solutions. Comprehensive water treatment approaches ensuring safe drinking water across African communities—from simple chlorine tablets treating household water to borehole systems serving entire villages to water quality testing verifying safety, where unsafe water drives diarrheal disease killing 400,000 African children annually and safe water is foundation of health.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete water treatment solutions from household to community scale
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">The Water Crisis in Africa</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Why safe water access is fundamental to health and development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💧</div>
              <h3 className="text-xl mb-2">Access Gap</h3>
              <p className="text-gray-700">
                418 million Africans lack basic drinking water service—drinking from unprotected wells, rivers, ponds contaminated with pathogens, chemicals, waste. Rural areas worst affected: 65% without basic water vs. 25% urban. Women and girls spend 40 billion hours annually collecting water, missing school, income opportunities. Water scarcity increasing with climate change, population growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🦠</div>
              <h3 className="text-xl mb-2">Disease Burden</h3>
              <p className="text-gray-700">
                Unsafe water drives 50% of Africa's disease burden. Diarrheal diseases kill 400,000 children annually—mostly preventable with safe water. Cholera outbreaks sicken millions. Typhoid, dysentery, hepatitis A spread through contaminated water. Parasites (guinea worm, schistosomiasis) thrive in unsafe water. Chemical contamination (fluoride, arsenic) causes chronic disease. Water-related diseases cost Africa $5 billion annually.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl mb-2">Treatment Solutions</h3>
              <p className="text-gray-700">
                Safe water achievable through multiple approaches: household water treatment (chlorination, filtration, solar disinfection) providing immediate protection, borehole/well improvement accessing groundwater, piped water systems for long-term sustainability, water quality monitoring ensuring safety. Multi-barrier approach combining source protection, treatment, safe storage most effective. Community participation ensures sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Water Treatment Challenges</h3>
              <p className="text-gray-700 mb-4">
                Barriers to safe water access in African communities
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited infrastructure—piped water reaches only 25% of rural Africans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Poor water source quality requiring treatment before consumption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate household water treatment adoption—only 5% treat water</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Weak water quality monitoring and surveillance systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Affordability barriers to treatment products and infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited maintenance capacity for water systems—40% non-functional</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Water Interventions</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based approaches to safe water access
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Household water treatment—chlorination reduces diarrhea 30-50%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Improved water sources—boreholes, protected wells, rainwater harvesting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Safe water storage preventing recontamination at household level</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Water quality testing ensuring microbiological and chemical safety</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Community water management ensuring sustainability and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Multi-barrier approach combining source, treatment, storage protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Household Water Treatment Options</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Proven point-of-use water treatment methods for household water safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💊</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Chlorination</h4>
              <p className="text-sm text-gray-700 mb-2">
                Chlorine tablets/liquid killing bacteria, viruses, some parasites. Most cost-effective: $1-3 annually per household. Requires 30 minutes contact time. Taste may reduce acceptance initially. WHO-recommended. Proven 30-50% diarrhea reduction. Best for bacterial contamination.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Most affordable option</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Ceramic Filters</h4>
              <p className="text-sm text-gray-700 mb-2">
                Porous ceramic removing bacteria, protozoa through physical filtration. Often silver-impregnated for antimicrobial effect. Long-lasting (2-5 years). No chemicals. Flow rate slow. Requires cleaning. Effective against most pathogens. Cost: $15-30.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Good for turbid water</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">☀️</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>SODIS (Solar Disinfection)</h4>
              <p className="text-sm text-gray-700 mb-2">
                UV radiation from sun in clear plastic bottles kills pathogens. Free method—no consumables. Requires 6 hours strong sunlight. Limited to small volumes (2L bottles). Ineffective in cloudy weather, turbid water. Ideal for areas with abundant sunshine, limited resources.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Zero recurring cost</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🔥</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Boiling</h4>
              <p className="text-sm text-gray-700 mb-2">
                Rolling boil for 1 minute kills all pathogens. Most effective treatment. Fuel-intensive, costly (firewood/charcoal). Time-consuming. Culturally accepted. No residual protection after boiling. Best for emergencies, outbreak response. Cost depends on fuel availability.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Most effective treatment</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Ensure Safe Water for Every Community</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to implement sustainable water treatment solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Water Systems Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Water Treatment Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}