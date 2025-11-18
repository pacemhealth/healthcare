import { Link, useNavigate } from 'react-router-dom';
import { SEOHead } from '../../../../components/SEOHead';

export default function DiagnosticImagingEquipmentPage() {
  const navigate = useNavigate();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductGroup",
    "name": "Diagnostic Imaging Equipment",
    "description": "X-ray systems, ultrasound machines, digital radiography, mammography, CT scanners, imaging equipment for diagnostic medical imaging across Africa",
    "brand": {"@type": "Brand", "name": "Pacem Health"}
  };

  const productGroups = [
    {
      id: 'portable-xray',
      name: 'Portable X-Ray Systems',
      products: ['Mobile X-ray units', 'Battery-powered X-ray', 'Digital radiography (DR)', 'Computed radiography (CR)', 'X-ray generators'],
      icon: '📷',
      description: 'Mobile imaging solutions'
    },
    {
      id: 'ultrasound-systems',
      name: 'Ultrasound Systems',
      products: ['Portable ultrasound machines', 'Obstetric ultrasound', 'Abdominal ultrasound', 'Cardiac echo systems', 'Point-of-care ultrasound (POCUS)'],
      icon: '🔊',
      description: 'Diagnostic ultrasound'
    },
    {
      id: 'digital-radiography',
      name: 'Digital Radiography',
      products: ['DR flat panels', 'CR cassettes & readers', 'PACS systems (image storage)', 'Imaging workstations', 'Image quality phantoms'],
      icon: '💻',
      description: 'Digital X-ray imaging'
    },
    {
      id: 'mammography',
      name: 'Mammography Systems',
      products: ['Digital mammography units', 'Breast ultrasound', 'Biopsy guidance systems', 'CAD software', 'Mammography phantoms'],
      icon: '🎗️',
      description: 'Breast cancer screening'
    },
    {
      id: 'fluoroscopy',
      name: 'Fluoroscopy & C-Arms',
      products: ['Mobile C-arm systems', 'Fluoroscopy units', 'Image intensifiers', 'Flat-panel fluoroscopy', 'Surgical C-arms'],
      icon: '📹',
      description: 'Real-time imaging'
    },
    {
      id: 'dental-imaging',
      name: 'Dental Imaging',
      products: ['Dental X-ray units', 'Panoramic X-ray', 'Intraoral sensors', 'Cephalometric X-ray', 'Digital dental imaging'],
      icon: '🦷',
      description: 'Dental radiography'
    },
    {
      id: 'ct-scanners',
      name: 'CT Scanners',
      products: ['Multi-slice CT scanners', 'Portable CT systems', 'CT contrast injectors', 'CT workstations', 'Radiation dose monitoring'],
      icon: '🔍',
      description: 'Computed tomography'
    },
    {
      id: 'xray-accessories',
      name: 'X-Ray Accessories',
      products: ['Lead aprons & shields', 'Positioning aids', 'Grid cassettes', 'Film processors (if analog)', 'Dosimeters (radiation monitoring)'],
      icon: '🛡️',
      description: 'Radiation protection'
    },
    {
      id: 'ecg-machines',
      name: 'ECG Machines',
      products: ['12-lead ECG machines', 'Portable ECG devices', 'Holter monitors (24-hour)', 'Stress test systems', 'ECG paper & electrodes'],
      icon: '❤️',
      description: 'Cardiac monitoring'
    },
    {
      id: 'endoscopy-systems',
      name: 'Endoscopy Systems',
      products: ['Flexible gastroscopes', 'Colonoscopes', 'Bronchoscopes', 'Video endoscopy towers', 'Biopsy forceps'],
      icon: '🔬',
      description: 'Internal visualization'
    },
    {
      id: 'imaging-contrast-media',
      name: 'Imaging Contrast Media',
      products: ['Iodinated contrast (CT, X-ray)', 'Barium sulfate (GI studies)', 'Ultrasound contrast', 'Contrast injectors', 'Emergency contrast kits'],
      icon: '💉',
      description: 'Contrast agents'
    }
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">
      <SEOHead
        title="Diagnostic Imaging Equipment | X-Ray, Ultrasound & Radiology | Pacem Health"
        description="Diagnostic imaging equipment including portable X-ray systems, ultrasound machines, digital radiography, mammography systems, CT scanners. Advanced medical imaging technology strengthening diagnostic capacity across African healthcare facilities."
        keywords={[
          'diagnostic imaging equipment Africa',
          'X-ray systems Africa',
          'ultrasound machines Africa',
          'digital radiography',
          'mammography systems',
          'portable X-ray Africa',
          'medical imaging equipment',
          'radiology equipment Africa'
        ]}
        structuredData={productSchema}
      />
      {/* Breadcrumb Bar */}
      <section className="bg-[#0033A0] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:underline">Products</Link>
            <span>/</span>
            <Link to="/products/division1" className="hover:underline">Essential Healthcare Products</Link>
            <span>/</span>
            <Link to="/products/categories/diagnostic-equipment-supplies" className="hover:underline">
              Diagnostic Equipment & Supplies
            </Link>
            <span>/</span>
            <span>Diagnostic Imaging Equipment</span>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#6B3FA8] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">
              Diagnostic Imaging Equipment
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-6">
              Portable X-ray systems, ultrasound machines, digital radiography, CT scanners, and point-of-care imaging devices. Quality diagnostic imaging solutions bringing advanced visualization capabilities to African healthcare facilities, from rural health centers to tertiary hospitals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl mb-3 md:mb-4">Product Groups</h2>
            <p className="text-gray-600">Browse our complete selection of diagnostic imaging equipment</p>
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
              onClick={() => navigate('/products/categories/diagnostic-equipment-supplies')}
              className="text-[#4B2991] hover:underline"
            >
              ← Back to Diagnostic Equipment & Supplies
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Portable Imaging for Africa</h3>
              <p className="text-gray-700 mb-4">
                Portable and battery-powered imaging brings diagnostics to remote and resource-limited settings.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Mobile X-ray for bedridden patients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Portable ultrasound for obstetric care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Battery operation (power outages)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Ruggedized for field use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Teleradiology connectivity (remote reading)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Radiation Safety</h3>
              <p className="text-gray-700 mb-4">
                Ensuring patient and staff safety through proper radiation protection and monitoring.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>ALARA principles (As Low As Reasonably Achievable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Lead aprons, thyroid shields, gloves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Personal dosimetry badges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Shielded imaging rooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4B2991] mt-1">✓</span>
                  <span>Radiographer training and certification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}