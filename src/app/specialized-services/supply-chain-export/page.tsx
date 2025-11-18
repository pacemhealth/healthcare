import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SupplyChainExportPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#3a1f73] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Link to="/services" className="text-white/90 hover:text-white inline-flex items-center gap-2 mb-4">
                ← Back to Services
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              Supply Chain & Export Management
            </h1>
            <p className="text-2xl md:text-3xl mb-4">
              End-to-End Movement of Health Essentials — Compliant, Traceable, and Ready for Impact
            </p>
            <p className="text-lg md:text-xl text-white/90">
              Pacem Health delivers a seamless supply chain experience for ministries of health, NGOs, and development partners across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-6">
              From Port to Patient: Seamless Medical Supply Chain Management
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Moving medical products across borders and into African health systems is complex. Temperature-sensitive pharmaceuticals require cold-chain integrity. Medical equipment needs specialized handling. Regulatory documentation must be perfect. Customs processes vary by country. And communities depend on these supplies arriving intact, on time, and ready for use.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Pacem Health's Supply Chain & Export Management services ensure life-saving pharmaceuticals, medical equipment, and diagnostics arrive where they're needed — intact, on time, and in full compliance with regulatory and donor requirements. We manage the full lifecycle of medical product movement: sourcing from trusted global suppliers, coordinating cold-chain and ambient freight, preparing regulatory and customs documentation, and handling warehousing and last-mile delivery.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether fulfilling a multi-million dollar grant or equipping a remote clinic, we bundle goods by program, ensure MOH registration alignment, and maintain full traceability. With Pacem, you get both operational confidence and compliance assurance—from port to patient.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Comprehensive Supply Chain Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              End-to-end logistics solutions for medical products across Africa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Global Sourcing */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Global Sourcing & Procurement Coordination</h3>
                <p className="text-muted-foreground mb-6">
                  We leverage established relationships with WHO-prequalified manufacturers, FDA-approved suppliers, and trusted pharmaceutical distributors worldwide to source quality-assured medical products. Our procurement coordination ensures products meet regulatory requirements, arrive with proper documentation, and comply with donor specifications.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Verified supplier network of WHO/FDA-approved manufacturers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Quality assurance and product authentication verification</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Procurement coordination aligned with grant requirements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Price negotiation and competitive bidding support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Certificate of conformity and documentation management</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* International Freight */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">International Freight & Logistics Coordination</h3>
                <p className="text-muted-foreground mb-6">
                  We coordinate complex international freight movements through established partnerships with global freight forwarders and shipping lines. Our logistics team manages air and ocean freight, coordinates with freight forwarders, handles cargo insurance, and tracks shipments in real-time to ensure on-time arrival.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Air and ocean freight coordination for medical cargo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Cargo consolidation and shipment optimization</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Real-time shipment tracking and status updates</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Cargo insurance and risk management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Routing optimization for cost and speed balance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cold Chain */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Cold-Chain Management & Temperature Monitoring</h3>
                <p className="text-muted-foreground mb-6">
                  Temperature-sensitive pharmaceuticals and vaccines require unbroken cold-chain integrity from manufacturer to delivery point. We provide specialized cold-chain packaging, active temperature monitoring, qualified cold storage facilities, and rapid response protocols to ensure product integrity throughout the supply chain.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Climate-controlled packaging and thermal containers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Active temperature monitoring with data logging</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Qualified cold storage in key transit points</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Temperature excursion alerts and response protocols</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Cold-chain validation and compliance documentation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Regulatory & Customs */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Regulatory Compliance & Customs Clearance</h3>
                <p className="text-muted-foreground mb-6">
                  Navigating complex regulatory requirements and customs procedures across African markets requires specialized expertise. Our in-country regulatory partners prepare complete documentation packages, coordinate with pharmacy boards and customs authorities, and manage the clearance process to minimize delays and ensure compliance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">MOH registration verification and alignment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Import permits and regulatory documentation preparation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Customs clearance and duty/tax management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Pharmacy board coordination and approvals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Donor compliance and grant requirement fulfillment</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Warehousing */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Warehousing & Inventory Management</h3>
                <p className="text-muted-foreground mb-6">
                  Strategic warehousing in key African markets enables rapid deployment and efficient distribution. Our warehouse facilities provide climate-controlled storage, inventory management systems, quality assurance protocols, and program-based bundling that simplifies distribution and ensures traceability.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Climate-controlled warehouse facilities in key markets</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Digital inventory management and tracking systems</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Program-based kit assembly and bundling services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Quality control and expiry date monitoring</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Security protocols and loss prevention measures</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Last Mile */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Last-Mile Delivery & Distribution</h3>
                <p className="text-muted-foreground mb-6">
                  The final leg of the supply chain—delivery to remote health facilities—is often the most challenging. Our last-mile distribution network combines local logistics partners, direct delivery capabilities, and technology-enabled tracking to ensure products reach even the most remote locations with full chain of custody documentation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Direct delivery to health facilities nationwide</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Network of local logistics partners for remote areas</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">GPS tracking and proof of delivery documentation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Chain of custody maintenance throughout delivery</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4B2991] flex-shrink-0 mt-2"></span>
                    <p className="text-sm">Flexible delivery scheduling and coordination</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Products We Transport & Manage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized handling for the full spectrum of medical products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Essential Medicines</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>ARVs and antiretrovirals</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>TB medications and first-line treatments</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Antimalarials and antibiotics</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Maternal and child health medicines</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Vaccines & Biologics</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>EPI vaccines (routine immunization)</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>COVID-19 vaccines and boosters</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Biologics and temperature-sensitive drugs</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Blood products and plasma</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Diagnostic Products</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Rapid diagnostic test kits</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Laboratory reagents and consumables</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Molecular diagnostic cartridges</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Sample collection and transport media</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Medical Equipment</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Diagnostic imaging systems</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Laboratory analyzers and instruments</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Patient monitoring and life support</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Surgical and operating room equipment</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Medical Consumables</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>PPE and infection prevention supplies</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Surgical supplies and instruments</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Medical disposables and sharps</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>IV fluids and infusion supplies</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl mb-3">Program-Specific Kits</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>HIV/AIDS testing and treatment kits</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Maternal and newborn care packages</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Emergency response and trauma kits</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4B2991] flex-shrink-0 mt-0.5" />
                  <span>Outbreak response supplies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Technology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Technology-Enabled Supply Chain Visibility
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real-time tracking and data transparency throughout the supply chain
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#4B2991] text-white flex items-center justify-center">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Shipment Tracking & Visibility</h3>
                  <p className="text-muted-foreground">
                    Real-time tracking of shipments from origin to destination with GPS monitoring, automated status updates, and milestone notifications. Stakeholders receive regular updates on shipment location, estimated arrival times, and any potential delays.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#4B2991] text-white flex items-center justify-center">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Temperature & Condition Monitoring</h3>
                  <p className="text-muted-foreground">
                    Continuous temperature monitoring for cold-chain products using data loggers and IoT sensors. Automated alerts notify teams immediately of temperature excursions, humidity issues, or other environmental concerns requiring intervention.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#4B2991] text-white flex items-center justify-center">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Digital Documentation Management</h3>
                  <p className="text-muted-foreground">
                    Cloud-based documentation platform that centralizes all shipping documents, regulatory certificates, customs paperwork, and compliance records. Stakeholders access complete documentation packages digitally, eliminating delays from missing paperwork.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#4B2991] text-white flex items-center justify-center">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Inventory Management Systems</h3>
                  <p className="text-muted-foreground">
                    Digital inventory tracking across warehouse locations with real-time stock levels, expiry date monitoring, batch tracking, and automated reorder alerts. Integration with facility inventory systems enables seamless stock management.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#4B2991] text-white flex items-center justify-center">
                    5
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">Performance Analytics & Reporting</h3>
                  <p className="text-muted-foreground">
                    Comprehensive analytics dashboards providing insights into supply chain performance metrics: on-time delivery rates, lead times, cold-chain compliance, inventory turnover, and cost analysis. Regular reporting keeps stakeholders informed and enables continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Why Choose Pacem for Supply Chain Management?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Africa-Focused Network</h3>
                <p className="text-muted-foreground">
                  Deep knowledge of African regulatory environments, customs procedures, and logistics infrastructure across 15+ countries.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">End-to-End Service</h3>
                <p className="text-muted-foreground">
                  Single point of contact manages the entire supply chain from global sourcing through last-mile delivery—simplifying coordination.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Regulatory Expertise</h3>
                <p className="text-muted-foreground">
                  In-country regulatory partners ensure compliance with MOH requirements, import regulations, and donor specifications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Rigorous supplier verification, product authentication, and quality control processes protect against counterfeit and substandard products.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Cold-Chain Expertise</h3>
                <p className="text-muted-foreground">
                  Specialized cold-chain capabilities with temperature monitoring, qualified storage, and validated transport ensure product integrity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Technology Integration</h3>
                <p className="text-muted-foreground">
                  Digital platforms provide real-time visibility, automated reporting, and data-driven insights throughout the supply chain.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Compliance Standards & Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our supply chain operations meet international quality and compliance standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">WHO Prequalification Standards</h3>
              <p className="text-muted-foreground">
                We source from WHO-prequalified manufacturers and maintain supply chain practices aligned with WHO guidelines for pharmaceutical quality assurance, ensuring products meet international safety and efficacy standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Good Distribution Practice (GDP)</h3>
              <p className="text-muted-foreground">
                Our warehousing and distribution operations follow GDP guidelines, ensuring proper storage conditions, handling procedures, and quality management systems for pharmaceutical products.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">International Air Transport Association (IATA)</h3>
              <p className="text-muted-foreground">
                Temperature-sensitive shipments comply with IATA regulations for pharmaceutical air cargo, including proper packaging, labeling, and documentation for controlled temperature transport.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl mb-3">Donor Compliance Requirements</h3>
              <p className="text-muted-foreground">
                Experience meeting requirements from USAID, Global Fund, Gavi, PEPFAR, and other major donors including procurement regulations, reporting standards, and accountability frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2c2c3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Optimize Your Medical Supply Chain?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how our integrated supply chain services can ensure your medical products arrive on time, intact, and ready to save lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f97316] hover:bg-[#ea580c] text-white">
              Request Supply Chain Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-[#2c2c3e] hover:bg-gray-100">
              Download Services Overview
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
