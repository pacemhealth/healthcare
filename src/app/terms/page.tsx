import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { FileText, Mail, Download, Calendar } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#0033A0]">Home</Link>
            <span>/</span>
            <span className="text-foreground">Terms of Service</span>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-16 w-16 mx-auto mb-6 text-white/90" />
          <h1 className="text-4xl sm:text-5xl mb-4">Terms of Service</h1>
          <p className="text-xl text-white/90">
            Legal terms and conditions for using Pacem Health services
          </p>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-6 border-b bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: February 15, 2025</span>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Pacem Health Inc. ("Pacem Health," "we," "us," or "our") governing your access to and use of our website, products, services, and platforms (collectively, the "Services").
              </p>
              <p className="text-muted-foreground mb-4">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
              </p>
              <p className="text-muted-foreground">
                These Terms apply to all users, including healthcare institutions, government agencies, development partners, individual users, and other stakeholders.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By creating an account, placing an order, or otherwise using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy and any additional terms applicable to specific Services.
              </p>
              <p className="text-muted-foreground">
                If you are using our Services on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.
              </p>
            </div>

            {/* Eligibility */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">2. Eligibility</h2>
              <p className="text-muted-foreground mb-4">
                You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>You are at least 18 years of age</li>
                <li>You have the legal capacity to enter into binding contracts</li>
                <li>You are not prohibited from using our Services under applicable law</li>
                <li>All information you provide is accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information</li>
              </ul>
            </div>

            {/* Account Registration */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">3. Account Registration and Security</h2>
              
              <h3 className="text-xl mb-3">3.1 Account Creation</h3>
              <p className="text-muted-foreground mb-4">
                To access certain features of our Services, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and account credentials</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>

              <h3 className="text-xl mb-3">3.2 Account Termination</h3>
              <p className="text-muted-foreground">
                We reserve the right to suspend or terminate your account at any time, with or without notice, for any reason, including violation of these Terms, fraudulent activity, or as required by law.
              </p>
            </div>

            {/* Use of Services */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">4. Use of Services</h2>
              
              <h3 className="text-xl mb-3">4.1 Permitted Use</h3>
              <p className="text-muted-foreground mb-4">
                You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Engage in fraudulent, deceptive, or misleading conduct</li>
                <li>Interfere with or disrupt the Services or servers</li>
                <li>Attempt to gain unauthorized access to any portion of the Services</li>
                <li>Use automated systems (bots, scrapers) without our express permission</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Collect or harvest information about other users</li>
                <li>Use the Services for any illegal or unauthorized purpose</li>
              </ul>

              <h3 className="text-xl mb-3">4.2 Medical and Healthcare Use</h3>
              <p className="text-muted-foreground mb-4">
                Our Services are designed for healthcare institutions, professionals, and authorized users. You agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Comply with all applicable healthcare laws and regulations</li>
                <li>Maintain appropriate licenses and certifications</li>
                <li>Use our products and services in accordance with manufacturer instructions</li>
                <li>Ensure proper training and qualifications for using medical equipment</li>
                <li>Follow professional standards of care and practice</li>
              </ul>
            </div>

            {/* Products and Services */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">5. Products and Services</h2>
              
              <h3 className="text-xl mb-3">5.1 Product Information</h3>
              <p className="text-muted-foreground mb-4">
                We strive to provide accurate product descriptions, specifications, and pricing. However:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>We do not warrant that product descriptions are accurate, complete, or error-free</li>
                <li>Prices are subject to change without notice</li>
                <li>Product availability may vary and is not guaranteed</li>
                <li>Images are for illustrative purposes and may not reflect actual products</li>
              </ul>

              <h3 className="text-xl mb-3">5.2 Orders and Payments</h3>
              <p className="text-muted-foreground mb-4">
                By placing an order, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete payment information</li>
                <li>Pay all charges at the prices in effect when you place your order</li>
                <li>Pay applicable taxes, duties, and shipping fees</li>
                <li>Acknowledge that we reserve the right to refuse or cancel any order</li>
              </ul>

              <h3 className="text-xl mb-3">5.3 Shipping and Delivery</h3>
              <p className="text-muted-foreground mb-4">
                Delivery times are estimates and not guaranteed. Risk of loss and title for products pass to you upon delivery to the carrier. We are not responsible for delays caused by customs, shipping carriers, or other factors beyond our control.
              </p>

              <h3 className="text-xl mb-3">5.4 Returns and Refunds</h3>
              <p className="text-muted-foreground">
                Our return and refund policies vary by product type and are subject to specific terms and conditions. Medical equipment, pharmaceuticals, and certain other products may have restricted return policies due to health and safety regulations.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">6. Intellectual Property Rights</h2>
              
              <h3 className="text-xl mb-3">6.1 Our Intellectual Property</h3>
              <p className="text-muted-foreground mb-4">
                The Services, including all content, features, and functionality, are owned by Pacem Health and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws. You may not:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Copy, modify, or create derivative works of our content</li>
                <li>Distribute, transmit, or publicly display our content without permission</li>
                <li>Use our trademarks, logos, or branding without authorization</li>
                <li>Reverse engineer, decompile, or disassemble our software</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices</li>
              </ul>

              <h3 className="text-xl mb-3">6.2 User Content</h3>
              <p className="text-muted-foreground mb-4">
                By submitting content to our Services (reviews, feedback, communications), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such content in connection with operating and promoting our Services.
              </p>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">7. Warranties and Disclaimers</h2>
              
              <h3 className="text-xl mb-3">7.1 Product Warranties</h3>
              <p className="text-muted-foreground mb-4">
                Products are subject to manufacturer warranties. We pass through applicable warranties but make no additional warranties unless expressly stated in writing.
              </p>

              <h3 className="text-xl mb-3">7.2 Disclaimer of Warranties</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <p className="text-muted-foreground mb-2">
                  <strong>IMPORTANT:</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Warranties of MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT</li>
                  <li>WARRANTIES REGARDING ACCURACY, RELIABILITY, OR AVAILABILITY</li>
                  <li>WARRANTIES THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE</li>
                  <li>WARRANTIES THAT DEFECTS WILL BE CORRECTED</li>
                </ul>
              </div>

              <h3 className="text-xl mb-3">7.3 Medical Disclaimer</h3>
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <p className="text-muted-foreground">
                  <strong>MEDICAL DISCLAIMER:</strong> Information provided on our website is for informational purposes only and does not constitute medical advice. Always seek the advice of qualified healthcare professionals. Products must be used in accordance with applicable regulations and professional standards.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">8. Limitation of Liability</h2>
              <div className="bg-gray-50 border-l-4 border-gray-400 p-6 mb-6">
                <p className="text-muted-foreground mb-4">
                  <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>PACEM HEALTH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                  <li>THIS INCLUDES DAMAGES FOR LOST PROFITS, LOST DATA, BUSINESS INTERRUPTION, OR OTHER INTANGIBLE LOSSES</li>
                  <li>OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM</li>
                  <li>THESE LIMITATIONS APPLY REGARDLESS OF THE LEGAL THEORY (CONTRACT, TORT, NEGLIGENCE, OR OTHERWISE)</li>
                </ul>
              </div>
              <p className="text-muted-foreground">
                Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for consequential or incidental damages. In such jurisdictions, our liability is limited to the maximum extent permitted by law.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">9. Indemnification</h2>
              <p className="text-muted-foreground mb-4">
                You agree to indemnify, defend, and hold harmless Pacem Health, its affiliates, officers, directors, employees, agents, and licensors from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Your use of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your negligence or willful misconduct</li>
                <li>Your use of our products or services</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">10. Governing Law and Dispute Resolution</h2>
              
              <h3 className="text-xl mb-3">10.1 Governing Law</h3>
              <p className="text-muted-foreground mb-4">
                These Terms are governed by the laws of the United States and the State of Delaware, without regard to conflict of law principles.
              </p>

              <h3 className="text-xl mb-3">10.2 Dispute Resolution</h3>
              <p className="text-muted-foreground mb-4">
                Any disputes arising from these Terms or your use of the Services shall be resolved through:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>First, good faith negotiations between the parties</li>
                <li>If negotiations fail, binding arbitration in accordance with the American Arbitration Association rules</li>
                <li>Arbitration shall take place in Washington, D.C.</li>
                <li>Each party bears its own costs and fees unless otherwise awarded by the arbitrator</li>
              </ul>

              <h3 className="text-xl mb-3">10.3 Class Action Waiver</h3>
              <p className="text-muted-foreground">
                You agree that any proceedings to resolve disputes will be conducted on an individual basis and not as a class action, consolidated action, or representative action.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Posting the updated Terms on our website</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending notice to your registered email address (for material changes)</li>
              </ul>
              <p className="text-muted-foreground">
                Your continued use of the Services after changes become effective constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">12. Termination</h2>
              <p className="text-muted-foreground mb-4">
                We may terminate or suspend your access to the Services immediately, without prior notice, for any reason, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Violation of these Terms</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>Non-payment of fees</li>
                <li>At our sole discretion for any reason</li>
              </ul>
              <p className="text-muted-foreground">
                Upon termination, your right to use the Services ceases immediately. Sections of these Terms that by their nature should survive termination shall survive, including intellectual property provisions, disclaimers, and limitations of liability.
              </p>
            </div>

            {/* Miscellaneous */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">13. Miscellaneous</h2>
              
              <h3 className="text-xl mb-3">13.1 Entire Agreement</h3>
              <p className="text-muted-foreground mb-4">
                These Terms, together with our Privacy Policy and any additional terms, constitute the entire agreement between you and Pacem Health regarding the Services.
              </p>

              <h3 className="text-xl mb-3">13.2 Severability</h3>
              <p className="text-muted-foreground mb-4">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>

              <h3 className="text-xl mb-3">13.3 Waiver</h3>
              <p className="text-muted-foreground mb-4">
                Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision.
              </p>

              <h3 className="text-xl mb-3">13.4 Assignment</h3>
              <p className="text-muted-foreground mb-4">
                You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
              </p>

              <h3 className="text-xl mb-3">13.5 Force Majeure</h3>
              <p className="text-muted-foreground">
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, pandemics, government actions, or infrastructure failures.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">14. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <p><strong>Pacem Health Inc.</strong></p>
                    <p className="text-muted-foreground">Legal Department</p>
                    <p className="text-muted-foreground">Washington, D.C., United States</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <a href="mailto:legal@pacemhealth.com" className="text-[#0033A0] hover:underline">
                        legal@pacemhealth.com
                      </a>
                    </div>
                  </div>
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
            <Link to="/cookies">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h4 className="mb-2">Cookie Settings</h4>
                  <p className="text-sm text-muted-foreground">Manage your cookie preferences and tracking settings</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/accessibility">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h4 className="mb-2">Accessibility</h4>
                  <p className="text-sm text-muted-foreground">Learn about our commitment to digital accessibility</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
