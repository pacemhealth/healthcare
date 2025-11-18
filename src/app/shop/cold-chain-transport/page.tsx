import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { ProductDetailsDialog } from '../../../components/ProductDetailsDialog';
import { useState } from 'react';

export default function ColdChainTransportPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const productCategories = [
    { id: 'all', label: 'All Equipment', count: 24 },
    { id: 'vaccine-storage', label: 'Vaccine Storage', count: 3 },
    { id: 'transport', label: 'Transport & Carriers', count: 3 },
    { id: 'monitoring', label: 'Temperature Monitoring', count: 6 },
    { id: 'solar', label: 'Solar-Powered', count: 4 },
    { id: 'accessories', label: 'Accessories', count: 8 }
  ];

  const featuredProducts = [
    {
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
      certifications: 'WHO PQS, CE, ISO 13485',
      badge: 'Best Seller'
    },
    {
      name: 'Vaccine Carrier with GPS Temperature Logger',
      category: 'Transport & Carriers',
      image: 'https://images.unsplash.com/photo-1608243499710-5ebece89a37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNjaW5lJTIwY2FycmllciUyMG1lZGljYWwlMjB0cmFuc3BvcnR8ZW58MXx8fHwxNzYzMDM5Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Insulated vaccine carrier with integrated GPS tracking and real-time temperature monitoring for secure vaccine transport.',
      specs: [
        'Capacity: 1.6-5.0 liters',
        'Temperature maintenance: 24-48 hours',
        'GPS tracking with cloud dashboard',
        'Temperature alarm system'
      ],
      certifications: 'WHO PQS, CE, ISO 9001',
      badge: 'Featured'
    },
    {
      name: 'Ice-Lined Refrigerator (ILR)',
      category: 'Vaccine Storage',
      image: 'https://images.unsplash.com/photo-1675924074571-e4b2905c779e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwc3RvcmFnZSUyMG1lZGljYWwlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjMwMzk3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Energy-efficient refrigerator with ice lining for extended temperature maintenance during power outages.',
      specs: [
        'Net capacity: 90-165 liters',
        'Ice-lined walls for stability',
        'Holdover: 10+ days without power',
        'Low energy consumption'
      ],
      certifications: 'WHO PQS, CE, ISO 13485',
      badge: null
    },
    {
      name: 'Portable Cold Box (12L)',
      category: 'Transport & Carriers',
      image: 'https://images.unsplash.com/photo-1750593481405-876be1140853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1bGF0ZWQlMjBjb250YWluZXIlMjBtZWRpY2FsfGVufDF8fHx8MTc2MzAzOTc4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Lightweight insulated cold box for short-distance vaccine transport and daily immunization sessions.',
      specs: [
        'Capacity: 12 liters',
        'Temperature hold: 48+ hours',
        'Impact-resistant construction',
        'Easy-carry handles'
      ],
      certifications: 'WHO PQS, CE',
      badge: null
    },
    {
      name: 'Real-Time Temperature Monitoring System',
      category: 'Temperature Monitoring',
      image: 'https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wZXJhdHVyZSUyMG1vbml0b3JpbmclMjBzeXN0ZW0lMjBtZWRpY2FsfGVufDF8fHx8MTc2MzAzOTc4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Cloud-based temperature monitoring with SMS/email alerts for vaccine storage and transport tracking.',
      specs: [
        'Real-time temperature logging',
        'SMS/email alarm notifications',
        'Cloud dashboard and reporting',
        'Battery backup (72 hours)'
      ],
      certifications: 'CE, ISO 9001, FDA Listed',
      badge: 'High Demand'
    },
    {
      name: 'Solar Freezer for Ice Pack Production',
      category: 'Solar-Powered',
      image: 'https://images.unsplash.com/photo-1697665896499-121af27e0030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwbWVkaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjMwMzk3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Solar-powered freezer for ice pack conditioning and vaccine storage in areas with unreliable power.',
      specs: [
        'Freezer capacity: 100-200 liters',
        'Temperature: -15°C to -25°C',
        'Solar panel system included',
        'Ice pack production capability'
      ],
      certifications: 'WHO PQS, CE, ISO 13485',
      badge: null
    },
    {
      name: 'Vaccine Cold Room (Walk-in)',
      category: 'Vaccine Storage',
      image: 'https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZnJlZXplciUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzYzMDM5NzgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Modular walk-in cold room for large-scale vaccine storage at district and national levels.',
      specs: [
        'Capacity: 10-50 cubic meters',
        'Temperature range: +2°C to +8°C',
        'Modular panel construction',
        'Automatic temperature control'
      ],
      certifications: 'WHO PQS, CE, ISO 13485',
      badge: null
    },
    {
      name: 'Data Logger (Temperature & Humidity)',
      category: 'Temperature Monitoring',
      image: 'https://images.unsplash.com/photo-1758206523830-a5b8afb372a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZXF1aXBtZW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjI5NTk1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'USB data logger for continuous temperature and humidity recording with compliance reporting.',
      specs: [
        'Temperature range: -30°C to +70°C',
        'Humidity monitoring included',
        'USB interface for data download',
        'Configurable alarm thresholds'
      ],
      certifications: 'CE, ISO 9001, Calibration Certificate',
      badge: null
    },
    {
      name: 'Insulated Vaccine Transport Box (40L)',
      category: 'Transport & Carriers',
      image: 'https://images.unsplash.com/photo-1591562747474-ab6e2dab1070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdHJhbnNwb3J0JTIwYmFnfGVufDF8fHx8MTc2MzAzOTc4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Heavy-duty insulated transport box for regional vaccine distribution and long-distance cold chain transport.',
      specs: [
        'Capacity: 40 liters',
        'Temperature hold: 72+ hours',
        'Reinforced construction',
        'Stackable design'
      ],
      certifications: 'WHO PQS, CE',
      badge: null
    },
    {
      name: 'Wireless Temperature Sensor Network',
      category: 'Temperature Monitoring',
      image: 'https://images.unsplash.com/photo-1606904825846-647eb07f5be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMHNlbnNvciUyMG5ldHdvcmt8ZW58MXx8fHwxNzYzMDM5NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Multi-point wireless sensor network for comprehensive cold chain facility monitoring.',
      specs: [
        'Up to 50 wireless sensors per gateway',
        'Real-time cloud synchronization',
        'Automated compliance reports',
        'Mobile app for iOS and Android'
      ],
      certifications: 'CE, FCC, ISO 9001',
      badge: null
    },
    {
      name: 'Digital Temperature Chart Recorder',
      category: 'Temperature Monitoring',
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjI5OTgxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Automated chart recorder for regulatory compliance and cold chain documentation.',
      specs: [
        'Continuous 7-day recording',
        'Automatic data export',
        'Tamper-proof log',
        'Color touchscreen display'
      ],
      certifications: 'CE, ISO 9001, FDA Listed',
      badge: null
    },
    {
      name: 'Bluetooth Temperature Logger',
      category: 'Temperature Monitoring',
      image: 'https://images.unsplash.com/photo-1588318312727-e210fcd11464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVldG9vdGglMjBkZXZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzAzOTc4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Compact Bluetooth-enabled logger for smartphone-based temperature monitoring.',
      specs: [
        'Bluetooth Low Energy connectivity',
        'Mobile app for data viewing',
        '30-day battery life',
        'Reusable with USB charging'
      ],
      certifications: 'CE, FCC, Calibration Certificate',
      badge: null
    },
    {
      name: 'Freeze Tag Temperature Indicator',
      category: 'Temperature Monitoring',
      image: 'https://images.unsplash.com/photo-1615486511369-31ff08672204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVybW90ZXRlciUyMGRpZ2l0YWwlMjBtZWRpY2FsfGVufDF8fHx8MTc2MzAzOTc4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Single-use freeze indicator to monitor vaccine exposure to freezing temperatures.',
      specs: [
        'Irreversible freeze detection',
        'Visual color change indicator',
        'Adhesive backing for vials',
        'No batteries required'
      ],
      certifications: 'WHO Approved, CE',
      badge: null
    },
    {
      name: 'Solar Refrigerator Combo (Fridge + Freezer)',
      category: 'Solar-Powered',
      image: 'https://images.unsplash.com/photo-1697665896499-121af27e0030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwbWVkaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjMwMzk3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Dual-compartment solar refrigerator with separate vaccine storage and ice pack freezer.',
      specs: [
        'Fridge capacity: 100L (+2°C to +8°C)',
        'Freezer capacity: 50L (-15°C to -25°C)',
        'Solar panel system (300W)',
        'Battery backup optional'
      ],
      certifications: 'WHO PQS, CE, ISO 13485',
      badge: null
    },
    {
      name: 'Portable Solar Vaccine Carrier',
      category: 'Solar-Powered',
      image: 'https://images.unsplash.com/photo-1608243499710-5ebece89a37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWNjaW5lJTIwY2FycmllciUyMG1lZGljYWwlMjB0cmFuc3BvcnR8ZW58MXx8fHwxNzYzMDM5Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Battery-powered vaccine carrier with solar charging for extended field use.',
      specs: [
        'Built-in rechargeable battery',
        'Solar panel for field charging',
        'Temperature hold: 5+ days',
        'Digital display and controls'
      ],
      certifications: 'CE, WHO Guidelines, ISO 9001',
      badge: null
    },
    {
      name: 'Solar Cold Box with Ice Pack Storage',
      category: 'Solar-Powered',
      image: 'https://images.unsplash.com/photo-1750593481405-876be1140853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1bGF0ZWQlMjBjb250YWluZXIlMjBtZWRpY2FsfGVufDF8fHx8MTc2MzAzOTc4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Solar-powered mobile cold box for campaign-style vaccination programs.',
      specs: [
        'Capacity: 20 liters',
        'Integrated ice pack freezing',
        'Solar panel charging',
        'Battery backup (48 hours)'
      ],
      certifications: 'CE, ISO 13485',
      badge: null
    },
    {
      name: 'Solar Power System for Refrigerators',
      category: 'Solar-Powered',
      image: 'https://images.unsplash.com/photo-1697665896499-121af27e0030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwbWVkaWNhbCUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjMwMzk3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Complete solar power kit for retrofitting existing vaccine refrigerators.',
      specs: [
        'Solar panels (200-400W)',
        'Battery bank (24V system)',
        'Charge controller included',
        'Installation hardware'
      ],
      certifications: 'CE, ISO 9001',
      badge: null
    },
    {
      name: 'Conditioned Ice Packs (Set of 50)',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1675924074571-e4b2905c779e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwc3RvcmFnZSUyMG1lZGljYWwlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjMwMzk3ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'WHO-approved conditioned ice packs for vaccine carriers and cold boxes.',
      specs: [
        'Pre-conditioned to 0°C',
        'Various sizes (0.3L to 0.6L)',
        'Reusable with proper freezing',
        'Durable construction'
      ],
      certifications: 'WHO PQS, CE',
      badge: 'High Demand'
    },
    {
      name: 'Vaccine Vial Monitors (VVM)',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1615486511369-31ff08672204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVybW90ZXRlciUyMGRpZ2l0YWwlMjBtZWRpY2FsfGVufDF8fHx8MTc2MzAzOTc4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Heat-sensitive labels for individual vaccine vial temperature exposure monitoring.',
      specs: [
        'Heat exposure indication',
        'Irreversible color change',
        'Multiple sensitivity levels',
        'Adhesive backing'
      ],
      certifications: 'WHO Approved, CE',
      badge: null
    },
    {
      name: 'Cold Chain Transport Bags',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1591562747474-ab6e2dab1070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdHJhbnNwb3J0JTIwYmFnfGVufDF8fHx8MTc2MzAzOTc4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Insulated transport bags for short-distance vaccine and temperature-sensitive medicine transport.',
      specs: [
        'Various sizes (2L to 15L)',
        'Thermal insulation',
        'Waterproof exterior',
        'Shoulder strap included'
      ],
      certifications: 'CE, ISO 9001',
      badge: null
    },
    {
      name: 'Refrigerator Thermometers (Digital)',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1615486511369-31ff08672204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVybW90ZXRlciUyMGRpZ2l0YWwlMjBtZWRpY2FsfGVufDF8fHx8MTc2MzAzOTc4MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Digital thermometers with min/max memory for vaccine refrigerator monitoring.',
      specs: [
        'Digital LCD display',
        'Min/max temperature memory',
        'Alarm function',
        'Probe on cable (1.5m)'
      ],
      certifications: 'CE, Calibration Certificate',
      badge: null
    },
    {
      name: 'Cold Room Shelving System',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1715520530023-cc8a1b2044ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9yYWdlJTIwc2hlbHZpbmclMjBzeXN0ZW18ZW58MXx8fHwxNzYzMDM5Nzg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Modular shelving and storage system for vaccine cold rooms and large refrigerators.',
      specs: [
        'Adjustable height shelving',
        'Corrosion-resistant material',
        'Easy to clean',
        'Modular configuration'
      ],
      certifications: 'CE, ISO 9001',
      badge: null
    },
    {
      name: 'Temperature Alarm System',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1675209430232-52695f9040b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYWxlcnQlMjBzeXN0ZW18ZW58MXx8fHwxNzYzMDM5Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Standalone alarm system with visual and audible alerts for out-of-range temperatures.',
      specs: [
        'Loud audible alarm (85dB)',
        'Flashing LED indicator',
        'Adjustable temperature range',
        'Battery and mains powered'
      ],
      certifications: 'CE, ISO 9001',
      badge: null
    },
    {
      name: 'Cold Chain Management Software License',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjI5OTgxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Cloud-based software platform for comprehensive cold chain inventory and monitoring management.',
      specs: [
        'Real-time dashboard',
        'Inventory tracking',
        'Automated reports',
        'Multi-facility support'
      ],
      certifications: 'ISO 27001, GDPR Compliant',
      badge: null
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
        {product.badge && (
          <Badge className="mb-2 bg-[#0033A0]">{product.badge}</Badge>
        )}
        
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
              <span>Cold Chain & Transport Supplies</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Cold Chain & Transport Supplies</h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6">
              Temperature-controlled vaccine carriers, solar-powered fridges, and GPS-monitored transport gear. WHO-certified cold chain solutions for reliable immunization programs across Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/support/request-equipment-quote">
                <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
                  Request Cold Chain Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Cold Chain Catalog
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
              <div className="mb-1">WHO PQS Certified</div>
              <p className="text-sm text-muted-foreground">
                All equipment meets WHO prequalification standards
              </p>
            </div>

            <div>
              <div className="mb-1">Solar-Powered Options</div>
              <p className="text-sm text-muted-foreground">
                Reliable cold chain for off-grid and remote areas
              </p>
            </div>

            <div>
              <div className="mb-1">GPS Temperature Tracking</div>
              <p className="text-sm text-muted-foreground">
                Real-time monitoring and compliance reporting
              </p>
            </div>

            <div>
              <div className="mb-1">Full Installation & Training</div>
              <p className="text-sm text-muted-foreground">
                Setup, staff training, and maintenance support
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
              <h2 className="text-2xl sm:text-3xl">Browse Cold Chain Equipment by Category</h2>
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

            <TabsContent value="vaccine-storage" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Vaccine Storage')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="transport" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Transport & Carriers')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="monitoring" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Temperature Monitoring')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="solar" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Solar-Powered')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>

            <TabsContent value="accessories" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProducts
                  .filter(p => p.category === 'Accessories')
                  .map((product, index) => renderProductCard(product, index))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Complete Cold Chain Packages */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Complete Cold Chain Packages</h2>
            <p className="text-lg text-muted-foreground">
              Turnkey cold chain solutions for different healthcare facility levels and immunization programs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-[#0033A0]/20">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl mb-2">Rural Health Post Cold Chain Kit</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete cold chain equipment for off-grid primary healthcare facilities.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Solar Direct Drive vaccine refrigerator (50L)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Vaccine carrier (1.6L) with ice packs</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Cold box (12L) for outreach</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Digital thermometer with alarm</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Ice pack conditioning freezer access</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Temperature monitoring chart</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Cold chain management guide</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Installation and training included</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#0033A0]/10 rounded-lg border border-[#0033A0]/20">
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">Rural health posts, off-grid clinics, community health centers</p>
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
                  <h3 className="text-xl mb-2">District Vaccine Storage Package</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive cold chain system for district-level vaccine storage and distribution.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Ice-lined refrigerator (165L)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Solar freezer for ice packs (200L)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Vaccine carriers (5L) - 10 units</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Cold boxes (12L) - 5 units</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Real-time monitoring system</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Backup power system (optional)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Staff training on cold chain management</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Maintenance kit and spare parts</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#00A0DC]/10 rounded-lg border border-[#00A0DC]/20">
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">District health offices, regional vaccine stores, immunization hubs</p>
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
                  <h3 className="text-xl mb-2">Mobile Vaccination Campaign Kit</h3>
                  <p className="text-sm text-muted-foreground">
                    Portable cold chain equipment for large-scale immunization campaigns and outreach.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Vaccine carriers with GPS (5L) - 20 units</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Portable cold boxes (12L) - 10 units</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Ice packs (conditioned) - 200 units</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Temperature data loggers - 25 units</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Insulated transport boxes (40L) - 5 units</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Mobile freezer for ice conditioning</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Campaign management dashboard</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span>Field monitoring supplies</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#0033A0]/10 rounded-lg border border-[#0033A0]/20">
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">National immunization campaigns, emergency response, mass vaccination programs</p>
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
                  <h3 className="text-xl mb-2">Hospital Vaccine Storage Suite</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced cold chain infrastructure for hospital-based immunization programs.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-sm mb-3">Package Includes:</div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Walk-in cold room (20 cubic meters)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Backup refrigerator (200L)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Real-time monitoring with cloud dashboard</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Automatic alarm system</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Emergency power backup</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Vaccine carriers and cold boxes</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Staff access control system</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                      <span>Comprehensive warranty and service</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-[#00A0DC]/10 rounded-lg border border-[#00A0DC]/20">
                  <div className="text-sm mb-1">Ideal For:</div>
                  <p className="text-xs text-muted-foreground">Regional hospitals, tertiary care centers, teaching hospitals</p>
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
            <h2 className="text-2xl sm:text-3xl mb-4">WHO-Certified Cold Chain Excellence</h2>
            <p className="text-lg text-muted-foreground">
              All cold chain equipment meets international quality and performance standards for vaccine safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-2">WHO PQS Certified</h3>
                <p className="text-sm text-muted-foreground">
                  All vaccine storage equipment meets WHO Performance, Quality, and Safety standards
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-2">Temperature Validated</h3>
                <p className="text-sm text-muted-foreground">
                  Equipment tested and certified to maintain +2°C to +8°C temperature range
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-2">Solar-Ready Options</h3>
                <p className="text-sm text-muted-foreground">
                  Solar-powered solutions for reliable cold chain in off-grid and power-unstable areas
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg mb-2">GPS & IoT Enabled</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced tracking and monitoring for complete cold chain visibility and compliance
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Extended Warranty</h3>
                <p className="text-sm text-muted-foreground">
                  3-5 year warranty on solar refrigerators and cold rooms. Comprehensive coverage for all components and refrigeration systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Preventive Maintenance</h3>
                <p className="text-sm text-muted-foreground">
                  Scheduled maintenance programs, calibration services, and performance verification to ensure optimal cold chain operation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Emergency Support</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 emergency hotline for cold chain equipment failures. Rapid response service to protect vaccine integrity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Cold Chain */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Why Choose Pacem Health Cold Chain Solutions?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Africa-Optimized Equipment</h3>
                <p className="text-sm text-muted-foreground">
                  Cold chain solutions designed for African climate, power infrastructure, and operational conditions. Solar-powered options for off-grid reliability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Real-Time Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  GPS tracking and cloud-based temperature monitoring systems. SMS/email alerts and automated compliance reporting for complete visibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Complete Installation</h3>
                <p className="text-sm text-muted-foreground">
                  Professional installation by certified technicians. Site assessment, equipment setup, solar panel installation, and system commissioning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Cold Chain Training</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive training for health workers on cold chain management, temperature monitoring, and emergency procedures. Certification programs available.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Maintenance & Spare Parts</h3>
                <p className="text-sm text-muted-foreground">
                  Local inventory of critical spare parts. Preventive maintenance programs and rapid repair service to minimize vaccine loss.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Compliance Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  WHO PQS certificates, temperature validation reports, and compliance documentation. Support for regulatory inspections and audits.
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
                  <h2 className="text-2xl sm:text-3xl mb-4">Need Custom Cold Chain Planning?</h2>
                  <p className="text-muted-foreground mb-6">
                    We design complete cold chain systems for national immunization programs, regional vaccine distribution networks, and emergency response initiatives.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Cold chain assessment and gap analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Network design for national/regional distribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Solar power integration and renewable energy solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">IoT monitoring and cold chain management platforms</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <Card className="bg-white border-[#0033A0]/20">
                    <CardContent className="p-6">
                      <h3 className="text-lg mb-4">Get Started</h3>
                      <div className="space-y-3">
                        <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                          Request Cold Chain Assessment
                        </Button>
                        <Button variant="outline" className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10">
                          Schedule Site Visit
                        </Button>
                        <Button variant="outline" className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0]/10">
                          Download Cold Chain Guide (PDF)
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#00A0DC] text-white border-[#00A0DC]">
                    <CardContent className="p-6">
                      <div className="text-sm text-white/90 mb-1">Cold Chain Specialists</div>
                      <p className="text-sm mb-3">
                        Our cold chain engineers and immunization program specialists are ready to help design your solution.
                      </p>
                      <div className="text-sm">
                        📧 coldchain@pacemhealth.com<br />
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
          <h2 className="text-2xl sm:text-3xl mb-4">Strengthen Your Cold Chain Infrastructure</h2>
          <p className="text-lg text-white/90 mb-8">
            From solar-powered vaccine refrigerators to GPS-tracked carriers, we provide WHO-certified cold chain solutions for reliable immunization programs across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support/request-equipment-quote">
              <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
                Request Cold Chain Quote
              </Button>
            </Link>
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
        product={selectedProduct || featuredProducts[0]}
        fullDetailsLink={
          selectedProduct?.name === 'Solar Direct Drive Vaccine Refrigerator (SDD)'
            ? '/shop/cold-chain-transport/solar-vaccine-refrigerator'
            : undefined
        }
      />
    </div>
  );
}