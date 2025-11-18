'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Solution {
  title: string;
  description: string;
  href: string;
}

interface RelatedSolutionsProps {
  solutions: Solution[];
  title?: string;
  subtitle?: string;
}

export function RelatedSolutions({ 
  solutions, 
  title = "Related Advanced System Solutions",
  subtitle = "Explore our other proprietary platforms"
}: RelatedSolutionsProps) {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl text-[#0033A0] mb-2">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Link 
              key={index}
              href={solution.href} 
              className="bg-white p-6 rounded-lg hover:shadow-md transition-all border border-gray-200"
            >
              <h4 className="text-xl text-[#0033A0] mb-2">{solution.title}</h4>
              <p className="text-gray-600 text-sm mb-3">{solution.description}</p>
              <span className="text-[#00A0DC] text-sm flex items-center gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
