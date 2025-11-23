import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { SEOHead } from '../../../components/SEOHead';

export default function SustainabilityPage() {
  const sustainabilitySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sustainability",
    "description": "Pacem Health's commitment to sustainable healthcare development, environmental responsibility, and health system strengthening across Africa",
    "about": {
      "@type": "Organization",
      "name": "Pacem Health",
      "sameAs": "https://pacemhealth.com"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Sustainability | Environmental & Social Responsibility | Pacem Health"
        description="Pacem Health's sustainability commitment: strengthening healthcare systems, building local capacity, sustainable supply chains, environmental stewardship, and equitable healthcare access across Africa. Embedding sustainability from day one."
        keywords={[
          'sustainability healthcare Africa',
          'environmental responsibility health',
          'sustainable supply chains',
          'health system strengthening',
          'local capacity building',
          'corporate social responsibility healthcare',
          'sustainable development Africa'
        ]}
        structuredData={sustainabilitySchema}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a1a3e] via-[#2d2d5f] to-[#1a1a3e] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl mb-8 max-w-4xl">
            Healthcare Innovation Drives Sustainable Development
          </h1>
          
          <div className="max-w-3xl space-y-6 text-gray-200">
            <p className="text-lg leading-relaxed">
              By strengthening healthcare systems, building local capacity, and ensuring 
              equitable access to quality products and services, we empower communities 
              across Africa to achieve better health outcomes while fostering economic 
              resilience and environmental responsibility.
            </p>
            
            <p className="text-lg leading-relaxed">
              As a company founded in 2024, we are committed to embedding sustainability 
              into every aspect of our operations from day one. Our approach prioritizes 
              sustainable supply chains, environmental stewardship in distribution and 
              logistics, local job creation, and partnerships that build long-term health 
              system resilience across the African continent.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas Grid */}
      <section className="bg-gradient-to-br from-[#1a1a3e] via-[#2d2d5f] to-[#1a1a3e] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              area.link ? (
                <Link
                  key={index}
                  to={area.link}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer block"
                >
                  <h3 className="text-xl text-white mb-4 pr-8 group-hover:text-[#7C944B] transition-colors">
                    {area.title}
                  </h3>
                  <ArrowRight className="w-6 h-6 text-[#7C944B] group-hover:translate-x-2 transition-transform" />
                </Link>
              ) : (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <h3 className="text-xl text-white mb-4 pr-8 group-hover:text-[#7C944B] transition-colors">
                    {area.title}
                  </h3>
                  <ArrowRight className="w-6 h-6 text-[#7C944B] group-hover:translate-x-2 transition-transform" />
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-gradient-to-br from-[#1a1a3e] via-[#2d2d5f] to-[#1a1a3e] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-white text-center mb-12">
            Our Sustainable Healthcare Approach
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative h-64 bg-gray-200">
                  <ImageWithFallback
                    src={approach.image}
                    alt={approach.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-[#4B2991] mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {approach.description}
                  </p>
                  <Link 
                    to={approach.link}
                    className="text-[#7C944B] hover:text-[#4B2991] inline-flex items-center gap-2 transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-[#4B2991] mb-12 text-center">
            Our Sustainability Commitments
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#7C944B]">
                <h3 className="text-2xl text-[#4B2991] mb-4">
                  {commitment.title}
                </h3>
                <ul className="space-y-3">
                  {commitment.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Ecosystem */}
      <section className="bg-gradient-to-br from-[#1a1a3e] via-[#2d2d5f] to-[#1a1a3e] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-white text-center mb-6">
            Building a Sustainable Healthcare Ecosystem
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
            We are committed to working with organizations and partners across sectors 
            to advance sustainable healthcare development and strengthen health systems 
            throughout Africa.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ecosystemCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg">
                <h3 className="text-xl text-[#7C944B] mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.partners.map((partner, idx) => (
                    <li key={idx} className="text-gray-300 text-sm leading-relaxed">
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-[#4B2991] mb-8 text-center">
            Aligned with Global Sustainability Goals
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our work directly supports the United Nations Sustainable Development Goals, 
            particularly those focused on health, economic growth, and reducing inequalities.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {sdgGoals.map((goal, index) => (
              <div key={index} className="bg-gradient-to-br from-[#4B2991] to-[#7C944B] p-6 rounded-lg text-white text-center">
                <div className="text-4xl mb-3">{goal.number}</div>
                <h4 className="text-sm leading-relaxed">{goal.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="bg-gradient-to-br from-[#1a1a3e] via-[#2d2d5f] to-[#1a1a3e] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-white text-center mb-12">
            Related Content
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedContent.map((content, index) => (
              <Link
                key={index}
                href={content.link}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all group"
              >
                <div className="relative h-48 bg-gray-700">
                  <ImageWithFallback
                    src={content.image}
                    alt={content.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-white mb-2 group-hover:text-[#7C944B] transition-colors">
                    {content.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {content.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#7C944B]">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#4B2991] to-[#7C944B] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-6">
            Join Us in Building Sustainable Healthcare Systems
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Partner with Pacem Health to create lasting impact through sustainable, 
            equitable, and innovative healthcare solutions across Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/support/general-inquiry"
              className="bg-white text-[#4B2991] px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/insights"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#4B2991] transition-colors"
            >
              Explore Our Insights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Data
const focusAreas = [
  {
    title: "Sustainable Healthcare Supply Chains",
    link: "/core-solutions/reliable-supply-chains",
  },
  {
    title: "Local Capacity & Job Creation",
    link: "/advisory/workforce-development",
  },
  {
    title: "Environmental Responsibility",
    link: "/about/sustainability/environmental-responsibility",
  },
  {
    title: "Equitable Access & Social Impact",
    link: "/core-solutions/sustainable-access",
  },
  {
    title: "Community Partnerships",
    link: "/programs/healthcare-development",
  },
  {
    title: "Resilient Health Systems",
    link: "/advisory/health-system-strategy",
  },
];

const approaches = [
  {
    title: "Sustainable Supply Chains",
    description: "Building efficient, environmentally responsible distribution networks that reduce waste, optimize logistics, and ensure reliable access to essential healthcare products across Africa.",
    image: "https://images.unsplash.com/photo-1572010696997-c73e95aeebe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1lZGljYWwlMjBzdXBwbHl8ZW58MXx8fHwxNzYxMDIzMDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/core-solutions/reliable-supply-chains",
  },
  {
    title: "Community Health Impact",
    description: "Partnering with local communities to build sustainable health programs that create lasting impact, strengthen local economies, and improve health outcomes for underserved populations.",
    image: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYWZyaWNhJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MTAyMzA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/programs/healthcare-development",
  },
  {
    title: "Workforce Development",
    description: "Investing in education, training, and capacity building programs that develop local healthcare talent and create sustainable employment opportunities across the continent.",
    image: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3b3JrZXJzJTIwdHJhaW5pbmclMjBhZnJpY2F8ZW58MXx8fHwxNzYxMDIzMDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/advisory/workforce-development",
  },
];

const commitments = [
  {
    title: "Environmental Stewardship",
    items: [
      "Minimize environmental impact in all distribution and logistics operations",
      "Implement waste reduction programs across our supply chain",
      "Partner with suppliers committed to sustainable practices",
      "Optimize transportation routes to reduce carbon emissions",
      "Support proper medical waste management in healthcare facilities",
    ],
  },
  {
    title: "Social & Economic Impact",
    items: [
      "Prioritize local hiring and capacity building in all markets we serve",
      "Create sustainable employment opportunities across Africa",
      "Partner with local businesses and distributors",
      "Ensure equitable access to quality healthcare products and services",
      "Support health system strengthening through sustainable models",
    ],
  },
  {
    title: "Responsible Business Practices",
    items: [
      "Maintain highest standards of quality, safety, and regulatory compliance",
      "Ensure transparent and ethical operations across all business activities",
      "Build long-term partnerships based on shared values and sustainability goals",
      "Invest in innovative solutions that improve health outcomes sustainably",
      "Report regularly on our sustainability progress and commitments",
    ],
  },
  {
    title: "Health Equity & Access",
    items: [
      "Work to eliminate barriers to healthcare access across underserved communities",
      "Support programs that address social determinants of health",
      "Develop financing models that ensure affordability without compromising quality",
      "Collaborate with governments and NGOs to reach remote and vulnerable populations",
      "Contribute to building resilient, sustainable health systems",
    ],
  },
];

const ecosystemCategories = [
  {
    title: "Global Health Organizations",
    partners: [
      "World Health Organization (WHO)",
      "Africa CDC",
      "Global Fund",
      "Gavi, the Vaccine Alliance",
      "UNICEF Health Programs",
      "PATH",
    ],
  },
  {
    title: "Development Partners",
    partners: [
      "African Development Bank",
      "World Bank Group",
      "USAID",
      "Bill & Melinda Gates Foundation",
      "Regional Economic Communities",
      "Local Government Health Ministries",
    ],
  },
  {
    title: "Sustainability Initiatives",
    partners: [
      "UN Sustainable Development Goals",
      "African Union Agenda 2063",
      "Healthcare Without Harm",
      "Sustainable Supply Chains Alliance",
      "Green Health Initiative",
      "Local Environmental Organizations",
    ],
  },
];

const sdgGoals = [
  {
    number: "SDG 3",
    title: "Good Health and Well-being",
  },
  {
    number: "SDG 8",
    title: "Decent Work and Economic Growth",
  },
  {
    number: "SDG 9",
    title: "Industry, Innovation and Infrastructure",
  },
  {
    number: "SDG 10",
    title: "Reduced Inequalities",
  },
  {
    number: "SDG 12",
    title: "Responsible Consumption and Production",
  },
  {
    number: "SDG 13",
    title: "Climate Action",
  },
  {
    number: "SDG 17",
    title: "Partnerships for the Goals",
  },
  {
    number: "Agenda 2063",
    title: "The Africa We Want",
  },
];

const relatedContent = [
  {
    title: "Our Programs",
    description: "Explore our flagship programs focused on healthcare development, pharmacy excellence, and pediatric care across Africa.",
    image: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYWZyaWNhJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MTAyMzA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/programs",
  },
  {
    title: "Advisory Services",
    description: "Learn how our expert advisory services help build sustainable, resilient health systems through strategic planning and capacity building.",
    image: "https://images.unsplash.com/photo-1572010696997-c73e95aeebe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1lZGljYWwlMjBzdXBwbHl8ZW58MXx8fHwxNzYxMDIzMDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/advisory",
  },
  {
    title: "Insights & Impact",
    description: "Read our latest thought leadership on sustainable healthcare innovation, health system strengthening, and development in Africa.",
    image: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3b3JrZXJzJTIwdHJhaW5pbmclMjBhZnJpY2F8ZW58MXx8fHwxNzYxMDIzMDU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/insights",
  },
];
