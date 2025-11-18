import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { useState } from 'react';

export default function TechnicalSupportPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] to-[#002875] text-white overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,160,220,0.1),transparent)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <div className="flex items-center gap-2 mb-4 text-sm">
              <Link to="/support" className="text-white/80 hover:text-white transition-colors">
                Support
              </Link>
              <span className="text-white/60">/</span>
              <span>Technical Support</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Technical Support</h1>
            <p className="text-lg sm:text-xl text-white/90">
              24/7 technical assistance for all Pacem Health equipment and systems. From basic troubleshooting to complex repairs, our expert team is here to keep your healthcare systems running smoothly.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">24/7</div>
              <div className="text-sm sm:text-base text-white/80">Support Hotline</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">{'<'}2hrs</div>
              <div className="text-sm sm:text-base text-white/80">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">200+</div>
              <div className="text-sm sm:text-base text-white/80">Field Technicians</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">98%</div>
              <div className="text-sm sm:text-base text-white/80">First-Call Resolution</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-4 sm:gap-8 py-4 no-scrollbar">
            <button 
              onClick={() => scrollToSection('overview')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'overview' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('support-services')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'support-services' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Support Services
            </button>
            <button 
              onClick={() => scrollToSection('maintenance')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'maintenance' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Maintenance
            </button>
            <button 
              onClick={() => scrollToSection('spare-parts')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'spare-parts' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Spare Parts
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'how-it-works' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'contact' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section id="overview" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6">
              What Is Technical Support?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Our Technical Support services provide comprehensive assistance for all Pacem Health equipment and systems. From troubleshooting and repairs to preventive maintenance and spare parts management, we ensure your healthcare equipment operates reliably and efficiently.
            </p>
            
            <h3 className="text-xl sm:text-2xl mb-4">Why Technical Support Matters</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Healthcare equipment downtime directly impacts patient care. Our expert technical team provides rapid response and resolution to minimize disruptions, ensuring your medical equipment is always ready when you need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Technical Support Services */}
      <section id="support-services" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Comprehensive Technical Support Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We provide end-to-end technical support to ensure your healthcare equipment and systems operate at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">24/7 Support Line</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  Round-the-clock technical support hotline for urgent equipment issues and emergency situations.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="mb-1">Emergency Response Team</div>
                      <div className="text-sm text-muted-foreground">Dedicated emergency support for critical equipment failures</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="mb-1">Priority Issue Escalation</div>
                      <div className="text-sm text-muted-foreground">Fast-track critical issues to senior technical experts</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="mb-1">Multi-language Support</div>
                      <div className="text-sm text-muted-foreground">Technical assistance in English, French, Portuguese, and local languages</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="mb-1">Immediate Troubleshooting</div>
                      <div className="text-sm text-muted-foreground">Real-time guidance for equipment issues and error resolution</div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Field Technician Dispatch</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  On-site technical support with qualified engineers and technicians for complex equipment issues.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="mb-1">Local Technician Network</div>
                      <div className="text-sm text-muted-foreground">Regional technicians across Africa for rapid on-site response</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="mb-1">Same-day Response (Urgent)</div>
                      <div className="text-sm text-muted-foreground">Emergency dispatch for critical equipment failures</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="mb-1">Equipment Repair & Maintenance</div>
                      <div className="text-sm text-muted-foreground">Expert repair services and preventive maintenance by certified technicians</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="mb-1">Preventive Maintenance Visits</div>
                      <div className="text-sm text-muted-foreground">Scheduled maintenance to prevent equipment failures</div>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maintenance Scheduling */}
      <section id="maintenance" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Maintenance Scheduling
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Proactive maintenance planning and scheduling to prevent equipment failures and optimize performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-[#4B2991]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Preventive Maintenance Plans</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Customized maintenance schedules based on equipment type, usage patterns, and manufacturer recommendations.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#4B2991]">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#7C944B]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Equipment Health Monitoring</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Continuous monitoring of equipment performance to identify potential issues before they cause failures.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#7C944B]">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#4B2991]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Performance Optimization</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Regular tuning and adjustments to ensure equipment operates at peak efficiency and accuracy.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#4B2991]">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#7C944B]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Calibration Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional calibration services to maintain equipment accuracy and compliance with standards.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#7C944B]">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Spare Parts & Repairs */}
      <section id="spare-parts" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Spare Parts & Repairs
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprehensive spare parts management and repair services to minimize equipment downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Genuine OEM Parts</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Access to authentic manufacturer parts ensuring compatibility, reliability, and warranty protection.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Certified original equipment manufacturer parts
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Quality assurance and warranty coverage
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Guaranteed compatibility with your equipment
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Direct sourcing from authorized distributors
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Local Parts Inventory</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Strategic inventory of common spare parts across Africa for rapid replacement and minimal downtime.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Regional warehouses for fast parts delivery
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Same-day parts availability for common components
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Emergency parts procurement services
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Parts tracking and inventory management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Equipment Refurbishment</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Professional refurbishment services to extend equipment lifespan and restore optimal performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Complete equipment overhaul and restoration
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Component replacement and upgrades
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Post-refurbishment testing and certification
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Extended warranty on refurbished equipment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Warranty Support</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Comprehensive warranty management and claims processing for all covered equipment and repairs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Warranty claim processing and coordination
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Extended warranty options available
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Manufacturer warranty administration
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    No-cost repairs for warranty-covered issues
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Our Technical Support Works */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              How Our Technical Support Works
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              Our streamlined support process ensures quick resolution of your technical issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-full flex items-center justify-center mb-4 text-xl">
                  1
                </div>
                <h3 className="text-lg sm:text-xl mb-3">Contact Support</h3>
                <p className="text-sm text-muted-foreground">
                  Reach out through phone, email, or our support portal with your technical issue description.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-full flex items-center justify-center mb-4 text-xl">
                  2
                </div>
                <h3 className="text-lg sm:text-xl mb-3">Issue Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Our technical team evaluates the issue and determines the best resolution approach.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-full flex items-center justify-center mb-4 text-xl">
                  3
                </div>
                <h3 className="text-lg sm:text-xl mb-3">Resolution Plan</h3>
                <p className="text-sm text-muted-foreground">
                  We develop a comprehensive plan including remote support, parts needed, or technician dispatch.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-full flex items-center justify-center mb-4 text-xl">
                  4
                </div>
                <h3 className="text-lg sm:text-xl mb-3">Implementation</h3>
                <p className="text-sm text-muted-foreground">
                  Our team implements the solution, whether remote troubleshooting or on-site repair.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-full flex items-center justify-center mb-4 text-xl">
                  5
                </div>
                <h3 className="text-lg sm:text-xl mb-3">Verification</h3>
                <p className="text-sm text-muted-foreground">
                  We verify that the issue is resolved and your equipment is operating correctly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-full flex items-center justify-center mb-4 text-xl">
                  6
                </div>
                <h3 className="text-lg sm:text-xl mb-3">Follow-up</h3>
                <p className="text-sm text-muted-foreground">
                  Follow-up support to ensure long-term resolution and prevent future issues.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Multiple Support Channels */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl mb-4">Multiple Support Channels</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Choose the support channel that works best for your technical needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-lg mb-3">24/7 Hotline</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Emergency technical support available around the clock for critical equipment issues.
                </p>
                <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d]">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-lg mb-3">Live Chat</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Instant technical support through our live chat system for quick questions and guidance.
                </p>
                <Button className="w-full bg-[#7C944B] hover:bg-[#6a7f41]">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-lg mb-3">Support Tickets</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Submit detailed technical support requests for complex issues requiring investigation.
                </p>
                <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d]">
                  Create Ticket
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="text-lg mb-3">Email Support</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Send detailed technical descriptions for non-urgent issues and documentation requests.
                </p>
                <Button className="w-full bg-[#7C944B] hover:bg-[#6a7f41]">
                  Send Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
            Need Technical Support?
          </h2>
          <p className="text-base sm:text-lg mb-8 text-white/90">
            Our technical experts are ready to help you resolve any equipment or system issues quickly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-gray-100 w-full sm:w-auto">
              Call Support Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Schedule Maintenance
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}