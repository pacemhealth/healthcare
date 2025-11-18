import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function OralHealthPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Oral Health Products",
    "description": "Toothpaste, toothbrushes, mouthwashes, dental floss for oral hygiene across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'toothpaste-toothbrushes',
      name: 'Toothpastes & Toothbrushes',
      products: ['Fluoride toothpaste (cavity prevention)', 'Herbal/natural toothpastes', 'Children\'s toothpaste (lower fluoride, flavored)', 'Whitening toothpaste', 'Sensitivity toothpaste', 'Tartar control toothpaste', 'Manual toothbrushes (soft, medium, hard)', 'Children\'s toothbrushes', 'Electric toothbrushes', 'Toothbrush covers/holders'],
      icon: '🪥',
      description: 'Daily oral hygiene essentials for cavity prevention and dental health'
    },
    {
      id: 'mouthwashes-rinses',
      name: 'Mouthwashes & Oral Rinses',
      products: ['Antiseptic mouthwash (chlorhexidine, cetylpyridinium)', 'Fluoride mouth rinse (cavity prevention)', 'Alcohol-free mouthwash', 'Herbal/natural mouth rinses', 'Saltwater rinse packets', 'Breath freshening mouthwash', 'Gum health rinses', 'Children\'s mouthwash (alcohol-free)'],
      icon: '💧',
      description: 'Antibacterial rinses for gum health, cavity prevention, and fresh breath'
    },
    {
      id: 'dental-pain-relief',
      name: 'Dental Pain Relief & Emergency Care',
      products: ['Eugenol-based toothache drops (clove oil)', 'Benzocaine oral gel/liquid (numbing)', 'Dental wax (orthodontics, broken teeth)', 'Temporary filling material', 'Cotton pellets for tooth cavities', 'Oral pain relief tablets (ibuprofen, acetaminophen)', 'Teething gel for infants', 'Canker sore treatments'],
      icon: '🦷',
      description: 'Temporary pain relief for toothaches, dental emergencies, and oral sores'
    },
    {
      id: 'gum-specialty-care',
      name: 'Gum Health & Specialty Oral Care',
      products: ['Gum health toothpaste (anti-gingivitis)', 'Sensitivity relief toothpaste/gel', 'Dry mouth (xerostomia) products - saliva substitutes, lozenges', 'Oral thrush treatments (antifungal rinses)', 'Tongue scrapers/cleaners', 'Interdental brushes', 'Dental floss/tape', 'Floss picks', 'Water flossers'],
      icon: '🌿',
      description: 'Advanced care for gum disease, sensitivity, and specialized oral conditions'
    },
    {
      id: 'denture-orthodontic-care',
      name: 'Denture & Orthodontic Care',
      products: ['Denture cleaning tablets/solutions', 'Denture adhesive creams/powders', 'Denture repair kits', 'Denture storage containers', 'Orthodontic wax', 'Retainer/aligner cleaning solutions', 'Orthodontic toothbrushes', 'Denture brushes'],
      icon: '🦴',
      description: 'Care products for dentures, partials, and orthodontic appliances'
    },
    {
      id: 'cosmetic-breath-care',
      name: 'Cosmetic Dental & Breath Care',
      products: ['Teeth whitening strips/gels', 'Whitening pens', 'Activated charcoal toothpaste/powder', 'Breath mints/lozenges', 'Breath spray', 'Sugar-free chewing gum (xylitol)', 'Mouth moisturizing spray', 'Tongue cleaning solutions'],
      icon: '✨',
      description: 'Whitening, brightening, and breath freshening products'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Oral Health Products | Dental Care | Pacem Health"
        description="Oral health products including toothpaste, toothbrushes, mouthwashes, dental floss. Essential dental care solutions for African communities."
        keywords={[
          'oral health products Africa',
          'toothpaste',
          'toothbrushes Africa',
          'dental care products',
          'mouthwash',
          'dental floss',
          'oral hygiene Africa',
          'dental health'
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
            <span>Oral Health</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-4">
              Oral Health Products
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Essential oral care products empowering Africans to maintain dental health where access to professional dentistry is limited. From fluoride toothpastes preventing cavities to emergency toothache relief for remote communities, we provide affordable preventive care solutions, honor traditional practices like chewing sticks while introducing evidence-based products, and support oral health education across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of oral health and dental care products</p>
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
                <div className="space-y-1 mb-4">
                  {group.products.map((product, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-[#4B2991] text-xs mt-1">•</span>
                      <span className="text-sm text-gray-700">{product}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 bg-[#4B2991] text-white rounded-lg hover:bg-[#3A1F70] transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/products/categories/over-the-counter-products')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Over-the-Counter Products
            </button>
          </div>
        </div>
      </section>

      {/* Oral Health Crisis in Africa Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Oral Health Crisis in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Limited dental care access makes prevention and self-care critical
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🚨</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>The Challenge: Dental Care Deserts</h4>
                <p className="text-gray-700 mb-3">
                  Most Africans have minimal or no access to professional dental care throughout their lives. Severe dental disease is common, with tooth decay, gum disease, and tooth loss affecting millions. When toothaches occur, extraction is often the only available "treatment" rather than restorative care. This makes preventive oral hygiene and OTC pain relief products absolutely essential.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Access Barriers:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Dentist shortage: Some countries have 1 dentist per 100,000+ people (WHO recommends 1:7,500)</li>
                      <li>• Dentists concentrated in urban areas; rural populations have virtually zero access</li>
                      <li>• High cost of dental care (unaffordable for most)</li>
                      <li>• No dental insurance/coverage in public health systems</li>
                      <li>• Cultural perception: Dentists only for emergencies, not prevention</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2"><strong>Common Problems:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Untreated tooth decay (cavities) - extremely common in children and adults</li>
                      <li>• Gum disease (gingivitis, periodontitis) from poor oral hygiene</li>
                      <li>• Tooth loss - many adults missing multiple teeth</li>
                      <li>• Toothaches/dental abscesses with no treatment options</li>
                      <li>• Oral cancers (from tobacco, betel nut chewing)</li>
                      <li>• Sugar consumption rising → increased tooth decay</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Prevention is Primary Care</h4>
              <p className="text-sm text-gray-700 mb-3">
                When dentists aren't available, prevention is the ONLY defense against dental disease. Daily brushing with fluoride toothpaste, reducing sugar intake, and basic oral hygiene can prevent 90% of dental problems.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Brush twice daily with fluoride toothpaste</li>
                <li>✓ Reduce sugar consumption (sodas, sweets)</li>
                <li>✓ Use mouthwash for gum health</li>
                <li>✓ Basic flossing or interdental cleaning</li>
                <li>✓ Address toothaches early with OTC pain relief</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Fluoride: The Game-Changer</h4>
              <p className="text-sm text-gray-700 mb-3">
                Fluoride toothpaste is one of the most cost-effective public health interventions. It strengthens tooth enamel and prevents cavities. Most African water supplies are NOT fluoridated, making fluoride toothpaste critical.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Reduces cavities by 25-30%</li>
                <li>✓ Extremely affordable (pennies per use)</li>
                <li>✓ Safe when used as directed</li>
                <li>✓ WHO Essential Medicine for children</li>
                <li>✓ Works even without professional care</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>OTC Pain Relief</h4>
              <p className="text-sm text-gray-700 mb-3">
                When toothaches occur and dentists aren't accessible, OTC pain relievers and topical numbing agents provide temporary relief until care can be found (or the tooth is extracted).
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ibuprofen/acetaminophen for pain and inflammation</li>
                <li>• Eugenol (clove oil) drops for numbing</li>
                <li>• Benzocaine gel for temporary numbness</li>
                <li>• Saltwater rinses for infection</li>
                <li>• Temporary filling materials for lost fillings</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional vs. Modern Oral Care Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Traditional African Oral Care Practices</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Honoring traditional wisdom while introducing modern evidence-based products
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🌳</span>
                <h4 className="text-xl" style={{ fontWeight: 600 }}>Chewing Sticks (Miswak)</h4>
              </div>
              <p className="text-gray-700 mb-4">
                Traditional chewing sticks from specific trees (like the Salvadora persica "miswak tree" or neem tree) have been used for oral hygiene across Africa for centuries. They're still widely used in rural areas and Muslim communities.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Benefits of Chewing Sticks:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Natural antibacterial properties (from tree compounds)</li>
                    <li>✓ Mechanical cleaning action (fibers act like brush bristles)</li>
                    <li>✓ Gum massage and stimulation</li>
                    <li>✓ Fresh breath (natural aromatic oils)</li>
                    <li>✓ Free/very cheap (harvest from trees)</li>
                    <li>✓ Culturally accepted and familiar</li>
                    <li>✓ WHO recognizes miswak as effective alternative to toothbrush</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Limitations:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• NO FLUORIDE (doesn't prevent cavities as well as fluoride toothpaste)</li>
                    <li>• Requires proper technique to be effective</li>
                    <li>• Must be fresh sticks (dried ones less effective)</li>
                    <li>• Doesn't reach between teeth (no flossing action)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🪥</span>
                <h4 className="text-xl" style={{ fontWeight: 600 }}>Modern Toothbrush + Fluoride Toothpaste</h4>
              </div>
              <p className="text-gray-700 mb-4">
                The gold standard recommended by dentists worldwide. Scientific evidence shows this combination is the most effective method for preventing tooth decay and gum disease.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Benefits:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ <strong>FLUORIDE</strong> - Strengthens enamel, prevents cavities (25-30% reduction)</li>
                    <li>✓ Soft bristles clean gently without damaging gums</li>
                    <li>✓ Small brush head reaches back molars</li>
                    <li>✓ Angled bristles reach gumline, between teeth</li>
                    <li>✓ Controlled, consistent cleaning</li>
                    <li>✓ Foaming action distributes toothpaste evenly</li>
                    <li>✓ Affordable (toothbrush lasts 3 months, toothpaste ~1 month)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600 }}>Challenges in Africa:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Cost (though very affordable, still more than free chewing sticks)</li>
                    <li>• Availability in remote rural areas</li>
                    <li>• Requires water (scarcity in some regions)</li>
                    <li>• Cultural shift from traditional methods</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">💡</div>
              <div>
                <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Best Approach: Combine Both!</h4>
                <p className="text-gray-700 mb-3">
                  There's no need to abandon traditional chewing sticks. The ideal approach is:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2"><strong>Morning:</strong> Brush with fluoride toothpaste and toothbrush (provides cavity protection)</p>
                    <p className="mb-2"><strong>Evening:</strong> Brush with fluoride toothpaste and toothbrush</p>
                  </div>
                  <div>
                    <p className="mb-2"><strong>After meals:</strong> Chewing stick for fresh breath and cleaning (if toothbrush unavailable)</p>
                    <p><strong>On the go:</strong> Chewing stick is portable and convenient</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-3">
                  This respects cultural practices while ensuring fluoride protection against cavities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Oral Health Problems Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Common Oral Health Problems in Africa</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conditions frequently managed with OTC oral care products
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🦷</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Tooth Decay (Dental Caries/Cavities)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Extremely common - affects 60-90% of children and most adults in Africa
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Causes:</strong> Sugar consumption (sodas, sweets), poor oral hygiene, lack of fluoride exposure, no dental care access
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Tooth pain, sensitivity to hot/cold/sweet, visible holes/dark spots in teeth, bad breath
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Prevention & Management:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Prevention:</strong> Fluoride toothpaste (brush 2x daily), reduce sugar intake</li>
                <li>• <strong>Pain Relief:</strong> Ibuprofen, acetaminophen, eugenol (clove oil) drops</li>
                <li>• <strong>Temporary Filling:</strong> OTC temporary filling material (if filling falls out)</li>
                <li>• <strong>Antiseptic Rinse:</strong> Chlorhexidine mouthwash (reduce bacteria)</li>
                <li>• <strong>IMPORTANT:</strong> Seek dental care if possible - cavities don't heal on their own</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🩸</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Gum Disease (Gingivitis & Periodontitis)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Very common, affecting majority of adults over 30
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Causes:</strong> Plaque buildup from poor oral hygiene, smoking, diabetes
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Bleeding gums (during brushing), red/swollen gums, bad breath, gum recession, loose teeth (advanced periodontitis)
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Treatment & Prevention:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Anti-Gingivitis Toothpaste:</strong> Specialized formulas for gum health</li>
                <li>• <strong>Antiseptic Mouthwash:</strong> Chlorhexidine kills bacteria causing gum disease</li>
                <li>• <strong>Proper Brushing:</strong> Gentle circular motions at gumline, soft-bristled brush</li>
                <li>• <strong>Flossing:</strong> Remove plaque between teeth (interdental brushes, floss)</li>
                <li>• <strong>Saltwater Rinse:</strong> Natural anti-inflammatory for swollen gums</li>
                <li>• Early gingivitis is REVERSIBLE with good oral hygiene</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">⚡</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Toothache & Dental Abscess</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common, often result of untreated cavities or gum disease
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Causes:</strong> Deep cavity reaching tooth nerve, cracked tooth, gum abscess, wisdom tooth problems
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Severe throbbing pain, swelling, fever, pus, bad taste, difficulty eating
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Temporary Relief:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Pain Relief:</strong> Ibuprofen (best - reduces pain AND inflammation), acetaminophen</li>
                <li>• <strong>Topical Numbing:</strong> Eugenol (clove oil), benzocaine gel (temporary numbness)</li>
                <li>• <strong>Saltwater Rinse:</strong> Warm saltwater (1 tsp salt in 8oz water) - reduces swelling</li>
                <li>• <strong>Cold Compress:</strong> Ice pack on cheek (reduces swelling, numbs pain)</li>
                <li>• <strong>⚠ WARNING:</strong> Abscess is serious infection - needs antibiotics. See healthcare provider urgently</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">❄️</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Sensitive Teeth</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common, especially with gum recession and enamel erosion
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Causes:</strong> Worn tooth enamel, exposed tooth roots (gum recession), cavities, cracked teeth, aggressive brushing
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> Sharp pain when eating/drinking hot, cold, sweet, or acidic foods. Pain when brushing or breathing cold air
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>OTC Solutions:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Sensitivity Toothpaste:</strong> Potassium nitrate or stannous fluoride formulas (block pain signals)</li>
                <li>• <strong>Soft-Bristled Toothbrush:</strong> Prevent further enamel/gum damage</li>
                <li>• <strong>Fluoride Rinse:</strong> Strengthen enamel, reduce sensitivity</li>
                <li>• <strong>Avoid Acidic Foods:</strong> Sodas, citrus, vinegar erode enamel</li>
                <li>• Takes 2-4 weeks of consistent use to see improvement</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">👄</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Bad Breath (Halitosis)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Very common - affects ~25% of people chronically
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Causes:</strong> Poor oral hygiene (bacteria on tongue/teeth), gum disease, dry mouth, certain foods, smoking, dental infections
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Solutions:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Brush Tongue:</strong> Bacteria accumulate on tongue (use tongue scraper or toothbrush)</li>
                <li>• <strong>Antiseptic Mouthwash:</strong> Kills odor-causing bacteria</li>
                <li>• <strong>Proper Oral Hygiene:</strong> Brush 2x daily, floss, clean between teeth</li>
                <li>• <strong>Stay Hydrated:</strong> Dry mouth worsens bad breath</li>
                <li>• <strong>Sugar-Free Gum:</strong> Stimulates saliva, masks odor temporarily</li>
                <li>• If persistent despite good hygiene, may indicate gum disease or other health issue</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🍄</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Oral Thrush (Candidiasis)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Prevalence:</strong> Common in infants, elderly, people with HIV/AIDS, diabetes
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Causes:</strong> Yeast (Candida) overgrowth, weakened immune system, antibiotic use, dentures, dry mouth
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Symptoms:</strong> White patches on tongue/inner cheeks, redness, soreness, difficulty swallowing, cracking at mouth corners
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Treatment:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-3">
                <li>• <strong>Antifungal Rinses:</strong> Nystatin oral suspension (prescription in most countries)</li>
                <li>• <strong>OTC Support:</strong> Saltwater rinses, good oral hygiene</li>
                <li>• <strong>Probiotics:</strong> May help restore normal oral bacteria</li>
                <li>• <strong>Denture Care:</strong> Clean dentures thoroughly (common source of thrush)</li>
                <li>• <strong>Note:</strong> Usually needs prescription antifungal. See healthcare provider</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proper Brushing Technique Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Proper Toothbrushing Technique</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Effective brushing prevents 90% of dental problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Step-by-Step Brushing Guide</h4>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#4B2991] shrink-0" style={{ fontWeight: 600 }}>1.</span>
                  <span><strong>Pea-Sized Toothpaste:</strong> Use fluoride toothpaste - only a pea-sized amount (children: rice grain-sized)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4B2991] shrink-0" style={{ fontWeight: 600 }}>2.</span>
                  <span><strong>45-Degree Angle:</strong> Hold toothbrush at 45-degree angle to gumline</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4B2991] shrink-0" style={{ fontWeight: 600 }}>3.</span>
                  <span><strong>Gentle Circular Motions:</strong> Use small circular motions - NOT hard back-and-forth scrubbing (damages gums)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4B2991] shrink-0" style={{ fontWeight: 600 }}>4.</span>
                  <span><strong>Outer Surfaces:</strong> Brush outer surfaces of all upper and lower teeth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4B2991] shrink-0" style={{ fontWeight: 600 }}>5.</span>
                  <span><strong>Inner Surfaces:</strong> Brush inner surfaces (tongue side) of all teeth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4B2991] shrink-0" style={{ fontWeight: 600 }}>6.</span>
                  <span><strong>Chewing Surfaces:</strong> Brush flat chewing surfaces of back molars</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4B2991] shrink-0" style={{ fontWeight: 600 }}>7.</span>
                  <span><strong>Clean Tongue:</strong> Gently brush or scrape tongue to remove bacteria (prevents bad breath)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4B2991] shrink-0" style={{ fontWeight: 600 }}>8.</span>
                  <span><strong>Spit, Don't Rinse:</strong> Spit out toothpaste but DON'T rinse mouth with water (lets fluoride stay on teeth longer)</span>
                </li>
              </ol>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Brushing Best Practices</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">⏱</span>
                  <span><strong>Brush for 2 Minutes:</strong> Set a timer. Most people only brush 30-45 seconds (inadequate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">🌅</span>
                  <span><strong>Twice Daily:</strong> Morning and before bed (minimum). After meals is ideal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">🪥</span>
                  <span><strong>Soft-Bristled Brush:</strong> Hard bristles damage gums and enamel. Always use soft</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">🔄</span>
                  <span><strong>Replace Every 3 Months:</strong> Or when bristles frayed. Old brushes don't clean effectively</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">💧</span>
                  <span><strong>Wet Brush First:</strong> Wet toothbrush before applying toothpaste (helps spread toothpaste)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">🚫</span>
                  <span><strong>Don't Share Brushes:</strong> Transfers bacteria, viruses (including HIV, herpes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">☀️</span>
                  <span><strong>Air Dry:</strong> Store toothbrush upright, let it air dry (prevents bacteria growth)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">🦷</span>
                  <span><strong>Don't Brush Too Hard:</strong> Gentle pressure is enough. Aggressive brushing damages gums, wears enamel</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">💡</div>
              <div>
                <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Children's Brushing Guidelines</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2"><strong>Ages 0-2 Years:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Start brushing when first tooth appears</li>
                      <li>• Rice grain-sized fluoride toothpaste</li>
                      <li>• Parent does all brushing</li>
                      <li>• Soft infant toothbrush or clean cloth</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Ages 3-6 Years:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Pea-sized fluoride toothpaste</li>
                      <li>• Child can start brushing (parent supervises and assists)</li>
                      <li>• Parent ensures thorough brushing</li>
                      <li>• Teach child to spit out toothpaste, not swallow</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Ages 7-12 Years:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Child brushes independently</li>
                      <li>• Parent checks brushing quality</li>
                      <li>• Regular-sized toothpaste amount</li>
                      <li>• Introduce flossing</li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2"><strong>Important:</strong></p>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Children under 6 should be supervised (swallowing toothpaste risk)</li>
                      <li>• Make brushing fun (songs, games, rewards)</li>
                      <li>• Lead by example - brush together</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sugar and Oral Health Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Sugar: The Enemy of Healthy Teeth</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rising sugar consumption is driving a cavity epidemic across Africa
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🍬</div>
              <div>
                <h4 className="text-lg mb-3" style={{ fontWeight: 600 }}>How Sugar Causes Cavities</h4>
                <p className="text-gray-700 mb-3">
                  Bacteria in your mouth feed on sugar and produce acid. This acid dissolves tooth enamel, creating cavities. The more sugar you eat, and the more frequently you eat it, the more acid attacks your teeth endure.
                </p>
                <div className="text-sm text-gray-700 space-y-2">
                  <p><strong>The Process:</strong></p>
                  <ol className="list-decimal list-inside text-gray-600 space-y-1 ml-4">
                    <li>You eat/drink something sugary</li>
                    <li>Bacteria in mouth consume sugar and produce acid</li>
                    <li>Acid attacks tooth enamel for 20-30 minutes after eating</li>
                    <li>Repeated acid attacks weaken enamel</li>
                    <li>Eventually enamel breaks down → cavity forms</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Worst Offenders for Teeth</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🥤</span>
                  <span><strong>Sodas/Soft Drinks:</strong> Double threat - high sugar PLUS acid. Drinking throughout day = constant acid attacks. One of the worst for teeth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🍭</span>
                  <span><strong>Sticky Candies/Sweets:</strong> Stick to teeth for long periods, prolonging acid attack. Hard candies dissolve slowly in mouth (extended exposure).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🍪</span>
                  <span><strong>Cookies, Cakes, Pastries:</strong> Contain sugar and stick to teeth. Frequent snacking is worse than eating once.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🧃</span>
                  <span><strong>Fruit Juice:</strong> Natural but still high in sugar and acidic. Even "no added sugar" juice damages teeth with frequent consumption.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">🍯</span>
                  <span><strong>Dried Fruits:</strong> Concentrated sugar, sticky texture. Despite being "healthy," they're bad for teeth.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Tooth-Friendly Choices</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Water:</strong> Best drink for teeth. Rinses away food particles, doesn't cause acid attacks. Fluoridated water even better.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Milk:</strong> Contains calcium (strengthens teeth), not acidic, lower sugar than juice.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Cheese, Nuts:</strong> Stimulate saliva (neutralizes acid), don't feed bacteria.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Fresh Vegetables:</strong> Crunchy vegetables clean teeth naturally, require chewing (stimulates saliva).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Sugar-Free Gum (Xylitol):</strong> Stimulates saliva, xylitol actually inhibits bacteria growth.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Reduce Sugar Intake</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Limit sodas/soft drinks (worst for teeth)</li>
                <li>• Replace juice with water</li>
                <li>• Reduce frequency of sugary snacks</li>
                <li>• Read labels - hidden sugars everywhere</li>
                <li>• Choose fresh fruit over dried fruit</li>
                <li>• Avoid adding sugar to tea/coffee</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Timing Matters</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Eat sweets with meals (not between meals) - saliva from meal helps neutralize acid</li>
                <li>• Don't sip sugary drinks throughout day - creates constant acid attack</li>
                <li>• Drink soda in one sitting, not over hours</li>
                <li>• Avoid sugary foods/drinks before bed</li>
                <li>• Rinse mouth with water after eating sweets</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Protect Your Teeth</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Brush after eating sweets (wait 30 min if acidic)</li>
                <li>• Drink water throughout day</li>
                <li>• Use fluoride toothpaste 2x daily</li>
                <li>• Chew sugar-free gum after meals (stimulates saliva)</li>
                <li>• Use straw for sugary drinks (reduces contact with teeth)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dental Emergencies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Handling Dental Emergencies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When dental care is unavailable, know how to manage emergencies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Severe Toothache</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Immediate Actions:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-3">
                <li>1. Rinse mouth with warm saltwater (1 tsp salt in 8oz water)</li>
                <li>2. Gently floss around tooth (remove any trapped food)</li>
                <li>3. Take ibuprofen or acetaminophen for pain</li>
                <li>4. Apply eugenol (clove oil) drops to painful tooth with cotton swab</li>
                <li>5. Cold compress on cheek (reduces swelling)</li>
                <li>6. Avoid hot/cold/sweet foods</li>
              </ul>
              <p className="text-sm text-red-600">
                <strong>Seek Care If:</strong> Fever, swelling of face/jaw, pus, severe pain lasting &gt;1-2 days (may be abscess - needs antibiotics)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Knocked-Out Tooth</h4>
              <p className="text-sm text-gray-700 mb-3">
                <strong>For Permanent Teeth (Adults/Older Children):</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-3">
                <li>1. <strong>TIME CRITICAL:</strong> Best chance of saving tooth if replanted within 30 minutes</li>
                <li>2. <strong>Handle by crown only</strong> (don't touch root)</li>
                <li>3. <strong>Rinse gently</strong> with milk or saline (NOT tap water). Don't scrub</li>
                <li>4. <strong>Try to replant:</strong> Push tooth back into socket, bite down on gauze to hold in place</li>
                <li>5. <strong>If can't replant:</strong> Keep tooth moist in milk, saliva, or saline. Don't let it dry out</li>
                <li>6. <strong>Get to dentist immediately</strong> (within 1 hour ideally)</li>
              </ul>
              <p className="text-sm text-gray-600">
                <strong>For Baby Teeth:</strong> Don't replant. Control bleeding with gauze.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Broken/Cracked Tooth</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Rinse mouth with warm saltwater</li>
                <li>• Save any pieces if possible</li>
                <li>• If sharp edge cutting tongue/cheek: cover with dental wax or sugarless gum</li>
                <li>• Cold compress if swelling</li>
                <li>• Ibuprofen for pain</li>
                <li>• Avoid chewing on that side</li>
                <li>• See dentist as soon as possible (nerve may be exposed)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Lost Filling or Crown</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Lost Filling:</strong> Use OTC temporary filling material to cover cavity (prevents pain, food impaction). Available at pharmacies</li>
                <li>• <strong>Lost Crown:</strong> Try to slip crown back on tooth. Use denture adhesive or toothpaste to hold temporarily</li>
                <li>• Keep area clean</li>
                <li>• Avoid sticky/hard foods on that side</li>
                <li>• Sensitivity is normal - use sensitivity toothpaste</li>
                <li>• See dentist when possible for permanent repair</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Dental Abscess (Infection)</h4>
              <p className="text-sm text-red-600 mb-2">
                <strong>⚠ SERIOUS INFECTION - NEEDS ANTIBIOTICS</strong>
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Signs:</strong> Severe toothache, swelling of gum/face/jaw, fever, pus, bad taste in mouth, swollen lymph nodes
              </p>
              <p className="text-sm text-gray-700 mb-3">
                <strong>Temporary Relief While Seeking Care:</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-3">
                <li>• Warm saltwater rinses (every 2 hours)</li>
                <li>• Ibuprofen for pain and inflammation</li>
                <li>• Cold compress on cheek</li>
                <li>• Sleep with head elevated</li>
              </ul>
              <p className="text-sm text-red-600">
                <strong>URGENT:</strong> See healthcare provider for antibiotics (amoxicillin, metronidazole). Untreated abscess can spread to jaw, bloodstream (life-threatening).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Bleeding After Tooth Extraction</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Bite down firmly on sterile gauze pad for 30-45 minutes</li>
                <li>• Don't spit, rinse, or use straw (dislodges clot)</li>
                <li>• Keep head elevated</li>
                <li>• Apply ice pack to cheek (20 min on, 20 min off)</li>
                <li>• If bleeding continues: Use tea bag (tannic acid helps clotting), bite down for 30 min</li>
                <li>• Avoid hot foods, alcohol, smoking for 24 hours</li>
                <li>• If bleeding doesn't stop after 2-3 hours, seek medical care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Quality & Distribution Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Product Quality & Distribution</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Quality Standards</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Fluoride Toothpaste:</strong> WHO-recommended formulations (1000-1500 ppm fluoride for adults, 500-1000 ppm for children)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Toothbrushes:</strong> Soft nylon bristles, ergonomic handles, appropriate sizes for children/adults</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Mouthwashes:</strong> Antiseptic ingredients (chlorhexidine 0.12-0.2%, cetylpyridinium chloride), alcohol-free options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Pain Relief:</strong> Pharmaceutical-grade eugenol (clove oil), benzocaine, validated formulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Heat-Stable:</strong> Products validated for tropical climate storage</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Access & Education</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Wide Distribution:</strong> Pharmacies, shops, supermarkets, health centers, even small rural stores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Affordable Pricing:</strong> Budget-friendly options, bulk packaging to reduce per-use cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>School Programs:</strong> Free toothbrush/toothpaste distribution, oral health education in schools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Community Outreach:</strong> Mobile dental camps, health worker training, public awareness campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span><strong>Visual Instructions:</strong> Picture-based brushing guides, local language labels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#4B2991]">6</div>
              <div className="text-gray-600">Product Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#4B2991]">50+</div>
              <div className="text-gray-600">Product Options</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#4B2991]">90%</div>
              <div className="text-gray-600">Problems Preventable</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#4B2991]">2x</div>
              <div className="text-gray-600">Daily Brushing</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
