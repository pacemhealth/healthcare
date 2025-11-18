import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowRight, FileText, Download, MapPin, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'National Teaching Hospital Pharmacy Transformation',
      location: 'East Africa',
      sector: 'Hospital Pharmacy Services',
      challenge: 'A 500-bed national teaching hospital struggled with medication stock-outs (45% incidence), medication errors (12 per 1000 doses), no clinical pharmacy services, paper-based inventory management, and inadequate pharmacist training.',
      solution: 'Implemented comprehensive hospital pharmacy transformation including digital inventory management system, clinical pharmacy service protocols, pharmacist training program, medication safety systems, and supply chain optimization.',
      outcomes: [
        'Stock-outs reduced from 45% to 3% within 12 months',
        'Medication errors decreased by 78% (from 12 to 2.6 per 1000 doses)',
        'Clinical pharmacy consultations: 850+ patients/month',
        'Antibiotic stewardship compliance improved from 35% to 87%',
        '40% reduction in medication waste through better inventory management'
      ],
      impact: 'Over 15,000 patients receiving improved pharmaceutical care annually',
      year: '2023-2024'
    },
    {
      title: 'Regional Medical Equipment Deployment for District Hospitals',
      location: 'West Africa (4 countries)',
      sector: 'Medical Equipment & Infrastructure',
      challenge: 'Fifteen district hospitals lacked essential diagnostic equipment (X-ray, ultrasound, laboratory analyzers), had no biomedical engineering capacity, faced frequent equipment downtime, and relied on referrals to tertiary centers for basic diagnostics.',
      solution: 'Comprehensive medical equipment deployment with installation support, biomedical technician training, preventive maintenance programs, spare parts supply agreements, and remote technical support systems.',
      outcomes: [
        'Successfully installed and commissioned 45 pieces of diagnostic equipment',
        'Trained 28 biomedical technicians across 15 facilities',
        'Equipment uptime improved from 52% to 91% average',
        'Diagnostic referrals reduced by 65% in 12 months',
        'Patient wait times for diagnostics decreased from 8 days to same-day service'
      ],
      impact: 'Extended diagnostic services to 800,000+ population in underserved districts',
      year: '2022-2023'
    },
    {
      title: 'Digital Health Platform Implementation for Primary Care Network',
      location: 'Southern Africa',
      sector: 'Digital Health & Data Systems',
      challenge: 'A network of 120 primary health clinics used paper-based patient records, had no centralized health data system, faced challenges tracking chronic disease patients, and could not monitor health outcomes or program effectiveness.',
      solution: 'Deployed offline-first mobile health platform for community health workers, integrated with national DHIS2 system, provided tablets and solar charging solutions, trained 450+ health workers, and established data quality assurance systems.',
      outcomes: [
        '450 community health workers using digital tools (92% adoption rate)',
        'Electronic health records for 180,000+ patients',
        'Chronic disease follow-up improved from 48% to 86%',
        'Real-time disease surveillance enabling outbreak detection',
        'Data completeness increased from 62% to 95%'
      ],
      impact: 'Strengthened primary care delivery for rural population of 350,000',
      year: '2023-2024'
    },
    {
      title: 'National Essential Medicines Procurement Optimization',
      location: 'Central Africa',
      sector: 'Supply Chain & Procurement',
      challenge: 'Ministry of Health faced fragmented procurement (23 separate tenders annually), limited bargaining power, 6-9 month procurement cycles, frequent stock-outs of essential medicines, and 30% budget wastage through inefficient purchasing.',
      solution: 'Designed and implemented pooled procurement mechanism, annual framework contracts with manufacturers, trade finance arrangements, vendor-managed inventory systems, and procurement capacity building for MOH staff.',
      outcomes: [
        'Consolidated to 4 annual framework contracts (from 23 tenders)',
        'Procurement costs reduced by 35% through volume pooling',
        'Lead times decreased from 6-9 months to 60-90 days',
        'Essential medicine availability increased from 65% to 91%',
        'Freed up $2.8M in budget for expanded medicine access'
      ],
      impact: 'Improved medicine access for national population of 12 million',
      year: '2022-2023'
    },
    {
      title: 'Pediatric Pharmacy Service Development in Tertiary Hospital',
      location: 'East Africa',
      sector: 'Specialized Pharmacy Services',
      challenge: 'Children\'s hospital had no specialized pediatric pharmacy services, age-inappropriate medication formulations, dosing errors in pediatric patients (18 per 1000 doses), and pharmacists lacked pediatric training.',
      solution: 'Established dedicated pediatric pharmacy service with specialized pharmacist training, pediatric dosing protocols and tools, extemporaneous compounding capabilities, medication counseling services, and pediatric clinical rounds integration.',
      outcomes: [
        'Pediatric dosing errors reduced by 82% (from 18 to 3.2 per 1000 doses)',
        'Established extemporaneous compounding for 45+ pediatric formulations',
        '3 pharmacists completed pediatric pharmacy certification',
        'Pediatric medication counseling for 95% of discharged patients',
        'Identified and prevented 280+ potential medication problems in first year'
      ],
      impact: 'Enhanced medication safety for 8,500+ pediatric admissions annually',
      year: '2023-2024'
    },
    {
      title: 'Community Health Worker Supply Chain Integration',
      location: 'West Africa',
      sector: 'Community Health & Last-Mile Delivery',
      challenge: 'Community health workers (CHWs) serving remote villages experienced frequent commodity stock-outs, traveled 2-3 days monthly for resupply, lacked visibility into supply availability, and faced no standardized ordering mechanisms.',
      solution: 'Implemented mobile-based ordering system for CHWs, established hub-and-spoke distribution model, provided motorcycles for supply delivery, integrated with national supply chain data, and trained supervisors on supply management.',
      outcomes: [
        'Stock-out incidents reduced by 73% across 250+ CHW posts',
        'CHW resupply travel time reduced from 2-3 days to same-day delivery',
        'Mobile ordering system adoption: 94% of CHWs',
        'Supply chain visibility enabled demand forecasting',
        'Community-level service availability increased from 68% to 92%'
      ],
      impact: 'Strengthened primary healthcare access for 180,000 rural population',
      year: '2022-2023'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0033A0] to-[#002d8f] text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/insights" className="text-white/80 hover:text-white transition-colors">
                Insights
              </Link>
              <span className="text-white/60">/</span>
              <span>Case Studies</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              Case Studies & Success Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Real-world implementation stories demonstrating measurable health outcomes from health system strengthening initiatives across Africa
            </p>
            <Button size="lg" className="bg-[#00A0DC] text-white hover:bg-[#0090cc]">
              Download Case Study Collection
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2 text-[#0033A0]">25+ Target</div>
                <p className="text-sm text-muted-foreground">Country Pipeline for Documented Impact</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2 text-[#0033A0]">150+ Target</div>
                <p className="text-sm text-muted-foreground">Health Facilities in Development Pipeline</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2 text-[#0033A0]">2.5M+ Target</div>
                <p className="text-sm text-muted-foreground">Patient Impact Projection (Annual)</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2 text-[#0033A0]">60+ Target</div>
                <p className="text-sm text-muted-foreground">Case Studies in Development</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl mb-2">
              Featured Case Studies
            </h2>
            <p className="text-lg text-muted-foreground">
              Implementation stories demonstrating real-world impact and measurable outcomes
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3">{study.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {study.location}
                        </span>
                        <span className="px-3 py-1 bg-[#4B2991]/10 text-[#4B2991] rounded">
                          {study.sector}
                        </span>
                        <span className="text-muted-foreground">{study.year}</span>
                      </div>
                    </div>
                    <Button className="bg-[#4B2991] hover:bg-[#3d1e7d]">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Challenge & Solution */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2 text-red-600">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="mb-2 text-[#7C944B]">Solution</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-[#4B2991]" />
                        Key Outcomes & Results
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {study.outcomes.map((outcome, oIndex) => (
                          <li key={oIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="p-4 bg-[#7C944B]/10 rounded-lg">
                        <div className="flex items-start gap-2">
                          <Users className="h-5 w-5 text-[#7C944B] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm mb-1">Population Impact</p>
                            <p className="text-sm text-muted-foreground">{study.impact}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Case Studies by Focus Area
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Browse implementation stories across different health system strengthening domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-[#4B2991] mb-3" />
                <h3 className="text-lg mb-2">Hospital Pharmacy Transformation</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  12 case studies on clinical pharmacy implementation, medication safety, and pharmaceutical care
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Case Studies <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-[#4B2991] mb-3" />
                <h3 className="text-lg mb-2">Medical Equipment Deployment</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  8 case studies on diagnostic equipment, biomedical maintenance, and infrastructure
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Case Studies <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-[#4B2991] mb-3" />
                <h3 className="text-lg mb-2">Digital Health Implementation</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  10 case studies on mHealth, health information systems, and digital transformation
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Case Studies <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-[#4B2991] mb-3" />
                <h3 className="text-lg mb-2">Supply Chain Optimization</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  9 case studies on procurement, logistics, inventory management, and last-mile delivery
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Case Studies <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-[#4B2991] mb-3" />
                <h3 className="text-lg mb-2">Workforce Development</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  7 case studies on training programs, capacity building, and clinical skills development
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Case Studies <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <FileText className="h-8 w-8 text-[#4B2991] mb-3" />
                <h3 className="text-lg mb-2">Quality Improvement</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  6 case studies on accreditation, patient safety, infection control, and clinical governance
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Case Studies <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Share Your Implementation Story
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Partner with us to document and share your health system strengthening success story with the global health community.
          </p>
          <Button size="lg" className="bg-white text-[#4B2991] hover:bg-gray-100">
            Submit Your Case Study
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}