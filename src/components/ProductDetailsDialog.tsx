import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    name: string;
    category: string;
    description: string;
    image: string;
    specs: string[];
    applications?: string[];
    certifications: string[] | string; // Can be array or string
    badge?: string | null;
  };
  fullDetailsLink?: string; // Optional link to dedicated product page
}

export function ProductDetailsDialog({ open, onOpenChange, product, fullDetailsLink }: ProductDetailsDialogProps) {
  // Convert certifications to array if it's a string
  const certificationsArray = Array.isArray(product.certifications)
    ? product.certifications
    : product.certifications.split(',').map(cert => cert.trim());

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {product.category} - View detailed specifications and request a quote
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Image */}
          <div>
            <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg mb-4">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.badge && (
              <Badge className="bg-[#0033A0] mb-3">{product.badge}</Badge>
            )}
            
            <div className="mb-4">
              <div className="text-sm mb-1">Category</div>
              <p className="text-sm text-muted-foreground">{product.category}</p>
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg mb-3">Key Specifications</h3>
              <ul className="space-y-2">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#0033A0] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {product.applications && (
              <div className="mb-6">
                <h3 className="text-lg mb-3">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, index) => (
                    <Badge key={index} variant="outline" className="border-[#0033A0] text-[#0033A0]">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6 pb-6 border-b">
              <h3 className="text-lg mb-3">Certifications</h3>
              <div className="flex flex-wrap gap-2">
                {certificationsArray.map((cert, index) => (
                  <Badge key={index} variant="secondary">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Link to="/support/request-equipment-quote" className="flex-1">
                <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                  Request Quote
                </Button>
              </Link>
              {fullDetailsLink && (
                <Link to={fullDetailsLink} className="flex-1">
                  <Button className="w-full bg-[#0033A0] hover:bg-[#002875]">
                    View Full Details
                  </Button>
                </Link>
              )}
              <Button 
                variant="outline" 
                onClick={() => onOpenChange(false)}
                className="flex-1"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}