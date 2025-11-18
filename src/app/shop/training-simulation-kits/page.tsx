import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { ProductDetailsDialog } from '../../../components/ProductDetailsDialog';
import { useState } from 'react';

export default function TrainingSimulationKitsPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const productCategories = [
    { id: 'all', label: 'All Products', count: 45 },
    { id: 'manikins', label: 'Manikins & Simulators', count: 18 },
    { id: 'clinical', label: 'Clinical Skills Trainers', count: 12 },
    { id: 'maternal', label: 'Maternal & Neonatal', count: 8 },
    { id: 'emergency', label: 'Emergency & Trauma', count: 7 }
  ];

  const featuredProducts = [
    {
      name: 'Advanced Life Support Manikin',
      category: 'Manikins & Simulators',
      description: 'Full-body adult CPR training manikin with advanced airway management and realistic anatomy for comprehensive life support training.',
      image: 'https://images.unsplash.com/photo-1601839777132-b3f4e455c369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdHJhaW5pbmclMjBtYW5pa2luJTIwQ1BSfGVufDF8fHx8MTc2MzAzNzkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Full-body adult manikin (175 cm, 55 kg)',
        'Realistic chest compression feedback with depth/rate indicators',
        'Multiple airway management techniques supported',
        'ECG simulation with 12-lead capability',
        'Bilateral lung ventilation with visible chest rise',
        'Carotid pulse simulation',
        'Oral and nasal intubation capabilities',
        'IM and SubQ injection sites'
      ],
      features: [
        'Realistic chest compression feedback',
        'Multiple airway management techniques',
        'ECG simulation capability'
      ],
      applications: ['CPR Training', 'ACLS Certification', 'Emergency Response'],
      certifications: ['AHA Guidelines', 'ERC Standards', 'ISO 9001'],
      badge: 'Best Seller'
    },
    {
      name: 'Birthing Simulator',
      category: 'Maternal & Neonatal',
      description: 'Comprehensive maternal-fetal simulator for practicing normal and complicated delivery scenarios with realistic anatomy and pathology simulation.',
      image: 'https://images.unsplash.com/photo-1572996489139-3d677be9cba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc2ltdWxhdGlvbiUyMHRyYWluaW5nfGVufDF8fHx8MTc2MzAzNzkzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Anatomically accurate female pelvis and birth canal',
        'Multiple fetal positions (vertex, breech, transverse)',
        'Postpartum hemorrhage simulation with blood reservoir',
        'Shoulder dystocia practice capability',
        'Cervical dilation stages (0-10 cm models)',
        'Episiotomy and repair practice site',
        'Placenta delivery simulation',
        'Includes standard and premature baby manikins'
      ],
      features: [
        'Multiple fetal positions',
        'Postpartum hemorrhage simulation',
        'Shoulder dystocia scenarios'
      ],
      applications: ['Midwifery Training', 'Emergency Obstetrics', 'Skills Lab'],
      certifications: ['WHO Safe Childbirth', 'ALSO Standards', 'CE Marked'],
      badge: 'Featured'
    },
    {
      name: 'IV & Injection Training Arm',
      category: 'Clinical Skills Trainers',
      description: 'Lifelike arm model for practicing venipuncture, IV therapy, and injection techniques with realistic tissue feel and vein structure.',
      image: 'https://images.unsplash.com/photo-1679165805785-9c442d6ec793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJhY3RpY2UlMjBhcm0lMjBtb2RlbHxlbnwxfHx8fDE3NjMwMzc5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Realistic adult arm with accurate anatomy',
        'Palpable veins: median, basilic, and cephalic',
        'Replaceable skin and vein system (durable latex-free material)',
        'IV catheter insertion practice',
        'Venipuncture and blood collection',
        'IM and SubQ injection sites',
        'Simulated blood flow with reservoir system',
        'Includes stand and fluid reservoir'
      ],
      features: [
        'Realistic vein structure',
        'Palpable veins for skill development',
        'Replaceable skin and vein system'
      ],
      applications: ['Nursing Education', 'Phlebotomy Training', 'Clinical Skills'],
      certifications: ['CE Marked', 'ISO 9001', 'Latex-Free'],
      badge: null
    },
    {
      name: 'Pediatric Emergency Care Trainer',
      category: 'Emergency & Trauma',
      description: 'Child manikin for practicing pediatric emergency procedures, airway management, and pediatric assessment with accurate anatomical proportions.',
      image: 'https://images.unsplash.com/photo-1576765608622-067973a79f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBtZWRpY2FsJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYzMDM3OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Child manikin (5-year-old proportions, 110 cm, 18 kg)',
        'Anatomically accurate airway with realistic resistance',
        'Oral and nasal intubation capability',
        'Intraosseous (IO) access sites on tibia',
        'CPR practice with chest compression feedback',
        'Bilateral lung ventilation',
        'Palpable carotid and brachial pulses',
        'IV access sites on arms and hands'
      ],
      features: [
        'Anatomically accurate child proportions',
        'Intubation and ventilation practice',
        'IO access training points'
      ],
      applications: ['PALS Training', 'Pediatric Emergency', 'Skills Certification'],
      certifications: ['AHA PALS', 'ERC Pediatric', 'CE Marked'],
      badge: null
    },
    {
      name: 'Wound Care & Suturing Kit',
      category: 'Clinical Skills Trainers',
      description: 'Complete set of wound simulation models for practicing suturing techniques, wound assessment, and closure methods with realistic tissue characteristics.',
      image: 'https://images.unsplash.com/photo-1676155081561-865fab11da37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJnaWNhbCUyMHRyYWluaW5nJTIwc3V0dXJpbmd8ZW58MXx8fHwxNzYzMDM3OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Multiple wound types: linear lacerations, curved wounds, corner wounds',
        'Various wound depths (superficial to deep tissue)',
        'Realistic multi-layer tissue (epidermis, dermis, subcutaneous fat)',
        'Reusable practice pads (up to 100+ sutures per pad)',
        'Includes 6 different wound scenarios',
        'Mounting board with clamps included',
        'Compatible with all suture types and sizes',
        'Training manual with suturing techniques'
      ],
      features: [
        'Various wound types and depths',
        'Realistic tissue feel',
        'Reusable practice pads'
      ],
      applications: ['Surgical Training', 'Emergency Medicine', 'Primary Care'],
      certifications: ['CE Marked', 'ISO 9001', 'Medical Grade Materials'],
      badge: null
    },
    {
      name: 'Intubation Training Head',
      category: 'Clinical Skills Trainers',
      description: 'Anatomically correct airway management trainer for practicing intubation techniques, airway assessment, and difficult airway scenarios.',
      image: 'https://images.unsplash.com/photo-1696243144343-56a235858dce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYWlyd2F5JTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYzMDM3OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specs: [
        'Anatomically accurate adult airway',
        'Realistic oral and nasal passages with tongue',
        'Visible chest rise with proper ventilation',
        'Teeth protection feedback (audible click if damaged)',
        'Laryngoscope blade insertion pathways',
        'Vocal cords visualization',
        'Esophageal vs. tracheal placement detection',
        'Bag-mask ventilation practice',
        'Includes carrying case and replacement parts'
      ],
      features: [
        'Realistic oral and nasal passages',
        'Visible chest rise confirmation',
        'Teeth protection feedback'
      ],
      applications: ['Anesthesia Training', 'Emergency Airway', 'Critical Care'],
      certifications: ['AHA Guidelines', 'Difficult Airway Society', 'CE Marked'],
      badge: null
    }
  ];

  const kitPackages = [
    {
      name: 'Essential Skills Starter Kit',
      description: 'Complete package for basic clinical skills training in resource-limited settings.',
      includes: [
        'Adult CPR manikin (basic)',
        'IV training arm',
        'Injection practice pad',
        'Blood pressure training arm',
        'Wound care models (set of 3)',
        'Training manuals and guides'
      ],
      ideal: 'Nursing schools, rural health centers, community training programs'
    },
    {
      name: 'Maternal Health Training Package',
      description: 'Comprehensive maternal and neonatal care training solution.',
      includes: [
        'Birthing simulator with complications',
        'Neonatal resuscitation manikin',
        'Postpartum care trainer',
        'Cervical dilation model',
        'Episiotomy repair trainer',
        'Clinical protocols and checklists'
      ],
      ideal: 'Maternity wards, midwifery schools, safe motherhood programs'
    },
    {
      name: 'Emergency Response Complete Set',
      description: 'Full emergency training solution for ACLS, PALS, and trauma care.',
      includes: [
        'Adult advanced life support manikin',
        'Pediatric emergency care trainer',
        'Trauma simulation modules',
        'Airway management head',
        'Defibrillator training unit',
        'Emergency scenarios and case studies'
      ],
      ideal: 'Emergency departments, paramedic training, disaster preparedness'
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
              <span>Training & Simulation Kits</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Training & Simulation Kits</h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6">
              Hands-on skill-building tools including manikins, simulation kits, and clinical instructor packs. High-quality training equipment designed for African healthcare education.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/support/request-equipment-quote">
                <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
                  Request Product Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Full Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#0033A0] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <div className="mb-1">Quality Certified</div>
                <p className="text-sm text-muted-foreground">
                  All products meet international training standards
                </p>
              </div>
            </div>

            <div>
              <div className="mb-1">Complete Kits</div>
              <p className="text-sm text-muted-foreground">
                Ready-to-deploy packages with all accessories
              </p>
            </div>

            <div>
              <div className="mb-1">Training Included</div>
              <p className="text-sm text-muted-foreground">
                Instructor training and support materials provided
              </p>
            </div>

            <div>
              <div className="mb-1">Warranty & Support</div>
              <p className="text-sm text-muted-foreground">
                2-year warranty with technical support
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
              <h2 className="text-2xl sm:text-3xl">Browse by Category</h2>
              <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:flex gap-2">
                {productCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="text-sm">
                    {category.label}
                    <span className="ml-2 text-xs text-muted-foreground">({category.count})</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.map((product, index) => (
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

            <TabsContent value="manikins" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts.filter(p => p.category === 'Manikins & Simulators').map((product, index) => (
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

            {/* Similar structure for other tabs */}
            <TabsContent value="clinical" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <p>Clinical Skills Trainers - Content filtered by category</p>
              </div>
            </TabsContent>

            <TabsContent value="maternal" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <p>Maternal & Neonatal - Content filtered by category</p>
              </div>
            </TabsContent>

            <TabsContent value="emergency" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <p>Emergency & Trauma - Content filtered by category</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Complete Training Packages */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Complete Training Packages</h2>
            <p className="text-lg text-muted-foreground">
              Ready-to-deploy training solutions with everything you need to start building healthcare capacity
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {kitPackages.map((kit, index) => (
              <Card key={index} className="border-2 border-[#0033A0]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">{kit.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {kit.description}
                  </p>

                  <div className="mb-6">
                    <div className="text-sm mb-3">Package Includes:</div>
                    <ul className="space-y-2">
                      {kit.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-[#7C944B]/10 rounded-lg">
                    <div className="text-sm mb-1">Ideal For:</div>
                    <p className="text-xs text-muted-foreground">{kit.ideal}</p>
                  </div>

                  <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                    Request Package Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Why Choose Our Training Equipment?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">International Standards</h3>
                <p className="text-sm text-muted-foreground">
                  All products certified to international training standards including AHA, ERC, and WHO guidelines for clinical education.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Durable Construction</h3>
                <p className="text-sm text-muted-foreground">
                  Built for intensive use in high-volume training environments. Designed to withstand tropical climates and frequent transport.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Replacement Parts Available</h3>
                <p className="text-sm text-muted-foreground">
                  Full inventory of replacement skins, veins, modules, and accessories. Fast shipping across Africa with local distribution.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Comprehensive Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  User manuals, training guides, scenario templates, and maintenance instructions included in English, French, and Portuguese.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Instructor Training</h3>
                <p className="text-sm text-muted-foreground">
                  Optional instructor certification and train-the-trainer programs available. On-site or virtual training to maximize equipment utilization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Technical Support</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 technical support hotline, video troubleshooting guides, and preventive maintenance programs to ensure equipment longevity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-[#0033A0]">
            <CardContent className="p-8 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-[#0033A0]">Custom Solutions</Badge>
                  <h2 className="text-2xl sm:text-3xl mb-4">Need a Custom Training Package?</h2>
                  <p className="text-muted-foreground mb-6">
                    We can create tailored training equipment packages for your specific curriculum, budget, and educational goals. From single-specialty kits to comprehensive simulation labs.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Curriculum-aligned equipment selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Budget-optimized package design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Simulation lab planning and setup</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Ongoing maintenance and support packages</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Card className="bg-white">
                    <CardContent className="p-6">
                      <h3 className="text-lg mb-4">Get Started</h3>
                      <div className="space-y-3">
                        <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                          Request Custom Quote
                        </Button>
                        <Button variant="outline" className="w-full">
                          Schedule Consultation
                        </Button>
                        <Button variant="outline" className="w-full">
                          Download Equipment Catalog
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#7C944B] text-white">
                    <CardContent className="p-6">
                      <div className="text-sm text-white/80 mb-1">Need Help Choosing?</div>
                      <p className="text-sm mb-3">
                        Our training equipment specialists can help you select the right products for your needs.
                      </p>
                      <div className="text-sm">
                        📧 training@pacemhealth.com<br />
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
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#0033A0] to-[#7C944B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4">Ready to Build Healthcare Capacity?</h2>
          <p className="text-lg text-white/90 mb-8">
            Equip your training programs with quality simulation tools designed for African healthcare education. Request a quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
              Request Product Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View All Training Products
            </Button>
          </div>
        </div>
      </section>

      {/* Product Details Dialog */}
      <ProductDetailsDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        product={selectedProduct || featuredProducts[0]}
      />
    </div>
  );
}