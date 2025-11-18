import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Shield, Mail, Download, Calendar } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#0033A0]">Home</Link>
            <span>/</span>
            <span className="text-foreground">Privacy Policy</span>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-white/90" />
          <h1 className="text-4xl sm:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90">
            Protecting your privacy and data security
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
                Pacem Health Inc. ("Pacem Health," "we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any capacity.
              </p>
              <p className="text-muted-foreground">
                This policy applies to all users of our website and services, including healthcare institutions, government agencies, development partners, vendors, employees, and other stakeholders.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl mb-3">1.1 Personal Information You Provide</h3>
              <p className="text-muted-foreground mb-4">
                We collect information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Contact information (name, email address, phone number, mailing address)</li>
                <li>Professional information (job title, organization, department)</li>
                <li>Account credentials (username, password)</li>
                <li>Business information (company name, tax ID, registration details)</li>
                <li>Payment and billing information (credit card details, bank account information)</li>
                <li>Communications with us (emails, support requests, inquiries)</li>
                <li>Event registration information</li>
                <li>Employment application information (resume, cover letter, references)</li>
              </ul>

              <h3 className="text-xl mb-3">1.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                When you access our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, links clicked)</li>
                <li>Location data (general geographic location based on IP address)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl mb-3">1.3 Information from Third Parties</h3>
              <p className="text-muted-foreground mb-4">
                We may receive information about you from third parties, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Business partners and affiliates</li>
                <li>Healthcare institutions and government agencies we work with</li>
                <li>Public databases and directories</li>
                <li>Social media platforms (if you interact with our social media pages)</li>
                <li>Background check and verification services (for employment)</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our products and services</li>
                <li><strong>Order Processing:</strong> To process transactions, fulfill orders, and manage inventory</li>
                <li><strong>Communication:</strong> To respond to inquiries, provide customer support, and send important updates</li>
                <li><strong>Business Operations:</strong> To manage partnerships, contracts, and business relationships</li>
                <li><strong>Marketing:</strong> To send promotional materials and information about our services (with your consent)</li>
                <li><strong>Analytics:</strong> To analyze usage patterns and improve our website and services</li>
                <li><strong>Security:</strong> To detect, prevent, and address fraud, security issues, and technical problems</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                <li><strong>Employment:</strong> To evaluate job applications and manage employment relationships</li>
              </ul>
            </div>

            {/* How We Share Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">3. How We Share Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We may share your information in the following circumstances:
              </p>
              
              <h3 className="text-xl mb-3">3.1 Service Providers</h3>
              <p className="text-muted-foreground mb-4">
                We share information with third-party service providers who perform services on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and logistics.
              </p>

              <h3 className="text-xl mb-3">3.2 Business Partners</h3>
              <p className="text-muted-foreground mb-4">
                We may share information with our business partners, including healthcare institutions, government agencies, development banks, and other organizations we collaborate with to deliver our services.
              </p>

              <h3 className="text-xl mb-3">3.3 Legal Requirements</h3>
              <p className="text-muted-foreground mb-4">
                We may disclose your information to comply with applicable laws, regulations, legal processes, or governmental requests, including:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>In response to a subpoena, court order, or legal process</li>
                <li>To protect our rights, property, or safety, or that of others</li>
                <li>To investigate fraud, security issues, or violations of our policies</li>
                <li>As required by U.S. federal and state regulations</li>
              </ul>

              <h3 className="text-xl mb-3">3.4 Business Transfers</h3>
              <p className="text-muted-foreground mb-4">
                In connection with any merger, acquisition, sale of assets, or bankruptcy, your information may be transferred to the acquiring entity.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection and security</li>
                <li>Secure data centers and backup systems</li>
              </ul>
              <p className="text-muted-foreground">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights and Choices */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">5. Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location and applicable law, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-Out:</strong> Opt out of marketing communications by following unsubscribe instructions</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to certain processing of your personal information</li>
              </ul>
              <p className="text-muted-foreground">
                To exercise these rights, please contact us at <a href="mailto:privacy@pacemhealth.com" className="text-[#0033A0] hover:underline">privacy@pacemhealth.com</a>.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities. Cookies are small text files stored on your device that help us improve your experience, analyze usage, and deliver relevant content.
              </p>
              <p className="text-muted-foreground mb-4">
                You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
              </p>
              <p className="text-muted-foreground">
                For more information, please see our <Link to="/cookies" className="text-[#0033A0] hover:underline">Cookie Settings</Link>.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">7. International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                Pacem Health is based in the United States. If you are accessing our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States and other countries where our service providers operate.
              </p>
              <p className="text-muted-foreground">
                By using our services, you consent to the transfer of your information to the United States and other countries that may have different data protection laws than your country of residence.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not directed to children under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">9. Data Retention</h2>
              <p className="text-muted-foreground mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Factors we consider in determining retention periods include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>The nature and sensitivity of the information</li>
                <li>Legal and regulatory requirements</li>
                <li>Contractual obligations</li>
                <li>Business and operational needs</li>
                <li>Potential for disputes or litigation</li>
              </ul>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">10. Third-Party Websites and Services</h2>
              <p className="text-muted-foreground">
                Our website may contain links to third-party websites and services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <p><strong>Pacem Health Inc.</strong></p>
                    <p className="text-muted-foreground">Privacy Officer</p>
                    <p className="text-muted-foreground">Washington, D.C., United States</p>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <a href="mailto:privacy@pacemhealth.com" className="text-[#0033A0] hover:underline">
                        privacy@pacemhealth.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* California Privacy Rights */}
            <div className="mb-12">
              <h2 className="text-2xl mb-4">13. California Privacy Rights</h2>
              <p className="text-muted-foreground mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
                <li>Right to know what personal information is collected, used, shared, or sold</li>
                <li>Right to delete personal information held by us</li>
                <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising your CCPA rights</li>
              </ul>
              <p className="text-muted-foreground">
                To exercise these rights, please contact us at <a href="mailto:privacy@pacemhealth.com" className="text-[#0033A0] hover:underline">privacy@pacemhealth.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl mb-6">Related Information</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/terms">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <h4 className="mb-2">Terms of Service</h4>
                  <p className="text-sm text-muted-foreground">Review our terms and conditions for using Pacem Health services</p>
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
