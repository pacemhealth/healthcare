import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowRight, Presentation, Calendar, MapPin, Users, Video, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EventsSpeakingPage() {
  const upcomingEvents = [
    {
      title: 'African Health Summit 2024',
      type: 'Keynote Presentation',
      date: 'November 15-17, 2024',
      location: 'Kigali, Rwanda',
      role: 'Keynote Speaker',
      topic: 'Strengthening Pharmaceutical Systems: Lessons from 25 African Countries',
      status: 'Upcoming',
      registration: true
    },
    {
      title: 'Digital Health Africa Conference',
      type: 'Panel Discussion',
      date: 'October 22-24, 2024',
      location: 'Nairobi, Kenya',
      role: 'Panel Moderator',
      topic: 'Offline-First Digital Health: Implementation Strategies for Low-Bandwidth Environments',
      status: 'Upcoming',
      registration: true
    },
    {
      title: 'Regulatory Harmonization Webinar Series',
      type: 'Virtual Webinar',
      date: 'October 10, 2024',
      location: 'Online',
      role: 'Featured Speaker',
      topic: 'AMRH Progress Update: Accelerating Medicine Access Through Regional Cooperation',
      status: 'Upcoming',
      registration: true
    }
  ];

  const pastEvents = [
    {
      title: 'Global Health Practitioners Conference',
      type: 'Workshop Facilitator',
      date: 'September 2024',
      location: 'Accra, Ghana',
      topic: 'Hospital Pharmacy Transformation: A Practical Implementation Framework',
      materials: true,
      recording: true,
      attendees: '180+ participants'
    },
    {
      title: 'WHO Africa Regional Forum on Health Systems',
      type: 'Technical Presentation',
      date: 'August 2024',
      location: 'Addis Ababa, Ethiopia',
      topic: 'Medical Equipment Procurement and Lifecycle Management in Resource-Limited Settings',
      materials: true,
      recording: false,
      attendees: '250+ health officials'
    },
    {
      title: 'African Pharmacists Association Annual Meeting',
      type: 'Keynote Address',
      date: 'July 2024',
      location: 'Lagos, Nigeria',
      topic: 'The Future of Pharmacy Practice in Africa: Expanding Clinical Roles and Impact',
      materials: true,
      recording: true,
      attendees: '400+ pharmacists'
    },
    {
      title: 'Health Financing for UHC Webinar',
      type: 'Virtual Presentation',
      date: 'June 2024',
      location: 'Online',
      topic: 'Sustainable Financing Mechanisms for Essential Medicines: Evidence from National Insurance Schemes',
      materials: true,
      recording: true,
      attendees: '320+ participants globally'
    },
    {
      title: 'East African Community Health Ministers Meeting',
      type: 'Policy Briefing',
      date: 'May 2024',
      location: 'Dar es Salaam, Tanzania',
      topic: 'Regional Pharmaceutical Procurement: Opportunities for Cost Savings and Efficiency',
      materials: true,
      recording: false,
      attendees: 'EAC health ministers and senior officials'
    },
    {
      title: 'Medical Device Regulation Workshop',
      type: 'Training Facilitator',
      date: 'April 2024',
      location: 'Johannesburg, South Africa',
      topic: 'Building Regulatory Capacity for Medical Device Assessment and Post-Market Surveillance',
      materials: true,
      recording: false,
      attendees: '65 regulatory authority staff'
    }
  ];

  const webinarSeries = [
    {
      title: 'Hospital Pharmacy Excellence Series',
      episodes: 6,
      description: 'Monthly webinar series on clinical pharmacy implementation, medication safety, and pharmaceutical care best practices',
      nextSession: 'October 15, 2024'
    },
    {
      title: 'Supply Chain Optimization Masterclass',
      episodes: 4,
      description: 'Quarterly deep-dives on pharmaceutical procurement, inventory management, and distribution strategies',
      nextSession: 'November 8, 2024'
    },
    {
      title: 'Digital Health Implementation Office Hours',
      episodes: 12,
      description: 'Bi-monthly Q&A sessions on mHealth, HMIS integration, and digital transformation challenges',
      nextSession: 'October 18, 2024'
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
              <span>Events & Speaking</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              Events & Speaking Engagements
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Connect with our experts at conferences, webinars, and workshops shaping the future of healthcare delivery across Africa
            </p>
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-gray-100">
              View Events Calendar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl mb-2">
              Upcoming Events & Presentations
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet our team at these upcoming conferences and events
            </p>
          </div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-l-4 border-l-[#7C944B] hover:shadow-lg transition-all">
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-[#7C944B] text-white text-sm rounded">
                          {event.status}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-2xl mb-3">{event.title}</h3>
                      <div className="space-y-2 mb-4">
                        <p className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {event.date}
                        </p>
                        <p className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {event.location}
                        </p>
                        <p className="flex items-center gap-2 text-muted-foreground">
                          <Presentation className="h-4 w-4" />
                          {event.role}
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg mb-4">
                        <p className="text-sm mb-1">Presentation Topic:</p>
                        <p className="text-sm">{event.topic}</p>
                      </div>
                    </div>
                    <div className="lg:w-64 flex flex-col gap-3">
                      {event.registration && (
                        <>
                          <Button className="w-full bg-[#7C944B] hover:bg-[#6c843e] text-white">
                            Register to Attend
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full">
                            Add to Calendar
                            <Calendar className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline" className="w-full">
                            Request Speaker Info
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar Series */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Ongoing Webinar Series
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our regular webinar series covering critical health system topics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {webinarSeries.map((series, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Video className="h-8 w-8 text-[#4B2991] mb-3" />
                  <h3 className="text-lg mb-2">{series.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {series.description}
                  </p>
                  <div className="space-y-2 mb-4 text-sm">
                    <p>
                      <span className="text-muted-foreground">Episodes:</span>{' '}
                      <span>{series.episodes} sessions</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground">Next Session:</span>{' '}
                      <span>{series.nextSession}</span>
                    </p>
                  </div>
                  <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d] text-white">
                    Register for Series
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl mb-2">
              Past Events & Presentations
            </h2>
            <p className="text-lg text-muted-foreground">
              Access materials and recordings from previous speaking engagements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-xl mb-2">{event.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground mb-3">
                      <p className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </p>
                      <p className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {event.attendees}
                      </p>
                    </div>
                    <p className="text-sm mb-4">{event.topic}</p>
                  </div>

                  <div className="flex gap-2">
                    {event.materials && (
                      <Button variant="outline" className="flex-1">
                        <Download className="mr-2 h-4 w-4" />
                        Materials
                      </Button>
                    )}
                    {event.recording && (
                      <Button variant="outline" className="flex-1">
                        <Video className="mr-2 h-4 w-4" />
                        Recording
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Speaking Topics & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our experts deliver presentations on these critical health system topics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Pharmaceutical Systems Strengthening</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hospital pharmacy transformation strategies</li>
                  <li>• Clinical pharmacy service implementation</li>
                  <li>• Medication safety and antimicrobial stewardship</li>
                  <li>• Pharmacy workforce development</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Supply Chain & Procurement</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Pharmaceutical procurement optimization</li>
                  <li>• Supply chain efficiency strategies</li>
                  <li>• Inventory management best practices</li>
                  <li>• Last-mile delivery solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Medical Equipment Management</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Equipment procurement and lifecycle planning</li>
                  <li>• Biomedical engineering capacity building</li>
                  <li>• Preventive maintenance strategies</li>
                  <li>• Trade finance for equipment acquisition</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Digital Health Implementation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Offline-first digital health strategies</li>
                  <li>• mHealth for community health workers</li>
                  <li>• HMIS integration and interoperability</li>
                  <li>• Data governance and privacy frameworks</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Regulatory Policy & Harmonization</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• AMRH implementation and progress</li>
                  <li>• Medicine registration efficiency</li>
                  <li>• Regulatory capacity strengthening</li>
                  <li>• Regional integration mechanisms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-3">Health Financing & Sustainability</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Universal health coverage pathways</li>
                  <li>• National health insurance design</li>
                  <li>• Pharmaceutical financing mechanisms</li>
                  <li>• Public-private partnership models</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Invite Our Experts to Speak
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Request a Pacem Health expert speaker for your conference, workshop, webinar, or training event. We share practical implementation insights from health system strengthening across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-gray-100">
              Request Speaker
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Subscribe to Event Notifications
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
