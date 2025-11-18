import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Checkbox } from '../../../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function DonorNgoGovernmentPage() {
  const [selectedPartnership, setSelectedPartnership] = useState<string>('donor');

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
              <span>Donor, NGO, Government Partnership</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Donor, NGO, or Government Partnership</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Collaborate with Pacem Health on large-scale health systems strengthening initiatives. From bilateral donors to multilateral organizations, NGOs, and national governments.
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
                  {/* Partnership Type */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Type of Partnership Interest *</h3>
                    <RadioGroup value={selectedPartnership} onValueChange={setSelectedPartnership}>
                      <div className="space-y-3">
                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedPartnership === 'donor' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedPartnership('donor')}
                        >
                          <RadioGroupItem value="donor" id="donor" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="donor" className="cursor-pointer">
                              Donor or Funding Partnership
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Multilateral/bilateral donor, foundation, or development finance institution
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedPartnership === 'government' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedPartnership('government')}
                        >
                          <RadioGroupItem value="government" id="government" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="government" className="cursor-pointer">
                              Government Partnership
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Ministry of Health, government agency, or public health authority
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedPartnership === 'ngo' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedPartnership('ngo')}
                        >
                          <RadioGroupItem value="ngo" id="ngo" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="ngo" className="cursor-pointer">
                              NGO or Non-Profit Partnership
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              International NGO, local implementing partner, or civil society organization
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedPartnership === 'academic' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedPartnership('academic')}
                        >
                          <RadioGroupItem value="academic" id="academic" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="academic" className="cursor-pointer">
                              Academic or Research Partnership
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              University, research institution, or technical assistance provider
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedPartnership === 'ppp' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedPartnership('ppp')}
                        >
                          <RadioGroupItem value="ppp" id="ppp" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="ppp" className="cursor-pointer">
                              Public-Private Partnership (PPP)
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Co-investment, joint venture, or blended finance model
                            </p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Partnership Focus Areas */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Partnership Focus Areas *</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer">
                        <Checkbox id="infrastructure" />
                        <div className="flex-1">
                          <Label htmlFor="infrastructure" className="cursor-pointer">
                            Healthcare Infrastructure Development
                          </Label>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Facility construction, renovation, equipping health centers/hospitals
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer">
                        <Checkbox id="equipment" />
                        <div className="flex-1">
                          <Label htmlFor="equipment" className="cursor-pointer">
                            Medical Equipment & Technology
                          </Label>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Diagnostic imaging, laboratory, surgical, patient monitoring systems
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer">
                        <Checkbox id="digital-health" />
                        <div className="flex-1">
                          <Label htmlFor="digital-health" className="cursor-pointer">
                            Digital Health & Information Systems
                          </Label>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            EMR/HMIS implementation, telemedicine, health data systems
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer">
                        <Checkbox id="supply-chain" />
                        <div className="flex-1">
                          <Label htmlFor="supply-chain" className="cursor-pointer">
                            Supply Chain Strengthening
                          </Label>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Procurement optimization, logistics, inventory management, warehousing
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer">
                        <Checkbox id="workforce" />
                        <div className="flex-1">
                          <Label htmlFor="workforce" className="cursor-pointer">
                            Workforce Development & Training
                          </Label>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Clinical training, biomedical engineering, health systems management
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer">
                        <Checkbox id="maternal-child" />
                        <div className="flex-1">
                          <Label htmlFor="maternal-child" className="cursor-pointer">
                            Maternal & Child Health Programs
                          </Label>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            MNCH equipment, skilled birth delivery, neonatal care
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer">
                        <Checkbox id="diagnostics" />
                        <div className="flex-1">
                          <Label htmlFor="diagnostics" className="cursor-pointer">
                            Diagnostic & Laboratory Services
                          </Label>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Laboratory strengthening, diagnostic networks, quality assurance
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer">
                        <Checkbox id="emergency" />
                        <div className="flex-1">
                          <Label htmlFor="emergency" className="cursor-pointer">
                            Emergency & Trauma Care
                          </Label>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Emergency departments, trauma centers, ambulance services
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer">
                        <Checkbox id="ncd" />
                        <div className="flex-1">
                          <Label htmlFor="ncd" className="cursor-pointer">
                            Non-Communicable Disease Programs
                          </Label>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Diabetes, hypertension, cancer screening, chronic disease management
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition cursor-pointer">
                        <Checkbox id="systems-integration" />
                        <div className="flex-1">
                          <Label htmlFor="systems-integration" className="cursor-pointer">
                            Health Systems Integration
                          </Label>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Systems-level design, interoperability, performance management
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Geographic Focus */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Geographic Focus</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="target-countries">Target Country/Countries *</Label>
                          <Select>
                            <SelectTrigger id="target-countries">
                              <SelectValue placeholder="Select region or country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pan-africa">Pan-African (Multiple Countries)</SelectItem>
                              <SelectItem value="west-africa">West Africa (Regional)</SelectItem>
                              <SelectItem value="east-africa">East Africa (Regional)</SelectItem>
                              <SelectItem value="southern-africa">Southern Africa (Regional)</SelectItem>
                              <SelectItem value="central-africa">Central Africa (Regional)</SelectItem>
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
                              <SelectItem value="other">Other/TBD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="coverage-level">Coverage Level</Label>
                          <Select>
                            <SelectTrigger id="coverage-level">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="national">National</SelectItem>
                              <SelectItem value="regional">Regional/Provincial</SelectItem>
                              <SelectItem value="district">District/County</SelectItem>
                              <SelectItem value="facility">Facility-Based</SelectItem>
                              <SelectItem value="community">Community-Based</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="geographic-notes">Geographic or Coverage Notes</Label>
                        <Textarea
                          id="geographic-notes"
                          placeholder="Specify regions, districts, or target populations..."
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Partnership Model */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Partnership Model</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="partnership-model">Preferred Partnership Structure</Label>
                        <Select>
                          <SelectTrigger id="partnership-model">
                            <SelectValue placeholder="Select model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="grantee">Grantee/Implementing Partner</SelectItem>
                            <SelectItem value="subcontractor">Subcontractor/Sub-award</SelectItem>
                            <SelectItem value="supplier">Equipment Supplier/Vendor</SelectItem>
                            <SelectItem value="technical">Technical Assistance Provider</SelectItem>
                            <SelectItem value="co-investor">Co-Investor/Joint Venture</SelectItem>
                            <SelectItem value="ppp">Public-Private Partnership</SelectItem>
                            <SelectItem value="consortium">Consortium Member</SelectItem>
                            <SelectItem value="strategic">Strategic Alliance</SelectItem>
                            <SelectItem value="other">Other/Open to Discussion</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="project-scale">Project Scale/Budget Range</Label>
                          <Select>
                            <SelectTrigger id="project-scale">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-500k">Under $500,000</SelectItem>
                              <SelectItem value="500k-2m">$500,000 - $2 Million</SelectItem>
                              <SelectItem value="2m-10m">$2 Million - $10 Million</SelectItem>
                              <SelectItem value="10m-50m">$10 Million - $50 Million</SelectItem>
                              <SelectItem value="over-50m">Over $50 Million</SelectItem>
                              <SelectItem value="tbd">To Be Determined</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Project Timeline/Duration</Label>
                          <Select>
                            <SelectTrigger id="timeline">
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pilot">Pilot Phase (0-12 months)</SelectItem>
                              <SelectItem value="short">Short-term (1-2 years)</SelectItem>
                              <SelectItem value="medium">Medium-term (2-5 years)</SelectItem>
                              <SelectItem value="long">Long-term (5+ years)</SelectItem>
                              <SelectItem value="ongoing">Ongoing/Multi-phase</SelectItem>
                              <SelectItem value="tbd">To Be Determined</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Project or Partnership Details</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="project-name">Project or Program Name</Label>
                        <Input id="project-name" placeholder="Name of initiative or program" />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="status">Project Status</Label>
                          <Select>
                            <SelectTrigger id="status">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="planning">Planning/Design Phase</SelectItem>
                              <SelectItem value="proposal">Proposal Development</SelectItem>
                              <SelectItem value="approved">Approved/Funded</SelectItem>
                              <SelectItem value="active">Active Implementation</SelectItem>
                              <SelectItem value="pipeline">In Pipeline</SelectItem>
                              <SelectItem value="concept">Concept Stage</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="start-date">Expected Start Date</Label>
                          <Input id="start-date" type="date" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="objectives">Project Objectives & Expected Outcomes</Label>
                        <Textarea
                          id="objectives"
                          placeholder="Describe the project goals, target beneficiaries, expected health outcomes, and how Pacem Health could contribute..."
                          rows={5}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="pacem-role">Pacem Health's Potential Role</Label>
                        <Textarea
                          id="pacem-role"
                          placeholder="What specific role, services, or expertise are you seeking from Pacem Health?"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Organization Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Organization Information</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="org-name">Organization Name *</Label>
                          <Input id="org-name" placeholder="Your organization" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="org-type-detail">Organization Type</Label>
                          <Select>
                            <SelectTrigger id="org-type-detail">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="multilateral">Multilateral Organization (WHO, UNICEF, etc.)</SelectItem>
                              <SelectItem value="bilateral">Bilateral Donor (USAID, DFID, etc.)</SelectItem>
                              <SelectItem value="foundation">Private Foundation</SelectItem>
                              <SelectItem value="dfi">Development Finance Institution</SelectItem>
                              <SelectItem value="ministry">Government Ministry</SelectItem>
                              <SelectItem value="agency">Government Agency</SelectItem>
                              <SelectItem value="international-ngo">International NGO</SelectItem>
                              <SelectItem value="local-ngo">Local/National NGO</SelectItem>
                              <SelectItem value="university">University/Academic Institution</SelectItem>
                              <SelectItem value="research">Research Organization</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="org-country">Organization Headquarters</Label>
                          <Input id="org-country" placeholder="Country or city" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="org-website">Website</Label>
                          <Input id="org-website" type="url" placeholder="https://" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Contact Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Full Name *</Label>
                        <Input id="contact-name" placeholder="Your name" required />
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
                        <Label htmlFor="contact-phone">Phone Number</Label>
                        <Input id="contact-phone" type="tel" placeholder="+XXX XXX XXX XXX" />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Additional Information</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="next-steps">Preferred Next Steps</Label>
                        <Select>
                          <SelectTrigger id="next-steps">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="exploratory">Exploratory Conversation</SelectItem>
                            <SelectItem value="proposal">Request for Proposal/Quote</SelectItem>
                            <SelectItem value="presentation">Request Presentation/Demo</SelectItem>
                            <SelectItem value="partnership-agreement">Partnership Agreement Discussion</SelectItem>
                            <SelectItem value="technical-input">Technical Input/Consultation</SelectItem>
                            <SelectItem value="site-visit">Site Visit/Field Assessment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additional-info">Additional Details or Questions</Label>
                        <Textarea
                          id="additional-info"
                          placeholder="Share any additional information about the partnership opportunity, specific requirements, deadlines, or questions..."
                          rows={4}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="attachments">Document Links (Optional)</Label>
                        <Input id="attachments" placeholder="Link to concept note, RFP, project documents, etc." />
                        <p className="text-xs text-muted-foreground">
                          Share links to Google Drive, Dropbox, or other document repositories
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    size="lg"
                    className="w-full bg-[#4B2991] hover:bg-[#3d1e7d]"
                  >
                    Submit Partnership Inquiry
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Partnerships Contact */}
              <Card className="bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Partnerships Team</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white/80 mb-1">Strategic Partnerships</div>
                      <div>partnerships@pacemhealth.com</div>
                    </div>
                    <div>
                      <div className="text-white/80 mb-1">Government Relations</div>
                      <div>government@pacemhealth.com</div>
                    </div>
                    <div>
                      <div className="text-white/80 mb-1">Phone</div>
                      <div>+1 (XXX) XXX-XXXX</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm text-white/90">
                      We respond to partnership inquiries within 48 hours
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Why Partner */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Why Partner with Us?</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Deep Africa expertise across 15+ countries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Systems-level approach to health strengthening</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>End-to-end implementation capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Track record of sustainable outcomes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Compliant procurement and quality assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Data-driven monitoring and evaluation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Current Partners */}
              <Card className="border-2 border-[#7C944B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Current Partnerships</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We work with leading organizations globally:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-[#4B2991]">•</span>
                      <span>Multilateral Organizations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#4B2991]">•</span>
                      <span>Bilateral Donors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#4B2991]">•</span>
                      <span>African Ministries of Health</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#4B2991]">•</span>
                      <span>International NGOs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#4B2991]">•</span>
                      <span>Private Foundations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Partnership Models */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Partnership Models</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="mb-1">Implementation Partner</div>
                      <p className="text-muted-foreground text-xs">
                        Prime or sub-award partner for donor-funded programs
                      </p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="mb-1">Technical Assistance</div>
                      <p className="text-muted-foreground text-xs">
                        Specialized expertise in health systems strengthening
                      </p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="mb-1">Co-Investment</div>
                      <p className="text-muted-foreground text-xs">
                        Blended finance and public-private partnerships
                      </p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="mb-1">Consortium Member</div>
                      <p className="text-muted-foreground text-xs">
                        Multi-stakeholder initiatives and joint programs
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impact Metrics */}
              <Card className="border-2 border-[#4B2991]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Our Impact</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl text-[#4B2991] mb-1">500+</div>
                      <p className="text-sm text-muted-foreground">Healthcare facilities supported</p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="text-2xl text-[#7C944B] mb-1">15+</div>
                      <p className="text-sm text-muted-foreground">African countries served</p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="text-2xl text-[#4B2991] mb-1">10M+</div>
                      <p className="text-sm text-muted-foreground">Lives reached through our programs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Focus Areas */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Partnership Focus Areas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🏗️
                </div>
                <h3 className="text-lg mb-2">Infrastructure</h3>
                <p className="text-sm text-muted-foreground">
                  Healthcare facility construction, renovation, and equipment installation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  💻
                </div>
                <h3 className="text-lg mb-2">Digital Health</h3>
                <p className="text-sm text-muted-foreground">
                  EMR/HMIS, telemedicine, health data systems, and digital transformation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  📦
                </div>
                <h3 className="text-lg mb-2">Supply Chain</h3>
                <p className="text-sm text-muted-foreground">
                  Procurement optimization, logistics strengthening, inventory management
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🎓
                </div>
                <h3 className="text-lg mb-2">Workforce</h3>
                <p className="text-sm text-muted-foreground">
                  Training, capacity building, and health workforce development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">How We Work with Partners</h2>
            <p className="text-lg text-muted-foreground">
              Our partnership approach is collaborative, transparent, and results-focused
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-[#4B2991]/10 rounded-lg flex items-center justify-center text-[#4B2991] mb-3">
                    <span className="text-xl">1</span>
                  </div>
                  <h3 className="text-lg mb-2">Co-Design Solutions</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We work closely with partners to design context-appropriate, evidence-based interventions that align with local health priorities and global best practices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-[#7C944B]/10 rounded-lg flex items-center justify-center text-[#7C944B] mb-3">
                    <span className="text-xl">2</span>
                  </div>
                  <h3 className="text-lg mb-2">Deploy Integrated Systems</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our end-to-end implementation includes equipment, infrastructure, training, supply chain, and digital platforms—ensuring sustainable, measurable outcomes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-[#4B2991]/10 rounded-lg flex items-center justify-center text-[#4B2991] mb-3">
                    <span className="text-xl">3</span>
                  </div>
                  <h3 className="text-lg mb-2">Measure & Sustain Impact</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We establish robust M&E frameworks, provide ongoing technical support, and build local capacity to ensure long-term sustainability of health systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories CTA */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4">Ready to Strengthen Health Systems Together?</h2>
          <p className="text-lg text-white/90 mb-8">
            Let's discuss how we can partner to deliver sustainable, systems-level health improvements across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#4B2991] hover:bg-white/90"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Submit Partnership Inquiry
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Download Partnership Overview
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}