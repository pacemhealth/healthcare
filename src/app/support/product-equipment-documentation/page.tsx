import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { useState } from 'react';
import { FileText, Download, Book, Video, Search } from 'lucide-react';

export default function ProductEquipmentDocumentationPage() {
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
              <span>Manuals & Documentation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Product & Equipment Documentation</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Access comprehensive manuals, technical specifications, safety protocols, and instructional materials for all Pacem Health equipment and systems.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">2,500+</div>
              <div className="text-sm sm:text-base text-white/80">Documents</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">45+</div>
              <div className="text-sm sm:text-base text-white/80">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">500+</div>
              <div className="text-sm sm:text-base text-white/80">Video Guides</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">24/7</div>
              <div className="text-sm sm:text-base text-white/80">Access</div>
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
              onClick={() => scrollToSection('all-documentation')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'all-documentation' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              All Documentation
            </button>
            <button 
              onClick={() => scrollToSection('manuals-guides')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'manuals-guides' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Manuals & Guides
            </button>
            <button 
              onClick={() => scrollToSection('cleaning-compatibility')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'cleaning-compatibility' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Cleaning & Compatibility
            </button>
            <button 
              onClick={() => scrollToSection('safety-protocols')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'safety-protocols' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Safety Protocols
            </button>
            <button 
              onClick={() => scrollToSection('interoperability')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'interoperability' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Interoperability
            </button>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section id="overview" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6">
              What Is Product & Equipment Documentation?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Our comprehensive documentation library provides healthcare professionals with instant access to detailed product information, operational guidelines, safety protocols, and compatibility specifications for all Pacem Health equipment and systems.
            </p>
            
            <h3 className="text-xl sm:text-2xl mb-4">Why Product Documentation Matters</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Proper documentation is critical for safe equipment operation, regulatory compliance, and optimal patient outcomes. Our documentation ensures healthcare providers have the information they need to operate equipment safely, maintain compliance with international standards, and troubleshoot issues effectively.
            </p>
          </div>
        </div>
      </section>

      {/* All Documentation Library */}
      <section id="all-documentation" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              All Documentation Library
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Access our complete documentation library organized by product category, document type, and language for easy navigation and quick reference.
            </p>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input 
                  type="search" 
                  placeholder="Search documentation..." 
                  className="w-full"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="diagnostic">Diagnostic Equipment</SelectItem>
                  <SelectItem value="surgical">Surgical Equipment</SelectItem>
                  <SelectItem value="patient">Patient Monitoring</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="All Languages" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Languages</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="sw">Swahili</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Documentation Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">User Manuals</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive user manuals for all equipment with step-by-step instructions and troubleshooting guides.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#4B2991]">
                  Browse User Manuals →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Technical Specifications</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed technical specifications, performance parameters, and compatibility requirements.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#4B2991]">
                  View Specifications →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Safety Documentation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Safety protocols, risk assessments, and compliance documentation for regulatory requirements.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#4B2991]">
                  Access Safety Docs →
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Training Materials</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Training documentation, certification requirements, and educational resources.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#4B2991]">
                  Download Training Materials →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manuals & Quick Start Guides */}
      <section id="manuals-guides" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Manuals & Quick Start Guides
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprehensive manuals and quick start guides designed to get your team operational quickly while ensuring proper equipment usage and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-2 border-[#4B2991]/20">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Quick Start Guides</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  Essential setup and operation instructions for immediate deployment.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    15-minute setup procedures
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Essential safety checks
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Basic operation instructions
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Emergency shutdown procedures
                  </li>
                </ul>
                <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d]">
                  Download Quick Start Guides
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#7C944B]/20">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Complete User Manuals</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  Detailed operational manuals covering all features and advanced functionality.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Complete feature documentation
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Advanced configuration options
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Troubleshooting procedures
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Maintenance schedules
                  </li>
                </ul>
                <Button className="w-full bg-[#7C944B] hover:bg-[#6a7f41]">
                  Access Complete Manuals
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#4B2991]/20">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Installation Guides</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  Step-by-step installation procedures for proper equipment deployment.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Site preparation requirements
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Installation procedures
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Commissioning checklists
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Performance verification
                  </li>
                </ul>
                <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d]">
                  View Installation Guides
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cleaning & Disinfection Compatibility */}
      <section id="cleaning-compatibility" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Cleaning & Disinfection Compatibility
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Critical information about approved cleaning agents, disinfection procedures, and material compatibility to ensure equipment longevity and patient safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Approved Cleaning Agents</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive list of approved cleaning and disinfection agents for each equipment type.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Material Compatibility Charts</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed compatibility charts showing which cleaning agents are safe for specific materials.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Cleaning Procedures</h3>
                <p className="text-sm text-muted-foreground">
                  Step-by-step cleaning and disinfection procedures with recommended frequencies.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Safety Precautions</h3>
                <p className="text-sm text-muted-foreground">
                  Important safety precautions and personal protective equipment requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Use & Safety Protocols */}
      <section id="safety-protocols" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Equipment Use & Safety Protocols
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprehensive safety protocols and operational procedures designed to ensure safe equipment operation and optimal patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Pre-Operation Safety Checks</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <span>Visual inspection procedures</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <span>Electrical safety verification</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <span>Calibration status confirmation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <span>Environmental condition checks</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <span>Personal protective equipment requirements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Operational Safety Guidelines</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Safe operating procedures</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Patient positioning and safety</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Emergency stop procedures</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Alarm response protocols</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Incident reporting procedures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Post-Operation Procedures</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <span>Equipment shutdown procedures</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <span>Cleaning and disinfection protocols</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <span>Data backup and storage</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <span>Maintenance log updates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                    <span>Quality assurance checks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interoperability & Systems Compatibility */}
      <section id="interoperability" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Interoperability & Systems Compatibility
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Technical documentation covering system integration, data exchange protocols, and compatibility requirements for seamless healthcare system interoperability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">System Integration Guides</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Comprehensive guides for integrating Pacem Health equipment with existing healthcare systems and third-party platforms.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    API documentation and endpoints
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Data format specifications
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Authentication and security protocols
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Integration testing procedures
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Data Exchange Standards</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Documentation on supported data exchange standards including HL7, FHIR, and DICOM for seamless data interoperability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    HL7 message specifications
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    FHIR resource definitions
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    DICOM compliance documentation
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Custom data mapping guides
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Security & Compliance</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Security protocols, compliance requirements, and data protection measures for healthcare system integration.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    HIPAA compliance guidelines
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Data encryption standards
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Access control protocols
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Audit trail requirements
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
            Need Specific Documentation?
          </h2>
          <p className="text-base sm:text-lg mb-8 text-white/90">
            Can't find what you're looking for? Contact our documentation team for assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-gray-100 w-full sm:w-auto">
              Request Documentation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Submit Feedback
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Contact Documentation Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}