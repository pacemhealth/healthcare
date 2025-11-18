import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Star, ChevronDown, ArrowRight, Stethoscope, Filter } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { useState } from 'react';

export default function ClinicalPharmacyJobs() {
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
              Clinical & Pharmacy Careers
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Advance pharmaceutical care across Africa. Join our team of clinical pharmacists, pharmaceutical advisors, and healthcare professionals delivering quality patient care and building clinical capacity.
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
                    <option>Clinical Pharmacy</option>
                    <option>Hospital Pharmacy</option>
                    <option>Pediatric Pharmacy</option>
                    <option>Pharmaceutical Care</option>
                    <option>Pharmacy Education</option>
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
                  28 Jobs
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
                {clinicalPharmacyJobs.map((job, index) => (
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
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Testimonial */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715232294269-bb4613f6039a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxMDIxMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="David K., Clinical Pharmacist"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <div className="mb-6">
                <svg className="w-12 h-12 text-[#7C944B] mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
                <p className="text-2xl text-gray-800 leading-relaxed italic mb-6">
                  "The Pediatric Pharmacy Program allows me to combine my clinical expertise with training 
                  and mentorship. I'm helping build the next generation of pediatric pharmaceutical care 
                  across West Africa. It's incredibly fulfilling."
                </p>
              </div>
              <div>
                <p className="text-gray-900">
                  <span className="font-semibold">David K.</span>
                </p>
                <p className="text-gray-600">
                  Clinical Pharmacist, Ghana
                </p>
              </div>
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
const clinicalPharmacyJobs = [
  {
    title: "Clinical Pharmacist - Pediatric Specialization",
    location: "Accra, Ghana",
    postedDate: "Posted 3 days ago",
    description: "Provide specialized pharmaceutical care for pediatric patients, participate in ward rounds, conduct medication therapy management, and train healthcare staff on pediatric dosing and drug safety. Support the Pediatric Pharmacy Program.",
    tags: ["Full-time", "Specialist", "Ghana"],
  },
  {
    title: "Hospital Pharmacy Manager",
    location: "Nairobi, Kenya",
    postedDate: "Posted 5 days ago",
    description: "Manage hospital pharmacy operations including dispensing, inventory management, sterile compounding, and clinical services. Ensure regulatory compliance, supervise pharmacy staff, and implement quality improvement initiatives.",
    tags: ["Full-time", "Manager", "Kenya"],
  },
  {
    title: "Antiretroviral Therapy (ART) Pharmacist",
    location: "Lagos, Nigeria",
    postedDate: "Posted 1 week ago",
    description: "Provide pharmaceutical care for HIV/AIDS patients on antiretroviral therapy, conduct adherence counseling, monitor drug interactions and side effects, and support patients in achieving viral suppression.",
    tags: ["Full-time", "Specialist", "Nigeria"],
  },
  {
    title: "Pharmaceutical Care Specialist - NCDs",
    location: "Kampala, Uganda",
    postedDate: "Posted 1 week ago",
    description: "Deliver pharmaceutical care for patients with non-communicable diseases (diabetes, hypertension, cardiovascular disease), conduct medication therapy management, and educate patients on chronic disease management.",
    tags: ["Full-time", "Specialist", "Uganda"],
  },
  {
    title: "Oncology Pharmacist",
    location: "Dar es Salaam, Tanzania",
    postedDate: "Posted 2 weeks ago",
    description: "Provide specialized pharmaceutical care for cancer patients, prepare chemotherapy, monitor treatment protocols, manage side effects, and collaborate with oncology teams to optimize patient outcomes.",
    tags: ["Full-time", "Specialist", "Tanzania"],
  },
  {
    title: "Community Pharmacy Manager",
    location: "Dakar, Senegal",
    postedDate: "Posted 2 weeks ago",
    description: "Oversee community pharmacy operations, provide patient counseling, manage inventory and procurement, ensure regulatory compliance, and expand access to quality pharmaceutical care in the community.",
    tags: ["Full-time", "Manager", "Senegal"],
  },
  {
    title: "Pharmaceutical Advisor - Maternal & Child Health",
    location: "Multi-Country, East Africa",
    postedDate: "Posted 3 weeks ago",
    description: "Provide technical guidance on pharmaceutical management for maternal and child health programs, develop standard operating procedures, train healthcare workers, and ensure quality pharmaceutical care for mothers and children.",
    tags: ["Full-time", "Advisor", "Multi-Country"],
  },
  {
    title: "Clinical Pharmacy Educator",
    location: "Nairobi, Kenya",
    postedDate: "Posted 3 weeks ago",
    description: "Develop and deliver clinical pharmacy training programs, mentor pharmacy students and residents, conduct continuing professional development for pharmacists, and advance clinical pharmacy practice across the region.",
    tags: ["Full-time", "Educator", "Kenya"],
  },
  {
    title: "Pharmacovigilance Officer",
    location: "Accra, Ghana",
    postedDate: "Posted 1 month ago",
    description: "Monitor and report adverse drug reactions, conduct medication safety surveillance, investigate drug-related incidents, and implement pharmacovigilance systems to enhance patient safety across our operations.",
    tags: ["Full-time", "Officer", "Ghana"],
  },
  {
    title: "Critical Care Pharmacist",
    location: "Lagos, Nigeria",
    postedDate: "Posted 1 month ago",
    description: "Provide pharmaceutical care in intensive care units, manage complex medication regimens, participate in multidisciplinary rounds, and optimize drug therapy for critically ill patients.",
    tags: ["Full-time", "Specialist", "Nigeria"],
  },
];
