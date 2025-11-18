import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Mail, Phone, MessageSquare, FileText, Wrench, GraduationCap, Database, HelpCircle, Users, Building2, CreditCard, Smartphone, MapPin, Share2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Support() {
  const supportCategories = [
    { name: "Request Equipment Quote", link: "/support/request-equipment-quote", icon: FileText },
    { name: "Request Equipment Demo", link: "/support/request-equipment-demo", icon: FileText },
    { name: "Training & Education Support", link: "/support/training-education", icon: GraduationCap },
    { name: "Platform & Systems Support", link: "/support/platform-systems-support", icon: Database },
    { name: "Equipment Services & Maintenance", link: "/support/technical-support", icon: Wrench },
    { name: "Manuals & Documentation Request", link: "/support/product-equipment-documentation", icon: FileText },
    { name: "Spare Parts or Repair Request", link: "/support/spare-parts-repair", icon: Wrench },
    { name: "Career or Staffing Inquiry", link: "/support/career-staffing", icon: Users },
    { name: "Procurement or Supply Chain Inquiry", link: "/support/procurement-supply-chain", icon: Building2 },
    { name: "Donor, NGO, or Government Partnership", link: "/support/donor-ngo-government", icon: Building2 },
    { name: "Billing & Finance Assistance", link: "/support/billing-finance", icon: CreditCard },
    { name: "Digital Health Integration Request", link: "/support/digital-health-integration", icon: Smartphone },
    { name: "Site Planning or Readiness Assessment", link: "/support/site-planning-readiness", icon: MapPin },
    { name: "Distributors, Agents, or Resellers", link: "/support/distributors-agents-resellers", icon: Share2 },
    { name: "Product Safety or Compliance Help", link: "/support/product-safety-compliance", icon: ShieldCheck },
    { name: "General Inquiry", link: "/support/general-inquiry", icon: HelpCircle }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] to-[#002875] text-white overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,160,220,0.1),transparent)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-4">
              We're Here to Help
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">How Can We Help?</h1>
            <p className="text-xl md:text-2xl text-white/90">
              Our team is ready to support you with equipment, training, technical assistance, and strategic partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose your preferred method of contact—our team is available 24/7 to assist you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-[#0033A0]">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-[#0033A0] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">24/7 Support Line</p>
                <Button variant="outline" className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0] hover:text-white transition-colors">
                  +1 (XXX) XXX-XXXX
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-[#00A0DC]">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-[#00A0DC] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Get a response within 24 hours</p>
                <Button variant="outline" className="w-full border-[#00A0DC] text-[#00A0DC] hover:bg-[#00A0DC] hover:text-white transition-colors">
                  support@pacemhealth.com
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-[#0033A0]">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-[#0033A0] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-4">Chat via web or WhatsApp</p>
                <Button variant="outline" className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0] hover:text-white transition-colors">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Featured Support Services */}
          <div className="mb-20">
            <h2 className="text-3xl mb-8 text-center">Featured Support Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/support/training-education" className="group">
                <Card className="hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#0033A0]">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-[#0033A0]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0033A0] transition-colors">
                      <GraduationCap className="h-5 w-5 text-[#0033A0] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl mb-2">Training & Education</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Comprehensive training programs for healthcare professionals and technical staff
                    </p>
                    <div className="flex items-center text-[#0033A0] group-hover:translate-x-2 transition-transform">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/support/technical-support" className="group">
                <Card className="hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#00A0DC]">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-[#00A0DC]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00A0DC] transition-colors">
                      <Wrench className="h-5 w-5 text-[#00A0DC] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl mb-2">Technical Support</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      24/7 equipment repair, maintenance, and field technician dispatch services
                    </p>
                    <div className="flex items-center text-[#00A0DC] group-hover:translate-x-2 transition-transform">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/support/platform-systems-support" className="group">
                <Card className="hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#0033A0]">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-[#0033A0]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0033A0] transition-colors">
                      <Database className="h-5 w-5 text-[#0033A0] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl mb-2">Platform & Systems</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Digital health platforms, cybersecurity, and cloud infrastructure support
                    </p>
                    <div className="flex items-center text-[#0033A0] group-hover:translate-x-2 transition-transform">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/support/product-equipment-documentation" className="group">
                <Card className="hover:shadow-xl transition-all duration-300 h-full border-2 border-transparent hover:border-[#00A0DC]">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 bg-[#00A0DC]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#00A0DC] transition-colors">
                      <FileText className="h-5 w-5 text-[#00A0DC] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl mb-2">Documentation</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Product manuals, safety protocols, and comprehensive equipment guides
                    </p>
                    <div className="flex items-center text-[#00A0DC] group-hover:translate-x-2 transition-transform">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* Support Categories */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">What do you need help with?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {supportCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Link key={index} to={category.link} className="group">
                    <Card className="hover:shadow-lg hover:border-[#0033A0] transition-all duration-300 cursor-pointer h-full">
                      <CardContent className="p-5 flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#0033A0]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0033A0] transition-colors">
                          <Icon className="h-5 w-5 text-[#0033A0] group-hover:text-white transition-colors" />
                        </div>
                        <p className="font-medium group-hover:text-[#0033A0] transition-colors">{category.name}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our support team is available 24/7 for urgent equipment or technical issues.
          </p>
          <Button size="lg" className="bg-[#0033A0] hover:bg-[#002875] text-white">
            Submit a Support Ticket
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}