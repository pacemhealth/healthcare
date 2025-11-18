import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Star, ChevronDown, ArrowRight, Package, Filter } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { useState } from 'react';

export default function DistributionOperationsJobs() {
  const [activeTab, setActiveTab] = useState('featured');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Wave Pattern */}
      <section className="relative bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] text-white py-16 px-6 overflow-hidden">
        {/* Decorative Wave Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 400 400" className="text-[#7C944B]">
            <path
              fill="currentColor"
              d="M 0 100 Q 100 50 200 100 T 400 100 L 400 400 L 0 400 Z"
            />
            <path
              fill="currentColor"
              d="M 0 200 Q 100 150 200 200 T 400 200 L 400 400 L 0 400 Z"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8">
            <Link to="/careers" className="text-gray-300 hover:text-white inline-flex items-center gap-2 mb-4">
              ← Back to Careers
            </Link>
            <h1 className="text-4xl md:text-5xl mb-4">
              Distribution Operations Careers
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Build the backbone of healthcare access across Africa. Our distribution operations ensure that essential medicines, equipment, and supplies reach communities that need them most.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-xl p-2 flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 w-full"
              />
            </div>
            <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded">
              <MapPin className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="City, State/Province, or ZIP"
                className="bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 w-full"
              />
            </div>
            <div className="flex items-center px-4 py-3 bg-gray-50 rounded">
              <select className="bg-transparent border-none outline-none text-gray-900 cursor-pointer">
                <option>10 miles</option>
                <option>25 miles</option>
                <option>50 miles</option>
                <option>100 miles</option>
                <option>Any distance</option>
              </select>
            </div>
            <button className="bg-[#7C944B] hover:bg-[#6a7f41] text-white px-8 py-3 rounded transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg text-[#4B2991]">
                    Refine Your Search
                  </h3>
                  <Filter className="w-5 h-5 text-[#4B2991]" />
                </div>

                {/* Keyword Filter */}
                <div className="mb-6">
                  <label className="block text-sm text-gray-700 mb-2">
                    Keyword
                  </label>
                  <input
                    type="text"
                    placeholder="Enter keywords"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#7C944B]"
                  />
                </div>

                {/* Job Function Filter */}
                <div className="mb-6">
                  <label className="block text-sm text-gray-700 mb-2">
                    Job Function
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#7C944B]">
                    <option>All Functions</option>
                    <option>Supply Chain Management</option>
                    <option>Warehouse Operations</option>
                    <option>Logistics & Transportation</option>
                    <option>Cold Chain Management</option>
                    <option>Inventory Management</option>
                  </select>
                </div>

                {/* Country Filter */}
                <div className="mb-6">
                  <label className="block text-sm text-gray-700 mb-2">
                    Country
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#7C944B]">
                    <option>All Countries</option>
                    <option>Kenya</option>
                    <option>Ghana</option>
                    <option>Nigeria</option>
                    <option>Senegal</option>
                    <option>Tanzania</option>
                    <option>Uganda</option>
                  </select>
                </div>

                {/* State/Province Filter */}
                <div className="mb-6">
                  <label className="block text-sm text-gray-700 mb-2">
                    State/Province
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#7C944B]">
                    <option>All States/Provinces</option>
                    <option>Nairobi</option>
                    <option>Greater Accra</option>
                    <option>Lagos</option>
                    <option>Dakar</option>
                  </select>
                </div>

                {/* City Filter */}
                <div className="mb-6">
                  <label className="block text-sm text-gray-700 mb-2">
                    City
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#7C944B]">
                    <option>All Cities</option>
                  </select>
                </div>

                <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded transition-colors">
                  Clear Filters
                </button>
              </div>
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3">
              {/* Tab Navigation */}
              <div className="flex gap-6 border-b border-gray-200 mb-8">
                <button
                  onClick={() => setActiveTab('featured')}
                  className={`pb-4 px-2 ${
                    activeTab === 'featured'
                      ? 'border-b-2 border-[#7C944B] text-[#4B2991]'
                      : 'text-gray-600 hover:text-[#4B2991]'
                  }`}
                >
                  Featured Jobs
                </button>
                <button
                  onClick={() => setActiveTab('recent')}
                  className={`pb-4 px-2 ${
                    activeTab === 'recent'
                      ? 'border-b-2 border-[#7C944B] text-[#4B2991]'
                      : 'text-gray-600 hover:text-[#4B2991]'
                  }`}
                >
                  Recently Viewed Jobs
                </button>
                <button
                  onClick={() => setActiveTab('saved')}
                  className={`pb-4 px-2 ${
                    activeTab === 'saved'
                      ? 'border-b-2 border-[#7C944B] text-[#4B2991]'
                      : 'text-gray-600 hover:text-[#4B2991]'
                  }`}
                >
                  Saved Jobs
                </button>
              </div>

              {/* Job Count and Sort */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-[#4B2991]">
                  42 Jobs
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#7C944B] text-sm">
                    <option>Most Recent</option>
                    <option>Job Title A-Z</option>
                    <option>Location</option>
                  </select>
                </div>
              </div>

              {/* Job Cards */}
              <div className="space-y-4">
                {distributionJobs.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-start gap-4">
                          <button className="text-gray-400 hover:text-[#7C944B] transition-colors mt-1">
                            <Star className="w-5 h-5" />
                          </button>
                          <div className="flex-1">
                            <h3 className="text-xl text-[#4B2991] hover:text-[#7C944B] mb-2 cursor-pointer transition-colors">
                              {job.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {job.postedDate}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              {job.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {job.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <div className="bg-[#7C944B]/10 border-l-4 border-[#7C944B] p-4 rounded">
                              <p className="text-sm text-gray-800">
                                <strong>To Apply:</strong> Send your resume to{' '}
                                <a
                                  href={`mailto:careers@pacemhealth.com?subject=Application: ${job.title}`}
                                  className="text-[#4B2991] hover:underline"
                                >
                                  careers@pacemhealth.com
                                </a>{' '}
                                with "{job.title}" in the subject line.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-12">
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-[#4B2991] text-white rounded">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Hiring Process */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758656321452-0d3b91acb371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEwODQyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pacem Health Hiring Process"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl text-[#4B2991] mb-6">
                Our Hiring Process
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We're committed to a transparent, efficient, and candidate-friendly hiring process. 
                From application to offer, we'll guide you through each step, provide timely feedback, 
                and ensure you understand what to expect.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our goal is to find the right fit for both you and Pacem Health, ensuring that you can 
                make a meaningful impact on healthcare access across Africa.
              </p>
              <Link
                to="/careers"
                className="text-[#7C944B] hover:text-[#4B2991] inline-flex items-center gap-2 transition-colors uppercase text-sm tracking-wide"
              >
                Learn More About Our Process <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonial */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="mb-6">
                <svg className="w-12 h-12 text-[#7C944B] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p className="text-2xl text-gray-800 leading-relaxed italic mb-6">
                  "At Pacem Health, I'm not just managing logistics—I'm ensuring that life-saving medicines 
                  reach communities that need them most. Every optimized route, every successful delivery, 
                  directly impacts health outcomes. That's what makes this work meaningful."
                </p>
              </div>
              <div>
                <p className="text-gray-900">
                  <span className="font-semibold">Amara N.</span>
                </p>
                <p className="text-gray-600">
                  Senior Supply Chain Manager, Kenya
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwaGVhbHRoY2FyZSUyMHdvcmtlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEwODQyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Amara N., Senior Supply Chain Manager"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMG9mZmljZSUyMHNtaWxpbmd8ZW58MXx8fHwxNzYxMDg0MjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Benefits at Pacem Health"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl text-[#4B2991] mb-6">
                Benefits
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We offer competitive compensation, comprehensive health benefits, professional development 
                support, and flexible working arrangements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our benefits package is designed to support your health, well-being, and career growth as 
                you contribute to transforming healthcare across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Want to be a part of Team Pacem Health?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join our Talent Community to stay connected. Receive job alerts, company updates, 
            and invitations to exclusive events.
          </p>
          <button className="bg-white text-[#4B2991] hover:bg-gray-100 px-10 py-4 rounded-lg transition-colors inline-flex items-center gap-2 text-lg uppercase tracking-wide">
            Join Our Talent Community <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

// Job Data
const distributionJobs = [
  {
    title: "Supply Chain Manager - East Africa",
    location: "Nairobi, Kenya",
    postedDate: "Posted 2 days ago",
    description: "Lead end-to-end supply chain operations across East Africa, ensuring reliable delivery of essential medicines and medical supplies to healthcare facilities. Manage procurement, warehousing, transportation, and last-mile delivery.",
    tags: ["Full-time", "Mid-Level", "Kenya"],
  },
  {
    title: "Warehouse Operations Supervisor",
    location: "Accra, Ghana",
    postedDate: "Posted 5 days ago",
    description: "Oversee daily warehouse operations including receiving, storage, inventory management, and order fulfillment. Ensure compliance with Good Distribution Practice (GDP) standards and maintain efficient workflows.",
    tags: ["Full-time", "Supervisor", "Ghana"],
  },
  {
    title: "Cold Chain Logistics Specialist",
    location: "Lagos, Nigeria",
    postedDate: "Posted 1 week ago",
    description: "Manage temperature-controlled supply chain operations for vaccines, biologics, and temperature-sensitive pharmaceuticals. Monitor cold chain equipment, ensure compliance with WHO standards, and train field teams.",
    tags: ["Full-time", "Specialist", "Nigeria"],
  },
  {
    title: "Inventory Control Analyst",
    location: "Dakar, Senegal",
    postedDate: "Posted 1 week ago",
    description: "Maintain accurate inventory records, conduct cycle counts, analyze stock levels, and implement inventory optimization strategies. Work with WMS systems and generate performance reports.",
    tags: ["Full-time", "Entry-Level", "Senegal"],
  },
  {
    title: "Transportation Coordinator",
    location: "Kampala, Uganda",
    postedDate: "Posted 2 weeks ago",
    description: "Coordinate transportation of medical supplies across Uganda, manage fleet scheduling, optimize delivery routes, and ensure timely distribution to health facilities in urban and rural areas.",
    tags: ["Full-time", "Mid-Level", "Uganda"],
  },
  {
    title: "Procurement Officer - Pharmaceuticals",
    location: "Nairobi, Kenya",
    postedDate: "Posted 2 weeks ago",
    description: "Source and procure pharmaceuticals from qualified suppliers, negotiate contracts, manage supplier relationships, and ensure quality compliance. Experience with donor-funded procurement preferred.",
    tags: ["Full-time", "Mid-Level", "Kenya"],
  },
  {
    title: "Last Mile Delivery Coordinator",
    location: "Rural Regions, Tanzania",
    postedDate: "Posted 3 weeks ago",
    description: "Coordinate last-mile delivery operations to remote health facilities, manage community health worker distribution networks, and ensure uninterrupted supply of essential medicines to underserved areas.",
    tags: ["Full-time", "Field-Based", "Tanzania"],
  },
  {
    title: "Quality Assurance Manager - Distribution",
    location: "Accra, Ghana",
    postedDate: "Posted 3 weeks ago",
    description: "Develop and implement quality management systems for distribution operations, conduct audits, ensure GDP compliance, and lead continuous improvement initiatives across warehouse and logistics networks.",
    tags: ["Full-time", "Manager", "Ghana"],
  },
  {
    title: "Regional Distribution Manager - West Africa",
    location: "Dakar, Senegal",
    postedDate: "Posted 1 month ago",
    description: "Oversee distribution operations across West African countries, manage multi-country logistics teams, develop regional distribution strategies, and ensure alignment with organizational goals.",
    tags: ["Full-time", "Senior Manager", "Multi-Country"],
  },
  {
    title: "Warehouse Associate",
    location: "Lagos, Nigeria",
    postedDate: "Posted 1 month ago",
    description: "Support warehouse operations including receiving, picking, packing, and shipping of medical supplies. Maintain accurate records, follow safety protocols, and contribute to efficient warehouse workflows.",
    tags: ["Full-time", "Entry-Level", "Nigeria"],
  },
];
