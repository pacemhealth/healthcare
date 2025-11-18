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

export default function SitePlanningReadinessPage() {
  const [selectedAssessment, setSelectedAssessment] = useState<string>('new-equipment');

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
              <span>Site Planning & Readiness</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Site Planning & Readiness Assessment</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Ensure your facility is fully prepared for new medical equipment installations. Our site assessment experts evaluate infrastructure, power, space, and environmental requirements.
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
                  {/* Facility Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Facility Information</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="facility-name">Facility Name *</Label>
                          <Input id="facility-name" placeholder="Hospital or health center name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="facility-type">Facility Type *</Label>
                          <Select>
                            <SelectTrigger id="facility-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tertiary-hospital">Tertiary Hospital</SelectItem>
                              <SelectItem value="district-hospital">District Hospital</SelectItem>
                              <SelectItem value="primary-health-center">Primary Health Center</SelectItem>
                              <SelectItem value="clinic">Clinic</SelectItem>
                              <SelectItem value="diagnostic-center">Diagnostic Center</SelectItem>
                              <SelectItem value="specialized-facility">Specialized Facility</SelectItem>
                              <SelectItem value="mobile-unit">Mobile Unit</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="country">Country *</Label>
                          <Select>
                            <SelectTrigger id="country">
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
                              <SelectItem value="other">Other African Country</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City/Region *</Label>
                          <Input id="city" placeholder="City or region" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Full Address</Label>
                        <Input id="address" placeholder="Street address, landmarks" />
                      </div>
                    </div>
                  </div>

                  {/* Assessment Type */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Assessment Needed *</h3>
                    <RadioGroup value={selectedAssessment} onValueChange={setSelectedAssessment}>
                      <div className="space-y-3">
                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedAssessment === 'new-equipment' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedAssessment('new-equipment')}
                        >
                          <RadioGroupItem value="new-equipment" id="new-equipment" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="new-equipment" className="cursor-pointer">
                              New Equipment Installation
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Assess readiness for medical equipment (imaging, lab, surgical, etc.)
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedAssessment === 'digital-systems' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedAssessment('digital-systems')}
                        >
                          <RadioGroupItem value="digital-systems" id="digital-systems" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="digital-systems" className="cursor-pointer">
                              Digital Health Platform Deployment
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Evaluate IT infrastructure, connectivity, and system requirements
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedAssessment === 'infrastructure' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedAssessment('infrastructure')}
                        >
                          <RadioGroupItem value="infrastructure" id="infrastructure" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="infrastructure" className="cursor-pointer">
                              Infrastructure Upgrade Planning
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Comprehensive facility upgrade (power, HVAC, space, etc.)
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedAssessment === 'regulatory' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedAssessment('regulatory')}
                        >
                          <RadioGroupItem value="regulatory" id="regulatory" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="regulatory" className="cursor-pointer">
                              Regulatory Compliance Assessment
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Review licensing, certifications, and compliance requirements
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedAssessment === 'new-facility' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedAssessment('new-facility')}
                        >
                          <RadioGroupItem value="new-facility" id="new-facility" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="new-facility" className="cursor-pointer">
                              New Facility Planning
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Planning for construction or renovation of healthcare facility
                            </p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Project Details */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Project Details</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="project-description">Project Description *</Label>
                        <Textarea
                          id="project-description"
                          placeholder="Describe what you're planning to implement, the scope of the project, and your assessment needs..."
                          rows={4}
                          required
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="equipment-systems">Equipment/Systems Planned</Label>
                          <Textarea
                            id="equipment-systems"
                            placeholder="List major equipment or systems you plan to install..."
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="implementation-timeline">Implementation Timeline *</Label>
                          <Select>
                            <SelectTrigger id="implementation-timeline">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                              <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                              <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                              <SelectItem value="long">Long-term (12-24 months)</SelectItem>
                              <SelectItem value="planning">Planning Stage Only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Current Infrastructure */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Current Infrastructure Status</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="power-supply">Power Supply Reliability</Label>
                          <Select>
                            <SelectTrigger id="power-supply">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="stable-grid">Stable Grid Power (24/7)</SelectItem>
                              <SelectItem value="intermittent-grid">Intermittent Grid Power</SelectItem>
                              <SelectItem value="generator-backup">Generator Backup Available</SelectItem>
                              <SelectItem value="solar-hybrid">Solar/Hybrid System</SelectItem>
                              <SelectItem value="unreliable">Unreliable/Inadequate</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="internet-connectivity">Internet Connectivity</Label>
                          <Select>
                            <SelectTrigger id="internet-connectivity">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fiber">Fiber/High-Speed Broadband</SelectItem>
                              <SelectItem value="dsl-cable">DSL/Cable Internet</SelectItem>
                              <SelectItem value="mobile-4g">Mobile/4G LTE</SelectItem>
                              <SelectItem value="satellite">Satellite Internet</SelectItem>
                              <SelectItem value="limited">Limited/Unreliable</SelectItem>
                              <SelectItem value="none">No Internet Access</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="hvac-system">HVAC/Climate Control</Label>
                          <Select>
                            <SelectTrigger id="hvac-system">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="central-hvac">Central HVAC System</SelectItem>
                              <SelectItem value="split-units">Split AC Units</SelectItem>
                              <SelectItem value="fans-only">Fans Only</SelectItem>
                              <SelectItem value="none">No Climate Control</SelectItem>
                              <SelectItem value="needed">Needs Installation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="water-supply">Water Supply</Label>
                          <Select>
                            <SelectTrigger id="water-supply">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="municipal-reliable">Municipal Water (Reliable)</SelectItem>
                              <SelectItem value="municipal-intermittent">Municipal Water (Intermittent)</SelectItem>
                              <SelectItem value="well-borehole">Well/Borehole</SelectItem>
                              <SelectItem value="storage-tanks">Storage Tanks Available</SelectItem>
                              <SelectItem value="inadequate">Inadequate</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="space-availability">Available Space</Label>
                        <Textarea
                          id="space-availability"
                          placeholder="Describe available space, room dimensions, floor load capacity if known..."
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Staffing & Training */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Staffing & Training Considerations</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="technical-staff">Current Technical Staff</Label>
                          <Select>
                            <SelectTrigger id="technical-staff">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="biomedical-engineers">Biomedical Engineers Available</SelectItem>
                              <SelectItem value="it-staff">IT Staff Available</SelectItem>
                              <SelectItem value="trained-technicians">Trained Technicians</SelectItem>
                              <SelectItem value="limited-staff">Limited Technical Staff</SelectItem>
                              <SelectItem value="no-staff">No Technical Staff</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="training-needs">Training Requirements</Label>
                          <Select>
                            <SelectTrigger id="training-needs">
                              <SelectValue placeholder="Select needs" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="comprehensive">Comprehensive Training Needed</SelectItem>
                              <SelectItem value="refresher">Refresher Training</SelectItem>
                              <SelectItem value="advanced">Advanced Training</SelectItem>
                              <SelectItem value="minimal">Minimal Training</SelectItem>
                              <SelectItem value="staff-trained">Staff Already Trained</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specific Concerns */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Specific Concerns or Requirements</h3>
                    <div className="space-y-2">
                      <Textarea
                        id="concerns"
                        placeholder="List any specific concerns, challenges, requirements, or questions you have about site readiness..."
                        rows={4}
                      />
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
                    Request Site Assessment
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What's Included */}
              <Card className="border-2 border-[#4B2991]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Assessment Includes</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>On-site or virtual facility evaluation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Infrastructure requirements analysis</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Power, HVAC, and environmental checks</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Network and connectivity assessment</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Space planning and layout design</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Regulatory compliance review</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Gap analysis and recommendations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Implementation timeline and budget estimate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="bg-gradient-to-br from-[#7C944B] to-[#4B2991] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">Assessment Process</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex gap-3">
                      <div className="text-2xl">1</div>
                      <div>
                        <div className="mb-1">Request Submission</div>
                        <p className="text-white/80 text-xs">Submit this form with project details</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-2xl">2</div>
                      <div>
                        <div className="mb-1">Initial Consultation</div>
                        <p className="text-white/80 text-xs">48-hour response with next steps</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-2xl">3</div>
                      <div>
                        <div className="mb-1">Site Visit/Assessment</div>
                        <p className="text-white/80 text-xs">On-site or virtual evaluation</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-2xl">4</div>
                      <div>
                        <div className="mb-1">Detailed Report</div>
                        <p className="text-white/80 text-xs">Comprehensive findings and recommendations</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Get Assessed */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Why Get Assessed?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B]">•</span>
                      <span>Avoid costly installation delays and failures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B]">•</span>
                      <span>Ensure equipment operates at peak performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B]">•</span>
                      <span>Plan infrastructure upgrades proactively</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B]">•</span>
                      <span>Meet regulatory and accreditation standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B]">•</span>
                      <span>Accurate budgeting and timeline planning</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="border-2 border-[#7C944B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Questions?</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-1">Site Planning Team</div>
                      <div>planning@pacemhealth.com</div>
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

      {/* Assessment Areas */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Key Assessment Areas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  ⚡
                </div>
                <h3 className="text-lg mb-2">Power & Electrical</h3>
                <p className="text-sm text-muted-foreground">
                  Grid stability, backup power, voltage regulation, and load capacity evaluation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🌐
                </div>
                <h3 className="text-lg mb-2">IT & Connectivity</h3>
                <p className="text-sm text-muted-foreground">
                  Network infrastructure, bandwidth, cybersecurity, and system integration readiness
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🏗️
                </div>
                <h3 className="text-lg mb-2">Physical Infrastructure</h3>
                <p className="text-sm text-muted-foreground">
                  Space, structural integrity, HVAC, plumbing, and environmental conditions
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  ✓
                </div>
                <h3 className="text-lg mb-2">Compliance & Safety</h3>
                <p className="text-sm text-muted-foreground">
                  Regulatory requirements, safety standards, accreditation, and quality protocols
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}