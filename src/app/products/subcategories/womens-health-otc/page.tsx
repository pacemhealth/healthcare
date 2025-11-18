import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function WomensHealthOTCPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Women's Health OTC Products",
    "description": "Menstrual hygiene products, menstrual relief, vaginal health products for women's healthcare across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'menstrual-hygiene',
      name: 'Menstrual Hygiene Products',
      products: ['Sanitary pads (various absorbencies)', 'Panty liners', 'Tampons', 'Menstrual cups (reusable)', 'Period underwear', 'Reusable cloth pads', 'Menstrual discs', 'Disposal bags'],
      icon: '🩸',
      description: 'Safe, affordable menstrual management solutions'
    },
    {
      id: 'menstrual-relief',
      name: 'Menstrual Pain Relief & PMS',
      products: ['Ibuprofen/naproxen (anti-inflammatory)', 'Acetaminophen', 'PMS symptom relief tablets', 'Magnesium supplements', 'Vitamin B6', 'Heat patches/pads', 'Herbal teas (ginger, chamomile)', 'Cramp relief topicals'],
      icon: '💊',
      description: 'Managing menstrual cramps, PMS, and period discomfort'
    },
    {
      id: 'vaginal-health',
      name: 'Vaginal Health & Infection Treatment',
      products: ['Antifungal creams (clotrimazole, miconazole) for yeast infections', 'Vaginal probiotic suppositories', 'pH-balanced feminine washes', 'Metronidazole gel (bacterial vaginosis)', 'Boric acid suppositories', 'Anti-itch creams', 'Vaginal moisturizers/lubricants'],
      icon: '🌸',
      description: 'Treating and preventing vaginal infections and discomfort'
    },
    {
      id: 'pregnancy-tests',
      name: 'Pregnancy Tests & Fertility Products',
      products: ['Home pregnancy test kits (various sensitivities)', 'Early detection pregnancy tests', 'Ovulation predictor kits', 'Fertility tracking aids', 'Basal thermometers', 'Digital pregnancy tests', 'Multi-pack pregnancy tests'],
      icon: '🤰',
      description: 'Pregnancy detection and fertility awareness'
    },
    {
      id: 'prenatal-supplements',
      name: 'Prenatal & Women\'s Vitamins',
      products: ['Prenatal multivitamins', 'Folic acid 400-800mcg', 'Iron + folic acid combinations', 'Calcium for women', 'Women\'s multivitamins', 'Omega-3/DHA prenatal', 'Postnatal/lactation vitamins'],
      icon: '🌟',
      description: 'Nutritional support for women\'s health and pregnancy'
    },
    {
      id: 'urinary-health',
      name: 'Urinary Tract Health',
      products: ['Cranberry supplements/tablets', 'D-Mannose powder/tablets', 'Urinary pain relief (phenazopyridine)', 'Urinary alkalinizers', 'Probiotic supplements for urinary health', 'Urinary test strips', 'Herbal UTI support'],
      icon: '💧',
      description: 'Prevention and relief of urinary tract infections'
    },
    {
      id: 'intimate-care',
      name: 'Intimate Care & Hygiene',
      products: ['pH-balanced feminine washes', 'Unscented intimate wipes', 'Vaginal moisturizers', 'Personal lubricants (water-based, silicone)', 'Perineal spray/foam', 'Intimate deodorant sprays', 'Post-birth care products', 'Barrier creams'],
      icon: '🧴',
      description: 'Gentle, safe intimate hygiene and comfort products'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Women's Health OTC Products | Feminine Care | Pacem Health"
        description="Women's health OTC products including menstrual hygiene products, menstrual relief, vaginal health solutions. Essential feminine care for African women."
        keywords={[
          'women\'s health products Africa',
          'menstrual hygiene Africa',
          'feminine care products',
          'vaginal health',
          'menstrual relief',
          'women\'s OTC products',
          'feminine hygiene Africa',
          'women\'s healthcare'
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
            <Link to="/products/categories/over-the-counter-products" className="hover:underline">
              Over-the-Counter Products
            </Link>
            <span>/</span>
            <span>Women's Health OTC</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#7C944B] to-[#5A6D35] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Women's Health OTC Products
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Essential over-the-counter products supporting women's health, dignity, and well-being across Africa. From addressing period poverty with affordable menstrual hygiene solutions to treating common vaginal infections in tropical climates, we provide safe, accessible products that empower African women to manage their reproductive and intimate health with confidence, privacy, and cultural sensitivity.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of women's health and wellness products</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#7C944B] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl mb-2 group-hover:text-[#7C944B] transition-colors">
                  {group.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{group.description}</p>
                <div className="space-y-1 mb-4">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#7C944B] text-xs mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7F40] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/over-the-counter-products')}
              className="text-[#7C944B] hover:underline"
            >
              ← Back to Over-the-Counter Products
            </button>
          </div>
        </div>
      </section>

      {/* Period Poverty & Menstrual Health Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Addressing Period Poverty in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Breaking barriers to menstrual health and education
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>The Challenge: Period Poverty Across Africa</h4>
                <p className="text-gray-700 mb-3">
                  Millions of African girls and women lack access to affordable menstrual products, leading to school absenteeism, workplace challenges, infections from unsafe alternatives, and loss of dignity. In many communities, menstruation remains taboo, limiting education and access to proper hygiene management.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Statistics:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 1 in 10 African girls miss school during menstruation</li>
                      <li>• Many use unsafe alternatives: cloth, newspaper, leaves, mattress stuffing</li>
                      <li>• Increased risk of infections from poor hygiene materials</li>
                      <li>• Stigma and shame surrounding menstruation limits discussion</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Barriers to Access:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• High cost of disposable pads (unaffordable for many families)</li>
                      <li>• Limited availability in rural areas</li>
                      <li>• Cultural taboos preventing purchase/discussion</li>
                      <li>• Lack of menstrual health education</li>
                      <li>• Inadequate sanitation facilities (schools, workplaces)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Affordable Disposable Options</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Budget-friendly sanitary pad brands</li>
                <li>• Multi-pack discounts to reduce per-unit cost</li>
                <li>• Government/NGO subsidy programs</li>
                <li>• School distribution initiatives</li>
                <li>• Tax exemptions on menstrual products (some countries)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Reusable Solutions</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Reusable cloth pads:</strong> Washable, 2-5 year lifespan, cost-effective long-term</li>
                <li>• <strong>Menstrual cups:</strong> 5-10 year lifespan, economical, eco-friendly</li>
                <li>• <strong>Period underwear:</strong> Washable, leak-proof, multi-year use</li>
                <li>• Education on proper cleaning and drying (sunlight kills bacteria)</li>
                <li>• Initial investment higher but saves money over time</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Education & Empowerment</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Menstrual health education in schools</li>
                <li>• Community awareness programs</li>
                <li>• Breaking stigma and taboos</li>
                <li>• Teaching girls about menstrual cycle, hygiene</li>
                <li>• Male engagement (fathers, brothers, partners)</li>
                <li>• Improving sanitation facilities (private toilets, water access)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Women's Health Issues Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Common Women's Health Issues in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conditions frequently managed with OTC products
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🌸</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Vaginal Yeast Infections (Candidiasis)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Very common, especially in hot, humid tropical climates
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Symptoms:</strong> Itching, burning, thick white discharge (cottage cheese-like), painful urination/intercourse
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• Antifungal creams (clotrimazole, miconazole) - 1, 3, or 7-day courses</li>
                <li>• Vaginal suppositories/tablets</li>
                <li>• External anti-itch cream for relief</li>
                <li>• Complete full course even if symptoms improve</li>
              </ul>
              <p className="text-sm text-gray-700">
                <strong>Prevention:</strong> Cotton underwear, avoid tight clothing, good hygiene, keep area dry
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💧</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Urinary Tract Infections (UTIs)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common in women (shorter urethra, anatomy)
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Symptoms:</strong> Frequent/urgent urination, burning, cloudy/bloody urine, pelvic pain
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Support:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• Cranberry supplements (may help prevent recurrence)</li>
                <li>• D-Mannose powder/tablets (prevents bacteria adhesion)</li>
                <li>• Urinary pain relief (phenazopyridine) for symptom relief</li>
                <li>• <strong>Note:</strong> See doctor for antibiotics - UTIs need prescription treatment</li>
              </ul>
              <p className="text-sm text-gray-700">
                <strong>Prevention:</strong> Drink plenty of water, urinate after sex, wipe front to back, avoid holding urine
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🩸</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Menstrual Cramps & PMS</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Affects majority of menstruating women to varying degrees
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Symptoms:</strong> Lower abdominal cramping, back pain, headache, bloating, mood changes, breast tenderness
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• NSAIDs (ibuprofen, naproxen) - most effective for cramps</li>
                <li>• Start before cramps begin for best effect</li>
                <li>• Heat therapy (warm compress, heating pad)</li>
                <li>• Magnesium, Vitamin B6 supplements</li>
                <li>• Herbal teas (ginger, chamomile)</li>
              </ul>
              <p className="text-sm text-gray-700">
                <strong>Seek care if:</strong> Severe pain interfering with daily activities, very heavy bleeding
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🦠</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Bacterial Vaginosis (BV)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common vaginal bacterial imbalance
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Symptoms:</strong> Thin gray/white discharge, fishy odor (especially after sex), mild itching
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Requires prescription antibiotics</strong> (metronidazole oral/gel, clindamycin)</li>
                <li>• OTC support: Vaginal probiotics (restore good bacteria)</li>
                <li>• Boric acid suppositories (some evidence for recurrent BV)</li>
                <li>• Avoid douching (worsens bacterial balance)</li>
              </ul>
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Can increase risk of STIs, pregnancy complications - needs medical treatment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Use Guidelines Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Safe Use of Women's Health Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important guidelines for safe and effective use
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Key Safety Considerations</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Pregnancy Tests:</strong> Use first morning urine for most accurate results. False negatives possible if tested too early</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Antifungal Treatments:</strong> Complete full course even if symptoms improve. Recurrent infections (4+ per year) need medical evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Douching:</strong> NOT recommended - disrupts natural vaginal bacteria, increases infection risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Scented Products:</strong> Avoid scented pads, tampons, sprays - can cause irritation, allergic reactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Tampon Safety:</strong> Change every 4-8 hours, never leave in overnight longer than 8 hours (toxic shock syndrome risk)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>When to Seek Medical Care</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>First Yeast Infection:</strong> Get medical diagnosis before using OTC treatments (other conditions can mimic symptoms)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>No Improvement:</strong> Symptoms persist after full OTC antifungal course</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Recurrent Infections:</strong> More than 4 yeast infections per year (may indicate underlying condition like diabetes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>UTI Symptoms:</strong> Always see doctor for antibiotics. Untreated UTIs can reach kidneys</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Abnormal Bleeding:</strong> Very heavy periods, bleeding between periods, postmenopausal bleeding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Severe Pain:</strong> Debilitating menstrual cramps, pelvic pain (may indicate endometriosis, fibroids)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Menstrual Cup Guide Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Menstrual Cups: A Sustainable Solution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Long-term, eco-friendly, and cost-effective menstrual management
            </p>
          </div>

          <div className="bg-[#E6F4EA] border-2 border-[#34A853] rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🌍</div>
              <div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Why Menstrual Cups Are Ideal for Africa</h4>
                <p className="text-gray-700 mb-3">
                  Menstrual cups are gaining popularity across Africa as a sustainable, economical alternative to disposable pads. A single cup can last 5-10 years, eliminating the recurring cost of buying pads monthly. They're eco-friendly (no waste), safe (medical-grade silicone), and practical for areas with limited access to menstrual products.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Benefits</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>✓ <strong>Cost-Effective:</strong> $20-40 initial investment, lasts 5-10 years (vs. $5-10/month for pads)</li>
                <li>✓ <strong>Eco-Friendly:</strong> Zero waste, no disposal issues</li>
                <li>✓ <strong>12-Hour Wear:</strong> Longer than tampons/pads</li>
                <li>✓ <strong>No Odor:</strong> Blood doesn't contact air</li>
                <li>✓ <strong>Safe:</strong> Medical-grade silicone, no TSS risk</li>
                <li>✓ <strong>Convenient:</strong> No need to carry supplies</li>
                <li>✓ <strong>Water Activities:</strong> Can swim, exercise freely</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>How to Use</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>1. <strong>Wash hands</strong> thoroughly with soap and water</li>
                <li>2. <strong>Fold cup</strong> (C-fold or punch-down fold)</li>
                <li>3. <strong>Insert</strong> at 45-degree angle toward tailbone</li>
                <li>4. <strong>Release</strong> and rotate slightly to ensure seal</li>
                <li>5. <strong>Wear up to 12 hours</strong> (depending on flow)</li>
                <li>6. <strong>Remove:</strong> Pinch base to release seal, pull out gently</li>
                <li>7. <strong>Empty</strong> contents into toilet</li>
                <li>8. <strong>Rinse</strong> with clean water and reinsert</li>
                <li>9. <strong>Boil 5-10 min</strong> between cycles for sterilization</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Tips for Success</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Learning Curve:</strong> May take 2-3 cycles to master insertion/removal</li>
                <li>• <strong>Size Selection:</strong> Smaller for under 30/no vaginal birth, larger for over 30/after childbirth</li>
                <li>• <strong>Cleaning in Public:</strong> Empty, wipe with tissue, rinse when possible. Bottled water helps</li>
                <li>• <strong>Storage:</strong> Keep in breathable pouch (not airtight)</li>
                <li>• <strong>Water Access:</strong> Boiled or clean water for rinsing</li>
                <li>• <strong>Not for Everyone:</strong> Some may prefer pads/tampons - that's okay!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pregnancy Testing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Home Pregnancy Testing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Accurate, private pregnancy detection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>How Pregnancy Tests Work</h4>
              <p className="text-gray-700 mb-4">
                Home pregnancy tests detect human chorionic gonadotropin (hCG), a hormone produced during pregnancy. hCG levels double every 48-72 hours in early pregnancy, becoming detectable in urine around the time of a missed period.
              </p>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Standard Tests (Day of missed period):</p>
                  <p className="text-sm text-gray-600">Detect hCG at 25-50 mIU/mL. Most accurate from day of missed period onward.</p>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Early Detection Tests (6-8 days before period):</p>
                  <p className="text-sm text-gray-600">More sensitive (10-20 mIU/mL). Can detect pregnancy earlier but higher false negative risk.</p>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Digital Tests:</p>
                  <p className="text-sm text-gray-600">Display "Pregnant/Not Pregnant" or "Yes/No" - easier to read than lines. Some estimate weeks since conception.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Best Practices for Accurate Results</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">1</span>
                  <span><strong>Test with First Morning Urine:</strong> Most concentrated hCG levels for accurate early testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">2</span>
                  <span><strong>Wait Until Missed Period:</strong> Testing too early increases false negative risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">3</span>
                  <span><strong>Follow Instructions Exactly:</strong> Read full instructions, check expiration date</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">4</span>
                  <span><strong>Wait Full Time:</strong> Usually 3-5 minutes for results to develop</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">5</span>
                  <span><strong>Retest if Uncertain:</strong> If negative but period still doesn't come, retest in 3-5 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">6</span>
                  <span><strong>Confirm with Doctor:</strong> Positive test should be confirmed with medical care for prenatal planning</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">💡</div>
              <div>
                <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Understanding Results</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2"><strong>Positive Result (Two Lines or "Pregnant"):</strong></p>
                    <p className="text-gray-600">Even a faint line is positive. See healthcare provider for prenatal care, confirm pregnancy, estimate due date.</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Negative Result (One Line or "Not Pregnant"):</strong></p>
                    <p className="text-gray-600">If period doesn't start within a week, retest. Negative doesn't always mean not pregnant - may be too early.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vaginal Health in Tropical Climates Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Vaginal Health in Tropical Climates</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Heat and humidity create unique challenges for intimate health
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Climate-Related Challenges</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">🌡️</span>
                  <span><strong>Increased Yeast Infections:</strong> Heat and moisture create ideal environment for Candida overgrowth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">💧</span>
                  <span><strong>Bacterial Imbalance:</strong> Sweat, tight clothing disrupt natural vaginal flora</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">🩱</span>
                  <span><strong>Irritation from Sweat:</strong> Chafing, rashes in intimate areas from perspiration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">👗</span>
                  <span><strong>Tight/Synthetic Clothing:</strong> Traps moisture, reduces airflow, promotes bacterial/fungal growth</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Prevention Strategies</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Breathable Underwear:</strong> 100% cotton underwear allows airflow, absorbs moisture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Loose Clothing:</strong> Avoid tight pants, synthetic fabrics. Choose loose, breathable skirts/dresses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Change Wet Clothing:</strong> Don't stay in sweaty or wet clothes (after exercise, swimming)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Gentle Hygiene:</strong> Wash external area with mild soap and water once daily. No douching!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Stay Dry:</strong> Pat dry thoroughly after bathing. Powder (cornstarch-based) if needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Sleep Without Underwear:</strong> Allows airflow overnight</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Sensitivity & Privacy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Cultural Sensitivity & Accessing Women's Health Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Addressing taboos and ensuring dignified access
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Cultural Barriers</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Menstruation Taboo:</strong> In many communities, menstruation is considered shameful or dirty, limiting open discussion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Male-Dominated Households:</strong> Women may need permission/money from male relatives to buy products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Embarrassment:</strong> Purchasing menstrual/vaginal health products from male shopkeepers can be uncomfortable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Lack of Education:</strong> Many girls receive no menstrual health education before first period</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 mt-1">•</span>
                  <span><strong>Limited Female Health Workers:</strong> Preference for discussing intimate issues with women providers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Solutions & Progress</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Female Pharmacists/Shop Staff:</strong> Women-staffed sections for sensitive products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Discreet Packaging:</strong> Plain bags, privacy in purchasing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>School Programs:</strong> Free pad distribution, menstrual health education for girls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Community Education:</strong> Engaging mothers, fathers, male partners in menstrual health awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Policy Changes:</strong> Some countries eliminating taxes on menstrual products, making them more affordable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>NGO Support:</strong> Organizations providing free menstrual products, education, reusable options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Quality & Safety Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Product Quality & Safety Standards</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Quality Assurance</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Menstrual Products:</strong> Hypoallergenic, unscented options. Cotton-based pads (less irritation than synthetic)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Menstrual Cups:</strong> Medical-grade silicone, FDA/CE approved, BPA-free</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Pregnancy Tests:</strong> &gt;99% accuracy when used correctly, FDA-approved</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Antifungal Treatments:</strong> Pharmaceutical-grade active ingredients, clinical efficacy proven</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Climate-Stable:</strong> Products validated for tropical heat/humidity storage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Distribution & Access</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Wide Availability:</strong> Pharmacies, shops, supermarkets, health centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Multiple Price Points:</strong> Budget-friendly to premium options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>School/NGO Distribution:</strong> Free menstrual products for girls in need</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Discreet Packaging:</strong> Privacy-focused product packaging and sales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Education Materials:</strong> Instructions in local languages, visual guides</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">7</div>
              <div className="text-gray-600">Product Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">50+</div>
              <div className="text-gray-600">Product Options</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">Dignity</div>
              <div className="text-gray-600">Empowering Women</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">Access</div>
              <div className="text-gray-600">Breaking Barriers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}