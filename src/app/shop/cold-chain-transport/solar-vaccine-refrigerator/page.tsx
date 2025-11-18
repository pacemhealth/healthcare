import { Link } from 'react-router-dom';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';
import { Badge } from '../../../../components/ui/badge';
import { CheckCircle2, ArrowLeft, Share2, Download } from 'lucide-react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

export default function SolarVaccineRefrigeratorDetailsPage() {
  const product = {
    name: 'Solar Direct Drive Vaccine Refrigerator (SDD)',
    category: 'Vaccine Storage',
    image: 'https://images.unsplash.com/photo-1748404456469-e60ec86e44e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVmcmlnZXJhdG9yJTIwdmFjY2luZSUyMHN0b3JhZ2V8ZW58MXx8fHwxNzYzMDM5Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'WHO-prequalified solar-powered vaccine refrigerator with no battery requirement for reliable cold chain in off-grid locations.',
    specs: [
      'Net storage capacity: 50-200 liters',
      'Temperature range: +2°C to +8°C',
      'Solar panel powered (no batteries)',
      'WHO PQS certified'
    ],
    certifications: ['WHO PQS', 'CE', 'ISO 13485'],
    badge: 'Best Seller',
    sku: 'CC-SDD-050'
  };

  const technicalSpecs = [
    { label: 'Storage Capacity', value: '50-200 liters (models available)' },
    { label: 'Temperature Range', value: '+2°C to +8°C (vaccine storage range)' },
    { label: 'Power Source', value: 'Solar direct drive (no battery required)' },
    { label: 'Solar Panel', value: '2 x 100W photovoltaic panels included' },
    { label: 'Holdover Time', value: '3-5 days without sunlight (ice-lined)' },
    { label: 'Ambient Temperature Range', value: 'Up to +43°C' },
    { label: 'Dimensions', value: '600 x 650 x 850 mm (50L model)' },
    { label: 'Weight', value: '65 kg (empty, 50L model)' }
  ];

  const features = [
    {
      title: 'No Battery Requirement',
      description: 'Direct solar drive eliminates battery maintenance costs and replacement. Operates directly from solar panels during daylight with ice-lining for temperature stability.'
    },
    {
      title: 'WHO PQS Certified',
      description: 'Meets WHO Performance, Quality, and Safety standards for vaccine storage. Independently tested and certified for use in immunization programs.'
    },
    {
      title: 'Proven Off-Grid Reliability',
      description: 'Designed for remote areas with unreliable electricity. Ice-lined construction maintains temperature for 3-5 days without power or sunlight.'
    },
    {
      title: 'Low Operating Cost',
      description: 'Zero electricity costs with minimal maintenance requirements. No battery replacement expenses. Typical lifespan of 10-15 years with proper care.'
    }
  ];

  const applicationsData = [
    {
      title: 'Rural Health Posts',
      description: 'Ideal for off-grid primary healthcare facilities in remote areas'
    },
    {
      title: 'Mobile Vaccination Campaigns',
      description: 'Support immunization outreach programs with reliable vaccine storage'
    },
    {
      title: 'Emergency Response',
      description: 'Rapid deployment for disaster relief and emergency immunization efforts'
    },
    {
      title: 'Island & Remote Communities',
      description: 'Perfect for areas with no electrical grid or unreliable power supply'
    }
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
            <Link to="/shop/cold-chain-transport" className="text-muted-foreground hover:text-foreground transition-colors">
              Cold Chain & Transport
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/shop/cold-chain-transport" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Cold Chain Equipment
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
              
              {/* Image Gallery Thumbnails */}
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

      {/* Applications */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8">Applications</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {applicationsData.map((app, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">{app.title}</h3>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8">What's Included</h2>
          
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {[
                  'Solar Direct Drive vaccine refrigerator unit',
                  'Solar panels (2 x 100W) with mounting brackets',
                  'Installation hardware and cable',
                  'Digital thermometer with min/max memory',
                  'Temperature monitoring chart',
                  'Vaccine storage baskets',
                  'User manual and maintenance guide',
                  'WHO PQS certificate',
                  'Professional installation and commissioning',
                  'User training (2-4 health workers)',
                  '3-year warranty on refrigerator',
                  '5-year warranty on solar panels'
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

      {/* Why Choose */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Why Choose Solar Direct Drive?</h2>
            <p className="text-lg text-muted-foreground">
              The most reliable vaccine storage solution for off-grid locations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Zero Operating Costs</h3>
                <p className="text-sm text-muted-foreground">
                  No electricity bills, no fuel costs, no battery replacements. Only minimal maintenance required.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Proven Track Record</h3>
                <p className="text-sm text-muted-foreground">
                  Thousands of units deployed across Africa with 98%+ uptime. WHO-approved for immunization programs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Climate Resistant</h3>
                <p className="text-sm text-muted-foreground">
                  Designed for extreme heat up to 43°C. Ice-lined construction maintains temperature during cloudy periods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Best Seller</Badge>
          <h2 className="text-2xl sm:text-3xl mb-4">Ready to Order?</h2>
          <p className="text-lg text-white/90 mb-8">
            Contact our cold chain specialists for pricing, installation planning, and delivery timelines for your solar vaccine refrigerator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support/request-equipment-quote">
              <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
                Request Quote
              </Button>
            </Link>
            <Link to="/support/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Cold Chain Specialist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
