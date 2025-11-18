import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { ProductDetailsDialog } from '../../../components/ProductDetailsDialog';
import { useState } from 'react';

export default function MedicalEquipmentPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const productCategories = [
    { id: 'all', label: 'All Equipment', count: 120 },
    { id: 'diagnostic', label: 'Diagnostic Equipment', count: 35 },
    { id: 'surgical', label: 'Surgical Equipment', count: 28 },
    { id: 'maternal', label: 'Maternal & Child Health', count: 22 },
    { id: 'mobile', label: 'Mobile Systems', count: 18 },
    { id: 'monitoring', label: 'Patient Monitoring', count: 17 }
  ];

  const featuredEquipment = [
    {
      name: 'Portable Ultrasound System',
      category: 'Diagnostic Equipment',
      description: 'High-resolution mobile ultrasound with multiple probes for obstetric, abdominal, and cardiac imaging.',
      image: 'https://images.unsplash.com/photo-1682663947090-b35e4f2c23cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWFjaGluZSUyMG1lZGljYWx8ZW58MXx8fHwxNzYyOTg2MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        '15-inch HD display',
        'Multi-frequency probes included',
        'Long battery life (4+ hours)',
        'DICOM compatible'
      ],
      applications: ['Prenatal Care', 'Emergency Medicine', 'Primary Care'],
      certifications: ['CE', 'FDA', 'ISO 13485'],
      badge: 'Best Seller'
    },
    {
      name: 'Anesthesia Machine',
      category: 'Surgical Equipment',
      description: 'Complete anesthesia delivery system with ventilator and monitoring capabilities for operating theaters.',
      image: 'https://images.unsplash.com/photo-1758206523735-079e56f2faf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmVzdGhlc2lhJTIwbWFjaGluZSUyMG9wZXJhdGluZyUyMHJvb218ZW58MXx8fHwxNzYzMDM4MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Comprehensive gas monitoring',
        'Advanced ventilation modes',
        'Integrated patient monitoring',
        'Backup battery system'
      ],
      applications: ['General Surgery', 'Obstetric Surgery', 'Emergency Operations'],
      certifications: ['CE', 'ISO 13485'],
      badge: 'Featured'
    },
    {
      name: 'Fetal Doppler Monitor',
      category: 'Maternal & Child Health',
      description: 'Portable fetal heart rate monitor for routine prenatal monitoring and labor management.',
      image: 'https://images.unsplash.com/photo-1595464144526-5fb181b74625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvciUyMGhvc3BpdGFsfGVufDF8fHx8MTc2MzAzODEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Crystal clear audio output',
        'LCD display with FHR reading',
        'Rechargeable battery',
        'Waterproof probe'
      ],
      applications: ['Antenatal Clinics', 'Labor & Delivery', 'Community Health'],
      certifications: ['CE', 'FDA', 'WHO PQ'],
      badge: null
    },
    {
      name: 'Patient Monitor (Multi-Parameter)',
      category: 'Patient Monitoring',
      description: 'Comprehensive vital signs monitoring system for ICU, emergency, and general ward applications.',
      image: 'https://images.unsplash.com/photo-1758691462123-8a17ae95d203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwbW9uaXRvcmluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjMwMzgxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'ECG, SpO2, NIBP, Temp, Resp',
        '12.1-inch touchscreen',
        'Wireless central monitoring',
        'Extended battery backup'
      ],
      applications: ['ICU', 'Emergency Department', 'Post-Op Recovery'],
      certifications: ['CE', 'FDA', 'ISO 13485'],
      badge: null
    },
    {
      name: 'Mobile X-Ray Unit',
      category: 'Mobile Systems',
      description: 'Portable digital X-ray system for bedside imaging in hospitals and remote health facilities.',
      image: 'https://images.unsplash.com/photo-1668871100416-1a4c90acd0ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB4cmF5JTIwbWFjaGluZXxlbnwxfHx8fDE3NjMwMzgxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Digital flat panel detector',
        'High-frequency generator',
        'Wireless image transmission',
        'All-terrain wheels'
      ],
      applications: ['ICU Imaging', 'Emergency Medicine', 'Rural Outreach'],
      certifications: ['CE', 'FDA', 'IEC 60601'],
      badge: 'New'
    },
    {
      name: 'Infant Incubator',
      category: 'Maternal & Child Health',
      description: 'Advanced neonatal incubator with precise temperature control and monitoring for premature infants.',
      image: 'https://images.unsplash.com/photo-1560306580-9e204fe45f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZhbnQlMjBpbmN1YmF0b3IlMjBob3NwaXRhbHxlbnwxfHx8fDE3NjMwMzgxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Servo-controlled temperature',
        'Integrated phototherapy',
        'Oxygen control system',
        'Transparent canopy'
      ],
      applications: ['NICU', 'Maternity Ward', 'Special Care Baby Unit'],
      certifications: ['CE', 'ISO 13485', 'IEC 60601'],
      badge: null
    },
    {
      name: 'Automated Hematology Analyzer',
      category: 'Diagnostic Equipment',
      description: 'Compact blood analyzer for complete blood count testing with minimal sample volume.',
      image: 'https://images.unsplash.com/photo-1758206523917-ebcf4a571e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGFuYWx5emVyfGVufDF8fHx8MTc2MzAzODEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        '19 parameters + 3 histograms',
        '60 tests per hour',
        'Built-in quality control',
        'Touchscreen interface'
      ],
      applications: ['Clinical Laboratory', 'Point of Care', 'Rural Health Centers'],
      certifications: ['CE', 'ISO 13485', 'WHO PQ'],
      badge: null
    },
    {
      name: 'Surgical Electrocautery Unit',
      category: 'Surgical Equipment',
      description: 'Multipurpose electrosurgical generator for cutting and coagulation in various surgical procedures.',
      image: 'https://images.unsplash.com/photo-1758206523789-e2af7f7b7e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnaWNhbCUyMGVxdWlwbWVudCUyMG9wZXJhdGluZyUyMHJvb218ZW58MXx8fHwxNzYzMDM4MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Monopolar and bipolar modes',
        'Automatic power adjustment',
        'Safety alarm systems',
        'Isolated output protection'
      ],
      applications: ['General Surgery', 'Gynecology', 'Urology'],
      certifications: ['CE', 'IEC 60601', 'ISO 13485'],
      badge: null
    },
    {
      name: 'Oxygen Concentrator (10L)',
      category: 'Patient Monitoring',
      description: 'High-flow oxygen concentrator for continuous oxygen therapy in hospitals and clinics.',
      image: 'https://images.unsplash.com/photo-1630531207753-f7a2f475f809?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxveHlnZW4lMjBjb25jZW50cmF0b3IlMjBtZWRpY2FsfGVufDF8fHx8MTc2MzAzODEyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        '10L/min flow rate',
        '93% ± 3% oxygen purity',
        'Dual flow outlets',
        'Low maintenance design'
      ],
      applications: ['ICU', 'Emergency', 'Respiratory Ward'],
      certifications: ['CE', 'ISO 13485', 'WHO PQ'],
      badge: 'High Demand'
    }
  ];

  const equipmentPackages = [
    {
      name: 'Primary Health Center Package',
      description: 'Complete equipment set for establishing or upgrading a basic health facility.',
      includes: [
        'Examination table and vital signs equipment',
        'Basic diagnostic tools (stethoscopes, BP monitors, thermometers)',
        'Portable ultrasound system',
        'Minor surgery kit',
        'Sterilization equipment (autoclave)',
        'Emergency resuscitation equipment',
        'Medical refrigerator for vaccines',
        'Point-of-care lab equipment'
      ],
      ideal: 'Rural health centers, community clinics, new facility setups'
    },
    {
      name: 'Maternal & Neonatal Care Suite',
      description: 'Comprehensive equipment package for safe delivery and newborn care.',
      includes: [
        'Delivery bed with accessories',
        'Infant warmers (2 units)',
        'Fetal monitors (3 units)',
        'Infant incubator',
        'Phototherapy unit',
        'Neonatal resuscitation kit',
        'Vacuum extractor and forceps',
        'Maternal vital signs monitors'
      ],
      ideal: 'Maternity wards, birthing centers, MCH programs'
    },
    {
      name: 'Operating Theater Package',
      description: 'Complete surgical suite equipment for general and emergency procedures.',
      includes: [
        'Operating table with hydraulic system',
        'Surgical lights (ceiling-mounted)',
        'Anesthesia machine with ventilator',
        'Patient monitor (multi-parameter)',
        'Electrocautery unit',
        'Suction apparatus (2 units)',
        'Defibrillator',
        'Instrument sterilizer'
      ],
      ideal: 'District hospitals, surgical centers, emergency theaters'
    },
    {
      name: 'Mobile Health Unit Equipment',
      description: 'Portable equipment set for outreach programs and mobile clinics.',
      includes: [
        'Portable ultrasound',
        'Point-of-care testing devices',
        'Mobile vital signs monitors',
        'Portable oxygen concentrator',
        'Folding examination bed',
        'Solar-powered equipment chargers',
        'Medical supply cold chain',
        'Telemedicine equipment'
      ],
      ideal: 'Mobile clinics, outreach programs, disaster response'
    }
  ];

  const certifications = [
    {
      name: 'FDA Registered',
      description: 'Equipment registered with US Food and Drug Administration'
    },
    {
      name: 'CE Marked',
      description: 'Complies with European Union safety standards'
    },
    {
      name: 'ISO 13485',
      description: 'Quality management for medical device manufacturers'
    },
    {
      name: 'WHO Prequalified',
      description: 'Meets WHO quality, safety, and performance standards'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] to-[#002875] text-white overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,160,220,0.1),transparent)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-sm">
              <Link to="/shop" className="text-white/80 hover:text-white transition-colors">
                Shop
              </Link>
              <span className="text-white/60">/</span>
              <span>Medical Equipment</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Medical Equipment</h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6">
              Essential hospital-grade equipment including diagnostic, surgical, maternal, and mobile systems. Certified, reliable, and designed for African healthcare environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/support/request-equipment-quote">
                <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
                  Request Equipment Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Equipment Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="mb-1">Certified Equipment</div>
              <p className="text-sm text-muted-foreground">
                FDA, CE, ISO 13485, and WHO prequalified
              </p>
            </div>

            <div>
              <div className="mb-1">Full Installation</div>
              <p className="text-sm text-muted-foreground">
                Equipment delivery, setup, and commissioning
              </p>
            </div>

            <div>
              <div className="mb-1">Training & Documentation</div>
              <p className="text-sm text-muted-foreground">
                User training and complete technical manuals
              </p>
            </div>

            <div>
              <div className="mb-1">Service & Support</div>
              <p className="text-sm text-muted-foreground">
                Warranty, spare parts, and technical support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Tabs */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <h2 className="text-2xl sm:text-3xl">Browse Equipment by Category</h2>
              <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:flex gap-2">
                {productCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm">
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredEquipment.map((product, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition">
                    {product.badge && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-[#0033A0]">{product.badge}</Badge>
                      </div>
                    )}
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <ImageWithFallback 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        {product.description}
                      </p>

                      <div className="flex gap-2">
                        <Link to="/support/request-equipment-quote" className="flex-1">
                          <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                            Request Quote
                          </Button>
                        </Link>
                        <Button variant="outline" className="flex-1" onClick={() => { setSelectedProduct(product); setIsDialogOpen(true); }}>
                          Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="diagnostic" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredEquipment
                  .filter(p => p.category === 'Diagnostic Equipment')
                  .map((product, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition">
                      {product.badge && (
                        <div className="absolute top-4 right-4 z-10">
                          <Badge className="bg-[#0033A0]">{product.badge}</Badge>
                        </div>
                      )}
                      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                        <ImageWithFallback 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-lg mb-2">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-6">
                          {product.description}
                        </p>

                        <div className="flex gap-2">
                          <Link to="/support/request-equipment-quote" className="flex-1">
                            <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                              Request Quote
                            </Button>
                          </Link>
                          <Button variant="outline" className="flex-1" onClick={() => { setSelectedProduct(product); setIsDialogOpen(true); }}>
                            Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            {/* Placeholder tabs for other categories */}
            <TabsContent value="surgical" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <p>Surgical Equipment - Content filtered by category</p>
              </div>
            </TabsContent>

            <TabsContent value="maternal" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <p>Maternal & Child Health - Content filtered by category</p>
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <p>Mobile Systems - Content filtered by category</p>
              </div>
            </TabsContent>

            <TabsContent value="monitoring" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <p>Patient Monitoring - Content filtered by category</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Complete Equipment Packages */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Complete Equipment Packages</h2>
            <p className="text-lg text-muted-foreground">
              Ready-to-deploy equipment solutions for different healthcare facility types and service levels
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {equipmentPackages.map((pkg, index) => (
              <Card key={index} className="border-2 border-[#4B2991]/20">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm mb-3">Package Includes:</div>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-[#7C944B]/10 rounded-lg">
                    <div className="text-sm mb-1">Ideal For:</div>
                    <p className="text-xs text-muted-foreground">{pkg.ideal}</p>
                  </div>

                  <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d]">
                    Request Package Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Quality Assured Medical Equipment</h2>
            <p className="text-lg text-muted-foreground">
              All equipment meets international quality standards and is backed by comprehensive warranties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Comprehensive Warranty</h3>
                <p className="text-sm text-muted-foreground">
                  1-3 year warranty depending on equipment type. Extended warranty options available for critical care equipment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Preventive Maintenance</h3>
                <p className="text-sm text-muted-foreground">
                  Regular maintenance schedules, calibration services, and performance verification to ensure optimal operation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Spare Parts Availability</h3>
                <p className="text-sm text-muted-foreground">
                  Local inventory of critical spare parts. Fast shipping across Africa with regional distribution centers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Equipment */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Why Choose Pacem Health Equipment?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Africa-Ready Design</h3>
                <p className="text-sm text-muted-foreground">
                  Equipment selected and tested for African climate conditions, power infrastructure, and usage patterns. Built for durability and reliability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Complete Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Full technical specifications, user manuals, and maintenance guides in English, French, and Portuguese. Video training resources available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Installation & Commissioning</h3>
                <p className="text-sm text-muted-foreground">
                  Professional installation by certified biomedical engineers. Site assessment, equipment setup, testing, and staff orientation included.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Clinical Training</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive user training for clinical staff. Hands-on instruction, competency assessment, and ongoing education support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Supply Chain Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Expert handling of import clearance, customs documentation, and regulatory compliance. White-glove delivery to your facility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">24/7 Technical Support</h3>
                <p className="text-sm text-muted-foreground">
                  Round-the-clock technical helpline, remote diagnostics, and on-site service. Local biomedical engineers available across African regions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Equipment Solutions */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-[#4B2991]">
            <CardContent className="p-8 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-[#4B2991]">Custom Solutions</Badge>
                  <h2 className="text-2xl sm:text-3xl mb-4">Need Custom Equipment Planning?</h2>
                  <p className="text-muted-foreground mb-6">
                    We provide comprehensive equipment planning services for new facilities, renovations, and system upgrades. From needs assessment to installation and training.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#4B2991] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Facility assessment and equipment needs analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#4B2991] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Budget optimization and phased procurement plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#4B2991] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Infrastructure preparation and site readiness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#4B2991] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Installation, training, and ongoing maintenance</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Card className="bg-white">
                    <CardContent className="p-6">
                      <h3 className="text-lg mb-4">Get Started</h3>
                      <div className="space-y-3">
                        <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d]">
                          Request Equipment Consultation
                        </Button>
                        <Button variant="outline" className="w-full">
                          Schedule Site Assessment
                        </Button>
                        <Button variant="outline" className="w-full">
                          Download Full Catalog (PDF)
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#7C944B] text-white">
                    <CardContent className="p-6">
                      <div className="text-sm text-white/80 mb-1">Equipment Specialists</div>
                      <p className="text-sm mb-3">
                        Our biomedical engineers and equipment specialists are ready to help you select the right equipment.
                      </p>
                      <div className="text-sm">
                        📧 equipment@pacemhealth.com<br />
                        📞 +XXX XXX XXX XXX
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4">Equip Your Facility with Quality Medical Equipment</h2>
          <p className="text-lg text-white/90 mb-8">
            From diagnostic tools to complete surgical suites, we provide certified equipment with full installation and support across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-white/90">
              Request Equipment Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Browse All Equipment
            </Button>
          </div>
        </div>
      </section>

      {/* Product Details Dialog */}
      <ProductDetailsDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        product={selectedProduct || featuredEquipment[0]}
      />
    </div>
  );
}