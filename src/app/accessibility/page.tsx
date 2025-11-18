import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Eye, Mail, Phone, Calendar, CheckCircle2, Info } from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#0033A0]">Home</Link>
            <span>/</span>
            <span className="text-foreground">Accessibility</span>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Eye className="h-16 w-16 mx-auto mb-6 text-white/90" />
          <h1 className="text-4xl sm:text-5xl mb-4">Accessibility Statement</h1>
          <p className="text-xl text-white/90">
            Our commitment to digital accessibility for all users
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-6 border-b bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Last Updated: February 15, 2025</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Our Commitment to Accessibility</h2>
            <p className="text-muted-foreground mb-4">
              Pacem Health Inc. is committed to ensuring digital accessibility for all people, including those with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure our website and services are accessible to all users.
            </p>
            <p className="text-muted-foreground">
              We believe that healthcare information and services should be accessible to everyone, regardless of ability. This commitment extends to our website, digital platforms, product documentation, and all customer-facing materials.
            </p>
          </div>

          {/* Standards */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Accessibility Standards</h2>
            <p className="text-muted-foreground mb-6">
              We strive to conform to the following accessibility standards and guidelines:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg mb-2">WCAG 2.1 Level AA</h3>
                      <p className="text-sm text-muted-foreground">
                        Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA conformance. These guidelines explain how to make web content more accessible to people with disabilities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg mb-2">Section 508</h3>
                      <p className="text-sm text-muted-foreground">
                        U.S. Section 508 standards for federal agencies and organizations receiving federal funding, ensuring information technology is accessible to people with disabilities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg mb-2">ADA Compliance</h3>
                      <p className="text-sm text-muted-foreground">
                        Americans with Disabilities Act (ADA) Title III requirements, ensuring equal access to goods and services for individuals with disabilities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg mb-2">ARIA Standards</h3>
                      <p className="text-sm text-muted-foreground">
                        Accessible Rich Internet Applications (ARIA) technical specifications to improve accessibility of dynamic web content and user interface components.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Accessibility Features</h2>
            <p className="text-muted-foreground mb-6">
              Our website includes the following accessibility features to ensure a positive user experience for all visitors:
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3">Keyboard Navigation</h3>
                  <p className="text-muted-foreground mb-3">
                    Our website can be navigated using keyboard controls without requiring a mouse. Use the Tab key to move between interactive elements and Enter to activate links and buttons.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                    <li>• Tab: Move forward through interactive elements</li>
                    <li>• Shift + Tab: Move backward through interactive elements</li>
                    <li>• Enter/Return: Activate links and buttons</li>
                    <li>• Arrow keys: Navigate within menus and dropdowns</li>
                    <li>• Escape: Close modals and dropdowns</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3">Screen Reader Compatibility</h3>
                  <p className="text-muted-foreground mb-3">
                    Our website is optimized for use with popular screen reading software, including:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                    <li>• JAWS (Job Access With Speech)</li>
                    <li>• NVDA (NonVisual Desktop Access)</li>
                    <li>• VoiceOver (macOS and iOS)</li>
                    <li>• TalkBack (Android)</li>
                    <li>• Narrator (Windows)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">
                    We use semantic HTML, ARIA labels, and proper heading structures to ensure content is properly announced and navigable.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3">Visual Design & Contrast</h3>
                  <p className="text-muted-foreground mb-3">
                    Our design meets WCAG color contrast requirements to ensure readability for users with visual impairments:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                    <li>• Minimum 4.5:1 contrast ratio for normal text</li>
                    <li>• Minimum 3:1 contrast ratio for large text</li>
                    <li>• Clear visual focus indicators for keyboard navigation</li>
                    <li>• Meaningful color usage (not relying solely on color to convey information)</li>
                    <li>• Resizable text up to 200% without loss of content or functionality</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3">Alternative Text & Media</h3>
                  <p className="text-muted-foreground mb-3">
                    We provide text alternatives for non-text content:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                    <li>• Descriptive alt text for all meaningful images</li>
                    <li>• Captions and transcripts for video content</li>
                    <li>• Text alternatives for complex graphics and charts</li>
                    <li>• Clear labels for form inputs and interactive elements</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3">Responsive & Flexible Design</h3>
                  <p className="text-muted-foreground mb-3">
                    Our website is designed to work across different devices and screen sizes:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                    <li>• Responsive design that adapts to different screen sizes</li>
                    <li>• Mobile-friendly touch targets (minimum 44x44 pixels)</li>
                    <li>• Support for browser zoom up to 200%</li>
                    <li>• Horizontal scrolling minimized or eliminated</li>
                    <li>• Consistent layout and navigation across pages</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3">Clear Content Structure</h3>
                  <p className="text-muted-foreground mb-3">
                    We organize content for easy comprehension and navigation:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                    <li>• Logical heading hierarchy (H1, H2, H3, etc.)</li>
                    <li>• Descriptive page titles</li>
                    <li>• Clear and consistent navigation menus</li>
                    <li>• Breadcrumb navigation for context</li>
                    <li>• Skip-to-content links for keyboard users</li>
                    <li>• Meaningful link text (avoiding "click here")</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3">Form Accessibility</h3>
                  <p className="text-muted-foreground mb-3">
                    Our forms are designed to be accessible and easy to use:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                    <li>• Clear labels associated with all form fields</li>
                    <li>• Descriptive error messages and validation feedback</li>
                    <li>• Required fields clearly indicated</li>
                    <li>• Logical tab order through form fields</li>
                    <li>• Accessible date pickers and dropdown menus</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Third-Party Content */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Third-Party Content and Services</h2>
            <p className="text-muted-foreground mb-4">
              Our website may include content and services from third-party providers (embedded videos, social media feeds, payment processors). While we strive to ensure that all content is accessible, we do not have complete control over the accessibility of third-party content.
            </p>
            <p className="text-muted-foreground">
              We work with our vendors and partners to ensure they meet accessibility standards and are committed to selecting accessible third-party services whenever possible.
            </p>
          </div>

          {/* Ongoing Efforts */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Ongoing Accessibility Efforts</h2>
            <p className="text-muted-foreground mb-6">
              Accessibility is an ongoing effort. We are continuously working to improve the accessibility of our website through:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">Regular Audits & Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    We conduct regular accessibility audits using automated tools and manual testing with assistive technologies to identify and address accessibility barriers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">User Feedback</h3>
                  <p className="text-sm text-muted-foreground">
                    We actively solicit feedback from users with disabilities to understand their experiences and identify areas for improvement.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">Staff Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Our development, design, and content teams receive ongoing training on accessibility best practices and standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">Continuous Improvement</h3>
                  <p className="text-sm text-muted-foreground">
                    We prioritize accessibility in our development process and regularly update our website to address identified issues and implement new features.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Assistive Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Compatible Assistive Technologies</h2>
            <p className="text-muted-foreground mb-6">
              Our website is designed to be compatible with the following assistive technologies:
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="mb-2">Screen Readers</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• JAWS</li>
                    <li>• NVDA</li>
                    <li>• VoiceOver</li>
                    <li>• TalkBack</li>
                    <li>• Narrator</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="mb-2">Magnification Tools</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• ZoomText</li>
                    <li>• MAGic</li>
                    <li>• Browser zoom</li>
                    <li>• OS magnification</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="mb-2">Input Devices</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Keyboard</li>
                    <li>• Switch controls</li>
                    <li>• Voice recognition</li>
                    <li>• Eye tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Known Limitations */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Known Limitations</h2>
            <p className="text-muted-foreground mb-4">
              Despite our best efforts, there may be some limitations to the accessibility of certain areas of our website. We are aware of the following issues and are working to address them:
            </p>

            <Card className="bg-yellow-50 border-l-4 border-yellow-400">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-3">
                      If you encounter any accessibility barriers on our website, please let us know so we can work to resolve the issue.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                      <li>• Some legacy PDF documents may not be fully accessible (we are working to update these)</li>
                      <li>• Certain third-party embedded content may have accessibility limitations</li>
                      <li>• Some complex interactive features may require additional keyboard navigation instructions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feedback & Contact */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Accessibility Feedback</h2>
            <p className="text-muted-foreground mb-6">
              We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers, have suggestions for improvement, or need assistance accessing any content or features, please contact us:
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm mb-1">Email</h4>
                        <a href="mailto:accessibility@pacemhealth.com" className="text-[#0033A0] hover:underline">
                          accessibility@pacemhealth.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm mb-1">Phone</h4>
                        <p className="text-muted-foreground">1-800-PACEM-HC (1-800-722-3642)</p>
                        <p className="text-xs text-muted-foreground mt-1">Monday - Friday, 9:00 AM - 5:00 PM EST</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        <strong>Response Time:</strong> We aim to respond to all accessibility inquiries within 2 business days. For urgent matters, please indicate "URGENT - ACCESSIBILITY" in your subject line.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feedback Form */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-4">Send Feedback</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="text-sm mb-2 block">Name *</label>
                      <Input placeholder="Your name" required />
                    </div>
                    <div>
                      <label className="text-sm mb-2 block">Email *</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                    <div>
                      <label className="text-sm mb-2 block">Assistive Technology Used (if applicable)</label>
                      <Input placeholder="e.g., JAWS, VoiceOver, keyboard only" />
                    </div>
                    <div>
                      <label className="text-sm mb-2 block">Describe the Issue or Suggestion *</label>
                      <Textarea 
                        placeholder="Please provide details about the accessibility barrier you encountered or your suggestion for improvement..."
                        rows={4}
                        required
                      />
                    </div>
                    <Button className="w-full bg-[#0033A0] hover:bg-[#00A0DC]">
                      Submit Feedback
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Formal Complaints */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Formal Complaints</h2>
            <p className="text-muted-foreground mb-4">
              If you believe that our website does not comply with accessibility standards or if you are not satisfied with our response to your accessibility concerns, you have the right to file a formal complaint:
            </p>

            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">U.S. Department of Justice</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Civil Rights Division, Disability Rights Section
                </p>
                <p className="text-sm text-muted-foreground mb-1">
                  950 Pennsylvania Avenue, N.W.
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  Washington, D.C. 20530
                </p>
                <a 
                  href="https://www.ada.gov/filing_complaint.htm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0033A0] hover:underline text-sm"
                >
                  How to File an ADA Complaint →
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Additional Resources */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Additional Accessibility Resources</h2>
            <p className="text-muted-foreground mb-6">
              For more information about web accessibility and assistive technologies:
            </p>

            <div className="space-y-3">
              <Card>
                <CardContent className="p-4">
                  <a 
                    href="https://www.w3.org/WAI/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0033A0] hover:underline"
                  >
                    W3C Web Accessibility Initiative (WAI) →
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">International standards and resources for web accessibility</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <a 
                    href="https://www.ada.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0033A0] hover:underline"
                  >
                    Americans with Disabilities Act (ADA) →
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Information about ADA requirements and compliance</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <a 
                    href="https://www.section508.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0033A0] hover:underline"
                  >
                    Section 508 Resources →
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Federal accessibility standards and guidance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl mb-6">Related Information</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/privacy">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h4 className="mb-2">Privacy Policy</h4>
                  <p className="text-sm text-muted-foreground">Learn how we protect and handle your personal information</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/terms">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h4 className="mb-2">Terms of Service</h4>
                  <p className="text-sm text-muted-foreground">Review our terms and conditions for using our services</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/cookies">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h4 className="mb-2">Cookie Settings</h4>
                  <p className="text-sm text-muted-foreground">Manage your cookie preferences and tracking settings</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
