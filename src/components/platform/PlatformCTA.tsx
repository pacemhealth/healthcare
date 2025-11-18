import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

interface CTAButton {
  text: string;
  href: string;
  variant?: 'default' | 'outline';
}

interface PlatformCTAProps {
  title: string;
  description: string;
  buttons: CTAButton[];
}

export function PlatformCTA({ title, description, buttons }: PlatformCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0033A0] via-[#0033A0] to-[#00A0DC] text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl mb-6">{title}</h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {buttons.map((button, index) => (
            <Button 
              key={index}
              asChild 
              size="lg" 
              className={button.variant === 'outline' 
                ? "border-2 border-white text-white hover:bg-white/10" 
                : "bg-white text-[#0033A0] hover:bg-gray-100"
              }
              variant={button.variant === 'outline' ? 'outline' : 'default'}
            >
              <Link to={button.href}>{button.text}</Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}