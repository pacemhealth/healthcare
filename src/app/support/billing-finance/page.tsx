import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function BillingFinancePage() {
  const [selectedInquiry, setSelectedInquiry] = useState<string>('invoice');

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
              <span>Billing & Finance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Billing & Finance Assistance</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Get help with invoices, payment processing, financing options, and financial account management. Our finance team is here to ensure smooth billing and payment experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  {/* Inquiry Type */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">How can we help? *</h3>
                    <RadioGroup value={selectedInquiry} onValueChange={setSelectedInquiry}>
                      <div className="space-y-3">
                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiry === 'invoice' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiry('invoice')}
                        >
                          <RadioGroupItem value="invoice" id="invoice" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="invoice" className="cursor-pointer">
                              Invoice or Payment Inquiry
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Questions about an existing invoice or payment status
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiry === 'payment-plan' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiry('payment-plan')}
                        >
                          <RadioGroupItem value="payment-plan" id="payment-plan" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="payment-plan" className="cursor-pointer">
                              Payment Plan Request
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Request flexible payment terms or installment options
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiry === 'financing' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiry('financing')}
                        >
                          <RadioGroupItem value="financing" id="financing" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="financing" className="cursor-pointer">
                              Financing Options
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Explore leasing, financing, or deferred payment programs
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiry === 'budget-planning' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiry('budget-planning')}
                        >
                          <RadioGroupItem value="budget-planning" id="budget-planning" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="budget-planning" className="cursor-pointer">
                              Budget Planning Assistance
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Help with budgeting, cost projections, or financial planning
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiry === 'documentation' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiry('documentation')}
                        >
                          <RadioGroupItem value="documentation" id="documentation" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="documentation" className="cursor-pointer">
                              Financial Documentation
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Request tax documents, receipts, or compliance certificates
                            </p>
                          </div>
                        </div>

                        <div 
                          className={`flex items-start space-x-3 p-4 border-2 rounded-lg cursor-pointer transition ${
                            selectedInquiry === 'other' 
                              ? 'border-[#4B2991] bg-[#4B2991]/5' 
                              : 'border-gray-200 hover:border-[#4B2991]/50'
                          }`}
                          onClick={() => setSelectedInquiry('other')}
                        >
                          <RadioGroupItem value="other" id="other" className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor="other" className="cursor-pointer">
                              Other Financial Inquiry
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Currency questions, wire transfers, or other billing matters
                            </p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
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
                          <Label htmlFor="account-number">Account/Customer Number</Label>
                          <Input id="account-number" placeholder="If applicable" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="invoice-number">Invoice/Quote Number</Label>
                          <Input id="invoice-number" placeholder="If applicable" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="order-value">Order/Project Value</Label>
                          <Select>
                            <SelectTrigger id="order-value">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-10k">Under $10,000</SelectItem>
                              <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                              <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                              <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                              <SelectItem value="over-500k">Over $500,000</SelectItem>
                              <SelectItem value="na">Not Applicable</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Request Details */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Request Details</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="description">Describe Your Request *</Label>
                        <Textarea
                          id="description"
                          placeholder="Please provide details about your billing or finance inquiry..."
                          rows={5}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select>
                          <SelectTrigger id="urgency">
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent - Payment deadline approaching</SelectItem>
                            <SelectItem value="standard">Standard - Normal processing</SelectItem>
                            <SelectItem value="planning">Planning - Future budgeting</SelectItem>
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
                        <Label htmlFor="contact-phone">Phone Number</Label>
                        <Input id="contact-phone" type="tel" placeholder="+XXX XXX XXX XXX" />
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
              {/* Quick Contact */}
              <Card className="bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Finance Team</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-white/80 mb-1">Email</div>
                      <div>billing@pacemhealth.com</div>
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
                      Response within 24-48 hours for most inquiries
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Methods */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Payment Methods</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Wire transfer (USD, EUR, GBP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Letter of credit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>ACH/SWIFT transfers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Purchase orders (approved accounts)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <span>Donor/grant funding coordination</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Financing Options */}
              <Card className="border-2 border-[#7C944B]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Flexible Financing</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    We offer customized payment solutions to support healthcare infrastructure development:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B]">•</span>
                      <span>Installment payment plans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B]">•</span>
                      <span>Equipment leasing programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B]">•</span>
                      <span>Deferred payment options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7C944B]">•</span>
                      <span>Multi-year contracts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Common Questions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Common Questions</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="mb-1">Payment terms?</div>
                      <p className="text-muted-foreground text-xs">
                        Standard terms are Net 30. Custom terms available for approved accounts.
                      </p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="mb-1">Currency options?</div>
                      <p className="text-muted-foreground text-xs">
                        We accept USD, EUR, and GBP. Local currency options available.
                      </p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="mb-1">Tax documentation?</div>
                      <p className="text-muted-foreground text-xs">
                        All invoices include VAT/tax details. Tax exemption certificates accepted.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Financial Services & Support</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  💳
                </div>
                <h3 className="text-lg mb-2">Flexible Payments</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple payment methods and currency options to suit your organization
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  📊
                </div>
                <h3 className="text-lg mb-2">Budget Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Expert guidance on cost projections and multi-year financial planning
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  🤝
                </div>
                <h3 className="text-lg mb-2">Donor Coordination</h3>
                <p className="text-sm text-muted-foreground">
                  Seamless coordination with World Bank, USAID, and other funding partners
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mb-4 text-xl">
                  📄
                </div>
                <h3 className="text-lg mb-2">Transparent Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Clear invoices, receipts, and compliance documentation for all transactions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}