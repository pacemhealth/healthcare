import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Checkbox } from '../../../components/ui/checkbox';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function RequestEquipmentQuotePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [urgency, setUrgency] = useState('standard');

  const equipmentCategories = [
    { id: 'imaging', name: 'Medical Imaging', subcategories: ['X-Ray Systems', 'Ultrasound', 'CT Scanners', 'MRI'] },
    { id: 'lab', name: 'Laboratory Equipment', subcategories: ['Analyzers', 'Microscopes', 'Centrifuges', 'Incubators'] },
    { id: 'surgical', name: 'Surgical Equipment', subcategories: ['Operating Tables', 'Surgical Lights', 'Anesthesia Machines', 'Electrosurgical Units'] },
    { id: 'patient-monitoring', name: 'Patient Monitoring', subcategories: ['Vital Signs Monitors', 'ECG Machines', 'Pulse Oximeters', 'Fetal Monitors'] },
    { id: 'icu-emergency', name: 'ICU & Emergency', subcategories: ['Ventilators', 'Defibrillators', 'Infusion Pumps', 'Emergency Carts'] },
    { id: 'sterilization', name: 'Sterilization & Infection Control', subcategories: ['Autoclaves', 'Sterilizers', 'Washers', 'UV Systems'] },
    { id: 'hospital-furniture', name: 'Hospital Furniture', subcategories: ['Hospital Beds', 'Examination Tables', 'Trolleys', 'Cabinets'] },
    { id: 'maternal-child', name: 'Maternal & Child Health', subcategories: ['Delivery Beds', 'Infant Warmers', 'Phototherapy Units', 'Neonatal Care'] }
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
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
              <span>Request Equipment Quote</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Request Equipment Quote</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Get a detailed quote for medical equipment tailored to your facility's needs. Our team will provide comprehensive pricing, specifications, and delivery timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form - 2 columns */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl mb-6">Quote Request Details</h2>

                  {/* Organization Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Organization Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="org-name">Organization Name *</Label>
                        <Input id="org-name" placeholder="Hospital or health facility name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="org-type">Organization Type *</Label>
                        <Select>
                          <SelectTrigger id="org-type">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public-hospital">Public Hospital</SelectItem>
                            <SelectItem value="private-hospital">Private Hospital</SelectItem>
                            <SelectItem value="clinic">Clinic</SelectItem>
                            <SelectItem value="health-center">Health Center</SelectItem>
                            <SelectItem value="government">Government Ministry</SelectItem>
                            <SelectItem value="ngo">NGO</SelectItem>
                            <SelectItem value="research">Research Institution</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
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
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City/Region *</Label>
                        <Input id="city" placeholder="City or region" required />
                      </div>
                    </div>
                  </div>

                  {/* Equipment Categories */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Equipment Categories of Interest *</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select all equipment categories you need quotes for
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {equipmentCategories.map((category) => (
                        <div
                          key={category.id}
                          className={`flex items-start space-x-3 p-3 rounded-lg border-2 cursor-pointer transition ${
                            selectedCategories.includes(category.id)
                              ? 'border-[#4B2991] bg-[#4B2991]/5'
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => toggleCategory(category.id)}
                        >
                          <Checkbox
                            id={category.id}
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={() => toggleCategory(category.id)}
                            className="mt-0.5"
                          />
                          <div className="flex-1">
                            <Label htmlFor={category.id} className="cursor-pointer">
                              {category.name}
                            </Label>
                            <p className="text-xs text-muted-foreground mt-1">
                              {category.subcategories.slice(0, 3).join(', ')}
                              {category.subcategories.length > 3 && '...'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Project Details</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select>
                            <SelectTrigger id="budget">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-50k">Under $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                              <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                              <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                              <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Expected Timeline *</Label>
                          <Select>
                            <SelectTrigger id="timeline">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                              <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                              <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                              <SelectItem value="long">Long-term (12+ months)</SelectItem>
                              <SelectItem value="planning">Planning Phase</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="project-description">Project Description *</Label>
                        <Textarea
                          id="project-description"
                          placeholder="Describe your equipment needs, project scope, facility type, and any specific requirements..."
                          rows={5}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="specific-equipment">Specific Equipment (Optional)</Label>
                        <Textarea
                          id="specific-equipment"
                          placeholder="List specific equipment models, quantities, or technical specifications if known..."
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

                  {/* Additional Services */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Additional Services</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="installation" />
                        <div className="space-y-1">
                          <Label htmlFor="installation" className="cursor-pointer">
                            Installation & Commissioning
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Include professional installation and equipment commissioning services
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox id="training" />
                        <div className="space-y-1">
                          <Label htmlFor="training" className="cursor-pointer">
                            Staff Training
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Include comprehensive training for clinical and technical staff
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox id="maintenance" />
                        <div className="space-y-1">
                          <Label htmlFor="maintenance" className="cursor-pointer">
                            Maintenance Contract
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Include ongoing preventive maintenance and technical support
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Checkbox id="warranty" />
                        <div className="space-y-1">
                          <Label htmlFor="warranty" className="cursor-pointer">
                            Extended Warranty
                          </Label>
                          <p className="text-sm text-muted-foreground">
                            Request pricing for extended warranty coverage beyond standard terms
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Attachment Option */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Supporting Documents (Optional)</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <div className="mb-2">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Upload technical specifications, facility plans, or tender documents
                      </p>
                      <p className="text-xs text-muted-foreground mb-4">
                        PDF, DOC, DOCX, XLS, XLSX up to 10MB
                      </p>
                      <Button variant="outline" type="button">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      size="lg"
                      className="flex-1 bg-[#4B2991] hover:bg-[#3d1e7d]"
                    >
                      Submit Quote Request
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="flex-1"
                      type="button"
                    >
                      Save as Draft
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - 1 column */}
            <div className="space-y-6">
              {/* What Happens Next */}
              <Card className="border-2 border-[#4B2991]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-[#4B2991] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        1
                      </div>
                      <div>
                        <div className="mb-1">Instant Confirmation</div>
                        <p className="text-sm text-muted-foreground">
                          Receive immediate confirmation of your quote request
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-[#7C944B] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        2
                      </div>
                      <div>
                        <div className="mb-1">Team Review</div>
                        <p className="text-sm text-muted-foreground">
                          Our specialists review your requirements within 24 hours
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-[#4B2991] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        3
                      </div>
                      <div>
                        <div className="mb-1">Detailed Quote</div>
                        <p className="text-sm text-muted-foreground">
                          Receive comprehensive quote with specifications and pricing
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-[#7C944B] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                        4
                      </div>
                      <div>
                        <div className="mb-1">Consultation Call</div>
                        <p className="text-sm text-muted-foreground">
                          Schedule a call to discuss details and answer questions
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">Fast Response</h3>
                  <div className="text-3xl mb-2">24-48 hours</div>
                  <p className="text-sm text-white/90">
                    Average response time for detailed equipment quotes
                  </p>
                </CardContent>
              </Card>

              {/* Need Help */}
              <Card className="border-2 border-[#7C944B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Not sure what equipment you need? Our team can help you determine the right solutions.
                  </p>
                  <Button variant="outline" className="w-full border-[#7C944B] text-[#7C944B] hover:bg-[#7C944B] hover:text-white">
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Direct Contact</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-1">Email</div>
                      <div>quotes@pacemhealth.com</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Phone</div>
                      <div>+1 (XXX) XXX-XXXX</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Business Hours</div>
                      <div>Mon-Fri: 8AM - 6PM EAT</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pacem Health */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Why Request a Quote from Pacem Health?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Comprehensive Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed quotes including equipment, installation, training, and ongoing support
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Flexible Terms</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple payment options and financing solutions tailored to your budget
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Certified equipment from trusted manufacturers with full warranty coverage
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-2">End-to-End Support</h3>
                <p className="text-sm text-muted-foreground">
                  From delivery and installation to training and ongoing maintenance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}