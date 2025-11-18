import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { ArrowRight, Package, Wrench, Cpu, Snowflake, Award, RefreshCw, GraduationCap, ShoppingCart, Truck, CheckCircle, HeadphonesIcon } from 'lucide-react';

export default function Shop() {
  const shopCategories = [
    {
      title: "Shop All",
      description: "Explore our full inventory of export-ready medical, digital, and mobile health solutions.",
      icon: Package,
      link: null
    },
    {
      title: "Education & Training",
      description: "Comprehensive training programs, certification courses, and skill-building solutions for healthcare professionals.",
      icon: GraduationCap,
      link: "/shop/education-training"
    },
    {
      title: "Training & Simulation Kits",
      description: "Hands-on skill-building tools including manikins, simulation kits, and clinical instructor packs.",
      icon: Award,
      link: "/shop/training-simulation-kits"
    },
    {
      title: "Medical Equipment",
      description: "Essential hospital-grade equipment including diagnostic, surgical, maternal, and mobile systems.",
      icon: Package,
      link: "/shop/medical-equipment"
    },
    {
      title: "Parts & Accessories",
      description: "OEM-quality parts, probes, tubing, replacement modules, and consumables.",
      icon: Wrench,
      link: "/shop/parts-accessories"
    },
    {
      title: "Cold Chain & Transport Supplies",
      description: "Temperature-controlled vaccine carriers, solar-powered fridges, and GPS-monitored transport gear.",
      icon: Snowflake,
      link: "/shop/cold-chain-transport"
    },
    {
      title: "Digital Health & Data Tools",
      description: "Software licenses, portable diagnostics, mobile apps, and analytics dashboards.",
      icon: Cpu,
      link: "/shop/digital-health-data"
    },
    {
      title: "Refurbished Equipment",
      description: "Pacem Renew™ certified and warrantied refurbished equipment tested for clinical performance.",
      icon: RefreshCw,
      link: "/shop/refurbished-equipment"
    }
  ];

  const metrics = [
    { value: "1,500+", label: "WHO-PQ & FDA-Approved Products in Catalog", icon: ShoppingCart },
    { value: "3", label: "Priority African Markets", icon: Truck },
    { value: "100%", label: "Quality Certified Products", icon: CheckCircle },
    { value: "24/7", label: "Technical Support Available", icon: HeadphonesIcon }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] to-[#002875] text-white overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,160,220,0.1),transparent)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Pacem Health Shop</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Quality medical equipment, training solutions, and digital health tools for healthcare systems across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-12 bg-muted/50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0033A0] rounded-lg mb-3">
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Shop by Category</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our comprehensive selection of healthcare products and services designed for African health systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shopCategories.map((category, index) => {
              const CardWrapper = category.link ? Link : 'div';
              const wrapperProps = category.link ? { to: category.link } : {};
              
              return (
                <CardWrapper key={index} {...wrapperProps}>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group h-full hover:border-[#0033A0]/20">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 bg-[#0033A0] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00A0DC] transition-colors">
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl mb-3">{category.title}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      {category.link && (
                        <Button variant="ghost" className="p-0 h-auto text-[#0033A0] hover:text-[#00A0DC] transition-colors">
                          Browse Category
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Why Choose Pacem Health?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-[#0033A0]">
              <CardContent className="p-8">
                <h3 className="text-xl mb-3">Certified Quality</h3>
                <p className="text-muted-foreground">
                  All equipment sourced from trusted, certified global suppliers meeting international standards.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-[#00A0DC]">
              <CardContent className="p-8">
                <h3 className="text-xl mb-3">Export-Ready</h3>
                <p className="text-muted-foreground">
                  Complete documentation, compliance support, and cold chain coordination for seamless delivery.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-[#0033A0]">
              <CardContent className="p-8">
                <h3 className="text-xl mb-3">Full Support</h3>
                <p className="text-muted-foreground">
                  Installation, training, maintenance, and 24/7 technical support for every product we deliver.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">Need Custom Solutions?</h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            Our team can create tailored equipment packages and training programs for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/support/request-equipment-quote">
              <Button size="lg" className="bg-[#0033A0] hover:bg-[#002875] text-white transition-colors w-full sm:w-auto">
                Request a Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0] hover:text-white transition-colors">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}