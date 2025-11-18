import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Checkbox } from '../../../components/ui/checkbox';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function RequestEquipmentDemoPage() {
  const [selectedDemoFormat, setSelectedDemoFormat] = useState<string>('virtual');
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);

  const toggleEquipment = (value: string) => {
    setSelectedEquipment(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

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
              <span>Request Equipment Demo</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Request Equipment Demo</h1>
            <p className="text-lg sm:text-xl text-white/90">
              See our medical equipment in action. Schedule a live demonstration—virtual, in-person at our facilities, or on-site at your location.
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
                  {/* Demo Format */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Preferred Demo Format *</h3>
                    <RadioGroup value={selectedDemoFormat} onValueChange={setSelectedDemoFormat}>
                      <div className="space-y-3">
                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedDemoFormat === 'virtual' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedDemoFormat('virtual')}
                        >
                          <RadioGroupItem value="virtual" id="virtual" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="virtual" className="cursor-pointer">
                              Virtual Demo (Online)
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Live video demonstration with our product specialists via Zoom/Teams
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedDemoFormat === 'showroom' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedDemoFormat('showroom')}
                        >
                          <RadioGroupItem value="showroom" id="showroom" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="showroom" className="cursor-pointer">
                              In-Person at Our Facility
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Visit our demonstration center or regional office
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedDemoFormat === 'onsite' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedDemoFormat('onsite')}
                        >
                          <RadioGroupItem value="onsite" id="onsite" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="onsite" className="cursor-pointer">
                              On-Site at Your Facility
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              We bring the equipment to your location for hands-on demonstration
                            </p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Equipment Interest */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Equipment of Interest *</h3>
                    <div className="space-y-3">
                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedEquipment.includes('diagnostic-imaging') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleEquipment('diagnostic-imaging')}
                      >
                        <Checkbox 
                          id="diagnostic-imaging" 
                          checked={selectedEquipment.includes('diagnostic-imaging')} 
                          onCheckedChange={() => toggleEquipment('diagnostic-imaging')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="diagnostic-imaging" className="cursor-pointer">
                            Diagnostic Imaging
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            X-ray, ultrasound, CT, MRI systems
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedEquipment.includes('laboratory') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleEquipment('laboratory')}
                      >
                        <Checkbox 
                          id="laboratory" 
                          checked={selectedEquipment.includes('laboratory')} 
                          onCheckedChange={() => toggleEquipment('laboratory')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="laboratory" className="cursor-pointer">
                            Laboratory Equipment
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Analyzers, microscopes, centrifuges, incubators
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedEquipment.includes('patient-monitoring') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleEquipment('patient-monitoring')}
                      >
                        <Checkbox 
                          id="patient-monitoring" 
                          checked={selectedEquipment.includes('patient-monitoring')} 
                          onCheckedChange={() => toggleEquipment('patient-monitoring')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="patient-monitoring" className="cursor-pointer">
                            Patient Monitoring
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Vital signs monitors, telemetry, bedside systems
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedEquipment.includes('surgical') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleEquipment('surgical')}
                      >
                        <Checkbox 
                          id="surgical" 
                          checked={selectedEquipment.includes('surgical')} 
                          onCheckedChange={() => toggleEquipment('surgical')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="surgical" className="cursor-pointer">
                            Surgical Equipment
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Operating tables, lights, electrosurgical units
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedEquipment.includes('icu-emergency') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleEquipment('icu-emergency')}
                      >
                        <Checkbox 
                          id="icu-emergency" 
                          checked={selectedEquipment.includes('icu-emergency')} 
                          onCheckedChange={() => toggleEquipment('icu-emergency')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="icu-emergency" className="cursor-pointer">
                            ICU & Emergency Equipment
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Ventilators, defibrillators, anesthesia machines
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedEquipment.includes('maternal-child') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleEquipment('maternal-child')}
                      >
                        <Checkbox 
                          id="maternal-child" 
                          checked={selectedEquipment.includes('maternal-child')} 
                          onCheckedChange={() => toggleEquipment('maternal-child')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="maternal-child" className="cursor-pointer">
                            Maternal & Child Health
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Fetal monitors, incubators, delivery beds
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedEquipment.includes('digital-platforms') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleEquipment('digital-platforms')}
                      >
                        <Checkbox 
                          id="digital-platforms" 
                          checked={selectedEquipment.includes('digital-platforms')} 
                          onCheckedChange={() => toggleEquipment('digital-platforms')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="digital-platforms" className="cursor-pointer">
                            Digital Health Platforms
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            EMR, HMIS, telemedicine, PACS systems
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedEquipment.includes('sterilization') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleEquipment('sterilization')}
                      >
                        <Checkbox 
                          id="sterilization" 
                          checked={selectedEquipment.includes('sterilization')} 
                          onCheckedChange={() => toggleEquipment('sterilization')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="sterilization" className="cursor-pointer">
                            Sterilization & Infection Control
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Autoclaves, washer-disinfectors, UV systems
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <Label htmlFor="specific-products">Specific Products or Models</Label>
                      <Textarea
                        id="specific-products"
                        placeholder="List specific equipment models or products you'd like to see demonstrated..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Demonstration Focus */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">What would you like to focus on?</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="focus-features" />
                        <Label htmlFor="focus-features" className="cursor-pointer">
                          Product features and functionality
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="focus-workflow" />
                        <Label htmlFor="focus-workflow" className="cursor-pointer">
                          Clinical workflow integration
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="focus-training" />
                        <Label htmlFor="focus-training" className="cursor-pointer">
                          Ease of use and training requirements
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="focus-maintenance" />
                        <Label htmlFor="focus-maintenance" className="cursor-pointer">
                          Maintenance and support options
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="focus-comparison" />
                        <Label htmlFor="focus-comparison" className="cursor-pointer">
                          Comparison with other models/brands
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="focus-customization" />
                        <Label htmlFor="focus-customization" className="cursor-pointer">
                          Customization and configuration options
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Organization & Attendees */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Organization & Attendees</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="org-name">Organization Name *</Label>
                          <Input id="org-name" placeholder="Hospital, clinic, or institution" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="org-type">Organization Type</Label>
                          <Select>
                            <SelectTrigger id="org-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="government-hospital">Government Hospital</SelectItem>
                              <SelectItem value="private-hospital">Private Hospital</SelectItem>
                              <SelectItem value="health-center">Health Center/Clinic</SelectItem>
                              <SelectItem value="diagnostic-center">Diagnostic Center</SelectItem>
                              <SelectItem value="government-ministry">Government Ministry/Agency</SelectItem>
                              <SelectItem value="distributor">Distributor/Reseller</SelectItem>
                              <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="country">Country/Region *</Label>
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
                          <Label htmlFor="city">City</Label>
                          <Input id="city" placeholder="Your city" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="attendee-count">Expected Number of Attendees</Label>
                          <Select>
                            <SelectTrigger id="attendee-count">
                              <SelectValue placeholder="Select number" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-2">1-2 people</SelectItem>
                              <SelectItem value="3-5">3-5 people</SelectItem>
                              <SelectItem value="6-10">6-10 people</SelectItem>
                              <SelectItem value="11-20">11-20 people</SelectItem>
                              <SelectItem value="20plus">20+ people</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="attendee-roles">Attendee Roles</Label>
                          <Input id="attendee-roles" placeholder="e.g., Doctors, nurses, administrators" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timing Preferences */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Timing Preferences</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="timeframe">Preferred Timeframe *</Label>
                          <Select>
                            <SelectTrigger id="timeframe">
                              <SelectValue placeholder="Select timeframe" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="this-week">This Week</SelectItem>
                              <SelectItem value="next-week">Next Week</SelectItem>
                              <SelectItem value="within-2-weeks">Within 2 Weeks</SelectItem>
                              <SelectItem value="within-month">Within a Month</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferred-date">Preferred Date(s)</Label>
                          <Input id="preferred-date" type="date" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time-preferences">Time Preferences or Additional Scheduling Notes</Label>
                        <Textarea
                          id="time-preferences"
                          placeholder="e.g., Morning sessions preferred, available Tuesday-Thursday, need 2-hour window, etc."
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Additional Information</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="purchase-timeline">Purchase Timeline</Label>
                        <Select>
                          <SelectTrigger id="purchase-timeline">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (0-3 months)</SelectItem>
                            <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                            <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                            <SelectItem value="long">Long-term (12+ months)</SelectItem>
                            <SelectItem value="research">Research/Exploratory</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget-range">Estimated Budget Range (Optional)</Label>
                        <Select>
                          <SelectTrigger id="budget-range">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-50k">Under $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                            <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                            <SelectItem value="over-500k">Over $500,000</SelectItem>
                            <SelectItem value="tbd">To Be Determined</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="special-requests">Special Requests or Questions</Label>
                        <Textarea
                          id="special-requests"
                          placeholder="Any specific requirements, questions, or information you'd like to share with our team..."
                          rows={4}
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
                    Request Demo
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Demo Benefits */}
              <Card className="bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Why Request a Demo?</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✓</span>
                      <span>Hands-on experience with equipment before purchasing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✓</span>
                      <span>Ask questions directly to product specialists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✓</span>
                      <span>See how equipment integrates into your workflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✓</span>
                      <span>Compare multiple products side-by-side</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✓</span>
                      <span>Get customized pricing and financing options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Demo Options */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Demo Options</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="mb-1">Virtual Demos</div>
                      <p className="text-muted-foreground text-xs">
                        Live online sessions via Zoom or Teams. Perfect for initial exploration and quick assessments.
                      </p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="mb-1">Showroom Visits</div>
                      <p className="text-muted-foreground text-xs">
                        Visit our demonstration centers in major cities. See multiple products in a controlled environment.
                      </p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="mb-1">On-Site Demos</div>
                      <p className="text-muted-foreground text-xs">
                        We bring equipment to your facility. Ideal for evaluating in your actual environment.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border-2 border-[#7C944B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">Quick Response</h3>
                  <div className="text-3xl text-[#4B2991] mb-2">24 hours</div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Average response time to schedule your demonstration
                  </p>
                  <div className="pt-4 border-t">
                    <p className="text-sm">
                      Our product specialists will contact you to confirm timing and prepare a customized demo.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">What to Expect</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">1.</span>
                      <div>
                        <div className="mb-1">Pre-Demo Consultation</div>
                        <p className="text-muted-foreground text-xs">
                          We'll discuss your needs to customize the demo
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">2.</span>
                      <div>
                        <div className="mb-1">Live Demonstration</div>
                        <p className="text-muted-foreground text-xs">
                          Hands-on experience with full functionality
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">3.</span>
                      <div>
                        <div className="mb-1">Q&A Session</div>
                        <p className="text-muted-foreground text-xs">
                          Ask technical, pricing, and support questions
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">4.</span>
                      <div>
                        <div className="mb-1">Follow-Up Materials</div>
                        <p className="text-muted-foreground text-xs">
                          Detailed specs, pricing, and proposal if needed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="border-2 border-[#4B2991]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Need Help?</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-1">Sales Team</div>
                      <div>sales@pacemhealth.com</div>
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

      {/* Demo Locations */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Our Demonstration Centers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🇳🇬
                </div>
                <h3 className="text-lg mb-2">Nigeria</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Lagos & Abuja Showrooms
                </p>
                <p className="text-xs text-muted-foreground">
                  Full range of diagnostic, surgical, and laboratory equipment
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🇰🇪
                </div>
                <h3 className="text-lg mb-2">Kenya</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Nairobi Demonstration Center
                </p>
                <p className="text-xs text-muted-foreground">
                  Regional hub for East Africa with extensive product range
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🇬🇭
                </div>
                <h3 className="text-lg mb-2">Ghana</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Accra Product Showcase
                </p>
                <p className="text-xs text-muted-foreground">
                  Specializing in maternal health and primary care equipment
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🇿🇦
                </div>
                <h3 className="text-lg mb-2">South Africa</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Johannesburg Training Facility
                </p>
                <p className="text-xs text-muted-foreground">
                  Advanced imaging and digital health platform demonstrations
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Can't visit a showroom? We offer virtual demos and on-site demonstrations across all African countries.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}