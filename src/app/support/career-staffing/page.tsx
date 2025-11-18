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

export default function CareerStaffingPage() {
  const [selectedInquiryType, setSelectedInquiryType] = useState<string>('career');
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const toggleArea = (value: string) => {
    setSelectedAreas(prev => 
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
              <span>Career & Staffing Inquiry</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Career & Staffing Inquiry</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Join our mission to strengthen healthcare systems across Africa. Explore career opportunities, apply for positions, or inquire about temporary clinical or technical staffing solutions.
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
                    <h3 className="text-xl mb-4 pb-2 border-b">I'm interested in: *</h3>
                    <RadioGroup value={selectedInquiryType} onValueChange={setSelectedInquiryType}>
                      <div className="space-y-3">
                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiryType === 'career' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiryType('career')}
                        >
                          <RadioGroupItem value="career" id="career" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="career" className="cursor-pointer">
                              Career Opportunity
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              I'm a job seeker looking for employment with Pacem Health
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiryType === 'staffing-need' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiryType('staffing-need')}
                        >
                          <RadioGroupItem value="staffing-need" id="staffing-need" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="staffing-need" className="cursor-pointer">
                              Staffing Solution for My Facility
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              I need healthcare workers or technical staff for my organization
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiryType === 'partnership' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiryType('partnership')}
                        >
                          <RadioGroupItem value="partnership" id="partnership" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="partnership" className="cursor-pointer">
                              Workforce Development Partnership
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              I want to explore training programs or talent pipeline partnerships
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiryType === 'internship' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiryType('internship')}
                        >
                          <RadioGroupItem value="internship" id="internship" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="internship" className="cursor-pointer">
                              Internship or Training Program
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              I'm interested in internships, fellowships, or professional development
                            </p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Areas of Interest */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Area(s) of Interest *</h3>
                    <div className="space-y-3">
                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedAreas.includes('clinical') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleArea('clinical')}
                      >
                        <Checkbox 
                          id="clinical" 
                          checked={selectedAreas.includes('clinical')} 
                          onCheckedChange={() => toggleArea('clinical')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="clinical" className="cursor-pointer">
                            Clinical & Healthcare Professionals
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Doctors, nurses, midwives, lab technicians, radiographers
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedAreas.includes('biomedical') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleArea('biomedical')}
                      >
                        <Checkbox 
                          id="biomedical" 
                          checked={selectedAreas.includes('biomedical')} 
                          onCheckedChange={() => toggleArea('biomedical')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="biomedical" className="cursor-pointer">
                            Biomedical & Technical Engineering
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Equipment installation, maintenance, repair technicians
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedAreas.includes('digital-it') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleArea('digital-it')}
                      >
                        <Checkbox 
                          id="digital-it" 
                          checked={selectedAreas.includes('digital-it')} 
                          onCheckedChange={() => toggleArea('digital-it')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="digital-it" className="cursor-pointer">
                            Digital Health & IT
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Software developers, data analysts, IT support, systems administrators
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedAreas.includes('supply-chain') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleArea('supply-chain')}
                      >
                        <Checkbox 
                          id="supply-chain" 
                          checked={selectedAreas.includes('supply-chain')} 
                          onCheckedChange={() => toggleArea('supply-chain')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="supply-chain" className="cursor-pointer">
                            Supply Chain & Logistics
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Procurement, inventory management, warehouse operations
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedAreas.includes('project-management') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleArea('project-management')}
                      >
                        <Checkbox 
                          id="project-management" 
                          checked={selectedAreas.includes('project-management')} 
                          onCheckedChange={() => toggleArea('project-management')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="project-management" className="cursor-pointer">
                            Project Management & Infrastructure
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Healthcare facility planning, construction oversight, program management
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedAreas.includes('training-education') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleArea('training-education')}
                      >
                        <Checkbox 
                          id="training-education" 
                          checked={selectedAreas.includes('training-education')} 
                          onCheckedChange={() => toggleArea('training-education')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="training-education" className="cursor-pointer">
                            Training & Education
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Clinical trainers, technical instructors, curriculum development
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedAreas.includes('sales-bd') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleArea('sales-bd')}
                      >
                        <Checkbox 
                          id="sales-bd" 
                          checked={selectedAreas.includes('sales-bd')} 
                          onCheckedChange={() => toggleArea('sales-bd')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="sales-bd" className="cursor-pointer">
                            Sales & Business Development
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Account management, strategic partnerships, market development
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedAreas.includes('regulatory') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleArea('regulatory')}
                      >
                        <Checkbox 
                          id="regulatory" 
                          checked={selectedAreas.includes('regulatory')} 
                          onCheckedChange={() => toggleArea('regulatory')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="regulatory" className="cursor-pointer">
                            Regulatory & Compliance
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Quality assurance, regulatory affairs, certification specialists
                          </p>
                        </div>
                      </div>

                      <div 
                        className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                          selectedAreas.includes('finance-admin') 
                            ? 'border-[#4B2991] bg-[#4B2991]/5' 
                            : 'border-gray-200 hover:border-[#4B2991]/50'
                        }`}
                        onClick={() => toggleArea('finance-admin')}
                      >
                        <Checkbox 
                          id="finance-admin" 
                          checked={selectedAreas.includes('finance-admin')} 
                          onCheckedChange={() => toggleArea('finance-admin')} 
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <Label htmlFor="finance-admin" className="cursor-pointer">
                            Finance & Administration
                          </Label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Accounting, HR, operations, executive support
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Position Details (For Job Seekers) */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Position Details</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="desired-role">Desired Role/Position</Label>
                          <Input id="desired-role" placeholder="e.g., Biomedical Engineer, Nurse, Sales Manager" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="employment-type">Employment Type</Label>
                          <Select>
                            <SelectTrigger id="employment-type">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="full-time">Full-Time</SelectItem>
                              <SelectItem value="part-time">Part-Time</SelectItem>
                              <SelectItem value="contract">Contract/Temporary</SelectItem>
                              <SelectItem value="internship">Internship</SelectItem>
                              <SelectItem value="flexible">Flexible/Open</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="experience-level">Experience Level</Label>
                          <Select>
                            <SelectTrigger id="experience-level">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                              <SelectItem value="mid">Mid-Level (2-5 years)</SelectItem>
                              <SelectItem value="senior">Senior Level (5-10 years)</SelectItem>
                              <SelectItem value="executive">Executive (10+ years)</SelectItem>
                              <SelectItem value="student">Student/Recent Graduate</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="availability">Availability to Start</Label>
                          <Select>
                            <SelectTrigger id="availability">
                              <SelectValue placeholder="Select timeframe" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate</SelectItem>
                              <SelectItem value="2-weeks">2 Weeks Notice</SelectItem>
                              <SelectItem value="1-month">1 Month</SelectItem>
                              <SelectItem value="2-3-months">2-3 Months</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location Preferences */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Location Preferences</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="preferred-country">Preferred Country/Region *</Label>
                          <Select>
                            <SelectTrigger id="preferred-country">
                              <SelectValue placeholder="Select location" />
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
                              <SelectItem value="remote-africa">Remote (Africa-based)</SelectItem>
                              <SelectItem value="remote-us">Remote (US-based)</SelectItem>
                              <SelectItem value="multiple">Multiple Locations</SelectItem>
                              <SelectItem value="flexible">Flexible/Open</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="relocation">Willing to Relocate?</Label>
                          <Select>
                            <SelectTrigger id="relocation">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="depends">Depends on Opportunity</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="current-location">Current Location/Country</Label>
                        <Input id="current-location" placeholder="Where are you currently based?" />
                      </div>
                    </div>
                  </div>

                  {/* Staffing Needs (For Organizations) */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Staffing Needs (For Organizations)</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="staff-category">Staff Category Needed</Label>
                          <Select>
                            <SelectTrigger id="staff-category">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="clinical">Clinical Professionals</SelectItem>
                              <SelectItem value="technical">Technical/Engineering</SelectItem>
                              <SelectItem value="it">IT/Digital Health</SelectItem>
                              <SelectItem value="admin">Administrative Staff</SelectItem>
                              <SelectItem value="management">Management/Leadership</SelectItem>
                              <SelectItem value="multiple">Multiple Categories</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="staff-count">Number of Positions</Label>
                          <Select>
                            <SelectTrigger id="staff-count">
                              <SelectValue placeholder="Select number" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-5">1-5 positions</SelectItem>
                              <SelectItem value="6-10">6-10 positions</SelectItem>
                              <SelectItem value="11-20">11-20 positions</SelectItem>
                              <SelectItem value="20plus">20+ positions</SelectItem>
                              <SelectItem value="ongoing">Ongoing need</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="staffing-timeline">When do you need staff?</Label>
                        <Select>
                          <SelectTrigger id="staffing-timeline">
                            <SelectValue placeholder="Select timeframe" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent (Within 1 month)</SelectItem>
                            <SelectItem value="short">Short-term (1-3 months)</SelectItem>
                            <SelectItem value="medium">Medium-term (3-6 months)</SelectItem>
                            <SelectItem value="long">Long-term (6+ months)</SelectItem>
                            <SelectItem value="planning">Planning Phase</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Qualifications & Experience */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Qualifications & Experience</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="education">Highest Education Level</Label>
                          <Select>
                            <SelectTrigger id="education">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="high-school">High School/Secondary</SelectItem>
                              <SelectItem value="diploma">Diploma/Certificate</SelectItem>
                              <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                              <SelectItem value="masters">Master's Degree</SelectItem>
                              <SelectItem value="doctorate">Doctorate/PhD</SelectItem>
                              <SelectItem value="professional">Professional Certification</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="field-of-study">Field of Study/Specialization</Label>
                          <Input id="field-of-study" placeholder="e.g., Nursing, Engineering, IT" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="certifications">Relevant Certifications or Licenses</Label>
                        <Input id="certifications" placeholder="e.g., RN, CBET, PMP, ITIL, etc." />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience-summary">Experience Summary</Label>
                        <Textarea
                          id="experience-summary"
                          placeholder="Briefly describe your relevant experience, key skills, or specific staffing requirements..."
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Organization Information (For Staffing Inquiries) */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Organization Information</h3>
                    <div className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="org-name">Organization Name</Label>
                          <Input id="org-name" placeholder="Hospital, clinic, or institution" />
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
                              <SelectItem value="ministry">Government Ministry/Agency</SelectItem>
                              <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                              <SelectItem value="academic">Academic/Training Institution</SelectItem>
                              <SelectItem value="individual">Individual Applicant</SelectItem>
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
                        <Label htmlFor="contact-title">Job Title/Position</Label>
                        <Input id="contact-title" placeholder="Your current position" />
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
                        <Label htmlFor="resume-cv">Resume/CV Link (Optional)</Label>
                        <Input id="resume-cv" placeholder="Link to Google Drive, Dropbox, or LinkedIn" />
                        <p className="text-xs text-muted-foreground">
                          For career inquiries: Share a link to your resume or CV
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                        <Input id="linkedin" placeholder="https://linkedin.com/in/yourprofile" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additional-details">Additional Details or Questions</Label>
                        <Textarea
                          id="additional-details"
                          placeholder="Share any additional information, specific requirements, salary expectations, or questions..."
                          rows={4}
                        />
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
              {/* HR Contact */}
              <Card className="bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Human Resources</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white/80 mb-1">Careers Email</div>
                      <div>careers@pacemhealth.com</div>
                    </div>
                    <div>
                      <div className="text-white/80 mb-1">Staffing Solutions</div>
                      <div>staffing@pacemhealth.com</div>
                    </div>
                    <div>
                      <div className="text-white/80 mb-1">Phone</div>
                      <div>+1 (XXX) XXX-XXXX</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm text-white/90">
                      We review all applications and respond within 5-7 business days
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Why Join Pacem */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Why Join Pacem Health?</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Meaningful work strengthening healthcare across Africa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Competitive compensation and benefits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Professional development and training opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>International work environment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Career growth and advancement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Mission-driven, collaborative culture</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Current Openings */}
              <Card className="border-2 border-[#7C944B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Current Openings</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We're actively hiring for positions across Africa:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="pb-2 border-b">
                      <div className="mb-1">Biomedical Engineers</div>
                      <div className="text-xs text-muted-foreground">Multiple locations</div>
                    </div>
                    <div className="pb-2 border-b">
                      <div className="mb-1">Field Service Technicians</div>
                      <div className="text-xs text-muted-foreground">Nigeria, Kenya, Ghana</div>
                    </div>
                    <div className="pb-2 border-b">
                      <div className="mb-1">Clinical Trainers</div>
                      <div className="text-xs text-muted-foreground">East Africa region</div>
                    </div>
                    <div>
                      <div className="mb-1">Project Managers</div>
                      <div className="text-xs text-muted-foreground">Remote/Nairobi</div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={() => window.location.href = '/careers'}
                  >
                    View All Jobs
                  </Button>
                </CardContent>
              </Card>

              {/* Staffing Solutions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Staffing Solutions</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need qualified healthcare or technical staff for your facility?
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-[#7C944B]">•</span>
                      <span>Pre-vetted, qualified professionals</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#7C944B]">•</span>
                      <span>Temporary or permanent placements</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#7C944B]">•</span>
                      <span>Rapid deployment across Africa</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#7C944B]">•</span>
                      <span>Ongoing support and management</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Equal Opportunity */}
              <Card className="border-2 border-[#4B2991]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Equal Opportunity</h3>
                  <p className="text-sm text-muted-foreground">
                    Pacem Health is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Career Pathways at Pacem Health</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🏥
                </div>
                <h3 className="text-lg mb-2">Clinical Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Work with cutting-edge medical technology while delivering quality patient care
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🔧
                </div>
                <h3 className="text-lg mb-2">Technical Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Engineer solutions that keep healthcare systems running across Africa
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  💻
                </div>
                <h3 className="text-lg mb-2">Digital Transformation</h3>
                <p className="text-sm text-muted-foreground">
                  Build digital health platforms that improve healthcare delivery
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  📊
                </div>
                <h3 className="text-lg mb-2">Strategic Leadership</h3>
                <p className="text-sm text-muted-foreground">
                  Drive systems-level change in healthcare across the continent
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workforce Development */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Workforce Development Programs</h2>
            <p className="text-lg text-muted-foreground">
              We partner with universities, training institutions, and healthcare facilities to build Africa's healthcare workforce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-[#4B2991]/10 rounded-lg flex items-center justify-center text-[#4B2991] mb-3">
                    🎓
                  </div>
                  <h3 className="text-lg mb-2">Training Partnerships</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Biomedical engineering programs</li>
                  <li>• Clinical skills development</li>
                  <li>• Digital health training</li>
                  <li>• Supply chain management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-[#7C944B]/10 rounded-lg flex items-center justify-center text-[#7C944B] mb-3">
                    🤝
                  </div>
                  <h3 className="text-lg mb-2">Internship Programs</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Structured learning experiences</li>
                  <li>• Mentorship from experts</li>
                  <li>• Real-world project exposure</li>
                  <li>• Pathway to full employment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-10 h-10 bg-[#4B2991]/10 rounded-lg flex items-center justify-center text-[#4B2991] mb-3">
                    ⚡
                  </div>
                  <h3 className="text-lg mb-2">Talent Pipeline</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Early career identification</li>
                  <li>• Scholarship opportunities</li>
                  <li>• Continuous skill development</li>
                  <li>• Leadership cultivation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}