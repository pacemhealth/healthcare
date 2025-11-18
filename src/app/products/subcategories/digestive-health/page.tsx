import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function DigestiveHealthPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Digestive Health Products",
    "description": "Antacids, acid reducers, laxatives, anti-diarrheal medications, probiotics, digestive enzymes for gastrointestinal health across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'antacids',
      name: 'Antacids',
      products: ['Aluminum/Magnesium hydroxide combinations', 'Calcium carbonate tablets', 'Sodium bicarbonate', 'Chewable antacid tablets', 'Liquid antacid suspensions'],
      icon: '💊',
      description: 'Fast-acting heartburn and acid relief'
    },
    {
      id: 'acid-reducers',
      name: 'H2 Blockers & Proton Pump Inhibitors',
      products: ['Ranitidine (where available)', 'Famotidine', 'Omeprazole OTC', 'Esomeprazole OTC', 'Lansoprazole OTC'],
      icon: '🛡️',
      description: 'Long-lasting acid reduction therapy'
    },
    {
      id: 'laxatives',
      name: 'Laxatives & Stool Softeners',
      products: ['Bisacodyl tablets', 'Senna-based laxatives', 'Polyethylene glycol (PEG)', 'Lactulose syrup', 'Docusate sodium (stool softener)', 'Glycerin suppositories'],
      icon: '🌾',
      description: 'Constipation relief and bowel regularity'
    },
    {
      id: 'anti-diarrheals',
      name: 'Anti-Diarrheal Medications',
      products: ['Loperamide tablets/capsules', 'Loperamide liquid', 'Bismuth subsalicylate', 'Kaolin-pectin formulations', 'Racecadotril (where available)'],
      icon: '🛑',
      description: 'Acute diarrhea control and management'
    },
    {
      id: 'probiotics',
      name: 'Probiotics & Prebiotics',
      products: ['Lactobacillus formulations', 'Bifidobacterium strains', 'Saccharomyces boulardii', 'Multi-strain probiotics', 'Prebiotic fiber supplements', 'Synbiotic combinations'],
      icon: '🦠',
      description: 'Gut microbiome health and balance'
    },
    {
      id: 'oral-rehydration',
      name: 'Oral Rehydration Solutions (ORS)',
      products: ['WHO-standard ORS packets', 'Low osmolarity ORS', 'Zinc + ORS combinations', 'Flavored pediatric ORS', 'Ready-to-drink ORS solutions'],
      icon: '💧',
      description: 'Dehydration prevention and treatment'
    },
    {
      id: 'anti-gas-bloating',
      name: 'Anti-Gas & Bloating Relief',
      products: ['Simethicone drops/tablets', 'Activated charcoal', 'Alpha-galactosidase enzyme', 'Peppermint oil capsules', 'Combination antacid + anti-gas'],
      icon: '💨',
      description: 'Gas, bloating, and discomfort relief'
    },
    {
      id: 'digestive-enzymes',
      name: 'Digestive Enzymes',
      products: ['Pancreatic enzyme supplements', 'Lactase enzymes (lactose intolerance)', 'Multi-enzyme complexes', 'Papaya enzymes', 'Bromelain supplements'],
      icon: '⚗️',
      description: 'Enhanced digestion and nutrient absorption'
    },
    {
      id: 'fiber-supplements',
      name: 'Fiber Supplements',
      products: ['Psyllium husk (Metamucil-type)', 'Methylcellulose', 'Wheat dextrin', 'Inulin fiber', 'Mixed fiber supplements'],
      icon: '🌿',
      description: 'Digestive health and regularity support'
    },
    {
      id: 'anti-nausea',
      name: 'Anti-Nausea & Motion Sickness',
      products: ['Dimenhydrinate', 'Meclizine', 'Ginger supplements', 'Vitamin B6 (for nausea)', 'Antihistamines for motion sickness'],
      icon: '🤢',
      description: 'Nausea, vomiting, and motion sickness relief'
    },
    {
      id: 'ibs-relief',
      name: 'IBS & Intestinal Comfort',
      products: ['Antispasmodics (hyoscine)', 'Peppermint oil (enteric-coated)', 'Combination IBS relief products', 'Low-FODMAP fiber supplements', 'Herbal digestive aids'],
      icon: '🔄',
      description: 'Irritable bowel syndrome symptom management'
    },
    {
      id: 'pediatric-digestive',
      name: 'Pediatric Digestive Health',
      products: ['Infant anti-colic drops (simethicone)', 'Pediatric ORS', 'Probiotic drops for infants', 'Gentle laxatives for children', 'Gripe water', 'Zinc supplements for diarrhea'],
      icon: '👶',
      description: 'Age-appropriate GI treatments for children'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Digestive Health Products | Antacids, Laxatives & Probiotics | Pacem Health"
        description="Digestive health products including antacids, acid reducers, laxatives, anti-diarrheal medications, probiotics, digestive enzymes. Safe effective gastrointestinal relief supporting gut health across African pharmacies and communities."
        keywords={[
          'digestive health products Africa',
          'antacids Africa',
          'laxatives Africa',
          'anti-diarrheal medications',
          'probiotics Africa',
          'acid reducers Africa',
          'gut health products',
          'digestive relief medications'
        ]}
        structuredData={productSchema}
      />
      {/* Breadcrumb Bar */}
      <section className="bg-[#7C944B] text-white py-3">
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
            <span>Digestive Health</span>
          </div>
        </div>
      </section>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#7C944B] to-[#5A6D35] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Digestive Health Products
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive portfolio of gastrointestinal wellness products serving African communities. From antacids and acid reducers to probiotics and oral rehydration solutions, we provide evidence-based OTC medications that address the full spectrum of digestive health concerns — supporting gut health, managing acute GI conditions, and promoting long-term digestive wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Product Groups Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of digestive health and gastrointestinal wellness products</p>
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

      {/* Understanding Digestive Conditions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Common Digestive Conditions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding symptoms helps guide appropriate treatment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🔥</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Heartburn & GERD</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Burning sensation in chest, acid reflux, regurgitation
              </p>
              <p className="text-sm text-gray-600">
                <strong>Treatment:</strong> Antacids for immediate relief, H2 blockers or PPIs for longer-lasting control. Lifestyle modifications important.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🚫</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Constipation</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Infrequent bowel movements, hard stools, straining
              </p>
              <p className="text-sm text-gray-600">
                <strong>Treatment:</strong> Fiber supplements, osmotic laxatives (PEG, lactulose), stimulant laxatives for short-term use. Increase fluids.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💧</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Acute Diarrhea</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Loose, watery stools, increased frequency, dehydration risk
              </p>
              <p className="text-sm text-gray-600">
                <strong>Treatment:</strong> ORS for hydration, loperamide for symptom control, zinc (in children), probiotics. Seek care if severe/bloody.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💨</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Gas & Bloating</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Abdominal distension, flatulence, discomfort after eating
              </p>
              <p className="text-sm text-gray-600">
                <strong>Treatment:</strong> Simethicone, activated charcoal, digestive enzymes, dietary modifications. Avoid gas-producing foods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🤢</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Nausea & Vomiting</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Feeling sick to stomach, retching, motion sickness
              </p>
              <p className="text-sm text-gray-600">
                <strong>Treatment:</strong> Antihistamines (dimenhydrinate, meclizine), ginger supplements, small frequent meals. ORS if vomiting persists.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🔄</span>
                <h4 className="text-base" style={{ fontWeight: 600 }}>Irritable Bowel Syndrome</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Abdominal pain, altered bowel habits, cramping
              </p>
              <p className="text-sm text-gray-600">
                <strong>Treatment:</strong> Antispasmodics, fiber (soluble), probiotics, peppermint oil. Dietary management (low-FODMAP). Medical evaluation needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Use Guidelines Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Safe Use of Digestive Health Medications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Important guidelines for effective gastrointestinal symptom management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Key Safety Considerations</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Duration Limits:</strong> Don't use laxatives for more than 1 week without medical advice (dependency risk)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Antacid Interactions:</strong> Can affect absorption of other medications - separate by 2 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>PPI Long-term Use:</strong> Extended use may affect nutrient absorption (B12, calcium, magnesium)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Diarrhea Warning:</strong> Don't use anti-diarrheals if bloody diarrhea or high fever present</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">⚠</span>
                  <span><strong>Probiotics:</strong> Use with caution in immunocompromised patients</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>When to Seek Medical Care</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Severe Abdominal Pain:</strong> Especially if localized, persistent, or worsening</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Blood in Stool:</strong> Black, tarry stools or visible blood (red or maroon)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Persistent Symptoms:</strong> Heartburn/GERD not responding to OTC treatment after 2 weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Dehydration Signs:</strong> Decreased urination, dizziness, extreme thirst, dry mouth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Unexplained Weight Loss:</strong> Unintentional weight loss with digestive symptoms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span><strong>Chronic Diarrhea:</strong> Lasting more than 2 weeks, or with cholera-like symptoms</span>
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
            <h2 className="text-3xl mb-4">How Digestive Medications Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding mechanisms for targeted GI symptom relief
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💊</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Antacids</h4>
              <p className="text-sm text-gray-600 mb-3">
                Chemical neutralization of stomach acid
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Direct acid neutralization</li>
                <li>• Raises stomach pH immediately</li>
                <li>• Fast-acting (minutes)</li>
                <li>• Short duration (1-3 hours)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Acid Reducers</h4>
              <p className="text-sm text-gray-600 mb-3">
                Blocks acid production at cellular level
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• H2 blockers: histamine receptor antagonism</li>
                <li>• PPIs: proton pump inhibition</li>
                <li>• Reduces acid secretion</li>
                <li>• Long-lasting relief (8-24 hours)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🌾</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Laxatives</h4>
              <p className="text-sm text-gray-600 mb-3">
                Multiple mechanisms for bowel movement
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Stimulant: intestinal muscle contraction</li>
                <li>• Osmotic: water retention in colon</li>
                <li>• Bulk-forming: adds stool volume</li>
                <li>• Stool softener: lubricates stool</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🛑</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Anti-Diarrheals</h4>
              <p className="text-sm text-gray-600 mb-3">
                Slows intestinal motility
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Opioid receptor activation (loperamide)</li>
                <li>• Reduces intestinal contractions</li>
                <li>• Increases water absorption</li>
                <li>• Firms stool consistency</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🦠</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Probiotics</h4>
              <p className="text-sm text-gray-600 mb-3">
                Beneficial bacteria colonization
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Restores gut microbiome balance</li>
                <li>• Competes with harmful bacteria</li>
                <li>• Supports immune function</li>
                <li>• Produces beneficial metabolites</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>ORS Solutions</h4>
              <p className="text-sm text-gray-600 mb-3">
                Optimized electrolyte replacement
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Glucose-facilitated sodium absorption</li>
                <li>• Replaces lost fluids and electrolytes</li>
                <li>• Prevents/treats dehydration</li>
                <li>• WHO-recommended formula</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💨</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Anti-Gas Products</h4>
              <p className="text-sm text-gray-600 mb-3">
                Gas bubble breakdown
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Simethicone: breaks surface tension</li>
                <li>• Allows gas bubbles to coalesce</li>
                <li>• Facilitates gas passage/belching</li>
                <li>• Reduces bloating sensation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">⚗️</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Digestive Enzymes</h4>
              <p className="text-sm text-gray-600 mb-3">
                Enhanced nutrient breakdown
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Supplements natural enzyme production</li>
                <li>• Breaks down proteins, fats, carbs</li>
                <li>• Improves digestion and absorption</li>
                <li>• Reduces digestive discomfort</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diarrheal Disease Management Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Diarrheal Disease Management</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Critical for Africa: Evidence-based approach to acute diarrhea
            </p>
          </div>

          <div className="bg-[#E6F4EA] border-2 border-[#34A853] rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">💧</div>
              <div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>WHO-Recommended Treatment Protocol</h4>
                <p className="text-gray-700 mb-3">
                  Diarrheal diseases remain a leading cause of child mortality in Africa. The WHO recommends a three-pronged approach:
                </p>
                <ol className="text-gray-700 space-y-2">
                  <li><strong>1. Oral Rehydration Solution (ORS):</strong> First-line treatment to prevent and treat dehydration</li>
                  <li><strong>2. Zinc Supplementation:</strong> 10-20mg daily for 10-14 days reduces duration and severity</li>
                  <li><strong>3. Continued Feeding:</strong> Maintain nutrition, breastfeeding; avoid prolonged fasting</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>ORS Preparation & Administration</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">1</span>
                  <span><strong>Preparation:</strong> Dissolve 1 ORS packet in 1 liter of clean/boiled water. Do not add extra salt or sugar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">2</span>
                  <span><strong>Administration:</strong> Give small, frequent sips. For children: 50-100ml after each loose stool.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">3</span>
                  <span><strong>Amount:</strong> Adults: up to 2-3 liters/day. Children: based on weight and dehydration severity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">4</span>
                  <span><strong>Storage:</strong> Use prepared solution within 24 hours if refrigerated, 12 hours at room temperature.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border-2 border-gray-200">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Dehydration Assessment</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600, color: '#FFA500' }}>Mild-Moderate Dehydration:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Restless, irritable behavior</li>
                    <li>• Thirsty, drinks eagerly</li>
                    <li>• Skin pinch goes back slowly</li>
                    <li>• Eyes appear sunken</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm mb-2" style={{ fontWeight: 600, color: '#DC143C' }}>Severe Dehydration (Medical Emergency):</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Lethargic, unconscious, floppy</li>
                    <li>• Unable to drink, drinks poorly</li>
                    <li>• Skin pinch goes back very slowly (&gt;2 sec)</li>
                    <li>• Eyes very sunken, dry mouth/tongue</li>
                    <li>• <strong>Seek immediate medical care</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pediatric Guidelines Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Pediatric Digestive Health</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Special considerations for treating children
            </p>
          </div>

          <div className="bg-[#FFF9E6] border-2 border-[#FFD700] rounded-xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Pediatric Safety Guidelines</h4>
                <p className="text-gray-700">
                  Many adult digestive medications are not appropriate for young children. Always use age-appropriate formulations, dose by weight when possible, and consult healthcare providers for infants under 6 months. For infant colic, try non-medication approaches first (burping, positioning, smaller frequent feeds).
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Infant Digestive Issues</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Colic:</strong> Simethicone drops, probiotics (Lactobacillus reuteri), gripe water</li>
                <li><strong>Gas:</strong> Anti-colic drops, proper feeding technique, burping</li>
                <li><strong>Constipation:</strong> Glycerin suppositories, increased fluids, consult doctor</li>
                <li><strong>Diarrhea:</strong> Continue breastfeeding, ORS, zinc supplementation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Toddler & Child (1-12 years)</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>Constipation:</strong> Fiber supplements, lactulose, PEG (weight-based dosing)</li>
                <li><strong>Diarrhea:</strong> ORS primary treatment, zinc 10-20mg daily, probiotics</li>
                <li><strong>Nausea:</strong> Ginger, small meals, antihistamines (age-appropriate)</li>
                <li><strong>Antacids:</strong> Calcium carbonate safe for children &gt;2 years (proper dosing)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Product Restrictions</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• <strong>Loperamide:</strong> Not for children under 6 years</li>
                <li>• <strong>Bismuth subsalicylate:</strong> Avoid in children (Reye's syndrome risk)</li>
                <li>• <strong>PPIs:</strong> Prescription only for pediatric use in most cases</li>
                <li>• <strong>Stimulant laxatives:</strong> Use with extreme caution, short-term only</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle & Dietary Recommendations Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Lifestyle & Dietary Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complementary strategies for digestive wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🥗</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Balanced Diet</h4>
              <p className="text-sm text-gray-600">
                Include fiber-rich foods (fruits, vegetables, whole grains), adequate hydration, probiotic foods (yogurt), and limit processed foods
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">💧</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Hydration</h4>
              <p className="text-sm text-gray-600">
                Drink 6-8 glasses of water daily. Essential for preventing constipation and supporting overall digestive function
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🏃</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Regular Exercise</h4>
              <p className="text-sm text-gray-600">
                Physical activity stimulates intestinal motility, reduces constipation, and supports healthy digestion
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">😌</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Stress Management</h4>
              <p className="text-sm text-gray-600">
                Gut-brain connection means stress affects digestion. Practice relaxation, adequate sleep, mindfulness
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🍽️</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Eating Habits</h4>
              <p className="text-sm text-gray-600">
                Eat slowly, chew thoroughly, avoid large meals late at night, maintain regular meal times
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🚭</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Avoid Triggers</h4>
              <p className="text-sm text-gray-600">
                Identify and limit foods that trigger symptoms (spicy, fatty, acidic). Reduce alcohol, caffeine, tobacco
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">📝</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Food Diary</h4>
              <p className="text-sm text-gray-600">
                Track foods and symptoms to identify patterns and triggers. Helpful for managing IBS and food sensitivities
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <div className="text-3xl mb-3">🧘</div>
              <h4 className="text-base mb-2" style={{ fontWeight: 600 }}>Posture & Position</h4>
              <p className="text-sm text-gray-600">
                Elevate head of bed for GERD, avoid lying down after meals, use proper toilet posture for constipation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Probiotic Selection Guide Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Probiotic Selection Guide</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choosing the right probiotic for specific conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Antibiotic-Associated Diarrhea</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Recommended Strains:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Saccharomyces boulardii</li>
                <li>• Lactobacillus rhamnosus GG</li>
                <li>• Lactobacillus casei</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Take during and after antibiotic course. Separate by 2-3 hours from antibiotic dose.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Acute Infectious Diarrhea</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Recommended Strains:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Saccharomyces boulardii</li>
                <li>• Lactobacillus reuteri</li>
                <li>• Multi-strain combinations</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Start early in illness course. Use alongside ORS therapy for best results.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Irritable Bowel Syndrome</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Recommended Strains:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bifidobacterium infantis</li>
                <li>• Multi-strain Lactobacillus</li>
                <li>• VSL#3 (high-potency blend)</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Requires consistent use for several weeks. Individual response varies.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>General Gut Health</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Recommended Strains:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-strain formulations</li>
                <li>• Lactobacillus acidophilus</li>
                <li>• Bifidobacterium longum</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Broad-spectrum probiotics for daily digestive support and immune health.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Infant Colic</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Recommended Strains:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lactobacillus reuteri DSM 17938</li>
                <li>• Infant-specific formulations</li>
                <li>• Drop formulations</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">Evidence-based for reducing crying time in colicky breastfed infants.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-gray-200">
              <h4 className="text-base mb-3" style={{ fontWeight: 600 }}>Lactose Intolerance Support</h4>
              <p className="text-sm text-gray-700 mb-2"><strong>Recommended Strains:</strong></p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lactobacillus bulgaricus</li>
                <li>• Streptococcus thermophilus</li>
                <li>• Yogurt with live cultures</li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">May improve lactose digestion. Use with lactase enzyme supplements.</p>
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
                  <span><strong>WHO Prequalification:</strong> ORS and essential digestive medications from approved sources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>GMP Compliance:</strong> All products manufactured in certified facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Probiotic Viability:</strong> CFU counts verified, appropriate storage conditions maintained</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Climate Stability:</strong> Formulations tested for tropical/sub-tropical conditions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl mb-4" style={{ fontWeight: 600 }}>Distribution & Access</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Wide Availability:</strong> Hospital pharmacies, community pharmacies, and retail outlets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>ORS Distribution:</strong> Essential medicine lists, public health programs, emergency stocks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Affordable Options:</strong> Generic and branded products at various price points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#7C944B] mt-1">✓</span>
                  <span><strong>Patient Education:</strong> Clear labeling, pharmacist counseling, usage instructions</span>
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
              <div className="text-4xl mb-2 text-[#7C944B]">12</div>
              <div className="text-gray-600">Product Groups</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">60+</div>
              <div className="text-gray-600">Product Variations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2 text-[#7C944B]">WHO</div>
              <div className="text-gray-600">ORS Standards</div>
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