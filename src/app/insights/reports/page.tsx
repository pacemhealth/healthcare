import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowRight, TrendingUp, Download, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ReportsPage() {
  const reports = [
    {
      title: 'State of African Pharmaceutical Markets 2024',
      type: 'Annual Market Report',
      date: 'March 2024',
      pages: '128 pages',
      description: 'Comprehensive analysis of pharmaceutical markets across 25 African countries, covering market size, growth trends, regulatory landscape, import dependency, local manufacturing capacity, and investment opportunities.',
      keyFindings: [
        'African pharmaceutical market valued at $32.4B (2023), projected 8.2% CAGR',
        'Import dependency remains at 70-80% for most countries',
        'Local manufacturing capacity growing in Nigeria, Kenya, South Africa, Egypt',
        'Regulatory harmonization accelerating through AMRH and regional initiatives',
        'Generic medicines dominate (82%), but branded/specialty segment growing 12% annually'
      ],
      categories: ['Market Analysis', 'Pharmaceuticals', 'Regional Trends']
    },
    {
      title: 'Medical Equipment Procurement in Africa: Challenges and Solutions',
      type: 'Policy Brief',
      date: 'February 2024',
      pages: '42 pages',
      description: 'Analysis of medical equipment procurement challenges across African health systems, examining financing barriers, trade finance gaps, technical capacity constraints, and practical solutions for improving equipment access.',
      keyFindings: [
        '65% of African health facilities report critical equipment shortages',
        'Average procurement lead times: 9-15 months for imported equipment',
        'Limited access to letters of credit and equipment financing',
        'Biomedical engineering capacity gap: 1 technician per 12 facilities average',
        'Trade finance solutions can reduce procurement costs by 25-40%'
      ],
      categories: ['Medical Equipment', 'Procurement', 'Trade Finance']
    },
    {
      title: 'Digital Health Adoption Across Africa: 2023 Assessment',
      type: 'Sector Analysis',
      date: 'December 2023',
      pages: '95 pages',
      description: 'Evaluation of digital health implementation progress across African countries, analyzing infrastructure readiness, technology adoption patterns, policy frameworks, and barriers to scaling digital health solutions.',
      keyFindings: [
        'Mobile health penetration: 68% of community health programs use mHealth tools',
        'National health information systems deployed in 42 African countries',
        'Infrastructure constraints: 45% of health facilities lack reliable electricity',
        'Data privacy regulations established in only 18 African countries',
        'Offline-first solutions showing 85%+ adoption rates vs. 40% for online-only'
      ],
      categories: ['Digital Health', 'Technology', 'Health Systems']
    },
    {
      title: 'Regulatory Harmonization Progress Report: AMRH Implementation Status',
      type: 'Policy Analysis',
      date: 'November 2023',
      pages: '68 pages',
      description: 'Detailed assessment of African Medicines Regulatory Harmonization (AMRH) initiative progress, examining implementation across regional economic communities, regulatory capacity strengthening, and barriers to medicine registration efficiency.',
      keyFindings: [
        'AMRH adopted by 4 Regional Economic Communities covering 32 countries',
        'Medicine registration timelines reduced 35-50% in harmonized systems',
        'ZaZiBoNa initiative (East/Southern Africa) processing 180+ joint applications',
        'Regulatory capacity still limited: only 12 countries have WHO Level 3+ maturity',
        'Harmonization could save industry $85M annually in compliance costs'
      ],
      categories: ['Regulatory Policy', 'Regional Integration', 'Medicine Access']
    },
    {
      title: 'Health Financing Mechanisms for Universal Health Coverage in Africa',
      type: 'Strategic Report',
      date: 'October 2023',
      pages: '112 pages',
      description: 'Comprehensive analysis of health financing strategies across African countries, examining national health insurance schemes, out-of-pocket expenditure trends, donor dependency, and sustainable financing pathways to UHC.',
      keyFindings: [
        'Average out-of-pocket health expenditure in Africa: 36% of total health spending',
        'Only 16 African countries have achieved >50% health insurance coverage',
        'Donor financing still accounts for 28% of health budgets on average',
        'Successful NHIS models in Rwanda, Ghana, Kenya reducing OOP by 45-60%',
        'Domestic resource mobilization increasing but remains below Abuja target'
      ],
      categories: ['Health Financing', 'Universal Health Coverage', 'Policy']
    },
    {
      title: 'Pharmaceutical Supply Chain Efficiency: A Multi-Country Assessment',
      type: 'Technical Report',
      date: 'September 2023',
      pages: '87 pages',
      description: 'Evaluation of pharmaceutical supply chain performance across 15 African countries, analyzing procurement processes, warehousing and storage, distribution networks, last-mile delivery, and inventory management practices.',
      keyFindings: [
        'Average medicine stock-out rate: 28% for essential medicines',
        'Supply chain inefficiencies waste 20-30% of pharmaceutical budgets',
        'Cold chain infrastructure gaps affect vaccine and biologic distribution',
        'Last-mile delivery challenges in rural areas: 40% longer lead times',
        'Vendor-managed inventory systems reduce stock-outs by 60-75%'
      ],
      categories: ['Supply Chain', 'Pharmaceuticals', 'Operations']
    },
    {
      title: 'Workforce Capacity for Health Systems Strengthening',
      type: 'Assessment Report',
      date: 'July 2023',
      pages: '76 pages',
      description: 'Analysis of health workforce challenges across Africa, examining shortage patterns, skill gaps, retention issues, training capacity, and strategies for sustainable workforce development.',
      keyFindings: [
        'Health worker density in Africa: 1.55 per 1,000 population (vs. global 3.5)',
        'Critical shortages in specialized areas: anesthesia, surgery, diagnostics',
        'Pharmacy workforce gap: estimated 150,000 additional pharmacists needed',
        'Brain drain persists: 30-40% of health graduates emigrate within 5 years',
        'Task-shifting strategies successfully expanding access in 8 countries studied'
      ],
      categories: ['Workforce Development', 'Human Resources', 'Capacity Building']
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
              <span>Industry Reports</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              Industry Reports & Analysis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Comprehensive market analyses, policy briefs, and strategic reports on Africa's healthcare landscape and transformation trends
            </p>
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-gray-100">
              Subscribe to Report Updates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Report */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-[#4B2991]">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-[#4B2991] text-white text-sm rounded">
                  Featured Report
                </span>
                <span className="px-3 py-1 bg-[#7C944B] text-white text-sm rounded">
                  New Release
                </span>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl mb-4">
                    State of African Pharmaceutical Markets 2024
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our flagship annual report analyzing pharmaceutical market dynamics, regulatory trends, local manufacturing progress, and investment opportunities across 25 African countries. Essential reading for industry stakeholders, investors, and policymakers.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      March 2024
                    </span>
                    <span>•</span>
                    <span>128 pages</span>
                    <span>•</span>
                    <span>Annual Market Report</span>
                  </div>
                  <Button size="lg" className="bg-[#4B2991] hover:bg-[#3d1e7d] text-white">
                    <Download className="mr-2 h-5 w-5" />
                    Download Full Report
                  </Button>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="mb-4">Key Findings</h3>
                  <ul className="space-y-3">
                    {reports[0].keyFindings.map((finding, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <TrendingUp className="h-4 w-4 text-[#7C944B] flex-shrink-0 mt-0.5" />
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reports List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl mb-2">
              Latest Reports & Analyses
            </h2>
            <p className="text-lg text-muted-foreground">
              In-depth research on Africa's health systems, markets, and policy landscape
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {reports.slice(1).map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                        {report.type}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {report.date}
                      </span>
                    </div>
                    <h3 className="text-xl mb-2">{report.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{report.pages}</p>
                    <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm mb-2">Key Findings</h4>
                    <ul className="space-y-1">
                      {report.keyFindings.slice(0, 3).map((finding, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <TrendingUp className="h-3 w-3 text-[#7C944B] flex-shrink-0 mt-1" />
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {report.categories.map((cat, cIndex) => (
                      <span
                        key={cIndex}
                        className="px-2 py-1 bg-[#4B2991]/10 text-[#4B2991] text-xs rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-[#4B2991] hover:bg-[#3d1e7d] text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Report Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Browse Reports by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access comprehensive analyses across key health system domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <Tag className="h-6 w-6 text-[#4B2991] mb-3" />
                <h3 className="mb-2">Market Analysis</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  15 reports on pharmaceutical markets, medical equipment, and health technology sectors
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Reports <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <Tag className="h-6 w-6 text-[#4B2991] mb-3" />
                <h3 className="mb-2">Policy & Regulation</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  12 policy briefs on regulatory frameworks, harmonization, and governance
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Reports <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <Tag className="h-6 w-6 text-[#4B2991] mb-3" />
                <h3 className="mb-2">Health Financing</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  10 reports on UHC strategies, insurance schemes, and sustainable financing
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Reports <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <Tag className="h-6 w-6 text-[#4B2991] mb-3" />
                <h3 className="mb-2">Supply Chain</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  8 reports on procurement, logistics, distribution, and inventory management
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Reports <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <Tag className="h-6 w-6 text-[#4B2991] mb-3" />
                <h3 className="mb-2">Digital Health</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  9 reports on technology adoption, mHealth, and health information systems
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Reports <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <Tag className="h-6 w-6 text-[#4B2991] mb-3" />
                <h3 className="mb-2">Workforce</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  7 reports on human resources, capacity building, and retention strategies
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Reports <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <Tag className="h-6 w-6 text-[#4B2991] mb-3" />
                <h3 className="mb-2">Infrastructure</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  6 reports on health facility planning, equipment, and physical infrastructure
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Reports <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer">
              <CardContent className="p-6">
                <Tag className="h-6 w-6 text-[#4B2991] mb-3" />
                <h3 className="mb-2">Country Profiles</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  25 country-specific health system assessments and market analyses
                </p>
                <Button variant="link" className="p-0 text-[#4B2991]">
                  View Reports <ArrowRight className="ml-1 h-4 w-4" />
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
            Custom Research & Analysis
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Need tailored market research, feasibility studies, or policy analysis for your specific needs? Commission custom research from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#4B2991] hover:bg-gray-100">
              Request Custom Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Subscribe to Report Library
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
