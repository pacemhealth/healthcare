import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Recycle, TrendingDown, Package, Truck, Building2 } from 'lucide-react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';

export default function EnvironmentalResponsibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a1a3e] via-[#2d2d5f] to-[#1a1a3e] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link 
              to="/about/sustainability"
              className="text-[#7C944B] hover:text-white inline-flex items-center gap-2 transition-colors"
            >
              ← Back to Sustainability
            </Link>
          </div>
          
          <h1 className="text-5xl mb-8 max-w-4xl">
            Environmental Responsibility in Healthcare Distribution
          </h1>
          
          <div className="max-w-3xl space-y-6 text-gray-200">
            <p className="text-lg leading-relaxed">
              As a company founded in 2024, Pacem Health is committed to building environmental 
              responsibility into our operations from day one. We recognize that sustainable 
              healthcare delivery requires minimizing our environmental footprint while ensuring 
              reliable access to quality products across Africa.
            </p>
            
            <p className="text-lg leading-relaxed">
              Our environmental strategy focuses on optimizing logistics, reducing waste in 
              distribution, supporting circular economy principles, and partnering with 
              suppliers who share our commitment to environmental stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Key Environmental Priorities */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#4B2991] mb-12 text-center">
            Our Environmental Priorities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {environmentalPriorities.map((priority, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#7C944B]"
              >
                <div className="w-14 h-14 bg-[#7C944B]/10 rounded-lg flex items-center justify-center mb-6">
                  {priority.icon}
                </div>
                <h3 className="text-xl text-[#4B2991] mb-4">
                  {priority.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {priority.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Initiatives */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#4B2991] mb-12 text-center">
            Environmental Initiatives Across Our Operations
          </h2>
          
          <div className="space-y-12">
            {operationalInitiatives.map((initiative, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={initiative.image}
                      alt={initiative.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl text-[#4B2991] mb-4">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {initiative.description}
                  </p>
                  <ul className="space-y-3">
                    {initiative.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 leading-relaxed">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement & Transparency */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#4B2991] mb-12 text-center">
            Measurement & Transparency
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-10 rounded-lg shadow-md border-l-4 border-[#7C944B]">
              <p className="text-gray-700 leading-relaxed mb-6">
                As a new company established in 2024, we are building environmental monitoring 
                and measurement systems into our operations from the beginning. We are committed 
                to tracking and publicly reporting our environmental performance as we scale.
              </p>
              
              <h3 className="text-2xl text-[#4B2991] mb-4 mt-8">
                Our Measurement Commitments
              </h3>
              
              <ul className="space-y-4">
                {measurementCommitments.map((commitment, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships for Environmental Impact */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#4B2991] mb-6 text-center">
            Partnerships for Greater Environmental Impact
          </h2>
          
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
            We recognize that addressing environmental challenges in healthcare requires 
            collaboration across the value chain—from manufacturers to distributors to 
            healthcare facilities.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#7C944B]"
              >
                <h3 className="text-xl text-[#4B2991] mb-4">
                  {partnership.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {partnership.description}
                </p>
                <ul className="space-y-2">
                  {partnership.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="bg-gradient-to-br from-[#1a1a3e] via-[#2d2d5f] to-[#1a1a3e] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-white mb-12 text-center">
            Our Environmental Goals for 2025-2027
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureGoals.map((goal, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg text-white mb-3">
                  {goal.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {goal.target}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-[#7C944B]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-white mb-6">
            Join Us in Building Sustainable Healthcare Systems
          </h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            We're committed to transparency and continuous improvement in our environmental 
            performance. If you have ideas, partnerships, or feedback on our environmental 
            initiatives, we'd like to hear from you.
          </p>
          <Link
            to="/about/sustainability"
            className="inline-flex items-center gap-2 bg-white text-[#7C944B] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View All Sustainability Initiatives
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

// Data
const environmentalPriorities = [
  {
    icon: <Truck className="w-7 h-7 text-[#7C944B]" />,
    title: "Optimized Logistics & Transportation",
    description: "Designing efficient distribution routes, consolidating shipments, and exploring lower-emission transportation options to reduce our carbon footprint across Africa's diverse geography.",
  },
  {
    icon: <Package className="w-7 h-7 text-[#7C944B]" />,
    title: "Sustainable Packaging & Waste Reduction",
    description: "Minimizing packaging waste, supporting recyclable materials, and working with manufacturers to reduce unnecessary packaging in healthcare supply chains.",
  },
  {
    icon: <Recycle className="w-7 h-7 text-[#7C944B]" />,
    title: "Circular Economy Practices",
    description: "Developing systems for equipment refurbishment, parts recycling, and responsible end-of-life management for medical devices and supplies where appropriate.",
  },
  {
    icon: <TrendingDown className="w-7 h-7 text-[#7C944B]" />,
    title: "Energy Efficiency in Operations",
    description: "Implementing energy-efficient practices in warehousing and cold chain management, with a focus on renewable energy solutions where feasible.",
  },
  {
    icon: <Leaf className="w-7 h-7 text-[#7C944B]" />,
    title: "Environmentally Responsible Sourcing",
    description: "Partnering with suppliers who demonstrate environmental responsibility and supporting products with lower environmental impact when clinically appropriate.",
  },
  {
    icon: <Building2 className="w-7 h-7 text-[#7C944B]" />,
    title: "Green Infrastructure Development",
    description: "Incorporating environmental considerations into healthcare infrastructure planning, including water conservation, waste management, and sustainable building practices.",
  },
];

const operationalInitiatives = [
  {
    title: "Smart Distribution & Route Optimization",
    description: "We are implementing advanced logistics planning systems to optimize delivery routes, consolidate shipments, and reduce unnecessary transportation across the continent. This not only reduces environmental impact but also improves delivery reliability and reduces costs.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    actions: [
      "Digital route optimization to minimize travel distances and fuel consumption",
      "Shipment consolidation strategies to maximize vehicle capacity utilization",
      "Regional distribution hubs strategically located to reduce long-distance transport",
      "Data-driven demand forecasting to prevent overstocking and waste",
    ],
  },
  {
    title: "Sustainable Cold Chain Management",
    description: "Our cold chain operations are critical for vaccine and pharmaceutical distribution. We are investing in energy-efficient refrigeration technologies and exploring renewable energy solutions for temperature-controlled storage and transport.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    actions: [
      "High-efficiency refrigeration units with lower environmental impact refrigerants",
      "Solar-powered cold storage solutions in areas with reliable sunshine",
      "Temperature monitoring systems to prevent product loss and reduce waste",
      "Partnership with manufacturers on sustainable cold chain packaging",
    ],
  },
  {
    title: "Waste Reduction & Responsible Disposal",
    description: "We are building systems to minimize packaging waste, support proper disposal of healthcare products at end-of-life, and work with partners to establish recycling and safe disposal infrastructure across our operating regions.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    actions: [
      "Returnable packaging programs for appropriate product categories",
      "Training healthcare facilities on proper medical waste segregation and disposal",
      "Partnership with certified waste management providers in key markets",
      "Equipment refurbishment and parts recovery programs to extend product lifecycles",
    ],
  },
];

const measurementCommitments = [
  "Establish baseline carbon footprint measurements for our distribution operations by end of 2025",
  "Track and report key environmental metrics including transportation emissions, packaging waste, and energy consumption in our facilities",
  "Set science-based reduction targets aligned with climate goals once baseline measurements are established",
  "Publicly report environmental performance annually as part of our sustainability reporting",
  "Engage third-party verification of our environmental data and reduction targets",
  "Benchmark our performance against industry best practices and pursue continuous improvement",
];

const partnerships = [
  {
    title: "Manufacturer Partnerships",
    description: "We work with pharmaceutical and medical device manufacturers to support environmental improvements throughout the supply chain.",
    examples: [
      "Preference for suppliers with documented environmental management systems",
      "Collaboration on reducing packaging and improving recyclability",
      "Support for products with lower environmental footprint when clinically equivalent",
    ],
  },
  {
    title: "Healthcare Facility Collaboration",
    description: "We support healthcare facilities in implementing sustainable practices in procurement, waste management, and resource utilization.",
    examples: [
      "Training on inventory management to reduce waste from expired products",
      "Information on proper disposal and recycling options for medical products",
      "Equipment maintenance programs to extend asset lifecycles",
    ],
  },
  {
    title: "Industry & Government Engagement",
    description: "We participate in industry initiatives and work with governments to advance environmental standards in healthcare supply chains.",
    examples: [
      "Engagement in industry sustainability working groups and initiatives",
      "Support for development of healthcare waste management infrastructure",
      "Advocacy for policies that promote sustainable healthcare systems",
    ],
  },
  {
    title: "Local Community Partnerships",
    description: "We partner with local communities to ensure our operations contribute positively to environmental health and local economic development.",
    examples: [
      "Local employment in distribution centers and logistics operations",
      "Support for community environmental health initiatives",
      "Partnership with local waste management and recycling enterprises",
    ],
  },
];

const futureGoals = [
  {
    title: "Carbon Footprint Baseline",
    target: "Complete comprehensive carbon footprint assessment of all distribution operations by Q4 2025",
  },
  {
    title: "Route Optimization",
    target: "Implement AI-powered route optimization across all distribution networks by 2026",
  },
  {
    title: "Renewable Energy",
    target: "Achieve 30% renewable energy in warehouse and cold storage operations by 2027",
  },
  {
    title: "Packaging Reduction",
    target: "Reduce distribution packaging waste by 25% through returnable packaging programs by 2027",
  },
  {
    title: "Supplier Engagement",
    target: "Establish environmental criteria for 100% of new supplier partnerships by 2026",
  },
  {
    title: "Refurbishment Programs",
    target: "Launch equipment refurbishment programs in 5 African countries by end of 2026",
  },
  {
    title: "Waste Management",
    target: "Partner with certified waste management providers in all primary operating countries by 2027",
  },
  {
    title: "Transparency Reporting",
    target: "Publish annual sustainability report with verified environmental data starting 2026",
  },
];
