import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { 
  ArrowRight, 
  CheckCircle, 
  Target, 
  Lightbulb, 
  Users, 
  TrendingUp,
  ClipboardCheck,
  Rocket,
  RefreshCw,
  Shield,
  Heart,
  Eye,
  Scale,
  Award,
  Handshake
} from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { SEOHead } from '../../components/SEOHead';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import heroImage from 'figma:asset/b16bc62bd34bbe2f2dde2aa4117b90b70a36e801.png';

export default function OurApproachPage() {
  const approachSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pacem Health Integrated Approach",
    "description": "Strategy and implementation seamlessly integrated for comprehensive health systems solutions across Africa",
    "provider": {
      "@type": "Organization",
      "name": "Pacem Health Inc."
    }
  };

  return (
    <div className="flex flex-col">
      <SEOHead
        title="Our Approach | Strategy + Implementation Integrated | Pacem Health"
        description="Pacem Health combines strategic vision with operational excellence, delivering comprehensive health systems solutions from initial assessment through long-term implementation and continuous improvement across Africa."
        keywords={[
          'healthcare strategy Africa',
          'health systems implementation',
          'integrated healthcare solutions',
          'strategic assessment',
          'transformation strategy',
          'implementation planning',
          'continuous improvement healthcare',
          'health systems strengthening'
        ]}
        structuredData={approachSchema}
      />
      
      {/* Hero Section */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImage}
            alt="Strategic healthcare planning and implementation collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Our Approach
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-6 leading-relaxed">
              Strategy and Implementation, Seamlessly Integrated
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Most organizations face a choice: hire consultants who develop strategies without implementation capacity, or work with vendors who deliver products without strategic vision. Pacem Health offers a third way. We combine deep strategic expertise with proven implementation capabilities, delivering comprehensive health systems solutions from initial assessment through long-term partnership.
            </p>
          </div>
        </div>
      </section>

      {/* The Pacem Difference */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              The Pacem Difference
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Beyond Consulting. Beyond Distribution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* The Problem */}
            <div>
              <h3 className="text-2xl mb-6">The Problem with Traditional Approaches</h3>
              
              <Card className="mb-6 border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <h4 className="text-lg mb-3">Pure Consultants</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Develop impressive strategies and reports</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Limited implementation capacity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Leave after strategy delivery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Strategies often fail due to implementation gaps</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-red-500">
                <CardContent className="p-6">
                  <h4 className="text-lg mb-3">Pure Distributors</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Deliver products efficiently</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Limited strategic vision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Focus on transactions, not transformation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Miss opportunities for systemic impact</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* The Solution */}
            <div>
              <h3 className="text-2xl mb-6">The Pacem Solution</h3>
              
              <Card className="bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white">
                <CardContent className="p-6">
                  <h4 className="text-lg mb-4">Integrated Strategy + Implementation</h4>
                  <p className="mb-4 text-white/90 text-sm">
                    Pacem Health bridges the gap between strategy and execution. Every engagement combines:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="mb-1">Strategic Assessment</p>
                        <p className="text-xs text-white/80">Understanding context, challenges, and opportunities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="mb-1">Transformation Strategy</p>
                        <p className="text-xs text-white/80">Evidence-based roadmaps aligned with national priorities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="mb-1">Implementation Planning</p>
                        <p className="text-xs text-white/80">Detailed, actionable plans with clear milestones</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="mb-1">Service Delivery</p>
                        <p className="text-xs text-white/80">Executing through our 9 comprehensive services</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="mb-1">Continuous Improvement</p>
                        <p className="text-xs text-white/80">Monitoring, learning, and adapting for sustained impact</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-sm">
                      <strong>The Result:</strong> Strategies that get implemented. Implementation that achieves strategic goals. Health systems that strengthen and sustain.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Five-Phase Methodology */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Five-Phase Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive approach from assessment to sustained impact
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {/* Phase 1 */}
            <AccordionItem value="phase-1" className="bg-white border rounded-lg">
              <AccordionTrigger className="px-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="text-left">
                    <h3 className="text-xl">Phase 1: Strategic Assessment</h3>
                    <p className="text-sm text-muted-foreground">Understanding Before Action</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="mb-4 text-muted-foreground">
                  Every engagement begins with comprehensive assessment to understand the current state, identify challenges and opportunities, and establish a baseline for measuring impact.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Health System Analysis</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Epidemiological analysis</li>
                        <li>• Infrastructure assessment</li>
                        <li>• Workforce capacity review</li>
                        <li>• Supply chain evaluation</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Stakeholder Engagement</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Ministry of Health consultations</li>
                        <li>• Development partner meetings</li>
                        <li>• Healthcare provider visits</li>
                        <li>• Community engagement</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Gap Analysis</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Current vs. desired outcomes</li>
                        <li>• Resource availability</li>
                        <li>• Policy frameworks</li>
                        <li>• International standards</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm">
                    <strong>Deliverable:</strong> Comprehensive assessment report with evidence-based findings and prioritized recommendations
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Phase 2 */}
            <AccordionItem value="phase-2" className="bg-white border rounded-lg">
              <AccordionTrigger className="px-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="text-left">
                    <h3 className="text-xl">Phase 2: Transformation Strategy</h3>
                    <p className="text-sm text-muted-foreground">From Vision to Roadmap</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="mb-4 text-muted-foreground">
                  Based on assessment findings, we work with you to develop comprehensive transformation strategies that align with national health priorities, available resources, and implementation realities.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Vision & Goals Setting</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Define long-term transformation vision</li>
                        <li>• Establish SMART objectives</li>
                        <li>• Identify key performance indicators</li>
                        <li>• Develop theory of change</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Multi-Year Roadmap</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Phased implementation plan</li>
                        <li>• Resource requirements</li>
                        <li>• Risk assessment and mitigation</li>
                        <li>• Governance mechanisms</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Stakeholder Alignment</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Build consensus among partners</li>
                        <li>• Define roles and responsibilities</li>
                        <li>• Establish coordination structures</li>
                        <li>• Secure commitments</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Policy Framework</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Identify required reforms</li>
                        <li>• Develop regulatory frameworks</li>
                        <li>• Design monitoring mechanisms</li>
                        <li>• Build political support</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm">
                    <strong>Deliverable:</strong> Multi-year transformation strategy with detailed roadmap, resource requirements, and governance framework
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Phase 3 */}
            <AccordionItem value="phase-3" className="bg-white border rounded-lg">
              <AccordionTrigger className="px-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="text-left">
                    <h3 className="text-xl">Phase 3: Implementation Planning</h3>
                    <p className="text-sm text-muted-foreground">From Strategy to Action</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="mb-4 text-muted-foreground">
                  We translate high-level strategies into detailed, actionable implementation plans with clear responsibilities, timelines, and resource allocations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Detailed Work Planning</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Break down strategic objectives</li>
                        <li>• Define deliverables and timelines</li>
                        <li>• Assign responsibilities</li>
                        <li>• Develop detailed budgets</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Partnership Strategy</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Identify required partners</li>
                        <li>• Develop procurement strategies</li>
                        <li>• Establish partnership agreements</li>
                        <li>• Build oversight systems</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Capacity Building</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Assess capacity gaps</li>
                        <li>• Design training programs</li>
                        <li>• Develop sustainability plans</li>
                        <li>• Establish mentorship systems</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">M&E Framework</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Define indicators and data sources</li>
                        <li>• Establish baseline measurements</li>
                        <li>• Design monitoring systems</li>
                        <li>• Build evaluation plans</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm">
                    <strong>Deliverable:</strong> Detailed implementation plan with work plans, budgets, partnerships, capacity building, and M&E framework
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Phase 4 */}
            <AccordionItem value="phase-4" className="bg-white border rounded-lg">
              <AccordionTrigger className="px-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="text-left">
                    <h3 className="text-xl">Phase 4: Service Delivery</h3>
                    <p className="text-sm text-muted-foreground">Execution Through Comprehensive Services</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="mb-4 text-muted-foreground">
                  We execute implementation plans through our 9 comprehensive services, providing end-to-end solutions across the health system value chain.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <Card className="border-l-4 border-l-[#00A0DC]">
                    <CardContent className="p-4">
                      <h4 className="mb-2">Procurement & Sourcing</h4>
                      <p className="text-sm text-muted-foreground">
                        Strategic sourcing from WHO-prequalified manufacturers with transparent pricing and quality assurance
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-[#00A0DC]">
                    <CardContent className="p-4">
                      <h4 className="mb-2">Supply Chain & Logistics</h4>
                      <p className="text-sm text-muted-foreground">
                        End-to-end supply chain management including warehousing, cold chain, and distribution
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-[#00A0DC]">
                    <CardContent className="p-4">
                      <h4 className="mb-2">Infrastructure & Planning</h4>
                      <p className="text-sm text-muted-foreground">
                        Healthcare facility design, construction management, and equipment installation
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-[#00A0DC]">
                    <CardContent className="p-4">
                      <h4 className="mb-2">Quality Assurance</h4>
                      <p className="text-sm text-muted-foreground">
                        Triple verification quality systems with independent laboratory testing
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-[#00A0DC]">
                    <CardContent className="p-4">
                      <h4 className="mb-2">Wholesale Distribution</h4>
                      <p className="text-sm text-muted-foreground">
                        GDP-compliant pharmaceutical distribution to healthcare facilities across Africa
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-[#00A0DC]">
                    <CardContent className="p-4">
                      <h4 className="mb-2">Regulatory Services</h4>
                      <p className="text-sm text-muted-foreground">
                        Product registration, compliance, and pharmacovigilance across African markets
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-[#00A0DC]">
                    <CardContent className="p-4">
                      <h4 className="mb-2">Medical Services</h4>
                      <p className="text-sm text-muted-foreground">
                        Clinical advisory, medical education, and healthcare provider support
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-[#00A0DC]">
                    <CardContent className="p-4">
                      <h4 className="mb-2">Compliance & Training</h4>
                      <p className="text-sm text-muted-foreground">
                        GDP compliance programs, quality management systems, and workforce development
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-l-4 border-l-[#00A0DC]">
                    <CardContent className="p-4">
                      <h4 className="mb-2">Market Access Services</h4>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive market entry support for international manufacturers
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm">
                    <strong>Integrated Service Delivery:</strong> Our services work together seamlessly to create comprehensive solutions that address entire health system challenges
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Phase 5 */}
            <AccordionItem value="phase-5" className="bg-white border rounded-lg">
              <AccordionTrigger className="px-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="text-left">
                    <h3 className="text-xl">Phase 5: Continuous Improvement</h3>
                    <p className="text-sm text-muted-foreground">Learning, Adapting, Sustaining</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="mb-4 text-muted-foreground">
                  We don't disappear after implementation. We establish systems for continuous monitoring, learning, and improvement to ensure sustained impact and adaptive management.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Performance Monitoring</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Regular data collection and analysis</li>
                        <li>• Dashboard development</li>
                        <li>• Progress reports for stakeholders</li>
                        <li>• Early warning systems</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Learning & Adaptation</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Regular stakeholder reviews</li>
                        <li>• Root cause analysis</li>
                        <li>• Adaptive management</li>
                        <li>• Best practices documentation</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Capacity Building</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Ongoing training and support</li>
                        <li>• Mentorship for local teams</li>
                        <li>• Knowledge management systems</li>
                        <li>• Transition planning</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="mb-2">Sustainability Planning</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Transition to domestic financing</li>
                        <li>• Local capacity development</li>
                        <li>• Institutional strengthening</li>
                        <li>• Long-term partnerships</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm">
                    <strong>Deliverable:</strong> Sustained health system improvements with local ownership, continuous learning, and adaptive management
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* What Makes Our Approach Unique */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              What Makes Our Approach Unique
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Five key differentiators that set Pacem Health apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-[#0033A0]">
              <CardContent className="p-6">
                <div className="bg-[#0033A0]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-[#0033A0]" />
                </div>
                <h3 className="text-xl mb-3">Strategic Vision Grounded in Reality</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Our strategists have deep implementation experience. We design strategies we know how to execute, ensuring feasibility and sustainability.
                </p>
                <p className="text-sm">
                  This ensures strategies that actually get implemented and deliver measurable results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#0033A0]">
              <CardContent className="p-6">
                <div className="bg-[#0033A0]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[#0033A0]" />
                </div>
                <h3 className="text-xl mb-3">Implementation Guided by Strategy</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Every implementation decision is guided by strategic objectives. We continuously ask "How does this advance health system goals?"
                </p>
                <p className="text-sm">
                  The outcome: tactical execution that advances strategic transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#0033A0]">
              <CardContent className="p-6">
                <div className="bg-[#0033A0]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[#0033A0]" />
                </div>
                <h3 className="text-xl mb-3">Comprehensive Capabilities</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Nine integrated services covering the entire health system value chain, from strategy through sustained implementation.
                </p>
                <p className="text-sm">
                  This delivers seamless coordination, single-point accountability, and comprehensive solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#0033A0]">
              <CardContent className="p-6">
                <div className="bg-[#0033A0]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-[#0033A0]" />
                </div>
                <h3 className="text-xl mb-3">Local Presence, International Standards</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Offices in Kenya and Ghana with African teams, combined with international best practices and quality standards.
                </p>
                <p className="text-sm">
                  We deliver solutions that work in African contexts while meeting global quality benchmarks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-[#0033A0]">
              <CardContent className="p-6">
                <div className="bg-[#0033A0]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-[#0033A0]" />
                </div>
                <h3 className="text-xl mb-3">Long-Term Partnership</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Multi-year partnerships with continuous support, capacity building, and adaptive management—not one-time transactions.
                </p>
                <p className="text-sm">
                  This approach ensures sustained health system strengthening and lasting impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0033A0] to-[#00A0DC] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Six core principles that guide every decision and action
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <ClipboardCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Evidence-Based Decision Making</h3>
              <p className="text-sm text-white/90">
                We ground all strategies and decisions in rigorous data analysis, international best practices, and local evidence.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Local Ownership & Sustainability</h3>
              <p className="text-sm text-white/90">
                We design solutions that can be sustained by local teams with domestic resources, building capacity not dependency.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Health Equity & Access</h3>
              <p className="text-sm text-white/90">
                We prioritize solutions that expand access to quality healthcare for underserved populations and reduce health disparities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Quality & Patient Safety</h3>
              <p className="text-sm text-white/90">
                We never compromise on quality or patient safety. Every product, service, and system meets international standards.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Transparency & Accountability</h3>
              <p className="text-sm text-white/90">
                We operate with full transparency in pricing, partnerships, and performance, holding ourselves accountable to measurable results.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Handshake className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl mb-3">Collaboration & Partnership</h3>
              <p className="text-sm text-white/90">
                We believe in working with governments, donors, NGOs, and private sector to achieve shared health goals together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">
              Who We Partner With
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trusted by governments, development partners, NGOs, and healthcare providers across Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Ministries of Health</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We partner with Ministries of Health across Africa to strengthen national health systems and achieve universal health coverage goals.
                </p>
                <Link to="/services" className="text-sm text-[#0033A0] hover:text-[#00A0DC] inline-flex items-center gap-2">
                  Explore Government Partnerships
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Development Partners & Donors</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We work with World Bank, AfDB, USAID, PEPFAR, GAVI, and Global Fund to design and implement programs that deliver measurable impact.
                </p>
                <Link to="/services" className="text-sm text-[#0033A0] hover:text-[#00A0DC] inline-flex items-center gap-2">
                  Explore Development Partnerships
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">NGOs & Faith-Based Organizations</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We support NGOs and faith-based organizations implementing health programs with procurement, logistics, and technical assistance.
                </p>
                <Link to="/services" className="text-sm text-[#0033A0] hover:text-[#00A0DC] inline-flex items-center gap-2">
                  Explore NGO Partnerships
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">Private Healthcare Networks</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We partner with private hospitals, clinics, and pharmacy chains to strengthen pharmaceutical supply chains and service delivery.
                </p>
                <Link to="/services/wholesale-distribution" className="text-sm text-[#0033A0] hover:text-[#00A0DC] inline-flex items-center gap-2">
                  Become a Distribution Partner
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-3">International Manufacturers</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We serve as the African market access partner for pharmaceutical and medical device manufacturers entering African markets.
                </p>
                <Link to="/services/market-access" className="text-sm text-[#0033A0] hover:text-[#00A0DC] inline-flex items-center gap-2">
                  Explore Market Access Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#0033A0] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Ready to Transform Your Health System?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how our integrated approach can help you achieve your health system goals. Whether you're planning national transformation or implementing specific programs, we're ready to partner with you.
          </p>
          <Link to="/support/general-inquiry">
            <Button size="lg" className="bg-[#00A0DC] hover:bg-[#0088BB] text-white">
              Schedule Strategic Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}