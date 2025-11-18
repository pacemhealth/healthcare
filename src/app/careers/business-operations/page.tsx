import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Star, ArrowRight, Users, Filter } from 'lucide-react';
import { useState } from 'react';

export default function BusinessOperationsJobs() {
  const [activeTab, setActiveTab] = useState('featured');

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] text-white py-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 400 400" className="text-[#7C944B]">
            <path fill="currentColor" d="M 0 100 Q 100 50 200 100 T 400 100 L 400 400 L 0 400 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8">
            <Link to="/careers" className="text-gray-300 hover:text-white inline-flex items-center gap-2 mb-4">← Back to Careers</Link>
            <h1 className="text-4xl md:text-5xl mb-4">Business Operations Careers</h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Enable our mission through operational excellence. Join our business operations teams in finance, human resources, legal, compliance, and corporate functions supporting healthcare transformation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-2 flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input type="text" placeholder="Job title or keyword" className="bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 w-full" />
            </div>
            <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded">
              <MapPin className="w-5 h-5 text-gray-400 mr-3" />
              <input type="text" placeholder="City, State/Province, or ZIP" className="bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 w-full" />
            </div>
            <button className="bg-[#7C944B] hover:bg-[#6a7f41] text-white px-8 py-3 rounded transition-colors">Search</button>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg text-[#4B2991]">Refine Your Search</h3>
                  <Filter className="w-5 h-5 text-[#4B2991]" />
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Job Function</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#7C944B]">
                      <option>All Functions</option>
                      <option>Finance & Accounting</option>
                      <option>Human Resources</option>
                      <option>Legal & Compliance</option>
                      <option>Corporate Strategy</option>
                    </select>
                  </div>
                  <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded transition-colors">Clear Filters</button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex gap-6 border-b border-gray-200 mb-8">
                <button onClick={() => setActiveTab('featured')} className={`pb-4 px-2 ${activeTab === 'featured' ? 'border-b-2 border-[#7C944B] text-[#4B2991]' : 'text-gray-600'}`}>Featured Jobs</button>
                <button onClick={() => setActiveTab('saved')} className={`pb-4 px-2 ${activeTab === 'saved' ? 'border-b-2 border-[#7C944B] text-[#4B2991]' : 'text-gray-600'}`}>Saved Jobs</button>
              </div>

              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-[#4B2991]">22 Jobs</h2>
              </div>

              <div className="space-y-4">
                {businessJobs.map((job, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <button className="text-gray-400 hover:text-[#7C944B] transition-colors mt-1">
                        <Star className="w-5 h-5" />
                      </button>
                      <div className="flex-1">
                        <h3 className="text-xl text-[#4B2991] hover:text-[#7C944B] mb-2 cursor-pointer">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{job.postedDate}</span>
                        </div>
                        <p className="text-gray-700 mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {job.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{tag}</span>
                          ))}
                        </div>
                        <div className="bg-[#7C944B]/10 border-l-4 border-[#7C944B] p-4 rounded">
                          <p className="text-sm text-gray-800">
                            <strong>To Apply:</strong> Send your resume to <a href={`mailto:careers@pacemhealth.com?subject=Application: ${job.title}`} className="text-[#4B2991] hover:underline">careers@pacemhealth.com</a> with "{job.title}" in the subject line.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6">Want to be a part of Team Pacem Health?</h2>
          <p className="text-xl text-gray-200 mb-8">Join our Talent Community for job alerts and updates.</p>
          <button className="bg-white text-[#4B2991] hover:bg-gray-100 px-10 py-4 rounded-lg transition-colors inline-flex items-center gap-2 text-lg uppercase tracking-wide">Join Our Talent Community <ArrowRight className="w-5 h-5" /></button>
        </div>
      </section>
    </div>
  );
}

const businessJobs = [
  {
    title: "Finance Manager - East Africa",
    location: "Nairobi, Kenya",
    postedDate: "Posted 2 days ago",
    description: "Oversee financial operations for East Africa region, manage budgeting and forecasting, ensure compliance with local regulations, prepare financial reports, and support strategic decision-making.",
    tags: ["Full-time", "Manager", "Kenya"],
  },
  {
    title: "Human Resources Business Partner",
    location: "Lagos, Nigeria",
    postedDate: "Posted 5 days ago",
    description: "Partner with business leaders on talent strategy, manage recruitment, employee relations, performance management, and organizational development initiatives. Drive HR excellence across operations.",
    tags: ["Full-time", "HR", "Nigeria"],
  },
  {
    title: "Compliance Officer",
    location: "Accra, Ghana",
    postedDate: "Posted 1 week ago",
    description: "Ensure compliance with healthcare regulations, pharmaceutical standards, and corporate policies. Conduct audits, manage regulatory submissions, and provide compliance training to staff.",
    tags: ["Full-time", "Compliance", "Ghana"],
  },
  {
    title: "Legal Counsel - Commercial Contracts",
    location: "U.S. Office",
    postedDate: "Posted 2 weeks ago",
    description: "Draft and negotiate commercial contracts, provide legal guidance on business transactions, manage intellectual property, and ensure legal compliance across international operations.",
    tags: ["Full-time", "Legal", "U.S."],
  },
  {
    title: "Corporate Strategy Analyst",
    location: "U.S. Office (Remote)",
    postedDate: "Posted 3 weeks ago",
    description: "Support strategic planning initiatives, conduct market analysis, evaluate business opportunities, and develop recommendations for growth and expansion in African healthcare markets.",
    tags: ["Full-time", "Strategy", "Remote"],
  },
];
