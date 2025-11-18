'use client';

import { Suspense } from 'react';
import { ArrowRight } from 'lucide-react';

interface SpecItem {
  label: string;
}

interface SpecCategory {
  title: string;
  items: SpecItem[];
}

interface LazyTechnicalSpecsProps {
  categories: SpecCategory[];
  title?: string;
  subtitle?: string;
}

function TechSpecsSkeleton() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="h-10 w-80 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="w-20 h-1 bg-gray-300 mx-auto mb-6"></div>
          <div className="h-6 w-96 bg-gray-200 rounded mx-auto animate-pulse"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-xl h-64 animate-pulse"></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalSpecsContent({ 
  categories, 
  title = "Technical Specifications", 
  subtitle = "Built for African infrastructure realities" 
}: LazyTechnicalSpecsProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-6">{title}</h2>
          <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl text-[#0033A0] mb-4">{category.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-[#00A0DC] flex-shrink-0 mt-0.5" />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LazyTechnicalSpecs(props: LazyTechnicalSpecsProps) {
  return (
    <Suspense fallback={<TechSpecsSkeleton />}>
      <TechnicalSpecsContent {...props} />
    </Suspense>
  );
}
