import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { useState } from 'react';

export default function PlatformSystemsSupportPage() {
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
              <span>Platform & Systems Support</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Platform & Systems Support</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Comprehensive support for digital health platforms, cloud infrastructure, cybersecurity, and system integrations. From EMR systems to HMIS implementations, we ensure your digital infrastructure runs smoothly.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">99.9%</div>
              <div className="text-sm sm:text-base text-white/80">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">24/7</div>
              <div className="text-sm sm:text-base text-white/80">Monitoring</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">{'<'}30min</div>
              <div className="text-sm sm:text-base text-white/80">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl md:text-4xl mb-2">SOC 2</div>
              <div className="text-sm sm:text-base text-white/80">Certified</div>
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
              onClick={() => scrollToSection('platform-services')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'platform-services' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Platform Services
            </button>
            <button 
              onClick={() => scrollToSection('data-integration')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'data-integration' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Data Integration
            </button>
            <button 
              onClick={() => scrollToSection('cybersecurity')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'cybersecurity' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Cybersecurity
            </button>
            <button 
              onClick={() => scrollToSection('cloud-infrastructure')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'cloud-infrastructure' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Cloud Infrastructure
            </button>
            <button 
              onClick={() => scrollToSection('knowledge-hub')}
              className={`whitespace-nowrap pb-2 border-b-2 transition-colors ${
                activeTab === 'knowledge-hub' 
                  ? 'border-[#4B2991] text-[#4B2991]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              Knowledge Hub
            </button>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section id="overview" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6">
              What Is Platform & Systems Support?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Our Platform & Systems Support provides comprehensive technical assistance for digital health infrastructure, ensuring your healthcare systems operate reliably, securely, and efficiently across all touchpoints.
            </p>
            
            <h3 className="text-xl sm:text-2xl mb-4">Why Platform Support Matters</h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              Modern healthcare delivery depends on robust digital systems. Our expert support team ensures your platforms remain operational, secure, and optimized, minimizing downtime and maximizing the impact of your digital health investments.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Platform Support Services */}
      <section id="platform-services" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Digital Platform Support Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              From basic troubleshooting to advanced system optimization, we provide comprehensive support for all your digital health infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Technical Troubleshooting</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  Expert diagnosis and resolution of technical issues affecting your digital health platforms.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>System error diagnosis and resolution</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Performance bottleneck identification</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>User access and authentication issues</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Data sync and connectivity problems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">System Optimization</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  Continuous monitoring and optimization to ensure peak platform performance and user experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Performance tuning and optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Database query optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Load balancing configuration</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Resource utilization monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Mobile App Support</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-6">
                  Technical support for mobile health applications across all platforms and devices.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Mobile app troubleshooting</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Cross-platform compatibility</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span>User experience support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Integration Support */}
      <section id="data-integration" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Data Integration Support
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Expert assistance with EHR integration, API connections, data migration, and interoperability challenges across different healthcare systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-[#4B2991]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">EHR System Integration</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Seamless integration with existing electronic health record systems for unified patient data management.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#4B2991]">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#7C944B]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">API Development & Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Custom API development and ongoing support for third-party system integrations and data exchange.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#7C944B]">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#4B2991]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Data Migration Assistance</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Secure and efficient data migration services ensuring data integrity throughout the transition process.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#4B2991]">
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#7C944B]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Interoperability Solutions</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Standards-based interoperability solutions enabling seamless data exchange across healthcare systems.
                </p>
                <Button variant="link" className="p-0 h-auto text-[#7C944B]">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cybersecurity Support */}
      <section id="cybersecurity" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Cybersecurity Support
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Comprehensive security support including vulnerability assessments, compliance guidance, incident response, and security training for healthcare teams.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Security Audits & Assessments</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Comprehensive security assessments to identify vulnerabilities and strengthen your digital health infrastructure.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Vulnerability scanning and penetration testing
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Security architecture review
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Risk assessment and mitigation planning
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Third-party security validation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Compliance Guidance (HIPAA, GDPR)</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Expert guidance on healthcare data privacy regulations and compliance requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    HIPAA compliance assessment and remediation
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    GDPR data protection compliance
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Local regulatory compliance support
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Compliance documentation and reporting
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Incident Response Support</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Rapid response to security incidents with expert guidance and remediation support.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    24/7 incident response hotline
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Breach containment and remediation
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Forensic analysis and reporting
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#4B2991] rounded-full" />
                    Post-incident security hardening
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-4">Security Training Programs</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Comprehensive security awareness training for healthcare staff and IT teams.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Security awareness training for staff
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Phishing prevention and response
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Best practices for data protection
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Ongoing security education programs
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cloud Infrastructure Support */}
      <section id="cloud-infrastructure" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Cloud Infrastructure Support
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Support for cloud-based healthcare platforms, deployment optimization, scaling solutions, and disaster recovery planning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Cloud Deployment Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Expert guidance on cloud architecture design, deployment strategies, and infrastructure setup for healthcare platforms.
                </p>
                <ul className="space-y-1 text-xs">
                  <li className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#7C944B] rounded-full" />
                    Architecture design
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#7C944B] rounded-full" />
                    Multi-region deployment
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#7C944B] rounded-full" />
                    Infrastructure automation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Performance Optimization</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Continuous monitoring and optimization of cloud infrastructure to ensure optimal performance and cost efficiency.
                </p>
                <ul className="space-y-1 text-xs">
                  <li className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#7C944B] rounded-full" />
                    Resource optimization
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#7C944B] rounded-full" />
                    Cost management
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#7C944B] rounded-full" />
                    Performance monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Scaling Solutions</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Dynamic scaling strategies to handle variable workloads and ensure consistent performance during peak usage.
                </p>
                <ul className="space-y-1 text-xs">
                  <li className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#7C944B] rounded-full" />
                    Auto-scaling configuration
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#7C944B] rounded-full" />
                    Load balancing
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#7C944B] rounded-full" />
                    Capacity planning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Disaster Recovery Planning</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive disaster recovery and business continuity planning to protect critical healthcare data and services.
                </p>
                <ul className="space-y-1 text-xs">
                  <li className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#7C944B] rounded-full" />
                    Backup strategies
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#7C944B] rounded-full" />
                    Recovery procedures
                  </li>
                  <li className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-[#7C944B] rounded-full" />
                    Business continuity
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pacem DocBase Knowledge Hub */}
      <section id="knowledge-hub" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Pacem DocBase™ Knowledge Hub
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Access our comprehensive knowledge base with technical documentation, troubleshooting guides, and best practices for digital health systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-2 border-[#4B2991]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Technical Documentation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive guides, API references, and technical specifications for all our digital health platforms.
                </p>
                <Button variant="outline" className="w-full border-[#4B2991] text-[#4B2991] hover:bg-[#4B2991] hover:text-white">
                  Browse Documentation
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#7C944B]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Video Tutorials</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Step-by-step video guides covering common tasks, troubleshooting procedures, and system administration.
                </p>
                <Button variant="outline" className="w-full border-[#7C944B] text-[#7C944B] hover:bg-[#7C944B] hover:text-white">
                  Watch Tutorials
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#4B2991]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">FAQ & Troubleshooting</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quick answers to common questions and step-by-step troubleshooting guides for frequent issues.
                </p>
                <Button variant="outline" className="w-full border-[#4B2991] text-[#4B2991] hover:bg-[#4B2991] hover:text-white">
                  View FAQ
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#7C944B]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg sm:text-xl mb-3">Community Forum</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with other healthcare professionals, share experiences, and get help from the community.
                </p>
                <Button variant="outline" className="w-full border-[#7C944B] text-[#7C944B] hover:bg-[#7C944B] hover:text-white">
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Multiple Support Channels */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl mb-4">Multiple Support Channels</h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Choose the support channel that works best for your needs and urgency level
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg mb-3">Live Chat Support</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get instant help through our live chat system available on web and WhatsApp platforms.
                  </p>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-[#4B2991] hover:bg-[#3d1e7d]">
                      Web Chat
                    </Button>
                    <Button className="flex-1 bg-[#25D366] hover:bg-[#20BA5A]">
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg mb-3">Support Tickets</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Submit detailed support requests for complex issues that require investigation and follow-up.
                  </p>
                  <Button className="w-full bg-[#7C944B] hover:bg-[#6a7f41]">
                    Submit Ticket
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg mb-3">Phone Support</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak directly with our technical support team for urgent issues requiring immediate attention.
                  </p>
                  <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d]">
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-lg mb-3">Email Support</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Send detailed descriptions of issues for non-urgent matters that can be addressed within 24 hours.
                  </p>
                  <Button className="w-full bg-[#7C944B] hover:bg-[#6a7f41]">
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
            Ready to Get Platform Support?
          </h2>
          <p className="text-base sm:text-lg mb-8 text-white/90">
            Our technical support team is ready to help you optimize your digital health infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-gray-100 w-full sm:w-auto">
              Get Support Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Contact Technical Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}