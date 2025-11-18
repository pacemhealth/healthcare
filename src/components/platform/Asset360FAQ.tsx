'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const faqs = [
  {
    question: "How does Asset360™ handle equipment without QR codes yet?",
    answer: "During implementation, our team conducts equipment inventories and applies QR code tags to all assets. Equipment can be entered into the system immediately and tagged during the rollout phase. Manual equipment registration is also supported until tagging is complete."
  },
  {
    question: "Can Asset360™ track equipment across multiple facilities?",
    answer: "Yes. Asset360™ is designed for national-scale deployments covering thousands of facilities. Equipment transfers between facilities are logged automatically when scanned at new locations. Central dashboards provide complete visibility across the entire health system."
  },
  {
    question: "What if we don't have biomedical engineers to perform maintenance?",
    answer: "Asset360™ integrates with FieldPro™, our on-demand biomedical engineering network. When equipment needs service, you can dispatch FieldPro™ technicians directly from Asset360™. This solves the critical biomedical engineer shortage in Africa."
  },
  {
    question: "How long does implementation take?",
    answer: "Pilot deployments in 3-5 facilities: 2-4 months including equipment inventory and tagging. National scale-ups: 12-18 months depending on the number of facilities and equipment items. We use phased approaches to demonstrate value quickly."
  },
  {
    question: "What is the pricing model?",
    answer: "Asset360™ uses subscription-based pricing: $2-5 per equipment item per year depending on volume and features. This includes platform access, mobile apps, QR tags, training, and ongoing support. Custom enterprise pricing available for national deployments."
  }
];

export function Asset360FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#0033A0] mb-4">Frequently Asked Questions</h2>
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
