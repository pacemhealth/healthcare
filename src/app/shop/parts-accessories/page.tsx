import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { ProductDetailsDialog } from '../../../components/ProductDetailsDialog';
import { useState } from 'react';

export default function PartsAccessoriesPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const productCategories = [
    { id: 'all', label: 'All Parts', count: 200 },
    { id: 'probes', label: 'Probes & Transducers', count: 45 },
    { id: 'consumables', label: 'Consumables', count: 60 },
    { id: 'modules', label: 'Replacement Modules', count: 35 },
    { id: 'tubing', label: 'Tubing & Circuits', count: 30 },
    { id: 'batteries', label: 'Batteries & Power', count: 20 }
  ];

  const featuredParts = [
    {
      name: 'Ultrasound Probe Set (Multi-Frequency)',
      category: 'Probes & Transducers',
      description: 'OEM-compatible ultrasound transducers for obstetric, abdominal, and cardiac imaging.',
      image: 'https://images.unsplash.com/photo-1691935152212-596d5ee37383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdWx0cmFzb3VuZCUyMHByb2JlfGVufDF8fHx8MTc2MzAzODM1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Convex, linear, and phased array probes',
        'Multiple frequency ranges (2-15 MHz)',
        'Compatible with major ultrasound brands',
        'Full warranty and calibration certificate'
      ],
      compatibility: ['GE', 'Philips', 'Mindray'],
      certifications: ['CE', 'ISO 13485', 'OEM Quality'],
      badge: 'Best Seller'
    },
    {
      name: 'Patient Monitor Modules (Multi-Parameter)',
      category: 'Replacement Modules',
      description: 'Replacement modules for vital signs monitoring including ECG, SpO2, NIBP, and temperature.',
      image: 'https://images.unsplash.com/photo-1595464144526-5fb181b74625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9uaXRvciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjMwMzgzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Plug-and-play installation',
        'Factory calibration included',
        'Compatible with major monitor brands',
        '12-month warranty'
      ],
      compatibility: ['Philips', 'GE', 'Mindray'],
      certifications: ['CE', 'ISO 13485', 'OEM Quality'],
      badge: 'Featured'
    },
    {
      name: 'Anesthesia Breathing Circuits',
      category: 'Tubing & Circuits',
      description: 'Complete breathing circuit sets for anesthesia machines with all necessary connectors.',
      image: 'https://images.unsplash.com/photo-1714348862945-486b1d53e768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdHViaW5nJTIwY2lyY3VpdHxlbnwxfHx8fDE3NjMwMzgzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Adult, pediatric, and infant sizes',
        'Disposable and reusable options',
        'Low-resistance design',
        'Latex-free materials'
      ],
      compatibility: ['Universal fit', 'Standard connections'],
      certifications: ['CE', 'ISO 13485', 'Medical Grade'],
      badge: null
    },
    {
      name: 'Defibrillator Electrode Pads',
      category: 'Consumables',
      description: 'High-quality disposable electrode pads for defibrillators and AEDs.',
      image: 'https://images.unsplash.com/photo-1627694743581-f31765d5c631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWxlY3Ryb2RlJTIwcGFkc3xlbnwxfHx8fDE3NjMwMzgzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Adult and pediatric sizes',
        'Strong adhesive for reliable contact',
        '2-year shelf life',
        'Compatible with major brands'
      ],
      compatibility: ['Zoll', 'Philips', 'Physio-Control'],
      certifications: ['CE', 'FDA', 'ISO 13485'],
      badge: null
    },
    {
      name: 'Medical Battery Packs (Rechargeable)',
      category: 'Batteries & Power',
      description: 'High-capacity rechargeable battery packs for patient monitors, infusion pumps, and portable equipment.',
      image: 'https://images.unsplash.com/photo-1624638760852-8ede1666ab07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYmF0dGVyeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjMwMzgzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Lithium-ion technology',
        'Extended runtime (4-8 hours)',
        'Smart charging capability',
        'OEM quality standards'
      ],
      compatibility: ['Various equipment types'],
      certifications: ['CE', 'ISO 13485', 'OEM Quality'],
      badge: 'High Demand'
    },
    {
      name: 'SpO2 Sensors (Reusable & Disposable)',
      category: 'Probes & Transducers',
      description: 'Complete range of pulse oximetry sensors for adult, pediatric, and neonatal patients.',
      image: 'https://images.unsplash.com/photo-1691926495061-6a2826241f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWxzZSUyMG94aW1ldGVyJTIwc2Vuc29yfGVufDF8fHx8MTc2MzAzODM1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Finger clip, ear, and adhesive types',
        'Compatible with all major brands',
        'Accurate readings (±2%)',
        'Durable cable construction'
      ],
      compatibility: ['Universal SpO2 compatibility'],
      certifications: ['CE', 'FDA', 'ISO 13485'],
      badge: null
    },
    {
      name: 'ECG Electrode Cables',
      category: 'Tubing & Circuits',
      description: 'Complete ECG cable sets with multiple lead configurations for patient monitoring.',
      image: 'https://images.unsplash.com/photo-1751846545116-838fe2e7e815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFQ0clMjBjYWJsZXMlMjBtZWRpY2FsfGVufDF8fHx8MTc2MzAzODM1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        '3, 5, and 12-lead configurations',
        'Shielded cables for noise reduction',
        'Snap and clip connector options',
        'Length: 3 meters standard'
      ],
      compatibility: ['Philips', 'GE', 'Mindray'],
      certifications: ['CE', 'ISO 13485', 'Medical Grade'],
      badge: null
    },
    {
      name: 'Surgical Suction Tubing & Accessories',
      category: 'Tubing & Circuits',
      description: 'Medical-grade suction tubing with connectors, canisters, and filters.',
      image: 'https://images.unsplash.com/photo-1682663947127-ac9d59d7f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3VjdGlvbiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjMwMzgzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Transparent PVC construction',
        'Various diameters and lengths',
        'Disposable collection canisters',
        'Bacterial filters included'
      ],
      compatibility: ['Universal suction systems'],
      certifications: ['CE', 'ISO 13485', 'Medical Grade'],
      badge: null
    },
    {
      name: 'IV Extension Sets & Accessories',
      category: 'Consumables',
      description: 'Sterile IV extension sets, stopcocks, and connection accessories.',
      image: 'https://images.unsplash.com/photo-1583830379747-195159d0de82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJViUyMG1lZGljYWwlMjBzdXBwbGllc3xlbnwxfHx8fDE3NjMwMzgzNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Various lengths (6-100 inches)',
        'Luer lock connections',
        'Multiple port configurations',
        'Latex-free, DEHP-free'
      ],
      compatibility: ['Universal IV compatibility'],
      certifications: ['CE', 'FDA', 'ISO 13485'],
      badge: null
    }
  ];

  const partPackages = [
    {
      name: 'Essential Consumables Starter Pack',
      description: 'Basic consumables kit for primary healthcare facilities with high-use items.',
      includes: [
        'ECG electrodes (500 pack)',
        'SpO2 sensors (10 reusable)',
        'NIBP cuffs (adult, pediatric, infant)',
        'Thermometer probe covers (1000 pack)',
        'Surgical gloves (mixed sizes, 100 boxes)',
        'Suction catheters (assorted sizes)',
        'IV extension sets (50 pack)',
        'Syringe and needle sets'
      ],
      ideal: 'Primary care facilities, health centers, outpatient clinics'
    },
    {
      name: 'Ultrasound Probe Maintenance Kit',
      description: 'Complete probe set with accessories for obstetric and general imaging.',
      includes: [
        'Convex probe (3.5 MHz)',
        'Linear probe (7.5 MHz)',
        'Transvaginal probe (optional)',
        'Ultrasound gel (12 bottles)',
        'Probe covers (disposable, 200 pack)',
        'Cleaning solution and wipes',
        'Storage case',
        'Cable strain relief accessories'
      ],
      ideal: 'Maternity units, imaging departments, mobile clinics'
    },
    {
      name: 'Patient Monitoring Spare Parts Kit',
      description: 'Complete replacement parts for multi-parameter patient monitors.',
      includes: [
        'ECG cable set (5-lead)',
        'SpO2 sensor (adult and pediatric)',
        'NIBP hoses and connectors',
        'Temperature probes (2 units)',
        'Rechargeable battery pack',
        'Mounting accessories',
        'Cleaning supplies',
        'User manual and service guide'
      ],
      ideal: 'ICU, emergency departments, general wards'
    },
    {
      name: 'Anesthesia Machine Service Kit',
      description: 'Annual service and replacement parts for anesthesia delivery systems.',
      includes: [
        'Breathing circuits (adult and pediatric)',
        'CO2 absorbent (10 kg)',
        'Vaporizer maintenance kit',
        'O-rings and seals set',
        'Flowmeter tubes and floats',
        'Valve replacement set',
        'Pressure relief valves',
        'Service tools and lubricants'
      ],
      ideal: 'Operating theaters, surgical centers, district hospitals'
    }
  ];

  const qualityStandards = [
    {
      name: 'OEM Quality Assurance',
      description: 'All parts meet or exceed original equipment manufacturer specifications'
    },
    {
      name: 'ISO 13485 Certified',
      description: 'Manufactured in ISO 13485 certified facilities with full quality management'
    },
    {
      name: 'Compatibility Guaranteed',
      description: 'Verified compatibility with major equipment brands or full refund'
    },
    {
      name: 'Full Documentation',
      description: 'Technical specs, compatibility charts, and installation guides included'
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
              <span>Parts & Accessories</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Parts & Accessories</h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6">
              OEM-quality parts, probes, tubing, replacement modules, and consumables. Guaranteed compatibility with major equipment brands and full technical support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/support/request-equipment-quote">
                <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
                  Request Parts Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Parts Catalog
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
              <div className="mb-1">OEM Quality</div>
              <p className="text-sm text-muted-foreground">
                Meets or exceeds original manufacturer specs
              </p>
            </div>

            <div>
              <div className="mb-1">Fast Shipping</div>
              <p className="text-sm text-muted-foreground">
                Stock in African regional distribution centers
              </p>
            </div>

            <div>
              <div className="mb-1">Technical Support</div>
              <p className="text-sm text-muted-foreground">
                Expert guidance on compatibility and installation
              </p>
            </div>

            <div>
              <div className="mb-1">Warranty Coverage</div>
              <p className="text-sm text-muted-foreground">
                6-12 month warranty on all replacement parts
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
              <h2 className="text-2xl sm:text-3xl">Browse Parts by Category</h2>
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
                {featuredParts.map((product, index) => (
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

            <TabsContent value="probes" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredParts
                  .filter(p => p.category === 'Probes & Transducers')
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
            <TabsContent value="consumables" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <p>Consumables - Content filtered by category</p>
              </div>
            </TabsContent>

            <TabsContent value="modules" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <p>Replacement Modules - Content filtered by category</p>
              </div>
            </TabsContent>

            <TabsContent value="tubing" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <p>Tubing & Circuits - Content filtered by category</p>
              </div>
            </TabsContent>

            <TabsContent value="batteries" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <p>Batteries & Power - Content filtered by category</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Complete Parts Packages */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Complete Parts Packages</h2>
            <p className="text-lg text-muted-foreground">
              Pre-configured parts kits for different specialties and equipment types
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-[#0033A0]/20">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl mb-2">Essential Consumables Starter Pack</h3>
                  <p className="text-sm text-muted-foreground">
                    Basic consumables kit for primary healthcare facilities with high-use items.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>ECG electrodes (500 pack)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>SpO2 sensors (10 reusable)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>NIBP cuffs (adult, pediatric, infant)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Thermometer probe covers (1000 pack)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Surgical gloves (mixed sizes, 100 boxes)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Suction catheters (assorted sizes)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>IV extension sets (50 pack)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Syringe and needle sets</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#0033A0]/10 rounded-lg border border-[#0033A0]/20">
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">Primary care facilities, health centers, outpatient clinics</p>
                </div>

                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                    Request Package Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00A0DC]/20">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl mb-2">Ultrasound Probe Maintenance Kit</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete probe set with accessories for obstetric and general imaging.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Convex probe (3.5 MHz)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Linear probe (7.5 MHz)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Transvaginal probe (optional)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Ultrasound gel (12 bottles)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Probe covers (disposable, 200 pack)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Cleaning solution and wipes</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Storage case</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Cable strain relief accessories</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#00A0DC]/10 rounded-lg border border-[#00A0DC]/20">
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">Maternity units, imaging departments, mobile clinics</p>
                </div>

                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#00A0DC] hover:bg-[#0088bb]">
                    Request Package Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#0033A0]/20">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl mb-2">Patient Monitoring Spare Parts Kit</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete replacement parts for multi-parameter patient monitors.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>ECG cable set (5-lead)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>SpO2 sensor (adult and pediatric)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>NIBP hoses and connectors</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Temperature probes (2 units)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Rechargeable battery pack</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Mounting accessories</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Cleaning supplies</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>User manual and service guide</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#0033A0]/10 rounded-lg border border-[#0033A0]/20">
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">ICU, emergency departments, general wards</p>
                </div>

                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                    Request Package Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00A0DC]/20">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl mb-2">Anesthesia Machine Service Kit</h3>
                  <p className="text-sm text-muted-foreground">
                    Annual service and replacement parts for anesthesia delivery systems.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Breathing circuits (adult and pediatric)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>CO2 absorbent (10 kg)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Vaporizer maintenance kit</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>O-rings and seals set</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Flowmeter tubes and floats</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Valve replacement set</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Pressure relief valves</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Service tools and lubricants</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#00A0DC]/10 rounded-lg border border-[#00A0DC]/20">
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">Operating theaters, surgical centers, district hospitals</p>
                </div>

                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#00A0DC] hover:bg-[#0088bb]">
                    Request Package Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Quality Assured Parts & Accessories</h2>
            <p className="text-lg text-muted-foreground">
              Every part meets rigorous quality standards and compatibility requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {qualityStandards.map((standard, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg mb-2">{standard.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {standard.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Warranty Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  6-12 month warranty on parts depending on type. Extended warranties available for critical components.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Preventive Maintenance</h3>
                <p className="text-sm text-muted-foreground">
                  Annual and quarterly maintenance kits for major equipment types. Extend equipment life and reduce downtime.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Regional stock centers across Africa. Express shipping for urgent part replacements and critical care equipment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Parts */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Why Choose Pacem Health Parts & Accessories?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Compatibility Verification</h3>
                <p className="text-sm text-muted-foreground">
                  Send us your equipment model and serial number. We verify exact part compatibility before ordering to ensure perfect fit.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">OEM Quality Standards</h3>
                <p className="text-sm text-muted-foreground">
                  All parts meet or exceed original manufacturer specifications. Factory calibration and testing certificates included.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Installation Support</h3>
                <p className="text-sm text-muted-foreground">
                  Remote technical support, installation guides, and on-site service available for complex replacements and upgrades.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Bulk Ordering Programs</h3>
                <p className="text-sm text-muted-foreground">
                  Volume discounts for hospitals, health systems, and government procurement. Custom inventory management available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Emergency Parts Service</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 emergency hotline for critical part failures. Express shipping and temporary loaner equipment when available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Technical Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Complete technical specs, installation manuals, and maintenance schedules provided with every order.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-[#0033A0]">
            <CardContent className="p-8 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-[#0033A0]">Custom Solutions</Badge>
                  <h2 className="text-2xl sm:text-3xl mb-4">Can't Find the Part You Need?</h2>
                  <p className="text-muted-foreground mb-6">
                    We source hard-to-find parts and create custom inventory programs for health systems. From obsolete equipment parts to custom fabrication.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Global sourcing network for discontinued parts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Custom parts procurement and inventory management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Equipment refurbishment and upgrade programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Long-term parts supply agreements for facilities</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Card className="bg-white border-[#0033A0]/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg mb-4">Get Started</h3>
                      <div className="space-y-3">
                        <Link to="/support/request-equipment-quote">
                          <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                            Request Parts Consultation
                          </Button>
                        </Link>
                        <Button variant="outline" className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10">
                          Submit Parts Request Form
                        </Button>
                        <Button variant="outline" className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10">
                          Download Parts Catalog (PDF)
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#00A0DC] text-white border-[#00A0DC]">
                    <CardContent className="p-6">
                      <div className="text-sm text-white/90 mb-1">Parts Specialists</div>
                      <p className="text-sm mb-3">
                        Our biomedical engineers and parts specialists are ready to help you find the right components.
                      </p>
                      <div className="text-sm">
                        📧 parts@pacemhealth.com<br />
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
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4">Keep Your Equipment Running with Quality Parts</h2>
          <p className="text-lg text-white/90 mb-8">
            From routine consumables to critical replacement modules, we provide OEM-quality parts with full compatibility verification and technical support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support/request-equipment-quote">
              <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
                Request Parts Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Browse All Parts
            </Button>
          </div>
        </div>
      </section>

      {/* Product Details Dialog */}
      <ProductDetailsDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        product={selectedProduct ? {
          ...selectedProduct,
          applications: selectedProduct.compatibility // Map compatibility to applications for the dialog
        } : featuredParts[0]}
      />
    </div>
  );
}