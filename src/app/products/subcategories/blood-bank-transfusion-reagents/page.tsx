import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function BloodBankTransfusionReagentsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Blood Bank & Transfusion Reagents",
    "description": "Comprehensive blood banking reagents including blood typing sera, antibody screening cells, crossmatch reagents, Coombs reagents, gel card systems ensuring safe blood transfusion across African healthcare facilities",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'blood-typing-sera',
      name: 'Blood Grouping Sera',
      products: ['Anti-A serum', 'Anti-B serum', 'Anti-AB serum', 'Anti-D (Rh) serum', 'Monoclonal typing sera'],
      icon: '🩸',
      description: 'ABO/Rh typing'
    },
    {
      id: 'antibody-screening',
      name: 'Antibody Screening Cells',
      products: ['3-cell antibody screening panels', 'Antibody identification panels (11-cell)', 'Reagent red blood cells (group O)', 'Antigen-positive cells', 'Quality control cells'],
      icon: '🔬',
      description: 'Irregular antibody detection'
    },
    {
      id: 'crossmatch-reagents',
      name: 'Crossmatch Reagents',
      products: ['Low ionic strength solution (LISS)', 'Polyethylene glycol (PEG)', 'Albumin (22%, 30%)', 'Saline (0.9%)', 'Phosphate buffered saline'],
      icon: '🧪',
      description: 'Compatibility testing'
    },
    {
      id: 'coombs-reagents',
      name: 'Antiglobulin (Coombs) Reagents',
      products: ['Polyspecific AHG (anti-IgG, anti-C3d)', 'Monospecific anti-IgG', 'Monospecific anti-C3d', 'IgG-coated check cells', 'DAT/IAT reagents'],
      icon: '⚗️',
      description: 'Antibody detection'
    },
    {
      id: 'gel-card-systems',
      name: 'Gel Card & Column Agglutination',
      products: ['ABO/Rh gel cards', 'Antibody screening gel cards', 'Crossmatch gel cards', 'DAT gel cards', 'Gel card centrifuges'],
      icon: '🎴',
      description: 'Modern blood banking'
    },
    {
      id: 'weak-d-testing',
      name: 'Weak D & Du Testing',
      products: ['Weak D (Du) test reagents', 'Anti-D for weak D testing', 'Rh control serum', 'Enzyme reagents (papain, ficin)', 'Pre-warmed sera'],
      icon: '🔍',
      description: 'Rh variant testing'
    },
    {
      id: 'donor-screening',
      name: 'Donor Screening Tests',
      products: ['TTI screening (HIV, HBV, HCV, syphilis)', 'Rapid donor screening kits', 'Hemoglobin screening (copper sulfate)', 'Blood donor questionnaires', 'Donor ID labels'],
      icon: '💉',
      description: 'Blood safety testing'
    },
    {
      id: 'blood-collection',
      name: 'Blood Collection & Storage',
      products: ['Blood bags (single, double, triple, quadruple)', 'CPDA-1 anticoagulant bags', 'Platelet storage bags', 'Blood donor needles (16G)', 'Blood bag tube sealers'],
      icon: '📦',
      description: 'Collection supplies'
    },
    {
      id: 'component-preparation',
      name: 'Component Preparation',
      products: ['Blood component extractors', 'Plasma expressors', 'Platelet agitators', 'Component filters', 'Transfer bags & sets'],
      icon: '🧬',
      description: 'Blood component processing'
    },
    {
      id: 'hemolytic-disease',
      name: 'Hemolytic Disease Testing',
      products: ['Anti-A cord blood testing', 'Anti-B cord blood testing', 'Bilirubin measurement', 'Cord blood DAT', 'Maternal antibody titration'],
      icon: '👶',
      description: 'HDN screening'
    },
    {
      id: 'platelet-testing',
      name: 'Platelet Function & Storage',
      products: ['Platelet aggregation reagents', 'Platelet count quality control', 'pH indicators', 'Bacterial detection systems', 'Platelet storage monitors'],
      icon: '🩹',
      description: 'Platelet quality'
    },
    {
      id: 'blood-bank-controls',
      name: 'Blood Bank Quality Controls',
      products: ['ABO/Rh control cells', 'Antibody screening controls', 'Crossmatch control samples', 'Proficiency testing panels', 'Reagent QC records'],
      icon: '✅',
      description: 'Blood bank QC'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Blood Bank & Transfusion Reagents | ABO Typing, Crossmatch & Coombs | Pacem Health"
        description="Comprehensive blood banking reagents including blood typing sera, antibody screening cells, crossmatch reagents, Coombs reagents, gel card systems, donor screening tests. Quality-assured reagents ensuring safe blood transfusion through accurate blood grouping, compatibility testing, TTI screening across African healthcare facilities."
        keywords={[
          'blood bank reagents Africa',
          'transfusion reagents Africa',
          'blood typing sera',
          'ABO Rh typing reagents',
          'crossmatch reagents',
          'Coombs reagents',
          'gel card systems Africa',
          'blood safety testing Africa'
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
            <Link to="/products/categories/laboratory-reagents-chemicals" className="hover:underline">
              Laboratory Reagents & Chemicals
            </Link>
            <span>/</span>
            <span>Blood Bank & Transfusion Reagents</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Blood Bank & Transfusion Reagents
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive blood banking reagents including blood typing sera, antibody screening cells, crossmatch reagents, Coombs reagents, gel card systems, and donor screening tests. Quality-assured reagents ensuring safe blood transfusion through accurate blood grouping, compatibility testing, and transfusion-transmissible infection screening across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of blood bank and transfusion reagents</p>
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
              onClick={() => navigate('/products/categories/laboratory-reagents-chemicals')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Laboratory Reagents & Chemicals
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Blood Safety in Africa</h3>
              <p className="text-gray-700 mb-4">
                Safe blood transfusion requires proper screening, typing, and compatibility testing.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>100% voluntary non-remunerated donation (VNRD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>TTI screening (HIV, HBV, HCV, syphilis mandatory)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ABO/Rh typing of all donations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Compatibility testing before transfusion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Component therapy (reduce transfusion reactions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cold chain maintenance (2-6°C for RBCs)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Pre-Transfusion Testing</h3>
              <p className="text-gray-700 mb-4">
                Proper pre-transfusion testing prevents hemolytic transfusion reactions.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ABO/Rh typing (patient & donor)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Antibody screening (detect irregular antibodies)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Crossmatch (major, minor optional)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Historical ABO/Rh check (previous records)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Emergency uncrossmatched O-negative protocol</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Documentation and traceability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}