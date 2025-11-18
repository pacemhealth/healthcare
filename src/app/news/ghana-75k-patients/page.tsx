import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { Card, CardContent } from '../../../components/ui/card';
import { ArrowLeft, Calendar, Share2, Download, Users, MapPin, HeartPulse, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function Ghana75kPatients() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <section className="bg-gray-50 border-b py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-[#4B2991]">Home</Link>
            <span>/</span>
            <Link to="/news" className="hover:text-[#4B2991]">News & Media</Link>
            <span>/</span>
            <span className="text-foreground">Ghana Impact Story</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/news" className="inline-flex items-center text-[#4B2991] hover:underline mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to News
          </Link>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#4B2991] text-white rounded-full text-sm">
              Impact Story
            </span>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>November 22, 2024</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6">
            Mobile Diagnostic Units Reach 75,000 Patients in Rural Ghana
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground mb-8">
            Innovative mobile health program brings quality diagnostic services and clinical training to 120 underserved primary care facilities across Ghana's Northern, Upper East, and Upper West regions
          </p>

          {/* Share Actions */}
          <div className="flex flex-wrap gap-3 pb-8 border-b">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>

          {/* Featured Image */}
          <div className="my-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Healthcare worker providing care in rural Ghana"
              className="w-full h-96 object-cover rounded-lg"
            />
            <p className="text-sm text-muted-foreground mt-3 text-center">
              Mobile diagnostic unit providing services at a community health facility in Northern Ghana
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Tamale, Ghana — Pacem Health's mobile diagnostic program has achieved a significant milestone, providing quality healthcare services to over 75,000 patients across rural Ghana over the past 18 months. The initiative demonstrates how strategic deployment of mobile health units combined with clinical capacity building can dramatically expand access to essential diagnostic and treatment services.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Bridging the Diagnostic Gap</h2>
            <p className="mb-6">
              In many rural areas of Ghana, residents face significant barriers to accessing basic diagnostic services. Patients often must travel hours to regional hospitals for simple laboratory tests or diagnostic imaging, incurring substantial costs and time away from work. Many forego necessary diagnostic workups entirely due to these access challenges.
            </p>

            <p className="mb-6">
              The mobile diagnostic program addresses this gap by bringing comprehensive diagnostic capabilities directly to community-level facilities. Each mobile unit is equipped with point-of-care testing devices, portable ultrasound, basic laboratory equipment, and medical supplies. The units follow structured routes, visiting each facility on a regular schedule to provide both clinical services and technical support.
            </p>

            <div className="bg-gradient-to-br from-[#4B2991]/5 to-[#7C944B]/5 p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">Program Impact by the Numbers</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-[#4B2991]" />
                  </div>
                  <div>
                    <div className="text-3xl mb-1">75,324</div>
                    <p className="text-muted-foreground">Patients received diagnostic services</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#7C944B]" />
                  </div>
                  <div>
                    <div className="text-3xl mb-1">120</div>
                    <p className="text-muted-foreground">Primary care facilities supported</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#4B2991]/10 flex items-center justify-center flex-shrink-0">
                    <HeartPulse className="h-6 w-6 text-[#4B2991]" />
                  </div>
                  <div>
                    <div className="text-3xl mb-1">156,000+</div>
                    <p className="text-muted-foreground">Diagnostic tests performed</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#7C944B]/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-[#7C944B]" />
                  </div>
                  <div>
                    <div className="text-3xl mb-1">340</div>
                    <p className="text-muted-foreground">Healthcare workers trained</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Comprehensive Service Delivery Model</h2>
            <p className="mb-6">
              The program operates through a hub-and-spoke model, with mobile units dispatched from regional hubs in Tamale, Bolgatanga, and Wa. Each unit is staffed by a trained medical technologist and driver, with visiting clinicians joining for specific service delivery days.
            </p>

            <p className="mb-6">
              Services provided include malaria rapid testing and microscopy, blood glucose monitoring for diabetes screening and management, hemoglobin testing for anemia detection, pregnancy testing and basic prenatal screening, portable ultrasound for obstetric and abdominal imaging, urinalysis and basic chemistry panels, and rapid HIV testing with linkage to treatment services.
            </p>

            <p className="mb-6">
              Beyond direct service delivery, the mobile units serve as platforms for clinical training and quality improvement. During each facility visit, the mobile team works alongside local healthcare workers, providing hands-on training in proper testing procedures, quality control practices, result interpretation, and equipment maintenance.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Patient Stories: Real Impact on Real Lives</h2>
            <p className="mb-6">
              At the Kumbungu Community Health Planning and Services compound, 34-year-old Mary Alhassan learned she had severe anemia during a routine visit. "I was always tired and weak, but I thought it was just from working in the fields," she explains. "The mobile clinic team tested my blood and found the problem. They connected me with treatment and taught the nurses how to monitor my condition. Now I have energy to care for my children and work my farm."
            </p>

            <p className="mb-6">
              In Bawku, the mobile ultrasound service identified a high-risk pregnancy that required specialized care. The early detection allowed for timely referral to the regional hospital, resulting in a successful delivery that might have ended tragically without diagnostic intervention.
            </p>

            <div className="bg-[#4B2991] text-white p-8 rounded-lg my-10">
              <h3 className="text-2xl mb-4">Healthcare Worker Perspectives</h3>
              <p className="text-white/90 mb-4">
                "Before the mobile diagnostic program, we could only diagnose based on clinical symptoms. Now we can confirm our suspicions with laboratory evidence, leading to better treatment decisions."
              </p>
              <p className="text-white/80 text-sm">
                — Nurse Emmanuel Awuni, Yagaba Health Center, Northern Region
              </p>
              <div className="border-t border-white/20 my-6"></div>
              <p className="text-white/90 mb-4">
                "The training we received from the mobile team has transformed how we work. We now understand proper specimen collection and handling. Our confidence in using point-of-care devices has improved significantly."
              </p>
              <p className="text-white/80 text-sm">
                — Medical Assistant Joyce Abugri, Navrongo Health Center, Upper East Region
              </p>
            </div>

            <h2 className="text-3xl mt-12 mb-6">Capacity Building and Knowledge Transfer</h2>
            <p className="mb-6">
              A core component of the program focuses on building sustainable diagnostic capacity at facility level. Rather than creating dependency on mobile services, the initiative emphasizes skills transfer and systems strengthening.
            </p>

            <p className="mb-6">
              Healthcare workers receive structured training in equipment operation, quality assurance procedures, biosafety and infection prevention, inventory management for diagnostic supplies, result documentation and record keeping, and patient counseling and result communication.
            </p>

            <p className="mb-6">
              Selected facilities have received donated point-of-care testing equipment, enabling them to continue providing basic diagnostic services between mobile unit visits. The mobile team provides ongoing mentorship and quality oversight for these sites.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Data-Driven Service Optimization</h2>
            <p className="mb-6">
              The program utilizes Pacem Health's digital fleet management platform to optimize routes, track service delivery metrics, and monitor equipment performance. Data analytics help identify high-demand locations, adjust visit frequency based on patient volumes, and allocate resources efficiently.
            </p>

            <p className="mb-6">
              Regular analysis of diagnostic test results provides valuable epidemiological intelligence. Program data has revealed higher-than-expected diabetes prevalence in certain communities, prompting targeted screening and prevention initiatives. Anemia screening results have informed nutrition programs and micronutrient supplementation strategies.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Partnership and Sustainability</h2>
            <p className="mb-6">
              The mobile diagnostic program operates through a collaborative partnership involving the Ghana Health Service, regional health directorates, district health management teams, and community health committees. This multi-stakeholder approach ensures alignment with national health priorities and facilitates integration with existing health programs.
            </p>

            <p className="mb-6">
              Financial sustainability is addressed through a hybrid funding model. Core operational costs are supported through a partnership with an international development foundation, while facilities contribute modest user fees for certain diagnostic services. These revenues help cover consumables and create a pathway toward eventual self-sustainability.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Scaling Impact: Lessons and Next Steps</h2>
            <p className="mb-6">
              The program's success in Ghana has generated interest from health authorities in neighboring countries. Key lessons learned include the importance of regular scheduling and route adherence to build community trust, integration of service delivery with capacity building for sustainability, robust supply chain management to prevent stockouts of diagnostic supplies, strong partnership with facility staff rather than parallel service delivery, and data systems that enable continuous quality improvement.
            </p>

            <p className="mb-6">
              Building on demonstrated impact, Pacem Health is working with partners to expand the program to additional regions in Ghana and pilot similar initiatives in Burkina Faso and northern Togo. The expansion will incorporate program refinements based on operational experience and stakeholder feedback.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Advancing Health Equity Through Innovation</h2>
            <p className="mb-6">
              The mobile diagnostic program demonstrates how thoughtful deployment of technology and training can advance health equity. By bringing services to communities rather than requiring communities to travel to services, the program removes access barriers that disproportionately affect rural and low-income populations.
            </p>

            <p className="mb-6">
              As Ghana continues working toward universal health coverage, innovations that extend quality services to underserved areas will be essential. The mobile diagnostic model provides a scalable, sustainable approach to expanding diagnostic capacity and improving health outcomes across the country's most vulnerable communities.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl mb-4">Media Contact</h3>
            <div className="text-muted-foreground">
              <p className="mb-2">For more information about this program:</p>
              <p>Pacem Health Communications</p>
              <p>Email: <a href="mailto:media@pacemhealth.com" className="text-[#4B2991] hover:underline">media@pacemhealth.com</a></p>
              <p>Phone: +1 (202) 555-0100</p>
            </div>
          </div>

          {/* Related News */}
          <div className="mt-16 pt-8 border-t">
            <h3 className="text-2xl mb-6">Related News</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/news/kenya-moh-partnership">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-xs text-[#4B2991] mb-2 block uppercase tracking-wide">Partnership</span>
                    <h4 className="text-lg mb-2">New MOU with Ministry of Health, Kenya</h4>
                    <p className="text-sm text-muted-foreground">Strategic partnership to strengthen health infrastructure</p>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/news/digital-fleet-platform">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <span className="text-xs text-[#7C944B] mb-2 block uppercase tracking-wide">Product Launch</span>
                    <h4 className="text-lg mb-2">Digital Fleet Management Platform</h4>
                    <p className="text-sm text-muted-foreground">New cloud-based solution for real-time tracking and analytics</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link to="/news">
              <Button className="bg-[#4B2991] hover:bg-[#3d1e7d]">
                View All News
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
