'use client';

import { Suspense } from 'react';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

interface LazyImplementationProcessProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
}

function ProcessSkeleton() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <div className="h-10 w-96 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="w-20 h-1 bg-gray-300 mx-auto mb-6"></div>
          <div className="h-6 w-64 bg-gray-200 rounded mx-auto animate-pulse"></div>
        </div>
        <div className="space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-gray-200 rounded-full animate-pulse flex-shrink-0"></div>
              <div className="flex-1 bg-gray-100 h-32 rounded-xl animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImplementationProcessContent({ 
  steps, 
  title = "Implementation Process", 
  subtitle = "From pilot to national scale" 
}: LazyImplementationProcessProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-6">{title}</h2>
          <div className="w-20 h-1 bg-[#00A0DC] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] rounded-full flex items-center justify-center text-white text-xl">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-xl text-[#0033A0] mb-2">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LazyImplementationProcess(props: LazyImplementationProcessProps) {
  return (
    <Suspense fallback={<ProcessSkeleton />}>
      <ImplementationProcessContent {...props} />
    </Suspense>
  );
}
