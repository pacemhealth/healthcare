import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { ArrowRight, Search, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import infantFormulaImage from 'figma:asset/322586293dfa55b1febc5873b3715ded43096d89.png';

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All News' },
    { id: 'company', label: 'Company Announcements', color: '#4B2991' },
    { id: 'partnership', label: 'Partnerships & Collaborations', color: '#0033A0' },
    { id: 'product-launch', label: 'Product Launches', color: '#7C944B' },
    { id: 'impact', label: 'Impact Stories', color: '#00A0DC' },
  ];

  const newsItems = [
    {
      id: 1,
      slug: '/news/pacem-health-launches',
      category: 'company',
      categoryLabel: 'Company Announcement',
      categoryColor: '#0033A0',
      date: 'May 2025',
      title: 'Pacem Health Officially Launches',
      excerpt: 'U.S.-based global health innovation company announces official launch with comprehensive platform for strengthening African healthcare systems.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: true
    },
    {
      id: 2,
      slug: '/news/product-catalog-launch',
      category: 'product-launch',
      categoryLabel: 'Product Launch',
      categoryColor: '#7C944B',
      date: 'May 2025',
      title: 'Comprehensive Medical Product Catalog Unveiled',
      excerpt: 'First comprehensive catalog features 3,500+ medical products across 22 categories with transparent pricing and regulatory compliance information.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: true
    },
    {
      id: 3,
      slug: '/news/africa-market-entry',
      category: 'company',
      categoryLabel: 'Strategic Announcement',
      categoryColor: '#0033A0',
      date: 'May 2025',
      title: 'Pacem Health Announces Africa Market Entry Strategy',
      excerpt: 'Strategic roadmap outlines phased approach to entering priority African markets with comprehensive healthcare solutions and partnerships.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: false
    },
    {
      id: 4,
      slug: '/news/pharmaceutical-hub-launch',
      category: 'company',
      categoryLabel: 'Company Announcement',
      categoryColor: '#4B2991',
      date: 'April 2025',
      title: 'Pacem Health Announces East African Regional Pharmaceutical Hub',
      excerpt: 'New facility in Kenya will serve as central distribution center for essential medicines and medical supplies across East African Community member states.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: false
    },
    {
      id: 5,
      slug: '/news/infant-nutrition-product',
      category: 'product-launch',
      categoryLabel: 'Product Launch',
      categoryColor: '#7C944B',
      date: 'March 2025',
      title: 'Innovative Infant Nutritional Solution Introduced',
      excerpt: 'New fortified nutritional product addresses infant malnutrition with locally-sourced ingredients and affordable pricing for African markets.',
      image: infantFormulaImage,
      featured: false
    },
    {
      id: 6,
      slug: '/news/university-partnership',
      category: 'partnership',
      categoryLabel: 'Partnership Announcement',
      categoryColor: '#0033A0',
      date: 'March 2025',
      title: 'Strategic Partnership with Leading African Universities',
      excerpt: 'Collaboration aims to strengthen pharmaceutical education and clinical training programs across five East African medical schools.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: false
    },
    {
      id: 7,
      slug: '/news/hospital-pharmacy-impact',
      category: 'impact',
      categoryLabel: 'Impact Story',
      categoryColor: '#00A0DC',
      date: 'February 2025',
      title: 'Hospital Pharmacy Transformation Reaches 50,000 Patients',
      excerpt: 'Target milestone achieved as clinical pharmacy services expand across regional hospital network, improving medication safety and patient outcomes.',
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: false
    },
    {
      id: 8,
      slug: '/news/medical-equipment-deployment',
      category: 'company',
      categoryLabel: 'Company News',
      categoryColor: '#4B2991',
      date: 'February 2025',
      title: 'Target: Medical Equipment Deployment to 100 District Hospitals',
      excerpt: 'Pipeline initiative aims to strengthen diagnostic capabilities in underserved regions through comprehensive equipment and training packages.',
      image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: false
    },
    {
      id: 9,
      slug: '/news/who-collaboration',
      category: 'partnership',
      categoryLabel: 'Strategic Partnership',
      categoryColor: '#0033A0',
      date: 'January 2025',
      title: 'Collaboration with WHO on Essential Medicines Access',
      excerpt: 'Pipeline partnership focuses on improving pharmaceutical supply chains and regulatory harmonization across African Union member states.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: false
    },
    {
      id: 10,
      slug: '/news/digital-health-platform',
      category: 'product-launch',
      categoryLabel: 'Platform Launch',
      categoryColor: '#7C944B',
      date: 'January 2025',
      title: 'Digital Health Platform for Primary Care Networks',
      excerpt: 'New offline-first mobile platform empowers community health workers with patient tracking, medication management, and health data collection tools.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: false
    },
    {
      id: 11,
      slug: '/news/maternal-health-impact',
      category: 'impact',
      categoryLabel: 'Impact Story',
      categoryColor: '#00A0DC',
      date: 'December 2024',
      title: 'Target: Maternal Health Outcomes in Pilot Facilities',
      excerpt: 'Early indicators show promise in reducing maternal complications through improved access to essential medicines and skilled pharmaceutical care.',
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      featured: false
    },
  ];

  // Filter news based on active category and search term
  const filteredNews = newsItems.filter(item => {
    const matchesCategory = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4B2991] via-[#5c3aa8] to-[#7C944B] text-white overflow-hidden min-h-[400px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 sm:mb-6">Stay Updated</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              News & Media Center
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Latest updates on our work strengthening healthcare systems across Africa
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search news..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setActiveFilter('all')}
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              className={activeFilter === 'all' ? 'bg-[#4B2991] hover:bg-[#3d1e7d]' : ''}
            >
              All News
            </Button>
            <Button
              onClick={() => setActiveFilter('company')}
              variant={activeFilter === 'company' ? 'default' : 'outline'}
              className={activeFilter === 'company' ? 'bg-[#4B2991] hover:bg-[#3d1e7d]' : ''}
            >
              Company News
            </Button>
            <Button
              onClick={() => setActiveFilter('partnership')}
              variant={activeFilter === 'partnership' ? 'default' : 'outline'}
              className={activeFilter === 'partnership' ? 'bg-[#4B2991] hover:bg-[#3d1e7d]' : ''}
            >
              Partnerships
            </Button>
            <Button
              onClick={() => setActiveFilter('product-launch')}
              variant={activeFilter === 'product-launch' ? 'default' : 'outline'}
              className={activeFilter === 'product-launch' ? 'bg-[#4B2991] hover:bg-[#3d1e7d]' : ''}
            >
              Product Launches
            </Button>
            <Button
              onClick={() => setActiveFilter('impact')}
              variant={activeFilter === 'impact' ? 'default' : 'outline'}
              className={activeFilter === 'impact' ? 'bg-[#4B2991] hover:bg-[#3d1e7d]' : ''}
            >
              Impact Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {activeFilter === 'all' && !searchTerm && (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl mb-8">Featured News</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {newsItems.filter(item => item.featured).map((item) => (
                <Link key={item.id} to={item.slug}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all group h-full">
                    <div className="relative h-72 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span 
                          className="px-3 py-1 rounded-full text-xs text-white"
                          style={{ backgroundColor: item.categoryColor }}
                        >
                          {item.categoryLabel}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                      <h3 className="text-2xl mb-3">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                      <span className="text-[#4B2991] hover:underline inline-flex items-center group">
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
      )}

      {/* All News Grid */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl mb-8">
            {activeFilter === 'all' ? 'Latest News' : categories.find(c => c.id === activeFilter)?.label}
          </h2>
          
          {filteredNews.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <Link key={item.id} to={item.slug}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all group h-full">
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span 
                          className="px-3 py-1 rounded-full text-xs text-white"
                          style={{ backgroundColor: item.categoryColor }}
                        >
                          {item.categoryLabel}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                      <h3 className="text-xl mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.excerpt}</p>
                      <span className="text-[#4B2991] hover:underline text-sm inline-flex items-center group">
                        <span>Read More</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No news items found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Media Contact Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-[#4B2991] to-[#7C944B] text-white overflow-hidden">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl mb-4">Media Inquiries</h2>
                  <p className="text-lg text-white/90">
                    For press inquiries, interview requests, or media coverage, please contact our communications team
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg mb-2">Email</h3>
                        <a href="mailto:media@pacemhealth.com" className="text-white/90 hover:text-white transition">
                          media@pacemhealth.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg mb-2">Press Office</h3>
                        <p className="text-white/90">
                          +1 (202) 555-0100
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button 
                    variant="outline" 
                    className="bg-white text-[#4B2991] hover:bg-white/90 border-white"
                  >
                    Download Press Kit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl mb-4">Stay Informed</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Subscribe to receive our latest news, impact stories, and updates directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="bg-[#4B2991] hover:bg-[#3d1e7d]">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}