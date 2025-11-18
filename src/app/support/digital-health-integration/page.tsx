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

export default function DigitalHealthIntegrationPage() {
  const [selectedProject, setSelectedProject] = useState<string>('new-implementation');
  const [selectedSolutions, setSelectedSolutions] = useState<string[]>([]);

  const toggleSolution = (value: string) => {
    setSelectedSolutions(prev => 
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
              <span>Digital Health Integration</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Digital Health Integration Request</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Connect your healthcare systems with our digital health platforms. From EMR integration to HMIS connectivity, API development, and data interoperability solutions.
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
                  {/* Project Type */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Type of Digital Health Project *</h3>
                    <RadioGroup value={selectedProject} onValueChange={setSelectedProject}>
                      <div className="space-y-3">
                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedProject === 'new-implementation' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedProject('new-implementation')}
                        >
                          <RadioGroupItem value="new-implementation" id="new-implementation" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="new-implementation" className="cursor-pointer">
                              New System Implementation
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              First-time deployment of digital health platform or EMR/HMIS
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedProject === 'system-integration' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedProject('system-integration')}
                        >
                          <RadioGroupItem value="system-integration" id="system-integration" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="system-integration" className="cursor-pointer">
                              System Integration & Interoperability
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Connect existing systems (EMR, lab, pharmacy, billing, imaging)
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedProject === 'upgrade-migration' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedProject('upgrade-migration')}
                        >
                          <RadioGroupItem value="upgrade-migration" id="upgrade-migration" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="upgrade-migration" className="cursor-pointer">
                              System Upgrade or Migration
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Upgrade existing system or migrate to new platform
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedProject === 'expansion' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedProject('expansion')}
                        >
                          <RadioGroupItem value="expansion" id="expansion" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="expansion" className="cursor-pointer">
                              System Expansion or Scale-Up
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Expand existing system to additional facilities or regions
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedProject === 'consultation' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedProject('consultation')}
                        >
                          <RadioGroupItem value="consultation" id="consultation" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="consultation" className="cursor-pointer">
                              Digital Health Strategy & Consultation
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Assessment, planning, and roadmap development
                            </p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Digital Health Solutions */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Digital Health Solutions Needed *</h3>
                    <div className="space-y-3">
                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedSolutions.includes('emr-ehr') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleSolution('emr-ehr')}
                      >
                        <Checkbox 
                          id="emr-ehr" 
                          checked={selectedSolutions.includes('emr-ehr')} 
                          onCheckedChange={() => toggleSolution('emr-ehr')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="emr-ehr" className="cursor-pointer">
                            Electronic Medical Records (EMR/EHR)
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Patient records, clinical documentation, e-prescribing
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedSolutions.includes('hmis') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleSolution('hmis')}
                      >
                        <Checkbox 
                          id="hmis" 
                          checked={selectedSolutions.includes('hmis')} 
                          onCheckedChange={() => toggleSolution('hmis')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="hmis" className="cursor-pointer">
                            Health Management Information System (HMIS)
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            National/facility reporting, aggregate data, health indicators
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedSolutions.includes('lis') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleSolution('lis')}
                      >
                        <Checkbox 
                          id="lis" 
                          checked={selectedSolutions.includes('lis')} 
                          onCheckedChange={() => toggleSolution('lis')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="lis" className="cursor-pointer">
                            Laboratory Information System (LIS)
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Lab test orders, results, quality control, inventory
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedSolutions.includes('pacs-ris') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleSolution('pacs-ris')}
                      >
                        <Checkbox 
                          id="pacs-ris" 
                          checked={selectedSolutions.includes('pacs-ris')} 
                          onCheckedChange={() => toggleSolution('pacs-ris')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="pacs-ris" className="cursor-pointer">
                            PACS/RIS (Imaging Systems)
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Medical imaging storage, viewing, radiology workflow
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedSolutions.includes('pharmacy') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleSolution('pharmacy')}
                      >
                        <Checkbox 
                          id="pharmacy" 
                          checked={selectedSolutions.includes('pharmacy')} 
                          onCheckedChange={() => toggleSolution('pharmacy')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="pharmacy" className="cursor-pointer">
                            Pharmacy Management System
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Drug inventory, dispensing, prescription tracking
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedSolutions.includes('telemedicine') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleSolution('telemedicine')}
                      >
                        <Checkbox 
                          id="telemedicine" 
                          checked={selectedSolutions.includes('telemedicine')} 
                          onCheckedChange={() => toggleSolution('telemedicine')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="telemedicine" className="cursor-pointer">
                            Telemedicine Platform
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Virtual consultations, remote patient monitoring, teleconsultation
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedSolutions.includes('billing-finance') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleSolution('billing-finance')}
                      >
                        <Checkbox 
                          id="billing-finance" 
                          checked={selectedSolutions.includes('billing-finance')} 
                          onCheckedChange={() => toggleSolution('billing-finance')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="billing-finance" className="cursor-pointer">
                            Billing & Revenue Cycle Management
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Patient billing, claims processing, revenue management
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedSolutions.includes('appointment') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleSolution('appointment')}
                      >
                        <Checkbox 
                          id="appointment" 
                          checked={selectedSolutions.includes('appointment')} 
                          onCheckedChange={() => toggleSolution('appointment')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="appointment" className="cursor-pointer">
                            Appointment & Queue Management
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Patient scheduling, registration, waiting list management
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedSolutions.includes('supply-chain-digital') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleSolution('supply-chain-digital')}
                      >
                        <Checkbox 
                          id="supply-chain-digital" 
                          checked={selectedSolutions.includes('supply-chain-digital')} 
                          onCheckedChange={() => toggleSolution('supply-chain-digital')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="supply-chain-digital" className="cursor-pointer">
                            Supply Chain & Inventory Management
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Medical supplies, equipment tracking, procurement
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedSolutions.includes('analytics') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleSolution('analytics')}
                      >
                        <Checkbox 
                          id="analytics" 
                          checked={selectedSolutions.includes('analytics')} 
                          onCheckedChange={() => toggleSolution('analytics')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="analytics" className="cursor-pointer">
                            Health Analytics & Business Intelligence
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Dashboards, reporting, data visualization, performance management
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedSolutions.includes('mobile-health') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleSolution('mobile-health')}
                      >
                        <Checkbox 
                          id="mobile-health" 
                          checked={selectedSolutions.includes('mobile-health')} 
                          onCheckedChange={() => toggleSolution('mobile-health')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="mobile-health" className="cursor-pointer">
                            Mobile Health (mHealth) Applications
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Community health worker apps, patient portals, health education
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedSolutions.includes('interoperability') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleSolution('interoperability')}
                      >
                        <Checkbox 
                          id="interoperability" 
                          checked={selectedSolutions.includes('interoperability')} 
                          onCheckedChange={() => toggleSolution('interoperability')}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="interoperability" className="cursor-pointer">
                            Health Information Exchange (HIE)
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Cross-facility data sharing, referral networks, patient matching
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Current State */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Current Digital Health Landscape</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-systems">Existing Systems (if any)</Label>
                        <Textarea
                          id="current-systems"
                          placeholder="List any existing digital health systems, platforms, or software currently in use..."
                          rows={3}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="maturity-level">Digital Maturity Level</Label>
                          <Select>
                            <SelectTrigger id="maturity-level">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="no-digital">No Digital Systems (Paper-based)</SelectItem>
                              <SelectItem value="basic">Basic (Spreadsheets, standalone tools)</SelectItem>
                              <SelectItem value="partial">Partial Digital (Some departments digitized)</SelectItem>
                              <SelectItem value="integrated">Integrated (Multiple systems, some interoperability)</SelectItem>
                              <SelectItem value="advanced">Advanced (Fully integrated, data-driven)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="data-migration">Data Migration Needed?</Label>
                          <Select>
                            <SelectTrigger id="data-migration">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="no">No - Starting fresh</SelectItem>
                              <SelectItem value="paper">Yes - From paper records</SelectItem>
                              <SelectItem value="legacy">Yes - From legacy system</SelectItem>
                              <SelectItem value="multiple">Yes - From multiple sources</SelectItem>
                              <SelectItem value="unsure">Not sure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Scope & Coverage */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Project Scope & Coverage</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="coverage-type">Implementation Coverage</Label>
                          <Select>
                            <SelectTrigger id="coverage-type">
                              <SelectValue placeholder="Select coverage" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="single-facility">Single Facility</SelectItem>
                              <SelectItem value="multi-facility">Multiple Facilities (Same organization)</SelectItem>
                              <SelectItem value="district">District/County-wide</SelectItem>
                              <SelectItem value="regional">Regional/Provincial</SelectItem>
                              <SelectItem value="national">National</SelectItem>
                              <SelectItem value="network">Health Network/System</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="facility-count">Number of Facilities</Label>
                          <Input id="facility-count" type="number" placeholder="e.g., 5" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="user-count">Expected Number of Users</Label>
                          <Select>
                            <SelectTrigger id="user-count">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-25">1-25 users</SelectItem>
                              <SelectItem value="26-100">26-100 users</SelectItem>
                              <SelectItem value="101-250">101-250 users</SelectItem>
                              <SelectItem value="251-500">251-500 users</SelectItem>
                              <SelectItem value="501-1000">501-1,000 users</SelectItem>
                              <SelectItem value="1000plus">1,000+ users</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="patient-volume">Daily Patient Volume</Label>
                          <Select>
                            <SelectTrigger id="patient-volume">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-50">Under 50 patients/day</SelectItem>
                              <SelectItem value="50-100">50-100 patients/day</SelectItem>
                              <SelectItem value="101-250">101-250 patients/day</SelectItem>
                              <SelectItem value="251-500">251-500 patients/day</SelectItem>
                              <SelectItem value="500plus">500+ patients/day</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technical Requirements */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Technical Requirements & Infrastructure</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="deployment-model">Preferred Deployment Model</Label>
                          <Select>
                            <SelectTrigger id="deployment-model">
                              <SelectValue placeholder="Select model" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cloud">Cloud-based (SaaS)</SelectItem>
                              <SelectItem value="on-premise">On-Premise (Local servers)</SelectItem>
                              <SelectItem value="hybrid">Hybrid (Cloud + On-premise)</SelectItem>
                              <SelectItem value="unsure">Not sure / Need consultation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="internet-connectivity">Internet Connectivity</Label>
                          <Select>
                            <SelectTrigger id="internet-connectivity">
                              <SelectValue placeholder="Select quality" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="reliable">Reliable high-speed</SelectItem>
                              <SelectItem value="moderate">Moderate/Intermittent</SelectItem>
                              <SelectItem value="limited">Limited/Slow</SelectItem>
                              <SelectItem value="offline">Offline/No internet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Key Technical Requirements</Label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="mobile-access" />
                            <Label htmlFor="mobile-access" className="cursor-pointer">
                              Mobile/tablet accessibility
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="offline-mode" />
                            <Label htmlFor="offline-mode" className="cursor-pointer">
                              Offline mode/sync capabilities
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="multilingual" />
                            <Label htmlFor="multilingual" className="cursor-pointer">
                              Multi-language support
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="api-integration" />
                            <Label htmlFor="api-integration" className="cursor-pointer">
                              API integration with external systems
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="standards" />
                            <Label htmlFor="standards" className="cursor-pointer">
                              International standards compliance (HL7, FHIR, ICD-10)
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="infrastructure-notes">IT Infrastructure Notes</Label>
                        <Textarea
                          id="infrastructure-notes"
                          placeholder="Describe existing IT infrastructure, server capacity, network setup, power reliability, etc."
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Training & Change Management */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Training & Change Management</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="training-needed">Training Requirements</Label>
                          <Select>
                            <SelectTrigger id="training-needed">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="basic">Basic user training</SelectItem>
                              <SelectItem value="comprehensive">Comprehensive all-staff training</SelectItem>
                              <SelectItem value="super-users">Super user / champions training</SelectItem>
                              <SelectItem value="it-admin">IT admin & system administration</SelectItem>
                              <SelectItem value="all">All of the above</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="staff-tech-literacy">Staff Technology Literacy</Label>
                          <Select>
                            <SelectTrigger id="staff-tech-literacy">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="high">High - Comfortable with technology</SelectItem>
                              <SelectItem value="moderate">Moderate - Some computer experience</SelectItem>
                              <SelectItem value="low">Low - Limited tech experience</SelectItem>
                              <SelectItem value="mixed">Mixed - Varies by staff</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="change-management">Change Management Support Needed?</Label>
                        <Select>
                          <SelectTrigger id="change-management">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes - Need comprehensive support</SelectItem>
                            <SelectItem value="partial">Partial - Some support needed</SelectItem>
                            <SelectItem value="no">No - We can manage internally</SelectItem>
                            <SelectItem value="unsure">Not sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Timeline & Budget */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Timeline & Budget</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Desired Implementation Timeline</Label>
                          <Select>
                            <SelectTrigger id="timeline">
                              <SelectValue placeholder="Select timeframe" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">Urgent (0-3 months)</SelectItem>
                              <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                              <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                              <SelectItem value="long">Long-term (12+ months)</SelectItem>
                              <SelectItem value="phased">Phased approach</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget-range">Estimated Budget Range</Label>
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
                              <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                              <SelectItem value="health-network">Health Network/System</SelectItem>
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
                        <Label htmlFor="objectives">Project Goals & Objectives</Label>
                        <Textarea
                          id="objectives"
                          placeholder="What are you hoping to achieve with this digital health implementation? (e.g., improve patient care, reduce wait times, better data for decision-making, etc.)"
                          rows={4}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="challenges">Key Challenges or Concerns</Label>
                        <Textarea
                          id="challenges"
                          placeholder="What challenges do you anticipate? (e.g., staff resistance, connectivity issues, budget constraints, etc.)"
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additional-details">Additional Details or Questions</Label>
                        <Textarea
                          id="additional-details"
                          placeholder="Any other information, specific requirements, or questions..."
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    size="lg"
                    className="w-full bg-[#4B2991] hover:bg-[#3d1e7d]"
                  >
                    Submit Integration Request
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Digital Health Team */}
              <Card className="bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Digital Health Team</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white/80 mb-1">Email</div>
                      <div>digitalhealth@pacemhealth.com</div>
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
                      Free initial consultation and needs assessment
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Why Choose Our Digital Health Solutions?</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Africa-optimized platforms for low-bandwidth environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>End-to-end implementation support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Comprehensive training and change management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Interoperability with existing systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Local technical support and maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Scalable, cost-effective solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Implementation Process */}
              <Card className="border-2 border-[#7C944B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Implementation Process</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">1.</span>
                      <div>
                        <div className="mb-1">Needs Assessment</div>
                        <p className="text-muted-foreground text-xs">
                          Evaluate current state and requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">2.</span>
                      <div>
                        <div className="mb-1">Solution Design</div>
                        <p className="text-muted-foreground text-xs">
                          Custom configuration and planning
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">3.</span>
                      <div>
                        <div className="mb-1">Infrastructure Setup</div>
                        <p className="text-muted-foreground text-xs">
                          Deploy hardware and configure systems
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">4.</span>
                      <div>
                        <div className="mb-1">Training & Go-Live</div>
                        <p className="text-muted-foreground text-xs">
                          Staff training and phased rollout
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991]">5.</span>
                      <div>
                        <div className="mb-1">Support & Optimization</div>
                        <p className="text-muted-foreground text-xs">
                          Ongoing support and continuous improvement
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Success Metrics */}
              <Card className="border-2 border-[#4B2991]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Our Track Record</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl text-[#4B2991] mb-1">200+</div>
                      <p className="text-sm text-muted-foreground">Facilities with digital health platforms</p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="text-2xl text-[#7C944B] mb-1">98%</div>
                      <p className="text-sm text-muted-foreground">User adoption rate after training</p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="text-2xl text-[#4B2991] mb-1">15+</div>
                      <p className="text-sm text-muted-foreground">Countries with implementations</p>
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
                      Digital Health Platform Overview
                    </a>
                    <a href="#" className="block py-2 border-b hover:text-[#4B2991] transition">
                      EMR/HMIS Comparison Guide
                    </a>
                    <a href="#" className="block py-2 border-b hover:text-[#4B2991] transition">
                      Integration Case Studies
                    </a>
                    <a href="#" className="block py-2 hover:text-[#4B2991] transition">
                      Implementation Checklist
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Solutions Overview */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Our Digital Health Solutions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  📋
                </div>
                <h3 className="text-lg mb-2">EMR/EHR Systems</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive electronic medical records with clinical workflows, e-prescribing, and patient portals
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  📊
                </div>
                <h3 className="text-lg mb-2">HMIS & Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Health information systems for facility reporting, indicators tracking, and data-driven decision making
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🔬
                </div>
                <h3 className="text-lg mb-2">LIS & PACS</h3>
                <p className="text-sm text-muted-foreground">
                  Laboratory and imaging systems with quality control, result delivery, and diagnostic workflows
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  💻
                </div>
                <h3 className="text-lg mb-2">Telemedicine</h3>
                <p className="text-sm text-muted-foreground">
                  Virtual care platforms for remote consultations, referrals, and specialist access
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4">Ready to Transform Your Healthcare Delivery?</h2>
          <p className="text-lg text-white/90 mb-8">
            Schedule a free consultation to discuss your digital health needs and explore the right solutions for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#4B2991] hover:bg-white/90"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Request Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}