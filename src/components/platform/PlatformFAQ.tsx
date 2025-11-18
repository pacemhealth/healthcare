'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface PlatformFAQProps {
  faqs: FAQItem[];
  title?: string;
}

export function PlatformFAQ({ faqs, title = "Frequently Asked Questions" }: PlatformFAQProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">{title}</h2>
          <div className="w-20 h-1 bg-[#00A0DC] mx-auto"></div>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`faq-${index + 1}`} 
              className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-lg text-[#0033A0]">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
