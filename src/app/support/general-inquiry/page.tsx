import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Mail, Phone, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GeneralInquiryPage() {
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
              <span>Contact Us</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Contact Us</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Have a question or inquiry? We're here to help. Fill out the form below and our team will get back to you within 24 hours.
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
                    <h3 className="text-xl mb-4 pb-2 border-b">What Can We Help You With?</h3>
                    <div className="space-y-2">
                      <Label htmlFor="inquiry-type">Type of Inquiry</Label>
                      <Select>
                        <SelectTrigger id="inquiry-type">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="products">Products & Equipment</SelectItem>
                          <SelectItem value="services">Services & Solutions</SelectItem>
                          <SelectItem value="pricing">Pricing & Quotes</SelectItem>
                          <SelectItem value="partnerships">Partnerships & Collaboration</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="training">Training & Education</SelectItem>
                          <SelectItem value="documentation">Documentation & Resources</SelectItem>
                          <SelectItem value="business">Business Development</SelectItem>
                          <SelectItem value="media">Media & Press Inquiries</SelectItem>
                          <SelectItem value="careers">Career Opportunities</SelectItem>
                          <SelectItem value="feedback">Feedback or Suggestions</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Your Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name *</Label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name *</Label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="email@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+XXX XXX XXX XXX" />
                      </div>
                    </div>
                  </div>

                  {/* Organization Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Organization (Optional)</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization Name</Label>
                        <Input id="organization" placeholder="Your organization" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="org-type">Organization Type</Label>
                        <Select>
                          <SelectTrigger id="org-type">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hospital">Hospital/Healthcare Facility</SelectItem>
                            <SelectItem value="government">Government/Ministry</SelectItem>
                            <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                            <SelectItem value="private">Private Company</SelectItem>
                            <SelectItem value="academic">Academic/Research Institution</SelectItem>
                            <SelectItem value="distributor">Distributor/Supplier</SelectItem>
                            <SelectItem value="donor">Donor/Funding Organization</SelectItem>
                            <SelectItem value="individual">Individual</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
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
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="other-africa">Other African Country</SelectItem>
                            <SelectItem value="other">Other Country</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="Your city" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Your Message</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input id="subject" placeholder="Brief description of your inquiry" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Please provide details about your inquiry. The more information you provide, the better we can assist you..."
                          rows={8}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="mb-8">
                    <h3 className="text-xl mb-4 pb-2 border-b">Additional Information</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select>
                          <SelectTrigger id="urgency">
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low - General inquiry</SelectItem>
                            <SelectItem value="medium">Medium - Need response within a week</SelectItem>
                            <SelectItem value="high">High - Need response within 2 business days</SelectItem>
                            <SelectItem value="urgent">Urgent - Need immediate attention</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferred-contact">Preferred Contact Method</Label>
                        <Select>
                          <SelectTrigger id="preferred-contact">
                            <SelectValue placeholder="Select preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="whatsapp">WhatsApp</SelectItem>
                            <SelectItem value="any">Any method</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="how-heard">How Did You Hear About Us?</Label>
                        <Select>
                          <SelectTrigger id="how-heard">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="search">Search Engine (Google, etc.)</SelectItem>
                            <SelectItem value="referral">Referral from colleague</SelectItem>
                            <SelectItem value="social-media">Social Media</SelectItem>
                            <SelectItem value="conference">Conference or Event</SelectItem>
                            <SelectItem value="partner">Partner Organization</SelectItem>
                            <SelectItem value="advertisement">Advertisement</SelectItem>
                            <SelectItem value="existing-customer">Existing Customer</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="attachments">Document Links (Optional)</Label>
                        <Input id="attachments" placeholder="Link to documents, specifications, or reference materials" />
                        <p className="text-xs text-muted-foreground">
                          Share links to Google Drive, Dropbox, or other cloud storage
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Privacy Notice */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
                    <p className="text-sm text-muted-foreground">
                      By submitting this form, you agree to our privacy policy. We will use your information only to respond to your inquiry and will not share it with third parties without your consent.
                    </p>
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
              {/* Contact Methods */}
              <Card className="bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Get In Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-white/80 mb-1">Email</div>
                        <div className="text-sm">info@pacemhealth.com</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-white/80 mb-1">Phone</div>
                        <div className="text-sm">+1 (XXX) XXX-XXXX</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-white/80 mb-1">WhatsApp</div>
                        <div className="text-sm">+XXX XXX XXX XXX</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-white/80 mb-1">Business Hours</div>
                        <div className="text-sm">Mon-Fri: 8AM - 6PM EAT</div>
                        <div className="text-sm">Sat: 9AM - 1PM EAT</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="border-2 border-[#4B2991]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Response Time</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <div>
                        <div className="mb-1">Standard Inquiries</div>
                        <p className="text-muted-foreground text-xs">
                          Response within 24 business hours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#7C944B] mt-1">✓</span>
                      <div>
                        <div className="mb-1">Urgent Requests</div>
                        <p className="text-muted-foreground text-xs">
                          Priority handling within 4 hours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#4B2991] mt-1">✓</span>
                      <div>
                        <div className="mb-1">Technical Support</div>
                        <p className="text-muted-foreground text-xs">
                          24/7 emergency support available
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-4">Our Offices</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="mb-1">North America Headquarters</div>
                      <p className="text-muted-foreground text-xs">
                        [Address]<br />
                        United States
                      </p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="mb-1">Africa Regional Office</div>
                      <p className="text-muted-foreground text-xs">
                        [Address]<br />
                        Nairobi, Kenya
                      </p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="mb-1">West Africa Hub</div>
                      <p className="text-muted-foreground text-xs">
                        [Address]<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">Quick Answers</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="mb-1">Do you ship internationally?</div>
                      <p className="text-muted-foreground text-xs">
                        Yes, we ship medical equipment across Africa and globally.
                      </p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="mb-1">What payment methods do you accept?</div>
                      <p className="text-muted-foreground text-xs">
                        Wire transfer, LC, and approved credit terms for qualified organizations.
                      </p>
                    </div>
                    <div className="border-t pt-3">
                      <div className="mb-1">Do you provide training?</div>
                      <p className="text-muted-foreground text-xs">
                        Yes, comprehensive training and ongoing support are included with all systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Alternatives */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Other Ways to Reach Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg mb-2">Sales Inquiries</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  sales@pacemhealth.com
                </p>
                <p className="text-xs text-muted-foreground">
                  For quotes and product information
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg mb-2">Technical Support</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  support@pacemhealth.com
                </p>
                <p className="text-xs text-muted-foreground">
                  24/7 emergency support
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#4B2991] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-lg mb-2">Partnerships</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  partnerships@pacemhealth.com
                </p>
                <p className="text-xs text-muted-foreground">
                  Strategic collaborations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#7C944B] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg mb-2">Media & Press</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  media@pacemhealth.com
                </p>
                <p className="text-xs text-muted-foreground">
                  Press inquiries and interviews
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4">We're Here to Help</h2>
          <p className="text-lg text-white/90 mb-8">
            Whether you have a question about our products, need technical support, or want to explore partnership opportunities, our team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#4B2991] hover:bg-white/90"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Send Us a Message
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              View All Support Options
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}