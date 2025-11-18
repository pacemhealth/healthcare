'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const faqs = [
  {
    question: "How does MedTrace™ prevent QR codes from being copied to counterfeit products?",
    answer: "Each QR code is cryptographically unique and linked to specific product details (batch number, manufacturing date, package size). When scanned, the system verifies these details match. Additionally, each scan is logged with location and timestamp. If a code is scanned from multiple locations simultaneously or shows suspicious patterns, automatic alerts flag it for investigation. The blockchain ledger makes it impossible to alter scan history."
  },
  {
    question: "What happens if there's no internet connectivity?",
    answer: "MedTrace™ mobile apps work fully offline. Scans are saved locally and verification happens against cached product databases. When connectivity returns, scans are automatically uploaded to the blockchain and full verification occurs. Critical alerts can be sent via SMS when internet is unavailable. The system is designed for Africa's connectivity realities."
  },
  {
    question: "How much does QR code labeling cost per medicine package?",
    answer: "QR code printing costs $0.01-0.03 per label depending on volume and application method. For a typical national deployment, total costs (including platform fees, training, and hardware) are $0.50-2.00 per capita per year—a tiny fraction of the billions lost annually to counterfeit medicines. The return on investment is typically 10:1 or higher."
  },
  {
    question: "Can MedTrace™ track medicines already in the supply chain?",
    answer: "Implementation typically starts with new pharmaceutical imports or locally manufactured products. Existing stock can be labeled during repacking or at distribution points, though this is less secure than factory serialization. We recommend phased implementation starting with high-priority medicines (antimalarials, antibiotics, vaccines) where counterfeit risk is highest."
  },
  {
    question: "Who owns the data collected by MedTrace™?",
    answer: "Governments own all pharmaceutical supply chain data. Pacem provides platform hosting, security, and management services, but data sovereignty remains with the client. Platforms can be configured for in-country data hosting if required by regulations. Manufacturers retain proprietary product information but not supply chain visibility data."
  },
  {
    question: "How do you ensure patient privacy when tracking medicines to patient level?",
    answer: "MedTrace™ tracks medicines to facility/pharmacy level, not to individual patients. Patient authentication scans are logged anonymously without personal information. The system protects medicine supply chains without creating patient surveillance. Where patient-level tracking is required (e.g., high-value biologics), explicit consent and GDPR-compliant protocols are implemented."
  }
];

export function MedTraceFAQ() {
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
