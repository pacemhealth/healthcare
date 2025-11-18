import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function MaternalHealthImpact() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#4B2991]">Home</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[#4B2991]">News & Media</Link>
            <span>/</span>
            <span className="text-foreground">Maternal Health Impact</span>
          </div>
        </div>
      </section>

      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/news" className="inline-flex items-center text-[#4B2991] hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#00A0DC] text-white rounded-full text-sm">
              Impact Story
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>December 15, 2024</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Target: Maternal Health Outcomes in Pilot Facilities
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Early indicators show promise in reducing maternal complications through improved access to essential medicines and skilled pharmaceutical care
          </p>

          <div className="mb-12 rounded-xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Maternal Health"
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Pacem Health's maternal health initiative is showing promising early results in pilot facilities across Kenya and Uganda, with initial data indicating improvements in essential medicine availability and maternal complication rates.
            </p>

            <h2>Program Overview</h2>
            <p>
              The maternal health program focuses on ensuring reliable access to essential medicines for pregnancy, childbirth, and postpartum care, including:
            </p>
            <ul>
              <li>Oxytocin for postpartum hemorrhage prevention</li>
              <li>Magnesium sulfate for pre-eclampsia/eclampsia</li>
              <li>Antibiotics for infection prevention and treatment</li>
              <li>Iron and folic acid supplements</li>
              <li>Misoprostol for hemorrhage management</li>
            </ul>

            <h2>Pilot Sites</h2>
            <p>
              The program is currently operating in 8 pilot facilities:
            </p>
            <ul>
              <li>4 district hospitals in rural Kenya</li>
              <li>3 health centers in Uganda</li>
              <li>1 regional referral hospital in Tanzania</li>
            </ul>

            <h2>Early Results</h2>
            <p>
              While comprehensive outcome data is still being collected, preliminary indicators are encouraging:
            </p>
            <ul>
              <li>Essential maternal medicines availability increased from 65% to 92%</li>
              <li>Stock-outs of critical medicines (oxytocin, magnesium sulfate) reduced to near-zero</li>
              <li>Pharmacist-led medication counseling for 95% of pregnant women</li>
              <li>Improved adherence to iron and folic acid supplementation</li>
            </ul>

            <h2>Clinical Pharmacist Role</h2>
            <p>
              A key innovation in the program is the integration of clinical pharmacists into maternal health teams. Pharmacists provide:
            </p>
            <ul>
              <li>Medication counseling for pregnant and postpartum women</li>
              <li>Management of pregnancy-related conditions (anemia, hypertension)</li>
              <li>Drug interaction screening and dosing optimization</li>
              <li>Staff training on emergency obstetric medicines</li>
              <li>Quality assurance for medicine storage and handling</li>
            </ul>

            <p>
              "Having a dedicated pharmacist focusing on maternal health has made a real difference," said Dr. Grace Nyambura, Obstetrician at Embu Level 5 Hospital in Kenya. "We're catching medication issues earlier, women are more informed about their treatments, and we're better prepared for obstetric emergencies."
            </p>

            <h2>Challenges and Learnings</h2>
            <p>
              The pilot has also identified important challenges:
            </p>
            <ul>
              <li>Need for reliable cold chain for oxytocin storage</li>
              <li>Importance of staff training on emergency medicine use</li>
              <li>Value of buffer stock for critical medicines</li>
              <li>Necessity of 24/7 pharmacy services in maternity units</li>
            </ul>

            <h2>Next Steps</h2>
            <p>
              Building on pilot learnings, Pacem Health plans to:
            </p>
            <ul>
              <li>Complete comprehensive outcome evaluation by Q2 2025</li>
              <li>Expand to 25 additional facilities if results confirm effectiveness</li>
              <li>Develop standardized maternal pharmacy protocols</li>
              <li>Create training programs for maternal health pharmacists</li>
              <li>Partner with ministries of health for national scale-up</li>
            </ul>

            <p>
              "Maternal mortality remains unacceptably high across Africa, and lack of essential medicines is a major contributing factor," explained Dr. Mary Wanjiku, Pacem Health's Maternal Health Program Director. "While it's still early, we're encouraged by these initial results and committed to rigorous evaluation to understand what's working and how we can achieve even better outcomes."
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link to="/news">
              <Button variant="outline" size="lg">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All News
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
