import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function EmergencyMedicalSuppliesPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Emergency Medical Supplies",
    "description": "Emergency health kits, trauma supplies, field hospital equipment, emergency logistics for disaster response across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'emergency-health-kits',
      name: 'Emergency Health Kits',
      description: 'Pre-packaged WHO emergency kits, interagency emergency health kits (IEHK), trauma kits, and standardized supplies for rapid deployment',
      icon: '🎒'
    },
    {
      id: 'trauma-emergency-care',
      name: 'Trauma & Emergency Care Supplies',
      description: 'Advanced trauma kits, hemorrhage control supplies, emergency airway equipment, resuscitation materials for mass casualty response',
      icon: '🚑'
    },
    {
      id: 'field-hospital-equipment',
      name: 'Field Hospital Equipment',
      description: 'Portable surgical units, mobile clinics, temporary treatment facilities, field pharmacy supplies for emergency healthcare delivery',
      icon: '⛺'
    },
    {
      id: 'emergency-logistics-storage',
      name: 'Emergency Logistics & Storage',
      description: 'Medical cold chain equipment, emergency supply warehousing, rapid deployment systems, and pre-positioning infrastructure',
      icon: '📦'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Emergency Medical Supplies | Trauma Kits & Field Hospitals | Pacem Health"
        description="Emergency medical supplies including WHO emergency kits, trauma supplies, field hospital equipment, emergency logistics infrastructure. Rapid deployment healthcare solutions for disasters, outbreaks, humanitarian crises across Africa."
        keywords={[
          'emergency medical supplies Africa',
          'WHO emergency kits',
          'trauma kits Africa',
          'field hospital equipment',
          'disaster medical supplies',
          'emergency health kits',
          'humanitarian medical supplies',
          'rapid deployment healthcare'
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
            <Link to="/products/categories/emergency-response-disaster-relief" className="hover:underline">Emergency Response & Disaster Relief</Link>
            <span>/</span>
            <span>Emergency Medical Supplies</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-sm">Emergency Response & Disaster Relief</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Emergency Medical Supplies
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Pre-positioned emergency kits, trauma supplies, field hospital equipment, and rapid deployment medical commodities. Life-saving emergency medical supplies enabling immediate crisis response when disasters strike—from standardized WHO emergency health kits treating 10,000 people for 3 months to field hospitals providing surgical capacity within 48 hours to pre-positioned stockpiles enabling same-day deployment where minutes determine survival and preparedness prevents chaos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Areas</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Complete emergency medical supply solutions for rapid deployment
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
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Why Emergency Medical Preparedness Saves Lives</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Speed determines survival in humanitarian emergencies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-xl mb-2">The Golden Hours</h3>
              <p className="text-gray-700">
                First 72 hours after disaster determine survival. Most preventable deaths occur in this period—from trauma, dehydration, hypothermia, infections. Emergency medical supplies must reach affected populations within 24-48 hours. Pre-positioned stocks enable immediate response. Unprepared systems require 7-14 days to mobilize supplies—by then, thousands die from treatable conditions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-xl mb-2">Africa's Vulnerability</h3>
              <p className="text-gray-700">
                Africa experiences 20+ major emergencies annually—droughts, floods, conflicts, disease outbreaks. 120 million Africans affected by humanitarian crises. Weak health systems collapse under surge demand. Limited emergency stockpiles. Poor logistics infrastructure delaying relief. Climate change increasing disaster frequency. Strategic emergency preparedness essential for resilience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📦</div>
              <h3 className="text-xl mb-2">Standardized Emergency Kits</h3>
              <p className="text-gray-700">
                WHO Interagency Emergency Health Kits (IEHK) revolutionized emergency response—standardized contents treating 10,000 people for 3 months, pre-packed for rapid deployment, sufficient for most emergencies. Kit-based approach eliminates procurement delays, ensures comprehensive supply mix, simplifies logistics, enables same-day deployment from pre-positioned regional hubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Emergency Response Challenges</h3>
              <p className="text-gray-700 mb-4">
                Barriers to effective medical response in disasters
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited pre-positioned emergency medical stockpiles in-country</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Weak logistics systems unable to handle surge demand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Procurement delays—weeks to months for supplies to arrive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Inadequate health worker training in emergency care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Poor coordination among humanitarian actors creating gaps/duplications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#DC3545] mt-1">✗</span>
                  <span>Limited funding for emergency preparedness vs. response</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Effective Preparedness Strategies</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based approaches to emergency medical preparedness
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Pre-positioned regional stockpiles with standardized emergency kits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Rapid deployment mechanisms—24-48 hour deployment capacity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Emergency response teams trained and on-standby</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Field hospital capacity—mobile surgical units, temporary facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Cold chain infrastructure for vaccine/medicine preservation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Coordination mechanisms—cluster system, emergency operations centers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#F0EBF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">WHO Emergency Health Kits</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Standardized, pre-packaged medical supplies for rapid emergency deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>IEHK Basic Unit</h4>
              <p className="text-sm text-gray-700 mb-2">
                Treats 10,000 people for 3 months. Essential drugs, medical devices, renewable supplies. 10 modules covering most common conditions. Designed for primary healthcare in emergency settings. No cold chain required.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Weight: 1,094 kg (10 modules)</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">💉</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>IEHK Supplementary Units</h4>
              <p className="text-sm text-gray-700 mb-2">
                Specialized modules for specific needs: surgical supplies, obstetric care, cholera treatment, measles response, severe malnutrition. Deployed based on emergency type. Complement basic unit.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Add-ons for specific emergencies</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🏥</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Trauma Kits</h4>
              <p className="text-sm text-gray-700 mb-2">
                Advanced trauma care for mass casualties: hemorrhage control, wound management, fracture stabilization, emergency surgical supplies. Designed for conflict/disaster settings with high injury burden.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Treats 100 major trauma cases</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-3">🎒</div>
              <h4 className="text-lg mb-2" style={{ fontWeight: 600 }}>Diarrheal Disease Kits</h4>
              <p className="text-sm text-gray-700 mb-2">
                Specific for cholera/AWD outbreaks: ORS, IV fluids, antibiotics, disinfection supplies. Rapid deployment for waterborne disease emergencies. Treats 100 severe + 400 moderate cases.
              </p>
              <div className="text-xs text-[#7C944B]" style={{ fontWeight: 600 }}>Critical for flood/disaster response</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Prepare Now, Save Lives Later</h2>
            <p className="text-base md:text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Partner with Pacem Health to build emergency medical preparedness capacity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/support/general-inquiry')}
                className="px-6 py-3 bg-white text-[#4B2991] rounded-lg hover:bg-gray-100 transition-colors"
              >
                Emergency Preparedness Consultation
              </button>
              <button
                onClick={() => navigate('/support/procurement-supply-chain')}
                className="px-6 py-3 bg-[#7C944B] text-white rounded-lg hover:bg-[#6A7D3F] transition-colors"
              >
                Request Emergency Supplies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}