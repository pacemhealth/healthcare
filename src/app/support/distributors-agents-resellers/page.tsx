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

export default function DistributorsAgentsResellersPage() {
  const [selectedPartnership, setSelectedPartnership] = useState<string>('distributor');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleProduct = (value: string) => {
    setSelectedProducts(prev => 
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
              <span>Distributors, Agents, Resellers</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Distributors, Agents, or Resellers</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Join Pacem Health's growing distribution network. We partner with qualified distributors, authorized agents, and resellers to expand access to quality medical equipment across Africa.
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
                            selectedPartnership === 'distributor' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedPartnership('distributor')}
                        >
                          <RadioGroupItem value="distributor" id="distributor" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="distributor" className="cursor-pointer">
                              Authorized Distributor
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Exclusive or non-exclusive distribution rights for specific territory
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedPartnership === 'regional-agent' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedPartnership('regional-agent')}
                        >
                          <RadioGroupItem value="regional-agent" id="regional-agent" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="regional-agent" className="cursor-pointer">
                              Regional Sales Agent
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Commission-based representation in specific region or market segment
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedPartnership === 'value-added-reseller' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedPartnership('value-added-reseller')}
                        >
                          <RadioGroupItem value="value-added-reseller" id="value-added-reseller" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="value-added-reseller" className="cursor-pointer">
                              Value-Added Reseller (VAR)
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Resell with additional services (installation, training, integration)
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedPartnership === 'systems-integrator' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedPartnership('systems-integrator')}
                        >
                          <RadioGroupItem value="systems-integrator" id="systems-integrator" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="systems-integrator" className="cursor-pointer">
                              Systems Integrator Partner
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Integrate our products into larger health system projects
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedPartnership === 'dealer' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedPartnership('dealer')}
                        >
                          <RadioGroupItem value="dealer" id="dealer" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="dealer" className="cursor-pointer">
                              Authorized Dealer/Retailer
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Local dealer for direct sales to end-users
                            </p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Product Categories of Interest */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Product Categories of Interest *</h3>
                    <div className="space-y-3">
                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedProducts.includes('diagnostic-imaging') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleProduct('diagnostic-imaging')}
                      >
                        <Checkbox 
                          id="diagnostic-imaging" 
                          checked={selectedProducts.includes('diagnostic-imaging')} 
                          onCheckedChange={() => toggleProduct('diagnostic-imaging')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="diagnostic-imaging" className="cursor-pointer">
                            Diagnostic Imaging Equipment
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            X-ray, ultrasound, CT, MRI, mammography systems
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedProducts.includes('laboratory') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleProduct('laboratory')}
                      >
                        <Checkbox 
                          id="laboratory" 
                          checked={selectedProducts.includes('laboratory')} 
                          onCheckedChange={() => toggleProduct('laboratory')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="laboratory" className="cursor-pointer">
                            Laboratory Equipment
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Analyzers, centrifuges, microscopes, lab consumables
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedProducts.includes('surgical') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleProduct('surgical')}
                      >
                        <Checkbox 
                          id="surgical" 
                          checked={selectedProducts.includes('surgical')} 
                          onCheckedChange={() => toggleProduct('surgical')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="surgical" className="cursor-pointer">
                            Surgical & Operating Room Equipment
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Operating tables, surgical lights, anesthesia machines, OR equipment
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedProducts.includes('patient-monitoring') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleProduct('patient-monitoring')}
                      >
                        <Checkbox 
                          id="patient-monitoring" 
                          checked={selectedProducts.includes('patient-monitoring')} 
                          onCheckedChange={() => toggleProduct('patient-monitoring')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="patient-monitoring" className="cursor-pointer">
                            Patient Monitoring Systems
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Vital signs monitors, ECG, pulse oximeters, telemetry
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedProducts.includes('maternal-child-equipment') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleProduct('maternal-child-equipment')}
                      >
                        <Checkbox 
                          id="maternal-child-equipment" 
                          checked={selectedProducts.includes('maternal-child-equipment')} 
                          onCheckedChange={() => toggleProduct('maternal-child-equipment')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="maternal-child-equipment" className="cursor-pointer">
                            Maternal & Child Health Equipment
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Incubators, phototherapy, fetal monitors, delivery beds
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedProducts.includes('emergency-trauma') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleProduct('emergency-trauma')}
                      >
                        <Checkbox 
                          id="emergency-trauma" 
                          checked={selectedProducts.includes('emergency-trauma')} 
                          onCheckedChange={() => toggleProduct('emergency-trauma')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="emergency-trauma" className="cursor-pointer">
                            Emergency & Trauma Equipment
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Defibrillators, ventilators, emergency carts, trauma equipment
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedProducts.includes('sterilization') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleProduct('sterilization')}
                      >
                        <Checkbox 
                          id="sterilization" 
                          checked={selectedProducts.includes('sterilization')} 
                          onCheckedChange={() => toggleProduct('sterilization')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="sterilization" className="cursor-pointer">
                            Sterilization & Infection Control
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Autoclaves, sterilizers, disinfection equipment
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedProducts.includes('hospital-furniture') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleProduct('hospital-furniture')}
                      >
                        <Checkbox 
                          id="hospital-furniture" 
                          checked={selectedProducts.includes('hospital-furniture')} 
                          onCheckedChange={() => toggleProduct('hospital-furniture')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="hospital-furniture" className="cursor-pointer">
                            Hospital Furniture & Furnishings
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Hospital beds, stretchers, medical carts, exam tables
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedProducts.includes('digital-health-products') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleProduct('digital-health-products')}
                      >
                        <Checkbox 
                          id="digital-health-products" 
                          checked={selectedProducts.includes('digital-health-products')} 
                          onCheckedChange={() => toggleProduct('digital-health-products')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="digital-health-products" className="cursor-pointer">
                            Digital Health Solutions
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            EMR/HMIS software, telemedicine platforms, health IT systems
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedProducts.includes('rehabilitation') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleProduct('rehabilitation')}
                      >
                        <Checkbox 
                          id="rehabilitation" 
                          checked={selectedProducts.includes('rehabilitation')} 
                          onCheckedChange={() => toggleProduct('rehabilitation')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="rehabilitation" className="cursor-pointer">
                            Rehabilitation & Physiotherapy
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            PT equipment, mobility aids, rehabilitation systems
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedProducts.includes('dental') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleProduct('dental')}
                      >
                        <Checkbox 
                          id="dental" 
                          checked={selectedProducts.includes('dental')} 
                          onCheckedChange={() => toggleProduct('dental')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="dental" className="cursor-pointer">
                            Dental Equipment
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Dental chairs, units, instruments, imaging
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedProducts.includes('consumables') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleProduct('consumables')}
                      >
                        <Checkbox 
                          id="consumables" 
                          checked={selectedProducts.includes('consumables')} 
                          onCheckedChange={() => toggleProduct('consumables')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="consumables" className="cursor-pointer">
                            Medical Supplies & Consumables
                          </Label>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Disposables, PPE, surgical supplies, reagents
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Geographic Territory */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Geographic Territory</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="target-territory">Target Territory/Market *</Label>
                          <Select>
                            <SelectTrigger id="target-territory">
                              <SelectValue placeholder="Select primary territory" />
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
                              <SelectItem value="cote-ivoire">Côte d'Ivoire</SelectItem>
                              <SelectItem value="drc">Democratic Republic of Congo</SelectItem>
                              <SelectItem value="cameroon">Cameroon</SelectItem>
                              <SelectItem value="zambia">Zambia</SelectItem>
                              <SelectItem value="zimbabwe">Zimbabwe</SelectItem>
                              <SelectItem value="mozambique">Mozambique</SelectItem>
                              <SelectItem value="west-africa">West Africa (Regional)</SelectItem>
                              <SelectItem value="east-africa">East Africa (Regional)</SelectItem>
                              <SelectItem value="southern-africa">Southern Africa (Regional)</SelectItem>
                              <SelectItem value="central-africa">Central Africa (Regional)</SelectItem>
                              <SelectItem value="multiple">Multiple Countries</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="exclusivity">Exclusivity Preference</Label>
                          <Select>
                            <SelectTrigger id="exclusivity">
                              <SelectValue placeholder="Select preference" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="exclusive">Exclusive Territory Rights</SelectItem>
                              <SelectItem value="semi-exclusive">Semi-Exclusive (Limited distributors)</SelectItem>
                              <SelectItem value="non-exclusive">Non-Exclusive</SelectItem>
                              <SelectItem value="open">Open to Discussion</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additional-territories">Additional Territories or Cities</Label>
                        <Textarea
                          id="additional-territories"
                          placeholder="List any additional regions, provinces, or cities you want to cover..."
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Company Information</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company-name">Company Name *</Label>
                          <Input id="company-name" placeholder="Your company name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company-type">Company Type</Label>
                          <Select>
                            <SelectTrigger id="company-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="medical-distributor">Medical Equipment Distributor</SelectItem>
                              <SelectItem value="pharma-distributor">Pharmaceutical Distributor</SelectItem>
                              <SelectItem value="health-systems">Health Systems Integrator</SelectItem>
                              <SelectItem value="dealer">Medical Equipment Dealer</SelectItem>
                              <SelectItem value="engineering">Medical Engineering Company</SelectItem>
                              <SelectItem value="trading">Trading/Import-Export Company</SelectItem>
                              <SelectItem value="consulting">Healthcare Consulting Firm</SelectItem>
                              <SelectItem value="service-provider">Healthcare Service Provider</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="headquarters-country">Headquarters Country *</Label>
                          <Input id="headquarters-country" placeholder="Country where your company is based" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="headquarters-city">City</Label>
                          <Input id="headquarters-city" placeholder="City" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="years-in-business">Years in Business</Label>
                          <Select>
                            <SelectTrigger id="years-in-business">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-2">0-2 years (Startup)</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="6-10">6-10 years</SelectItem>
                              <SelectItem value="11-20">11-20 years</SelectItem>
                              <SelectItem value="20plus">20+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company-size">Number of Employees</Label>
                          <Select>
                            <SelectTrigger id="company-size">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">1-10 employees</SelectItem>
                              <SelectItem value="11-50">11-50 employees</SelectItem>
                              <SelectItem value="51-100">51-100 employees</SelectItem>
                              <SelectItem value="101-250">101-250 employees</SelectItem>
                              <SelectItem value="250plus">250+ employees</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company-website">Company Website</Label>
                        <Input id="company-website" type="url" placeholder="https://" />
                      </div>
                    </div>
                  </div>

                  {/* Sales & Distribution Capabilities */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Sales & Distribution Capabilities</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="sales-team-size">Sales Team Size</Label>
                          <Select>
                            <SelectTrigger id="sales-team-size">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-5">1-5 sales staff</SelectItem>
                              <SelectItem value="6-15">6-15 sales staff</SelectItem>
                              <SelectItem value="16-30">16-30 sales staff</SelectItem>
                              <SelectItem value="30plus">30+ sales staff</SelectItem>
                              <SelectItem value="building">Building team</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="annual-revenue">Estimated Annual Revenue (USD)</Label>
                          <Select>
                            <SelectTrigger id="annual-revenue">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-500k">Under $500,000</SelectItem>
                              <SelectItem value="500k-2m">$500,000 - $2 Million</SelectItem>
                              <SelectItem value="2m-10m">$2 Million - $10 Million</SelectItem>
                              <SelectItem value="10m-50m">$10 Million - $50 Million</SelectItem>
                              <SelectItem value="over-50m">Over $50 Million</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Distribution Infrastructure</Label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="warehouse" />
                            <Label htmlFor="warehouse" className="cursor-pointer">
                              Warehouse/storage facility
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="delivery-fleet" />
                            <Label htmlFor="delivery-fleet" className="cursor-pointer">
                              Delivery fleet/logistics network
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="service-team" />
                            <Label htmlFor="service-team" className="cursor-pointer">
                              Technical service team
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="showroom" />
                            <Label htmlFor="showroom" className="cursor-pointer">
                              Showroom/demo facility
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="regional-offices" />
                            <Label htmlFor="regional-offices" className="cursor-pointer">
                              Regional offices/branches
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="target-customers">Primary Customer Segments</Label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="govt-hospitals" />
                            <Label htmlFor="govt-hospitals" className="cursor-pointer">
                              Government hospitals
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="private-hospitals" />
                            <Label htmlFor="private-hospitals" className="cursor-pointer">
                              Private hospitals
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="clinics" />
                            <Label htmlFor="clinics" className="cursor-pointer">
                              Clinics and health centers
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="diagnostic-centers" />
                            <Label htmlFor="diagnostic-centers" className="cursor-pointer">
                              Diagnostic centers
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="ngos" />
                            <Label htmlFor="ngos" className="cursor-pointer">
                              NGOs and donor-funded projects
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience & Track Record */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Experience & Track Record</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-brands">Current Medical Equipment Brands/Lines Represented</Label>
                        <Textarea
                          id="current-brands"
                          placeholder="List brands or product lines you currently distribute (if any)..."
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="major-clients">Major Clients or Projects (Optional)</Label>
                        <Textarea
                          id="major-clients"
                          placeholder="List some of your major clients, projects, or reference accounts..."
                          rows={3}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="certifications">Certifications & Licenses</Label>
                          <Select>
                            <SelectTrigger id="certifications">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="licensed">Licensed medical equipment distributor</SelectItem>
                              <SelectItem value="iso-certified">ISO certified</SelectItem>
                              <SelectItem value="both">Both licensed and certified</SelectItem>
                              <SelectItem value="in-process">Certifications in process</SelectItem>
                              <SelectItem value="none">Not yet certified</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="technical-capability">Technical/Service Capability</Label>
                          <Select>
                            <SelectTrigger id="technical-capability">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="full-service">Full installation & maintenance team</SelectItem>
                              <SelectItem value="basic-service">Basic installation capability</SelectItem>
                              <SelectItem value="sales-only">Sales only (no technical team)</SelectItem>
                              <SelectItem value="partner">Partner with service providers</SelectItem>
                              <SelectItem value="building">Building capability</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Financial & Business Terms */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Financial Capability & Business Terms</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="initial-investment">Initial Investment Capability</Label>
                          <Select>
                            <SelectTrigger id="initial-investment">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-50k">Under $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                              <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                              <SelectItem value="over-500k">Over $500,000</SelectItem>
                              <SelectItem value="tbd">To Be Discussed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="payment-terms">Preferred Payment Terms</Label>
                          <Select>
                            <SelectTrigger id="payment-terms">
                              <SelectValue placeholder="Select preference" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="prepayment">Prepayment</SelectItem>
                              <SelectItem value="net-30">Net 30 days</SelectItem>
                              <SelectItem value="net-60">Net 60 days</SelectItem>
                              <SelectItem value="consignment">Consignment basis</SelectItem>
                              <SelectItem value="flexible">Flexible/Negotiable</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="projected-volume">Projected Annual Sales Volume</Label>
                        <Select>
                          <SelectTrigger id="projected-volume">
                            <SelectValue placeholder="Select projected volume" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-100k">Under $100,000</SelectItem>
                            <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                            <SelectItem value="500k-1m">$500,000 - $1 Million</SelectItem>
                            <SelectItem value="1m-5m">$1 Million - $5 Million</SelectItem>
                            <SelectItem value="over-5m">Over $5 Million</SelectItem>
                            <SelectItem value="tbd">To Be Determined</SelectItem>
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
                        <Label htmlFor="contact-email">Email Address *</Label>
                        <Input id="contact-email" type="email" placeholder="email@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Phone Number *</Label>
                        <Input id="contact-phone" type="tel" placeholder="+XXX XXX XXX XXX" required />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Additional Information</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="why-partner">Why Do You Want to Partner with Pacem Health?</Label>
                        <Textarea
                          id="why-partner"
                          placeholder="Tell us about your interest in representing Pacem Health and your vision for the partnership..."
                          rows={4}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="competitive-advantage">Your Competitive Advantages in the Market</Label>
                        <Textarea
                          id="competitive-advantage"
                          placeholder="What makes your company uniquely positioned to successfully distribute our products? (e.g., market knowledge, relationships, infrastructure, etc.)"
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="support-needed">Support & Training Needs</Label>
                        <Textarea
                          id="support-needed"
                          placeholder="What support, training, or resources would you need from Pacem Health to be successful?"
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additional-comments">Additional Comments or Questions</Label>
                        <Textarea
                          id="additional-comments"
                          placeholder="Any other information you'd like to share..."
                          rows={2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    size="lg"
                    className="w-full bg-[#4B2991] hover:bg-[#3d1e7d]"
                  >
                    Submit Partnership Application
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Partner Relations Contact */}
              <Card className="bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Partner Relations</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white/80 mb-1">Email</div>
                      <div>partners@pacemhealth.com</div>
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
                      We review partnership applications within 5 business days
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Partnership Benefits */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Partnership Benefits</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Competitive pricing and margins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Comprehensive product training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Marketing and sales support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Territory protection (for exclusive partners)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Technical and after-sales support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Access to demo equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Co-branding opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Regular product updates and launches</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Ideal Partner Profile */}
              <Card className="border-2 border-[#7C944B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Ideal Partner Profile</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We seek partners who are:
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">•</span>
                      <span>Established in medical equipment distribution</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">•</span>
                      <span>Well-connected with healthcare facilities</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">•</span>
                      <span>Committed to quality and compliance</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">•</span>
                      <span>Have technical service capabilities</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">•</span>
                      <span>Aligned with our mission to strengthen healthcare in Africa</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Partnership Process */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Partnership Process</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">1.</span>
                      <div>
                        <div className="mb-1">Submit Application</div>
                        <p className="text-muted-foreground text-xs">
                          Complete the partnership form
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">2.</span>
                      <div>
                        <div className="mb-1">Initial Review</div>
                        <p className="text-muted-foreground text-xs">
                          We evaluate your application (5 business days)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">3.</span>
                      <div>
                        <div className="mb-1">Discussion & Due Diligence</div>
                        <p className="text-muted-foreground text-xs">
                          Video call and mutual evaluation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">4.</span>
                      <div>
                        <div className="mb-1">Agreement & Onboarding</div>
                        <p className="text-muted-foreground text-xs">
                          Contract signing and partner training
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">5.</span>
                      <div>
                        <div className="mb-1">Go to Market</div>
                        <p className="text-muted-foreground text-xs">
                          Launch partnership with full support
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resources */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Resources</h3>
                  <div className="space-y-2 text-sm">
                    <a href="#" className="block py-2 border-b hover:text-[#4B2991] transition">
                      Partner Program Overview
                    </a>
                    <a href="#" className="block py-2 border-b hover:text-[#4B2991] transition">
                      Product Catalog
                    </a>
                    <a href="#" className="block py-2 border-b hover:text-[#4B2991] transition">
                      Territory Availability Map
                    </a>
                    <a href="#" className="block py-2 hover:text-[#4B2991] transition">
                      Partnership FAQ
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Partnership Models</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🏢
                </div>
                <h3 className="text-lg mb-2">Exclusive Distributor</h3>
                <p className="text-sm text-muted-foreground">
                  Territory-exclusive rights to distribute our full product portfolio
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🤝
                </div>
                <h3 className="text-lg mb-2">Regional Agent</h3>
                <p className="text-sm text-muted-foreground">
                  Commission-based sales representation in specific markets or sectors
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  ⚙️
                </div>
                <h3 className="text-lg mb-2">Value-Added Reseller</h3>
                <p className="text-sm text-muted-foreground">
                  Resell with installation, training, and integration services
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🔧
                </div>
                <h3 className="text-lg mb-2">Systems Integrator</h3>
                <p className="text-sm text-muted-foreground">
                  Incorporate our solutions into larger health system implementations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Why Partner with Pacem Health?</h2>
            <p className="text-lg text-muted-foreground">
              Join a mission-driven company strengthening healthcare across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-[#4B2991]/10 rounded-lg flex items-center justify-center text-[#4B2991] mb-3">
                    <span className="text-xl">🎯</span>
                  </div>
                  <h3 className="text-lg mb-2">Quality Products</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Premium medical equipment from trusted global manufacturers, rigorously vetted for African healthcare settings with full regulatory compliance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-[#7C944B]/10 rounded-lg flex items-center justify-center text-[#7C944B] mb-3">
                    <span className="text-xl">📈</span>
                  </div>
                  <h3 className="text-lg mb-2">Growing Market</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tap into Africa's rapidly expanding healthcare market with strong government investment and donor funding for health infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-[#4B2991]/10 rounded-lg flex items-center justify-center text-[#4B2991] mb-3">
                    <span className="text-xl">💼</span>
                  </div>
                  <h3 className="text-lg mb-2">Strong Support</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Comprehensive partner support including training, marketing materials, technical assistance, and ongoing business development guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4">Ready to Grow Together?</h2>
          <p className="text-lg text-white/90 mb-8">
            Join Pacem Health's distribution network and be part of strengthening healthcare systems across Africa. Apply now to become an authorized partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#4B2991] hover:bg-white/90"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Apply for Partnership
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Download Partner Kit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}