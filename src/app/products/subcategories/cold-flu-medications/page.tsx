import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function ColdFluMedicationsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Cold & Flu Medications",
    "description": "Decongestants, cough suppressants, expectorants, antihistamines, combination cold flu remedies for respiratory symptom relief across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'oral-decongestants',
      name: 'Oral Decongestants',
      products: ['Pseudoephedrine tablets/capsules', 'Phenylephrine oral formulations', 'Extended-release decongestants', 'Non-drowsy formulations', 'Day-time cold relief'],
      icon: '💊',
      description: 'Systemic nasal congestion relief'
    },
    {
      id: 'nasal-sprays-drops',
      name: 'Nasal Sprays & Drops',
      products: ['Oxymetazoline spray', 'Xylometazoline nasal drops', 'Saline nasal spray', 'Pediatric nasal drops', 'Long-acting nasal decongestants'],
      icon: '🌬️',
      description: 'Topical nasal decongestion'
    },
    {
      id: 'cough-suppressants',
      name: 'Cough Suppressants (Antitussives)',
      products: ['Dextromethorphan syrup/tablets', 'Codeine-based cough syrups (where permitted)', 'Night-time cough relief', 'Sugar-free formulations', 'Extended-release cough suppressants'],
      icon: '🤧',
      description: 'Dry cough relief and control'
    },
    {
      id: 'expectorants',
      name: 'Expectorants & Mucolytics',
      products: ['Guaifenesin syrup/tablets', 'Bromhexine', 'Ambroxol', 'Carbocisteine', 'Combination expectorant formulations'],
      icon: '💧',
      description: 'Productive cough and mucus clearance'
    },
    {
      id: 'antihistamines',
      name: 'Antihistamines (Cold Relief)',
      products: ['Chlorpheniramine', 'Diphenhydramine', 'Loratadine (non-sedating)', 'Cetirizine', 'Combination antihistamine products'],
      icon: '🌡️',
      description: 'Runny nose and sneezing relief'
    },
    {
      id: 'combination-products',
      name: 'Combination Cold & Flu Products',
      products: ['Multi-symptom cold relief', 'Day & Night packs', 'Paracetamol + Decongestant + Antihistamine', 'Triple-action formulations', 'Hot lemon cold remedies'],
      icon: '💉',
      description: 'Comprehensive multi-symptom relief'
    },
    {
      id: 'throat-relief',
      name: 'Throat Relief Products',
      products: ['Throat lozenges (medicated)', 'Throat sprays (anesthetic)', 'Sore throat gargles', 'Benzocaine lozenges', 'Honey-based throat soothers'],
      icon: '🍬',
      description: 'Sore throat pain and irritation relief'
    },
    {
      id: 'pediatric-cold-flu',
      name: 'Pediatric Cold & Flu',
      products: ['Pediatric cold syrup (multi-symptom)', 'Age-appropriate decongestants', 'Pediatric cough syrup', 'Nasal saline for infants', 'Fever reducer + decongestant combinations'],
      icon: '👶',
      description: 'Safe formulations for children'
    },
    {
      id: 'fever-body-ache',
      name: 'Fever & Body Ache Relief (Cold/Flu)',
      products: ['Paracetamol cold formulations', 'Ibuprofen cold & flu', 'Aspirin cold relief', 'Combination pain/fever/decongestant', 'Hot drink cold remedies'],
      icon: '🤒',
      description: 'Flu-associated fever and aches'
    },
    {
      id: 'natural-herbal',
      name: 'Natural & Herbal Cold Remedies',
      products: ['Vitamin C supplements (high dose)', 'Zinc lozenges', 'Echinacea products', 'Menthol/eucalyptus inhalants', 'Herbal cold & flu teas'],
      icon: '🌿',
      description: 'Natural immune support and symptom relief'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Cold & Flu Medications | Decongestants & Cough Relief | Pacem Health"
        description="Cold and flu medications including decongestants, nasal sprays, cough suppressants, expectorants, antihistamines, combination remedies. Safe effective symptom relief for respiratory infections across African pharmacies and health facilities."
        keywords={[
          'cold flu medications Africa',
          'decongestants Africa',
          'cough suppressants',
          'expectorants Africa',
          'nasal decongestants',
          'cough syrup Africa',
          'cold remedies Africa',
          'flu treatment medications'
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
            <span>Cold & Flu Medications</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#7C944B] to-[#5A6D35] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Cold & Flu Medications
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive range of OTC medications for managing cold and flu symptoms across African communities. From decongestants and cough suppressants to expectorants and combination remedies, we provide effective symptomatic relief while supporting immune function and recovery from upper respiratory tract infections.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of cold and flu relief medications</p>
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

      {/* Understanding Cold vs Flu Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Cold vs. Flu: Understanding the Difference</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Recognizing symptoms helps guide appropriate treatment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🤧</div>
                <h4 className="text-xl" style={{ fontWeight: 600 }}>Common Cold</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Onset:</strong> Gradual development over 1-3 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Fever:</strong> Rare in adults, low-grade if present</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Symptoms:</strong> Runny/stuffy nose, sneezing, sore throat, mild cough</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Severity:</strong> Mild to moderate discomfort</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Duration:</strong> 7-10 days typical recovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span><strong>Complications:</strong> Rare, mostly secondary infections</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🤒</div>
                <h4 className="text-xl" style={{ fontWeight: 600 }}>Influenza (Flu)</h4>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Onset:</strong> Sudden, rapid symptom development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Fever:</strong> High fever (38-40°C) for 3-4 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Symptoms:</strong> Severe body aches, headache, dry cough, fatigue</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Severity:</strong> Moderate to severe, often debilitating</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Duration:</strong> 1-2 weeks, fatigue may persist longer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Complications:</strong> Pneumonia, bronchitis, can be serious</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Use Guidelines Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Safe Use of Cold & Flu Medications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important guidelines for effective symptom management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Key Safety Considerations</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Avoid Duplicate Ingredients:</strong> Many cold products contain paracetamol - don't exceed daily limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Nasal Spray Limit:</strong> Don't use decongestant nasal sprays for more than 3-5 days (rebound congestion)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Drowsiness Warning:</strong> Antihistamines can cause sedation - avoid driving/operating machinery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Chronic Conditions:</strong> Consult doctor if you have high blood pressure, diabetes, heart disease</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Pregnancy/Breastfeeding:</strong> Many cold medications not suitable - seek medical advice</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>When to See a Healthcare Provider</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>High Fever:</strong> Temperature above 39.4°C (103°F) or lasting more than 3 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Breathing Difficulty:</strong> Shortness of breath, wheezing, chest pain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Severe Symptoms:</strong> Extreme fatigue, confusion, severe headache</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Prolonged Illness:</strong> Cold symptoms lasting more than 10 days without improvement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>High-Risk Groups:</strong> Elderly, pregnant women, infants, immunocompromised patients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Medications Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">How Cold & Flu Medications Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding medication mechanisms for targeted symptom relief
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🌬️</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Decongestants</h4>
              <p className="text-sm text-gray-600 mb-3">
                Vasoconstriction reduces nasal swelling
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Constrict blood vessels in nasal passages</li>
                <li>• Reduce swelling and inflammation</li>
                <li>• Improve airflow and drainage</li>
                <li>• Relieve sinus pressure</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🤧</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Cough Suppressants</h4>
              <p className="text-sm text-gray-600 mb-3">
                Central nervous system action
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Act on cough center in brain</li>
                <li>• Raise cough threshold</li>
                <li>• Reduce cough reflex sensitivity</li>
                <li>• Best for dry, non-productive cough</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Expectorants</h4>
              <p className="text-sm text-gray-600 mb-3">
                Mucus thinning and mobilization
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Increase respiratory tract secretions</li>
                <li>• Thin and loosen mucus</li>
                <li>• Facilitate easier expectoration</li>
                <li>• Support productive cough clearance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🌡️</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Antihistamines</h4>
              <p className="text-sm text-gray-600 mb-3">
                Histamine receptor blockade
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Block H1 histamine receptors</li>
                <li>• Reduce runny nose and sneezing</li>
                <li>• Decrease mucus production</li>
                <li>• May cause drowsiness (sedating types)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Symptom Management Guide Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Symptom-Specific Treatment Guide</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Matching the right medication to your symptoms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#F5F7F0] p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">👃</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Nasal Congestion</h4>
              </div>
              <p className="text-sm text-gray-700 mb-2"><strong>Recommended:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Oral decongestants (pseudoephedrine)</li>
                <li>• Nasal sprays (short-term only)</li>
                <li>• Saline nasal rinses</li>
                <li>• Steam inhalation</li>
              </ul>
            </div>

            <div className="bg-[#F5F7F0] p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💧</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Runny Nose & Sneezing</h4>
              </div>
              <p className="text-sm text-gray-700 mb-2"><strong>Recommended:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Antihistamines (first-generation for fast relief)</li>
                <li>• Non-sedating antihistamines (daytime use)</li>
                <li>• Combination products</li>
                <li>• Tissue with moisturizer to prevent irritation</li>
              </ul>
            </div>

            <div className="bg-[#F5F7F0] p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🤧</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Dry Cough</h4>
              </div>
              <p className="text-sm text-gray-700 mb-2"><strong>Recommended:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Cough suppressants (dextromethorphan)</li>
                <li>• Throat lozenges</li>
                <li>• Honey-based remedies</li>
                <li>• Night-time cough formulations</li>
              </ul>
            </div>

            <div className="bg-[#F5F7F0] p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🫁</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Productive Cough (Phlegm)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-2"><strong>Recommended:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Expectorants (guaifenesin)</li>
                <li>• Mucolytics (bromhexine, ambroxol)</li>
                <li>• Increased fluid intake</li>
                <li>• Steam inhalation</li>
              </ul>
            </div>

            <div className="bg-[#F5F7F0] p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">😷</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Sore Throat</h4>
              </div>
              <p className="text-sm text-gray-700 mb-2"><strong>Recommended:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Medicated throat lozenges</li>
                <li>• Throat sprays (anesthetic)</li>
                <li>• Salt water gargles</li>
                <li>• Pain relievers (paracetamol, ibuprofen)</li>
              </ul>
            </div>

            <div className="bg-[#F5F7F0] p-6 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🤒</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Fever & Body Aches</h4>
              </div>
              <p className="text-sm text-gray-700 mb-2"><strong>Recommended:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Paracetamol (acetaminophen)</li>
                <li>• Ibuprofen</li>
                <li>• Combination cold & flu products</li>
                <li>• Rest and hydration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pediatric Guidelines Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Pediatric Cold & Flu Treatment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Special considerations for children
            </p>
          </div>

          <div className="bg-[#FFF9E6] border-2 border-[#FFD700] rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Important Pediatric Safety Notice</h4>
                <p className="text-gray-700 mb-3">
                  Cold and cough medications are NOT recommended for children under 4 years of age due to limited evidence of efficacy and risk of serious side effects. For children 4-6 years, use only under medical supervision.
                </p>
                <p className="text-gray-700">
                  <strong>For infants and young children, focus on:</strong> Nasal saline drops, gentle suction, humidified air, adequate hydration, and fever management with appropriate doses of paracetamol or ibuprofen.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Age Restrictions</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Under 2 years:</strong> No OTC cold/cough medications</li>
                <li><strong>2-4 years:</strong> Avoid unless prescribed by doctor</li>
                <li><strong>4-6 years:</strong> Use with caution, medical guidance recommended</li>
                <li><strong>6+ years:</strong> Can use age-appropriate products with proper dosing</li>
                <li><strong>All ages:</strong> Never use adult formulations in children</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Safe Alternatives</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Saline nasal drops/spray for congestion</li>
                <li>• Bulb syringe for gentle nasal suction</li>
                <li>• Cool mist humidifier in room</li>
                <li>• Elevated head position during sleep</li>
                <li>• Honey for cough (over 1 year old only)</li>
                <li>• Adequate fluid intake</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Dosing Safety</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Always use dosing device provided with product</li>
                <li>• Dose based on weight, not age when possible</li>
                <li>• Never combine multiple cold products</li>
                <li>• Check all ingredients to avoid duplication</li>
                <li>• Keep medication log to prevent overdose</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Medication Strategies Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Supportive Care & Home Remedies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complementary strategies to enhance recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Hydration</h4>
              <p className="text-sm text-gray-600">
                Drink plenty of fluids (water, herbal teas, soups, broths) to thin mucus, prevent dehydration, and support immune function
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">😴</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Rest</h4>
              <p className="text-sm text-gray-600">
                Adequate sleep and rest allow the immune system to fight infection more effectively. Avoid strenuous activity
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🌫️</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Humidity</h4>
              <p className="text-sm text-gray-600">
                Use humidifiers or steam inhalation to moisten airways, ease congestion, and soothe irritated throat
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🍯</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Honey & Warm Liquids</h4>
              <p className="text-sm text-gray-600">
                Honey soothes throat (for ages 1+), warm liquids comfort and help loosen secretions. Add lemon for vitamin C
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🧂</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Salt Water Gargle</h4>
              <p className="text-sm text-gray-600">
                Gargling with warm salt water reduces throat inflammation and can help clear mucus from the throat
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🍊</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Vitamin C</h4>
              <p className="text-sm text-gray-600">
                May reduce duration and severity. Found in citrus fruits, or taken as supplement (consult for high doses)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🌡️</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Monitor Temperature</h4>
              <p className="text-sm text-gray-600">
                Track fever patterns. Treat fever for comfort, but low-grade fever helps fight infection
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🧼</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Hygiene</h4>
              <p className="text-sm text-gray-600">
                Frequent handwashing, covering coughs/sneezes, and disposing of tissues properly prevent spread
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention & Vaccination Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Prevention Strategies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Best defense is avoiding illness in the first place
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Influenza Vaccination</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Annual Vaccine:</strong> Recommended for all individuals 6 months and older</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Timing:</strong> Get vaccinated before flu season (typically March-May in Southern Hemisphere)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>High-Risk Priority:</strong> Elderly, pregnant women, children, healthcare workers, chronic disease patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Effectiveness:</strong> Reduces illness severity even if infection occurs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Lifestyle Prevention</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Hand Hygiene:</strong> Wash hands frequently with soap and water for 20 seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Avoid Touching Face:</strong> Minimize hand contact with eyes, nose, and mouth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Social Distancing:</strong> Maintain distance from sick individuals when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Immune Support:</strong> Adequate sleep, balanced diet, regular exercise, stress management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Quality Assurance & Product Availability</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Quality Standards</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Regulatory Compliance:</strong> All products meet local regulatory requirements and international standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>GMP Manufacturing:</strong> Sourced with Good Manufacturing Practice certified facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Efficacy Testing:</strong> Clinical evidence supporting therapeutic claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Climate-Appropriate:</strong> Formulations stable in tropical/sub-tropical conditions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Distribution & Access</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Wide Availability:</strong> Pharmacies, retail outlets, and healthcare facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Multiple Formats:</strong> Tablets, syrups, drops, sprays to suit different preferences and ages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Affordable Options:</strong> Range of branded and generic products at various price points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Patient Information:</strong> Clear labeling and counseling support from pharmacists</span>
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
              <div className="text-4xl mb-2 text-[#7C944B]">10</div>
              <div className="text-gray-600">Product Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">50+</div>
              <div className="text-gray-600">Product Variations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">7-10</div>
              <div className="text-gray-600">Days Typical Recovery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">24/7</div>
              <div className="text-gray-600">Pharmacy Access</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}