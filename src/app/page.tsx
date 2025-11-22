import heroImage1 from '../assets/267a02224599cd47b90c1c1bdbd0f12ec3638aab.png';
import heroImage2 from '../assets/6a6660ee2778ac7453e6b0a1201be2af825fc1e7.png';
import heroImage3 from '../assets/267a02224599cd47b90c1c1bdbd0f12ec3638aab.png';
import coreHealthImage from '../assets/a77735f938e7d6755679ad9a1b143656509f5ea2.png';
import strategicProgramsImage from '../assets/6a6660ee2778ac7453e6b0a1201be2af825fc1e7.png';
import advancedSolutionsImage from '../assets/a77735f938e7d6755679ad9a1b143656509f5ea2.png';
import productCatalogImage from '../assets/f5f1527c8d7a7533925db4ff3c4973683d27b60d.png';
import healthcareFacilitiesImage from '../assets/a77735f938e7d6755679ad9a1b143656509f5ea2.png';
import division1ProductsImage from '../assets/f5f1527c8d7a7533925db4ff3c4973683d27b60d.png';
import pharmacyOperationsImage from '../assets/b3658ce50b228612a8fe93e50837c9d8d5eb4ba9.png';
import communityHealthImage from '../assets/fc47d00f18f0389f658e410cf21e0f63c497563c.png';
import wholesaleDistributionImage from '../assets/d4667a8dae869db713eb296a7e79ef6833197ef8.png';
import procurementSourcingImage from '../assets/d4667a8dae869db713eb296a7e79ef6833197ef8.png';
import regulatoryServicesImage from '../assets/9f8a40e3794253060e96b47f25f38d34d9ca1f44.png';
import medicalServicesImage from '../assets/ae0257c72e103e8c29a86c657c5cf4abd915f321.png';
import complianceTrainingImage from '../assets/9f8a40e3794253060e96b47f25f38d34d9ca1f44.png';
import africaMapImage from '../assets/0a373e2b222cb18aa8ef1f502b1c25341acdd119.png';
import pacemLaunchImage from '../assets/a115cdc7fc71958b04d13019d8be001e5c6246c0.png';
import protechCatalogImage from '../assets/ab8fa8acb8e939ad1109a052acad1bb0a0877ff4.png';
import careersImage from '../assets/c24fe30e20a51339ae9713c48c600c15c0ed36dd.png';
import investorsImage from '../assets/6f9170714850232b00aa56f66ee630eceaea7f7e.png';
import customerStatementImage from '../assets/ab8fa8acb8e939ad1109a052acad1bb0a0877ff4.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '../components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { 
  ArrowRight, 
  Building2, 
  Users, 
  Globe, 
  TrendingUp, 
  CheckCircle2, 
  Heart, 
  Shield, 
  Award,
  ChevronRight,
  ChevronLeft,
  BarChart3,
  Pause,
  Play
} from 'lucide-react';

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const toggleAutoplay = () => {
    if (isPlaying) {
      autoplayPlugin.current.stop();
      setIsPlaying(false);
    } else {
      autoplayPlugin.current.play();
      setIsPlaying(true);
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pacem Health Inc.",
    "url": "https://www.pacemhealth.com",
    "logo": "https://www.pacemhealth.com/logo.png",
    "description": "U.S.-based global health innovation and systems delivery company strengthening healthcare across Africa through pharmaceutical supply chains, medical equipment management, and biomedical engineering networks.",
    "areaServed": [
      {"@type": "Place", "name": "Africa"},
      {"@type": "Place", "name": "Sub-Saharan Africa"},
      {"@type": "Place", "name": "East Africa"},
      {"@type": "Place", "name": "West Africa"}
    ],
    "knowsAbout": [
      "Healthcare Systems Strengthening",
      "Pharmaceutical Supply Chain",
      "Medical Equipment Lifecycle Management",
      "Biomedical Engineering",
      "Health Technology Innovation"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/pacem-health",
      "https://twitter.com/pacemhealth"
    ]
  };
  return (
    <div className="flex flex-col">
      {/* SEO Meta Tags */}
      <SEOHead
        title="Pacem Health | Global Health Innovation & Systems Delivery for Africa"
        description="Leading U.S.-based global health company strengthening healthcare systems across Africa through pharmaceutical supply chains, medical equipment lifecycle management, and biomedical engineering networks. Partner with governments, donors, and development banks."
        keywords={[
          'healthcare systems Africa',
          'pharmaceutical supply chain',
          'medical equipment management',
          'biomedical engineering Africa',
          'health technology innovation',
          'government health partnerships',
          'donor health programs',
          'development bank health projects',
          'healthcare infrastructure Africa'
        ]}
        structuredData={organizationSchema}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] bg-white" aria-label="Hero carousel">
        <Carousel 
          opts={{ loop: true }}
          plugins={[autoplayPlugin.current]}
          className="w-full h-full"
        >
          <CarouselContent>
            {[
              {
                image: heroImage1,
                alt: "Healthcare professionals collaborating on African health systems transformation",
                bannerTitle: "Pacem Health Q4'25 Impact Report",
                bannerLink: "/insights/reports"
              },
              {
                image: heroImage2,
                alt: "African healthcare professional administering IV treatment with compassionate patient care",
                bannerTitle: "New Digital Health Platform Launch",
                bannerLink: "/advanced-solutions/digital-health-platforms"
              },
              {
                image: heroImage3,
                alt: "Diverse international healthcare team partnership in modern African hospital facility",
                bannerTitle: "Partnership with African Development Bank",
                bannerLink: "/news/afdb-partnership"
              }
            ].map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
                  {/* Background Image */}
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "low"}
                  />
                  {/* Subtle Dark Overlay - lighter for better visibility */}
                  <div className="absolute inset-0 bg-black/30 sm:bg-black/35 md:bg-black/40" aria-hidden="true"></div>
                  
                  {/* Main Content - Positioned in center/upper area */}
                  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-32 sm:pb-40 md:pb-48 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center">
                    <div className="max-w-2xl w-full text-center sm:text-left">
                      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-5 sm:mb-6 md:mb-8 leading-tight sm:leading-tight md:leading-normal font-semibold drop-shadow-lg">
                        Strengthening Healthcare Across Africa
                      </h1>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start">
                        <Link to="/about" aria-label="Learn more about Pacem Health">
                          <Button size="lg" className="bg-[#5395f0] hover:bg-[#3a7cd6] text-white w-full sm:w-auto min-h-[48px] sm:min-h-[52px] px-6 sm:px-8 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all">
                            About Us
                            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                          </Button>
                        </Link>
                        <Link to="/products" aria-label="Explore our product catalog">
                          <Button size="lg" className="bg-[#003057] hover:bg-[#002445] text-white w-full sm:w-auto min-h-[48px] sm:min-h-[52px] px-6 sm:px-8 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all">
                            Explore Our Products
                            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Banner Overlay - Similar to GE Healthcare */}
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#5395f0] to-[#3a7cd6] sm:from-[#5395f0] sm:to-[#003057] text-white z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 md:py-6">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">
                            {slide.bannerTitle}
                          </h3>
                        </div>
                        <Link to={slide.bannerLink} className="flex items-center text-white hover:text-white/90 transition-colors group">
                          <span className="text-sm sm:text-base md:text-lg font-medium mr-2">Learn more</span>
                          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Metrics Bar */}
      <section className="border-y border-gray-200 bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-[#003057]">
                Discover Pacem Health
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Transforming healthcare delivery across Africa through quality medicines, reliable equipment, and sustainable health systems. At Pacem Health, we partner with governments, healthcare providers, and communities to ensure every patient has access to the care they need. From procurement to distribution, from infrastructure to training, we strengthen healthcare at every level. <strong>Press play and see how we're building Africa's healthcare future through innovation and partnership.</strong>
              </p>
            </div>

            {/* Right - Video */}
            <div>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Discover Pacem Health"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview - Three Card Layout */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
              How We Strengthen Healthcare Systems Across Africa
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-2">
              Six core healthcare solutions across the value chain — from market access to digital health transformation.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1: Market Access Services */}
            <Link to="/services/market-access" className="group block text-inherit">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full bg-white rounded-2xl border-0">
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-[#5395f0] to-[#003057]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="h-16 w-16 text-white opacity-80" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#00A99D]"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#00A99D] flex items-center justify-between gap-2 mb-3">
                    Market Access Services
                    <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm mb-2 text-[#5395f0]">
                    Your Gateway to African Healthcare Markets
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive market access support for international manufacturers, managing sales, distribution, regulatory compliance, and market development across African healthcare markets.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Service 2: Procurement & Distribution */}
            <Link to="/services/procurement-sourcing" className="group block text-inherit">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full bg-white rounded-2xl border-0">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={procurementSourcingImage}
                    alt="Pharmaceutical procurement and inventory management"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#00A99D]"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#00A99D] flex items-center justify-between gap-2 mb-3">
                    Procurement & Distribution
                    <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm mb-2 text-[#5395f0]">
                    Strategic Sourcing & Wholesale Distribution
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Quality-assured health products from trusted global suppliers, plus GDP-compliant wholesale distribution to pharmacies, clinics, and hospitals across Africa.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Service 3: Supply Chain & Logistics */}
            <Link to="/services/supply-chain-logistics" className="group block text-inherit">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full bg-white rounded-2xl border-0">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={coreHealthImage}
                    alt="Supply chain and logistics operations"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#00A99D]"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#00A99D] flex items-center justify-between gap-2 mb-3">
                    Supply Chain & Logistics
                    <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm mb-2 text-[#5395f0]">
                    Reliable End-to-End Delivery Across Africa
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive supply chain management from forecasting to last-mile delivery, ensuring healthcare products reach even the most remote facilities reliably and on time.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Service 4: Infrastructure & Planning */}
            <Link to="/services/infrastructure-planning" className="group block text-inherit">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full bg-white rounded-2xl border-0">
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-[#5395f0] to-[#3a7cd6]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-16 w-16 text-white opacity-80" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#00A99D]"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#00A99D] flex items-center justify-between gap-2 mb-3">
                    Infrastructure & Planning
                    <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm mb-2 text-[#5395f0]">
                    Building Sustainable Health Systems
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Healthcare infrastructure design and delivery that strengthens entire health systems—from facility planning and equipment sourcing to partnership development and sustainability planning.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Service 5: Regulatory & Compliance Services */}
            <Link to="/services/regulatory" className="group block text-inherit">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full bg-white rounded-2xl border-0">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={regulatoryServicesImage}
                    alt="Regulatory services and compliance"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#00A99D]"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#00A99D] flex items-center justify-between gap-2 mb-3">
                    Regulatory & Compliance Services
                    <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm mb-2 text-[#5395f0]">
                    Navigate African Regulatory Complexity
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Product registration, compliance, pharmacovigilance, medical information, and quality management systems across 15+ African markets with comprehensive training support.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Service 6: Digital Health & Technology Solutions */}
            <Link to="/advanced-solutions" className="group block text-inherit">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full bg-white rounded-2xl border-0">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={advancedSolutionsImage}
                    alt="Advanced digital health technology solutions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#00A99D]"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#00A99D] flex items-center justify-between gap-2 mb-3">
                    Digital Health & Technology Solutions
                    <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm mb-2 text-[#5395f0]">
                    Technology-Powered Healthcare Transformation
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Integrated digital platforms, fleet management systems, mobile diagnostics, and health intelligence analytics that bring quality care to every corner of Africa.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Service 7: Quality Assurance */}
            {/* <Link to="/services/quality-assurance" className="group block">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full bg-white rounded-2xl border-0">
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={healthcareFacilitiesImage}
                    alt="Quality assurance and pharmaceutical testing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#00A99D]"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-[#00A99D] flex items-center justify-between gap-2 mb-3">
                    Quality Assurance
                    <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Triple-Verified Quality. Every Product. Every Time.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our comprehensive quality framework ensures every pharmaceutical product meets international standards through WHO-prequalified suppliers, ISO-accredited testing, and rigorous documentation.
                  </p>
                </CardContent>
              </Card>
            </Link> */}
          </div>
        </div>
      </section>

      {/* Business Divisions - Three Card Layout */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
              Our Product Divisions
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto px-2">
              Comprehensive healthcare products and services designed to support the entire African healthcare ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Pharmaceutical, Medical Supplies & Products Distribution */}
            <Link to="/products/division1" className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={division1ProductsImage}
                    alt="Comprehensive medical products including pharmaceuticals, devices, and laboratory equipment"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl mb-3">Healthcare & Laboratory Products</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pharmaceuticals, medical supplies, laboratory equipment, and durable medical devices for healthcare facilities, universities, and research institutions across Africa.
                  </p>
                  <div className="flex items-center text-[#5395f0] group-hover:translate-x-2 transition-transform">
                    <span className="text-sm mr-2">Explore Healthcare Solutions</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Pharmacy Services */}
            <Link to="/products/division2" className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={pharmacyOperationsImage}
                    alt="Pharmacist providing patient-centered pharmacy services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl mb-3">Pharmacy Operations & Management</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pharmacy management solutions including inventory systems, clinical services, technology platforms, compliance support, and pharmacist training across Africa.
                  </p>
                  <div className="flex items-center text-[#5395f0] group-hover:translate-x-2 transition-transform">
                    <span className="text-sm mr-2">Discover Pharmacy Solutions</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Community Health & Wellness Distribution */}
            <Link to="/products/division3" className="group">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={communityHealthImage}
                    alt="Maternal-child health supplies and preventive care products"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg sm:text-xl mb-3">Community Health Products</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Preventive care, maternal-child health, nutrition, health education, emergency response, and WASH products for NGOs and public health programs.
                  </p>
                  <div className="flex items-center text-[#5395f0] group-hover:translate-x-2 transition-transform">
                    <span className="text-sm mr-2">Explore Community Solutions</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* What's New */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">What's New at Pacem Health</h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Latest innovations, partnerships, and impact stories from across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Link to="/news/pacem-health-launches">
              <Card className="overflow-hidden hover:shadow-lg transition h-full">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={pacemLaunchImage}
                    alt="Pacem Health Officially Launches"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-xs text-[#5395f0] mb-2 uppercase tracking-wide">Company Announcement</p>
                  <h3 className="text-xl mb-3">
                    Pacem Health Officially Launches
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    U.S.-based global health innovation company announces official launch with comprehensive platform for strengthening African healthcare systems.
                  </p>
                  <span className="text-[#5395f0] hover:underline text-sm inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link to="/news/product-catalog-launch">
              <Card className="overflow-hidden hover:shadow-lg transition h-full">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={protechCatalogImage}
                    alt="Comprehensive Medical Product Catalog Unveiled"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-xs text-[#003057] mb-2 uppercase tracking-wide">Product Launch</p>
                  <h3 className="text-xl mb-3">
                    Comprehensive Medical Product Catalog Unveiled
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    First comprehensive catalog features 3,500+ medical products across 22 categories with transparent pricing and regulatory compliance information.
                  </p>
                  <span className="text-[#5395f0] hover:underline text-sm inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link to="/news/africa-market-entry">
              <Card className="overflow-hidden hover:shadow-lg transition h-full">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={africaMapImage}
                    alt="Pacem Health Announces Africa Market Entry Strategy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-xs text-[#5395f0] mb-2 uppercase tracking-wide">Strategic Announcement</p>
                  <h3 className="text-xl mb-3">
                    Pacem Health Announces Africa Market Entry Strategy
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Strategic roadmap outlines phased approach to entering priority African markets with comprehensive healthcare solutions and partnerships.
                  </p>
                  <span className="text-[#5395f0] hover:underline text-sm inline-flex items-center">
                    Read Strategy
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* View All News Link */}
          <div className="mt-8 sm:mt-10 text-center">
            <Link to="/news">
              <Button className="bg-[#5395f0] hover:bg-[#3a7cd6] text-white">
                <span className="mr-2">View All News</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Snapshot */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#2c2c3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2">Pacem Health: Company at a Glance</h2>
            <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto mt-3">
              Built to scale. Ready to deliver. Positioned for impact across Africa.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl text-[#5395f0] mb-2 sm:mb-3">WHO-approved</div>
              <p className="text-sm sm:text-base text-white/80 px-2">
                supplier networks across 22 therapeutic categories ready to activate
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl text-[#5395f0] mb-2 sm:mb-3">15+</div>
              <p className="text-sm sm:text-base text-white/80 px-2">
                African regulatory frameworks mapped for accelerated market entry
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl text-[#5395f0] mb-2 sm:mb-3">3</div>
              <p className="text-sm sm:text-base text-white/80 px-2">
                integrated divisions covering pharmaceutical, facility, and community health needs
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl text-[#5395f0] mb-2 sm:mb-3">50+</div>
              <p className="text-sm sm:text-base text-white/80 px-2">
                years of combined global health expertise across three continents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[#5395f0] mb-2 sm:mb-3 uppercase text-xs sm:text-sm tracking-wide">For Careers</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
                Join the Mission. Build Systems That Save Lives.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                Whether you're a supply chain expert, health tech innovator, or field operations leader — there's a place for you at Pacem Health.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                Help us scale access, drive innovation, and strengthen care delivery where it's needed most.
              </p>
              <Link to="/careers">
                <Button className="bg-[#5395f0] hover:bg-[#3a7cd6] w-full sm:w-auto">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={careersImage}
                  alt="Join the Pacem Health team - Shared purpose, Global impact, Defining moment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={investorsImage}
                  alt="Pacem Health investor opportunities - Fourth Quarter Fiscal 2025 Earnings Call"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-[#5395f0] mb-2 sm:mb-3 uppercase text-xs sm:text-sm tracking-wide">Investors</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
                Partner with Us to Build Africa's Health Future.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                Pacem Health is unlocking high-growth opportunities at the intersection of healthcare, infrastructure, and technology.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                Our expanding export partnerships, facility projects, and digital care initiatives are built for long-term impact and measurable returns.
              </p>
              <Link to="/investors">
                <Button className="bg-[#5395f0] hover:bg-[#3a7cd6] w-full sm:w-auto">
                  Explore Investment Opportunities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Statement / Positioning */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[#003057] mb-2 sm:mb-3 uppercase text-xs sm:text-sm tracking-wide">Our Approach to Healthcare Innovation</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
                We Build with Precision. We Scale with Purpose.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                As a global health partner, Pacem Health delivers innovation with intent — blending medical expertise, logistics expertise, and people-first design to strengthen healthcare systems.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                From cross-border supply chain to community-centered clinics, we make it clear where it's needed most, and build what lasts.
              </p>
              <Link to="/our-approach">
                <Button variant="outline" className="border-[#5395f0] text-[#5395f0] hover:bg-[#5395f0] hover:text-white w-full sm:w-auto">
                  Discover Our Approach
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={customerStatementImage}
                  alt="Pacem Health Canvas Business Model - What Is the Competitive Landscape of Cencora Company"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#5395f0] to-[#003057] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
            Stay Connected With Pacem Health
          </h2>
          <p className="text-sm sm:text-lg mb-6 sm:mb-8 text-white/90 px-2">
            Be the first to hear about new initiatives, country launches, innovations, and partnership opportunities across Africa and beyond.
          </p>
          <Button size="lg" className="bg-white hover:bg-gray-100 text-[#5395f0] w-full sm:w-auto">
            Sign up for updates
          </Button>
        </div>
      </section>
    </div>
  );
}