import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProcurementSupplyChainPage() {
  const [selectedInquiry, setSelectedInquiry] = useState<string>('bulk-procurement');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] to-[#002875] text-white overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,160,220,0.1),transparent)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-sm">
              <Link to="/support" className="text-white/80 hover:text-white transition-colors">
                Support
              </Link>
              <span className="text-white/60">/</span>
              <span>Procurement & Supply Chain</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Procurement & Supply Chain Inquiry</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Partner with us for large-scale procurement, tender support, supply chain optimization, and strategic distribution partnerships across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  {/* Inquiry Type */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Type of Inquiry *</h3>
                    <RadioGroup value={selectedInquiry} onValueChange={setSelectedInquiry}>
                      <div className="space-y-3">
                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiry === 'bulk-procurement' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiry('bulk-procurement')}
                        >
                          <RadioGroupItem value="bulk-procurement" id="bulk-procurement" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="bulk-procurement" className="cursor-pointer">
                              Bulk Equipment Procurement
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Large-scale orders for hospitals, health centers, or national programs
                            </p>
                          </div>
                        </div>
                        
                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiry === 'tender-support' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiry('tender-support')}
                        >
                          <RadioGroupItem value="tender-support" id="tender-support" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="tender-support" className="cursor-pointer">
                              Tender & RFP Support
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Assistance with government tenders, RFPs, and bid submissions
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiry === 'supply-chain' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiry('supply-chain')}
                        >
                          <RadioGroupItem value="supply-chain" id="supply-chain" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="supply-chain" className="cursor-pointer">
                              Supply Chain Consulting
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Strategic planning, logistics optimization, and distribution network design
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiry === 'distribution' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiry('distribution')}
                        >
                          <RadioGroupItem value="distribution" id="distribution" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="distribution" className="cursor-pointer">
                              Distribution Partnership
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Become a distributor, agent, or reseller in your region
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiry === 'donor-program' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiry('donor-program')}
                        >
                          <RadioGroupItem value="donor-program" id="donor-program" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="donor-program" className="cursor-pointer">
                              Donor-Funded Program
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              NGO, World Bank, USAID, or other donor-funded health programs
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiry === 'customs-compliance' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiry('customs-compliance')}
                        >
                          <RadioGroupItem value="customs-compliance" id="customs-compliance" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="customs-compliance" className="cursor-pointer">
                              Customs & Compliance Support
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Import regulations, certifications, and regulatory compliance assistance
                            </p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Organization Details */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Organization Details</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="org-name">Organization Name *</Label>
                          <Input id="org-name" placeholder="Full organization name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="org-type">Organization Type *</Label>
                          <Select>
                            <SelectTrigger id="org-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="government">Government Ministry/Agency</SelectItem>
                              <SelectItem value="hospital-group">Hospital Group/Network</SelectItem>
                              <SelectItem value="ngo">International NGO</SelectItem>
                              <SelectItem value="donor">Donor Organization</SelectItem>
                              <SelectItem value="private-sector">Private Sector Healthcare</SelectItem>
                              <SelectItem value="distributor">Distributor/Supplier</SelectItem>
                              <SelectItem value="research">Research/Academic Institution</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="country">Primary Country/Region *</Label>
                          <Select>
                            <SelectTrigger id="country">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="multi-country">Multi-Country Program</SelectItem>
                              <SelectItem value="nigeria">Nigeria</SelectItem>
                              <SelectItem value="kenya">Kenya</SelectItem>
                              <SelectItem value="ghana">Ghana</SelectItem>
                              <SelectItem value="south-africa">South Africa</SelectItem>
                              <SelectItem value="tanzania">Tanzania</SelectItem>
                              <SelectItem value="uganda">Uganda</SelectItem>
                              <SelectItem value="ethiopia">Ethiopia</SelectItem>
                              <SelectItem value="rwanda">Rwanda</SelectItem>
                              <SelectItem value="senegal">Senegal</SelectItem>
                              <SelectItem value="drc">Democratic Republic of Congo</SelectItem>
                              <SelectItem value="other">Other African Country</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Organization Website</Label>
                          <Input id="website" type="url" placeholder="https://example.org" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Scope */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Project Scope</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="project-value">Estimated Project Value</Label>
                          <Select>
                            <SelectTrigger id="project-value">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                              <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                              <SelectItem value="1m-5m">$1,000,000 - $5,000,000</SelectItem>
                              <SelectItem value="5m-10m">$5,000,000 - $10,000,000</SelectItem>
                              <SelectItem value="over-10m">Over $10,000,000</SelectItem>
                              <SelectItem value="tbd">To Be Determined</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Project Timeline *</Label>
                          <Select>
                            <SelectTrigger id="timeline">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">Urgent (0-3 months)</SelectItem>
                              <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                              <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                              <SelectItem value="long">Long-term (12-24 months)</SelectItem>
                              <SelectItem value="multi-year">Multi-year Program</SelectItem>
                              <SelectItem value="planning">Planning Stage</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="project-description">Project Description *</Label>
                        <Textarea
                          id="project-description"
                          placeholder="Describe your procurement needs, supply chain challenges, partnership goals, or tender requirements. Include number of facilities, geographic scope, and any specific requirements..."
                          rows={5}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="equipment-categories">Equipment Categories (if applicable)</Label>
                        <Textarea
                          id="equipment-categories"
                          placeholder="List major equipment categories or product groups needed..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Funding & Compliance */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Funding & Compliance</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="funding-source">Funding Source</Label>
                          <Select>
                            <SelectTrigger id="funding-source">
                              <SelectValue placeholder="Select source" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="government">Government Budget</SelectItem>
                              <SelectItem value="donor">Donor/Grant Funded</SelectItem>
                              <SelectItem value="world-bank">World Bank</SelectItem>
                              <SelectItem value="usaid">USAID</SelectItem>
                              <SelectItem value="who">WHO</SelectItem>
                              <SelectItem value="private">Private/Self-Funded</SelectItem>
                              <SelectItem value="mixed">Mixed Funding</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="compliance">Compliance Requirements</Label>
                          <Select>
                            <SelectTrigger id="compliance">
                              <SelectValue placeholder="Select requirements" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="who-pqs">WHO PQS Required</SelectItem>
                              <SelectItem value="ce-fda">CE/FDA Certified</SelectItem>
                              <SelectItem value="local">Local Regulatory Approval</SelectItem>
                              <SelectItem value="all">All International Standards</SelectItem>
                              <SelectItem value="tbd">To Be Discussed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="special-requirements">Special Requirements or Constraints</Label>
                        <Textarea
                          id="special-requirements"
                          placeholder="Import restrictions, local content requirements, preferred manufacturers, warranty needs, training requirements, etc."
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Contact Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Full Name *</Label>
                        <Input id="contact-name" placeholder="Your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-title">Job Title *</Label>
                        <Input id="contact-title" placeholder="Your position" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email Address *</Label>
                        <Input id="contact-email" type="email" placeholder="email@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Phone Number *</Label>
                        <Input id="contact-phone" type="tel" placeholder="+XXX XXX XXX XXX" required />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    size="lg"
                    className="w-full bg-[#4B2991] hover:bg-[#3d1e7d]"
                  >
                    Submit Inquiry
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Our Expertise */}
              <Card className="border-2 border-[#4B2991]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Our Expertise</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>End-to-end supply chain management across 15+ African countries</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Tender preparation and bid support for government contracts</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Regulatory compliance and customs clearance expertise</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Quality assurance and pre-shipment inspections</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Multi-country distribution network coordination</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-gradient-to-br from-[#7C944B] to-[#4B2991] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">Strategic Partnership</h3>
                  <div className="text-3xl mb-2">48 hours</div>
                  <p className="text-sm text-white/90 mb-4">
                    Response time for strategic procurement inquiries
                  </p>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm">
                      Large-scale projects receive dedicated account management
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Who We Work With */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Who We Work With</h3>
                  <div className="space-y-2 text-sm">
                    <div className="pb-2 border-b">
                      <div className="text-muted-foreground">Governments</div>
                      <div className="mt-1">Ministries of Health across Africa</div>
                    </div>
                    <div className="pb-2 border-b">
                      <div className="text-muted-foreground">Donors & NGOs</div>
                      <div className="mt-1">USAID, WHO, World Bank, Gates Foundation</div>
                    </div>
                    <div className="pb-2 border-b">
                      <div className="text-muted-foreground">Hospital Networks</div>
                      <div className="mt-1">Public and private healthcare groups</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Distributors</div>
                      <div className="mt-1">Regional and national partners</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="border-2 border-[#7C944B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Direct Contact</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-1">Procurement Team</div>
                      <div>procurement@pacemhealth.com</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Partnership Inquiries</div>
                      <div>partnerships@pacemhealth.com</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Phone</div>
                      <div>+1 (XXX) XXX-XXXX</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Procurement & Supply Chain Capabilities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🌍
                </div>
                <h3 className="text-lg mb-2">Cross-Border Logistics</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless coordination of imports, customs clearance, and last-mile delivery across Africa
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  📋
                </div>
                <h3 className="text-lg mb-2">Tender Management</h3>
                <p className="text-sm text-muted-foreground">
                  Full support for government tenders, RFPs, and competitive bidding processes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  ✓
                </div>
                <h3 className="text-lg mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Pre-shipment inspections, certification verification, and compliance documentation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🤝
                </div>
                <h3 className="text-lg mb-2">Strategic Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  Long-term relationships with distributors, agents, and in-country representatives
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}