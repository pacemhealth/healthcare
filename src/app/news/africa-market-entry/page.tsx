import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowLeft, ArrowRight, Calendar, Tag } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import africaMapImage from 'figma:asset/0a373e2b222cb18aa8ef1f502b1c25341acdd119.png';

export default function AfricaMarketEntryPage() {
  const relatedNews = [
    {
      title: 'Pacem Health Officially Launches',
      category: 'Company Announcement',
      date: 'February 2025',
      slug: '/news/pacem-health-launches',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      title: 'Comprehensive Medical Product Catalog Unveiled',
      category: 'Product Launch',
      date: 'February 2025',
      slug: '/news/product-catalog-launch',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white overflow-hidden min-h-[400px] flex items-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="mb-6">
            <Link to="/news" className="inline-flex items-center text-white/80 hover:text-white transition">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to News
            </Link>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs uppercase tracking-wide">
              Strategic Announcement
            </span>
            <span className="flex items-center text-sm text-white/80">
              <Calendar className="h-4 w-4 mr-2" />
              February 2025
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Pacem Health Announces Africa Market Entry Strategy
          </h1>
          <p className="text-xl text-white/90">
            Strategic roadmap outlines phased approach to entering priority African markets with comprehensive healthcare solutions
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Image */}
          <div className="mb-8 sm:mb-12">
            <img
              src={africaMapImage}
              alt="Pacem Health Africa Market Entry Strategy"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-6">
              Pacem Health Inc., a U.S.-based global health innovation and systems delivery company, today announced its comprehensive market entry strategy for Africa, outlining a phased approach to strengthening healthcare systems across the continent.
            </p>

            <h2 className="text-2xl sm:text-3xl mt-8 mb-4">Strategic Vision for African Healthcare</h2>
            <p className="text-muted-foreground mb-6">
              The company's market entry strategy focuses on building sustainable partnerships with governments, development finance institutions, healthcare providers, and NGOs to address critical gaps in pharmaceutical supply chains, medical equipment management, and healthcare infrastructure across Africa.
            </p>

            <h2 className="text-2xl sm:text-3xl mt-8 mb-4">Phased Market Entry Approach</h2>
            <p className="text-muted-foreground mb-4">
              Pacem Health's strategy is built on a deliberate, phased approach that prioritizes quality, sustainability, and local partnerships:
            </p>
            
            <h3 className="text-xl sm:text-2xl mt-6 mb-3">Phase 1: Foundation Building (2025)</h3>
            <p className="text-muted-foreground mb-4">
              Establishing operational infrastructure, supplier partnerships, and regulatory frameworks in priority markets. This phase focuses on building the foundation for sustainable operations, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Securing partnerships with internationally-recognized pharmaceutical and medical equipment manufacturers</li>
              <li>Building regulatory compliance frameworks across target markets</li>
              <li>Establishing quality assurance and supply chain management systems</li>
              <li>Developing relationships with key government health stakeholders and development partners</li>
            </ul>

            <h3 className="text-xl sm:text-2xl mt-6 mb-3">Phase 2: Market Activation (2025-2026)</h3>
            <p className="text-muted-foreground mb-4">
              Launching comprehensive product and service offerings in select East and West African markets, with focus on:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Pharmaceutical distribution and wholesale operations</li>
              <li>Medical equipment procurement and lifecycle management</li>
              <li>Healthcare facility infrastructure planning and support</li>
              <li>Pharmacy management solutions and clinical services</li>
            </ul>

            <h3 className="text-xl sm:text-2xl mt-6 mb-3">Phase 3: Scale and Innovation (2026+)</h3>
            <p className="text-muted-foreground mb-6">
              Expanding geographic reach and introducing advanced health system solutions, including digital health platforms, fleet management systems, mobile diagnostics, and health intelligence analytics.
            </p>

            <h2 className="text-2xl sm:text-3xl mt-8 mb-4">Priority Market Focus</h2>
            <p className="text-muted-foreground mb-4">
              The strategy identifies 5+ priority African countries for initial market entry, selected based on:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Healthcare infrastructure development needs</li>
              <li>Government commitment to health system strengthening</li>
              <li>Regulatory environment and business climate</li>
              <li>Existing donor and development partner engagement</li>
              <li>Potential for sustainable impact and partnership development</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl mt-8 mb-4">Partnership-Centered Approach</h2>
            <p className="text-muted-foreground mb-6">
              Central to Pacem Health's market entry strategy is a commitment to building genuine, sustainable partnerships with African governments, healthcare providers, and communities. The company will work collaboratively with ministries of health, national medical supply agencies, hospitals, clinics, pharmacies, and community health programs to ensure solutions are contextually appropriate and locally supported.
            </p>

            <h2 className="text-2xl sm:text-3xl mt-8 mb-4">Commitment to Quality and Compliance</h2>
            <p className="text-muted-foreground mb-6">
              All market entry activities will be underpinned by Pacem Health's commitment to pharmaceutical quality assurance, regulatory compliance, and international best practices. The company's triple-verification quality process ensures every product meets stringent standards before reaching healthcare providers.
            </p>

            <blockquote className="border-l-4 border-[#4B2991] pl-6 py-2 my-8 italic text-lg">
              "Our market entry strategy reflects our deep commitment to strengthening African healthcare systems through sustainable partnerships, quality products, and innovative solutions. We're building for the long term—investing in relationships, infrastructure, and systems that will serve African communities for decades to come."
              <footer className="text-sm mt-3 not-italic text-muted-foreground">
                — Pacem Health Leadership Team
              </footer>
            </blockquote>

            <h2 className="text-2xl sm:text-3xl mt-8 mb-4">Looking Ahead</h2>
            <p className="text-muted-foreground mb-6">
              As Pacem Health executes its Africa market entry strategy throughout 2025 and beyond, the company will maintain its focus on building trust, delivering quality, and creating lasting value for healthcare systems, providers, and ultimately the patients they serve. Additional market-specific announcements will be made as partnerships and operations are established.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 sm:mt-12 pt-8 border-t">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Topics:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Market Entry</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Africa</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Strategic Planning</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Healthcare Systems</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Partnerships</span>
            </div>
          </div>
        </div>
      </article>

      {/* Related News */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl mb-8">Related News</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedNews.map((item, index) => (
              <Link key={index} to={item.slug}>
                <Card className="overflow-hidden hover:shadow-lg transition-all group h-full">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#4B2991] rounded-full text-xs text-white">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                    <h3 className="text-xl mb-3">{item.title}</h3>
                    <span className="text-[#4B2991] hover:underline text-sm inline-flex items-center group">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Subscribe to receive the latest news and updates from Pacem Health
          </p>
          <Link to="/news">
            <Button className="bg-[#4B2991] hover:bg-[#3d1e7d]">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}