import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Switch } from '../../components/ui/switch';
import { Cookie, Mail, Calendar, Shield, Info } from 'lucide-react';

export default function CookieSettingsPage() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#0033A0]">Home</Link>
            <span>/</span>
            <span className="text-foreground">Cookie Settings</span>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Cookie className="h-16 w-16 mx-auto mb-6 text-white/90" />
          <h1 className="text-4xl sm:text-5xl mb-4">Cookie Settings</h1>
          <p className="text-xl text-white/90">
            Manage your cookie preferences and tracking settings
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
            <h2 className="text-2xl mb-4">What Are Cookies?</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and enabling certain features.
            </p>
            <p className="text-muted-foreground">
              We use both first-party cookies (set by Pacem Health) and third-party cookies (set by our service providers) to enhance your browsing experience, analyze site traffic, and personalize content.
            </p>
          </div>

          {/* Cookie Preferences */}
          <div className="mb-12">
            <h2 className="text-2xl mb-6">Manage Cookie Preferences</h2>
            <p className="text-muted-foreground mb-6">
              You can control which types of cookies we use on our website. Please note that disabling certain cookies may affect the functionality of our site.
            </p>

            {/* Essential Cookies */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-5 w-5 text-[#0033A0]" />
                      <h3 className="text-xl">Essential Cookies</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of essential cookies.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="mb-2">Examples:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Session management and authentication</li>
                        <li>• Security and fraud prevention</li>
                        <li>• Load balancing and site performance</li>
                        <li>• Cookie consent preferences</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm text-muted-foreground">Always Active</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Cookies */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">Analytics & Performance Cookies</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our site's performance and user experience.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="mb-2">Examples:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Page view tracking and navigation patterns</li>
                        <li>• Error detection and site performance monitoring</li>
                        <li>• Traffic sources and user demographics</li>
                        <li>• Time spent on pages and bounce rates</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-3">
                        <strong>Service Providers:</strong> Google Analytics, internal analytics tools
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Functional Cookies */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">Functional Cookies</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, and region. They may be set by us or by third-party providers whose services we use.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="mb-2">Examples:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Language and region preferences</li>
                        <li>• Login credentials and account settings</li>
                        <li>• Shopping cart and saved items</li>
                        <li>• Chat and customer support features</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Targeting/Advertising Cookies */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">Targeting & Advertising Cookies</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies are used to deliver advertisements that are relevant to you and your interests. They also help limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="mb-2">Examples:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Personalized advertising and content</li>
                        <li>• Ad frequency capping</li>
                        <li>• Campaign performance measurement</li>
                        <li>• Remarketing and retargeting</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-3">
                        <strong>Service Providers:</strong> Google Ads, LinkedIn Ads, social media platforms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Cookies */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl mb-2">Social Media Cookies</h3>
                    <p className="text-muted-foreground mb-3">
                      These cookies enable you to share content from our website on social media platforms and connect with us through social networks. They may also be used for advertising purposes.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="mb-2">Examples:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Social sharing buttons (LinkedIn, Twitter, YouTube)</li>
                        <li>• Social media login integration</li>
                        <li>• Social media analytics and tracking</li>
                        <li>• Embedded social media content</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-3">
                        <strong>Service Providers:</strong> LinkedIn, Twitter, YouTube, Facebook
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Save Preferences Button */}
            <div className="flex justify-center gap-4 pt-6">
              <Button size="lg" className="bg-[#0033A0] hover:bg-[#00A0DC]">
                Save My Preferences
              </Button>
              <Button size="lg" variant="outline">
                Accept All Cookies
              </Button>
            </div>
          </div>

          {/* Types of Cookies We Use */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Cookie Details</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 border-b">Cookie Name</th>
                    <th className="text-left p-4 border-b">Type</th>
                    <th className="text-left p-4 border-b">Duration</th>
                    <th className="text-left p-4 border-b">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="p-4">session_id</td>
                    <td className="p-4">Essential</td>
                    <td className="p-4">Session</td>
                    <td className="p-4">Maintains user session and authentication</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">csrf_token</td>
                    <td className="p-4">Essential</td>
                    <td className="p-4">Session</td>
                    <td className="p-4">Security and fraud prevention</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">cookie_consent</td>
                    <td className="p-4">Essential</td>
                    <td className="p-4">1 year</td>
                    <td className="p-4">Stores your cookie preferences</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">_ga</td>
                    <td className="p-4">Analytics</td>
                    <td className="p-4">2 years</td>
                    <td className="p-4">Google Analytics - distinguishes users</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">_gid</td>
                    <td className="p-4">Analytics</td>
                    <td className="p-4">24 hours</td>
                    <td className="p-4">Google Analytics - distinguishes users</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">language_pref</td>
                    <td className="p-4">Functional</td>
                    <td className="p-4">1 year</td>
                    <td className="p-4">Remembers language preferences</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">region</td>
                    <td className="p-4">Functional</td>
                    <td className="p-4">1 year</td>
                    <td className="p-4">Stores geographic region preferences</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">_gcl_au</td>
                    <td className="p-4">Advertising</td>
                    <td className="p-4">90 days</td>
                    <td className="p-4">Google Ads conversion tracking</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* How to Control Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">How to Control Cookies in Your Browser</h2>
            <p className="text-muted-foreground mb-6">
              Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. Please note that if you choose to block cookies, some features of our website may not function properly.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3">Google Chrome</h3>
                  <ol className="text-sm text-muted-foreground space-y-2 list-decimal pl-4">
                    <li>Click the menu icon (three dots) in the top right</li>
                    <li>Select "Settings" → "Privacy and security"</li>
                    <li>Click "Cookies and other site data"</li>
                    <li>Choose your preferred cookie settings</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3">Mozilla Firefox</h3>
                  <ol className="text-sm text-muted-foreground space-y-2 list-decimal pl-4">
                    <li>Click the menu icon (three lines) in the top right</li>
                    <li>Select "Settings" → "Privacy & Security"</li>
                    <li>Under "Cookies and Site Data," adjust settings</li>
                    <li>Choose your preferred privacy level</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3">Safari</h3>
                  <ol className="text-sm text-muted-foreground space-y-2 list-decimal pl-4">
                    <li>Click "Safari" in the top menu</li>
                    <li>Select "Preferences" → "Privacy"</li>
                    <li>Adjust cookie and tracking settings</li>
                    <li>Manage website data as needed</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3">Microsoft Edge</h3>
                  <ol className="text-sm text-muted-foreground space-y-2 list-decimal pl-4">
                    <li>Click the menu icon (three dots) in the top right</li>
                    <li>Select "Settings" → "Privacy, search, and services"</li>
                    <li>Under "Tracking prevention," choose your level</li>
                    <li>Manage cookies under "Privacy"</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Third-Party Cookie Services</h2>
            <p className="text-muted-foreground mb-6">
              We work with third-party service providers who may set cookies on our website. You can opt out of these services directly:
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">Google Analytics</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Opt out of Google Analytics tracking across all websites.
                  </p>
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0033A0] hover:underline text-sm"
                  >
                    Google Analytics Opt-Out Browser Add-on →
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2">Advertising Cookies</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Control personalized advertising from participating companies.
                  </p>
                  <div className="space-x-4">
                    <a 
                      href="https://optout.networkadvertising.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0033A0] hover:underline text-sm"
                    >
                      NAI Opt-Out →
                    </a>
                    <a 
                      href="https://optout.aboutads.info/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0033A0] hover:underline text-sm"
                    >
                      DAA Opt-Out →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Do Not Track */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Do Not Track Signals</h2>
            <p className="text-muted-foreground">
              Some browsers have a "Do Not Track" (DNT) feature that signals websites that you do not want to have your online activity tracked. At this time, our website does not respond to DNT browser signals, as there is no consistent industry standard for how to respond to such signals. However, you can use the cookie controls above to manage your preferences.
            </p>
          </div>

          {/* Updates */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Updates to This Cookie Policy</h2>
            <p className="text-muted-foreground">
              We may update this Cookie Settings page from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please check back periodically for updates.
            </p>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Questions About Cookies?</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about our use of cookies or this Cookie Settings page, please contact us:
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
