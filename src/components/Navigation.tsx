import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Separator } from './ui/separator';
import pacemHealthLogo from 'figma:asset/f142cfcd435fe5b0416adca4ffe4fb295f9fb39c.png';
import ServicesMegaMenu from './ServicesMegaMenu';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50">
      {/* Upper Navbar - Utility Links */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10">
            <div className="hidden md:flex items-center gap-6 text-xs">
              <Link to="/careers" className="hover:text-[#00A0DC] transition">
                Careers
              </Link>
              <Link to="/investors" className="hover:text-[#00A0DC] transition">
                Investors
              </Link>
              <Link to="/news" className="hover:text-[#00A0DC] transition">
                News & Media
              </Link>
              <Link to="/insights" className="hover:text-[#00A0DC] transition">
                Insights
              </Link>
              <Link to="/support/general-inquiry" className="hover:text-[#00A0DC] transition">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar - Main Navigation */}
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={pacemHealthLogo}
                alt="Pacem Health Inc."
                className="h-14 sm:h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/products" className="text-sm hover:text-[#00A0DC] transition">
                Products
              </Link>
              <ServicesMegaMenu />
              <Link to="/our-approach" className="text-sm hover:text-[#00A0DC] transition">
                Our Approach
              </Link>
              <Link to="/programs" className="text-sm hover:text-[#00A0DC] transition">
                Programs
              </Link>
              <Link to="/support" className="text-sm hover:text-[#00A0DC] transition">
                Support
              </Link>
              <Link to="/shop" className="text-sm hover:text-[#00A0DC] transition">
                Shop
              </Link>
              <Link to="/about" className="text-sm hover:text-[#00A0DC] transition">
                About
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    {/* Utility Links Section */}
                    <div className="pb-4">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Quick Links</p>
                      <div className="flex flex-col space-y-3">
                        <Link to="/careers" className="text-sm hover:text-[#00A0DC] transition">
                          Careers
                        </Link>
                        <Link to="/investors" className="text-sm hover:text-[#00A0DC] transition">
                          Investors
                        </Link>
                        <Link to="/news" className="text-sm hover:text-[#00A0DC] transition">
                          News & Media
                        </Link>
                        <Link to="/support/general-inquiry" className="text-sm hover:text-[#00A0DC] transition">
                          Contact Us
                        </Link>
                      </div>
                    </div>

                    <Separator />

                    {/* Main Navigation Links */}
                    <div className="pt-2">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3">Main Menu</p>
                      <div className="flex flex-col space-y-3">
                        <Link to="/products" className="text-base hover:text-[#00A0DC] transition">
                          Products
                        </Link>
                        <Link to="/services" className="text-base hover:text-[#00A0DC] transition">
                          Services
                        </Link>
                        <Link to="/our-approach" className="text-base hover:text-[#00A0DC] transition">
                          Our Approach
                        </Link>
                        <Link to="/programs" className="text-base hover:text-[#00A0DC] transition">
                          Programs
                        </Link>
                        <Link to="/insights" className="text-base hover:text-[#00A0DC] transition">
                          Insights
                        </Link>
                        <Link to="/support" className="text-base hover:text-[#00A0DC] transition">
                          Support
                        </Link>
                        <Link to="/shop" className="text-base hover:text-[#00A0DC] transition">
                          Shop
                        </Link>
                        <Link to="/about" className="text-base hover:text-[#00A0DC] transition">
                          About
                        </Link>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}