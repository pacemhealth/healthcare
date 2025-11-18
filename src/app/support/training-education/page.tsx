import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { Calendar, Users, Award, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TrainingEducationPage() {
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
              <span>Training & Education</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Training & Education Support</h1>
            <p className="text-lg sm:text-xl text-white/90">
              Comprehensive training programs for healthcare professionals, biomedical engineers, and technical staff. From equipment operation to advanced maintenance, we ensure your team is fully prepared.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Comprehensive Training Programs
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              From basic equipment operation to advanced system administration, we provide training that builds lasting healthcare capacity.
            </p>
          </div>

          {/* Training Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Staff Onboarding Programs */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-2">Staff Onboarding Programs</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Comprehensive orientation programs for new healthcare staff to ensure safe and effective equipment operation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Equipment Safety Training
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Standard Operating Procedures
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Emergency Response Protocols
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Quality Assurance Standards
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Simulation Labs & Skills Bridge */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-2">Simulation Labs & Skills Bridge</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Hands-on training in controlled environments to build confidence and competence before working with real patients.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Virtual Reality Training
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Equipment Simulation
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Scenario-Based Learning
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Skills Assessment
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Technical Training for Maintenance Teams */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-2">Technical Training for Maintenance Teams</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Specialized training for biomedical engineers and maintenance staff to ensure proper equipment care and repair.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Preventive Maintenance
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Troubleshooting Techniques
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Parts Replacement
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Calibration Procedures
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Digital Tools Orientation */}
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl mb-2">Digital Tools Orientation</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Training on electronic health records, remote patient monitoring, and other digital health technologies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    EHR System Training
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Data Entry Best Practices
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Security & Privacy
                  </li>
                  <li className="flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full" />
                    Workflow Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Delivery Methods */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Training Delivery Methods
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              We offer multiple training delivery options to meet your facility's needs and schedule
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Method 1: On-Site Training */}
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#4B2991] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">1</span>
                </div>
                <h3 className="text-xl sm:text-2xl mb-3">On-Site Training</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  In-person training at your facility with hands-on equipment and personalized instruction.
                </p>
              </CardContent>
            </Card>

            {/* Method 2: Virtual Training */}
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#4B2991] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">2</span>
                </div>
                <h3 className="text-xl sm:text-2xl mb-3">Virtual Training</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Live online training sessions with interactive demonstrations and real-time Q&A.
                </p>
              </CardContent>
            </Card>

            {/* Method 3: Self-Paced Learning */}
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#4B2991] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">3</span>
                </div>
                <h3 className="text-xl sm:text-2xl mb-3">Self-Paced Learning</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Online modules and video tutorials for flexible learning at your own pace.
                </p>
              </CardContent>
            </Card>

            {/* Method 4: Certification Programs */}
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#4B2991] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">4</span>
                </div>
                <h3 className="text-xl sm:text-2xl mb-3">Certification Programs</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Structured programs leading to recognized certifications in equipment operation.
                </p>
              </CardContent>
            </Card>

            {/* Method 5: Refresher Courses */}
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#4B2991] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">5</span>
                </div>
                <h3 className="text-xl sm:text-2xl mb-3">Refresher Courses</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Ongoing training to maintain skills and stay updated with new features.
                </p>
              </CardContent>
            </Card>

            {/* Method 6: Train-the-Trainer */}
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#4B2991] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">6</span>
                </div>
                <h3 className="text-xl sm:text-2xl mb-3">Train-the-Trainer</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Advanced training for staff who will train others in your organization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Resources & Materials */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
              Training Resources & Materials
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Access comprehensive training materials and resources to support your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Training Manuals */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl mb-3">Training Manuals</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Comprehensive guides covering all aspects of equipment operation and maintenance.
                </p>
                <Button variant="outline" className="border-[#4B2991] text-[#4B2991] hover:bg-[#4B2991] hover:text-white w-full">
                  Access Manuals
                </Button>
              </CardContent>
            </Card>

            {/* Video Tutorials */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl mb-3">Video Tutorials</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Step-by-step video guides for common procedures and troubleshooting.
                </p>
                <Button variant="outline" className="border-[#7C944B] text-[#7C944B] hover:bg-[#7C944B] hover:text-white w-full">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            {/* Interactive Quizzes */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl mb-3">Interactive Quizzes</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Knowledge assessments to test understanding and identify areas for improvement.
                </p>
                <Button variant="outline" className="border-[#4B2991] text-[#4B2991] hover:bg-[#4B2991] hover:text-white w-full">
                  Take Quizzes
                </Button>
              </CardContent>
            </Card>

            {/* Certification Tracks */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl mb-3">Certification Tracks</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Structured learning paths leading to professional certifications.
                </p>
                <Button variant="outline" className="border-[#7C944B] text-[#7C944B] hover:bg-[#7C944B] hover:text-white w-full">
                  View Tracks
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-4">
            Ready to Enhance Your Skills?
          </h2>
          <p className="text-base sm:text-lg mb-8 text-white/90">
            Join our training programs to build healthcare capacity and ensure optimal use of your Pacem Health equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-gray-100 w-full sm:w-auto">
              Schedule Training
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              View Training Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}