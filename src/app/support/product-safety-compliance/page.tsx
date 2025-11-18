import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FileCheck, Globe, ShieldCheck, GraduationCap } from 'lucide-react';

export default function ProductSafetyCompliancePage() {
  const [selectedRequest, setSelectedRequest] = useState<string>('certification-docs');

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
              <span>Product Safety & Compliance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Product Safety or Compliance Help</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Get expert guidance on regulatory compliance, safety certifications, product registrations, and quality assurance standards for medical equipment across African markets.
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
                  {/* Request Type */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">What do you need help with? *</h3>
                    <RadioGroup value={selectedRequest} onValueChange={setSelectedRequest}>
                      <div className="space-y-3">
                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedRequest === 'certification-docs' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedRequest('certification-docs')}
                        >
                          <RadioGroupItem value="certification-docs" id="certification-docs" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="certification-docs" className="cursor-pointer">
                              Certification Documentation
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Request CE, FDA, WHO PQS, or other certification documents
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedRequest === 'regulatory-compliance' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedRequest('regulatory-compliance')}
                        >
                          <RadioGroupItem value="regulatory-compliance" id="regulatory-compliance" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="regulatory-compliance" className="cursor-pointer">
                              Regulatory Compliance Assistance
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Help navigating local regulatory requirements and import regulations
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedRequest === 'safety-data' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedRequest('safety-data')}
                        >
                          <RadioGroupItem value="safety-data" id="safety-data" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="safety-data" className="cursor-pointer">
                              Safety Data Sheets & Technical Specs
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Material safety data sheets, technical specifications, test reports
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedRequest === 'import-export' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedRequest('import-export')}
                        >
                          <RadioGroupItem value="import-export" id="import-export" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="import-export" className="cursor-pointer">
                              Import/Export Documentation
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Customs clearance, certificates of origin, shipping documentation
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedRequest === 'quality-verification' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedRequest('quality-verification')}
                        >
                          <RadioGroupItem value="quality-verification" id="quality-verification" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="quality-verification" className="cursor-pointer">
                              Quality Assurance & Verification
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Product authenticity verification, quality control certificates
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedRequest === 'safety-alert' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedRequest('safety-alert')}
                        >
                          <RadioGroupItem value="safety-alert" id="safety-alert" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="safety-alert" className="cursor-pointer">
                              Safety Alert or Product Issue
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Report a safety concern, defect, or adverse event
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedRequest === 'compliance-training' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedRequest('compliance-training')}
                        >
                          <RadioGroupItem value="compliance-training" id="compliance-training" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="compliance-training" className="cursor-pointer">
                              Compliance Training & Education
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Staff training on regulatory compliance and safety protocols
                            </p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Product Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Product Information</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="product-name">Product/Equipment Name *</Label>
                          <Input id="product-name" placeholder="Equipment or product name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="product-category">Product Category</Label>
                          <Select>
                            <SelectTrigger id="product-category">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="diagnostic-imaging">Diagnostic Imaging</SelectItem>
                              <SelectItem value="laboratory">Laboratory Equipment</SelectItem>
                              <SelectItem value="surgical">Surgical Equipment</SelectItem>
                              <SelectItem value="patient-monitoring">Patient Monitoring</SelectItem>
                              <SelectItem value="icu-emergency">ICU & Emergency</SelectItem>
                              <SelectItem value="maternal-child">Maternal & Child Health</SelectItem>
                              <SelectItem value="digital-platform">Digital Health Platform</SelectItem>
                              <SelectItem value="medical-supplies">Medical Supplies</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="manufacturer">Manufacturer</Label>
                          <Input id="manufacturer" placeholder="Manufacturer name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="model-serial">Model/Serial Number</Label>
                          <Input id="model-serial" placeholder="Model or serial number" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compliance Requirements */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Compliance Requirements</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="destination-country">Destination Country *</Label>
                          <Select>
                            <SelectTrigger id="destination-country">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
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
                              <SelectItem value="multi-country">Multiple Countries</SelectItem>
                              <SelectItem value="other">Other African Country</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="regulatory-body">Regulatory Body/Authority</Label>
                          <Select>
                            <SelectTrigger id="regulatory-body">
                              <SelectValue placeholder="Select if known" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="who">WHO (World Health Organization)</SelectItem>
                              <SelectItem value="fda">FDA (U.S. Food & Drug Administration)</SelectItem>
                              <SelectItem value="ce">CE Mark (European Union)</SelectItem>
                              <SelectItem value="nafdac">NAFDAC (Nigeria)</SelectItem>
                              <SelectItem value="ppr">PPB (Kenya)</SelectItem>
                              <SelectItem value="fda-ghana">FDA Ghana</SelectItem>
                              <SelectItem value="sahpra">SAHPRA (South Africa)</SelectItem>
                              <SelectItem value="tmda">TMDA (Tanzania)</SelectItem>
                              <SelectItem value="nda">NDA (Uganda)</SelectItem>
                              <SelectItem value="efda">EFDA (Ethiopia)</SelectItem>
                              <SelectItem value="other">Other/Not Sure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="certifications-needed">Certifications/Documents Needed</Label>
                        <Textarea
                          id="certifications-needed"
                          placeholder="List specific certifications, licenses, or documentation required..."
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select>
                          <SelectTrigger id="urgency">
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent - Shipment delayed/customs hold</SelectItem>
                            <SelectItem value="high">High - Tender/procurement deadline</SelectItem>
                            <SelectItem value="normal">Normal - Standard processing</SelectItem>
                            <SelectItem value="planning">Planning - Future procurement</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Request Details */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Request Details</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="detailed-request">Detailed Request *</Label>
                        <Textarea
                          id="detailed-request"
                          placeholder="Please describe your compliance or safety assistance needs in detail. Include any specific requirements, deadlines, or concerns..."
                          rows={5}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="intended-use">Intended Use/Application</Label>
                        <Textarea
                          id="intended-use"
                          placeholder="Describe how the product will be used (e.g., public hospital, private clinic, mobile unit, etc.)"
                          rows={2}
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
                          <Label htmlFor="org-type">Organization Type</Label>
                          <Select>
                            <SelectTrigger id="org-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="government">Government Ministry/Agency</SelectItem>
                              <SelectItem value="hospital">Hospital/Health Center</SelectItem>
                              <SelectItem value="distributor">Distributor/Importer</SelectItem>
                              <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                              <SelectItem value="private">Private Healthcare</SelectItem>
                              <SelectItem value="research">Research Institution</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
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
                    Submit Request
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Compliance Team */}
              <Card className="bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Compliance Team</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white/80 mb-1">Email</div>
                      <div>compliance@pacemhealth.com</div>
                    </div>
                    <div>
                      <div className="text-white/80 mb-1">Phone</div>
                      <div>+1 (XXX) XXX-XXXX</div>
                    </div>
                    <div>
                      <div className="text-white/80 mb-1">Hours</div>
                      <div>Mon-Fri: 8AM - 6PM EAT</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm text-white/90">
                      24-48 hour response for urgent compliance matters
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Our Certifications */}
              <Card className="border-2 border-[#4B2991]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Our Certifications</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>WHO Prequalification Programme (PQS)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>CE Mark (European Union)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>FDA Registered (United States)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>ISO 13485 Medical Devices</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>ISO 9001 Quality Management</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Local regulatory approvals across 15+ African countries</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Safety Reporting */}
              <Card className="border-2 border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3 text-red-900">Report Safety Issues</h3>
                  <p className="text-sm text-red-800 mb-4">
                    If you have a serious safety concern or urgent product issue, contact us immediately:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <div className="text-red-700">24/7 Safety Hotline</div>
                      <div className="text-red-900">+1 (XXX) XXX-XXXX</div>
                    </div>
                    <div>
                      <div className="text-red-700">Safety Email</div>
                      <div className="text-red-900">safety@pacemhealth.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resources */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Compliance Resources</h3>
                  <div className="space-y-2 text-sm">
                    <a href="#" className="block py-2 border-b hover:text-[#4B2991] transition">
                      Certification Database
                    </a>
                    <a href="#" className="block py-2 border-b hover:text-[#4B2991] transition">
                      Regulatory Guidelines by Country
                    </a>
                    <a href="#" className="block py-2 border-b hover:text-[#4B2991] transition">
                      Import Documentation Templates
                    </a>
                    <a href="#" className="block py-2 hover:text-[#4B2991] transition">
                      Safety Data Sheets Library
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border-2 border-[#7C944B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Response Times</h3>
                  <div className="space-y-3 text-sm">
                    <div className="pb-2 border-b">
                      <div className="text-muted-foreground">Safety Issues</div>
                      <div className="mt-1">Immediate (24/7)</div>
                    </div>
                    <div className="pb-2 border-b">
                      <div className="text-muted-foreground">Urgent Compliance</div>
                      <div className="mt-1">24-48 hours</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Standard Requests</div>
                      <div className="mt-1">2-5 business days</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Compliance & Safety Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  <FileCheck className="w-6 h-6" fill="currentColor" />
                </div>
                <h3 className="text-lg mb-2">Certification Support</h3>
                <p className="text-sm text-muted-foreground">
                  Complete documentation for WHO PQS, CE, FDA, and local regulatory requirements
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  <Globe className="w-6 h-6" fill="currentColor" />
                </div>
                <h3 className="text-lg mb-2">Import/Export Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Customs clearance, certificates of origin, and cross-border documentation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  <ShieldCheck className="w-6 h-6" fill="currentColor" />
                </div>
                <h3 className="text-lg mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Product verification, quality control testing, and pre-shipment inspections
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  <GraduationCap className="w-6 h-6" fill="currentColor" />
                </div>
                <h3 className="text-lg mb-2">Training & Education</h3>
                <p className="text-sm text-muted-foreground">
                  Staff training on regulatory compliance, safety protocols, and best practices
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regulatory Coverage */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Regulatory Coverage Across Africa</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">West Africa</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Nigeria (NAFDAC)</li>
                  <li>• Ghana (FDA Ghana)</li>
                  <li>• Senegal</li>
                  <li>• Côte d'Ivoire</li>
                  <li>• Burkina Faso</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">East Africa</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Kenya (PPB)</li>
                  <li>• Tanzania (TMDA)</li>
                  <li>• Uganda (NDA)</li>
                  <li>• Rwanda</li>
                  <li>• Ethiopia (EFDA)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Southern Africa</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• South Africa (SAHPRA)</li>
                  <li>• Zimbabwe</li>
                  <li>• Zambia</li>
                  <li>• Mozambique</li>
                  <li>• Botswana</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}