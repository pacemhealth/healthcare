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

export default function SparePartsRepairPage() {
  const [selectedRequestType, setSelectedRequestType] = useState<string>('repair');
  const [selectedUrgency, setSelectedUrgency] = useState<string>('standard');

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
              <span>Spare Parts or Repair Request</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Spare Parts or Repair Request</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Request genuine OEM spare parts or schedule equipment repair services. Our regional spare parts inventory and certified technicians ensure minimal downtime for your critical healthcare equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  {/* Request Type */}
                  <div className="mb-8">
                    <Label className="text-xl mb-4 block">What do you need? *</Label>
                    <RadioGroup value={selectedRequestType} onValueChange={setSelectedRequestType}>
                      <div 
                        className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedRequestType === 'repair' 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => setSelectedRequestType('repair')}
                      >
                        <RadioGroupItem value="repair" id="repair" />
                        <div className="flex-1">
                          <Label htmlFor="repair" className="cursor-pointer">
                            Equipment Repair Service
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Schedule a technician to repair equipment on-site or arrange pickup
                          </p>
                        </div>
                      </div>
                      <div 
                        className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition mt-3 ${
                          selectedRequestType === 'parts' 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => setSelectedRequestType('parts')}
                      >
                        <RadioGroupItem value="parts" id="parts" />
                        <div className="flex-1">
                          <Label htmlFor="parts" className="cursor-pointer">
                            Spare Parts Only
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Order replacement parts to be shipped to your location
                          </p>
                        </div>
                      </div>
                      <div 
                        className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition mt-3 ${
                          selectedRequestType === 'both' 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => setSelectedRequestType('both')}
                      >
                        <RadioGroupItem value="both" id="both" />
                        <div className="flex-1">
                          <Label htmlFor="both" className="cursor-pointer">
                            Parts + Repair Service
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Order parts and schedule installation by our technicians
                          </p>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Equipment Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Equipment Information</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="equipment-type">Equipment Type *</Label>
                          <Select>
                            <SelectTrigger id="equipment-type">
                              <SelectValue placeholder="Select equipment type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="imaging">Medical Imaging</SelectItem>
                              <SelectItem value="lab">Laboratory Equipment</SelectItem>
                              <SelectItem value="surgical">Surgical Equipment</SelectItem>
                              <SelectItem value="monitoring">Patient Monitoring</SelectItem>
                              <SelectItem value="icu">ICU & Emergency</SelectItem>
                              <SelectItem value="sterilization">Sterilization</SelectItem>
                              <SelectItem value="furniture">Hospital Furniture</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="manufacturer">Manufacturer</Label>
                          <Input id="manufacturer" placeholder="e.g., GE, Philips, Mindray" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="model">Model Number</Label>
                          <Input id="model" placeholder="Equipment model number" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="serial">Serial Number</Label>
                          <Input id="serial" placeholder="Equipment serial number" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="problem-description">Problem Description *</Label>
                        <Textarea
                          id="problem-description"
                          placeholder="Describe the issue, error messages, or specific parts needed..."
                          rows={4}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Urgency Level */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Urgency Level *</h3>
                    <RadioGroup defaultValue="standard" onValueChange={setSelectedUrgency}>
                      <div className="grid sm:grid-cols-3 gap-3">
                        <div className="flex items-start space-x-3 p-3 border-2 rounded-lg cursor-pointer hover:border-[#4B2991]/50">
                          <RadioGroupItem value="emergency" id="emergency" className="mt-1" />
                          <div>
                            <Label htmlFor="emergency" className="cursor-pointer text-red-600">
                              Emergency
                            </Label>
                            <p className="text-xs text-muted-foreground mt-1">
                              Critical equipment down, patient care affected
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-3 border-2 rounded-lg cursor-pointer hover:border-[#4B2991]/50">
                          <RadioGroupItem value="urgent" id="urgent" className="mt-1" />
                          <div>
                            <Label htmlFor="urgent" className="cursor-pointer text-orange-600">
                              Urgent
                            </Label>
                            <p className="text-xs text-muted-foreground mt-1">
                              Need response within 48 hours
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-3 border-2 rounded-lg cursor-pointer hover:border-[#4B2991]/50">
                          <RadioGroupItem value="standard" id="standard" className="mt-1" />
                          <div>
                            <Label htmlFor="standard" className="cursor-pointer">
                              Standard
                            </Label>
                            <p className="text-xs text-muted-foreground mt-1">
                              Normal processing time
                            </p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Facility Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Facility Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="facility-name">Facility Name *</Label>
                        <Input id="facility-name" placeholder="Hospital or clinic name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location *</Label>
                        <Input id="location" placeholder="City, Country" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Input id="department" placeholder="e.g., Radiology, ICU" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="warranty">Under Warranty?</Label>
                        <Select>
                          <SelectTrigger id="warranty">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes, under warranty</SelectItem>
                            <SelectItem value="no">No, out of warranty</SelectItem>
                            <SelectItem value="unknown">Not sure</SelectItem>
                          </SelectContent>
                        </Select>
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
                        <Label htmlFor="contact-email">Email *</Label>
                        <Input id="contact-email" type="email" placeholder="email@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Phone *</Label>
                        <Input id="contact-phone" type="tel" placeholder="+XXX XXX XXX XXX" required />
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Additional Information</h3>
                    <div className="space-y-2">
                      <Label htmlFor="additional-notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="additional-notes"
                        placeholder="Any other relevant information, preferred service dates, or special requirements..."
                        rows={3}
                      />
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
              {/* Response Time */}
              <Card className="bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">Quick Response</h3>
                  <div className="text-3xl mb-2">24 hours</div>
                  <p className="text-sm text-white/90">
                    Standard response time for repair and parts requests
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm">
                      <span className="text-red-200">Emergency?</span><br />
                      Call: +1 (XXX) XXX-XXXX
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-[#4B2991] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        1
                      </div>
                      <div>
                        <p className="text-sm">
                          We review your request and verify part availability or technician scheduling
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-[#7C944B] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        2
                      </div>
                      <div>
                        <p className="text-sm">
                          You receive a quote with pricing, timeline, and next steps
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-[#4B2991] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        3
                      </div>
                      <div>
                        <p className="text-sm">
                          Parts ship or technician is dispatched based on your approval
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services Covered */}
              <Card className="border-2 border-[#7C944B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Services Covered</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B] mt-1">✓</span>
                      <span>Original manufacturer parts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B] mt-1">✓</span>
                      <span>On-site repair services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B] mt-1">✓</span>
                      <span>Remote diagnostics support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B] mt-1">✓</span>
                      <span>Warranty claims processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B] mt-1">✓</span>
                      <span>Express shipping options</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Common Questions</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Do you stock all parts?</h3>
                <p className="text-sm text-muted-foreground">
                  We maintain inventory of common parts and can source specialized components from manufacturers within 7-14 days.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Can I get a technician same-day?</h3>
                <p className="text-sm text-muted-foreground">
                  For emergency requests, we dispatch technicians within 4-8 hours in major cities where we have local teams.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">What about warranty repairs?</h3>
                <p className="text-sm text-muted-foreground">
                  Equipment under warranty receives priority processing at no charge for parts and labor covered under warranty terms.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">How much do repairs cost?</h3>
                <p className="text-sm text-muted-foreground">
                  We provide detailed quotes before proceeding. Costs vary based on equipment type, parts needed, and service level.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}