import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Star, ArrowRight, TrendingUp, Filter } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { useState } from 'react';

export default function HealthSystemsAdvisoryJobs() {
  const [activeTab, setActiveTab] = useState('featured');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] text-white py-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 400 400" className="text-[#7C944B]">
            <path fill="currentColor" d="M 0 100 Q 100 50 200 100 T 400 100 L 400 400 L 0 400 Z" />
            <path fill="currentColor" d="M 0 200 Q 100 150 200 200 T 400 200 L 400 400 L 0 400 Z" opacity="0.6" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8">
            <Link to="/careers" className="text-gray-300 hover:text-white inline-flex items-center gap-2 mb-4">
              ← Back to Careers
            </Link>
            <h1 className="text-4xl md:text-5xl mb-4">
              Health Systems Advisory Careers
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Shape the future of healthcare in Africa. Join our advisory team working on health systems strategy, policy development, financing, quality improvement, and systems strengthening initiatives.
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
                    <label className="block text-sm text-gray-700 mb-2">Keyword</label>
                    <input type="text" placeholder="Enter keywords" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#7C944B]" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Job Function</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#7C944B]">
                      <option>All Functions</option>
                      <option>Strategy & Policy</option>
                      <option>Health Financing</option>
                      <option>Quality Improvement</option>
                      <option>Research & Evaluation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Country</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#7C944B]">
                      <option>All Countries</option>
                      <option>Kenya</option>
                      <option>Ghana</option>
                      <option>Nigeria</option>
                      <option>U.S. Office</option>
                    </select>
                  </div>
                  <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded transition-colors">Clear Filters</button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="flex gap-6 border-b border-gray-200 mb-8">
                <button onClick={() => setActiveTab('featured')} className={`pb-4 px-2 ${activeTab === 'featured' ? 'border-b-2 border-[#7C944B] text-[#4B2991]' : 'text-gray-600 hover:text-[#4B2991]'}`}>Featured Jobs</button>
                <button onClick={() => setActiveTab('recent')} className={`pb-4 px-2 ${activeTab === 'recent' ? 'border-b-2 border-[#7C944B] text-[#4B2991]' : 'text-gray-600 hover:text-[#4B2991]'}`}>Recently Viewed Jobs</button>
                <button onClick={() => setActiveTab('saved')} className={`pb-4 px-2 ${activeTab === 'saved' ? 'border-b-2 border-[#7C944B] text-[#4B2991]' : 'text-gray-600 hover:text-[#4B2991]'}`}>Saved Jobs</button>
              </div>

              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl text-[#4B2991]">15 Jobs</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#7C944B] text-sm">
                    <option>Most Recent</option>
                    <option>Job Title A-Z</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {healthSystemsJobs.map((job, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <button className="text-gray-400 hover:text-[#7C944B] transition-colors mt-1">
                        <Star className="w-5 h-5" />
                      </button>
                      <div className="flex-1">
                        <h3 className="text-xl text-[#4B2991] hover:text-[#7C944B] mb-2 cursor-pointer transition-colors">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                          <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{job.postedDate}</span>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>
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
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">Join our Talent Community to stay connected. Receive job alerts, company updates, and invitations to exclusive events.</p>
          <button className="bg-white text-[#4B2991] hover:bg-gray-100 px-10 py-4 rounded-lg transition-colors inline-flex items-center gap-2 text-lg uppercase tracking-wide">Join Our Talent Community <ArrowRight className="w-5 h-5" /></button>
        </div>
      </section>
    </div>
  );
}

const healthSystemsJobs = [
  {
    title: "Health Systems Strategist",
    location: "U.S. Office (Remote)",
    postedDate: "Posted 2 days ago",
    description: "Develop health systems strengthening strategies for African markets, conduct health systems assessments, design intervention frameworks, and provide technical guidance to country teams on systems integration and sustainability.",
    tags: ["Full-time", "Senior", "Remote"],
  },
  {
    title: "Policy Advisor - Health Financing",
    location: "Nairobi, Kenya",
    postedDate: "Posted 5 days ago",
    description: "Advise on health financing mechanisms, support development of national health insurance schemes, conduct economic evaluations, and work with governments on sustainable healthcare financing models.",
    tags: ["Full-time", "Advisor", "Kenya"],
  },
  {
    title: "Quality Improvement Specialist",
    location: "Accra, Ghana",
    postedDate: "Posted 1 week ago",
    description: "Lead quality improvement initiatives in healthcare facilities, implement accreditation standards, conduct facility assessments, and build capacity for continuous quality improvement in clinical and pharmaceutical services.",
    tags: ["Full-time", "Specialist", "Ghana"],
  },
  {
    title: "Monitoring & Evaluation Manager",
    location: "Multi-Country",
    postedDate: "Posted 2 weeks ago",
    description: "Design and implement M&E frameworks for health programs, develop data collection tools, analyze program performance, and generate evidence for decision-making and continuous improvement.",
    tags: ["Full-time", "Manager", "Multi-Country"],
  },
  {
    title: "Health Economist",
    location: "U.S. Office (Hybrid)",
    postedDate: "Posted 3 weeks ago",
    description: "Conduct economic analyses of health interventions, develop cost-effectiveness models, support procurement decision-making, and advise on resource allocation strategies for maximum health impact.",
    tags: ["Full-time", "Economist", "U.S."],
  },
];
