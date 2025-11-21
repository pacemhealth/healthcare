import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Separator } from './ui/separator';
//import pacemHealthLogo from 'figma:asset/f142cfcd435fe5b0416adca4ffe4fb295f9fb39c.png';
import ServicesMegaMenu from './ServicesMegaMenu';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50">
      {/* Upper Navbar - Utility Links */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10">
            <div className="hidden md:flex items-center gap-6 text-xs ">
              <Link to="/careers" className="hover:text-[#00A0DC] transition text-blue-500">
                Careers
              </Link>
              <Link to="/investors" className="hover:text-[#00A0DC] transition text-blue-500">
                Investors
              </Link>
              <Link to="/news" className="hover:text-[#00A0DC] transition text-blue-500">
                News & Media
              </Link>
              <Link to="/insights" className="hover:text-[#78c9e6] transition text-blue-500">
                Insights
              </Link>
              <Link to="/support/general-inquiry" className="hover:text-[#00A0DC] transition text-blue-500">
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
              
              <span className="text-xl font-bold">Pacem Health</span>
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
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    {/* Main Navigation Links */}
                    <div className="pb-4">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3 pl-4">Main Menu</p>
                      <div className="flex flex-col space-y-3 pl-6">
                        <Link to="/products" className="text-base hover:text-[#00A0DC] transition" onClick={() => setIsOpen(false)}>
                          Products
                        </Link>
                        <Link to="/services" className="text-base hover:text-[#00A0DC] transition" onClick={() => setIsOpen(false)}>
                          Services
                        </Link>
                        <Link to="/our-approach" className="text-base hover:text-[#00A0DC] transition" onClick={() => setIsOpen(false)}>
                          Our Approach
                        </Link>
                        <Link to="/programs" className="text-base hover:text-[#00A0DC] transition" onClick={() => setIsOpen(false)}>
                          Programs
                        </Link>
                        <Link to="/insights" className="text-base hover:text-[#00A0DC] transition" onClick={() => setIsOpen(false)}>
                          Insights
                        </Link>
                        <Link to="/support" className="text-base hover:text-[#00A0DC] transition" onClick={() => setIsOpen(false)}>
                          Support
                        </Link>
                        <Link to="/shop" className="text-base hover:text-[#00A0DC] transition" onClick={() => setIsOpen(false)}>
                          Shop
                        </Link>
                        <Link to="/about" className="text-base hover:text-[#00A0DC] transition" onClick={() => setIsOpen(false)}>
                          About
                        </Link>
                      </div>
                    </div>

                    <Separator />

                    {/* Utility Links Section */}
                    <div className="pt-2">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground mb-3 pl-4">Quick Links</p>
                      <div className="flex flex-col space-y-3 pl-6 ">
                        <Link to="/careers" className="text-sm hover:text-[#00A0DC] transition text-blue-500" onClick={() => setIsOpen(false)}>
                          Careers
                        </Link>
                        <Link to="/investors" className="text-sm hover:text-[#00A0DC] transition text-blue-500" onClick={() => setIsOpen(false)}>
                          Investors
                        </Link>
                        <Link to="/news" className="text-sm hover:text-[#00A0DC] transition text-blue-500" onClick={() => setIsOpen(false)}>
                          News & Media
                        </Link>
                        <Link to="/support/general-inquiry" className="text-sm hover:text-[#00A0DC] transition text-blue-500" onClick={() => setIsOpen(false)}>
                          Contact Us
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