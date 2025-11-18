import { Link } from 'react-router-dom';
import { Search, ArrowRight, Users, TrendingUp, Heart, Shield, Globe, Package, Stethoscope, Lightbulb, GraduationCap, Briefcase, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useState } from 'react';

export default function CareersPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % employeeTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + employeeTestimonials.length) % employeeTestimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Job Search */}
      <section className="relative bg-gradient-to-br from-[#0033A0] to-[#002875] text-white overflow-hidden py-20 md:py-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,160,220,0.1),transparent)]"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Build Health Ecosystems That Transform Africa
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              We want to be an employer of choice for everyone who seeks to continuously learn, 
              innovate, and pioneer breakthroughs in healthcare. For everyone. Everywhere.
            </p>
            
            <p className="text-lg text-white/80 mb-12 leading-relaxed">
              Join Pacem Health and contribute to building sustainable health systems across Africa. 
              Whether you're a supply chain expert, clinical pharmacist, health systems advisor, 
              technology innovator, or operations professional—your work will directly impact 
              healthcare access for millions.
            </p>

            {/* Job Search Bar */}
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
                <Globe className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Country or city"
                  className="bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 w-full"
                />
              </div>
              <button className="bg-[#00A0DC] hover:bg-[#0088bb] text-white px-8 py-3 rounded transition-colors">
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Impact - Job Categories */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-6 text-center">
            Find Your Impact at Pacem Health
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Explore career opportunities across our operations. From supply chain excellence to 
            clinical innovation, every role contributes to strengthening healthcare systems across Africa.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-t-4 border-[#7C944B] cursor-pointer group"
              >
                <div className="w-14 h-14 bg-[#4B2991]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#4B2991]/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl text-[#4B2991] mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[#7C944B]">
                    {category.jobCount} jobs
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#7C944B] group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Our Programs & Impact */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#4B2991] mb-6 text-center">
            Explore Our Strategic Programs
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Pacem Health isn't just a traditional distributor. We're building comprehensive health 
            ecosystem solutions through five strategic programs that create lasting impact.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicPrograms.slice(0, 5).map((program, index) => (
              <Link
                key={index}
                to={program.link}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200 hover:border-[#7C944B]">
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <ImageWithFallback
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 text-xl text-white">
                      {program.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <div className="flex items-center text-[#7C944B] group-hover:text-[#4B2991] transition-colors">
                      <span className="text-sm">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Additional Programs Teaser */}
            <div className="bg-gradient-to-br from-[#4B2991] to-[#3d1e7d] rounded-lg p-8 flex flex-col justify-center items-center text-center text-white">
              <Lightbulb className="w-16 h-16 mb-4 text-[#7C944B]" />
              <h3 className="text-xl mb-3">
                More Programs Coming Soon
              </h3>
              <p className="text-gray-200 text-sm mb-6">
                We're expanding our impact through new strategic initiatives in health systems strengthening.
              </p>
              <Link
                to="/programs"
                className="text-[#7C944B] hover:text-white inline-flex items-center gap-2 transition-colors"
              >
                View All Programs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pacem Health - Four Pillars */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#4B2991] mb-6 text-center">
            Why Pacem Health
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Join a company where your work creates measurable impact on healthcare access, 
            where innovation is encouraged, and where diverse perspectives drive our success.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {fourPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative h-64 md:h-auto">
                    <ImageWithFallback
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-8 flex flex-col justify-center">
                    <h3 className="text-2xl text-[#4B2991] mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                    {pillar.link && (
                      <Link
                        to={pillar.link}
                        className="text-[#7C944B] hover:text-[#4B2991] inline-flex items-center gap-2 transition-colors uppercase text-sm tracking-wide"
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team - Employee Testimonials Carousel */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#4B2991] mb-6 text-center">
            Creating a Culture of Impact and Belonging
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Hear from team members across our organization about what it's like to work at Pacem Health.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-lg p-12 relative">
              {/* Decorative Wave Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <svg viewBox="0 0 200 200" className="text-[#7C944B]">
                  <path
                    fill="currentColor"
                    d="M 0 50 Q 50 0 100 50 T 200 50 L 200 200 L 0 200 Z"
                  />
                </svg>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <ImageWithFallback
                      src={employeeTestimonials[currentTestimonial].image}
                      alt={employeeTestimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-[#7C944B] mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                    <p className="text-xl text-gray-800 leading-relaxed italic mb-6">
                      "{employeeTestimonials[currentTestimonial].quote}"
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900">
                      <span className="font-semibold">{employeeTestimonials[currentTestimonial].name}</span>
                    </p>
                    <p className="text-gray-600">
                      {employeeTestimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-[#4B2991] hover:bg-[#4B2991] hover:text-white transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-[#4B2991] hover:bg-[#4B2991] hover:text-white transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
              
              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {employeeTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-[#4B2991] w-8' : 'bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#4B2991] mb-12 text-center">
            Career Pathways at Pacem Health
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Early Careers */}
            <div className="bg-white rounded-lg p-10 shadow-lg border-t-4 border-[#7C944B]">
              <div className="w-16 h-16 bg-[#7C944B]/10 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-10 h-10 text-[#7C944B]" />
              </div>
              <h3 className="text-3xl text-[#4B2991] mb-4">
                Early Careers
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Launch your career in global health with rotational programs, mentorship, and 
                hands-on experience across our operations in multiple African countries.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Graduate trainee programs in supply chain, pharmacy, and health systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Internship opportunities for students and recent graduates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Cross-functional rotations to build diverse skills</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7C944B] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Structured mentorship and professional development</span>
                </li>
              </ul>
              <button className="text-[#7C944B] hover:text-[#4B2991] inline-flex items-center gap-2 transition-colors">
                Explore Early Career Opportunities <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Experienced Professionals */}
            <div className="bg-white rounded-lg p-10 shadow-lg border-t-4 border-[#4B2991]">
              <div className="w-16 h-16 bg-[#4B2991]/10 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-10 h-10 text-[#4B2991]" />
              </div>
              <h3 className="text-3xl text-[#4B2991] mb-4">
                Experienced Professionals
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Bring your expertise to scale. Lead strategic initiatives, mentor the next generation, 
                and drive innovations that strengthen healthcare systems across Africa.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Leadership roles in operations, advisory, and strategic programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Technical specialist positions in pharmacy, health systems, and technology</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Country and regional management opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#4B2991] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">Executive development and continuous learning</span>
                </li>
              </ul>
              <button className="text-[#7C944B] hover:text-[#4B2991] inline-flex items-center gap-2 transition-colors">
                Explore Professional Opportunities <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Ada - Virtual Assistant */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] rounded-lg overflow-hidden shadow-xl">
            <div className="md:w-2/5">
              <div className="relative h-96 md:h-full">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjByZXByZXNlbnRhdGl2ZSUyMGhlYWRzZXR8ZW58MXx8fHwxNzYxMDg0Mjk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ada - Pacem Health Virtual Assistant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded">
                  <p className="text-sm text-gray-600">AI Generated</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-12">
              <h2 className="text-4xl text-[#4B2991] mb-6">
                Introducing Ada, Our Digital Assistant
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ada, Pacem Health's virtual assistant, is here to assist you in your candidate journey. 
                You may hear from her via text or email to help you schedule an interview with our team.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                You are also able to chat with her directly here on our career site to learn more about 
                our culture and hiring process, find your next opportunity, as well as apply to select 
                open roles!
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#7C944B] hover:bg-[#6a7f41] text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                  Chat with Ada <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Community CTA */}
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

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-[#4B2991] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl text-[#4B2991] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fraud Warning */}
      <section className="py-12 px-6 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl text-red-900 mb-4">
                  Important: Beware of Recruitment Fraud
                </h3>
                <p className="text-gray-800 leading-relaxed mb-4">
                  Pacem Health has become aware of online recruiting-related scams in which individuals 
                  who are not affiliated with or authorized by Pacem Health are using the Pacem Health 
                  name in fraudulent emails, job postings, or social media messages.
                </p>
                <p className="text-gray-800 leading-relaxed mb-4">
                  In light of these scams, please bear the following in mind:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-800">
                      Pacem Health Talent Advisors will <strong>never</strong> solicit money or credit 
                      card information in connection with a Pacem Health job application.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-800">
                      Pacem Health Talent Advisors do not communicate with candidates via online chatrooms 
                      or using email accounts such as Gmail or Hotmail. Note that Pacem Health does rely on 
                      a virtual assistant (Ada) for certain recruiting-related communications with candidates.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-800">
                      Pacem Health job postings are posted on our career site: <strong>careers.pacemhealth.com</strong>.
                    </span>
                  </li>
                </ul>
                <p className="text-gray-800 leading-relaxed">
                  If you believe you have been the target of a recruitment scam, please report it to{' '}
                  <a href="mailto:careers@pacemhealth.com" className="text-[#4B2991] hover:underline">
                    careers@pacemhealth.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Data

const jobCategories = [
  {
    icon: <Package className="w-7 h-7 text-[#4B2991]" />,
    title: "Distribution Operations",
    description: "Supply chain, logistics, warehousing, and cold chain management roles.",
    jobCount: 42,
    link: "/careers/distribution-operations",
  },
  {
    icon: <Stethoscope className="w-7 h-7 text-[#4B2991]" />,
    title: "Clinical & Pharmacy",
    description: "Pharmacists, clinical advisors, and healthcare professionals.",
    jobCount: 28,
    link: "/careers/clinical-pharmacy",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-[#4B2991]" />,
    title: "Health Systems Advisory",
    description: "Strategy, policy, financing, and health systems strengthening experts.",
    jobCount: 15,
    link: "/careers/health-systems-advisory",
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-[#4B2991]" />,
    title: "Technology & Innovation",
    description: "Digital health, data analytics, and technology solutions roles.",
    jobCount: 19,
    link: "/careers/technology-innovation",
  },
  {
    icon: <Users className="w-7 h-7 text-[#4B2991]" />,
    title: "Business Operations",
    description: "Finance, HR, legal, compliance, and corporate functions.",
    jobCount: 22,
    link: "/careers/business-operations",
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-[#4B2991]" />,
    title: "Training & Education",
    description: "Capacity building, training programs, and educational initiatives.",
    jobCount: 12,
    link: "/careers/training-education",
  },
  {
    icon: <Globe className="w-7 h-7 text-[#4B2991]" />,
    title: "Regional & Country Leadership",
    description: "Country managers, regional directors, and field leadership.",
    jobCount: 8,
    link: "/careers/regional-country-leadership",
  },
  {
    icon: <Heart className="w-7 h-7 text-[#4B2991]" />,
    title: "Program Management",
    description: "Strategic program managers for healthcare development initiatives.",
    jobCount: 11,
    link: "/careers/program-management",
  },
];

const strategicPrograms = [
  {
    title: "Healthcare Development Program",
    description: "Large-scale infrastructure and system-building projects that transform healthcare delivery at national and regional levels.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/programs/healthcare-development",
  },
  {
    title: "Pacem Excellence Program",
    description: "Comprehensive quality improvement and accreditation support for healthcare facilities seeking international standards.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/programs/pacem-excellence",
  },
  {
    title: "Pediatric Pharmacy Program",
    description: "Specialized training and support for pediatric pharmaceutical care, focusing on child health outcomes.",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/programs/pediatric-pharmacy",
  },
  {
    title: "PERT Initiative",
    description: "Pandemic Emergency Response Training for rapid deployment and emergency healthcare capacity building.",
    image: "https://images.unsplash.com/photo-1584744982491-665216d95f8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/programs",
  },
  {
    title: "Social Enterprise Program",
    description: "Community-based healthcare solutions that create sustainable local employment and health access.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    link: "/programs",
  },
];

const fourPillars = [
  {
    title: "Culture & Values",
    description: "At Pacem Health, we're driven by a mission to advance health outcomes for everyone, everywhere. Our culture values innovation, collaboration, and impact. We believe in empowering our teams, fostering continuous learning, and celebrating the diverse perspectives that make our work stronger.",
    image: "https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmclMjBvZmZpY2V8ZW58MXx8fHwxNzYwOTcxMTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "/about",
  },
  {
    title: "Benefits",
    description: "We offer competitive compensation, comprehensive health benefits, professional development support, and flexible working arrangements. Our benefits package is designed to support your health, well-being, and career growth as you contribute to transforming healthcare across Africa.",
    image: "https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMG9mZmljZSUyMHNtaWxpbmd8ZW58MXx8fHwxNzYxMDg0MjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: null,
  },
  {
    title: "Inclusion & Belonging",
    description: "We're building a workplace where every voice is heard and valued. Our commitment to diversity, equity, and inclusion isn't just policy—it's how we operate. We foster belonging through intentional hiring, mentorship programs, employee resource groups, and leadership development.",
    image: "https://images.unsplash.com/photo-1715232294269-bb4613f6039a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxMDIxMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: null,
  },
  {
    title: "Our Hiring Process",
    description: "We're committed to a transparent, efficient, and candidate-friendly hiring process. From application to offer, we'll guide you through each step, provide timely feedback, and ensure you understand what to expect. Our goal is to find the right fit for both you and Pacem Health.",
    image: "https://images.unsplash.com/photo-1758656321452-0d3b91acb371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEwODQyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: null,
  },
];

const employeeTestimonials = [
  {
    name: "Amara N.",
    role: "Senior Supply Chain Manager, Kenya",
    quote: "At Pacem Health, I'm not just managing logistics—I'm ensuring that life-saving medicines reach communities that need them most. Every optimized route, every successful delivery, directly impacts health outcomes. That's what makes this work meaningful.",
    image: "https://images.unsplash.com/photo-1536064479547-7ee40b74b807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwaGVhbHRoY2FyZSUyMHdvcmtlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEwODQyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "David K.",
    role: "Clinical Pharmacist, Ghana",
    quote: "The Pediatric Pharmacy Program allows me to combine my clinical expertise with training and mentorship. I'm helping build the next generation of pediatric pharmaceutical care across West Africa. It's incredibly fulfilling.",
    image: "https://images.unsplash.com/photo-1715232294269-bb4613f6039a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxMDIxMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Sarah M.",
    role: "Health Systems Advisor, U.S. Office",
    quote: "Working at Pacem Health means collaborating with brilliant colleagues across continents. We bring together global health expertise and local knowledge to design solutions that actually work in real-world contexts. It's challenging and deeply rewarding.",
    image: "https://images.unsplash.com/photo-1758518729459-235dcaadc611?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMG9mZmljZSUyMHNtaWxpbmd8ZW58MXx8fHwxNzYxMDg0MjkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "James O.",
    role: "Digital Health Innovation Lead, Nigeria",
    quote: "Pacem Health gave me the opportunity to lead technology initiatives that modernize healthcare delivery. From digital health platforms to data analytics, we're using innovation to solve real problems and improve patient care.",
    image: "https://images.unsplash.com/photo-1758656321452-0d3b91acb371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEwODQyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Fatima B.",
    role: "Training & Capacity Building Manager, Senegal",
    quote: "At Pacem Health, we can connect and be ourselves around each other. It's a place where we are all accepted for who we are. The commitment to inclusion isn't just words—it's how we operate every day.",
    image: "https://images.unsplash.com/photo-1758598307046-22f11e2a6917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvcmtpbmclMjBsYXB0b3B8ZW58MXx8fHwxNzYxMDg0Mjk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Michael T.",
    role: "Regional Operations Director, East Africa",
    quote: "Leading operations across multiple countries is complex, but Pacem Health provides the resources, support, and autonomy to succeed. We're building something that will outlast all of us—sustainable health systems for the next generation.",
    image: "https://images.unsplash.com/photo-1759310347467-578dfd846229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBkaXN0cmlidXRpb24lMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzYxMDMxMTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const faqs = [
  {
    question: "How do I apply for a position at Pacem Health?",
    answer: "You can search and apply for open positions through our careers page. Simply use the job search bar at the top of this page, or browse by job category. You can also join our Talent Community to receive alerts when positions matching your interests become available.",
  },
  {
    question: "What is the typical hiring process at Pacem Health?",
    answer: "Our hiring process typically includes: (1) Online application and resume screening, (2) Phone or video interview with recruiting team, (3) Technical/functional interviews with hiring managers, (4) Final interviews with senior leadership, and (5) Background checks and offer. The process typically takes 3-6 weeks, and we provide regular updates throughout.",
  },
  {
    question: "Does Pacem Health offer opportunities for career growth and development?",
    answer: "Absolutely. We're committed to investing in our people through structured professional development, mentorship programs, cross-functional rotations, and leadership training. As a growing company operating across multiple African countries, we offer significant opportunities for career advancement.",
  },
  {
    question: "What locations does Pacem Health operate in?",
    answer: "Pacem Health has operations across multiple African countries including Kenya, Ghana, Nigeria, Senegal, and others, with our U.S. headquarters coordinating global strategy and partnerships. Many positions offer field-based or hybrid arrangements depending on the role.",
  },
  {
    question: "Does Pacem Health sponsor work visas?",
    answer: "Visa sponsorship is evaluated on a case-by-case basis depending on the role, location, and candidate qualifications. For specific questions about visa sponsorship, please reach out to our recruiting team or include this information in your application.",
  },
  {
    question: "What is Pacem Health's approach to diversity and inclusion?",
    answer: "Diversity, equity, and inclusion are core to who we are. We're building teams that reflect the communities we serve—across nationality, gender, background, and experience. We actively invest in inclusive hiring practices, employee resource groups, and leadership development programs that ensure everyone can thrive.",
  },
  {
    question: "How can I stay updated on new job openings?",
    answer: "Join our Talent Community to receive personalized job alerts, company updates, and invitations to recruiting events. You can also follow us on LinkedIn and check back regularly on our careers page for new opportunities.",
  },
];