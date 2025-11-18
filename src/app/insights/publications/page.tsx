import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowRight, BookOpen, Download, ExternalLink, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PublicationsPage() {
  const publications = [
    {
      title: 'Strengthening Hospital Pharmacy Services in Resource-Limited Settings: A Multi-Country Implementation Framework',
      authors: 'Pacem Health Research Team',
      journal: 'Journal of Pharmaceutical Policy and Practice',
      year: '2024',
      type: 'Peer-Reviewed Article',
      abstract: 'This study presents a comprehensive framework for implementing clinical pharmacy services in African tertiary hospitals, demonstrating 40% reduction in medication errors and 35% improvement in antibiotic stewardship across five country implementations.',
      tags: ['Clinical Pharmacy', 'Implementation Science', 'Patient Safety']
    },
    {
      title: 'Regulatory Harmonization in Africa: Progress, Challenges, and Pathways Forward',
      authors: 'Pacem Health Policy Advisory Team',
      journal: 'Health Policy and Planning',
      year: '2024',
      type: 'White Paper',
      abstract: 'Comprehensive analysis of regulatory harmonization initiatives across African regional economic communities, examining AMRH implementation, ZaZiBoNa progress, and barriers to medicine registration efficiency.',
      tags: ['Regulatory Policy', 'Medicines Access', 'Regional Integration']
    },
    {
      title: 'Digital Health Implementation in Low-Bandwidth Environments: Lessons from 12 African Health Systems',
      authors: 'Pacem Health Digital Health Team',
      journal: 'BMJ Global Health',
      year: '2023',
      type: 'Research Article',
      abstract: 'Evidence from digital health implementations across 12 African countries, demonstrating offline-first mobile health strategies that achieved 85% adoption rates among community health workers despite infrastructure constraints.',
      tags: ['Digital Health', 'mHealth', 'Implementation Research']
    },
    {
      title: 'Medical Equipment Procurement and Lifecycle Management: A Practical Guide for African Health Facilities',
      authors: 'Pacem Health Technical Team',
      journal: 'Technical Brief Series',
      year: '2023',
      type: 'Technical Brief',
      abstract: 'Step-by-step guidance on medical equipment selection, procurement, installation, maintenance, and replacement planning tailored to resource-constrained African health systems.',
      tags: ['Medical Equipment', 'Procurement', 'Asset Management']
    },
    {
      title: 'Sustainable Financing Mechanisms for Essential Medicines: Evidence from National Insurance Schemes',
      authors: 'Pacem Health Financing Advisory Team',
      journal: 'Health Economics Review',
      year: '2023',
      type: 'Policy Analysis',
      abstract: 'Analysis of pharmaceutical financing mechanisms across eight African national health insurance schemes, identifying sustainable models that reduced out-of-pocket expenditure by 45-60% while maintaining essential medicines availability.',
      tags: ['Health Financing', 'Universal Health Coverage', 'Pharmaceuticals']
    },
    {
      title: 'Task-Shifting in Pharmacy Practice: Expanding Access Through Pharmacy Technician Training',
      authors: 'Pacem Health Workforce Development Team',
      journal: 'Human Resources for Health',
      year: '2022',
      type: 'Research Article',
      abstract: 'Multi-country study demonstrating how structured pharmacy technician training programs can safely expand access to pharmaceutical care in pharmacist-scarce settings, with quality outcomes equivalent to pharmacist-only models.',
      tags: ['Workforce Development', 'Task-Shifting', 'Pharmacy Education']
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
              <span>Research Publications</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              Research Publications
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Peer-reviewed research, white papers, and technical publications advancing evidence-based health systems strengthening across Africa
            </p>
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-gray-100">
              Download All Publications
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search publications by title, author, or topic..."
                className="w-full pl-10 pr-4 py-3 border rounded-lg"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filter by Category
            </Button>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl mb-2">
              Latest Research & Publications
            </h2>
            <p className="text-lg text-muted-foreground">
              {publications.length} publications in development pipeline • Regularly updated with new research
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <BookOpen className="h-6 w-6 text-[#4B2991] flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-xl mb-2">{pub.title}</h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                            <span>{pub.authors}</span>
                            <span>•</span>
                            <span className="italic">{pub.journal}</span>
                            <span>•</span>
                            <span>{pub.year}</span>
                            <span>•</span>
                            <span className="px-2 py-1 bg-[#4B2991]/10 text-[#4B2991] rounded">
                              {pub.type}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {pub.abstract}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {pub.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex lg:flex-col gap-2 lg:w-48">
                      <Button className="flex-1 lg:w-full bg-[#4B2991] hover:bg-[#3d1e7d] text-white">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                      <Button variant="outline" className="flex-1 lg:w-full">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Online
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Research Focus Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pacem Health research addresses critical knowledge gaps in Africa's health systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Pharmaceutical Systems Strengthening</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hospital pharmacy service delivery models</li>
                  <li>• Pharmaceutical supply chain optimization</li>
                  <li>• Antimicrobial stewardship programs</li>
                  <li>• Pharmacy workforce development</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Medical Technology & Equipment</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Medical equipment lifecycle management</li>
                  <li>• Biomedical engineering capacity</li>
                  <li>• Equipment procurement strategies</li>
                  <li>• Maintenance and sustainability models</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Digital Health Implementation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Offline-first digital health strategies</li>
                  <li>• mHealth for community health workers</li>
                  <li>• Health information systems integration</li>
                  <li>• Data governance and privacy</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Regulatory & Policy Research</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Regulatory harmonization progress</li>
                  <li>• Medicine registration efficiency</li>
                  <li>• Policy implementation effectiveness</li>
                  <li>• Regional integration mechanisms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Health Financing & Economics</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Universal health coverage pathways</li>
                  <li>• Pharmaceutical financing mechanisms</li>
                  <li>• Cost-effectiveness analyses</li>
                  <li>• Public-private partnership models</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg mb-3">Implementation Science</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Context-specific implementation strategies</li>
                  <li>• Scale-up frameworks for interventions</li>
                  <li>• Sustainability assessment tools</li>
                  <li>• Mixed-methods evaluation approaches</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Collaborate on Health Systems Research
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Partner with Pacem Health on research studies, contribute to our evidence base, or access our data for academic research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-gray-100">
              Propose Research Collaboration
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Request Research Data Access
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}