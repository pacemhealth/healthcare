import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function PatientMonitoringVitalsPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Patient Monitoring & Vitals",
    "description": "Vital signs monitors, blood pressure monitors, pulse oximeters, patient monitoring systems across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'vital-signs-monitors',
      name: 'Vital Signs Monitors',
      products: ['Multi-parameter monitors (5-parameter)', 'BP/SpO2/Temp monitors', 'Portable vital signs monitors', 'Bedside monitors', 'Central monitoring stations'],
      icon: '📊',
      description: 'Multi-parameter monitoring'
    },
    {
      id: 'blood-pressure-monitors',
      name: 'Blood Pressure Monitors',
      products: ['Automated BP monitors (NIBP)', 'Manual BP cuffs (aneroid)', 'Mercury sphygmomanometers', 'Wrist BP monitors', 'Ambulatory BP monitors (24-hour)'],
      icon: '🩺',
      description: 'Blood pressure measurement'
    },
    {
      id: 'pulse-oximeters',
      name: 'Pulse Oximeters',
      products: ['Finger pulse oximeters', 'Handheld pulse ox', 'Tabletop pulse oximeters', 'Pediatric/neonatal sensors', 'Reusable SpO2 probes'],
      icon: '🫀',
      description: 'Oxygen saturation monitoring'
    },
    {
      id: 'thermometers',
      name: 'Thermometers',
      products: ['Digital thermometers (oral, rectal)', 'Infrared forehead thermometers', 'Tympanic (ear) thermometers', 'Continuous temp monitoring', 'Glass thermometers'],
      icon: '🌡️',
      description: 'Temperature measurement'
    },
    {
      id: 'ecg-monitors',
      name: 'ECG Monitors & Machines',
      products: ['12-lead ECG machines', 'Portable ECG monitors', 'Holter monitors (24-hour)', 'Telemetry systems', 'ECG electrodes & cables'],
      icon: '❤️',
      description: 'Cardiac monitoring'
    },
    {
      id: 'fetal-monitors',
      name: 'Fetal Monitors & Dopplers',
      products: ['Fetal dopplers (handheld)', 'CTG machines (cardiotocography)', 'Fetal heart rate monitors', 'Ultrasound gel', 'Transducer belts'],
      icon: '👶',
      description: 'Obstetric monitoring'
    },
    {
      id: 'defibrillators',
      name: 'Defibrillators & AEDs',
      products: ['Automated external defibrillators (AEDs)', 'Manual defibrillators', 'Defibrillator pads (adult, pediatric)', 'AED cabinets & signs', 'Training AEDs'],
      icon: '⚡',
      description: 'Emergency cardiac care'
    },
    {
      id: 'capnography',
      name: 'Capnography & EtCO2 Monitors',
      products: ['Mainstream capnography', 'Sidestream capnography', 'Portable EtCO2 monitors', 'Nasal cannulas (EtCO2)', 'CO2 sampling lines'],
      icon: '💨',
      description: 'Respiratory monitoring'
    },
    {
      id: 'blood-glucose-meters',
      name: 'Blood Glucose Meters',
      products: ['Glucose meters (various brands)', 'Test strips', 'Lancing devices', 'Control solutions', 'Continuous glucose monitors (CGM)'],
      icon: '💉',
      description: 'Diabetes monitoring'
    },
    {
      id: 'patient-monitors-icu',
      name: 'ICU & Critical Care Monitors',
      products: ['Bedside ICU monitors', 'Invasive pressure monitoring', 'Cardiac output monitors', 'Central monitoring systems', 'Alarm management systems'],
      icon: '🏥',
      description: 'Intensive care monitoring'
    },
    {
      id: 'scales-weight',
      name: 'Patient Scales & Weight Measurement',
      products: ['Adult digital scales', 'Wheelchair scales', 'Bed scales', 'Pediatric/infant scales', 'BMI calculators'],
      icon: '⚖️',
      description: 'Weight monitoring'
    },
    {
      id: 'stethoscopes',
      name: 'Stethoscopes',
      products: ['Adult stethoscopes', 'Pediatric stethoscopes', 'Electronic stethoscopes', 'Fetal stethoscopes', 'Teaching stethoscopes (dual head)'],
      icon: '🩺',
      description: 'Auscultation tools'
    },
    {
      id: 'monitoring-accessories',
      name: 'Monitoring Accessories',
      products: ['BP cuffs (various sizes)', 'SpO2 sensors & probes', 'ECG electrodes (disposable)', 'Temperature probes', 'Monitor stands & mounts'],
      icon: '🔧',
      description: 'Monitor accessories'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Patient Monitoring & Vitals | Medical Monitoring Equipment | Pacem Health"
        description="Patient monitoring and vitals including vital signs monitors, blood pressure monitors, pulse oximeters. Comprehensive patient monitoring systems for African healthcare facilities."
        keywords={[
          'patient monitoring Africa',
          'vital signs monitors',
          'blood pressure monitors',
          'pulse oximeters',
          'patient monitoring systems',
          'medical monitors',
          'vital signs equipment',
          'patient monitoring devices'
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
            <Link to="/products/division1" className="hover:underline">Essential Healthcare Products</Link>
            <span>/</span>
            <Link to="/products/categories/durable-medical-equipment" className="hover:underline">
              Durable Medical Equipment
            </Link>
            <span>/</span>
            <span>Patient Monitoring & Vital Signs Equipment</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Patient Monitoring & Vital Signs Equipment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Comprehensive patient monitoring solutions including vital signs monitors, blood pressure monitors, pulse oximeters, thermometers, ECG machines, and bedside monitoring systems. Quality monitoring equipment enabling early detection, clinical decision-making, and patient safety across African healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of patient monitoring equipment</p>
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
              onClick={() => navigate('/products/categories/durable-medical-equipment')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Durable Medical Equipment
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Vital Signs Monitoring Importance</h3>
              <p className="text-gray-700 mb-4">
                Regular vital signs monitoring enables early detection of patient deterioration.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Early warning score systems (EWS/MEWS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sepsis recognition and response</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Post-operative monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Chronic disease management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Maternal and neonatal monitoring</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Equipment Accuracy & Calibration</h3>
              <p className="text-gray-700 mb-4">
                Accurate monitoring requires proper equipment calibration and maintenance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Regular calibration schedules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Proper cuff sizing (BP accuracy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Sensor replacement (SpO2, temp)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Quality control testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Staff training on proper technique</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}