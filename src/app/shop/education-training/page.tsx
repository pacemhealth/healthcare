import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { CheckCircle2, Users, Video, BookOpen, Award, Clock, Globe, Target } from 'lucide-react';

export default function EducationTrainingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0033A0] to-[#002875] text-white overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,160,220,0.1),transparent)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4 text-sm">
              <Link to="/shop" className="text-white/80 hover:text-white transition-colors">
                Shop
              </Link>
              <span className="text-white/60">/</span>
              <span>Education & Training</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Education & Training</h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6">
              Comprehensive training programs for healthcare professionals to build capacity, enhance skills, and ensure optimal use of Pacem Health equipment and systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/support/request-equipment-quote">
                <Button size="lg" className="bg-white text-[#0033A0] hover:bg-white/90">
                  Request Training Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Comprehensive Training Programs</h2>
            <p className="text-lg text-muted-foreground">
              From basic equipment operation to advanced system administration, we provide training that builds lasting healthcare capacity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0033A0]/10 text-[#0033A0] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <div className="text-2xl mb-1">15+</div>
                <p className="text-sm text-muted-foreground">African countries served</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#00A0DC]/10 text-[#00A0DC] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="text-2xl mb-1">50+</div>
                <p className="text-sm text-muted-foreground">Training modules available</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0033A0]/10 text-[#0033A0] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <div className="text-2xl mb-1">ISO</div>
                <p className="text-sm text-muted-foreground">Certified training programs</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#00A0DC]/10 text-[#00A0DC] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <div className="text-2xl mb-1">24/7</div>
                <p className="text-sm text-muted-foreground">Training support available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Training Programs</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Staff Onboarding Programs */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl mb-3">Staff Onboarding Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive orientation programs for new healthcare staff to ensure safe and effective equipment operation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Equipment safety protocols and risk management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Basic operation and routine maintenance procedures</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Troubleshooting common issues and error codes</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Documentation and record-keeping requirements</span>
                  </li>
                </ul>
                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                    Request Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Simulation Labs & Skills Bridge */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl mb-3">Simulation Labs & Skills Bridge</h3>
                <p className="text-muted-foreground mb-4">
                  Hands-on training in controlled environments to build confidence and competence before working with real patients.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>Realistic clinical scenarios and case-based learning</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>High-fidelity simulation mannequins and equipment</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>Team-based training and interprofessional collaboration</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>Performance feedback and skills assessment</span>
                  </li>
                </ul>
                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                    Request Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Technical Training for Maintenance Teams */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl mb-3">Technical Training for Maintenance Teams</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized training for biomedical engineers and maintenance staff to ensure proper equipment care and repair.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Preventive maintenance schedules and procedures</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Diagnostic techniques and repair methodologies</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Calibration and performance verification testing</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Spare parts management and inventory control</span>
                  </li>
                </ul>
                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                    Request Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Digital Tools Orientation */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl mb-3">Digital Tools Orientation</h3>
                <p className="text-muted-foreground mb-4">
                  Training on electronic health records, remote patient monitoring, and other digital health technologies.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>EMR system navigation and clinical documentation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>Data entry accuracy and quality assurance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>Remote monitoring platforms and telehealth tools</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>Data privacy, security, and compliance protocols</span>
                  </li>
                </ul>
                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                    Request Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Delivery Methods */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Training Delivery Methods</h2>
            <p className="text-lg text-muted-foreground">
              We offer multiple training delivery options to meet your facility's needs and schedule
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-[#0033A0]/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0033A0] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <span>1</span>
                  </div>
                  <h3 className="text-lg">On-Site Training</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  In-person training at your facility with hands-on equipment and personalized instruction.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0]" />
                    <span>Hands-on practice</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0]" />
                    <span>Real equipment training</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0]" />
                    <span>Custom scheduling</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00A0DC]/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#00A0DC] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <span>2</span>
                  </div>
                  <h3 className="text-lg">Virtual Training</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Live online training sessions with interactive demonstrations and real-time Q&A.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC]" />
                    <span>Live instruction</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC]" />
                    <span>Interactive demos</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC]" />
                    <span>Cost-effective</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#0033A0]/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0033A0] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <span>3</span>
                  </div>
                  <h3 className="text-lg">Self-Paced Learning</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Online modules and video tutorials for flexible learning at your own pace.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0]" />
                    <span>Learn anytime</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0]" />
                    <span>Video libraries</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0]" />
                    <span>Knowledge assessments</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00A0DC]/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#00A0DC] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <span>4</span>
                  </div>
                  <h3 className="text-lg">Certification Programs</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Structured programs leading to recognized certifications in equipment operation.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC]" />
                    <span>Accredited programs</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC]" />
                    <span>Professional credentials</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC]" />
                    <span>Career advancement</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#0033A0]/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#0033A0] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <span>5</span>
                  </div>
                  <h3 className="text-lg">Refresher Courses</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Ongoing training to maintain skills and stay updated with new features.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0]" />
                    <span>Skills maintenance</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0]" />
                    <span>Feature updates</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0]" />
                    <span>Flexible formats</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00A0DC]/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#00A0DC] text-white rounded-lg flex items-center justify-center flex-shrink-0">
                    <span>6</span>
                  </div>
                  <h3 className="text-lg">Train-the-Trainer</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Advanced training for staff who will train others in your organization.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC]" />
                    <span>Trainer development</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC]" />
                    <span>Teaching materials</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-[#00A0DC]" />
                    <span>Sustainable capacity</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Resources */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl mb-4">Training Resources & Materials</h2>
            <p className="text-lg text-muted-foreground">
              Access comprehensive training materials and resources to support your learning journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0033A0] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-lg mb-2">Training Manuals</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive guides covering all aspects of equipment operation and maintenance.
                </p>
                <Button variant="outline" className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0] hover:text-white">
                  Access Manuals
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#00A0DC] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Video className="h-6 w-6" />
                </div>
                <h3 className="text-lg mb-2">Video Tutorials</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Step-by-step video guides for common procedures and troubleshooting.
                </p>
                <Button variant="outline" className="w-full border-[#00A0DC] text-[#00A0DC] hover:bg-[#00A0DC] hover:text-white">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#0033A0] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg mb-2">Interactive Quizzes</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Knowledge assessments to test understanding and identify areas for improvement.
                </p>
                <Button variant="outline" className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0] hover:text-white">
                  Take Quizzes
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#00A0DC] text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg mb-2">Certification Tracks</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Structured learning paths leading to professional certifications.
                </p>
                <Button variant="outline" className="w-full border-[#00A0DC] text-[#00A0DC] hover:bg-[#00A0DC] hover:text-white">
                  View Tracks
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Training Packages */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8 text-center">Popular Training Packages</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-2 border-[#0033A0]/20">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-[#0033A0]/10 text-[#0033A0]">Starter Package</Badge>
                <h3 className="text-2xl mb-4">Basic Equipment Training</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Essential training for basic equipment operation and safety protocols. Perfect for new equipment deployments and staff onboarding.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Up to 20 participants</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>2-day on-site training</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Training manuals included</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>30-day email support</span>
                  </li>
                </ul>
                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                    Request Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#00A0DC]">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-[#00A0DC] text-white">Most Popular</Badge>
                <h3 className="text-2xl mb-4">Comprehensive Training</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Complete training package with advanced modules and ongoing support. Ideal for healthcare facilities implementing new systems or upgrading capabilities.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>Up to 30 participants</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>5-day on-site training</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>All training materials</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>Hands-on simulation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>Professional certification</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>90-day technical support</span>
                  </li>
                </ul>
                <Link to="/support/request-equipment-quote">
                  <Button className="w-full bg-[#00A0DC] hover:bg-[#0088bb]">
                    Request Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#0033A0]/20">
              <CardContent className="p-6">
                <Badge className="mb-4 bg-[#0033A0]/10 text-[#0033A0]">Enterprise</Badge>
                <h3 className="text-2xl mb-4">Custom Training Program</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Tailored training solution designed for your organization's specific needs. Best for ministries of health, hospital networks, and large-scale system implementations.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Unlimited participants</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Custom duration & schedule</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Customized curriculum</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Train-the-trainer program</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Ongoing support package</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <Link to="/support/request-equipment-quote">
                  <Button variant="outline" className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0] hover:text-white">
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4">Ready to Enhance Your Skills?</h2>
          <p className="text-lg text-white/90 mb-8">
            Join our training programs to build healthcare capacity and ensure optimal use of your Pacem Health equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-white/90">
              Schedule Training
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Training Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}