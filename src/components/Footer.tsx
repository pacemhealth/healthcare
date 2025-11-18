import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2c2c3e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Pacem Health Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-[#7C944B] text-xl">Pacem Health</span>
            </Link>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-[#7C944B] transition">Healthcare IT</a></li>
              <li><a href="#" className="hover:text-[#7C944B] transition">Clinical Solutions</a></li>
              <li><a href="#" className="hover:text-[#7C944B] transition">Imaging Systems</a></li>
              <li><a href="#" className="hover:text-[#7C944B] transition">Patient Monitoring</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/core-solutions" className="hover:text-[#7C944B] transition">Core Health</Link></li>
              <li><Link to="/advanced-solutions" className="hover:text-[#7C944B] transition">Advanced Systems</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/support" className="hover:text-[#7C944B] transition">Technical Support</Link></li>
              <li><a href="#" className="hover:text-[#7C944B] transition">Documentation</a></li>
              <li><a href="#" className="hover:text-[#7C944B] transition">Contact Support</a></li>
              <li><a href="#" className="hover:text-[#7C944B] transition">Service Requests</a></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/shop" className="hover:text-[#7C944B] transition">Parts & Accessories</Link></li>
              <li><a href="#" className="hover:text-[#7C944B] transition">Software</a></li>
              <li><a href="#" className="hover:text-[#7C944B] transition">Special Offers</a></li>
              <li><a href="#" className="hover:text-[#7C944B] transition">Order Support</a></li>
            </ul>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-8">
          <h3 className="mb-4">About</h3>
          <ul className="flex flex-wrap gap-6 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-[#7C944B] transition">Company</Link></li>
            <li><Link to="/team" className="hover:text-[#7C944B] transition">Team</Link></li>
            <li><Link to="/about/management" className="hover:text-[#7C944B] transition">Management</Link></li>
            <li><Link to="/about/board" className="hover:text-[#7C944B] transition">Board of Directors</Link></li>
            <li><Link to="/about/sustainability" className="hover:text-[#7C944B] transition">Sustainability</Link></li>
            <li><Link to="/investors" className="hover:text-[#7C944B] transition">Investors</Link></li>
            <li><Link to="/careers" className="hover:text-[#7C944B] transition">Careers</Link></li>
            <li><Link to="/news" className="hover:text-[#7C944B] transition">News & Media</Link></li>
            <li><a href="#" className="hover:text-[#7C944B] transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Medical Disclaimer */}
        <div className="pt-8 border-t border-white/10 mb-8">
          <div className="bg-white/5 rounded-lg p-6">
            <h4 className="text-[#7C944B] mb-3 text-sm">Medical Disclaimer</h4>
            <p className="text-xs text-white/70 leading-relaxed">
              The information provided on this website is for educational and informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or emergency services immediately. Pacem Health Inc. does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on this website. Reliance on any information provided by Pacem Health Inc. is solely at your own risk.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <Link to="/privacy" className="hover:text-[#7C944B] transition">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-[#7C944B] transition">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-[#7C944B] transition">Cookie Settings</Link>
              <Link to="/accessibility" className="hover:text-[#7C944B] transition">Accessibility</Link>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/70 hover:text-[#7C944B] transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-[#7C944B] transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-[#7C944B] transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <p className="text-sm text-white/50 text-center md:text-left mt-6">
            © 2025 Pacem Health Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}