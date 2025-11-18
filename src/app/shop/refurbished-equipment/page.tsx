import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { ProductDetailsDialog } from '../../../components/ProductDetailsDialog';
import { useState } from 'react';

export default function RefurbishedEquipmentPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const productCategories = [
    { id: 'all', label: 'All Equipment', count: 20 },
    { id: 'imaging', label: 'Diagnostic Imaging', count: 3 },
    { id: 'surgical', label: 'Surgical Equipment', count: 4 },
    { id: 'monitoring', label: 'Patient Monitoring', count: 5 },
    { id: 'laboratory', label: 'Laboratory Equipment', count: 5 },
    { id: 'maternal', label: 'Maternal & Neonatal', count: 3 }
  ];

  const featuredProducts = [
    {
      name: 'GE LOGIQ P6 Ultrasound System (Refurbished)',
      category: 'Diagnostic Imaging',
      image: 'https://images.unsplash.com/photo-1758962036927-6fb77f52a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWFjaGluZSUyMG1lZGljYWwlMjBpbWFnaW5nfGVufDF8fHx8MTc2MzA0MDUwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Pacem Renew™ certified portable ultrasound with multi-specialty imaging capabilities. Fully tested and warranted.',
      specs: [
        'Refurbishment grade: Premium',
        '12-month warranty included',
        'Multiple probes available',
        'Full service history documented'
      ],
      certifications: 'Pacem Renew™, CE, ISO 13485',
      badge: 'Best Value',
      savings: '60% vs new savings'
    },
    {
      name: 'Philips IntelliVue MP30 Patient Monitor (Refurbished)',
      category: 'Patient Monitoring',
      image: 'https://images.unsplash.com/photo-1746842419525-9db17f434859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwbW9uaXRvciUyMGhvc3BpdGFsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzA0MDUwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Compact bedside patient monitor with ECG, SpO2, NIBP, and temperature. Fully refurbished with new battery.',
      specs: [
        'Refurbishment grade: Premium',
        '12-month warranty',
        'New battery and accessories',
        'Tested to OEM specifications'
      ],
      certifications: 'Pacem Renew™, CE, ISO 13485',
      badge: 'High Demand',
      savings: '55% vs new savings'
    },
    {
      name: 'Mindray BS-200 Chemistry Analyzer (Refurbished)',
      category: 'Laboratory Equipment',
      image: 'https://images.unsplash.com/photo-1676313414325-2a877a95dd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaXN0cnklMjBhbmFseXplciUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYzMDQwNTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Automated chemistry analyzer for routine clinical chemistry testing. Pacem Renew™ certified with calibration.',
      specs: [
        'Refurbishment grade: Standard',
        '12-month warranty',
        'Factory calibration included',
        'All mechanical parts replaced'
      ],
      certifications: 'Pacem Renew™, CE-IVD, ISO 15189',
      badge: null,
      savings: '50% vs new savings'
    },
    {
      name: 'Dräger Fabius GS Premium Anesthesia Machine (Refurbished)',
      category: 'Surgical Equipment',
      image: 'https://images.unsplash.com/photo-1758206523735-079e56f2faf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmVzdGhlc2lhJTIwbWFjaGluZSUyMG9wZXJhdGluZyUyMHJvb218ZW58MXx8fHwxNzYzMDM4MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Advanced anesthesia workstation with integrated ventilation. Completely refurbished with OEM parts.',
      specs: [
        'Refurbishment grade: Premium',
        '18-month warranty',
        'OEM parts replacement',
        'Full safety testing'
      ],
      certifications: 'Pacem Renew™, CE, ISO 13485',
      badge: 'Featured',
      savings: '65% vs new savings'
    },
    {
      name: 'Siemens Multix Fusion DR X-Ray System (Refurbished)',
      category: 'Diagnostic Imaging',
      image: 'https://images.unsplash.com/photo-1587010580103-fd86b8ea14ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHh4cmF5JTIwbWFjaGluZSUyMG1lZGljYWwlMjByYWRpb2xvZ3l8ZW58MXx8fHwxNzYzMDQwNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Digital radiography system with flat panel detector. Premium refurbishment with radiation safety testing.',
      specs: [
        'Refurbishment grade: Premium',
        '24-month warranty',
        'New or refurbished detector',
        'Radiation safety certification'
      ],
      certifications: 'Pacem Renew™, CE, IEC 60601',
      badge: null,
      savings: '70% vs new savings'
    },
    {
      name: 'Sonoscape S6 Color Doppler Ultrasound (Refurbished)',
      category: 'Diagnostic Imaging',
      image: 'https://images.unsplash.com/photo-1758962036927-6fb77f52a92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bHRyYXNvdW5kJTIwbWFjaGluZSUyMG1lZGljYWwlMjBpbWFnaW5nfGVufDF8fHx8MTc2MzA0MDUwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Cart-based ultrasound system with color Doppler for comprehensive diagnostic imaging.',
      specs: [
        'Refurbishment grade: Standard',
        '12-month warranty',
        'Up to 3 probes included',
        'Complete system testing'
      ],
      certifications: 'Pacem Renew™, CE, FDA',
      badge: null,
      savings: '55% vs new savings'
    },
    {
      name: 'Getinge Maquet Operating Table (Refurbished)',
      category: 'Surgical Equipment',
      image: 'https://images.unsplash.com/photo-1758653500015-e97176428d46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVyYXRpbmclMjB0YWJsZSUyMHN1cmdpY2FsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzA0MDUwOXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Hydraulic operating table with multiple positioning options. Complete mechanical refurbishment.',
      specs: [
        'Refurbishment grade: Premium',
        '18-month warranty',
        'All hydraulics replaced',
        'New mattress and covers'
      ],
      certifications: 'Pacem Renew™, CE, ISO 13485',
      badge: null,
      savings: '60% vs new savings'
    },
    {
      name: 'Mindray Datascope Spectrum OR Vital Signs Monitor (Refurbished)',
      category: 'Patient Monitoring',
      image: 'https://images.unsplash.com/photo-1758206523670-67343d3b27eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbCUyMHNpZ25zJTIwbW9uaXRvciUyMG1lZGljYWx8ZW58MXx8fHwxNzYzMDQwNTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Operating room vital signs monitor with NIBP, SpO2, and temperature monitoring.',
      specs: [
        'Refurbishment grade: Standard',
        '12-month warranty',
        'New cuffs and sensors',
        'Calibration certified'
      ],
      certifications: 'Pacem Renew™, CE, ISO 13485',
      badge: null,
      savings: '50% vs new savings'
    },
    {
      name: 'Abbott CELL-DYN Ruby Hematology Analyzer (Refurbished)',
      category: 'Laboratory Equipment',
      image: 'https://images.unsplash.com/photo-1691934286173-d366705baa83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZW1hdG9sb2d5JTIwYW5hbHl6ZXIlMjBsYWIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYzMDQwNTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Automated hematology analyzer for complete blood count testing. Factory-certified refurbishment.',
      specs: [
        'Refurbishment grade: Premium',
        '18-month warranty',
        'OEM certified refurbishment',
        'Calibration and QC included'
      ],
      certifications: 'Pacem Renew™, CE-IVD, ISO 15189',
      badge: null,
      savings: '55% vs new savings'
    },
    {
      name: 'GE Corometrics 170 Fetal Monitor (Refurbished)',
      category: 'Maternal & Neonatal',
      image: 'https://images.unsplash.com/photo-1691935152800-56b0353b4aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZXRhbCUyMG1vbml0b3IlMjBtYXRlcm5pdHklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYzMDQwNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Antepartum/intrapartum fetal monitoring system. Complete refurbishment with new transducers.',
      specs: [
        'Refurbishment grade: Premium',
        '12-month warranty',
        'New ultrasound transducers',
        'New TOCO transducers'
      ],
      certifications: 'Pacem Renew™, CE, FDA',
      badge: 'Best Seller',
      savings: '60% vs new savings'
    },
    {
      name: 'Dräger Babylog 8000 Plus Infant Ventilator (Refurbished)',
      category: 'Maternal & Neonatal',
      image: 'https://images.unsplash.com/photo-1761526531628-428a8f2b0840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdmVudGlsYXRvciUyMGhvc3BpdGFsfGVufDF8fHx8MTc2MzA0MDUwOXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Neonatal ventilator with advanced modes for NICU care. Premium refurbishment with safety testing.',
      specs: [
        'Refurbishment grade: Premium',
        '18-month warranty',
        'All pneumatics replaced',
        'Safety alarm testing'
      ],
      certifications: 'Pacem Renew™, CE, ISO 13485',
      badge: null,
      savings: '65% vs new savings'
    },
    {
      name: 'Stryker 1005 Stretcher (Refurbished)',
      category: 'Surgical Equipment',
      image: 'https://images.unsplash.com/photo-1758204055067-edfa455b6d28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHN0cmV0Y2hlciUyMGVtZXJnZW5jeXxlbnwxfHx8fDE3NjMwNDA1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Hospital stretcher with hydraulic height adjustment and side rails. Structural refurbishment.',
      specs: [
        'Refurbishment grade: Standard',
        '12-month warranty',
        'New mattress and covers',
        'All wheels and brakes replaced'
      ],
      certifications: 'Pacem Renew™, CE, ISO 13485',
      badge: null,
      savings: '45% vs new savings'
    },
    {
      name: 'Masimo Rad-97 Pulse CO-Oximeter (Refurbished)',
      category: 'Patient Monitoring',
      image: 'https://images.unsplash.com/photo-1746842419525-9db17f434859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwbW9uaXRvciUyMGhvc3BpdGFsJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzA0MDUwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Advanced pulse oximeter with rainbow SET technology. Complete refurbishment with calibration.',
      specs: [
        'Refurbishment grade: Premium',
        '12-month warranty',
        'Latest software version',
        'New sensors available'
      ],
      certifications: 'Pacem Renew™, CE, FDA',
      badge: null,
      savings: '50% vs new savings'
    },
    {
      name: 'Roche Cobas c311 Clinical Chemistry Analyzer (Refurbished)',
      category: 'Laboratory Equipment',
      image: 'https://images.unsplash.com/photo-1676313414325-2a877a95dd10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaXN0cnklMjBhbmFseXplciUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYzMDQwNTA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Automated clinical chemistry analyzer with ISE module. Factory refurbished with warranty.',
      specs: [
        'Refurbishment grade: Premium',
        '24-month warranty',
        'Factory refurbishment',
        'Full installation support'
      ],
      certifications: 'Pacem Renew™, CE-IVD, ISO 15189',
      badge: 'Featured',
      savings: '60% vs new savings'
    },
    {
      name: 'Medtronic Physio-Control LIFEPAK 12 Defibrillator (Refurbished)',
      category: 'Patient Monitoring',
      image: 'https://images.unsplash.com/photo-1762161916712-09592fa05b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWZpYnJpbGxhdG9yJTIwZW1lcmdlbmN5JTIwbWVkaWNhbHxlbnwxfHx8fDE3NjMwNDA1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Defibrillator/monitor with 12-lead ECG, SpO2, and pacing. Complete electrical safety testing.',
      specs: [
        'Refurbishment grade: Premium',
        '12-month warranty',
        'New battery pack',
        'Defibrillator energy testing'
      ],
      certifications: 'Pacem Renew™, CE, IEC 60601',
      badge: null,
      savings: '55% vs new savings'
    },
    {
      name: 'Fisher & Paykel Infant Warmer (Refurbished)',
      category: 'Maternal & Neonatal',
      image: 'https://images.unsplash.com/photo-1537673156864-5d2c72de7824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZhbnQlMjB3YXJtZXIlMjBuZW9uYXRhbCUyMGNhcmV8ZW58MXx8fHwxNzYzMDQwNTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Open care infant warmer with servo-controlled temperature. Complete thermal testing.',
      specs: [
        'Refurbishment grade: Standard',
        '12-month warranty',
        'Heating element tested',
        'New mattress included'
      ],
      certifications: 'Pacem Renew™, CE, ISO 13485',
      badge: null,
      savings: '50% vs new savings'
    },
    {
      name: 'Olympus CYF-5 Flexible Cystoscope (Refurbished)',
      category: 'Surgical Equipment',
      image: 'https://images.unsplash.com/photo-1661175099624-c9b9c2318e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZW5kb3Njb3BlJTIwc3VyZ2ljYWx8ZW58MXx8fHwxNzYzMDQwNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Flexible cystoscope for urological procedures. Complete optical refurbishment.',
      specs: [
        'Refurbishment grade: Premium',
        '18-month warranty',
        'Fiber optic replacement',
        'Leak testing certified'
      ],
      certifications: 'Pacem Renew™, CE, ISO 13485',
      badge: null,
      savings: '65% vs new savings'
    },
    {
      name: 'Sysmex XS-800i Hematology Analyzer (Refurbished)',
      category: 'Laboratory Equipment',
      image: 'https://images.unsplash.com/photo-1691934286173-d366705baa83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZW1hdG9sb2d5JTIwYW5hbHl6ZXIlMjBsYWIlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzYzMDQwNTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Automated 5-part differential hematology analyzer. Premium refurbishment with calibration.',
      specs: [
        'Refurbishment grade: Premium',
        '18-month warranty',
        'Complete fluidics overhaul',
        'Quality control materials included'
      ],
      certifications: 'Pacem Renew™, CE-IVD, ISO 15189',
      badge: null,
      savings: '55% vs new savings'
    },
    {
      name: 'Welch Allyn Connex Vital Signs Monitor (Refurbished)',
      category: 'Patient Monitoring',
      image: 'https://images.unsplash.com/photo-1758206523670-67343d3b27eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aXRhbCUyMHNpZ25zJTIwbW9uaXRvciUyMG1lZGljYWx8ZW58MXx8fHwxNzYzMDQwNTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Vital signs monitor with connectivity for EMR integration. Complete refurbishment.',
      specs: [
        'Refurbishment grade: Standard',
        '12-month warranty',
        'New accessories included',
        'Network connectivity tested'
      ],
      certifications: 'Pacem Renew™, CE, ISO 13485',
      badge: null,
      savings: '45% vs new savings'
    },
    {
      name: 'GE Giraffe Incubator (Refurbished)',
      category: 'Maternal & Neonatal',
      image: 'https://images.unsplash.com/photo-1560306580-9e204fe45f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZhbnQlMjBpbmN1YmF0b3IlMjBuZW9uYXRhbHxlbnwxfHx8fDE3NjMwNDA1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Neonatal incubator with servo-controlled temperature and humidity. Complete refurbishment.',
      specs: [
        'Refurbishment grade: Premium',
        '18-month warranty',
        'Temperature and humidity testing',
        'New hood and mattress'
      ],
      certifications: 'Pacem Renew™, CE, ISO 13485',
      badge: 'High Demand',
      savings: '60% vs new savings'
    }
  ];

  const renderProductCard = (product: typeof featuredProducts[0], index: number) => (
    <Card key={index} className="overflow-hidden hover:shadow-lg transition">
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          {product.badge && (
            <Badge className="bg-[#0033A0]">{product.badge}</Badge>
          )}
          <Badge variant="outline" className="border-green-600 text-green-600">
            {product.savings}
          </Badge>
        </div>
        
        <h3 className="mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {product.description}
        </p>
        
        <div className="flex gap-2">
          <Link to="/support/request-equipment-quote" className="flex-1">
            <Button className="w-full bg-[#0033A0] hover:bg-[#002875]" size="sm">
              Request Quote
            </Button>
          </Link>
          <Button variant="outline" size="sm" className="flex-1" onClick={() => { setSelectedProduct(product); setIsDialogOpen(true); }}>
            Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );

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
              <span>Refurbished Equipment</span>
            </div>
            <div className="mb-2">
              <Badge className="bg-white/20 text-white border-white/30">Pacem Renew™</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Refurbished Equipment</h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6">
              Certified and warrantied refurbished equipment tested for clinical performance. Save 45-70% while maintaining quality and reliability with our Pacem Renew™ certification program.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
                Browse Refurbished Equipment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Renew™ Catalog
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
              <div className="mb-1">Pacem Renew™ Certified</div>
              <p className="text-sm text-muted-foreground">
                Rigorous testing and certification process
              </p>
            </div>

            <div>
              <div className="mb-1">Up to 24-Month Warranty</div>
              <p className="text-sm text-muted-foreground">
                Comprehensive warranty coverage on all equipment
              </p>
            </div>

            <div>
              <div className="mb-1">45-70% Cost Savings</div>
              <p className="text-sm text-muted-foreground">
                Significant savings compared to new equipment
              </p>
            </div>

            <div>
              <div className="mb-1">Immediate Availability</div>
              <p className="text-sm text-muted-foreground">
                Most equipment in stock for quick deployment
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
              <h2 className="text-2xl sm:text-3xl">Browse Refurbished Equipment by Category</h2>
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
                {featuredProducts.map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="imaging" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Diagnostic Imaging')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="surgical" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Surgical Equipment')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="monitoring" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Patient Monitoring')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="laboratory" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Laboratory Equipment')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="maternal" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Maternal & Neonatal')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pacem Renew™ Equipment Packages */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-[#0033A0]">Pacem Renew™ Package</Badge>
            <h2 className="text-2xl sm:text-3xl mb-4">Pacem Renew™ Equipment Packages</h2>
            <p className="text-lg text-muted-foreground">
              Complete refurbished equipment packages for different healthcare facility needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-[#0033A0]/20">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-[#0033A0]">Pacem Renew™ Package</Badge>
                <div className="mb-4">
                  <h3 className="text-xl mb-2">Primary Health Center Equipment Package</h3>
                  <p className="text-sm text-muted-foreground">
                    Essential refurbished equipment for establishing or upgrading a primary healthcare facility.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Portable ultrasound system (Premium grade)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Patient monitor with vital signs (Standard grade)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Examination table and medical furniture</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Nebulizer and suction units</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Medical refrigerator for vaccines</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Autoclave sterilizer</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>12-month comprehensive warranty</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Installation, training, and certification</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#0033A0]/10 rounded-lg border border-[#0033A0]/20">
                  <div className="text-sm mb-1">Cost Savings:</div>
                  <p className="text-xs text-muted-foreground mb-3">55-65% vs new equipment</p>
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">Rural health centers, community clinics, primary care facilities</p>
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
                <Badge className="mb-4 bg-[#00A0DC]">Pacem Renew™ Package</Badge>
                <div className="mb-4">
                  <h3 className="text-xl mb-2">District Hospital Operating Theater Package</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete refurbished surgical equipment for a fully functional operating theater.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Operating table (Premium grade)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Anesthesia machine with ventilator</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Operating room lights (LED)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Electrosurgical unit</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Patient monitor for OR</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Surgical suction units (2)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>18-month warranty on major equipment</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Installation, safety testing, and training</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#00A0DC]/10 rounded-lg border border-[#00A0DC]/20">
                  <div className="text-sm mb-1">Cost Savings:</div>
                  <p className="text-xs text-muted-foreground mb-3">60-70% vs new equipment</p>
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">District hospitals, surgical centers, regional medical centers</p>
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
                <Badge className="mb-4 bg-[#0033A0]">Pacem Renew™ Package</Badge>
                <div className="mb-4">
                  <h3 className="text-xl mb-2">Laboratory Equipment Package</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive refurbished laboratory equipment for clinical diagnostics.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Chemistry analyzer (Premium grade)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Hematology analyzer (Premium grade)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Centrifuge and microplate reader</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Microscope (binocular)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Laboratory refrigerator and freezer</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Water purification system</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>18-month warranty</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Installation, calibration, and training</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#0033A0]/10 rounded-lg border border-[#0033A0]/20">
                  <div className="text-sm mb-1">Cost Savings:</div>
                  <p className="text-xs text-muted-foreground mb-3">50-60% vs new equipment</p>
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">Hospital laboratories, reference labs, district health facilities</p>
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
                <Badge className="mb-4 bg-[#00A0DC]">Pacem Renew™ Package</Badge>
                <div className="mb-4">
                  <h3 className="text-xl mb-2">Maternal & Neonatal Care Package</h3>
                  <p className="text-sm text-muted-foreground">
                    Refurbished equipment for comprehensive maternal and neonatal healthcare services.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Fetal monitors (2 units)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Neonatal incubator (Premium grade)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Infant warmer</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Phototherapy unit</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Infant ventilator (optional)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>OB/GYN ultrasound with probes</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>12-18 month warranty</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Installation, testing, and clinical training</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#00A0DC]/10 rounded-lg border border-[#00A0DC]/20">
                  <div className="text-sm mb-1">Cost Savings:</div>
                  <p className="text-xs text-muted-foreground mb-3">55-65% vs new equipment</p>
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">Maternity units, delivery suites, NICU, special care baby units</p>
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

      {/* The Pacem Renew™ Certification Process */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">The Pacem Renew™ Certification Process</h2>
            <p className="text-lg text-muted-foreground">
              Rigorous testing and quality standards ensure refurbished equipment meets clinical performance requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-2">Pacem Renew™ Premium Grade</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive refurbishment with OEM parts, extended warranty, and like-new performance
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-2">Pacem Renew™ Standard Grade</h3>
                <p className="text-sm text-muted-foreground">
                  Complete refurbishment meeting all safety and performance standards with 12-month warranty
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-2">Biomedical Testing & Certification</h3>
                <p className="text-sm text-muted-foreground">
                  All equipment tested to manufacturer specifications with electrical safety certification
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-2">Service History Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Complete refurbishment documentation, service records, and performance test results
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#0033A0]/20">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">
                  <Badge className="bg-[#0033A0]">Step 1</Badge>
                </div>
                <h3 className="text-lg mb-2">Inspection & Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Complete evaluation of equipment condition, functionality, and refurbishment requirements. Service history review and parts availability assessment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00A0DC]/20">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">
                  <Badge className="bg-[#00A0DC]">Step 2</Badge>
                </div>
                <h3 className="text-lg mb-2">Refurbishment & Testing</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive refurbishment using OEM or equivalent parts. Testing to manufacturer specifications including safety, performance, and calibration testing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#0033A0]/20">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">
                  <Badge className="bg-[#0033A0]">Step 3</Badge>
                </div>
                <h3 className="text-lg mb-2">Certification & Warranty</h3>
                <p className="text-sm text-muted-foreground">
                  Pacem Renew™ certification issued with complete documentation. Equipment ready for deployment with comprehensive warranty coverage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Why Choose Pacem Renew™ Refurbished Equipment?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Significant Cost Savings</h3>
                <p className="text-sm text-muted-foreground">
                  Save 45-70% compared to new equipment prices. Allocate savings to additional equipment, training, or service expansion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Clinical Performance Guaranteed</h3>
                <p className="text-sm text-muted-foreground">
                  All equipment tested to manufacturer specifications. Performance guaranteed to meet clinical requirements with certification documentation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Comprehensive Warranty</h3>
                <p className="text-sm text-muted-foreground">
                  12-24 month warranty coverage depending on equipment grade. Parts, labor, and preventive maintenance included.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Immediate Availability</h3>
                <p className="text-sm text-muted-foreground">
                  Most refurbished equipment in stock and ready to ship. Avoid long lead times associated with new equipment procurement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Sustainable Healthcare</h3>
                <p className="text-sm text-muted-foreground">
                  Environmentally responsible choice extending equipment lifecycle. Reduce medical equipment waste while maintaining quality care.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Full Support & Training</h3>
                <p className="text-sm text-muted-foreground">
                  Installation, user training, and ongoing technical support included. Spare parts availability and service contracts available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Trade-In Program */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-[#0033A0]">
            <CardContent className="p-8 sm:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl mb-4">Equipment Trade-In Program</h2>
                  <h3 className="text-xl mb-4">Trade In Your Old Equipment</h3>
                  <p className="text-muted-foreground mb-6">
                    Our equipment trade-in program allows you to exchange old or outdated medical equipment for credit toward Pacem Renew™ refurbished equipment purchases.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Trade-in value assessment and credit offer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Apply credit toward refurbished equipment purchase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Responsible disposal or refurbishment of traded equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Simplified upgrade path for healthcare facilities</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Card className="bg-white border-[#0033A0]/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg mb-4">Get Started</h3>
                      <div className="space-y-3">
                        <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                          Request Trade-In Assessment
                        </Button>
                        <Button variant="outline" className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10">
                          Browse Refurbished Equipment
                        </Button>
                        <Button variant="outline" className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10">
                          Download Renew™ Guide (PDF)
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#00A0DC] text-white border-[#00A0DC]">
                    <CardContent className="p-6">
                      <div className="text-sm text-white/90 mb-1">Refurbishment Specialists</div>
                      <p className="text-sm mb-3">
                        Our biomedical equipment specialists are ready to discuss your refurbished equipment needs and trade-in options.
                      </p>
                      <div className="text-sm">
                        📧 renew@pacemhealth.com<br />
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
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Pacem Renew™</Badge>
          <h2 className="text-2xl sm:text-3xl mb-4">Save 45-70% with Certified Refurbished Equipment</h2>
          <p className="text-lg text-white/90 mb-8">
            Quality refurbished medical equipment with comprehensive warranty coverage. Immediate availability and significant cost savings for your healthcare facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support/request-equipment-quote">
              <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
                Request Equipment Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Renew™ Catalog
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