import { Link } from 'react-router-dom';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';
import { Badge } from '../../../../components/ui/badge';
import { CheckCircle2, ArrowLeft, Share2, Download } from 'lucide-react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

export default function AnesthesiaMachineDetailsPage() {
  const product = {
    name: 'Anesthesia Machine',
    category: 'Surgical Equipment',
    description: 'Complete anesthesia delivery system with ventilator and monitoring capabilities for operating theaters.',
    image: 'https://images.unsplash.com/photo-1758206523735-079e56f2faf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmVzdGhlc2lhJTIwbWFjaGluZSUyMG9wZXJhdGluZyUyMHJvb218ZW58MXx8fHwxNzYzMDM4MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    specs: [
      'Comprehensive gas monitoring',
      'Advanced ventilation modes',
      'Integrated patient monitoring',
      'Backup battery system'
    ],
    applications: ['General Surgery', 'Obstetric Surgery', 'Emergency Operations'],
    certifications: ['CE', 'ISO 13485'],
    badge: 'Featured',
    price: 'Request Quote',
    sku: 'ANE-001-GEN'
  };

  const technicalSpecs = [
    { label: 'Gas Flow Range', value: '0.2-15 L/min oxygen, 0.2-10 L/min air' },
    { label: 'Ventilation Modes', value: 'VCV, PCV, SIMV, Manual' },
    { label: 'Tidal Volume', value: '20-1500 mL' },
    { label: 'Respiratory Rate', value: '4-99 breaths/min' },
    { label: 'Power Supply', value: '220V AC, 50/60Hz with battery backup' },
    { label: 'Dimensions', value: '600 x 600 x 1400 mm' },
    { label: 'Weight', value: '80 kg' }
  ];

  const features = [
    {
      title: 'Integrated Monitoring',
      description: 'Real-time monitoring of oxygen concentration, airway pressure, and breathing parameters with visual and audible alarms.'
    },
    {
      title: 'Multiple Ventilation Modes',
      description: 'Supports VCV, PCV, SIMV, and manual modes to accommodate different surgical requirements and patient needs.'
    },
    {
      title: 'Safety Systems',
      description: 'Multiple safety features including oxygen failure alarm, apnea alarm, and automatic valve protection.'
    },
    {
      title: 'Easy Maintenance',
      description: 'Modular design for easy servicing with readily available spare parts and comprehensive service documentation.'
    }
  ];

  const relatedProducts = [
    { name: 'Patient Monitor (Multi-Parameter)', category: 'Patient Monitoring' },
    { name: 'Surgical Electrocautery Unit', category: 'Surgical Equipment' },
    { name: 'Oxygen Concentrator (10L)', category: 'Patient Monitoring' }
  ];

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors">
              Shop
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/shop/medical-equipment" className="text-muted-foreground hover:text-foreground transition-colors">
              Medical Equipment
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/shop/medical-equipment" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Medical Equipment
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div>
              <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg mb-4">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Gallery Thumbnails - placeholder */}
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-100 rounded border-2 border-transparent hover:border-[#0033A0] cursor-pointer transition">
                    <ImageWithFallback
                      src={product.image}
                      alt={`${product.name} view ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div>
              <div className="mb-4">
                {product.badge && (
                  <Badge className="bg-[#0033A0] mb-3">{product.badge}</Badge>
                )}
                <h1 className="text-3xl mb-2">{product.name}</h1>
                <p className="text-muted-foreground">{product.category}</p>
              </div>

              <div className="text-sm text-muted-foreground mb-6">
                <span className="font-medium">SKU:</span> {product.sku}
              </div>

              <div className="mb-6 pb-6 border-b">
                <p className="text-lg text-muted-foreground">{product.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="mb-3">Key Specifications</h3>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="mb-3">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, index) => (
                    <Badge key={index} variant="outline" className="border-[#0033A0] text-[#0033A0]">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6 pb-6 border-b">
                <h3 className="mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Link to="/support/request-equipment-quote">
                  <Button size="lg" className="w-full bg-[#0033A0] hover:bg-[#002875]">
                    Request Quote
                  </Button>
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="lg">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="lg">
                    <Download className="h-4 w-4 mr-2" />
                    Download Spec Sheet
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8">Technical Specifications</h2>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-start py-3 border-b last:border-b-0">
                    <span className="font-medium">{spec.label}</span>
                    <span className="text-muted-foreground text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8">Features & Benefits</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8">What's Included</h2>
          
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {[
                  'Anesthesia machine main unit',
                  'Integrated ventilator module',
                  'CO2 absorber canister (2 units)',
                  'Breathing circuits (adult and pediatric)',
                  'Vaporizer for volatile anesthetics',
                  'Gas monitoring sensors',
                  'User manual and service documentation',
                  'Installation and user training',
                  '12-month warranty coverage'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8">Related Products</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct, index) => (
              <Card key={index} className="hover:shadow-lg transition cursor-pointer">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gray-100 rounded mb-4"></div>
                  <h3 className="mb-1">{relProduct.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{relProduct.category}</p>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4">Ready to Order?</h2>
          <p className="text-lg text-white/90 mb-8">
            Contact our medical equipment specialists for pricing, customization options, and delivery timelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support/request-equipment-quote">
              <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
                Request Quote
              </Button>
            </Link>
            <Link to="/support/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Specialist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
