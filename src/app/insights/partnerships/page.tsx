import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowRight, Users, GraduationCap, BookOpen, Briefcase, Award, Globe, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PartnershipsPage() {
  const partnerUniversities = [
    {
      name: 'University of Nairobi School of Pharmacy',
      country: 'Kenya',
      partnership: 'Research Collaboration & Student Internships',
      focusAreas: ['Clinical pharmacy practice', 'Pharmaceutical care', 'Antimicrobial stewardship'],
      activities: [
        'Joint research on hospital pharmacy service delivery models',
        'Student internship placements in partner hospitals',
        'Faculty exchange and continuing education programs'
      ]
    },
    {
      name: 'Makerere University College of Health Sciences',
      country: 'Uganda',
      partnership: 'Academic Research Partnership',
      focusAreas: ['Health systems research', 'Implementation science', 'Workforce development'],
      activities: [
        'Collaborative research on health system strengthening',
        'PhD student research support and supervision',
        'Joint publications in peer-reviewed journals'
      ]
    },
    {
      name: 'University of Ghana School of Pharmacy',
      country: 'Ghana',
      partnership: 'Training & Capacity Building',
      focusAreas: ['Pharmaceutical management', 'Supply chain optimization', 'Quality assurance'],
      activities: [
        'Pharmacy technician training curriculum development',
        'Practical training sites in partner health facilities',
        'Guest lecturers and continuing professional development'
      ]
    },
    {
      name: 'University of Cape Town School of Public Health',
      country: 'South Africa',
      partnership: 'Policy Research Collaboration',
      focusAreas: ['Health policy analysis', 'Health economics', 'Universal health coverage'],
      activities: [
        'Joint research on health financing mechanisms',
        'Policy brief development and dissemination',
        'Graduate student research opportunities'
      ]
    },
    {
      name: 'Addis Ababa University School of Pharmacy',
      country: 'Ethiopia',
      partnership: 'Clinical Training Partnership',
      focusAreas: ['Hospital pharmacy practice', 'Patient safety', 'Medication management'],
      activities: [
        'Clinical pharmacy rotation sites for students',
        'Pharmacy residency program development',
        'Collaborative clinical research projects'
      ]
    },
    {
      name: 'Kenyatta University School of Medicine',
      country: 'Kenya',
      partnership: 'Medical Equipment Training',
      focusAreas: ['Biomedical engineering', 'Equipment maintenance', 'Technology assessment'],
      activities: [
        'Biomedical technician training programs',
        'Hands-on equipment maintenance workshops',
        'Technology transfer and knowledge exchange'
      ]
    }
  ];

  const researchAreas = [
    {
      title: 'Hospital Pharmacy Practice Research',
      description: 'Advancing evidence for clinical pharmacy implementation in African tertiary hospitals',
      currentProjects: '4 Target',
      publications: '8 Pipeline'
    },
    {
      title: 'Health Systems Implementation Science',
      description: 'Understanding contextual factors for successful health intervention scale-up',
      currentProjects: '3 Target',
      publications: '6 Pipeline'
    },
    {
      title: 'Pharmaceutical Supply Chain Optimization',
      description: 'Research on procurement efficiency, inventory management, and distribution strategies',
      currentProjects: '2 Target',
      publications: '5 Pipeline'
    },
    {
      title: 'Digital Health Technology Assessment',
      description: 'Evaluating effectiveness of mHealth and digital health interventions in African contexts',
      currentProjects: '5 Target',
      publications: '7 Pipeline'
    },
    {
      title: 'Health Workforce Development',
      description: 'Task-shifting, training effectiveness, and retention strategies for health workers',
      currentProjects: '3 Target',
      publications: '4 Pipeline'
    },
    {
      title: 'Regulatory Science & Policy',
      description: 'Examining regulatory harmonization impact and medicine access pathways',
      currentProjects: '2 Target',
      publications: '3 Pipeline'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/insights" className="text-white/80 hover:text-white transition-colors">
                Insights
              </Link>
              <span className="text-white/60">/</span>
              <span>Academic Partnerships</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              Academic Partnerships & Collaborations
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Strategic partnerships with leading African universities advancing health systems research, workforce development, and knowledge translation
            </p>
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-gray-100">
              Explore Partnership Opportunities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Impact */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-1 text-[#4B2991]">15+ Target</div>
                <p className="text-sm text-muted-foreground">Partner Universities Pipeline (Africa)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-1 text-[#4B2991]">200+ Target</div>
                <p className="text-sm text-muted-foreground">Student Internship Capacity (Annual)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-1 text-[#4B2991]">35+ Pipeline</div>
                <p className="text-sm text-muted-foreground">Joint Research Publications (Target)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-1 text-[#4B2991]">12 Target</div>
                <p className="text-sm text-muted-foreground">Research Collaborations (In Development)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl mb-2">
              Partner Universities
            </h2>
            <p className="text-lg text-muted-foreground">
              Collaborating with leading African academic institutions to advance health systems knowledge
            </p>
          </div>

          <div className="space-y-6">
            {partnerUniversities.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <div className="flex items-start gap-3 mb-4">
                        <Users className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl mb-1">{partner.name}</h3>
                          <p className="text-sm text-muted-foreground">{partner.country}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-[#7C944B]/10 text-[#7C944B] text-sm rounded">
                          {partner.partnership}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm mb-3">Focus Areas</h4>
                      <div className="space-y-2">
                        {partner.focusAreas.map((area, aIndex) => (
                          <div key={aIndex} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{area}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm mb-3">Partnership Activities</h4>
                      <ul className="space-y-2">
                        {partner.activities.map((activity, aIndex) => (
                          <li key={aIndex} className="text-sm text-muted-foreground">
                            • {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Collaboration Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Research Collaboration Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Active research partnerships advancing the evidence base for health systems strengthening
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <BookOpen className="h-8 w-8 text-[#4B2991] mb-3" />
                  <h3 className="text-lg mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{area.description}</p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Projects:</span>
                      <span className="ml-1">{area.currentProjects}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Publications:</span>
                      <span className="ml-1">{area.publications}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Student & Early-Career Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hands-on experience and research opportunities for students and early-career professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <GraduationCap className="h-10 w-10 text-[#4B2991] mb-4" />
                <h3 className="text-2xl mb-4">Internship Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Structured internship placements for pharmacy, public health, and biomedical engineering students in our partner health facilities across Africa.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">3-6 month placements in hospital pharmacy departments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Hands-on experience in clinical pharmacy, supply chain, and quality improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Mentorship from experienced health system practitioners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Opportunity to contribute to case studies and publications</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d] text-white">
                  Apply for Internship
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <BookOpen className="h-10 w-10 text-[#4B2991] mb-4" />
                <h3 className="text-2xl mb-4">Research Support</h3>
                <p className="text-muted-foreground mb-4">
                  Support for graduate students conducting thesis research on health systems strengthening, pharmaceutical systems, or health technology implementation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Access to implementation sites for research data collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Technical guidance and methodology support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Co-authorship opportunities on publications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Presentation opportunities at conferences and workshops</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d] text-white">
                  Propose Research Collaboration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <Briefcase className="h-10 w-10 text-[#4B2991] mb-4" />
                <h3 className="text-2xl mb-4">Fellowship Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Competitive fellowships for early-career professionals to gain specialized experience in health systems strengthening and pharmaceutical systems management.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">12-month fellowships with stipend support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Exposure to health system advisory and implementation work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Professional development and skills building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Potential pathway to full-time employment</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d] text-white">
                  View Fellowship Opportunities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <Award className="h-10 w-10 text-[#4B2991] mb-4" />
                <h3 className="text-2xl mb-4">Academic Advisory Board</h3>
                <p className="text-muted-foreground mb-4">
                  Distinguished faculty members providing strategic guidance on research priorities, curriculum development, and knowledge translation strategies.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Quarterly advisory board meetings and strategic planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Guest lecturer opportunities and curriculum input</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Joint grant applications and research funding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Participation in knowledge dissemination activities</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d] text-white">
                  Join Advisory Board
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Benefits of Academic Partnership
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Collaborative relationships that advance research, education, and health system impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-3">For Universities & Faculty</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Access to real-world implementation sites for applied research</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Co-authorship opportunities and publication support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Student internship and practicum placement sites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Curriculum enrichment with practical case studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Joint grant applications and research funding opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Faculty professional development and continuing education</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl mb-3">For Students & Early-Career Professionals</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Hands-on experience in health system strengthening projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Mentorship from experienced practitioners and researchers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Research data collection opportunities for thesis work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Skills development in implementation and operations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Networking with health system leaders across Africa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Pathways to employment in health systems strengthening</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Establish an Academic Partnership
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Partner with Pacem Health to advance health systems research, provide student opportunities, and contribute to the evidence base for Africa's health transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-gray-100">
              Initiate Partnership Discussion
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Download Partnership Framework
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}